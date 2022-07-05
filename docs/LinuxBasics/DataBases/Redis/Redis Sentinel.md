# Resis Sentinel    

## Sentinel 简介

哨兵是基于主从模式做的一定变化，它能够为Redis提供了高可用性。在实际生产中，服务器难免不会遇到一些突发状况：服务器宕机，停电，硬件损坏等。这些情况一旦发生，其后果往往是不可估量的。而哨兵模式在一定程度上能够帮我们规避掉这些意外导致的灾难性后果。其实，哨兵模式的核心还是主从复制。只不过相对于主从模式在主节点宕机导致不可写的情况下，多了一个竞选机制——从所有的从节点竞选出新的主节点。竞选机制的实现，*是依赖于在系统中启动一个sentinel进程。*

- **监控**。Sentinel会不断检查主实例和从属实例是否按预期工作。
- **通知**。Sentinel可以通过API通知系统管理员，另一台计算机程序，其中一个受监控的Redis实例出现问题。
- **自动故障转移**。如果主服务器未按预期工作，Sentinel可以启动故障转移过程，其中从服务器升级为主服务器，其他其他服务器重新配置为使用新主服务器，并且使用Redis服务器的应用程序通知有关新服务器的地址。连接。
- **配置提供商**。Sentinel充当客户端服务发现的权限来源：客户端连接到Sentinels，以便询问负责给定服务的当前Redis主服务器的地址。如果发生故障转移，Sentinels将报告新地址

## Redis-Sentinel 集群搭建

手头资源有限，故采用单机部署模拟集群（1主2从3哨兵）

| 角色       | IP:PORT           |
| ---------- | ----------------- |
| master     | 172.16.1.135:7001 |
| slave-1    | 172.16.1.135:7002 |
| slave-2    | 172.16.1.135:7003 |
| sentinel-1 | 172.16.1.135:7004 |
| sentinel-2 | 172.16.1.135:7005 |
| sentinel-3 | 172.16.1.135:7006 |

目录结构参考 [Redis Cluster](./Redis Cluster.md)

在`master`主机上，修改其部分配置文件：

```bash
# 将默认监听端口改为7001
port 7001
bind 172.16.1.135
```

在两个从服务器`slave-1`和`slave-2`主机上，修改其部分配置文件：

```bash
# 指定 master 主机
slaveof 172.16.1.135 7001
port 7002
bind 172.16.1.135
```

编辑三个 Sentinel 哨兵配置文件`sentinel.conf `：

```bash
# ---------- 简单配置 ----------
port 26380
dir "/etc/redis/26380"
sentinel monitor mymaster 127.0.0.1 6379 1
sentinel down-after-milliseconds mymaster 5000
# -----------------------------

# ---------------------- 配置详解 ----------------------

# bind注释掉，需要在外网访问，将protected-model改为no
protected-mode no

# 端口
port 7004		# 另外两个哨兵换为7005和7006

# 后台运行
daemonize yes

# pid文件
pidfile "/var/run/redis-sentinel-7004.pid"		# 另外两个哨兵换为7005和7006

# 日志文件
logfile "/var/log/redis/sentinel-7004.log"		# 另外两个哨兵换为7005和7006

# 目录
dir /data/soft/redis-sentinel/sentinel-7004/

# sentinel monitor <master-name> <ip> <redis-port> <quorum>
# 配置sentinel监控的master
# sentinel监控的master的名字叫做mymaster，地址为127.0.0.1:6379
# sentinel在集群式时，需要多个sentinel互相沟通来确认某个master是否真的死了；
# 数字2代表，当集群中有2个sentinel认为master死了时，才能真正认为该master已经不可用了。
sentinel monitor mymaster 172.16.1.135 7001 2

# sentinel auth-pass <master-name> <password>
# sentinel author-pass定义服务的密码，mymaster是服务名称，123456是Redis服务器密码
# sentinel auth-pass mymaster 123456

# sentinel down-after-milliseconds <master-name> <milliseconds>
# sentinel会向master发送心跳PING来确认master是否存活
# 如果master在“一定时间范围”内不回应PONG或者是回复了一个错误消息
# 那么这个sentinel会主观地认为这个master已经不可用了（SDOWN）
# 而这个down-after-milliseconds就是用来指定这个“一定时间范围”的，单位是毫秒。
sentinel down-after-milliseconds mymaster 30000

# sentinel parallel-syncs <master-name> <numreplicas>
# 在发生failover主备切换时，这个选项指定了最多可以有多少个slave同时对新的master进行同步
# 这个数字越小，完成failover所需的时间就越长
# 但是如果这个数字越大，就意味着越多的slave因为replication而不可用。
# 可以通过将这个值设为 1 来保证每次只有一个slave处于不能处理命令请求的状态。
sentinel parallel-syncs mymaster 1

# sentinel failover-timeout <master-name> <milliseconds>
# 实现主从切换，完成故障转移的所需要的最大时间值。
# 若Sentinel进程在该配置值内未能完成故障转移的操作，则认为本次故障转移操作失败。
sentinel failover-timeout mymaster 180000

# 指定Sentinel进程检测到Master-Name所指定的“Master主服务器”的实例异常的时候，所要调用的报警脚本。
# sentinel notification-script mymaster <script-path>

# 安全
# 避免脚本重置，默认值yes
# 默认情况下，SENTINEL SET将无法在运行时更改notification-script和client-reconfig-script。
# 这避免了一个简单的安全问题，客户端可以将脚本设置为任何内容并触发故障转移以便执行程序。
sentinel deny-scripts-reconfig yes
                                                                                          
```

