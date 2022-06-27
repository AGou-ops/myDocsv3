# Tomcat 调优 

## 从内存、并发、缓存三个方面

**1.Tomcat内存优化**
Tomcat内存优化主要是对 tomcat 启动参数优化，我们可以在 tomcat 的启动脚本 catalina.sh 中设置 java_OPTS 参数。

JAVA_OPTS参数说明

> -server 启用jdk 的 server 版；
> -Xms java虚拟机初始化时的最小内存；
> -Xmx java虚拟机可使用的最大内存；
> -XX: PermSize 内存永久保留区域
> -XX:MaxPermSize 内存最大永久保留区域

服务器参数配置
现公司服务器内存一般都可以加到最大2G ，所以可以采取以下配置：

```shell
JAVA_OPTS=’-Xms1024m -Xmx2048m -XX: PermSize=256M -XX:MaxNewSize=256m -XX:MaxPermSize=256m’
```

配置完成后可重启Tomcat ，通过以下命令进行查看配置是否生效：
首先查看Tomcat 进程号：

```shell
sudo lsof -i:9027
```

我们可以看到Tomcat 进程号是 12222 。
查看是否配置生效：

```shell
sudo jmap – heap 12222
```

我们可以看到MaxHeapSize 等参数已经生效。

**2.Tomcat并发优化**
　　1.Tomcat连接相关参数
　　在Tomcat 配置文件 server.xml 中的

```shell
<Connector port="9027"
　　protocol="HTTP/1.1"
　　maxHttpHeaderSize="8192"
　　minProcessors="100"
　　maxProcessors="1000"
　　acceptCount="1000"
　　redirectPort="8443"
　　disableUploadTimeout="true"/>
```

　　2.调整连接器connector的并发处理能力

```shell
　　1>参数说明
　　maxThreads 客户请求最大线程数 
　　minSpareThreads Tomcat初始化时创建的 socket 线程数 
　　maxSpareThreads Tomcat连接器的最大空闲 socket 线程数 
　　enableLookups 若设为true, 则支持域名解析，可把 ip 地址解析为主机名 
　　redirectPort 在需要基于安全通道的场合，把客户请求转发到基于SSL 的 redirectPort 端口 
　　acceptAccount 监听端口队列最大数，满了之后客户请求会被拒绝（不能小于maxSpareThreads ） 
　　connectionTimeout 连接超时 
　　minProcessors 服务器创建时的最小处理线程数 
　　maxProcessors 服务器同时最大处理线程数 
　　URIEncoding URL统一编码
　　
  2>Tomcat中的配置示例
　　<Connector port="9027"
　　protocol="HTTP/1.1"
　　maxHttpHeaderSize="8192"
　　maxThreads="1000"
　　minSpareThreads="100"
　　maxSpareThreads="1000"
　　minProcessors="100"
　　maxProcessors="1000"
　　enableLookups="false"
　　URIEncoding="utf-8"
　　acceptCount="1000"
　　redirectPort="8443"
　　disableUploadTimeout="true"/>
```

**3.Tomcat缓存优化**

```shell
　　1>参数说明
　　c ompression 打开压缩功能 
　　compressionMinSize 启用压缩的输出内容大小，这里面默认为2KB 
　　compressableMimeType 压缩类型 
　　connectionTimeout 定义建立客户连接超时的时间. 如果为 -1, 表示不限制建立客户连接的时间

   2>Tomcat中的配置示例
　　<Connector port="9027"
　　protocol="HTTP/1.1"
　　maxHttpHeaderSize="8192"
　　maxThreads="1000"
　　minSpareThreads="100"
　　maxSpareThreads="1000"
　　minProcessors="100"
　　maxProcessors="1000"
　　enableLookups="false"
　　compression="on"
　　compressionMinSize="2048"
　　compressableMimeType="text/html,text/xml,text/javascript,text/css,text/plain"
　　connectionTimeout="20000"
　　URIEncoding="utf-8"
　　acceptCount="1000"
　　redirectPort="8443"
　　disableUploadTimeout="true"/>
```

**4.参考配置**

```shell
1>旧有的配置
参考网络对服务器做过如下配置，拿出来分享下：
　　<Connector port="9027"
　　protocol="HTTP/1.1"
　　maxHttpHeaderSize="8192"
　　maxThreads="1000"
　　minSpareThreads="25"
　　maxSpareThreads="75"
　　enableLookups="false"
　　compression="on"
　　compressionMinSize="2048"
　　compressableMimeType="text/html,text/xml,text/javascript,text/css,text/plain"
　　connectionTimeout="20000"
　　URIEncoding="utf-8"
　　acceptCount="200"
　　redirectPort="8443"
　　disableUploadTimeout="true" />
  后来发现在访问量达到3 百万多的时候出现性能瓶颈。 
  2>更改后的配置
　　<Connector port="9027"
　　protocol="HTTP/1.1"
　　maxHttpHeaderSize="8192"
　　maxThreads="1000"
　　minSpareThreads="100"
　　maxSpareThreads="1000"
　　minProcessors="100"
　　maxProcessors="1000"
　　enableLookups="false"
　　compression="on"
　　compressionMinSize="2048"
　　compressableMimeType="text/html,text/xml,text/javascript,text/css,text/plain"
　　connectionTimeout="20000"
　　URIEncoding="utf-8"
　　acceptCount="1000"
　　redirectPort="8443"
　　disableUploadTimeout="true"/>
```

