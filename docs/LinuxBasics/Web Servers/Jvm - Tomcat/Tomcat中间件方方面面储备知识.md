# Tomcat中间件方方面面储备知识

> 该文章来源：
>
> 仅做个人备份学习使用。

# LNMT

## 1.JAVA简介

常见的大型平台有LNMP、LNMP、LNMT

JAVA：LNMT（T表示Tomcat容器，放java代码的）

 Tomcat

 resin

 [weblogic](https://so.csdn.net/so/search?q=weblogic&spm=1001.2101.3001.7020)（配合oracle数据库进行使用）

| 环境 | 处理模型                       | 处理用户请求区别                |
| ---- | ------------------------------ | ------------------------------- |
| lnmp | epoll（异步）缓存              | 通过fastcgi交给php-fpm进行处理  |
| lamp | select（同步）遇到一个处理一个 | lamp通过Apache模块与php进行沟通 |
|      |                                |                                 |

异步类似于有一张表，根据对应的信息找对应的页面

同步类似于在一个目录中，在每一个文件中找想要的信息
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502220826692.png)

## 2.Tomcat必备知识

-  tomcat部署
-  目录结构
-  配置tomcat管理功能
-  部署jpress
-  tomcat多实例
-  tomcat监控
-  tomcat安全优化
- Tomcat：apache-tomcat
- 与Tomcat有关的
- jvm：java virtual machine java虚拟机
    - 解决了代码的可移植性，1份代码处处使用
    - 占用内存
-  jdk java development kit java开发环境
    - java命令
    - jvm环境
- jdk版本
    - oracle jdk 官网下载
    - openjdk Linux自带，开源

## 3.Tomcat环境搭建

服务器 192.168.81.210 ens33

### 3.1.jdk

```sh
#这里的eof使用单引号引起来是为了让特殊符号也写入文件
#PATH 存放命令的路径，如果不小心改错了/etc/profile文件那么命令就不能使用了，可以使用命令的绝对路径来修改/bin/vim /etc/profile改完后exit重新连一下就行
#安装jdk之前先把之前rpm装的删掉

cat >>/etc/profile <<'EOF'
export JAVA_HOME=/application/jdk
export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib:$JAVA_HOME/jre/lib:$JAVA_HOME/lib/tools.jar
EOF

[root@localhost ~]\# mkdir /application
[root@localhost application]\# rz -E
rz waiting to receive.
[root@localhost application]\# ln -s jdk1.8.0_60/ jdk
```

### 3.2.Tomcat

```sh
[root@localhost application]\# tar xf apache-tomcat-8.5.53.tar.gz
[root@localhost application]\# ln -s apache-tomcat-8.5.53 tomcat
[root@localhost application]\# mkdir soft
[root@localhost application]\# mv *.gz soft/
[root@localhost application]\# /application/tomcat/bin/version.sh 
Using CATALINA_BASE:   /application/tomcat
Using CATALINA_HOME:   /application/tomcat
Using CATALINA_TMPDIR: /application/tomcat/temp
Using JRE_HOME:        /application/jdk
Using CLASSPATH:       /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar
Server version: Apache Tomcat/8.5.53
Server built:   Mar 11 2020 10:01:39 UTC
Server number:  8.5.53.0
OS Name:        Linux
OS Version:     3.10.0-957.el7.x86_64
Architecture:   amd64
JVM Version:    1.8.0_60-b27
JVM Vendor:     Oracle Corporation

#到此为止Tomcat部署完成
```

### 3.3.启动与管理

- startup.sh 启动
- shutdown.sh 关闭
- catalina.sh 核心脚本

```sh
#startup.sh最主要的部分
PRG="$0"    #脚本名：/application/bin/startup.sh
PRGDIR=`dirname "$PRG"`   #dirname用于取出文件所在的路径，basename用于取出文件名
EXECUTABLE=catalina.sh
exec "$PRGDIR"/"$EXECUTABLE" start "$@"
#相当于 exec /application/tomcat/bin/catalina.sh start   exec可以省略

```

启动分析

