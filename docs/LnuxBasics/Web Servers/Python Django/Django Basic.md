# Django Basic

## Django 简介

> Django 最初被设计用于具有快速开发需求的新闻类站点，目的是要实现简单快捷的网站开发。以下内容简要介绍了如何使用 Django 实现一个数据库驱动的 Web 应用。

## 快速安装及运行项目

```bash
# 准备虚拟环境
$ python3 -m venv test-env
(test-env) $ python3 -m pip install Django
(test-env) $ python3 -m django --version
```

### 创建项目

```bash
$ django-admin startproject mysite
# 结构大致如下所示
$ tree mysite/
mysite/
    manage.py	# 一个空文件，告诉 Python 这个目录应该被认为是一个 Python 包。
    mysite/
        __init__.py # 一个空文件，告诉 Python 这个目录应该被认为是一个 Python 包。
        settings.py # Django 项目的配置文件。
        urls.py # Django 项目的配置文件。
        asgi.py # 作为你的项目的运行在 ASGI 兼容的 Web 服务器上的入口。
        wsgi.py # 作为你的项目的运行在 WSGI 兼容的 Web 服务器上的入口。
# 运行服务
$ python manage.py runserver [0:8000]
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
February 04, 2021 - 10:43:41
Django version 3.1.6, using settings 'envMonitorSystem.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

随后打开浏览器访问 http://127.0.0.1:8000 查看即可。

### 为项目添加应用

一个项目可以包括多个应用，一个应用也可以存在于多个项目之中。

```bash
$ python manage.py startapp test_app1
```

### 创建视图

https://docs.djangoproject.com/zh-hans/3.1/intro/tutorial01/#write-your-first-view

### 添加管理页面

```bash
# 创建管理员账号
python manage.py createsuperuser
```

## 参考链接

- djangoproject 中文教程：https://docs.djangoproject.com/zh-hans/3.1/