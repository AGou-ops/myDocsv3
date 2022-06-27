[[toc]]

## 1.环境准备

### 1.1.Kubernetes高可用集群部署方式

> 目前生产环境部署Kubernetes建主要有两种方式：
>
> kubeadm：提供kubeadm init和kubeadm join，用于快速部署Kubernetes集群，kubeadm安装的k8s集群，所有的k8s组件都是以pod形式运行。
>
> 二进制包：从github上下载发行版的二进制包，手动部署每个组件，组成kubernetes集群。
>
> Kubeadm降低部署成本，从而屏蔽了很多细节，遇到问题很难排查，如果想更容易可控，推荐使用二进制包部署Kubernetes集群，虽然手动部署麻烦点，期间可以学习很多工作原理，也利于后期维护。

### 1.2.Kubernetes集群弃用docker容器

> 在k8s平台中，为了解决与容器运行时，比如docker的集成问题，在早期社区推出CRI接口，以支持更多的容器，当我们使用Docker作为容器运行时，首先kubelet调用dockershim的CRI容器接口连接docker进程，最后由docker启动容器。
>
> 在k8s1.23版本中，k8s计划弃用kubelet中的dockershim接口，dockershim接口一旦弃用，kubelet去调用CRL时就没有可以与docker建立连接的一个接口，从而导致k8s弃用docker容器。

### 1.3.Kubernetes集群所需的证书

> k8s所有组件均采用https加密通信，这些组件一般由两套根证书生成：一个用于k8s apiserver一个用于etcd数据库。
>
> 按照角色来分，证书分为管理节点和工作节点。
>
> -   管理节点：指controller-manager和scheduler连接apiserver所需的客户端证书。
> -   工作节点：指kubelet和kube-proxy连接apiserver所需要的客户端证书，而一般都会启用Bootstrap TLS机制，所以kubelet的证书初次启动会向apiserver申请颁发证书，由controller-manager组件自动颁发。
> -   图中红线是k8s各个组件通过携带k8s自建证书颁发机构生成的客户端证书访问apiserver，图中蓝线是k8sapiserver组件通过etcd颁发的客户端证书与etcd建立连接。
>
> ![请添加图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/3b600f8680a443168cb556a183c19b3f.png)

### 1.4.环境准备

| 角色               | IP            | 组件                                                         |
| ------------------ | ------------- | ------------------------------------------------------------ |
| binary-k8s-master1 | 192.168.20.10 | kube-apiserver、kube-controller-manage、kube-scheduler、kubelet、kube-proxy、docker、etcd、nginx、keepalived |
| binary-k8s-master2 | 192.168.20.11 | kube-apiserver、kube-controller-manage、kube-scheduler、kubelet、kube-proxy、docker、nginx、keepalived、etcd（扩容节点） |
| binary-k8s-node1   | 192.168.20.12 | kubelet、kube-proxy、docker、etcd                            |
| binary-k8s-node2   | 192.168.20.13 | kubelet、kube-proxy、docker、etcd                            |
| 负载均衡器IP       | 192.168.20.9  | （作用于kube-apiserver的地址）                               |

首先部署一套单master节点的kubernetes集群，然后在增加一台master节点，形成高可用集群。

单master节点的kubernetes集群服务器规划。

| 角色               | IP            | 组件                                                        |
| ------------------ | ------------- | ----------------------------------------------------------- |
| binary-k8s-master1 | 192.168.20.10 | kube-apiserver、kube-controller-manage、kube-schedule、etcd |
| binary-k8s-node1   | 192.168.20.12 | kubelet、kube-proxy、docker、etcd                           |
| binary-k8s-node2   | 192.168.20.13 | kubelet、kube-proxy、docker、etcd                           |

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/ea0354a4d3cc4b6397ee9397f42e35dc.png)

### 1.5.安装cfssl证书生成工具

cfssl是一个开源的证书管理工具，使用json文件生成证书，相比openssl更方便使用。

```bash
[root@binary-k8s-master1 ~]\# wget https://pkg.cfssl.org/R1.2/cfssl_linux-amd64
[root@binary-k8s-master1 ~]\# wget https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64
[root@binary-k8s-master1 ~]\# wget https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64

[root@binary-k8s-master1 ~]\# chmod +x cfssl_linux-amd64 cfssljson_linux-amd64 cfssl-certinfo_linux-amd64

[root@binary-k8s-master1 ~]\# mv cfssl_linux-amd64 /usr/local/bin/cfssl
[root@binary-k8s-master1 ~]\# mv cfssljson_linux-amd64 /usr/local/bin/cfssljson
[root@binary-k8s-master1 ~]\# mv cfssl-certinfo_linux-amd64 /usr/bin/cfssl-certinfo
```


## 2.操作系统初始化配置

```bash
1.关闭防火墙
systemctl stop firewalld 
systemctl disable firewalld

2.关闭selinux
sed -i 's/enforcing/disabled/' /etc/selinux/config 
setenforce 0 

3.关闭交换分区
swapoff -a
sed -ri 's/.*swap.*/#&/' /etc/fstab

4.配置hosts
cat >> /etc/hosts << EOF 
192.168.20.10 binary-k8s-master1
192.168.20.12 binary-k8s-node1
192.168.20.13 binary-k8s-node2
EOF

5.优化内核参数
cat > /etc/sysctl.d/k8s.conf << EOF 
net.bridge.bridge-nf-call-ip6tables = 1 
net.bridge.bridge-nf-call-iptables = 1 
EOF
sysctl --system
```

## 3.部署Etcd集群

etcd是一个分布式键值存储系统，kubernetes使用etcd进行数据存储，为解决etcd单点故障，采用集群方式部署，3台组组建集群，可以坏1台，如果有5台可以坏2台。

| 节点名称 | IP            |
| -------- | ------------- |
| etcd-1   | 192.168.20.10 |
| etcd-2   | 192.168.20.12 |
| etcd-3   | 192.168.20.13 |

### 3.1.使用cfssl证书工具生成etcd证书

**1.生成CA自签颁发机构证书**

```bash
[root@binary-k8s-master1 ~/TLS/etcd]\# vim ca-config.json
{
  "signing": {
    "default": {
      "expiry": "87600h"
    },
    "profiles": {
      "www": {
         "expiry": "87600h",
         "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ]
      }
    }
  }
}

[root@binary-k8s-master1 ~/TLS/etcd]\# vim ca-csr.json
{
    "CN": "etcd CA",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "Beijing",
            "ST": "Beijing"
        }
    ]
}


[root@binary-k8s-master1 ~/TLS/etcd]\# cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
2021/08/27 17:16:49 [INFO] generating a new CA key and certificate from CSR
2021/08/27 17:16:49 [INFO] generate received request
2021/08/27 17:16:49 [INFO] received CSR
2021/08/27 17:16:49 [INFO] generating key: rsa-2048
2021/08/27 17:16:49 [INFO] encoded CSR
2021/08/27 17:16:49 [INFO] signed certificate with serial number 595276170535764345591605360849177409156623041535

```

**2.使用自签CA签发Etcd HTTPS证书**

申请证书的json文件中有一个hosts字段，这个字段的值就是etcd集群的IP地址，可以多写几个IP，作为预留IP，方便扩容etcd集群。

```bash
1.创建证书申请文件
[root@binary-k8s-master1 ~/TLS/etcd]\# vim server-csr.json
{
    "CN": "etcd",
    "hosts": [
    "192.168.20.10",
    "192.168.20.11",			#预留ip
    "192.168.20.12",
    "192.168.20.13"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "BeiJing",
            "ST": "BeiJing"
        }
    ]
}

2.生成证书
[root@binary-k8s-master1 ~/TLS/etcd]\# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=www server-csr.json | cfssljson -bare server
2021/08/27 17:17:08 [INFO] generate received request
2021/08/27 17:17:08 [INFO] received CSR
2021/08/27 17:17:08 [INFO] generating key: rsa-2048
2021/08/27 17:17:08 [INFO] encoded CSR
2021/08/27 17:17:08 [INFO] signed certificate with serial number 390637014214409356442509482537912246480465374076
2021/08/27 17:17:08 [WARNING] This certificate lacks a "hosts" field. This makes it unsuitable for
websites. For more information see the Baseline Requirements for the Issuance and Management
of Publicly-Trusted Certificates, v.1.1.6, from the CA/Browser Forum (https://cabforum.org);
specifically, section 10.2.3 ("Information Requirements").
```

**3.查看生产的证书文件**

```bash
[root@binary-k8s-master1 ~/TLS/etcd]\# ll
总用量 36
-rw-r--r--. 1 root root  288 8月  27 17:16 ca-config.json
-rw-r--r--. 1 root root  956 8月  27 17:16 ca.csr
-rw-r--r--. 1 root root  210 8月  27 17:16 ca-csr.json
-rw-------. 1 root root 1675 8月  27 17:16 ca-key.pem
-rw-r--r--. 1 root root 1265 8月  27 17:16 ca.pem
-rw-r--r--. 1 root root 1021 8月  27 17:17 server.csr
-rw-r--r--. 1 root root  311 8月  27 17:17 server-csr.json
-rw-------. 1 root root 1679 8月  27 17:17 server-key.pem
-rw-r--r--. 1 root root 1346 8月  27 17:17 server.pem
```

### 3.2.部署etcd集群

**1.下载etcd二进制文件**

下载地址：https://github.com/etcd-io/etcd/releases/download/v3.4.9/etcd-v3.4.9-linux-amd64.tar.gz

部署二进制的程序集群最简单的方式就是在其中一台上面部署，然后将所有的文件scp到其他机器上修改配置，一套集群也就完成了。

将下载好的文件上传至所有etcd节点。

etcd配置文件解释

```bash
#[Member]
ETCD_NAME="etcd-1"							#节点名称
ETCD_DATA_DIR="/data/etcd/data"					#数据目录
ETCD_LISTEN_PEER_URLS="https://192.168.20.10:2380"			#集群通信地址
ETCD_LISTEN_CLIENT_URLS="https://192.168.20.10:2379,http://127.0.0.1:2379"		#客户端访问的监听地址，在这里加一个http://127.0.0.1:2379，在当前节点查集群信息时就不需要指定证书去查询了
	
#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.20.10:2380"			#集群通告地址
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.20.10:2379,http://127.0.0.1:2379"					#客户端通告地址，，在这里加一个http://127.0.0.1:2379，在当前节点查集群信息时就不需要指定证书去查询了
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.20.10:2380,etcd-2=https://192.168.20.12:2380,etcd-3=https://192.168.20.13:2380"						#集群节点地址
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"				#集群的唯一标识
ETCD_INITIAL_CLUSTER_STATE="new"						#加入集群的状态，new为新集群，existing表示加入现有集群

```

**2.部署etcd-1节点**

```bash
1.创建程序目录
[root@binary-k8s-master1 ~]\# mkdir /data/etcd/{bin,conf,ssl,data} -p

2.解压二进制文件
[root@binary-k8s-master1 ~]\# tar xf etcd-v3.4.9-linux-amd64.tar.gz

3.将二进制命令移动到制定出程序目录
[root@binary-k8s-master1 ~]\# mv etcd-v3.4.9-linux-amd64/etcd* /data/etcd/bin/

4.编辑配置文件
[root@binary-k8s-master1 ~]\# vim /data/etcd/conf/etcd.conf 
#[Member]
ETCD_NAME="etcd-1"
ETCD_DATA_DIR="/data/etcd/data"
ETCD_LISTEN_PEER_URLS="https://192.168.20.10:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.20.10:2379,http://127.0.0.1:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.20.10:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.20.10:2379,http://127.0.0.1:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.20.10:2380,etcd-2=https://192.168.20.12:2380,etcd-3=https://192.168.20.13:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"

5.编写systemctl控制脚本
[root@binary-k8s-master1 ~]\# vim /usr/lib/systemd/system/etcd.service
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
EnvironmentFile=/data/etcd/conf/etcd.conf
ExecStart=/data/etcd/bin/etcd \
--cert-file=/data/etcd/ssl/server.pem \
--key-file=/data/etcd/ssl/server-key.pem \
--peer-cert-file=/data/etcd/ssl/server.pem \
--peer-key-file=/data/etcd/ssl/server-key.pem \
--trusted-ca-file=/data/etcd/ssl/ca.pem \
--peer-trusted-ca-file=/data/etcd/ssl/ca.pem \
--logger=zap
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target

6.复制证书文件
[root@binary-k8s-master1 ~]\# cp TLS/etcd/*.pem /data/etcd/ssl/

7.启动etcd-1节点
[root@binary-k8s-master1 ~]\# systemctl daemon-reload
[root@binary-k8s-master1 ~]\# systemctl start etcd
[root@binary-k8s-master1 ~]\# systemctl enable etcd

#第一个节点启动会一直处于其中中的状态，只有当第二个节点也启动了，第一个节点才能启动成功，因为集群版的etcd至少需要2个节点才能成功运行
```

**3.配置etcd-2节点和etcd-3节点**

部署完一个节点，可以直接将目录拷贝至其他节点，省去安装的一些步骤。

```bash
1.推送etcd目录
[root@binary-k8s-master1 ~]\# scp -rp /data/etcd root@192.168.20.12:/data
[root@binary-k8s-master1 ~]\# scp -rp /data/etcd root@192.168.20.13:/data

2.推送systemctl启动文件
[root@binary-k8s-master1 ~]\# scp -rp /usr/lib/systemd/system/etcd.service root@192.168.20.12:/usr/lib/systemd/system/
[root@binary-k8s-master1 ~]\# scp -rp /usr/lib/systemd/system/etcd.service root@192.168.20.13:/usr/lib/systemd/system/

3.修改etcd-2配置文件
[root@binary-k8s-node1 ~]\# vim /data/etcd/conf/etcd.conf 
#[Member]
ETCD_NAME="etcd-2"
ETCD_DATA_DIR="/data/etcd/data"
ETCD_LISTEN_PEER_URLS="https://192.168.20.12:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.20.12:2379,http://127.0.0.1:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.20.12:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.20.12:2379,http://127.0.0.1:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.20.10:2380,etcd-2=https://192.168.20.12:2380,etcd-3=https://192.168.20.13:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"

4.修改etcd-3配置文件
[root@binary-k8s-node2 ~]\# vim /data/etcd/conf/etcd.conf 
#[Member]
ETCD_NAME="etcd-3"
ETCD_DATA_DIR="/data/etcd/data"
ETCD_LISTEN_PEER_URLS="https://192.168.20.13:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.20.13:2379,http://127.0.0.1:2379"

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.20.13:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.20.13:2379,http://127.0.0.1:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.20.10:2380,etcd-2=https://192.168.20.12:2380,etcd-3=https://192.168.20.13:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"

5.启动etcd-1和etcd-2
[root@binary-k8s-node1 ~]\# systemctl daemon-reload
[root@binary-k8s-node1 ~]\# systemctl start etcd
[root@binary-k8s-node1 ~]\# systemctl enable etcd
------------
[root@binary-k8s-node2 ~]\# systemctl daemon-reload
[root@binary-k8s-node2 ~]\# systemctl start etcd
[root@binary-k8s-node2 ~]\# systemctl enable etcd
```

