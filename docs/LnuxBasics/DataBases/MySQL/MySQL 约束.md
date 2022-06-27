# MySQL约束

##  概念

- 是一种限制，它是对表的行和列的数据做出约束，确保表中数据的完整性和唯一性。

## 使用场景

- 创建表的时候，添加约束

## 分类

- default: 默认约束, 域完整性
- not null: 非空约束，域完整性
- unique: 唯一约束，实体完整性
- primary key: 主键约束，实体完整性
- foreign key: 外键约束，参照完整性
- check: 检查约束（MySQL不支持），域完整性
- auto_increment: 自增长约束
- unsigned: 无符号约束
- zerofill: 零填充约束

> 数据库中有三个完整性: 域、实体、参照完整性
>
> - 域(列)完整性：
>   - 域完整性是对数据表中字段属性的约束
> - 实体完整性在MySQL中实现：
>   - 通过主键约束和候选键约束实现的
> - 参照完整性：
>   - 也就是说是MySQL的外键

### 1. default

- 概念

  - 指定某列的默认值，插入数据时候，此列没有值，则用default指定的值来填充

- 添加

  - 在创建表的时候添加： create .... default

    - create table t1(id int default 1, name varchar(20) default '老王');

  
  - 通过alter语句添加： alter .... **modify/change** ....
  - alter table t1 modify id int default 2;
    - alter table t1 change name name varchar(20) default '若尘';

- 删除

  - alter .... modify/change
  - alter table t1 modify id int;
  - alter table t1 change name name varchar(20);

### 2. not null

- 概念

  - 指定某列的值不为空，在插入数据的时候必须非空 '' 不等于 null, 0不等于 null

- 添加

  - 在创建表的时候添加： create .... not null

    - create table t2(id int not null, name varchar(20) not null);

  
  - 通过alter语句添加： alter .... modify/change ....
  - alter table t2 modify id int not null;
    - alter table t2 change name name varchar(20) not null;

- 删除

  - alter .... modify/change
  - alter table t2 modify id int;
  - alter table t2 change name name varchar(20);

### 3. unique

- 概念

  - 指定列或者列组合不能重复，保证数据的唯一性
  - 不能出现重复的值，但是可以有多个null
  - 同一张表可以有多个唯一的约束

- 添加唯一约束

  - 在创建表的时候添加： create .... unique

    - create table t3(id int unique, name varchar(20) not null);

  
  ```sql
  - >insert t3 value (1, '老王');       
  insert t3 value (1, '老李');  -- id 唯一约束，添加异常
  - create table t3(
  id int,name varchar(20) not null,
          constraint id_unique unique(id, name) -- 添加复合约束
  );
  - >insert t3 value (1, '老王'); 
  insert t3 value (1, '老李'); 
  select * from t3;
  insert t3 value (1, '老王'); 
  ```
  
  - 通过alter语句添加： alter .... modify/change ....  /  alter .... add unique
    - alter table t3 modify id int unique;
    - alter table t3 add unique(name);
    - alter table t3 add constraint un_id unique(id);

### 4. 删除唯一约束

- alter .... drop .... index 名称
- drop index on 表名
- alter table t3 drop index id_unique;
- 注意：如果删除的唯一约束列具有自增长约束，则必须**先删除自增长约束，再去删除唯一约束**

### 5. 主键约束

- 概念

  - 当前行的数据不为空并且不能重复
  - 相当于：唯一约束+非空约束

- 添加主键约束

  - 在创建表的时候添加： create .... primary key

    - create table t4(id int primary key, name varchar(20));

  
  ```sql
  - create table t3(id int,name varchar(20),[constraint id_primary] primary(id, name) -- 联合约束
  ```

  - 通过alter语句添加： alter .... modify/change ....  /  alter .... add primary key ....
    - alter table t4 modify id int primary key;
    - alter table t3 add constraint un_primary primary key(id, name);
  
- 删除主键

  - alter .... drop primary key
  - alter table t4 drop primary key;

- 注意：如果删除的主键约束具有自增长约束，则必须先删除自增长约束，再去删除主键约束。

### 6. auto_increment/indentity: 自增长约束

