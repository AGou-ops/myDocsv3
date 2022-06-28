# useful command

- `getent`: 用来查看系统的数据库中的相关记录。

```bash
# 获取主机ip
getent hosts baidu.com | awk '{print $1}'
# 获取用户家目录
getent passwd "$UID" | awk -F":" '{print $6}'
```

- `lshw`: 查看主机硬件信息。

```bash
# 列出主机磁盘信息, 参数-short简略输出, -C指定查询类型
sudo lshw -short -C disk
sudo lshw -C storage
sudo lshw -C cpu
sudo lshw -C network
```

- `chattr u+i <FILE>`不可修改权限/`chattr u+a <FILE>`赋予只可追加权限, 且不能通过编辑器追加, 使用`lsattr <FILE>`来查看.

- `chmod ug+x <FILE>`

- `auditd`: 用于linux系统文件审计.

- `umask -S`: 列出当前目录的umask信息, 使用rwx符号表示, 不加`-S`选项则用数字代号表示, 对于文件, 其满权限是`666`, 而对于文件夹, 满权限是`777`, 默认`umask`值为`022`.

- `timeout 10 sh -c 'ls -lt'`: 设置超时时间. 