# vsFTP 基础实战

## vsFTP登录方式及FTP数据连接

FTP可以有三种登入方式分别是：

- 匿名(anonymous)登录方式：不需要用户密码，匿名用户默认全部都映射`ftp`用户，其目录在`/var/ftp`
- 本地用户登入：使用本地用户和密码登入，使用的是`PAM`认证(`/etc/pam.d/vsftpd `)，其默认目录为系统用户的家目录
- 虚拟用户方式：也是使用用户和密码登入，但是该用户不是linux中创建的用户

FTP的两个连接，分别是**命令连接和数据连接**，其中数据连接的建立方式又分为**主动和被动**连接两种：

>FTP服务端会监听2个端口, 控制进程20,数据进程21(主动模式) 数据连接,站在服务器角度,有2种模式：    
>
>主动模式：ftp server从20端口主动向客户端发起连接,由于源端口固定,所以适用于模式防火墙模式.   
>
> 被动模式：ftp server被动等待客户端来连我的这个端口(控制连接后会告知会将passive ip/port告知了客户端) 一般情况下默认都是被动模式

## vsFTP安装及其程序环境

源码和二进制包下载地址：https://pkgs.org/download/vsftpd

```bash
yum install -y vsftpd
```

主要文件目录：

* 主程序：`/usr/sbin/vsftp`
* 启动脚本文件：`/etc/rc.d/init.d/vsftpd`
* 系统服务单元目录：`/usr/lib/systemd/system/vsftpd.service`
* 主配置文件：`/etc/vsftp/vsftp.conf`
* `/etc/pam.d/vsftpd`：PAM认证文件（此文件中`file=/etc/vsftpd/ftpusers`字段，指明阻止访问的用户来自该文件中的用户）
* `/etc/vsftpd/ftpusers`：禁止使用vsftpd的用户列表文件【黑名单】
* `/etc/vsftpd/user_list`：禁止或允许使用vsftpd的用户列表文件，这个文件中指定的用户缺省情况（即在`/etc/vsftpd/vsftpd.conf`中设置`userlist_deny=YES`）下也不能访问FTP服务器，在设置了`userlist_deny=NO`时,仅允许user_list中指定的用户访问FTP服务器
* 匿名用户数据根目录：`/var/ftp`
* 匿名用户的下载上传目录：`/var/ftp/pub`此目录需赋权根chmod 1777 pub（1为特殊权限，使上载后无法删除）
* vsFTP的日志文件：`/etc/logrotate.d/vsftpd.log`

## vsFTP配置文件参数

### 基本选项

