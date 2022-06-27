# SpringCloud微服务电商系统在Kubernetes集群中上线详细教程

> 该文章来自：https://jiangxl.blog.csdn.net/article/details/121740024
>
> 仅做个人备份学习使用。

## 1.[微服务](https://so.csdn.net/so/search?q=微服务&spm=1001.2101.3001.7020)架构及理论概述

 程序[架构](https://so.csdn.net/so/search?q=架构&spm=1001.2101.3001.7020)一共经历了3个阶段：单体架构、SOA架构、微服务架构。

 微服务系统应用由原来的单体变成几十到几百个不同的工程，会产生例如包括服务间的依赖，服务如何拆封，内部接口规范，数据传递等等问题，尤其是服务拆分，需要团队熟悉业务流程，懂得取舍，要保证拆分的粒度服务既符合“高内聚，低耦合”的基本原则，还要兼顾业务的发展以及公司的愿景，要还要说服团队成员为之努力，并且积极投入，在多方中间取得平衡。

 微服务从概念上讲就是将一个大的平台拆分成几个独立的小模块，这些模块有自己专门的数据库服务，即使这个单独模块出现了故障，也不会影响整个平台的使用，例如一个平台中有订单模块、新闻模块、咨询模块，即使新闻模块宕机了，订单模块、新闻模块依然工作正常，也不会造成整个网站的瘫痪。

 对于微服务版本迭代而言，只需要针对特定功能所在的子项目上线即可，版本迭代更加灵活，而单体程序版本迭代，哪怕只是一个小小的功能也需要对整个系统进行更新。

 目前主流的程序架构就是微服务系统，运用的技术栈更加丰富，例如kubernetes、CI/CD、Devops等等。

 微服务项目在kubernetes环境部署主要有两种实现方式：无状态的部署、istio微服务网格部署。

 可以把微服务理解为是一个大的框架，在这个框架里面内嵌各个子系统。

### 1.1.单体架构与微服务架构的区别

**微服务的特点：**

- 系统服务独立化
    - 每个子项目系统都会独立开发、部署，有效的避免一个服务的bug影响整个系统的使用
- 技术栈灵活
    - 每个子系统之间约定一个通信方式，例如MQ、API等，不再像单体服务那么的局限性
- 独立部署
    - 每个微服务系统都独立部署，都有单独的war包，即使其中一个服务异常宕机，也不会对整个平台产生影响
- 扩展性强
    - 每个微服务都可以部署多套，配合注册中心实现负载均衡能力
- 独立数据
    - 每个微服务都有独立的存储组件，比如数据库、缓存等，互不影响

**单体服务的特点**

- 易于部署
    - 单体服务只有一个程序包，只需要部署一个服务即可完成整个系统的建设
- 易于测试
    - 测试用例也只需要设计一个即可

**单体服务的不足**

- 代码量级巨大，难以维护，如果系统中存在bug，修复起来牵扯功能太多，故障百出
- 构建、部署的成本巨大，服务都集成在一起，启动的时间也会非常缓慢
- 新人上手较难，如果整个服务也没有注释的情况下，新的开发人员上手会非常难

**微服务与单体服务架构上的不同**

> 单体服务：程序包只有一个，开发团队可能有一群人，用户之间访问程序包即可获取系统信息，后端对应一个数据库
>
> 微服务：程序包有多个，每个程序包都是不同的功能结合，且每个微服务程序都有自己的单独数据库存储数据，所有的微服务信息都会存储到注册中心，网关程序在最前面，当用户有请求进来后，首先发送给网关服务，然后网关根据注册中心的数据，将不同功能的请求转发给不同的微服务程序

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/caf1d3f6f0f4405ea879f6408a54faf5.png)

### 1.2.微服务组件架构图

以电商平台为例，描述一个购买商品的微服务之间调用流程

 用户首先访问到平台的静态首页，发送一个搜索请求从前端页面提交给微服务的网关服务，网关服务是对外的，也就是不管用户要操作什么请求，都需要由网关服务转发给具体的微服务，因为网关服务是入口，因此网关服务一般都是多台做成的负载均衡，搜索请求到达网关服务后，网关服务会根据请求的功能转发到搜索服务的程序上，搜索出来商品后，会调用商品服务程序，查看商品的详细情况，用户选择完商品后，商品服务再调用订单服务，完成订单的创建，再由订单服务调用支付服务，完成商品的购买。

 所有的微服务接口信息都会注册到注册中心，当程序启动成功就会自动注册到注册中心，注册中心也会起到一个负载均衡的作用，根据网关的API请求，在注册中心上找到特定的微服务程序进行转发。

 微服务程序还有自己的一套配置中心，保存着各个微服务的配置文件，所有的微服务程序可能都有自己独立的后端组件，比如MySQL、Redis、MQ、分布式存储。

微服务之间的通信可以采用接口API、MQ、RPAC等机制

微服务在kubernetes集群中部署时可以采用无状态服务的部署，对于数据库、Redis、MQ、存储还是建议部署在k8s集群之外。

注册中心与微服务之间的联系：发现微服务—>微服务注册到注册中心—>进行心跳监测，异常的节点会踢出

微服务程序的门户网站会配置Gateway网关服务的地址，由门户网站用户请求的微服务信息，转发给Gateway网关程序，所有的微服务都会注册在Eureka注册中心中，Gateway网关会将请求通过注册中心转发给对应的微服务程序。
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/0225cafb98dd43d98ddd102cf1203791.png)

### 1.3.微服务注册中心

微服务面对着很多问题：

- 如何记录一个微服务副本的接口地址，如何对多个微服务节点组成的集群做负载均衡
- 符合判断集群中某一个微服务是否可用

微服务面临的这些问题都可以通过注册中心去解决，在注册中心中可用记录某一个微服务的所有副本节点，当一个副本节点挂掉了，注册中心也会将其踢出集群，注册中心会将一个微服务的所有副本节点自动形成一个负载均衡

在微服务中配合注册中心地址之后，程序一旦启动，无需配置注册中心，且能够自动注册到注册中心

微服务接入注册中心流程：微服务程序---->注册---->注册中心服务器

注册中心调用微服务流程：微服务网关程序---->注册/查询微服务（调用微服务）---->注册中心---->微服务程序

当然也可以不适用注册中心，k8s自身的功能就有服务发现自动形成负载均衡，也可以用健康检查监控服务的运行状况

目前主流的注册中心：Eureka、Nacos

### 1.4.不同的部署环境对于程序配置文件如何管理

可以通过以下四种方式来管理不同环境使用不同的配置文件

- kubernetes configmap资源
    - 可以根据线上、预发布、测试环境编写不同的configmap资源，然后将其挂载到对应的deployment资源上
- docker 容器启动脚本entrypoint.sh
    - 根据环境的不同在entrypoint.sh声明环境变量，运行特定的配置文件
- java启动命令控制
    - java程序可以同时存在多个程序配置文件，可以在配置文件中声明各自的变量，然后使用`java --spring.profiles.active=xxx xxx.jar`的方式来指定不同环境的配置文件
- 使用开源的统一配置中心程序，比如市面上主流的Apollo以及Disconf，这两款程序都有自己的图形化管理系统，配置可视化

## 2.微服务迁移至kubernetes平台流程

### 2.1.项目迁移到K8S平台流程

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/47633ea793f24a4b8727059870501e50.png)
项目迁移到K8S平台大致流程分为以下几个阶段：

- 制作程序镜像
    - 在K8s环境，所有的程序都是以Docker镜像来运行的，一个镜像包含了文件系统、程序的运行环境、程序本身，可以通过Dockerfile的形式制作镜像
- 使用资源控制器管理Pod资源
    - 程序镜像运行需要依靠Pod资源，需要有Pod控制器去管理Pod资源
    - 常见的Pod控制器：Deployment（无状态程序部署）、Statefulset（有状态程序部署）、Job/CronJob（批量处理）
- 将Pod资源使用服务发现对外进行暴露
    - Services资源注意通过label标签与Pod进行关联，实现对一组Pod的自动负载均衡以及服务发现
    - Services资源支持Cluster、Nodeport、LoadBalancer三种类型
