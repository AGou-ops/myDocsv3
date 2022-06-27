# SQL 复习

- `show grants for 'test'@'localhost';`

- `revoke select on test.* from test@localhost;`

- `drop database if exists test;`

- `create table test7(
-> a int not null comment '字段a',
-> b int not null comment '字段b',
-> PRIMARY KEY (a,b)`

- > 外键注意事项:
注意⼏点：
• 两张表中需要建⽴外键关系的字段类型需要⼀致
• 要设置外键的字段不能为主键
• 被引⽤的字段需要为主键
• 被插⼊的值在外键表必须存在，如上⾯向test6中插⼊ts5_a为2的时候报错了，原
因：2的值在test5表中不存在

- 删除表所有内容：`delete from test11;`
- 修改表名 `alter table  表名rename [to]  新表名;`
- 表设置备注 `alter table  表名comment '备注信息';`
- 复制表 只复制表结构 `create table  表名like  被复制的表名;`
- 复制表结构+数据 `create table  表名[as] select  字段,...  from  被复制的表[where  条件];` 如：`mysql> create table test13 as select * from test11;`
- 增加列：`alter table test14 add column b  int  not  null  default  0  comment '字段b';`
- 修改列 `alter table  表名modify column  列名新类型[约束];` 或者`alter table  表名change column  列名新列名新类型[约束];`
**2种⽅式区别：modify不能修改列名，change可以修改列名**
- 删除列` alter table  表名drop column  列名;`
- 单表更新 语法：` update  表名[[as]  别名] set [别名.]字段=  值,[别名.]字段=  值[where条件];`
- 多表更新 可以同时更新多个表中的数据  语法：` update  表1 [[as]  别名1],表名2 [[as]  别名2] set [别名.]字段=  值,[别名.]字段=  值[where条件]`
- 别名的⽅式更新多个表的多个字段`update test1 as t1,test2 t2 set t1.a  =  2  ,t1.b  =  2, t2.c1  =  10  - where t1.a  = t2.c1;`
- `delete t1 from test1 t1 where t1.a>100;`

- `delete t2,t1 from test1 t1,test2 t2 where t1.a=t2.c2;`
- od函数，对两个参数取模运算。isnull函数，判断参数是否为空，若为空返回1，否则返回0。ifnull函数，2个参数，判断第⼀个参数 是否为空，如果为空返回第2个参数的值，否则返回第1个参数的值。
- `select a as  '列1',b as '列2' from test1;`

- `select * from test6 t where t.age  in  (10,15,20,30);`

- `select a.id订单编号,a.price订单⾦额from t_order a where a.price>=100  order by a.price  desc;`

- 分页查询: `select  列from  表名limit  (page -  1) * pageSize,pageSize;`

- 使用`year`函数进行查询: `SELECT id 编号,birth 出⽣⽇期,year(birth) 出⽣年份,name 姓名 from
student ORDER BY 出⽣年份 asc,id asc;`:

- 单字段分组查询: 查询用户下单数量 `SELECT user_id ⽤户id, COUNT(id) 下单数量 FROM t_order GROUP BY user_id;`

- 多字段分组查询: `SELECT user_id ⽤户id, the_year 年份, COUNT(id) 下单数量 FROM t_order GROUP BY user_id , the_year;`

- 分组查询之前的筛选: `SELECT user_id ⽤户id, COUNT(id) 下单数量 FROM t_order t WHERE t.the_year = 2018 GROUP BY user_id;`

- 如要进行分组后查询, 则需要使用`having`关键字: `SELECT user_id ⽤户id, COUNT(id) 下单数量 FROM t_order t WHERE t.the_year = 2018 GROUP BY user_id HAVING count(id)>=2;`

- 分组后排序: `SELECT user_id ⽤户id, max(price) 最⼤⾦额 FROM t_order t GROUP BY user_id ORDER BY 最⼤⾦额 desc;`

- 当同时使用 `where`, `group by`, `having`, `order by`, `limit`关键词时, 有以下先后顺序:

```sql
-- 从上到下
select 列 from
表名
where [查询条件]
group by [分组表达式]
having [分组过滤条件]
order by [排序条件]
limit [offset,] count;
```

- 

- 

- 

- 

- 

- 

- 

- 