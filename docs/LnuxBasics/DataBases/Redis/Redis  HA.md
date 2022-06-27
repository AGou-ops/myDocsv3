# Redis  HA    

* 官方的cluser方案

整个cluster被看做是一个整体，客户端可连接任意一个节点进行操作，当客户端操作的key没有分配在该节点上时，redis会返回转向指令，指向正确的节点。

为了增加集群的可访问性，官方推荐的方案是将node配置成主从结构，即一个master主节点，挂n个slave从节点。如果主节点失效，redis cluster会根据选举算法从slave节点中选择一个上升为master节点，整个集群继续对外提供服务。

* redis sharding    集群分片
* twemproxy代理方案

Redis代理中间件twemproxy是一种利用中间件做分片的技术。twemproxy处于客户端和服务器的中间，将客户端发来的请求，进行一定的处理后（sharding），再转发给后端真正的redis服务器。也就是说，客户端不直接访问redis服务器，而是通过twemproxy代理中间件间接访问。降低了客户端直连后端服务器的连接数量，并且支持服务器集群水平扩展。

twemproxy中间件的内部处理是无状态的，它本身可以很轻松地集群，这样可以避免单点压力或故障。

通常会结合keepalived来实现twemproy的高可用

* codis

codis是一个分布式的Redis解决方案，由豌豆荚开源，对于上层的应用来说，连接codis proxy和连接原生的redis server没什么明显的区别，上层应用可以像使用单机的redis一样使用，codis底层会处理请求的转发，不停机的数据迁移等工作，所有后边的事情，对于前面的客户端来说是透明的，可以简单的认为后边连接的是一个内存无限大的redis服务。

* Sentinel 哨兵

Sentinel（哨兵）是Redis的高可用性解决方案：由一个或多个Sentinel实例组成的Sentinel系统可以监视任意多个主服务器以及这些主服务器下的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器属下的某个从服务器升级为新的主服务器。