- 对外发布应用程序
    - 可以使用单独的nginx容器去反向代理Cordns解析的services名称将Pod应用对外发布
    - 也可以使用ingress+services的方式将应用程序对外发布，使用ingress的前提是必须可以通过域名访问应用
    - 架构图如下
        ![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/4450dd7d3c994bb78ca36b43af66e28a.png)
- 后期的日志收集与监控
    - 当应用在K8s程序运行后，对于程序的日志比如nginx、tomcat这些日志文件都不会做持久化，因此就需要考虑对日志进行收集，可以采用Filebeat+ELK方式对程序日志进行收集
    - 使用Prometheus+Grafana对整个K8s平台进行全方面监控

### 2.2.传统部署与K8S部署的区别

> **传统方式部署项目方式：**
>
> 首先由开发人员提交代码到Gitlab代码仓库，Jenkins触发更新从Gitlab上获取最新代码，通过maven将代码编译成war包或者jar包，再由Jenkins通过写好的自动化部署脚本或者Ansible自动化程序将war包部署到程序所在的云主机，云主机一定会是多台组成的负载均衡集群，将负载均衡VIP与域名进行绑定，用户通过访问域名由负载均衡转发至对应的后台主机。
>
> 传统架构运维环境一般由zabbix监控系统进行监控，日志采集会使用ELK平台。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/e34c94fc97e0416cb21cd00879244103.png)

> **Kubernetes平台部署项目方式：**
>
> 首先由开发人员提交代码到Gitlab代码仓库，Jenkins触发更新从Gitlab上获取最新代码，通过写好流水线将程序打包成Docker镜像并推送至Harbor仓库，再由Jenkins调用K8s的Master Api将程序的镜像采用Deployment控制器部署到K8s集群，再由service资源暴露pod资源，最后由ingress或者nginx资源将程序发布到互联网。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/3ca0d364bdc24690a04d4ca95eb1cb05.png)

## 3.微服务程序前期环境准备（配置、编译、制作镜像）

### 3.1.simple-microservice微服务项目介绍

本次使用的微服务为spring cloud的电商平台项目

项目名称：simple-microservice

simple-microservice微服务的各个程序：

- eureka-service（注册中心）
- gateway-service（网管服务）
- order-service（订单服务）
- product-service（商品服务）
- portal-service（门户网站）
- stock-service（库存服务）

用户请求首先到Protal前端页面，也就是程序的首页，在首页的各项功能操作都会由Gateway网关服务转发到各自的微服务程序上，比如请求一个订单服务，订单服务会事先注册到Eureka中，由Gateway将请求发送给Eureka，再由Eureka转发给具体的微服务程序，这些微服务程序都有自己单独的数据库服务。

微服务程序的门户网站会配置Gateway网关服务的地址，由门户网站用户请求的微服务信息，转发给Gateway网关程序，所有的微服务都会注册在Eureka注册中心中，Gateway网关会将请求通过注册中心转发给对应的微服务程序。
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b89c6c882bbe4a2d9ab53f97d5fe1f35.png)

该微服务程序代码可以托管在gitlab代码仓库中，我们可以建立多个分支模拟从开发到上线的流程，理念：分别创建5个分支，在每个分支中增加对应的代码，最后合并到master分支，也可以直接就在master分支上新增配置文件，我是直接拉取dev1分支，只有程序代码的分支，然后新增一系列配置，最后上线。

拉取dev1分支，进行一系列配置的话，首先要把master分支里的protal程序代码同步到dev1分支里，因为dev1的protal程序代码有点bug，整个微服务运行完毕后，order订单服务会报错。

分别有五个分支：

- dev1：交付代码
- dev2：新增程序打包的Dockerfile文件
- dev3：新增K8s资源编排Yaml文件
- dev4：微服务链路监控
- dev5：新功能代码更新上线
- master：上线版本

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/258d6fe2cd114cd58843209bdf1f85de.png)

### 3.2.simple微服务部署到K8S逻辑架构

**simple-microservice微服务部署到k8s平台主要分为如下几个步骤：**

- 修改程序配置文件，将数据库等各组件地址修改为当前环境
- 将各个微服务程序使用Maven编译成可部署的jar包
- 编写Dockerfile将程序做成docker镜像

**对K8S环境的要求：**

一套完整的K8S集群、有cordns可以解析Service地址、Harbor镜像仓库、Nginx容器将项目发布到互联网或者INgress资源将项目发布到互联网。

**微服务部署到K8S环境之后架构是怎样的**

> 首先用户访问网站的域名，请求达到前端页面，点击前端页面中的功能跳转到不同的微服务，比如商品服务，将商品服务的请求交个Gateway网关服务，由网关服务转发给商品的微服务程序Product，各个微服务之间的调用，都从Eureka注册中心读取各个微服务的信息完成调度，Product（商品）、Order（订单）、Stock（库存）都有单独的数据库，MySQL数据部署在K8S集群之外。
>
> 服务发布到互联网采用Nginx而不采用Ingress，Nginx可以配置更多的参数，将Nginx容器运行在每一个Node主机上，映射Node主机的80/443端口，通过在hosts文件里绑定node主机ip+程序域名的方式访问微服务。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/60f3e04a6fb3410cbdc1f54eee6a7c4e.png)

### 3.3.准备微服务各程序的配置文件

在使用Maven之前，首先将程序的配置文件进行修改，编译成功之后再想修改配置文件内容，就需要重新编译了，将每个微服务的环境地址都修改成自己环境的地址。

拉取dev1分支展开全新配置

#### 3.3.1.创建微服务各个程序的prod配置文件

eureka（注册中心）、gateway（网关）、order（订单）、portal（首页）、product（商品）、stock（库存）这几个微服务程序都需要配置，新建一个prod的配置文件，用于线上生产环境

order（订单）、product（商品）、stock（库存）这些微服务有两个包，分别是xxx-biz和xxx-api，只需要部署biz目录下的jar包即可，api的目录只是存在一些依赖

order（订单）、product（商品）、stock（库存）这些微服务都有自己单独的数据库

先将prod的配置文件创建出来，待eureka项目部署完成后，再进行进一步的修改，最后将程序编译

**1.eureka-service配置文件**

```sh
1.创建一个prod的配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# cd eureka-service/src/main/resources/
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/eureka-service/src/main/resources]\# cp application-fat.yml application-prod.yml

2.程序使用prod的配置文件运行
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/eureka-service/src/main/resources]\# vim application.yml 
server:
  port: 8080        #eureka的端口号
spring:
  application:
    name: legendshop-basic-eureka
  profiles:
    active: prod    #将这里修改为prod就会调用prod配置文件

3.配置eureka服务的配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/eureka-service/src/main/resources]\# vim application-prod.yml 
eureka:
  server:
    renewal-percent-threshold: 0.9
    enable-self-preservation: false
    eviction-interval-timer-in-ms: 40000
  instance:
    hostname: 127.0.0.1
    prefer-ip-address: true
  client:
    register-with-eureka: false
    serviceUrl:
      defaultZone: http://127.0.0.1:${server.port}/eureka/
    fetch-registry: false
```

**2.gateway-service配置文件**

```sh
1.创建一个prod的配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# cd gateway-service/src/main/resources/
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/gateway-service/src/main/resources]\# cp application-fat.yml application-prod.yml

2.程序使用prod的配置文件运行
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/gateway-service/src/main/resources]\# cat application.yml 
server:
  port: 8080
spring:
  profiles:
    active: prod
  application:
    name: @artifactId@
    
3.配置程序配置文件    
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/gateway-service/src/main/resources]\# vim application-prod.yml 
······
eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-0.eureka-service:8080/eureka/      #修改eureka地址
```

**3.order-service配置文件**

```sh
1.创建一个prod的配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# cd order-service/order-service-biz/src/main/resources/
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/order-service/order-service-biz/src/main/resources]\# cp application-fat.yml application-prod.yml

2.程序使用prod的配置文件运行
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/order-service/order-service-biz/src/main/resources]\# vim application.yml 
server:
  port: 8080
spring:
  profiles:
    active: prod
  application:
    name: order-service

3.配置程序配置文件    
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/order-service/order-service-biz/src/main/resources]\# vim application-prod.yml 
spring:
  datasource:
    url: jdbc:mysql://192.168.20.11:3306/tb_order?characterEncoding=utf-8     #mysql数据库地址
    username: root  
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver

eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-0.eureka-service:8080/eureka/      #eureka地址
```

