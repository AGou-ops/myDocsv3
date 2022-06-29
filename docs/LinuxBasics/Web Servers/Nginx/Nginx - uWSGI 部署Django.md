# Nginx+uWSGI部署Django项目

## Django 简介

**Django** 是一个**高级的Python 网络框架**，可以快速开发安全和可维护的网站。 由经验丰富的开发者构建，**Django**负责处理网站开发中麻烦的部分，因此你可以专注于编写应用程序，而无需重新开发。 它是免费和开源的，有活跃繁荣的社区，丰富的文档，以及很多免费和付费的解决方案。

##  部署流程(CentOS 7)

### 安装 Django

#### 安装 python3

```bash
$ yum install -y python3
```

#### 创建一个虚拟环境

首先创建`django`的工作目录：

```bash
$ mkdir my_django_app
$ cd my_django_app
```

使用如下命令创建一个虚拟环境（`venv`目录，里面包含了python的二进制包，pip等工具）：

```bash
$ python3 -m venv venv
```

使用上面刚创建好的虚拟环境：

```bash
$ source venv/bin/activate
```

#### 安装 Django

使用`pip`工具安装：

```bash
(venv)$ pip install django
```

验证是否安装成功：

```bash
(venv)$ python -m django --version
```

#### 创建一个 Django 项目

创建一个名为`mydiangoapp`的项目：

```bash
(venv)$ django-admin startproject mydjangoapp
```

迁移数据库并创建一个管理用户：

```bash
(venv)$ cd mydjangoapp
(venv)$ python manage.py migrate
(venv)$ python manage.py createsuperuser
# 接下来，会进入交互式命令，如下所示
Username (leave blank to use 'agou-ops'): admin
Email address: suofeiyaxx@gamil.com
Password: 
Password (again): 
Superuser created successfully.
```

默认情况下，Django使用的是`SQLite`数据库，如果用于生产环境，可以使用`PostgreSQL` ,` MariaDB `, `Oracle `或者`MySQL` 数据库.

---

:question:如果你是迁移的项目，运行以下步骤：

```bash
# 首先，清除初始迁移和删除默认的sqlite数据库
(venv)$ find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
(venv)$ find . -path "*/migrations/*.pyc"  -delete
(venv)$ rm -f db.sqlite3
# 运行如下命令同步迁移数据库
(venv)$ python manage.py collectstatic
(venv)$ python manage.py makemigrations
(venv)$ python manage.py migrate
```

#### 测试 Django 服务

```bash
(venv)$ python manage.py runserver [0.0.0.0:8000]
```

服务默认监听在本地的`8000`端口，打开浏览器，访问 http://127.0.0.1:8000 检查服务状态即可。

#### 取消激活虚拟环境

当所有任务都完成之后，如果想要返回到原来的终端，使用以下命令取消激活虚拟环境即可：

```bash
(venv)$ deactivate
```

### 配置 nginx 和 uwsgi

#### uwsgi 全局配置

```bash
sudo pip install uwsgi
sudo mkdir -p /etc/uwsgi/sites
cd /etc/uwsgi/sites
sudo vim mydjangoapp.ini
```

配置文件`mydiangoapp.ini`中添加如下内容：

```ini
[uwsgi]
project = <project_name>
username = <user_name>
base = /home/%(username)

chdir = %(base)/%(project)
home = %(base)/Env/env_1
module = %(project).wsgi:application

master = true
processes = 5

uid = %(username)
socket = /run/uwsgi/%(project).sock
chown-socket = %(username):nginx
chmod-socket = 660
vacuum = true
```

创建一个`Unix socket`来使用`uWSGI`协议来辅助 Ngx 反代：

```bash
# 编辑uwsgi的服务配置文件
$ sudo vim /etc/systemd/system/uwsgi.service
# ------------------------------
[Unit]
Description=uWSGI Emperor service

[Service]
# <user_name>为用户名称
ExecStartPre=/usr/bin/bash -c 'mkdir -p /run/uwsgi; chown <user_name>:nginx /run/uwsgi'
ExecStart=/usr/bin/uwsgi --emperor /etc/uwsgi/sites
Restart=always
KillSignal=SIGQUIT
Type=notify
NotifyAccess=all

[Install]
WantedBy=multi-user.target
```

#### nginx 反代设置

```nginx
server {
    listen 8000;
    server_name localhost;

    location = favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/<user_name>/<project_name>;
    }

    location / {
        include uwsgi_params;
        uwsgi_pass unix:/run/uwsgi/<project_name>.sock;
    }
}
```

---

增加权限及启动服务：

```bash
$ sudo nginx -t
$ sudo usermod -a -G <user_name> nginx
$ chmod 710 /home/<user_name>

$ sudo systemctl start nginx
$ sudo systemctl start uwsgi
$ sudo systemctl enable nginx
$ sudo systemctl enable uwsgi
```

:smile:到此安装完成，打开浏览器访问 http://127.0.0.1:8000 测试即可。

## 其他

### Django 使用 MySQL 数据库

安装`mysql`客户端工具（服务器端在此不再赘述）：

```bash
(venv)$ sudo yum install -y mysql-connector-python.x86_64 mysql-community-devel.x86_64 mysql-cluster-community-client.x86_64 mysql-shell.x86_64 mysql-router.x86_64 gcc
pip install mysqlclient # inside the virtual environment
```

修改配置文件`settings.py`：

```python
# 在行尾添加如下内容
STATIC_ROOT = os.path.join(BASE_DIR, "static/")
# 修改默认的数据库配置
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'first_db',		# 数据库提前自行创建
        'USER': 'root',
        'PASSWORD': 'your-root-password',
        'HOST': 'localhost',
        'PORT': '',
    }
}
# 修改监听地址，默认为本地localhost
ALLOWED_HOSTS = ['your_ip_here']
```

如果有`firewalld`防火墙，还需要：

```bash
$ sudo firewall-cmd --permanent --add-service=http
$ sudo firewall-cmd --permanent --add-port=8000/tcp
$ sudo firewall-cmd --complete-reload
$ sudo firewall-cmd --list-all
```

## 参考资料

- Deploy Django: https://www.codingpaths.com/django/deploy-django/