依次启动 master、slave-1、slave-2、Sentinel-1..3：

```bash
# 启动主从节点
./redis-server redis.conf
# 启动哨兵节点
./redis-sentinel sentinel.conf
```

检查各服务启动状态：

```bash
root@ubuntu:/usr/local/redis/redis-cluster/7006\# ss -tnulp | grep redis
tcp   LISTEN  0       128              172.16.1.135:7001          0.0.0.0:*      users:(("redis-server",pid=3474,fd=6))                                         
tcp   LISTEN  0       128              172.16.1.135:7002          0.0.0.0:*      users:(("redis-server",pid=3481,fd=6))                                         
tcp   LISTEN  0       128              172.16.1.135:7003          0.0.0.0:*      users:(("redis-server",pid=3490,fd=6))                                         
tcp   LISTEN  0       128                   0.0.0.0:7004          0.0.0.0:*      users:(("redis-sentinel",pid=3549,fd=7))                                       
tcp   LISTEN  0       128                   0.0.0.0:7005          0.0.0.0:*      users:(("redis-sentinel",pid=3557,fd=7))                                       
tcp   LISTEN  0       128                   0.0.0.0:7006          0.0.0.0:*      users:(("redis-sentinel",pid=3563,fd=7))                                       
tcp   LISTEN  0       128                      [::]:7004             [::]:*      users:(("redis-sentinel",pid=3549,fd=6))                                       
tcp   LISTEN  0       128                      [::]:7005             [::]:*      users:(("redis-sentinel",pid=3557,fd=6))                                       
tcp   LISTEN  0       128                      [::]:7006             [::]:*      users:(("redis-sentinel",pid=3563,fd=6))                                       
```

登录`master`主节点，查看集群状态：

```bash
root@ubuntu:/usr/local/redis/redis-cluster/7001\# ./redis-cli -c -h 172.16.1.135 -p 7001
172.16.1.135:7001> info Replication
# Replication
role:master
connected_slaves:2
slave0:ip=172.16.1.135,port=7002,state=online,offset=39543,lag=1
slave1:ip=172.16.1.135,port=7003,state=online,offset=39681,lag=0
master_replid:3935af4082d83dd988c532e62e6cac461c07e89e
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:39819
master_repl_meaningful_offset:39819
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:39819
```

模拟测试 master 宕机故障：

```bash
./redis-cli -c -h 172.16.1.135 -p 7001 shutdown
```

登录`slave-2`查看集群状态：

```bash
172.16.1.135:7002> info Replication
# Replication
`role:master`
connected_slaves:1
slave0:ip=172.16.1.135,port=7003,state=online,offset=68742,lag=1
master_replid:6b151b80e7a11693ffbdaa60256a0d80542ce996
master_replid2:3935af4082d83dd988c532e62e6cac461c07e89e
master_repl_offset:68880
master_repl_meaningful_offset:68880
second_repl_offset:66222
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:68880
```

可以发现`slave-2`已经翻身做`master`节点了～

## Sentinel 管理命令

```shell
# 连接sentinel管理端口
[root@db01 26380]\# redis-cli -p 26380
# 检测状态，返回PONG
127.0.0.1:26380> PING
PONG
# 列出所有被监视的主服务器
127.0.0.1:26380> SENTINEL masters
# 列出所有被监视的从服务器
127.0.0.1:26380> SENTINEL slaves mymaster
# 返回给定名字的主服务器的IP地址和端口号
127.0.0.1:26380> SENTINEL get-master-addr-by-name mymaster
1) "127.0.0.1"
2) "6380"
# 重置所有名字和给定模式
127.0.0.1:26380> SENTINEL reset mymaster
# 当主服务器失效时，在不询问其他Sentinel意见的情况下，强制开始一次自动故障迁移。
127.0.0.1:26380> SENTINEL failover mymaster
```