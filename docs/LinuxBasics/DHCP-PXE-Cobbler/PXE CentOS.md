# PXE CentOS 

## PXE 无人值守安装CentOS 7

### 相关环境信息

主机`iptables`,`firewalld`和`SElinux`均为关闭状态

- DHCP 服务器

  为客户端提供必要的网络信息，如IP、netmask、gateway、dns等，并向客户端提供引导文件(pxelinux.0)的位置`(filename)`及TFTP服务器地址`(next-server)`等。

- TFTP 服务器

  主要为客户端提供内核文件和引导文件。

- FTP 服务器(或者HTTP服务器都可)

  为客户端提供 `kickstart` 自动化响应安装文件和系统镜像文件(YUM仓库)。

### DHCP 服务器

修改`/etc/dhcp/dhcpd.conf`配置文件

```bash
cat >> /etc/dhcp/dhcpd.conf << EOF
> #DHCP configuration for PXE boot server
> ddns-update-style interim;
> ignore client-updates;
> authoritative;
> allow booting;
> allow bootp;
> allow unknown-clients;
>
> subnet 192.168.99.0
> netmask 255.255.255.0
> {
> range 192.168.99.100 192.168.99.199;
> option domain-name-servers 192.168.99.2;
> option domain-name "itlab.com";
> option routers 192.168.99.2;
> option broadcast-address 192.168.99.255;
> default-lease-time 600;
> max-lease-time 7200;
> #PXE boot server
> next-server 192.168.99.99;
> filename "pxelinux.0";
> }
> EOF
```

启动并添加dhcp服务:

```bash
systemctl start dhcpd.service && systemctl enable dhcpd.service
```

### HTTP 服务器(或者FTP服务器)

1. 挂载本地光盘镜像,并挂载至http服务器的某个路径

```bash
[root@master /]\# mount -r /dev/cdrom /var/www/html/centos7	# 挂载
[root@master /]\# ls /var/www/html/centos7		# 查看
CentOS_BuildTag  EULA  images    LiveOS    repodata              RPM-GPG-KEY-CentOS-Testing-7
EFI              GPL   isolinux  Packages  RPM-GPG-KEY-CentOS-7  TRANS.TBL
```

2. 添加并修改`kickstart`文件(放置于`/var/www/html/ks/centos7.cfg`)

```bash
# 修改部分内容
...
url --url="http://192.168.99.99/centos7"
...
```

 :information_source: 该文件可以使用`system-config-kickstart`图形化工具来生成.

3. 启动 http 服务器,`systemctl start httpd`

### TFTP 服务器

1. 启动 TFTP SERVER (该服务默认监听在`udp`的`69`号端口)

```bash
systemctl start tftp.socket
```

2. 编辑`/etc/xinetd.d/tftp`文件

```bash
service tftp
{
        socket_type             = dgram
        protocol                = udp
        wait                    = yes
        user                    = root
        server                  = /usr/sbin/in.tftpd
        server_args             = -s /var/lib/tftpboot
        disable                 = no			# 改为no
        per_source              = 11
        cps                     = 100 2
        flags                   = IPv4
}
```

`systemctl restart xinetd.service `

或者:

```bash
systemctl start tftp.socket && systemctl enable tftp.socket
```

2. 安装`syslinux`程序包

```bash
yum install -y syslinux
```

4. 将所需文件放置在 tftp 根目录(`/var/lib/tftpboot/`)

```bash
cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/	# 复制引导文件
cp /usr/share/syslinux/{chain.c32,menu.c32,mboot.c32} /var/lib/tftpboot/		# 使用menu.c32界面

mkdir -p /var/lib/tftpboot/networkboot/centos7
cp /var/www/html/centos7/images/pxeboot/{vmlinuz,initrd.img} /var/lib/tftpboot/networkboot/centos7	# 复制驱动文件
mkdir /var/lib/tftpboot/pxelinux.cfg

# cp -rf /var/www/html/centos7/isolinux/* /var/lib/tftpboot/
# 也可以直接修改原版镜像当中的菜单界面
# mv /var/lib/tftpboot/isolinux.cfg /var/lib/tftpboot/pxelinux.cfg/default
```

`/var/lib/tftpboot/pxelinux.cfg/default`文件内容如下所示:

```bash
[root@master ~]\# cat >> /var/lib/tftpboot/pxelinux.cfg/default << EOF
default menu.c32
prompt 0
timeout 30

menu title AGou's PXE Menu
label Install CentOS 7
kernel /networkboot/centos7/vmlinuz
append initrd=/networkboot/centos7/initrd.img inst.repo=http://192.168.99.99/centos7 inst.ks=http://192.168.99.99/ks/centos7.cfg
```

## PXE 无人值守安装CentOS 6

安装步骤大致与安装CentOS 7 相同,不同之处在于:

```bash
 cp -rf /var/www/html/centos6/isolinux/* /var/lib/tftpboot/
```

