# CephFS    


## CephFS 简介

Ceph文件系统（CephFS）是一个POSIX兼容文件系统，它使用 Ceph 存储群集存储其数据。 Ceph文件系统使用与Ceph块设备，具有S3和Swift API的Ceph对象存储或本机绑定（librados）相同的Ceph存储群集系统。

CephFS 允许Linux直接将Ceph存储mount到本地。

![](https://docs.ceph.com/docs/nautilus/_images/ditaa-b5a320fc160057a1a7da010b4215489fa66de242.png "CephFS Arch")

## CephFS 部署

使用Ceph文件系统需要在您的Ceph存储集群中至少有一个Ceph元数据服务器（MDS）。

### 部署 MDS

守护进程（ceph-mgr）负责跟踪运行时间指标和Ceph群集的*当前状态，包括存储利用率，当前性能指标和系统负载*。` Ceph Manager`守护程序还托管*基于python的插件来管理和公开Ceph集群信息，包括基于Web的仪表板和REST API*。 通常，至少有两名Manager需要高可用性，在这里，我资源有限，只部署单台`MDS`：

```bash
ceph-deploy mds create stor1
```

### 创建所需存储池 Pool

CephFS 需要两个 Pool：

1. `data pool`：存放object
2. `data pool`：存放元数据，可设置较高副本级别，也可调整pool的crush_ruleset，使其在ssd上存储，加快客户端响应速度，我这里直接使用默认`crush_ruleset`

```bash
 # ceph osd pool create cephfs_data <pg_num>
 ceph osd pool create cephfs_data 128
 # ceph osd pool create cephfs_metadata <pg_num>
 ceph osd pool create cephfs_metadata 128
```

通常，元数据池最多具有几GB的数据。因此，通常建议使用较少的PG。实际上，大型群集通常使用64或128。

> 计算pg数量：
>
> 1. 集群pg 总数 = （OSD 总数* 100 ）/最大副本数
> 2. 每个pool中pg总数=（OSD总数*100）/ 最大副本数 ）/ 池数
> 3. pg数需要是2的指数幂

### 新建 CephFS

新建 CephFS ，使用先前准备好的存储池：

```bash
ceph fs new cephfs cephfs_metadata cephfs_data
# 查看CephFS
[root@stor1 ceph-cluster]\# ceph fs ls
name: cephfs, metadata pool: cephfs_metadata, data pools: [cephfs_data ]
```

创建文件系统后，您的MDS将能够进入活动状态。例如，在单个MDS系统中：

```bash
[root@stor1 ceph-cluster]\# ceph mds stat
cephfs:1 {0=stor1=up:active}
```

## 挂载 CephFS

```bash
mkdir /mnt/mycephfs
# 在集群配置文件路径下
[root@stor1 ceph-cluster]\# cat ceph.client.admin.keyring 
[client.admin]
        key = AQCKK9peJI/5LhAAyxIQ8TSsIugVQLpbz5EyOg==
        caps mds = "allow *"
        caps mgr = "allow *"
        caps mon = "allow *"
        caps osd = "allow *"
```

记录下`key`值，并创建管理账户密钥文件：

```bash
# 编辑该文件
vim /etc/ceph/admin.secret
# -------- 将上方记录的key值放置于此 ----------
AQCKK9peJI/5LhAAyxIQ8TSsIugVQLpbz5EyOg==
```

:information_source: 要安装启用了cephx身份验证的Ceph文件系统，内核必须通过集群进行身份验证。默认名称选项是`guest`。 `mount.ceph`将自动尝试在密钥环中查找秘密密钥。

挂载：

```bash
sudo mount -t ceph 172.16.1.128:6789:/ /mnt/mycephfs -o name=admin,secretfile=/etc/ceph/admin.secret
# 或者直接使用
sudo mount -t ceph 172.16.1.128:6789:/ /mnt/mycephfs -o name=admin,secret=AQCKK9peJI/5LhAAyxIQ8TSsIugVQLpbz5EyOg==
```

:information_source:注意：mount时，mon节点有几个写几个，其间用逗号进行分割，比如：` mount -t ceph 172.16.1.128:6789,172.16.1.136:6789:/ `

检查挂载状况：

```bash
[root@stor1 ceph-cluster]\# mount | grep /mnt/mycephfs
172.16.1.128:6789:/ on /mnt/mycephfs type ceph (rw,relatime,name=admin,secret=<hidden>,acl,wsize=16777216)
```

在`Dashboard`中查看`CephFS`：

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ceph-dashboard/ceph-dashboard-2.png "在`Dashboard`中查看`CephFS`")

## MOUNT CEPHFS USING FUSE

参考：https://docs.ceph.com/docs/nautilus/cephfs/fuse/#mount-cephfs-using-fuse

## 参考链接

* cephFS Documentation: https://docs.ceph.com/docs/nautilus/cephfs/
* mount cephFS: https://docs.ceph.com/docs/nautilus/cephfs/kernel/
* PG 在线计算：https://ceph.io/pgcalc/