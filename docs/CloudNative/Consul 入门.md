# Consul 入门 

## Consul 简介

Consul 是基于 GO 语言开发的开源工具，主要面向分布式，服务化的系统提供服务注册、服务发现和配置管理的功能。Consul 提供服务注册/发现、健康检查、Key/Value存储、多数据中心和分布式一致性保证等功能。之前我们通过 Prometheus 实现监控，当新增一个 Target 时，需要变更服务器上的配置文件，即使使用 file_sd_configs 配置，也需要登录服务器修改对应 Json 文件，会非常麻烦。不过 Prometheus 官方支持多种自动服务发现的类型，其中就支持 Consul。

### Consul 基础架构

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/promethues%20%2B%20consul/consul-arch.png)

## Consul 安装与配置

### 使用官方二进制包

官方下载站点：https://www.consul.io/downloads.html

```bash
wget https://releases.hashicorp.com/consul/1.7.2/consul_1.7.2_linux_amd64.zip
unzip consul_1.7.2_linux_amd64.zip
```

解压完成之后发现只有一个二进制程序，即`consul`，将其添加至环境变量，或者直接链接到环境变量当中去.

```bash
ln -sv /root/consul /usr/bin/consul
```

查看`consul`是否成功配置：

```bash
[root@master ~]\# consul -v
Consul v1.7.2
Protocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol >2 when speaking to compatible agents)
```

启动一个`consul agent`（开发模式）：

```bash
[root@master ~]\# ./consul agent -dev   
==> Starting Consul agent...
           Version: 'v1.7.2'
           Node ID: '23e32a9f-73d8-48c9-27e9-adb38a069a83'
         Node name: 'master'
        Datacenter: 'dc1' (Segment: '<all>')
            Server: true (Bootstrap: false)
       Client Addr: [127.0.0.1] (HTTP: 8500, HTTPS: -1, gRPC: 8502, DNS: 8600)
      Cluster Addr: 127.0.0.1 (LAN: 8301, WAN: 8302)
           Encrypt: Gossip: false, TLS-Outgoing: false, TLS-Incoming: false, Auto-Encrypt-TLS: false
           ...
```

切记，不要在生产环境中使用开发模式。

此时打开浏览器，输入http://127.0.0.1:8500 即可看到 consul 的web端

通过在新的终端窗口中运行`consul Members`命令，检查Consul数据中心的成员身份，输出内容列出了数据中心中的代理（目前只有主机自己）：

```bash
[root@master ~]\# consul members
Node    Address         Status  Type    Build  Protocol  DC   Segment
master  127.0.0.1:8301  alive   server  1.7.2  2         dc1  <all>
```

获取节点详细信息可以使用：`curl localhost:8500/v1/catalog/nodes`

除了HTTP API，您还可以使用DNS接口来发现节点：`dig @127.0.0.1 -p 8600 master.node.consul`

停止代理：

```bash
consul leave
```

### 使用 Docker 部署

1. 首先从 Docker Hub 上拉取镜像：`docker pull consul`

2. 在启动集群之前，建立 `/data/consul` 文件夹, 用于保存 consul 的数据，`mkdir -pv /data/consul`

3. 在本地启动 Consul 集群进行测试：

```bash
docker run -d -p 8500:8500 -v /data/consul:/consul/data -e CONSUL_BIND_INTERFACE='eth0' --name=consul1 consul agent -server -bootstrap -ui -client='0.0.0.0'

* 参数说明：
    agent: 表示启动 agent 进程
    server: 表示 consul 为 server 模式
    client: 表示 consul 为 client 模式
    bootstrap: 表示这个节点是 Server-Leader
    ui: 启动 Web UI, 默认端口 8500
    node: 指定节点名称, 集群中节点名称唯一
    client: 绑定客户端接口地址, 0.0.0.0 表示所有地址都可以访问
    datacenter:要创建多个datacenter的话，需要指定该参数

# 下面创建了3个Server，使用`--bootstrap-expect`来触发选举功能
# docker run -d --name=consul1 -p 8500:8500 -e CONSUL_BIND_INTERFACE=eth0 consul agent --server=true --bootstrap-expect=3 --client=0.0.0.0 -ui --datacenter=dc2
* 关联dc1和dc2
docker exec -it [CONSUL_SERVER] consul join -wan 172.17.0.2  
```