```sh
[root@localhost tomcat]\# ./bin/startup.sh 
Using CATALINA_BASE:   /application/tomcat
Using CATALINA_HOME:   /application/tomcat
Using CATALINA_TMPDIR: /application/tomcat/temp
Using JRE_HOME:        /application/jdk
Using CLASSPATH:       /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar
Tomcat started.

[root@localhost tomcat]\# ss -lnptu | grep java
tcp    LISTEN     0      100      :::8080                 :::*                   users:(("java",pid=67926,fd=52))
tcp    LISTEN     0      1      ::ffff:127.0.0.1:8005                 :::*                   users:(("java",pid=67926,fd=64))

[root@localhost tomcat]\# ps -ef | grep java
root      67926      1 21 14:31 pts/0    00:00:04 /application/jdk/bin/java -Djava.util.logging.config.file=/application/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dorg.apache.catalina.security.SecurityListener.UMASK=0027 -Dignore.endorsed.dirs= -classpath /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar -Dcatalina.base=/application/tomcat -Dcatalina.home=/application/tomcat -Djava.io.tmpdir=/application/tomcat/temp org.apache.catalina.startup.Bootstrap start


/application/jdk/bin/java   #java启动程序的目录
#日志的配置文件
-Djava.util.logging.config.file=/application/tomcat/conf/logging.properties 
-Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager 
-Djdk.tls.ephemeralDHKeySize=2048
-Djava.protocol.handler.pkgs=org.apache.catalina.webresources
-Dorg.apache.catalina.security.SecurityListener.UMASK=0027 
-Dignore.endorsed.dirs= 
-classpath /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar 
#Tomcat的部署目录，多实例在区分时主要看这里
-Dcatalina.base=/application/tomcat 
-Dcatalina.home=/application/tomcat 
-Djava.io.tmpdir=/application/tomcat/temp org.apache.catalina.startup.Bootstrap
start

```

## 4.Tomcat目录结构

```sh
[root@localhost tomcat]\# ll
总用量 124
drwxr-x---. 2 root root  4096 3月  31 14:30 bin
-rw-r-----. 1 root root 19318 3月  11 18:06 BUILDING.txt
drwx------. 3 root root   254 3月  31 14:31 conf
-rw-r-----. 1 root root  5408 3月  11 18:06 CONTRIBUTING.md
drwxr-x---. 2 root root  4096 3月  31 14:05 lib
-rw-r-----. 1 root root 57011 3月  11 18:06 LICENSE
drwxr-x---. 2 root root   197 3月  31 14:31 logs
-rw-r-----. 1 root root  1726 3月  11 18:06 NOTICE
-rw-r-----. 1 root root  3255 3月  11 18:06 README.md
-rw-r-----. 1 root root  7136 3月  11 18:06 RELEASE-NOTES
-rw-r-----. 1 root root 16262 3月  11 18:06 RUNNING.txt
drwxr-x---. 2 root root    30 3月  31 14:05 temp
drwxr-x---. 7 root root    81 3月  11 18:04 webapps
drwxr-x---. 3 root root    22 3月  31 14:31 work

```

- bin tomcat管理命令 startup.sh shutdown.sh catalina.sh

    - catalina.sh是startup.sh和shutdown.sh都会调用的
    - 以后对于Tomcat优化（jvm优化 设置最大内存 最小内存）和配置监控功能

- conf 配置文件存放目录

    - server.xml（相当于nginx.conf）都是主配置文件
    - web.xm 如果要增加插架或者优化都需要修改此文件
    - tomcat-users.xml tomcat管理端配置文件

- webapps tomcat的站点目录类似于nginx的html

- log 日志文件存放目录

    - catalina.out tomcat的核心日志文件，存放着从启动到关闭做的所有操作，这个文件会持续变大持续增加，即使做了日志切割这个文件也不会缩小

    - catalina.2019-09-20.log catalina.out切割出来的日志，Linux系统有一个切割工具logrotate，yum装的程序默认会采用这个进行切割

    - localhost.2020-03-31.log tomcat的访问日志和nginx的access.log基本一致

        ```sh
        [root@localhost tomcat]\# cat /etc/log
        login.defs      logrotate.conf  logrotate.d/    
        [root@localhost tomcat]\# cat /etc/logrotate.d/
        bootlog         cups            httpd           libvirtd        libvirtd.qemu   numad           psacct          sssd            wpa_supplicant  
        chrony          glusterfs       iscsiuiolog     libvirtd.lxc    mariadb         ppp             samba           syslog          yum             
        [root@localhost tomcat]\# cat /etc/logrotate.d/syslog 
        /var/log/cron
        /var/log/maillog
        /var/log/messages
        /var/log/secure
        /var/log/spooler
        {
            missingok
            sharedscripts
            postrotate
          /bin/kill -HUP `cat /var/run/syslogd.pid 2> /dev/null` 2> /dev/null || true
            endscript
        }
        [root@localhost tomcat]\# 
        
        1234567891011121314151617181920
        ```

