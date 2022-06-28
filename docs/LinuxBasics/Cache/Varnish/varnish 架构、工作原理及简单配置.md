# varnish 架构、工作原理及简单配置 

[TOC]

## 缓存HTTP头部相关介绍

缓存类型：代理式缓存（递归方式）；旁挂式缓存（迭代）

缓存机制：过期机制（Expires）、条件式缓存（通过最近文件修改时间戳或Etag的扩展标签来辨别）。

过期时间：Expires
HTTP/1.0
Expires：过期
HTTP/1.1
Cache-Control: max-age=  （私有缓存，单位秒）
Cache-Control: s-maxage=  （共有缓存）

缓存层级：
私有缓存：用户代理附带的本地缓存机制；
公共缓存：反向代理服务器的缓存功能；
条件式请求：
Last-Modified/If-Modified-Since：基于文件的修改时间戳来
判别：Etag/If-None-Match：基于文件的校验码来判别；
User-Agent <--> private cache <--> public cache <--> public cache 2 <--> Original Server

## varnish工作原理及简单配置

Varnish是一款高性能的开源HTTP加速器，具有**反向代理**，**缓存**的功能。

### varnish官方架构图

![varnish-arch](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/varnish/architecture.svg)

Varnish主要运行2个进程，`Management`进程和`Child`进程

* `Management进程`：主要实现应用新的配置、编译VCL、监控varnish、初始化varnish以及提供一个命令行接口等。Management进程会每隔几秒钟探测一下Child进程以判断其是否正常运行，如果在指定的时长内未得到Child进程的回应，Management将会重启此Child进程。
* `Child进程`：主要是监听客户端请求，管理worker线程，建立缓存，更新统计计数器和记录流量

`VCL`（Varnish Configuration Language）是varnish配置缓存策略的工具，拥有它自己独立的一种编程语言。在策略启动前，会由Management进程转换为c代码（利用VCC，将VCL转换成C的编译器），然后通过gcc编译器编译成2进制程序。编译完成后Management负责将其连接到child进程，可以在varnish运行过程中动态切换缓存策略。

`shared memory log`（共享内存日志）为了与系统的其它部分进行交互，Child进程使用了可以通过文件系统接口进行访问的共享内存日志，因此，如果某线程需要记录信息，其仅需要持有一个锁，而后向共享内存中的某内存区域写入数据，再释放持有的锁即可。而为了减少竞争，每个worker线程都使用了日志数据缓存。
共享内存日志大小一般为90M，其分为两部分，前一部分为计数器，后半部分为客户端请求的数据。varnish提供了多个不同的工具如varnishlog、varnishncsa或varnishstat等来分析共享内存日志中的信息并能够以指定的方式进行显示。

`varnishadm`和`vagent2`是管理Management的一个管理接口

### varnish工作流程

![varnish02](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/varnish/varnish-02.png)

* `vcl_recv函数`：在Varnish完成对请求报文的解码为基本数据结构后第一个要执行的子例程，它通常有四个主要用途：1.修改客户端数据以减少缓存对象差异性；比如删除URL中的www.等字符；2.基于客户端数据选用缓存策略；比如仅缓存特定的URL请求、不缓存POST请求等；3.为某web应用程序执行URL重写规则； 4.挑选合适的后端Web服务器；
* `vcl_hash函数`：默认VCL将主机名或IP地址以及请求的URL进行hash
* `vcl_hit函数`：在缓存中找到请求的内容后将自动调用该函数
* `vcl_pass函数`：此函数在进入pass模式时被调用，用户将请求直接传递至后端主机。后端主机在应答数据后将应答数据发送给客户端，但不进行任何缓存，在当前链接下每次都返回最新的内容。
* `vcl_miss函数`：在缓存中没有找到请求的内容时自动调用该方法。此函数可用于判断是否需要从后端服务器获取内容
* `vcl_purge函数`：移除缓存
* `vcl_pipe函数`：进入pipe模式时，用户将**请求直接传递至后端主机**，在请求和返回的内容没有改变的情况下，将不变的内容返回给客户端，直到这个链接被关闭。
* `vcl_backend_fetch函数`：可能是被vcl_miss或者vcl_pass调用。如果是被vcl_miss函数：调用则所获取的对象会被缓存，如果是被vcl_pass调用则获取的对象不会缓存
* `vcl_deliver函数`：将在缓存中找到请求的内容发送给客户端前调用此函数
* `vcl_synth函数`：创建合成响应，例如个性化定制错误消息，要调用此函数