**5.product-service配置文件**

```sh
1.创建一个prod的配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# cd product-service/product-service-biz/src/main/resources/
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/product-service/product-service-biz/src/main/resources]\# cp application-fat.yml application-prod.yml

2.程序使用prod的配置文件运行
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/product-service/product-service-biz/src/main/resources]\# vim application.yml 
server:
  port: 8080
spring:
  profiles:
    active: prod
  application:
    name: product-service

3.配置程序配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/product-service/product-service-biz/src/main/resources]\# vim application-prod.yml 
spring:
  datasource:
    url: jdbc:mysql://192.168.20.11:3306/tb_product?characterEncoding=utf-8     #数据库地址
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver

eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-0.eureka-service:8080/eureka/      #eureka地址
```

**6.stock-service配置文件**

```sh
1.创建一个prod的配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# cd stock-service/stock-service-biz/src/main/resources/
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/stock-service/stock-service-biz/src/main/resources]\# cp application-fat.yml application-prod.yml

2.程序使用prod的配置文件运行
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/stock-service/stock-service-biz/src/main/resources]\# vim application.yml 
server:
  port: 8080
spring:
  profiles:
    active: prod
  application:
    name: stock-service

3.配置程序配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/stock-service/stock-service-biz/src/main/resources]\# vim application-prod.yml 
spring:
  datasource:
    url: jdbc:mysql://192.168.20.11:3306/tb_stock?characterEncoding=utf-8   #数据库地址
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver

eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-service.eureka:8080/eureka/      #eureka地址                            
```

**4.portal-service配置文件**

```sh
1.创建一个prod的配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# cd portal-service/src/main/resources/
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/portal-service/src/main/resources]\# cp application-fat.yml application-prod.yml

2.程序使用prod的配置文件运行
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/portal-service/src/main/resources]\# vim application.yml 
server:
  port: 8080
  undertow:
    io-threads: 16
    worker-threads: 256
    buffer-size: 1024
    direct-buffers: true
spring:
  application:
    name: portal-service
  profiles:
    active: prod

3.配置程序配置文件
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/portal-service/src/main/resources]\# vim application-prod.yml 
eureka:
  instance:
    prefer-ip-address: true
  client:
    service-url:
      defaultZone: http://eureka-0.eureka-service:8080/eureka/      #指定eureka地址
    register-with-eureka: true
    fetch-registry: true
······
```

#### 3.3.2.调整每个微服务的pom文件增加prod环境

由于我们新加了一个prod线上环境的配置文件，因此也需要在pom.xml中配置，配置完成后可以编译一下，看看是否可以做成可部署的程序包

```sh
1.安装maven
[root@binary-k8s-master1 ~]\# yum -y install java-1.8.0-openjdk maven

2.调整pom.xml增加prod环境配置
[root@binary-k8s-master1 simple-microservice-dev1]\# vim pom.xml 
······      #65行左右
    <profile>
      <id>prod</id>
      <properties>
        <profileActive>prod</profileActive>
      </properties>
    </profile>

  </profiles>
······

2.编译程序
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# mvn clean package -D maven.test.skip=true -P prod

3.查看编译成功的war包
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1]\# find . -name "*.jar"
./basic-common/basic-common-core/target/basic-common-core.jar
./eureka-service/target/eureka-service.jar
./gateway-service/target/gateway-service.jar
./order-service/order-service-api/target/order-service-api.jar
./order-service/order-service-biz/target/order-service-biz.jar
./portal-service/target/portal-service.jar
./product-service/product-service-api/target/product-service-api.jar
./product-service/product-service-biz/target/product-service-biz.jar
./stock-service/stock-service-api/target/stock-service-api.jar
./stock-service/stock-service-biz/target/stock-service-biz.jar
```

### 3.4.制作微服务程序所使用的的底层系统镜像

#### 3.4.1.为程序环境构建底层系统镜像

由于是SpringCloud微服务系统，SpringCloud属于JAVA语言开发的项目，因此要有JAVA启动环境。

```sh
1.拉取centos7.5作为底层容器
[root@binary-k8s-master1 ~]\# docker pull centos:7.5.1804

2.启动容器
[root@binary-k8s-master1 ~]\# docker run -itd centos:7.5.1804

3.进入系统容器进行环境配置
[root@binary-k8s-master1 ~]\# docker exec -it 462237f9a0a bash
#安装java环境
[root@2fcfb51f04e0 /]\# yum -y install java-1.8.0-openjdk net-tools
[root@2fcfb51f04e0 /]\# java  -version
openjdk version "1.8.0_302"
OpenJDK Runtime Environment (build 1.8.0_302-b08)
OpenJDK 64-Bit Server VM (build 25.302-b08, mixed mode)
[root@2fcfb51f04e0 /]\# mkdir /data/simple-microservice -p
#调整系统时区
[root@2fcfb51f04e0 /]\# yum -y intall tzdata
[root@2fcfb51f04e0 /]\# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime 

4.将容器提交为镜像
[root@binary-k8s-master1 ~]\# docker commit 2fcfb51f04e0 centos-java:v1

5.配置Harbor镜像仓库
[root@binary-k8s-master1 ~]\# vim /etc/docker/daemon.json 
{
  "registry-mirrors": ["https://9wn5tbfh.mirror.aliyuncs.com"],
  "insecure-registries": ["192.168.20.10"]
}
[root@binary-k8s-master1 ~]\# systemctl restart docker

6.提交镜像到Harbor仓库
[root@binary-k8s-master1 ~]\# docker login -u admin -p Harbor12345 192.168.20.10
[root@binary-k8s-master1 ~]\# docker tag centos-java:v1 192.168.20.11/base/centos-java:v1
[root@binary-k8s-master1 ~]\# docker push 192.168.20.11/base/centos-java:v1
```

#### 3.4.2.为每个微服务程序编写Dockerfile

**设计概念：**

采用3.3.1中制作的底层镜像

第一步：在镜像里面创建`/data/simple-microservice/微服务名称`这样的目录用于存放程序的jar包

第二步：将程序的jar包拷贝至镜像中

第三步：生成一个启动脚本，由于服务名称都不一样也就是每个程序的路径都不同，想要做到一个底层镜像多个程序复用，那么就需要在启动脚本里手动指定程序的路径，在脚本中指定程序的部署路径以及日志路径

第四步：暴露8080端口

将Dockerfile放到程序编译的目录也就是与src在同一目录

**1.eureka-service服务**

```sh
在4.2.2.会写
```

**2.gateway-service服务**

```sh
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/gateway-service]\# vim Dockerfile 
FROM 192.168.20.11/base/centos-java:v1
RUN mkdir /data/simple-microservice/gateway-service -p
COPY ./target/gateway-service.jar /data/simple-microservice/gateway-service/
RUN echo -e "#!/bin/bash \njava -jar /data/simple-microservice/gateway-service/gateway-service.jar > /data/simple-microservice/gateway-service/gateway-service.log & \ntail -f /data/simple-microservice/gateway-service/gateway-service.log" > /data/entrypoint.sh && chmod a+x /data/entrypoint.sh
EXPOSE 8080
ENTRYPOINT /data/entrypoint.sh
```

**3.order-service服务**

```sh
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/order-service/order-service-biz]\# vim Dockerfile 
FROM 192.168.20.11/base/centos-java:v1
RUN mkdir /data/simple-microservice/order-service -p
COPY ./target/order-service-biz.jar /data/simple-microservice/order-service/
RUN echo -e "#!/bin/bash \njava -jar /data/simple-microservice/order-service/order-service-biz.jar > /data/simple-microservice/order-service/order-service-biz.log & \ntail -f /data/simple-microservice/order-service/order-service-biz.log" > /data/entrypoint.sh && chmod a+x /data/entrypoint.sh
EXPOSE 8080
ENTRYPOINT /data/entrypoint.sh
```

**4.portal-service服务**

