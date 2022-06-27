# ceph 部署问题汇总    


## ceph部署问题汇总

1. 运行`ceph-deploy --verion`或者相关命令出现`Traceback (most recent call last):
    File "/usr/bin/ceph-deploy", line 5, in <module>
    from pkg_resources import load_entry_point
ImportError: No module named pkg_resources`报错。
解决方法：
    ```bash
    yum install -y python-setuptools
    ```

2. 运行`ceph-deploy install`时出现`[ceph_deploy][ERROR ] RuntimeError: Failed to execute command: yum -y install yum-plugin-priorities`。
解决方法：
    ```bash
    # 尝试清理yum缓存并重建缓存
    yum clean all
    yum makecache
    ```
或者可能是由于网络原因，可以单独对失败的节点重新install一遍

3. 运行`ceph-deploy admin`分发密钥时出现`[ceph_deploy.admin][ERROR ] RuntimeError: config file /etc/ceph/ceph.conf exists with different content; use --overwrite-conf to ov`。
解决方法：
    ```bash
    ceph-deploy --overwrite-conf config push stor1 stor2 stor3
    ```

4. 添加osd`ceph-deploy osd create`时出现`[ceph_deploy.osd][ERROR ] Failed to execute command: /usr/sbin/ceph-volume --cluster ceph lvm create --bluestore --data /dev/sdb`。
解决方法：
    ```bash
    这里的key 可以从`ceph auth get client.bootstrap-osd` 里面得到
    cat /var/lib/ceph/bootstrap-osd/ceph.keyring
    [client.bootstrap-osd]
            key = AQD9qhRcBjs+MRAAKGOWtabeQlc/HvVa+yemv
    ```
实在不行或者删除掉错误节点的`/var/lib/ceph/bootstrap-osd/ceph.keyring`，再重新`ceph-deploy admin`一次

:slightly_smiling_face: 终极方法：

如果在某些地方碰到麻烦，想从头再来，可以用下列命令清除配置：

```
ceph-deploy purgedata {ceph-node} [{ceph-node}]
ceph-deploy forgetkeys
```

用下列命令可以连 Ceph 安装包一起清除：

```
ceph-deploy purge {ceph-node} [{ceph-node}]
```