一般第一个容器的ip地址是` 172.17.0.2`，可以通过下面的命令查询容器ip：

```bash
docker inspect --format '【【 .NetworkSettings.IPAddress 】】' consul1
```

4. 添加节点

```bash
docker run -d --name=consul2 -e CONSUL_BIND_INTERFACE='eth0' consul agent --server=false --client=0.0.0.0 --join 172.17.0.2		# join加入集群
docker run -d --name=consul3 -e CONSUL_BIND_INTERFACE='eth0' consul agent --server=false --client=0.0.0.0 --join 172.17.0.2		# join加入集群
```

5. 查看容器中集群节点

```bash
[root@master ~]\# docker exec -it consul1 consul members
Node          Address          Status  Type    Build  Protocol  DC   Segment
8b90d158b4f5  172.17.0.2:8301  alive   server  1.7.2  2         dc1  <all>
3a639e89644c  172.17.0.5:8301  alive   client  1.7.2  2         dc1  <default>
a21fff77c185  172.17.0.4:8301  alive   client  1.7.2  2         dc1  <default>
```

#### 使用 docker-compose 快速部署

创建`docker-compose.yml `文件，内容如下：

```bash
version: "3.0"

services:
    # consul server，对外暴露的ui接口为8500，只有在2台consul服务器的情况下集群才起作用
    consulserver:
        image: consul:latest
        hostname: consulserver
        ports:
            - "8300"
            - "8400"
            - "8500:8500"
            - "53"
        command: agent -server --bootstrap-expect=3 -ui -client='0.0.0.0' 

    # consul server1在consul server服务起来后，加入集群中
    consulserver1:
        image: consul:latest
        hostname: consulserver1
        depends_on:
            - "consulserver"
        ports:
            - "8300"
            - "8400"
            - "8500"
            - "53"
        command: agent --server=true --client=0.0.0.0 --join consulserver

    # consul server2在consul server服务起来后，加入集群中
    consulserver2:
        image: consul:latest
        hostname: consulserver2
        depends_on:
            - "consulserver"
        ports:
            - "8300"
            - "8400"
            - "8500"
            - "53"
        command: agent --server=true --client=0.0.0.0 --join consulserver
   
   # 添加registrator，如果服务已停止，则从注册中心中移除
   registrator:
        image: gliderlabs/registrator:master
        hostname: registrator
        depends_on:
       		- "consulserver"
        volumes:
        	- "/var/run/docker.sock:/tmp/docker.sock"
        command: -internal consul://consulserver:8500
```

然后运行：`docker-compose up -d`即可

### 服务注册

编写测试服务，在这里我使用 nginx 来进行测试.

将下面的内容保存成文件`nginx.json`，并上传到容器的`/consul/config`目录中，或者容器创建时指明存储卷也可.

```bash
{
    "ID": "test-nginx",
    "Name": "test-nginx",
    "Tags": [
        "test",
        "nginx"
    ],
    "address":"172.16.1.132",
    "port":8080,
    "Meta": {
        "X-TAG": "test_nginx"
    },
    "EnableTagOverride": false,
    "Check": {
#        "DeregisterCriticalServiceAfter": "90m",
        "http":"http://172.16.1.132:8080/",
        "Interval": "10s"
    }
}
```

将文件复制到容器中，并重载服务：

```bash
docker cp nginx.json consul2:/consul/config
docker exec consul2 consul reload
```

或者直接使用`HTTP API`的方式进行注册：

```bash
curl -X PUT -d '{"id": "nginx","name": "nginx","address": "172.16.1.132","port": 80,"checks": [{"http": "http://172.16.1.132/","interval": "5s"}]}' http://127.0.0.1:8500/v1/agent/service/register
# 或者
curl -X PUT --data @nginx.json http://127.0.0.1:8500/v1/agent/service/register
```

注销服务使用：`curl -X PUT http://172.16.1.132:8500/v1/agent/service/deregister/nginx_test`

查看服务健康状态检查：

打开浏览器访问：http://172.16.1.132:8500/v1/health/service/test-nginx 即可.

## 参考链接

* Consul Get-Started ： https://learn.hashicorp.com/consul/getting-started/agent
* Consul Arch ：https://www.consul.io/docs/internals/architecture.html

