# Nginx 性能优化与安全

## 系统参数优化

```bash
$ vim /etc/security/limits.conf
# ---------------------------
# 1、系统全局性修改。
# * 代表所有普通用户
* soft nofile 25535
* hard nofile 25535

# 2.用户局部性修改
# 针对root用户，soft仅提醒，hard限制，nofile打开最大文件数
root soft nofile 65535
root hard nofile 65535
# ---------------------------
# 3.进程局部性修改
# 针对nginx进程，nginx自带配置
worker_rlimit_nofile 30000

# 4.调整内核参数：让time_wait状态重用(端口重用)[flag]
$ vim /etc/sysctl.conf
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_timestamps = 1
$ sysctl -p    # 可以查看我们添加的内核参数
$ sysctl -a    # 可以查看所有内核参数

# ---------------------- 内核参数优化
net.ipv4.tcp_max_tw_buckets = 6000         #默认值180000 设置timewait的值

net.ipv4.ip_local_port_range = 1024 65000  #默认值32768 61000 设置允许系统打开的端口范围

net.ipv4.tcp_tw_recycle = 1              #默认值0 设置是否启用timewait

net.ipv4.tcp_tw_reuse = 1    	#默认值0 设置是否开启重新使用，允许将TIME-WAIT sockets 重新用于新的TCP连接

net.ipv4.tcp_syncookies = 1           #默认值0 设置是否开启SYN Cookies，如果启用该功能，那么当出现SYN等待排队溢出时，则使用Cookies来处理

net.core.somaxconn = 262144            #默认值32768 Web应用中listen函数的backlog默认会将内核参数的net.core.somaxconn限制到128，而Nginx定义的NGX_LISTEN_BACKLOG默认为511，所以有必要调整这个值

net.core.netdev_max_backlog = 262144   #默认值300 设置被输送到队列数据包的最大数目，在网卡接收数据包的速率比内核处理数据包的速率快时，那么会出现排队现象，这个参数就是用于设置该队列的大小

net.ipv4.tcp_max_orphans = 262144        #默认值32768 设置Linux能够处理不属于任何进程的套接字数量，所谓不属于任何进程的进程就是“孤儿”（orphan）进程，在快速、大量的连接中这种进程会很多，因此要适当地设置该参数，如果这种“孤儿”进程套接字数量大于这个指定的值，那么在使用dmesg查看时会出现“too many of orphaned sockets”的警告

net.ipv4.tcp_max_syn_backlog = 262144    #默认值1024 记录尚未收到客户端确认信息的连接请求的最大值

net.ipv4.tcp_timestamps = 0             #默认值1 设置使用时间戳作为序列号，通过这样的设置可以避免序列号倍重复使用。在高速、高并发的环境中，这种情况是存在的，因此通过时间戳能够让这些被看做是异常的数据包被内核接收。0表示关闭

net.ipv4.tcp_synack_retries = 1     #默认值5 设置SYN重试的次数，在TCP的3次握手中的第二次握手，内核需要发送一个回应前面一个SYN的ACK的SYN，就是说为了打开对方的连接，内核发出的SYN的次数。减小该参数的值有利于避免DDoS攻击。

net.ipv4.tcp_syn_retries = 1                  #默认值5 设置在内核放弃建立连接之前发送SYN包的数量

net.ipv4.tcp_fin_timeout = 1                    #默认值60 表示如果套接字由本端要求关闭，这个参数决定了它保持在FIN-WAIT-2状态的时间。对端可以出错并永远不关闭连接，甚至意外宕机。可以按此设置，但是要记住的是，即使是一个轻载的Web服务器，也有因为大量的死套接字而内存溢出的风险，FIN-WAIT-2的危险性比FIN-WAIT-1要小，因为它最多只能消耗1.5KB的内存，但是他的生存期要长些。

net.ipv4.tcp_keepalive_time = 30               #默认值7200 当启用keepalive的时候，设置TCP发送keepalive消息的频度。
```

