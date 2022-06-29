# Nginx 反向代理 

## Nginx 反向代理

The `ngx_http_proxy_module` module allows passing requests to another server.

Example Configuration

> ```
> location / {
>     proxy_pass       http://127.0.0.1:8000;
>     proxy_set_header Host      $host;
>     proxy_set_header X-Real-IP $remote_addr;
> }
> ```

示例:

```bash
server {
        listen 80;
        server_name agou-ops.com;

        location / {
                proxy_pass http://192.168.174.141;
                proxy_set_header X-Real-IP $remote_addr;		# 向后端服务器传参数
                add_header X-Via $server_addr;			# 向客户端传递参数
        }
# 反代图片服务器
        location ~* \.(jpg|png|jpeg)$ {
                proxy_pass http://192.168.174.141:8088;
        }
}
```

## Nginx 缓存设置

示例:

```bash
http{
...
    proxy_cache_path  /usr/share/nginx/proxy_cache_dir  levels=1:2   keys_zone=cache_one:200m inactive=1d max_size=30g;		# 参数分别是缓存存放路径,levels表示使用几级缓存目录,keys_zone表示从内存中抽出多大空间,inactive表示存取多长时间后过期,max_size表示最大使用空间
...
}
server {
...
    proxy_cache  cache_one;		# 启用缓存,缓存ID为cache_one
    proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
    proxy_cache_valid  200 304 12h;		#对不同的HTTP状态码设置不同的缓存时间
    proxy_cache_key $request_uri;
...
}
```

## Nginx 动态请求PHP

Example Configuration

> ```
> location / {
>     fastcgi_pass  localhost:9000;
>     fastcgi_index index.php;
> 
>     fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;
>     fastcgi_param QUERY_STRING    $query_string;
>     fastcgi_param REQUEST_METHOD  $request_method;
>     fastcgi_param CONTENT_TYPE    $content_type;
>     fastcgi_param CONTENT_LENGTH  $content_length;
> }
> ```

示例一:

```bash
server {
        listen 80;
        server_name agou-ops.com;
        index index.php index.html;

        location / {
                root /usr/share/nginx/html/vhost1;
                proxy_pass http://192.168.174.142;		# 静态页面
        }

        location ~* \.php$ {
                fastcgi_pass 192.168.174.141:9000;		# 动态php页面
                fastcgi_index index.php;
                include fastcgi_params;
                fastcgi_param SCRIPT_FILENAME /data/php/$fastcgi_script_name;
        }
        
        location ~* ^/(status/ping)$ {
        	include fastcgi_params;
        	fastcgi_pass 192.168.174.141:9000;
        	fastcgi_param SCRIPT_FILENAME /data/php/$fastcgi_script_name;
        }
}
```

示例二:

```bash
http {
...
	fastcgi_cache_path /data/nginx/cache levels=1:2 keys_zone=one:10m;
...
}
server {
...
    fastcgi_cache one;
    fastcgi_keep_conn on;	# This is necessary, in particular, for keepalive connections to FastCGI servers to function.
    fastcgi_cache_key $request_uri;
    fastcgi_cache_valid 200 302 10m;
    fastcgi_cache_valid 301 1h;
    fastcgi_cache_valid any 1m;
...
}
```

## 其他

- 反向代理代理到新地址，浏览器地址栏显示原始地址：

```nginx
    location ~ ^/api/live/.*$ {
		proxy_next_upstream error timeout http_500 http_502 http_503 http_504;
		proxy_set_header Host  $host;
		proxy_set_header X-Forwarded-For  $http_x_forwarded_for;
		proxy_set_header cmccip $cmccip;
		proxy_pass http://new_pool;
		proxy_http_version 1.1;
		proxy_set_header Connection "";
		proxy_connect_timeout 10;
		proxy_read_timeout 15;
    }
```

## 参考文档:

* nginx HttpProxy modules:http://nginx.org/en/docs/http/ngx_http_proxy_module.html
* ngx_http_headers_module:http://nginx.org/en/docs/http/ngx_http_headers_module.html
* proxy_cache:http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path
* ngx_http_fastcgi_module:http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html
* fastcgi_cache:http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache