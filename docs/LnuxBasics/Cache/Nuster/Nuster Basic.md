# Nuster Basic 

## 简介

nuster是一个基于HAProxy的高性能HTTP缓存服务器和RESTful NoSQL缓存服务器，完全兼容HAProxy，并且利用HAProxy的ACL功能来提供非常细致的缓存规则。

性能:非常快, 单进程模式下是nginx的3倍，多进程下nginx的2倍，varnish的3倍。详见[性能比较](https://github.com/jiangwenyuan/nuster/wiki/Web-cache-server-performance-benchmark:-nuster-vs-nginx-vs-varnish-vs-squid)

特性及性能参考:https://github.com/jiangwenyuan/nuster/blob/master/README.md#features

## 编译安装

1. 从github官方拉取源码包并解压

```bash
wget https://github.com/jiangwenyuan/nuster/releases/download/v5.0.2.21/nuster-5.0.2.21.tar.gz
tar xf nuster-5.0.2.21.tar.gz
```

2. 编译安装

```bash
cd nuster-5.0.2.21
# 如果没有配置好LUA,openssl,pcre和zlib的话可以忽略编译选项USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1
make TARGET=linux2628 USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1
make install PREFIX=/usr/local/nuster
```

3. 启动nuster

```bash
/usr/local/nuster/sbin/nuster -f nuster.cfg
```

:information_source: 在Docker中使用:

```bash
docker pull nuster/nuster
docker run -d -v /path/to/nuster.cfg:/etc/nuster/nuster.cfg:ro -p 8080:8080 nuster/nuster
```

## 配置与使用

### 官方示例

```
global
    nuster cache on data-size 100m
    nuster nosql on data-size 200m
    master-worker # v3
defaults
    mode http
frontend fe
    bind *:8080
    #bind *:4433 ssl crt example.com.pem alpn h2,http/1.1
    use_backend be2 if { path_beg /_kv/ }
    default_backend be1
backend be1
    nuster cache on
    nuster rule img ttl 1d if { path_beg /img/ }
    nuster rule api ttl 30s if { path /api/some/api }
    server s1 127.0.0.1:80
    server s2 127.0.0.1:80
backend be2
    nuster nosql on
    nuster rule r1 ttl 3600
```

nuster监听8080端口，接受HTTP请求。 `/_kv/`开头的请求分配到backend `be2`, 可以发送HTTP `POST/GET/DELETE`到`/_kv/any_key` 来 添加/取得/删除 Key/Value. 其他的请求都被分配到backend `be1`, 并且会被转发到服务器`s1` or `s2`. 其中`/img/*`请求会被缓存1天，而`/api/some/api`会被缓存30秒。

## 简单示例

作为 `HTTP/HTTPS` 负载均衡器

```bash
defaults
    retries 3
    option redispatch
    timeout client  30s
    timeout connect 30s
    timeout server  30s
frontend web-lb
   bind *:8080
   #bind *:443 ssl crt XXX.pem
   mode http
   default_backend apps
backend apps
   balance roundrobin
   mode http
   server s1 127.0.0.1:80
   server s2 node01:80
   #server s3 10.0.0.103:8080
   #server s4 10.0.0.101:8443 ssl verify none
```

作为 `TCP` 负载均衡器(这里以mysql服务为例)

```bash
frontend mysql-lb
   bind *:3306
   mode tcp
   default_backend mysql-cluster
backend mysql-cluster
   balance roundrobin
   mode tcp
   server s1 127.0.0.1:3306
   server s2 node01:3306
   #server s3 10.0.0.103:3306
```

作为`HTTP-CACHE`缓存服务器

```bash
global
    nuster cache on data-size 200m
frontend fe
    bind *:8080
    default_backend be
backend be
    nuster cache on
    nuster rule all
    server s1 127.0.0.1:8081
```



## 参考链接

* 官方文档:https://github.com/jiangwenyuan/nuster/blob/master/README.md