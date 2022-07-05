# lvm 讲解 

### 一、lvm讲解

##### 1. 简介：

LVM是 Logical Volume Manager(逻辑卷管理)的简写，它是Linux环境下对磁盘分区进行管理的一种机制。LVM可以将多个硬盘和硬盘分区做成一个逻辑卷，并把这个逻辑卷作为一个整体来统一管理，动态对分区进行扩缩空间大小，安全快捷方便管理。

##### 2. 基本概念：

- 物理卷-----PV（Physical Volume）
   物理卷在逻辑卷管理中处于最底层，它可以是实际物理硬盘上的分区，也可以是整个物理硬盘。
- 卷组-----VG（Volumne Group）
   卷组建立在物理卷之上，一个卷组中至少要包括一个物理卷，在卷组建立之后可动态添加物理卷到卷组中。一个逻辑卷管理系统工程中可以只有一个卷组，也可以拥有多个卷组。
- 逻辑卷-----LV（Logical Volume）
   逻辑卷建立在卷组之上，卷组中的未分配空间可以用于建立新的逻辑卷，逻辑卷建立后可以动态地扩展和缩小空间。系统中的多个逻辑卷要以属于同一个卷组，也可以属于不同的多个卷组。
- 物理区域-----PE（Physical Extent）
   物理区域是物理卷中可用于分配的最小存储单元，物理区域的大小可根据实际情况在建立物理卷时指定。物理区域大小一旦确定将
   不能更改，同一卷组中的所有物理卷的物理区域大小需要一致。
- 逻辑区域-----LE（Logical Extent）
   逻辑区域是逻辑卷中可用于分配的最小存储单元，逻辑区域的大小取决于逻辑卷所在卷组中的物理区域的大小。
- 卷组描述区域-----（Volume Group Descriptor Area）
   卷组描述区域存在于每个物理卷中，用于描述物理卷本身、物理卷所属卷组、卷组中的逻辑卷及逻辑卷中物理区域的分配等所有信息，卷组描述区域是在使用pvcreate建立物理卷时建立的。

##### 3. 工作原理

（1）物理磁盘被格式化为PV，空间被划分为一个个的PE。
 （2）不同的PV加入到同一个VG中，不同PV的PE全部进入到了VG的PE池内。
 （3）LV基于PE创建，大小为PE的整数倍，组成LV的PE可能来自不同的物理磁盘。
 （4）LV现在就直接可以格式化后挂载使用了。
 （5）LV的扩充缩减实际上就是增加或减少组成该LV的PE数量，其过程不会丢失原始数据 。

##### 4. 操作实验

:information_source:增加硬盘或者虚拟磁盘之后无需重启主机就可让内核重扫描磁盘信息（虚拟磁盘扩容可能得重启）：

```bash
for host in /sys/class/scsi_host/*; do echo "- - -" | sudo tee $host/scan; ls /dev/sd* ; done
```

（1）准备磁盘分区

> - fdisk /dev/sdb
> - n 创建三个新分区，分别为1G
> - t 改变分区类型为8e

完成创建后如下所示：



```bash
命令(输入 m 获取帮助)：p

磁盘 /dev/sdb：10.7 GB, 10737418240 字节，20971520 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0xbffc2ce5

   设备 Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048     2099199     1048576   8e  Linux LVM
/dev/sdb2         2099200     4196351     1048576   8e  Linux LVM
/dev/sdb3         4196352     6293503     1048576   8e  Linux LVM
```



```csharp
[root@minglinux-01 ~]\# fdisk -l

磁盘 /dev/sda：32.2 GB, 32212254720 字节，62914560 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0x000236bc

   设备 Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048      411647      204800   83  Linux
/dev/sda2          411648     4605951     2097152   82  Linux swap / Solaris
/dev/sda3         4605952    62914559    29154304   83  Linux

磁盘 /dev/sdb：10.7 GB, 10737418240 字节，20971520 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0xbffc2ce5

   设备 Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048     2099199     1048576   8e  Linux LVM
/dev/sdb2         2099200     4196351     1048576   8e  Linux LVM
/dev/sdb3         4196352     6293503     1048576   8e  Linux LVM
```

（2）创建逻辑卷
 系统默认未安装lvm包，首先通过`yum provides "/*/pvcreate"`搜索软件包，然后输入`yum install -y lvm2` 安装lvm软件包。

