# MongoDB Installation

## 预先准备与安装

安装之前禁用大页内存机制:

> 透明大页面（THP）是一种Linux内存管理系统，它通过使用较大的内存页面来减少具有大量内存的计算机上的转换后备缓冲区（TLB）查找的开销。
> 但是，在启用THP的情况下，数据库工作负载通常表现不佳，因为它们往往具有稀疏而不是连续的内存访问模式。在Linux上运行MongoDB时，应禁用THP以获得最佳性能

```bash
# ------ systemd管理的系统
# 创建服务:
$ vim /etc/systemd/system/disable-transparent-huge-pages.service
[Unit]
Description=Disable Transparent Huge Pages (THP)
DefaultDependencies=no
After=sysinit.target local-fs.target
Before=mongod.service

[Service]
Type=oneshot
ExecStart=/bin/sh -c 'echo never | tee /sys/kernel/mm/transparent_hugepage/enabled > /dev/null'

[Install]
WantedBy=basic.target
# 重载服务
$ sudo systemctl daemon-reload
$ sudo systemctl start disable-transparent-huge-pages
$ sudo systemctl enable disable-transparent-huge-pages
# 检查是否关闭
cat /sys/kernel/mm/transparent_hugepage/enabled
always madvise [never]
```

更多参考: https://docs.mongodb.com/manual/tutorial/transparent-huge-pages/

### 使用现成二进制安装包进行安装

Debian10 系统下:

```bash
# 服务器包
$ wget https://repo.mongodb.org/apt/debian/dists/buster/mongodb-org/4.4/main/binary-amd64/mongodb-org-server_4.4.1_amd64.deb
# 客户端shell包
$ wget https://repo.mongodb.org/apt/debian/dists/buster/mongodb-org/4.4/main/binary-amd64/mongodb-org-shell_4.4.1_amd64.deb
$ dpkg -i mongodb-org-s*.deb
```

:information_source: 使用安装包安装的 MongoDB 默认数据文件存在于`/var/lib/mongodb`, 默认日志文件存在于`/var/log/mongodb`.


启动 MongoDB :

```bash
$ sudo systemctl start mongod
# 如果报出 Failed to start mongod.service: Unit mongod.service not found. 错误, 则运行
$ sudo systemctl daemon-reload
```

其他操作系统安装参考: https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials

### 手动安装

从 https://www.mongodb.com/try/download/community?tck=docs_server 下载指定tar包

```bash
# 安装依赖包
sudo apt-get install libcurl4 openssl liblzma5
tar -zxvf mongodb-linux-*-4.4.1.tgz

groupadd -g 800 mongod
useradd -u 801 -g mongod mongod
passwd mongod
mkdir -pv /mongodb/{bin,conf,log,data}
chown -R mongod:mongod /mongodb
# 创建软连接, 方便直接使用
sudo ln -s  /path/to/the/mongodb-directory/bin/* /usr/local/bin/
```

运行 MongoDB:

```bash
mongod --dbpath /mongodb/data --logpath /mongodb/log/mongodb.log --port=27017 --logappend --fork
```

## 参考链接

- MongoDB documentations: https://docs.mongodb.com/manual/