## 5.配置Tomcat管理功能

启动完tomcat点下图框中默认会报错，因为没有账号密码，尝试多次后会报401
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502220909683.png)

我们需要修改conf/tomcat-users.xml文件即可，下载在登录时输入username当时配置的即可正常登录

```sh
[root@localhost tomcat]\# cat conf/tomcat-users.xml
<?xml version="1.0" encoding="UTF-8"?>
<tomcat-users xmlns="http://tomcat.apache.org/xml"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
              version="1.0">
  <role rolename="admin-gui"/>
  <role rolename="host-gui"/>
  <role rolename="manager-gui"/>
  <user username="admin" password="admin" roles="admin-gui,host-gui,manager-gui"/>
</tomcat-users>

#配置完成后需要重启
在执行./shutdown后一定要查看进程和端口在不在

```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502220946745.png)

tomcat8.5以后的版本默认只允许机访问，换需要修改webapps/manager/META-INF/context.xml

```sh
#将value class的行注释掉即可
[root@localhost tomcat]\# cat webapps/manager/META-INF/context.xml
<?xml version="1.0" encoding="UTF-8"?>
<Context antiResourceLocking="false" privileged="true" >
  <!--<Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
-->
  <Manager sessionAttributeValueClassNameFilter="java\.lang\.(?:Boolean|Integer|Long|Number|String)|org\.apache\.catalina\.filters\.CsrfPreventionFilter\$LruCache(?:\$1)?|java\.util\.(?:Linked)?HashMap"/>
</Context>

```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/2020050222102775.png)

## 6.部署jpress

### 6.1.数据库准备

```sh
MariaDB [(none)]> create database jpress charset utf8mb4;
Query OK, 1 row affected (0.02 sec)

MariaDB [(none)]> show create database jpress;
+----------+--------------------------------------------------------------------+
| Database | Create Database                                                    |
+----------+--------------------------------------------------------------------+
| jpress   | CREATE DATABASE `jpress` /*!40100 DEFAULT CHARACTER SET utf8mb4 */ |
+----------+--------------------------------------------------------------------+
1 row in set (0.00 sec)

MariaDB [(none)]> grant all on jpress.* to 'jpress'@'localhost' identified by '123456';
Query OK, 0 rows affected (0.00 sec)

MariaDB [(none)]> 
MariaDB [(none)]> select user,host from mysql.user;
+--------+-----------------------+
| user   | host                  |
+--------+-----------------------+
| root   | 127.0.0.1             |
| root   | ::1                   |
|        | localhost             |
| jpress | localhost             |
| root   | localhost             |
|        | localhost.localdomain |
| root   | localhost.localdomain |
+--------+-----------------------+
7 rows in set (0.00 sec)

MariaDB [(none)]> grant all on jpress.* to 'jpress'@'192.168.81.%' identified by '123456';
Query OK, 0 rows affected (0.00 sec)

MariaDB [(none)]> drop user ''@'localhost';
Query OK, 0 rows affected (0.00 sec)

MariaDB [(none)]> 
MariaDB [(none)]> select user,host from mysql.user;
+--------+-----------------------+
| user   | host                  |
+--------+-----------------------+
| root   | 127.0.0.1             |
| jpress | 192.168.81.%          |
| root   | ::1                   |
| jpress | localhost             |
| root   | localhost             |
|        | localhost.localdomain |
| root   | localhost.localdomain |
+--------+-----------------------+
7 rows in set (0.00 sec)

MariaDB [(none)]> flush privileges;
Query OK, 0 rows affected (0.00 sec)

```

