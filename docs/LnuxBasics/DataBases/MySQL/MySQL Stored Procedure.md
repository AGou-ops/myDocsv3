# MySQL 存储过程

存储过程和函数是事先经过编译并存储在数据库的一段SQL语句的集合，调用存储过程和函数可以简化开发人员的很多工作，减少数据和应用服务器之间的传输，对于提高数据处理的效率是有好处的。
存储过程和函数的区别在于函数必须有返回值，而存储过程没有。

## 存储过程增删改

简单样例及解释：

```sql
mysql> delimiter //		-- 结束语分隔符
mysql> CREATE PROCEDURE citycount (IN country CHAR(3), OUT cities INT)		-- in：输入值，需要调用方传入值，out：表示作为输出值，即返回值，inout：既可以当做输出值又可以当做输入值
       BEGIN
         SELECT COUNT(*) INTO cities FROM world.city
         WHERE CountryCode = country;
       END//
mysql> SET @country:='China'
mysql> CALL citycount(@country, @cities);		-- 调用存储过程
```

删除存储过程：

```sql
mysql> drop procedure [if exists] <Procedure_name>;		-- 存储过程只能一个个删除，不能批量删除
```

修改存储过程：

```sql
mysql> show create procedure <Procedure_name>;
```