- 概述

  - 列的数值自动增长，列的类型只能是整数类型
  - 通常给主键添加自增长约束

- 添加

  - 在创建表的时候添加： create .... auto_increment/indentity(m,n) `indentity(m,n)中的m表示初始值，n表示自增长步长`

    - create table t5(id int primary key auto_increment, name varchar(20));

  
  - 通过alter语句添加： alter .... modify/change ....auto_increment
  - alter table t5 change id id int auto_increment;
  
- 删除自增长

  - alter .... modify/change...
  - alter table t5 modify id int;

- 注意：

  - 一张表只能有**一个**自增长列，并且该列需要**定义约束**。

### 7. unsigned: 无符号约束

- 概念

  - 指定当前列的数值为非负数
  - age tinyint 1 -128～127 unsigned 0～255

- 添加

  - 在创建表的时候添加： create .... unsigned

    - create table t6(id int, age tinyint unsigned);

  
  - 通过alter语句添加： alter .... unsigned modify/change ....
- alter table t6 change age age tinyint unsigned;
  - alter table t6 modify age tinyint unsigned;

- 删除

  - alter .... modify/change ....
  - alter table t6 modify age tinyint;
  - alter table t6 change age age tinyint;

### 8. zerofill: 零填充约束

- 概念

  - 指定当前列的数值的显示格式，多余的位数使用`0`来填充，不影响当前列显示范围和实际存储的数据
  - 比如：`int(3)`，数据为`3`时，在命令行中显示的内容为`003`，实际存储的数据还是`3`

- 添加

  - 在创建表的时候添加： create .... zerofill

    - create table t7(id int, age int(6) zerofill);

- 删除
  - alter .... modify/change ....
  - alter table t7 modify age int;
  - alter table t7 change age age int;

### 9. foreign key: 外键约束

- 通过建立外键，设置表与表之间的约束性，限制数据的录入

  ```
  员工表(从表)                       部门表(主表)
  员工号    员工姓名  部门名称          部门号  部门名称
  1        张三      1                1         人力
  2        李四      2                2         销售
  3        王五      3
  ```

- 概述

  - 建立表与表之间的关系，建立参照完整性，一个表可以有多个外键，每个外键必须参照另一个主键。
  - 被外键约束的列，取值必须参照其主表列中的值
  - 注意：**通常先创建主表，再创建从表**

- 查看所有表的外键约束

```bash
- SELECT * FROM information_schema.`TABLE_CONSTRAINTS` [where table_name='<TABLE_NAME>'];
```

- 添加外键约束

```sql
- create table dept(deptno int primary key auto_increment, dname varchar(32),loc varchar(32));

-- 添加外键约束
- create table emp(empno int primary key auto_increment, ename varchar(32) not null, deptno int, constraint `fk_name` foreign key(deptno) references dept(deptno));
-- 使用alter add constraint ....
- alter table emp add constraint fk_name foreign key(deptno) references dept(deptno);
```

- 删除外键约束

  - alter .... drop foreign key fk_name
  - alter table emp drop foreign key fk_name;

- 注意：

  - 在创建表时，不去明确指定外键约束的名称，系统会自动地生成一个外键的名称。
  - 使用 show create table 表名 查看具体的外键名称

- 设置外键中的级联关系

  - on delete cascade: 删除主表中的数据时，从表中的数据随之删除
  - on update cascase: 更新主表中的数据时，从表中的数据随之更新
  - on delete set null: 删除主表中的数据时，从表中的数据置空

- 级联删除

  - create table emp(empno int promary key auto_increment, ename varchar(32) not null, deptno int,
    ​    [constraint fk_name] foreign key(deptno) references dept(deptno) on delete cascade-- 添加外键约束

);

- 注意：
  - 插入数据时，先插入主表的数据，再插入从表的数据
  - 删除数据时，先删除从表的数据，再删除主表的数据

## 数据库的设计

- 主键约束
- 自增长约束
- 外键约束(慎用)
- 唯一约束
- 非空约束
- 默认约束

> 文章原文：https://segmentfault.com/a/1190000039214953

## 参考链接

- http://article.docway.net/details?id=5fd0d627f8d82b689d3200bf