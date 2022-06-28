# PHP 优化及安全配置

## 配置文件优化

php程序配置管理文件`/etc/php.ini`，主要调整日志、文件上传、禁止危险函数、关闭版本号显示等。

```ini
#;;;;;;;;;;;;;;;;;
# Error  logging ;  #错误日志设置
#;;;;;;;;;;;;;;;;;
expose_php = Off                        # 关闭php版本信息
display_error = Off                     # 屏幕不显示错误日志
error_reporting = E_ALL                 # 记录PHP的每个错误
log_errors = On                         # 开启错误日志
error_log = /var/log/php_error.log      # 错误日志写入的位置
date.timezone = Asia/Shanghai           # 调整时区,默认PRC

#;;;;;;;;;;;;;;;
# File Uploads ;    #文件上传设置
#;;;;;;;;;;;;;;;
file_uploads = On           # 允许文件上传
upload_max_filesize = 300M  # 允许上传文件的最大大小
post_max_size = 300M        # 允许客户端单个POST请求发送的最大数据
max_file_uploads = 20       # 允许同时上传的文件的最大数量
memory_limit = 128M         # 每个脚本执行最大内存

[Session]       #会话共享
session.save_handler = redis
session.save_path = "tcp://172.16.1.51:6379"

#php禁止危险函数执行（取决于实际情况，需要和开发沟通）
disable_functions = chown,chmod,pfsockopen,phpinfo

```

## php-fpm 配置优化

```ini
# 第一部分，fpm配置
;include=etc/fpm.d/*.conf

# 第二部分，全局配置
[global]
;pid = /var/log/php-fpm/php-fpm.pid     # pid文件存放的位置
;error_log = /var/log/php-fpm/php-fpm.log   # 错误日志存放的位置
;log_level = error  # 日志级别, alert, error, warning, notice, debug
rlimit_files = 65535     # php-fpm进程能打开的文件数
;events.mechanism = epoll # 使用epoll事件模型处理请求

# 第三部分，进程池定义
[www]       # 池名称
user = www  # 进程运行的用户
group = www # 进程运行的组
;listen = /dev/shm/php-fpm.sock # 监听在本地socket文件
listen = 127.0.0.1:9000         # 监听在本地tcp的9000端口
;listen.allowed_clients = 127.0.0.1 # 允许访问FastCGI进程的IP，any不限制 

pm = dynamic                    #  动态调节php-fpm的进程数
pm.max_children = 512           #  最大启动的php-fpm进程数
pm.start_servers = 32           #  初始启动的php-fpm进程数
pm.min_spare_servers = 32       #  最少的空闲php-fpm进程数
pm.max_spare_servers = 64       #  最大的空闲php-fpm进程数
pm.max_requests = 1500          #  每一个进程能响应的请求数
pm.process_idle_timeout = 15s;
pm.status_path = /phpfpm_status # 开启php的状态页面

#  第四部分，日志相关
php_flag[display_errors] = off
php_admin_value[error_log] = /var/log/phpfpm_error.log
php_admin_flag[log_errors] = on

#  慢日志
request_slowlog_timeout = 5s    # php脚本执行超过5s的文件
slowlog = /var/log/php_slow.log # 记录至该文件中

#  慢日志示例
[21-Nov-2013 14:30:38] [pool www] pid 11877
script_filename = /usr/local/lnmp/nginx/html/www.quancha.cn/www/fyzb.php
[0xb70fb88c] file_get_contents() /usr/local/lnmp/nginx/html/www.quancha.cn/www/fyzb.php:2
```

## php-fpm 监控页面

```nginx
# 修改php-fpm配置
$ vim /etc/php-fpm.d/www.conf
pm.status_path = /phpfpm_status

# 修改nginx配置
server {
        listen 80;
        server_name php.example.com;
        root /code;

        location / {
                index index.php index.html;
        }

        location /phpfpm_status {
                fastcgi_pass 127.0.0.1:9000;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
        }

        location ~ \.php$ {
                fastcgi_pass 127.0.0.1:9000;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
        }
}
```

**监控页面指标说明：**

