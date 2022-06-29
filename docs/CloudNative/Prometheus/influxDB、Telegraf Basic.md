# influxDB/Telegraf basic

## 简介及相关知识

>Telegraf 是一个用 Go 编写的代理程序，可收集系统和服务的统计数据，并写入到 InfluxDB 数据库。内存占用小，通过插件系统可轻松添加支持其他服务的扩展。
>
>Influxdb 是一个开源的分布式时序、时间和指标数据库，使用 Go 语言编写，无需外部依赖。Influxdb 有如下三大特性：
>
>①、基于时间序列，支持与时间有关的相关函数（如最大，最小，求和等）；
>
>②、可度量性：你可以实时对大量数据进行计算；
>
>③、基于事件：它支持任意的事件数据；
>
>**2、为什么要用telegraf和influxdb？**
>
>①、在数据采集和平台监控系统中，Telegraf 可以采集多种组件的运行信息，而不需要自己手写脚本定时采集，降低数据获取的难度；
>
>②、Telegraf 配置简单，只要有基本的 Linux 基础即可快速上手；
>
>③、Telegraf 按照时间序列采集数据，数据结构中包含时序信息，influxdb就是为此类数据设计而来，使用 Influxdb 可以针采集得到的数据完成各种分析计算操作；
>
>以上来源于：https://www.cnblogs.com/imyalost/p/9873621.html

时序数据库主要用于存储基于时间序列的指标数据，例如一个Web页面的PV、UV等指标，将其定期采集，并打上时间戳，就是一份基于时间序列的指标。时序数据库通常用来配合前端页面来展示一段时间的指标曲线。

## 快速安装与启动

官方下载地址： https://portal.influxdata.com/downloads/



安装`influxDB`:

```bash
wget -qO- https://repos.influxdata.com/influxdb.key | gpg -- dearmor | sudo tee /etc/apt/trusted.gpg.d/influxdb.gpg > /dev/null
export DISTRIB_ID=$(lsb_release -si); export DISTRIB_CODENAME=$(lsb_release -sc)
echo "deb [signed-by=/etc/apt/trusted.gpg.d/influxdb.gpg] https://repos.influxdata.com/${DISTRIB_ID,,} ${DISTRIB_CODENAME} stable" | sudo tee /etc/apt/sources.list.d/influxdb.list > /dev/null

sudo apt-get update && sudo apt-get install influxdb2
```

安装`Telegraf`：

```bash
wget https://dl.influxdata.com/telegraf/releases/telegraf_1.22.1-1_amd64.deb
sudo dpkg -i telegraf_1.22.1-1_amd64.deb
```

启动服务：

```bash
systemctl start influxdb
systemctl start telegraf
```

## Telegraf收集nginx状态到influxDB并用Grafana查询展示

### telegraf简单配置

配置`Telegraf`(默认deb安装的位置为`/etc/telegraf/telegraf.conf`)：

```bash
# 修改配置文件相关内容，没有该文件的话，可以使用以下命令初始化个默认的配置文件
telegraf --sample-config > telegraf.conf		# 同目录下也有个sample文件，可以直接复制改名
```

需要略微修改的地方：

![image-20220422144857745](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/image-20220422144857745.png)

将`122`行和`129`行取消注释，具体以当前文件为准。

![image-20220422150746282](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/image-20220422150746282.png)

大概`5761`行和`5763`行，取消注释[[inputs.nginx]]，注意，这里的`urls`填写的是你nginx的`nginx-status`页面，

如果你没有该页面，或者该模块没有被编译进nginx，参考这篇文章👉🏻：https://www.tecmint.com/enable-nginx-status-page/



重启telegraf使配置生效：

```bash
systemctl restart telegraf
```

### influxDB中查看收集到的数据

```bash
root@localhost:~\# influx
Connected to http://127.0.0.1:8086 version 1.8.10
InfluxDB shell version: 1.8.10
> show databases
name: databases
name
----
_internal
telegraf
> use telegraf
Using database telegraf
> show measurements
name: measurements
name
----
cpu
disk
diskio
kernel
mem
nginx
processes
swap
system
> select * from nginx
name: nginx
time                accepts active handled host      port reading requests server    waiting writing
----                ------- ------ ------- ----      ---- ------- -------- ------    ------- -------
1650607510000000000 1       1      1       localhost 80   0       1        localhost 0       1
1650607520000000000 1       1      1       localhost 80   0       2        localhost 0       1
1650607530000000000 2       1      2       localhost 80   0       3        localhost 0       1
1650607540000000000 2       1      2       localhost 80   0       4        localhost 0       1
1650607550000000000 2       1      2       localhost 80   0       5        localhost 0       1
1650607560000000000 2       1      2       localhost 80   0       6        localhost 0       1
1650607570000000000 2       1      2       localhost 80   0       7        localhost 0       1
1650607580000000000 2       1      2       localhost 80   0       8        localhost 0       1
1650607590000000000 2       1      2       localhost 80   0       9        localhost 0       1
1650607600000000000 2       1      2       localhost 80   0       10       localhost 0       1
1650607610000000000 2       1      2       localhost 80   0       11       localhost 0       1
```

