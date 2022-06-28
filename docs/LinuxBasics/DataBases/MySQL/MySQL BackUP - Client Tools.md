# MySQL BackUP & Client Tools

**Mysql备份类型**

1）按照备份时对数据库的影响分为:

　　`Hot backup`（热备）：也叫在线备份。指在数据库运行中直接备份，对正在运行的数据库没有任何影响。

　　`Cold backup`（冷备）：也叫离线备份。指在数据库停止的情况下备份。

　　`Warm backup`（温备）：在数据库运行时备份，会加一个全局锁以保证数据的一致性，会对当前数据库的操作有影响。

2）按照备份后的文件内容分为:

　　`逻辑备份`：指备份后的文件内容是可读的，通常为文本文件，内容一般是SQL语句或表内的实际数据（mysqldump和select * into outfile），一般适用于数据库的升级和迁移，还原时间较长。

　　`裸文件备份`：也叫物理备份。拷贝数据库的物理文件，数据库既可以处于运行状态（mysqlhotcopy、ibbackup、xtrabackup一类工具），也可以处于停止状态，还原时间较短。

3）按照备份数据库的内容分为:

　　`完全备份`：对数据库进行完整的备份。

　　`增量备份`：在上一次完整备份的基础上，对更新的数据进行备份（xtrabackup）

　　`日志备份`：二进制日志备份，主从同步。

## mysql select导出导入指定数据

导出数据：

```sql
SELECT * FROM test_tbl INTO OUTFILE '/PATH/TO/FILE'
-- 增加输出格式条件
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n';
```

导入数据：

```sql
USE db1;
LOAD DATA INFILE "./data.txt" INTO TABLE db2.my_table; 
```

## mysqldump 备份数据库

mysqldump导出来的数据有两个文件，一个是sql文件，一个是txt文件.

### 命令格式

```bash
mysqldump [选项] 数据库名 [表名] > 脚本名
```

或

```bash
mysqldump [选项] --数据库名 [选项 表名] > 脚本名
```

或

```bash
mysqldump [选项] --all-databases [选项]  > 脚本名
```

### 选项说明

| 参数名                          | 缩写 | 含义                          |
| ------------------------------- | ---- | ----------------------------- |
| --host                          | -h   | 服务器IP地址                  |
| --port                          | -P   | 服务器端口号                  |
| --user                          | -u   | MySQL 用户名                  |
| --pasword                       | -p   | MySQL 密码                    |
| --databases                     |      | 指定要备份的数据库            |
| --all-databases                 |      | 备份mysql服务器上的所有数据库 |
| --compact                       |      | 压缩模式，产生更少的输出      |
| --comments                      |      | 添加注释信息                  |
| --complete-insert               |      | 输出完成的插入语句            |
| --lock-tables                   |      | 备份前，锁定所有数据库表      |
| --no-create-db/--no-create-info |      | 禁止生成创建数据库语句        |
| --force                         |      | 当出现错误时仍然继续备份操作  |
| --default-character-set         |      | 指定默认字符集                |
| --add-locks                     |      | 备份数据库表时锁定数据库表    |

### 实例

备份所有数据库：

```bash
mysqldump -uroot -p --all-databases > /backup/mysqldump/all.db
```

备份指定数据库：

```bash
mysqldump -uroot -p test > /backup/mysqldump/test.db
```

备份指定数据库指定表(多个表以空格间隔)

```bash
mysqldump -uroot -p  mysql db event > /backup/mysqldump/2table.db
```

备份指定数据库排除某些表

```bash
mysqldump -uroot -p test --ignore-table=test.t1 --ignore-table=test.t2 > /backup/mysqldump/test2.db
```

## mysqlimport 导入数据库

在使用该工具之前，让我们来了解以下 mysql 命令行导入数据的命令。

```bash
mysql -uroot -p123456 < test.sql
```

```bash
mysql> create database test;      # 创建数据库
mysql> use test;                  # 使用已创建的数据库 
mysql> set names utf8;           # 设置编码
mysql> source /home/test.sql  # 导入备份数据库
```

### 命令格式

```bash
mysqlimport -u root -p [--LOCAL] DBname  File  [option]
```

### 选项说明

| 选项                         | 功能                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| -d or --delete               | 新数据导入数据表中之前删除数据数据表中的所有信息             |
| -f or --force                | 不管是否遇到错误，mysqlimport将强制继续插入数据              |
| -i or --ignore               | mysqlimport跳过或者忽略那些有相同唯一 关键字的行， 导入文件中的数据将被忽略。 |
| -l or -lock-tables           | 数据被插入之前锁住表，这样就防止了， 你在更新数据库时，用户的查询和更新受到影响。 |
| -r or -replace               | 这个选项与－i选项的作用相反；此选项将替代 表中有相同唯一关键字的记录。 |
| --fields-enclosed- by= char  | 指定文本文件中数据的记录时以什么括起的， 很多情况下 数据以双引号括起。 默认的情况下数据是没有被字符括起的。 |
| --fields-terminated- by=char | 指定各个数据的值之间的分隔符，在句号分隔的文件中， 分隔符是句号。您可以用此选项指定数据之间的分隔符。 默认的分隔符是跳格符（Tab） |
| --lines-terminated- by=str   | 此选项指定文本文件中行与行之间数据的分隔字符串 或者字符。 默认的情况下mysqlimport以newline为行分隔符。 您可以选择用一个字符串来替代一个单个的字符： 一个新行或者一个回车。 |