```bash
$ curl http://example.com/phpfpm_status
pool:                 www           # fpm池名称,大多数为www
process manager:      dynamic       # 动态管理phpfpm进程
start time:           20/Jan/2019:00:00:09 +0800   # 启动时间，如果重启会发生变化
start since:          409           #p hp-fpm运行时间
accepted conn:        22            # 当前池接受的连接数
listen queue:         0     # 请求等待队列,如果这个值不为0,那么需要增加FPM的进程数量
max listen queue:     0     # 请求等待队列最高的数量
listen queue len:     128   # 请求等待队列的长度
idle processes:       4     # php-fpm空闲的进程数量
active processes:     1     # php-fpm活跃的进程数量
total processes:      5     # php-fpm总的进程数量
max active processes: 2     # php-fpm最大活跃的进程数量(FPM启动开始计算)
max children reached: 0     # 进程最大数量限制的次数，如果数量不为0，则说明phpfpm最大进程数量过小,可以适当调整。
```

## 附录：所禁用的危险函数

```bash
phpinfo() 
功能描述：输出 PHP 环境信息以及相关的模块、WEB 环境等信息。 
危险等级：中 

passthru() 
功能描述：允许执行一个外部程序并回显输出，类似于 exec()。 
危险等级：高 

exec() 
功能描述：允许执行一个外部程序（如 UNIX Shell 或 CMD 命令等）。 
危险等级：高 

system() 
功能描述：允许执行一个外部程序并回显输出，类似于 passthru()。 
危险等级：高 

chroot() 
功能描述：可改变当前 PHP 进程的工作根目录，仅当系统支持 CLI 模式 
PHP 时才能工作，且该函数不适用于 Windows 系统。 
危险等级：高 

scandir() 
功能描述：列出指定路径中的文件和目录。 
危险等级：中 

chgrp() 
功能描述：改变文件或目录所属的用户组。 
危险等级：高 

chown() 
功能描述：改变文件或目录的所有者。 
危险等级：高 

shell_exec() 
功能描述：通过 Shell 执行命令，并将执行结果作为字符串返回。 
危险等级：高 

proc_open() 
功能描述：执行一个命令并打开文件指针用于读取以及写入。 
危险等级：高 

proc_get_status() 
功能描述：获取使用 proc_open() 所打开进程的信息。 
危险等级：高 

error_log() 
功能描述：将错误信息发送到指定位置（文件）。 
安全备注：在某些版本的 PHP 中，可使用 error_log() 绕过 PHP safe mode， 
执行任意命令。 
危险等级：低 

ini_alter() 
功能描述：是 ini_set() 函数的一个别名函数，功能与 ini_set() 相同。 
具体参见 ini_set()。 
危险等级：高 

ini_set() 
功能描述：可用于修改、设置 PHP 环境配置参数。 
危险等级：高 

ini_restore() 
功能描述：可用于恢复 PHP 环境配置参数到其初始值。 
危险等级：高 

dl() 
功能描述：在 PHP 进行运行过程当中（而非启动时）加载一个 PHP 外部模块。 
危险等级：高 

pfsockopen() 
功能描述：建立一个 Internet 或 UNIX 域的 socket 持久连接。 
危险等级：高 

syslog() 
功能描述：可调用 UNIX 系统的系统层 syslog() 函数。 
危险等级：中 

readlink() 
功能描述：返回符号连接指向的目标文件内容。 
危险等级：中 

symlink() 
功能描述：在 UNIX 系统中建立一个符号链接。 
危险等级：高 

popen() 
功能描述：可通过 popen() 的参数传递一条命令，并对 popen() 所打开的文件进行执行。 
危险等级：高 

stream_socket_server() 
功能描述：建立一个 Internet 或 UNIX 服务器连接。 
危险等级：中 

putenv() 
功能描述：用于在 PHP 运行时改变系统字符集环境。在低于 5.2.6 版本的 PHP 中，可利用该函数 
修改系统字符集环境后，利用 sendmail 指令发送特殊参数执行系统 SHELL 命令。 
危险等级：高 

禁用方法如下： 
打开/etc/php.ini文件， 
查找到 disable_functions ，添加需禁用的函数名，如下： 
phpinfo,eval,passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_open,proc_get_status,ini_alter,ini_alter,ini_restore,dl,pfsockopen,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server,fsocket,fsockopen
```



## 参考链接

- 

> 文章内容收集于网络。