**4.查看集群状态**  
etcd-1启动时会一直处于等待状态，当etcd-2执行启动命令时会立即启动成功，并且etcd-1也会立刻启动成功。

查看etcd的日志可以使用这个命令：`[root@binary-k8s-master1 ~]\# journalctl -u etcd -f`

```bash
1.查看服务端口
[root@binary-k8s-master1 ~]\# netstat -lnpt | grep etcd
tcp        0      0 192.168.20.10:2379      0.0.0.0:*               LISTEN      9625/etcd           
tcp        0      0 192.168.20.10:2380      0.0.0.0:*               LISTEN      9625/etcd

2.查看集群状态
#如果配置文件中2379端口没有加一个127.0.0.1则这样查看集群状态
[root@binary-k8s-master1 ~]\# ETCDCTL_API=3 /data/etcd/bin/etcdctl --cacert=/data/etcd/ssl/ca.pem --cert=/data/etcd/ssl/server.pem --key=/data/etcd/ssl/server-key.pem --endpoints="https://192.168.20.10:2379,https://192.168.20.12:2379,https://192.168.20.13:2379" endpoint health --write-out=table
+----------------------------+--------+-------------+-------+
|          ENDPOINT          | HEALTH |    TOOK     | ERROR |
+----------------------------+--------+-------------+-------+
| https://192.168.20.10:2379 |   true | 32.322714ms |       |
| https://192.168.20.12:2379 |   true | 31.524079ms |       |
| https://192.168.20.13:2379 |   true | 38.985949ms |       |
+----------------------------+--------+-------------+-------+
#如果配置文件汇总2379端口加了一个127.0.0.1则可以使用如下方式查看集群信息无需指定证书
[root@binary-k8s-master1 /data/etcd/conf]\#  /data/etcd/bin/etcdctl member list --write-out=table
+------------------+---------+--------+----------------------------+---------------------------------------------------+------------+
|        ID        | STATUS  |  NAME  |         PEER ADDRS         |                   CLIENT ADDRS                    | IS LEARNER |
+------------------+---------+--------+----------------------------+---------------------------------------------------+------------+
| 12446003b2a53d43 | started | etcd-2 | https://192.168.20.12:2380 | https://127.0.0.1:2379,https://192.168.20.12:2379 |      false |
| 51ae3f86f3783687 | started | etcd-1 | https://192.168.20.10:2380 |  http://127.0.0.1:2379,https://192.168.20.10:2379 |      false |
| 667c9c7ba890c3f7 | started | etcd-3 | https://192.168.20.13:2380 |  http://127.0.0.1:2379,https://192.168.20.13:2379 |      false |
+------------------+---------+--------+----------------------------+---------------------------------------------------+------------+
```

配置文件状态  
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/da2f8ef902c04e77a4e555d67cc32273.png)

etcd启动成功的日志

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/25e40829361b4c78b782ae1b180a90b7.png)

## 4.部署Docker服务

所有kubernetes节点都需要安装docker服务，包括master和node节点。

docker二进制文件下载地址：https://download.docker.com/linux/static/stable/x86\_64/docker-19.03.9.tgz

### 4.1.安装docker

```bash
1.解压二进制包
tar zxf docker-19.03.9.tgz

2.将可执行命令移动到系统路径
mv docker/* /usr/bin

3.创建配置文件
mkdir /etc/docker
vim /etc/docker/daemon.json
{
  "registry-mirrors": ["https://9wn5tbfh.mirror.aliyuncs.com"]
}
```

### 4.2.为docker创建systemctl启动脚本

```bash
1.编写启动脚本
vim /usr/lib/systemd/system/docker.service
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target

[Service]
Type=notify
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP 
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TimeoutStartSec=0
Delegate=yes
KillMode=process
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s

[Install]
WantedBy=multi-user.target

2.启动docker
systemctl daemon-reload 
systemctl start docker
systemctl enable docker
```

## 5.部署kubernetes master节点

部署二进制的kubernetes组件大致可分为如下几个步骤：

-   1.解压二进制文件
-   2.复制二进制程序到指定目录
-   3.创建组件配置文件
-   4.生成组件的kubeconfig文件
-   5.创建systemctl脚本管理服务
-   6.启动组件

kubernetes集群的master节点和node节点的二进制文件都从github上下载，master和node相关的所有组件都在一个程序包中。

下载地址： https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.20.md

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/36b71f10da9442808c7a950d2dedd254.png)

### 5.1.使用cfssl生成apiserver的证书文件

**1.生成CA自签颁发机构证书**

```bash
1.准备CA配置文件
[root@binary-k8s-master1 ~/TLS/k8s]\# vim ca-config.json
{
  "signing": {
    "default": {
      "expiry": "87600h"
    },
    "profiles": {
      "kubernetes": {
         "expiry": "87600h",
         "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ]
      }
    }
  }
}
[root@binary-k8s-master1 ~/TLS/k8s]\# vim ca-csr.json
{
    "CN": "kubernetes",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "Beijing",
            "ST": "Beijing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}

2.生成证书文件
[root@binary-k8s-master1 ~/TLS/k8s]\# cfssl gencert -initca ca-csr.json | cfssljson -bare ca -
2021/09/01 16:20:42 [INFO] generating a new CA key and certificate from CSR
2021/09/01 16:20:42 [INFO] generate received request
2021/09/01 16:20:42 [INFO] received CSR
2021/09/01 16:20:42 [INFO] generating key: rsa-2048
2021/09/01 16:20:43 [INFO] encoded CSR
2021/09/01 16:20:43 [INFO] signed certificate with serial number 90951268335404710707183639990677546638148434604
```

**2.使用自签CA签发apiserver HTTPS证书**

签发的客户端证书配置文件中的hosts字段要包含所有Master/LB/VIP的IP地址，Node节点的地址可写可不写。

```bash
1.准备客户端配置文件
[root@binary-k8s-master1 ~/TLS/k8s]\# vim kube-apiserver-csr.json
{
    "CN": "kubernetes",
    "hosts": [
      "10.0.0.1",
      "127.0.0.1",
      "192.168.20.10",
      "192.168.20.11",
      "192.168.20.12",
      "192.168.20.13",
      "192.168.20.9",
      "kubernetes",
      "kubernetes.default",
      "kubernetes.default.svc",
      "kubernetes.default.svc.cluster",
      "kubernetes.default.svc.cluster.local"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "BeiJing",
            "ST": "BeiJing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}

2.生成证书文件
[root@binary-k8s-master1 ~/TLS/k8s]\# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kube-apiserver-csr.json | cfssljson -bare kube-apiserver
2021/09/01 16:30:24 [INFO] generate received request
2021/09/01 16:30:24 [INFO] received CSR
2021/09/01 16:30:24 [INFO] generating key: rsa-2048
2021/09/01 16:30:25 [INFO] encoded CSR
2021/09/01 16:30:25 [INFO] signed certificate with serial number 714472722509814799589567099679496298525490716083
2021/09/01 16:30:25 [WARNING] This certificate lacks a "hosts" field. This makes it unsuitable for
websites. For more information see the Baseline Requirements for the Issuance and Management
of Publicly-Trusted Certificates, v.1.1.6, from the CA/Browser Forum (https://cabforum.org);
specifically, section 10.2.3 ("Information Requirements").
```

**3.查看生产的证书文件**

```bash
[root@binary-k8s-master1 ~/TLS/k8s]\# ll
总用量 36
-rw-r--r--. 1 root root  294 9月   1 16:20 ca-config.json
-rw-r--r--. 1 root root 1001 9月   1 16:20 ca.csr
-rw-r--r--. 1 root root  264 9月   1 16:20 ca-csr.json
-rw-------. 1 root root 1679 9月   1 16:20 ca-key.pem
-rw-r--r--. 1 root root 1359 9月   1 16:20 ca.pem
-rw-r--r--. 1 root root 1277 9月   1 16:30 kube-apiserver.csr
-rw-r--r--. 1 root root  602 9月   1 16:30 kube-apiserver-csr.json
-rw-------. 1 root root 1679 9月   1 16:30 kube-apiserver-key.pem
-rw-r--r--. 1 root root 1643 9月   1 16:30 kube-apiserver.pem
```

### 5.2.解压二进制文件复制相关组件程序

```bash
[root@binary-k8s-master1 ~]\# mkdir /data/kubernetes/{bin,config,ssl,logs} -p
[root@binary-k8s-master1 ~]\# tar xf kubernetes-server-linux-amd64.tar.gz 
[root@binary-k8s-master1 ~]\# cd kubernetes/server/bin/
[root@binary-k8s-master1 ~/kubernetes/server/bin]\# cp kube-apiserver kube-scheduler kube-controller-manager /data/kubernetes/bin/
[root@binary-k8s-master1 ~/kubernetes/server/bin]\# cp kubectl /usr/bin/
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/e7c7eb9ad3ae4b0a8800c575d4e86023.png)

### 5.3.部署kube-apiserver组件

#### 5.3.1.创建kube-apiserver配置文件

```bash
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kube-apiserver.conf
KUBE_APISERVER_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--etcd-servers=https://192.168.20.10:2379,https://192.168.20.12:2379,https://192.168.20.13:2379 \
--bind-address=192.168.20.10 \
--secure-port=6443 \
--advertise-address=192.168.20.10 \
--allow-privileged=true \
--service-cluster-ip-range=10.0.0.0/24 \
--enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \
--authorization-mode=RBAC,Node \
--enable-bootstrap-token-auth=true \
--token-auth-file=/data/kubernetes/config/token.csv \
--service-node-port-range=30000-32767 \
--kubelet-client-certificate=/data/kubernetes/ssl/kube-apiserver.pem \
--kubelet-client-key=/data/kubernetes/ssl/kube-apiserver-key.pem \
--tls-cert-file=/data/kubernetes/ssl/kube-apiserver.pem  \
--tls-private-key-file=/data/kubernetes/ssl/kube-apiserver-key.pem \
--client-ca-file=/data/kubernetes/ssl/ca.pem \
--service-account-key-file=/data/kubernetes/ssl/ca-key.pem \
--service-account-issuer=api \
--service-account-signing-key-file=/data/kubernetes/ssl/kube-apiserver-key.pem \
--etcd-cafile=/data/etcd/ssl/ca.pem \
--etcd-certfile=/data/etcd/ssl/server.pem \
--etcd-keyfile=/data/etcd/ssl/server-key.pem \
--requestheader-client-ca-file=/data/kubernetes/ssl/ca.pem \
--proxy-client-cert-file=/data/kubernetes/ssl/kube-apiserver.pem \
--proxy-client-key-file=/data/kubernetes/ssl/kube-apiserver-key.pem \
--requestheader-allowed-names=kubernetes \
--requestheader-extra-headers-prefix=X-Remote-Extra- \
--requestheader-group-headers=X-Remote-Group \
--requestheader-username-headers=X-Remote-User \
--enable-aggregator-routing=true \
--audit-log-maxage=30 \
--audit-log-maxbackup=3 \
--audit-log-maxsize=100 \
--audit-log-path=/data/kubernetes/logs/k8s-audit.log"
```

**配置文件各参数含义**

| 配置参数                            | 含义                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| –logtostderr                        | 是否开启日志                                                 |
| –v                                  | 日志的等级，等级越高内容越详细                               |
| –log-dir                            | 日志存放路径                                                 |
| –etcd-servers                       | etcd集群地址                                                 |
| –bind-address                       | 监听地址，也就是本机                                         |
| –secure-port                        | https安全端口                                                |
| –advertise-address                  | 集群通告地址                                                 |
| –allow-privileged                   | 企业授权                                                     |
| –service-cluster-ip-range           | service资源IP地址段                                          |
| –enable-admission-plugins           | 准入控制模块                                                 |
| –authorization-mode                 | 认证授权，启用RBAC授权和节点自管理                           |
| –enable-bootstrap-token-auth        | 启用TLS bootstrap机制，启用之后kubelet可以自动给node节颁发证书 |
| –token-auth-file                    | bootstrap token文件路径                                      |
| –service-node-port-range            | Service nodeport类型默认分配端口范围                         |
| –kubelet-client-certificate         | apiserver访问kubelet的客户端证书文件                         |
| –kubelet-client-key                 | apiserver访问kubelet的客户端私钥文件                         |
| –tls-cert-file                      | apiserver https证书                                          |
| –tls-private-key-file               | apiserver https证书                                          |
| –client-ca-file                     | ca证书路径                                                   |
| –service-account-key-file           | ca私钥路径                                                   |
| –service-account-issuer             | sa账号授权过期时间的一个配置，1.20以后才有的特性             |
| –service-account-signing-key-file   | 证书文件路径                                                 |
| –etcd-cafile                        | etcd ca证书文件路径                                          |
| –etcd-certfile                      | etcd 客户端证书文件路径                                      |
| –etcd-keyfile                       | etcd 客户端私钥文件路径                                      |
| –requestheader-client-ca-file       | 聚合层相关配置                                               |
| –proxy-client-cert-file             | 聚合层相关配置                                               |
| –proxy-client-key-file              | 聚合层相关配置                                               |
| –requestheader-allowed-names        | 聚合层相关配置                                               |
| –requestheader-extra-headers-prefix | 聚合层相关配置                                               |
| –enable-aggregator-routing          | 聚合层相关配置                                               |

#### 5.3.2.创建TLS Bootstrapping文件

TLS Bootstraping：Master apiserver启用TLS认证后，Node节点kubelet和kube-proxy要与kube-apiserver进行通信，必须使用CA签发的有效证书才可以，当Node节点很多时，这种客户端证书颁发需要大量工作，同样也会增加集群扩展复杂度。为了简化流程，Kubernetes引入了TLS bootstraping机制来自动颁发客户端证书，kubelet会以一个低权限用户自动向apiserver申请证书，kubelet的证书由apiserver动态签署。所以强烈建议在Node上使用这种方式，目前主要用于kubelet，kube-proxy还是由我们统一颁发一个证书。

TLS bootstraping 工作流程：

kubelet首先取查找bootstraping配置文件，然后去连接apiserver，开始验证bootstrap token文件，再验证证书文件，最后颁发证书启动成功，否则就会启动失败。  
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/17a18dfd43ae4604863e590283b63ebd.png)

```bash
1.生成一个token值
[root@binary-k8s-master1 ~]\# head -c 16 /dev/urandom | od -An -t x | tr -d ' '
d7f96b0d86c574d0f64a713608db092