```sh
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/portal-service]\# vim Dockerfile 
FROM 192.168.20.11/base/centos-java:v1
RUN mkdir /data/simple-microservice/portal-service -p
COPY ./target/portal-service.jar /data/simple-microservice/portal-service/
RUN echo -e "#!/bin/bash \njava -jar /data/simple-microservice/portal-service/portal-service.jar > /data/simple-microservice/portal-service/portal-service.log & \ntail -f /data/simple-microservice/portal-service/portal-service.log" > /data/entrypoint.sh && chmod a+x /data/entrypoint.sh
EXPOSE 8080
ENTRYPOINT /data/entrypoint.sh
```

**5.product-service服务**

```sh
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/product-service/product-service-biz]\# vim Dockerfile
FROM 192.168.20.11/base/centos-java:v1
RUN mkdir /data/simple-microservice/product-service -p
COPY ./target/product-service-biz.jar /data/simple-microservice/product-service/
RUN echo -e "#!/bin/bash \njava -jar /data/simple-microservice/product-service/product-service-biz.jar > /data/simple-microservice/product-service/product-service-biz.log & \ntail -f /data/simple-microservice/product-service/product-service-biz.log" > /data/entrypoint.sh && chmod a+x /data/entrypoint.sh
EXPOSE 8080
ENTRYPOINT /data/entrypoint.sh
```

**6.stock-service服务**

```sh
[root@binary-k8s-master1 ~/springcloud/simple-microservice-dev1/stock-service/stock-service-biz]\# cat Dockerfile
FROM 192.168.20.11/base/centos-java:v1
RUN mkdir /data/simple-microservice/stock-service -p
COPY ./target/stock-service-biz.jar /data/simple-microservice/stock-service/
RUN echo -e "#!/bin/bash \njava -jar /data/simple-microservice/stock-service/stock-service-biz.jar > /data/simple-microservice/stock-service/stock-service-biz.log & \ntail -f /data/simple-microservice/stock-service/stock-service-biz.log" > /data/entrypoint.sh && chmod a+x /data/entrypoint.sh
EXPOSE 8080
ENTRYPOINT /data/entrypoint.sh
```

### 3.5.调整Protal微服务中连接Gateway网关的地址

Protal是我们电商平台的门户网站，也就是前端首页，在Protal微服务中会填写好其他微服务程序的地址，Gateway网关程序的地址就是写死在Protal项目的js里，在我们定义好Gateway网关服务的域名后，就要将域名写入到对应的js文件里，否则当项目启动之后是无法调通的。

需要修改下列这四个文件

portal-service/src/main/resources/static/js/orderList.js

portal-service/src/main/resources/static/js/productList.js
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/d0e207db0cb54e6296ca185728e5ed1c.png)

```sh
打开这四个文件，将里面的gateway.ctnrs.com域名修改为gateway.jiangxl.com域名

vim修改命令：%s/gateway.ctnrs.com/gateway.jiangxl.com/g
```

### 3.6.部署Ingress用于将微服务程序发布到互联网

```sh
1.下载ingress部署的yaml文件
[root@binary-k8s-master1 ~]\# wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/mandatory.yaml
[root@binary-k8s-master1 ~]\# wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/provider/baremetal/service-nodeport.yaml

2.调整ingress nodeport端口
[root@binary-k8s-master1 ~/springcloud/ingress]\# vim service-nodeport.yaml
······
  ports:
    - name: http
      port: 80
      targetPort: 80
      nodePort: 80
      protocol: TCP
    - name: https
      port: 443
      targetPort: 443
      nodePort: 443
      protocol: TCP
······

3.部署ingress
[root@binary-k8s-master1 ~/springcloud/ingress]\# kubectl apply -f mandatory.yaml

4.查看ingress部署的结果
[root@binary-k8s-master1 ~]\# kubectl get all -n ingress-nginx
NAME                                            READY   STATUS    RESTARTS   AGE
pod/nginx-ingress-controller-766867958b-n7dwj   1/1     Running   0          49m

NAME                    TYPE       CLUSTER-IP   EXTERNAL-IP   PORT(S)                 AGE
service/ingress-nginx   NodePort   10.0.0.107   <none>        80:80/TCP,443:443/TCP   49m

NAME                                       READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx-ingress-controller   1/1     1            1           49m

NAME                                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/nginx-ingress-controller-766867958b   1         1         1       49m
```

## 4.在kubernetes集群部署simple微服务项目

simple微服务项目在K8S集群中部署，只有eureka服务采用statefulset控制器部署，其余所有微服务均采用deployment控制器部署，所有的微服务通过ingress发布在互联网。

**simple微服务电商项目在K8S集群部署流程**

1）部署simple电商微服务项目的数据库环境

2）在K8S中部署Eureka注册中心

3）修改每个微服务的配置文件，指定eureka注册中心集群的地址

4）使用maven将每个微服务构建成可部署的jar包

5）部署Gateway关服务

6）部署protal、order、product、stock服务

### 4.1.部署simple微服务程序的mysql数据库环境

```sh
1.安装MySQL数据库
[root@harbor-mysql ~]\# rpm -ivh http://repo.mysql.com/yum/mysql-5.6-community/el/7/x86_64/mysql-community-release-el7-5.noarch.rpm
[root@harbor-mysql ~]\#  yum install mysql-community-server 

2.启动MySQL
[root@harbor-mysql ~]\# systemctl start mysqld
[root@harbor-mysql ~]\# systemctl enable mysqld

3.设置数据库密码
[root@harbor-mysql ~]\# mysqladmin -u root password '123456'

4.创建order（订单）、product（商品）、stock（库存）微服务的数据库
[root@harbor-mysql ~]\# mysql -uroot -p123456
mysql> create database tb_order;
Query OK, 1 row affected (0.00 sec)

mysql> create database tb_product;
Query OK, 1 row affected (0.01 sec)

mysql> create database tb_stock;
Query OK, 1 row affected (0.00 sec)

5.导入数据库数据
#将数据库文件传到数据库服务器
[root@binary-k8s-master1 simple-microservice-dev1]\# scp -r db root@192.168.20.11:/root
#导入order数据库的数据
mysql> use tb_order
mysql> source /root/db/order.sql
#导入product数据库的数据
mysql> use tb_product
mysql> source /root/db/product.sql
#导入stock数据库的数据
mysql> use tb_stock;
mysql> source /root/db/stock.sql

6.允许数据库远程访问
mysql> grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option;
Query OK, 0 rows affected (0.00 sec)
```

### 4.2.部署eureka微服务注册中心

Eureka在整个微服务架构中起到至关重要的的作用，必须保证Eureka服务高可用。

Eureka服务采用statefulset有状态应用部署方式再K8S集群中进行部署。

Eureka本身就可以利用自身的服务发现来实现集群的高可用，只需要在Eureka配置文件中指定各个Eureka节点的地址就可以实现。

将程序部署在K8S之后，如何能够保证每个Eureka Pod的地址唯一不变，就需要用到Statefulset控制器采用有状态的应用部署，使用Statefulset控制器之后，每个Pod的名称都是唯一不变的，并且每个Pod都有一个DNS服务发现地址，通过这个DNS地址就可以请求到Pod中的服务，主要是coredns组件来实现的，因此集群还需要安装有coredns服务，我们可以将每一个Eureka Pod的DNS服务发现地址写入到Eureka的配置文件中，每个Eureka节点相互注册，最终形成高可用集群。

Statefulset+Headless部署的程序DNS名格式：`<statefulsetName-index>.<service-name>.<namespace-name>.svc.cluster.local`后面的.svc.cluster.local可以去掉，K8S默认就是.svc.cluster.local。

`<statefulsetName-index>`就是Pod的名称，-index是每一个Pod名称后面的数字编号，Statefulset控制器部署好的Pod，会在每一个Pod名称后面加上一个数字编号，从0开始，一次累加，保证所有的Pod都有一个独立的访问入口

`<service-name>`是程序的service资源的名称

`<namespace-name>`是程序所在的namespace名称

我们的Eureka规定的节点数为3个，也就是最终statefulset会启动3个Pod副本组成Eureka集群。

#### 4.2.1.修改Eureka配置文件增加各节点地址

Eureka集群节点每个Pod副本服务发现地址如下，需要将其配置在eureka中

