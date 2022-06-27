# MongoDB 数据备份和还原

MongoDB数据备份（恢复）的几种方式或工具：

- mongoexport、mongoimport：备份导出格式为`JSON`格式或者`CSV`格式；
- mongodump、mongorestore：备份导出格式为`BSON`格式；

> JSON可读性强但体积较大，BSON则是二进制文件，体积小但对人类几乎没有可读性。

- Back Up with Filesystem Snapshots
- Back Up with cp or rsync

## mongodbexport、mongoimport

### mongodbexport

Mongodb中的`mongoexport`工具可以把一个collection导出成JSON格式或CSV格式的文件。
可以通过参数指定导出的数据项，也可以根据指定的条件导出数据。
（1）版本差异较大
（2）异构平台数据迁移

mongoexport具体用法如下所示：

```python
$ mongoexport --help  
* 参数说明：
-h:指明数据库宿主机的IP
-u:指明数据库的用户名
-p:指明数据库的密码
-d:指明数据库的名字
-c:指明collection的名字
-f:指明要导出那些列
-o:指明到要导出的文件名
-q:指明导出数据的过滤条件
--authenticationDatabase admin
```

备份app库下的vast集合
创建集合并插入数据：

```python
admin> use app
switched to db app

app> for(i=0;i<200;i++){ db.vast.insert({"id":i,"name":"test","age":70,"date":new Date()}); }
app> db.vast.find()
mongoexport --port 28018 -d app -c vast  -o /mongodb/vast.json
```

注：备份文件的名字可以自定义，默认导出了JSON格式的数据。

如果我们需要导出CSV格式的数据，则需要使用—-type=csv参数：

```python
$ mongoexport --port 28018 -d app -c vast --type=csv -f id,name,age,date  -o /mongodb/vast.csv
```

### mongoimport

Mongodb中的`mongoimport`工具可以把一个特定格式文件中的内容导入到指定的collection中。该工具可以导入JSON格式数据，也可以导入CSV格式数据。具体使用如下所示：

```python
$ mongoimport --help
× 参数说明：
-h:指明数据库宿主机的IP
-u:指明数据库的用户名
-p:指明数据库的密码
-d:指明数据库的名字
-c:指明collection的名字
-f:指明要导入那些列
-j, --numInsertionWorkers=<number>  number of insert operations to run concurrently                                                  (defaults to 1)
//并行
```

示例：先删除vast中的数据，并验证

```python
app> db.vast.remove({})
```

然后再导入上面导出的vasts.dat文件中的内容

```python
mongoimport --port 28018 -d app  -c vast    /mongodb/vast.json
```

上面演示的是导入JSON格式的文件中的内容，如果要导入CSV格式文件中的内容，则需要通过–type参数指定导入格式，具体如下所示：
先删除数据

```python
app> db.vast.remove({})
```

再导入之前导出的vast.csv文件
错误的恢复

```python
mongoimport  --port 28018 -d app  -c vast --type=csv -f id,name,age,date  --file   /mongodb/vast.csv
或
mongoimport  --port 28018   -d app  -c vast --type=csv --headerline --file  /mongodb/vast.csv

提示：--headerline:指明第一行是列名，不需要导入。
```

## mongodump、mongorestore

mongodump能够在Mongodb运行时进行备份，它的工作原理是对运行的Mongodb做查询，然后将所有查到的文档写入磁盘。但是存在的问题时使用mongodump产生的备份不一定是数据库的实时快照，如果我们在备份时对数据库进行了写入操作，则备份出来的文件可能不完全和Mongodb实时数据相等。另外在备份时可能会对其它客户端性能产生不利的影响。

### mongodump

命令参数：

```python
mongodump <options>

--host <hostname><:port>, -h <hostname><:port>  # 指定备份的主机ip和端口号，默认值localhost:27017
--port # 指定端口号 默认27017

--username <username>, -u <username> # 指定用户名
--password <password>, -p <password> # 指定密码
--authenticationDatabase <dbname> # 指定认证的数据库
--authenticationMechanism <name> # 指定认证的算法 ，默认值 SCRAM-SHA-1
--db <database>, -d <database> # 指定备份的数据库，未指定的话，备份所有的数据库，但不包含local库
--collection <collection>, -c <collection> # 指定备份的集合，未指定则备份指定库中的所有集合。
--query <json>, -q <json>  # 指定 json 作为查询条件。来备份我们过滤后的数据。
--queryFile <path>  # 指定 json 文档路径，以该文档的内容作为查询条件，来备份我们过滤后的数据。
--quit # 通过抑制 MongoDB的复制，连接等活动，来实现备份。
--gzip  # 开启压缩，3.2版本后可以使用，输出为文件的话会带有后缀.gz
--out <path>, -o <path>  # 输出的目录路径
--repir # 修复数据时使用 下面有详细介绍
--oplog # mongodump 会将 mongodump 执行期间的 oplog 日志 输出到文件 oplog.bson，这就意味着从备份开始到备份结束的数据操作我们都可以记录下来。
--archive <file> # 输出到单个存档文件或者是直接输出。
--dumpDbUsersAndRoles # 只有在 使用 --db 时才适用，备份数据库的包含的用户和角色。
--excludeCollection string # 排除指定的集合，如果要排除多个，使用多个--excludeCollection 
--numParallelCollections int, -j int # 并行导出的集合数，默认为4
```

基础使用：

```bash
# 全库备份
mkdir /mongodb/backup
$ mongodump --host=test.agou-ops.top  --port 28018 -o /mongodb/backup

# 备份test库
$ mongodump  --port 28018 -d test -o /mongodb/backup/

# 备份world库下的city集合
$ mongodump  --port 28018 -d world -c city -o /mongodb/backup/

# 压缩备份
$ mongodump  --port 28018 -d app -o -c vast /mongodb/backup/ --gzip
```

