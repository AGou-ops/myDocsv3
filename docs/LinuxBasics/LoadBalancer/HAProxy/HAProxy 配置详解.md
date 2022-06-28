# HAProxy 配置详解 

完整配置选项参考:[configuration.txt](./configuration.txt)

## 配置详解

### 配置文件格式

haproxy 配置中分成五部分内容，分别如下：

* `global`：  设置全局配置参数，属于进程的配置，通常是和操作系统相关。
* `defaults`：配置默认参数，**这些参数可以被用到frontend，backend，Listen组件**；
* `frontend`：接收请求的前端虚拟节点，Frontend可以更加规则直接指定具体使用后端的backend；
* `backend`：后端服务集群的配置，是真实服务器，一个Backend对应一个或者多个实体服务器；
* `Listen` ：frontend和backend的组合体。

时间格式:

* us: 微秒(microseconds)，即1/1000000秒；
* ms: 毫秒(milliseconds)，即1/1000秒；
* s: 秒(seconds)；
* m: 分钟(minutes)；
* h：小时(hours)；
* d: 天(days)；

### global全局配置

“global”配置中的参数为进程级别的参数，且通常与其运行的OS相关。

* 进程管理及安全相关的参数

```bash
   - chroot <jail dir>：修改haproxy的工作目录至指定的目录并在放弃权限之前执行chroot()操作，可以提升haproxy的安全级别，不过需要注意的是要确保指定的目录为空目录且任何用户均不能有写权限；
   - daemon：让haproxy以守护进程的方式工作于后台，其等同于“-D”选项的功能，当然，也可以在命令行中以“-db”选项将其禁用；
   - gid <number>：以指定的GID运行haproxy，建议使用专用于运行haproxy的GID，以免因权限问题带来风险；
   - group <group name>：同gid，不过指定的组名；
   - log  <address> <facility> [max level [min level]]：定义全局的syslog服务器，最多可以定义两个；
   - log-send-hostname [<string>]：在syslog信息的首部添加当前主机名，可以为“string”指定的名称，也可以缺省使用当前主机名；
   - nbproc <number>：指定启动的haproxy进程个数，只能用于守护进程模式的haproxy；默认只启动一个进程，鉴于调试困难等多方面的原因，一般只在单进程仅能打开少数文件描述符的场景中才使用多进程模式；
   - pidfile：
   - uid：以指定的UID身份运行haproxy进程；
   - ulimit-n：设定每进程所能够打开的最大文件描述符数目，默认情况下其会自动进行计算，因此不推荐修改此选项；
   - user：同uid，但使用的是用户名；
   - stats：
   - node：定义当前节点的名称，用于HA场景中多haproxy进程共享同一个IP地址时；
   - description：当前实例的描述信息；
```

* 性能调整相关的参数

```bash
   - maxconn <number>：设定每个haproxy进程所接受的最大并发连接数，其等同于命令行选项“-n”；“ulimit -n”自动计算的结果正是参照此参数设定的；
   - maxpipes <number>：haproxy使用pipe完成基于内核的tcp报文重组，此选项则用于设定每进程所允许使用的最大pipe个数；每个pipe会打开两个文件描述符，因此，“ulimit -n”自动计算时会根据需要调大此值；默认为maxconn/4，其通常会显得过大；
   - noepoll：在Linux系统上禁用epoll机制；
   - nokqueue：在BSE系统上禁用kqueue机制；
   - nopoll：禁用poll机制；
   - nosepoll：在Linux禁用启发式epoll机制；
   - nosplice：禁止在Linux套接字上使用内核tcp重组，这会导致更多的recv/send系统调用；不过，在Linux 2.6.25-28系列的内核上，tcp重组功能有bug存在；
   - spread-checks <0..50, in percent>：在haproxy后端有着众多服务器的场景中，在精确的时间间隔后统一对众服务器进行健康状况检查可能会带来意外问题；此选项用于将其检查的时间间隔长度上增加或减小一定的随机时长；
   - tune.bufsize <number>：设定buffer的大小，同样的内存条件小，较小的值可以让haproxy有能力接受更多的并发连接，较大的值可以让某些应用程序使用较大的cookie信息；默认为16384，其可以在编译时修改，不过强烈建议使用默认值；
   - tune.chksize <number>：设定检查缓冲区的大小，单位为字节；更大的值有助于在较大的页面中完成基于字符串或模式的文本查找，但也会占用更多的系统资源；不建议修改；
   - tune.maxaccept <number>：设定haproxy进程内核调度运行时一次性可以接受的连接的个数，较大的值可以带来较大的吞吐率，默认在单进程模式下为100，多进程模式下为8，设定为-1可以禁止此限制；一般不建议修改；
   - tune.maxpollevents  <number>：设定一次系统调用可以处理的事件最大数，默认值取决于OS；其值小于200时可节约带宽，但会略微增大网络延迟，而大于200时会降低延迟，但会稍稍增加网络带宽的占用量；
   - tune.maxrewrite <number>：设定为首部重写或追加而预留的缓冲空间，建议使用1024左右的大小；在需要使用更大的空间时，haproxy会自动增加其值；
   - tune.rcvbuf.client <number>：
   - tune.rcvbuf.server <number>：设定内核套接字中服务端或客户端接收缓冲的大小，单位为字节；强烈推荐使用默认值；
   - tune.sndbuf.client：
   - tune.sndbuf.server：
```

 * Debug相关的参数

