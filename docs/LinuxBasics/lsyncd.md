# lsyncd 

## lsyncd 简介

Lsyncd功能跟Inotify和Sersync相同，属于实时同步工具，但是Lsyncd功能更加强大，Lysncd 实际上是lua语言封装了 inotify 和 rsync 工具，采用了 Linux 内核 *（2.6.13 及以后）里的 inotify 触发机制，然后通过rsync去差异同步，达到实时的效果。Lsyncd最强大之处在于简单高效传输海量数据并且Lsyncd支持多种工作模式。

github 项目地址：https://github.com/axkibe/lsyncd

## lsyncd 安装与程序环境

```bash
yum -y install lsyncd		# 该包属于epel仓库，如果没有需要提前配置好epel仓库
```

程序环境：

```bash
[root@localhost ~]\# rpm -ql lsyncd
/etc/logrotate.d/lsyncd
/etc/lsyncd.conf		# 配置文件
/etc/sysconfig/lsyncd
/usr/bin/lsyncd			# 主程序
/usr/lib/systemd/system/lsyncd.service		# Unit FIle
...
```

## lsyncd 简单示例

| 角色             | IP            |
| ---------------- | ------------- |
| 主 lsyncd Server | 192.168.8.176 |
| 备 rsync Client  | 192.168.8.113 |

为了方便起见，在这里我关闭了`Selinux`和防火墙.

### 在 Server 端

编辑`/etc/lsyncd.conf`配置文件：

```bash
settings {
  logfile = "/var/log/lsyncd/lsyncd.log",
  statusFile = "/var/log/lsyncd/lsyncd.status",
  inotifyMode = "CloseWrite",
  maxProcesses = 8,
} 
sync {
  default.rsync,
  source = "/backup",
  target = "agou_ops@192.168.8.113::backup",
  delete = true,
  exclude = { ".*" },
  delay = 1,
  rsync = {
    binary = "/usr/bin/rsync",
    archive = true,
    compress = true,
    verbose = true,
    password_file = "/etc/rsync_passwd",
    _extra = {"--bwlimit=200"}
  } 
}
```

提供密码文件`/etc/rsync.passwd`：

```bash
suofeiya
```

修改文件权限，`chmod 600 /etc/rsync.passwd`

启动`lsyncd`服务，`systemctl start lsyncd`

### 在 Client 端

安装`rsync`：

```bash
yum -y install rsync		# 默认有的发行版自带
```

编辑其配置文件`/etc/rsyncd.conf`：

```bash
uid = root
gid = root
use chroot = yes
max connections=0
log file=/var/log/rsyncd/rsyncd.log
pid file=/var/run/rsyncd.pid
lock file=/var/run/rsyncd.lock

[backup]		# 该名称要与Server端相一致
path = /tmp/
read only = no
list = yes
auth users = agou_ops
secrets file = /etc/rsync_passwd
```

创建账户和密码文件并编辑：

```bash
root@PC-20200424YTTE:~\# vi /etc/rsync_passwd
agou_ops:suofeiya
```

修改文件权限，`chmod 600 /etc/rsync.passwd`

启动`rsync`守护进程，`systemctl start rsync`

## lsyncd 配置文件参数

```bash
settings                # 全局设置
{
logfile                 # 定义日志文件
stausFile               # 定义状态文件
nodaemon=true           # 默认不启用守护模式
statusInterval          # 将lsyncd的状态写入上面的statusFile的间隔，默认10秒
inotifyMode             # 指定inotify监控的事件，默认是CloseWrite，还可以是Modify或CloseWrite or Modify
maxProcesses            # 同步进程的最大个数Ls。假如同时有20个文件需要同步，而maxProcesses = 8，则最大能看到有8个rysnc进程
maxDelays               # 累计到多少所监控的事件激活一次同步，即使后面的delay延迟时间还未到
}

# -------------------  可以有多个sync，各自的source，各自的target，各自的模式，互不影响。
sync                                # 里面是定义同步参数，可以继续使用maxDelays来重写settings的全局变量。一般第一个参数指定lsyncd以什么模式运行：rsync rsyncssh direct三种模式
{
default.rsync                       # 本地目录间同步，使用rsync，也可以达到使用ssh形式的远程rsync效果，或daemon方式连接远程rsyncd进程；
default.direct                      # 本地目录间同步，使用cp rm等命令完成差异文件备份；
default.rsyncssh                    # 同步到远程主机目录，rsync的ssh模式，需要使用key来认证

source                              # 同步的源目录，使用绝对路径。

target                              # 定义目的地址.对应不同的模式有几种写法：
*（1） /tmp/dest                     # 本地目录同步，可用于direct和rsync模式
*（2） 172.29.88.223:/tmp/dest       # 同步到远程服务器目录，可用于rsync和rsyncssh模式，拼接的命令类似于/usr/bin/rsync -ltsd --delete --include-from=- --exclude=* SOURCE TARGET，剩下的就是rsync的内容了，比如指定username，免密码同步
*（3） 172.29.88.223::module         # 同步到远程服务器目录，用于rsync模式

# -----------------
delete	=	true       # 在目标上删除源中没有的内容。在启动时以及在正常操作期间删除的内容
delete	=	false      # 不会删除目标上的任何文件。不在启动时也不在正常操作上
delete	=	'startup'  # Lsyncd将在启动时删除目标上的文件，但不会在正常操作时删除
delete	=	'running'  # Lsyncd在启动时不会删除目标上的文件，但会删除正常操作期间删除的文件
# -----------------
init                                # 这是一个优化选项，当init = false，只同步进程启动以后发生改动事件的文件，原有的目录即使有差异也不会同步。默认是true

delay                               # 累计事件，等待rsync同步延时时间，默认15秒 *（最大累计到1000个不可合并的事件）。也就是15s内监控目录下发生的改动，会累积到一次rsync同步，避免过于频繁的同步。 *（可合并的意思是，15s内两次修改了同一文件，最后只同步最新的文件）

excludeFrom                         # 排除选项，后面指定排除的列表文件，如excludeFrom = "/etc/lsyncd.exclude"如果是简单的排除，可以使用exclude = LIST。这里的排除规则写法与原生rsync有点不同，更为简单：监控路径里的任何部分匹配到一个文本，都会被排除，例如/bin/foo/bar可以匹配规则foo
 *（1） 如果规则以斜线/开头，则从头开始要匹配全部
 *（2） 如果规则以/结尾，则要匹配监控路径的末尾
 *（3） ?匹配任何字符，但不包括/
 *（4） *匹配0或多个字符，但不包括/
 *（5） **匹配0或多个字符，可以是/
}

rsync
{
    binary = "/usr/bin/rsync",
    archive = true,
    compress = true,
    verbose = true,
    password_file = "/etc/rsync_passwd",
    _extra = {"--bwlimit=200"}
 *（1） bwlimit 限速，单位kb/s，与rsync相同 *（这么重要的选项在文档里竟然没有标出）
 *（2） compress 压缩传输默认为true。在带宽与cpu负载之间权衡，本地目录同步可以考虑把它设为false
 *（3） perms 默认保留文件权限。
}
```

## 参考链接

* 官方文档：https://axkibe.github.io/lsyncd/