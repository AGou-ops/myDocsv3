# Docker中直接部署三节点es

以下仅记录关键步骤：

#### 拉取镜像

```bash
docker pull elasticsearch:7.7.1
```

#### 修改配置文件

`elasticsearch.yml`配置文件内容如下：

```bash
# bin/elasticsearch-certutil ca -out certs/elastic-certificates.p12 -pass ""
#添加如下配置
cluster.name: es-cluster
node.name: es01
node.master: true
node.data: true
network.host: 0.0.0.0
network.publish_host: 172.26.127.100
http.port: 9200
transport.tcp.port: 9300
discovery.seed_hosts: ["172.26.127.100","172.26.127.96","172.26.127.99"]
cluster.initial_master_nodes: ["172.26.127.100","172.26.127.96","172.26.127.99"]
http.cors.enabled: true
http.cors.allow-origin: "*"

xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true
xpack.security.transport.ssl.verification_mode: certificate 
xpack.security.transport.ssl.keystore.path: elastic-certificates.p12 
xpack.security.transport.ssl.truststore.path: elastic-certificates.p12 
```

各节点之间配置文件基本相同，不同之处就是`node.name`需要在集群内是唯一的。

#### 启动容器

使用证书来保证各节点之间的安全交流：

```bash
# 建一个测试的容器，进入到里面，生成证书文件
bin/elasticsearch-certutil ca -out certs/elastic-certificates.p12 -pass ""
```

在各节点中启动es（并挂载上面写好的配置文件的和用于主机之间的安全证书文件）：

```bash
docker run --name elasticsearch -p 9200:9200 -p 9300:9300    \
--privileged=true   \
--hostname elasticsearch  \
--restart=on-failure:3   \
-e ES_JAVA_OPTS="-Xms2g -Xmx2g"    \
-v /root/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml   \
-v /root/elasticsearch/config/elastic-certificates.p12:/usr/share/elasticsearch/config/elastic-certificates.p12   \
-v /root/elasticsearch/data:/usr/share/elasticsearch/data   \
-v /root/elasticsearch/plugins:/usr/share/elasticsearch/plugins   \
-d elasticsearch:7.7.1
```

进入任一节点中，生成相关的密码：

```bash
# 手动设置密码
bin/elasticsearch-setup-passwords interactive
# 自动生成密码
bin/elasticsearch-setup-passwords auto 
```

#### 检查es集群/节点状态

```bash
curl -XGET http://172.26.127.100:9200/_cat/health?v

curl -XGET http://172.26.127.100:9200/_cluster/health?pretty
curl -XGET http://172.26.127.100:9200/_cat/nodes?v
```