2.创建token文件
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/token.csv
d7f96b0d86c574d0f64a713608db0922,kubelet-bootstrap,10001,"system:node-bootstrapper"

#格式：token，用户名，UID，用户组
```

#### 5.3.4.创建systemctl脚本管理apiserver

```bash
[root@binary-k8s-master1 ~]\# vim /usr/lib/systemd/system/kube-apiserver.service 
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/data/kubernetes/config/kube-apiserver.conf
ExecStart=/data/kubernetes/bin/kube-apiserver $KUBE_APISERVER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

#### 5.3.5.启动kube-apiserver组件

```bash
1.拷贝我们需要的证书文件
[root@binary-k8s-master1 ~]\# cp TLS/k8s/*.pem /data/kubernetes/ssl/

2.启动kube-apiserver
[root@binary-k8s-master1 ~]\# systemctl daemon-reload
[root@binary-k8s-master1 ~]\# systemctl start kube-apiserver 
[root@binary-k8s-master1 ~]\# systemctl enable kube-apiserver

3.查看端口
[root@binary-k8s-master1 ~]\# netstat -lnpt | grep kube
tcp        0      0 192.168.20.10:6443      0.0.0.0:*               LISTEN      28546/kube-apiserve 
```

### 5.4.部署kube-controller-manage组件

#### 5.4.1.创建kube-controller-manage配置文件

> **配置文件含义**
>
> –kubeconfig：指定用于连接apiserver的kubeconfig配置文件
>
> –leader-elect：用于高可用集群，自动选举
>
> –cluster-signing-cert-file：指定CA证书文件，为kubelet自动颁发证书
>
> –cluster-signing-key-file：指定CA私钥文件，为kubelet自动颁发证书
>
> –cluster-signing-duration：证书过期时间

```bash
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kube-controller-manager.conf 
KUBE_CONTROLLER_MANAGER_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--leader-elect=true \
--kubeconfig=/data/kubernetes/config/kube-controller-manager.kubeconfig \
--bind-address=192.168.20.10 \
--allocate-node-cidrs=true \
--cluster-cidr=10.244.0.0/16 \
--service-cluster-ip-range=10.0.0.0/24 \
--cluster-signing-cert-file=/data/kubernetes/ssl/ca.pem \
--cluster-signing-key-file=/data/kubernetes/ssl/ca-key.pem  \
--root-ca-file=/data/kubernetes/ssl/ca.pem \
--service-account-private-key-file=/data/kubernetes/ssl/ca-key.pem \
--cluster-signing-duration=87600h0m0s"
```

#### 5.4.2.生成kubeconfig文件

kube-controller-manage利用kubeconfig配置文件连接apiserver。

kubeconfig文件中包括集群apiserver地址、证书文件、用户。

```bash
1.由于kubeconfig需要证书文件的支持，因此要生成一个证书
[root@binary-k8s-master1 ~/TLS/k8s]\# vim kube-controller-manager-csr.json 
{
  "CN": "system:kube-controller-manager",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "BeiJing",
      "ST": "BeiJing",
      "O": "system:masters",
      "OU": "System"
    }
  ]
}

[root@binary-k8s-master1 ~/TLS/k8s]\# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager
2021/09/01 16:36:18 [INFO] generate received request
2021/09/01 16:36:18 [INFO] received CSR
2021/09/01 16:36:18 [INFO] generating key: rsa-2048
l2021/09/01 16:36:19 [INFO] encoded CSR
2021/09/01 16:36:19 [INFO] signed certificate with serial number 719101376219834763931271155238486242405063666906
2021/09/01 16:36:19 [WARNING] This certificate lacks a "hosts" field. This makes it unsuitable for
websites. For more information see the Baseline Requirements for the Issuance and Management
of Publicly-Trusted Certificates, v.1.1.6, from the CA/Browser Forum (https://cabforum.org);
specifically, section 10.2.3 ("Information Requirements").

[root@binary-k8s-master1 ~/TLS/k8s]\# cp kube-controller-manager*pem /data/kubernetes/ssl/


2.生成kubeconfig文件
#在kubeconfig文件中增加集群apiserver信息
[root@binary-k8s-master1 ~]\# kubectl config set-cluster kubernetes \
--certificate-authority=/data/kubernetes/ssl/ca.pem \
--embed-certs=true \
--server="https://192.168.20.10:6443" \
--kubeconfig=/data/kubernetes/config/kube-controller-manager.kubeconfig
#在kubeconfig文件中增加证书文件信息  
[root@binary-k8s-master1 ~]\# kubectl config set-credentials kube-controller-manager \
--client-certificate=/data/kubernetes/ssl/kube-controller-manager.pem \
--client-key=/data/kubernetes/ssl/kube-controller-manager-key.pem \
--embed-certs=true \
--kubeconfig=/data/kubernetes/config/kube-controller-manager.kubeconfig
#在kubeconfig文件中增加用户信息  
[root@binary-k8s-master1 ~]\# kubectl config set-context default \
--cluster=kubernetes \
--user=kube-controller-manager \
--kubeconfig=/data/kubernetes/config/kube-controller-manager.kubeconfig

3.指定生成的kubeconfig文件为集群使用
[root@binary-k8s-master1 ~]\# kubectl config use-context default --kubeconfig=/data/kubernetes/config/kube-controller-manager.kubeconfig  
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/877a98a70b2f47919bcaae2d9d02a4d1.png)

#### 5.4.3.创建systemctl脚本管理服务

```bash
[root@binary-k8s-master1 ~]\# vim /usr/lib/systemd/system/kube-controller-manager.service
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/data/kubernetes/config/kube-controller-manager.conf
ExecStart=/data/kubernetes/bin/kube-controller-manager $KUBE_CONTROLLER_MANAGER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

#### 5.4.4.启动kube-controller-manage组件

```bash
1.启动服务
[root@binary-k8s-master1 ~]\# systemctl daemon-reload 
[root@binary-k8s-master1 ~]\# systemctl start kube-controller-manager
[root@binary-k8s-master1 ~]\# systemctl enable kube-controller-manager

2.查看端口
[root@binary-k8s-master1 ~]\# netstat -lnpt | grep kube
tcp        0      0 192.168.20.10:6443      0.0.0.0:*               LISTEN      28546/kube-apiserve 
tcp        0      0 192.168.20.10:10257     0.0.0.0:*               LISTEN      28941/kube-controll 
tcp6       0      0 :::10252                :::*                    LISTEN      28941/kube-controll 
```

### 5.5.部署kube-scheduler组件

#### 5.5.1.创建kube-scheduler配置文件

> 配置文件解释
>
> –kubeconfig：指定kubeconfig文件
>
> –leader-elect：选举

```bash
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kube-scheduler.conf 
KUBE_SCHEDULER_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--leader-elect \
--kubeconfig=/data/kubernetes/config/kube-scheduler.kubeconfig \
--bind-address=192.168.20.10"
```

#### 5.5.2.生成kubeconfig文件

生成kubeconfig连接集群apiserver。

kube-schedule利用kubeconfig配置文件连接apiserver。

kubeconfig文件中包括集群apiserver地址、证书文件、用户。

```bash
1.创建证书配置文件
[root@binary-k8s-master1 ~/TLS/k8s]\# vim kube-scheduler-csr.json
{
  "CN": "system:kube-scheduler",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "BeiJing",
      "ST": "BeiJing",
      "O": "system:masters",
      "OU": "System"
    }
  ]
}

2.生成证书
[root@binary-k8s-master1 ~/TLS/k8s]\# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kube-scheduler-csr.json | cfssljson -bare kube-scheduler
2021/09/02 14:50:40 [INFO] generate received request
2021/09/02 14:50:40 [INFO] received CSR
2021/09/02 14:50:40 [INFO] generating key: rsa-2048
2021/09/02 14:50:42 [INFO] encoded CSR
2021/09/02 14:50:42 [INFO] signed certificate with serial number 91388852050290848663498441480862532526947759393
2021/09/02 14:50:42 [WARNING] This certificate lacks a "hosts" field. This makes it unsuitable for
websites. For more information see the Baseline Requirements for the Issuance and Management
of Publicly-Trusted Certificates, v.1.1.6, from the CA/Browser Forum (https://cabforum.org);
specifically, section 10.2.3 ("Information Requirements").

3.查看证书文件
[root@binary-k8s-master1 ~/TLS/k8s]\# ll
总用量 68
-rw-r--r--. 1 root root  294 9月   1 16:20 ca-config.json
-rw-r--r--. 1 root root 1001 9月   1 16:20 ca.csr
-rw-r--r--. 1 root root  264 9月   1 16:20 ca-csr.json
-rw-------. 1 root root 1679 9月   1 16:20 ca-key.pem
-rw-r--r--. 1 root root 1359 9月   1 16:20 ca.pem
-rw-r--r--. 1 root root 1277 9月   1 16:30 kube-apiserver.csr
-rw-r--r--. 1 root root  602 9月   1 16:30 kube-apiserver-csr.json
-rw-------. 1 root root 1679 9月   1 16:30 kube-apiserver-key.pem
-rw-r--r--. 1 root root 1643 9月   1 16:30 kube-apiserver.pem
-rw-r--r--. 1 root root 1045 9月   1 16:36 kube-controller-manager.csr
-rw-r--r--. 1 root root  255 9月   1 16:46 kube-controller-manager-csr.json
-rw-------. 1 root root 1675 9月   1 16:36 kube-controller-manager-key.pem
-rw-r--r--. 1 root root 1436 9月   1 16:36 kube-controller-manager.pem
-rw-r--r--. 1 root root 1029 9月   2 14:50 kube-scheduler.csr
-rw-r--r--. 1 root root  245 9月   2 14:50 kube-scheduler-csr.json
-rw-------. 1 root root 1675 9月   2 14:50 kube-scheduler-key.pem
-rw-r--r--. 1 root root 1424 9月   2 14:50 kube-scheduler.pem

4.拷贝证书文件至指定路径
[root@binary-k8s-master1 ~/TLS/k8s]\# cp kube-scheduler*.pem /data/kubernetes/ssl/

5.生成kubeconfig文件
#在kubeconfig文件中增加集群apiserver信息
[root@binary-k8s-master1 ~]\# kubectl config set-cluster kubernetes \
--certificate-authority=/data/kubernetes/ssl/ca.pem \
--embed-certs=true \
--server="https://192.168.20.10:6443" \
--kubeconfig=/data/kubernetes/config/kube-scheduler.kubeconfig
#在kubeconfig文件中增加证书文件信息 
[root@binary-k8s-master1 ~]\# kubectl config set-credentials kube-scheduler \
--client-certificate=/data/kubernetes/ssl/kube-scheduler.pem \
--client-key=/data/kubernetes/ssl/kube-scheduler-key.pem \
--embed-certs=true \
--kubeconfig=/data/kubernetes/config/kube-scheduler.kubeconfig
#在kubeconfig文件中增加用户信息 
[root@binary-k8s-master1 ~]\# kubectl config set-context default \
--cluster=kubernetes \
--user=kube-scheduler \
--kubeconfig=/data/kubernetes/config/kube-scheduler.kubeconfig

6.指定生成的kubeconfig文件为集群使用
[root@binary-k8s-master1 ~]\# kubectl config use-context default --kubeconfig=/data/kubernetes/config/kube-scheduler.kubeconfig
```

#### 5.5.3.创建systemctl脚本管理服务

```bash
[root@binary-k8s-master1 ~]\# vim /usr/lib/systemd/system/kube-scheduler.service
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=/data/kubernetes/config/kube-scheduler.conf
ExecStart=/data/kubernetes/bin/kube-scheduler $KUBE_SCHEDULER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

#### 5.5.4.启动kube-scheduler组件

```bash
1.启动服务
[root@binary-k8s-master1 ~]\# systemctl daemon-reload
[root@binary-k8s-master1 ~]\# systemctl start kube-scheduler
[root@binary-k8s-master1 ~]\# systemctl enable kube-scheduler

2.查看端口
[root@binary-k8s-master1 ~]\# netstat -lnpt | grep kube
tcp        0      0 192.168.20.10:6443      0.0.0.0:*               LISTEN      28546/kube-apiserve 
tcp        0      0 192.168.20.10:10257     0.0.0.0:*               LISTEN      28941/kube-controll 
tcp        0      0 192.168.20.10:10259     0.0.0.0:*               LISTEN      6127/kube-scheduler 
tcp6       0      0 :::10251                :::*                    LISTEN      6127/kube-scheduler 
tcp6       0      0 :::10252                :::*                    LISTEN      28941/kube-controll 
```

### 5.6.准备kubectl所需的kubeconfig文件连接集群

kubectl想要连接集群对各种资源进行操作，需要有一个kubeconfig文件连接apiserver才可以对集群进行操作，也就是kubeadm安装k8s集群后在master节点生成的/root/.kube目录，这个目录中的config文件就是kubectl用于连接apiserver的kubeconfig文件。

#### 5.6.1.生成证书文件

```bash
1.创建证书配置文件
[root@binary-k8s-master1 ~/TLS/k8s]\# vim kubectl-csr.json 
{
  "CN": "kubectl",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "BeiJing",
      "ST": "BeiJing",
      "O": "system:masters",
      "OU": "System"
    }
  ]
}

