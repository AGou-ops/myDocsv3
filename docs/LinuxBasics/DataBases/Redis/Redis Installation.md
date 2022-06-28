# Redis 单机部署

## 通过仓库安装

```bash
$ yum install redis-server
#  ubuntu debian
$ apt install redis-server
```

## 编译安装

安装集群插件（新版本6.0似乎已经内置）：

```bash
# EPEL源安装ruby支持
$ yum install ruby rubygems -y

# 查看gem源
$ gem sources -l
*** CURRENT SOURCES ***

http://rubygems.org/
# 添加阿里云的gem源
$ gem sources -a http://mirrors.aliyun.com/rubygems/
http://mirrors.aliyun.com/rubygems/ added to sources 
# 删除国外gem源
$ gem sources  --remove https://rubygems.org/
http://rubygems.org/ removed from sources
# 再次查看gem源
$ gem sources -l
# 使用gem安装redis的ruby插件
$ gem install redis -v 3.3.3
Successfully installed redis-3.3.3
1 gem installed
Installing ri documentation for redis-3.3.3...
Installing RDoc documentation for redis-3.3.3...
```

编译安装：

```bash
# 下载
$ wget http://download.redis.io/releases/redis-3.2.12.tar.gz
# 解压
$ tar xf redis-3.2.12.tar.gz
# 移动到指定目录
$ mv redis-3.2.12 /application/
# 做软链接
$ ln -s /application/redis-3.2.12 /application/redis
# 进入redis目录
$ cd /application/redis
# 编译
$ make
# 添加环境变量
$ vim /etc/profile.d/redis.sh
export PATH="/application/redis/src:$PATH"
```



