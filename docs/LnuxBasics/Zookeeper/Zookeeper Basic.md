# Zookeeper Basic 

## Zookeeper 简介

　ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，是Hadoop和Hbase的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：*配置维护、域名服务、分布式同步、组服务等。*
　　ZooKeeper的目标就是封装好复杂易出错的关键服务，将简单易用的接口和性能高效、功能稳定的系统提供给用户。
　　ZooKeeper包含一个简单的原语集，提供Java和C的接口。
　　ZooKeeper代码版本中，提供了分布式独享锁、选举、队列的接口，代码在`$zookeeper_home\src\recipes`。其中分布锁和队列有Java和C两个版本，选举只有Java版本。

详细参考官方WiKi：https://cwiki.apache.org/confluence/display/ZOOKEEPER/Index

## ZK 安装

:information_source:zk 依赖于 java 环境，所以需要提前配置好 java 环境，在此不再详细说明。

```bash
yum install -y java-1.8.0-openjdk-devel java-1.8.0-openjdk
# 添加环境变量
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.252.b09-2.el7_8.x86_64
PATH=$PATH:$JAVA_HOME/bin
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JAVA_HOME  CLASSPATH  PATH 
```

首先从官网获取zk二进制安装包：https://zookeeper.apache.org/releases.html

下载所需版本并对其解压缩：

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.6.1/apache-zookeeper-3.6.1-bin.tar.gz
tar xf apache-zookeeper-3.6.1-bin.tar.gz
```

### 作为独立节点启动：

为 ZK 创建数据目录和日志存放目录：

```bash
mkdir -pv /data/zookeeper
# mkdir -pv /var/log/zookeeper
```

复制`zoo_sample.cfg`样例文件并更名为`zoo.cfg`：

```bash
cp -a conf/zoo_sample.cfg conf/zoo.cfg
# 文件内容如下：
[root@master apache-zookeeper-3.6.1-bin]\# egrep -v "^#|^$" conf/zoo.cfg
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/data/zookeeper
dataLogDir=/var/log/zookeeper
clientPort=2181
```

启动 ZooKeeper：

```bash
bin/zkServer.sh start
```

连接到 ZooKeeper：

```bash
[root@master apache-zookeeper-3.6.1-bin]\# bin/zkCli.sh -server 127.0.0.1:2181
...
[zk: 127.0.0.1:2181(CONNECTED) 0] help			# 使用help命令获取帮助信息
```

详细命令参考：https://zookeeper.apache.org/doc/r3.6.1/zookeeperCLI.html

### 集群搭建

修改配置文件，大致内容如下所示：

```bash
[root@master apache-zookeeper-3.6.1-bin]\# egrep -v "^#|^$" conf/zoo.cfg
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/data/zookeeper
# dataLogDir=/var/log/zookeeper
clientPort=2181
server.1=172.16.1.128:2888:3888
server.2=172.16.1.134:2888:3888
server.3=172.16.1.142:2888:3888
```

在`/data/zookeeper`目录下创建一个`myid`文件用于记录该 zookeeper 在集群中的id：

```bash
echo 1 > /data/zookeeper/myid
```

同样在`134`和`136`主机上进行类似操作：

```bash
echo 2 > /data/zookeeper/myid
echo 3 > /data/zookeeper/myid
```

最后在三台主机上分别启动`zk`：

```bash
bin/zkServer.sh start
```

查看当前主机角色：

```bash
[root@node01 apache-zookeeper-3.6.1-bin]\# bin/zkServer.sh status
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /root/apache-zookeeper-3.6.1-bin/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
`Mode: follower`
[root@node02 apache-zookeeper-3.6.1-bin]\# bin/zkServer.sh status
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /root/apache-zookeeper-3.6.1-bin/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
`Mode: leader`
...
```

使用`zkcli`连接某一主机：

```bash
bin/zkCli.sh -server 172.16.1.142:2181
```

测试：

```bash
# 在任一节点创建数据
[zk: 172.16.1.134:2181(CONNECTED) 0] create /test test
Created /test
[zk: 172.16.1.134:2181(CONNECTED) 1] quit		# 退出
# 在其他节点查看
[zk: 172.16.1.128:2181(CONNECTED) 0] get /test
test
```

## zkcli 常用操作

```bash
connect 172.16.1.13:2181		# 切换到其他节点
# 增加节点
create /zk_test my_data
# 增加临时节点，注意：临时节点在当前终端退出后失效
create -e /test2
# 创建序列化（顺序）节点
create -s /test1/test2
# 增加子节点
create /test1/test2 test1-2		# 确保父节点test1存在
# 查看
[zk: 127.0.0.1:2181(CONNECTED) 7] ls /test1
[test2]

# 查询节点
[zk: 127.0.0.1:2181(CONNECTED) 8] get /test1
test1
# 修改节点
[zk: 127.0.0.1:2181(CONNECTED) 10] set /test1 test001
# 删除节点
[zk: 127.0.0.1:2181(CONNECTED) 11] delete /test1/test2		# 当节点有子节点时，不能删除节点
[zk: 127.0.0.1:2181(CONNECTED) 14] rmr /test1			# 递归删除节点
```

## zoo.cfg 文件详解

```bash
#ZK中的时间配置最小但域，其他时间配置以整数倍tickTime计算
tickTime=2000
#Leader允许Follower启动时在initLimit时间内完成数据同步，单位：tickTime
initLimit=10
#Leader发送心跳包给集群中所有Follower，若Follower在syncLimit时间内没有响应，那么Leader就认为该follower已经挂掉了，单位：tickTime
syncLimit=5
#配置ZK的数据目录
dataDir=/usr/local/zookeeper/data
#用于接收客户端请求的端口号
clientPort=2181
#配置ZK的日志目录
dataLogDir=/usr/local/zookeeper/logs
#ZK集群节点配置，端口号2888用于集群节点之间数据通信，端口号3888用于集群中Leader选举
server.1=172.16.1.128:2888:3888
server.2=172.16.1.134:2888:3888
server.3=172.16.1.142:2888:3888
```



## 参考资料

* ZooKeeper Getting Started Guid: https://zookeeper.apache.org/doc/r3.6.1/zookeeperStarted.html
* zkcli 命令概览：https://www.cnblogs.com/yuanyee/p/6282035.html