actions有以下几种:

* `pass`：当一个请求被 pass 后,这个请求将通过 varnish 转发到后端服务器,
  但是它不会被缓存。pass 可以放在 vcl_recv 和 vcl_fetch 中。
* `lookup`：当一个请求在 vcl_recv 中被 lookup 后,varnish 将从缓存中提取数
  据,如果缓存中没有数据,将被设置为 pass,不能在 vcl_fetch 中设置 lookup。
* `pipe`：pipe 和 pass 相似,都要访问后端服务器,不过当进入 pipe 模式后,在
  此连接未关闭前,后续的所有请求都发到后端服务器
* `deliver`：请求的目标被缓存,然后发送给客户端

3个重要的数据结构：Requests、Responses 、 objects

* `req`：请求目标,当 varnish 接收到一个请求,这时 req object 就被创建了,
  你在 vcl_recv 中的大部分工作,都是在 req object 上展开的。
* `beresp`：后端服务器返回的目标,它包含返回的头信息,你在 vcl_fetch 中的大部分工作都是在 beresp object 上开展的。
* `obj`：被 cache 的目标,只读的目标被保存于内存中,obj.ttl 的值可修改,其他的只能读。

## varnish内建变量

* ·req.*：request，表示由客户端发来的请求报文相关；
* *·bereq.*：由varnish发往BE主机的httpd请求相关；
* ·beresp.*：由BE主机响应给varnish的响应报文相关；
* *·resp.*：由varnish响应给client相关；
* ·obj.*：存储在缓存空间中的缓存对象的属性；只读；

**常用变量：**

* ·bereq.*, req.*：
      bereq.http.HEADERS
      bereq.request：请求方法；
      bereq.url：请求的url；
      bereq.proto：请求的协议版本；
      bereq.backend：指明要调用的后端主机；
      req.http.Cookie：客户端的请求报文中Cookie首部的值；
      req.http.User-Agent ~ “chrome”
* ·beresp.*, resp.*：
      beresp.http.HEADERS
      beresp.status：响应的状态码；
      reresp.proto：协议版本；
      beresp.backend.name：BE主机的主机名；
      beresp.ttl：BE主机响应的内容的余下的可缓存时长；
* ·obj.*
      obj.hits：此对象从缓存中命中的次数；
      obj.ttl：对象的ttl值
* ·server.*
      server.ip
      server.hostname
* ·client.*
      client.ip

## varnish日志(Shared memory log)

显示详细日志：

* `varnishlog`:用于访问特定的数据，它提供了特定客户的信息和要求。	 	
  * `varnishlog`可以运行为守护进程,将日志保存到文件当中去
* `varnishncsa`:以NCSA通用日志格式显示varnish访问日志。	 	
* `varnishtest`:允许显示测试中的日志记录和计数器。	 

统计工具：

* `varnishstat`:用于访问全局计数器，不读取varnish日志中的条目。
  * `-1`:一次性输出,非持续性输出
  * `-f`:指定输出的字段名称列表,如若查看多个字段,需要添加多个`-f`参数
* `varnishtop`:读取Varnish日志并呈现最常出现的日志条目的不断更新的列表。	 	
  * `-1`:一次性输出,非持续性输出
  * `-i <taglist>`:查看指定字段,如若查看多个字段,需要添加多个`-i`参数,另,`-I <[taglist:]regex>`可以使用正则表达式进行匹配筛选
  * `-x <taglist>`,用法同`-i`选项,将某个字段排除在外,`-X`表示使用正则表达式匹配
