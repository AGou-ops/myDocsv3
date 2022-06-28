# ipvsadm 参数 

## ipvsadm简介

ipvsadm是linux下的LVS虚拟服务器的管理工具，LVS工作于内核空间，而ipvsadm则提供了用户空间的接口。

## ipvsadm相关文件

```
服务名:         ipvsadm.service
主程序：        /usr/sbin/ipvsadm
规则保存工具：  /usr/sbin/ipvsadm-save
规则重载工具：  /usr/sbin/ipvsadm-restore
配置文件：      /etc/sysconfig/ipvsadm-config
```

## 语法

### 管理集群服务

```bash
ipvsadm -A|E -t|u|f service-address:port [-s scheduler] [-p [timeout]]
-A  创建一个LVS集群
-E  修改一个LVS集群
-C  清空LVS规则
-R  重载LVS规则，重载规则时需要利用重定向<
-S  保存
-Z  清空计数器
-L  查看LVS规则
    -n：        以数字形式输出地址和端口号
    --exact：   扩展信息，精确值
    -c：        当前IPVS连接输出
    --stats：   统计信息
    --rate ：   输出速率信息

ipvsadm -D -t|u|f service-address
-D  删除

service-address：
    -t|u|f：创建LVS集群服务为tcp/udp/firewall mark服务
    -t：TCP协议的端口，VIP:TCP端口
    -u：UDP协议的端口，VIP:UDP端口
    -f：firewall MARK，标记，一个数字

[-s scheduler]：指定集群的调度算法，默认为wlc(加权最少链路)
```

### 管理集群服务上的RealServer

```bash
ipvsadm -a|e -t|u|f service-address -r server-address [-g|i|m] [-w weight]

server-address：
格式：rip[:port] 如省略port，不作端口映射

-a  添加一个RealServer到集群中。
-d  删除一个RealServer服务器
-r  指定将要添加的Realserver的IP地址。
-m  表示LVS集群的工作模式为LVS-NAT模式
-g  表示LVS集群的工作模式为LVS-DR模式，默认
-i  表示LVS集群的工作模式为LVS-TUN模式
-w  权重
```

## 示例

1. 管理虚拟服务

- 添加一个虚拟服务192.168.1.100:80，使用轮询算法

　　`ipvsadm -A -t 192.168.1.100:80 -s rr`

- 修改虚拟服务的算法为加权轮询

　　`ipvsadm -E -t 192.168.1.100:80 -s wrr`

- 删除虚拟服务

　　`ipvsadm -D -t 192.168.1.100:80`

2. 管理真实服务

- 添加一个真实服务器192.168.1.123，使用DR模式，权重2

　　`ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.123 -g -w 2`

- 修改真实服务器的权重

　　`ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.123 -g -w 5`

- 删除真实服务器

　　`ipvsadm -d -t 192.168.1.100:80 -r 192.168.1.123`

3. 查看统计

- 查看当前配置的虚拟服务和各个RS的权重

　　`ipvsadm -Ln`

- 查看当前ipvs模块中记录的连接（可用于观察转发情况）

　　`ipvsadm -lnc`

- 查看ipvs模块的转发情况统计

　　`ipvsadm -Ln --stats | --rate`