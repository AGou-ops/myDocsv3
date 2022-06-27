# LVS 四种模型详解 

[LVS-NAT](#NAT)	[LVS-DR](#DR)	[LVS-TUN](#TUN)	[LVS-FULLNAT](#FULLNAT)

## LVS简介

​     LVS 是` Linux Virtual Server` 的简称，也就是 Linux 虚拟服务器。现在 LVS 已经是 Linux 标准内核的一部分，从 Linux2.4 内核以后，已经完全内置了 LVS 的各个功能模块，无需给内核打任何补丁，可以直接使用 LVS 提供的各种功能。LVS在内核中名称是ipvs，作为netfilter的模块存在，管理ipvs的工具为`ipvsadm`。

​    LVS 是四层负载均衡，也就是说建立在 OSI 模型的第四层——传输层之上，传输层上有我们熟悉的 TCP/UDP，LVS 支持 TCP/UDP 的负载均衡。因为 LVS 是四层负载均衡，因此它相对于其它高层负载均衡的解决办法，比如 DNS 域名轮流解析、应用层负载的调度、客户端的调度等，它的效率是非常高的。

## LVS工作模式

lvs工作位置：

![lvs工作位置](http://agou-ops-file.oss-cn-shanghai.aliyuncs.com/blog-images/LVS/%E5%B7%A5%E4%BD%9C%E4%BD%8D%E7%BD%AE.png)

lvs的工作模式分为四种，分别是：

* **NAT** :

  ​    SNAT: 修改源地址

  ​    DNAT: 修改目标地址

* **DR** : 修改目标 MAC

* **TUN** ： 在原请求IP报文之外新加一个IP首部

* **FULLNAT**： 修改请求报文的源和目标IP

### NAT

**LVS-NAT报文中IP转换过程**：

![NAT](http://agou-ops-file.oss-cn-shanghai.aliyuncs.com/blog-images/LVS/nat.png)

上图所示：

**1.**客户端的请求会发往LVS主机，此时，客户端请求报文的源IP为CIP，目标IP为LVS的VIP

**2.**当LVS收到客户端的请求报文时，会将请求报文中的目标IP修改为后端某个RealServer的RIP，具体为哪个RealServer的RIP，取决于LVS使用的具体算法

**3.**当RealServer收到对应的请求报文时，会发现报文的目标IP就是自己的RIP，于是就会接收报文并 处理后进行响应。响应报文的源IP则为RIP，目标IP则为CIP

**4.**当LVS收到对应的响应报文时，LVS会将响应报文的源IP修改为VIP，目标IP不变为CIP，于是响应报文被发往客户端。

**5.**客户端则会收到响应报文，源IP为VIP，端口为80，而LVS相对于客户端而言，转换过程是透明的。



***优点：***集群中的物理服务器可以使用任何支持TCP/IP操作系统，物理服务器可以分配Internet的保留 私有地址，只有负载均衡器需要一个合法的IP地址。

***缺点：***扩展性有限。当服务器节点（普通PC服务器）数量增长到20个或更多时,负载均衡器将成为整个系统的瓶颈，因为所有的请求包和应答包都需要经过负载均衡器再生。



**LVS-NAT的建议：**

（1）RIP和DIP建议在同一个IP网络，且应使用私网地址；**RS的网关要指向DIP****(中间无其他设备)**

（2）请求报文和响应报文都必须经由LVS转发，**LVS易于成为系统瓶颈。但是也能满足一般需求**

（3）**支持端口映射**，可修改请求报文的目标PORT

（4）**LVS必须是Linux系统**，RS可以是任意OS系统

### DR

​    **LVS默认模式。**直接路由，应用最广泛,通过为请求报文重新封装一个MAC首部进行转发。

​    DR 模式下需要 LVS 和 RS 集群绑定同一个 VIP（RS 通过将 VIP 绑定在 loopback 实现），

**请求报文**由 LVS 接受，**响应报文**不经过 LVS，由RealServer(RS）直接返回给用户。因此，**DR 模式具有较好的性能**，也是目前大型网站使用最广泛的一种负载均衡手段。

**源MAC**是DIP所在的接口的MAC，

**目标MAC**是调度算法选出的RS的RIP所在接口的MAC地址；

源IP/端口，以及目标IP/端口均保持不变

LVS和各RS都配置有VIP



**LVS-DR报文中IP和MAC转换过程**:

![nat](http://agou-ops-file.oss-cn-shanghai.aliyuncs.com/blog-images/LVS/dr.png)

上图所示：

**1.**客户端的请求会发往LVS主机，此时，客户端请求报文的源IP为CIP，目标IP为LVS的VIP

**2.**当LVS收到客户端的请求报文时，会将请求报文中的源MAC修改为本机的DIP所在网卡的MAC,把目标MAC修改为后端某个RealServer的RIP的MAC，具体为哪个RealServer的RIP，取决于LVS使用的具体算法。其他不作修改。

**3.**当RealServer收到对应的请求报文时，因为RealServer会在本机的LO上绑定了VIP的地址，并且会因为在内核中修改了ARP相关参数从而在同一网络中同时拥有了与LVS同样的IP地址，因此在接收到请求报文时会发现报文的目标IP就是自己的VIP，于是就会接收报文并处理后不经过LVS进行响应。响应报文的源IP则为VIP，目标IP则为CIP，源MAC地址则为RS发送数据包的MAC，目标MAC则为最近的路由MAC。

**4.**客户端则会收到响应报文，源IP为VIP，端口为80。而LVS相对于客户端而言，转换过程是透明的。



**优点：**负载均衡器也只是分发请求，应答包通过单独的路由方法返回给客户端。与LVS-TUN相比，LVS-DR这种实现方式不需要隧道结构，因此可以使用大多数操作系统做为物理服务器。

**缺点：**要求负载均衡器的网卡必须与物理网卡在一个物理段上。



注意：因为VIP在同一网络中同时存在，必须改变RealServer 对APR报文响应规则

方法1：在RS上使用arptables工具

```bash
arptables -A IN -d $VIP -j DROP
arptables -A OUT -s $VIP -j mangle --mangle-ip-s $RIP
```

方法2：在RS上修改内核参数以限制arp通告及应答级别 (推荐)

```bash
arp_announce = 2
arp_ignore = 1
```



**LVS-DR的建议：**

(1) RealServer的RIP建议使用私网地址。RIP与DIP在同一IP网络；**RIP的网关不能指向DIP**，以确保响应报文 不会经过VS

(2) LVS和RS要在同一个物理网络。**不能跨地域物理网络调度。**

(3) 请求报文要经由VS，但响应报文不经由VS，而由RealServer直接发往Client

(4) **不支持端口映射**（端口不能修改）

(5) RealServer可使用大多数OS系统

(6) LVS可以只要一块网卡，同时配置VIP和DIP，注意路由走向。

### TUN

​     转发方式工作，不修改请求报文的IP首部，而在原IP报文之外再封装一个IP首部（源IP是DIP，目标IP是RIP），将报文发往挑选出的目标RealServer；RealServer直接响应给客户端（源IP是VIP，目标IP是CIP）

**LVS-TUN报文中IP包头转换过程**:

![tun](http://agou-ops-file.oss-cn-shanghai.aliyuncs.com/blog-images/LVS/tun.png)

上图所示：

**1.**客户端的请求会发往LVS主机，此时，客户端请求报文的源IP为CIP，目标IP为LVS的VIP

**2.**当LVS收到客户端的请求报文时，会在原请求报文基础上再封装一个新的IP包头，源IP为本机的DIP，目标IP为后端某个RealServer的RIP，具体为哪个RealServer的RIP，取决于LVS使用的具体算法。其他不作修改。

**3.**当RealServer收到对应的请求报文时，在接收到请求报文时会发现报文的目标IP就是自己的RIP，于是就会接收报文并处理后不经过LVS进行响应。响应报文的源IP则为VIP，目标IP则为CIP。

**4.**客户端则会收到响应报文，源IP为VIP，端口为80。而LVS相对于客户端而言，转换过程是透明的。



**优点：**负载均衡器只负责将请求包分发给物理服务器，而物理服务器将应答包直接发给用户。所以，负载均衡器能处理很巨大的请求量，这种方式，一台负载均衡能为超过100台的物理服务器服务，负载均衡器不再是系统的瓶颈。

**缺点：**这种方式需要所有的服务器支持"IP Tunneling"(IP Encapsulation)协议。



**LVS-TUN的建议：**

(1) DIP, VIP, RIP都应该是公网地址(或具备跨网络通讯支持)

(2) RS的网关不能指向DIP

(3) 请求报文要经由VS，但响应不能经由VS

(4) **不支持端口映射**

(5) RealServer的OS须支持隧道功能。相对DR模式来讲，**具备跨地域物理网络调度。**

### FULLNAT

转发工作。通过同时修改请求报文的源IP地址和目标IP地址进行转发。

**LVS-FULLNAT报文中IP报头转换过程**：

![fullnat](http://agou-ops-file.oss-cn-shanghai.aliyuncs.com/blog-images/LVS/fullnat.png)

上图所示：

**1.**客户端的请求会发往LVS主机，此时，客户端请求报文的源IP为CIP，目标IP为LVS的VIP

**2.**当LVS收到客户端的请求报文时，会将源IP修改为本机的DIP，同时将请求报文中的目标IP修改为后端某个RealServer的RIP，具体为哪个RealServer的RIP，取决于LVS使用的具体算法

**3.**当RealServer收到对应的请求报文时，会发现报文的目标IP就是自己的RIP，于是就会接收报文并 处理后进行响应。响应报文的源IP则为RIP，目标IP则为DIP

**4.**当LVS收到对应的响应报文时，LVS会将响应报文的源IP修改为VIP，目标IP修改为CIP，于是响应报文被发往客户端。

**5.**客户端则会收到响应报文，源IP为VIP，端口为80，而LVS相对于客户端而言，转换过程是透明的。



**LVS-FULLNAT的建议：**

(1) VIP是公网地址，RIP和DIP是私网地址，且通常不在同一IP网络；因此，RIP的网关一般不会 指向DIP

(2) RS收到的请求报文源地址是DIP，因此，只需响应给DIP；但VS还要将其发往Client

(3) 请求和响应报文都经由VS，**LVS易于成为系统瓶颈。但是也能满足一般需求**

(4) **支持端口映射**

注意：**此类型kernel默认不支持**

>转载：来源51CTO @ljpwinxp