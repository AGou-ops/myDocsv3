# firewalld iptables快速手册

## Netfilter 机制

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHlnZw==,size_16,color_FFFFFF,t_70.png)



```
报文流向：

     流入本机：PREROUTING --> INPUT-->用户空间进程

     流出本机：用户空间进程-->OUTPUT--> POSTROUTING

     转发：PREROUTING --> FORWARD --> POSTROUTING
     
内核中数据包的传输过程：

   (1)当一个数据包进入网卡时，数据包首先进入PREROUTING链，内核根据数据包目的IP判断是否需要转送出去
   
   (2)如果数据包就是进入本机的，数据包就会到达INPUT链。经INPUT链检查后，数据包被发往本地进程。
      本地进程进行相应处理后发送响应数据包，数据包经过OUTPUT链，然后到达POSTROUTING链输出；
      如果数据包是要转发出去的，且内核允许转发，数据包就会向右移动，经过FORWARD链，然后到达POSTROUTING链输出。
```

## iptables

![iptables dataflo](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/ac586d71025972c3c200ca6bc96917c5.png)

### 五链：

```bash
INPUT链：当接收到防火墙本机地址的数据包(入站)时，应用此链中的规则；
OUTPUT链：当防火墙本机向外发送数据包(出站)时，应用此链中的规则；
FORWARD链：当接收到需要通过防火墙发送给其他地址的数据包(转发)时，应用此链中的规则；
PREROUTING链：在对数据包作路由选择之前，应用此链中的规则，如DNAT；
POSTROUTING链：在对数据包作路由选择之后，应用此链中的规则，如SNAT。
```

### 四表

```bash
– filter表：主要用于对数据包进行过滤，根据具体的规则决定是否放行该数据包(如DROP、ACCEPT、REJECT;、LOG[`记录日志信息？`])，所谓的防火墙其实基本上是指这张表上的过滤规则，对应内核模块iptables_filter；
– nat表：network address translation，网络地址转换功能，主要用于修改数据包的IP地址、端口号等信息(网络地址转换，如SNAT、DNAT、MASQUERADE[`SNAT的一种特殊形式，适用于动态的、临时会变得IP上`]、REDIRECT[`在本机做端口映射`])。属于一个流的包(因为包的大小限制导致数据可能会被分成多个数据包)只会经过这个表一次，如果第一个包被允许做NAT或Masqueraded，那么余下的包都会自动地被做相同的操作，也就是说，余下的包不会再通过这个表。对应内核模块iptables_nat；
– mangle表：拆解报文，做出修改，并重新封装，主要用于修改数据包的TOS(Type Of Service，服务类型)、TTL(Time To Live，生存周期)指以及为数据包设置Mark标记，以实现Qos(Quality Of Service，服务质量)调整以及策略路由等应用，由于需要相应的路由设备支持，因此应用并不广泛。对应内核模块iptables_mangle；
– raw表：是自1.2.9以后版本的iptables新增的表，主要用于决定数据包是否被状态跟踪机制处理，在匹配数据包时，raw表的规则要优先于其他表，对应内核模块iptables_raw。
```

### 表链关系

并非所有的链都可以应用所有的表，以下是他们的对应关系（上下顺序为表的优先级）：

![hook point chain - table](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/55afd069e4f1ba01d87cee0b9322c6c7.png)

简单记住：`filter`表可以管理`INPUT/FORWARD/OUTPUT`链，`nat`表可以管理`PREROUTING/INPUT/OUTPUT/POSTROUTING`链。

此外：`mangle`表可以管理所有链，`raw`表可以管理`PREROUTING/OUTPUT`链，这两个表其实很少用到.

### 相关命令（CRUD）

```bash
# 查看指定链上的规则信息，不指定链则查询全部
iptables -L INPUT
# -t指定表名，默认不写就是filter表，
iptables -t nat -L
# 常用组合
iptables -vnL --line-numbers

# 增加规则，-A后面添加规则，-I在前面添加规则
iptables -t filter -I INPUT -s 10.37.129.2 -j DROP
# * 参数：
# * -s 源ip，source
# * -j 跳转jump，后面可以接`target`或者`action`

# 删除INPUT链filter表的第二条规则
iptables -t filter -D INPUT 2
# 根据条件进行删除
iptables -t filter -D INPUT -s 10.37.129.2 -j DROP

# 清空某链某表下的所有规则
iptables -t filter -F INPUT
# 不指定表和链则清空所有
iptables -F

# 替换（修改）规则
iptables -t filter -R INPUT 1 -s 10.37.129.3 -j ACCEPT
# 参数： -R replace 替换规则

# 默认规则作用于整个链，不针对某个表
# 修改策略，将FORWARD链的默认规则设置为DROP
iptables -P FORWARD DROP

# 保存规则，对于CentOS7，需要yum install -y iptables-services
services iptables save
```

