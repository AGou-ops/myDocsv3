## MySQL 函数

存储的函数是返回单个值的特殊类型的存储程序。您使用存储的函数来封装在SQL语句或存储的程序中可重用的常用公式或业务规则。与存储过程不同，您可以在SQL语句中使用存储的函数，也可以在表达式中使用。 这有助于提高程序代码的可读性和可维护性。

## 函数增删改

```sql
mysql> CREATE FUNCTION <function_name>(param1,param2,…)
        RETURNS <datatype>
       [NOT] DETERMINISTIC
       statement
```

调用函数：

```sql
mysql> select <function_name>(param1,param2...);
```

删除函数：

```sql
mysql> drop function [if exists] <function_name>;
```

查看函数内容：

```sql
mysql> show create function <function_name>;
```

:information_source:其他：定义局部变量`DECLARE i int DEFAULT 1; `

## 异常捕获及处理

```sql
/*删除存储过程*/
DROP PROCEDURE IF EXISTS proc2;
/*声明结束符为$*/
DELIMITER $
/*创建存储过程*/
CREATE PROCEDURE proc2(a1 int,a2 int)
  BEGIN
    /*声明一个变量，标识是否有sql异常*/
    DECLARE hasSqlError int DEFAULT FALSE;
    /*在执行过程中出任何异常设置hasSqlError为TRUE*/
    `DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET hasSqlError=TRUE;`

    /*开启事务*/
    START TRANSACTION;
    INSERT INTO test1(a) VALUES (a1);
    INSERT INTO test1(a) VALUES (a2);

    /*根据hasSqlError判断是否有异常，做回滚和提交操作*/
    IF hasSqlError THEN
      ROLLBACK;
    ELSE
      COMMIT;
    END IF;
  END $
/*结束符置为;*/
DELIMITER ;
```

## 流程控制语句

### IF

语法：

```sql
IF search_condition THEN statement_list
    [ELSEIF search_condition THEN statement_list]...
    [ELSE statement_list]
END IF
```

简单示例：

```sql
-- 终端短语句中使用，if(条件表达式,值1,值2)，当条件表达式值为true时返回值1，反之返回值2
SELECT id 编号,if(sex=1,'男','女') 性别,name 姓名 FROM t_user;
-- 函数中使用
IF age>20 THEN SET @count1=@count1+1;
    ELSEIF age=20 THEN @count2=@count2+1;
    ELSE @count3=@count3+1;
END IF;
```

### CASE

语法：

```sql
CASE case_value
    WHEN when_value THEN statement_list
    [WHEN when_value THEN statement_list]...
    [ELSE statement_list]
END CASE
```

简单示例：

```sql
-- 终端段语句中使用
SELECT id 编号,(CASE sex WHEN 1 THEN '男' ELSE '女' END) 性别,name 姓名 FROM t_user;
-- 函数中使用
CASE age
    WHEN 20 THEN SET @count1=@count1+1;
    ELSE SET @count2=@count2+1;
END CASE;
代码也可以是下面的形式：
CASE
    WHEN age=20 THEN SET @count1=@count1+1;
    ELSE SET @count2=@count2+1;
END CASE;
```

### while、repeat、loop循环

**mysql中循环有3种写法：**

1. while：类似于java中的while循环
2. repeat：类似于java中的do while循环
3. loop：类似于java中的while(true)死循环，需要在内部进行控制。

#### 结束循环

```sql
-- 结束本次循环，类似于java中的continue
iterate 循环标签;
-- 退出循环，类似于java中的break
leave 循环标签;
```

#### while

语法：

```sql
[begin_label:] WHILE search_condition DO
    statement list
END WHILE [end_label]
```

简单示例：

```sql
a:WHILE @count<100 DO
    SET @count=@count+1;
END WHILE a;
```

#### repeat

语法：

```sql
[begin_label:] REPEAT
    statement_list
    UNTIL search_condition
END REPEAT [end_label]
```

简单示例：

```sql
REPEAT
    SET @count=@count+1;
    UNTIL @count=100
END REPEAT;
-- 
CREATE PROCEDURE proc6(v_count int)
  BEGIN
    DECLARE i int DEFAULT 1;
    a:REPEAT
      INSERT into test1 values (i);
      SET i=i+1;
    UNTIL i>v_count END REPEAT;
  END $
```

#### loop

语法：

```sql
[begin_label:]LOOP
    statement_list
END LOOP [end_label]
```

简单样例：

```sql
add_num:LOOP
    SET @count=@count+1;
END LOOP add_num;
-- 
CREATE PROCEDURE proc7(v_count int)
  BEGIN
    DECLARE i int DEFAULT 0;
    a:LOOP
      SET i=i+1;
      /*当i>v_count的时候退出循环*/
      IF i>v_count THEN
        LEAVE a;
      END IF;
      INSERT into test1 values (i);
    END LOOP a;
  END $
```

> 部分样例来源于网络。