```
http://eureka-0.eureka-service.simple-ms`
`http://eureka-0.eureka-service.simple-ms`
`http://eureka-0.eureka-service.simple-ms
```

修改Eureka的配置文件，采用Dns服务发现地址的形式将每个节点的地址都写在配置文件中，当Eureka启动之后，每个节点都会相互发现最终形成高可用集群。

```sh
1.修改Eureka配置文件中的节点地址
[root@binary-k8s-master1 eureka-service]\# vim src/main/resources/application-prod.yml
eureka:
  server:
    renewal-percent-threshold: 0.9
    enable-self-preservation: false
    eviction-interval-timer-in-simple-ms: 40000
  instance:
    hostname: 127.0.0.1
    prefer-ip-address: false
  client:
    register-with-eureka: true
    serviceUrl:
      defaultZone: http://eureka-0.eureka.simple-ms:${server.port}/eureka/,http://eureka-1.eureka.simple-ms:${server.port}/eureka/,http://eureka-2.eureka.simple-ms:${server.port}/eureka/
    fetch-registry: true

2.使用maven将最新的Eureka编译
[root@binary-k8s-master1 simple-microservice-dev1]\# mvn clean package -D maven.test.skip=true -P prod

注意：只能在项目最外层的目录中执行mvn clean package
```

#### 4.2.2.调整Eureka的Dockerfile

由于我们在Eureka配置文件中配置的是以dns名称来互相发现对方，并不是以IP地址形式发现，因此我们需要配置Dockerfile，在启动程序时将配置文件中的hostname字段值修改为当前Pod的dns名称。

因为我们的Eureka是多Pod组成的高可用集群，因此不能将dns名称写死在配置文件中，不然每个Pod都是同样的地址，集群是组件不成功的，所以就需要在Dockerfile中定义程序启动命令时，将dns名称地址设置成变量，由Pod资源将变量值传入到启动命令中，程序启动时就会用Pod的dns名称地址替换掉配置文件中的IP地址。

```sh
1.修改DOckerfile文件内容
[root@binary-k8s-master1 eureka-service]\# vim Dockerfile 
FROM 192.168.20.11/base/centos-java:v1
RUN mkdir /data/simple-microservice/eureka-service -p
COPY ./target/eureka-service.jar /data/simple-microservice/eureka-service/
RUN echo -e "#!/bin/bash \njava -jar -Deureka.instance.hostname=${MY_POD_NAME}.eureka.simple-ms /data/simple-microservice/eureka-service/eureka-service.jar > /data/simple-microservice/eureka-service/eureka-service.log & \ntail -f /data/simple-microservice/eureka-service/eureka-service.log" > /data/entrypoint.sh && chmod a+x /data/entrypoint.sh
EXPOSE 8080
ENTRYPOINT /data/entrypoint.sh
```

启动命令单独拉出来看一下，`-Deureka.instance.hostname`这个参数表示修改配置文件中hostname参数的值，`${MY_POD_NAME}`这个变量使从deployment资源文件中定义的env变量，将Pod的名称赋给MY_POD_NAME变量，最后引入到启动命令中，最后在配置文件中hostname字段的值应该是`eureka-0.eureka-service.simple-ms`

```sh
java -jar -Deureka.instance.hostname=${MY_POD_NAME}.eureka-service.simple-ms /data/simple-microservice/eureka-service/eureka-service.jar
```

#### 4.2.3.构建Eureka服务的Docker镜像

```sh
[root@binary-k8s-master1 eureka-service]\# docker build -t  192.168.20.11/simple-microservice/eureka-service:v1 .

[root@binary-k8s-master1 eureka-service]\# docker images | grep eureka
192.168.20.11/simp-microservice/eureka-service        v1                  1dc64fc9ba09        About a minute ago   800MB

[root@binary-k8s-master1 eureka-service]\# docker push 192.168.20.11/simple-microservice/eureka-service:v1
```

#### 4.2.4.编写Eureka部署YAML资源文件

**1）创建命名空间**

```yaml
1.创建命名空间
# kubectl create ns simple-ms
namespace/simple-ms created

2.创建资源编排YAML文件存放路径
[root@binary-k8s-master1 ~]\# mkdir springcloud/simple-microservice-dev1/k8s/
```

**2）登录Harbor**

可以不在每一个Node节点使用docker login登陆Harbor仓库，可以将Harbor仓库的认证信息做成secret，通过使用secret的方式连接Harbor。

```sh
[root@binary-k8s-master1 ~]\# kubectl create secret docker-registry registry-pull-secret --docker-server=192.168.20.11 --docker-username=admin --docker-password=Harbor12345 --docker-email=admin@ctnrs.com -n simple-ms
```

**3）编写资源YAML文件**

eureka要做成集群式的服务，所以要采用statefulset控制器部署，并采用headless service保证statefulset创建的pod名称唯一性，最后通过ingress将eureka服务发布在互联网环境。

```yaml
[root@binary-k8s-master1 k8s]\# vim eureka-deploy.yaml 
---
#ingress资源
apiVersion: extensions/v1beta1
kind: Ingress           #类型为ingress
metadata:             #定义元数据信息：资源名称、资源所在的命名空间
  name: eureka 
  namespace: simple-ms
spec:
  rules:                  #定义ingress规则
    - host: eureka.jiangxl.com          #定义eureka使用的域名
      http:                   #采用http类型的访问方式
        paths:                  #定义程序的url路径
        - path: /
          backend:                #针对定义的程序路径关于对应的后端service资源
            serviceName: eureka
            servicePort: 8080
            
---
#headless service资源
apiVersion: v1          
kind: Service
metadata:
  name: eureka
  namespace: simple-ms
spec:
  clusterIP: None       #ClusterIP资源设置为Node就代表headless类型的service
  ports:            #定义暴露的eureka端口号
  - port: 8080
    name: eureka 
  selector:           #标签选择器，关联后端pod
    project: simple
    app: eureka

---
#statefulset资源
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: eureka
  namespace: simple-ms
spec:
  replicas: 3               #副本数
  selector:                 #标签选择器
    matchLabels:
      project: simple         
      app: eureka
  serviceName: "eureka"           #service的名称，也就是将来的pod名称
  template:                 
    metadata:
      labels:
        project: simple
        app: eureka
    spec:
      imagePullSecrets:           #harbor镜像仓库的凭据信息
      - name: registry-pull-secret
      containers:
      - name: eureka
        image: 192.168.20.11/simple-microservice/eureka-service:v1
        ports:
          - protocol: TCP
            containerPort: 8080
        env:              #增加一个环境变量，变量名为MY_POD_NAME，值为pod的名称，这个变量信息会传入dockerfile中
          - name: MY_POD_NAME
            valueFrom:
              fieldRef:
                fieldPath: metadata.name
        resources:            #资源配额
          requests:           #最小资源限制，cpu为0.5，内存为256M
            cpu: 0.5
            memory: 256Mi
          limits:           #最大资源限制，cpu为1，内存为1G
            cpu: 1          
            memory: 1Gi
        readinessProbe:         #就绪性健康检查
          tcpSocket:          #以tcp 8080端口作为健康检查的机制
            port: 8080  
          initialDelaySeconds: 60     #容器启动60秒后进行检测
          periodSeconds: 10         #探测的频率
        livenessProbe:            #存活性健康检查
          tcpSocket:            #以tcp 8080端口作为健康检查的机制
            port: 8080  
          initialDelaySeconds: 60       #容器启动60秒后进行检查
          periodSeconds: 10           #探测的频率为10秒一次
```

#### 4.2.5.在K8S集群中部署Eureka注册中心

```sh
1.部署eureka服务
[root@binary-k8s-master1 k8s]\# kubectl apply -f eureka-deploy.yaml 

2.查看部署的资源状态
[root@binary-k8s-master1 k8s]\# kubectl get all -n simple-ms
NAME           READY   STATUS    RESTARTS   AGE
pod/eureka-0   1/1     Running   1          12h
pod/eureka-1   1/1     Running   0          12h
pod/eureka-2   1/1     Running   0          12h

NAME             TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
service/eureka   ClusterIP   None         <none>        8080/TCP   13h

NAME                      READY   AGE
statefulset.apps/eureka   3/3     13h

3.查看eureka的ingress状态
[root@binary-k8s-master1 k8s]\# kubectl get ingress -n simple-ms
NAME     CLASS    HOSTS                ADDRESS      PORTS   AGE
eureka   <none>   eureka.jiangxl.com   10.0.0.107   80      13h
```