```bash
   - debug
   - quiet
```

* 超时时长

```bash
- timeout http request ：在客户端建立连接但不请求数据时，关闭客户端连接
- timeout queue ：等待最大时长
- timeout connect： 定义haproxy将客户端请求转发至后端服务器所等待的超时时长
- timeout client：客户端非活动状态的超时时长  默认单位是毫秒
- timeout server：客户端与服务器端建立连接后，等待服务器端的超时时长，
- timeout http-keep-alive ：定义保持连接的超时时长
- timeout check：健康状态监测时的超时时间，过短会误判，过长资源消耗
- maxconn :每个server最大的连接数
 
- http-server-close : 在使用长连接时，为了避免客户端超时没有关闭长连接，此功能可以使服务器端关闭长连接
- redispatch： 在使用基于cookie定向时，一旦后端某一server宕机时，会将会话重新定向至某一上游服务器，必须使用 的选项
```

* 实现访问控制：


```bash
- http-request: 7层过滤
- tcp-request content: tcp层过滤，四层过滤
```

## 综合配置

```bash

global   # 全局参数的设置
    log 127.0.0.1 local0 info
    # log语法：log <address_1>[max_level_1] # 全局的日志配置，使用log关键字，指定使用127.0.0.1上的syslog服务中的local0日志设备，记录日志等级为info的日志
    user haproxy
    group haproxy
    # 设置运行haproxy的用户和组，也可使用uid，gid关键字替代之
    daemon
    # 以守护进程的方式运行
    nbproc 16
    # 设置haproxy启动时的进程数，根据官方文档的解释，我将其理解为：该值的设置应该和服务器的CPU核心数一致，即常见的2颗8核心CPU的服务器，即共有16核心，则可以将其值设置为：<=16 ，创建多个进程数，可以减少每个进程的任务队列，但是过多的进程数也可能会导致进程的崩溃。这里我设置为16
    maxconn 4096
    # 定义每个haproxy进程的最大连接数 ，由于每个连接包括一个客户端和一个服务器端，所以单个进程的TCP会话最大数目将是该值的两倍。
    #ulimit -n 65536
    # 设置最大打开的文件描述符数，在1.4的官方文档中提示，该值会自动计算，所以不建议进行设置
    pidfile /var/run/haproxy.pid
    # 定义haproxy的pid 
defaults # 默认部分的定义
    mode http
    # mode语法：mode {http|tcp|health} 。http是七层模式，tcp是四层模式，health是健康检测，返回OK
    log 127.0.0.1 local3 err
    # 使用127.0.0.1上的syslog服务的local3设备记录错误信息
    retries 3
    # 定义连接后端服务器的失败重连次数，连接失败次数超过此值后将会将对应后端服务器标记为不可用
    option httplog
    # 启用日志记录HTTP请求，默认haproxy日志记录是不记录HTTP请求的，只记录“时间[Jan 5 13:23:46] 日志服务器[127.0.0.1] 实例名已经pid[haproxy[25218]] 信息[Proxy http_80_in stopped.]”，日志格式很简单。
    option redispatch
    # 当使用了cookie时，haproxy将会将其请求的后端服务器的serverID插入到cookie中，以保证会话的SESSION持久性；而此时，如果后端的服务器宕掉了，但是客户端的cookie是不会刷新的，如果设置此参数，将会将客户的请求强制定向到另外一个后端server上，以保证服务的正常。
    option abortonclose
    # 当服务器负载很高的时候，自动结束掉当前队列处理比较久的链接
    option dontlognull
    # 启用该项，日志中将不会记录空连接。所谓空连接就是在上游的负载均衡器或者监控系统为了探测该服务是否存活可用时，需要定期的连接或者获取某一固定的组件或页面，或者探测扫描端口是否在监听或开放等动作被称为空连接；官方文档中标注，如果该服务上游没有其他的负载均衡器的话，建议不要使用该参数，因为互联网上的恶意扫描或其他动作就不会被记录下来
    option httpclose
    # 这个参数我是这样理解的：使用该参数，每处理完一个request时，haproxy都会去检查http头中的Connection的值，如果该值不是close，haproxy将会将其删除，如果该值为空将会添加为：Connection: close。使每个客户端和服务器端在完成一次传输后都会主动关闭TCP连接。与该参数类似的另外一个参数是“option forceclose”，该参数的作用是强制关闭对外的服务通道，因为有的服务器端收到Connection: close时，也不会自动关闭TCP连接，如果客户端也不关闭，连接就会一直处于打开，直到超时。
    contimeout 5000
    # 设置成功连接到一台服务器的最长等待时间，默认单位是毫秒，新版本的haproxy使用timeout connect替代，该参数向后兼容
    clitimeout 3000
    # 设置连接客户端发送数据时的成功连接最长等待时间，默认单位是毫秒，新版本haproxy使用timeout client替代。该参数向后兼容
    srvtimeout 3000
    # 设置服务器端回应客户度数据发送的最长等待时间，默认单位是毫秒，新版本haproxy使用timeout server替代。该参数向后兼容
 
listen status # 定义一个名为status的部分
    bind 0.0.0.0:1080
    # 定义监听的套接字
    mode http
    # 定义为HTTP模式
    log global
    # 继承global中log的定义
    stats refresh 30s
    # stats是haproxy的一个统计页面的套接字，该参数设置统计页面的刷新间隔为30s
    stats uri /admin?stats
    # 设置统计页面的uri为/admin?stats
    stats realm Private lands
    # 设置统计页面认证时的提示内容
    stats auth admin:password
    # 设置统计页面认证的用户和密码，如果要设置多个，另起一行写入即可
    stats hide-version
    # 隐藏统计页面上的haproxy版本信息
 
frontend http_80_in # 定义一个名为http_80_in的前端部分
    bind 0.0.0.0:80
    # http_80_in定义前端部分监听的套接字
    mode http
    # 定义为HTTP模式
    log global
    # 继承global中log的定义
    option forwardfor
    # 启用X-Forwarded-For，在requests头部插入客户端IP发送给后端的server，使后端server获取到客户端的真实IP
    acl static_down nbsrv(static_server) lt 1
    # 定义一个名叫static_down的acl，当backend static_sever中存活机器数小于1时会被匹配到
    acl php_web url_reg /*.php$
    #acl php_web path_end .php
    # 定义一个名叫php_web的acl，当请求的url末尾是以.php结尾的，将会被匹配到，上面两种写法任选其一
    acl static_web url_reg /*.(css|jpg|png|jpeg|js|gif)$
    #acl static_web path_end .gif .png .jpg .css .js .jpeg
    # 定义一个名叫static_web的acl，当请求的url末尾是以.css、.jpg、.png、.jpeg、.js、.gif结尾的，将会被匹配到，上面两种写法任选其一
    use_backend php_server if static_down
    # 如果满足策略static_down时，就将请求交予backend php_server
    use_backend php_server if php_web
    # 如果满足策略php_web时，就将请求交予backend php_server
    use_backend static_server if static_web
    # 如果满足策略static_web时，就将请求交予backend static_server
 
backend php_server #定义一个名为php_server的后端部分
    mode http
    # 设置为http模式
    balance source
    # 设置haproxy的调度算法为源地址hash
    cookie SERVERID
    # 允许向cookie插入SERVERID，每台服务器的SERVERID可在下面使用cookie关键字定义
    option httpchk GET /test/index.php
    # 开启对后端服务器的健康检测，通过GET /test/index.php来判断后端服务器的健康情况
    server php_server_1 10.12.25.68:80 cookie 1 check inter 2000 rise 3 fall 3 weight 2
    server php_server_2 10.12.25.72:80 cookie 2 check inter 2000 rise 3 fall 3 weight 1
    server php_server_bak 10.12.25.79:80 cookie 3 check inter 1500 rise 3 fall 3 backup
    # server语法：server [:port] [param*] # 使用server关键字来设置后端服务器；为后端服务器所设置的内部名称[php_server_1]，该名称将会呈现在日志或警报中、后端服务器的IP地址，支持端口映射[10.12.25.68:80]、指定该服务器的SERVERID为1[cookie 1]、接受健康监测[check]、监测的间隔时长，单位毫秒[inter 2000]、监测正常多少次后被认为后端服务器是可用的[rise 3]、监测失败多少次后被认为后端服务器是不可用的[fall 3]、分发的权重[weight 2]、最后为备份用的后端服务器，当正常的服务器全部都宕机后，才会启用备份服务器[backup]
 
backend static_server
    mode http
    option httpchk GET /test/index.html
    server static_server_1 10.12.25.83:80 cookie 3 check inter 2000 rise 3 fall 3
```

## 参考链接

*  haproxy官方中文入门文档教程(mage):https://blog.51cto.com/mageedu/1744420
*  csdn@Resines:https://blog.csdn.net/genglei1022/article/details/83374188