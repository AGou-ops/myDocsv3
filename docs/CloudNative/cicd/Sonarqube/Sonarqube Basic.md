# Sonarqube Basic

## Sonarqube 简介

SonarQube®是一个自动代码审查工具来检测错误,漏洞,代码中的代码味道。它可以与现有的工作流集成使连续的代码检查在您的项目分支和拉请求。

## Sonarqube 安装

 1、基础准备

- `Sonarqube`较新版本依赖于`jdk11`, 所以需要提前安装`jdk11`:

```bash
yum install -y jdk-11.0.7_linux-x64_bin.rpm
```

- 调整系统参数

```bash
sysctl -w vm.max_map_count=262144
sysctl -w fs.file-max=65536
ulimit -n 65536
ulimit -u 4096
```

- 创建专用账号`sonar`(:warning: 重要: 如果不适用普通账户,` sonarqube`将无法正常启动!)

```bash
# 创建账号并授权
useradd sonar
echo "sonar" | passwd --stdin sonar
```

 2、准备数据库及账号

```bash
#  进入mysql-shell
mysql -u root -p
#  新建用户
MariaDB [(none)]> CREATE USER 'sonar'@'localhost' IDENTIFIED BY 'sonar';
MariaDB [(none)]> CREATE USER 'sonar'@'%' IDENTIFIED BY 'sonar';
#  新建数据库
MariaDB [(none)]> CREATE DATABASE sonar;
#  赋予数据库访问权限
MariaDB [(none)]> GRANT ALL PRIVILEGES ON sonar.* TO 'sonar'@'localhost';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON sonar.* TO 'sonar'@'%';
#  刷新权限
MariaDB [(none)]> FLUSH PRIVILEGES;
```

> 在较新的版本的`sonarqube`中, 已经不推荐使用`MySQL`数据库作为存储数据库, 官方推荐数据库是`MS SQL Server`, `Oracle`和`PostgreSQL` 

```bash
postgres=# CREATE database sonarqube;
postgres=# CREATE USER sonar WITH PASSWORD 'sonar';
postgres=# GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;
```

 3、下载

- 准备软件以及数据目录

```bash
mkdir -p /usr/sonar
mkdir -p /sonar/data
mkdir -p /sonar/temp
```

- 下载

```bash
# 下载软件包
sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-8.4.1.35646.zip

# 解压
sudo unzip sonarqube-8.4.1.35646.zip -d /usr/sonar/
```

- 授权

```bash
#  授予相关目录权限
chown -R sonar:sonar /usr/sonar
chown -R sonar:sonar /sonar
```

 4、配置环境变量

```bash
# 修改profile文件
sudo vi /etc/profile

# 在文件末尾增加变量：SONAR_HOME
export SONAR_HOME=/usr/sonar/sonarqube-8.4.1

# 使变量生效
source /etc/profile

# 测试
echo $SONAR_HOME
```

 5、配置Sonar

```bash
# 修改配置文件
sudo vi $SONAR_HOME/conf/sonar.properties

# 在配置文件开头增加以下配置

# 数据库配置
sonar.jdbc.username=sonar
sonar.jdbc.password=sonar
#sonar.jdbc.url=jdbc:mysql://localhost:3306/sonar?useConfigs=maxPerformance&rewriteBatchedStatements=true&characterEncoding=utf8&useUnicode=true&serverTimezone=GMT%2B08:00
sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube

# 文件配置
sonar.path.data=/sonar/data
sonar.path.temp=/sonar/temp

# Web配置
sonar.web.host=0.0.0.0
sonar.web.port=9000
sonar.web.context=/
```

:warning: 这里要强调的是，`端口号需要>1000`，因为sonar启动是使用的非root账号，默认是不能使用1000以下的端口的，否则会启动失败.

6、开放端口

```bash
sudo firewall-cmd --add-port=9000/tcp --permanent
sudo firewall-cmd --reload
```

 7、启动Sonar

```bash
# 切换到sonar账号
su sonar

# 启动
sh $SONAR_HOME/bin/linux-x86-64/sonar.sh start

# 启动完成会看到以下输出
Starting SonarQube...
Started SonarQube.

# 如果未完成启动可以使用console命令查看启动过程中的问题
sh $SONAR_HOME/bin/linux-x86-64/sonar.sh console
```

> sonar支持的启动参数： console | start | stop | restart | status | dump

如果启动完成，但是依然不能访问，可以通过以下命令查看启动日志

```bash
cat $SONAR_HOME/logs/web.log
```

成功启动后，可以访问 `http://127.0.0.1:9000`

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-1.png)

:information_source:默认账号密码均为`admin`.

启动完成之后, 发现网站下方有一条警告, 是因为我们没有配置好数据库, 配置好数据库重启`sonarqube`即可.

## 从 Docker 启动

1. PULL  And RUN `PostgreSQL`  Docker  image:

```sql
# 启动 PostgreSQL
$ docker run -it --name pgsql -p 5432:5432 -e POSTGRES_PASSWORD=sonar -d postgres
# 连接本地 PostgreSQL
$ docker exec -it pgsql psql -U postgres
psql (12.3 (Debian 12.3-1.pgdg100+1))
Type "help" for help.

postgres=# CREATE database sonarqube;
postgres=# CREATE USER sonar WITH PASSWORD 'sonar';
postgres=# GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;
```

2. Find the Community Edition Docker image on [Docker Hub](https://hub.docker.com/_/sonarqube/). THEN Start the server by running:

```bash
$ docker run -d --name sonarqube \
    -p 9000:9000 \
    -e sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube \
    -e sonar.jdbc.username=sonar \
    -e sonar.jdbc.password=sonar \
    -v sonarqube_conf:/opt/sonarqube/conf \
    -v sonarqube_extensions:/opt/sonarqube/extensions \
    -v sonarqube_logs:/opt/sonarqube/logs \
    -v sonarqube_data:/opt/sonarqube/data \
    sonarqube
# docker run -d --name sonarqube -p 9000:9000 -e SONAR_JDBC_URL=jdbc:postgresql://39.99.144.153/sonarqube -e SONAR_JDBC_USERNAME=postgres -e SONAR_JDBC_PASSWORD=sonar -v /x/sonarqube_extensions:/opt/sonarqube/extensions sonarqube
```

3. Log in to http://127.0.0.1:9000 with System Administrator credentials (login=admin, password=admin).

## sonarqube 手动扫描代码

参考: https://my.oschina.net/u/4313515/blog/4187313

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-3.png)

## sonarqube 汉化

github 项目仓库地址: https://github.com/SonarQubeCommunity/sonar-l10n-zh

**安装方法一:**

```bash
wget https://github.com/SonarQubeCommunity/sonar-l10n-zh/releases/download/sonar-l10n-zh-plugin-8.4/sonar-l10n-zh-plugin-8.4.jar -O /home/sonar/sonarqube-8.4.1.35646/extensions
```

**安装方法二:**

依次点击 `Administration --> Marketplace`, 然后搜索`Chinese Pack`进行安装.

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-2.png)

安装完成之后会提示你重启`sonarqube`, 按照提示重启即可.

## 参考资料

- Sonarqube Documentation: https://docs.sonarqube.org/