### 6.2.获取jpress代码

- https://gitee.com/GalaIO/jpress/blob/master/wars/jpress-web-newest.war

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221054840.png)

```sh
[root@localhost webapps]\# cp jpress/jpress/wars/jpress-web-newest.war  .
[root@localhost webapps]\# rm -rf jpress
[root@localhost webapps]\# rm -rf jpress.war 
[root@localhost webapps]\# mv jpress-web-newest jpress
[root@localhost webapps]\# mv jpress-web-newest.war jpress.war
[root@localhost webapps]\# ls
docs  examples  host-manager  jpress  jpress.war  jpress-web-newest  manager  ROOT

```

- 下面访问http://192.168.81.210:8080/jpress

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221126344.png)

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221151818.png)

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221209322.png)

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221247953.png)

- 我们去重启一下tomcat
- jpress的配置文件位于webapps/jpress/WEB-INF/classes， db.properties
- 安装完成默认是进入整体的首页，我们可以使用单独账号进行登录
- 然后去访问http://192.168.81.210:8080/jpress/admin

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221414412.png)

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221516725.png)

- 可以写一篇文章并上传图片

    ![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221538238.png)

- 在jpress/attachment/20200331/目录可以看到用户上传的附件

- 可以看到jpress中的表

    ```sh
    MariaDB [(none)]> show tables from jpress;
    +-------------------+
    | Tables_in_jpress  |
    +-------------------+
    | jpress_attachment |
    | jpress_comment    |
    | jpress_content    |
    | jpress_mapping    |
    | jpress_metadata   |
    | jpress_option     |
    | jpress_taxonomy   |
    | jpress_user       |
    +-------------------+
    8 rows in set (0.01 sec)
    
    文章内容应该是在content表中
    MariaDB [(none)]> select * from jpress.jpress_content \G;
    *************************** 1. row ***************************
                  id: 1
               title: 第一篇测试文档
                text: <p>江晓龙很牛！！！！<img src="/jpress/attachment/20200331/da5a9dd62da44c3fb1cab6fe9f7b293d.jpg" alt="啊啊啊" width="554" height="221"></p>
           thumbnail: NULL
              module: article
               style: NULL
             user_id: 1
           parent_id: NULL
           object_id: NULL
        order_number: 0
              status: normal
             vote_up: 0
           vote_down: 0
               price: 0.00
      comment_status: NULL
       comment_count: 0
          view_count: 0
             created: 2020-03-31 18:16:56
            modified: 2020-03-31 18:16:56
                slug: 第一篇测试文档
                flag: NULL
                 lng: NULL
                 lat: NULL
       meta_keywords: NULL
    meta_description: NULL
             remarks: NULL
    1234567891011121314151617181920212223242526272829303132333435363738394041424344
    ```

- 删除这条记录，页面的文章跟着消失

- 在插回去，内容还会存在

## 7.显示jvm内存信息

```sh
#需要在webapps/ROOT目录下写一个mem.jsp的文件
[root@localhost tomcat]\# cat webapps/ROOT/mem.jsp 
<%
Runtime rtm = Runtime.getRuntime();
long mm = rtm.maxMemory()/1024/1024;
long tm = rtm.totalMemory()/1024/1024;
long fm = rtm.freeMemory()/1024/1024;

out.println("JVM memory detail info :<br>");
out.println("Max memory:"+mm+"MB"+"<br>");
out.println("Total memory:"+tm+"MB"+"<br>");
out.println("Free memory:"+fm+"MB"+"<br>");
out.println("Available memory can be used is :"+(mm+fm-tm)+"MB"+"<br>");
%>
```

- 访问http://192.168.81.210:8080/mem.jsp
    ![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/202005022216493.png)

## 8.Tomcat主配置文件

