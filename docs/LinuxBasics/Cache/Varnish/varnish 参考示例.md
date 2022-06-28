# varnish 参考示例 

## 简单参考示例

1. 对某种请求不检查缓存

```bash
vcl_recv {
    if (req.url ~ "(?i)^/(login|admin)") {
    return(pass);
}
}
```

2. 拒绝某种请求访问

```bash
vcl_recv {
    if (req.http.User-Agent ~ "(?i)curl") {
    return(synth(405));
}
}
```

3. 对公开资源，取消私有标记，并设定缓存时长

```bash
if (beresp.http.cache-control !~ "s-maxage") {
if (bereq.url ~ "(?i)\.(jpg|jpeg|png|gif|css|js)$") {
    unset beresp.http.Set-Cookie;
    set beresp.ttl = 3600s;
}
}
```

4. 显示后端主机IP

```bash
if (req.restarts == 0) {
if (req.http.X-Fowarded-For) {
    set req.http.X-Forwarded-For = req.http.X-Forwarded-For + "," + client.ip;
} else {
    set req.http.X-Forwarded-For = client.ip;
}
}
```

5. 根据purge请求清除缓存(可以使用` curl  -X  PURGE URL`来测试)

```bash
sub vcl_recv {
    if (req.method == "PURGE") {
    return(purge);
	}
}
```

6. 设置acl访问控制

```bash
acl purgers {
"127.0.0.0"/8;
"192.168.0.0"/16;
}
sub vcl_recv {
    if (req.method == "PURGE") {
    if (!client.ip ~ purgers) {
    return(synth(405,"Purging not allowed for " + client.ip));
	}
    return(purge);
}
}
```

7. 用ban命令清除缓存(在varnishadm交互式终端下执行)

```bash
ban req.url ~ ^/javascripts
ban req.url ~ /js$
ban req.url ~ (?i).(jpg|jpeg)$   
```

配置文件中使用

```bash
sub vcl_recv {
        if (req.method == "BAN") {
                # Same ACL check as above:
                if (!client.ip ~ purge) {
                        return(synth(403, "Not allowed."));
                }
                ban("req.http.host == " + req.http.host +
                      " && req.url == " + req.url);

                # Throw a synthetic page so the
                # request won't go to the backend.
                return(synth(200, "Ban added"));
        }
}
```

8.配置varnish后端多台主机

```bash
import directors; #  导入模块
backend server1 {
    .host = "192.168.159.129";
    .port = "80";
}
backend server2 {
    .host = "192.168.159.130";
    .port = "80";
}
sub vcl_init {
    new websrvs = directors.round_robin();
    websrvs.add_backend(server1);
    websrvs.add_backend(server2);
}
sub vcl_recv {

#  用哪一组server来请求
set req.backend_hint = websrvs.backend();

}
```

9. varnish动静分离

```bash
backend default {
    .host = "192.168.159.129";
    .port = "80";
}
backend appsrv {
    .host = "192.168.159.130";
    .port = "80";
}
sub vcl_recv {
    if (req.url ~ "(?i)\.php$") {
        set req.backend_hint = appsrv;
    } else {
        set req.backend_hint = default;
    }
}
```

## 综合参考示例

示例一:

