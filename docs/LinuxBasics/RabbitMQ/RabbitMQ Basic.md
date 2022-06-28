# RabbitMQ Basic 

## RabbitMQ 简介

RabbitMQ 架构图：

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/rabbitmq/rabbitMQ-arch.jpg "Rabbitmq Arch")

* `Broker`:它提供一种传输服务,它的角色就是维护一条从生产者到消费者的路线，保证数据能按照指定的方式进行传输, 
* `Exchange`:消息交换机,它指定消息按什么规则,路由到哪个队列。 
* `Queue`:消息的载体,每个消息都会被投到一个或多个队列。 
* `Binding`:绑定，它的作用就是把exchange和queue按照路由规则绑定起来. 
* `Routing Key`:路由关键字,exchange根据这个关键字进行消息投递。 
* `vhost`:虚拟主机,一个broker里可以有多个vhost，用作不同用户的权限分离。 
* `Producer`:消息生产者,就是投递消息的程序. 
* `Consumer`:消息消费者,就是接受消息的程序. 

## RabbitMQ 安装

### 单机部署

1. `rabbitmq` 依赖于 `erlang` 环境，所以需要先安装` erlang`：

官方提供适用的 erlang 程序包：https://github.com/rabbitmq/erlang-rpm/releases

```bash
yum install -y https://github.com/rabbitmq/erlang-rpm/releases/download/v23.0.2/erlang-23.0.2-1.el7.x86_64.rpm
# 输入erl验证erlang是否成功安装
[root@master ~]、\# erl
Erlang/OTP 23 [erts-11.0.2] [source] [64-bit] [smp:2:2] [ds:2:2:10] [async-threads:1] [hipe]

Eshell V11.0.2  (abort with ^G)
1> 
```

2. 从 github 官方仓库直接安装 rpm 包：

```bash
yum install -y https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.4/rabbitmq-server-3.8.4-1.el7.noarch.rpm
```

3. 启动`rabbitmq`：

```bash
systemctl start rabbitmq-server.service
```

4. 查看`rabbitmq`运行状态：

```bash
rabbitmqctl status
```

### 集群搭建

1. 在三台主机上添加相对应的`hosts`内容：

```bash
# -==----- /etc/hosts --------
172.16.1.128 master		# 仅为主机标识，并非真正主节点
172.16.1.134 node01
172.16.1.142 node02
```

2. 把`master`上的` cookie`文件，复制到`node01`、`node02`节点上，集群环境下**各个节点的cookie必须一致**。rpm安装的cookie 文件默认路径为 `/var/lib/rabbitmq/.erlang.cookie`

```bash
scp /var/lib/rabbitmq/.erlang.cookie node01:/var/lib/rabbitmq/
scp /var/lib/rabbitmq/.erlang.cookie node02:/var/lib/rabbitmq/
# 在各台主机上赋予其权限
sudo chmod -R 600 /var/lib/rabbitmq/.erlang.cookie
sudo chown -R rabbitmq:rabbitmq /var/lib/rabbitmq/.erlang.cookie
```

3. 通过`rabbitmqctl`来配置集群，集群内部通讯端口为`25672`：

```bash
# 启动三个节点上的 rabbitmq 服务
systemctl start rabbitmq-server
```

4. 将`node01`和`node02`加入到`master`节点当中，并全都设置为硬盘节点：

```bash
# 在 node01 上
rabbitmq-server -detached				# 使用 -detached 参数是为了让 RabbitMQ 以守护进程方式在后台运行
rabbitmqctl stop_app                    # 只关闭rabbitmq服务，不关闭erlang服务
rabbitmqctl join_cluster rabbit@master   # --ram这个参数是内存节点模式，不加参数就是硬盘节点
rabbitmqctl start_app

# 在 node02 上
rabbitmq-server -detached
rabbitmqctl stop_app                    # 只关闭rabbitmq服务，不关闭erlang服务
rabbitmqctl join_cluster rabbit@master   # --ram这个参数是内存节点模式，不加参数就是硬盘节点
rabbitmqctl start_app
```

5. 在任一主机上查看集群状态：

```bash
[root@node01 ~]\# rabbitmqctl cluster_status
Cluster status of node rabbit@node01 ...
Basics

Cluster name: rabbit@master

Disk Nodes

rabbit@master
rabbit@node01
rabbit@node02

Running Nodes			# 正在运行中的节点

`rabbit@master`
`rabbit@node01`
`rabbit@node02`

Versions

rabbit@master: RabbitMQ 3.8.4 on Erlang 23.0.2
rabbit@node01: RabbitMQ 3.8.4 on Erlang 23.0.2
rabbit@node02: RabbitMQ 3.8.4 on Erlang 23.0.2
```

启用 Web GUI 参考下面的[使用 web GUI 管理](#使用 web GUI 管理)

:question:如果在 web 管理页面中看到节点出现`Node statistics not available`警告，则表示该节点没有启动相应 web 管理模块，使用以下三条命令进行启动：

```bash
rabbitmqctl stop_app
rabbitmq-plugins enable rabbitmq_management
rabbitmqctl start_app
```

#### 其他 -- 剔除单个节点

```bash
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl start_app
```

or:

```bash
# For example, this command will remove the node "rabbit@stringer" from the node "hare@mcnulty":
rabbitmqctl -n hare@mcnulty forget_cluster_node rabbit@stringer
# # on rabbit2
rabbitmqctl forget_cluster_node rabbit@rabbit1
```

## 使用 web GUI 管理

查看当前所有用户：

```bash
rabbitmqctl list_users
```

查看默认guest用户的权限（**默认情况下仅有该账户**）：

```
rabbitmqctl list_user_permissions guest
```

由于RabbitMQ默认的账号用户名和密码都是guest。为了安全起见, 先删掉默认用户：

```bash
rabbitmqctl delete_user guest
```

添加新用户：

```bash
rabbitmqctl add_user [username] [password]
```

设置用户标签：

```bash
rabbitmqctl set_user_tags [username] administrator			# 设置用户tag为管理员
```

赋予用户默认vhost的全部操作权限：

```bash
rabbitmqctl set_permissions -p / [username] ".*" ".*" ".*"
```

查看用户的权限：

```bash
[root@master ~]\# rabbitmqctl list_user_permissions [username]		# 这里我设置的是suofeiya用户名
Listing permissions for user "suofeiya" ...
vhost   configure       write   read
/       .*      .*      .*
```

开启`web`管理接口：

```bash
# 开启 web 管理接口前停止rabbitmq
rabbitmqctl stop_app
rabbitmq-plugins enable rabbitmq_management
rabbitmqctl start_app
```

最后打开浏览器访问：http://YOUR_IP:15672 即可。

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/rabbitmq/rabbitmq.png)

rabbitmq 集群：

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/rabbitmq/rabbitmq-cluster.png "rabbitmq 集群")

## 参考资料

* RabbitMQ installation: https://www.rabbitmq.com/install-rpm.html
* RabbitMQ Debian详细安装： https://www.rabbitmq.com/install-debian.html
* RabbitMQ 系列教程（笔记）：https://zq99299.github.io/mq-tutorial

