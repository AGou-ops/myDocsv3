# NFS 基础及实战

## NFS 简介

NFS是`Network File System`的缩写及网络文件系统。`NFS`主要功能是通过局域网络让不同的主机系统之间可以共享文件或目录。
`NFS`系统和`Windows`网络共享、网络驱动器类似, 只不过`windows`用于局域网, NFS用于企业集群架构中, 如果是大型网站, 会用到更复杂的分布式文件系统`FastDFS,glusterfs,HDFS`

NFS 实现原理图：

![](https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/4809537-7571bd5bc6c54b05.png)

1. 用户进程访问NFS客户端，使用不同的函数对数据进行处理
2. NFS客户端通过TCP/IP的方式传递给NFS服务端。
3. NFS服务端接收到请求后，会先调用portmap进程进行端口映射。
4. nfsd进程用于判断NFS客户端是否拥有权限连接NFS服务端。
5. Rpc.mount进程判断客户端是否有对应的权限进行验证。
6. idmap进程实现用户映射和压缩
7. 最后NFS服务端会将对应请求的函数转换为本地能识别的命令，传递至内核，由内核驱动硬件。

## 实践

### Server

预先准备与安装启动：

```bash
# 预先准备
$ systemctl disable firewalld
$ systemctl disable firewalld
$ sed -ri '#^SELINUX=#cSELINUX=Disabled' /etc/selinux/config
$ setenforce 0
# 安装nfs
$ yum -y install nfs-utils
# 启动
$ systemctl enable rpcbind nfs-server
$ systemctl restart rpcbind nfs-server
```

NFS服务程序的配置文件为`/etc/exports`。

输出`/data`目录以共享：

```bash
$ vim /etc/exports   
/data   172.16.1.0/24(rw,sync,all_squash)
$ mkdir /data
$ chown -R nfsnobody.nfsnobody /data
# 检查文件
$  cat /var/lib/nfs/etab
```

:information_desk_person:注意：NFS共享目录会记录至`/var/lib/nfs/etab`，如果该目录不存在共享信息，请检查/`etc/exports`是否配置错误。

### Client

NFS客户端的配置步骤也十分简单。先使用`showmount`命令,查询`NFS`服务器的远程共享信息，其输出格式为“共享的目录名称 允许使用客户端地址”。

安装客户端工具并查看挂载：

```bash
$ yum -y install nfs-utils rpcbind
# 仅启动rpc服务即可
$ systemctl restart rpcbind

# 客户端查看服务器端nfs信息
$ showmount -e 172.16.1.111
Export list for 172.16.1.111:
/data 172.16.1.0/24

# 挂载
$ mkdir /nfsdir
$ mount -t nfs 172.16.1.111:/data /nfsdir
```

客户端设置开机自动挂载：

```bash
# 编辑fstab文件
$ sudo vim /etc/fstab
172.16.1.111:/data /nfsdir nfs defaults 0 0

# 验证fstab是否写正确
$ mount -a
```

## 其他

### 提升安全性

在企业工作场景，通常情况NFS服务器共享的只是普通静态数据（图片、附件、视频），不需要执行`suid、exec`等权限，挂载的这个文件系统只能作为数据存取之用，无法执行程序，对于客户端来讲增加了安全性。例如: 很多木马篡改站点文件都是由上传入口上传的程序到存储目录。然后执行的。

```bash
# 通过mount -o指定挂载参数，禁止使用suid，exec，增加安全性能
$mount -t nfs -o nosuid,noexec,nodev 172.16.1.111:/data /mnt
```

### 提升性能

有时也需要考虑性能相关参数[可选]

```bash
#通过mount -o指定挂载参数，禁止更新目录及文件时间戳挂载
$ mount -t nfs -o noatime,nodiratime 172.16.1.111:/data /mnt
```

### NFS共享参数

| nfs共享参数    | 参数作用                                                     |
| :------------- | :----------------------------------------------------------- |
| rw*            | 读写权限                                                     |
| ro             | 只读权限                                                     |
| root_squash    | 当NFS客户端以root管理员访问时，映射为NFS服务器的匿名用户(不常用) |
| no_root_squash | 当NFS客户端以root管理员访问时，映射为NFS服务器的root管理员(不常用) |
| all_squash     | 无论NFS客户端使用什么账户访问，均映射为NFS服务器的匿名用户(常用) |
| no_all_squash  | 无论NFS客户端使用什么账户访问，都不进行压缩                  |
| sync*          | 同时将数据写入到内存与硬盘中，保证不丢失数据                 |
| async          | 优先将数据保存到内存，然后再写入硬盘；这样效率更高，但可能会丢失数据 |
| anonuid*       | 配置all_squash使用,指定NFS的用户UID,必须存在系统             |
| anongid*       | 配置all_squash使用,指定NFS的用户UID,必须存在系统             |

------

