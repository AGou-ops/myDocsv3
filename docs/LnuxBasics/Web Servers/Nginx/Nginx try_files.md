# nginx try_files

> 語法：try_files file ... uri 或 try_files file ... = code
> 默認值：無
> 作用域：server location
>
> 其作用是按順序檢查文件是否存在，返回第一個找到的文件或文件夾（結尾加斜線表示為文件夾），如果所有的文件或文件夾都找不到，會進行一個內部重定向到最後一個參數。
>
> 需要註意的是，只有最後一個參數可以引起一個內部重定向，之前的參數只設置內部URI的指向。最後一個參數是回退URI且必須存在，否則會出現內部500錯誤。命名的location也可以使用在最後一個參數中。與rewrite指令不同，如果回退URI不是命名的location那麽$args不會自動保留，如果你想保留$args，則必須明確聲明。

## 示例

- 当文件不存在时，设置一个默认值，并设置一个过期时间.

```nginx
location /images/ {
    try_files $uri /images/default.gif;
}

location = /images/default.gif {
    expires 30s;
}
```

- 检测文件是否存在，如果不存在就去其他的location里面去找.

```nginx
location /abc {
	try_files /4.html /5.html @qwe; #检测文件4.html和5.html,如果存在正常显示,不存在就去查找@qwe值
}

location @qwe {
	rewrite ^/(.*)$ http://www.baidu.com; #跳转到百度页面
}
```

- 跳转到后端负载均衡.

```nginx
upstream tornado {
server 127.0.0.1:8001;
}

server {
server_name imike.me;
return 301 $scheme://www.imike.me$request_uri;
}

server {
listen 80;
server_name www.imike.me;

root /var/www/www.imike.me/V0.3/www;
index index.html index.htm;

try_files $uri @tornado;

location @tornado {
proxy_pass_header Server;
proxy_set_header Host $http_host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Scheme $scheme;

proxy_pass http://tornado;
}
}
```

> 以上部分示例来源于网络。

## 注意点

1. 当`try_files`的最后一个参数为内部重定向时，需要在后界面加一个`404`或者其他跳转，以免前面文件找不到导致服务器报出`500`错误.

```nginx
location ~.*\.(gif|jpg|jpeg|png)$ {
	root /web/wwwroot;
	try_files /static/$uri $uri 404;			# 如果不加后面的404，只要第一个路径匹配失败，那么服务器就会报出500
}
```





## 参考链接

- https://www.796t.com/content/1519111220.html
- https://www.cnblogs.com/zhengchunyuan/p/11281568.html
- http://nginx.org/en/docs/http/ngx_http_core_module.html#try_files