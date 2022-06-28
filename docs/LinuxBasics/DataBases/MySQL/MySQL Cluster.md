# MySQL Cluster    

## MySQL 主从复制原理

参考：https://zhuanlan.zhihu.com/p/96212530

![原理](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/mysql/mysql-1.jpg)

## MySQL 主从同步

环境(MySQL5.7)：

| 角色   | IP           |
| ------ | ------------ |
| Master | 172.16.1.128 |
| Slave  | 172.16.1.136 |

在默认安装的`test`数据库中建一个测试表：

```sql
mariadb root@172.16.1.128:test> SHOW CREATE TABLE test\G
***************************[ 1. row ]***************************
Table        | test
Create Table | CREATE TABLE `test` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL COMMENT '姓名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='测试表'

1 row in set
Time: 0.004s
```

### 在 Master 主服务上

在主服务器上为从服务器建立一个连接帐户，并授予`REPLICATION SLAVE`权限。

```sql
mysql> grant replication slave on *.* to 'backup'@'172.16.1.136' identified by '123';
mysql> flush privileges;
```

创建好用户之后，在从服务器进行登录测试：

```bash
mysql -ubackup -p123 -h172.16.1.128
```

修改 mysql 配置文件，`/etc/my.cnf`：

```shell
# 在[mysqld]配置段添加以下内容
server-id=1　　　　　　　　# mysql主从里，id必须唯一，范围：1~255
log-bin=master-bin       # 其中这两行是本来就有的，可以不用动，添加下面两行即可.指定日志文件
binlog_format="mixed"
binlog-do-db=test　　　　# 记录日志的数据库
binlog-ignore-db=mysql   # 不记录日志的数据库
```

修改完保存退出，然后重启服务，`systemctl restart mariadb`

查看主服务器状态：

```sql
mysql> flush tables with read lock;
mysql> > show master status\G
*************************** 1. row ***************************
            File: master-bin.000003
        Position: 2007
    Binlog_Do_DB: 
Binlog_Ignore_DB: 
1 row in set (0.00 sec)

```

锁表，为了产生环境中不让进新的数据，好让从服务器定位同步位置，初次同步完成后，记得解锁。

```sql
mysql> unlock tables;
```

### 在 Slave 从服务器上

编辑配置文件`my.cnf`：

```bash
# 在[mysqld]配置段添加以下内容
server-id=2
log-bin=master-bin
replicate-do-db=test
replicate-ignore-db=mysql,information_schema,performance_schema
```

修改完保存退出，然后重启服务，`systemctl restart mariadb`

使用`change master`命令指定同步位置：

```sql
mysql> stop slave;
# 如果发生错误，需要使用 `reset slave;` 来进行重置
mysql> change master to master_host='172.16.1.128',master_user='backup',master_password='123', master_log_file='master-bin.000003',master_log_pos=2007;
```

:warning:注意：上面的`master_log_file`和`master_log_pos`值要与 Master 主机一致。

查看 Slave 状态：

```sql
mysql> show slave status\G;
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 172.16.1.128
                  Master_User: backup
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: master-bin.000003
          Read_Master_Log_Pos: 1024
               Relay_Log_File: mariadb-relay-bin.000002
                Relay_Log_Pos: 783
        Relay_Master_Log_File: master-bin.000003
             Slave_IO_Running: Yes		# 如果看到这一项和下面一项均为 Yes，则表明从服务器配置完成
            Slave_SQL_Running: Yes
              Replicate_Do_DB: test
          Replicate_Ignore_DB: mysql,information_schema,performance_schema
           Replicate_Do_Table: 
 ...
```

### 测试同步

在 Master 服务器中向之前创建好的`test`空表插入数据：

```sql
mysql> insert into test.test(id,name) value(2,'suofeiya');
```

在 Slave 端进行查看：

```sql
mysql> select *  from test.test;
+----+-----------+
| id | name      |
+----+-----------+
|  2 | suofeiya  |
+----+-----------+
```

## MySQL 双主同步

| 角色                  | IP           |
| --------------------- | ------------ |
| Master/Slave(server1) | 172.16.1.128 |
| Slave/Master(server2) | 172.16.1.136 |

同时在主服务器上建立一个连接用户，并授予`REPLIATION SLAVE`权限，这里服务器1和服务器2都互为主从，所以需要分别建立。