2.生成证书
[root@binary-k8s-master1 ~/TLS/k8s]\# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kubectl-csr.json | cfssljson -bare kubectl
2021/09/02 17:20:44 [INFO] generate received request
2021/09/02 17:20:44 [INFO] received CSR
2021/09/02 17:20:44 [INFO] generating key: rsa-2048
2021/09/02 17:20:45 [INFO] encoded CSR
2021/09/02 17:20:45 [INFO] signed certificate with serial number 398472525484598388169457456772550114435870340604
2021/09/02 17:20:45 [WARNING] This certificate lacks a "hosts" field. This makes it unsuitable for
websites. For more information see the Baseline Requirements for the Issuance and Management
of Publicly-Trusted Certificates, v.1.1.6, from the CA/Browser Forum (https://cabforum.org);
specifically, section 10.2.3 ("Information Requirements").

3.查看生成的证书文件
[root@binary-k8s-master1 ~/TLS/k8s]\# ll
总用量 84
-rw-r--r--. 1 root root  294 9月   1 16:20 ca-config.json
-rw-r--r--. 1 root root 1001 9月   1 16:20 ca.csr
-rw-r--r--. 1 root root  264 9月   1 16:20 ca-csr.json
-rw-------. 1 root root 1679 9月   1 16:20 ca-key.pem
-rw-r--r--. 1 root root 1359 9月   1 16:20 ca.pem
-rw-r--r--. 1 root root 1277 9月   1 16:30 kube-apiserver.csr
-rw-r--r--. 1 root root  602 9月   1 16:30 kube-apiserver-csr.json
-rw-------. 1 root root 1679 9月   1 16:30 kube-apiserver-key.pem
-rw-r--r--. 1 root root 1643 9月   1 16:30 kube-apiserver.pem
-rw-r--r--. 1 root root 1045 9月   1 16:36 kube-controller-manager.csr
-rw-r--r--. 1 root root  255 9月   1 16:46 kube-controller-manager-csr.json
-rw-------. 1 root root 1675 9月   1 16:36 kube-controller-manager-key.pem
-rw-r--r--. 1 root root 1436 9月   1 16:36 kube-controller-manager.pem
-rw-r--r--. 1 root root 1013 9月   2 17:20 kubectl.csr
-rw-r--r--. 1 root root  231 9月   2 17:20 kubectl-csr.json
-rw-------. 1 root root 1679 9月   2 17:20 kubectl-key.pem
-rw-r--r--. 1 root root 1403 9月   2 17:20 kubectl.pem
-rw-r--r--. 1 root root 1029 9月   2 14:50 kube-scheduler.csr
-rw-r--r--. 1 root root  245 9月   2 14:50 kube-scheduler-csr.json
-rw-------. 1 root root 1675 9月   2 14:50 kube-scheduler-key.pem
-rw-r--r--. 1 root root 1424 9月   2 14:50 kube-scheduler.pem

4.拷贝证书文件到指定目录
[root@binary-k8s-master1 ~/TLS/k8s]\# \cp kubectl*.pem /data/kubernetes/ssl/
```

#### 5.6.2.生成kubeconfig文件

```bash
1.在kubeconfig文件中增加集群apiserver信息
[root@binary-k8s-master1 ~]\# kubectl config set-cluster kubernetes \
--certificate-authority=/data/kubernetes/ssl/ca.pem \
--embed-certs=true \
--server="https://192.168.20.10:6443" \
--kubeconfig=/root/.kube/config

2.在kubeconfig文件中增加证书文件信息
[root@binary-k8s-master1 ~]\# kubectl config set-credentials cluster-admin \
--client-certificate=/data/kubernetes/ssl/kubectl.pem \
--client-key=/data/kubernetes/ssl/kubectl-key.pem  \
--embed-certs=true \
--kubeconfig=/root/.kube/config

3.在kubeconfig文件中增加用户信息 
[root@binary-k8s-master1 ~]\# kubectl config set-context default \
--cluster=kubernetes \
--user=cluster-admin \
--kubeconfig=/root/.kube/config
  
4.指定生成的kubeconfig文件为集群使用
[root@binary-k8s-master1 ~]\# kubectl config use-context default --kubeconfig=/root/.kube/config
```

#### 5.6.3.使用kubectl查看集群连接信息

至此master节点相关组件部署完成。

```bash
[root@binary-k8s-master1 ~]\# kubectl get node
No resources found

[root@binary-k8s-master1 ~]\# kubectl get cs
Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS    MESSAGE             ERROR
scheduler            Healthy   ok                  
controller-manager   Healthy   ok                  
etcd-1               Healthy   {"health":"true"}   
etcd-0               Healthy   {"health":"true"}   
etcd-2               Healthy   {"health":"true"}  
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/8ea5953c67f6460facc684905acb502c.png)

## 6.在master节点部署node节点相关组件

### 6.1.在集群授权kubelet-bootstrap用户允许请求证书

在此处做了这一步之后，node节点加入集群时就不需要做了。

```bash
[root@binary-k8s-master1 ~]\# kubectl create clusterrolebinding kubelet-bootstrap \
--clusterrole=system:node-bootstrapper \
--user=kubelet-bootstrap
```

### 6.2.在master节点部署kubelet组件

由于master也需要启动某些pod，比如calico组件都是以pod方式运行的，因此在master节点也需要kubelet和kube-proxy组件。

#### 6.2.1.将kubelet和kube-proxy的二进制文件拷贝至对应目录

```bash
[root@binary-k8s-master1 ~]\# cp kubernetes/server/bin/{kubelet,kube-proxy} /data/kubernetes/bin/
```

#### 6.2.2.创建kubelet配置文件

> 配置文件含义：
>
> –hostname-override：节点名称，集群中唯一
>
> –network-plugin：启用CNI网络
>
> –kubeconfig：指定自动生成的kubeconfig文件路径，用于连接apiserver
>
> –bootstrap-kubeconfig：指定首次启动向apiserver申请证书的kubeconfig文件路径
>
> –config：配置参数文件路径
>
> –cert-dir：kubelet证书生成目录路径
>
> –pod-infra-container-image：pod容器的根容器

```bash
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kubelet.conf
KUBELET_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--hostname-override=binary-k8s-master1 \
--network-plugin=cni \
--kubeconfig=/data/kubernetes/config/kubelet.kubeconfig \
--bootstrap-kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig \
--config=/data/kubernetes/config/kubelet-config.yml \
--cert-dir=/data/kubernetes/ssl \
--pod-infra-container-image=pause-amd64:3.0"
```

#### 6.2.3.创建kubelet-config.yaml参数配置文件

kubelet和kube-proxy服务的参数配置是以yaml形式来配置的

```bash
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kubelet-config.yml
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
address: 0.0.0.0				#监听地址
port: 10250						#监听端口
readOnlyPort: 10255
cgroupDriver: cgroupfs			#驱动引擎
clusterDNS:
- 10.0.0.2
clusterDomain: cluster.local
failSwapOn: false
authentication:
  anonymous:
    enabled: false
  webhook:
    cacheTTL: 2m0s
    enabled: true
  x509:
    clientCAFile: /data/kubernetes/ssl/ca.pem		#ca证书文件路径
authorization:
  mode: Webhook
  webhook:
    cacheAuthorizedTTL: 5m0s
    cacheUnauthorizedTTL: 30s
evictionHard:
  imagefs.available: 15%
  memory.available: 100Mi
  nodefs.available: 10%
  nodefs.inodesFree: 5%
maxOpenFiles: 1000000
maxPods: 110				#可运行的pod的数量
```

#### 6.2.4.创建bootstrap-kubeconfig文件

```bash
1.在kubeconfig文件中增加集群apiserver信息
[root@binary-k8s-master1 ~]\# kubectl config set-cluster kubernetes \
--certificate-authority=/data/kubernetes/ssl/ca.pem \
--embed-certs=true \
--server="https://192.168.20.10:6443" \
--kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig
  
2.在kubeconfig文件中增加token信息
[root@binary-k8s-master1 ~]\# kubectl config set-credentials "kubelet-bootstrap" \
--token=d7f96b0d86c574d0f64a713608db0922 \
--kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig
#这个token就是之前生成的/data/kubernetes/config/token.csv中的token
  
3.在kubeconfig文件中增加用户信息 
[root@binary-k8s-master1 ~]\# kubectl config set-context default \
--cluster=kubernetes \
--user="kubelet-bootstrap" \
--kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig

4.指定生成的kubeconfig文件为集群使用
[root@binary-k8s-master1 ~]\# kubectl config use-context default --kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig
```

#### 6.2.5.创建systemctl脚本并启动服务

```bash
1.创建systemctl脚本
[root@binary-k8s-master1 ~]\# vim /usr/lib/systemd/system/kubelet.service
[Unit]
Description=Kubernetes Kubelet
After=docker.service

[Service]
EnvironmentFile=/data/kubernetes/config/kubelet.conf
ExecStart=/data/kubernetes/bin/kubelet $KUBELET_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target

2.启动kubelet服务
[root@binary-k8s-master1 ~]\# systemctl daemon-reload
[root@binary-k8s-master1 ~]\# systemctl start kubelet
[root@binary-k8s-master1 ~]\# systemctl enable kubelet
```

#### 6.2.6.将master节点作为node加入集群内部

当kubelet组件启动成功后，就会想apiserver发送一个请求加入集群的信息，只有当master节点授权同意后，才可以正常加入，虽然是master节点部署的node组件，但是也会发生一个加入集群的信息，需要master同意。

当kubelet启动之后，首先会在证书目录生成一个kubelet-client.key.tmp这个文件，当使用kubectl certificate approve命令授权成功node的请求之后，kubelet-client.key.tmp小时，随之会生成一个kubelet-client-current.pem的证书文件，用于与apiserver建立连接，此时再使用kubectl get node就会看到节点信息了。

扩展：如果后期想要修改node的名称，那么就把生成的kubelet证书文件全部删除，然后使用kubectl delete node删除该节点，在修改kubelet配置文件中该节点的名称，然后使用kubectl delete csr删除授权信息，再重启kubelet生成新的授权信息，然后授权通过即可看到新的名字的node节点。

只有当授权通过后，kubelet生成了证书文件，kubelet的端口才会被启动

注意：当kubelet的授权被master请求通后，kube-proxy启动成功后，节点才会正真的加入集群，即使kubectl get node看到的节点是Ready，该节点也是不可用的，必须当kube-proxy启动完毕后，这个节点才算正真的启动完毕<

```bash
1.直接在master节点上执行如下命令获取请求列表
[root@binary-k8s-master1 ~]\# kubectl get csr
NAME                                                   AGE   SIGNERNAME                                    REQUESTOR           CONDITION
node-csr-JN8q9WljA6oupdWZ2mVO-TOIq2sLodFdkyL5fu6Ius4   4s    kubernetes.io/kube-apiserver-client-kubelet   kubelet-bootstrap   Pending

2.授权同意此节点加入集群
[root@binary-k8s-master1 ~]\# kubectl certificate approve node-csr-JN8q9WljA6oupdWZ2mVO-TOIq2sLodFdkyL5fu6Ius4
certificatesigningrequest.certificates.k8s.io/node-csr-JN8q9WljA6oupdWZ2mVO-TOIq2sLodFdkyL5fu6Ius4 approved

3.查看node节点
[root@binary-k8s-master1 ~]\# kubectl get node
NAME                 STATUS     ROLES    AGE   VERSION
binary-k8s-master1   NotReady   <none>   6s    v1.20.4
#此时master节点已经出现在集群节点列表中了

4.查看kubelet端口
[root@binary-k8s-master1 ~]\# netstat -lnpt | grep kubelet
tcp        0      0 127.0.0.1:10248         0.0.0.0:*               LISTEN      29092/kubelet       
tcp        0      0 127.0.0.1:41132         0.0.0.0:*               LISTEN      29092/kubelet       
tcp6       0      0 :::10250                :::*                    LISTEN      29092/kubelet       
tcp6       0      0 :::10255                :::*                    LISTEN      29092/kubelet 
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/857b38edfb4c46e99ccd40e7fa296628.png)

### 6.3.在master节点部署kube-proxy

#### 6.3.1.创建kube-proxy配置文件

```bash
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kube-proxy.conf
KUBE_PROXY_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--config=/data/kubernetes/config/kube-proxy-config.yml"
```

#### 6.3.2.创建kube-proxy参数配置文件

```bash
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kube-proxy-config.yml
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0									#监听地址
metricsBindAddress: 0.0.0.0:10249							#监听端口
clientConnection:
  kubeconfig: /data/kubernetes/config/kube-proxy.kubeconfig			#kubeconfig文件用于和apiserver通信
hostnameOverride: binary-k8s-master1				#当前节点名称
clusterCIDR: 10.244.0.0/16
```

#### 6.3.3.生成kubeconfig文件

```bash
1.创建证书配置文件
[root@binary-k8s-master1 ~/TLS/k8s]\# vim kube-proxy-csr.json 
{
  "CN": "system:kube-proxy",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "BeiJing",
      "ST": "BeiJing",
      "O": "k8s",
      "OU": "System"
    }
  ]
}


