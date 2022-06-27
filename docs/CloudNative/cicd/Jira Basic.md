# Jira Basic

> JIRA是Atlassian公司出品的项目与事务跟踪工具，被广泛应用于缺陷跟踪、客户服务、需求收集、流程审批、任务跟踪、项目跟踪和敏捷管理等工作领域。

## Jira 安装与部署

`jira`基于 Java 开发，因此安装之前需要提前配置好 Java，在此就不再赘述。

### 安装Jira

从官方站点下载所需二进制安装包, https://www.atlassian.com/software/jira/download

```bash
$ atlassian-jira-software-8.13.1-x64.bin
$ ./atlassian-jira-software-8.13.1-x64.bin
```

然后一路`[ENTER]`使用默认配置即可.

### 数据库相关

初始化数据库:

```sql
mysql> CREATE DATABASE jiradb CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
-- GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,INDEX on <JIRADB>.* TO '<USERNAME>'@'<JIRA_SERVER_HOSTNAME>' IDENTIFIED BY '<PASSWORD>';
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,INDEX on jiradb.* TO 'jiradbuser'@'%' IDENTIFIED BY '123';
flush privileges;
```

设置数据库参数:

```ini
[mysqld]
default-storage-engine=INNODB
character_set_server=utf8mb4
innodb_default_row_format=DYNAMIC
innodb_large_prefix=ON
innodb_file_format=Barracuda
innodb_log_file_size=2G
# 移除该选项, 如果存在的话
sql_mode = NO_AUTO_VALUE_ON_ZERO
```

重启mysql: `systemctl restart mysqld`

### 下载并复制`MySQL JDBC`驱动

拷贝`mysql JDBC`驱动:

```bash
# 首先从官方站点下载jdbc驱动
wget https://cdn.mysql.com//Downloads/Connector-J/mysql-connector-java-5.1.49.tar.gz
tar xf  mysql-connector-java-5.1.49.tar.gz -C /opt/atlassian/jira/lib
```

### 启动 Jira 并连接数据库

```bash
$ sudo /etc/init.d/jira start
# sudo /etc/init.d/jira stop
```

按照引导填入对应信息即可:

![jira-setup-mysql](https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/jira-setup-mysql.png)

初始化数据库会花费一定时间, 等待即可.

我丢, 安装了半天发现竟然没有免费社区版本可用, 需要申请账号及试用许可, 申请过程按照引导填写基本信息即可, 以下未申请好的`License Key`样例:

![jira-license-key](https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/jira-license-key.png)

### Jira 8.x 以及插件破解

~~果然, 网友还是没让我失望, 既然没有社区版, 就用破解版的喽.~~

- JIRA 8.6安装和破解: https://www.dqzboy.com/jira-8-6%E5%AE%89%E8%A3%85%E4%B8%8E%E7%A0%B4%E8%A7%A3#h3-7
- Jira8.x版本安装与破解: https://www.jianshu.com/p/9ca92a191f36
- JIRA的安装和破解: https://www.cnblogs.com/cekaigongchengshi/p/12800791.html

## 附录: 破解包下载直链

https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-extras-3.2.jar

https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-agent.jar

## 参考链接

- Jira Installation: https://confluence.atlassian.com/adminjiraserver/installing-jira-applications-on-linux-938846841.html
- Connect Jira to Database: https://confluence.atlassian.com/adminjiraserver/connecting-jira-applications-to-a-database-938846850.html