```sql
# 在 server1 上
mysql> grant replication slave on *.* to 'backup'@'172.16.1.136' identified by '123';
mysql> flush privileges;
# 在 server2 上
mysql> grant replication slave on *.* to 'backup'@'172.16.1.128' identified by '123';
mysql> flush privileges;
```

双方测试连接，确保同步能够正常进行

修改配置文件`/etc/my.cnf`的`[mysqld]`配置段(仅作为参考)：

```shell
# --------- server1 --------- 
server-id=1
log-bin=mysql-bin 
binlog-do-db=test
binlog-ignore-db=mysql
# 主－主形式需要多添加的部分
log-slave-updates
sync_binlog=1
auto_increment_offset=1
auto_increment_increment=2
replicate-do-db=test
replicate-ignore-db=mysql,information_schema

#  --------- server2 ---------
server-id=2
log-bin=mysql-bin 
replicate-do-db=test
replicate-ignore-db=mysql,information_schema,performance_schema
# 主－主形式需要多添加的部分
binlog-do-db=test
binlog-ignore-db=mysql
log-slave-updates
sync_binlog=1
auto_increment_offset=2
auto_increment_increment=2
```

修改完保存退出，随后重启 server1 和server2 的服务，`systemctl restart mariadb`

查看 server1 和 server2 两主机作为主服务器的状态：

```sql
-- server1
mysql> show master status\G
*************************** 1. row ***************************
            File: mysql-bin.000001
        Position: 245
    Binlog_Do_DB: test
Binlog_Ignore_DB: mysql
1 row in set (0.00 sec)

-- server2
mysql> show master status\G
*************************** 1. row ***************************
            File: mysql-bin.000001
        Position: 245
    Binlog_Do_DB: test
Binlog_Ignore_DB: mysql
1 row in set (0.00 sec)
```

分别在两主机上使用`change master to`指定同步位置：

```sql
-- server1
mysql> change master to master_host='172.16.1.136',master_user='backup',master_password='123', master_log_file='mysql-bin.000001',master_log_pos=245;
-- server2
mysql> change master to master_host='172.16.1.128',master_user='backup',master_password='123', master_log_file='mysql-bin.000001',master_log_pos=245;
```

然后，分别在两主机上启动从服务器线程并查看其状态：

```sql
-- server1
mysql> start slave;
mysql> show slave status\G;
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 172.16.1.136
                  Master_User: backup
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000001
          Read_Master_Log_Pos: 245
               Relay_Log_File: mariadb-relay-bin.000002
                Relay_Log_Pos: 529
        Relay_Master_Log_File: mysql-bin.000001
             Slave_IO_Running:` Yes`		# 看到这两个Yes即表示成功启动
            Slave_SQL_Running:` Yes`
              Replicate_Do_DB: test
          Replicate_Ignore_DB: mysql,information_schema
...
-- server2
mysql>start slave;
mysql> show slave status\G;
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 172.16.1.128
                  Master_User: backup
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000001
          Read_Master_Log_Pos: 245
               Relay_Log_File: mariadb-relay-bin.000002
                Relay_Log_Pos: 529
        Relay_Master_Log_File: mysql-bin.000001
             Slave_IO_Running: `Yes`
            Slave_SQL_Running: `Yes`
              Replicate_Do_DB: test
          Replicate_Ignore_DB: mysql,information_schema,performance_schema
           Replicate_Do_Table: 
...
```

测试双主同步：

```sql
-- 在 server1 上插入一条数据，看 server2 是否成功同步
mysql> insert into test.test(id,name) value(3,'agou-ops');
-- 在 server2 上进行查看
mysql> select * from test.test;
+----+-----------+
| id | name      |
+----+-----------+
|  2 | suofeiya  |
`|  3 | agou-ops  |	`
+----+-----------+

-- 在 server2 上创建一张测试数据表xxx，看 server1 是否成功同步
mysql> create table test.xxx(id INT(10),name VARCHAR(25));
-- 在 server1 上进行查看
mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| test           |
| xxx            |
+----------------+
```

至此，双主同步已经成功搭建。

## 基于 SSL 加密传输(主从)

