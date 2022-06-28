# Tomcat Basic 

## Tomcat 简介

Tomcat 服务器是一个免费的开放源代码的Web 应用服务器，属于轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP 程序的首选。

架构图：

![](https://img-blog.csdn.net/20180308114704839?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxNDIzMTY0Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "tomcat arch")

HTTP 请求过程：

![](https://img-blog.csdn.net/20180308173032224?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxNDIzMTY0Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "HTTP请求过程")

两大组件，`Connector`和`Container`：

>   一个Connecter将在某个指定的端口上侦听客户请求，接收浏览器的发过来的 tcp 连接请求，创建一个 Request 和 Response 对象分别用于和请求端交换数据，然后会产生一个线程来处理这个请求并把产生的 Request 和 Response 对象传给处理Engine(Container中的一部分)，从Engine出获得响应并返回客户。 
>Tomcat中有两个经典的Connector，一个直接侦听来自Browser的HTTP请求，另外一个来自其他的WebServer请求。HTTP/1.1 Connector在端口8080处侦听来自客户Browser的HTTP请求，AJP/1.3 Connector在端口8009处侦听其他Web Server（其他的HTTP服务器）的Servlet/JSP请求。 
>Connector 最重要的功能就是接收连接请求然后分配线程让 Container 来处理这个请求，所以这必然是多线程的，多线程的处理是 Connector 设计的核心。
>
>
>
>   Container是容器的父接口，该容器的设计用的是典型的责任链的设计模式，它由四个自容器组件构成，分别是Engine、Host、Context、Wrapper。这四个组件是负责关系，存在包含关系。通常一个Servlet class对应一个Wrapper，如果有多个Servlet定义多个Wrapper，如果有多个Wrapper就要定义一个更高的Container，如Context。 
>Context 还可以定义在父容器 Host 中，Host 不是必须的，但是要运行 war 程序，就必须要 Host，因为 war 中必有 web.xml 文件，这个文件的解析就需要 Host 了，如果要有多个 Host 就要定义一个 top 容器 Engine 了。而 Engine 没有父容器了，一个 Engine 代表一个完整的 Servlet 引擎。
>
>* Engine 容器 
>  Engine 容器比较简单，它只定义了一些基本的关联关系
>* Host 容器 
>  Host 是 Engine 的子容器，一个 Host 在 Engine 中代表一个虚拟主机，这个虚拟主机的作用就是运行多个应用，它负责安装和展开这些应用，并且标识这个应用以便能够区分它们。它的子容器通常是 Context，它除了关联子容器外，还有就是保存一个主机应该有的信息。
>* Context 容器 
>  Context 代表 Servlet 的 Context，它具备了 Servlet 运行的基本环境，理论上只要有 Context 就能运行 Servlet 了。简单的 Tomcat 可以没有 Engine 和 Host。Context 最重要的功能就是管理它里面的 Servlet 实例，Servlet 实例在 Context 中是以 Wrapper 出现的，还有一点就是 Context 如何才能找到正确的 Servlet 来执行它呢？ Tomcat5 以前是通过一个 Mapper 类来管理的，Tomcat5 以后这个功能被移到了 request 中，在前面的时序图中就可以发现获取子容器都是通过 request 来分配的。
>* Wrapper 容器 
>  Wrapper 代表一个 Servlet，它负责管理一个 Servlet，包括的 Servlet 的装载、初始化、执行以及资源回收。Wrapper 是最底层的容器，它没有子容器了，所以调用它的 addChild 将会报错。 
>  Wrapper 的实现类是 StandardWrapper，StandardWrapper 还实现了拥有一个 Servlet 初始化信息的 ServletConfig，由此看出 StandardWrapper 将直接和 Servlet 的各种信息打交道。

详细介绍参考：https://blog.csdn.net/u014231646/article/details/79482195

## Tomcat 安装与配置

#### 配置 JDK 环境

前往[ Oracle 官网]( https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)下载 Linux 版本的 RPM 包，然后开始安装：

```bash
rpm -ivh jdk-8u251-linux-x64.rpm
```

检查安装情况：

```bash
[root@stor1 ~]\# java -version
java version "1.8.0_251"
Java(TM) SE Runtime Environment (build 1.8.0_251-b08)
Java HotSpot(TM) 64-Bit Server VM (build 25.251-b08, mixed mode)
```

配置环境变量：

```bash
# 编辑配置文件 /etc/profile 或者 ~/.bashrc ~/.bash_profiles，在文件结尾添加以下内容
JAVA_HOME=/usr/java/jdk1.8.0_251-amd64
JRE_HOME=/usr/java/jdk1.8.0_251-amd64/jre
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
export JAVA_HOME JRE_HOME PATH CLASSPATH
```

修改完保存退出，然后使其生效：

```bash
source /etc/profile
# 检查环境变量
[root@stor1 ~]\# echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin:/usr/java/jdk1.8.0_251-amd64/bin:/usr/java/jdk1.8.0_251-amd64/jre/bin
```

或者直接从仓库安装较老的版本(7.0.76)，只需一条命令即可：

```bash
yum install tomcat -y
```

### 安装 Tomcat

从 https://tomcat.apache.org/download-90.cgi 获取程序包：

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-9/v9.0.34/bin/apache-tomcat-9.0.34.tar.gz
```

创建 Tomcat 程序目录，并将压缩包解压于此：

```bash
mkdir /usr/tomcat
tar xf apache-tomcat-9.0.34.tar.gz -C /usr/tomcat
# 将文件夹重命名为 tomcat9 方便多版本tomcat管理
mv /usr/tomcat/apache-tomcat-9.0.34/ /usr/tomcat/tomcat9
```

将 Tomcat 注册为系统服务方便管理：

```bash
# 创建 Tomcat9 服务文件
vim /usr/lib/systemd/system/tomcat9.service
# --------- 添加以下内容 ---------
[Unit]
Description=Tomcat9
After=network.target

[Service]
Type=forking

Environment="JAVA_HOME=/usr/java/jdk1.8.0_251-amd64"

ExecStart=/usr/tomcat/tomcat9/bin/startup.sh
ExecStop=/usr/tomcat/tomcat9/bin/shutdown.sh
ExecReload=/bin/kill -s HUP $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

启动 Tomcat ：

```bash
# 首次添加成服务之后要重载
systemctl daemon-reload
# 启动 tomcat
systemctl start tomcat9
```

最后打开浏览器输入：http://172.16.1.128:8080/ 即可。

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/tomcat/tomcat-1.png)

### 开启 `server status`，`Manager App`和`Host Manager`

编辑`conf/tomcat-users.xml`文件，添加管理用户：

```xml
<tomcat-users>
    ...
<role rolename="manager-gui"/>
<user username="tomcat" password="tomcat" roles="manager-gui"/>
<role rolename="admin-gui"/>
<user username="tomcat" password="tomcat" roles="admin-gui"/>
	...
</tomcat-users>
```

修改`webapps/manager/META-INF/context.xml`和`webapps/host-manager/META-INF/context.xml `的`allow`段内容，允许特定网段访问：

```xml
<Context antiResourceLocking="false" privileged="true" >
  <Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1|172\.\d+.\d+\.\d+" />
  <Manager sessionAttributeValueClassNameFilter="java\.lang\.(?:Boolean|Integer|Long|Number|String)|org\.apache\.catalina\.filters\.CsrfPreventionFilter\$LruCache(?:\$1)?|java\.util\.(?:Linked)?HashMap"/>
</Context>
```

最后重启 tomcat 即可。

## Tomcat 目录结构

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/tomcat/tomcat-2.png)