> **操作命令：**
>
> - pvcreate /dev/sdb1
> - pvcreate /dev/sdb2
> - pvcreate /dev/sdb3
> - pvdisplay 列出当前的物理卷
> - pvs  列出已存在物理卷
> - pvremove /dev/sdb3 删除物理卷
> - vgcreate 创建卷组
> - vgremove 删除卷组
> - vgdisplay 列出卷组信息
> - vgs 列出已存在卷组
> - lvcreate  -L 大小 -n 名字 vg名   创建逻辑卷
> - lvremove  删除逻辑卷

pvcreate创建物理卷：

```csharp
[root@minglinux-01 ~]\# pvcreate /dev/sdb1
WARNING: dos signature detected on /dev/sdb1 at offset 510. Wipe it? [y/n]: y
  Wiping dos signature on /dev/sdb1.
  Physical volume "/dev/sdb1" successfully created.
[root@minglinux-01 ~]\# pvcreate /dev/sdb2
  Physical volume "/dev/sdb2" successfully created.
[root@minglinux-01 ~]\# pvcreate /dev/sdb3
  Physical volume "/dev/sdb3" successfully created.
```

pvdisplay查看创建的物理卷：



```csharp
[root@minglinux-01 ~]\# pvdisplay
  "/dev/sdb2" is a new physical volume of "1.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sdb2
  VG Name               
  PV Size               1.00 GiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               0bKnTB-IMd3-UJQl-93tE-9x3z-pkkt-6J2epS
   
  "/dev/sdb1" is a new physical volume of "1.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sdb1
  VG Name               
  PV Size               1.00 GiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               2z8qv8-978f-cK0P-RwxG-T9aE-j1mA-gkiZi8
   
  "/dev/sdb3" is a new physical volume of "1.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sdb3
  VG Name               
  PV Size               1.00 GiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               vo47c6-ITPt-RsXZ-wfs4-nzBe-bJMa-KGbqV4
```

pvs查看已存在物理卷：



```csharp
[root@minglinux-01 ~]\# pvs
  PV         VG Fmt  Attr PSize PFree
  /dev/sdb1     lvm2 ---  1.00g 1.00g
  /dev/sdb2     lvm2 ---  1.00g 1.00g
  /dev/sdb3     lvm2 ---  1.00g 1.00g
```

vgcreate创建卷组：



```csharp
[root@minglinux-01 ~]\# vgcreate vg1 /dev/sdb1 /dev/sdb2
  Volume group "vg1" successfully created
```

vgdisplay和vgs查看卷组：



```csharp
[root@minglinux-01 ~]\# vgdisplay 
  --- Volume group ---
  VG Name               vg1
  System ID             
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               1.99 GiB
  PE Size               4.00 MiB
  Total PE              510
  Alloc PE / Size       0 / 0   
  Free  PE / Size       510 / 1.99 GiB
  VG UUID               mWCQjl-Jehp-2fDc-INsd-3K3E-8d3t-ROinr1
   
[root@minglinux-01 ~]\# vgs
  VG  #PV #LV #SN Attr   VSize VFree
  vg1   2   0   0 wz--n- 1.99g 1.99g
```

lvcreate创建逻辑卷：



```csharp
[root@minglinux-01 ~]\# lvcreate -L 100M -n lv1 vg1
WARNING: ext4 signature detected on /dev/vg1/lv1 at offset 1080. Wipe it? [y/n]: y
  Wiping ext4 signature on /dev/vg1/lv1.
  Logical volume "lv1" created.
```

格式化逻辑卷lv1为ext4：



```csharp
[root@minglinux-01 ~]\# mkfs.ext4 /dev/vg1/lv1
mke2fs 1.42.9 (28-Dec-2013)
文件系统标签=
OS type: Linux
块大小=1024 (log=0)
分块大小=1024 (log=0)
Stride=0 blocks, Stripe width=0 blocks
25688 inodes, 102400 blocks
5120 blocks (5.00%) reserved for the super user
第一个数据块=1
Maximum filesystem blocks=33685504
13 block groups
8192 blocks per group, 8192 fragments per group
1976 inodes per group
Superblock backups stored on blocks: 
    8193, 24577, 40961, 57345, 73729

Allocating group tables: 完成                            
正在写入inode表: 完成                            
Creating journal (4096 blocks): 完成
Writing superblocks and filesystem accounting information: 完成 
```

挂载使用：



