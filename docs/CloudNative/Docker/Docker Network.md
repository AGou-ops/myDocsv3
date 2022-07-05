# Docker Network 

## Docker 虚拟化网络

### 一、docker网络介绍

  在开始的博客中就有提过，现在的linux内核已经支持六种名称空间：user、uts，mount，ipc，pid，net，而net主要就是用于网络设备、协议栈的隔离。inux内核支持二层和三层设备的模拟，宿主机的docker0就是用软件来实现的具有交换功能的虚拟二层设备，docker中的网卡设备是成对出现的，好比网线的两头，一头处于docker中，另外一头在docker0桥上，这个使用brctl工具就能实现。所以

```bash
[root@docker1 ~]\# ip a | grep docker0
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
```

  下面我们使用ip命令操作网络名称空间，简单模拟容器间的网络通信（当我们使用ip命令去管理网络名称空间的时候，只有网络名称空间是被隔离的，其它名称空间都是共享的。），这里使用一台没有安装docker的主机，避免混淆。

```bash
\# 首先确定系统中是否有iproute的包，ip命令就包含在这个包中
[root@docker3 ~]\# rpm -qa iproute
iproute-3.10.0-87.el7.x86_64
\# 添加网络名称空间
[root@docker3 ~]\# ip netns help
[root@docker3 ~]\# ip netns add ns1
[root@docker3 ~]\# ip netns add ns2
[root@docker3 ~]\# ip netns ls
ns2
ns1
\# 如果我们没有单独给这两个名称空间创建网卡的话，默认是只有一个lo的。
[root@docker3 ~]\# ip netns exec ns1 ip a
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
[root@docker3 ~]\# ip netns exec ns2 ip a
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
\# 创建网卡对
[root@docker3 ~]\# ip link help
[root@docker3 ~]\# ip link add name veth1.1 type veth peer name veth1.2
[root@docker3 ~]\# ip link show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT qlen 1000
    link/ether 00:0c:29:c4:4a:ca brd ff:ff:ff:ff:ff:ff
3: veth1.2@veth1.1: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
    link/ether 5e:b2:bb:e4:bc:a7 brd ff:ff:ff:ff:ff:ff
4: veth1.1@veth1.2: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
    link/ether 06:5f:16:be:a1:56 brd ff:ff:ff:ff:ff:ff
\# 可以看到veth1.1的另一半是veth1.2，veth1.2的另一半是veth1.1，此时这两块网卡存在于我们的物理机上，但是处于未激活状态，现在我们把veth1.2放到ns1名称空间中
[root@docker3 ~]\# ip link set dev veth1.2 netns ns1
\# 一个虚拟网卡只能属于一个网络名称空间，所以在物理机上只剩veth1.1了。而ns1网络名称空间中已经多了一个veth1.2。
[root@docker3 ~]\# ip link show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT qlen 1000
    link/ether 00:0c:29:c4:4a:ca brd ff:ff:ff:ff:ff:ff
4: veth1.1@if3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
    link/ether 06:5f:16:be:a1:56 brd ff:ff:ff:ff:ff:ff link-netnsid 0
[root@docker3 ~]\# ip netns exec ns1 ip a 
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
3: veth1.2@if4: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether 5e:b2:bb:e4:bc:a7 brd ff:ff:ff:ff:ff:ff link-netnsid 0
\# 当然，也可以给网卡改名字，这里为了方便查看就不修改了。命令如下：
[root@docker3 ~]\# ip netns exec ns1 ip link set dev veth1.2 name eth0
\# 配置地址并激活网卡使宿主机能与ns1通信
[root@docker3 ~]\# ifconfig veth1.1 10.0.0.1/24 up
[root@docker3 ~]\# ip netns exec ns1 ifconfig veth1.2 10.0.0.2/24 up
[root@docker3 ~]\# ping 10.0.0.2
PING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.
64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=0.047 ms
\# 接下来我们再把veth1.1放到ns2为网络名称空间中，并实现ns1和ns2的通信
[root@docker3 ~]\# ip link set dev veth1.1 netns ns2
[root@docker3 ~]\# ip netns exec ns2 ifconfig veth1.1 10.0.0.3/24 up
[root@docker3 ~]\# ip netns exec ns2 ping 10.0.0.2
PING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.
64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=0.027 ms
```

### 二、docker网络类型

  docker支持五种网络类型，但是安装后只默认提供三种，如下：

```bash
[root@docker2 ~]\# docker info | grep -w Network
WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled
 Network: bridge host macvlan null overlay
\# 两条命令解除上面的警告信息
[root@docker2 ~]\# echo -e 'bridge-nf-call-iptables = 1\nbridge-nf-call-ip6tables = 1' >>/etc/sysctl.conf 
[root@docker2 ~]\# reboot
\# 安装docker后，默认提供的三种网络类型
[root@docker2 ~]\# docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
4784b8e4f640        bridge              bridge              local
f5a426943455        host                host                local
61be1051e1fe        none                null                local
\# bridge是默认的网络类型
[root@docker2 ~]\# docker network inspect bridge | grep bridge.name
            "com.docker.network.bridge.name": "docker0"
```