## 屏蔽dns查询enableLookups=”false”

```shell
<Connector  port="8081" protocol="HTTP/1.1"
               connectionTimeout="6000" enableLookups="false" acceptCount="800"
               redirectPort="8443" />
```

## jvm调优

Tomcat最吃内存，只要内存足够，这只猫就跑的很快。
如果系统资源有限，那就需要进行调优，提高资源使用率。
优化catalina.sh配置文件。在catalina.sh配置文件中添加以下代码：

```shell
JAVA_OPTS="-Djava.awt.headless=true -Dfile.encoding=UTF-8 -server -Xms1024m -Xmx1024m -XX:NewSize=512m -XX:MaxNewSize=512m -XX:PermSize=512m -XX:MaxPermSize=512m"
```

> server:一定要作为第一个参数，在多个CPU时性能佳
> -Xms：初始堆内存Heap大小，使用的最小内存,cpu性能高时此值应设的大一些
> -Xmx：初始堆内存heap最大值，使用的最大内存
> 上面两个值是分配JVM的最小和最大内存，取决于硬件物理内存的大小，建议均设为物理内存的一半。
> -XX:PermSize:设定内存的永久保存区域
> -XX:MaxPermSize:设定最大内存的永久保存区域
> -XX:MaxNewSize:
> -Xss 15120 这使得JBoss每增加一个线程（thread)就会立即消耗15M内存，而最佳值应该是128K,默认值好像是512k.
> +XX:AggressiveHeap 会使得 Xms没有意义。这个参数让jvm忽略Xmx参数,疯狂地吃完一个G物理内存,再吃尽一个G的swap。
> -Xss：每个线程的Stack大小
> -verbose:gc 现实垃圾收集信息
> -Xloggc:gc.log 指定垃圾收集日志文件
> -Xmn：young generation的heap大小，一般设置为Xmx的3、4分之一
> -XX:+UseParNewGC ：缩短minor收集的时间
> -XX:+UseConcMarkSweepGC ：缩短major收集的时间

## 修改 tomcat 启动模式

tomcat的运行模式有3种：

**bio：**默认的模式,性能非常低下,没有经过任何优化处理和支持.

**nio：**nio(new I/O)，是Java SE 1.4及后续版本提供的一种新的I/O操作方式(即java.nio包及其子包)。Java nio是一个基于缓冲区、并能提供非阻塞I/O操作的Java API，因此nio也被看成是non-blocking I/O的缩写。它拥有比传统I/O操作(bio)更好的并发运行性能。

**apr：**安装起来最困难,但是从操作系统级别来解决异步的IO问题,大幅度的提高性能.

**启动NIO模式**

修改`server.xml`里的Connector节点：

```xml
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
-- 在`71`行左右将其改为
    <Connector port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
               connectionTimeout="20000"
               redirectPort="8443" />

```

## 执行器优化（线程池）

在tomcat中每一个用户请求都是一个线程，所以可以使用线程池提高性能。

```xml
  <Service name="Catalina">

    <!--The connectors can use a shared executor, you can define one or more named thread pools-->
-- 在`59`行左右取消注释以下内容
    <!--
    <Executor name="tomcatThreadPool" namePrefix="catalina-exec-"
        maxThreads="150" minSpareThreads="4"/>
    -->

      
```

在`Connector`中指定使用共享线程池：

```xml
-- 在 connector 中指定线程池
	<Connector  executor="tomcatThreadPool" port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
                connectionTimeout="20000"
               redirectPort="8443" />
```

**Executor重要参数说明：**

name：共享线程池的名字。这是Connector为了共享线程池要引用的名字，该名字必须唯一。默认值：None；

namePrefix:在JVM上，每个运行线程都可以有一个name 字符串。这一属性为线程池中每个线程的name字符串设置了一个前缀，Tomcat将把线程号追加到这一前缀的后面。默认值：tomcat-exec-；

maxThreads：该线程池可以容纳的最大线程数。默认值：200；

maxIdleTime：在Tomcat关闭一个空闲线程之前，允许空闲线程持续的时间(以毫秒为单位)。只有当前活跃的线程数大于minSpareThread的值，才会关闭空闲线程。默认值：60000(一分钟)。

minSpareThreads：Tomcat应该始终打开的最小不活跃线程数。默认值：25。

threadPriority：线程的等级。默认是Thread.NORM_PRIORITY

**Connector重要参数说明：**

executor：表示使用该参数值对应的线程池；

minProcessors：服务器启动时创建的处理请求的线程数；

maxProcessors：最大可以创建的处理请求的线程数；

acceptCount：指定当所有可以使用的处理请求的线程数都被使用时，可以放到处理队列中的请求数，超过这个数的请求将不予处理。

**最佳参数实践：**

![](http://p3.pstatp.com/large/pgc-image/b6f4cfebbff84bc99e79f78c3ca288bb)

## 禁用AJP连接器

**AJP（Apache JServer Protocol）**
AJPv13协议是面向包的。WEB服务器和Servlet容器通过TCP连接来交互；为了节省SOCKET创建的昂贵代价，WEB服务器会尝试维护一个永久TCP连接到servlet容器，并且在多个请求和响应周期过程会重用连接。

我们一般是使用Nginx+tomcat的架构，所以用不着AJP协议，所以把AJP连接器禁用。

在`server.xml`文件中，注释以下内容即可：

```xml
 92     <!-- Define an AJP 1.3 Connector on port 8009 -->
 93     <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
 94 
```