由于 mysql 在复制过程中是明文的，所以就大大降低了安全性，因此需要借助于ssl加密来增加其复制的安全性。

### 预先准备

在配置 ssl 前我们先看下一下 ssl 的状态信息：

```sql
mysql> show variables like '%ssl%';
+---------------+----------+
| Variable_name | Value    |
+---------------+----------+
| have_openssl  | DISABLED |
| have_ssl      | DISABLED |
| ssl_ca        |          |
| ssl_capath    |          |
| ssl_cert      |          |
| ssl_cipher    |          |
| ssl_key       |          |
+---------------+----------+
7 rows in set (0.01 sec)
```

可以看到 SSL 处于 `DISABLED`状态，表示未开启。

要开启 SSL 只需要在配置文件`/etc/my.cnf`中加入 ssl 即可：

```bash
# 在 [mysqld] 配置段
ssl
```

随后保存退出，重启服务即可，`systemctl restart mariadb`

查看确认：

```sql
mysql> show variables like '%ssl%';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| have_openssl  | YES   |
| have_ssl      | YES   |
| ssl_ca        |       |
| ssl_capath    |       |
| ssl_cert      |       |
| ssl_cipher    |       |
| ssl_key       |       |
+---------------+-------+
7 rows in set (0.00 sec)
```

### 配置主从服务的 SSL 功能 

#### 配置 CA 和颁发证书

在` Master `主机上，配置 `CA`服务器：

```bash
cd /etc/pki/CA
touch index.txt
echo 01 > serial
(umask 077;openssl genrsa -out private/cakey.pem 1024)
openssl req -x509 -new -key private/cakey.pem -out cacert.pem -days 365
```

为`Master`准备私钥并颁发证书：

```bash
# 创建存放证书的目录
mkdir /usr/local/mysql/ssl -pv
cd /usr/local/mysql/ssl

# 创建所需要的证书
(umask 077;openssl genrsa 1024 > master.key)
openssl req -new -key master.key -out master.csr
openssl ca -in master.csr -out master.crt -days 365
cp /etc/pki/CA/cacert.pem /usr/local/mysql/ssl
chown -R mysql:mysql /usr/local/mysql/ssl
```

在`Slave`主机上，准备私钥并申请证书：

```bash
# 创建存放证书的目录
mkdir /usr/local/mysql/ssl -pv
cd /usr/local/mysql/ssl

# 创建所需要的证书
(umask 077;openssl genrsa 1024 > slave.key)
openssl req -new -key slave.key -out slave.csr
 scp ./slave.csr 172.16.1.128:/root
```

在 `Master`(主服务器)上为 Slave (从服务器)签发证书：

```bash
openssl ca -in slave.csr -out slave.crt
scp slave.crt /etc/pki/CA/cacert.pem 172.16.1.136:/usr/local/mysql/ssl
```

到此为止证书已经准备完成，请确保`Master`和`Slave`主机上有如下文件，并且属主和属组为mysql：

```bash
# master 主机上
[root@stor1 ssl]\# ll
total 16
-rw-r--r-- 1 mysql mysql  960 May 12 00:05 cacert.pem
-rw-r--r-- 1 mysql mysql 3065 May 12 00:05 master.crt
-rw-r--r-- 1 mysql mysql  647 May 12 00:05 master.csr
-rw------- 1 mysql mysql  887 May 12 00:04 master.key
# slave 主机上
[root@stor2 ssl]\# ll
total 12
-rw-r--r-- 1 mysql mysql 960 May 12 00:10 cacert.pem
-rw-r--r-- 1 mysql mysql   0 May 12 00:10 slave.crt
-rw-r--r-- 1 mysql mysql 647 May 12 00:09 slave.csr
-rw------- 1 mysql mysql 891 May 12 00:06 slave.key
```

#### 修改配置文件

修改`Master`和`Slave`主机配置文件：

```shell
# 在 [mysqld] 段添加以下内容
# ------------ Master 主机 ------------
server-id=1
log-bin=mysql-bin
binlog-do-db=test
binlog-ignore-db=mysql
relay-log=mysql-relay
auto-increment-increment=2
auto-increment-offset=1


ssl
ssl-ca=/usr/local/mysql/ssl/cacert.pem
ssl-cert=/usr/local/mysql/ssl/master.crt
ssl-key=/usr/local/mysql/ssl/master.key

# ------------ Slave 主机 ------------
server-id=2
log-bin=mysql-bin
relay-log=mysql-relay
skip-slave-start=1
ssl
```

