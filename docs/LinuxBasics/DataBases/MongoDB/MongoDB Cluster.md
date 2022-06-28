# MongoDB 主从复制集群

基本原理：
基本构成是1主2从的结构，自带互相监控投票机制（Raft（MongoDB） Paxos（mysql MGR 用的是变种））
如果发生主库宕机，复制集内部会进行投票选举，选择一个新的主库替代原有主库对外提供服务。同时复制集会自动通知
客户端程序，主库已经发生切换了。应用就会连接到新的主库。

Replcation Set配置过程详解

## 1、规划

三个以上的mongodb节点（或多实例）

多实例：
（1）多个端口：28017、28018、28019、28020
（2）多套目录：

```shell
mkdir -p /mongodb/28017/conf /mongodb/28017/data /mongodb/28017/log
mkdir -p /mongodb/28018/conf /mongodb/28018/data /mongodb/28018/log
mkdir -p /mongodb/28019/conf /mongodb/28019/data /mongodb/28019/log
mkdir -p /mongodb/28020/conf /mongodb/28020/data /mongodb/28020/log
```

(3) 多套配置文件

```shell
/mongodb/28017/conf/mongod.conf
/mongodb/28018/conf/mongod.conf
/mongodb/28019/conf/mongod.conf
/mongodb/28020/conf/mongod.conf
```

(4)配置文件内容

```shell
vi /mongodb/28017/conf/mongod.conf
systemLog:
  destination: file
  path: /mongodb/28017/log/mongodb.log
  logAppend: true
storage:
  journal:
    enabled: true
  dbPath: /mongodb/28017/data
  directoryPerDB: true
  ##engine: wiredTiger
  wiredTiger:
    engineConfig:
      cacheSizeGB: 1
      directoryForIndexes: true
    collectionConfig:
      blockCompressor: zlib
    indexConfig:
      prefixCompression: true
processManagement:
  fork: true
net:
  port: 28017
replication:
  oplogSizeMB: 2048
  replSetName: my_repl
```

修改配置文件：

```shell
cp  /mongodb/28017/conf/mongod.conf  /mongodb/28018/conf/
cp  /mongodb/28017/conf/mongod.conf  /mongodb/28019/conf/
cp  /mongodb/28017/conf/mongod.conf  /mongodb/28020/conf/

sed 's##28017##28018##g' /mongodb/28018/conf/mongod.conf -i
sed 's##28017##28019##g' /mongodb/28019/conf/mongod.conf -i
sed 's##28017##28020##g' /mongodb/28020/conf/mongod.conf -i
```

------

(5)启动多个实例备用

```shell
mongod -f /mongodb/28017/conf/mongod.conf
mongod -f /mongodb/28018/conf/mongod.conf
mongod -f /mongodb/28019/conf/mongod.conf
mongod -f /mongodb/28020/conf/mongod.conf

netstat -lnp|grep 280
```

## 2、配置复制集：

（1）1主2从，从库普通从库

```shell
mongo --port 28017 admin
config = {_id: 'my_repl', members: [
                          {_id: 0, host: '10.0.0.53:28017'},
                          {_id: 1, host: '10.0.0.53:28018'},
                          {_id: 2, host: '10.0.0.53:28019'}]
          }

rs.initiate(config)
```

查询复制集状态

```shell
rs.status();
```

（2）1主1从1个arbiter

```shell
mongo -port 28017 admin

config = {_id: 'my_repl', members: [
                          {_id: 0, host: '10.0.0.53:28017'},
                          {_id: 1, host: '10.0.0.53:28018'},
                          {_id: 2, host: '10.0.0.53:28019',"arbiterOnly":true}]
          }


rs.initiate(config)
```

## 3、复制集管理操作：

（1）查看复制集状态：

```shell
rs.status();    //查看整体复制集状态
rs.isMaster(); // 查看当前是否是主节点
```

（2）添加删除节点

```shell
rs.add("ip:port"); // 新增从节点
rs.remove("ip:port"); // 删除一个节点
rs.addArb("ip:port"); // 新增仲裁节点
```

------

添加 arbiter节点

1、连接到主节点

```shell
[mongod@db03 ~]$ mongo --port 28018 admin
```

2、添加仲裁节点

```shell
my_repl:PRIMARY> rs.addArb("10.0.0.53:28020")
```

3、查看节点状态

```shell
my_repl:PRIMARY> rs.isMaster()
{
    "hosts" : [
        "10.0.0.53:28017",
        "10.0.0.53:28018",
        "10.0.0.53:28019"
    ],
    "arbiters" : [
        "10.0.0.53:28020"
    ],
```

删除一个节点

```shell
rs.remove("ip:port");
```

------

例子：

```shell
my_repl:PRIMARY> rs.remove("10.0.0.53:28019");
{ "ok" : 1 }
my_repl:PRIMARY> rs.isMaster()


rs.add("ip:port"); // 新增从节点
例子：
my_repl:PRIMARY> rs.add("10.0.0.53:28019")
{ "ok" : 1 }
my_repl:PRIMARY> rs.isMaster()
```

------

注：
添加特殊节点时，
1>可以在搭建过程中设置特殊节点
2>可以通过修改配置的方式将普通从节点设置为特殊节点
/*找到需要改为延迟性同步的数组号*/;

**特殊节点：**

> arbiter节点：主要负责选主过程中的投票，但是不存储任何数据，也不提供任何服务
> hidden节点：隐藏节点，不参与选主，也不对外提供服务。
> delay节点：延时节点，数据落后于主库一段时间，因为数据是延时的，也不应该提供服务或参与选主，所以通常会配合hidden（隐藏）

一般情况下会将delay+hidden一起配置使用

（3）配置延时节点（一般延时节点也配置成hidden）

```shell
cfg=rs.conf() 
cfg.members[0].priority=0
cfg.members[0].hidden=true
cfg.members[0].slaveDelay=120
rs.reconfig(cfg)
```

————目前状态——————-

我的需求是：把28019设置为hidden和delay

```shell
my_repl:PRIMARY> rs.status()
{

    "members" : [
        {
            "_id" : 0,
            "name" : "10.0.0.53:28017",
        },
        {
            "_id" : 1,
            "name" : "10.0.0.53:28018",

        },
        {
            "_id" : 3,
            "name" : "10.0.0.53:28020",

        },
        {
            "_id" : 4,
            "name" : "10.0.0.53:28019",

        }



cfg=rs.conf() 
cfg.members[3].priority=0
cfg.members[3].hidden=true
cfg.members[3].slaveDelay=120
rs.reconfig(cfg)
```

------

取消以上配置

```shell
cfg=rs.conf() 
cfg.members[3].priority=1
cfg.members[3].hidden=false
cfg.members[3].slaveDelay=0
rs.reconfig(cfg) 
```

------

配置成功后，通过以下命令查询配置后的属性

```shell
rs.conf();
```

## 4、副本集其他操作命令：

查看副本集的配置信息

```shell
admin> rs.config()
或者
admin> rs.conf()
```

查看副本集各成员的状态

```shell
admin> rs.status()
```

++++++++++++++++++++++++++++++++++++++++++++++++

```shell
--副本集角色切换（不要人为顺便操作）
admin> rs.stepDown()
注：
admin> rs.freeze(300) //锁定从，使其不会转变成主库
freeze()和stepDown单位都是秒。
```

+++++++++++++++++++++++++++++++++++++++++++++
–设置副本节点可读：在副本节点执行

```shell
admin> rs.slaveOk()
```

eg：

```shell
admin> use app
switched to db app
app> db.createCollection('a')
{ "ok" : 0, "errmsg" : "not master", "code" : 10107 }
```

查看副本节点

```shell
admin> rs.printSlaveReplicationInfo()
source: 192.168.1.22:27017
    syncedTo: Thu May 26 2016 10:28:56 GMT+0800 (CST)
    0 secs (0 hrs) behind the primary
```

> 文章转载自网络，仅做修改。