```csharp
[root@minglinux-01 ~]\# mount /dev/vg1/lv1 /mnt/
[root@minglinux-01 ~]\# df -h
文件系统             容量  已用  可用 已用% 挂载点
/dev/sda3             28G  2.4G   26G    9% /
devtmpfs             901M     0  901M    0% /dev
tmpfs                911M     0  911M    0% /dev/shm
tmpfs                911M  9.5M  902M    2% /run
tmpfs                911M     0  911M    0% /sys/fs/cgroup
/dev/sda1            197M  140M   58M   71% /boot
tmpfs                183M     0  183M    0% /run/user/0
/dev/mapper/vg1-lv1   93M  1.6M   85M    2% /mnt
```

/dev/vg1/lv1和/dev/mapper/vg1-lv1都指向了同一个文件：



```csharp
[root@minglinux-01 ~]\# ls -l /dev/vg1/lv1
lrwxrwxrwx. 1 root root 7 9月  27 23:35 /dev/vg1/lv1 -> ../dm-0
[root@minglinux-01 ~]\# ls -l /dev/mapper/vg1-lv1
lrwxrwxrwx. 1 root root 7 9月  27 23:35 /dev/mapper/vg1-lv1 -> ../dm-0
```

（3）扩容逻辑卷

> - lvresize -L 300M /dev/vg1/lv1 重新设置卷大小
> - e2fsck -f /dev/vg1/lv1 检查磁盘错误（ext4执行）
> - resize2fs /dev/vg1/lv1 更新逻辑卷信息（ext4执行）
> - xfs_growfs /dev/vg1/lv1 xfs 文件系统需要执行

示例命令如下：



```dart
[root@minglinux-01 ~]\# umount /mnt/
[root@minglinux-01 ~]\# lvresize -L 200M /dev/vg1/lv1
  New size (50 extents) matches existing size (50 extents).
[root@minglinux-01 ~]\# e2fsck -f /dev/vg1/lv1
e2fsck 1.42.9 (28-Dec-2013)
第一步: 检查inode,块,和大小
第二步: 检查目录结构
第3步: 检查目录连接性
Pass 4: Checking reference counts
第5步: 检查簇概要信息
/dev/vg1/lv1: 11/25688 files (9.1% non-contiguous), 8896/102400 blocks
[root@minglinux-01 ~]\# resize2fs /dev/vg1/lv1
resize2fs 1.42.9 (28-Dec-2013)
Resizing the filesystem on /dev/vg1/lv1 to 204800 (1k) blocks.
The filesystem on /dev/vg1/lv1 is now 204800 blocks long.

[root@minglinux-01 ~]\# !mount 
mount /dev/vg1/lv1 /mnt/ 
[root@minglinux-01 ~]\# df -h 
文件系统             容量  已用  可用 已用% 挂载点
/dev/sda3             28G  2.4G   26G    9% /
devtmpfs             901M     0  901M    0% /dev
tmpfs                911M     0  911M    0% /dev/shm
tmpfs                911M  9.5M  902M    2% /run
tmpfs                911M     0  911M    0% /sys/fs/cgroup
/dev/sda1            197M  140M   58M   71% /boot
tmpfs                183M     0  183M    0% /run/user/0
/dev/mapper/vg1-lv1  190M  1.6M  175M    1% /mnt
```

（4）缩减逻辑卷（xfs不支持）

> - 先umount
> - e2fsck -f /dev/vg1/lv1 检查磁盘错误（ext）
> - resize2fs /dev/vg1/lv1 100M 更新逻辑卷信息（ext）
> - lvresize -L 100M /dev/vg1/lv1 重新设置卷大小

示例命令如下：



```csharp
[root@minglinux-01 ~]\# umount /mnt/
[root@minglinux-01 ~]\# e2fsck -f /dev/vg1/lv1
e2fsck 1.42.9 (28-Dec-2013)
第一步: 检查inode,块,和大小
第二步: 检查目录结构
第3步: 检查目录连接性
Pass 4: Checking reference counts
第5步: 检查簇概要信息
/dev/vg1/lv1: 11/49400 files (9.1% non-contiguous), 11884/204800 blocks
[root@minglinux-01 ~]\# resize2fs /dev/vg1/lv1 100M
resize2fs 1.42.9 (28-Dec-2013)
Resizing the filesystem on /dev/vg1/lv1 to 102400 (1k) blocks.
The filesystem on /dev/vg1/lv1 is now 102400 blocks long.

[root@minglinux-01 ~]\# lvresize -L 100M /dev/vg1/lv1
  WARNING: Reducing active logical volume to 100.00 MiB.
  THIS MAY DESTROY YOUR DATA (filesystem etc.)
Do you really want to reduce vg1/lv1? [y/n]: y
  Size of logical volume vg1/lv1 changed from 200.00 MiB (50 extents) to 100.00 MiB (25 extents).
  Logical volume vg1/lv1 successfully resized.
[root@minglinux-01 ~]\# lvs
  LV   VG  Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  lv1  vg1 -wi-a----- 100.00m 
```