首先在本地hosts文件中绑定eureka域名解析，然后在浏览器中输入eureka.jiangxl.com访问eureka服务。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/dac8c49c10904c4591acb933a094c0d7.png)

### 4.3.配置各个微服务程序连接Eureka集群的地址

在程序的配置文件中填写eureka集群所有节点的服务发现地址

**1.gateway-service配置文件**

```yaml
# vim gateway-service/src/main/resources/application-prod.yml 
······
eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-0.eureka.simple-ms:8080/eureka,http://eureka-1.eureka.simple-ms:8080/eureka,http://eureka-2.eureka.simple-ms:8080/eureka
```

**2.order-service配置文件**

```yaml
# vim order-service/order-service-biz/src/main/resources/application-prod.yml 
spring:
  datasource:
    url: jdbc:mysql://192.168.20.11:3306/tb_order?characterEncoding=utf-8
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver

eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-0.eureka.simple-ms:8080/eureka,http://eureka-1.eureka.simple-ms:8080/eureka,http://eureka-2.eureka.simple-ms:8080/eureka
```

**3.product-service配置文件**

```yaml
# vim product-service/product-service-biz/src/main/resources/application-prod.yml 
spring:
  datasource:
    url: jdbc:mysql://192.168.20.11:3306/tb_product?characterEncoding=utf-8
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver

eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-0.eureka.simple-ms:8080/eureka,http://eureka-1.eureka.simple-ms:8080/eureka,http://eureka-2.eureka.simple-ms:8080/eureka
```

**4.stock-service配置文件**

```yaml
# vim stock-service/stock-service-biz/src/main/resources/application-prod.yml 
spring:
  datasource:
    url: jdbc:mysql://192.168.20.11:3306/tb_stock?characterEncoding=utf-8
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver

eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-0.eureka.simple-ms:8080/eureka,http://eureka-1.eureka.simple-ms:8080/eureka,http://eureka-2.eureka.simple-ms:8080/eureka
```

**5.portal-service配置文件**

```yaml
# vim portal-service/src/main/resources/application-prod.yml 
eureka:
  instance:
    prefer-ip-address: true
  client:
    service-url:
      defaultZone: http://eureka-0.eureka.simple-ms:8080/eureka,http://eureka-1.eureka.simple-ms:8080/eureka,http://eureka-2.eureka.simple-ms:8080/eureka
    register-with-eureka: true
    fetch-registry: true
······
```

### 4.4.将各个程序代码编译成可部署的程序

```sh
[root@binary-k8s-master1 simple-microservice-dev1]\# mvn clean package -D maven.test.skip=true -P prod
```

### 4.3.中部署Gateway网关服务

#### 4.3.1.将Gateway程序打包成docker镜像

```sh
[root@binary-k8s-master1 gateway-service]\# docker build -t 192.168.20.11/simple-microservice/gateway-service:v1 .
```

#### 4.3.2.在K8S集群中部署Gateway网关服务

所有程序的资源YAML文件都存放在/root/springcloud/simple-microservice-dev1/k8s路径。

微服务程序的话就不需要有状态应用部署了，直接采用deployment无状态应用部署的控制器，字段配置和eureka服务的statefulset配置参数几乎是一样的，微服务的各个程序也都采用有deployment控制器去部署，每个程序的yaml文件也只有名字、使用的镜像不同，其余所有参数均一致。

gateway是网关服务，需要配置一个ingress和service资源，将其发布在集群之外。

字段配置和statefulset的一致，不再做注释信息

```yaml
# vim gateway-deploy.yaml
---
#ingress资源YAML
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: gateway 
  namespace: simple-ms 
spec:
  rules:
    - host: gateway.jiangxl.com 
      http:
        paths:
        - path: /
          backend:
            serviceName: gateway
            servicePort: 8080

---
#service资源YAML
apiVersion: v1
kind: Service
metadata:
  name: gateway
  namespace: simple-ms
spec:
  ports:
  - port: 8080
    name: gateway
  selector:
    project: simple
    app: gateway

---
#deployment资源YAML
apiVersion: apps/v1
kind: Deployment 
metadata:
  name: gateway
  namespace: simple-ms 
spec:
  replicas: 1         #副本数设置1个，后续再加
  selector:
    matchLabels:
      project: simple
      app: gateway
  template:
    metadata:
      labels:
        project: simple 
        app: gateway
    spec:
      imagePullSecrets:
      - name: registry-pull-secret
      containers:
      - name: gateway
        image: 192.168.20.11/simple-microservice/gateway-service:v1
        imagePullPolicy: Always
        ports:
          - protocol: TCP
            containerPort: 8080 
        resources:
          requests:
            cpu: 0.5
            memory: 256Mi
          limits:
            cpu: 1
            memory: 1Gi
        readinessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
        livenessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
```

#### 4.3.3.在K8S集群中部署Gateway网关服务

```sh
1.部署网关服务
[root@binary-k8s-master1 k8s]\# kubectl apply -f gateway-deploy.yaml

2.查看gateway pod资源的状态
[root@binary-k8s-master1 k8s]\# kubectl get pod -n simple-ms
NAME                       READY   STATUS    RESTARTS   AGE
eureka-0                   1/1     Running   1          2d12h
eureka-1                   1/1     Running   0          2d12h
eureka-2                   1/1     Running   0          2d12h
gateway-7c687f6c45-mcwpf   1/1     Running   0          2m2s

3.查看deployment和svc的资源状态
[root@binary-k8s-master1 k8s]\# kubectl get deploy,svc -n simple-ms
NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/gateway   1/1     1            1           17h

NAME              TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
service/eureka    ClusterIP   None         <none>        8080/TCP   2d13h
service/gateway   ClusterIP   10.0.0.188   <none>        8080/TCP   17h

4.查看gateway ingress资源状态
[root@binary-k8s-master1 k8s]\# kubectl get ingress -n simple-ms
NAME      CLASS    HOSTS                 ADDRESS      PORTS   AGE
eureka    <none>   eureka.jiangxl.com    10.0.0.107   80      2d13h
gateway   <none>   gateway.jiangxl.com   10.0.0.107   80      17h
```

### 4.4.编写快速部署微服务到K8S集群的脚本

由于微服务程序众多，并且每个程序在K8S集群部署的流程也基本一样，因此我们编写一个部署脚本，只要准备好程序的jar包以及资源YAML文件就可以将其一键部署到K8S集群，当前也可以通过Helm来实现。

**1.脚本内容**

实现逻辑：

1.将harbor仓库的地址、所有微服务的名称、k8s yaml文件的路径、微服务代码所在的路径都定义成环境变量。

2.如果只想部署其中一个微服务的话，通过位置传参的方式来实现，也就是再定义一个微服务名称的变量，变量值为KaTeX parse error: Expected '}', got 'EOF' at end of input: {1:-{service_list}}，将要部署的微服务名称通过位置传参的方式，将值传入到service_list变量名里，覆盖原service_list变量值，实现单个微服务的部署，如果没有使用位置参数，那么默认部署全部的微服务。

3.进入微服务代码所在的路径。然后通过for循环的方式，遍历service_list变量中的各个微服务，然后本次循环的微服务代码路径，判断是否有包含biz的目录，如果有biz目录则切入到biz目录，然后通过变量的形式定义镜像名称，构建镜像、推送至镜像仓库。

4.将最新打包好的docker进在yaml文件中通过sed命令替换，最后在k8s集群中部署这个微服务。

`${1:-${service_list}}`：这个的意思就是如果`$1`位置参数没有传入值，那么service_list变量的值就是`$service_list`变量的值，相当于一个判断。

本脚本可以自动化完成微服务到K8S集群的一个部署，包括程序的编译、打包成docker镜像、推荐镜像到Harbor仓库，最后将程序部署到K8S集群