2.生成证书
[root@binary-k8s-master1 ~/TLS/k8s]\# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
2021/09/03 16:04:23 [INFO] generate received request
2021/09/03 16:04:23 [INFO] received CSR
2021/09/03 16:04:23 [INFO] generating key: rsa-2048
2021/09/03 16:04:24 [INFO] encoded CSR
2021/09/03 16:04:24 [INFO] signed certificate with serial number 677418055440191127932354470575565723194258386145
2021/09/03 16:04:24 [WARNING] This certificate lacks a "hosts" field. This makes it unsuitable for
websites. For more information see the Baseline Requirements for the Issuance and Management
of Publicly-Trusted Certificates, v.1.1.6, from the CA/Browser Forum (https://cabforum.org);
specifically, section 10.2.3 ("Information Requirements").

3.查看证书文件
[root@binary-k8s-master1 ~/TLS/k8s]\# ll *proxy*
-rw-r--r--. 1 root root 1009 9月   3 16:04 kube-proxy.csr
-rw-r--r--. 1 root root  230 9月   3 16:04 kube-proxy-csr.json
-rw-------. 1 root root 1679 9月   3 16:04 kube-proxy-key.pem
-rw-r--r--. 1 root root 1403 9月   3 16:04 kube-proxy.pem


4.拷贝证书文件至指定路径
[root@binary-k8s-master1 ~/TLS/k8s]\# cp kube-proxy*.pem /data/kubernetes/ssl/

5.生成kubeconfig文件
#在kubeconfig文件中增加集群apiserver信息
[root@binary-k8s-master1 ~]\# kubectl config set-cluster kubernetes \
--certificate-authority=/data/kubernetes/ssl/ca.pem \
--embed-certs=true \
--server="https://192.168.20.10:6443" \
--kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig
#在kubeconfig文件中增加证书文件信息 
[root@binary-k8s-master1 ~]\# kubectl config set-credentials kube-proxy \
--client-certificate=/data/kubernetes/ssl/kube-proxy.pem \
--client-key=/data/kubernetes/ssl/kube-proxy-key.pem \
--embed-certs=true \
--kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig
#在kubeconfig文件中增加用户信息 
[root@binary-k8s-master1 ~]\# kubectl config set-context default \
--cluster=kubernetes \
--user=kube-proxy \
--kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig

6.指定生成的kubeconfig文件为集群使用
[root@binary-k8s-master1 ~]\# kubectl config use-context default --kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig
```

#### 6.3.4.创建systemctl脚本管理服务

```bash
[root@binary-k8s-master1 ~]\# vim /usr/lib/systemd/system/kube-proxy.service
[Unit]
Description=Kubernetes Proxy
After=network.target

[Service]
EnvironmentFile=/data/kubernetes/config/kube-proxy.conf
ExecStart=/data/kubernetes/bin/kube-proxy $KUBE_PROXY_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

#### 6.3.4.启动kube-proxy组件

```bash
1.启动服务
[root@binary-k8s-master1 ~]\# systemctl daemon-reload
[root@binary-k8s-master1 ~]\# systemctl start kube-proxy
[root@binary-k8s-master1 ~]\# systemctl enable kube-proxy

2.查看端口
[root@binary-k8s-master1 ~]\# netstat -lnpt | grep kube-proxy
tcp6       0      0 :::10249                :::*                    LISTEN      29354/kube-proxy    
tcp6       0      0 :::10256                :::*                    LISTEN      29354/kube-proxy 
```

### 6.4.授权apiserver访问kubelet

如果不收取apiserver访问kubelet，那么将无法使用kubectl查看集群的一些信息，比如kubectl logs就无法使用。

实际上就是创建一个rbac资源让apiserver能否访问kubelet的资源。

```bash
1.编写资源yaml文件
[root@binary-k8s-master1 ~]\# vim apiserver-to-kubelet-rbac.yaml 
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: "true"
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
  name: system:kube-apiserver-to-kubelet
rules:
  - apiGroups:
      - ""
    resources:
      - nodes/proxy
      - nodes/stats
      - nodes/log
      - nodes/spec
      - nodes/metrics
      - pods/log
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system:kube-apiserver
  namespace: ""
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:kube-apiserver-to-kubelet
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: kubernetes

2.创建资源
[root@binary-k8s-master1 ~]\# kubectl apply -f apiserver-to-kubelet-rbac.yaml
clusterrole.rbac.authorization.k8s.io/system:kube-apiserver-to-kubelet created
clusterrolebinding.rbac.authorization.k8s.io/system:kube-apiserver created
```

## 7.部署kubernetes calico网络组件

在6中master节点已经加入集群，但是状态一直处于NotReady状态，就是由于集群没有网络组件导致的，部署好网络组件，master节点立马会成为Ready状态。

```bash
1.部署calico
[root@binary-k8s-master1 ~]\# kubectl apply -f calico.yaml
configmap/calico-config created
customresourcedefinition.apiextensions.k8s.io/bgpconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/bgppeers.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/blockaffinities.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/clusterinformations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/felixconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/globalnetworkpolicies.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/globalnetworksets.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/hostendpoints.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ipamblocks.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ipamconfigs.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ipamhandles.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/ippools.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/kubecontrollersconfigurations.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/networkpolicies.crd.projectcalico.org created
customresourcedefinition.apiextensions.k8s.io/networksets.crd.projectcalico.org created
clusterrole.rbac.authorization.k8s.io/calico-kube-controllers created
clusterrolebinding.rbac.authorization.k8s.io/calico-kube-controllers created
clusterrole.rbac.authorization.k8s.io/calico-node created
clusterrolebinding.rbac.authorization.k8s.io/calico-node created
daemonset.apps/calico-node created
serviceaccount/calico-node created
deployment.apps/calico-kube-controllers created
serviceaccount/calico-kube-controllers created

2.查看资源状态
[root@binary-k8s-master1 ~]\# kubectl get pod -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-97769f7c7-bnwcl   1/1     Running   0          11m
calico-node-mghdj                         1/1     Running   0          11m

3.查看master节点的状态
[root@binary-k8s-master1 ~]\# kubectl get node
NAME          STATUS   ROLES    AGE   VERSION
k8s-master1   Ready    <none>   99m   v1.20.4
```

## 8.部署kubernetes node节点

### 8.1.解压二进制文件复制相关组件程序

以下操作仅在node1节点操作即可。

```bash
1.准备二进制程序
[root@binary-k8s-node1 ~]\# tar xf kubernetes-server-linux-amd64.tar.gz 
[root@binary-k8s-node1 ~]\# mkdir -p /data/kubernetes/{bin,config,ssl,logs} 
[root@binary-k8s-node1 ~]\# cp kubernetes/server/bin/{kubelet,kube-proxy} /data/kubernetes/bin/
[root@binary-k8s-node1 ~]\# cp kubernetes/server/bin/kubectl /usr/bin/

2.将master节点上的证书文件拷贝至node节点
[root@binary-k8s-master1 ~]\# scp -rp /data/kubernetes/ssl/* binary-k8s-node1:/data/kubernetes/ssl/
[root@binary-k8s-master1 ~]\# scp -rp /data/kubernetes/config/token.csv root@binary-k8s-node1:/data/kubernetes/config

3.删除从master节点上拷贝过来的kubelet证书
[root@binary-k8s-node1 ~]\# rm -rf /data/kubernetes/ssl/kubelet-client-*
#kubelet证书需要删除，当node节点的kubelet启动后会生成临时证书文件，当master授权通过后，证书文件产生
```

### 8.2.部署kubelet组件

#### 8.2.1.创建kubelet配置文件

```bash
[root@binary-k8s-node1 ~]\# vim /data/kubernetes/config/kubelet.conf 
KUBELET_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--hostname-override=binary-k8s-node1		#注意修改节点名称 \
--network-plugin=cni \
--kubeconfig=/data/kubernetes/config/kubelet.kubeconfig \
--bootstrap-kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig \
--config=/data/kubernetes/config/kubelet-config.yml \
--cert-dir=/data/kubernetes/ssl \
--pod-infra-container-image=pause-amd64:3.0"
```

#### 8.2.2.创建kubelet参数配置文件

```bash
[root@binary-k8s-node1 ~]\# vim /data/kubernetes/config/kubelet-config.yml
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
address: 0.0.0.0
port: 10250
readOnlyPort: 10255
cgroupDriver: cgroupfs
clusterDNS:
- 10.0.0.2
clusterDomain: cluster.local
failSwapOn: false
authentication:
  anonymous:
    enabled: false
  webhook:
    cacheTTL: 2m0s
    enabled: true
  x509:
    clientCAFile: /data/kubernetes/ssl/ca.pem
authorization:
  mode: Webhook
  webhook:
    cacheAuthorizedTTL: 5m0s
    cacheUnauthorizedTTL: 30s
evictionHard:
  imagefs.available: 15%
  memory.available: 100Mi
  nodefs.available: 10%
  nodefs.inodesFree: 5%
maxOpenFiles: 1000000
maxPods: 110
```

#### 8.2.3.创建bootstrap-kubeconfig文件

```bash
1.在kubeconfig文件中增加集群apiserver信息
[root@binary-k8s-node1 ~]\# kubectl config set-cluster kubernetes \
--certificate-authority=/data/kubernetes/ssl/ca.pem \
--embed-certs=true \
--server="https://192.168.20.10:6443" \
--kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig
  
2.在kubeconfig文件中增加token信息
[root@binary-k8s-master1 ~]\# kubectl config set-credentials "kubelet-bootstrap" \
--token=d7f96b0d86c574d0f64a713608db0922 \
--kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig
#这个token就是之前生成的/data/kubernetes/config/token.csv中的token
  
3.在kubeconfig文件中增加用户信息 
[root@binary-k8s-master1 ~]\# kubectl config set-context default \
--cluster=kubernetes \
--user="kubelet-bootstrap" \
--kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig

4.指定生成的kubeconfig文件为集群使用
[root@binary-k8s-master1 ~]\# kubectl config use-context default --kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig
```

#### 8.2.4.创建systemctl脚本并启动服务

```bash
1.编写systemctl服务脚本
[root@binary-k8s-node1 ~]\# vim /usr/lib/systemd/system/kubelet.service
[Unit]
Description=Kubernetes Kubelet
After=docker.service

[Service]
EnvironmentFile=/data/kubernetes/config/kubelet.conf
ExecStart=/data/kubernetes/bin/kubelet $KUBELET_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target

2.启动kubelet服务
[root@binary-k8s-node1 ~]\# systemctl daemon-reload
[root@binary-k8s-node1 ~]\# systemctl start kubelet
[root@binary-k8s-node1 ~]\# systemctl enable kubelet
[root@binary-k8s-node1 ~]\# systemctl status kubelet
```

#### 8.2.5.master节点授权同意node节点加入集群

kubelet服务启动后，会生成一个临时证书文件，然后向master节点发送一个csr授权请求，当master节点授权同意后，kubelet-clinet证书文件生成，端口也随之启动，节点正常加入集群。

csr列表的授权信息也会自动清空，如果master节点的授权不及时，也可以重启一下kubelet重新发送一个csr请求。

```bash
1.在node节点查看临时证书文件
[root@binary-k8s-node1 ~]\# ll /data/kubernetes/ssl/*.tmp
-rw-------. 1 root root  227 9月   6 11:28 kubelet-client.key.tmp
#只要kubelet启动就会产生一个临时证书文件

2.在master节点查看csr授权请求列表
[root@binary-k8s-master1 ~]\# kubectl get csr
NAME                                                   AGE    SIGNERNAME                                    REQUESTOR           CONDITION
node-csr-JmO7N8iDvyD0D-2Pu7_yHJ3ngZ5xXfA_TwRevqmHAXI   11s    kubernetes.io/kube-apiserver-client-kubelet   kubelet-bootstrap   Pending

3.授权通过
[root@binary-k8s-master1 ~]\# kubectl certificate approve node-csr-JmO7N8iDvyD0D-2Pu7_yHJ3ngZ5xXfA_TwRevqmHAXI
certificatesigningrequest.certificates.k8s.io/node-csr-JmO7N8iDvyD0D-2Pu7_yHJ3ngZ5xXfA_TwRevqmHAXI approved

4.此时临时文件已删除，已经生成kubelet证书文件
[root@binary-k8s-node1 ~]\# ll /data/kubernetes/ssl/kubelet-client*
-rw-------. 1 root root 1236 9月   6 11:28 kubelet-client-2021-09-06-11-28-54.pem
lrwxrwxrwx. 1 root root   59 9月   6 11:28 kubelet-client-current.pem -> /data/kubernetes/ssl/kubelet-client-2021-09-06-11-28-54.pem

5.node1节点成功加入集群
[root@binary-k8s-master1 ~]\# kubectl get node
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    <none>   2d22h   v1.20.4
binary-k8s-node1     Ready    <none>   4h59m   v1.20.4

6.在node节点查看kubelet服务的端口
[root@binary-k8s-node1 ~]\# netstat -lnpt | grep kubelet
tcp        0      0 127.0.0.1:10248         0.0.0.0:*               LISTEN      29220/kubelet       
tcp        0      0 127.0.0.1:44151         0.0.0.0:*               LISTEN      29220/kubelet       
tcp6       0      0 :::10250                :::*                    LISTEN      29220/kubelet       
tcp6       0      0 :::10255                :::*                    LISTEN      29220/kubelet
```

### 8.3.部署kube-proxy组件

#### 8.3.1.创建kube-proxy配置文件

```bash
[root@binary-k8s-node1 ~]\# vim /data/kubernetes/config/kube-proxy.conf
KUBE_PROXY_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--config=/data/kubernetes/config/kube-proxy-config.yml"
```

#### 8.3.2.创建kube-proxy参数配置文件

```bash
[root@binary-k8s-node1 ~]\# vim /data/kubernetes/config/kube-proxy-config.yml
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0									#监听地址
metricsBindAddress: 0.0.0.0:10249							#监听端口
clientConnection:
  kubeconfig: /data/kubernetes/config/kube-proxy.kubeconfig			#kubeconfig文件用于和apiserver通信
hostnameOverride: binary-k8s-node1				#当前节点名称
clusterCIDR: 10.244.0.0/16
```

#### 8.3.3.生成kube-config文件

由于kube-proxy的证书文件在8.1中已经从master节点拷贝到node节点了，因此直接生成kubeconfig文件即可。

集群中不同节点的组件都要用同一个证书文件。

```bash
1.生成kubeconfig文件
#在kubeconfig文件中增加集群apiserver信息
[root@binary-k8s-node1 ~]\# kubectl config set-cluster kubernetes \
--certificate-authority=/data/kubernetes/ssl/ca.pem \
--embed-certs=true \
--server="https://192.168.20.10:6443" \
--kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig
#在kubeconfig文件中增加证书文件信息 
[root@binary-k8s-node1 ~]\# kubectl config set-credentials kube-proxy \
--client-certificate=/data/kubernetes/ssl/kube-proxy.pem \
--client-key=/data/kubernetes/ssl/kube-proxy-key.pem \
--embed-certs=true \
--kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig
#在kubeconfig文件中增加用户信息 
[root@binary-k8s-node1 ~]\# kubectl config set-context default \
--cluster=kubernetes \
--user=kube-proxy \
--kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig

2.指定生成的kubeconfig文件为集群使用
[root@binary-k8s-node1 ~]\# kubectl config use-context default --kubeconfig=/data/kubernetes/config/kube-proxy.kubeconfig
```

#### 8.3.4.创建systemctl脚本管理服务

```bash
[root@binary-k8s-node1 ~]\# vim /usr/lib/systemd/system/kube-proxy.service
[Unit]
Description=Kubernetes Proxy
After=network.target

[Service]
EnvironmentFile=/data/kubernetes/config/kube-proxy.conf
ExecStart=/data/kubernetes/bin/kube-proxy $KUBE_PROXY_OPTS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.targ
```

#### 8.3.5.启动kube-proxy组件

```bash
1.启动服务
[root@binary-k8s-node1 ~]\# systemctl daemon-reload
[root@binary-k8s-node1 ~]\# systemctl start kube-proxy
[root@binary-k8s-node1 ~]\# systemctl enable kube-proxy

2.查看端口
[root@binary-k8s-node1 ~]\# netstat -lnpt | grep kube-proxy
tcp6       0      0 :::10249                :::*                    LISTEN      26954/kube-proxy    
tcp6       0      0 :::10256                :::*                    LISTEN      26954/kube-proxy  
```

### 8.4.快速增加新的node节点

二进制部署的程序特别好的一个地方就在于，能够快速部署一个新的服务，做法就是直接拷贝已经部署好的目录到一个新的位置，改改其中的参数即可启动使用了。

#### 8.4.1.将kubelet和kube-proxy目录拷贝至新的node节点

要拷贝kubelet和kube-proxy部署目录以及systemctl启动脚本文件。

```bash
[root@binary-k8s-node1 ~]\# scp -rp /data/kubernetes root@binary-k8s-node2:/data
[root@binary-k8s-node1 ~]\# scp /usr/lib/systemd/system/kube* root@binary-k8s-node2:/usr/lib/systemd/system/
```

#### 8.4.2.配置并启动kubelet组件

```bash
1.删除没用的证书文件
[root@binary-k8s-node2 ~]\# rm -rf /data/kubernetes/ssl/kubelet-client-*

2.修改kubelet配置文件中的节点名称
[root@binary-k8s-node2 ~]\# vim /data/kubernetes/config/kubelet.conf 
KUBELET_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/data/kubernetes/logs \
--hostname-override=binary-k8s-node2 \
--network-plugin=cni \
--kubeconfig=/data/kubernetes/config/kubelet.kubeconfig \
--bootstrap-kubeconfig=/data/kubernetes/config/bootstrap.kubeconfig \
--config=/data/kubernetes/config/kubelet-config.yml \
--cert-dir=/data/kubernetes/ssl \
--pod-infra-container-image=pause-amd64:3.0"
#将--hostname-override值修改为当前节点名称即可

3.启动kubelet
[root@binary-k8s-node2 ~]\# systemctl daemon-reload 
[root@binary-k8s-node2 ~]\# systemctl start kubelet
[root@binary-k8s-node2 ~]\# systemctl enable kubelet
```

#### 8.4.3.master节点授权新node节点的请求

```bash
1.master节点查看授权信息列表
[root@binary-k8s-master1 ~]\# kubectl get csr
NAME                                                   AGE   SIGNERNAME                                    REQUESTOR           CONDITION
node-csr-u_AHUS7T5rku-hnhnGsGi8uGBqlgMquOq_3oq6jrOyE   48s   kubernetes.io/kube-apiserver-client-kubelet   kubelet-bootstrap   Pending

2.授权通过node节点的kubelet
[root@binary-k8s-master1 ~]\# kubectl certificate approve node-csr-u_AHUS7T5rku-hnhnGsGi8uGBqlgMquOq_3oq6jrOyE
certificatesigningrequest.certificates.k8s.io/node-csr-u_AHUS7T5rku-hnhnGsGi8uGBqlgMquOq_3oq6jrOyE approved

3.成功加入集群
[root@binary-k8s-master1 ~]\# kubectl get node
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    <none>   2d23h   v1.20.4
binary-k8s-node1     Ready    <none>   5h54m   v1.20.4
binary-k8s-node2     Ready    <none>   1s      v1.20.4

4.查看kubelet的端口
[root@binary-k8s-node2 ~]\# netstat -lnpt | grep kube
tcp        0      0 127.0.0.1:41121         0.0.0.0:*               LISTEN      16694/kubelet       
tcp        0      0 127.0.0.1:10248         0.0.0.0:*               LISTEN      16694/kubelet       
tcp6       0      0 :::10250                :::*                    LISTEN      16694/kubelet       
tcp6       0      0 :::10255                :::*                    LISTEN      16694/kubelet
```

#### 8.4.4.配置并启动kube-proxy组件

```bash
1.修改kube-proxy参数配置文件中的主机名
[root@binary-k8s-node2 ~]\# vim /data/kubernetes/config/kube-proxy-config.yml 
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
  kubeconfig: /data/kubernetes/config/kube-proxy.kubeconfig
hostnameOverride: binary-k8s-node2
clusterCIDR: 10.244.0.0/16

2.启动kubelet
[root@binary-k8s-node2 ~]\# systemctl daemon-reload 
[root@binary-k8s-node2 ~]\# systemctl start kube-proxy
[root@binary-k8s-node2 ~]\# systemctl enable kube-proxy

3查看kube-proxy端口
[root@binary-k8s-node2 ~]\# netstat -lnpt | grep kube
tcp        0      0 127.0.0.1:41121         0.0.0.0:*               LISTEN      16694/kubelet       
tcp        0      0 127.0.0.1:10248         0.0.0.0:*               LISTEN      16694/kubelet       
tcp6       0      0 :::10249                :::*                    LISTEN      20410/kube-proxy    
tcp6       0      0 :::10250                :::*                    LISTEN      16694/kubelet       
tcp6       0      0 :::10255                :::*                    LISTEN      16694/kubelet       
tcp6       0      0 :::10256                :::*                    LISTEN      20410/kube-proxy
```

## 9.为集群部署coredns组件

### 9.1.部署coredns组件

```bash
1.coredns.yaml文件内容
[root@binary-k8s-master1 ~]\# cat coredns.yaml 
# Warning: This is a file generated from the base underscore template file: coredns.yaml.base
apiVersion: v1
kind: ServiceAccount
metadata:
  name: coredns
  namespace: kube-system
  labels:
      kubernetes.io/cluster-service: "true"
      addonmanager.kubernetes.io/mode: Reconcile
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
    addonmanager.kubernetes.io/mode: Reconcile
  name: system:coredns
rules:
- apiGroups:
  - ""
  resources:
  - endpoints
  - services
  - pods
  - namespaces
  verbs:
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - get
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: "true"
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
    addonmanager.kubernetes.io/mode: EnsureExists
  name: system:coredns
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:coredns
subjects:
- kind: ServiceAccount
  name: coredns
  namespace: kube-system
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns
  namespace: kube-system
  labels:
      addonmanager.kubernetes.io/mode: EnsureExists
data:
  Corefile: |
    .:53 {
        log
        errors
        health {
            lameduck 5s
        }
        ready
        kubernetes cluster.local in-addr.arpa ip6.arpa {
            pods insecure
            fallthrough in-addr.arpa ip6.arpa
            ttl 30
        }
        prometheus :9153
        forward . /etc/resolv.conf
        cache 30
        loop
        reload
        loadbalance
    }
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: coredns
  namespace: kube-system
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: "true"
    addonmanager.kubernetes.io/mode: Reconcile
    kubernetes.io/name: "CoreDNS"
spec:
  # replicas: not specified here:
  # 1. In order to make Addon Manager do not reconcile this replicas parameter.
  # 2. Default is 1.
  # 3. Will be tuned in real time if DNS horizontal auto-scaling is turned on.
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
  selector:
    matchLabels:
      k8s-app: kube-dns
  template:
    metadata:
      labels:
        k8s-app: kube-dns
      annotations:
        seccomp.security.alpha.kubernetes.io/pod: 'runtime/default'
    spec:
      priorityClassName: system-cluster-critical
      serviceAccountName: coredns
      tolerations:
        - key: "CriticalAddonsOnly"
          operator: "Exists"
      nodeSelector:
        kubernetes.io/os: linux
      containers:
      - name: coredns
        image: coredns:1.6.7
        imagePullPolicy: IfNotPresent
        resources:
          limits:
            memory: 512Mi 
          requests:
            cpu: 100m
            memory: 70Mi
        args: [ "-conf", "/etc/coredns/Corefile" ]
        volumeMounts:
        - name: config-volume
          mountPath: /etc/coredns
          readOnly: true
        ports:
        - containerPort: 53
          name: dns
          protocol: UDP
        - containerPort: 53
          name: dns-tcp
          protocol: TCP
        - containerPort: 9153
          name: metrics
          protocol: TCP
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
            scheme: HTTP
          initialDelaySeconds: 60
          timeoutSeconds: 5
          successThreshold: 1
          failureThreshold: 5
        readinessProbe:
          httpGet:
            path: /ready
            port: 8181
            scheme: HTTP
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            add:
            - NET_BIND_SERVICE
            drop:
            - all
          readOnlyRootFilesystem: true
      dnsPolicy: Default
      volumes:
        - name: config-volume
          configMap:
            name: coredns
            items:
            - key: Corefile
              path: Corefile
---
apiVersion: v1
kind: Service
metadata:
  name: kube-dns
  namespace: kube-system
  annotations:
    prometheus.io/port: "9153"
    prometheus.io/scrape: "true"
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: "true"
    addonmanager.kubernetes.io/mode: Reconcile
    kubernetes.io/name: "CoreDNS"
spec:
  selector:
    k8s-app: kube-dns
  clusterIP: 10.0.0.2 
  ports:
  - name: dns
    port: 53
    protocol: UDP
  - name: dns-tcp
    port: 53
    protocol: TCP
  - name: metrics
    port: 9153
    protocol: TCP

2.部署coredns
[root@binary-k8s-master1 ~]\# kubectl apply -f coredns.yaml 
serviceaccount/coredns created
clusterrole.rbac.authorization.k8s.io/system:coredns created
clusterrolebinding.rbac.authorization.k8s.io/system:coredns created
configmap/coredns created
deployment.apps/coredns created
service/kube-dns created
```

### 9.2.运行一个busybox容器测试dns

```bash
[root@binary-k8s-master1 ~]\# kubectl run -it --rm dns-test --image=busybox:1.28.4 sh
If you don't see a command prompt, try pressing enter.
/ # nslookup kubernetes
Server:    10.0.0.2
Address 1: 10.0.0.2 kube-dns.kube-system.svc.cluster.local

Name:      kubernetes
Address 1: 10.0.0.1 kubernetes.default.svc.cluster.local

/ # nslookup kube-dns.kube-system
Server:    10.0.0.2
Address 1: 10.0.0.2 kube-dns.kube-system.svc.cluster.local

Name:      kube-dns.kube-system
Address 1: 10.0.0.2 kube-dns.kube-system.svc.cluster.local
/ # exit
```

## 10.扩容master节点组建kubernetes高可用集群

### 10.1.kubernetes高可用架构概念

kubernetes集群通过健康检查和重启策略实现了Pod故障自愈能力，也通过调度算法实现将Pod分布式部署，并可以通过设置Pod的副本数，实现高并发能力，即使Node节点出现故障，Master节点也会将故障的Node节点上的Pod迁移到正常工作的Node节点上，实现应用层的高可用性

针对Kubernetes集群，高可用性包括Etcd数据库高可用、Matser节点组件的高可用，Etcd可以通过集群方式实现高可用，而只有单台Master节点，一旦Master节点上的组件出现了故障，整个集群将会不可用。

Master节点是属于控制整个集群的角色，所有的组件都需要与Master节点的ApiServer进行交互，不断与Node节点上的Kubelet和Kube-Proxy进行通信来维护整个集群的工作状态，如果ApiServer发生故障，将无法与Node节点进行通信，也就无法管理集群。

因此Kubernetes集群最主要的就是对Master节点进行高可用配置。

Master节点主要有三个服务：kube-apiserver、kube-controller-manage、kube-scheduler，当集群有多台Master节点时，其中kube-controller-manage和kube-scheduler都可以通过自身的选举机制实现高可用，但是kube-apiserver就没有这种机制，因此主要针对kube-apiserver配置高可用即可，kube-apiserver提供的是HTTP API接口服务，因此可以像web服务那种，使用nginx+keepalived方式实现Master节点高可用，并且也可以水平扩容。

配置kubernetes集群高可用的主要步骤就是：

 1、增加一台或多台Master节点，部署Master节点相关组件，在这个master节点上配置的监听地址还是自身的地址；

 2、在新增的Master节点上部署etcd，使etcd加入现有的etcd集群，使etcd的性能更强；

 3、配置nginx+keepalived实现Apiserver组件高可用；

 4、配置所有的Node节点，将所配置的Apiserver地址改成keepalived虚拟出来的VIP地址，实现集群高可用；

高可用kubernetes集群一般3台master节点足矣，但是etcd数据库一定要多多益善

### 10.2.在集群中新增一个etcd节点

扩容etcd步骤：

 1、部署一台单节点的etcd，能够正常启动服务

 2、在现有etcd集群中增加新的etcd节点

 3、将单点的etcd配置成集群模式

 4、删除单点造成的数据文件

 5、所有节点修改配置文件增加新的etcd节点信息

 6、重启所有etcd节点

#### 10.2.1.首先新增加一台单点的etcd

```bash
1.安装etcd程序
[root@binary-k8s-master2 ~]\# tar xf etcd-v3.4.9-linux-amd64.tar.gz 
[root@binary-k8s-master2 ~]\# mkdir /data/etcd/{bin,conf,ssl,data} -p
[root@binary-k8s-master2 ~]\# mv etcd-v3.4.9-linux-amd64/etcd* /data/etcd/bin/

2.创建单点配置文件
[root@binary-k8s-master2 ~]\# vim /data/etcd/conf/etcd.conf 
#[Service]
ETCD_NAME="etcd-4"
ETCD_DATA_DIR="/data/etcd/data"
ETCD_LISTEN_PEER_URLS="https://192.168.20.11:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.20.11:2379,http://127.0.0.1:2379"

#[cluster]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.20.11:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.20.11:2379,http://127.0.0.1:2379"
ETCD_INITIAL_CLUSTER="etcd-4=https://192.168.20.11:2380"
ETCD_INITIAL_CLUSTER_STATE="new"

4.拷贝证书文件
[root@binary-k8s-master2 ~]\# scp root@192.168.20.10:/data/etcd/ssl/* /data/etcd/ssl/

5.拷贝systemctl管理脚本
[root@binary-k8s-master2 ~]\# scp root@192.168.20.10:/usr/lib/systemd/system/etcd.service /usr/lib/systemd/system/

6.启动etcd服务
[root@binary-k8s-master2 ~]\# systemctl daemon-reload
[root@binary-k8s-master2 ~]\#  systemctl start etcd

7.查看端口
[root@binary-k8s-master2 ~]\# netstat -lnpt | grep etcd
tcp        0      0 192.168.20.11:2379      0.0.0.0:*               LISTEN      15753/etcd          
tcp        0      0 127.0.0.1:2379          0.0.0.0:*               LISTEN      15753/etcd          
tcp        0      0 192.168.20.11:2380      0.0.0.0:*               LISTEN      15753/etcd 

8.查看节点状态
[root@binary-k8s-master2 ~]\# /data/etcd/bin/etcdctl endpoint health --write-out=table
+----------------+--------+------------+-------+
|    ENDPOINT    | HEALTH |    TOOK    | ERROR |
+----------------+--------+------------+-------+
| 127.0.0.1:2379 |   true | 7.146222ms |       |
+----------------+--------+------------+-------+
```

#### 10.2.2.在现有etcd集群任意一个节点上增加新etcd节点

> 增加节点的命令为：`/data/etcd/bin/etcdctl member add 节点名称 --peer-urls="通信地址"`

```bash
1.增加etcd-4节点
[root@binary-k8s-master1 ~]\# /data/etcd/bin/etcdctl member add etcd-4 --peer-urls="https://192.168.20.11:2380"
Member aae107adddd0d3d8 added to cluster 20b119eb5f91aa4b

ETCD_NAME="etcd-4"
ETCD_INITIAL_CLUSTER="etcd-2=https://192.168.20.12:2380,etcd-1=https://192.168.20.10:2380,etcd-3=https://192.168.20.13:2380,etcd-4=https://192.168.20.11:2380"
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.20.11:2380"
ETCD_INITIAL_CLUSTER_STATE="existing"
#输出的配置信息一定要在新的etcd-4节点的配置文件写入，否则会加入集群失败

2.查看集群节点列表
[root@binary-k8s-master1 ~]\# /data/etcd/bin/etcdctl member list --write-out=table
+------------------+-----------+--------+----------------------------+--------------------------------------------------+------------+
|        ID        |  STATUS   |  NAME  |         PEER ADDRS         |                   CLIENT ADDRS                   | IS LEARNER |
+------------------+-----------+--------+----------------------------+--------------------------------------------------+------------+
| 12446003b2a53d43 |   started | etcd-2 | https://192.168.20.12:2380 | http://127.0.0.1:2379,https://192.168.20.12:2379 |      false |
| 51ae3f86f3783687 |   started | etcd-1 | https://192.168.20.10:2380 | http://127.0.0.1:2379,https://192.168.20.10:2379 |      false |
| 667c9c7ba890c3f7 |   started | etcd-3 | https://192.168.20.13:2380 | http://127.0.0.1:2379,https://192.168.20.13:2379 |      false |
| aae107adddd0d3d8 | unstarted |        | https://192.168.20.11:2380 |                                                  |      false |
+------------------+-----------+--------+----------------------------+--------------------------------------------------+------------+
#发现刚刚新加入的etcd-4节点处于unstarted状态，我们需要再配置etcd-4节点使用能够加入集群
```

#### 10.2.3.配置新增的etcd节点加入集群

在已有集群增加完新节点之后，还需要将新的etcd节点配置文件增加集群相关属性，然后删除由单点时造成的etcd数据文件，最后在所有节点的配置文件中增加新节点的通信地址，重启所有节点的etcd服务，到此扩容成功。

主要在新的etcd节点中配置ETCD\_NAME、ETCD\_INITIAL\_CLUSTER、ETCD\_INITIAL\_CLUSTER\_TOKEN、ETCD\_INITIAL\_CLUSTER\_STATE这三个参数。

ETCD\_NAME：集群节点名称

ETCD\_INITIAL\_CLUSTER：由单点的一个节点信息改成集群所有节点的信息

ETCD\_INITIAL\_CLUSTER\_TOKEN：填写集群的唯一标识，表示加入哪个etcd集群

ETCD\_INITIAL\_CLUSTER\_STATE：集群状态调整为加入已存在的集群

```bash
1.修改etcd配置文件，增加集群配置参数
[root@binary-k8s-master2 ~]\# vim /data/etcd/conf/etcd.conf 
#[Service]
ETCD_NAME="etcd-4"
ETCD_DATA_DIR="/data/etcd/data"
ETCD_LISTEN_PEER_URLS="https://192.168.20.11:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.20.11:2379,http://127.0.0.1:2379"

#[cluster]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.20.11:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.20.11:2379,http://127.0.0.1:2379"
ETCD_INITIAL_CLUSTER="etcd-2=https://192.168.20.12:2380,etcd-1=https://192.168.20.10:2380,etcd-3=https://192.168.20.13:2380,etcd-4=https://192.168.20.11:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="existing"

2.删除由单点时产生的数据文件
#如果不删除，加入集群时会失败
[root@binary-k8s-master2 ~]\# rm -rf /data/etcd/data/*

3.所有etcd的配置文件中增加新节点的通信地址
注意：所有etcd节点的配置文件都要增加这一行配置
vim /data/etcd/conf/etcd.conf 
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.20.10:2380,etcd-2=https://192.168.20.12:2380,etcd-3=https://192.168.20.13:2380,etcd-4=https://192.168.20.11:2380"

4.重启所有节点的ectd服务
[root@binary-k8s-master1 ~]\# systemctl restart etcd
[root@binary-k8s-master2 ~]\# systemctl restart etcd
[root@binary-k8s-node1 ~]\# systemctl restart etcd
[root@binary-k8s-node2 ~]\# systemctl restart etcd

5.再次查看集群的节点信息
[root@binary-k8s-master1 ~]\# /data/etcd/bin/etcdctl member list --write-out=table
+------------------+---------+--------+----------------------------+--------------------------------------------------+------------+
|        ID        | STATUS  |  NAME  |         PEER ADDRS         |                   CLIENT ADDRS                   | IS LEARNER |
+------------------+---------+--------+----------------------------+--------------------------------------------------+------------+
| 12446003b2a53d43 | started | etcd-2 | https://192.168.20.12:2380 | http://127.0.0.1:2379,https://192.168.20.12:2379 |      false |
| 51ae3f86f3783687 | started | etcd-1 | https://192.168.20.10:2380 | http://127.0.0.1:2379,https://192.168.20.10:2379 |      false |
| 667c9c7ba890c3f7 | started | etcd-3 | https://192.168.20.13:2380 | http://127.0.0.1:2379,https://192.168.20.13:2379 |      false |
| aae107adddd0d3d8 | started | etcd-4 | https://192.168.20.11:2380 | http://127.0.0.1:2379,https://192.168.20.11:2379 |      false |
+------------------+---------+--------+----------------------------+--------------------------------------------------+------------+
#etcd到此扩容成功
```

#### 10.2.4.配置kube-apiserver增加新的etcd节点

etcd节点新增完，需要配置下kube-apiserver组件，增加新的etcd节点信息。

注意所有k8s master节点都必须修改配置kube-apiserver.conf文件增加新的etcd节点，否则etcd也不会为k8s所用。

```bash
1.master节点修改配置文件增加新的etcd节点
[root@binary-k8s-master1 ~]\# vim /data/kubernetes/config/kube-apiserver.conf 
······
--etcd-servers=https://192.168.20.10:2379,https://192.168.20.12:2379,https://192.168.20.13:2379,https://192.168.20.11:2379 \
······

2.重启apiserver组件
[root@binary-k8s-master1 ~]\# systemctl restart kube-apiserver

3.查看组件信息
[root@binary-k8s-master1 ~]\# kubectl get cs -o wide
Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok                  
scheduler            Healthy   ok                  
etcd-2               Healthy   {"health":"true"}   
etcd-0               Healthy   {"health":"true"}   
etcd-3               Healthy   {"health":"true"}   
etcd-1               Healthy   {"health":"true"}   
```

### 10.3.部署master-2节点

由于所有组件都是二进制方式部署的，因此可以在master1上将目录直接拷贝至master2上即可使用。

#### 10.3.1.部署docker

```bash
1.安装docker
[root@binary-k8s-master2 ~]\# tar xf docker-19.03.9.tgz 
[root@binary-k8s-master2 ~]\# cp docker/* /usr/bin/

2.拷贝master1节点上的docker配置文件
[root@binary-k8s-master2 ~]\# scp -rp root@binary-k8s-master1:/etc/docker /etc/

3.拷贝master1节点上的docker systemctl脚本
[root@binary-k8s-master2 ~]\# scp -rp root@binary-k8s-master1:/usr/lib/systemd/system/docker.service /usr/lib/systemd/system/

4.启动docker
[root@binary-k8s-master2 ~]\# systemctl daemon-reload
[root@binary-k8s-master2 ~]\# systemctl start docker
[root@binary-k8s-master2 ~]\# systemctl enable docker
```

#### 10.3.2.部署kubernetes各个组件

由于是二进制部署，直接拷贝master1节点上的/data/kubernetes目录即可，/data/kubernetes目录下包含了所有的master以及node相关组件

master节点需要安装所有的master组件和node组件。

**1.准备二进制程序**

```bash
1.拷贝组件文件
[root@binary-k8s-master1 ~]\# scp -rp /data/kubernetes root@binary-k8s-master2:/data
[root@binary-k8s-master1 ~]\# scp /usr/bin/kubectl root@binary-k8s-master2:/usr/bin
[root@binary-k8s-master1 ~]\# scp -rp /usr/lib/systemd/system/kube* root@binary-k8s-master2:/usr/lib/systemd/system/
[root@binary-k8s-master1 ~]\# scp -rp .kube root@binary-k8s-master2:/root

2.如果没有扩容新的etcd节点的情况需要拷贝etcd证书
[root@binary-k8s-master1 ~]\# scp -rp /data/etcd/ssl root@binary-k8s-master2:/data/etcd/ss

3.删除kubelet文件
#kubelet某些问题都是动态生成的，且每个节点都不相同，因此需要删除重新生成
[root@binary-k8s-master2 ~]\# rm -rf /data/kubernetes/config/kubelet.kubeconfig 
[root@binary-k8s-master2 ~]\# rm -rf /data/kubernetes/ssl/kubelet-client-*
```

**2.修改各个组件的配置文件**

主要就是修改各个组件监听的本机ip地址和节点名称，生成的kubeconfig文件中的apiserver地址无需更改，保持master1即可，因为最后高可用的时候还是会改成VIP地址，当前无需更改。

```bash
1.修改kube-apiserver配置文件中的IP地址
[root@binary-k8s-master2 ~]\# vim /data/kubernetes/config/kube-apiserver.conf 
······
--bind-address=192.168.20.11  \
--advertise-address=192.168.20.11 \
······

2.修改kube-controller-manager配置文件中的IP地址
[root@binary-k8s-master2 ~]\# vim /data/kubernetes/config/kube-controller-manager.conf 
······
--bind-address=192.168.20.11 \
······

3.修改kube-scheduler配置文件中的IP地址
[root@binary-k8s-master2 ~]\# vim /data/kubernetes/config/kube-scheduler.conf 
······
--bind-address=192.168.20.11"
······

4.修改kubelet配置文件中的IP地址
[root@binary-k8s-master2 ~]\# vim /data/kubernetes/config/kubelet.conf 
······
--hostname-override=binary-k8s-master2 \
······

5.修改kube-apiserver配置文件中的IP地址
[root@binary-k8s-master2 ~]\# vim /data/kubernetes/config/kube-proxy-config.yml 
······
hostnameOverride: binary-k8s-master2
······
```

**3.启动各个组件**

```bash
[root@binary-k8s-master2 ~]\# systemctl daemon-reload 
[root@binary-k8s-master2 ~]\# systemctl start kube-apiserver
[root@binary-k8s-master2 ~]\# systemctl start kube-controller-manager
[root@binary-k8s-master2 ~]\# systemctl start kube-scheduler
[root@binary-k8s-master2 ~]\# systemctl start kubelet
[root@binary-k8s-master2 ~]\# systemctl start kube-proxy
[root@binary-k8s-master2 ~]\# systemctl enable kube-apiserver
[root@binary-k8s-master2 ~]\# systemctl enable kube-controller-manager
[root@binary-k8s-master2 ~]\# systemctl enable kube-scheduler
[root@binary-k8s-master2 ~]\# systemctl enable kubelet
[root@binary-k8s-master2 ~]\# systemctl enable kube-proxy
```

#### 10.3.3.授权master2节点加入集群

```bash
1.查看授权新系列表
[root@binary-k8s-master2 ~]\# kubectl get csr
NAME                                                   AGE     SIGNERNAME                                    REQUESTOR           CONDITION
node-csr-fgCu0hUU4sK9-jaLzl8n-H4MVWi314NhzYssddgThOE   4m45s   kubernetes.io/kube-apiserver-client-kubelet   kubelet-bootstrap   Pending

2.授权通过
[root@binary-k8s-master2 ~]\# kubectl certificate approve node-csr-fgCu0hUU4sK9-jaLzl8n-H4MVWi314NhzYssddgThOE
certificatesigningrequest.certificates.k8s.io/node-csr-fgCu0hUU4sK9-jaLzl8n-H4MVWi314NhzYssddgThOE approved

3.查看是否加入集群
[root@binary-k8s-master2 ~]\# kubectl get node
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    <none>   4d21h   v1.20.4
binary-k8s-master2   Ready    <none>   4m33s   v1.20.4
binary-k8s-node1     Ready    <none>   2d3h    v1.20.4
binary-k8s-node2     Ready    <none>   45h     v1.20.4

4.查看核心组件状态
[root@binary-k8s-master2 ~]\# kubectl get cs
Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok                  
scheduler            Healthy   ok                  
etcd-1               Healthy   {"health":"true"}   
etcd-2               Healthy   {"health":"true"}   
etcd-0               Healthy   {"health":"true"}   
```

### 10.4.部署Nginx+Keepalived实现kubernetes高可用集群

keepalived是主流的高可用软件，基于VIP绑定实现服务器的双机热备，可以理解为keepalived是针对服务器IP的高可用集群，如果A机器宕机了，B机器会立刻成为master角色，抢占VIP地址，使其不间断的提供服务，从而形成高可用集群。

使用nginx+keepalived做得k8s master节点高可用集群，只要master节点上面没有etcd组件，那么整个集群master节点只要有一个工作正常，整个集群就不会宕机。

生产环境中nginx+keepalived是独立于集群之外的两台服务器，高可用集群一般情况下都是一主一备，两个节点就可以满足正常需求，正好master节点有2个，可以在两个master上都部署nginx和keepalived形成高可用集群。

我们采用nginx四层负载均衡，四层负载均衡的作用就是对IP进行负载，不涉及应用层，由于我们使用keepalived做高可用集群，keepalived就是针对IP地址实现高可用，因此需要配合nginx四层负载均衡来实现，当用户访问keepalived的VIP时，直接将请求转发到对应的master角色主机上，将VIP地址转换成master节点IP+端口，这样一来，即使master1挂掉了，master2成为了master角色，请求转发进来，也会将VIP转换成master2节点的地址，高可用也就实现了。

**kube-apiserver高可用架构图**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/4166bf6696044bc1b4f47efb7cf03acd.png)

