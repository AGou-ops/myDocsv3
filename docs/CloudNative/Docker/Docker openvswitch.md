# Docker openvswitch    

## openvswitch 简介

openvswitch为我们建立一个扩展到三层网络的网桥，我们知道vlan是不能跨子网的，openvswitch利用了隧道技术，将二层的报文用三层的协议(udp/sdn）重新封装，从而实现二层网络在三层中进行扩展，如下图所示：

![](https://images2015.cnblogs.com/blog/659305/201604/659305-20160411021401410-1725005604.jpg)

## openvswitch 安装

openvswitch 官方并未在 REHL 系列提供现成的 RPM 包，所以需要我们手动编译进行安装，在这里我制作一个可直接安装的 RPM 包。

1. 首先从官网下载最新的 LTS 版本：

```bash
wget https://www.openvswitch.org/releases/openvswitch-2.5.9.tar.gz
tar xf openvswitch-2.5.9.tar.gz 
```

3. 安装编译所需的依赖包：

```bash
   yum install gcc make python-devel openssl-devel kernel-devel graphviz \
       kernel-debug-devel autoconf automake rpm-build redhat-rpm-config \
       libtool -y
```

3. 建立`rpmbuild`目录：

```bash
cp openvswitch-2.5.9.tar.gz /root/rpmbuild/SOURCES
```

4. 检查内核开发`kernel-devel`源码的位置是否正确：

```bash
[root@node01 ~]\# ls /lib/modules/$(uname -r) -ln
total 3276
lrwxrwxrwx.  1 0 0     44 Apr 26 22:26 build -> `/usr/src/kernels/3.10.0-1062.18.1.el7.x86_64`			# 如果这里闪红，则表示不正确
drwxr-xr-x.  2 0 0      6 Mar 18 07:53 extra
drwxr-xr-x. 12 0 0    128 Apr 26 22:26 kernel
-rw-r--r--.  1 0 0 852612 Apr 26 22:28 modules.alias
-rw-r--r--.  1 0 0 813600 Apr 26 22:28 modules.alias.bin
-rw-r--r--.  1 0 0   1333 Mar 18 07:53 modules.block
-rw-r--r--.  1 0 0   7357 Mar 18 07:53 modules.builtin
-rw-r--r--.  1 0 0   9425 Apr 26 22:28 modules.builtin.bin
-rw-r--r--.  1 0 0 271605 Apr 26 22:28 modules.dep
-rw-r--r--.  1 0 0 379944 Apr 26 22:28 modules.dep.bin
-rw-r--r--.  1 0 0    361 Apr 26 22:28 modules.devname
-rw-r--r--.  1 0 0    140 Mar 18 07:53 modules.drm
-rw-r--r--.  1 0 0     69 Mar 18 07:53 modules.modesetting
-rw-r--r--.  1 0 0   1787 Mar 18 07:53 modules.networking
-rw-r--r--.  1 0 0  97175 Mar 18 07:53 modules.order
-rw-r--r--.  1 0 0    569 Apr 26 22:28 modules.softdep
-rw-r--r--.  1 0 0 395089 Apr 26 22:28 modules.symbols
-rw-r--r--.  1 0 0 483655 Apr 26 22:28 modules.symbols.bin
lrwxrwxrwx.  1 0 0      5 Apr 26 22:26 source -> build
drwxr-xr-x.  2 0 0      6 Mar 18 07:53 updates
drwxr-xr-x.  2 0 0     95 Apr 26 22:26 vdso
drwxr-xr-x.  2 0 0      6 Apr 26 22:28 weak-updates
```

build是一个无效的称号链接，删除这个链接，重新链接到正确目录：

```bash
rm /lib/modules/$(uname -r)/build
ln -s /usr/src/kernels/3.10.0-1062.18.1.el7.x86_64 /lib/modules/$(uname -r)/build
```

5. 开始制作`RPM`包

```bash
cd openvswitch-2.5.9
rpmbuild -bb --without check rhel/openvswitch.spec

```

6. 最后安装所生成的 RPM 包

```bash
yum localinstall -y /root/rpmbuild/RPMS/x86_64/openvswitch-2.5.9-1.x86_64.rpm 
```

## 建立 vxLAN 拓扑

环境:

| 主机IP       | 容器IP及网络                      |
| ------------ | --------------------------------- |
| 172.16.1.128 | 172.16.128.128（172.16.128.0/24） |
| 172.16.1.129 | 172.16.129.129（172.16.129.0/24） |

将制作好的 RPM 包发送给另一台主机，直接安装.

在两主机上启动服务：`systemctl start openvswitch.service  `

在`172.16.1.128`主机上：

```bash
cat /proc/sys/net/ipv4/ip_forward 

ovs-vsctl add-br obr0
ovs-vsctl add-port obr0 gre0 -- set Interface gre0 type=gre options:remote_ip=172.16.1.128
brctl addbr kbr0
brctl addif kbr0 obr0
ip link set dev docker0 down
ip link del dev docker0

# vi /etc/sysconfig/network-scripts/ifcfg-kbr0
ONBOOT=no
BOOTPROTO=static
IPADDR=172.16.128.1
NETMASK=255.255.255.0
GATEWAY=172.16.128.0
USERCTL=no
TYPE=Bridge
IPV6INIT=no

# cat /etc/sysconfig/network-scripts/route-ens33 
172.16.129.0/24 via 172.16.1.128 dev ens33
# systemctl  restart network.service
```



```bash
cat /proc/sys/net/ipv4/ip_forward 

ovs-vsctl add-br obr0
ovs-vsctl add-port obr0 gre0 -- set Interface gre0 type=gre options:remote_ip=172.16.1.129
brctl addbr kbr0
brctl addif kbr0 obr0
ip link set dev docker0 down
ip link del dev docker0

# vi /etc/sysconfig/network-scripts/ifcfg-kbr0
ONBOOT=no
BOOTPROTO=static
IPADDR=172.16.129.1
NETMASK=255.255.255.0
GATEWAY=172.16.129.0
USERCTL=no
TYPE=Bridge
IPV6INIT=no

# cat /etc/sysconfig/network-scripts/route-ens33 
172.16.128.0/24 via 172.16.1.129 dev ens33
# systemctl  restart network.service
```























































在`172.16.1.128`主机执行以下脚本：

```bash
# 有错误则停止执行
set -e
# 创建一个openvswitch bridge
ovs-vsctl add-br ovs-br0
# 添加一个到172.16.1.129的接口
ovs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.129 -- set  interface vxlan-port-to-172.16.1.129 type=vxlan option:remote_ip="172.16.1.129"

# 创建一对虚拟网卡veth
ip link add vethx type veth peer name vethContainer

# sleep 3 seconds to wait for the completion of previous work.
sleep 3

# 将vethx接入到ovs-br0中
ovs-vsctl add-port ovs-br0 vethx
ifconfig vethx up

# 启动docker容器，使用--net=none策略
export containerID=$(docker run -tid --net=none busybox:latest /bin/sh)
export pid=$(docker inspect -f "【【.State.Pid】】" ${containerID})

echo containerID=${containerID}
echo pid=${pid}

# 如果net namespace目录没有创建则新建一个
if [ ! -d "/var/run/netns" ]; then
  mkdir -p /var/run/netns
fi

# 将docker容器使用的net namespace 打回原形
ln -s /proc/${pid}/ns/net /var/run/netns/${pid}
ip netns list

# 将vethContainer加入到容器的net namespace中
ip link set vethContainer netns ${pid}

# 配置vethContainer接口
ip netns exec ${pid} ifconfig vethContainer 172.16.128.128/24 up
ip netns exec ${pid} ifconfig -a
```

> 脚本来源于网络。

```bash
# 有错误则停止执行
set -e
# 创建一个openvswitch bridge
ovs-vsctl add-br ovs-br0
# 添加一个到172.16.1.128的接口
ovs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.128 -- set  interface vxlan-port-to-172.16.1.128 type=vxlan option:remote_ip="172.16.1.128"

# 创建一对虚拟网卡veth
ip link add vethx type veth peer name vethContainer

# sleep 3 seconds to wait for the completion of previous work.
sleep 3

# 将vethx接入到ovs-br0中
ovs-vsctl add-port ovs-br0 vethx
ifconfig vethx up

# 启动docker容器，使用--net=none策略
export containerID=$(docker run -tid --net=none busybox:latest /bin/sh)
export pid=$(docker inspect -f "【【.State.Pid】】" ${containerID})

echo containerID=${containerID}
echo pid=${pid}

# 如果net namespace目录没有创建则新建一个
if [ ! -d "/var/run/netns" ]; then
  mkdir -p /var/run/netns
fi

# 将docker容器使用的net namespace 打回原形
ln -s /proc/${pid}/ns/net /var/run/netns/${pid}
ip netns list

# 将vethContainer加入到容器的net namespace中
ip link set vethContainer netns ${pid}

# 配置vethContainer接口
ip netns exec ${pid} ifconfig vethContainer 172.16.129.129/24 up
ip netns exec ${pid} ifconfig -a
```