```sh
#shutdown端口  连接到这个端口并输入后面的暗号 SHUTDOWN 把tomcat关闭，需要把暗号给改掉
<Server port="8005" shutdown="SHUTDOWN">

[root@localhost tomcat]\# ss -lnptu | grep java
tcp    LISTEN     0      100      :::8080                 :::*                   users:(("java",pid=77014,fd=52))
tcp    LISTEN     0      1      ::ffff:127.0.0.1:8005                 :::*                   users:(("java",pid=77014,fd=62))
[root@localhost tomcat]\# telnet 127.0.0.1 8005
Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is '^]'.
SHUTDOWN
Connection closed by foreign host.
[root@localhost tomcat]\# ss -lnptu | grep java


#tomcat管理端，一般不开放，以免用户看到配置
<GlobalNamingResources>
    <!-- Editable user database that can also be used by
         UserDatabaseRealm to authenticate users
    -->
    <Resource name="UserDatabase" auth="Container"
              type="org.apache.catalina.UserDatabase"
              description="User database that can be updated and saved"
              factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
              pathname="conf/tomcat-users.xml" />
</GlobalNamingResources>

#设置tomcat的端口，web功能，redirectPort是表示启用了https后的端口也就是443
<Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />


#tomcat线程数，maxThreads表示在tomcat忙的时候最多处理多少个线程，minSpareThreads表示正常情况下tomcat处理线程的数量
     <Executor name="tomcatThreadPool" namePrefix="catalina-exec-"
        maxThreads="150" minSpareThreads="4"/>


#8009 ajp 工作方式：与Apache配合
<Connector protocol="AJP/1.3"
               address="::1"
               port="8009"
               redirectPort="8443" />
               

#host  虚拟主机部分
#host name：配置域名
#appBase：站点目录
#uppackWARS：是否自动解压war包，true就是解压，false就是不解压
#autoDeploy：是否自动部署把磁盘中的扔到jvm中
 <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
        <!--<Context docBase="/application/tomcat/webapps/" path="" reloadable="false">
        </Context>-->

        <!-- SingleSignOn valve, share authentication between web applications
             Documentation at: /docs/config/valve.html -->
        <!--
        <Valve className="org.apache.catalina.authenticator.SingleSignOn" />
        -->

        <!-- Access log processes all example.
             Documentation at: /docs/config/valve.html
             Note: The pattern used is equivalent to using pattern="common" -->
        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log" suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />

      </Host>
      
      
#tomcat访问日志的格式
 <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log" suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />

```

## 9.Tomcat多实例配置

一台主机可能会跑多个tomcat

```sh
[root@localhost soft]\# tar -xf apache-tomcat-8.5.53.tar.gz 
[root@localhost soft]\# ls
apache-tomcat-8.5.53  apache-tomcat-8.5.53.tar.gz  jdk-8u60-linux-x64.tar.gz
[root@localhost soft]\# mv apache-tomcat-8.5.53 ../tomcat_8081
[root@localhost soft]\# tar -xf apache-tomcat-8.5.53.tar.gz 
[root@localhost soft]\# mv apache-tomcat-8.5.53 ../tomcat_8082

[root@localhost application]\# sed -ri 's/8080/8081/g' tomcat_8081/conf/server.xml 
[root@localhost application]\# sed -ri 's/8005/8006/g' tomcat_8081/conf/server.xml 
[root@localhost application]\# sed -ri 's/8009/8010/g' tomcat_8081/conf/server.xml
[root@localhost application]\# sed -ri 's/8080/8082/g' tomcat_8082/conf/server.xml 
[root@localhost application]\# sed -ri 's/8005/8007/g' tomcat_8082/conf/server.xml 
[root@localhost application]\# sed -ri 's/8009/8011/g' tomcat_8082/conf/server.xml

[root@localhost application]\# tomcat_8081/bin/startup.sh 
[root@localhost application]\# tomcat_8082/bin/startup.sh 

```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200502221730623.png)

```sh
#书写tomcat相关脚本时（启动 重启 监控）都有精确过滤
ps aux | grep java | grep tomcat_8081
```

## 10.Tomcat监控

监控方式

- 简单命令
- 现成脚本
- 通过zabbix自定义监控
    - 自定义监控 只要是用命令能得到的东西都能去监控
    - 通过jmx 对java进行监控
- 其他监控
    - 通过ipmi 监控硬件的
    - 通过snmp 监控网络设备的，只要支持snmp都能监控

java自带的监控命令

- jps 导出java相关的进程

- 格式：jps -lvm

