# MySQL Auth CLI

[TOC]

### 查看用户权限

查看有哪些用户：

```sql
mysql> select user,host,authentication_string from mysql.user; -- authentication_string与password等效
```

查看root@'localhost'用户的权限：

```sql
mysql> show grants for root@localhost;
```

### 赋予用户权限

创建 mysql 授权用户：

 ```sql
-- 创建suofeiya 这只是创建用户并没有权限
mysql> CREATE USER 'suofeiya'@'localhost' IDENTIFIED BY '123456';
-- 把suofeiya 变成管理员用户,即赋予所有权限
mysql> GRANT ALL PRIVILEGES ON *.* TO 'suofeiya'@'localhost' WITH GRANT OPTION;

-- 创建用户并赋予RELOAD,PROCESS权限 ，在所有的库和表上
mysql> GRANT RELOAD,PROCESS ON *.* TO 'admin'@'localhost' identified by '123456';
 
-- 创建test用户，在test库，temp表， 上的id列只有select权限
mysql> grant select(id) on test.temp to test@'localhost' identified by '123456';
 ```

限制用户资源使用：

```sql
GRANT OPTION：                                    -- 授权选项
    MAX_QUERIES_PER_HOUR：                        -- 定义每小时允许执行的查询数
    MAX_UPDATES_PER_HOUR：                        -- 定义每小时允许执行的更新数
    MAX_CONNECTIONS_PER_HOUR：                    -- 定义每小时可以建立的连接数
    MAX_USER_CONNECTIONS：                        -- 定义单个用户同时可以建立的连接数

-- 例子：限制用户每小时的查询数量
mysql> grant select on *.* to '用户名'@'IP地址' identified by '123456' with max_queries_per_hour 5;
```

### 删除用户

```sql
mysql> DROP USER admin@'localhost';
-- 通过修改数据表来删除用户时，需要刷新权限
mysql> DELETE FROM mysql.user WHERE user='admin' AND host='localhost';
mysql> FLUSH PRIVILEGES;
```

### 修改用户权限或密码

修改用户密码的几种方式：

```sql
mysql> ALTER USER 'suofeiya'@'localhost' IDENTIFIED BY 'mypass';
-- 设置随机密码
mysql> ALTER USER 'suofeiya'@'localhost' IDENTIFIED BY RANDOM PASSWORD; -- MariaDB中似乎没有这个功能
mysql> SET PASSWORD FOR 'suofeiya'@'localhost' = PASSWORD('mypass');
mysql> SET PASSWORD FOR 'jeffrey'@'localhost' = 'auth_string';
mysql> GRANT USAGE ON *.* TO 'suofeiya'@'localhost' IDENTIFIED BY 'mypass';
-- 用UPDATE直接编辑user表，不太推荐，修改完密码之后要flush privileges
mysql> USE mysql;
mysql> update user set password=password('123') where user='root' and host='localhost';
mysql> FLUSH PRIVILEGES;
-- 修改当前用户密码
mysql> SET PASSWORD=password('new_password');
mysql> SET PASSWORD='auth_string';		-- 与上面命令等效，都是修改当前用户的密码

-- 使用mysqladmin客户端工具进行修改
shell> mysqladmin -u suofeiya -h localhost password "new_password"
```

修改用户名：

```sql
mysql> rename user '用户名'@'IP地址' to '新用户名'@'IP地址';
```

设置用户密码过期策略：

```sql
mysql> ALTER USER 'suofeiya'@'localhost' PASSWORD EXPIRE INTERVAL 90 DAY;
mysql> ALTER USER 'suofeiya'@'localhost' PASSWORD EXPIRE NEVER; -- 密码不过期
mysql> ALTER USER 'suofeiya'@'localhost' PASSWORD EXPIRE DEFAULT; -- 默认过期策略

# 手动强制某个用户密码过期
mysql> ALTER USER 'suofeiya'@'localhost' PASSWORD EXPIRE;
```

### 回收用户权限

使用`revoke`命令回收用户权限：

```sql
mysql> SHOW GRANTS FOR admin@'localhost'; -- 查询用户所有权限

mysql> REVOKE DELETE ON *.* FROM admin@'localhost';	-- 回收部分权限
mysql> REVOKE ALL PRIVILEGES FROM `USER_NAME`@`%`;	 -- 回收所有权限
```

### 忘记 root 密码？

首先关闭数据库`service mysqld stop`

```bash
# --skip-grant-tables 的意思是启动MySQL服务的时候跳过权限表认证。
mysqld_safe --skip-grant-table --user=mysql &
# 使用空密码登录MySQL
mysql -uroot
```

```sql
# 5.7以下版本
mysql> update mysql.user set password=password('新密码') where user='root' and host='localhost';
# 5.7以上版本
mysql> update user set authentication_string=password('新密码') where user='root' and Host='localhost';

mysql> flush privileges;
```

最后启动数据库，使用新密码登录即可.