### 示例

```bash
# -d：destination，用于匹配报文的目标地址，可以同时指定多个ip(逗号隔开，逗号两侧都不允许有空格)，也可指定ip段：
iptables -t filter -I OUTPUT -d 192.168.1.111,192.168.1.118 -j DROP
iptables -t filter -I INPUT -d 192.168.1.0/24 -j ACCEPT
iptables -t filter -I INPUT ! -d 192.168.1.0/24 -j ACCEPT

# 将本机的7777端口转发到6666端口
iptables -t nat -A PREROUTING -p tcp --dport 7777 -j REDIRECT --to-port 6666

# 开启转发功能
sysctl -w net.ipv4.ip_forward=1
# client -> 192.168.1.168:6666 -> 192.168.1.8:7777
# 将本机的6666端接口转发到 192.168.1.8 主机的7777端口
iptables -t nat -A PREROUTING -p tcp --dport 6666 -j DNAT --to-destination 192.168.1.8:7777
# 将client的地址转换为192.168.1.168，
iptables -t nat -A POSTROUTING -p tcp -d 192.168.1.8 --dport 7777 -j SNAT --to-source 192.168.1.168

# 访问本机的80端口，转发到8080端口
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080
# 将本机访问80端口的转发到本机8080
iptables -t nat -A OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j DNAT --to 127.0.0.1:8080
iptables -t nat -A OUTPUT -p tcp -d 192.168.4.177 --dport 80 -j DNAT --to 127.0.0.1:8080

# 将192.168.75.3 8000端口将数据返回给客户端时，将源ip改为192.168.75.5
iptables -t nat -A POSTROUTING -d 192.168.75.3 -p tcp --dport 8000 -j SNAT --to 192.168.75.5

# -p：用于匹配报文的协议类型,可以匹配的协议类型tcp、udp、udplite、icmp、esp、ah、sctp等（centos7中还支持icmpv6、mh）：
iptables -t filter -I INPUT -p tcp -s 192.168.1.146 -j ACCEPT
# 感叹号表示“非”，即除了匹配这个条件的都ACCEPT，但匹配这个条件不一定就是REJECT或DROP？这要看是否有为它特别写一条规则，如果没有写就会用默认策略：
iptables -t filter -I INPUT ! -p udp -s 192.168.1.146 -j ACCEPT

# -i：用于匹配报文是从哪个网卡接口流入本机的，由于匹配条件只是用于匹配报文流入的网卡，所以在OUTPUT链与POSTROUTING链中不能使用此选项：
iptables -t filter -I INPUT -p icmp -i eth0 -j DROP
iptables -t filter -I INPUT -p icmp ! -i eth0 -j DROP

# -o：用于匹配报文将要从哪个网卡接口流出本机，于匹配条件只是用于匹配报文流出的网卡，所以在INPUT链与PREROUTING链中不能使用此选项
iptables -t filter -I OUTPUT -p icmp -o eth0 -j DROP
iptables -t filter -I OUTPUT -p icmp ! -o eth0 -j DROP

# iptables扩展模块
# TCP、UDP模块
iptables -t filter -I OUTPUT -d 192.168.1.146 -p tcp -m tcp --sport 22 -j REJECT
iptables -t filter -I INPUT -s 192.168.1.146 -p tcp -m tcp --dport 22:25 -j REJECT
iptables -t filter -I INPUT -s 192.168.1.146 -p tcp -m tcp --dport :22 -j REJECT
iptables -t filter -I INPUT -s 192.168.1.146 -p tcp -m tcp --dport 80: -j REJECT
iptables -t filter -I OUTPUT -d 192.168.1.146 -p tcp -m tcp ! --sport 22 -j ACCEPT
# multiport模块
iptables -t filter -I OUTPUT -d 192.168.1.146 -p udp -m multiport --sports 137,138 -j REJECT
iptables -t filter -I INPUT -s 192.168.1.146 -p tcp -m multiport --dports 22,80 -j REJECT
iptables -t filter -I INPUT -s 192.168.1.146 -p tcp -m multiport ! --dports 22,80 -j REJECT
iptables -t filter -I INPUT -s 192.168.1.146 -p tcp -m multiport --dports 80:88 -j REJECT
iptables -t filter -I INPUT -s 192.168.1.146 -p tcp -m multiport --dports 22,80:88 -j REJECT
# ip-range
# --src-range(匹配源地址范围)
# --dst-range(匹配目标地址范围)
iptables -t filter -I INPUT -m iprange --src-range 192.168.1.127-192.168.1.146 -j DROP
# string，用来拦截数据包中的某个字符串
# --algo 指定算法匹配字符串
iptables -t filter -I INPUT -m string --algo bm --string "XXOO" -j REJECT
# time，规定某段时间的动作
iptables -t filter -I INPUT -p tcp --dport 80 -m time --timestart 09:00:00 --timestop 18:00:00 -j REJECT
iptables -t filter -I INPUT -p tcp --dport 443 -m time --timestart 09:00:00 --timestop 18:00:00 -j REJECT
# connlimit
# 限制ssh端口的连接数不能超过两个
iptables -t filter -I INPUT -p tcp --dport 22 -m connlimit --connlimit-above 2 -j REJECT
# limit
# 限制icmp的流入速度 
iptables -t filter -I INPUT -p icmp -m limit --limit 10/minite -j ACCEPT
# icmp模块
# * icmp type
# 0 Echo Reply——回显应答（Ping应答）
# 8 Echo request——回显请求（Ping请求）	
# 禁止所有icmp包
iptables -t filter -I INPUT -p icmp -j REJECT
# 可以ping别人，别人ping不了自己
iptables -t filter -I INPUT -p icmp --icmp-type 8/0 -j REJECT
# state模块，用于处理报文状态
iptables -t filter -I INPUT -m state --state RELATED, ESTABLISHED -j ACCEPT
```

