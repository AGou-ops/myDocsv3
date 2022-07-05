# Docker Private Registry  

## 一、Docker私有仓库

  前面的章节有讲过公有仓库的使用，如 DockerHub 和阿里云镜像仓库。这种方式有明显的缺陷：push 和 pull 的速度很慢，假若实践环境有上百台机器，那需要多大带宽才能 hold 住。所以多数时候还是需要创建自己的私有仓库。工作中的生产环境主机选择基本有三种：自建机房、IDC机房托管和阿里公有云，前两种情况最好是将 docker 私有仓库建立在局域网内，而第三种使用阿里云镜像仓库无非是最恰当的选择。搭建私有仓库有两种种方式：

- 使用 Docker 官方提供的 docker-distribution。可以通过 docker container 或者 yum 的方式安装。docker container 的方式需要把镜像存储目录挂载到宿主机的某目录下，防止容器意外中止或者删除导致仓库不可用。此种 registry 功能比较单一。
- 使用 harbor，这是 VMware 基于 docker-distribution 二次开发的软件，现在已经加入了 CNCF。功能强大，界面美观。值得一提的是harbor支持中文，是不是很 happy，道友们？因为二次开发此软件的主力是 VMware 中国区团队，so。另外，原本的 harbor 部署是非常困难的，因此 harbor 官网直接把 harbor 做成了可以在容器中运行的应用，且 harbor 容器启动时要依赖于其它一些容器协同工作，所以它在部署和使用时需要用到 docker 的单机编排工具 docker compose。

## 二、搭建 Docker 私有仓库

### Docker-distribution

 1. 安装docker-distribution

```bash
[root@docker2 ~]\# yum -y install docker-distribution
[root@docker2 ~]\# rpm -ql docker-distribution
/etc/docker-distribution/registry/config.yml
/usr/bin/registry
/usr/lib/systemd/system/docker-distribution.service
/usr/share/doc/docker-distribution-2.6.2
/usr/share/doc/docker-distribution-2.6.2/AUTHORS
/usr/share/doc/docker-distribution-2.6.2/CONTRIBUTING.md
/usr/share/doc/docker-distribution-2.6.2/LICENSE
/usr/share/doc/docker-distribution-2.6.2/MAINTAINERS
/usr/share/doc/docker-distribution-2.6.2/README.md
/var/lib/registry
# 可以看到镜像存储的位置是 /var/lib/registry 下，修改 yml 配置文件可以定义这个路径，这里使用默认配置。
[root@docker2 ~]\# cat /etc/docker-distribution/registry/config.yml 
version: 0.1
log:
  fields:
    service: registry
storage:
    cache:
        layerinfo: inmemory
    filesystem:
        rootdirectory: /var/lib/registry
http:
    addr: :5000        # 地址留空表示监听本机所有地址，默认监听在5000端口
[root@docker2 ~]\# systemctl start docker-distribution.service
[root@docker2 ~]\# lsof -i:5000
COMMAND    PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
registry 16006 root    3u  IPv6  51023      0t0  TCP *:commplex-main (LISTEN)
```

 2. 现在已经搭建完成了， 我们可以将 docker1 上的镜像 push 到此仓库。如果配置内网 hosts 解析，使用主机名也可以，如 docker02:5000。

```bash
[root@docker1 ~]\# docker tag nginx:v5 10.0.0.12:5000/nginx:v5
[root@docker1 ~]\# docker push 10.0.0.12:5000/nginx:v5 
The push refers to repository [10.0.0.12:5000/nginx]
Get https://10.0.0.12:5000/v2/: http: server gave HTTP response to HTTPS client
# 报错是因为客户端默认发出的请求是https的，我自建的仓库是http的。我们需要修改docker配置文件，指明就是使用非安全、非加密的registry。
[root@docker1 ~]\# vim /etc/docker/daemon.json 
{
  "registry-mirrors": ["https://p4y8tfz4.mirror.aliyuncs.com"],
  "insecure-registries": ["10.0.0.12:5000"]
}
[root@docker1 ~]\# systemctl restart docker.service
# 再次尝试push，推送成功
[root@docker1 ~]\# docker push 10.0.0.12:5000/nginx:v5
v5: digest: sha256:28570ef37c4b34702131c97b3b51b5c97e50c344cefbdb47f6ee906a47ba3d5c size: 1567
```

 3. 现在去 docker2 上面查看从 docker1 推上来的镜像。