:warning: 注意：如果导入导出是跨平台操作的（比如Windows和Linux），那么就要注意设置参数`line-terminated-by`，因为两个操作系统的行结尾符是不一样的。Windows上是：`line-terminated-by='\r\n'`，Linux上设置为:`line-terminated='\n'`。

### 实例

```bash
mysqlimport -uroot -p123456 -P 3306 -h 127.0.0.1 mob_adn /tmp/bak/test.txt --fields-terminated-by='\t' --fields-optionally-enclosed-by='"'
```

## Xtrabackup 备份/导入数据库

官方站点：https://www.percona.com/blog/tag/xtrabackup/

**Xtrabackup 优点**

1）备份速度快，物理备份可靠
2）备份过程不会打断正在执行的事务（无需锁表）
3）能够基于压缩等功能节约磁盘空间和流量
4）自动备份校验
5）还原速度快
6）可以流传将备份传输到另外一台机器上
7）在不增加服务器负载的情况备份数据

安装`Xtrabackup`工具：

```bash
# 使用仓库安装
apt intall -y xtrabackup
# yum仓库中的xtrabackup版本较低，不推荐使用，可以自行去官方仓库下载使用
yum install -y https://www.percona.com/downloads/XtraBackup/Percona-XtraBackup-2.4.9/binary/redhat/7/x86_64/percona-xtrabackup-24-2.4.9-1.el7.x86_64.rpm
```

### :minidisc: Xtrabackup 实战

####  全量备份

**1.创建备份**

```bash
xtrabackup --uroot -p123456 --databases=test --backup --target-dir=/backup/xtrabackup/
```

如果目标目录不存在，`xtrabackup` 会创建它。`xtrabackup`不会覆盖现有文件，如果目标文件已存在它会因操作系统错误17而失败。

**2.准备备份**

```bash
xtrabackup --prepare --target-dir=/backup/xtrabackup/
```

一般情况下,在备份完成后，数据尚且不能用于恢复操作，因为备份的数据中可能会包含尚未提交的事务或已经提交但尚未同步至数据文件中的事务。因此，此时数据 文件仍处理不一致状态。`--prepare`参数实现通过回滚未提交的事务及同步已经提交的事务至数据文件使数据文件处于一致性状态。

**3.恢复备份**

```bash
systemctl stop mysqld # 关闭 MySQL 服务
rsync -avrP /backup/xtrabackup/ /var/lib/mysql/ # 还原数据
chown -R mysql:mysql /var/lib/mysql 
systemctl start mysqld # 重启 MySQL 服务
```

#### 增量备份

**1.先创建完全备份 **

```bash
xtrabackup --uroot -p123456 --databases=test --backup --target-dir=/backup/xtrabackup/
```

**2.创建第一次增量备份**

```bash
xtrabackup --uroot -p123456 --databases=test --backup --target-dir=/backup/inc1/ --incremental-basedir=/backup/xtrabackup/
```

**3.创建第二次增量备份**

```bash
xtrabackup --uroot -p123456 --databases=test --backup --target-dir=/backup/inc2/ --incremental-basedir=/backup/inc1/
```

**4.准备全量备份**

```bash
xtrabackup --prepare --apply-log-only --target-dir=/backup/xtrabackup/
```

`--apply-log-only `阻止回滚未提完成的事务

**5.准备第一次增量备份**

```bash
xtrabackup --prepare --apply-log-only --target-dir=/backup/xtrabackup/ --incremental-dir=/backup/inc1
```

**6.准备第二次增量备份**

```bash
xtrabackup --prepare --target-dir=/backup/xtrabackup/ --incremental-dir=/backup/inc2/
```

**7.恢复数据**

```bash
systemctl stop mysqld 		# 停止服务
rsync -avrP /backup/xtrabackup/ /var/lib/mysql/
chown -R mysql:mysql /var/lib/mysql    
systemctl start mysqld 		# 启动服务
```

现在数据已经恢复到执行第二次增量备份命令时的数据。

## mysqladmin/mysqlshow 客户端管理工具

常用示例：

```bash
1、查看服务器的状况：
# 每2秒查看一次服务器的状态，总共重复5次。
mysqladmin -uroot -p -i 2 -c 5 status

2.修改root 密码：
mysqladmin -u root -poldpassword password 'newpassword'

3.检查mysqlserver是否可用：
mysqladmin -uroot -p ping

4.查询服务器的版本：
mysqladmin -uroot -p version

5.显示服务器所有运行的进程：
mysqladmin -uroot -p processlist

`6.创建数据库：`
mysqladmin -uroot -p create test

`7.删除数据库 daba-test`
mysqladmin -uroot -p drop daba-test

`8.重载权限信息`
mysqladmin -uroot -p reload
mysqladmin -uroot -p flush-privileges

9.刷新所有表缓存，并关闭和打开log
mysqladmin -uroot -p refresh

`10.使用安全模式关闭数据库`
mysqladmin -uroot -p shutdown

# ---------------- mysqlshow工具 ---------------- 
11.显示服务器上的所有数据库
mysqlshow -uroot -p

12.显示数据库daba-test下有些什么表：
mysqlshow -uroot -p daba-test

13.统计daba-test 下数据库表列的汇总
mysqlshow -uroot -p daba-test -v
 
14.统计daba-test 下数据库表的列数和行数
mysqlshow -uroot -p daba-test -v -v
```

## 参考链接

* mysqldump document: https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html
* mysqlimport document: https://dev.mysql.com/doc/refman/8.0/en/mysqlimport.html
* mysqladmin document: https://dev.mysql.com/doc/refman/8.0/en/mysqladmin.html