自定义链：

```bash
# 新建自定义链
iptables -N IN_WEB
# 引用跳转自定义链
iptables -I INPUT -p tcp --dport 80 -j IN_WEB
# 修改自定义链的名称
iptables -E IN_WEB WEB
# 删除自定义链
iptables -X IN_WEB
```

### 其他

1. `filter`表中的`DROP`和`REJECT`的区别：前者会直接丢弃数据包并不返回任何响应，后者在丢弃数据包的同时返回响应给客户端.

比如两者在`ping`命令下的不同表现：

```bash
# DROP
PING 10.37.129.9 (10.37.129.9): 56 data bytes
Request timeout for icmp_seq 0
Request timeout for icmp_seq 1
Request timeout for icmp_seq 2
Request timeout for icmp_seq 3
Request timeout for icmp_seq 4

# REJECT
PING 10.37.129.9 (10.37.129.9): 56 data bytes
92 bytes from centos-linux-6.5.host-only (10.37.129.9): Destination Port Unreachable
Vr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst
 4  5  00 5400 29a3   0 0000  40  01 3ab1 10.37.129.2  10.37.129.9

Request timeout for icmp_seq 0
92 bytes from centos-linux-6.5.host-only (10.37.129.9): Destination Port Unreachable
Vr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst
 4  5  00 5400 999d   0 0000  40  01 cab6 10.37.129.2  10.37.129.9
```

## firewalld

(1). 区域管理

```
通过将网络划分成不同的区域，制定出不同区域之间的访问控制策略来控制不同程序区域间传送的数据流。
例如，互联网是不可信任的区域，而内部网络是高度信任的区域。网络安全模型可以在安装，
初次启动和首次建立网络连接时选择初始化。该模型描述了主机所连接的整个网络环境的可信级别，并定义了新连接的处理方式。
```

(2). firewalld域
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHlnZw==,size_16,color_FFFFFF,t_70-20220617134856888.png)

注：firewalld的默认区域是public

> 以上来自：https://blog.csdn.net/lilygg/article/details/84981537

### 基础

```bash
yum install firewalld firewalld-config
firewall-cmd --state		# 查看状态
systemctl status firewalld.service		# 服务相关
firewall-cmd --reload		# 重载防火墙配置
```

### 相关命令

```bash
# 获取支持的区域列列表
firewall-cmd --get-zones
# 列出全部启用的区域的特性
firewall-cmd --list-all-zones
firewall-cmd --get-default-zone

# 查看防火墙已放行端口(外部可通过此端口访问服务器)
firewall-cmd --permanent --list-port
# 查看当前开了哪些端口,每个服务对应/usr/lib/firewalld/services下面一个xml文件
firewall-cmd --list-services
# 查看还有哪些服务可以打开
firewall-cmd --get-services
# 查看端口相关情况
firewall-cmd --zone=public --query-port=80/tcp

# 删除
firewall-cmd --zone=public --remove-port=80/tcp --permanent

# 开启某端口(放行此端口) --permanent标识永久生效，没有此参数重启后端口失效
firewall-cmd --zone=public --add-port=80/tcp --permanent
# 批量放行
firewall-cmd --zone=public --add-port=7000-7005/udp --permanent
# 关闭
firewall-cmd --zone=public --remove-port=80/tcp --permanent

# 端口转发，ex: 转发22端口到123端口
firewall-cmd --zone=external --add-forward-port=22:porto=tcp:toport=123
```

### 其他

```bash
 # 启用应急模式，阻断所有网络连接，以防出现紧急状况
 firewall-cmd --panic-on
 firewall-cmd --panic-off
```

## 参考链接

- 浅析Firewalld与Iptables：https://blog.csdn.net/lilygg/article/details/84981537
- iptables详解：https://www.xiebruce.top/1071.html