### mongorestore

命令格式：

```bash
mongorestore <options> <directory or file to restore>
  
--help # 查看帮助
--quiet # 通过抑制 MongoDB的复制，连接等活动，来实现数据恢复。

--host <hostname><:port>, -h <hostname><:port>  # 指定恢复的主机ip和端口号，默认值localhost:27017
--port # 指定端口号 默认27017

--username <username>, -u <username> # 指定用户名
--password <password>, -p <password> # 指定密码
--authenticationDatabase <dbname> # 指定认证的数据库
--authenticationMechanism <name> # 指定认证的算法 ，默认值 SCRAM-SHA-1
--objcheck # 开启验证，验证还原操作，确保没有无效的文档插入数据库。会有较小的性能影响
--oplogReplay # 恢复备份数据并将 mongodump 执行期间的操作(记录在导出的日志)恢复。
--oplogLimit  # 指定恢复
--oplogFile # 指定 Oplog 路径
--keepIndexVersion # 阻止mongorestore在还原过程中将索引升级到最新版本。
--restoreDbUsersAndRoles # 还原指定的数据库用户和角色。
--maintainInsertionOrder # 默认值为False,如果为 True,mongorestore 将按照输入源的文档顺序插入，否则是 随机执行插入。
--numParallelCollections int, -j int # 指定并行恢复的集合数。
--numInsertionWorkersPerCollection int # 默认值为 1，指定每个集合恢复的并发数，大数据量导入增加该值可提高 恢复速度。
--gzip # 从压缩文档中 恢复。
--archive # 从归档文件中恢复。
--dir # 指定还原数据储存目录。
```

基础使用：

```bash
# 恢复app1库
$ mongorestore --host=test.agou-ops.top  --port 28018 -d app1  /mongodb/backup/app/

# 恢复test库下的vast集合
$ mongorestore  --port 28018 -d app2 -c vast /mongodb/backup/app/vast.bson

# drop表示恢复的时候把之前的集合drop掉
$ mongorestore  --port 28018 -d app -c vast --drop /mongodb/backup/app/vast.bson
```

>  :warning:注意：
>
> 1、如果要恢复的表已经存在，可以添加`--drop` ，自动删除原表
> 2、如果有用户验证，需要使用root或者需要备份的对象有权限的用户才可以
>
> ```python
> # 而且要添加对用户的验证库   --authenticationDatabase
> -uroot -proot123 --authenticationDatabase admin
> ```

## 直接拷贝或快照数据文件

这个备份数据库最最简单的方案，你可以将 `data/` 里的所有文件一并复制到任意安全的地方，在复制之前应先停止对数据库的写入操作，以保证数据一致性。使用 `db.fsyncLock()` 命令停止写入操作。

### 拷贝数据文件

直接拷贝文件系统中的数据文件。

:warning:需要特别注意的一点是：备份复制产生的底层数据**不支持时间点恢复副本集和难以管理对于较大的分片集群**(sharded-cluster)。此外,这些备份更大，因为它们包括索引和复制底层存储填充和碎片。相比之下，mongodump创建占空间更小的备份。

因此不推荐使用该备份方式。

### 使用系统快照备份

参考： https://docs.mongodb.com/manual/tutorial/backup-with-filesystem-snapshots/

## 附录：定期备份脚本



```shell
#--------------------------------------------
# mongodb定时备份脚本
#--------------------------------------------
#! /bin/bash

# 命令执行路径
MONGOD=/usr/bin/mongodump
OUT_DIR=/data/backup/mongo/mongod_bak_tmp
# 压缩后的备份存放路径
TAR_DIR=/data/backup/mongo/mongod_bak_list
# 压缩时间为当前系统时间/删除时间为七天前
TAR_DATE=$(date +%F)
DEL_DATE=$(date +%F -d "-7 day")

# 数据库配置
DB_HOST=ip:port
DB_NAME==******
DB_AUTHSOURCE=admin
DB_USERNAME=******
DB_PASSWORD=******

if [[ ! -d ${OUT_DIR} ]];then
mkdir -p ${OUT_DIR}
fi

if [[ ! -d ${TAR_DIR} ]];then
mkdir -p ${TAR_DIR}
fi

TAR_BAK="mongo_bak_${TAR_DATE}.tar.gz"
cd ${OUT_DIR}
rm -rf ${OUT_DIR}/*
${MONGOD} -h ${DB_HOST} -u ${DB_USERNAME} -p ${DB_PASSWORD} --authenticationDatabase ${DB_AUTHSOURCE} -d ${DB_NAME} -o ${OUT_DIR}
# 压缩归档
tar -zcvPf ${TAR_DIR}/${TAR_BAK} ${OUT_DIR}
# 清除历史归档(七天前)
for i in `find ${TAR_DIR} -maxdepth 1 \( -type d -o -type l \)`;
do
        find -L $i -maxdepth 1 -type f \( -name "*${DEL_DATE}*" -a -name "*.tar.gz" \) -exec rm -f {} \;
done


## 
crontab_reload(){
    echo "30 0 * * * ${SCRIPT_DIR}/auto/crontab/mongo_back.sh" > /var/spool/cron/root
    # 重启crontab
    /sbin/service crond restart
    service crond status
    echo "get current crontab"
    crontab -l
    echo "crontab reload done"
}
```

## 参考链接

- MongoDB database-tools: https://docs.mongodb.com/database-tools/
- MongoDB backups documentation: https://docs.mongodb.com/manual/core/backups/