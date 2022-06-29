# Inotify 文件监控

## Inotify 简介

> 开源地址： https://github.com/inotify-tools/inotify-tools

`Inotify` 一种强大的、细粒度的、异步文件系统监控机制，它满足各种各样的文件监控需要，可以监控文件系统的访问属性、读写属性、权限属性、删除创建、移动等操作，也就是可以监控文件发生的一切变化。

`inotify-tools` 是一个C库和一组命令行的工作，提供Linux下inotify的简单接口。`inotify-tools`安装后会得到`inotifywait`和`inotifywatch`这两条命令：

- `inotifywait`命令 可以用来收集有关文件访问信息，Linux发行版一般没有包括这个命令，需要安装`inotify-tools`，**这个命令还需要将inotify支持编译入Linux内核，好在大多数Linux发行版都在内核中启用了inotify**。
- `inotifywatch`命令 用于收集关于被监视的文件系统的统计数据，包括每个 inotify 事件发生多少次。

## 检查和安装

### 检查系统内核是否支持`Inotify`

- 方式一：使用 `uname -r` 命令检查Linux内核，如果低于`2.6.13`，就需要重新编译内核加入`inotify`的支持。
- 方式二：使用`ll /proc/sys/fs/inotify`命令，是否有以下三条信息输出，如果没有表示不支持。

```bash
$ ll /proc/sys/fs/inotify

total 0
-rw-r--r-- 1 root root 0 Jan 4 15：41 max_queued_events
-rw-r--r-- 1 root root 0 Jan 4 15：41 max_user_instances
-rw-r--r-- 1 root root 0 Jan 4 15：41 max_user_watches
```

### 安装部分

- 从源码安装(预先配置好编译环境, 在此就不再赘述)：

```bash
# 下载源码包
wget https://github.com/inotify-tools/inotify-tools/archive/3.20.2.2.tar.gz -o inotify-tools.tar.gz
tar xf inotify-tools.tar.gz && cd $_
# 编译安装
./configure --prefix=/usr && make && su -c 'make install'
```

- 从现成仓库中直接安装：

```bash
apt-get install inotify-tools
# yum install inotify-tools
```

##  使用样例及常用参数

### 样例

inotifywait

```bash
# 对某个文件进行只需监听, 使用`-m`选项
$ inotifywait -m log.txt
# 监控某个目录
inotifywait -mrq /var/log/nginx/
# 监控某个目录, 自定义格式、监控事件以及使用正则排除vim等编辑工具所触发的.swp临时文件的监听事件
inotifywait /var/log/nginx/ -r --timefmt '%d/%m/%y %H:%M' --format "%T %f" -e MODIFY --exclude '^.*.swp$'
```

inotifywatch

```bash
# In this example, I’m recursively watching ~/.beagle for 60 seconds, while beagled is running.
$ inotifywatch -v -e access -e modify -t 60 -r ~/.beagle
```

## 常用参数

```bash
--timefmt 时间格式
    %y年 %m月 %d日 %H小时 %M分钟
--format 输出格式
    %T时间 %w路径 %f文件名 %e状态
 
-m 始终保持监听状态，默认触发事件即退出
-r 递归查询目录
-q 减少不必要的输出(只打印事件信息)
 
-e 定义只监控的事件，常用参数如下：
    open   打开文件
    access 访问文件
    modify 修改文件
    delete 删除文件
    create 新建文件
    attrib 属性变更
 
--exclude <pattern> 指定要排除监控的文件/目录
```

## 附录1：inotifywait 示例脚本

#### inotifywait example 1 (thanks to Nick Lothian)

```shell
#!/bin/sh

# get the current path
CURPATH=`pwd`

inotifywait -mr --timefmt '%d/%m/%y %H:%M' --format '%T %w %f' \
-e close_write /tmp/test | while read date time dir file; do

       FILECHANGE=${dir}${file}
       # convert absolute path to relative
       FILECHANGEREL=`echo "$FILECHANGE" | sed 's_'$CURPATH'/__'`

       rsync --progress --relative -vrae 'ssh -p 22'  $FILECHANGEREL usernam@example.com:/backup/root/dir && \
       echo "At ${time} on ${date}, file $FILECHANGE was backed up via rsync"
done
```

This may be the most efficient way to block for changes on files from a shell script.

If you don’t specify which event you want to catch, all will be caught, and the event which occurred is output on stdout.

#### inotifywait example 2

```shell
#!/bin/sh

EVENT=$(inotifywait --format '%e' ~/file1)
[ $? != 0 ] && exit
[ "$EVENT" = "MODIFY" ] && echo 'file modified!'
[ "$EVENT" = "DELETE_SELF" ] && echo 'file deleted!'
# etc...
```

> 来源于[官方wiki文档](https://github.com/inotify-tools/inotify-tools/wiki)

## 附录2： inotifywait 参数详解及所有可监听事件

全部参数详解及命令格式：

```bash
命令格式：
inotifywait [-hcmrq] [-e <event> ] [-t <seconds> ] [--format <fmt> ] [--timefmt <fmt> ] <file> [...]

选项参数：
-h|--help 显示帮助信息
@<file> 排除不需要监视的文件，可以是相对路径，也可以是绝对路径
--exclude <pattern> 正则匹配需要排除的文件，大小写敏感
--excludei <pattern> 正则匹配需要排除的文件，忽略大小写。
-m|--monitor 接收到一个事情而不退出，无限期地执行。默认行为是接收到一个事情后立即退出
-d|--daemon 跟--monitor一样，除了是在后台运行，需要指定--outfile把事情输出到一个文件。也意味着使用了--syslog
-r|--recursive 监视一个目录下的所有子目录
--fromfile <file> 从文件读取需要监视的文件或排除的文件，一个文件一行，排除的文件以@开头
-o|--outfile <file>   输出事件到文件
-s|--syslog 输出错误信息到系统日志
-q|--quiet 不输出详细信息，只输出事件
-qq 除了致命错误，不会输出任何信息
--timefmt <fmt> 指定时间格式，用于format选项中的%T格式
-c|--csv 输出csv格式
-t|--timeout <seconds> 设置超时时间，如果为0，则无限期地执行下去
-e|--event <event1> [ -e|--event <event2> ... ]  指定监听的时间，如果省略，则侦听所有事件
--format <fmt> 指定输出格式  
%w 表示发生事件的目录
%f 表示发生事件的文件
%e 表示发生的事件
%Xe 事件以“X”分隔
%T 使用由--timefmt定义的时间格式
```

可监听事件：

```bash
access 文件或者目录被读
modify 文件或目录被写入
attrib 文件或者目录属性被更改
close_write 文件或目录关闭，在写模式下打开后
close_nowrite 文件或目录关闭，在只读模式打开后
close 文件或目录关闭，而不管是读/写模式
open 文件或目录被打开
moved_to 文件或者目录移动到监视目录
moved_from 文件或者目录移出监视目录
move 文件或目录移出或者移入目录
create 文件或目录被创建在监视目录
delete 文件或者目录被删除在监视目录
delete_self 文件或目录移除，之后不再监听此文件或目录
unmount 文件系统取消挂载，之后不再监听此文件系统
```

## 参考链接

- Getting inotify-tools: https://github.com/inotify-tools/inotify-tools/wiki#getting

- inotify 的安装与基本使用： https://blog.csdn.net/qq_37788558/article/details/104985262