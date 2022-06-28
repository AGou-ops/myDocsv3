# HAProxy 参考示例 

示例一(七层):
```bash
global
    log         127.0.0.1 local2
    chroot /usr/local/haproxy
    pidfile     /var/run/haproxy.pid
    maxconn     4000
    user        haproxy
    group       haproxy
    daemon
    spread-checks 2
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull		#  不要在日志中记录空连接
    option http-server-close
    option forwardfor       except 127.0.0.0/8
    option                  redispatch
    timeout http-request    2s
    timeout queue           3s
    timeout connect         1s
    timeout client          10s
    timeout server          2s
    timeout http-keep-alive 10s
    timeout check           2s
    maxconn                 18000 

frontend http-in
    bind             *:8080
    mode             http
    log              global
    #  以下是日志记录内容配置
    capture request  header Host len 20
    capture request  header Referer len 60
    capture request  header Content-Length len 10
    capture response  header Server len 40
    capture response  header Content-Length len 10
    capture response  header Cache-Control len 8
    
    acl url_static   path_beg  -i /static /images /stylesheets
    acl url_static   path_end  -i .jpg .jpeg .gif .png .ico .bmp .css .js
    acl url_static   path_end  -i .html .htm .shtml .shtm .pdf .mp3 .mp4 .rm .rmvb .txt
    acl url_static   path_end  -i .zip .rar .gz .tgz .bz2 .tgz

    use_backend      static_group   if url_static
    default_backend  dynamic_group
    
    errorfile 400 /usr/local/haproxy/examples/errorfiles/400.http
    errorfile 403 /usr/local/haproxy/examples/errorfiles/403.http
    errorfile 408 /usr/local/haproxy/examples/errorfiles/408.http
    errorfile 500 /usr/local/haproxy/examples/errorfiles/500.http
    errorfile 502 /usr/local/haproxy/examples/errorfiles/502.http
    errorfile 503 /usr/local/haproxy/examples/errorfiles/503.http
    errorfile 504 /usr/local/haproxy/examples/errorfiles/504.http

backend static_group
    balance            roundrobin
    option             http-keep-alive
    http-reuse         safe
    option httpchk     GET /health.html
    http-check expect  status 200
    server staticsrv1  192.168.159.129:80 check rise 1 maxconn 5000
    server staticsrv2  192.168.159.130:80 check rise 1 maxconn 5000
    option forwardfor header X-Forwarded-For
    
backend dynamic_group
    cookie appsrv insert nocache
    balance roundrobin
    option http-server-close
    option httpchk     GET  /health.html
    http-check expect  status 200
    server appsrv1 192.168.159.129:81   check rise 1 maxconn 3000 cookie appsrv1
    server appsrv2 192.168.159.130:81  check rise 1 maxconn 3000 cookie appsrv2
    option forwardfor header X-Forwarded-For
    
listen report_stats
        bind *:8081
        stats enable
        stats hide-version
        stats uri    /hastats
        stats realm  "pls enter your name"
        stats auth   admin:admin
        stats admin  if TRUE
```

- (1).静态请求将分配给static_group并进行roundrobin调度，同时通过获取index.html来做健康状况检查，此外还设置了haproxy和后端连接重用的功能。
- (2).动态请求将分配给dynamic_group并进行roundrobin调度，但是向响应报文中插入了一个cookie，保证被调度过的服务端和客户端能保持会话。此外还设置了通过获取index.php来做健康状况检查。

示例二(四层):

```bash
global
    daemon
    maxconn 30000   # ulimit -n至少为60018
    user        haproxy
    group       haproxy
    pidfile     /var/run/haproxy.pid
    log 127.0.0.1 local0 info
    log 127.0.0.1 local1 warning

defaults
    mode tcp
    log global
    option tcplog            # 开启tcplog
    timeout connect 5000ms
    timeout client 10000ms
    timeout server 10000ms   # TCP模式下，应将timeout client和timeout server设置为一样的值，以防止出现问题
    # option tcp-check ...   # 定义默认的健康检查策略

frontend tcp-in
    bind *:9002
    maxconn 30000                    # 定义此端口上的maxconn
    default_backend default_servers  # 请求定向至后端服务群default_servers

backend default_servers    # 定义后端服务群default_servers
    balance roundrobin
    server sqlsrv1 192.168.159.129:3306 maxconn 300 check
    server sqlsrv2 192.168.159.130:3306 maxconn 300 check
```

示例配置详解:

```bash
#   全局配置
global
    log 127.0.0.1 local0         #   设置日志
    log 127.0.0.1 local1 notice
    maxconn 4000                 #   最大连接数
    chroot /usr/local/haproxy    #   安装目录
    user haproxy
    group haproxy
    daemon                       #   守护进程运行
    #  nbproc 1                    #   进程数量，只能用于守护进程模式的haproxy；默认启动一个进程，一般只在单进程仅能打开少数文件描述符的场景中才使用多进程模式；
    pidfile /var/run/haproxy.pid

#   默认配置
defaults
    log     global
    mode    http                 #   默认的模式mode { tcp|http|health }，tcp是4层，http是7层，health只会返回OK
    option  httplog              #   http 日志格式
    option dontlognull           #   不记录健康检查日志信息；
    option  redispatch           #   serverId对应的服务器挂掉后,强制定向到其他健康的服务器
    option http-server-close
    #  option  abortonclose        #   当服务器负载很高的时候，自动结束掉当前队列处理比较久的链接；
    #  option  forwardfor          #   如果后端服务器需要获得客户端真实ip需要配置的参数，可以从Http Header中获得客户端ip；
    #  option  httpclose           #   主动关闭http通道,每次请求完毕后主动关闭http通道,ha-proxy不支持keep-alive,只能模拟这种模式的实现;  
    balance roundrobin           #   负载均衡算法,轮询；
    retries 3                    #   重试次数；

    timeout http-request    10s     #  此为等待客户端发送完整请求的最大时长，应该设置较短些防止洪水攻击，如设置为2-3秒
                                    #  haproxy总是要求一次请求或响应全部发送完成后才会处理、转发，
    timeout queue           1m      #  请求在队列中的最大时长，1分钟太长了。设置为10秒都有点长，10秒请求不到资源客户端会失去耐心
    timeout connect         10s     #  haproxy和服务端建立连接的最大时长，设置为1秒就足够了。局域网内建立连接一般都是瞬间的
    timeout client          1m      #  和客户端保持空闲连接的超时时长，在高并发下可稍微短一点，可设置为10秒以尽快释放连接
    timeout server          1m      #  和服务端保持空闲连接的超时时长，局域网内建立连接很快，所以尽量设置短一些，特别是并发时，如设置为1-3秒
    timeout http-keep-alive 10s     #  和客户端保持长连接的最大时长。优先级高于timeout http-request高于timeout client
    timeout check           10s     #  和后端服务器成功建立连接后到最终完成检查的时长(不包括建立连接的时间，只是读取到检查结果的时长)，
                                    #  可设置短一点，如1-2秒
    maxconn                 3000    #  默认和前段的最大连接数，但不能超过global中的maxconn硬限制数

#   统计页面配置
listen admin_stats  
    bind 0.0.0.0:50000           #   监听IP和端口，为了安全可以设置本机的局域网IP及端口；
    mode http
    option httplog               #   采用http日志格式  
    stats refresh 30s            #   统计页面自动刷新时间  
    stats uri /haproxy?stats     #   状态管理页面，通过/haproxy?stats来访问
    stats realm Haproxy Manager  #   统计页面密码框上提示文本  
    stats auth admin:admin     #   统计页面用户名和密码设置  
    #  stats hide-version          #   隐藏统计页面上HAProxy的版本信息
    #  errorfile 403 /usr/local/haproxy/examples/errorfiles/   #  设置haproxy 错误页面

#  前端配置
frontend http_main
    bind 0.0.0.0:80              #   http请求的端口，会被转发到设置的ip及端口

    #   转发规则
    #  acl url_yuming   path_beg www.yuming.com
    #  use_backend server_yuming if url_yuming

    #   默认跳转项，当上面都没有匹配上，就转到backend的http_default上；
    default_backend http_default

    #   提升失败的时候的用户体验
    #  errorfile 502 /usr/local/haproxy/examples/errorfiles/502.http
    #  errorfile 503 /usr/local/haproxy/examples/errorfiles/503.http
    #  errorfile 504 /usr/local/haproxy/examples/errorfiles/504.http

#   后端配置
backend http_default
    #   额外的一些设置，按需使用
    option forwardfor
    option forwardfor header Client-IP
    option http-server-close
    option httpclose

    #   负载均衡方式
    #  source 根据请求源IP
    #  static-rr 根据权重
    #  leastconn 最少连接先处理;在有着较长时间会话的场景中推荐使用此算法，如LDAP、SQL等，其并不太适用于较短会话的应用层协议，如HTTP；此算法是动态的，
    #  uri 根据请求的uri
    #  url_param 根据请求的url参数
    #  rdp-cookie 据据cookie(name)来锁定并哈希每一次请求
    #  hdr(name) 根据HTTP请求头来锁定每一次HTTP请求
    #  roundrobin 轮询方式
    balance roundrobin           #   负载均衡的方式,轮询方式

    #   设置健康检查页面
    #  option httpchk GET /index.html

    #  传递客户端真实IP
    option forwardfor header X-Forwarded-For

    #   需要转发的ip及端口
    #   inter 2000 健康检查时间间隔2秒
    #   rise 3 检测多少次才认为是正常的
    #   fall 3 失败多少次才认为是不可用的
    #   weight 30 权重
    server node1 192.168.1.101:8080 check inter 2000 rise 3 fall 3 weight 30
    server node2 192.168.1.101:8081 check inter 2000 rise 3 fall 3 weight 30
```

##  参考链接

* haproxy实现会话保持(cookie):https://www.cnblogs.com/f-ck-need-u/p/8553190.html