```bash
# 是否允许匿名登录FTP服务器，默认设置为YES允许
# 用户可使用用户名ftp或anonymous进行ftp登录，口令为用户的E-mail地址。
# 如不允许匿名访问则设置为NO
anonymous_enable=YES
# 是否允许本地用户(即linux系统中的用户帐号)登录FTP服务器，默认设置为YES允许
# 本地用户登录后会进入用户主目录，而匿名用户登录后进入匿名用户的下载目录/var/ftp/pub
# 若只允许匿名用户访问，前面加上注释掉即可阻止本地用户访问FTP服务器
local_enable=YES
# 是否允许本地用户对FTP服务器文件具有写权限，默认设置为YES允许
write_enable=YES 
# 掩码，本地用户默认掩码为077
# 你可以设置本地用户的文件掩码为缺省022，也可根据个人喜好将其设置为其他值
local_umask=022
# 是否允许匿名用户上传文件，须将全局的write_enable=YES。默认为YES
anon_upload_enable=YES
# 是否允许匿名用户创建新文件夹
anon_mkdir_write_enable=YES 
# 是否激活目录欢迎信息功能
# 当用户用CMD模式首次访问服务器上某个目录时，FTP服务器将显示欢迎信息
# 默认情况下，欢迎信息是通过该目录下的.message文件获得的
# 此文件保存自定义的欢迎信息，由用户自己建立
dirmessage_enable=YES
# 是否让系统自动维护上传和下载的日志文件
# 默认情况该日志文件为/var/log/vsftpd.log,也可以通过下面的xferlog_file选项对其进行设定
# 默认值为NO
xferlog_enable=YES
# Make sure PORT transfer connections originate from port 20 (ftp-data).
# 是否设定FTP服务器将启用FTP数据端口的连接请求
# ftp-data数据传输，21为连接控制端口
connect_from_port_20=YES
# 设定是否允许改变上传文件的属主，与下面一个设定项配合使用
# 注意，不推荐使用root用户上传文件
chown_uploads=YES
# 设置想要改变的上传文件的属主，如果需要，则输入一个系统用户名
# 可以把上传的文件都改成root属主。whoever：任何人
chown_username=whoever
* # 设定系统维护记录FTP服务器上传和下载情况的日志文件
# /var/log/vsftpd.log是默认的，也可以另设其它
xferlog_file=/var/log/vsftpd.log
# 是否以标准xferlog的格式书写传输日志文件
# 默认为/var/log/xferlog，也可以通过xferlog_file选项对其进行设定
# 默认值为NO
xferlog_std_format=YES
# 以下是附加配置，添加相应的选项将启用相应的设置
# 是否生成两个相似的日志文件
# 默认在/var/log/xferlog和/var/log/vsftpd.log目录下
# 前者是wu_ftpd类型的传输日志，可以利用标准日志工具对其进行分析；后者是vsftpd类型的日志
dual_log_enable=
# 是否将原本输出到/var/log/vsftpd.log中的日志，输出到系统日志
syslog_enable=
# 设置数据传输中断间隔时间，此语句表示空闲的用户会话中断时间为600秒
# 即当数据传输结束后，用户连接FTP服务器的时间不应超过600秒。可以根据实际情况对该值进行修改
idle_session_timeout=600
# 设置数据连接超时时间，该语句表示数据连接超时时间为120秒，可根据实际情况对其个修改
data_connection_timeout=120
# 运行vsftpd需要的非特权系统用户，缺省是nobody
nopriv_user=ftpsecure
# 是否识别异步ABOR请求。
# 如果FTP client会下达“async ABOR”这个指令时，这个设定才需要启用
# 而一般此设定并不安全，所以通常将其取消
async_abor_enable=YES
# 是否以ASCII方式传输数据。默认情况下，服务器会忽略ASCII方式的请求。
# 启用此选项将允许服务器以ASCII方式传输数据
# 不过，这样可能会导致由"SIZE /big/file"方式引起的DoS攻击
ascii_upload_enable=YES
ascii_download_enable=YES
# 登录FTP服务器时显示的欢迎信息
# 如有需要，可在更改目录欢迎信息的目录下创建名为.message的文件，并写入欢迎信息保存后
ftpd_banner=Welcome to blah FTP service.
# 黑名单设置。如果很讨厌某些email address，就可以使用此设定来取消他的登录权限
# 可以将某些特殊的email address抵挡住。
deny_email_enable=YES
# 当上面的deny_email_enable=YES时，可以利用这个设定项来规定哪些邮件地址不可登录vsftpd服务器
# 此文件需用户自己创建，一行一个email address即可
banned_email_file=/etc/vsftpd/banned_emails
# 用户登录FTP服务器后是否具有访问自己目录以外的其他文件的权限
# 设置为YES时，用户被锁定在自己的home目录中，vsftpd将在下面chroot_list_file选项值的位置寻找chroot_list文件
# 必须与下面的设置项配合
chroot_list_enable=YES
# 被列入此文件的用户，在登录后将不能切换到自己目录以外的其他目录
# 从而有利于FTP服务器的安全管理和隐私保护。此文件需自己建立
chroot_list_file=/etc/vsftpd/chroot_list
# 是否允许递归查询。默认为关闭，以防止远程用户造成过量的I/O
ls_recurse_enable=YES
# 是否允许监听。
# 如果设置为YES，则vsftpd将以独立模式运行，由vsftpd自己监听和处理IPv4端口的连接请求
listen=YES
# 修改默认监听的端口，应当尽量大于4000
listen_port=4449			# 客户端连接语句：`lftp 172.16.122.126 4449`
# 设定是否支持IPV6。如要同时监听IPv4和IPv6端口，
# 则必须运行两套vsftpd，采用两套配置文件
# 同时确保其中有一个监听选项是被注释掉的
listen_ipv6=YES
# 设置PAM外挂模块提供的认证服务所使用的配置文件名，即/etc/pam.d/vsftpd文件
# 此文件中file=/etc/vsftpd/ftpusers字段，说明了PAM模块能抵挡的帐号内容来自文件/etc/vsftpd/ftpusers中
pam_service_name=vsftpd
# 是否允许ftpusers文件中的用户登录FTP服务器，默认为NO
# 若此项设为YES，则user_list文件中的用户允许登录FTP服务器
# 而如果同时设置了userlist_deny=YES，则user_list文件中的用户将不允许登录FTP服务器，甚至连输入密码提示信息都没有
userlist_enable=YES/NO
# 设置是否阻扯user_list文件中的用户登录FTP服务器，默认为YES
userlist_deny=YES/NO
# 是否使用tcp_wrappers作为主机访问控制方式。
# tcp_wrappers可以实现linux系统中网络服务的基于主机地址的访问控制
# 在/etc目录中的hosts.allow和hosts.deny两个文件用于设置tcp_wrappers的访问控制
# 前者设置允许访问记录，后者设置拒绝访问记录。
# 如想限制某些主机对FTP服务器192.168.57.2的匿名访问，编缉/etc/hosts.allow文件，如在下面增加两行命令：
# vsftpd:192.168.57.1:DENY 和vsftpd:192.168.57.9:DENY
# 表明限制IP为192.168.57.1/192.168.57.9主机访问IP为192.168.57.2的FTP服务器
# 此时FTP服务器虽可以PING通，但无法连接
tcp_wrappers=YES
```

