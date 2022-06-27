# HAProxy Basic 

## HAProxy简介

HAProxy提供高可用性、负载均衡以及基于TCP和HTTP应用的代理，支持虚拟主机，它是免费、快速并且可靠的一种解决方案。

HAProxy特别适用于那些负载特大的web站点，这些站点通常又需要会话保持或七层处理。

HAProxy运行在当前的硬件上，完全可以支持数以万计的并发连接。并且它的运行模式使得它可以很简单安全的整合进您当前的架构中， 同时可以保护你的web服务器不被暴露到网络上。

HAProxy实现了一种事件驱动, 单一进程模型，此模型支持非常大的并发连接数。多进程或多线程模型受内存限制 、系统调度器限制以及无处不在的锁限制，很少能处理数千并发连接。事件驱动模型因为在有更好的资源和时间管理的用户空间(User-Space) 实现所有这

些任务，所以没有这些问题。此模型的弊端是，在多核系统上，这些程序通常扩展性较差。这就是为什么他们必须进行优化以 使每个CPU时间片(Cycle)做更多的工作。

## HAProxy安装

### 直接通过yum仓库安装

`yum install -y haproxy`,默认安装版本为`1.5.18`(截止目前为止)

### 编译安装

1. 从[官方仓库](http://www.haproxy.org/download/)下载源码包,并解压缩

```bash
wget http://www.haproxy.org/download/1.8/src/haproxy-1.8.25.tar.gz
tar xf haproxy-1.8.25.tar.gz
```

2. 编译及安装

```bash
cd haproxy-1.8.25
# 查看安装说明
$ less README
...
To build haproxy, you have to choose your target OS amongst the following ones
and assign it to the TARGET variable :

  - linux26     for Linux 2.6 and above
  - linux2628   for Linux 2.6.28, 3.x, and above (enables splice and tproxy)

...
# 查看当前内核版本
$ uname -r
3.10.0-1062.18.1.el7.x86_64			# 所以使用linux2628来进行编译
# 开始编译
make TARGET=linux2628 ARCH=x86_64 PREFIX=/usr/local/haproxy
make install PREFIX=/usr/local/haproxy
```

3. 启动

```bash
/usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/haproxy.cfg
# 使用软连接方便使用
ln -sv /usr/local/haproxy/sbin/haproxy /usr/sbin/haproxy
```

4. 为haproxy创建相关目录

```bash
mkdir -pv /usr/local/haproxy/conf.d     # 为多配置文件准备
mkdir -pv /usr/local/haproxy/logs		# haproxy日志目录,可做软连接

mkdir -pv /etc/haproxy/conf.d                      # 创建主配置目录
touch /usr/local/haproxy/haproxy.cfg  	 # 创建配置文件
ln -sv /usr/local/haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg 			# 添加配置文件软连接方便管理
ln -sv /usr/local/haproxy/conf.d /etc/haproxy/conf.d
```

5. 为haproxy添加到系统服务或者创建`UNIT file`方便管理

添加到系统服务:

```bash
cp /root/haproxy-1.8.25/examples/haproxy.init /etc/init.d/haproxy		# 前面那个文件为源码包里面的示例文件,按照需求修改即可
chmod 755 /etc/init.d/haproxy
chkconfig --add haproxy
chkconfig haproxy on
chkconfig --list | grep haproxy
```

添加到`UNIT FILE`:

```bash
[root@master ~]\# cat /usr/lib/systemd/system/haproxy.service
[Unit]
Description=HAProxy Load Balancer
After=syslog.target network.target

[Service]
EnvironmentFile=/etc/sysconfig/haproxy
ExecStart=/usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/haproxy.cfg -p /run/haproxy.pid $OPTIONS
ExecReload=/bin/kill -USR2 $MAINPID
KillMode=mixed

[Install]
WantedBy=multi-user.target
```

## haproxy命令行工具

```bash
# 检查配置文件语法
haproxy -c -f /etc/haproxy/haproxy.cfg

# 以daemon模式启动，以systemd管理的daemon模式启动
haproxy -D -f /etc/haproxy/haproxy.cfg [-p /var/run/haproxy.pid]
haproxy -Ds -f /etc/haproxy/haproxy.cfg [-p /var/run/haproxy.pid]

# 启动调试功能，将显示所有连接和处理信息在屏幕
haproxy -d -f /etc/haproxy/haproxy.cfg

# restart。需要使用st选项指定pid列表
haproxy -f /etc/haproxy.cfg [-p /var/run/haproxy.pid] -st `cat /var/run/haproxy.pid`

# graceful restart，即reload。需要使用sf选项指定pid列表
haproxy -f /etc/haproxy.cfg [-p /var/run/haproxy.pid] -sf `cat /var/run/haproxy.pid`

# 显示haproxy编译和启动信息
haproxy -vv
```

## 参考链接

* 官方站点:http://www.haproxy.org/
* 1.8官方文档:http://cbonte.github.io/haproxy-dconv/1.8/configuration.html

