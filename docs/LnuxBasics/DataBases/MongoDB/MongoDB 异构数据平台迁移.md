# MongoDB 异构数据平台迁移

## Mysql TO MongoDB

mysql —–>mongodb
world数据库下city表进行导出，导入到mongodb

（1）mysql开启安全路径

```sql
vim /etc/my.cnf   --->添加以下配置
secure-file-priv=/tmp

--重启数据库生效
/etc/init.d/mysqld restart
```

（2）导出mysql的city表数据

```sql
mysql>select * from world.city into outfile '/tmp/city.csv' fields terminated by ',';
```

（3）处理备份文件

```sql
desc world.city
 ID          | int(11)  | NO   | PRI | NULL    | auto_increment |
| Name        | char(35) | NO   |     |         |                |
| CountryCode | char(3)  | NO   | MUL |         |                |
| District    | char(20) | NO   |     |         |                |
| Population

vim /tmp/city.csv   ----> 添加第一行列名信息

ID,Name,CountryCode,District,Population
```

(4)在mongodb中导入备份

```sql
mongoimport --port 28018 -d world  -c city --type=csv --headerline  --file  /tmp/city.csv

use world
db.city.find({CountryCode:"CHN"});
```

思考：

```sql
world共100张表，全部迁移到mongodb

select * from world.city into outfile '/tmp/world_city.csv' fields terminated by ',';

select concat("select * from ",table_schema,".",table_name ," into outfile '/tmp/",table_schema,"_",table_name,".csv' fields terminated by ',';")
from information_schema.tables where table_schema ='world';

导入：
    提示，使用infomation_schema.columns + information_schema.tables
```

mysql导出csv：

```sql
select * from test_info   
into outfile '/tmp/test.csv'   
fields terminated by ','　　　 ------字段间以,号分隔
optionally enclosed by '"'　　------字段用"号括起
escaped by '"'   　　　　　　 ------字段中使用的转义符为"
lines terminated by '\r\n';　　------行以\r\n结束
```

mysql导入csv：

```sql
load data infile '/tmp/test.csv'
into table test_info
fields terminated by ','
optionally enclosed by '"'
escaped by '"'
lines terminated by '\r\n';
```