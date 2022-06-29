# Jenkins Basic

`Jenkins`是一个独立的、开源的自动化服务器可以用来自动执行各种各样的任务相关的建筑、测试和交付或部署软件。 `Jenkins`可以通过`本机系统安装包`, `Docker`, 甚至是任何机器运行独立的`Java运行时环境(JRE)`安装。

## 安装与使用

新版本`Jenkins`依赖于`jdk8`或者`jdk11`, 需要提前安装, 安装过程不再赘述.

下载并使用`war`包进行安装:

```bash
wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
java -jar jenkins.war
```

通过`yum`仓库或者直接下载`rpm`包安装:

```bash
# 通过仓库安装
sudo wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
sudo yum upgrade
sudo yum install jenkins java-1.8.0-openjdk-devel

# 直接下载rpm包安装
wget https://pkg.jenkins.io/redhat-stable/jenkins-2.235.2-1.1.noarch.rpm
yum localinstall -y jenkins-2.235.2-1.1.noarch.rpm
# yum install -y https://pkg.jenkins.io/redhat-stable/jenkins-2.235.2-1.1.noarch.rpm
```

启动`Jenkins`服务:

```bash
sudo systemctl start jenkins
# 查看启动状态
sudo systemctl status jenkins

# 如若使用的是war包, 启动命令如下所示
java -jar jenkins.war --httpPort=9090
```

最后, 打开浏览器访问 : http://127.0.0.1:8080 , 等待解锁`Jenkins`即可.([UNLOCK JENKINS](https://www.jenkins.io/doc/book/installing/#unlocking-jenkins))

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/jenkins-1.png)

等待安装插件:

![等待安装插件](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/jenkins-2.png)

:information_source:国内`Jenkins`插件镜像源: https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

> **Jenkins初始化过程中出现的问题:** 
>
> Jenkins 问题` An error occurred during installation: No such plugin: cloudbees-folder`
>
> **解决方案一:**
>
> 1. 上面的错误显示是，安装插件 cloudbees-folder 失败，是因为下载的 Jenkins.war 里没有 cloudbees-folder 插件,需要去 https://updates.jenkins-ci.org/download/plugins/cloudbees-folder/ 下载一个插件
> 2. 访问 IP:PORT/manage，越过配置插件的页面，直接访问
> 3. 点击【系统管理】–【管理插件】–【高级】–【上传插件】，手动安装下载好的插件，即可
>
> **解决方案二:** 
>
> 需要修改的是`jenkins.war`包，从服务器上下载好`jenkins.war`包进行修改, 只需将从https://updates.jenkins-ci.org/download/plugins/cloudbees-folder/ 下载好的插件添加进去, 然后回传到服务器, 最后重启`jenkins`即可.

成功部署结果:

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/jenkins-3.png)

## 通过 Docker 安装

官方`Docker`仓库: https://hub.docker.com/_/jenkins

```bash
docker pull jenkins

docker run --name myjenkins -p 8080:8080 -p 50000:50000 -v /var/jenkins_home jenkins
```

# 其他

### 切换语言为简体中文

安装`Locale plugin`插件, 选择`configuration`然后设置语言为`zh-CN`并勾选` Ignore browser preference and force this language to all users`即可.

:warning:如果安装完插件显示有部分中文异常的情况, 需要再安装`Localization: Chinese (Simplified)`插件试试, 倘若还是不行, 重启`jenkins`, 再重新安装插件试试.

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/jenkins-4.png)

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/jenkins-5.png)

最后重启`jenkins`即可, 打开浏览器访问:

```bash
http://xx.xx.xx.xx:8080/restart 	# xx.xx.xx.xx 为服务器IP
```

### 修改默认目录

在`Linux`和`Mac`系统下, `jenkins`的默认文件目录为`/var/lib/jenkins`, `windows`系统为`C:\Users\%USERNAME%\.jenkins`.

- 在`linux`或者`Mac`系统下修改:  只需在用户配置文件(`/etc/profile`)中添加`JENKINS_HOME`变量即可.
- `Windows`下修改, 添加一个用户变量`JENKINS_HOME`即可.

然后将原来`jenkins`目录中的文件复制到新文件夹中即可.

最后重启`jenkins`服务. http://127.0.0.1:8080/restart 

> Windows 下重启`jenkins`遇到的问题: `Jenkins cannot restart itself as currently configured.`
>
> **解决方法:**
>
> 进入` Manage Jenkins`, 找到`Install as Windows service`, 然后安装成为服务即可.

## 参考链接

- Jenkins User Docs: https://www.jenkins.io/doc/
- Jenkins installing: https://www.jenkins.io/doc/book/installing/
- "An error occurred during installation: No such plugin: cloudbees-folder": https://github.com/jenkinsci/docker/issues/424
- "Jenkins 安装插件 No such plugin: cloudbees-folder": https://blog.csdn.net/dhq779626019/article/details/105756115
- Jenkins Plugins: https://plugins.jenkins.io/
- Jenkins  Mirrors  status: http://mirrors.jenkins-ci.org/status.html

