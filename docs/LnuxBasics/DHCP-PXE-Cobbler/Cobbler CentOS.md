# Cobbler CentOS 

## Cobbler 简介

Cobbler可以选择帮助管理`DHCP`，`DNS`和`yum软件包镜像`基础结构–在这方面，它是一种更通用的自动化应用程序，而不仅仅是专门处理安装。 还有一个轻量级的内置配置管理系统，以及与Puppet等配置管理系统集成的支持。 Cobbler有一个命令行界面，一个Web界面以及几个API访问选项。 听起来很多，但实际上非常简单。 

官方站点: https://cobbler.github.io/

## Cobbler 部署

为了方便起见, 建议关闭防火墙和SElinux(临时): 

```bash
systemctl stop firewalld
setenforce 0
```

添加`epel`源并安装Cobbler及PXE相关程序包

```bash
yum install epel-release -y
yum install cobbler dhcp tftp tftp-server pykickstart httpd
```

## 简单配置与使用

### 修改相关配置

1. 修改 Cobbler 的配置文件`/etc/cobbler/settings`, 选项和功能非常多, 但实际环境用到的并不多.

主要修改内容有:

```bash
...
server: 192.168.99.99		# 这里改为当前主机IP
next_server: 192.168.99.99		# 这里改为当前主机IP
# 使用openssl来加密默认密码
# openssl passwd -1 -salt 'X5xfd' 'suofeiya' 或者 openssl passwd -1
default_password_crypted: "$1$X5xfd$VYYI6S7K6NiGJCq1ywt6x."

# 是否开启管理dhcp服务
manage_dhcp: 1		# 1表示开启,如果想单独管理dhcp的话,可以将其关闭,设置为0即可
...
```

如果在`settings`配置文件中开启了`manage_dhcp`的话, 需要修改 DHCP 的模板文件, 即`/etc/cobbler/dhcp.template`

```bash
# 只需将以下配置块稍作修改即可
subnet 192.168.1.0 netmask 255.255.255.0 {
     option routers             192.168.99.1;
     option subnet-mask         255.255.255.0;
     filename                   "/pxelinux.0";
     default-lease-time         2.8.0;
     max-lease-time             43200;
     next-server                $next_server;
}
```

如果不想让 Cobbler 管理 DHCP 的话, 可以直接编辑`/etc/dhcp/dhcpd.conf`文件也可以.

示例`dhcpd.conf`文件:

```bash
# option definitions common to all supported networks...
# 全局配置
option domain-name "agou-ops.com";
option domain-name-servers 192.168.159.2;		# 指定默认DNS服务器
option routers 192.168.99.1;		# 指定默认路由

default-lease-time 43200;
max-lease-time 86400;
log-facility local7;
# 子网配置
subnet 192.168.0.0 netmask 255.255.0.0 {
    range 192.168.99.101 192.168.99.120;
    filename "pxelinux.0";
    next-server 192.168.99.99;
}
# 为特定主机分配固定IP地址
host apex {
   hardware ethernet 00:0c:29:b8:73:9e;
   fixed-address 192.168.99.99;
}
```

3. 启动相关服务:

```bash
systemctl start httpd rsyncd tftp cobblerd
```

4. 使用`cobbler check`命令来检查配置文件等相关信息

```bash
The following are potential configuration items that you may want to fix:

1 : change 'disable' to 'no' in /etc/xinetd.d/tftp
2 : Some network boot-loaders are missing from /var/lib/cobbler/loaders, you may run 'cobbler get-loaders' to download them, or, if you only want to handle x86/x86_64 netbooting, you may ensure that you have installed a *recent* version of the syslinux package installed and can ignore this message entirely.  Files in this directory, should you want to support all architectures, should include pxelinux.0, menu.c32, elilo.efi, and yaboot. The 'cobbler get-loaders' command is the easiest way to resolve these requirements.
3 : enable and start rsyncd.service with systemctl
4 : debmirror package is not installed, it will be required to manage debian deployments and repositories
5 : ksvalidator was not found, install pykickstart
6 : fencing tools were not found, and are required to use the (optional) power management features. install cman or fence-agents to use them

Restart cobblerd and then run 'cobbler sync' to apply changes.
```

修复1,2,5即可,其他均可忽略

5. 挂载光盘镜像文件:

```bash
mount -t iso9660 -o loop,ro /dev/cdrom /mnt/centos7/
```

6. 导入镜像到 Cobbler

```bash
[root@node02 ~]\#  cobbler import --name=CentOS-7-Minimal-1908 --arch=x86_64 --path=/mnt/centos7
task started: 2020-04-21_021858_import
task started (id=Media import, time=Tue Apr 21 02:18:58 2020)
Found a candidate signature: breed=redhat, version=rhel6
Found a candidate signature: breed=redhat, version=rhel7
Found a matching signature: breed=redhat, version=rhel7
Adding distros from path /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64:
creating new distro: CentOS-7-Minimal-1908-x86_64
trying symlink: /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64 -> /var/www/cobbler/links/CentOS-7-Minimal-1908-x86_64
creating new profile: CentOS-7-Minimal-1908-x86_64
associating repos
checking for rsync repo(s)
checking for rhn repo(s)
checking for yum repo(s)
starting descent into /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64 for CentOS-7-Minimal-1908-x86_64
processing repo at : /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64
need to process repo/comps: /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64
looking for /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/repodata/*comps*.xml
Keeping repodata as-is :/var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/repodata
*** TASK COMPLETE ***
```