### Grafana中查询influxDB并展示

添加`influxDB`数据源很简单，填好`URL`和`Database`为`telegraf`就可以了，这里我就不再赘述.

![image-20220422151431964](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/image-20220422151431964.png)

其他高级操作自行摸索。。。：

![image-20220422151521757](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/image-20220422151521757.png)

## 附录：influxdb 基本操作

:warning: `influxdb`的本地客户端cli工具名称叫做：`influx`

```bash
#创建数据库
create database "db_name"
#显示所有的数据库
show databases
 
#删除数据库
drop database "db_name"
 
#使用数据库
use db_name

#显示该数据库中所有的表
show measurements
 
#创建表，直接在插入数据的时候指定表名
insert test,host=127.0.0.1,monitor_name=test count=1
 
#删除表
drop measurement "measurement_name"
```

经典CRUD操作：

```bash
# 增
> use metrics
Using database metrics
> insert test,host=127.0.0.1,monitor_name=test count=1
curl -i -XPOST 'http://127.0.0.1:8086/write?db=metrics' -- data-binary 'test,host=127.0.0.1,monitor_name=test count=1'
# 查
> select * from test order by time desc
curl -G 'http://127.0.0.1:8086/query?pretty=true' -- data-urlencode "db=metrics" -- data-urlencode "q=select * from test order by time desc"
# 改
> insert test,host=127.0.0.1,monitor_name=test count=1
# 删
drop measurement "measurement_name"
```

导入导出数据：

```bash
influx_inspect export -datadir "/var/lib/influxdb/data" -waldir "/var/lib/influxdb/wal" -out "geoip2influx.bak" -database "geoip2influx" # -start "2021-09-10T00:00:00Z"
其中：
  datadir: influxdb的数据存放位置
  waldir: influxdb的wal目录
  out: 输出文件
  database: 导出的db名称
  start: 从什么时间导出
  
  
  
influx -import -path=/home/agou-ops/geoip2influx.bak -precision=ns

其中：
  import: 标识导入
  path: 导入文件
  precision: 导入的数据时间精度
```



用户管理：

```bash
#显示用户
show users
#创建用户
create user "username" with password 'password'
#创建管理员权限用户
create user "username" with password 'password' with all privileges
#删除用户
drop user "username"
```

其他：

```sql
SHOW FIELD KEYS -- 查看当前数据库所有表的字段
SHOW series from pay -- 查看key数据
SHOW TAG KEYS FROM "pay" -- 查看key中tag key值
SHOW TAG VALUES FROM "pay" WITH KEY = "merId" -- 查看key中tag 指定key值对应的值
SHOW TAG VALUES FROM cpu WITH KEY IN ("region", "host") WHERE service = 'redis'
DROP SERIES FROM <measurement_name[,measurement_name]> WHERE <tag_key>='<tag_value>' -- 删除key
SHOW CONTINUOUS QUERIES   -- 查看连续执行命令
SHOW QUERIES  -- 查看最后执行命令
KILL QUERY <qid> -- 结束命令
SHOW RETENTION POLICIES ON mydb  -- 查看保留数据
--  查询数据
SELECT * FROM /.*/ LIMIT 1  -- 查询当前数据库下所有表的第一行记录
select * from pay  order by time desc limit 2
select * from  db_name."POLICIES name".measurement_name -- 指定查询数据库下数据保留中的表数据 POLICIES name数据保留
--  删除数据
delete from "query" -- 删除表所有数据，则表就不存在了
drop MEASUREMENT "query"   -- 删除表（注意会把数据保留删除使用delete不会）
DELETE FROM cpu
DELETE FROM cpu WHERE time < '2000-01-01T00:00:00Z'
DELETE WHERE time < '2000-01-01T00:00:00Z'
DROP DATABASE “testDB” -- 删除数据库
DROP RETENTION POLICY "dbbak" ON mydb -- 删除保留数据为dbbak数据
DROP SERIES from pay where tag_key='' -- 删除key中的tag

SHOW SHARDS  -- 查看数据存储文件
DROP SHARD 1
SHOW SHARD GROUPS
SHOW SUBSCRIPTIONS
```

## 参考链接

- 数据采集工具Telegraf：简介及安装：https://www.cnblogs.com/imyalost/p/9873621.html
- InfluxDB documentation：https://docs.influxdata.com/influxdb/v2.2/install/?t=Linux

- influxdb基本操作：https://blog.csdn.net/u010185262/article/details/53158786