> 修改说明：
>
> - 文件句柄，Linux一切皆文件，文件句柄可以理解为就是一个索引，文件句柄会随着我们进程的调用频繁增加，系统默认文件句柄是有限制的，不能让一个进程无限的调用，所以我们需要限制每个 进程和每个服务使用多大的文件句柄，文件句柄也是必须要调整的优化参数。
> - 在高并发短连接的TCP服务器上，当服务器处理完请求后立刻主动正常关闭连接。这个场景下会出现大量socket处于TIME_WAIT状态。如果客户端的并发量持续很高，此时部分客户端就会显示连接不上。 我来解释下这个场景。主动正常关闭TCP连接，都会出现TIMEWAIT。

## 作为代理服务器优化

通常nginx作为代理服务，负责转发用户的请求，那么在转发的过程中建议开启HTTP长连接，用于减少握手次数，降低服务器损耗。

配置nginx使用长连接示例配置文件：

```shell
upstream http_backend {
    server 127.0.0.1:8080;
    keepalive 16;   #长连接
}

server {
    ...
    location /http/ {
        proxy_pass http://http_backend;
        proxy_http_version 1.1;         #对于http协议应该指定为1.1
        proxy_set_header Connection ""; #清除“connection”头字段
        proxy_next_upstream error timeout http_500 http_502 http_503 http_504;  #平滑过渡
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwared-For $proxy_add_x_forwarded_for;
        proxy_connect_timeout 30s;      # 代理连接web超时时间
        proxy_read_timeout 60s;         # 代理等待web响应超时时间
        proxy_send_timeout 60s;         # web回传数据至代理超时时间
        proxy_buffering on;             # 开启代理缓冲区,web回传数据至缓冲区,代理边收边传返回给客户端
        proxy_buffer_size 32k;          # 代理接收web响应的头信息的缓冲区大小
        proxy_buffers 4 128k;           # 缓冲代理接收单个长连接内包含的web响应的数量和大小
    ...
    }
    # 对于fastcgi
    location /fastcgi/ {
        fastcgi_pass fastcgi_backend;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        fastcgi_keep_conn on;   
        fastcgi_connect_timeout 60s;
        include fastcgi_params;
        ...
    }
}
```

## 静态资源优化

| 静态资源类型 | 种类               |
| ------------ | ------------------ |
| 浏览器端渲染 | HTML、CSS、JS      |
| 图片         | JPEG GIF PNG       |
| 视频         | FLV MPEG           |
| 文件         | TXT 等任意下载文件 |

浏览器缓存过期机制：

![img](https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/v2-28160195deb51a7ff988ce0e6fe47996_720w.jpg)

1. 浏览器发送请求前，根据请求头的expires和cache-control判断是否命中（包括是否过期）强缓存策略，如果命中，直接从缓存获取资源，并不会发送请求。如果没有命中，则进入下一步。
2. 没有命中强缓存规则，浏览器会发送请求，根据请求头的last-modified和etag判断是否命中协商缓存，如果命中，直接从缓存获取资源。如果没有命中，则进入下一步。
3. 如果前两步都没有命中，则直接从服务端获取资源。

> 专业术语说明：
>
> `Last-Modified`：服务器上文件的最后修改时间
>
>  `Etag`：文件标识 Expires：本地缓存目录中，文件过期的时间（由服务器指定具体的时间）
>
> ` Cache-control`：本地缓存目录中，文件过期的时间（由服务器指定过期的间隔时间，由于浏览器根据间隔生成具体的时间）

示例配置文件：

```shell
server {
    listen 80;
    server_name example.com;

    location ~ .*\.(jpg|gif|png)$ {
        expires      7d;
    }
    location ~ .*\.(js|css)$ {
        expires      30d;
    }
    # 取消js、css、html等静态文件缓存
	location ~ .*\.(js|css|html)$ {
        add_header Cache-Control no-store;
        add_header Pragma no-cache;
	}
}
```

## 静态文件读取优化

使用nginx作为静态资源服务时，通过配置sendfile可以有效提高文件读取效率， 设置为on表示启动高效传输文件的模式。sendfile可以让Nginx在传输文件时直接在磁盘和tcp socket之间传输数据。如果这个参数不开启，会先在用户空间（Nginx进程空间）申请一个buffer，用read函数把数据从磁盘读到cache，再从cache读取到用户空间的buffer，再用write函数把数据从用户空间的buffer写入到内核的buffer，最后到tcp socket。开启这个参数后可以让数据不用经过用户buffer。

- **sendfile**