```shell
#!/bin/bash
registry_addr=192.168.20.11
service_list="eureka-service gateway-service order-service product-service stock-service portal-service"
service_list=${1:-${service_list}}      
current_dir=/root/springcloud/simple-microservice-dev1/k8s
service_dir=$(dirname $current_dir)

cd $service_dir
#mvn clean package -Dmaven.test.skip=true

for service in $service_list; do
   cd $service_dir/$service
   biz_count=`ls | grep biz | wc -l`
   if [ $biz_count -eq 1 ];then
      cd ${service}-biz
   fi
   service_name=`echo $service | awk -F- '{print $1}'`
   image_name=${registry_addr}/simple-microservice/${service}:v1
   yaml_name=${service_name}-deploy.yaml
   docker build -t ${image_name} .
   docker push ${image_name}
   sed -i -r "s#(image: )(.*)#\1$image_name#" ${current_dir}/${yaml_name}
   kubectl apply -f ${current_dir}/${yaml_name}
done
```

**2.脚本使用方式**

执行本脚本前提是必须先将程序部署的YAML文件准备好，放在/root/springcloud/simple-microservice-dev1/k8s路径

```sh
脚本的用法：
sh deploy_k8s.sh 微服务名称
```

### 4.5.使用脚本部署Order订单服务

#### 4.5.1.编写资源部署YAML文件

```yaml
# vim order-deploy.yaml 
apiVersion: apps/v1
kind: Deployment 
metadata:
  name: order
  namespace: simple-ms 
spec:
  replicas: 1
  selector:
    matchLabels:
      project: simple
      app: order
  template:
    metadata:
      labels:
        project: simple 
        app: order
    spec:
      imagePullSecrets:
      - name: registry-pull-secret
      containers:
      - name: order
        image: 192.168.20.11/simple-microservice/order-service:v1
        imagePullPolicy: Always
        ports:
          - protocol: TCP
            containerPort: 8080 
        resources:
          requests:
            cpu: 0.5
            memory: 256Mi
          limits:
            cpu: 1
            memory: 1Gi
        readinessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
        livenessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
```

#### 4.5.2在K8S集群中部署Order订单服务

**1.使用脚本将Order服务部署到K8S集群**

```sh
[root@binary-k8s-master1 k8s]\# sh deploy_k8s.sh order-service

执行完脚本，order程序的docker镜像已经制作好并且推送到了harbor仓库，已经使用sed命令将镜像的名称在yaml中替换成了最新的镜像，部署到了K8S集群
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/be81d4ca75f14ea1afd933b7e4f34ea5.png)

**2.查看程序资源的状态**

```sh
1.查看pod的状态
[root@binary-k8s-master1 k8s]\# kubectl get all -n simple-ms
NAME                          READY   STATUS    RESTARTS   AGE
pod/eureka-0                  1/1     Running   1          2d15h
pod/eureka-1                  1/1     Running   0          2d15h
pod/eureka-2                  1/1     Running   0          2d15h
pod/gateway-8665d5d56-tx2m8   1/1     Running   0          39m
pod/order-6694f4c474-cp5d6    1/1     Running   0          35m

2.查看deployment资源的状态
[root@binary-k8s-master1 k8s]\# kubectl get deploy -n simple-ms
NAME      READY   UP-TO-DATE   AVAILABLE   AGE
gateway   1/1     1            1           21h
order     1/1     1            1           36m
```

### 4.6.使用脚本部署Product商品服务

#### 4.6.1.编写资源部署YAML文件

```yaml
# vim product-deploy.yaml 
apiVersion: apps/v1
kind: Deployment 
metadata:
  name: product
  namespace: simple-ms 
spec:
  replicas: 1
  selector:
    matchLabels:
      project: simple
      app: product
  template:
    metadata:
      labels:
        project: simple 
        app: product
    spec:
      imagePullSecrets:
      - name: registry-pull-secret
      containers:
      - name: product
        image: 192.168.20.11/simple-microservice/product-service:v1
        imagePullPolicy: Always
        ports:
          - protocol: TCP
            containerPort: 8080 
        resources:
          requests:
            cpu: 0.5
            memory: 256Mi
          limits:
            cpu: 1
            memory: 1Gi
        readinessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
        livenessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10

```

#### 4.6.2.在K8S集群中熟不熟Product商品服务

**1.使用脚本在K8S集群中部署product服务**

```sh
[root@binary-k8s-master1 k8s]\# sh deploy_k8s.sh product-service
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/72e772fd74a1497188734a6e1fd3d28e.png)

**2.查看程序资源的状态**

```sh
1.查看pod的状态
[root@binary-k8s-master1 k8s]\# kubectl get pod -n simple-ms
NAME                       READY   STATUS    RESTARTS   AGE
eureka-1                   1/1     Running   3          2d16h
eureka-2                   1/1     Running   2          2d16h
gateway-8665d5d56-tx2m8    1/1     Running   2          74m
order-6694f4c474-cp5d6     1/1     Running   4          69m
product-77c8bb6847-vbxnr   1/1     Running   2          21m

2.查看deployment资源的状态
[root@binary-k8s-master1 k8s]\# kubectl get deploy -n simple-ms
NAME      READY   UP-TO-DATE   AVAILABLE   AGE
gateway   1/1     1            1           21h
order     1/1     1            1           72m
product   1/1     1            1           24m
```

### 4.7.使用脚本部署Stock库存服务

#### 4.7.1.编写资源部署YAML文件

```yaml
# vim product-deploy.yaml 
apiVersion: apps/v1
kind: Deployment 
metadata:
  name: product
  namespace: simple-ms 
spec:
  replicas: 1
  selector:
    matchLabels:
      project: simple
      app: product
  template:
    metadata:
      labels:
        project: simple 
        app: product
    spec:
      imagePullSecrets:
      - name: registry-pull-secret
      containers:
      - name: product
        image: 192.168.20.11/simple-microservice/product-service:v1
        imagePullPolicy: Always
        ports:
          - protocol: TCP
            containerPort: 8080 
        resources:
          requests:
            cpu: 0.5
            memory: 256Mi
          limits:
            cpu: 1
            memory: 1Gi
        readinessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
        livenessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
```

#### 4.7.2.在K8S集群中部署Stock库存服务

**1.使用脚本在K8S集群中部署stock服务**

```sh
[root@binary-k8s-master1 k8s]\# sh deploy_k8s.sh stock-service
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/34720b14a59e4d8e97e5d887beff8a9d.png)

**2.查看程序资源的状态**

```sh
1.查看pod的状态
[root@binary-k8s-master1 ~]\# kubectl get pod -n simple-ms
NAME                       READY   STATUS    RESTARTS   AGE
eureka-0                   1/1     Running   5          2d16h
eureka-1                   1/1     Running   3          2d16h
eureka-2                   1/1     Running   2          2d16h
gateway-8665d5d56-tx2m8    1/1     Running   2          112m
order-6694f4c474-cp5d6     1/1     Running   4          107m
product-77c8bb6847-vbxnr   1/1     Running   2          59m
stock-6cf98bb445-mxf7b     1/1     Running   0          30m

2.查看deployment资源的状态
[root@binary-k8s-master1 ~]\# kubectl get deploy -n simple-ms
NAME      READY   UP-TO-DATE   AVAILABLE   AGE
gateway   1/1     1            1           22h
order     1/1     1            1           108m
product   1/1     1            1           60m
stock     2/2     2            2           31m
```

### 4.8.使用脚本部署Portal前端首页

#### 4.8.1.编写资源部署YAML文件

```yaml
# vim portal-deploy.yaml 
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: portal 
  namespace: simple-ms 
spec:
  rules:
    - host: portal.jiangxl.com 
      http:
        paths:
        - path: /
          backend:
            serviceName: portal 
            servicePort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: portal
  namespace: simple-ms
spec:
  ports:
  - port: 8080
    name: portal 
  selector:
    project: simple
    app: portal
---
apiVersion: apps/v1
kind: Deployment 
metadata:
  name: portal
  namespace: simple-ms 
spec:
  replicas: 1
  selector:
    matchLabels:
      project: simple
      app: portal
  template:
    metadata:
      labels:
        project: simple 
        app: portal
    spec:
      imagePullSecrets:
      - name: registry-pull-secret
      containers:
      - name: portal
        image: 192.168.20.11/simple-microservice/portal-service:v1
        imagePullPolicy: Always
        ports:
          - protocol: TCP
            containerPort: 8080 
        resources:
          requests:
            cpu: 0.5
            memory: 256Mi
          limits:
            cpu: 1
            memory: 1Gi
        readinessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
        livenessProbe:
          tcpSocket:
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10

