# Redis Cluster

## Redis-Cluster 集群概念

（1）由多个Redis服务器组成的分布式网络服务集群；

（2）集群之中有多个Master主节点，每一个主节点都可读可写；

（3）节点之间会互相通信，两两相连；

（4）Redis集群无中心节点。

### 集群节点复制

 在Redis-Cluster集群中，可以给每一个主节点添加从节点，主节点和从节点直接遵循主从模型的特性。

当用户需要处理更多读请求的时候，添加从节点可以扩展系统的读性能。

### 故障转移

Redis集群的主节点内置了类似Redis Sentinel的节点故障检测和自动故障转移功能，当集群中的某个主节点下线时，集群中的其他在线主节点会注意到这一点，并对已下线的主节点进行故障转移。

集群进行故障转移的方法和Redis Sentinel进行故障转移的方法基本一样，不同的是，在集群里面，故障转移是由集群中其他在线的主节点负责进行的，所以集群不必另外使用Redis Sentinel。 

### 集群分片策略

Redis-cluster分片策略，是用来解决key存储位置的。

集群将整个数据库分为16384个槽位slot，所有key-value数据都存储在这些slot中的某一个上。一个slot槽位可以存放多个数据，key的槽位计算公式为：`slot_number=crc16(key)%16384`，其中crc16为16位的循环冗余校验和函数。

集群中的每个主节点都可以处理0个至16383个槽，当16384个槽都有某个节点在负责处理时，集群进入上线状态，并开始处理客户端发送的数据命令请求。

Redis 集群使用数据分片（sharding）而非一致性哈希（consistency hashing）来实现： 一个 Redis 集群包含 16384 个哈希槽（hash slot）， 数据库中的每个键都属于这 16384 个哈希槽的其中一个， 集群使用公式 CRC16(key) % 16384 来计算键 key 属于哪个槽， 其中 CRC16(key) 语句用于计算键 key 的 CRC16 校验和 。

1. 节点 A 负责处理 0 号至 5500 号哈希槽。
2. 节点 B 负责处理 5501 号至 11000 号哈希槽。
3. 节点 C 负责处理 11001 号至 16384 号哈希槽。

![null](http://bak.agou-ops.top/uploads/redis/images/m_4d0eddb4cbb10a4882dafd941142339a_r.png)

### 集群重定向

由于Redis集群无中心节点，请求会随机发给任意主节点；

主节点只会处理自己负责槽位的命令请求，其它槽位的命令请求，该主节点会返回客户端一个转向错误；

客户端*根据错误中包含的地址和端口*重新向正确的负责的主节点发起命令请求。

### 主从复制原理

![image-20211103173116252](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/image-20211103173116252.png)

图片来源于网络。

## Redis-Cluster 集群搭建

手头资源有限，故采用单机部署集群（3主3从）

| 角色    | IP:PORT           |
| ------- | ----------------- |
| master1 | 172.16.1.135:7001 |
| slave1  | 172.16.1.135:7002 |
| master2 | 172.16.1.135:7003 |
| slave2  | 172.16.1.135:7004 |
| master3 | 172.16.1.135:7005 |
| slave3  | 172.16.1.135:7006 |

在`/etc/redis`目录下创建一个`redis-cluster`的文件夹，里面存放各节点的配置文件：

```bash
mkdir /usr/local/redis/redis-cluster -p
cd /usr/local/redis/redis-cluster && mkdir -pv 700{1..6}
```

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/redis/redis-1.png)

将程序及配置文件分别复制到各个节点文件夹中去：

```bash
 echo 700{2..6} | xargs -n 1 cp -ar 7001/*
```

修改部分配置文件（以7001为例）：

```shell
port 7001			# 改成对应的
bind 172.16.1.135
cluster-enabled yes
daemonized  yes
logfile /var/log/redis/redis-7001.log		# 改成对应的
```

修改完配置文件之后，启动各 redis 节点：

```bash
declare -i i=1; while ((i<7)); do cd /usr/local/redis/redis-cluster/700$i && ./redis-server redis.conf && sleep 1; let i++ ; done
```

查看各节点启动情况：

