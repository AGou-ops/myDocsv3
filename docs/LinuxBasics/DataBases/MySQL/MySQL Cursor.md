# MySQL游标

游标（Cursor）是处理数据的一种方法，为了查看或者处理结果集中的数据，游标提供了在结果集中一次一行遍历数据的能力。:warning:**游标只能在存储过程和函数中使用。**

游标的处理过程：4步

- 声明游标`declare`：没有检索数据，只是定义要使用的select语句

- 打开游标`open`：打开游标以供使用，用上一步定义的select语句把数据实际检索出来

- 检索游标`fetch`：对于填有数据的游标，根据需要取出(检索)各行

- 关闭游标`close`：在结束游标使用时，必须关闭游标

## 游标语法

声明游标：

```sql
DECLARE <游标名称> CURSOR FOR <查询语句>;
```

打开游标：

```sql
OPEN <游标名称>;
```

遍历游标：

```sql
FETCH <游标名称> INTO <变量列表>;
```

关闭游标：

```sql
CLOSE <游标名称>;
```

## 示例

```sql
/*删除函数*/
DROP FUNCTION IF EXISTS fun1;
/*声明结束符为$*/
DELIMITER $
/*创建函数*/
CREATE FUNCTION fun1(v_max_a int)
  RETURNS int
  BEGIN
    /*用于保存结果*/
    DECLARE v_total int DEFAULT 0;
    /*创建一个变量，用来保存当前行中a的值*/
    DECLARE v_a int DEFAULT 0;
    /*创建一个变量，用来保存当前行中b的值*/
    DECLARE v_b int DEFAULT 0;
    /*创建游标结束标志变量*/
    DECLARE v_done int DEFAULT FALSE;
    /*创建游标*/
    DECLARE cur_test1 CURSOR FOR SELECT a,b from test1 where a<=v_max_a;
    /*设置游标结束时v_done的值为true，可以v_done来判断游标是否结束了*/
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done=TRUE;
    /*设置v_total初始值*/
    SET v_total = 0;
    /*打开游标*/
    OPEN cur_test1;
    /*使用Loop循环遍历游标*/
    a:LOOP
      /*先获取当前行的数据，然后将当前行的数据放入v_a,v_b中，如果当前行无数据，v_done会被置为true*/
      FETCH cur_test1 INTO v_a, v_b;
      /*通过v_done来判断游标是否结束了，退出循环*/
      if v_done THEN
        LEAVE a;
      END IF;
      /*对v_total值累加处理*/
      SET v_total = v_total + v_a + v_b;
    END LOOP;
    /*关闭游标*/
    CLOSE cur_test1;
    /*返回结果*/
    RETURN v_total;
  END $
/*结束符置为;*/
DELIMITER ;
```

```sql
mysql> delimiter $$
mysql> create procedure number_of_players(
    -> 　　out pnumber int)
    -> begin
    -> 　　declare a_playerno int;  
    -> 　　declare found bool default true;　　循环控制变量，其值为false时循环结束   
    ->
    -> 　　declare c_players cursor for
    -> 　　　　select playerno from PLAYERS;  ①声明游标
    ->
    -> 　　declare continue handler for not found
    -> 　　　　set found=false;  声明异常处理程序
    ->
    -> 　　set pnumber=0;
    ->
    -> 　　open c_players;  ②打开游标
    ->
    -> 　　fetch c_players into a_playerno;  ③检索游标(检索第一行)
    -> 　　while found do
    -> 　　　　set pnumber=pnumber+1;
    -> 　　　　fetch c_players into a_playerno;
    -> 　　end while;  循环检索其余行
    ->
    -> 　　close c_players;  ④关闭游标
    -> end$$
mysql> delimiter ;
mysql> call number_of_players(@pnumber);
mysql> select @pnumber;
+----------+
| @pnumber |
+----------+
|       14 |
+----------+
mysql> select count(*) from PLAYERS;
+----------+
| count(*) |
+----------+
|       14 |
+----------+
```

```sql
mysql> delimiter $$
mysql> create procedure number_penalties(
    -> 　　in p_playerno int,
    -> 　　out pnumber int)
    -> begin
    -> 　　declare a_playerno int;
    -> 　　declare found bool default true;  循环控制变量
    -> 
    -> 　　declare c_players cursor for  声明游标
    -> 　　　　select playerno
    -> 　　　　from PENALTIES
    -> 　　　　where playerno = p_playerno;  包含变量p_playerno
    -> 
    -> 　　declare continue handler for not found
    -> 　　　　set found=false;  声明异常处理程序
    -> 
    -> 　　set pnumber=0;
    ->  
    -> 　　open c_players;  打开游标
    -> 
    -> 　　fetch c_players into a_playerno;
    -> 　　while found do    循环检索游标每一行
    -> 　　　　set pnumber=pnumber+1;
    -> 　　　　fetch c_players into a_playerno;
    -> 　　end while;
    ->
    -> 　　close c_players;  关闭游标
    -> end$$
mysql> delimiter ;
mysql> call number_penalties(44,@pnumber);
mysql> select @pnumber;
+----------+
| @pnumber |
+----------+
|        3 |
+----------+
```

> 示例均来源于网络。