```

#### 4.8.2.在K8S集群中熟不熟Portal存服务

**1.使用脚本在K8S集群中部署portal服务**

```sh
[root@binary-k8s-master1 k8s]\# sh deploy_k8s.sh portal-service
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/c452fabffdb24a97b0ec5dbfc8dbe6b5.png)

**2.查看程序资源的状态**

到此为止，所有的simple电商平台的微服务程序以及全部部署完毕。

```sh
1.查看所有微服务的程序
[root@binary-k8s-master1 k8s]\# kubectl get all -n simple-ms
NAME                           READY   STATUS    RESTARTS   AGE
pod/eureka-0                   1/1     Running   5          2d16h
pod/eureka-1                   1/1     Running   3          2d16h
pod/eureka-2                   1/1     Running   2          2d16h
pod/gateway-8665d5d56-tx2m8    1/1     Running   2          117m
pod/order-6694f4c474-cp5d6     1/1     Running   4          112m
pod/portal-d5d55b784-7kntp     1/1     Running   0          2m53s
pod/product-77c8bb6847-vbxnr   1/1     Running   2          64m
pod/stock-6cf98bb445-mxf7b     1/1     Running   0          35m

NAME              TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
service/eureka    ClusterIP   None         <none>        8080/TCP   2d18h
service/gateway   ClusterIP   10.0.0.188   <none>        8080/TCP   22h
service/portal    ClusterIP   10.0.0.190   <none>        8080/TCP   2m53s

NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/gateway   1/1     1            1           22h
deployment.apps/order     1/1     1            1           112m
deployment.apps/portal    1/1     1            1           2m53s
deployment.apps/product   1/1     1            1           65m
deployment.apps/stock     1/1     1            1           35m

NAME                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/gateway-8665d5d56    1         1         1       117m
replicaset.apps/order-6694f4c474     1         1         1       112m
replicaset.apps/portal-d5d55b784     1         1         1       2m53s
replicaset.apps/product-77c8bb6847   1         1         1       64m
replicaset.apps/stock-6cf98bb445     1         1         1       35m

NAME                      READY   AGE
statefulset.apps/eureka   3/3     2d18h

2.查看所有微服务的ingress资源
[root@binary-k8s-master1 k8s]\# kubectl get ingress -n simple-ms
NAME      CLASS    HOSTS                 ADDRESS      PORTS   AGE
eureka    <none>   eureka.jiangxl.com    10.0.0.107   80      2d18h
gateway   <none>   gateway.jiangxl.com   10.0.0.107   80      22h
portal    <none>   portal.jiangxl.com    10.0.0.107   80      3m16s
```

### 4.9.查看Eureka注册中心中各个微服务的信息

每个微服务程序均在Eureka注册中心中注册完成。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/feae01f050a440ed92aa5f948efd875f.png)

### 4.10.使用simple微服务电商平台

到4.8步骤之后，我们的simple微服务电商平台已经全部部署在K8S集群了，可以在本机hosts里绑定simple微服务的域名，操作电商平台。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/11d0320836a54e1b96d6e6801bdb9f8b.png)

这个微服务平台的背景图其实是京东的一张图而已，是不可以点的。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/5de80a8717554409af8d9a14b6462e30.png)

只能在商品服务中查询能购买的商品，然后进行购买，最后在订单服务中查询。

搜索商品时会调用product商品微服务，下单后，查询订单服务时会调用order订单服务。

点击查询商品服务，我们来下单一个美女观察一下效果，下单后会提示下单成功。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/2776324a762543f5a9df8fc3fc0f6e19.png)

点击查询订单服务就可以看到我吗下的订单了

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/91eee91044a3497986b5f0f788a95738.png)

## 5.基于K8S集群的微服务的扩容与升级

### 5.1.微服务的扩容

微服务在物理机环境运行时，网站并发量高的情况下，扩容只能去购买云服务器，然后搭建一套一模一样的服务，手动组成负载均衡集群，增加一台其实还好，如果要增加几十台，太费人工成本了。

当微服务迁移到K8S集群之后，扩容其实变得非常简单，只需要增加程序Pod的副本数就可以完成程序的扩容。

命令如下，以扩展order商品微服务为例。

```sh
将order商品服务的副本数调整为3个，原本是1个，现在扩容到3个
[root@binary-k8s-master1 k8s]\# kubectl scale deploy order --replicas=3 -n simple-ms
deployment.apps/order scaled

可以看到order订单服务目前已经有3个pod副本了
[root@binary-k8s-master1 ~]\# kubectl get pod -n simple-ms
NAME                       READY   STATUS    RESTARTS   AGE
eureka-0                   1/1     Running   1          6m15s
eureka-1                   1/1     Running   0          7m59s
eureka-2                   1/1     Running   1          9m40s
gateway-848874fc9d-pwp9w   1/1     Running   0          48m
order-6694f4c474-cp5d6     1/1     Running   4          3h29m
order-6694f4c474-kh8hm     1/1     Running   0          96s
order-6694f4c474-rg7kw     1/1     Running   0          96s
portal-6fdcd765bd-mtq68    1/1     Running   1          24m
product-784d9f77b5-rxsf2   1/1     Running   0          64m
stock-6cf98bb445-l8gxb     1/1     Running   0          133m

缩容也很简单，将order的副本数缩减成1个
[root@binary-k8s-master1 k8s]\# kubectl scale deploy order --replicas=1 -n simple-ms
deployment.apps/order scaled

成功缩减到1个副本
[root@binary-k8s-master1 ~]\# kubectl get pod -n simple-ms
NAME                       READY   STATUS    RESTARTS   AGE
eureka-0                   1/1     Running   1          9m24s
eureka-1                   1/1     Running   0          11m
eureka-2                   1/1     Running   1          12m
gateway-848874fc9d-pwp9w   1/1     Running   0          51m
order-6694f4c474-rg7kw     1/1     Running   0          4m45s
portal-6fdcd765bd-mtq68    1/1     Running   1          27m
product-784d9f77b5-rxsf2   1/1     Running   0          67m
stock-6cf98bb445-l8gxb     1/1     Running   0          136m
```

### 5.2.微服务的升级

微服务在物理机环境更新时只需要拉取最新的代码，编译成jar包，在服务器上部署就可以了，但是微服务迁移到K8S集群之后，更新过程就变得比较复杂了，首先更新的代码，然后编译成jar包，再通过Dockerfile将jar包做成docker镜像，然后在k8s集群中部署，当然这些流程可以通过Jenkins实现自动化上线。

#### 5.2.1.微调Portal前端首页的代码

将平台的这些文件修改成jiangxl.com的内容完成一次portal前端首页的升级

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/6fff8cf3680744d9bd8f4340015acf60.png)

首先找到记录这些文字的文件

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/c8b660cdf01f4e92aed03aa0005f48a4.png)

```sh
# vim templates/index.ftl
# vim templates/orderList.ftl 
# vim templates/productList.ftl

进入文件后在末行模式输入：
%s/容器学院 www.ctnrs.com/jiangxl.com/g
%s/www.ctnrs.com/jiangxl.com/g
然后将所有的容器学院的文字删除
```

#### 5.2.2.编译最新代码

```sh
[root@binary-k8s-master1 simple-microservice-dev1]\# mvn clean package -D maven.test.skip=true -P prod
```

#### 5.2.3.通过脚本将Protal最新代码打包成镜像

直接使用前面部署程序的脚本即可

```sh
[root@binary-k8s-master1 k8s]\# sh deploy_k8s.sh portal-service
```

#### 5.2.4.升级K8S集群中的Protal微服务

```sh
[root@binary-k8s-master1 k8s]\# kubectl -n simple-ms set image deployment portal portal=192.168.20.11/simple-microservice/portal-service:v1 --record
```

程序更新完成后刷新页面就可以看到我们更新的页面内容

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmlhbmd4bH4=,size_20,color_FFFFFF,t_70,g_se,x_16.png)