最后再次挂载即可。

xfs扩容：



```csharp
[root@minglinux-01 ~]\# !mount
mount /dev/vg1/lv1 /mnt/ 
[root@minglinux-01 ~]\# ls /mnt/
[root@minglinux-01 ~]\# touch /mnt/123.txt
[root@minglinux-01 ~]\# echo "abc" > !$
echo "abc" > /mnt/123.txt
[root@minglinux-01 ~]\# lvs
  LV   VG  Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  lv1  vg1 -wi-ao---- 100.00m                                                    
[root@minglinux-01 ~]\# lvresize -L 300M /dev/vg1/lv1
  Size of logical volume vg1/lv1 changed from 100.00 MiB (25 extents) to 300.00 MiB (75 extents).
  Logical volume vg1/lv1 successfully resized.
[root@minglinux-01 ~]\# lvs
  LV   VG  Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  lv1  vg1 -wi-ao---- 300.00m
```

此时`df -h`查看磁盘没有改变：



```csharp
[root@minglinux-01 ~]\# df -h
文件系统             容量  已用  可用 已用% 挂载点
/dev/sda3             28G  2.4G   26G    9% /
devtmpfs             901M     0  901M    0% /dev
tmpfs                911M     0  911M    0% /dev/shm
tmpfs                911M  9.5M  902M    2% /run
tmpfs                911M     0  911M    0% /sys/fs/cgroup
/dev/sda1            197M  140M   58M   71% /boot
tmpfs                183M     0  183M    0% /run/user/0
/dev/mapper/vg1-lv1   97M  5.2M   92M    6% /mnt
```

这里需要执行一个`xfs_growfs`命令，如下所示：



```csharp
[root@minglinux-01 ~]\# xfs_growfs /dev/vg1/lv1
meta-data=/dev/mapper/vg1-lv1    isize=512    agcount=4, agsize=6400 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=0 spinodes=0
data     =                       bsize=4096   blocks=25600, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=855, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 25600 to 76800
[root@minglinux-01 ~]\# df -h
文件系统             容量  已用  可用 已用% 挂载点
/dev/sda3             28G  2.4G   26G    9% /
devtmpfs             901M     0  901M    0% /dev
tmpfs                911M     0  911M    0% /dev/shm
tmpfs                911M  9.5M  902M    2% /run
tmpfs                911M     0  911M    0% /sys/fs/cgroup
/dev/sda1            197M  140M   58M   71% /boot
tmpfs                183M     0  183M    0% /run/user/0
/dev/mapper/vg1-lv1  297M  5.5M  292M    2% /mnt
```

（5）扩展卷组

> - fdisk /dev/sdb 新增/dev/sdb5（逻辑分区8e）2G
> - pvreate /dev/sdb5
> - vgextend vg1 /dev/sdb5
> - lvresize -L 100M /dev/vg1/lv1

这里将/dev/sdb3加入到vg1卷组，vg1大小就扩展为3G，然后就可以重新设置逻辑卷的大小。命令如下：

```csharp
[root@minglinux-01 ~]\# vgextend vg1 /dev/sdb3
  Volume group "vg1" successfully extended
[root@minglinux-01 ~]\# vgs
  VG  #PV #LV #SN Attr   VSize  VFree 
  vg1   3   1   0 wz--n- <2.99g <2.70g
```

扩容lv(vg满足容量要求)：

```bash
 lvextend -L +20GB /dev/mapper/ubuntu--vg-ubuntu--lv

 、 /dev/mapper/ubuntu--vg-ubuntu--lv
```



### 二、磁盘故障小案例

由于我们之前写了配置命令到/etc/fstab文件里面，当我们做完lvm实验后重启虚假机发现进不了系统了。类似这样的问题往往是因为磁盘挂载异常的问题。
 这里我们知道问题所在，所以解决方法就是输入root密码后在命令行里输入`vi /etc/fstab`编辑该配置文件按`dd`删除我们之前增加的行，然后`reboot`即可正常登录系统。


转载自：https://www.jianshu.com/p/154c69a7a5d2
