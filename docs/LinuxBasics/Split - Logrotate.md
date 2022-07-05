# Split & Logrotate 

## Split

Linux 系统自带简单日志文件分割工具。

常用参数列表：

| 选项      | 含义                                                         |
| --------- | ------------------------------------------------------------ |
| -b        | 分割后的文档大小，单位是byte                                 |
| -C        | 分割后的文档，单行最大byte数                                 |
| -d        | 使用数字作为后缀(default: 字母)，同时使用-a length(default: 2)指定后缀长度 |
| -l        | 分割后文档的行数                                             |
| --verbose | 显示输出详细信息                                             |

示例：

```bash
split -l --verbose 1000000 split.test -d -a 3 split.log
╰─$ ls                                                    
split.test     split.test008  split.test017  split.test026
split.test000  split.test009  split.test018  split.test027
split.test001  split.test010  split.test019  split.test028
split.test002  split.test011  split.test020  split.test029
split.test003  split.test012  split.test021  split.test030
split.test004  split.test013  split.test022  split.test031
split.test005  split.test014  split.test023  split.test032
split.test006  split.test015  split.test024  split.test033
split.test007  split.test016  split.test025
...
```

## Logrotate

### 简介及解决方案

Logrotate，即`Log rotation`日志滚动，属于Linux系统自带工具，基于`crontab`实现时间点滚动日志，计划每天运行的脚本位于 `/etc/cron.daily/logrotate`。

GitHub 地址：https://github.com/logrotate/logrotate

>logrotate 是怎么做到滚动日志时不影响程序正常的日志输出呢？logrotate 提供了两种解决方案。
>
>1. create
>2. copytruncate
>
>### create
>
>这也就是默认的方案，可以通过 create 命令配置文件的权限和属组设置；这个方案的思路是重命名原日志文件，创建新的日志文件。详细步骤如下：
>
>1. 重命名正在输出日志文件，因为重命名只修改目录以及文件的名称，而进程操作文件使用的是 inode，所以并不影响原程序继续输出日志。
>2. 创建新的日志文件，文件名和原日志文件一样，注意，此时只是文件名称一样，而 inode 编号不同，原程序输出的日志还是往原日志文件输出。
>3. 最后通过某些方式通知程序，重新打开日志文件；由于重新打开日志文件会用到文件路径而非 inode 编号，所以打开的是新的日志文件。
>
>如上也就是 logrotate 的默认操作方式，也就是 mv+create 执行完之后，通知应用重新在新文件写入即可。mv+create 成本都比较低，几乎是原子操作，如果应用支持重新打开日志文件，如 syslog, nginx, mysql 等，那么这是最好的方式。
>
>不过，有些程序并不支持这种方式，压根没有提供重新打开日志的接口；而如果重启应用程序，必然会降低可用性，为此引入了如下方式。
>
>### copytruncate
>
>该方案是把正在输出的日志拷 (copy) 一份出来，再清空 (trucate) 原来的日志；详细步骤如下：
>
>1. 将当前正在输出的日志文件复制为目标文件，此时程序仍然将日志输出到原来文件中，此时，原文件名也没有变。
>2. 清空日志文件，原程序仍然还是输出到预案日志文件中，因为清空文件只把文件的内容删除了，而 inode 并没改变，后续日志的输出仍然写入该文件中。
>
>如上所述，对于 copytruncate 也就是先复制一份文件，然后清空原有文件。
>
>通常来说，清空操作比较快，但是如果日志文件太大，那么复制就会比较耗时，从而可能导致部分日志丢失。不过这种方式不需要应用程序的支持即可。

* 执行文件： `/usr/sbin/logrotate`
* 主配置文件: `/etc/logrotate.conf`
* 自定义配置文件: `/etc/logrotate.d/*.conf`
* 执行状态文件：`/var/lib/logrotate/logrotate.status`

### 运行 logrotate

logrotate 命令格式及常用参数如下所示：

```bash
logrotate [-dv] [-f|--force] [-s|--state file] config_file ..
-d, --debug ：debug 模式，测试配置文件是否有错误，并不会真正执行 rorate 和 compose 操作，但是会打印出整个执行的流程，和调用的脚本等详细信息。
-f, --force ：强制转储文件。
-m, --mail=command ：压缩日志后，发送日志到指定邮箱。
-s, --state=statefile ：使用指定的状态文件。
-v, --verbose ：显示详细转储过程。
```

通常使用的方法是配合`crontab`来运行：

````bash
crontab -e
*/30 * * * * /usr/sbin/logrotate /etc/logrotate.d/rsyslog > /dev/null 2>&1 &
````

手动调用 logrotate：

```bash
# 调用 /etc/lograte.d/ 下配置的所有日志
logrotate /etc/logrotate.conf
# 要为某个特定的配置调用 logrotate
logrotate -d /etc/logrotate.d/log_file 		# 开启debug模式，不实际生成日志文件。
```