```bash
[root@docker2 ~]\# ll /var/lib/registry/docker/registry/v2/repositories/
total 0
drwxr-xr-x 5 root root 55 Jul 24 11:03 nginx
# 如果其它docker主机想pull此镜像，也是需要修改docker的配置文件。
[root@docker2 ~]\# vim /etc/docker/daemon.json 
{
  "registry-mirrors": ["https://p4y8tfz4.mirror.aliyuncs.com"],
  "insecure-registries": ["10.0.0.12:5000"]
}
[root@docker2 ~]\# systemctl restart  docker
[root@docker2 ~]\# docker pull 10.0.0.12:5000/nginx:v5
[root@docker2 ~]\# docker images 
REPOSITORY             TAG                 IMAGE ID            CREATED             SIZE
10.0.0.12:5000/nginx   v5                  e74b49bcb92b        23 hours ago        16MB
```



### VMware harbor

 1. harbor 托管在[ GitHub ](https://github.com/goharbor/harbor)上，页面搜索" Installation & Configuration Guide "可以查看安装步骤。我们[下载 harbor ](https://github.com/goharbor/harbor/releases)压缩包，并解压。

```bash
# 在下载之前先停掉之前安装的 docker-distribution
[root@docker2 packages]\# systemctl stop docker-distribution.service
[root@docker2 packages]\# pwd
/server/packages
[root@docker2 packages]\# wget https://storage.googleapis.com/harbor-releases/release-1.8.0/harbor-offline-installer-v1.8.1.tgz
[root@docker2 packages]\# tar xf harbor-offline-installer-v1.8.1.tgz -C /usr/local/
[root@docker2 packages]\# cd /usr/local/harbor/
[root@docker2 harbor]\# ll
total 551208
-rw-r--r-- 1 root root 564403568 Jun 17 11:30 harbor.v1.8.1.tar.gz
-rw-r--r-- 1 root root      4512 Jul 24 19:39 harbor.yml
-rwxr-xr-x 1 root root      5088 Jun 17 11:29 install.sh
-rw-r--r-- 1 root root     11347 Jun 17 11:29 LICENSE
-rwxr-xr-x 1 root root      1654 Jun 17 11:29 prepare
```

 2. 配置 harbor.yml

```bash
# 从 1.8.0 版本后，harbor 配置文件由原先的 harbor.cfg 改为 harbor.yml。
[root@docker2 harbor]\# vim harbor.yml
hostname: 10.0.0.12                # 填写局域网或者互联网可以访问得地址，有域名可以写域名
harbor_admin_password: Harbor12345        # 管理员的初始密码，默认用户名为admin
database:
  password: root123            # 数据库密码。默认是root123
data_volume: /data            # 存储harbor数据的位置
jobservice:
  max_job_workers: 10          # 启动几个并发进程来处理用户的上传下载请求。一般略小于CPU核心数。
# 一般会修改的参数也就上面几项，另外http和https根据自己实际情况配置进行，这里就使用默认的http。
```

 3. 执行 ./install.sh 安装

```bash
[root@docker2 harbor]\# ./install.sh 

[Step 0]: checking installation environment ...

Note: docker version: 18.09.6
✖ Need to install docker-compose(1.18.0+) by yourself first and run this script again.
# 提示需要1.18.0以上版本的docker-compose，下面我们来看下默认的docker-compose版本是否满足我们的需求（需要安装了epel源）。
[root@docker2 harbor]\# yum info docker-compose | egrep -i 'repo|version'
Version     : 1.18.0
Repo        : epel/x86_64
[root@docker2 harbor]\# yum -y install docker-compose
# 开始安装harbor，因为需要解压使用harbor.v1.8.1.tar.gz中打包好的镜像，所以需要稍微等一下。
[root@docker2 harbor]\# ./install.sh
✔ ----Harbor has been installed and started successfully.----

Now you should be able to visit the admin portal at http://10.0.0.12. 
For more details, please visit https://github.com/goharbor/harbor .
[root@docker2 harbor]\# echo $?
0
[root@docker2 harbor]\# netstat -lntp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      730/sshd            
tcp        0      0 127.0.0.1:1514          0.0.0.0:*               LISTEN      18443/docker-proxy  
tcp6       0      0 :::80                   :::*                    LISTEN      19189/docker-proxy  
tcp6       0      0 :::22                   :::*                    LISTEN      730/sshd
```

 4. 访问harbor的web界面，上面执行 ./install.sh 的结尾有提示web登入的方式。默认用户名和密码：admin/Harbor12345

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190724202237293-876921723.png)

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190724202615893-50737295.png)

 5. 接下来我们开始创建私有仓库。

  a) 先创建一个普通的账户

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725094446704-776005948.png)

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725094741013-52063545.png)

  b) 切换上面的普通账户，新建立一个私有项目

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725101809716-845766517.png)

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725102401246-1107314761.png)

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725100543488-1831143084.png)

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725100707318-1874540469.png)

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725100757544-1958142252.png)

 6. 推送镜像到operator项目中