### 三、docker容器类型

  docker的网络类型和容器模型是相关联的，所以就都放在下面说吧。

![img](https://img2018.cnblogs.com/blog/1419513/201906/1419513-20190613161543999-1823209267.png)

- 封闭式容器
    使用名称空间，但是不创建网路设备，只有一个lo接口。实现如下：

```bash
[root@docker2 ~]\# docker run --name busy01 -it --network none --rm busybox
/ \# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
```

- 桥接式容器
    

![图片](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/640.jpeg)
    
默认的容器类型，故可以省去network的参数。创建网络设备时，一半在容器内部，一半在宿主机的docker0上。实现如下：

```bash
[root@docker2 ~]\# docker run --name busy01 -it --network bridge --rm busybox
/ \# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
4: eth0@if5: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:0a:00:00:02 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.2/16 brd 10.0.255.255 scope global eth0
       valid_lft forever preferred_lft forever
```

- **联盟式容器**
    创建一个容器加入另一个容器，共享`net`、`uts`、`ipc`名称空间，独享其它名称空间。

```bash
[root@docker2 ~]\# docker run --name busy01 -it --rm busybox
/ \# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
8: eth0@if9: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:0a:00:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.3/16 brd 10.0.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ \# hostname 
4a5449c67f3a
\# 此时另开一窗口，在启动另外一个容器，可以看到ip和主机名啥的都是一样的
[root@docker2 ~]\# docker run --name busy02 -it --network container:busy01 --rm busybox
/ \# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
8: eth0@if9: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:0a:00:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.3/16 brd 10.0.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ \# hostname 
4a5449c67f3a
\# 做个测试，证明两个容器时共用lo接口的，在busy01上面启动一个httpd
/ \# echo 'I am very happy' >/tmp/test/index.html
/ \# httpd -f -h /tmp/test/
\# 在busy02上访问本地接口lo，可以看到是成功的
/ \# wget -O - -q 127.0.0.1
I am very happy
\# 但是文件系统还是隔离的，在busy01容器中创建一个目录
/ \# mkdir /tmp/test
\# 在busy02中查看，是木得的
/ \# ls /tmp/
/ \# 
```

- 开放式容器
    开放式容器时联盟是容器的一个延伸，这种类型的容器直接共享宿主机的网络名称空间。

```bash
[root@docker2 ~]\# docker run --name busy01 -it --network host --rm busybox
/ \# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast qlen 1000
    link/ether 00:0c:29:90:c4:6e brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.12/24 brd 10.10.10.255 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fe90:c46e/64 scope link 
       valid_lft forever preferred_lft forever
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue 
    link/ether 02:42:6a:2a:e2:bb brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 10.0.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:6aff:fe2a:e2bb/64 scope link 
       valid_lft forever preferred_lft forever
7: veth340cf79@if6: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master docker0 
    link/ether 0a:29:9a:4d:3b:da brd ff:ff:ff:ff:ff:ff
    inet6 fe80::829:9aff:fe4d:3bda/64 scope link 
       valid_lft forever preferred_lft forever
\# 可以看到直接使用物理机的网络设备，此时我们启动一个httpd。
/ \# echo 'good good study' >/tmp/index.html
/ \# httpd -h /tmp/
/ \# netstat -lntp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -
tcp        0      0 :::80                   :::*                    LISTEN      8/httpd
tcp        0      0 :::22                   :::*                    LISTEN      -
\# 这其实是直接监听在物理机网卡地址的80端口，我们可以在浏览器做访问测试
```

![img](https://img2018.cnblogs.com/blog/1419513/201906/1419513-20190619170253139-457341143.png)

### 四、docker网络实践

- 修改docker0桥的地址，添加bip设置

```bash
[root@docker2 ~]\# ip a | grep docker0
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP 
    inet 172.17.0.1/16 brd 10.0.255.255 scope global docker0
\# docker0桥默认地址是172.17.网段的，现在我修改为172.16网络的。
[root@docker2 ~]\# vim /etc/docker/daemon.json
{
  "registry-mirrors": ["https://p4y8tfz4.mirror.aliyuncs.com"],
  "bip": "172.16.0.1/16"
}
[root@docker2 ~]\# systemctl restart docker.service 
[root@docker2 ~]\# ip a |grep docker0
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    inet 172.16.0.1/16 brd 10.0.255.255 scope global docker0
\# 当然也可以指定dns和default-gateway，格式与bip一样的。
```

- 远程管理docker容器，[官网](https://docs.docker.com/install/linux/linux-postinstall/\#control-where-the-docker-daemon-listens-for-connections)有两种方法，我只实现了一种。。。。

```bash
\# 现在我的docker1和docker2主机都是有安装docker的，我现在修改配置，使docker1能够控制docker2的容器
[root@docker2 ~]\# docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES
2157de82161a        hamerle/httpd:v1    "/bin/httpd -f -h /d…"   6 days ago          Exited (137) 2 hours ago                       web007
[root@docker2 ~]\# systemctl edit docker.service
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375
[root@docker2 ~]\# systemctl daemon-reload 
[root@docker2 ~]\# systemctl restart docker.service 
[root@docker2 ~]\# netstat -lntp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      765/sshd            
tcp        0      0 127.0.0.1:2375          0.0.0.0:*               LISTEN      5180/dockerd        
tcp6       0      0 :::22                   :::*                    LISTEN      765/sshd 
\# docke daemon已经监听到2375的端口，我们现在可以通过docker1远程启动docker2上的web007容器
[root@docker1 ~]\# docker -H 10.0.0.12:2375 ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES
2157de82161a        hamerle/httpd:v1    "/bin/httpd -f -h /d…"   6 days ago          Exited (137) 2 hours ago                       web007
[root@docker1 ~]\# docker -H 10.0.0.12:2375 start web007 
web007
[root@docker2 ~]\# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
2157de82161a        hamerle/httpd:v1    "/bin/httpd -f -h /d…"   6 days ago          Up 58 seconds                           web007
```

- 手动创建一个网络类型，并指定对应网桥设备的名称为docker1，完整的参数可以参考[官网](https://docs.docker.com/engine/reference/commandline/network_create/)，最终实现基于两个不同网络启动的容器间互相通信。

```bash
[root@docker2 ~]\# docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
56e76e104239        bridge              bridge              local
af5460d6727a        host                host                local
2305ac12c2f1        none                null                local
[root@docker2 ~]\# docker network create --help
[root@docker2 ~]\# docker network create -o com.docker.network.bridge.name=docker1 -d bridge --subnet '172.18.0.0/16' bridge-test
32cc657f5b673d989a00555f9f9e5c37d470a5ba4e9b5f24918d163ae364e82e
    \# -o：在使用bridge的driver类型时，可以使用-o的附加参数。上面实例中的参数意思是指定创建bridge类型网络时对应虚拟网桥设备的名字。（就是ip a命令看到的名字）
    \# -d：指定driver，默认类型就是bridge。
    \# --subnet：指定新建的docker网络的网段
    \# 最后的bridg-test是即将要将创建出的网络的名字.
[root@docker2 ~]\# docker network ls 
NETWORK ID          NAME                DRIVER              SCOPE
56e76e104239        bridge              bridge              local
32cc657f5b67        bridge-test         bridge              local
af5460d6727a        host                host                local
2305ac12c2f1        none                null                local
[root@docker2 ~]\# ip a | grep docker1
19: docker1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN 
    inet 172.18.0.1/16 brd 172.16.255.255 scope global docker1
\# 我们以bridge-test网络启动一个容器
[root@docker2 ~]\# docker run --name busy01 -it --network bridge-test --rm busybox
/ \# ip a 
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
20: eth0@if21: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:ac:10:00:02 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.2/16 brd 172.16.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ \# 
\# 另开一个窗口，使用bridge网络再起一个容器
[root@docker2 ~]\# docker run --name busy02 -it --network bridge --rm busybox
/ \# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
22: eth0@if23: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:0a:00:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.16.0.2/16 brd 10.0.255.255 scope global eth0
       valid_lft forever preferred_lft forever
\# 可以看到两个容器，一个是172.18网段，一个是172.16网段，此时做连通性测试。
/ \# ping 172.18.0.2
\# 不通，此时确定宿主机的ip_forward是否开启，如果开启还不通，则需要另开一个窗口排查防火墙规则。
[root@docker2 ~]\# cat /proc/sys/net/ipv4/ip_forward
1
[root@docker2 ~]\# iptables -nvL
\# 排查防火墙规则，其实很简单，把target类型为DROP的删掉就好了。我这只列出有DROP的链，并删除
[root@docker2 ~]\# iptables -nvL DOCKER-ISOLATION-STAGE-2 --line-number 
Chain DOCKER-ISOLATION-STAGE-2 (2 references)
num   pkts bytes target     prot opt in     out     source               destination         
1       22  1848 DROP       all  --  *      docker1  0.0.0.0/0            0.0.0.0/0           
2        0     0 DROP       all  --  *      docker0  0.0.0.0/0            0.0.0.0/0           
3        0     0 RETURN     all  --  *      *       0.0.0.0/0            0.0.0.0/0 
[root@docker2 ~]\# iptables -D DOCKER-ISOLATION-STAGE-2 2
[root@docker2 ~]\# iptables -D DOCKER-ISOLATION-STAGE-2 1
\# 删除完后再ping
/ \# ping 172.18.0.2
PING 172.18.0.2 (172.18.0.2): 56 data bytes
64 bytes from 172.18.0.2: seq=0 ttl=63 time=0.262 ms
64 bytes from 172.18.0.2: seq=1 ttl=63 time=0.082 ms
```

> 转载自：https://www.cnblogs.com/ccbloom/p/10997452.html