- 参数选项：-lvm最详细

    ```sh
    [root@localhost ~]\# jps -lvm
    7457 org.apache.catalina.startup.Bootstrap start start -Djava.util.logging.config.file=/application/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dorg.apache.catalina.security.SecurityListener.UMASK=0027 -Dignore.endorsed.dirs= -Dcatalina.base=/application/tomcat -Dcatalina.home=/application/tomcat -Djava.io.tmpdir=/application/tomcat/temp
    7525 org.apache.catalina.startup.Bootstrap start start -Djava.util.logging.config.file=/application/tomcat_8082/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dorg.apache.catalina.security.SecurityListener.UMASK=0027 -Dignore.endorsed.dirs= -Dcatalina.base=/application/tomcat_8082 -Dcatalina.home=/application/tomcat_8082 -Djava.io.tmpdir=/application/tomcat_8082/temp
    9144 sun.tools.jps.Jps -lvm -Denv.class.path=.:/application/jdk/lib:/application/jdk/jre/lib:/application/jdk/lib/tools.jar -Dapplication.home=/application/jdk1.8.0_60 -Xms8m
    7482 org.apache.catalina.startup.Bootstrap start start -Djava.util.logging.config.file=/application/tomcat_8081/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dorg.apache.catalina.security.SecurityListener.UMASK=0027 -Dignore.endorsed.dirs= -Dcatalina.base=/application/tomcat_8081 -Dcatalina.home=/application/tomcat_8081 -Djava.io.tmpdir=/application/tomcat_8081/temp
    
    123456
    ```

- jmap 导出jvm信息，常用于自定义监控

- 格式：jmap pid

- 参数：-heap

    ```sh
    [root@localhost ~]\# jmap -heap 7457
    Attaching to process ID 7457, please wait...
    Debugger attached successfully.
    Server compiler detected.
    JVM version is 25.60-b23
    
    using thread-local object allocation.
    Mark Sweep Compact GC
    
    Heap Configuration:
       MinHeapFreeRatio         = 40
       MaxHeapFreeRatio         = 70
       MaxHeapSize              = 255852544 (244.0MB)
       NewSize                  = 5570560 (5.3125MB)
       MaxNewSize               = 85262336 (81.3125MB)
       OldSize                  = 11206656 (10.6875MB)
       NewRatio                 = 2
       SurvivorRatio            = 8
       MetaspaceSize            = 21807104 (20.796875MB)
       CompressedClassSpaceSize = 1073741824 (1024.0MB)
       MaxMetaspaceSize         = 17592186044415 MB
       G1HeapRegionSize         = 0 (0.0MB)
    
    Heap Usage:     #监控的话关注这一列
    New Generation (Eden + 1 Survivor Space):
       capacity = 12779520 (12.1875MB)
       used     = 11689352 (11.147834777832031MB)
       free     = 1090168 (1.0396652221679688MB)
       91.46941356169872% used
    Eden Space:       #监控的话关注这一列
       capacity = 11403264 (10.875MB)
       used     = 11059616 (10.547271728515625MB)
       free     = 343648 (0.327728271484375MB)
       96.98640669899426% used
    From Space:         #监控的话关注这一列
       capacity = 1376256 (1.3125MB)
       used     = 629736 (0.6005630493164062MB)
       free     = 746520 (0.7119369506835938MB)
       45.75718470982143% used
    To Space:       #监控的话关注这一列
       capacity = 1376256 (1.3125MB)
       used     = 0 (0.0MB)
       free     = 1376256 (1.3125MB)
       0.0% used
    tenured generation:       #监控的话关注这一列
       capacity = 28164096 (26.859375MB)
       used     = 18313224 (17.46485137939453MB)
       free     = 9850872 (9.394523620605469MB)
       65.02329774760035% used
    
    21146 interned Strings occupying 1882520 bytes.
    
    12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152
    ```

- jstatck 导出java的进程信息，常用于java程序故障，需要导出线程信息与开发一起研究

- 格式：jstack -l pid

    ```sh
    [root@localhost ~]\#  jstack -l 7457
    1
    ```

- tomcat故障案例：系统负载高，tomcat占用CPU较高

    - 1.jps/top/htop精确确定哪个java进程导致
    - 2.jstack导出java线程
    - 3.catalina.out日志分析
    - 4.jmap导出jvm信息，可以通过mat工具进行分析

