# Nginx 快速手册

## 配置本地 HTTPS

```bash
sudo openssl req -x509 --nodes --days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/example.com.key -out /etc/nginx/ssl/example.com.crt
```

`vim /etc/nginx/conf.d/www.example.com.conf`:

```nginx
server {
	listen 80 default_server;
	server_name www.example.com;
	return 301 https://$server_name$request_uri;
}
server {
	listen 443 ssl;
	server_name www.example.com;
	ssl_certificate /etc/nginx/ssl/example.com.crt;
	ssl_certificate_key /etc/nginx/ssl/example.com.key;
	location / {
		root /usr/share/nginx/html;
		index index.html index.htm;
	}
}
```

最后，`nginx -t`检查配置文件语法，`nginx -s reload`重载服务即可。

## 禁止IP直接访问

```nginx
server {
 listen 80 default_server;
 server_name example.com
 
 ssl_certificate /etc/nginx/ssl/example.com.crt;
 ssl_certificate_key /etc/nginx/ssl/example.com.key;

 if ($host != "example.com") {
  return 404;
 }
}
# 或者
server {
    listen 80 default_server;
    server_name "";
    return 444;		# 返回空响应
    return 301 http://YOUR_DOMAIN;
}
```

## php

```nginx
$ cat php.conf 
server {
    listen 80;
    server_name php.example.com;
    root /code;

    location / {
        index index.php index.html;
    }

    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
$ cat /code/index.php 
<?php
    phpinfo();
?>
```

## Log format

```bash
# 示例1
log_format compression '$remote_addr - $remote_user [$time_local] '
                       '"$request" $status $bytes_sent '
                       '"$http_referer" "$http_user_agent" "$gzip_ratio"';

access_log /spool/logs/nginx-access.log compression buffer=32k;
# 示例2
log_format combined '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
# 示例3
log_format  main  '$remote_addr - $remote_user [$time_local]"$request" '
                    '$status $body_bytes_sent"$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
```

更多参考：http://nginx.org/en/docs/http/ngx_http_log_module.html

## 状态监控

```nginx
 location /mystatus {
    stub_status on;
    access_log off;
}
```

## 目录浏览

```nginx
location / {
    root html;
    autoindex on;
    autoindex_localtime on;
    autoindex_exact_size off;
}
```

## 调整文件上传大小

```nginx
# nginx长传文件大小限制配置示例
# 也可以放入http层，全局生效
server {
    listen 80;
    server_name _;
    client_max_body_size 200m;
}
```

## 设置错误页面

```nginx
# 设置 error_page
server {
    listen       80;
    server_name  _;
    root /code;
    # 1
    #error_page  404  http://www.baidu.com;

    location / {
        index index.html;
        error_page  404  http://www.baidu.com;
    }    
    # 2
    error_page 403 404 /404.html;
    location = /404.html {
        root /code;
        index index.html;   
    }
}
```

## 访问限制

### 连接数限制

```nginx
http {
# http段配置连接限制, 同一时刻只允许一个客户端IP连接
limit_conn_zone $binary_remote_addr zone=conn_zone:10m;
    ...
    server {
    ...  
location / {
        # 同一时刻只允许一个客户端IP连接
            limit_conn conn_zone 1;
        }
```

### 请求数限制

```nginx
http {
# 开辟一个10m的请求控件，并将其命名为req_zone，http段配置请求限制, rate限制速率，限制一秒钟最多一个IP请求
limit_req_zone $binary_remote_addr zone=req_zone:10m rate=1r/s;
    ...
    server {
    ...  
location / {
        # 只接收一个请求,其余请求拒绝处理并返回错误码给客户端
            limit_req zone=req_zone;
        # 请求超过1r/s,剩下的将被延迟处理,请求数超过burst定义的数量, 多余的请求返回503
            #limit_req zone=req_zone burst=3 nodelay;
        }
```

> :question: **连接限制没有请求限制有效?**
> 多个请求可以建立在一次的TCP连接之上, 那么我们对请求的精度限制，当然比对一个连接的限制会更加的有效。因为同一时刻只允许一个连接请求进入。但是同一时刻多个请求可以通过一个连接进入。*所以请求限制才是比较优的解决方案。*

