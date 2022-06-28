# MariaDB Log    

[TOC]

## 查询日志

查询日志也称为 *general log（通用日志）*，**查询日志记录了数据库执行的所有命令**，由于数据库操作命令有可能非常多而且执行比较频繁，所以当开启了查询日志以后，数据库可能需要不停的写入查询日志，这样会增大服务器的IO压力，增加很多系统开销，所以默认情况下，mysql的查询日志是没有开启的。

开启查询日志可以帮助分析哪些_语句执行频率_，以及对应语句的数据是否能够被缓存，所以，可以根据实际情况决定是否开启查询日志。

开启查询日志后，有三种方式来存放日志：

1. 存放于指定的日志文件中。
2. 存放于mysql.general_log表中。
3. 同时存放在指定的日志文件与mysql库的general_log表中。



查看查询日志的相关参数：

```sql
mysql> show variables where variable_name like "%general_log%" or variable_name="log_output";
+------------------+----------+
| Variable_name    | Value    |
+------------------+----------+
| general_log      | OFF      |
| general_log_file | Dave.log |
| log_output       | FILE     |
+------------------+----------+
3 rows in set (0.01 sec)
```

`log_output:` 表示查询日志开启后，以哪种方式存放，log_output可以设置为4种值，”FILE”、”TABLE”、”FILE,TABLE”、”NONE”。

`general_log_file:`表示当log_output的值设置为”FILE”或者”FILE,TABLE”时，将查询日志存放于哪个日志文件中，即通过此参数指定查询日志的文件，默认文件名是`host_name.log`，而且使用了相对路径，默认位置为DATADIR变量所对应的目录位置。

### 查询日志参数修改

可以直接修改配置文件`/etc/my.cnf`：

```shell
general_log = {ON|OFF} 
general_log_file = /data/mysql/mysql.log 
log_output = {TABLE|FILE|NONE}
```

临时修改可以使用以下命令（重启服务后失效）：

```sql
mysql> set general_log=on;
mysql> set global log_output='file,table';
```

测试：

```sql
mysql> create database test;
mysql> create table test.test_table;
# 查询mysql.general_log表：
mysql> select * from mysql.general_log;

# 也可以进入文件直接查看
cat /mysql/data/Dave.log |more
...
180131  10:16:45       11 Query    create database test;
180131  10:16:52       11 Query    create table test.test_table;
...
```

## 慢查询日志

MariaDB的慢查询日志**用来记录数据库中响应时间超过阀值的语句**，具体指运行时间超过`long_query_time`值的SQL，会被记录到慢查询日志中。`long_query_time`的默认值为10，单位是秒。默认情况下，MariaDB数据库并不启动慢查询日志，开启慢查询日志会带来一定的性能影响。慢查询日志支持将日志记录写入文件，也支持将日志记录写入数据库表。

### 慢查询日志参数修改

在`my.cnf `中的`[mysqld]`部分添加如下内容：

```shell
slow_query_log=on  
long_query_time=1  
# 记录下来没有使用索引的查询
log_queries_not_using_indexes=1
# 执行速度较慢的管理命令也会被记录
log_slow_admin_statements=1
```

临时启用慢查询：

```sql
-- 设置long_query_time：
mysql>  show variables like "%long_query%";
+-----------------+-----------+
| Variable_name   | Value     |
+-----------------+-----------+
| long_query_time | 10.000000 |
+-----------------+-----------+
1 row in set (0.00 sec)

mysql> set global long_query_time=1;
Query OK, 0 rows affected (0.00 sec)

-- 设置：slow_query_log
mysql> show variables like "slow_query_log";
+----------------+-------+
| Variable_name  | Value |
+----------------+-------+
| slow_query_log | OFF   |
+----------------+-------+
1 row in set (0.00 sec)
mysql> set global slow_query_log='ON'; 
...
```

慢查询日志输出位置，默认情况下是输出到File：

```sql
mysql>  show variables like 'log_output';
+---------------+------------+
| Variable_name | Value      |
+---------------+------------+
| log_output    | FILE,TABLE |
+---------------+------------+
1 row in set (0.00 sec)
```

测试查看：

```sql
mysql> select * from mysql.slow_log;
# 直接查看日志输出文件内容
cat /mysql/data/Dave-slow.log | more
```

### 使用 mysqldumpslow 工具分析慢查询日志

使用该工具可以查询出来那些sql语句是性能的瓶颈，进行优化

使用示例：

