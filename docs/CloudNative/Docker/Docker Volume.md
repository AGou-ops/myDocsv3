# Docker Volume 


查看容器存储卷挂载情况使用：`docker inspect -f 【【.Mounts】】 ID`

## Volume 数据共享

容器`busybox2`共享使用`busybox2`的数据卷

```bash
docker create --name busybox1 -v /data/test1:/data/test1 busybox

docker run -itd --name busybox2 --volumes-from busybox1 busybox
```

可以挂载多个共享卷，使用多个`--volumes-from`参数即可.

## Volume 数据备份与恢复

:information_source:实用性不高。。。

备份：

```bash
docker run --rm --volumes-from busybox1 -v $(pwd):/backup busybox \
  tar cvf /backup/backup.tar /data/test1/
```

恢复：

```bash
docker run -itd -v --name busybox3 /data/ busybox /bin/sh
docker run --volumes-from busybox1 -v /data/backup/:/backup busybox tar xf /backup/backup.tar
```

## Volume 使用外部存储(NFS)

简单配置 NFS 服务器（172.16.1.128）：

```bash
yum install nfs-utils rpcbind -y
mkdir -p /data/nfs/docker
echo "/data/nfs *(rw,no_root_squash,sync)">>/etc/exports
exportfs -r
systemctl start rpcbind nfs-server
# 查看 NFS 状态
showmount -e localhost
```

客户端（也就是容器端）：

```bash
# 确保主机安装了 nfs 的客户端工具
yum install -y nfs-utils rpcbind

# 创建 NFS 挂载卷
docker volume create --driver local \
  --opt type=nfs \
  --opt o=addr=172.16.1.128,rw \
  --opt device=:/data/nfs \
  volume-nfs
```

查看并使用 NFS 外部存储：

```bash
# 查看
docker volume ls
docker volume inspect volume-nfs

# 使用 NFS
docker run -itd --name busybox4 -v volume-nfs:/nfs busybox
# 查看容器挂载情况
docker inspect -f 【【.Mounts】】 busybox4
```

删除挂载卷：

```bash
docker rm -f -v volume-nfs
# 或者
docker volume rm volume-nfs
```