## 访问控制

### 禁止用户访问某个文件或目录

```nginx
# 禁止htaccess
location ~/\.ht {
    deny all;	
}
# 禁止多个目录
location ~ ^/(cron|templates)/ {
    deny all;
    break;
}
# 禁止以/data开头的文件, 可以禁止/data/下多级目录下.log.txt等请求;
location ~ ^/data {
    deny all;
}
# 禁止单个目录, 不能禁止.log.txt能请求
location /searchword/cron/ {
    deny all;
}
```

### 基于IP的访问控制

以下方法存在局限性，比如客户端使用正向代理访问时

```nginx
# 配置拒绝某一个IP, 其他全部允许
location ~ ^/1.html {
    root /usr/share/nginx/html;
    index index.html;
    deny 192.168.56.1;
    allow all;
}
# 只允许某一个网段访问,其它全部拒绝
location / {
    root   html;
    index  index.php index.html index.html;
    allow   192.168.56.0/24;
    deny    all;
}
```

更为精细的做法，使用`realip`和`geo`模块再加上`X-Forwarded-For`参数一块使用：

```nginx
# 示例配置文件
geo $allow {
    default 0;
    192.168.168.0/24 1;
}

server {
    real_ip_header X-Forwarded-For;
    set_real_ip_from 10.1.2.3;

    if ($allow = 0) {
        return 403;
    }
}
```

模块参考链接：

- http://nginx.org/en/docs/http/ngx_http_realip_module.html
- http://nginx.org/en/docs/http/ngx_http_geo_module.html

### 基于用户登录的基本认证

```nginx
# 1. 首先安装好apache2-utils 或者 httpd-tools
# 2. 创建密码文件和用户，仅首次创建需要使用`-c`选项
sudo htpasswd -c /etc/apache2/.htpasswd user1
sudo htpasswd /etc/apache2/.htpasswd user2
# 3. 配置nginx配置文件
server {
    ...
    # 何为satisfy
    # https://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy
    satisfy all;
    auth_basic           "Administrator’s Area";
    auth_basic_user_file conf/htpasswd;

    location /public/ {
        auth_basic off;
    }
}
```

> **用户认证局限性**
>
> 1. 用户信息依赖文件方式
> 2. 用户管理文件过多, 无法联动
> 3. 操作管理机械，效率低下
>
> 
>
> **解决办法**
>
> 1. Nginx结合LUA实现高效验证
> 2. Nginx结合LDAP利用nginx-auth-ldap模块

## Root 与 alias

**root与alias路径匹配主要区别在于nginx如何解释location后面的uri，这会使两者分别以不同的方式将请求映射到服务器文件上，alias是一个目录别名的定义，root则是最上层目录的定义。**

配置文件示例：

```nginx
server {
    listen 80;
    server_name image.example.com;

    location / {
        root /code;
    }

    location ~* ^.*\.(png|jpg|gif)$ {
        alias /code/images/;
    }
}
```

## try_file 路径匹配

**nginx的try_file路径匹配，Nginx会按顺序检查文件及目录是否存在（根据 root 和 alias 指令设置的参数构造完整的文件路径），并用找到的第一个文件提供服务。在元素名后面添加斜杠 / 表示这个是目录。如果文件和目录都不存在，Nginx会执行内部重定向，跳转到命令的最后一个 uri 参数定义的 URI 中。**

配置示例文件：

```nginx
    location / {
        try_files $uri $uri/ /404.png;
    }
* 举例：如果访问根目录下的logo.png文件，如果不存在，则前往logo.png文件夹下去查找，如果还未查到，则返回404.png文件内容。

# 将最后的处理传递给后端服务器
    location / {
        try_files $uri $uri/ @java;             # 当$uri和$uri/都匹配不到时，由后端的java来进行处理，名字可自定义，但一定要加@
    }

    location @java {
    proxy_pass http://172.16.1.8:8080;          # 配置后端tomcat
    }
```