FROM：https://www.jb51.net/article/94223.htm

### 欢迎语设置

`dirmessage_enable=YES/NO（YES）`：如果启动这个选项，那么使用者第一次进入一个目录时，会检查该目录下是否有.message这个档案，如果有，则会出现此档案的内容，通常这个档案会放置欢迎话语，或是对该目录的说明。默认值为开启。
`message_file=.message`：设置目录消息文件，可将要显示的信息写入该文件。默认值为.message。
`banner_file=/etc/vsftpd/banner`：当使用者登入时，会显示此设定所在的档案内容，通常为欢迎话语或是说明。默认值为无。如果欢迎信息较多，则使用该配置项。
`ftpd_banner=Welcome to AGou's FTP server`：这里用来定义欢迎话语的字符串，banner_file是档案的形式，而ftpd_banner 则是字符串的形式。预设为无。

### 限制最大连接数和传输速率

`max_client`：用于设置FTP服务器所允许的最大客户端连接数，值为0时表示不限制。例如`max_client=100`表示FTP服务器的所有客户端最大连接数不超过100个。
`max_per_ip`： 用于设置对于同一IP地址允许的最大客户端连接数，值为0时表示不限制。例如`max_per_ip=5`表示同一IP地址的FTP客户机与FTP服务器建立的最大连接数不超过5个。
`local_max_rate`： 用于设置本地用户的最大传输速率，单位为B/s，值为0时表示不限制。例如`local_max_rate=500000`表示FTP服务器的本地用户最大传输速率设置为500KB/s.
`anon_max_rate`：用于设置匿名用户的最大传输速率，单位为B/s,值为0表示不限制。例如`ano_max_rate=200000`，表示FTP服务器的匿名用户最大传输速率设置为200KB/s.

### 指定用户的权限设置

`vsftpd.user_list`文件需要与`vsftpd.conf`文件中的配置项结合来实现对于`vsftpd.user_list`文件中指定用户账号的访问控制：

（1）设置禁止登录的用户账号（**黑名单**）