开启`sendfile`功能。`sendfile`功能可以提供`Nginx`静态资源的托管效率。`sendfile`是一个系统调用，直接在内核中完成文件发送，不需要先`read`再`write`，没有上下文切换的开销。

```nginx
syntax: sendfile on | off;
default: sendfile off;
context: server, location
```

- **tcp_nopush**

在`sendfile`指令开启的情况下，开启`tcp_nopush`。启用了这个指令后，数据包会被累积到一定大小才发送，减少额外的开销，提升了网络效率。

```nginx
syntax: tcp_nopush on | off;
default: tcp_nopush off;
context: http, server, location
```

:information_source: 这个指令只有在`sendfile`为`on`的时候才起作用

- **tcp_nodelay**

这个指令的目的就是尽快发送数据。`Nginx`只会针对`keep-alive`状态的`TCP`连接启用`tcp_nodelay`。`tcp_nopush`和`tcp_nodelay`结合在一起使用的时候，会先填满包，然后再尽快发送。

```nginx
syntax: tcp_nodelay on | off;
default: tcp_nodelay on;
context: http, server, location
```

## 静态资源压缩

Nginx 将响应报文发送至客户端之前可以启用压缩功能，这能够有效地**节约带宽**，并**提高响应至客户端的速**度。但是需要消耗一定的服务器性能。压缩后的资源在客户端浏览器会自动识别并解压。

**开启或关闭gzip**

```nginx
syntax: gzip on | off;
default: gzip off;
context: http, server, location
```

在`gzip`指令开启的情况下，有很多其它辅助的指令对压缩的特性进行设置。

**设置压缩类型**

```nginx
Syntax: gzip_types mime-type ...;
Default: gzip_types text/html;
Context: http, server, location
```

**设置压缩比**

```nginx
syntax: gzip_comp_level level;
default: gzip_comp_level 1;
context: http, server, location
```

**设置在哪个版本的http协议下才会对资源进行压缩**

```nginx
syntax: gzip_http_version 1.0|1.1;
default: gzip_http_version 1.1;
context: http, server, location
```

我们也可以使用`http_gzip_static_module`模块来开启预读`gzip`数据的功能。这个模块就是在获取资源的时候预先读取被压缩的资源，如果压缩资源存在，直接读取。否则就读取源文件然后压缩返回。

```nginx
location .. {
  gzip_static on | off;
}
```

示例配置文件：

```nginx
server {
    listen 80;
    server_name example.com；

    location ~ .*\.(jpg|png|gif) {
        root /code/images;
        # gzip on;
        # gzip_types image/jpeg image/gif image/png;
        # gzip_comp_level 2;
        # gzip_http_version 1.1; 
    }
    location ~ .*\.(txt|xml|html|json|js|css)$ {
        gzip on;
        gzip_http_version 1.1;
        gzip_comp_level 1;
        gzip_types text/plain application/json application/x-javascript application/css application/xml text/javascript;
    }
        # 如果是下载资源
    location ~ ^/download  {
        # 放置下载资源的地方
        root /opt/app/code;
        # 预先读取压缩文件
        gzip_static on;
        # 开启 tcp_nopush，需提开启sendfile
        tcp_nopush on;
    }
}

```

## 防盗链

## 使用内置模块

防盗链的目的就是防止资源被盗用。防盗链设置思路，主要是针对客户端请求过程中所携带的一些Header信息来验证请求的合法性，比如客户端在请求的过程中都会携带`referer`信息。优点是规则简单，配置和使用都很方便，缺点是防盗链所依赖的Referer验证信息是可以伪造的，所以通过referer信息防盗链并非100%可靠（毕竟有能够伪造请求头，例如`curl -e "https://www.baidu.com ..."`），但是他能够限制大部分的盗链情况。

```nginx
Syntax: valid_referers none | blocked | server_names | string ...;
Default: -;
Context: server, location
# none: referer来源头部为空的情况
# blocked: referer来源头部不为空，这些都不以http://或者https://开头
# server_names: 来源头部信息包含当前域名，可以正则匹配
```

示例配置文件：

```nginx
location ~ .*\.(jpg|png|gif) {
         root /var/www/html;
         valid_referers none blocked *.example.com server_names
               *.example.com example.* www.example.org/galleries/
               ~\.google\.; 
         if ( $invalid_referer ) {
            return 403;
        # 也可返回一个指定图片
        rewrite ^(.*)$ /var/www/html/pic/fangdaolan.png break;
        }
}
```

