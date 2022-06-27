# ELK basic 

## ES 集群部署

环境：

| 角色  | 主机、IP     |
| ----- | ------------ |
| es-01 | 172.16.1.128 |
| es-02 | 172.16.1.134 |
| es-03 | 172.16.1.136 |

`ES`启动时不允许`root`用户运行，所以在部署之前单独为其创建一个账户，用来专门管理`es`：

```bash
useradd esuser
echo 123 | passwd --stdin esuser
# 将 esuser 用户添加进无密码sudoers
echo "esuser ALL = (root) NOPASSWD:ALL" | tee /etc/sudoers.d/es
chmod 0440 /etc/sudoers.d/es
# 为之后的es数据和日志创建目录
mkdir /es/data -pv
mkdir /es/logs
chown -R esuser:esuser /es
chown -R esuser:esuser /usr/local/elasticsearch-7.7.1/
# ------ 切换到 esuser 用户，下面的所有操作都使用 esuser 用户
su esuser
```

安装`ES`之前，需要安装`JDK`，该步骤在此就不再赘述。

从官方站点下载`ES`的压缩包， 并解压到指定目录当中去：

```bash
tar xf elasticsearch-7.7.1-linux-x86_64.tar.gz -C /usr/local
cd /usr/local/elasticsearch-7.7.1
```

修改配置文件`config/elasticsearch.yml`：

```bash
# vim config/elasticsearch.yml
# 集群名称，默认是elasticsearch，通过组播的方式通信，通过名称判断属于哪个集群
cluster.name: es-cluster
# 是否可以成为master节点
node.master: true
# 是否允许该节点存储数据,默认开启
node.data: true
# 节点名称，要唯一
node.name: es-01
# 数据存放位置
path.data: /es/data
# 日志存放位置
path.logs: /es/logs
# 网络绑定,这里我绑定 0.0.0.0,支持外网访问
network.host: 0.0.0.0
# 设置对外服务的http端口，默认为9200
http.port: 9200
# 设置节点间交互的tcp端口,默认是9300
transport.tcp.port: 9300
# 集群最少master数量
discovery.zen.minimum_master_nodes: 2
discovery.zen.ping_timeout: 3s
# 初始化时可进行选举的节点，不填端口默认为9300
discovery.zen.ping.unicast.hosts: ["es-01", "es-02", "es-03"]
# 支持跨域访问
http.cors.enabled: true
http.cors.allow-origin: "*"
# Bootstrap the cluster using an initial set of master-eligible nodes:
# 手动指定可初始化的master节点
cluster.initial_master_nodes: ["es-01"]
```

修改完配置文件之后，启动`es`节点：

```bash
bin/elasticsearch -d
```

>:warning:启动时可能报出如下错误：
>
>```bash
>[1]: max file descriptors [4096] for elasticsearch process is too low, increase to at least [65535]
>[2]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
>max file descriptors [4096] for elasticsearch process is too low, increase to at least [65535]
>```
>
>解决方法：
>
>```bash
>sudo vim /etc/security/limits.conf
># ----- 添加如下内容 ------
>* soft nofile 65536
>* hard nofile 65536
>* soft nproc 4096
>* hard nproc 4096
># -------------------------
># 可以使用 `ulimit -Hn` 命令进行查看
>sudo echo "vm.max_map_count=262144" >> /etc/sysctl.conf && sysctl -p
>```
>
>修改完毕之后，重新打开当前终端使其生效。

测试`es`对外提供服务的`HTTP`端口：

```bash
[root@es-01 ~]\# curl es-01:9200
{
  "name" : "es-01",
  "cluster_name" : "es-cluster",
  "cluster_uuid" : "B6--eo9YQC62LNyo0JiLIw",
  "version" : {
    "number" : "7.7.1",
    "build_flavor" : "default",
    "build_type" : "tar",
    "build_hash" : "ad56dce891c901a492bb1ee393f12dfff473a423",
    "build_date" : "2020-05-28T16:30:01.040088Z",
    "build_snapshot" : false,
    "lucene_version" : "8.5.1",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

将配置文件复制到其他节点上去：

```bash
scp conf/elasticsearch.yml es-02:/usr/local/elasticsearch-7.7.1/conf
scp conf/elasticsearch.yml es-03:/usr/local/elasticsearch-7.7.1/conf
```

同样，在其他节点上，进行与之前相同的操作，唯一需要修改的就是其配置文件的`node.name`：

```bash
vim config/elasticsearch.yml
# --------- es-02 ---------
node.name: es-02
# --------- es-03 ---------
node.name: es-03
```

最后，启动各节点的`ES`服务：`bin/elasticsearch -d`

## Logstash

logstash 同样依赖于`JDK`环境，需要提前安装。

从官方站点下载 logstash 的压缩包，并解压到指定目录：

```bash
tar xf logstash-7.7.1-linux-x86_64.tar.gz -C /usr/local
cd /usr/local/logstash-7.7.1
```

启动`logstash`：

```bash
# 快速启动测试，标准输入输出作为input和output
bin/logstash -e 'input { stdin {} } output { stdout {} }'

* 常用启动参数说明：
`-e`: 立即执行，使用命令行里的配置参数启动实例
`-f`: 指定启动实例的配置文件	
`-t`: 测试配置文件的正确性	
`-l`: 指定日志文件名称	
`-w`: 指定filter线程数量，默认线程数是5	
```

## Kibana

从官方站点下载 Kibana 的压缩包，并解压到指定目录：

```bash
 tar xf kibana-7.7.1-linux-x86_64.tar.gz -C /usr/local/
 cd /usr/local/kibana-7.7.1-linux-x86_64
```

启动`kibana`，`bin/kibana`

## 其他

官方均提供有制作好的`RPM`、`DEB`和适用于`Windows`下的二进制包，可以直接下载安装使用：

```bash
# 以redhat系为例
yum localinstall -y kibana-7.7.1-x86_64.rpm
```

## 附：es 环境脚本

```bash
useradd esuser
echo 123 | passwd --stdin esuser
# 将 esuser 用户添加进无密码sudoers
echo "esuser ALL = (root) NOPASSWD:ALL" | tee /etc/sudoers.d/es
chmod 0440 /etc/sudoers.d/es
# 为之后的es数据和日志创建目录
mkdir /es/data -pv
mkdir /es/logs
chown -R esuser:esuser /es
chown -R esuser:esuser /usr/local/elasticsearch-7.7.1/
# ------ 切换到 esuser 用户，下面的所有操作都使用 esuser 用户
cat << EOF >> /etc/security/limits.conf
* soft nofile 65536
* hard nofile 65536
* soft nproc 4096
* hard nproc 4096
EOF

sudo echo "vm.max_map_count=262144" >> /etc/sysctl.conf && sysctl -p
su - esuser
```

