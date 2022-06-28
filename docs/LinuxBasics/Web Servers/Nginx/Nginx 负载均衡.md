# Nginx 负载均衡 

## Nginx 七层负载均衡

Example Configuration

> ```
> upstream backend {
>     server backend1.example.com       weight=5;
>     server backend2.example.com:8080;
>     server unix:/tmp/backend3;
> 
>     server backup1.example.com:8080   backup;
>     server backup2.example.com:8080   backup;
> }
> 
> server {
>     location / {
>         proxy_pass http://backend;
>     }
> }
> ```

示例:

```nginx
# 在http配置段中
http {
...
    upstream backend-server {
        server 192.168.174.141 weight=1;
        server 192.168.174.142 weight=2;
        server 192.168.174.99 backup;	# 备份服务器,当主服务器宕机无法接收请求时将会被启用,可用于sorry server
        # server 192.168.174.100 down;		# 手动标记主机永久不可用 
        # server 192.168.174.101 max_conns=[NUMBER] max_fails=[NUMBER] fail_timeout=[NUMBER];		# 从左往右参数分别是:最大并发连接数,用于健康状态检测的最多失败次数,失败的时间 
        
        # --- 调度算法 ---
        # least_conn;   # 最少连接
        # fair;         # 按后端服务器的响应时间来分配请求，响应时间短的优先分配
        # ip_hash;      # 每个访客固定访问一个后端服务,此外还可以通过hash来按照键值来绑定请求,↓↓↓如下所示↓↓↓
        
        # * 语法:	hash key [consistent];	例如: `hash $remote_addr`效果和ip_hash算法效果一致,[consistent]参数参考` /扩展(一致性哈希算法)/ `
        
        # --- 其他 ---
        # keepalive 32;		# 激活连接上游服务器的缓存,数字32表示nginx的每个work进程最大的连接数,当超过该数字时,最近最少使用的连接将会被关闭,该参数常用在后端缓存服务器上
	}       
...
}
# 在server配置段中
server {
        listen 80;
        server_name agou-ops.com;

        location / {
        proxy_pass http://backend-server;
        }
}

# ----------- 设置负载均衡所调用的proxy参数

5.准备Nginx负载均衡调度使用的proxy_params
$ vim /etc/nginx/proxy_params
proxy_set_header Host $http_host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
 
proxy_connect_timeout 30;
proxy_send_timeout 60;
proxy_read_timeout 60;
 
proxy_buffering on;
proxy_buffer_size 32k;
proxy_buffers 4 128k;

# -=------------------
```

## Nginx 四层负载均衡

Example Configuration

> ```
> worker_processes auto;
> 
> error_log /var/log/nginx/error.log info;
> 
> events {
>     worker_connections  1024;
> }
> 
> stream {
>     upstream backend {
>         hash $remote_addr consistent;
> 
>         server backend1.example.com:12345 weight=5;
>         server 127.0.0.1:12345            max_fails=3 fail_timeout=30s;
>         server unix:/tmp/backend3;
>     }
> 
>     upstream dns {
>        server 192.168.0.1:53535;
>        server dns.example.com:53;
>     }
> 
>     server {
>         listen 12345;
>         proxy_connect_timeout 1s;
>         proxy_timeout 3s;
>         proxy_pass backend;
>     }
> 
>     server {
>         listen 127.0.0.1:53 udp reuseport;
>         proxy_timeout 20s;
>         proxy_pass dns;
>     }
> 
>     server {
>         listen [::1]:12345;
>         proxy_pass unix:/tmp/stream.socket;
>     }
> }
> ```

示例:

```shell
stream {
    upstream ssh_servers {
        server node01:22;		# 同七层负载均衡,可指定权重weight,是否为备用节点backup,此外还有fail_timeout
        server node02:22;
    }
	upsteam web_servers {
		server node01:80;
		server node02:80;
	}
    server {
        listen 9922;
        proxy_pass ssh_servers;
        proxy_timeout 10m;		# 客户端两次请求之前的间隔,默认为10min
        proxy_connect_timeout 60s;		# nginx与被反代服务器舱室连接的超时时长,默认为60s
    }
    server {
    	listen 80;
    	proxy_pass web_servers;
    }
}

```

