# Ceph- eploy 集群快速部署    

## 1.1 安装环境介绍

首先介绍一下Ceph安装部署的方法，Ceph社区提供了三种部署方法：

- ceph-deploy，一个集群自动化部署工具，使用较久，成熟稳定，被很多自动化工具所集成，可用于生产部署 

:warning:**注意：**ceph-deploy因某些原因不再积极维护，并且官方未在`Nautilus`版本以上做测试，所以你如果想要安装目前最新版本`octopus`还是选用其他部署方案，此外，该工具不支持REHL8、CentOS8等较新版本的Linux发行版。

- cephadm，较新的集群自动化部署工具，支持通过图形界面或者命令行界面添加节点，目前不建议用于生产环境
- manual，手动部署，一步步部署Ceph集群，支持较多定制化和了解部署细节，安装难度较大

我们采用成熟、简单的ceph-deploy实现Ceph集群的部署，首先了解一下ceph-deploy的架构：

- admin-node，需要一个安装管理节点，该安装节点集中管控ceph集群的安装
- mon，monitor节点，即是Ceph的监视管理节点，承担Ceph集群重要的管理任务，一般需要3或5个节点
- osd，OSD即Object Storage Daemon，实际负责数据存储的节点

![Ceph集群部署架构](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Ceph%E9%9B%86%E7%BE%A4%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2/1%20-%201620.jpg)

安装环境以三个节点的方式来完成Ceph集群的部署，如下是各个集群安装部署的信息：

- 硬件环境：腾讯云CVM，1core+2G+50G系统盘+50G数据盘
- 操作系统：CentOS Linux release 7.6.1810 (Core)
- 软件版本：Mimic 13.2.8
- 部署版本：ceph-deploy  2.0.1

| 节点名称 |         角色说明         |    IP地址    | 备注说明                                                     |
| :------: | :----------------------: | :----------: | :----------------------------------------------------------- |
|  node-1  | admin-node、monitor、OSD | 172.16.1.129 | 承担ceph-deploy安装部署admin-node角色 2. 充当Ceph Monitor节点 3. 充当Ceph OSD节点，包含一块50G磁盘 |
|  node-2  |           OSD            | 172.16.1.130 | 充当Ceph OSD数据存储节点，包含一块20G磁盘                    |
|  node-3  |           OSD            | 172.16.1.131 | 充当Ceph OSD数据存储节点，包含一块20G磁盘                    |

## 1.2 前提环境准备

![Ceph环境准备](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Ceph%E9%9B%86%E7%BE%A4%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2/2%20-%201620.jpg)

