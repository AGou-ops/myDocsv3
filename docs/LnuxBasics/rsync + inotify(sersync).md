# rsync + inotify(sersync)

## rsync 和 inotify 简介

`rsync`是linux系统下的数据镜像备份工具。使用快速增量备份工具Remote Sync可以远程同步，支持本地复制，或者与其他SSH、rsync主机同步。

`Inotify `是一个 Linux特性，它监控文件系统操作，比如读取、写入和创建。Inotify 反应灵敏，用法非常简单，并且比 cron 任务的繁忙轮询高效得多。Inotify是一种强大的、细粒度的、异步的文件系统事件监控机制，linux内核从`2.6.13`起，加入了Inotify支持，通过Inotify可以监控文件系统中添加、删除，修改、移动等各种细微事件，利用这个内核接口，第三方软件就可以监控文件系统下文件的各种变化情况，而`inotify-tools`就是这样的一个第三方软件。

## rsync+  inotify

### 环境

| 角色       | IP         |
| ---------- | ---------- |
| 源服务器   | 1726.1.128 |
| 目标服务器 | 1726.1.129 |

### 简单示例

部署`rsync+inotify`同步源服务器的`/var/www/html`目录至目标服务器的`/backup/www/`目录之下.

#### 在目标服务器上

为方便起见，关闭SELinux和防火墙：

```bash
systemctl stop firewalld
setenforce 0

# 安装所需软件包
yum install rsync -y			# 默认有的发行版已经安装
```

编辑`/etc/rsyncd.conf`文件：

```bash
uid=root
gid=root
max connections=36000
use chroot=no
log file=/var/log/rsyncd.log
pid file=/var/run/rsyncd.pid
lock file=/var/run/rsyncd.lock

[backup_www]
	path = /backup/www/ 
	comment = sync etc from client 
	ignore errors   
	use chroot = no  
	read only = no 
	list = no
	timeout = 600
	auth users = agou_ops 
	hosts allow = 1726.1.128/24
	hosts deny = *
```

配置用户认证文件`/etc/rsync.password`：

```bash
[root@node01 ~]\# cat /etc/rsync.password
agou-ops:suofeiya
```

设置文件权限：

```bash
chmod 600 /etc/rsync.password
```

启动 rsync 服务并设置为开机自启：

```bash
systemctl start rsyncd
# 或者
rsync --daemon
systemctl enable rsyncd
```

#### 在源服务器上

同样为了方便起见，关闭 SElinux 和 防火墙，在此不再赘述.

安装 rsync：

```bash
yum install -y rsync
```

创建认证密码文件，只设置密码即可：

```bash
[root@master ~]\# cat /etc/rsync.password 
suofeiya
```

设置文件权限：`chmod 600 /etc/rsync.password`

测试：

```bash
[root@master ~]\# rsync -avH --port 873 --delete /var/www/html agou_ops@1726.1.129::backup_www --password-file=/etc/rsync.password
sending incremental file list
html/
html/index.html
html/test1/
html/test10/
html/test2/
html/test3/
html/test4/
html/test5/
html/test6/
html/test7/
html/test8/
html/test9/

sent 345 bytes  received 87 bytes  864.00 bytes/sec
total size is 0  speedup is 0.00

# 此时已经同步到了目标服务器上，可以自行登录进行查看
```

查看服务器内核是否支持inotify：

```bash
# 如果有以下三个文件，则表示服务器支持inotify
[root@master ~]\# ll /proc/sys/fs/inotify/
total 0
-rw-r--r--. 1 root root 0 Apr 25 23:49 max_queued_events
-rw-r--r--. 1 root root 0 Apr 25 23:49 max_user_instances
-rw-r--r--. 1 root root 0 Apr 25 23:49 max_user_watches
```

安装`inotify-tools`：

```bash
yum install -y inotify-tools		# 该软件包在epel仓库，如果没有，先配置好epel仓库
```

**编写`inotify.sh`脚本：**

```bash
#!/bin/bash

watch_dir=/var/www/html
push_to=1726.1.129:/backup/www
inotifywait -mrq -e delete,close_write,moved_to,moved_from,isdir --timefmt '%Y-%m-%d %H:%M:%S' --format '%w%f:%e:%T' $watch_dir \
--exclude=".*.swp" |\
while read line;do
  # logging some files which has been deleted and moved out
    if echo $line | grep -i -E "delete|moved_from" &>/dev/null;then
        echo "$line" >> /etc/inotify_away.log
    fi
  # from here, start rsync's function
    rsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to
    if [ $? -eq 0 ];then
        echo "sent $watch_dir success"
    else
        echo "sent $watch_dir failed"
    fi
done
```

为其添加执行权限`chmod +x inotify.sh`

>脚本来源于网络，有不完善之处，会重复触发rsync，同步大文件时极其消耗资源，故仅作为示例

设置脚本开机自启动：

```bash
chmod +x /etc/rc.d/rc.local
# 在该文件中添加以下行
nohup /bin/bash /root/notify.sh &
```

## 示例脚本

```bash
#!/bin/bash
 
watch_dir=/var/www/html
push_to=1726.10.5:/backup/www
 
# First to do is initial sync
rsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to
 
inotifywait -mrq -e delete,close_write,moved_to,moved_from,isdir --timefmt '%Y-%m-%d %H:%M:%S' --format '%w%f:%e:%T' $watch_dir \
--exclude=".*.swp" >>/etc/inotifywait.log &
 
while true;do
     if [ -s "/etc/inotifywait.log" ];then
        grep -i -E "delete|moved_from" /etc/inotifywait.log >> /etc/inotify_away.log
        rsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to:/tmp
        if [ $? -ne 0 ];then
           echo "$watch_dir sync to $push_to failed at `date +"%F %T"`,please check it by manual" |\
           mail -s "inotify+Rsync error has occurred" root@localhost	# 邮件
        fi
        cat /dev/null > /etc/inotifywait.log
        rsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to
    else
        sleep 1
    fi
done
```

> 脚本来源于网络，仅稍作修改

## rsync + sersync

`sersync`类似于`inotify`，同样用于监控，但前者还有过滤重复事件减轻负担、自带crontab功能、多线程调用rsync、失败重传等功能.

配置`rsync`参考上面的配置即可：[rsync](#在目标服务器上)

### 安装 sersync 

sersync工具包无需任何安装，由于大部分库都是静态编译的，所以在被监控服务器上，修改好配置文件后，直接执行`./sersync2` 即可

```bash
wget https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/sersync/sersync2.5.4_64bit_binary_stable_final.tar.gz
tar xf sersync2.5.4_64bit_binary_stable_final.tar.gz
cp -a GNU-Linux-x86 /usr/local/sersync
echo "PATH=$PATH:/usr/local/sersync" > /etc/profile.d/sersync.sh
source /etc/profile.d/sersync.sh
```

sersync目录`/usr/local/sersync`只有两个文件：一个是二进制程序文件，一个是xml格式的配置文件。

编辑`confxml.xml`配置文件（简单示例文件）：

```bash
 <sersync>
  <localpath watch="/opt/tongbu">
   <remote ip="19268.8.42" name="tongbu"/>
   <remote ip="19268.8.39" name="tongbu"/>
  </localpath>
  <crontab start="true" schedule="30"/>
  <plugin name="refreshCDN" start="true"/>
 </sersync>
```

### sersync 使用

> `./sersync2 -h` 查看帮助文件(see the help)
>
> `./sersync2 -r `在同步程序开启前对整个路径与远程服务器整体同步一遍(before the synchronization program working, rsync the whole monitor directory to remote server once)
>
> `./sersync2 -d `开启守护进程模式，在后台运行(Open the daemon mode, running in the background)
>
> `./sersync2 -o `指定配置文件名，如果配置文件名称不是confxml.xml请使用'-o xxxxx.xml'(Specify the configuration file name, if the configuration file name is not confxml.xml use the '-o xxxxx.xml')
>
> `./sersync2 -n `指定同步守护线程数量，默认为10个，适用于现在的4核服务器。如果需增加或减少使用 '-n 数量'.(Specify the number of simultaneous daemon thread, the default is 10, applicable to the present four-core server. If you need to increase or reduce,please use './sersync2 -n + num' to run)
>
> 通常使用的方法是 : `./sersync2 -d -r`
>
> 
>
> 对于sersync多实例，也即监控多个目录时，只需分别配置不同配置文件，然后使用sersync2指定对应配置文件运行即可：
>
> ```
> sersync2 -r -d -o /etc/sersync.d/nginx.xml
> ```

### 示例xml文件

```bash
<?xml version="1.0" encoding="ISO-8859-1"?>
<head version="2.5">
    <host hostip="localhost" port="8008"></host>
    <debug start="false"/>           # 是否开启调试模式，下面所有出现false和true的地方都分别表示关闭和开启的开关
    <fileSystem xfs="false"/>        # 监控的是否是xfs文件系统
    <filter start="false">           # 是否启用监控的筛选功能，筛选的文件将不被监控
        <exclude expression="(.*)\.svn"></exclude>
        <exclude expression="(.*)\.gz"></exclude>
        <exclude expression="^info/*"></exclude>
        <exclude expression="^static/*"></exclude>
    </filter>
    <inotify>                         # 监控的事件，默认监控的是delete/close_write/moved_from/moved_to/create folder
        <delete start="true"/>
        <createFolder start="true"/>
        <createFile start="false"/>
        <closeWrite start="true"/>
        <moveFrom start="true"/>
        <moveTo start="true"/>
        <attrib start="false"/>
        <modify start="false"/>
    </inotify>
 
    <sersync>                       # rsync命令的配置段
        <localpath watch="/www">    # 同步的目录或文件，同inotify+rsync一样，建议同步目录
            <remote ip="1726.10.5" name="/tmp/www"/>  # 目标地址和rsync daemon的模块名，所以远端要以daemon模式先运行好rsync
            <!--remote ip="IPADDR" name="module"-->     # 除非下面开启了ssh start，此时name为远程shell方式运行时的目标目录
        </localpath>
        <rsync>                      # 指定rsync选项
            <commonParams params="-az"/>
            <auth start="false" users="root" passwordfile="/etc/rsync.pas"/>
            <userDefinedPort start="false" port="874"/><!-- port=874 -->
            <timeout start="false" time="100"/><!-- timeout=100 -->
            <ssh start="false"/>      # 是否使用远程shell模式而非rsync daemon运行rsync命令
        </rsync>
        <failLog path="/tmp/rsync_fail_log.sh" timeToExecute="60"/><!--default every 60mins execute once-->  # 错误重传
        <crontab start="false" schedule="600"><!--600mins-->    # 是否开启crontab功能
            <crontabfilter start="false">       # crontab定时传输的筛选功能
                <exclude expression="*.php"></exclude>
                <exclude expression="info/*"></exclude>
            </crontabfilter>
        </crontab>
        <plugin start="false" name="command"/>
    </sersync>
 
    <plugin name="command">
        <param prefix="/bin/sh" suffix="" ignoreError="true"/>  <!--prefix /opt/tongbu/mmm.sh suffix-->
        <filter start="false">
            <include expression="(.*)\.php"/>
            <include expression="(.*)\.sh"/>
        </filter>
    </plugin>
 
    <plugin name="socket">
        <localpath watch="/opt/tongbu">
            <deshost ip="19268.138.20" port="8009"/>
        </localpath>
    </plugin>
    <plugin name="refreshCDN">
        <localpath watch="/data0/htdocs/cms.xoyo.com/site/">
            <cdninfo domainname="ccms.chinacache.com" port="80" username="xxxx" passwd="xxxx"/>
            <sendurl base="http://pic.xoyo.com/cms"/>
            <regexurl regex="false" match="cms.xoyo.com/site([/a-zA-Z0-9]*).xoyo.com/images"/>
        </localpath>
    </plugin>
</head>
```

## 小结

(1)当同步的目录数据量不大时，建议使用` rsync+inotify`
(2)当同步的目录数据量很大时（几百G甚至1T以上）文件很多时，建议使用 `rsync+sersync`
(3)生产环境直接用` rsync+sersync`，而不使用 rsync+inotify

## 参考链接

* sersync介绍及安装 : http://sersync.sourceforge.net/