> 来自：https://www.cnblogs.com/rickiyang/p/14517120.html

今天聊聊目前业界使用比较多的 ORM 框架：GORM。GORM 相关的文档原作者已经写得非常的详细，具体可以看[这里](https://gorm.io/zh_CN/docs/connecting_to_the_database.html)，这一篇主要做一些 GORM 使用过程中关键功能的介绍，GORM 约定的一些配置信息说明，防止大家在使用过程中踩坑。

以下示例代码都可以在 Github ： [gorm-demo](https://github.com/rickiyang/gorm-demo) 中找到。

------

GORM 官方支持的数据库类型有： MySQL, PostgreSQL, SQlite, SQL Server。

连接 MySQL 的示例：

```go
Copyimport (
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func main() {
  // 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情
  dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
}
```

MySQl 驱动程序提供了一些高级配置可以在初始化过程中使用，例如：

```go
Copydb, err := gorm.Open(mysql.New(mysql.Config{
  DSN: "gorm:gorm@tcp(127.0.0.1:3306)/gorm?charset=utf8&parseTime=True&loc=Local", // DSN data source name
  DefaultStringSize: 256, // string 类型字段的默认长度
  DisableDatetimePrecision: true, // 禁用 datetime 精度，MySQL 5.6 之前的数据库不支持
  DontSupportRenameIndex: true, // 重命名索引时采用删除并新建的方式，MySQL 5.7 之前的数据库和 MariaDB 不支持重命名索引
  DontSupportRenameColumn: true, // 用 `change` 重命名列，MySQL 8 之前的数据库和 MariaDB 不支持重命名列
  SkipInitializeWithVersion: false, // 根据当前 MySQL 版本自动配置
}), &gorm.Config{})
```

注意到 *gorm.Open(dialector Dialector, opts ...Option)* 函数的第二个参数是接收一个 *gorm.Config{}* 类型的参数，这里就是 gorm 在数据库建立连接后框架本身做的一些默认配置，**请注意这里如果没有配置好，后面你的数据库操作将会很痛苦！**

GORM 提供的配置可以在初始化时使用：

```go
Copytype Config struct {
  SkipDefaultTransaction   bool
  NamingStrategy           schema.Namer
  Logger                   logger.Interface
  NowFunc                  func() time.Time
  DryRun                   bool
  PrepareStmt              bool
  DisableNestedTransaction bool
  AllowGlobalUpdate        bool
  DisableAutomaticPing     bool
  DisableForeignKeyConstraintWhenMigrating bool
}
```

这些参数我们一个一个来说：

**SkipDefaultTransaction**

跳过默认开启事务模式。为了确保数据一致性，GORM 会在事务里执行写入操作（创建、更新、删除）。如果没有这方面的要求，可以在初始化时禁用它。

```go
Copydb, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
  SkipDefaultTransaction: true,
})
```

**NamingStrategy**

表名称的命名策略，下面会说。GORM 允许用户通过覆盖默认的`NamingStrategy`来更改命名约定，这需要实现接口 `Namer`：

```go
Copytype Namer interface {
    TableName(table string) string
    ColumnName(table, column string) string
    JoinTableName(table string) string
    RelationshipFKName(Relationship) string
    CheckerName(table, column string) string
    IndexName(table, column string) string
}
```

默认 `NamingStrategy` 也提供了几个选项，如：

```go
Copydb, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
  NamingStrategy: schema.NamingStrategy{
    TablePrefix: "t_",   // 表名前缀，`User`表为`t_users`
    SingularTable: true, // 使用单数表名，启用该选项后，`User` 表将是`user`
    NameReplacer: strings.NewReplacer("CID", "Cid"), // 在转为数据库名称之前，使用NameReplacer更改结构/字段名称。
  },
})
```

**一般来说这里是一定要配置 \*SingularTable: true\* 这一项的。**

**Logger**

允许通过覆盖此选项更改 GORM 的默认 logger。

**NowFunc**

更改创建时间使用的函数:

```go
Copydb, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
  NowFunc: func() time.Time {
    return time.Now().Local()
  },
})
```

**DryRun**

生成 `SQL` 但不执行，可以用于准备或测试生成的 SQL：

```go
Copydb, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
  DryRun: false,
})
```

**PrepareStmt**

`PreparedStmt` 在执行任何 SQL 时都会创建一个 prepared statement 并将其缓存，以提高后续的效率：

```go
Copydb, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
  PrepareStmt: false,
})
```

#### GORM 约定配置[#](https://www.cnblogs.com/rickiyang/p/14517120.html#936638098)

使用别人的框架就要受制别人的约束，在 GORM 中有很多的约定，如果你没有遵循这些约定可能你认为正常的代码跑起来会发生意想不到的问题。

##### 模型定义

默认情况下，GORM 会使用 `ID` 作为表的主键。

```go
Copytype User struct {
  ID   string // 默认情况下，名为 `ID` 的字段会作为表的主键
  Name string
}
```

如果你当前的表主键不是 id 字段，那么你可以通过 `primaryKey`标签将其它字段设为主键：

```go
Copy// 将 `UUID` 设为主键
type Animal struct {
  ID     int64
  UUID   string `gorm:"primaryKey"`
  Name   string
  Age    int64
}
```

如果你的表采用了复合主键，那也没关系：

```go
Copytype Product struct {
  ID           string `gorm:"primaryKey"`
  LanguageCode string `gorm:"primaryKey"`
  Code         string
  Name         string
}
```

**注意：**默认情况下，整型 `PrioritizedPrimaryField` 启用了 `AutoIncrement`，要禁用它，您需要为整型字段关闭 `autoIncrement`：

```go
Copytype Product struct {
  CategoryID uint64 `gorm:"primaryKey;autoIncrement:false"`
  TypeID     uint64 `gorm:"primaryKey;autoIncrement:false"`
}
```

##### GORM 标签

GORM 通过在 struct 上定义自定义的 gorm 标签来实现自动化创建表的功能：

```go
Copytype User struct {
	Name string  `gorm:"size:255"` //string默认长度255,size重设长度
	Age int `gorm:"column:my_age"` //设置列名为my_age
	Num int  `gorm:"AUTO_INCREMENT"` //自增
	IgnoreMe int `gorm:"-"` // 忽略字段
	Email string `gorm:"type:varchar(100);unique_index"` //type设置sql类型，unique_index为该列设置唯一索引
	Address string `gorm:"not null;unique"` //非空
	No string `gorm:"index:idx_no"` // 创建索引并命名，如果有其他同名索引，则创建组合索引
	Remark string `gorm:"default:''"` //默认值
}
```

定义完这些标签之后，你可以使用 *AutoMigrate* 在 MySQL 建立连接之后创建表：

```go
Copyfunc main() {
	db, err := gorm.Open("mysql", "root:123456789@/test_db?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		fmt.Println("connect db error: ", err)
	}
	db.AutoMigrate(&model.User{})
}
```

*AutoMigrate* 用于自动迁移你的 schema，保持 schema 是最新的。 该 API 会创建表、缺失的外键、约束、列和索引。 如果大小、精度、是否为空可以更改，则 *AutoMigrate* 会改变列的类型。

出于保护数据的目的，它 **不会** 删除未使用的列。

##### 默认模型

**GORM 定义一个 `gorm.Model` 结构体，其包括字段 `ID`、`CreatedAt`、`UpdatedAt`、`DeletedAt`。**

```go
Copy// gorm.Model 的定义
type Model struct {
  ID        uint           `gorm:"primaryKey"`
  CreatedAt time.Time
  UpdatedAt time.Time
  DeletedAt gorm.DeletedAt `gorm:"index"`
}
```

如果你觉得上面这几个字段名字段名是你想要的，那么你完全可以在你的模型中引入它：

```go
Copytype User struct {
	gorm.Model
	Id    int64  `json:"id"`
	Name  string `json:"name"`
	Age   int32  `json:"age"`
	Sex   int8   `json:"sex"`
	Phone string `json:"phone"`
}
```

反之如果不是你需要的，就没必要多此一举。

##### 表名

这里是一个很大的坑。**GORM 使用结构体名的 `蛇形命名` 作为表名。对于结构体 `User`，根据约定，其表名为 `users`**。

当然我们的表名肯定不会是这样设置的，所以为什么作者要采用这种设定实在是难以捉摸。

这里有两种方式去修改表名：第一种就是去掉这个默认设置；第二种就是在保留默认设置的基础上通过重新设定表名来替换。

先说如何通过重新设定表名来替换，可以实现 `Tabler` 接口来更改默认表名，例如：

```go
Copytype Tabler interface {
    TableName() string
}

// TableName 会将 User 的表名重写为 `user_new_name`
func (User) TableName() string {
  return "user_new_name"
}
```

通过去掉默认配置上面已经有提，配置 *SingularTable: true* 这选项即可。

##### 列名覆盖

默认情况下列名遵循普通 struct 的规则：

```go
Copytype User struct {
  ID        uint      // 列名是 `id`
  Name      string    // 列名是 `name`
  Birthday  time.Time // 列名是 `birthday`
  CreatedAt time.Time // 列名是 `created_at`
}
```

如果你的列名和字段不匹配的时候，可以通过如下方式重新指定：

```go
Copytype Animal struct {
  AnimalID int64     `gorm:"column:beast_id"`         // 将列名设为 `beast_id`
  Birthday time.Time `gorm:"column:day_of_the_beast"` // 将列名设为 `day_of_the_beast`
  Age      int64     `gorm:"column:age_of_the_beast"` // 将列名设为 `age_of_the_beast`
}
```

##### 日期字段时间类型设置

GORM 约定使用 `CreatedAt`、`UpdatedAt` 追踪创建/更新时间。如果你定义了这种字段，GORM 在创建、更新时会自动填充。

如果想要保存 UNIX（毫/纳）秒时间戳而不是 time，只需简单地将 `time.Time` 修改为 `int` 即可：

```go
Copytype User struct {
  CreatedAt time.Time // 在创建时，如果该字段值为零值，则使用当前时间填充
  UpdatedAt int       // 在创建时该字段值为零值或者在更新时，使用当前时间戳秒数填充
  Updated   int64 `gorm:"autoUpdateTime:nano"` // 使用时间戳填纳秒数充更新时间
  Updated   int64 `gorm:"autoUpdateTime:milli"` // 使用时间戳毫秒数填充更新时间
  Created   int64 `gorm:"autoCreateTime"`      // 使用时间戳秒数填充创建时间
}
```

##### 嵌入结构体

对于匿名字段，GORM 会将其字段包含在父结构体中，例如：

```go
Copytype User struct {
  gorm.Model
  Name string
}
// 等效于
type User struct {
  ID        uint           `gorm:"primaryKey"`
  CreatedAt time.Time
  UpdatedAt time.Time
  DeletedAt gorm.DeletedAt `gorm:"index"`
  Name string
}
```

对于正常的结构体字段，你也可以通过标签 `embedded` 将其嵌入，例如：

```go
Copytype Author struct {
    Name  string
    Email string
}

type Blog struct {
  ID      int
  Author  Author `gorm:"embedded"`
  Upvotes int32
}
// 等效于
type Blog struct {
  ID    int64
    Name  string
    Email string
  Upvotes  int32
}
```

#### CRUD操作[#](https://www.cnblogs.com/rickiyang/p/14517120.html#3942833062)

##### 新增相关

单行插入，gorm 会返回插入之后的主键信息：

```go
Copyfunc InsertOneUser(user model.User) (id int64, err error) {
	tx := constants.GVA_DB.Create(&user)
	if tx.Error != nil {
		constants.GVA_LOG.Error("InsertOne err", zap.Any("err", tx.Error))
		return 0, tx.Error
	}
	return user.Id, nil
}
```

批量插入，批量插入也会同步返回插入之后的主键信息：

```go
Copyfunc BatchInsertUsers(users []model.User) (ids []int64, err error) {
	tx := constants.GVA_DB.CreateInBatches(users, len(users))
	if tx.Error != nil {
		constants.GVA_LOG.Error("BatchInsert err", zap.Any("err", tx.Error))
		return []int64{}, tx.Error
	}
	ids = []int64{}
	for idx, user := range users {
		ids[idx] = user.Id
	}
	return ids, nil
}
```

插入冲突操作-Upsert：

如果你的表设置了唯一索引的情况下，插入可能会出现主键冲突的情况，MySQL 本身是提供了相关的操作命令 *ON DUPLICATE KEY UPDATE*，那么对应到 Gorm 中的函数是 Upsert：

```go
Copy// 在冲突时，什么都不做
constants.GVA_DB.Clauses(clause.OnConflict{DoNothing: true}).Create(&user)

// 在`id`冲突时，将列更新为默认值
constants.GVA_DB.Clauses(clause.OnConflict{
  Columns:   []clause.Column{{Name: "id"}},
  DoUpdates: clause.Assignments(map[string]interface{}{"name": "","age":0, "sex": 1}),
}).Create(&user)

// 在`id`冲突时，将列更新为新值
constants.GVA_DB.Clauses(clause.OnConflict{
  Columns:   []clause.Column{{Name: "id"}},
  DoUpdates: clause.AssignmentColumns([]string{"name", "age", "sex", "phone"}),
}).Create(&user)

// 在冲突时，更新除主键以外的所有列到新值。
constants.GVA_DB.Clauses(clause.OnConflict{UpdateAll: true,}).Create(&user)
```

##### 删除相关

根据主键删除：

```go
Copy//根据 id 删除数据
func DeleteUserById(id int64) (err error) {
	user := model.User{Id: id}
	err = constants.GVA_DB.Delete(&user).Error
	if err != nil {
		constants.GVA_LOG.Error("DeleteUserById err", zap.Any("err", err))
		return err
	}
	return nil
}
```

根据条件删除：

```go
Copyconstants.GVA_DB.Where("sex = ?", 0).Delete(model.User{})
```

批量删除：

```go
Copy//根据 id 批量删除数据
func BatchDeleteUserByIds(ids []int64) (err error) {
	if ids == nil || len(ids) == 0 {
		return
	}
	//删除方式1
	err = constants.GVA_DB.Where("id in ?", ids).Delete(model.User{}).Error
	if err != nil {
		constants.GVA_LOG.Error("DeleteUserById err", zap.Any("err", err))
		return err
	}

	//删除方式 2
	//constants.GVA_DB.Delete(model.User{}, "id in ?", ids)

	return nil
}
```

对于全局删除的阻止设定

如果在没有任何条件的情况下执行批量删除，GORM 不会执行该操作，并返回 `ErrMissingWhereClause` 错误。对此，你必须加一些条件，或者使用原生 SQL，或者启用 `AllowGlobalUpdate` 模式，例如：

```go
Copy// DELETE FROM `user` WHERE 1=1
constants.GVA_DB.Where("1 = 1").Delete(&model.User{})

//原生sql删除
constants.GVA_DB.Exec("DELETE FROM user")

//跳过设定
constants.GVA_DB.Session(&gorm.Session{AllowGlobalUpdate: true}).Delete(&model.User{})
```

##### 更新操作

全量更新 struct 的所有字段，包括零值：

```go
Copy//根据id更新数据，全量字段更新，即使字段是0值
func UpdateUserById(user model.User) (err error) {
	err = constants.GVA_DB.Save(&user).Error
	if err != nil {
		constants.GVA_LOG.Error("UpdateUserById err", zap.Any("err", err))
		return err
	}
	return nil
}
```

更新指定列：

```go
Copy//更新指定列
//update user set `columnName` = v where id = id;
func UpdateSpecialColumn(id int64, columnName string, v interface{}) (err error) {
	err = constants.GVA_DB.Model(&model.User{Id: id}).Update(columnName, v).Error
	if err != nil {
		constants.GVA_LOG.Error("UpdateSpecialColumn err", zap.Any("err", err))
		return err
	}
	return nil
}
```

更新非0值的字段：

```go
Copy//更新- 根据 `struct` 更新属性，只会更新非零值的字段
//update user set `columnName` = v where id = id;
//当通过 struct 更新时，GORM 只会更新非零字段。 如果您想确保指定字段被更新，你应该使用 Select 更新选定字段，或使用 map 来完成更新操作
func UpdateSelective(user model.User) (effected int64, err error) {
	tx := constants.GVA_DB.Model(&user).Updates(&model.User{
		Id:    user.Id,
		Name:  user.Name,
		Age:   user.Age,
		Sex:   user.Sex,
		Phone: user.Phone,
	})
}
```

如果你想更新0值的字段，那么可以使用 Select 函数先选择指定的列名，或者使用 map 来完成：

```go
Copy//map 方式会更新0值字段
tx = constants.GVA_DB.Model(&user).Updates(map[string]interface{}{
  "Id":    user.Id,
  "Name":  user.Name,
  "Age":   user.Age,
  "Sex":   user.Sex,
  "Phone": user.Phone,
})
```

Select 方式指定列名：

```go
Copy//Select 方式指定列名
tx = constants.GVA_DB.Model(&user).Select("Name", "Age", "Phone").Updates(&model.User{
  Id:    user.Id,
  Name:  user.Name,
  Age:   user.Age,
  Sex:   user.Sex,
  Phone: user.Phone,
})
```

Select 选定所有列名：

```go
Copy// Select 所有字段（查询包括零值字段的所有字段）
tx = constants.GVA_DB.Model(&user).Select("*").Updates(&model.User{
  Id:    user.Id,
  Name:  user.Name,
  Age:   user.Age,
  Sex:   user.Sex,
  Phone: user.Phone,
})
```

Select 排除指定列名：

```go
Copy// Select 除 Phone 外的所有字段（包括零值字段的所有字段）
tx = constants.GVA_DB.Model(&user).Select("*").Omit("Phone").Updates(&model.User{
  Id:    user.Id,
  Name:  user.Name,
  Age:   user.Age,
  Sex:   user.Sex,
  Phone: user.Phone,
})
```

根据条件批量更新：

```go
Copy//根据 条件 批量更新
func BatchUpdateByIds(ids []int64, user model.User) (effected int64, err error) {
  if ids == nil || len(ids) == 0 {
    return
  }
  tx := constants.GVA_DB.Model(model.User{}).Where("id in ?", ids).Updates(&user)
  if tx.Error != nil {
    return 0, tx.Error
  }
  return tx.RowsAffected, nil
}
```

##### 查询操作

查询是重头戏放在最后。

Gorm 提供的便捷查询：

First:获取第一条记录（主键升序）

```go
Copy// SELECT * FROM user ORDER BY id LIMIT 1;
constants.GVA_DB.First(&user)
```

获取一条记录，没有指定排序字段：

```go
Copy// SELECT * FROM user LIMIT 1;
constants.GVA_DB.Take(&user)
```

获取最后一条记录（主键降序）:

```go
Copy// SELECT * FROM user ORDER BY id DESC LIMIT 1;
constants.GVA_DB.Last(&user)
```

使用主键的方式查询：

```go
Copy// SELECT * FROM user WHERE id = 10;
constants.GVA_DB.First(&user, 10)

// SELECT * FROM user WHERE id = 10;
constants.GVA_DB.First(&user, "10")

// SELECT * FROM user WHERE id IN (1,2,3);
constants.GVA_DB.Find(&user, []int{1,2,3})
```

条件查询：

```go
Copy// 获取第一条匹配的记录
// SELECT * FROM user WHERE name = 'xiaoming' ORDER BY id LIMIT 1;
constants.GVA_DB.Where("name = ?", "xiaoming").First(&user)

// 获取全部匹配的记录
// SELECT * FROM user WHERE name <> 'xiaoming';
constants.GVA_DB.Where("name <> ?", "xiaoming").Find(&user)

// IN
// SELECT * FROM user WHERE name IN ('xiaoming','xiaohong');
constants.GVA_DB.Where("name IN ?", []string{"xiaoming", "xiaohong"}).Find(&user)

// LIKE
// SELECT * FROM user WHERE name LIKE '%ming%';
constants.GVA_DB.Where("name LIKE ?", "%ming%").Find(&user)

// AND
// SELECT * FROM user WHERE name = 'xiaoming' AND age >= 33;
constants.GVA_DB.Where("name = ? AND age >= ?", "xiaoming", 33).Find(&user)

// Time
// SELECT * FROM user WHERE updated_at > '2021-03-10 15:44:23';
constants.GVA_DB.Where("updated_at > ?", "2021-03-10 15:44:23").Find(&user)

// BETWEEN
// SELECT * FROM user WHERE created_at BETWEEN ''2021-03-07 15:44:23' AND '2021-03-10 15:44:23';
constants.GVA_DB.Where("created_at BETWEEN ? AND ?", "2021-03-07 15:44:23", "2021-03-10 15:44:23").Find(&user)
```

not 条件操作：

```go
Copy// SELECT * FROM user WHERE NOT name = "xiaoming" ORDER BY id LIMIT 1;
constants.GVA_DB.Not("name = ?", "xiaoming").First(&user)

// Not In
// SELECT * FROM user WHERE name NOT IN ("xiaoming", "xiaohong");
constants.GVA_DB.Not(map[string]interface{}{"name": []string{"xiaoming", "xiaohong"}}).Find(&user)

// Struct
// SELECT * FROM user WHERE name <> "xiaoming" AND age <> 20 ORDER BY id LIMIT 1;
constants.GVA_DB.Not(model.User{Name: "xiaoming", Age: 20}).First(&user)

// 不在主键切片中的记录
// SELECT * FROM user WHERE id NOT IN (1,2,3) ORDER BY id LIMIT 1;
constants.GVA_DB.Not([]int64{1,2,3}).First(&user)
```

or 操作：

```go
Copy// SELECT * FROM user WHERE name = 'xiaoming' OR name = 'xiaohong';
constants.GVA_DB.Where("name = ?", "xiaoming").Or("name = ?", "xiaohong").Find(&user)

// Struct
// SELECT * FROM user WHERE name = 'xiaoming' OR (name = 'xiaohong' AND age = 20);
constants.GVA_DB.Where("name = 'xiaoming'").Or(model.User{Name: "xiaohong", Age: 20}).Find(&user)

// Map
// SELECT * FROM user WHERE name = 'xiaoming' OR (name = 'xiaohong' AND age = 20);
constants.GVA_DB.Where("name = 'xiaoming'").Or(map[string]interface{}{"name": "xiaohong", "age": 20}).Find(&user)
```

查询返回指定字段：

如果你只要要查询特定的字段，可以使用 Select 来指定返回字段：

```go
Copy// SELECT name, age FROM user;
constants.GVA_DB.Select("name", "age").Find(&user)

// SELECT name, age FROM user;
constants.GVA_DB.Select([]string{"name", "age"}).Find(&user)

// SELECT COALESCE(age,'20') FROM user;
constants.GVA_DB.Table("user").Select("COALESCE(age,?)", 20).Rows()
```

指定排序方式：

```go
Copy// SELECT * FROM users ORDER BY age desc, name;
constants.GVA_DB.Order("age desc, name").Find(&users)

// 多个 order
// SELECT * FROM users ORDER BY age desc, name;
constants.GVA_DB.Order("age desc").Order("name").Find(&users)

// SELECT * FROM users ORDER BY FIELD(id,1,2,3)
constants.GVA_DB.Clauses(clause.OrderBy{
  Expression: clause.Expr{SQL: "FIELD(id,?)", Vars: []interface{}{[]int{1, 2, 3}}, WithoutParentheses: true},
}).Find(&model.User{})
```

分页查询：

```go
Copy// SELECT * FROM user LIMIT 10;
constants.GVA_DB.Limit(10).Find(&user)

// SELECT * FROM user OFFSET 10;
constants.GVA_DB.Offset(10).Find(&user)

// SELECT * FROM user OFFSET 0 LIMIT 10;
constants.GVA_DB.Limit(10).Offset(0).Find(&user)
```

分组查询-Group & Having：

```go
Copy// SELECT name, sum(age) as total FROM `users` WHERE name LIKE "ming%" GROUP BY `name`
constants.GVA_DB.Model(&model.User{}).Select("name, sum(age) as total").Where("name LIKE ?", "group%").Group("name").First(&result)


// SELECT name, sum(age) as total FROM `users` GROUP BY `name` HAVING name = "group"
constants.GVA_DB.Model(&model.User{}).Select("name, sum(age) as total").Group("name").Having("name = ?", "group").Find(&result)
```

Distinct 使用：

```go
Copy//SELECT distinct(name, age) from user order by name, age desc
constants.GVA_DB.Distinct("name", "age").Order("name, age desc").Find(&user)
```

#### 事务操作[#](https://www.cnblogs.com/rickiyang/p/14517120.html#2315536209)

如同在 MySQL 中操作事务一样，事务的开始是以 Begin 开始，以 Commit 结束：

```go
Copy//事务测试
func TestGormTx(user model.User) (err error) {
	tx := constants.GVA_DB.Begin()
	// 注意，一旦你在一个事务中，使用tx作为数据库句柄
	if err := tx.Create(&model.User{
		Name:  "liliya",
		Age:   13,
		Sex:   0,
		Phone: "15543212346",
	}).Error; err != nil {
		tx.Rollback()
		return err
	}
	
	if err := tx.Updates(&model.User{
		Id:    user.Id,
		Name:  user.Name,
		Age:   user.Age,
		Sex:   user.Sex,
		Phone: user.Phone,
	}).Error; err != nil {
		tx.Rollback()
		return err
	}

	tx.Commit()
	return nil
}
```

以上就是关于 GORM 使用相关的操作说明以及可能会出现的问题，关于 Gorm 的使用还有一些高级特性，这里就不做全面的演示，还是先熟悉基本 api 的操作等需要用到高级特性的时候再去看看也不迟。示例代码都已经上传到 Github，大家可以下载下来练习一下。