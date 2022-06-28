# Nginx 高级模块及优化 

## ngx_stream_core_module

默认情况下该模块不会自动安装,需要在编译是使用with来安装. 检查当前nginx是否安装有该模块,`rpm -qa nginx | grep mod-stream`

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

## nginx_upstream_check_module

简单示例：

```nginx
    upstream data_pool {
        server 10.10.81.125:9090;
        server 10.10.81.220:9090;
        check interval=5000 rise=2 fall=10 timeout=3000 type=http;
        check_http_send "GET /login.html HTTP/1.0\r\n\r\n";
        check_http_expect_alive http_2xx http_3xx;
    }
```

更多参考：https://github.com/yaoweibin/nginx_upstream_check_module

## http_geo_module

更多参考：http://nginx.org/en/docs/http/ngx_http_geo_module.html

## http_geoip_module

通过`nginx GeoIP`模块来限制某些国家或者具体地区访问网站。

```shell
# 1. 首先确保http_geoip_module已成功编译进nginx
nginx -V | grep http_geoip_module
# 2. 下载区域数据库
mkdir /etc/nginx/geoip
cd /etc/nginx/geoip
wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz
gunzip GeoIP.dat.gz
wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
gunzip GeoLiteCity.dat.gz
# 3. 修改配置文件
load_module modules/ngx_http_geoip2_module.so;
...
http {
...
 geoip_country /etc/nginx/geoip/GeoIP.dat; # the country IP database
 geoip_city /etc/nginx/geoip/GeoLiteCity.dat; # the city IP database
 
 # map the list of denied countries
map $geoip_country_code $allowed_country {
# 代码：https://dev.maxmind.com/geoip/legacy/codes/iso3166/
   default yes;
   # Pakistan
   PK no;
   # Ukraine
   UA no;
   # Russia
   RU no;
   # China
   CN no;
   }
...
# --------------------- 或者
# http段
http {
[...]
geoip_country /usr/share/GeoIP/GeoIP.dat;
map $geoip_country_code $allowed_country {
default yes;
CN no;
}
[...]
}
# server段
server {
[...]
if ($allowed_country = no) {
return 444;
# # This means the server will stop processing, returns error 444 (The connection was reset),
# # And ignore always sending the response header.
# # Replace 444 by 403 if you want
}
[...]
}

```

:information_source:将模块编译进nginx

```bash
# 克隆模块仓库
git clone https://github.com/leev/ngx_http_geoip2_module.git
# 查看nginx版本
$ nginx -v
nginx version: nginx/VERSION
# 下载和当前版本相同的nginx源码包
wget http://nginx.org/download/nginx-VERSION.tar.gz
tar zxvf nginx-VERSION.tar.gz
cd nginx-VERSION
# 编译模块
./configure --with-compat --add-dynamic-module=../ngx_http_geoip2_module
make modules
# 复制geoip2模块到nginx目录当中去
mkdir -p /etc/nginx/modules
cp -vi objs/ngx_http_geoip2_module.so /etc/nginx/modules/
# 将模块添加到配置文件当中去
load_module modules/ngx_http_geoip2_module.so;
# 检查配置文件正确性和是否成功载入模块
nginx -t && nginx -V | grep geo
```

