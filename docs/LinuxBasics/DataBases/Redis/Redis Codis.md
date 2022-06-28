# Redis Codis

[TOC]

##  Codis 简介

Codis 是一个分布式 Redis 解决方案, 对于上层的应用来说, 连接到 Codis Proxy 和连接原生的 Redis Server 没有显著区别 ([不支持的命令列表](https://github.com/CodisLabs/codis/blob/release3.2/doc/unsupported_cmds.md)), 上层应用可以像使用单机的 Redis 一样使用, Codis 底层会处理请求的转发, 不停机的数据迁移等工作, 所有后边的一切事情, 对于前面的客户端来说是透明的, 可以简单的认为后边连接的是一个内存无限大的 Redis 服务。

**Codis 3.x 组成部分：**

- **Codis Server**：基于 redis-3.2.8 分支开发。增加了额外的数据结构，以支持 slot 有关的操作以及数据迁移指令。具体的修改可以参考文档 [redis 的修改](https://github.com/CodisLabs/codis/blob/release3.2/doc/redis_change_zh.md)。
- **Codis Proxy**：客户端连接的 Redis 代理服务, 实现了 Redis 协议。 除部分命令不支持以外([不支持的命令列表](https://github.com/CodisLabs/codis/blob/release3.2/doc/unsupported_cmds.md))，表现的和原生的 Redis 没有区别（就像 Twemproxy）。
  - 对于同一个业务集群而言，可以同时部署多个 codis-proxy 实例；
  - 不同 codis-proxy 之间由 codis-dashboard 保证状态同步。
- **Codis Dashboard**：集群管理工具，支持 codis-proxy、codis-server 的添加、删除，以及据迁移等操作。在集群状态发生改变时，codis-dashboard 维护集群下所有 codis-proxy 的状态的一致性。
  - 对于同一个业务集群而言，同一个时刻 codis-dashboard 只能有 0个或者1个；
  - 所有对集群的修改都必须通过 codis-dashboard 完成。
- **Codis Admin**：集群管理的命令行工具。
  - 可用于控制 codis-proxy、codis-dashboard 状态以及访问外部存储。
- **Codis FE**：集群管理界面。
  - 多个集群实例共享可以共享同一个前端展示页面；
  - 通过配置文件管理后端 codis-dashboard 列表，配置文件可自动更新。
- **Storage**：为集群状态提供外部存储。
  - 提供 Namespace 概念，不同集群的会按照不同 product name 进行组织；
  - 目前仅提供了 Zookeeper、Etcd、Fs 三种实现，但是提供了抽象的 interface 可自行扩展。

![](https://images2018.cnblogs.com/blog/163084/201807/163084-20180703212324845-1586187945.png "各节点之间关系")

**codis的优缺点：**

- 优点：实现高并发读写，数据一致性高。
- 缺点：性能有较大损耗，故障切换无法保证不丢key。无法进行读写分离。

codis 有以下特点：

- 可以无缝迁移到codis，自带迁移工具
- 可以动态扩容和缩容
- 多业务完全透明，业务不知道运行的是codis
- 支持多核心CPU，twemproxy只能单核
- codis是中心基于proxy的设计，是客户端像连接单机一样操作proxy
- 有部分命令不能支持，比如keys *等
- 支持group划分，组内可以设置一个主多个从，通过sentinel 监控redis主从，当主down了自动将从切换为主
- 设置的进程要最大等于CPU的核心，不能超过CPU的核心数
- 其依赖于zookeeper，里面保存的key是redis主机位置，因此zookeeper要做高可用
- 监控可以使用接口和dashboard

## Codis 编译安装

1. 安装 go 运行环境：

```bash
# 这里为了方便起见，我直接使用仓库进行安装
apt install -y golang
```

2. 设置编译环境：

**注意 `$GOPATH` 是本机所有第三方库 go 项目所在目录，Codis 仅是其中之一。**

添加 `$GOPATH/bin` 到 `$PATH`，例如：`PATH=$PATH:$GOPATH/bin`。

编辑`.profile`文件，在行尾添加以下内容

```bash
export GOPATH=/home/codis/gopath
export PATH=$PATH:$GOPATH/bin
```

执行`source .profile`使其生效、

```bash
$ go env GOPATH
/home/codis/gopath
```

3. 从官方仓库下载 Codis 的源码包：

```bash
mkdir -p $GOPATH/src/github.com/CodisLabs
cd $_ && git clone https://github.com/CodisLabs/codis.git -b release3.2
```

4. 编译安装：

```bash
cd $GOPATH/src/github.com/CodisLabs/codis
make
```

编译安装完成之后，会在`bin`目录下生成以下文件：

```bash
$  ls bin/
assets       codis-dashboard  codis-ha     codis-server     redis-cli       version
codis-admin  codis-fe         codis-proxy  redis-benchmark  redis-sentinel
```

:information_source:此外，可以直接从官方仓库下载对应的`release`包进行使用。

## redis-codis 集群手动搭建

| IP                                         | 服务                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| 172.16.1.128 & 172.16.1.134 & 172.16.1.138 | codis-server(主从)【3台】，codis-dashboard【1台】，codis-proxy【3台】，codis-fe【1台】 |
| 172.16.1.128 & 172.16.1.134 & 172.16.1.138 | zookeeper                                                    |

1. 编译安装 codis 参考上面的[Codis 编译安装](#Codis 编译安装)
2. 编译安装 zk 参考 [zookeeper 部署安装](../../Zookeeper/Zookeeper Basic.md)

编辑`zookeeper`的配置文件`zoo.conf`，添加以下内容：

```bash
...
dataDir=/data/zookeeper
dataLogDir=/var/log/zookeeper
...
server.1=172.16.1.128:2888:3888
server.2=172.16.1.134:2888:3888
server.3=172.16.1.138:2888:3888
```

创建数据目录`mkdir -p /data/zookeeper`，`mkdir -p /var/log/zookeeper`

设置环境变量，在`/etc/profile`文件中添加以下内容：

```bash
export ZOOKEEPER_HOME=/usr/local/zookeeper
export PATH=$PATH:$ZOOKEEPER_HOME/bin
```

使之生效，`source /etc/profile`

创建`myid`文件，设置zookeeper的id，和`server.ID`对应，在` dataDir `指定的目录下 (即 `/data/zookeeper`目录) 创建名为 myid 的文件， 文件内容和 `zoo.cfg `中当前机器的 id 一致：

```bash
# 在第1台zookeeper（172.16.1.128）上设置id=1
echo "1" >/data/zookeeper/myid
# 在第2台zookeeper（172.16.1.134）上设置id=2 
echo "2" >/data/zookeeper/myid
# 在第3台zookeeper（172.16.1.138）上设置id=3
echo "3" >/data/zookeeper/myid
```

分别启动三台`zk`：

```bash
[root@node02 conf]\# zkServer.sh start
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /usr/local/zookeeper/bin/../conf/zoo.cfg
Starting zookeeper ... STARTED
...
```

查看 zk 集群状态：

```bash
[root@master zookeeper]\# zkServer.sh status
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /usr/local/zookeeper/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
Mode: follower

[root@node01 ~]\# zkServer.sh status
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /usr/local/zookeeper/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
Mode: leader

[root@node02 ~]\# zkServer.sh status
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /usr/local/zookeeper/bin/../conf/zoo.cfg
Client port found: 2181. Client address: localhost.
Mode: follower
```

...待续。。。

## 通过 ansible 快速部署集群

使用 ansible 可快速在单机、多机部署多套 codis 集群。 ansible 文件夹包含了部署 codis 集群的 playbook，根据自己部署环境修改 `groups_var/all` 文件里参数，修改 hosts 文件添加部署的环境 IP 即可。 ansible 安装也及其简单，各部署机器无需安装任何额外的 agent，彼此之间通过 ssh 通信。

```
git clone https://github.com/ansible/ansible.git -b stable-2.3
cd ./ansible
source ./hacking/env-setup
cd $codis_dir/ansible
ansible-playbook -i hosts site.yml
```

##  Docker 部署

Codis 3.x 起，开始正式支持 Docker 部署。这就需要 codis-dashboard 以及 codis-proxy 能够外部的 `listen` 地址暴露出来并保存在外部存储中。

- codis-proxy 增加了 `--host-admin` 以及 `--host-proxy` 参数；
- codis-dashboard 增加了 `--host-admin` 参数；

以 codis-proxy 的 Docker 为例：

```
$ docker run --name "Codis-Proxy" -d -p 29000:19000 -p 21080:11080 codis-image \
    codis-proxy -c proxy.toml --host-admin 100.0.1.100:29000 --host-proxy 100.0.1.100:21080
```

codis-proxy 在启动后，会使用 `--host-admin` 和 `--host-proxy` 参数所指定的实际地址替换 Docker 内监听的地址，向 codis-dashboard 注册。这样，例如使用 Jodis 的过程中，客户端就能够通过 `100.0.1.100:29000` 来访问 proxy 实例。

codis-dashboard 也是相同的道理，会使用 `--host-admin` 地址向外部存储注册，这样 codis-fe 也能通过该地址正确的对 codis-dashboard 进行操作。

具体样例可以参考 `scripts/docker.sh`。

## 参考链接

* Codis 中文文档：https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md
* Codis 3.x 组成部分：https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md#codis-3x
* Golang installation: https://golang.org/doc/install
* Redis Codis 部署安装：https://www.cnblogs.com/ExMan/p/11351621.html
* Redis——redis集群方案之codis集群的搭建部署：https://blog.csdn.net/bmengmeng/article/details/99693040
* https://wsgzao.github.io/post/codis/