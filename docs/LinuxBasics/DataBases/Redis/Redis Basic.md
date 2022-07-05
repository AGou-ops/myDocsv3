# Redis 基础

```bash
# redis登录
$ redis-cli -h <host> -p <port> -a <password>
redis 127.0.0.1:6379> PING
PONG
```

## 用户认证登录及修改密码

reids的默认配置文件为`/etc/redis.conf`，如果要修改密码，需要更改：

```bash
# 找到改行，并取消注释
requirepass <YOUR_PASSWD_HERE>
```

完成之后重启Redis：

```bash
service redis restart		# 如果配置成服务的话
# 或者
/usr/local/bin/redis-cli shutdown
/usr/local/bin/redis-server /etc/redis.conf
```

命令行中修改密码（无需重启服务）：

```bash
127.0.0.1:6379> config set requirepass <YOUR_PASSWD_HERE>
OK
127.0.0.1:6379> config get requirepass
1) "requirepass"
2) "mUWPMPyv8I069o"
```

## 数据类型

String： 字符串类型
Hash： 哈希类型
List： 列表类型
Set： 集合类型
Sorted set： 顺序集合类型

## 管理实战

通用操作

```shell
# 查看所有的key
127.0.0.1:6379> KEYS *
1) "age"
2) "name"
# 判断key是否存在
127.0.0.1:6379> EXISTS name
(integer) 1
# 变更key名
127.0.0.1:6379> RENAME age nianling
# 查看key的类型
127.0.0.1:6379> type name
string
# 删除key
127.0.0.1:6379> del name
(integer) 1
# 以秒为单位设置生存时间
127.0.0.1:6379> EXPIRE name 10
(integer) 1
# 以毫秒为单位设置生存时间
127.0.0.1:6379> PEXPIRE name 10000
(integer) 1
# 取消剩余生存时间
127.0.0.1:6379> PERSIST name
(integer) 1
```

------

### strings（字符）类型操作

应用场景：

常规计数：微博数、粉丝数、直播平台

增：

```shell
# 设置key
127.0.0.1:6379> set name zls
OK
# 设置多个key
127.0.0.1:6379> mset name zls age 18 sex m
OK
# 设置值、取值同时进行
127.0.0.1:6379> GETSET name zls
(nil)
127.0.0.1:6379> GETSET name zls
"zls"
# 设置值同时设置生存时间
127.0.0.1:6379> set name zls ex 10
OK
# 数量递归增加
127.0.0.1:6379> incr num
(integer) 1
# 指定增加数值
127.0.0.1:6379> incrby num 2
(integer) 8
# 数量递减
127.0.0.1:6379> DECR num
(integer) -1
# 指定递减数
127.0.0.1:6379> DECRBY num 2
(integer) -3
# 浮点增加
127.0.0.1:6379> incrbyfloat float 0.6
"0.6"
```

删：

```shell
# 删除已有key
127.0.0.1:6379> DEL num
```

改：

```shell
# 追加(若该键不存在，则创建)
127.0.0.1:6379> APPEND name bgx
(integer) 6
# 查看追加内容
127.0.0.1:6379> get name
"zlsbgx"
# 修改第N个字符串
127.0.0.1:6379> SETRANGE name 3 a
(integer) 6
# 查看结果
127.0.0.1:6379> get name
"zlsagx"
```

查：

```shell
# 获取key值
127.0.0.1:6379> get name
"zls"
# 查看string类型的长度
127.0.0.1:6379> STRLEN name
(integer) 6
# 查看指定长度的string类型
127.0.0.1:6379> GETRANGE name  0 4
"zlsag"
# 以秒查询key剩余生存时间
127.0.0.1:6379> ttl name
(integer) 8
# 以毫秒查询key剩余生存时间
127.0.0.1:6379> pttl name
(integer) 44016
# 获取多个key值
127.0.0.1:6379> mget name age sex
1) "zls"
2) "18"
3) "m"
```

应用场景实现:

```shell
# 粉丝数量增加，每点一次关注，都执行以下命令一次
127.0.0.1:6379> incr num
(integer) 1
# 取消关注则执行以下命令一次
127.0.0.1:6379> DECR num
(integer) -1
# 显示粉丝数量
127.0.0.1:6379> get num
"6"
# 暗箱操作，刷粉丝（6了）
127.0.0.1:6379> incrby num 10000
(integer) 10006
```

------