#### 10.4.1.部署Nginx负载均衡

master1和master2上的nginx部署和配置文件内容一样，这里只写master1的操作步骤。

nginx负载均衡采用四层负载。

```bash
1.安装nginx和keepalived及nginx四层负载均衡模块等软件
[root@binary-k8s-master1 ~]\#  yum -y install nginx keepalived nginx-mod-stream

2.修改nginx主配置文件增加include模块引入4层负载配置文件
[root@binary-k8s-master1 ~]\# vim /etc/nginx/nginx.conf
include /etc/nginx/conf.c/*.conf;			#17行左右，与http模块同级

3.编写配置文件
[root@binary-k8s-master1 ~]\# mkdir /etc/nginx/conf.c
[root@binary-k8s-master1 ~]\# vim /etc/nginx/conf.c/k8s-apiserver.conf 
stream {
	log_format  main  '$remote_addr $upstream_addr - [$time_local] $status $upstream_bytes_sent';

	access_log /var/log/nginx/k8s-apiserver.log main;
	
	upstream k8s-apiserver {
		server 192.168.20.11:6443;
		server 192.168.20.12:6443;
	}
	
	server {
		listen 16443;			#由于我们的nginx与k8s master在同一台机器上，防止端口冲突，因此改为16443端口
		proxy_pass k8s-apiserver;
	}
}

4.启动nginx
[root@binary-k8s-master1 ~]\# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[root@binary-k8s-master1 ~]\# nginx

5.查看端口
[root@binary-k8s-master1 ~]\# netstat -lnpt | grep 16443
tcp        0      0 0.0.0.0:16443           0.0.0.0:*               LISTEN      3181/nginx: worker 
```