* `bin`：该目录下存放的是二进制可执行文件，例如启动和关闭 tomcat 的脚本文件`startup.sh`和`shutdown.sh`，修改`catalina`可以设置tomcat的内存

* `conf`：主要是用来存放tomcat的一些配置文件
  
  `server.xml ` 可以设置端口号、设置域名或IP、默认加载的项目、请求编码

  `web.xml`  可以设置tomcat支持的文件类型

  `context.xml`  可以用来配置数据源之类的

  `tomcat-users.xml `  用来配置管理tomcat的用户与权限

  `Catalina目录 `  下可以设置默认加载的项目

* `lib`：主要用来存放tomcat运行需要加载的jar包

* `log`：用来存放tomcat在运行过程中产生的日志文件，非常重要的是在控制台输出的日志

* `temp`：用户存放tomcat在运行过程中产生的临时文件

* `webapps`：用来存放应用程序，当tomcat启动时会去加载webapps目录下的应用程序

* `work`：用来存放tomcat在运行时的编译后文件，例如JSP编译后的文件

## Tomcat 配置文件详解

参考：https://www.cnblogs.com/sunshine-1/p/8990044.html

## 参考链接

* Tomcat : http://tomcat.apache.org/
* Tomcat9 setup: https://tomcat.apache.org/tomcat-9.0-doc/setup.html
* 配置文件详解: https://www.cnblogs.com/sunshine-1/p/8990044.html

