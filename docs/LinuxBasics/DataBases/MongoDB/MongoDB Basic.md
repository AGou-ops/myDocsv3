# MongoDB Basic

## 基础命令

```bash
> help		# 获取帮助

> db.version()
4.4.1

> db		# 获取当前数据库
test
# 或者使用
> db.getName()
test

> show dbs		# 查询所有数据库
admin   0.000GB
config  0.000GB
local   0.000GB

> db.stats()		# 获取当前库状态

        "db" : "test",
        "collections" : 0,
        "views" : 0,
        "objects" : 0,
        "avgObjSize" : 0,
        "dataSize" : 0,
        "storageSize" : 0,
        "totalSize" : 0,
        "indexes" : 0,
        "indexSize" : 0,
        "scaleFactor" : 1,
        "fileSize" : 0,
        "fsUsedSize" : 0,
        "fsTotalSize" : 0,
        "ok" : 1
}

> db.getMongo()		# 获取当前连接信息
connection to 127.0.0.1:27017
```

## 对象操作

MongoDB 与 MySQL 术语比较:

| MongoDB | MySQL  |
| ------- | ------ |
| 数据库  | 数据库 |
| 集合    | 表     |
| 文档    | 数据行 |

### 数据库操作

当use的时候，系统就会自动创建一个数据库。

```bash
> use test
switched to db test
> db.dropDatabase()
{ "ok" : 1 }
```

### 集合操作(CURD)

手动创建集合:

```bash
> use test
switched to db test
# 插入单条数据
> db.createCollection('a')
{ "ok" : 1 }
> db.createCollection('b')
{ "ok" : 1 }
> db.createCollection('c')
{ "ok" : 1 }
# 查看所有集合
> show collections
a
b
c
# 或者
> db.getCollectionNames()
[ "a", "b", "c" ]
# 或者
> show tables
```

#### 增 

创建文档时自动创建集合:

```bash
# 插入一条文档
> db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)
# 或者使用 db.inventory.insert 命令有相同效果

# 插入多条文档
> db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])

# 此时会发现已经自动创建了一个集合
> show collections
inventory
# 查看文档内容
# > db.inventory.find( { item: "canvas" } )
> db.inventory.find({}).pretty()

        "_id" : ObjectId("5fa13a9a42526db8b4cd7002"),
        "item" : "canvas",
        "qty" : 100,
        "tags" : [
                "cotton"
        ],
        "size" : {
                "h" : 28,
                "w" : 35.5,
                "uom" : "cm"
        }
}
```

使用函数批量插入:

```bash
> for(i=0;i<10000;i++){db.log.insert({"uid":i,"name":"mongodb","age":6,"date":newDate()})}
```

#### 删

删除集合或者集合内容:

```bash
> db.inventory.drop()
true
# 删除集合内所有文档
> db.log.remove({})
```

#### 改

重命名集合:

```bash
> db.c.renameCollection("RENAMED_c")
{ "ok" : 1 }
> show tables
RENAMED_c
# 根据条件进行批量修改，默认情况下monggoDB只会修改一条document，如果要修改多条document，则需要设置multi为true.
> db.getCollection("doc").update({ctime:{$lt: "2022-05-09"}},{$set:{status:-1}},{multi:true});
```

#### 查

```bash
> > db.getCollection("doc").find({}).pretty()
```



查看文档:

```bash
# 查看所有指定集合所有文档
> db.log.find().pretty() 		# 等同于db.log.find({})

* 注意: 默认每页显示20条记录，当显示不下的的情况下，可以用it迭代命令查询下一页数据。
# 设置每页显示数据的大小：
> DBQuery.shellBatchSize=50; 
# 查看第一条文档
> db.log.findOne()
# 查看总文档数
> db.log.count()

> db.log.stats()
> db.log.dataSize() # 集合中数据的原始大小
> db.log.totalIndexSize() # 集合中索引数据的原始大小
> db.log.totalSize() # 集合中索引+数据压缩存储之后的大小
> db.log.storageSize() # 集合中数据压缩存储的大小
```

## 用户管理

语法: 

```json
{
    user: "<name>",
    pwd: "<cleartext password>",
    customData: { <any information> },
    roles: [
       { role: "<role>",
     db: "<database>" } | "<role>",
    ...
    ]
}
```

> 1、在创建普通用户时，一般事先use 到想要设置权限的库下；或者所有普通用户使用同一个验证库，比如test
> 2、root角色的创建，要在admin下进行创建
> 3、创建用户时你use到的库，在将来登录时候，使用以下方式登录,否则是登录不了的
> mongo -u oldboy -p 123 10.0.0.53/oldboy

(1)  创建超级管理员, 管理所有数据

```bash
> use admin
> db.createUser(
{
    user: "root",
    pwd: "root",
    roles: [ { role: "root", db: "admin" } ]
}
)
# 验证用户
> db.auth('root', 'root')
1
```

在配置文件中启用用户验证:

```bash
# vim /etc/mongodb.conf , 加入以下内容
security:
  authorization: enabled
```

重启 mongodb...

登录验证:

```bash
$ mongo -uroot -proot localhost/admin
# 或者
$ mongo
> use admin
> db.auth('root','root')
```

(2) 创建库管理员

```bash
> use users
# 对app1数据库有读写权限, 对app2数据库仅有读权限, 对app3具有管理员权限
> db.createUser(
{
user: "suofeiya",
pwd: "suofeiya",
roles: [ { role: "readWrite", db: "app1" },
       { role: "read", db: "app2" },
       { role: "dbAdmin", db: "app3" },
      ]
   }
)
```

---

查询所有用户: 

```bash
> db.system.users.find().pretty()
```

删除某个用户:

```bash
> use users
> db.dropUser("suofeiya")
```

## 参考链接

- MongoDB Tutorial:https://www.tutorialspoint.com/mongodb/index.htm
- MongoDB Database Command: https://docs.mongodb.com/manual/reference/command/
- MongoDB CRUD: https://docs.mongodb.com/manual/crud/
- MongoDB 菜鸟教程: https://www.runoob.com/mongodb/
- https://blog.csdn.net/weixin_44953658/article/details/122102059?spm=1001.2014.3001.5501