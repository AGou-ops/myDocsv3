# Nginx 缓存

Nginx本身就有缓存功能，能够缓存静态对象，比如图片、CSS、JS等内容直接缓存到本地，下次访问相同对象时，直接从缓存即可，无需访问后端静态服务器以及存储存储服务器，可以替代squid功能。

## 1 环境准备

我们这里只测试nginx的proxy_cache的缓存功能，所以结构越简单越好，这里我们只需要准备一台nginx的虚拟机即可，如果没有nginx，那么我们可以使用epel源，yum安装一个即可：

```shell
#添加epel源
root@~$ wget -O /etc/yum.repos.d/epel.repohttp://mirrors.aliyun.com/repo/epel-6.repo
#yum安装nginx
root@~$ yum install nginx -y
#rpm -ql查看主要配置文件位置
root@~$ rpm -ql nginx
```

这里为了简单，只使用简单的nginx.conf配置文件：

```shell
root@nginx$ cat nginx.conf
user              nginx;
worker_processes  1;
error_log /var/log/nginx/error.log;
pid       /var/run/nginx.pid;
events {
   worker_connections  1024;
}
http {
   include      /etc/nginx/mime.types;
   default_type application/octet-stream;
   log_format  main  '$remote_addr - $remote_user [$time_local]"$request" '
                      '$status $body_bytes_sent"$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for"';
   sendfile        on;
   keepalive_timeout  65;
   server {
       listen 80;
       location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
       }
   }
}
```

启动查看初始界面是否正常：

```shell
root@nginx$ nginx
root@nginx$ netstat -tupln|grepnginx
tcp       0      0 0.0.0.0:80           0.0.0.0:*                   LISTEN      1043/nginx
root@nginx$ curl -I 192.168.16.199
HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Mon, 14 Sep 2015 09:40:53 GMT
Content-Type: text/html
Content-Length: 3698
Last-Modified: Tue, 16 Jun 2015 21:34:15GMT
Connection: keep-alive
Accept-Ranges: bytes
```

一切正常，首页有2张图片，正好用于实验：

```shell
root@html$ tree/usr/share/nginx/html/
/usr/share/nginx/html/
|-- 404.html
|-- 50x.html
|-- index.html
|-- nginx-logo.png
`-- poweredby.png
```

至此环境准备完毕。

## 2 配置cache

### 2.1 创建目录并挂载tmpfs

nginx的proxy_cache是基于内存和磁盘的缓存，需要指定缓存目录和临时目录：

```shell
root@nginx$ mkdir /tmp/{ngx_tmp,ngx_cache}-p
```

缓存存放于磁盘，磁盘IO会影响缓存的速度，所以我们在将tmpfs挂载于ngx_cache目录上来加速缓存的读取和写入：

```shell
root@nginx$ mount -t tmpfs -osize=100M tmpfs /tmp/ngx_cache
root@nginx$ mount|grep tmpfs
tmpfs on /dev/shm type tmpfs (rw)
tmpfs on /tmp/ngx_cache type tmpfs (rw,size=100M)
```

### 2.2 配置缓存目录大小以及key空间名

将下面配置放至http标签中：

```shell
root@nginx$ grep proxy_cache_pathnginx.conf

       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100minactive=1d max_size=5g;