当`vsftpd.conf`配置文件中包括以下设置时，`vsftpd.user_list`文件中的用户账号被禁止进行FTP登录：

```bash
userlist_enable=YES
userlist_deny=YES
```

userlist_enable设置项设置使用vsftpd.user_list文件，userlist_deny设置为YES表示vsftpd.user_list文件用于设置禁止的用户账号。

（2）设置只允许登录的用户账号（**白名单，建议方式**）

当`vsftpd.conf`配置文件中包括以下设置时，只有`vsftpd.user_list`文件中的用户账号能够进行FTP登录：

```bash
userlist_enable=YES
userlist_deny=NO
```

### 控制用户是否允许切换到上级目录

在默认配置下，本地用户登入FTP后可以使用cd命令切换到其他目录，这样会对系统带来安全隐患。可以通过以下三条配置文件来控制用户切换目录：
`chroot_list_enable=YES/NO（NO）`：设置是否启用chroot_list_file配置项指定的用户列表文件。默认值为NO。
`chroot_list_file=/etc/vsftpd.chroot_list`：用于指定用户列表文件，该文件用于控制哪些用户可以切换到用户家目录的上级目录。
`chroot_local_user=YES/NO（NO）`：用于指定用户列表文件中的用户是否允许切换到上级目录。默认值为NO。
通过搭配能实现以下几种效果：
	①当`chroot_list_enable=YES`，`chroot_local_user=YES`时，在`/etc/vsftpd.chroot_list`文件中列出的用户，可以切换到其他目录；未在文件中列出的用户，不能切换到其他目录。
	②当`chroot_list_enable=YES`，`chroot_local_user=NO`时，在`/etc/vsftpd.chroot_list`文件中列出的用户，不能切换到其他目录；未在文件中列出的用户，可以切换到其他目录。
	③当`chroot_list_enable=NO`，`chroot_local_user=YES`时，所有的用户均不能切换到其他目录。
	④当`chroot_list_enable=NO`，`chroot_local_user=NO`时，所有的用户均可以切换到其他目录。

### 设置用户组

简单示例：

```bash
mkdir -p /home/ftpuser 			# 递归创建新目录
groupadd ftpuser  新建组
useradd -g ftpuser -d /home/ftpuser ftpuser1 				#新建用户ftpuser1并指定家目录和属组
useradd -g ftpuser -d /home/ftpuser ftpuser2 				#新建用户ftpuser2并指定家目录和属组
useradd -g ftpuser -d /home/ftpuser ftpuser3 			# 新建用户ftpuser3并指定家目录和属组
chown ftpuser1 /home/ftpuser 				# 设置目录属主为用户ftpuser1
chown .ftpuser /home/ftpuser 				# 设置目录属组为组ftpuser
chmod 750 /home/ftpuser 			#设置目录访问权限ftpuser1为读，写，执行；ftpuser2，ftpuser3为读，执行`
```

说明：由于本地用户登录FTP服务器后进入自己主目录，而`ftpuser1`，`ftpuser2`， `ftpuser3`对主目录`/home/ftpuser`分配的权限不同，所以通过FTP访问的权限也不同，`ftpuser1`访问权限为：**上传，下载，建目录；**`ftpuser2`，`ftpuser3`访问权限为**下载，浏览，不能建目录和上传**。实现了群组中用户不同访问级别，加强了对FTP服务器的分级安全管理。

### 连接超时设定

配置空闲的用户会话的中断时间：如下配置将在用户会话空闲5分钟后被中断，以释放服务器的资源

```bash
Idle_session_timeout=300
```

配置空闲的数据连接的中断时间：如下配置将在数据空闲连接1分钟后被中断，同样也是为了释放服务器的资源

```bash
Data_connection_timeout=60
```


配置客户端空闲时的自动中断和激活连接的时间：如下配置将使客户端空闲1分钟后自动中断连接，并在30秒后自动激活连接

```bash
Accept_timeout=60
Connect_timeout=30
```

### 虚拟用户使用 pam_mysql.so 模块认证

1. 创建用户，并建立数据库

```sql
# 创建可用用户，此处可以只给其读权限
MariaDB [(none)]> GRANT ALL ON vsftpd.* TO vsftpd@'127.0.0.1' IDENTIFIED BY 'vsftpd';
MariaDB [(none)]> FLUSH PRIVILEGES;

