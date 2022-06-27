# Ceph Cluster 移除    


## 卸载 Ceph 集群

1. 停止`ceph`相关服务：

```bash
ps aux|grep ceph |awk '{print $2}'|xargs kill -9
# 检查是否成功停止服务
ps -ef|grep ceph
```

2. 卸载`OSD`磁盘：

```bash
umount /var/lib/ceph/osd/*
```

3. 删除相关配置项：

```bash
rm -rf /var/lib/ceph/osd/*
rm -rf /var/lib/ceph/mon/*
rm -rf /var/lib/ceph/mds/*
rm -rf /var/lib/ceph/bootstrap-mds/*
rm -rf /var/lib/ceph/bootstrap-osd/*
rm -rf /var/lib/ceph/bootstrap-rgw/*
rm -rf /var/lib/ceph/bootstrap-mgr/*
rm -rf /var/lib/ceph/tmp/*
rm -rf /etc/ceph/*
rm -rf /var/run/ceph/*
```

4. 擦除磁盘数据：

```bash
ceph-deploy disk zap stor1:/dev/sdb stor2:/dev/sdb
```


5. 卸载相关软件包：

```bash
cd /root/ceph-cluster/
# 删除软件包
ceph-deploy purge stor1 stor2 stor3
```

6. 清除数据：

```bash
ceph-deploy purgedata stor1 stor2 stor3
```

7. 清除`keys`：

```bash
ceph-deploy forgetkeys
```

8. 删除相关`LV`、`VG`、`PV`：

```bash
lvdisplay | grep /dev/ceph* | awk '{print $3}' | xargs lvremove -f
vgdisplay | grep ceph | awk '{print $3}' | xargs vgremove -f
pvremove /dev/sdb
```

9. 删除初始化配置信息：

```bash
[root@stor1 ceph-cluster]\# pwd
/root/ceph-cluster
[root@stor1 ceph-cluster]\# rm -f *
```

## 清除集群环境

1. 重复[卸载 Ceph 集群](#卸载 Ceph 集群)的第`1`、`2`、`3`、`9`步
2. 在`mon`节点上，执行以下命令：

```bash
ceph-deploy new stor1
```

3. 在每个节点上执行以下命令（该步骤可省略，因为下一步会自动为每个节点安装以下程序包）：

```bash
sudo yum install ceph epel-release ceph-radosgw
```

4. 在`mon`节点上执行：

```bash
ceph-deploy install --release nautilus stor1 stor2 stor3
```

5. 初始化`mon`：

```bash
ceph-deploy mon create-initial
```

6. 为每个节点传递`keys`：

```bash
ceph-deploy admin stor1 stor2 stor3
```

7. 添加`mgr`：

```bash
ceph-deploy mgr create stor1
```

添加`osd`参考[Ceph-deploy 集群快速部署](./Ceph-deploy 集群快速部署.md)

