# Cepha   部署octopus    


获取`cephadm`部署工具

```bash
# curl --silent --remote-name --location https://github.com/ceph/ceph/raw/octopus/src/cephadm/cephadm
# chmod +x cephadm
```

```bash
注意提前安装好docker和chronyd
# ./cephadm add-repo --release octopus
# ./cephadm install

# which cephadm
```


安装引导集群:

```bash
# mkdir -p /etc/ceph
# cephadm bootstrap --mon-ip 192.168.159.139
```

此命令将：

- 在本地主机上为新集群创建监视和管理器守护程序。
-  为Ceph集群生成一个新的SSH密钥，并将其添加到root用户的`/root/.ssh/authorized_keys`文件中。
- 将与新群集通信所需的最小配置文件写入`/etc/ceph/ceph.conf`。
- 将client.admin管理（root）密钥的副本写入`/etc/ceph/ceph.client.admin.keyring`。
-  将公共密钥的副本写入`/etc/ceph/ceph.pub`。

  启用CEPH CLI

与之前不同的是, ceph的命令不再在bash shell中出现, 而是单独出来了.

```bash
# cephadm shell
为了方便,可以添加一个别名
# alias ceph='cephadm shell -- ceph'
```

你还可以安装ceph-common软件包，其中包含所有ceph命令，包括ceph，rbd，mount.ceph（用于安装CephFS文件系统）等：

```bash
cephadm add-repo --release octopus
# cephadm install ceph-common

```

确认可以使用以下命令访问ceph命令：

```bash
# ceph -v
```

使用以下命令确认ceph命令可以连接到集群及其状态:

```bash
# ceph status
```

将主机添加到集群中

在新主机的root用户的authorized_keys文件中安装群集的公共SSH密钥：

```bash
# ssh-copy-id -f -i /etc/ceph/ceph.pub root@stor2
```

告诉Ceph，新节点是集群的一部分：

```bash
# ceph orch host add stor2
```

