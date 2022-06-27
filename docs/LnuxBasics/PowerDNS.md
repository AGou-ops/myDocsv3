# PowerDNS 

## PowerDNS 简介

PowerDNS 是一个跨平台的开源DNS服务组件，PowerDNS同时有Win32和Linux/Unix的版本。 PowerDNS在Win32下使用 Access的mdb文件记录DNS信息，而在Linux/Unix下则使用MySQL来记录DNS信息。无论是mdb亦或MySQL，备份是非常方便的 事情。

## PowerDNS 安装与简单使用

### 安装相关程序包

需要先安装 `pdns-server` ，然后再安装 `pdns-backend-$backend` 。Backend 是你可以自己选的，常用的有 `BIND` 和 `Generic MySQL` ，需要 GEODNS 可以用 `GEOIP` ，所有列表[见此](https://doc.powerdns.com/md/authoritative/)。如果想做网页版控制后台，使用 MySQL 的可能比较方便。如果只是通过文件形式控制，那么 BIND 和 GEOIP 都可以。

#### Redhat-based Systems

在基于RedHat的系统上，有2个安装PowerDNS的选项，可以从`EPEL`，`Kees Monshouwer`或从`PowerDNS官方仓库`(https://repo.powerdns.com/)进行安装：

在这里我使用`EPEL`仓库进行安装：

```bash
yum install pdns -y
```

选择所需要的后端数据库插件，在这里我选择`mysql`：

```bash
yum install pdns-backend-mysql mariadb-server mariadb -y
# 启动mariadb服务
systemctl start mariadb.service
```

#### 配置 mysql 数据库

为`PowerDNS`创建一个数据库：

```sql
MariaDB [(none)]> CREATE DATABASE powerdns;
MariaDB [(none)]> GRANT ALL ON powerdns.* TO 'powerdns'@'172.16.%.%' IDENTIFIED BY 'powerdns';
MariaDB [(none)]> FLUSH PRIVILEGES;
```

导入所需数据表：

```bash
MariaDB [(none)]> use powerdns;
MariaDB [powerdns]> source  /usr/share/doc/pdns-backend-mysql-4.1.11/schema.mysql.sql;
# 查看
MariaDB [powerdns]> show tables;
+--------------------+
| Tables_in_powerdns |
+--------------------+
| comments           |
| cryptokeys         |
| domainmetadata     |
| domains            |
| records            |
| supermasters       |
| tsigkeys           |
+--------------------+
7 rows in set (0.00 sec)
```

#### 配置 PowerDNS ，连接 mysql 数据库

编辑配置文件`/etc/pdns/pdns.conf`：

```bash
# 查找launch选项的相关内容 
launch=gmysql
gmysql-host=localhost
gmysql-port=3306
gmysql-dbname=powerdns
gmysql-user=powerdns
gmysql-password=powerdns
```

完成之后，保存退出，然后启动 PowerDNS：

```bash
systemctl start pdns
systemectl enable pdns
# 查看其启动状态
[root@master ~]\# ss -tnulp | grep pdns
udp    UNCONN     0      0         *:53                    *:*                   users:(("pdns_server",pid=37370,fd=5))
udp    UNCONN     0      0      [::]:53                 [::]:*                   users:(("pdns_server",pid=37370,fd=6))
tcp    LISTEN     0      128       *:53                    *:*                   users:(("pdns_server",pid=37370,fd=7))
tcp    LISTEN     0      128    [::]:53                 [::]:*                   users:(("pdns_server",pid=37370,fd=8))
```

#### 安装PowerAdmin来管理PowerDNS

PowerAdmin，一个界面友好的PowerDNS服务器的 Web 管理器。我们需要配置其运行环境，在这里我使用`LAMP`：

```bash
yum -y install httpd php php-devel php-gd php-mcrypt php-imap php-ldap php-mysql php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-mhash gettext
```

启动 `httpd`并设置开机自启动：`systemctl start httpd.service;systemctl enable httpd.service`

下载并将` PowerAdmin`包移动到 httpd 网站目录当中去：

```bash
wget http://downloads.sourceforge.net/project/poweradmin/poweradmin-2.1.7.tgz
tar xf poweradmin-2.1.7.tgz -C /var/www/html
ln -s poweradmin-2.1.7/ poweradmin
cd poweradmin
```

此时，打开浏览器，访问 http://172.16.1.128/poweradmin/install/ 进行安装：

前两个步骤直接无脑下一步就可以了，:three:第三步需要配置连接数据库，详细信息如下所示

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-1.png)

:four:第四步，为 Poweradmin 创建一个受限用户，详细信息如下所示：

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-2.png)

信息说明：

* 用户名（Username）：PowerAdmin用户名。 
* 密码（Password）：上述用户的密码。 
* 主机管理员（Hostmaster）：当创建SOA记录而你没有指定主机管理员时，该值会被用作默认值(可以不写)。这里我写的是部署机的主机名 
* 主域名服务器：该值在创建新的DNS区域时会被用于作为主域名服务器。 
* 辅域名服务器：该值在创建新的DNS区域时会被用于作为辅域名服务器。 

:five: 第五步，Poweradmin会要求你在数据库表中创建一个新的受限数据库用户，它会提供你需要在MariaDB控制台输入的代码：

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-3.png)

打开 mysql 客户端，输入以下内容：

```bash
MariaDB [(none)]> GRANT SELECT, INSERT, UPDATE, DELETE
    -> ON powerdns.*
    -> TO 'poweradmin'@'localhost'
    -> IDENTIFIED BY 'poweradmin';
MariaDB [(none)]> flush privileges;
```

:six:第六步，手动将安装页面上的配置信息填入到`/var/www/html/poweradmin/inc`中，这里我就不截图了：

```bash
vim /var/www/html/poweradmin/inc/config.inc.php
# 添加以下内容
<?php

$db_host		= 'localhost';
$db_user		= 'poweradmin';
$db_pass		= 'poweradmin';
$db_name		= 'powerdns';
$db_type		= 'mysql';
$db_layer		= 'PDO';

$session_key		= 'pq~_!Y3v#D}Hdf)VgWDpe]HXOWJcNCyY&zLR=su(#ekol8';

$iface_lang		= 'en_EN';

$dns_hostmaster		= 'pdns-server';
$dns_ns1		= '172.16.1.128';
$dns_ns2		= '172.16.1.128';
```

:seven:点击下一步，这时已经提示安装完成，需要注意的一点是，安装完成之后需要删除文件夹中的`install`文件夹：

```bash
rm -rf /var/www/html/poweradmin/install/
```

现在，就可以直接通过浏览器访问 PowerAdmin 了，http://172.16.1.128/poweradmin/

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-4.png)

## 参考链接

* PowerDNS 官方安装指南：https://doc.powerdns.com/md/authoritative/installation/