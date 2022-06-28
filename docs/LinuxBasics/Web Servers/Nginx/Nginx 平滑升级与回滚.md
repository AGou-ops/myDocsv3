# Nginx 平滑升级与回滚

## 平滑升级

大体步骤： 编译安装新版本（与旧版本不同目录）--》备份旧版本的二进制文件 --》拷贝新版本的二进制文件至旧版本目录 --》将旧work进程停掉 --》SUCCESS

以下仅记录关键步骤：

```bash
# 在旧版本的目录的sbin目录下，备份旧版本的二进制文件
$ mv nginx nginx-1.12.2
# 将新版本的二进制文件放置于旧版本的sbin目录下
$ cp ../nginx-1.14.2/sbin/nginx .
# 查看旧版本的work进程
$ ps -ef | grep nginx
root       6324      1  0 09:06 ?        00:00:00 nginx: master process /usr/local/nginx-1.12.2/sbin/nginx
nobody     6325   `6324`  0 09:06 ?        00:00:00 nginx: worker process	# work进程
root       6338   1244  0 09:11 pts/0    00:00:00 grep --color=auto nginx
# kill掉旧版本的work进程
$ kill -USR2 6324	# 6324为work进程pid

* 这时新的master进程已经正常开启，但旧版本work进程仍然存在，使用如下命令将旧work进程平滑停止：
$ kill -WINCH 6324
```

:information_source:如果在版本升级完成后，没有任何问题，需要关闭老的master进程的话，可以使用下面的命令：

```bash
$ kill -QUIT <OLD_MASTER_PID>
```

## 回滚

> 在上面的结果中，我们也能看到老的master进程是一直存在，在没有手工关闭前，它是不会自已关闭的，这种设计是有好处的，好处就是为了升级新版本后，如果出现问题能及时快速的回滚到上一个稳定版本。

```bash
$ ps -ef | grep nginx
root       7513      1  0 09:06 ?        00:00:00 nginx: master process /usr/local/nginx-1.12.2/sbin/nginx
root       7413   7518  0 09:12 ?        00:00:00 nginx: master process /usr/local/nginx-1.12.2/sbin/nginx
nobody     7415   7624  0 09:12 ?        00:00:00 nginx: worker processroot       6350   1244  0 09:23 pts/0    00:00:00 grep --color=auto nginx
```

回滚步骤与升级步骤类似，就是用旧版本的二进制文件替换掉新版本的二进制文件：

```bash
$ mv nginx nginx_newer
$ mv nginx-1.12.2 nginx
# kill 掉新版本的master进程
$ kill -USR1 7518
```