#### 10.4.2.部署keepalived双机热备

在配置keepalived的时候也需要配置一个**vrrp\_script**模块，keepalived只能做到对网络故障和keepalived本身的监控，即当出现网络故障或者keepalived本身出现问题时，进行切换。但是这些还不够，我们还需要监控keepalived所在服务器上的其他业务进程，比如说nginx，keepalived+nginx实现nginx的负载均衡高可用，如果nginx异常，仅仅keepalived保持正常，是无法完成系统的正常工作的，因此需要根据业务进程的运行状态决定是否需要进行主备切换。这个时候，我们可以通过编写脚本对nginx进程进行检测监控。

**1.MASTER节点部署**

```bash
1.安装keepalived
[root@binary-k8s-master1 ~]\#  yum -y install keepalived

2.配置keepalived
[root@binary-k8s-master1 ~]\# vim /etc/keepalived/keepalived.conf 
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id NGINX_MASTER
}

vrrp_script check_nginx {				#定义健康检查脚本
    script "/etc/keepalived/check_nginx.sh"
}

vrrp_instance VI_1 {
    state MASTER					#状态为MASTER
    interface ens192				#将VIP绑定在哪块网卡上
    virtual_router_id 51			#实例ID，集群所有节点都要保持一致
    priority 100					#优先级，255最高
    advert_int 1					#指定VRRP心跳包通告间隔时间，默认1秒
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.20.9/23					#定义VIP地址
    }
    track_script {	
        check_nginx					
    }
}

3.编写检查nginx状态的检查脚本
#当nginx异常时，自动将当前主机的keepalived进程关闭，使BACKUP上的keepalived成为MASTER继续提供服务
[root@binary-k8s-master1 ~]\# vim /etc/keepalived/check_nginx.sh 
nginx_ch=`netstat -lnpt | grep 16443| egrep -cv grep`
if [ $nginx_ch -eq 0 ];then
	systemctl stop keepalived
	exit 1
else
	exit 0
fi

4.启动keepalived
[root@binary-k8s-master1 ~]\# systemctl start keepalived
[root@binary-k8s-master1 ~]\# systemctl enable keepalived

5.查看VIP地址
[root@binary-k8s-master1 ~]\# ip a | grep ens192
2: ens192: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet 192.168.20.10/23 brd 192.168.21.255 scope global noprefixroute ens192
    inet 192.168.20.9/23 scope global secondary ens192
#VIP已经准备就绪
```

