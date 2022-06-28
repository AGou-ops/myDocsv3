# LVS 简单应用 

以下master主机为`172.16.1.134`，VIP地址为`172.16.1.111`，后端RS1为`172.16.1.135`，RS2为`172.16.1.136`.

## NAT模式

1. 开启调度器VS主机的包转发功能（CentOS7默认为关闭状态）

```bash
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf && sysctl -p
```

2. 创建一个LVS-NAT集群

```bash
# 在master主机上
ipvsadm -A -t 172.16.1.134:80 -s rr
```

3. 添加后端RealServer

```bash
 ipvsadm -a -t 172.16.1.134:80 -m -r  172.16.1.135:80
 ipvsadm -a -t 172.16.1.134:80 -m -r  172.16.1.136:80
```

4. 查看集群状态

```bash
[root@master ~]\# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  172.16.1.134:80 rr
  -> 172.16.1.135:80              Masq    1      0          0         
  -> 172.16.1.136:80              Masq    1      0          0         
```

5. 保存ipvs当前规则到指定文件

```bash
 ipvsadm-save -n > /etc/sysconfig/ipvsadm
```

6. 测试

```bash
[root@master ~]\# while true; do curl 172.16.1.134 ; sleep 1; done  
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
```

7. 修改调度算法和后端RS权重

```bash
 ipvsadm -E -t 172.16.1.134:80 -s wrr		# 修改调度算法为wrr
 ipvsadm -e -t 172.16.1.134:80 -m -r 172.16.1.135:80 -w 2		# RS1权重改为2
 ipvsadm -e -t 172.16.1.134:80 -m -r 172.16.1.136:80 -w 1		# RS2权重改为1
```

## DR模式

1. 配置LVS-master主机，脚本如下

```shell
#!/bin/bash
vip='172.16.1.111'
iface='ens33:1'
mask='255.255.255.255'
port='80'
rs1='172.16.1.135'
rs2='172.16.1.136'
scheduler='rr'
type='-g'

case $1 in
start)
   ifconfig $iface $vip netmask $mask broadcast $vip up
    iptables -F

    ipvsadm -A -t ${vip}:${port} -s $scheduler
    ipvsadm -a -t ${vip}:${port} -r ${rs1} $type
    ipvsadm -a -t ${vip}:${port} -r ${rs2} $type
    echo "The LVS Server is Ready!"
    ;;
stop)
    ipvsadm -C
    ifconfig $iface down
    echo "The LVS Server is STOPPED!"
    ;;
*)
    echo "Usage: $(basename $0) start|stop"
    exit 1
    ;;
esac
```

2. 配置后端RS，脚本如下

```shell
#!/bin/bash
vip='172.16.1.111'
mask='255.255.255.255'
dev='lo:1'

case $1 in
start)
    echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore
    echo 1 > /proc/sys/net/ipv4/conf/lo/arp_ignore
    echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce
    echo 2 > /proc/sys/net/ipv4/conf/lo/arp_announce
   # ifconfig $dev $vip netmask $mask
    ip addr add $vip/32 label lo:1 dev lo
    #route add -host $vip dev $dev
    echo "The RS Server is Ready!"
    ;;
stop)
    ifconfig $dev down
    echo 0 > /proc/sys/net/ipv4/conf/all/arp_ignore
    echo 0 > /proc/sys/net/ipv4/conf/lo/arp_ignore
    echo 0 > /proc/sys/net/ipv4/conf/all/arp_announce
    echo 0 > /proc/sys/net/ipv4/conf/lo/arp_announce
    echo "The RS Server is Canceled!"
    ;;
*)
    echo "Usage: $(basename $0) start|stop"
    exit 1
    ;;
esac
```

3. 客户机测试

```bash
suofeiya@suofeiya-15ISK:~$  while true; do curl 172.16.1.111; sleep 1 ; done  
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
```

## TUN模式

1. 添加IP隧道模块

```bash
[root@master ~]\# modprobe ipip
[root@master ~]\# ip a show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:00:55:c3 brd ff:ff:ff:ff:ff:ff
    inet 172.16.1.134/24 brd 172.16.1.255 scope global noprefixroute dynamic ens33
       valid_lft 1131sec preferred_lft 1131sec
    inet6 fe80::20c:29ff:fe00:55c3/64 scope link 
       valid_lft forever preferred_lft forever
3: tunl0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1000
    link/ipip 0.0.0.0 brd 0.0.0.0
```

2. 添加VIP地址到`tunl0`网卡上

```bash
[root@master ~]\# ip addr add 172.16.1.111/32 dev tunl0
```

3. 添加并查看规则

```bash
[root@master ~]\# ipvsadm -A -t 172.16.1.111:80 -s rr
[root@master ~]\# ipvsadm -a -t  172.16.1.111:80 -r 172.16.1.134:80 -i
[root@master ~]\# ipvsadm -a -t  172.16.1.111:80 -r 172.16.1.135:80 -i
[root@master ~]\# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  172.16.1.111:80 rr
  -> 172.16.1.134:80              Tunnel  1      0          0         
  -> 172.16.1.135:80              Tunnel  1      0          0         
```

4. 后端RS

```bash
[root@node01 ~]\# modprobe ipip
[root@node01 ~]\# ip addr add 172.16.1.111/32 dev tunl0

[root@node02 ~]\# modprobe ipip
[root@node02 ~]\# ip addr add 172.16.1.111/32 dev tunl0
```

5. 激活各节点隧道模式

```bash
[root@master ~]\# ip link set up tunl0
[root@node01 ~]\# ip link set up tunl0
[root@node02 ~]\# ip link set up tunl0
```

6. 关闭内核相关功能及对数据包的校验(以node01节点为例，node02节点一样)

​    为了防止web服务器不认识发来的拆包后的源ip把数据包给丢掉，导致web服务器丢包，客户端访问不到数据，因为隧道模式实现的是不同网段的主机进行通信，如果信息要从服务端返回到客户端时，由于客户端和服务端不在同一个网段，数据根本出不去，所以我们需要关闭数据校验.

查看相关内核参数：

```bash
[root@node01 ~]\# sysctl -a | grep rp_filter
net.ipv4.conf.all.arp_filter = 0
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.arp_filter = 0
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.ens33.arp_filter = 0
net.ipv4.conf.ens33.rp_filter = 1
net.ipv4.conf.lo.arp_filter = 0
net.ipv4.conf.lo.rp_filter = 0
net.ipv4.conf.tunl0.arp_filter = 0
net.ipv4.conf.tunl0.rp_filter = 1
sysctl: reading key "net.ipv6.conf.all.stable_secret"
sysctl: reading key "net.ipv6.conf.default.stable_secret"
sysctl: reading key "net.ipv6.conf.ens33.stable_secret"
sysctl: reading key "net.ipv6.conf.lo.stable_secret"
sysctl: reading key "net.ipv6.conf.tunl0.stable_secret"
```

关闭：

```bash
[root@node01 ~]\# cat >> /etc/sysctl.conf << EOF
> net.ipv4.conf.all.rp_filter=0
> net.ipv4.conf.default.rp_filter=0
> net.ipv4.conf.ens33.rp_filter=0
> net.ipv4.conf.tunl0.rp_filter=0
> EOF
# 使配置生效
[root@node01 ~]\# sysctl -p
```

7. 测试

```bash
suofeiya@suofeiya-15ISK:~$ while true; do curl 172.16.1.111; sleep 1 ; done  
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
```

## FullNAT模式

