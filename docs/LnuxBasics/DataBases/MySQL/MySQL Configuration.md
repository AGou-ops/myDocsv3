# MySQL 配置文件my.cnf



```ini
[client]
# 指定mysql开放端口
port = 3306
# 套接字文件
socket = /usr/local/mysql/data/mysql.sock

[mysqld]
# Skip #
skip_name_resolve = 1
skip_external_locking = 1
skip_symbolic_links = 1
# GENERAL #
# 启动用户
user = mysql
default_storage_engine = InnoDB
# 编码方式
character-set-server = utf8
# pid文件所在目录
pid_file = /usr/local/mysql/data/mysqld.pid
# 指定Mysql安装的绝对路径
basedir = /usr/local/mysql
port = 3306
bind-address = 0.0.0.0
explicit_defaults_for_timestamp = off
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

# DATA STORAGE #
# MyISAM #
# 指定索引缓冲区的大小
key_buffer_size = 32M

# undo log #
innodb_undo_directory = /usr/local/mysql/undo
innodb_undo_tablespaces = 8

# SAFETY #
# 限制server接受的数据包大小
max_allowed_packet = 100M
# 最大连接错误，超出该值以后，服务器将阻止该客户端后续的所有访问
max_connect_errors = 1000000
sysdate_is_now = 1
secure-file-priv = '/tmp'
default_authentication_plugin='mysql_native_password'

# Replice #
server-id = 1001
relay_log = mysqld-relay-bin
gtid_mode = on
enforce-gtid-consistency
log-slave-updates = on
master_info_repository = TABLE
relay_log_info_repository = TABLE

# DATA STORAGE #
# 数据文件存放的目录
datadir = /usr/local/mysql/data/
# 存放临时文件的目录
tmpdir = /tmp

# BINARY LOGGING #
log_bin = /usr/local/mysql/sql_log/mysql-bin
# 如果二进制日志写入的内容超出给定值，日志就会发生滚动
max_binlog_size = 1000M
# 基于行的复制
binlog_format = row
binlog_expire_logs_seconds=86400

# CACHES AND LIMITS #
# 临时内部堆积表的大小
tmp_table_size = 32M
# 最大内存表大小
max_heap_table_size = 32M
# mysql的最大连接数
max_connections = 4000
# 用于缓存空闲的线程
thread_cache_size = 2048
# 控制文件打开的个数
open_files_limit = 65535
table_definition_cache = 4096
# 表描述符缓存大小，可减少文件打开/关闭次数
table_open_cache = 4096
# 排序语句 'group by' 与 'order by' 占用的大小
sort_buffer_size = 2M
# 读缓冲区的大小
read_buffer_size = 2M
# 设置服务器随机读取缓冲区的大小
read_rnd_buffer_size = 2M
# 使用join语句的缓存区
join_buffer_size = 1M
# 用来存放每一个线程自身的标识信息
thread_stack = 512k
max_length_for_sort_data = 16k

# INNODB #
# 使用O_DIRECT模式打开数据文件，用fsync()函数去更新日志和数据文件。
innodb_flush_method = O_DIRECT
# 日志缓存,大的日志缓冲可以减少磁盘I/O
innodb_log_buffer_size = 16M
# 每次commit 日志缓存中的数据刷到磁盘中
innodb_flush_log_at_trx_commit = 2
#作用：使每个Innodb的表，有自已独立的表空间。如删除文件后可以回收那部分空间。
#分配原则：只有使用不使用。但ＤＢ还需要有一个公共的表空间。
innodb_file_per_table = 1
# 用来高速缓冲数据和索引内存缓冲大小
innodb_buffer_pool_size = 256M
innodb_stats_on_metadata = off
# 限制Innodb能打开的表的数量
innodb_open_files = 8192
# 读io线程
innodb_read_io_threads = 16
# 写io线程
innodb_write_io_threads = 16
# 这个参数据控制Innodb checkpoint时的IO能力
innodb_io_capacity = 20000
innodb_thread_concurrency = 0
# 在回滚(rooled back)之前，InnoDB 事务将等待超时的时间(单位 秒)
innodb_lock_wait_timeout = 60
innodb_old_blocks_time = 1000
innodb_use_native_aio = 1
# 开始碎片回收线程
innodb_purge_threads = 1
# 当随后页面被读到内存中时，会将这些变化的记录merge到页中。
innodb_change_buffering = all
# 可以减少刷新缓冲池的次数，从而减少磁盘 I/O。
innodb_log_file_size = 64M
# 指定有2个日志组
innodb_log_files_in_group = 2
# 单独指定数据文件的路径与大小
innodb_data_file_path = ibdata1:256M:autoextend
innodb_rollback_on_timeout = on

# LOGGING #
# 错误日志的存放路劲
log_error = /usr/local/mysql/sql_log/mysql-error.log
slow_query_log_file = /usr/local/mysql/sql_log/slowlog.log
```

