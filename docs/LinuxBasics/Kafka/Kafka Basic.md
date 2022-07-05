# Kafka Basic

## Kafka 简介

Kafka是最初由Linkedin公司开发，是一个分布式、分s区的、多副本的、多订阅者，基于zookeeper协调的分布式日志系统（也可以当做MQ系统），常见可以用于web/nginx日志、访问日志，消息服务等等，Linkedin于2010年贡献给了Apache基金会并成为顶级开源项目。

主要应用场景是：**日志收集系统和消息系统**。

Kafka主要设计目标如下：

- 以时间复杂度为O(1)的方式提供消息持久化能力，即使对TB级以上数据也能保证常数时间的访问性能。
- 高吞吐率。即使在非常廉价的商用机器上也能做到单机支持每秒100K条消息的传输。
- 支持Kafka Server间的消息分区，及分布式消费，同时保证每个partition内的消息顺序传输。
- 同时支持离线数据处理和实时数据处理。
- 支持在线水平扩展

官方简介：http://kafka.apache.org/intro

Kafka架构：

![](https://images2018.cnblogs.com/blog/1385722/201808/1385722-20180804221732434-2116774825.png "zk Arch")

存储机制：

![img](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/bVbDJMc.png)

- `topic`： 可以理解为一个消息队列的名字
- `partition`：为了实现扩展性，一个非常大的topic可以分布到多个 broker（即服务器）上，一个topic可以分为多个partition，每个partition是一个有序的队列
- `segment`：partition物理上由多个segment组成
- `message`：每个segment文件中实际存储的每一条数据就是message
- `offset`：每个partition都由一系列有序的、不可变的消息组成，这些消息被连续的追加到partition中，partition中的每个消息都有一个连续的序列号叫做offset,用于partition唯一标识一条消息

## Kafka 安装与部署

### 单机部署（single broker）

1. 首先从[官方下载站点](http://kafka.apache.org/downloads)获取所需版本的二进制包并解压缩：

```bash
wget http://apache.mirrors.hoobly.com/kafka/2.5.0/kafka_2.13-2.5.0.tgz
tar xf kafka_2.13-2.5.0.tgz
cd kafka_2.13-2.5.0
```

2. 启动服务：

Kafka依赖于`ZooKeeper`服务器，可以使用 kafka 附带的脚本来启动单节点 ZooKeeper 实例：

```bash
> bin/zookeeper-server-start.sh config/zookeeper.properties
```

现在，启动`Kafka`服务：

```bash
> bin/kafka-server-start.sh config/server.properties
```

3. 创建一个 `topic`：

```bash
# 创建一个单节点，单分区名为test的topic
> bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
```

查看当前运行的`topic`有哪些：

```bash
> bin/kafka-topics.sh --list --bootstrap-server localhost:9092
test
```

4. 发送一些信息：

Kafka带有一个命令行客户端，它将从文件或标准输入中获取输入，并将其作为消息发送到 Kafka 集群。默认情况下，每行将作为单独的消息发送：

```bash
# 使用以下命令将生产者的信息发往broker
> bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test
hello kafka
kafka
# kafka-console-producer.sh --broker-list node01:9093,node01:9094,node01:9095 --topic wzxmt
```

5. 启动一个消费者`consumer`：

```bash
> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
# 可以看到生产者发出的信息
hello kafka
kafka
# kafka-console-consumer.sh --bootstrap-server node01:2181 --from-beginning --topic wzxmt
```

### 集群部署（Mutil-broker）

因手头资源有限，故用单台主机模拟集群。

1. 首先，为每一个`broker`创建一个配置文件：

```bash
> cp config/server.properties config/server-1.properties
> cp config/server.properties config/server-2.properties
> cp config/server.properties config/server-3.properties
```

分别修改这些文件的以下属性：

```bash
# --------- config/server-1.properties --------------
broker.id=1
# 监听
listeners=PLAINTEXT://:9091		# 注意：早些版本的Kafka用的时 port 字段。。
# 日志目录
log.dirs=/data/kafka/logs-1
# 配置zookeeper的连接，当zookeeper为集群时使用
# zookeeper.connect=node01:2181

# --------- config/server-2.properties --------------
broker.id=2
listeners=PLAINTEXT://:9092
log.dirs=/data/kafka/logs-2
# zookeeper.connect=node02:2181

# --------- config/server-3.properties --------------
broker.id=2
listeners=PLAINTEXT://:9093
log.dirs=/data/kafka/logs-3
# zookeeper.connect=node03:2181
```

为其创建日志文件夹，`mkdir -p /data/kafka/{logs-1,logs-2,logs-3}`

2. 分别启动这三个 broker：

```bash
> bin/kafka-server-start.sh config/server-1.properties &
...
> bin/kafka-server-start.sh config/server-2.properties &
...
> bin/kafka-server-start.sh config/server-3.properties &
...
```

3. 创建`topic`（指定副本数量为3）：

```bash
> bin/kafka-topics.sh --create --bootstrap-server  localhost:9092 --replication-factor 3 --partitions 1 --topic my-replicated-topic
```

查看所有的`topic`列表信息：

```bash
> bin/kafka-topics.sh --list --bootstrap-server localhost:9092
```

查看特定 topic 的详细信息：

```bash
[root@master kafka_2.13-2.5.0]\# bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic
Topic: my-replicated-topic      PartitionCount: 1       ReplicationFactor: 3    Configs: segment.bytes=1073741824
        Topic: my-replicated-topic      Partition: 0    Leader: 2       Replicas: 2,1,3 Isr: 2,1,3
```

4. 发送一些信息到`topic`：

```bash
> bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic my-replicated-topic
...
hello kafka
kafka
```

消费这些信息：

```bash
> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic
...
hello kafka
kafka
```

:information_source: 测试`leader`宕掉： 

```bash
[root@master kafka_2.13-2.5.0]\# ps aux | grep server-2.properties
root      `32410`  9.1 18.9 4025076 353104 pts/6  Sl   02:48   0:16 ...
> kill -9 32410
```

`leader`节点已切换到`observer`之一，并且该节点不再位于同步副本集中：

```bash
[root@master kafka_2.13-2.5.0]\# bin/kafka-topics.sh --describe --bootstrap-server localhost:9091  --topic my-replicated-topic
Topic: my-replicated-topic      PartitionCount: 1       ReplicationFactor: 3    Configs: segment.bytes=1073741824
        Topic: my-replicated-topic      Partition: 0    Leader: 3       Replicas: 2,3,1 Isr: 3,1
```

但是此前发送的信息依然存在：

```bash
> bin/kafka-console-consumer.sh --bootstrap-server localhost:9091  --from-beginning --topic my-replicated-topic
...
hello kafka
kafka
```

## 附：`server.properties` 参数说明

```bash
#broker的全局唯一编号，不能重复，只能是数字
broker.id=1
#此处的host.name为本机IP(重要),如果不改,则客户端会抛出:Producerconnection to node01:9092 unsuccessful 错误!
# host.name=10.0.0.11
#用来监听链接的端口，producer或consumer将在此端口建立连接
# port=9092
# 监听
listeners=PLAINTEXT://:9091	
#处理网络请求的线程数量
num.network.threads=3
#用来处理磁盘IO的线程数量
num.io.threads=8
#发送套接字的缓冲区大小
socket.send.buffer.bytes=102400
#接受套接字的缓冲区大小
socket.receive.buffer.bytes=102400
#请求套接字的缓冲区大小
socket.request.max.bytes=104857600
#kafka消息存放的路径(持久化到磁盘)
log.dirs=/data/kafka/logs
#topic在当前broker上的分片个数
num.partitions=2
#用来恢复和清理data下数据的线程数量
num.recovery.threads.per.data.dir=1
#segment文件保留的最长时间，超时将被删除
log.retention.hours=168
#滚动生成新的segment文件的最大时间
log.roll.hours=168
#日志文件中每个segment的大小，默认为1G
log.segment.bytes=1073741824
#周期性检查文件大小的时间
log.retention.check.interval.ms=300000
#日志清理是否打开
log.cleaner.enable=true
#broker需要使用zookeeper保存meta数据
zookeeper.connect=node01:2181,node02:2181,node03:2181
#zookeeper链接超时时间
zookeeper.connection.timeout.ms=6000
#partion buffer中，消息的条数达到阈值，将触发flush到磁盘
log.flush.interval.messages=10000
#消息buffer的时间，达到阈值，将触发flush到磁盘
log.flush.interval.ms=3000
#删除topic需要server.properties中设置delete.topic.enable=true否则只是标记删除
delete.topic.enable=true
#延迟初始使用者重新平衡的时间（生产用3）
group.initial.rebalance.delay.ms=0
#broker能接收消息的最大字节数
message.max.bytes=2000000000
#broker可复制的消息的最大字节数
replica.fetch.max.bytes=2000000000
#消费者端的可读取的最大消息
fetch.message.max.bytes=2000000000
```

不同节点之间只需要修改`server.properties `的` broker.id`即可。

## 参考链接

* Kafka 架构原理：https://juejin.im/post/5e217c3fe51d450200787f23Kafka 
* Kafka文件存储机制：https://segmentfault.com/a/1190000021824942
* QuickStart: http://kafka.apache.org/quickstart
* http://kafka.apache.org/quickstart#quickstart_kafkaconnect