## 四七层负载均衡对比

* 四层负载均衡仅能转发TCP/IP协议、UDP协议、通常用来转发端口，如：tcp/22、udp/53；
* 四层负载均衡可以用来解决七层负载均衡端口限制问题；（七层负载均衡最大使用65535个端口号）
* 四层负载均衡可以解决七层负载均衡高可用问题；（多台后端七层负载均衡能同事的使用）
* 四层的转发效率比七层的高得多，但仅支持tcp/ip协议，不支持http和https协议；
* 通常大并发场景通常会选择使用在七层负载前面增加四层负载均衡。

## Nginx负载均衡调度算法

详情参考：[http://nginx.org/en/docs/http/ngx_http_upstream_module.html](http://nginx.org/en/docs/http/ngx_http_upstream_module.html)

| 调度算法        | 概述                                                         | 简称 |
| --------------- | ------------------------------------------------------------ | ---- |
| 轮询            | 按时间顺序逐一分配到不同的后端服务器（默认）不考虑实际负载或实际配置，所有服务器都是平等，平均负载请求 | rr   |
| weight          | 加权轮询，weight值越大，分配到的访问几率越高                 | wrr  |
| ip_hash         | 每个请求按访问IP的hash结果分配，这样来自同一IP的客户端固定会访问同一个后端服务器 | -    |
| url_hash        | 按照访问URL的hash结果来分配请求，每次相同的URL都会定向到同一个后端服务器 | -    |
| consistent_hash | 一致性哈希算法，需要额外的模块包                             | -    |
| least_conn      | 最少连接数，那个机器连接数少就分发                           | lc   |
| wlc             | 加权最小连接                                                 | wlc  |

部分配置示例：

```bash
# rr 与 wrr
upstream web_lb {
        server 172.16.1.20:80 weight=5;
        server 172.16.1.30:80;
        server 172.16.1.40:80;
}
# ip_hash，注意ip_hash不能与轮询或者加权轮询共同使用
upstream web_lb {
        ip_hash;
        server 172.16.1.20:80;
        server 172.16.1.30:80;
        server 172.16.1.40:80;
}
# consistent_hash
upstream somestream {
  consistent_hash $request_uri;
  server 10.50.1.3:11211;
  server 10.50.1.4:11211;
  server 10.50.1.5:11211;
}
```

## 扩展(一致性哈希算法)

​	一致性hash用于对hash算法的改进，后端服务器在配置的server的数量发生变化后，同一个upstream server接收到的请求会的数量和server数量变化之间会有变化。尤其是在负载均衡配置的upstream server数量发生增长后，造成产生的请求可能会在后端的upstream server中并不均匀，有的upstream server负载很低，有的upstream server负载较高，这样的负载均衡的效果比较差，可能对upstream server造成不良的影响。由此，产生了一致性hash算法来均衡。

:information_source: 详细介绍参考:[https://baike.baidu.com/item/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C/2460889?fr=aladdin](https://baike.baidu.com/item/一致性哈希/2460889?fr=aladdin)

在 nginx 中的应用:

```bash
upstream backend_server {
...
hash $request_uri consistent;		# 增加`consistent`即可
...
}
```

## 参考链接

* ngx_http_upstream_module:http://nginx.org/en/docs/http/ngx_http_upstream_module.html
* upstream-keepalive:http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive
* ngx_stream_core_module:http://nginx.org/en/docs/stream/ngx_stream_core_module.html
* ngx_stream_upstream_modulehttp://nginx.org/en/docs/stream/ngx_stream_upstream_module.html
* 一致性哈希:https://baike.baidu.com/item/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C/2460889?fr=aladdin