### 使用第三方模块

。。。

## 跨域访问

> **何为同源策略：**
>
> 同源策略是一个安全策略。同源，指的是协议，域名，端口相同。浏览器处于安全方面的考虑，只允许本域名下的接口交互，不同源的客户端脚本，在没有明确授权的情况下，不能读写对方的资源。
>
> **何为跨域：**
>
> CORS是一个W3C标准，全称是跨域资源共享(Cross-origin resource sharing)。即从一个域名的网页去请求另一个域名的资源。本质上对于此类请求，只要协议、域名、端口有任何一个的不同，就被当作是跨域，即都被当成不同源。
>
> 通常基于安全考虑，Nginx启用了同源策略，即限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
>
> 但若同一个公司内部存在多个不同的子域，子域之间需要互访，此时可通过跨域进行实现。跨域可通过JSONP和CORS进行实现。

那Nginx语序跨站访问与浏览器有什么关系呢，因为浏览器会读取`Access-Control-Allow-Origin`的头信息，如果服务端允许，则浏览器不会进行拦截。

示例配置文件：

```nginx
server {
        listen 80;
        server_name example.com;
        root /var/www/html;
        index index.html;
        charset utf-8;

        location ~ .*\.(html|htm)$ {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
        }
}
```

## 禁止IP直接访问

关闭空主机头，防止未备案的域名指向。

示例配置文件：

```nginx
server {
    listen 80 default_server;           # 默认优先返回；
    server_name _;                      # 空主机头或者IP；
    return 500;                         # 直接返回500错误；
    # 或者引流至其他站点
    # return 302 http://example.com
}
```

## 附录：示例完整通用配置

```nginx
user www;                   # nginx进程启动用户
worker_processes auto;      # 与cpu核心一致即可
worker_cpu_affinity auto;   # cpu亲和

error_log /var/log/nginx/error.log warn;    # 错误日志
pid /run/nginx.pid;
worker_rlimit_nofile 35535;     #每个work能打开的文件描述符，调整至1w以上,负荷较高建议2-3w

events {
    use epoll;                  # 使用epoll高效网络模型
    worker_connections 10240;   # 限制每个进程能处理多少个连接，10240x[cpu核心]
}

http {
    include             mime.types;
    default_type        application/octet-stream;
    charset utf-8;      # 统一使用utf-8字符集

    # 定义日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    
    #定义json日志格式              
    log_format json_access '{"@timestamp":"$time_iso8601",'
                      '"host":"$server_addr",'
                      '"clientip":"$remote_addr",'
                      '"size":$body_bytes_sent,'
                      '"responsetime":$request_time,'
                      '"upstreamtime":"$upstream_response_time",'
                      '"upstreamhost":"$upstream_addr",'
                      '"http_host":"$host",'
                      '"url":"$uri",'
                      '"domain":"$host",'
                      '"xff":"$http_x_forwarded_for",'
                      '"referer":"$http_referer",'
                      '"status":"$status"}';

    access_log  /var/log/nginx/access.log  main;    # 访问日志

    server_tokens off;  # 禁止浏览器显示nginx版本号
    client_max_body_size 200m;  # 文件上传大小限制调整

    # 文件高效传输，静态资源服务器建议打开
    sendfile            on;
    tcp_nopush          on;
    # 文件实时传输，动态资源服务建议打开,需要打开keepalive
    tcp_nodelay         on;
    keepalive_timeout   65;

    # Gzip 压缩
    gzip on;
    gzip_disable "MSIE [1-6]\.";    #针对IE浏览器不进行压缩
    gzip_http_version 1.1;
    gzip_comp_level 2;      #压缩级别
    gzip_buffers 16 8k;     #压缩的缓冲区
    gzip_min_length 1024;   #文件大于1024字节才进行压缩，默认值20
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript image/jpeg;

    # 虚拟主机
    include /etc/nginx/conf.d/*.conf;
}
```

## 参考链接

- gzip 中文详解：https://blog.csdn.net/zhuyiquan/article/details/52709864
- ngx refer module: http://nginx.org/en/docs/http/ngx_http_referer_module.html

> 文章内容收集于网络。