完成后保存退出，然后都重启服务，`systemctl restart mariadb`

在`Master`主机进行查看：

```sql
mysql> show variables like '%ssl%';
+---------------+---------------------------------+
| Variable_name | Value                           |
+---------------+---------------------------------+
| have_openssl  | YES                             |
| have_ssl      | YES                             |
| ssl_ca        | /usr/local/mysql/ssl/cacert.pem |
| ssl_capath    |                                 |
| ssl_cert      | /usr/local/mysql/ssl/master.crt |
| ssl_cipher    |                                 |
| ssl_key       | /usr/local/mysql/ssl/master.key |
+---------------+---------------------------------+
7 rows in set (0.01 sec)
```

在`Master`主机上创建具有复制权限的用户并授权给从服务器，参考上面的主从，这里就不再赘述。

查看`Master`主机状态信息并记录下来：

```sql
mysql> show master status\G
*************************** 1. row ***************************
            File: mysql-bin.000005
        Position: 245
    Binlog_Do_DB: test
Binlog_Ignore_DB: mysql
1 row in set (0.00 sec)
```

**配置`Slave`端：**

```sql
mysql> CHANGE MASTER TO MASTER_HOST='172.16.1.128',
MASTER_USER='backup',
MASTER_PASSWORD='123',
MASTER_LOG_FILE='mysql-bin.000005',
MASTER_LOG_POS=245,
MASTER_SSL=1,
MASTER_SSL_CA='/usr/local/mysql/ssl/cacert.pem',
MASTER_SSL_CERT='/usr/local/mysql/ssl/slave.crt',
MASTER_SSL_KEY='/usr/local/mysql/ssl/slave.key';
```

:warning:注意：如果之前已经启动过`slave`和配置过`slave`需要将其停掉，并重置：

```sql
mysql> stop slave;
Query OK, 0 rows affected, 1 warning (0.00 sec)

mysql> reset slave;
Query OK, 0 rows affected (0.03 sec)
```

在`slave`客户端使用 SSL 进行测试连接：

```sql
[root@stor2 ssl]\# mysql --ssl-ca=/usr/local/mysql/ssl/cacert.pem --ssl-cert=/usr/local/mysql/ssl/slave.crt --ssl-key=/usr/local/mysql/ssl/slave.key -ubackup -h172.16.1.128 -p123
...
mysql> \s
--------------
mysql  Ver 15.1 Distrib 5.5.65-MariaDB, for Linux (x86_64) using readline 5.1

Connection id:          5
Current database:
Current user:           backup@172.16.1.136
SSL:                    Cipher in use is DHE-RSA-AES256-GCM-SHA384
Current pager:          stdout
Using outfile:          ''
Using delimiter:        ;
Server:                 MariaDB
Server version:         5.5.65-MariaDB MariaDB Server
Protocol version:       10
Connection:             172.16.1.128 via TCP/IP
Server characterset:    latin1
Db     characterset:    latin1
Client characterset:    utf8
Conn.  characterset:    utf8
TCP port:               3306
Uptime:                 3 min 40 sec

Threads: 2  Questions: 16  Slow queries: 0  Opens: 0  Flush tables: 2  Open tables: 26  Queries per second avg: 0.072
--------------
```

启动`slave`并查看状态信息：

```sql
mysql> start slave;
mysql> show slave status\G
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 172.16.1.128
                  Master_User: backup
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000006
          Read_Master_Log_Pos: 245
               Relay_Log_File: mysql-relay.000003
                Relay_Log_Pos: 529
        Relay_Master_Log_File: mysql-bin.000006
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
...
```

测试主从同步：

```sql
-- 在 Master 主机上创建一个测试表yyy
mysql> create table test.yyy(id INT(12),name VARCHAR(25));
-- 在 Slave 端进行查看
mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| tb_mobile      |
| test           |
| xxx            |
| `yyy`            |
+----------------+
4 rows in set (0.00 sec)
```

## 基于 SSL 加密传输(双主)

参考[基于 SSL 加密传输(主从)](#基于 SSL 加密传输(主从))