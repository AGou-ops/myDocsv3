# Django 连接外部数据库

## Mariadb、MySQL

1、安装`pymsql`模块

```bash
pip3 install pymysql
```

2、在当前app的`__init__.py`文件中引入该模块

``` python
import pymysql 
pymysql.install_as_MySQLdb()
```

3、修改`settings.py`配置文件

```python
# 找到Database配置段， 参考如下配置

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'test_application',
        'USER': 'root',
        'PASSWORD': '123',
        'HOST': '172.12.0.2',
        'PORT': '3306',
    }
}
```

4、编写`models.py`模型文件 

如果使用`pycharm`的话，此时就可以使用数据库插件进行测试连接数据库 ，如果没有问题的话，就可以继续下面的操作了。（可选）

在项目app的`models.py`模型文件中，输入以下测试内容（该示例代码来源于官方站点）

```python
from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```

5、进行数据迁移

```bash
# 在终端下执行以下命令
python manage.py makemigrations [指定特定的APP，可无]		# 检测对模型文件的修改，并把修改的部分存储为一次迁移
python manage.py sqlmigrate test_application 0001 	# 查看模型文件生成的sql语句
python manage.py migrate		# 在数据库里创建新定义的模型的数据表
```

至此，简单的连接至`Mairadb/mysql`数据库就完成了。