```bash
root@ubuntu:/usr/local/redis/redis-cluster\# ps aux | grep -v grep | grep redis
root       2534  0.3  0.2  64360  4176 ?        Ssl  14:00   0:00 ./redis-server 172.16.1.135:7001 [cluster]
root       2484  0.3  0.2  64360  4264 ?        Ssl  13:57   0:00 ./redis-server 172.16.1.135:7002 [cluster]
root       2499  0.3  0.2  64360  4156 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7003 [cluster]
root       2506  0.3  0.2  61288  4064 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7004 [cluster]
root       2513  0.3  0.2  61288  5180 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7005 [cluster]
root       2520  0.3  0.2  64360  5284 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7006 [cluster]
```

执行创建集群命令：

```bash
# 该工具位于编译安装之后的源码包的 src 目录中
# cd /root/redis-6.0.1/src
# 需要注意的是，在6.0版本中redis-trib.rb不再被支持，不可用
# ./redis-trib.rb create --replicas 1 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005  172.16.1.135:7006

# 所以在这里我使用 redis-cli 来进行部署
./redis-cli --cluster create 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005 172.16.1.135:7006 --cluster-replicas 1
```

期间会让你确认配置信息，如果检查无误，输入`yes`，然后回车即可.

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/redis/redis-2.png)

到这里，Redis-Cluster 部署就完成了。

查询集群信息，登录任意节点即可查询集群信息：

```bash
root@ubuntu:/usr/local/redis/redis-cluster/7001\# ./redis-cli -c -h 172.16.1.135 -p 7001

172.16.1.135:7001> cluster nodes
57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589712996000 3 connected 10923-16383
e87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589712998000 4 connected
542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 master - 0 1589713000951 2 connected 5461-10922
7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589712999000 5 connected
6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589712999945 6 connected
94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 myself,master - 0 1589712997000 1 connected 0-5460

172.16.1.135:7001> cluster info
cluster_state:ok
cluster_slots_assigned:16384
cluster_slots_ok:16384
cluster_slots_pfail:0
cluster_slots_fail:0
cluster_known_nodes:6
cluster_size:3
cluster_current_epoch:6
cluster_my_epoch:1
cluster_stats_messages_ping_sent:359
cluster_stats_messages_pong_sent:362
cluster_stats_messages_sent:721
cluster_stats_messages_ping_received:357
cluster_stats_messages_pong_received:359
cluster_stats_messages_meet_received:5
cluster_stats_messages_received:721
```

可以看到集群分片的情况，及其他详细的相关信息。

测试，某一主节点挂掉：

```bash
root@ubuntu:/usr/local/redis/redis-cluster/7001\# kill `ps aux | grep redis | grep 7001 | awk '{print $2}'`

# 登录 slave1 查看集群状态
172.16.1.135:7002> CLUSTER NODES
94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 master,fail - 1589713261516 1589713254000 1 disconnected 0-5460
7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589713313000 5 connected
57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589713313441 3 connected 10923-16383
e87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589713314452 4 connected
542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 myself,master - 0 1589713314000 2 connected 5461-10922
6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589713315463 6 connected 
```

slave1 已成功上任～

## 附录：快速搭建测试环境

