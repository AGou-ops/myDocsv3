# LAMP快速部署

## Ubuntu 18版本

快速部署命令：

```bash
# 安装php7.2-fpm
sudo apt -y install software-properties-common apt-transport-https lsb-release ca-certificates
sudo add-apt-repository ppa:ondrej/php  
sudo apt-get update
sudo apt install php7.2-fpm php7.2-mysql php7.2-curl php7.2-gd php7.2-mbstring php7.2-xml php7.2-xmlrpc php7.2-zip php7.2-opcache -y
sed -i 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/' /etc/php/7.2/fpm/php.ini 
systemctl restart php7.2-fpm
# 安装apache2
sudo apt-get install apache2
# 安装Apache2模块，使其支持php
sudo apt-get install libapache2-mod-php7.2
# 安装MySQL
sudo apt-get install mysql-server
```

启动`mod_rewrite`模块，解决除了index.php其他页面404的问题：

```bash
sudo a2enmod rewrite

# 修改配置文件/etc/apache2/apache2.conf
<Directory /var/www/>
        Options Indexes FollowSymLinks
        # 主要是下面这行，改为all
        AllowOverride all
        Require all granted
</Directory>
# 最后重启Apache2服务即可.
sytemctl restart apache2
```