7. 执行`cobbler sync`同步配置
8. 使用`cobbler list`查看相关信息

```bash
$ cobbler list
distros:
   CentOS-7-Minimal-1908-x86_64			# 相当于ISO镜像

profiles:
   CentOS-7-Minimal-1908-x86_64			# 相当于kickstart文件,如果不想用自动生成的kickstart文件,可以自行设置
...
# 或者单独查看
$ cobbler distro list
$ cobbler profile list
```

查看详细状态:

```bash
[root@node02 conf.d]\# cobbler distro report --name=CentOS-7-Minimal-1908-x86_64
Name                           : CentOS-7-Minimal-1908-x86_64
Architecture                   : x86_64
TFTP Boot Files                : {}
Breed                          : redhat
Comment                        :
Fetchable Files                : {}
Initrd                         : /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/images/pxeboot/initrd.img
Kernel                         : /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/images/pxeboot/vmlinuz
Kernel Options                 : {}
Kernel Options (Post Install)  : {}
Kickstart Metadata             : {'tree': 'http://@@http_server@@/cblr/links/CentOS-7-Minimal-1908-x86_64'}
Management Classes             : []
OS Version                     : rhel7
Owners                         : ['admin']
Red Hat Management Key         : <<inherit>>
Red Hat Management Server      : <<inherit>>
Template Files                 : {}
```

示例ks文件:

```bash
auth --useshadow  --enablemd5
install
text
firewall --enabled
firstboot --disable
ignoredisk --only-use=sda
keyboard --vckeymap=us --xlayouts=''
lang en_US.UTF-8
network  --bootproto=dhcp --device=eth0 --activate
network  --hostname=localhost.localdomain
reboot
repo --name="source-1" --baseurl=http://192.168.99.99/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64

url --url="http://192.168.99.99/cblr/links/CentOS-7-Minimal-1908-x86_64"
rootpw --iscrypted $1$X5xfd$VYYI6S7K6NiGJCq1ywt6x.
selinux --disabled
services --enabled="chronyd"
skipx
timezone Asia/Shanghai

bootloader --append=" crashkernel=auto" --location=mbr --boot-drive=sda
autopart --type=lvm

zerombr

clearpart --all --initlabel

%pre
set -x -v
exec 1>/tmp/ks-pre.log 2>&1

while : ; do
    sleep 10
    if [ -d /mnt/sysimage/root ]; then
        cp /tmp/ks-pre.log /mnt/sysimage/root/
        logger "Copied %pre section log to system"
        break
    fi
done &

curl "http://192.168.99.99/cblr/svc/op/trig/mode/pre/profile/CentOS-7-Minimal-1908-x86_64" -o /dev/null

%end

%post --nochroot
set -x -v
exec 1>/mnt/sysimage/root/ks-post-nochroot.log 2>&1

%end

%post
set -x -v
exec 1>/root/ks-post.log 2>&1
curl "http://192.168.99.99/cblr/svc/op/yum/profile/CentOS-7-Minimal-1908-x86_64" --output /etc/yum.repos.d/cobbler-config.repo

echo "export COBBLER_SERVER=192.168.99.99" > /etc/profile.d/cobbler.sh
echo "setenv COBBLER_SERVER 192.168.99.99" > /etc/profile.d/cobbler.csh

curl "http://192.168.99.99/cblr/svc/op/ks/profile/CentOS-7-Minimal-1908-x86_64" -o /root/cobbler.ks
curl "http://192.168.99.99/cblr/svc/op/trig/mode/post/profile/CentOS-7-Minimal-1908-x86_64" -o /dev/null

%end

%packages
chrony
kexec-tools

%end

%addon com_redhat_kdump --enable --reserve-mb='auto'

%end

```

## cobbler-web 图形化工具

```bash
yum install cobbler-web -y
```

cobbler-web 支持多种认证方式, 默认的是`configfile`模块认证, 这种方式的认证可以直接使用`htdigest`命令添加`cobbler`用户和密码, 其认证方式相关设置在`/etc/cobbler/modules.conf`

```bash
[root@node02 ~]\# htdigest -c /etc/cobbler/user.digest Cobbler admin
Adding password for admin in realm Cobbler.
New password:
Re-type new password:
```

注意: Cobbler-web 默认是开启 SSL 的, 所以要通过`https://YOUR_IP/cobbler-web`来访问.

## 参考链接

* Quick Start: https://cobbler.github.io/quickstart/
* Cobbler: https://cobbler.readthedocs.io/en/release28/about.html
* Cobbler WEB : https://cobbler.readthedocs.io/en/release28/web-interface.html

 