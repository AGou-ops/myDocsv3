# RabbitMQ Mirror Queue 

## 镜像队列的基本概念与介绍

队列进程及其内容仅仅维持在单个节点之上，所以一个节点的失效表现为其对应的队列不可用。

引入镜像队列（`Mirror Queue`）的机制，可以将队列镜像到集群中的其他` Broker` 节点之上，每一个镜像队列都包含一个`master`节点和多个`slave`节点（主从结构），**如果集群中的一个节点失效了，队列能够自动切换到镜像中的另一个节点上以保证服务的可用性。**

结构图如下所示：

![](https://upload-images.jianshu.io/upload_images/5114528-121cd4bca546fff0.PNG?imageMogr2/auto-orient/strip|imageView2/2/w/280/format/webp)

**除发送消息（`Basic.Publish`）外的所有动作都只会向 master 发送，然后再由master 将命令执行的结果广播给各个 slave。**

## Rabbitmq Mirror Queue 搭建

镜像队列的配置主要是通过添加相应的 Policy 来完成 ：

```bash
# rabbitmqctl [--node <node>] [--longnames] [--quiet] set_policy [--vhost <vhost>] [--priority <priority>] [--apply-to <apply-to>] <name> <pattern> <definition>
```

`definition `要包含3个部分` ha-mode`、` ha-params`、 `ha-sync-mode`

- **`ha-mode`** 指明镜像队列的模式，有效值为 all/exactly/nodes默认为 all
    **all** 表示在集群中所有的节点上进行镜像
    **exactly** 表示在指定个数的节点上进行镜像，节点个数由 ha-params 指定;
    **nodes** 表示在指定节点上进行镜像，节点名称通ha-params 指定，节点的名称通常类似于 rabbit@hostname ，可以通过`rabbitmqctl cluster status `命令查看到
- **`ha-params`** 不同的 hamode 配置中需要用到的参数。
- **`ha-sync-mode`** 队列中消息的同步方式，有效值为 automatic 、manual

**命令样例**

- 对队列名称以` queue_`开头的所有队列进行镜像，并在集群的两个节点上完 成镜像

  ```
  rabbitmqctl set_policy --priority 0 --apply-to queues mirror_queue "^queue_" '{"ha-mode ":"exactly","ha-params"：2,"ha-sync-mode":"automatic" }'
  ```

- 对队列名称以 `queue_` 开头的所有队列进行镜像，并在集群的所有节点上完 成镜像

  ```
  rabbitmqctl set_policy --priority 0 --apply-to queues mirror_queue "^queue_" '{"ha-mode":"all","ha-sync-mode":"automatic"
  ```

`rabbitmqctl set_policy ha-all "^" '{"ha-mode":"all"}'`可以把队列设置为镜像队列

**命令执行**

```bash
[root@master ~]\# rabbitmqctl set_policy --priority 0 --apply-to queues mirror_queue "^queue_" '{"ha-mode":"all","ha-sync-mode":"automatic"
}'
Setting policy "mirror_queue" for pattern "^queue_" to "{"ha-mode":"all","ha-sync-mode":"automatic"}" with priority "0" for vhost "/" ...
```

在 web 管理接口中创建队列，名称前缀为`queue`：

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/rabbitmq/rabbitmq_mirror_queue.png)

在图中看到`Node-->rabbitmq@master`后面有个`+2`字样，就表示已经同步到`node01`和`node02`节点，将鼠标移动至此可以看到提示信息：`Synchronised mirrors: rabbit@node02,rabbit@node01`。

**测试` master` 节点宕机**

```bash
# 在 master 节点上人为停止 rabbitmq 服务
systemctl stop rabbitmq-server
```

此时，打开 web 管理接口，可以看到 `node02`已经成为主节点，并完成同步：

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/rabbitmq/rabbitmq_mirror_queue-2.png)

## 其他

当 slave 挂掉之后，除了与 slave 相连的客户端连接全部断开，没有其他影响。当 master 挂掉之后，会有以下连锁反应：

（1）与 master 连接的客户端连接全部断开。

（2）选举最老的 slave 作为新的 master，因为最老的 slave 与旧的 master 之间的同步状态应该是最好的。**如果此时所有 slave 处于未同步状态，则未同步的消息会丢失。**

（3）新的 master 重新入队所有 unack 的消息，因为新的 slave 无法区分这些 unack 的消息是否己经到达客户端，或者是 ack 信息丢失在老的 master 链路上，再或者是丢失在老的 master 组播 ack 消息到所有slave 的链路上，所以出于消息可靠性的考虑，重新入队所有unack 的消息，**不过此时客户端可能会有重复消息**。

（4）如果客户端连接着 slave，并且 Basic.Consume 消费时指定了 `x-cancel-on-ha-failover` 参数，那么断开之时客户端会收到一个 Consumer Cancellation Notification 的通知，消费者客户端中会回调 Consumer 接口的 handleCancel 方法。如果未指定 `x-cancel-on-ha-failover` 参数，那么消费者将无法感知 master 宕机。

## 参考资料

* 简书@[Dear_diary] ：https://www.jianshu.com/p/fcc35573567c

