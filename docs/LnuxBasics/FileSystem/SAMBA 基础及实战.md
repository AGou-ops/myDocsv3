>Samba是在Linux和UNIX系统上实现SMB协议的一个免费软件，主要用于实现Windows和Linux之间互相共享资源.

# SAMBA 基础及实战

`SMB（Server Message Block）通信协议`：是微软（Microsoft）和英特尔(Intel)在1987年制定的协议，主要是作为Microsoft网络的通讯协议，SMB协议在局域网上用于服务器文件访问和打印的协议。SMB 是在会话层（session layer）和表示层（presentation layer）以及小部分应用层（application layer）的协议。

`CIFS (Common Internet File System)`：通用Internet文件系统，在windows主机之间进行网络文件共享是通过使用微软公司自己的CIFS服务实现的，例如：Windows的网上邻居功能

SMB协议的实现在Windows上是`CIFS`，在Linux系统上是`SMABA`

>Samba服务采用C/S模式,，其工作机制是让`NetBIOS`（Windows 网上邻居的通信协议）和`SMB`两个协议运行于TCP/IP通信协议之上，并且用NetBIOS协议让Windows在“网上邻居”中能浏览Linux服务器。Samba服务器既可以充当文件共享服务器，也可以充当一个Samba的客户端，例如，一台在Linux 下已经架设好的Samba服务器，windows客户端就可以通过SMB协议共享Samba服务器上的资源文件，同时，Samba服务器也可以访问网络中 其它windows系统或者Linux系统共享出来的文件
>
>FROM:https://blog.51cto.com/itwish/2174270

# 所需软件及守护进程说明

Samba所需软件包括：

* Samba（服务器端软件包）
*  Samba-client（客户端软件包）
* Samba-common（Samba公共文件软件包）
* Samba-Winbind（使用 Windows 域控制器管理 Linux 帐户）

Samba由`smbd `和 `nmbd`两个守护进程组成：

* `smbd`服务进程是Samba的核心启动服务，用于提供`smb/cifs`服务，主要负责建立 Linux Samba服务器与Samba客户机之间的对话，为客户端提供文件共享与打印机服务及负责用户权限验证以及锁功能，smdb默认监听端口是 **139 与 445 TCP**端口

* `nmbd`进程提供`NetBIOS`名称服务，用于实现Windows访问Linux文件，以满足基于Common Internet File System(`CIFS`)协议的共享访问环境（类似与DNS实现的功能，实现把Linux系统共享的工作组名称与其IP对应起来），Samba通过nmb 服务启动 nmbd进程，该进程**默认监听的是137与 138 UDP**端口

# SAMBA安装与使用

## 使用yum安装SMABA

```bash
# 服务器端程序
yum install -y smaba
# 客户端程序
yum install -y smaba-client
```

## SAMBA的简单使用(单用户)

:warning:用户创建的共享目录配置文件为`/var/lib/samba/usershares `

1. 修改`smb.conf`参数（不修改默认也可以直接运行samba）：

```shell
#======================= Global Settings =====================================
# ----------------------- Network-Related Options -------------------------
# interfaces选项，值可以使用网卡名，也可以使用网卡地址，默认为所有地址，比如：
interfaces = lo ens33 172.16.122.			# 简单写法172.16.122.	表示172.16.122.0/24网段的地址
# --------------------------- Logging Options -----------------------------
# 日志滚动分割
# log file = specify where log files are written to and how they are split
# log files split per-machine:
        log file = /var/log/samba/log.%m		# 文件名称
        # maximum size of 50KB per log file, then rotate:
        max log size = 50				# 单个日志文件最大大小
# ----------------------- Standalone Server Options ------------------------
        security = user			# 系统用户安全模式，使用的是系统的用户
        passdb backend = tdbsam			# 密码不是系统用户的密码
```

2. 检查配置文件语法错误，使用命令`testparm`即可
3. 语法检查无错误的话，可以直接启动samba服务

```bash
systemctl start nmbd smb
```

4. 创建用户

```bash
useradd smb			# 可以不指定用户密码
# 使用使用smbpasswd为该用户指定samba密码
smbpasswd -a smb
* 注意：首次创建用户的时候需要使用`-a`选项
```

5. 客户端挂载samba

```bash
# 列出服务器端的samba共享目录
smbclient -L 172.16.122.132 -U smb
# 交互式命令行连接使用samba
smbclient //172.16.122.132/smb -U smb
```

## SAMBA共享目录

1. 编辑`smb.conf`配置文件，添加自定义共享目录

```bash
# 添加以下内容
####
[sharing]
	comment = sharing samba files
	path = /data/samba
	public = yes
	writable = yes
	browseable =yes
####
```

2. 检查语法错误`testparm`
3. 重启`nmb`和`smb`服务
4. 客户端查看并使用

```bash
# 查看
smbclient -L 172.16.122.132 -U smb
#### 结果
Sharename       Type      Comment
        ---------       ----      -------
       ` sharing         Disk      sharing samba files`
        IPC$            IPC       IPC Service (Samba Server Version 4.9.1)
        smb             Disk      Home Directories
####
# cli使用
smbclient //172.16.122.132/sharing -U smb%123
```

5. 可以使用facl来针对某些用户进行权限控制

## smb.conf 配置详解

[smb.conf文件详解](smb.conf详解.md)

##  Windows/Linux客户端挂载SAMBA

对于Windows客户端查看Linux服务器端共享文件而言：可以通过**网页浏览器**、**我的电脑**或者**网上邻居**直接使用，具体方法是在地址栏输入

```bash
# 使用IP访问
\\172.16.122.133\<共享目录名称>
# 使用域访问
\\ZONE\<共享目录名称>
```

对于Linux用户而言：有以下三种方法

```bash
# 方法一：使用smbclient客户端工具
smbclient //172.16.122.133/<共享目录名称> -U <USER_NAME>
# 方法二：使用mount手动挂载
mount -t cifs  //172.16.122.133/<共享目录名称> /mnt/samba -o username=<USER_NAME>
# 方法三：使用`/etc/fstab`开机自动挂载，添入以下内容
####
//172.16.122.133/<共享目录名称>	/mnt/samba	cifs	defaults,_netdev,user=suofeiya,password=suofeiya 0 0

# 或者
//172.16.122.133/<共享目录名称>	/mnt/samba	cifs	defaults,_netdev,credentials=/etc/samba/pwd.txt 0 0
# `/etc/smaba/pwd.txt`内容
username=suofeiya
password=suofeiya
####
```

# pdbedit、smbpasswd、smbclient的使用

## pdbedit(增删用户 --> passdb.tdb 库中)

参数列表：

```bash
–a username		# 新建Samba账户
–x username		# 删除Samba账户
–L				# 列出Samba用户列表，读取passdb.tdb数据库文件
–Lv				# 列出Samba用户列表的详细信息
–c "[D]" –u username		# 暂停该Samba用户账号的使用
–c "[]" –u username		# 恢复该Samba用户账号的使用
-t 			# 从标准输出中接受用户信息，不显示提示符
```

## smbpasswd(增删用户 --> 单独文件中)

参数列表：

```bash
-a username			# 向smbpasswd文件中添加用户，首次添加用户时需要加入该参数
-c /PATH/TO/CONF_FILE			# 指定samba的配置文件
-x 			# 从smbpasswd文件中删除用户
-d			# 在smbpasswd文件中禁用指定的用户
-e			# 在smbpasswd文件中激活指定的用户
-n			# 将指定的用户的密码置空
```

## smbclient(客户端工具)

常用组合：

```bash
smbclient -L 172.16.122.133 -U username%password    # 列出samba共享服务器端的文件列表
* 服务器端可以使用smbstatus查看samba共享情况
smbclient  //172.16.122.133/data/smaba  -U username%password    # 像ftp一样，使用smbclient 与samba服务器进行交互操作
smbclient -c "ls"  //172.16.122.133//data/smaba  -U username%password    # 不进入交互界面，直接显示共享目录下的列表文件
```

# samba-swat(SMABA的WEB管理工具)

## SWAT的安装

```bash
# 首先需要xinetd，因为swat工具是嵌套在xinetd超级守护进程中，需要用xinetd来管理
yum install -y xinetd
# 打开samba-swat的下载网站
* http://www.rpmfind.net/linux/rpm2html/search.php?query=samba-swat(x86-64)
* https://centos.pkgs.org/7/centos-x86_64/samba-4.9.1-6.el7.x86_64.rpm.html
# 在服务器端进行安装
yum install -y http://www.rpmfind.net/linux/mageia/distrib/5/x86_64/media/core/updates/samba-swat-3.6.25-2.9.mga5.x86_64.rpm
```

## 配置与启动

```bash
# 编辑/etc/xinetd.d/swat文件
#### 
# default: off
# description: SWAT is the Samba Web Admin Tool. Use swat \
#              to configure your Samba server. To use SWAT, \
#              connect to port 901 with your favorite web browser.
service swat
{
        port            = 901
        socket_type     = stream
        wait            = no
        only_from       = 0.0.0.0    # 表示允许任意ip的主机访问
        user            = root
        server          = /usr/sbin/swat
        log_on_failure  += USERID
        disable         = no    # 把该项改为no ，代表启用swat 功能
}
####
```

重启`xinetd`服务来启动`swat`

```bash
systemctl restart xinetd
```