```bash
# 访问次数最多的20个sql语句
mysqldumpslow -s c -t 20 Dave-slow.log
# 返回记录集最多的20个sql语句
mysqldumpslow -s r -t 20 Dave-slow.log

# 这个是按照时间返回前10条里面含有左连接的sql语句。
mysqldumpslow -t 10 -s t -g “left join” Dave-slow.log
```

## 错误日志

错误日志文件记录了错误信息，以及mysqld进程的关闭和启动的信息，这部分信息并不是全部记录而只是记录mysqld进程运行过程中发生的关键性错误。

错误日志默认位置数据目录`DATADIR `指定的目录中，可以在启动mysqld进程时，通过log-error选项来指定错误日志文件名和存放位置，或者`my.ini`配置文件中配置`log-error`参数，如果没有指定文件名的话，会自动生成一个`[hostname].err`文件保存在`{datadir}`文件夹下。

查看错误日志默认位置：

```sql
mysql> show global variables like 'log_error';

# 在配置文件中查看
 cat /etc/my.cnf |grep log_error
```

## 二进制日志

MariaDB的二进制日志(binlog)记录了所有的`DDL`和`DML`(除了数据查询语句)语句，以事件形式记录，还包含语句所执行的消耗的时间，MariaDB的二进制日志是**事务安全型**的。
二进制日志包括两类文件：二进制日志索引文件（文件名后缀为`.index`）用于记录所有的二进制文件，二进制日志文件（文件名后缀为`.00000*`）记录数据库所有的`DDL`和`DML`(除了数据查询语句)语句事件。

> 一般来说开启二进制日志大概会有1%的性能损耗。二进制有两个最重要的使用场景: 
> 1). MySQL Replication在Master端开启binlog，Mster把它的二进制日志传递给slaves来达到master-slave数据一致的目的。 
> 2). 数据恢复，通过使用mysqlbinlog工具来使恢复数据。

### 二进制日志的三种模式

#### Row Level

日志中会记录成每一行数据被修改的形式，然后在slave端再对相同的数据进行修改。

#### Statement Level

每一条会修改数据的sql都会记录到 master的bin-log中。slave在复制的时候sql进程会解析成和原来master端执行过的相同的sql来再次执行。

#### Mixed Level

是前两种模式的结合。在Mixed模式下，MySQL会根据执行的每一条具体的sql语句来区分对待记录的日志形式，也就是在Statement和Row之间选择一种。

### 日志模式修改

开启 binlog，可以直接修改`my.cnf `配置文件，也可以用命令修改：

```shell
log-bin=mysql-bin
binlog_format=”STATEMENT”
```

运行时在线修改：

```sql
mysql> set global binlog_format='mixed';
Query OK, 0 rows affected (0.00 sec)

mysql> show variables like 'binlog_format';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| binlog_format | MIXED |
+---------------+-------+
1 row in set (0.00 sec)
```

### 常用 binlog 日志操作命令

**查看所有 binlog 日志列表：**

```sql
mysql> show master logs;
```

**查看 master 状态：**

即最后(最新)一个binlog日志的编号名称，及其最后一个操作事件pos结束点(Position)值

```sql
mysql> show master status;
```

**刷新 log 日志：**

自此刻开始立即产生一个新编号的binlog日志文件

```sql
mysql> flush logs;
mysql> show master logs;
```

注：每当mysqld服务重启时，会自动执行此命令，刷新binlog日志；在`mysqldump`备份数据时加` -F `选项也会刷新binlog日志；

### 查看 binlog 日志内容

#### 使用 mysqlbinlog 命令查看

binlog是二进制文件，普通文件查看器cat more vi等都无法打开，可以使用自带的 `mysqlbinlog `命令查看。

查看某个 binlog 的内容：

```bash
mysqlbinlog --no-defaults /mysql/data/mysql-bin.000020
# ------------------
(*) 文件内容说明：
    server id 1 数据库主机的服务号；
    at 663 表示开始的pos点
    end_log_pos 663 表示结束的pos点
    thread_id=10 线程号
# ------------------
```

按位置过滤查看 binlog 内容：

```bash
 mysqlbinlog --no-defaults --start-position=560 --stop-position=663 
```

按时间过滤查看 binlog 内容：

```bash
mysqlbinlog --no-defaults --start-datetime='2020-05-10 15:42:29' --stop-datetime='2020-05-10 17:42:37' /mysql/data/mysql-bin.000032
```