### hash（字典）类型操作

应用场景：

存储部分变更的数据，如用户信息，商品信息等。
最接近表结构的一种类型。

增：

```shell
# 创建car的price值
127.0.0.1:6379> hset car price 500
(integer) 1
# 创建car的name值
127.0.0.1:6379> hset car name BMW
(integer) 1
# 创建car的date值
127.0.0.1:6379> hset car date 1982
(integer) 1
# 设置多个哈希key(类似于MySQL的一个表中的一行数据)
127.0.0.1:6379> hmset teacher name zls age 18 sex m
OK
127.0.0.1:6379> hmset teacher name bgx age 80 sex f
OK
```

删：

```shell
# 删除hash类型中的一个值
127.0.0.1:6379> HDEL teacher name
(integer) 1
# 删除整个hash类型key
127.0.0.1:6379> DEL teacher
(integer) 1
```

改：

```shell
# 修改hash类型值 增加1
127.0.0.1:6379> hincrby myhash num 1
(integer) 1
```

查：

```shell
# 获取car的name值
127.0.0.1:6379> hget car name
"BMW"
# 获取key的全部value和值（运维常用）
127.0.0.1:6379> hgetall car
1) "price"
2) "500"
3) "name"
4) "BMW"
5) "date"
6) "1982"
# 获取key中部分值
127.0.0.1:6379> HMGET teacher name sex
1) "zls"
2) "m"
```

------

### List（列表）类型操作

应用场景：

消息队列系统

比如sina微博：在redis中我们的最新微博ID使用了常驻缓存，这是一直更新的。
但是做了限制不能超过5000个ID，因此获取ID的函数会一只询问redis。
系统不会像传统方式那样“刷新”缓存，redis实例中的信息永远是一致的。
SQL数据库（或是硬盘上的其他类型数据）只是在用户需要获取“很远”的数据时才会被触发，而主页或第一个评论页是不会麻烦到硬盘上的数据库了。

增：

```shell
# 将一个值或者多个值插入列表的表头(若key不存在，则添加key并依次添加)
127.0.0.1:6379> lpush list zls
(integer) 1
127.0.0.1:6379> lpush list bgx
(integer) 2
127.0.0.1:6379> lpush list oldboy
(integer) 3
127.0.0.1:6379> lpush list alex
(integer) 4
# 一行添加
127.0.0.1:6379> lpush teacher zls bgx oldboy alex
(integer) 4
# 追加一个value值，若key不存在，则不创建
127.0.0.1:6379> LPUSHX teacher1 zls
(integer) 0
# 在bgx前面添加zls
127.0.0.1:6379> linsert teacher before bgx zls
(integer) 6
# 在尾部添加key
127.0.0.1:6379> rpush teacher wang5
(integer) 7
# 将teacher的尾部元素弹出，再插入到teacher1的头部
127.0.0.1:6379> rpoplpush teacher teacher1
"wang5"
# 查看一个列表内有多少行
127.0.0.1:6379> llen list
(integer) 4
```

删：

```shell
# 删除key
127.0.0.1:6379> del teacher
(integer) 1
# 从头部开始找,按先后顺序,值为a的元素,删除数量为2个,若存在第3个,则不删除
127.0.0.1:6379> lrem teacher 2 zls
(integer) 2
# 从头开始,索引为0,1,2的3个元素,其余全部删除改
127.0.0.1:6379> ltrim teacher 0 2
OK
```

改：

```shell
# 从头开始, 将索引为1的元素值,设置为新值 e,若索引越界,则返回错误信息
127.0.0.1:6379> lset teacher 1 test
OK
# 将 teacher 中的尾部元素移到其头部
127.0.0.1:6379> rpoplpush teacher teacher
"oldboy"
```

查：

```shell
# 列表头部弹出，弹一行少一行
127.0.0.1:6379> lpop teacher
"zls"
# 列表尾部
127.0.0.1:6379> rpop teacher
"wang5"
# 查询索引（头部开始）
127.0.0.1:6379> lindex list 0
"bgx"
# 查询索引（尾部第一个）
127.0.0.1:6379> lindex list -1
"alex"
# 范围查询索引
127.0.0.1:6379> lrange list 0 1
1) "bgx"
2) "oldboy"
```

微博、微信朋友圈场景实现:

