# KVM Basic 

# KVM

## KVM 简介

KVM (全称是 Kernel-based Virtual Machine) 是 Linux 下 x86 硬件平台上的全功能虚拟化解决方案，包含一个可加载的内核模块 kvm.ko 提供和虚拟化核心架构和处理器规范模块。

使用 KVM 可允许多个包括 Linux 和 Windows 每个虚拟机有私有的硬件，包括网卡、磁盘以及图形适配卡等。

>虚拟化是云计算的基础。简单的说，虚拟化使得在一台物理的服务器上可以跑多台虚拟机，虚拟机共享物理机的 CPU、内存、IO 硬件资源，但逻辑上虚拟机之间是相互隔离的。
> 物理机我们一般称为宿主机（Host），宿主机上面的虚拟机称为客户机（Guest）

**KVM工作原理**：用户模式的QEMU通过ioctl进入内核模式，kvm模块为虚拟机创建虚拟内存，虚拟CPU后执行VMLAUCH指令进入客户模式。加载Guest OS并执行。如果Guest OS发生外部中断或者影子页表却也之类的情况，会暂停Guest OS的执行，退出客户模式进行异常处理，执行客户代码。如果发生I/O事件或者信号队列有信号到达，就会进入用户模式处理。

![](https://img2018.cnblogs.com/blog/1630703/201910/1630703-20191007235241385-873683991.png "kvm原理")

KVM 由处于内核态的 KVM 模块和用户态的 QEMU 两部分构成。内核模块实现了 CPU 和内存虚拟化等决定关键性能和核心安全的功能并向用户空间提供了使用这些功能的接口，QEMU 利用 KVM 模块提供的接口来实现设备模拟、 IO 虚拟化和网络虚拟化等。单个虚拟机是宿主机上的一个普通 QEMU 进程，虚拟机中的 CPU 核（vCPU）是 QEMU 的一个线程，VM 的物理地址空间是 QEMU 的虚拟地址空间

 

因此在虚拟机运行时，有三种模式：

客户模式：执行非I/O的客户代码，虚拟机运行在这个模式下。

用户模式：代表用户执行I/O指令，QEMU运行在这个模式下。

内核模式：实现客户模式的切换，处理因为I/O或者其他指令引起的从客户模式退出（VM_EXIT）。kvm模块运行在这个模式下。

kvm模型中，每一个Guest OS都是作为一个标准的Linux进程，都可以使用Linux进程管理命令管理。

## kvm 环境配置与安装

1. 首先检查主机是否支持虚拟化：

```bash
egrep -o 'vmx|svm' /proc/cpuinfo
```

2. 为了方便起见，关闭防火墙和`SElinux`：

```bash
systemctl stop firewalld
systemctl disable firewalld
setenforce 0
sed -ri 's/^(SELINUX=).*/\1disabled/g' /etc/selinux/config
```

3. 安装必要工具：

```bash
yum -y install epel-release vim wget net-tools unzip zip gcc gcc-c++ bridge-utils
```

4. 安装 kvm：

```bash
yum -y install kvm qemu-kvm qemu-kvm-tools qemu-img virt-manager libvirt libvirt-python libvirt-client virt-install virt-viewer bridge-utils libguestfs-tools python-virtinst
```

5. 设置`libvirtd`为开机自启项：

```bash
systemctl enable libvirtd
# 重启主机
reboot
```

重启之后检查是否加载`kvm`模块：

```bash
[root@kvm ~]\# lsmod | grep kvm
kvm_intel             188688  0 
kvm                   636965  1 kvm_intel
irqbypass              13503  1 kvm
```

6. 配置 kvm 服务器网络

```bash
cd /etc/sysconfig/network-scripts/
cp ifcfg-ens33 ifcfg-br0

# 编辑 ifcfg-ens33 文件，在原先基础上添加以下内容
NM_CONTROLLED=no
BRIDGE=br0

# 编辑 ifcfg-br0 文件，修改并添加以下内容
TYPE=Bridge
NAME=br0
DEVICE=br0
```

重启网络服务，查看网卡信息：

```bash
[root@kvm network-scripts]\# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast master br0 state UP group default qlen 1000
    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff
3: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff
    inet 172.16.1.140/24 brd 172.16.1.255 scope global noprefixroute br0
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fedb:c408/64 scope link 
       valid_lft forever preferred_lft forever
```

发现`ens33`原来的ip是不显示的，这是因为`br0`网卡占用了，并且此时物理机上的Linux系统的ip是被br0覆盖掉的，原先的ip地址不能再使用了。此时我们看到br0的ip地址就是这台物理机ip地址，这不是虚拟机的地址

![](https://img2018.cnblogs.com/blog/1501874/201902/1501874-20190227234758267-625194066.png "桥接网络模型")

7. 测试验证安装结果：

```bash
virsh -c qemu:///system list
virsh --version
virt-install --version
```

8. 创建软连接：

```bash
ln -s /usr/libexec/qemu-kvm /usr/bin/qemu-kvm
```

9. 查看当前网桥信息：

```bash
[root@kvm ~]\# brctl show
bridge name     bridge id               STP enabled     interfaces
br0             8000.000c29dbc408       no              ens33
virbr0          8000.5254008ad9e8       yes             virbr0-nic
```

由于当前未创建任何虚拟机，所以暂时没有虚拟网卡出现。

## 创建、克隆虚拟机

```bash
virt-install --name=elk01 --memory=2048,maxmemory=3072 --vcpus=2,maxvcpus=2 --os-type=linux --os-variant=rhel6 --location=/data/iso/CentOS-6.10-x86_64-minimal.iso --disk path=/data/elk01.img,size=30 --bridge=br0 --graphics=none --console=pty,target_type=serial --extra-args="console=tty0 console=ttyS0"
```

:warning:注意：镜像文件不要放置于根家目录下，不然会运行失败，显示`Permission Denied`错误

参数说明：

* `--name `指定虚拟机的名称
* `--memory `指定分配给虚拟机的内存资源大小
* `maxmemory `指定可调节的最大内存资源大小，因为KVM支持热调整虚拟机的资源
* `--vcpus `指定分配给虚拟机的CPU核心数量
* `maxvcpus `指定可调节的最大CPU核心数量
* `--os-type` 指定虚拟机安装的操作系统类型
* `--os-variant `指定系统的发行版本
* `--location `指定ISO镜像文件所在的路径，支持使用网络资源路径，也就是说可以使用URL
* `--disk path `指定虚拟硬盘所存放的路径及名称，size 则是指定该硬盘的可用大小，单位是G
* `--bridge `指定使用哪一个桥接网卡，也就是说使用桥接的网络模式
* `--graphics `指定是否开启图形
* `--console `定义终端的属性，target_type 则是定义终端的类型
* `--extra-args `定义终端额外的参数

克隆虚拟机：

```bash
virt-clone -o elk04 -n elk05 -f /data/elk05.img
```

参数说明：

* `-o`后跟旧的系统的名称

* `-n`后跟克隆后的新系统的名称

* `-f`后跟克隆后的系统存放的位置

创建`windows server 2008`：

```bash
virt-install -n windows_vm04 -r 8196 --vcpus=4 --os-type=windows --accelerate -c /data/vpsdata/img/virtio-win.iso --disk path=/data/vpsdata/img/cn_windows_server_2008_r2.iso,device=cdrom --disk path=/data/vpsdata/vps/vm04.img,format=qcow2,bus=virtio --network bridge=br0 --vnc --vncport=5904 --vnclisten=0.0.0.0 --force --autostart
```

创建完成之后，使用`VNC`远程连接软件进行安装.

## 管理虚拟机常用命令

查看虚拟机命令：

```bash
virsh list --all		# 列出所有虚拟机
virsh dominfo elk01		# 显示虚拟机信息
virt-top		# 显示虚拟机内存和cpu使用情况，该工具需要单独安装
virt-df elk01		# 显示虚拟机分区挂载信息
```

管理虚拟机命令：

```bash
virsh console elk01          # 进入指定的虚拟机，进入的时候还需要按一下回车
virsh start elk01          # 启动虚拟机
virsh shutdown elk01          # 关闭虚拟机
virsh destroy elk01          # 强制停止虚拟机
virsh undefine elk01          # 彻底销毁虚拟机，会删除虚拟机配置文件，但不会删除虚拟磁盘
virsh autostart elk01          # 设置宿主机开机时该虚拟机也开机
virsh autostart --disable elk01          # 解除开机启动
virsh suspend elk01         # 挂起虚拟机
virsh resume elk01         # 恢复挂起的虚拟机
```

给虚拟机添加、删除硬盘：

```bash
virsh attach-disk kvm-1 /dev/sdb vbd --driver qemu --mode shareable
virsh detach-disk kvm vdb
```

## 使用 WebVirtMgr 虚拟机管理的 web gui

项目开源地址：https://github.com/retspen/webvirtmgr

1. 安装所需程序包：

```bash
# 首先确保主机有epel仓库，没有则需要先安装
yum install epel-release

yum -y install git python-pip libvirt-python libxml2-python python-websockify supervisor nginx
yum -y install gcc python-devel
pip install numpy
```

2. 安装python依赖并配置`Django`环境

```bash
git clone git://github.com/retspen/webvirtmgr.git
cd webvirtmgr
sudo pip install -r requirements.txt   # or python-pip (RedHat, Fedora, CentOS, OpenSuse)
# 初始化账户
./manage.py syncdb
./manage.py collectstatic
```

3. 配置`nginx`：

```bash
cd ..
sudo mv webvirtmgr /var/www/
```

Add file `webvirtmgr.conf` in `/etc/nginx/conf.d`:

```bash
server {
    listen 80 default_server;

    server_name $hostname;
    #access_log /var/log/nginx/webvirtmgr_access_log; 

    location /static/ {
        root /var/www/webvirtmgr/webvirtmgr; # or /srv instead of /var
        expires max;
    }

    location ~ .*\.(js|css)$ {
           proxy_pass http://127.0.0.1:8000;
    }

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-for $proxy_add_x_forwarded_for;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 600;
        proxy_read_timeout 600;
        proxy_send_timeout 600;
        client_max_body_size 1024M; # Set higher depending on your needs 
    }
}
```

Open nginx.conf out of `/etc/nginx/nginx.conf`:

```bash
# 注释掉以下信息
#    server {
#        listen       80 default_server;
#        server_name  localhost;
#        root         /usr/share/nginx/html;
#
#        #charset koi8-r;
#
#        #access_log  /var/log/nginx/host.access.log  main;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        location / {
#        }
#
#        # redirect server error pages to the static page /40x.html
#        #
#        error_page  404              /404.html;
#        location = /40x.html {
#        }
#
#        # redirect server error pages to the static page /50x.html
#        #
#        error_page   500 502 503 504  /50x.html;
#        location = /50x.html {
#        }
#    }
```

设置完成之后，重启 nginx 服务，`systemctl restart nginx`

4. 配置`Supervisor`：

```bash
# 设置Supervisor开机启动
systemctl enable supervisor

chown -R nginx:nginx /var/www/webvirtmgr
```

Create file `/etc/supervisord.d/webvirtmgr.ini` with following content:

```bash
[program:webvirtmgr]
command=/usr/bin/python /var/www/webvirtmgr/manage.py run_gunicorn -c /var/www/webvirtmgr/conf/gunicorn.conf.py
directory=/var/www/webvirtmgr
autostart=true
autorestart=true
logfile=/var/log/supervisor/webvirtmgr.log
log_stderr=true
user=nginx

[program:webvirtmgr-console]
command=/usr/bin/python /var/www/webvirtmgr/console/webvirtmgr-console
directory=/var/www/webvirtmgr
autostart=true
autorestart=true
stdout_logfile=/var/log/supervisor/webvirtmgr-console.log
redirect_stderr=true
user=nginx
```

5. 启动：

```bash
./manage.py runserver 0:8000
```

打开浏览器访问`http://x.x.x.x:8000 (x.x.x.x - your server IP address )`

## 解决虚拟机无法连接外网问题

参考：https://blog.csdn.net/zhydream77/article/details/81629586

## 附：kvm 安装脚本

[kvm_install.sh](./kvm_install.sh.md)

## 参考链接

* Kvm 虚拟化介绍: https://www.cnblogs.com/wete/p/11099339.html
* Kvm 基本运维命令：https://www.cnblogs.com/zy-303/p/9930353.html
* webvirtmgr installation: https://github.com/retspen/webvirtmgr/wiki/Install-WebVirtMgr