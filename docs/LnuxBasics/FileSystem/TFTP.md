# TFTP

>官方站点：https://www.tftp-server.com/

TFTP（Trivial File Transfer Protocol,简单文件传输协议）是TCP/IP协议族中的一个用来在客户机与服务器之间进行简单文件传输的协议，提供不复杂、开销不大的文件传输服务。端口号为69。

TFTP是一个传输文件的简单协议，它基于UDP协议而实现，但是我们也不能确定有些TFTP协议是基于其它传输协议完成的。此协议设计的时候是进行小文件传输的。**因此它不具备通常的FTP的许多功能，它只能从文件服务器上获得或写入文件，不能列出目录，不进行认证，它传输8位数据**。传输中有三种模式：netascii，这是8位的ASCII码形式，另一种是octet，这是8位源数据类型；最后一种mail已经不再支持，它将返回的数据直接返回给用户而不是保存为文件。（摘自百度百科[tftp](https://baike.baidu.com/item/tftp/455170?fr=aladdin)）

## tftp的安装

### 服务器端

```bash
yum install -y tftp-server
```

启动：`systemctl start tftp.service`

使用`ss -tnulp | grep 69`命令查看tftp是否已经启动

### 客户端

```bash
yum install -y tftp
```

## tftp的使用

tftp默认的数据文件夹是：`/var/lib/tftpboot/`

服务器端上传文件到上面那个目录即可.

客户端使用：

```bash
tftp 172.16.122.135
# 使用get命令将文件下载到本地
tftp> get file
```

TFTP工具比较简单只能下载一些相对小一点的文件