```shell
# 发朋友圈
127.0.0.1:6379> LPUSH wechat "monday,bgx is a bad man"
(integer) 1
127.0.0.1:6379> LPUSH wechat "Tuesday,zls is a nice boy"
(integer) 2
127.0.0.1:6379> LPUSH wechat "Wednesday,alex is a loser"
(integer) 3

# 查看朋友圈内容
127.0.0.1:6379> LRANGE wechat 0 -1
1) "Wednesday,zls is a nice boy"
2) "Tuesday,zls is a nice boy"
3) "monday,zls is a nice boy"
```

------

### Set（集合）类型操作

应用场景：

在微博应用中，可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis还为集合提供了求交集、并集、差集等操作，可以非常方便的实现如共同关注、共同喜好、二度好友等功能，对上面的所有集合操作，你还可以使用不同的命令选择将结果返回给客户端还是存集到一个新的集合中。

增：

```shell
# 若key不存在,创建该键及与其关联的set,依次插入bgx、lidao、xiaomimei若key存在,则插入value中,若bgx在zls_fans中已经存在,则插入了lidao和xiaomimei两个新成员。
127.0.0.1:6379> sadd zls_fans bgx lidao xiaomimei
(integer) 3
```

删：

```shell
# 尾部的b被移出,事实上b并不是之前插入的第一个或最后一个成员
127.0.0.1:6379> spop zls_fans
"bgx"
# 若值不存在, 移出存在的值,并返回剩余值得数量
127.0.0.1:6379> SREM zls_fans lidao oldboy alex
(integer) 1
```

改：

```shell
# 将小迷妹从 zls_fans 移到 bgx_fans
127.0.0.1:6379> SMOVE zls_fans bgx_fans xiaomimei
(integer) 1
```

查：

```shell
# 判断xiaomimei是否已经存在，返回值为 1 表示存在
127.0.0.1:6379> SISMEMBER zls_fans xiaomimei
(integer) 0
127.0.0.1:6379> SISMEMBER bgx_fans xiaomimei
(integer) 1
# 查看set中的内容
127.0.0.1:6379> SMEMBERS zls_fans
1) "xiaomimei"
2) "bgx"
3) "lidao"
# 获取Set 集合中元素的数量
127.0.0.1:6379> scard zls_fans
(integer) 0
127.0.0.1:6379> scard bgx_fans
(integer) 1
# 随机的返回某一成员
127.0.0.1:6379> srandmember bgx_fans
"xiaomimei"

# 创建三个集合
127.0.0.1:6379> sadd zls_fans bgx lidao xiaomimei
(integer) 3
127.0.0.1:6379> sadd bgx_fans zls lidao xiaomimei
(integer) 2
127.0.0.1:6379> sadd lidao_fans 0
(integer) 1

# 1和2得到一个结果,拿这个集合和3比较,获得每个独有的值
127.0.0.1:6379> sdiff zls_fans bgx_fans lidao_fans
1) "bgx"
# 3个集和比较,获取独有的元素,并存入diffkey 关联的Set中
127.0.0.1:6379> sdiffstore diffkey zls_fans bgx_fans lidao_fans
(integer) 1
# 获得3个集合中都有的元素
127.0.0.1:6379> sinter zls_fans bgx_fans lidao_fans
(empty list or set)    //因为这里没有交集，所以返回一个空集合
# 把交集存入interkey 关联的Set中
127.0.0.1:6379> sinterstore interkey bgx_fans lidao_fans
(integer) 0  // 因为这里没有交集，所以存入的值为0
# 获取3个集合中的成员的并集
127.0.0.1:6379> sunion zls_fans bgx_fans lidao_fans
1) "bgx"
2) "xiaomimei"
3) "zls"
4) "lidao"
5) "0"
# 把并集存入unionkey 关联的Set中
127.0.0.1:6379> sunionstore unionkey zls_fans bgx_fans lidao_fans
(integer) 5
```

------

### Sorted-Set（有序集合）类型操作

应用场景：

排行榜应用，取TOP N操作
这个需求与上面需求的不同之处在于，前面操作以时间为权重，这个是以某个条件为权重，比如按顶的次数排序，这时候就需要我们的sorted set出马了，将你要排序的值设置成sorted set的score，将具体的数据设置成相应的value，每次只需要执行一条ZADD命令即可。

增：

```shell
# 添加两个分数分别是 2 和 3 的两个成员
127.0.0.1:6379> zadd myzset 2 "two" 3 "three"
(integer) 2
```