### 配置文件详解

这里以系统自带的部分`/etc/logrotate.d/rsyslog`配置文件为例：

```bash
/var/log/syslog
{
	rotate 7
	daily
	missingok
	notifempty
	delaycompress
	compress
	postrotate
		/usr/lib/rsyslog/rsyslog-rotate
	endscript
}
```

- `monthly`: 日志文件将按月轮循。其它可用值为 `daily`，`weekly` 或者 `yearly`。
- `rotate 5`: 一次将存储 5 个归档日志。对于第六个归档，时间最久的归档将被删除。
- `compress`: 在轮循任务完成后，已轮循的归档将使用 `gzip` 进行压缩。
- `delaycompress`: 总是与 compress 选项一起用，delaycompress 选项指示 logrotate *不要将最近的归档压缩*，压缩 将在下一次轮循周期进行。这在你或任何软件仍然需要读取最新归档时很有用。
- `missingok`: 在日志轮循期间，任何错误将被忽略，例如 “文件无法找到” 之类的错误。
- `notifempty`: 如果日志文件为空，轮循不会进行。
- `create 644 root root`: 以指定的权限创建全新的日志文件，同时 logrotate 也会重命名原始日志文件。
- `postrotate/endscript`: 在所有其它指令完成后，postrotate 和 endscript 里面指定的命令将被执行。在这种情况下，rsyslogd 进程将立即再次读取其配置并继续运行。

其他常用参数：

- `tabooext [+] list`:让 logrotate 不转储指定扩展名的文件，缺省的扩展名是.rpm-orig, .rpmsave, v, 和～
- `missingok`:在日志轮循期间，任何错误将被忽略，例如 “文件无法找到” 之类的错误。
- `size size`:当日志文件到达指定的大小时才转储，bytes (缺省) 及 KB (sizek) 或 MB (sizem)
- `copytruncate`:用于还在打开中的日志文件，把当前日志备份并截断
- `nocopytruncate`: 备份日志文件但是不截断
- `create mode owner group `: 转储文件，使用指定的文件模式创建新的日志文件
- `nocreate`: 不建立新的日志文件
- `nodelaycompress`: 覆盖 delaycompress 选项，转储同时压缩。
- `errors address `: 专储时的错误信息发送到指定的 Email 地址
- `ifempty `:即使是空文件也转储，这个是 logrotate 的缺省选项。
- `mail address `: 把转储的日志文件发送到指定的 E-mail 地址
- `nomail `: 转储时不发送日志文件
- `olddir directory`:储后的日志文件放入指定的目录，必须和当前日志文件在同一个文件系统
- `noolddir`: 转储后的日志文件和当前日志文件放在同一个目录下

### logrotate 日志切割轮询

由于 logrotate 是基于` cron `运行的，所以这个日志轮转的时间是由 cron 控制的，具体可以查询 cron 的配置文件 `/etc/anacrontab`，过往的老版本的文件为（`/etc/crontab`）

使用 crontab 来作为日志轮转的触发容器来修改 logrotate 默认执行时间：

```bash
$ vim /etc/crontab
# 切割时间为每天晚上的12点钟
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
HOME=/

# run-parts
01 * * * * root run-parts /etc/cron.hourly
59 23 * * * root run-parts /etc/cron.daily
22 4 * * 0 root run-parts /etc/cron.weekly
42 4 1 * * root run-parts /etc/cron.monthly
```



### 附：logrotate 配置文件示例

* syslog

```
[root@gop-sg-192-168-56-103 logrotate.d]\# cat syslog
/var/log/cron
/var/log/maillog
/var/log/messages
/var/log/secure
/var/log/spooler
{
    missingok
    sharedscripts
    postrotate
	/bin/kill -HUP `cat /var/run/syslogd.pid 2> /dev/null` 2> /dev/null || true
    endscript
}
```

* zabbix-agent

```
[root@gop-sg-192-168-56-103 logrotate.d]\# cat zabbix-agent
/var/log/zabbix/zabbix_agentd.log {
	weekly
	rotate 12
	compress
	delaycompress
	missingok
	notifempty
	create 0664 zabbix zabbix
}
```

* nginx

```
[root@gop-sg-192-168-56-103 logrotate.d]\# cat nginx
/var/log/nginx/*.log /var/log/nginx/*/*.log{
	daily
	missingok
	rotate 14
	compress
	delaycompress
	notifempty
	create 640 root adm
	sharedscripts
	postrotate
		[ ! -f /var/run/nginx.pid ] || kill -USR1 `cat /var/run/nginx.pid`
	endscript
}
```

* influxdb

```
[root@gop-sg-192-168-56-103 logrotate.d]\# cat influxdb
/var/log/influxdb/access.log {
    daily
    rotate 7
    missingok
    dateext
    copytruncate
    compress
}
```