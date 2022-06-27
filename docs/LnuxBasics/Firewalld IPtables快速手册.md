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