#指定缓存目录，缓存等级，键空间名，键空间大小，失效时间，以及磁盘最大缓存大小
```

### 2.3 配置反向代理

首先配置upstream节点池：

```shell
upstream server_pool {
   server 127.0.0.1:8080;
}
```

在server标签的location段中配置代理：

```shell
proxy_pass http://server_pool;
```

配置8080端口的标签：

```shell
server {
   listen 8080;
   location / {
       root /usr/share/nginx/html;
       index index.html index.htm;
   }
   access_log /var/log/nginx/access.log  main;
}
```

配置proxy_cache相关参数启用缓存：

```shell
proxy_pass http://server_pool;
proxy_next_upstream http_502 http_504error timeout invalid_header; #出错尝试下一个节点
proxy_cache cache_one;      #缓存键空间名
proxy_cache_valid 200 304 12h; #指定对应状态码的缓存时间
proxy_cache_valid 301 302 1m;
proxy_cache_valid any 1m;
proxy_cache_key $host$uri$is_args$args; #指定键key的格式
proxy_set_header Host $host;        #传递主机名给后端节点
proxy_set_header X-Forwarded-For$remote_addr; #传递客户端IP给后端节点
expires 1d; #超期时间
```

最终的nginx.conf配置文件如下：

```shell
root@nginx$ cat nginx.conf
user              nginx;
worker_processes  1;
error_log /var/log/nginx/error.log;
pid       /var/run/nginx.pid;
events {
   worker_connections  1024;
}
http {
   include      /etc/nginx/mime.types;
   default_type application/octet-stream;
   log_format  main  '$remote_addr - $remote_user [$time_local]"$request" '
                      '$status $body_bytes_sent"$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for"'
                                         '"addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status"';
   sendfile        on;
   keepalive_timeout  65;
       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100m inactive=1dmax_size=5g;
       upstream server_pool {
                server 127.0.0.1:8080;
       }
   server {
                listen 80;
       location / {
                        proxy_passhttp://server_pool;
                        proxy_next_upstreamhttp_502 http_504 error timeout invalid_header;
                        proxy_cache cache_one;
                        proxy_cache_valid 200304 12h;
                        proxy_cache_valid 301302 1m;
                        proxy_cache_valid any 1m;
                        proxy_cache_key$host$uri$is_args$args;
                        proxy_set_header Host$host;
                        proxy_set_headerX-Forwarded-For $remote_addr;
                        expires 1d;
       }
       access_log /var/log/nginx/cache_access.log main;
   }
       server {
                listen 8080;
                location / {
                        root/usr/share/nginx/html;
                        index index.htmlindex.htm;
                }
       }
}
```

### 2.4 配置日志

为了观察缓存的命中状态，我们可以将缓存相关的变量记录在日志中。

定义日志格式：

```shell
log_format main  '$remote_addr - $remote_user[$time_local] "$request" '
                  '$status $body_bytes_sent"$http_referer" '
                  '"$http_user_agent""$http_x_forwarded_for"'
                 '"addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status"';
#其中upstream_addr记录分发的后端节点IP；upstream_status记录后端节点返回的状态码；upstream_cache_status记录缓存的命中情况。
```

在反向代理标签中引用日志：

```shell
access_log /var/log/nginx/cache_access.log  main;
```

nginx重新加载配置：

```shell
root@nginx$ nginx -s reload
```

### 2.5 监测缓存

监测缓存文件的事件

浏览网站：

```shell
root@ngx_cache$ inotifywait -mrq/tmp/ngx_cache/
/tmp/ngx_cache/ CREATE,ISDIR 6
/tmp/ngx_cache/ OPEN,ISDIR 6
/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR6
/tmp/ngx_cache/ CREATE,ISDIR 1
/tmp/ngx_cache/ OPEN,ISDIR 1
/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR1
/tmp/ngx_cache/ CREATE,ISDIR 3
/tmp/ngx_cache/ OPEN,ISDIR 3
/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR3
/tmp/ngx_cache/3/ CREATE,ISDIR fd
/tmp/ngx_cache/3/ OPEN,ISDIR fd
/tmp/ngx_cache/3/CLOSE_NOWRITE,CLOSE,ISDIR fd
/tmp/ngx_cache/3/fd/ CREATEdd404cd351f6b9efb072e5806dc2efd3.0000000026
/tmp/ngx_cache/3/fd/ OPENdd404cd351f6b9efb072e5806dc2efd3.0000000026
/tmp/ngx_cache/3/fd/ MODIFYdd404cd351f6b9efb072e5806dc2efd3.0000000026
/tmp/ngx_cache/3/fd/ CLOSE_WRITE,CLOSEdd404cd351f6b9efb072e5806dc2efd3.0000000026
/tmp/ngx_cache/3/fd/ MOVED_FROMdd404cd351f6b9efb072e5806dc2efd3.0000000026
/tmp/ngx_cache/3/fd/ MOVED_TOdd404cd351f6b9efb072e5806dc2efd3
```

说明：有最后几行可知，图片缓存到目录中。

## 通过url清理缓存

```nginx
# 在配置段中加入以下内容
location ~ /purge(/.*) {
        allow    all;
        proxy_cache_purge    cache_one   $1;
}

location ~ /purge2(/.*) {
        allow    all;
        proxy_cache_purge    cache_two    $1;
}
```

随后使用`curl`命令进行清理缓存操作：

```bash
 curl -s http://YOUR_IP/purge/<YOUR_RESOURCES>
```

## 参考链接

- nginx cache path: http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path