#### 直接在数据库中进行查看

使用 mysqlbinlog 的办法读取出 binlog 日志的全文内容较多，不容易分辨查看 pos 点信息，可以在数据库中直接使用命令更方便的查询：

```sql
mysql> show binlog events [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count];
# ------------------
(*) 选项解析：
    1. IN 'log_name'   指定要查询的binlog文件名(不指定就是第一个binlog文件)
    2. FROM pos        指定从哪个pos起始点开始查起(不指定就是从整个文件首个pos点开始算)
    3. LIMIT [offset,] 偏移量(不指定就是0)
    4. row_count       查询总条数(不指定就是所有行)
# ------------------
mysql> show master logs;
mysql> show binlog events in 'mysql-bin.000020';
-- 指定查询 mysql-bin.000021 这个文件，从pos点:8224开始查起，偏移2行，查询10条
mysql> show binlog events in 'mysql-bin.000021' from 8224 limit 2,10/G;
```

### 删除 binlog 日志

当开启mysql数据库主从后，会产生大量如mysql-bin.00000* log的文件，这会大量耗费您的硬盘空间。有三种解决方法：

1. 关闭mysql主从，关闭binlog；
2. 开启mysql主从，设置expire_logs_days；
3. 手动清除binlog文件，

#### 方法1: PURGE MASTER LOGS

删除`mysql-bin.000002`之前的日志（不包括`mysql-bin.000002`）:

```sql
mysql> PURGE BINARY LOGS TO 'mysql-bin.000002';

# 删除2018-02-07 11:53:59时间点之前的日志
mysql> PURGE BINARY LOGS BEFORE '2018-02-07 11:53:59';  
```

> 注意事项：

在删除binlog日志同时，也会清理`mysql-bin.index`的文件记录，清理完后命令中指定的日志文件成为第一个。
主从架构下，**如果复制正在进行中，执行该命令是安全的**，例如`slave`正在读取我们要删除的log，该语句将什么也不会做，并返回一个错误；如果复制是停止的，我们删除了一个`slave`还未读取的日志，则**复制重新建立连接时将会失败**。

> 建议操作步骤：
> 1) 在每个从属服务器上，使用`SHOW SLAVE STATUS`来检查它正在读取哪个日志。
> 2) 使用`SHOW MASTER LOGS`获得主服务器上的一系列日志。
> 3) 在所有的从属服务器中判定最早的日志。这个是目标日志。如果所有的从属服务器是最新的，这是清单上的最后一个日志。
> 4) 备份您将要删除的所有日志。（这个步骤是自选的，但是建议采用。）
> 5) 清理除目标日志之外的所有日志。

#### 方法2: 手动删除binlog日志文件

手动删除binlog日志文件

```bash
rm -rf mysql-bin.00009
```

更新索引文件中的记录：

```bash
vim mysql-bin.index 
# 删除mysql-bin.00009行即可
```

#### 方法3: 指定过期天数（expire_logs_days）

查看过期天数：

```sql
mysql> show variables like 'expire_logs_days'; 
```

永久修改过期天数，在`/etc/my.cnf`配置文件中增加以下内容：

```bash
expire_logs_days=10
```

临时修改过期时间：

```sql
mysql> set global expire_logs_days = 10;
```

刷新日志，触发日志清除：

```sql
mysql> flush logs;
```

:warning: 注意事项：在主从复制环境下，应确保过期天数不应小于从机追赶主机 binlog 日志的时间。

#### 方法4: RESET MASTER

该方法可以删除列于索引文件中的所有二进制日志，把二进制日志索引文件**重新设置为空**，并创建一个以`.000001`为后缀新的二进制日志文件。该语法一般只用在主从环境下**初次建立复制**时。**在主从复制进行过程中，该语句是无效的。**

```sql
mysql> reset master;
Query OK, 0 rows affected, 3 warnings (0.00 sec)

mysql> show master logs;
+------------------+-----------+
| Log_name         | File_size |
+------------------+-----------+
| mysql-bin.000001 |       328 |
+------------------+-----------+
1 row in set (0.00 sec)
```

## 参考链接

* https://blog.51cto.com/arm2012/1980771 AND https://www.cndba.cn/dave/article/2646
* mariadb 二进制日志：https://www.cndba.cn/dave/article/2645
* mariadb 一般查询日志: https://mariadb.com/kb/zh-cn/general-query-log/
* mariadb 错误日志: https://mariadb.com/kb/zh-cn/error-log/