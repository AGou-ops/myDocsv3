# MySQL 事务

## ACID 四特性

- 原子性（Atomicity）：一个事务（transaction）中的所有操作，或者全部完成，或者全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被[回滚](https://zh.wikipedia.org/wiki/回滚_(数据管理))（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。即，事务不可分割、不可约简。[[1\]](https://zh.wikipedia.org/wiki/ACID#cite_note-acid-1)
- [一致性](https://zh.wikipedia.org/wiki/一致性_(数据库))（Consistency）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设[约束](https://zh.wikipedia.org/wiki/数据完整性)、[触发器](https://zh.wikipedia.org/wiki/触发器_(数据库))、[级联回滚](https://zh.wikipedia.org/wiki/级联回滚)等。[[1\]](https://zh.wikipedia.org/wiki/ACID#cite_note-acid-1)
- [事务隔离](https://zh.wikipedia.org/wiki/事務隔離)（Isolation）：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括未提交读（Read uncommitted）、提交读（read committed）、可重复读（repeatable read）和串行化（Serializable）。[[1\]](https://zh.wikipedia.org/wiki/ACID#cite_note-acid-1)
- 持久性（Durability）：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。[[1\]](https://zh.wikipedia.org/wiki/ACID#cite_note-acid-1)

> 来源：https://zh.wikipedia.org/wiki/ACID

## 提交和回滚

MySQL(MariaDB)默认开启自动提交模式，可在命令行中进行查看：

```sql
MariaDB root@win:(none)> show variables like 'autocommit';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | ON    |
+---------------+-------+
```

在该模式下，如果我们想要开启一个事务，就必须显式开启一个事务：

```sql
MariaDB root@win:(none)> start transaction;
```

在MySQL中，存在一些特殊的命令，如果在事务中执行了这些命令，会马上强制执行commit提交事务；如DDL语句(`create table/drop table/alter/table)、lock tables`语句等等。

不过，常用的`select`、`insert`、`update`和`delete`命令，都不会强制提交事务。

:warning:`truncate`语句不支持事务回滚。

### 关闭autocommit

```sql
-- 设置不自动提交事务
MariaDB root@win:(none)> set autocommit=0;
-- 一系列sql操作。。。

-- 执行事务操作，提交或者回滚
MariaDB root@win:(none)> commit | rollback;
```

### savepoint 

```sql
-- 开启事务。。。
-- 执行一些sql语句
MariaDB root@win:(none)> savepoint <POINT_NAME>;
-- 执行另外的一些sql语句。。。
-- 回滚至保存点
MariaDB root@win:(none)> rollback to <POINT_NAME>;
MariaDB root@win:(none)> commit;
```

## 只读事务

只读事务即指执行的是一些只读操作，如select语句。

```sql
-- 开启只读事务
MariaDB root@win:(none)> start transaction read only;
-- 企图清空表内容，失败。
MariaDB root@win:test> delete from test;
You're about to run a destructive command.
Do you want to proceed? (y/n): y
Your call!
(1792, 'Cannot execute statement in a READ ONLY transaction')
```

## 锁机制

查看`InnoDB`锁的情况：

```sql
MariaDB root@win:test> show engine innodb status\G
MariaDB root@win:test> select * from information_schema.innodb_locks;
+-------------+-------------+-----------+-----------+---------------+------------+------------+-----------+----------+-----------+
| lock_id     | lock_trx_id | lock_mode | lock_type | lock_table    | lock_index | lock_space | lock_page | lock_rec | lock_data |
+-------------+-------------+-----------+-----------+---------------+------------+------------+-----------+----------+-----------+
| 2348:32:3:3 | 2348        | X         | RECORD    | `test`.`test` | PRIMARY    | 32         | 3         | 3        | 3         |
| 2346:32:3:3 | 2346        | X         | RECORD    | `test`.`test` | PRIMARY    | 32         | 3         | 3        | 3         |
+-------------+-------------+-----------+-----------+---------------+------------+------------+-----------+----------+-----------+
-- `RECORD`表示为行锁，`X`表示写锁（排他锁）
```

## 扩展

### 原子性

>实现原子性的关键，是当事务回滚时能够撤销所有已经成功执行的sql语句。**InnoDB****实现回滚，靠的是undo log****：当事务对数据库进行修改时，InnoDB****会生成对应的undo log****；如果事务执行失败或调用了rollback****，导致事务需要回滚，便可以利用undo log****中的信息将数据回滚到修改之前的样子。**
>
>undo log属于逻辑日志，它记录的是sql执行相关的信息。当发生回滚时，InnoDB会根据undo log的内容做与之前相反的工作：对于每个insert，回滚时会执行delete；对于每个delete，回滚时会执行insert；对于每个update，回滚时会执行一个相反的update，把数据改回去。
>
>以update操作为例：当事务执行update时，其生成的undo log中会包含被修改行的主键(以便知道修改了哪些行)、修改了哪些列、这些列在修改前后的值等信息，回滚时便可以使用这些信息将数据还原到update之前的状态。

### 持久性

>InnoDB作为MySQL的存储引擎，数据是存放在磁盘中的，但如果每次读写数据都需要磁盘IO，效率会很低。为此，InnoDB提供了缓存(Buffer Pool)，Buffer Pool中包含了磁盘中部分数据页的映射，作为访问数据库的缓冲：当从数据库读取数据时，会首先从Buffer Pool中读取，如果Buffer Pool中没有，则从磁盘读取后放入Buffer Pool；当向数据库写入数据时，会首先写入Buffer Pool，Buffer Pool中修改的数据会定期刷新到磁盘中（这一过程称为刷脏）。
>
>Buffer Pool的使用大大提高了读写数据的效率，但是也带了新的问题：如果MySQL宕机，而此时Buffer Pool中修改的数据还没有刷新到磁盘，就会导致数据的丢失，事务的持久性无法保证。
>
>于是，redo log被引入来解决这个问题：当数据修改时，除了修改Buffer Pool中的数据，还会在redo log记录这次操作；当事务提交时，会调用fsync接口对redo log进行刷盘。如果MySQL宕机，重启时可以读取redo log中的数据，对数据库进行恢复。redo log采用的是WAL（Write-ahead logging，预写式日志），所有修改先写入日志，再更新到Buffer Pool，保证了数据不会因MySQL宕机而丢失，从而满足了持久性要求。
>
>既然redo log也需要在事务提交时将日志写入磁盘，为什么它比直接将Buffer Pool中修改的数据写入磁盘(即刷脏)要快呢？主要有以下两方面的原因：
>
>（1）刷脏是随机IO，因为每次修改的数据位置随机，但写redo log是追加操作，属于顺序IO。
>
>（2）刷脏是以数据页（Page）为单位的，MySQL默认页大小是16KB，一个Page上一个小修改都要整页写入；而redo log中只包含真正需要写入的部分，无效IO大大减少。
>
>:information_source: **redo log与binlog**
>
>我们知道，在MySQL中还存在binlog(二进制日志)也可以记录写操作并用于数据的恢复，但二者是有着根本的不同的：
>
>（1）作用不同：redo log是用于crash recovery的，保证MySQL宕机也不会影响持久性；binlog是用于point-in-time recovery的，保证服务器可以基于时间点恢复数据，此外binlog还用于主从复制。
>
>（2）层次不同：redo log是InnoDB存储引擎实现的，而binlog是MySQL的服务器层(可以参考文章前面对MySQL逻辑架构的介绍)实现的，同时支持InnoDB和其他存储引擎。
>
>（3）内容不同：redo log是物理日志，内容基于磁盘的Page；binlog的内容是二进制的，根据binlog_format参数的不同，可能基于sql语句、基于数据本身或者二者的混合。
>
>（4）写入时机不同：binlog在事务提交时写入；redo log的写入时机相对多元：
>
>- 前面曾提到：当事务提交时会调用fsync对redo log进行刷盘；这是默认情况下的策略，修改innodb_flush_log_at_trx_commit参数可以改变该策略，但事务的持久性将无法保证。
>- 除了事务提交时，还有其他刷盘时机：如master thread每秒刷盘一次redo log等，这样的好处是不一定要等到commit时刷盘，commit速度大大加快。

### 隔离性

>**与原子性、持久性侧重于研究事务本身不同，隔离性研究的是不同事务之间的相互影响。**隔离性是指，事务内部的操作与其他事务是隔离的，并发执行的各个事务之间不能互相干扰。严格的隔离性，对应了事务隔离级别中的Serializable (可串行化)，但实际应用中出于性能方面的考虑很少会使用可串行化。
>
>隔离性追求的是并发情形下事务之间互不干扰。简单起见，我们主要考虑最简单的读操作和写操作(加锁读等特殊读操作会特殊说明)，那么隔离性的探讨，主要可以分为两个方面：
>
>- (一个事务)写操作对(另一个事务)写操作的影响：锁机制保证隔离性
>- (一个事务)写操作对(另一个事务)读操作的影响：MVCC保证隔离性
>
>**锁机制的基本原理可以概括为：事务在修改数据之前，需要先获得相应的锁；获得锁之后，事务便可以修改数据；该事务操作期间，这部分数据是锁定的，其他事务如果需要修改数据，需要等待当前事务提交或回滚后释放锁。**

## 参考链接

- 深入学习MySQL事务：https://www.cnblogs.com/kismetv/p/10331633.html