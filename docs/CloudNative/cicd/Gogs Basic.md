# Gogs Basic

Gogs（`/gɑgz/`）项目旨在打造一个以最简便的方式搭建简单、稳定和可扩展的自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 **所有平台**，包括 Linux、macOS、Windows 以及 ARM 平台。

## 安装配置依赖环境

```
APP_NAME="gogs"
MYSQL_PASSWORD="change_me"
HOSTNAME="example.com"

# setup mysql
yum install mysql-server -y
service mysql-server start
chkconfig mysql-server

mysqladmin -u root password "${MYSQL_PASSWORD}"
mysqladmin -u root --password="${MYSQL_PASSWORD}" password "${MYSQL_PASSWORD}"
mysql -u root -p${MYSQL_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS ${APP_NAME}; use ${APP_NAME}; set global storage_engine=INNODB;"

# install nginx
rpm -Uhv http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
 yum install -y nginx

cat > /etc/nginx/conf.d/default.conf <<EOF
server {
  listen          80;
  server_name     ${HOSTNAME};
  location / {
    proxy_pass      http://127.0.0.1:6000;
  }
}
EOF

service nginx start
chkconfig nginx on
```

Now, access `http://${HOSTNAME}` and finish the installation process. Easy!

## 安装`Gogs`

There are 6 ways to install Gogs:

- [Install from binary](https://gogs.io/docs/installation/install_from_binary.html)
- [Install from source](https://gogs.io/docs/installation/install_from_source.html)
- [Install from packages](https://gogs.io/docs/installation/install_from_packages.html)
- [Ship with Docker](https://github.com/gogs/gogs/tree/master/docker)
- [Install with Vagrant](https://github.com/geerlingguy/ansible-vagrant-examples/tree/master/gogs)
- [Install with Kubernetes Using Helm Charts](https://github.com/helm/charts/tree/master/incubator/gogs)

这里为了方便起见, 我使用`packages`包进行安装:

```bash
sudo wget -O /etc/yum.repos.d/gogs.repo \
  https://dl.packager.io/srv/gogs/gogs/master/installer/el/7.repo
sudo yum install gogs
```

当然通过`Docker`安装也十分简单快捷:

```bash
# Pull image from Docker Hub.
$ docker pull gogs/gogs

# Create local directory for volume.
$ mkdir -p /var/gogs

# Use `docker run` for the first time.
$ docker run --name=gogs -p 10022:22 -p 10080:3000 -v /var/gogs:/data gogs/gogs

# Use `docker start` if you have stopped it.
$ docker start gogs
```

## 参考资料

- gogs installation: https://github.com/gogs/gogs#-installation
- 使用 Gogs 搭建自己的 Git 服务器: https://blog.mynook.info/post/host-your-own-git-server-using-gogs/