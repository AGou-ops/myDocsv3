# nginx+tomcat+redis实现负载均衡和session共享

## 1、实验环境

| 主机     | IP地址        |
| :------- | :------------ |
| Nginx    | 192.168.6.240 |
| Tomcat-1 | 192.168.6.241 |
| Tomcat-2 | 192.168.6.242 |
| redis    | 192.168.6.244 |
| mysql    | 192.168.6.244 |

## 2、实验拓扑

![null](http://bak.agou-ops.top/uploads/wybl/images/m_f828a8195593973a1b8e5ef51fed7bf0_r.png)

在这个图中，nginx做为反向代理，实现静动分离，将客户动态请求根据权重随机分配给两台tomcat服务器，redis做为两台tomcat的共享session数据服务器，mysql做为两台tomcat的后端数据库。

## 3、nginx安装配置

使用Nginx作为Tomcat的负载平衡器，Tomcat的会话Session数据存储在Redis，能够实现零宕机的7x24效果。因为将会话存储在Redis中，因此Nginx就不必配置成stick粘贴某个Tomcat方式，这样才能真正实现后台多个Tomcat负载平衡。

部署nginx：

```shell
yum install pcre pcre-devel -y 
yum install openssl openssl-devel -y
mkdir -p /home/oldboy/tools
cd /home/oldboy/tools/
wget -q http://nginx.org/download/nginx-1.6.2.tar.gz
useradd nginx -s /sbin/nologin -M
mkdir /application/
tar xf nginx-1.6.2.tar.gz 
cd nginx-1.6.2
./configure --user=nginx --group=nginx --prefix=/application/nginx1.6.2 --with-http_stub_status_module --with-http_ssl_module --with-http_realip_module
echo $?
make && make install
echo $?
ln -s /application/nginx1.6.2/ /application/nginx
cd ../
```

配置nginx反向代理：反向代理+负载均衡+健康探测，nginx.conf文件内容：

```shell
[root@linux-node1 ~]\# cat /application/nginx/conf/nginx.conf
worker_processes  4;
events {
        worker_connections  1024;
}
    http {
        include       mime.types;
        default_type  application/octet-stream;
        sendfile        on;
        keepalive_timeout  65;
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" "$http_x_forwarded_for"';

    #blog lb by oldboy at 201303
        upstream backend_tomcat {
        #ip_hash;
        server 192.168.6.241:8080   weight=1 max_fails=2 fail_timeout=10s;
        server 192.168.6.242:8080   weight=1 max_fails=2 fail_timeout=10s;
        #server 192.168.6.243:8080   weight=1 max_fails=2 fail_timeout=10s;
        }

        server {
            listen       80;
            server_name  www.98yz.cn;
            charset utf-8;
            location / {
                root html;
                index  index.jsp index.html index.html;
                    }
            location ~* \.(jsp|do)$ {
            proxy_pass  http://backend_tomcat;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
                }
        }

    }
```

## 4、安装部署tomcat应用程序服务器

在tomcat-1和tomcat-2节点上安装JDK

在安装tomcat之前必须先安装JDK，JDK的全称是java development kit,是sun公司免费提供的java语言的软件开发工具包，其中包含java虚拟机（JVM），编写好的java源程序经过编译可形成java字节码，只要安装了JDK，就可以利用JVM解释这些字节码文件，从而保证了java的跨平台性。

安装JDK，Tomcat 程序：

```shell
[root@linux-node2 ~]\# yum install java -y
[root@linux-node2 ~]\# java -version
openjdk version "1.8.0_201"
OpenJDK Runtime Environment (build 1.8.0_201-b09)
OpenJDK 64-Bit Server VM (build 25.201-b09, mixed mode)

[root@linux-node2 ~]\# mkdir /soft/src -p
[root@linux-node2 ~]\# cd /soft/src
[root@linux-node2 ~]\# wget https://mirrors.aliyun.com/apache/tomcat/tomcat-9/v9.0.16/bin/apache-tomcat-9.0.16.tar.gz
[root@linux-node2 ~]\# tar xf apache-tomcat-9.0.16.tar.gz -C /soft
[root@linux-node2 ~]\# cd ..
[root@linux-node2 ~]\# cp -r apache-tomcat-9.0.16/ tomcat-8080
[root@linux-node2 soft]\# cd tomcat-8080/
```

按照相同方法在tomcat-2也安装

下面我们来修改配置文件

```shell
[root@linux-node2 tomcat-8080]\# vim conf/server.xml
```

设置默认虚拟主机，并增加jvmRoute

```shell
<Engine name="Catalina" defaultHost="localhost" jvmRoute="tomcat-1">
```

修改默认虚拟主机，并将网站文件路径指向/web/webapp1，在host段增加context段

```shell
<Host name="localhost"  appBase="webapps"
unpackWARs="true" autoDeploy="true">
<Context docBase="/web/webapp1" path="" reloadable="true"/>
</Host>
```

增加文档目录与测试文件

```shell
[root@linux-node2 ~]\# mkdir -p /web/webapp1
[root@linux-node2 ~]\# cd /web/webapp1
[root@linux-node2 webapp1]\# cat index.jsp 
<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
    <head>
        <title>tomcat-1</title>
    </head>
    <body>
        <h1><font color="red">Session serviced by tomcat</font></h1>
        <table aligh="center" border="1">
        <tr>
            <td>Session ID</td>
            <td><%=session.getId() %></td>
                <% session.setAttribute("abc","abc");%>
            </tr>
            <tr>
            <td>Created on</td>
            <td><%= session.getCreationTime() %></td>
            </tr>
        </table>
    tomcat-1
    </body>
<html>
```

Tomcat-2节点与tomcat-1节点配置基本类似，只是jvmRoute不同，另外为了区分由哪个节点提供访问，测试页标题也不同（生产环境两个tomcat服务器提供的网页内容是相同的）。其他的配置都相同。

用浏览器访问nginx主机，验证负载均衡

验证健康检查的方法可以关掉一台tomcat主机，用客户端浏览器测试访问。

从上面的结果能看出两次访问，nginx把访问请求分别分发给了后端的tomcat-1和tomcat-2，客户端的访问请求实现了负载均衡，但sessionid并一样。所以，到这里我们准备工作就全部完成了，下面我们来配置tomcat通过redis实现会话保持。

## 5、安装redis

```bash
sudo yum install redis-server
```

## 6、配置tomcat session redis同步

通过TomcatClusterRedisSessionManager，这种方式支持redis3.0的集群方式
下载TomcatRedisSessionManager-2.0.zip包，`https://github.com/ran-jit/tomcat-cluster-redis-session-manager`，放到$TOMCAT_HOMA/lib下，并解压

```shell
[root@linux-node2 ]\# cd /soft/tomcat-8080/lib/
[root@linux-node2 lib]\# wget https://github.com/ran-jit/tomcat-cluster-redis-session-manager/releases/download/2.0.4/tomcat-cluster-redis-session-manager.zip
[root@linux-node2 lib]\# unzip tomcat-cluster-redis-session-manager.zip 
Archive:  tomcat-cluster-redis-session-manager.zip
   creating: tomcat-cluster-redis-session-manager/conf/
  inflating: tomcat-cluster-redis-session-manager/conf/redis-data-cache.properties  
   creating: tomcat-cluster-redis-session-manager/lib/
  inflating: tomcat-cluster-redis-session-manager/lib/commons-logging-1.2.jar  
  inflating: tomcat-cluster-redis-session-manager/lib/commons-pool2-2.4.2.jar  
  inflating: tomcat-cluster-redis-session-manager/lib/jedis-2.9.0.jar  
  inflating: tomcat-cluster-redis-session-manager/lib/tomcat-cluster-redis-session-manager-2.0.4.jar  
  inflating: tomcat-cluster-redis-session-manager/readMe.txt 
[root@linux-node2 lib]\# cp tomcat-cluster-redis-session-manager/lib/* ./
[root@linux-node2 lib]\# cp tomcat-cluster-redis-session-manager/conf/redis-data-cache.properties ../conf/

[root@linux-node2 lib]\# cat ../conf/redis-data-cache.properties     
#-- Redis data-cache configuration
//远端redis数据库的地址和端口
#- redis hosts ex: 127.0.0.1:6379, 127.0.0.2:6379, 127.0.0.2:6380, ....
redis.hosts=192.168.6.244:6379
//远端redis数据库的连接密码
#- redis password (for stand-alone mode)
redis.password=pwd@123
//是否支持集群，默认的是关闭
#- set true to enable redis cluster mode
redis.cluster.enabled=false
//连接redis的那个库
#- redis database (default 0)
#redis.database=0
//连接超时时间
#- redis connection timeout (default 2000)
#redis.timeout=2000
//在这个<Context>标签里面配置
[root@linux-node4 lib]\# vim ../conf/context.xml
<Valve className="tomcat.request.session.redis.SessionHandlerValve" />
<Manager className="tomcat.request.session.redis.SessionManager" />
```

配置会话到期时间在../conf/web.xml

```shell
<session-config>
<session-timeout>60</session-timeout>
</session-config>
```

启动tomcat服务

```shell
[root@linux-node2 lib]\# ../bin/startup.sh
```

Tomcat-2节点与tomcat-1节点配置相同

测试，我们每次强刷他的sessionID都是一致的，所以我们认为他的session会话保持已经完成，你们也可以选择换个客户端的IP地址来测试

![null](http://bak.agou-ops.top/uploads/wybl/images/m_81e19fbb68eeeb62f6bc566d483ebed2_r.png)
![null](http://bak.agou-ops.top/uploads/wybl/images/m_33df9e5ad7721d74c0ffe5478e63b506_r.png)

> 转载：该文章来源于网络，仅做修改。