```bash
# 创建多实例目录
[root@db01 ~]\#  mkdir -p /data/700{0..5}

# 编辑多实例配置文件
[root@db01 ~]\#  vim /data/7000/redis.conf
port 7000
daemonize yes
pidfile /data/7000/redis.pid
loglevel notice
logfile "/data/7000/redis.log"
dbfilename dump.rdb
dir /data/7000
protected-mode no
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes


[root@db01 ~]\#  vim /data/7001/redis.conf
port 7001
daemonize yes
pidfile /data/7001/redis.pid
loglevel notice
logfile "/data/7001/redis.log"
dbfilename dump.rdb
dir /data/7001
protected-mode no
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes


[root@db01 ~]\#  vim /data/7002/redis.conf
port 7002
daemonize yes
pidfile /data/7002/redis.pid
loglevel notice
logfile "/data/7002/redis.log"
dbfilename dump.rdb
dir /data/7002
protected-mode no
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes



[root@db01 ~]\#  vim /data/7003/redis.conf
port 7003
daemonize yes
pidfile /data/7003/redis.pid
loglevel notice
logfile "/data/7003/redis.log"
dbfilename dump.rdb
dir /data/7003
protected-mode no
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes



[root@db01 ~]\#  vim /data/7004/redis.conf
port 7004
daemonize yes
pidfile /data/7004/redis.pid
loglevel notice
logfile "/data/7004/redis.log"
dbfilename dump.rdb
dir /data/7004
protected-mode no
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes


[root@db01 ~]\#  vim /data/7005/redis.conf
port 7005
daemonize yes
pidfile /data/7005/redis.pid
loglevel notice
logfile "/data/7005/redis.log"
dbfilename dump.rdb
dir /data/7005
protected-mode no
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes

# 启动节点
[root@db01 ~]\#  redis-server /data/7000/redis.conf 
[root@db01 ~]\#  redis-server /data/7001/redis.conf 
[root@db01 ~]\#  redis-server /data/7002/redis.conf 
[root@db01 ~]\#  redis-server /data/7003/redis.conf 
[root@db01 ~]\#  redis-server /data/7004/redis.conf 
[root@db01 ~]\#  redis-server /data/7005/redis.conf 

# 检查端口
[root@db01 ~]\#  netstat -lntup|grep 700*
tcp        0      0 0.0.0.0:17003               0.0.0.0:*                   LISTEN      7433/redis-server *
tcp        0      0 0.0.0.0:17004               0.0.0.0:*                   LISTEN      7437/redis-server *
tcp        0      0 0.0.0.0:17005               0.0.0.0:*                   LISTEN      7443/redis-server *
tcp        0      0 0.0.0.0:7000                0.0.0.0:*                   LISTEN      7423/redis-server *
tcp        0      0 0.0.0.0:7001                0.0.0.0:*                   LISTEN      7425/redis-server *
tcp        0      0 0.0.0.0:7002                0.0.0.0:*                   LISTEN      7429/redis-server *
tcp        0      0 0.0.0.0:7003                0.0.0.0:*                   LISTEN      7433/redis-server *
tcp        0      0 0.0.0.0:7004                0.0.0.0:*                   LISTEN      7437/redis-server *
tcp        0      0 0.0.0.0:7005                0.0.0.0:*                   LISTEN      7443/redis-server *
tcp        0      0 0.0.0.0:17000               0.0.0.0:*                   LISTEN      7423/redis-server *
tcp        0      0 0.0.0.0:17001               0.0.0.0:*                   LISTEN      7425/redis-server *
tcp        0      0 0.0.0.0:17002               0.0.0.0:*                   LISTEN      7429/redis-server *
tcp        0      0 :::17003                    :::*                        LISTEN      7433/redis-server *
tcp        0      0 :::17004                    :::*                        LISTEN      7437/redis-server *
tcp        0      0 :::17005                    :::*                        LISTEN      7443/redis-server *
tcp        0      0 :::7000                     :::*                        LISTEN      7423/redis-server *
tcp        0      0 :::7001                     :::*                        LISTEN      7425/redis-server *
tcp        0      0 :::7002                     :::*                        LISTEN      7429/redis-server *
tcp        0      0 :::7003                     :::*                        LISTEN      7433/redis-server *
tcp        0      0 :::7004                     :::*                        LISTEN      7437/redis-server *
tcp        0      0 :::7005                     :::*                        LISTEN      7443/redis-server *
tcp        0      0 :::17000                    :::*                        LISTEN      7423/redis-server *
tcp        0      0 :::17001                    :::*                        LISTEN      7425/redis-server *
tcp        0      0 :::17002                    :::*                        LISTEN      7429/redis-server *

# 检查进程
[root@db01 ~]\#  ps -ef|grep redis
root       7423      1  0 18:30 ?        00:00:00 redis-server *:7000 [cluster]
root       7425      1  0 18:30 ?        00:00:00 redis-server *:7001 [cluster]
root       7429      1  0 18:30 ?        00:00:00 redis-server *:7002 [cluster]
root       7433      1  0 18:30 ?        00:00:00 redis-server *:7003 [cluster]
root       7437      1  0 18:30 ?        00:00:00 redis-server *:7004 [cluster]
root       7443      1  0 18:30 ?        00:00:00 redis-server *:7005 [cluster]
```

## 参考链接

* redis cluster-tutorial: https://redis.io/topics/cluster-tutorial/