```bash
# 修改配置文件端口
[root@docker1 ~]\# vim /etc/docker/daemon.json 
{
  "registry-mirrors": ["https://p4y8tfz4.mirror.aliyuncs.com"],
  "insecure-registries": ["10.0.0.12"]
}
[root@docker1 ~]\# systemctl restart docker
[root@docker1 ~]\# docker images
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
10.0.0.12/operator/nginx   v6                  1bf6b39a84b9        43 hours ago        17MB
[root@docker1 ~]\# docker push 10.0.0.12/operator/nginx:v6
[root@docker1 ~]\# docker login -u merle 10.0.0.12
Password:
Login Succeeded
[root@docker1 ~]\# docker push 10.0.0.12/operator/nginx:v6
v6: digest: sha256:527ef2be458f05b4e50b5ef698fb1ea96feab8ea54dcba18da56a466b69034f3 size: 2193
```

 7. 刷新harbor页面

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725102644398-1962021861.png)

![img](https://img2018.cnblogs.com/blog/1419513/201907/1419513-20190725102722335-34976539.png)

 8. 到这私有仓库也就搭建完成了，我们也可以在 /data 目录下查看数据

```bash
[root@docker2 harbor]\# ll /data/registry/docker/registry/v2/repositories/operator/
total 0
drwxr-xr-x 5 10000 10000 55 Jul 25 10:25 nginx
```

 9. 最后，如果要对harbor服务做一些操作，需要使用docker-compose命令。

```bash
# 其实前面的./install.sh也是使用的 docker-compose create 和 docker-compose start 命令启动的 harbor。注意，命令执行需要再harbor的目录下，否则会报错找不到配置文件。
[root@docker2 harbor]\# docker-compose --help
[root@docker2 ~]\# docker-compose pause 
ERROR: 
        Can't find a suitable configuration file in this directory or any
        parent. Are you in the right directory?

        Supported filenames: docker-compose.yml, docker-compose.yaml
[root@docker2 ~]\# cd -
/usr/local/harbor
[root@docker2 harbor]\# docker-compose pause 
Pausing harbor-log        ... done
Pausing redis             ... done
Pausing harbor-db         ... done
Pausing registry          ... done
Pausing registryctl       ... done
Pausing harbor-core       ... done
Pausing harbor-portal     ... done
Pausing harbor-jobservice ... done
Pausing nginx             ... done
```

> 转载自：https://www.cnblogs.com/ccbloom/p/11233719.html