安装Ceph之前需要将环境提前部署好，部署内容参考上图内容，官方安装时推荐创建一个新的用户来实现安装部署，[官方参考文档](https://docs.ceph.com/docs/master/start/quick-start-preflight/)，本文直接以root的身份实现集群的安装。**备注：以下操作除了ssh无密码登陆之外，其他操作均需要在所有节点上执行。**

1、主机名设置，以node-1为例

```js
[root@node-1 ~]\# hostnamectl set-hostname node-1
[root@node-1 ~]\# hostnamectl status
   Static hostname: node-1
         Icon name: computer-vm
           Chassis: vm
        Machine ID: 0ea734564f9a4e2881b866b82d679dfc
           Boot ID: b0bc8b8c9cb541d2a582cdb9e9cf22aa
    Virtualization: kvm
  Operating System: CentOS Linux 7 (Core)
       CPE OS Name: cpe:/o:centos:centos:7
            Kernel: Linux 3.10.0-957.27.2.el7.x86_64
      Architecture: x86-64
```

2、设置/etc/hosts文件，将node-1至node-3信息写入到/etc/hosts文件中

```js
[root@node-1 ~]\# cat /etc/hosts
172.16.1.129 node-1
172.16.1.130 node-2
172.16.1.131 node-3
```

3、设置ssh无密码登陆，需要需要在node-1上生成key，然后将公钥拷贝到其他节点(包括node-1节点)，如下图

![设置无密码登陆](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Ceph%E9%9B%86%E7%BE%A4%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2/3%20-%202u7p1t82sz.gif)

4、关闭Selinux默认已关闭

```js
[root@node-1 ~]\# setenforce 0
[root@node-1 ~]\# getenforce 
```

5、关闭iptables防火墙，或者放行对应的端口：Ceph monitor 6789/tcp，Ceph OSD 6800-7300/tcp

```js
[root@node-1 ~]\# systemctl stop iptables
[root@node-1 ~]\# systemctl stop firewalld
[root@node-1 ~]\# systemctl disable iptables
[root@node-1 ~]\# systemctl disable firewalld
```

6、配置好ntp时间同步，Ceph是分布式集群，对时间很敏感，如果时间不正确可能会导致集群奔溃，因此在Ceph集中中设置ntp同步非常关键，推荐使用内网的ntp服务器同步时间，腾讯云CVM默认会同步到内网的ntp时间同步，读者根据需要进行设定

```js
[root@node-1 ~]\# grep ^server /etc/ntp.conf 
server ntpupdate.tencentyun.com iburst
[root@node-1 ~]\# 
[root@node-1 ~]\# ntpq -pn 
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
*169.254.0.2     183.3.239.152    4 u  238 1024  377    5.093    4.443   5.145
```

7、设置Ceph安装yum源，选择安装版本为octopus

```js
[root@node-1 ~]\# cat /etc/yum.repos.d/ceph.repo
[Ceph]
name=Ceph packages for $basearch
baseurl=http://mirrors.aliyun.com/ceph/rpm-nautilus/el7/$basearch
enabled=1
gpgcheck=1
type=rpm-md
gpgkey=http://mirrors.aliyun.com/ceph/keys/release.asc
priority=1
```

配置pip国内源，以防后面`install`时出现无法安装某个包的情况
修改` ~/.pip/pip.conf `(没有就创建一个文件夹及文件）
```bash
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```
临时使用可以加入`-i URL`，如：`pip install -i https://pypi.tuna.tsinghua.edu.cn/simple ***`

8、安装Ceph-deploy,对应版本为2.0.1，重要：默认epel源中ceph-deploy的版本是1.5，版本较老，会涉及到很多rpm依赖，安装问题，安装前检查好对应的版本，确保无误。

```js
[root@node-1 ~]\# yum update -y && yum install http://mirrors.aliyun.com/ceph/rpm-octopus/el7/noarch/ceph-deploy-2.0.1-0.noarch.rpm -y
[root@node-1 ~]\# ceph-deploy --version
2.0.1
```
注意：如果`--verion`使用时出现`Traceback (most recent call last):
  File "/usr/bin/ceph-deploy", line 5, in <module>
    from pkg_resources import load_entry_point
ImportError: No module named pkg_resources`的情况，安装`python-setuptools`即可。

## 1.3 部署Ceph集群

Ceph-deploy部署过程中会生成一些集群初始化配置文件和key，后续扩容的时候也需要使用到，因此，建议在admin-node上创建一个单独的目录，后续操作都进入到该目录中进行操作，以创建的ceph-admin-node为例。

1、创建一个Ceph cluster集群,可以指定cluster-network（集群内部通讯）和public-network（外部访问Ceph集群）

```js
[root@node-1 ceph-admin ]\# ceph-deploy new --cluster-network 172.16.1.0/24 --public-network 172.16.1.0/24 node-1     #创建集群
[ceph_deploy.conf][DEBUG ] found configuration file at: /root/.cephdeploy.conf
[ceph_deploy.cli][INFO  ] Invoked (2.0.1): /usr/bin/ceph-deploy new --cluster-network 172.16.1.0/24 --public-network 172.16.1.0/24 node-1
[ceph_deploy.cli][INFO  ] ceph-deploy options:
[ceph_deploy.cli][INFO  ]  username                      : None
[ceph_deploy.cli][INFO  ]  func                          : <function new at 0x7f0493dcdde8>
[ceph_deploy.cli][INFO  ]  verbose                       : False
[ceph_deploy.cli][INFO  ]  overwrite_conf                : False
[ceph_deploy.cli][INFO  ]  quiet                         : False
[ceph_deploy.cli][INFO  ]  cd_conf                       : <ceph_deploy.conf.cephdeploy.Conf instance at 0x7f0493541998>
[ceph_deploy.cli][INFO  ]  cluster                       : ceph
[ceph_deploy.cli][INFO  ]  ssh_copykey                   : True
[ceph_deploy.cli][INFO  ]  mon                           : ['node-1']
[ceph_deploy.cli][INFO  ]  public_network                : 172.16.1.0/24
[ceph_deploy.cli][INFO  ]  ceph_conf                     : None
[ceph_deploy.cli][INFO  ]  cluster_network               : 172.16.1.0/24
[ceph_deploy.cli][INFO  ]  default_release               : False
[ceph_deploy.cli][INFO  ]  fsid                          : None
[ceph_deploy.new][DEBUG ] Creating new cluster named ceph
[ceph_deploy.new][INFO  ] making sure passwordless SSH succeeds
[node-1][DEBUG ] connected to host: node-1 
[node-1][DEBUG ] detect platform information from remote host
[node-1][DEBUG ] detect machine type
[node-1][DEBUG ] find the location of an executable
[node-1][INFO  ] Running command: /usr/sbin/ip link show
[node-1][INFO  ] Running command: /usr/sbin/ip addr show
[node-1][DEBUG ] IP addresses found: [u'172.16.1.132']
[ceph_deploy.new][DEBUG ] Resolving host node-1
[ceph_deploy.new][DEBUG ] Monitor node-1 at 172.16.1.132
[ceph_deploy.new][DEBUG ] Monitor initial members are ['node-1']
[ceph_deploy.new][DEBUG ] Monitor addrs are [u'172.16.1.132']
[ceph_deploy.new][DEBUG ] Creating a random mon key...
[ceph_deploy.new][DEBUG ] Writing monitor keyring to ceph.mon.keyring...
[ceph_deploy.new][DEBUG ] Writing initial config to ceph.conf...
```

通过上面的输出可以看到，new初始化集群过程中会生成ssh key密钥，ceph.conf配置文件，ceph.mon.keyring认证管理密钥，配置cluster network和pubic network，此时查看目录下的文件可以看到如下内容：

```js
[root@node-1 ceph-admin ]\# ls -l
总用量 12
-rw-r--r-- 1 root root  265 3月   1 13:04 ceph.conf    #配置文件
-rw-r--r-- 1 root root 3068 3月   1 13:04 ceph-deploy-ceph.log #部署日志文件
-rw------- 1 root root   73 3月   1 13:04 ceph.mon.keyring #monitor认证key
 
[root@node-1 ceph-admin-node]\# cat ceph.conf 
[global]
fsid = cfc3203b-6abb-4957-af1b-e9a2abdfe725
public_network = 10.254.100.0/24  #public网络和cluster网络
cluster_network = 10.254.100.0/24
mon_initial_members = node-1     #monitor的地址和主机名
mon_host = 10.254.100.101
auth_cluster_required = cephx
auth_service_required = cephx
auth_client_required = cephx
```

2、安装Ceph部署相关的软件，常规通过yum进行安装，由于可能会安装错软件包，因此ceph-deploy提供了一个install的工具辅助软件包的安装，`ceph-deploy install node-1 node-2 node-3 `

```js
[root@node-1 ~]\# ceph-deploy install node-1 node-2 node-3
 # 如果某一节点部署失败，八成是下载程序包出现的问题，对该节点进行单独安装即可
 yum install ceph ceph-radosgw
```

3、初始化monitor节点,执行`ceph-deploy mon create-initial`做初始化

![ceph初始化](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Ceph%E9%9B%86%E7%BE%A4%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2/4%20-%203knafaaaz5.gif)

初始化完毕后会生成对应的keyring文件，用于ceph认证：

- `ceph.client.admin.keyring`
- `ceph.bootstrap-mgr.keyring`
- `ceph.bootstrap-osd.keyring`
- `ceph.bootstrap-mds.keyring`
- `ceph.bootstrap-rgw.keyring`
- `ceph.bootstrap-rbd.keyring`
- `ceph.bootstrap-rbd-mirror.keyring`

4、将认证密钥拷贝到其他节点，便于ceph命令行可以通过keyring和ceph集群进行交互,`ceph-deploy admin node-1 node-2 node-3`

![Ceph拷贝管理密钥](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Ceph%E9%9B%86%E7%BE%A4%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2/5%20-%20bdjm18awgi.gif)

此时，Ceph集群已经建立起来，包含一个monitor节点，通过ceph -s可以查看当前ceph集群的状态，由于此时并没有任何的OSD节点，因此无法往集群中写数据等操作,如下是ceph -s查看的输出结果

```js
[root@node-1 ceph-admin]\# ceph -s 
  cluster:
    id:     760da58c-0041-4525-a8ac-1118106312de
    health: HEALTH_OK
 
  services:
    mon: 1 daemons, quorum node-1
    mgr: no daemons active
    osd: 0 osds: 0 up, 0 in
 
  data:
    pools:   0 pools, 0 pgs
    objects: 0  objects, 0 B
    usage:   0 B used, 0 B / 0 B avail
    pgs:   
```

5、集群中目前还没有OSD节点，因此没法存储数据，接下来开始往集群中添加OSD节点，每个节点上都有一块50G的vdb磁盘，将其加入到集群中作为OSD节点,如`ceph-deploy osd create node-1 --data /dev/vdb`

![ceph添加osd节点](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Ceph%E9%9B%86%E7%BE%A4%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2/6%20-%206xvae2muoj.gif)

如上已将node-1的vdb添加到ceph集群中，ceph -s可以看到当前有一个osd加入到集群中，执行相同的方法将node-2和node-3上的磁盘添加到集群中

- `ceph-deploy osd create node-2 --data /dev/vdb`
- `ceph-deploy osd create node-3 --data /dev/vdb`

执行完毕后，三个OSD均已加入到ceph集群中，通过ceph -s可以看到对应三个OSD节点

```js
[root@node-1 ceph-admin]\# ceph -s 
  cluster:
    id:     760da58c-0041-4525-a8ac-1118106312de
    health: HEALTH_WARN
            no active mgr
 
  services:
    mon: 1 daemons, quorum node-1
    mgr: no daemons active
    osd: 3 osds: 3 up, 3 in  #三个OSD，当前状态都是up和in状态
 
  data:
    pools:   0 pools, 0 pgs
    objects: 0  objects, 0 B
    usage:   0 B used, 0 B / 0 B avail
    pgs:     
```

也可以通过ceph osd tree查看每隔节点上osd的情况和crush tree的情况

```js
    [root@node-1 ~]\# ceph osd tree 
ID CLASS WEIGHT  TYPE NAME       STATUS REWEIGHT PRI-AFF 
-1       0.14369 root default                            
-3       0.04790     host node-1                         
 0   hdd 0.04790         osd.0       up  1.00000 1.00000 
-5       0.04790     host node-2                         
 1   hdd 0.04790         osd.1       up  1.00000 1.00000 
-7       0.04790     host node-3                         
 2   hdd 0.04790         osd.2       up  1.00000 1.00000 
```

6、此时Ceph的health状态为HEALTH_WARN告警状态，提示信息为“no active mgr”，因此需要部署一个mgr节点，manager节点在luminous之后的版本才可以部署（本环境部署的是M版本，因此可以支持），将mgr部署到node-1节点，执行`ceph-deploy mgr create node-1`

![Ceph添加mgr节点](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Ceph%E9%9B%86%E7%BE%A4%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2/7%20-%20vka5irzwpc.gif)

至此，Ceph集群已经部署完毕。通过ceph-deploy工具进行部署完成Ceph集群的自动化部署，后续添加monitor节点，osd节点，mgr节点也会很方便。

## 2.4 Ceph安装小结

本文通过ceph-deploy完成一个1mon节点+1mgr节点+3个osd节点的集群，ceph-deploy安装简化了集群的部署，我在安装过程中遇到了不少报错（主要是rpm版本问题，尤其是ceph-deploy的包，EPEL默认的是1.5版本，需要用到ceph官网的2.0.1，否则会遇到各种各样的问题，1年未安装Ceph，变化很大，不得不感慨社区的发展速度）。

另外，还介绍了Ceph另外当前集群只有一个monitor节点，存在单点故障，当node-1节点故障时，整个集群都会处于不可用状态，因此需要部署高可用集群，以避免集群存在单点故障，保障业务的高可用性，后续章节来介绍monitor节点的扩容。

## 参考文档

* ceph-deploy：https://docs.ceph.com/docs/master/install/ceph-deploy/quick-start-preflight/#ceph-deploy-setup
* ceph-admin：https://docs.ceph.com/docs/master/cephadmin
* 手动安装：https://docs.ceph.com/docs/master/install/
* 资源池pool的管理：https://docs.ceph.com/docs/master/rbd/rados-rbd-cmds/
* RBD块存储使用：https://docs.ceph.com/docs/master/start/quick-rbd/?highlight=rbdmap