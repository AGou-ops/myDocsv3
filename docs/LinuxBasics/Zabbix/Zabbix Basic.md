# Zabbix Basic 

## Zabbix 简介

### Zabbix 组成

- Zabbix 由前端、服务端、代理段、客户端、Java 监控网关几个组件组成
- 前端由 PHP 语言编写
- 服务端、代理端、客户端由 C 语言编写
- Java 监控网关 Java 开发

### Zabbix 架构

![](https://s3.51cto.com/wyfs02/M01/6E/22/wKiom1V0VrizYCrhAAR8zzvcfTI972.jpg)

详细参考：[Zabbix 详细介绍](./Zabbix 详细介绍.md)

## 预先环境配置

为了简化安装部署过程，安装之前关闭`SElinux`和`firewalld`防火墙等.

```bash
# 关闭SElinux
sed -i "s/SELINUX=enforcing/SELINUX=disabled/"  /etc/selinux/config

# 关闭firewalld/ufw防火墙
systemctl stop firewalld
```

环境概述：

| 角色                        | 主机-IP                           |
| --------------------------- | --------------------------------- |
| zabbix-server、zabbix-agent | master.agou-ops.com(172.16.1.130) |
| zabbix-agent                | node01.agou-ops.com(172.16.1.129) |

将`zabbix-web`，数据库，`zabbix-server`都装在master主机之上.

## Zabbix-server 安装

### 安装`LNMP`环境

```bash
yum install -y httpd mariadb-server mariadb php php-cli php-common php-devel php-pear php-gd php-mbstring php-mysql php-xml php-bcmath
```

启动服务

```bash
systemctl start httpd mariadb
```

### 安装最新版 Zabbix

1. 安装 Zabbix 源

```bash
rpm -Uvh https://repo.zabbix.com/zabbix/4.4/rhel/7/x86_64/zabbix-release-4.4-1.el7.noarch.rpm
yum clean all
```

2.  安装Zabbix server，Web前端，agent等相关包

```bash
yum install zabbix-server-mysql zabbix-web-mysql zabbix-web zabbix-agent zabbix-get zabbix-sender -y
```

3. 连入`mysql/pgsql`数据库创建所需数据库

```bash
create database zabbix character set utf8 collate utf8_bin;
```

4. 创建zabbix账户并进行授权

```bash
# grant all privileges on zabbix.* to zabbix@'172.16.%.%' identified by 'zabbix';
grant all privileges on zabbix.* to zabbix@localhost identified by 'zabbix';
flush privileges;
```

5. 导入初始架构和数据，系统将提示您输入新创建的密码

```bash
zcat /usr/share/doc/zabbix-server-mysql-4.4.8/create.sql.gz | mysql -uzabbix -p zabbix
# 或者使用
gunzip /usr/share/doc/zabbix-server-mysql-4.4.8/create.sql.gz
MariaDB [(none)]> use zabbix;
MariaDB [(none)]> source create.sql;
```

## 简单配置 Zabbix-server

编辑配置文件`/etc/zabbix/zabbix_server.conf`，分别找到以下内容并进行修改

```bash
...
DBHost=localhost
DBName=zabbix
DBUser=zabbix
DBPassword=zabbix
DBSocket=/var/lib/mysql/mysql.sock
...
```

为Zabbix前端配置`PHP`，编辑配置文件` /etc/httpd/conf.d/zabbix.conf`

```bash
...
php_value date.timezone Asia/Shanghai
...
```

启动Zabbix server和agent进程，并为它们设置开机自启

```bash
systemctl restart zabbix-server zabbix-agent httpd
systemctl enable zabbix-server zabbix-agent httpd
```

最后，浏览器打开`http://YOUR_IP_ADDR/zabbix/setup.php`即可.

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Zabbix/zabbix-1.png)

完成之后，系统会自动生成`/etc/zabbix/web/zabbix.conf.php`配置文件，此后如要修改相关信息，修改该文件即可.

:information_source:首次登录，使用`Admin`账户密码`zabbix`进行登录

登录成功界面

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Zabbix/zabbix-2.png)

## 添加 Zabbix-agent

在`node01`节点上，安装`zabbix-agent`相关程序包

```bash
rpm -Uvh https://repo.zabbix.com/zabbix/4.4/rhel/7/x86_64/zabbix-release-4.4-1.el7.noarch.rpm
yum install -y zabbix-agent zabbix-sender
```

编辑配置文件`/etc/zabbix/zabbix_agentd.conf`

```bash
Server=172.16.1.130
```

将主机添加到`zabbix server`当中去：

1. 点击`配置`，然后点击`用户`，右上角`创建一个新用户`，填入相关信息
2. 添加一个`监控项`
3. 在监控选项卡中查看`最新数据`

## 前端web页面部分中文显示乱码

问题原因：zabbix 前端默认使用的字体跟中文不兼容导致

解决方法：

```bash
yum -y install wqy-microhei-fonts
cp /usr/share/fonts/wqy-microhei/wqy-microhei.ttc /usr/share/fonts/dejavu/DejaVuSans.ttf
```

## 参考链接

* Zabbix 详细介绍：https://hacpai.com/article/1568722127381
* Zabbix Installation：https://www.zabbix.com/cn/download