删：

```shell
# 删除多个成员变量,返回删除的数量
127.0.0.1:6379> zrem myzset one two
(integer) 1
```

改：

```shell
# 将成员 one 的分数增加 2，并返回该成员更新后的分数
127.0.0.1:6379> zincrby myzset 2 one
"2"
```

查：

```shell
# 返回所有成员和分数,不加WITHSCORES,只返回成员
127.0.0.1:6379> zrange myzset 0 -1 WITHSCORES
1) "one"
2) "2"
3) "three"
4) "3"
# 获取成员one在Sorted-Set中的位置索引值。0表示第一个位置
127.0.0.1:6379> zrank myzset one
(integer) 0
# 获取 myzset 键中成员的数量
127.0.0.1:6379> zcard myzset
(integer) 2
# 获取分数满足表达式 1 <= score <= 2 的成员的数量
127.0.0.1:6379> zcount myzset 1 2
(integer) 1  
# 获取成员 three 的分数 
127.0.0.1:6379> zscore myzset three
"3"
# 获取分数满足表达式 1 < score <= 2 的成员
127.0.0.1:6379> zrangebyscore myzset  1 2
1) "one"
# -inf 表示第一个成员，+inf最后一个成员
# limit限制关键字
# 2  3  是索引号
zrangebyscore myzset -inf +inf limit 2 3  返回索引是2和3的成员
# 删除分数 1<= score <= 2 的成员，并返回实际删除的数量
127.0.0.1:6379> zremrangebyscore myzset 1 2
(integer) 1
# 删除位置索引满足表达式 0 <= rank <= 1 的成员
127.0.0.1:6379> zremrangebyrank myzset 0 1
(integer) 1
# 按位置索引从高到低,获取所有成员和分数
127.0.0.1:6379> zrevrange myzset 0 -1 WITHSCORES
# 原始成员:位置索引从小到大
      one  0
      two  1
# 执行顺序:把索引反转
      位置索引:从大到小
      one 1
      two 0
# 输出结果: 
       two
       one
# 获取位置索引,为1,2,3的成员
127.0.0.1:6379> zrevrange myzset 1 3
(empty list or set)
# 相反的顺序:从高到低的顺序
# 获取分数 3>=score>=0的成员并以相反的顺序输出
127.0.0.1:6379> zrevrangebyscore myzset 3 0
(empty list or set)
# 获取索引是1和2的成员,并反转位置索引
127.0.0.1:6379> zrevrangebyscore myzset 4 0 limit 1 2
(empty list or set)
```

## Redis 事务

Redis 事务和Mysql 事务的不同点：

redis中的事务跟关系型数据库中的事务是一个相似的概念，但是有不同之处。关系型数据库事务执行失败后面的sql语句不在执行前面的操作都会回滚，而在redis中开启一个事务时会把所有命令都放在一个队列中，这些命令并没有真正的执行，*如果有一个命令报错，则取消这个队列，所有命令都不再执行*。

![null](http://bak.agou-ops.top/uploads/redis/images/m_74f80af14efc08c54908d73f87895de4_r.png)

Redis 事务相关命令：

1）DISCARD
取消事务，放弃执行事务块内的所有命令。
2）EXEC
执行所有事务块内的命令。
3）MULTI
标记一个事务块的开始。
4）UNWATCH
取消 WATCH 命令对所有 key 的监视。
5）WATCH key [key …]
监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。

### 简单样例

```bash
#登录redis
[root@db01 ~]\# redis-cli
#验证密码
127.0.0.1:6379> auth 123
OK
#不开启事务直接设置key
127.0.0.1:6379> set zls "Nice"
OK
#查看结果
127.0.0.1:6379> get zls
"Nice"

#开启事务
127.0.0.1:6379> MULTI
OK
#设置一个key
127.0.0.1:6379> set bgx "low"
QUEUED
127.0.0.1:6379> set alex "Ugly"
QUEUED
#开启另一个窗口查看结果
127.0.0.1:6379> get bgx
(nil)
127.0.0.1:6379> get alex
(nil)

#执行exec完成事务
127.0.0.1:6379> EXEC
1) OK
2) OK

#再次查看结果
127.0.0.1:6379> get bgx
"low"
127.0.0.1:6379> get alex
"Ugly"
```

## 参考链接

-  Redis 基本数据类型和常用命令： https://juejin.im/post/6844904039159873544