- tomcat监控

- 自定义监控：直接在tomcat服务器上写好脚本，在zabbix配置文件写好就行

- 首先需要在zabiix服务端安装zabbix-java-gateway然后在tomcat服务器开启监控功能

- tomcat开启jmx监控功能

    ```sh
    #修改bin/catalina.sh
    [root@localhost tomcat]\# vim bin/catalina.sh
    #注意不能分行写会报错找不到命令，要写在一行上
    CATALINA_OPTS="$CATALINA_OPTS"
    -Dcom.sun.management.jmxremote
    -Dcom.sun.management.jmxremote.port=12345
    -Dcom.sun.management.jmxremote.authenticate=false
    -Dcom.sun.management.jxmremote.ssl=false
    -Djava.rmi.server.hostname="192.168.81.210"
    #正确写法
    CATALINA_OPTS="$CATALINA_OPTS -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=12345 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jxmremote.ssl=false -Djava.rmi.server.hostname=192.168.81.210"
    
    
    #说明
    CATALINA_OPTS="$CATALINA_OPTS"    #修改tomcat启动参数
    -Dcom.sun.management.jmxremote    #开启tomcat远程管理功能
    -Dcom.sun.management.jmxremote.port=12345 #远程管理功能，除了12345端口，还会生成2个随机端口，我们可以开放所有端口
    Dcom.sun.management.jmxremote.authenticat=false     #是否在监控时需要认证
    -Dcom.sun.management.jmxremote.ssl=false  #是否开启ssl连接
    -Djava.rmi.server.hostname="192.168.81.210"   #设置tomcat所在服务器的ip
    
    配置完成后重启tomcat即可
    使用ps命令可以看到输出的信息多了我们写入的几行
    [root@localhost tomcat]\# ps aux | grep java
    root      17786  5.7 10.6 2306592 105860 pts/1  Sl   15:52   0:08 /application/jdk/bin/java
    -Djava.util.logging.config.file=/application/tomcat/conf/logging.properties 
    -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager 
    -Djdk.tls.ephemeralDHKeySize=2048 
    -Djava.protocol.handler.pkgs=org.apache.catalina.webresources
    -Dorg.apache.catalina.security.SecurityListener.UMASK=0027
    -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=12345
    -Dcom.sun.management.jmxremote.authenticate=false 
    -Dcom.sun.management.jxmremote.ssl=false 
    -Djava.rmi.server.hostname=192.168.81.210 
    -Dignore.endorsed.dirs= 
    -classpath /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar 
    -Dcatalina.base=/application/tomcat 
    -Dcatalina.home=/application/tomcat 
    -Djava.io.tmpdir=/application/tomcat/temp org.apache.catalina.startup.Bootstrap start
    
    使用ss/netstat 命令可以看到多出啦的三个端口
    [root@localhost tomcat]\# ss -lnptu | grep java
    tcp    LISTEN     0      100      :::8080                 :::*                   users:(("java",pid=17786,fd=56))
    #我们制定的
    tcp    LISTEN     0      50       :::12345                :::*                   users:(("java",pid=17786,fd=22))
    #随机的1
    tcp    LISTEN     0      50       :::46272                :::*                   users:(("java",pid=17786,fd=21))
    #随机的2
    tcp    LISTEN     0      50       :::46081                :::*                   users:(("java",pid=17786,fd=24))
    tcp    LISTEN     0      1      ::ffff:127.0.0.1:8005                 :::*                   users:(("java",pid=17786,fd=65))
    
    
    12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152
    ```

- 可以使用jsconsole进行测试

## 11.Tomcat安全优化

tomcat安全管理规范

- 修改8005端口的暗号
- 修改8009端口
- 禁用管理端
- 降权启动，tomcat一般以普通用户进行管理
- 关闭文件列表功能
- 版本信息隐藏，tomcat报错后会有版本提示，定义一个error-code
- server header重写，修改http响应头中的服务端名称
- 设置访问限制
- 脚本权限设置
- 日志设置

## 12.Tomcat总结

- tomcat故障案例
- tomcat安全优化
- tomcat目录 配置
- 多实例
- 监控