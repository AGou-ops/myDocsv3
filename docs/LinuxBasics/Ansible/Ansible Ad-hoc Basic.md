# Ansible 简单使用与常用模块

## Ansible 简单使用

编辑`/etc/ansible/hosts`文件,添加要管控的主机:

```ini
...
[testserver]
node01
node02
...
```

为 `node01` 和 `node02` 添加 SSH 免密认证:

```bash
ssh-keygen -t rsa -P ""		# 一路ENTER即可
ssh-copy-id -i ~/.ssh/id_rsa.pub root@node01
ssh-copy-id -i ~/.ssh/id_rsa.pub root@node02
```

列出当前所有被管控的主机:

```bash
[root@master ~]\# ansible all --list-hosts
  hosts (2):
    node01
    node02
```

使用内置`ping`模块检查连通性:

```bash
[root@master ~]\# ansible all -m ping -C			# -C(--check)预测变化,并非真正执行
node02 | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    },
    "changed": false,
    "ping": "pong"
}
node01 | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    },
    "changed": false,
    "ping": "pong"
}
```

## 常用模块

#### group

```bash
ansible all -m group -a "gid=1080 name=test_grp state=present system=no"
* 参数说明:
`state`:  (Choices: absent, present)[Default: present]
`system`: 是否为系统用户组,默认为no
```

#### user

```bash
ansible all -m user -a "uid=5000 name=test_user state=present groups=test_grp shell=/usr/bin/sh"
* 参数说明:
`groups`: 指定附加组, 指定组使用`group`
```

#### copy

```bash
ansible all -m copy -a "src=/root/testfile dest=/tmp/testfile_ansible mode=600"
ansible all -m copy -a "src=/root/testdir dest=/tmp/"
* 复制目录时需要注意的一点:
`/root/testdir` 与 `/root/testdir/` 不同,前者会递归复制目录下所有文件及文件夹本身,后者只会复制文件夹里面的内容,不包含目录本身

# 复制自定义内容文件,内容由命令行给出
ansible all -m copy -a "content='Hello Ansible! \n' dest=/tmp/hello.txt owner=test_user group=test_grp force=yes"
```

#### fetch

```bash
ansible all -m fetch -a "src=/tmp/hello.txt dest=/root/ fail_on_missing=yes"
* 参数说明:
`fail_on_missing`: 为yes时,当远程主机没有该文件时,正常退出.

* 注意fetch到本地的目录结构比较特殊
[root@master ~]\# tree node01
node01
└── tmp
    └── hello.txt

1 directory, 1 file
```

#### file(Manage files and file properties)

```bash
ansible all -m file -a "path=/tmp/testdir state=directory"
* 参数说明:
`state`: 
	absent: 删除文件夹,文件和链接也都会被删除
	file: 如果文件存在则输出类似于`stat`命令的信息,如果不存在想创建一个空文件,可以使用touch或者copy和template模块
	touch: 创建空文件
	link: 链接文件
	
# 创建链接文件
ansible all -m file -a "src=/tmp/testfile2 path=/tmp/testfile2_link state=link"
```

#### cron

```bash
ansible all -m cron -a "user=root name=更新时间 minute=*/5 job='/usr/sbin/ntpdate 192.168.8.1 &> /dev/null'"
# 取消该cron
ansible all -m cron -a "name=更新时间 state=absent"
```

#### command

```bash
ansible all -m command -a "chdir=/tmp touch testfile2"
# 查看文件存在性,如果存在命令不会执行,反之亦然
[root@master ~]\# ansible all -m command -a "creates=/tmp/testfile2 echo testfile2"
node01 | SUCCESS | rc=0 >>
skipped, since /tmp/testfile2 exists
node02 | CHANGED | rc=0 >>		# node02文件已手动删除
testfile2

* 参数说明:
`chdir`: 切换工作目录
`creates`: 文件存在性

* 需要特别注意的是command模块的解释器并不是shell,所以有的命令command会解析失败,如下面的这个管道符
ansible all -m command -a "ss -tnulp | grep 80"		# 执行时会报错,需要使用下面的shell模块
```

#### shell

```bash
# 使用shell解释器则正常运行
ansible all -m shell -a "executable=/bin/bash ss -tnulp | grep 80"
* 参数说明:
`executable`: 指明使用哪个shell
```

#### yum

```bash
ansible all -m yum -a "name=varnish state=installed"
* 参数说明:
`state`:
	present/installed: 安装
	lastest: 安装最新版本
	absent/removed: 卸载
```

#### service

```bash
ansible all -m service -a "name=varnish state=started"		# 停止`state=stopped`
* 参数说明:
`enabled`: 是否开机自启
`state`: stopped,restarted,reloaded
`sleep`: 如果状态被设置为`restarted`,那么在停止服务与启动服务之间睡眠几秒钟
```

#### script( Runs a local script on a remote node after transferring it)

```bash
ansible all -m script -a "/tmp/test.sh"
* 同样也有`executable`,`chdir`,`creates`等
```

#### mount

```bash
ansible node01 -m mount -a "src=/dev/sr0  path=/mnt/dvd fstype=iso9660 state=present"
* 参数说明:
`opts`: 挂载选项ro,noauto,具体参考fstab的挂载选项
`state`:
	present: 只是在`/etc/fstab`中添加配置信息,并不会真正挂载,同`mount -a`命令
	mounted/unmounted: 挂载,取消挂载
```

### unarchive/archive

```bash
ansible node01 -m unarchive -a "src=foo.tgz dest=/tmp/foo remote_src=yes"
* 参数说明:
`src`: 压缩包路径,可以是网络URL下载链接
`remote_src`: 解压缩远端已存在的压缩包,当`src`为URL时,需要设置为yes

ansible node01 -m archive -a "path=/tmp/foo dest=/tmp/foo.tgz remove=yes"
* 参数说明:
`remove`: 压缩完之后是否删除原来的目录或文件
`format`: 压缩文件格式,如zip,bz2,gz等
`exclude_path`: 指定排除目录

:info: 在YAML文件中如果想压缩多个目录,需要使用多个`-`, 使用通配符,如`/tmp/foo*`时也需要使用`-`
```

## 参考链接

* Ansible modules : https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html