```bash
# 必须以vcl 开头
vcl 4.0;
# 导入directors模块实现负载均衡；并定义acl，来控制purger（更新缓存）的使用
import directors;
acl  purgers {
    "127.0.0.0"/8;
    ! "192.168.2.0"/24;
}
#  健康状态检查定义项
# --------------------------------------------
probe healthche {
    .url="/index.html";
    .timeout = 2s;
    .window = 6 ;
    .threshold = 5;
}
# backend组即为后台web端
backend server1 {
    .host = "192.168.159.129";
    .port = "80";
    .probe = healthche ;
}
backend server2 {
     .host="192.168.159.130";
     .port="80";
     .probe = {				# 此外定义健康状态检查还可以这样定义
         .url="/index.html";
         .timeout = 2s;
         .window = 6 ;
         .threshold = 5;
     
     }
}	
# ++++++++++++++++++++++++++	手动调整backend server健康状态	+++++++++++++++++++++++++
# help backend.set_health
# 200
# backend.set_health <backend_pattern> ``[auto|healthy|sick]``
# Set health status on the backends.
# 例如: backend.set_health server2 sick
# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}
# --------------------------------------------
# 以轮询方式调度
sub vcl_init {
    new websrvs =directors.random();		# 当调度算法为random时才会有权重
    srvs.add_backend(server1,1);		# backend 'server1' with weight '1'
    srvs.add_backend(server2,2);		# backend 'server2' with weight '2'
}
# --------------------------------------------
sub vcl_recv {
	set req.backend_hint=websrvs.backend();
    # set req.backend_hint=srvs.backend(req.http.cookie);
# 正则匹配 login或admin隐私信息不允许服务端缓存
    if (req.url ~ "(?i)^/(login|admin)") {
        return(pass);
    }
# url重写，告诉后端服务器真实的请求者，安全避免重复添加，还可定义在记录日志中
    if (req.restarts == 0) {
        if (req.http.X-Fowarded-For) {
            set req.http.X-Forwarded-For = req.http.X-Forwarded-For + "," + client.ip;
        } else {
            set req.http.X-Forwarded-For = client.ip;
        }
    }                
# purge的使用：更新一个缓存，而更新一组缓存用ban   
    if (req.method == "PURGE"){
    if (!client.ip ~ purgers) {
        return(synth(405,"Purging not allowed for "+client.ip));
    }
    return(purge);    
    }
# 把不同资源按需调度到不同主机
    if (req.url ~ "(?i)\.(jpg|jpeg|png)$") {
    set req.backend_hint = server2;
    } else {
    set req.backend_hint = server1;
    }
# ++++++++++++++++++++++++++++++++	后端有多个虚拟主机	++++++++++++++++++++++++++++++++
#	 if (req.http.host ~ "foo.com" || req.http.host == "www.foo.com") {
#       set req.backend_hint = foo;
#    } elsif (req.http.host ~ "bar.com") {
#        set req.backend_hint = bar;
#    }
# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}
# --------------------------------------------
sub vcl_backend_response {

# 客户端的图片类信息可以除去cookies标志让服务器能够缓存，并定义缓存有效期为2H
    if (bereq.url ~ "(?i)\.(jpg|jpeg|png|gif)$") {
    unset beresp.http.Set-cookies;
    set beresp.ttl =7200s;
    }
}
# --------------------------------------------
sub vcl_deliver {

# 定义缓存响应头部
    if (obj.hits>0) {
        set resp.http.X-Cache = "HIT via " + server.ip;
    } else {
        set resp.http.X-Cache = "MISS from " + server.ip;
    }
}
```

示例二:

```bash
backend imgsrv1 {
                .host = "192.168.10.11";
                .port = "80";
}
        
backend imgsrv2 {
                .host = "192.168.10.12";
                .port = "80";
}       
        
backend appsrv1 {
                .host = "192.168.10.21";
                .port = "80";
}
        
backend appsrv2 {
                .host = "192.168.10.22";
                .port = "80";
}
        
sub vcl_init {
                new imgsrvs = directors.random();
                imgsrvs.add_backend(imgsrv1,10);
                imgsrvs.add_backend(imgsrv2,20);
                new staticsrvs = directors.round_robin();
                appsrvs.add_backend(appsrv1);
                appsrvs.add_backend(appsrv2);
                
                new appsrvs = directors.hash();		# hash绑定,实现session会话粘性
                appsrvs.add_backend(appsrv1,1);
                appsrvs.add_backend(appsrv2,1);         
}
        
sub vcl_recv {
                if (req.url ~ "(?i)\.(css|js)$" {
                        set req.backend_hint = staticsrvs.backend();
                }               
                if (req.url ~ "(?i)\.(jpg|jpeg|png|gif)$" {
                        set req.backend_hint = imgsrvs.backend();
                } else {                
                        set req.backend_hint = appsrvs.backend(req.http.cookie);		# 传递请求报文首部的cookie信息给后端动态server
                }
}
```

> 示例部分参考: cnblogs @黑夜繁星

## 参考链接

* backend server:https://varnish-cache.org/docs/5.2/users-guide/vcl-backends.html#backend-servers
* purging and banning:https://varnish-cache.org/docs/5.2/users-guide/purging.html#purging-and-banning
* health check:https://varnish-cache.org/docs/5.2/users-guide/vcl-backends.html?highlight=health%20check#health-checks