* `varnishhist`:读取Varnish日志，并显示一个连续更新的直方图，显示最后N个请求的处理分布情况。	

## varnishadm交互式配置

```bash
登录：
    -S /etc/varnish/secret -T 127.0.0.1:80
配置文件相关：
    vcl.list ：状态引擎列表；
    vcl.load：装载，加载并编译；
    vcl.use：激活；
    vcl.discard：删除；
    vcl.show [-v] <configname>：查看指定的配置文件的详细信息，可看默认配置；
运行时参数：
    param.show -l：显示列表；
    param.show <PARAM>
    param.set <PARAM> <VALUE>
缓存存储：
    storage.list
后端服务器：
    backend.list
```

除了使用`varnishadm`来编译激活vcl外,还可以使用`varnish_reload_vcl`来一次性完成.

## 简单配置 及OPTS优化选项

varnish 安装完毕之后会在`/etc/varnish`生成两个配置文件

```bash
/etc/varnish
├── default.vcl         # 配置各Child/Cache线程的缓存策略；
├── secret          # varnish连接时的安全秘钥文件
└── varnish.params      # 配置varnish服务进程的工作特性，例如监听的地址和端口，缓存机制；

0 directories, 3 files
```

`varnish.params`主要配置信息

```bash
VARNISH_VCL_CONF=/etc/varnish/default.vcl		# VCL 配置文件路径

VARNISH_LISTEN_PORT=80			# 监听端口

VARNISH_ADMIN_LISTEN_ADDRESS=127.0.0.1		# varnish-admin监听地址及端口
VARNISH_ADMIN_LISTEN_PORT=6082

# Shared secret file for admin interface
VARNISH_SECRET_FILE=/etc/varnish/secret		# 管理员秘钥

# VARNISH_STORAGE="malloc,256M"
VARNISH_STORAGE="file,/data/varnish/cache,1g"		# varnish存储模式

# User and group for the varnishd worker processes
VARNISH_USER=varnish
VARNISH_GROUP=varnish

# Other options, see the man page varnishd(1)
#DAEMON_OPTS="-p thread_pool_min=5 -p thread_pool_max=500 -p thread_pool_timeout=300"
DAEMON_OPTS=”-p thread_pools=6 -p thread_pool_min=5 -p thread_pool_max=500 -p thread_pool_timeout=300″
```

varnish的缓存存储机制( Storage Types)：

* `malloc[,size]  `    内存存储，[,size]用于定义空间大小；重启后所有缓存项失效；一般4G较合适，内存空间有限，且内存碎片会大大影响性能；
* `file[,path[,size[,granularity]]]　`磁盘文件存储，黑盒；重启后所有缓存项失效；
* `persistent,path,size　`文件存储，黑盒；重启后所有缓存项有效；在`5.2.0`版本为实验状态,`6.4.0`版本官方不推荐该模式；

**DAEMON_OPTS附加选项:**

在线程池内部，其每一个请求由一个线程来处理； 其worker线程的最大数决定了varnish的并发响应能力；

* `thread_pools`：Number of worker thread pools. 最好小于或等于CPU核心数量； 
* `thread_pool_max`： 每线程池的最大线程数；
* `thread_pool_min`：The minimum number of worker threads in each pool. 额外意义为“最大空闲线程数”；
  最大并发连接数 = **thread_pools * thread_pool_max**
* `thread_pool_timeout`：Thread idle threshold. Threads inexcess of thread_pool_min, which have been idle for at least this long,线程超时时间
* thread_pool_add_delay：新创建线程的延迟时间
* thread_pool_destroy_delay：杀死空闲线程延迟时间,也就是摧毁之前需要犹豫一下，这个犹豫的时间

**Timer相关的参数**

```
send_timeout：设置客户端链接的超时时间
timeout_idle：设置保持链接的空闲时长，经常需要！！
timeout_req：接收客户端请求报文首部的最长时间
```

## 参考链接

* varnish官方文档:https://www.varnish-cache.org/