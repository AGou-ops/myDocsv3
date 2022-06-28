# DHCP 简单使用 

## 简介

**动态主机设置协议**（英语：**D**ynamic **H**ost **C**onfiguration **P**rotocol，缩写：**DHCP**）是一个用于[IP](https://zh.wikipedia.org/wiki/网际协议)网络的[网络协议](https://zh.wikipedia.org/wiki/网络协议)，位于[OSI模型](https://zh.wikipedia.org/wiki/OSI模型)的[应用层](https://zh.wikipedia.org/wiki/应用层)，使用[UDP](https://zh.wikipedia.org/wiki/用户数据报协议)协议工作，主要有两个用途：

- 用于内部网或网络服务供应商自动分配[IP地址](https://zh.wikipedia.org/wiki/IP地址)给用户
- 用于内部网管理员对所有电脑作中央管理

服务器端工具有:

* dhcp: 只提供`dhcp`服务
* dnsmasq: 轻量级,提供`dhcp`和`dns`服务

## 安装与配置文件

```bash
 yum install -y dhcp
```

通过`rpm -ql dhcp`可以了解到

1. `dhcp` 提供两个程序,一个是`dhcpd`(dhcp服务器端守护进程),另一个是`dhcrelay`(dhcp中继代理服务)
2. `dhcp`有三个`UNIT FILE`启动服务时应当分清出自己要启动的服务

配置文件`/etc/dhcp/dhcp.conf`:

该配置文件默认内容为空,程序包提供了示例配置文件,我们可以直接拿来修改修改

`cp /usr/share/doc/dhcp-4.2.5/dhcpd.conf.example ./dhcpd.conf`

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
}
# 为特定主机分配固定IP地址
host apex {
   hardware ethernet 00:0c:29:b8:73:9e;
   fixed-address 192.168.99.99;
}
```

修改完配置文件需要重启dhcpd,`systemctl restart dhcpd`

查看dhcpd 工作情况可以查看其分配情况:

```bash
[root@master ~]\# less /var/lib/dhcpd/dhcpd.leases
# The format of this file is documented in the dhcpd.leases(5) manual page.
# This lease file was written by isc-dhcp-4.2.5

lease 192.168.99.101 {
  starts 0 2020/04/19 19:53:55;
  ends 1 2020/04/20 07:53:55;
  tstp 1 2020/04/20 07:53:55;
  cltt 0 2020/04/19 19:53:55;
  binding state active;
  next binding state free;
  rewind binding state free;
  hardware ethernet 00:0c:29:ad:e1:01;
  client-hostname "master";
}
server-duid "\000\001\000\001&/d^\000\014)\255\341\001";
```

## dhclient 使用

默认情况下,dhcp服务端监听的端口是`udp`的`67`号端口,客户端`dhclient`则监听`udp`的`68`号端口

在前台查看网络地址信息的获取情况(第二次执行):

```bash
[root@node01 ~]\# dhclient -d		# -d 运行在前台,需要特别注意
Internet Systems Consortium DHCP Client 4.2.5
Copyright 2004-2013 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/ens33/00:0c:29:d1:17:17
Sending on   LPF/ens33/00:0c:29:d1:17:17
Sending on   Socket/fallback
DHCPREQUEST on ens33 to 255.255.255.255 port 67 (xid=0x2447b4d8)
DHCPACK from 192.168.159.129 (xid=0x2447b4d8)
bound to 192.168.99.103 -- renewal in 18303 seconds.
```

可以看到从本地局域网中的DHCP服务器中获取到了IP地址等相关信息.

## 参考链接

* redhat-dhcp服务器:https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/7/html/networking_guide/sec-dhcp-configuring-server
* dhcp-中继服务器:https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/7/html/networking_guide/dhcp-relay-agent