**2.BACKUP节点部署**

```bash
1.安装keepalived
[root@binary-k8s-master2 ~]\#  yum -y install keepalived

2.配置keepalived
[root@binary-k8s-master2 ~]\# vim /etc/keepalived/keepalived.conf 
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id NGINX_MASTER
}

vrrp_script check_nginx {
    script "/etc/keepalived/check_nginx.sh"
}

vrrp_instance VI_1 {
    state BACKUP				#状态为BACKUP
    interface ens192
    virtual_router_id 51
    priority 90				#优先级要比MASTER低
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.20.9/23
    }
    track_script {
        check_nginx
    }
}


3.编写检查nginx状态的检查脚本
#当nginx异常时，自动将当前主机的keepalived进程关闭，使BACKUP上的keepalived成为MASTER继续提供服务
[root@binary-k8s-master1 ~]\# vim /etc/keepalived/check_nginx.sh 
nginx_ch=`netstat -lnpt | grep 16443| egrep -cv grep`
if [ $nginx_ch -eq 0 ];then
	systemctl stop keepalived
	exit 1
else
	exit 0
fi

4.启动keepalived
[root@binary-k8s-master1 ~]\# systemctl start keepalived
[root@binary-k8s-master1 ~]\# systemctl enable keepalived
```

#### 10.4.3.使用VIP访问kubernetes服务

可以正确获取到K8s版本信息，说明负载均衡器搭建正常。该请求数据流程：curl -> vip(nginx) -> apiserver。

日志中也会记录访问记录。

```bash
[root@binary-k8s-master1 ~]\# curl -k https://192.168.20.9:16443/version
{
  "major": "1",
  "minor": "20",
  "gitVersion": "v1.20.4",
  "gitCommit": "e87da0bd6e03ec3fea7933c4b5263d151aafd07c",
  "gitTreeState": "clean",
  "buildDate": "2021-02-18T16:03:00Z",
  "goVersion": "go1.15.8",
  "compiler": "gc",
  "platform": "linux/amd64"
}

[root@binary-k8s-master1 ~]\# tail -f /var/log/nginx/k8s-apiserver.log 
127.0.0.1 192.168.20.11:6443 - [09/Sep/2021:11:28:15 +0800] 200 79
127.0.0.1 192.168.20.11:6443 - [09/Sep/2021:11:28:20 +0800] 200 178
192.168.20.10 192.168.20.11:6443 - [09/Sep/2021:15:20:29 +0800] 200 178
192.168.20.10 192.168.20.12:6443, 192.168.20.11:6443 - [09/Sep/2021:16:19:00 +0800] 200 0, 420
```

#### 10.4.4.测试keepalived高可用

**1.停掉master1上的keepalived，查看VIP是否会切换到master2节点**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/dba9f62a2a0744c3b3ccc86981ad86a4.png)

**2.重新启动master1上的keepalived，查看VIP是否会自动切换到master1**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/54cdc63de7c040519287127263385c0c.png)

### 10.5.切换kubernetes集群为高可用模式

虽然我们增加了Master2 Node和负载均衡器，但是我们是从单Master架构扩容的，也就是说目前所有的Worker Node组件连接都还是Master1 Node，如果不改为连接VIP走负载均衡器，那么Master还是单点故障。

由于已经可以通过keepalived的VIP地址访问到apiserver，高可用效果已达成，目前只需要将集群的所有节点（kubectl get node）能看到的一切节点，将配置文件中的apiserver的地址换成VIP地址加端口，才能真正的实现kubernetes高可用。

之前前期使用VIP测试kube-apiserver没问题，即使在切换高可用的情况下，所有节点也不会处于NotReady状态。

**1.切换高可用环境**

```bash
1.binary-k8s-master1节点切换
[root@binary-k8s-master1 ~]\# sed -ri 's#192.168.20.10:6443#192.168.20.9:16443#' /data/kubernetes/config/*
[root@binary-k8s-master1 ~]\# sed -ri 's#192.168.20.10:6443#192.168.20.9:16443#' /root/.kube/config 
[root@binary-k8s-master1 ~]\# systemctl restart  kube-controller-manager kube-scheduler kubelet kube-proxy

2.binary-k8s-master2切换
[root@binary-k8s-master2 ~]\# sed -ri 's#192.168.20.10:6443#192.168.20.9:16443#' /data/kubernetes/config/*
[root@binary-k8s-master2 ~]\# sed -ri 's#192.168.20.10:6443#192.168.20.9:16443#' /root/.kube/config
[root@binary-k8s-master2 ~]\# systemctl restart  kube-controller-manager kube-scheduler kubelet kube-proxy

3.binary-k8s-node1切换
[root@binary-k8s-node1 ~]\# sed -ri 's#192.168.20.10:6443#192.168.20.9:16443#' /data/kubernetes/config/*
[root@binary-k8s-node1 ~]\# systemctl restart kubelet kube-proxy

4.binary-k8s-node2切换
[root@binary-k8s-node2 ~]\# sed -ri 's#192.168.20.10:6443#192.168.20.9:16443#' /data/kubernetes/config/*
[root@binary-k8s-node2 ~]\# systemctl restart kubelet kube-proxy
```

**2.查看集群状态及资源**

到此为止kubernetes高可用集群实现完毕

```bash
[root@binary-k8s-master1 ~]\# kubectl get node
NAME                 STATUS   ROLES    AGE     VERSION
binary-k8s-master1   Ready    <none>   5d22h   v1.20.4
binary-k8s-master2   Ready    <none>   25h     v1.20.4
binary-k8s-node1     Ready    <none>   3d5h    v1.20.4
binary-k8s-node2     Ready    <none>   2d23h   v1.20.4

[root@binary-k8s-master1 ~]\# kubectl get cs
Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok                  
scheduler            Healthy   ok                  
etcd-0               Healthy   {"health":"true"}   
etcd-1               Healthy   {"health":"true"}   
etcd-2               Healthy   {"health":"true"} 
```

## 11.测试kubernetes高可用集群

**1.停掉master1上的keepalived验证集群是否可用**

状态：“ok”

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/c146811a76994c2eb7ecea1a95bae2ab.png)

**2.停掉master1上所有k8s组件验证集群是否可用**

状态：“ok”

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/a5cfe03d354441798591ae5add26898e.png)

## 12.在kubernetes集群运行一套服务验证集群的可用性

简单部署一个基于nginx的web服务。

### 12.1.创建资源yaml文件

```bash
[root@binary-k8s-master1 ~]\# vim know-system.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-know-system
spec:
  replicas: 3
  selector:
    matchLabels:
      app: know-system-pod
  template:
    metadata:
      labels:
        app: know-system-pod
    spec:
      containers:
      - name: know-system
        image: know-system:v1
        ports:
        - containerPort: 80
      nodeName: binary-k8s-master1

---
apiVersion: v1
kind: Service
metadata:
  name: know-system-service
spec:
  selector:
    app: know-system-pod
  type: NodePort
  ports:
  - port: 80
    targetPort: 80
```

### 12.2.创建资源并进行测试

```bash
[root@binary-k8s-master1 ~]\# kubectl apply -f know-system.yaml 
deployment.apps/deploy-know-system created
service/know-system-service created

[root@binary-k8s-master1 ~]\# kubectl get pod,svc
NAME                                     READY   STATUS    RESTARTS   AGE
pod/deploy-know-system-b4c9c55d7-5mf2f   1/1     Running   0          47s
pod/deploy-know-system-b4c9c55d7-97ckx   1/1     Running   0          48s
pod/deploy-know-system-b4c9c55d7-kb97t   1/1     Running   0          47s

NAME                          TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)        AGE
service/know-system-service   NodePort    10.0.0.38    <none>        80:32702/TCP   47s
service/kubernetes            ClusterIP   10.0.0.1     <none>        443/TCP        10d
```

访问https://集群任意节点+32702端口即可浏览web服务。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/8c7dc7f2aad14d74a07b8ab6c35e09a9.png)

## 13.部署kubernetes dashboard

### 13.1.部署dashboard

```bash
1.部署yaml
[root@binary-k8s-master1 ~]\# kubectl apply -f kubernetes-dashboard.yaml 
namespace/kubernetes-dashboard created
serviceaccount/kubernetes-dashboard created
service/kubernetes-dashboard created
secret/kubernetes-dashboard-certs created
secret/kubernetes-dashboard-csrf created
secret/kubernetes-dashboard-key-holder created
configmap/kubernetes-dashboard-settings created
role.rbac.authorization.k8s.io/kubernetes-dashboard created
clusterrole.rbac.authorization.k8s.io/kubernetes-dashboard created
rolebinding.rbac.authorization.k8s.io/kubernetes-dashboard created
clusterrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard created
deployment.apps/kubernetes-dashboard created
service/dashboard-metrics-scraper created
deployment.apps/dashboard-metrics-scraper created

2.创建授权账号
[root@binary-k8s-master1 ~]\# kubectl create serviceaccount dashboard-admin -n kube-system
serviceaccount/dashboard-admin created
[root@binary-k8s-master1 ~]\# kubectl create clusterrolebinding dashboard-admin --clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin
clusterrolebinding.rbac.authorization.k8s.io/dashboard-admin created

3.查看登陆使用的token字符串
[root@binary-k8s-master1 ~]\# kubectl describe secrets -n kube-system $(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')
Name:         dashboard-admin-token-lnm2r
Namespace:    kube-system
Labels:       <none>
Annotations:  kubernetes.io/service-account.name: dashboard-admin
              kubernetes.io/service-account.uid: 73b370c9-b1b4-4418-b02d-fee9b6cf6342

Type:  kubernetes.io/service-account-token

Data
====
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IkgwWGJXQ1duVVI4eFh4Ykw2U25JVk9fa2hDOGZVRTRRMVZyVmdwWXM1Nk0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4tbG5tMnIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiNzNiMzcwYzktYjFiNC00NDE4LWIwMmQtZmVlOWI2Y2Y2MzQyIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRhc2hib2FyZC1hZG1pbiJ9.XWJLZDB7mNk_NNpXVv64LrbKy5f1hB2PS5qER5YFATzl3U9ISX05PCrnCEY-6uVSbPkRGZbTQZTBwiGjOfsyLZljvY3cbmGlH2oW2shUS8LDqli4MKA14JyUX1ubbQ8vq9uSqkQMCQBzZTUGIuZt95jw3-IMv2rfZ9ET8_uVuXIoZXbckY6VHFy8QOB6sy1n9j0j4qcOttyKHVXN8Q5KjsIlb44Y5HtiveKxpw_LA81eTwml_aiVvO9rgMKVdSHIg8CY1Mcp06ezz0kD0jsBLt7xaAujSNZnCiXzmpg51xujbR0k-4BVlwPBBpQLaSWGoHR3X7z5E02onXttbbX6-w
ca.crt:     1359 bytes
namespace:  11 bytes

4.查看pod的状态
[root@binary-k8s-master1 ~]\# kubectl get pod,svc -n kubernetes-dashboard
NAME                                             READY   STATUS    RESTARTS   AGE
pod/dashboard-metrics-scraper-7445d59dfd-bg9c8   1/1     Running   0          8m51s
pod/kubernetes-dashboard-5ddcdf9c99-nkgqw        1/1     Running   0          8m52s

NAME                                TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)         AGE
service/dashboard-metrics-scraper   ClusterIP   10.0.0.83    <none>        8000/TCP        8m52s
service/kubernetes-dashboard        NodePort    10.0.0.153   <none>        443:30001/TCP   8m53s
```

### 13.2.访问dashboard

访问https://集群任意节点+30001端口，然后填写刚刚查到的token值，点击登陆。

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/2c6c6346e8854ffcb85a23d3569c056e.png)

仪表盘

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/f2dfdb9364bb4b0e875851131d711e34.png)


> :warning:转载自：https://jiangxl.blog.csdn.net/article/details/120428703
>
> 仅略作修改。
