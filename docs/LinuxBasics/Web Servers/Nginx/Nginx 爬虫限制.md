# Nginx 爬虫限制

> 网络爬虫一方面可以给网站带来一定的流量，便于搜索引擎收录，利于用户搜素，同时也会给服务器带来一定的压力，在网络爬虫对网站内容进行收录时，会引起服务器负载高涨。有没有什么方法既不阻止网络爬虫对网站内容进行收录，同时对其连接数和请求数进行一定的限制呢？
>
> 先来普及下`robots.txt`协议：
> `robots.txt`（也称为爬虫协议、爬虫规则、机器人协议等）是放置在网站根目录中的.TXT文件，是搜索引擎蜘蛛程序默认访问网站第一要访问的文件，如果 搜索引擎蜘蛛程序找到这个文件，它就会根据这个文件的内容，来确定它访问权限的范围。`robots.txt`将告诉搜索引擎蜘蛛程序网站哪些页面时可以访问，哪些不可以。Robots协议是网站国际互联网界通行的道德规范，其目的是保护网站数据和敏感信息、确保用户个人信息和隐私不被侵犯。因其不是命令，故需要搜索引擎自觉遵守。
> **`robots.txt`必须放置在一个站点的根目录下，而且文件名必须全部小写,一词不差。**
>
> `robots.txt`写法：
> `User-agent: * `：这里的代表的所有的搜索引擎种类，是一个通配符
> `Disallow: /admin/ `：这里定义是禁止爬寻`admin`目录下面的内容
>
> 使用robots.txt可以来控制某些内容不被爬虫收录，保证网站敏感数据和用户信息不被侵犯。

示例配置文件：

```nginx
http {
    map $http_user_agent $agent {
        default "";
        ~curl $http_user_agent;
        ~*apachebench $http_user_agent;
        ~*spider $http_user_agent;
        ~*bot  $http_user_agent;
        ~*slurp $http_user_agent;
    }
    limit_conn_zone $agent zone=conn_ttlsa_com:10m;
    limit_req_zone $agent zone=req_ttlsa_com:10m rate=1r/s;
 
    server {
        listen       8080;
        server_name  test.ttlsa.com;
        root /data/webroot/www.ttlsa.com/
 
        location   / { 
            limit_req zone=conn_ttlsa_com burst=5;
            limit_conn req_ttlsa_com 1;
            limit_rate 500k;
        }
    }
}
```

## 参考链接

- nginx限制连接数ngx_http_limit_conn_module模块：http://www.ttlsa.com/nginx/nginx-limited-connection-number-ngx_http_limit_conn_module-module/
- nginx限制请求数ngx_http_limit_req_module模块： http://www.ttlsa.com/nginx/nginx-limiting-the-number-of-requests-ngx_http_limit_req_module-module/
- nginx map使用方法：http://www.ttlsa.com/nginx/nginx-for-the-crawler-to-limit-configuration/

> 该文章内容收集于网络。