# 建立数据库
MariaDB [(none)]> CREATE DATABASE vsftpd;
MariaDB [(none)]> use vsftpd;
# 创建账号密码表
MariaDB [vsftpd]> CREATE TABLE users(id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, password CHAR(48) NOT NULL,UNIQUE KEY(name));
# 添加用户和密码
MariaDB [vsftpd]> INSERT INTO users(name,password) VALUES ('suofeiya',PASSWORD('suofeiya')),('test',PASSWORD('test')); 
# 查看创建结果
MariaDB [vsftpd]> SELECT * FROM users;
+----+----------+-------------------------------------------+
| id | name     | password                                  |
+----+----------+-------------------------------------------+
|  1 | suofeiya | *46AE36A05192361576481222E6D5358109134F64 |
|  2 | test     | *94BDCEBE19083CE2A1F959FD02F964C7AF4CFC29 |
+----+----------+-------------------------------------------+
```

2. 为虚拟用户添加家目录

```bash
mkdir -pv /data
useradd -d /data/ftpvuser ftpvuser
# 检查是否成功创建用户
finger ftpvuser
```

3. 安装认证所需的`pam_mysql.so`模块

```bash
# 在CentOS 6上，直接安装pam_mysql即可
yum install -u pam_mysql
* 需要注意的一点是：`pam_mysql`属于`epel`仓库，需要提前安装好`epel`仓库

# 在CentOS 7上，需要编译安装pam_mysql.so模块
# 源码包下载地址：https://sourceforge.net/projects/pam-mysql/
# 预先准备
 yum groupinstall "Development Tools" -y
yum groupinstall mysql-devel  pam-devel -y
# 编译并安装
./configure --with-mysql=/usr --with-pam=/usr --with-pam-mods-dir=/usr/lib64/security
make;make install

# 检查是否成功安装
ls /usr/lib64/security/ | grep pam_mysql.so
```

3. 建立pam认证所需文件

```bash
vim /etc/pam.d/vsftp.vuser
####
auth required /lib64/security/pam_mysql.so user=vsftpd passwd=vsftpd host=127.0.0.1 db=vsftpd table=users usercolumn=name passwdcolumn=password crypt=2
account required /lib64/security/pam_mysql.so user=vsftpd passwd=vsftpd host=127.0.0.1  db=vsftpd table=users usercolumn=name passwdcolumn=password crypt=2
####
```

4. 修改vsftp的配置文件

```bash
vim /etc/vsftpd/vsftpd.conf
####
pam_service_name=vsftpd
# 修改为  -->
pam_service_name=vsftp.vuser

#其他 配置
guest_enable=YES
guest_username=ftpvuser
####
```

5. 为虚拟用户添加所需权限（对用户单独配置权限）

```bash
# 编辑vsftp的配置文件，添加以下内容，表示用户配置目录
####
user_config_dir=/etc/vsftpd/vusers.d/
####

# 创建目录
mkdir /etc/vsftpd/vusers.d/
# 创建与用户名同名的配置文件，为用户添加上传和创建目录权限
vim /etc/vsftpd/vusers.d/suofeiya
####
anon_upload_enable=YES
anon_mkdir_write_enable=YES
####

# 重启服务使其生效
systemctl restart vsftpd
```

出现的一些小问题：

1. 登录被拒绝，解决方法：

```bash
# 去除目录的写权限
chmod a-w /data/ftpvuser
```

2. 使用`ls`命令出现`226 Transfer done (but failed to open directory).`无法使用等问题，解决方法：

```bash
# 修改共享文件夹的属组属组即可
chown ftpvuser:ftpvuser /data/ftpvuser/pub
```

