# 基于kubernetes平台的CICD持续集成



### 文章目录

[toc]

## 1.基于k8s集群的Jenkins持续集成

Jenkins更新传统LNMT项目流程很简单，Jenkins也只需要部署在物理服务器即可实现项目版本的持续更新迭代

如果项目是部署在k8s集群，Jenkins还在物理机上部署的话，项目更新流程将会变得繁琐，大致流程：首先Jenkins将项目编译成war包，然后将war在一台物理机上运行，如果运行成功，再调用另一个Jenkins任务，这个Jenkins任务主要的作用就是将war包和ROOT目录copy到初始镜像中，当镜像构建完毕后，将镜像推送至harbor平台，再由运维拿着镜像版本放在k8s里去升级。

如果Jenkins只是单单部署在一台物理机上，某台Jenkins挂掉后，整个CI/CD平台将无法更新迭代，这是一个很严重的后果，如果将Jenkins部署在k8s平台，借助k8s pod自愈功能，Jenkins挂掉的情况几乎不会发生。

Jenkins部署在k8s环境之后，通过建立RBAC授权机制，可以实现Jenkins一键更新迭代到k8s环境，无需在使用物理机环境那么繁琐的步骤

> 当Jenkins与kubernetes集成后的更新流程：
>
> 1）Jenkins从gitlab上拉取开发提交的代码
>
> 2）Jenkins调用maven进行编译项目
>
> 3）Jenkins调用docker将写好dockerfile构建成镜像
>
> 4）将镜像推送至harbor仓库
>
> 5）Jenkins调用k8s将镜像部署在k8s环境

![img](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/fcebc6a2b3f3211c4481fe783597dce6.png)

## 2.将Jenkins部署在k8s集群

> **部署思路：**
>
> 1.由于Jenkins要更新项目到各个namespace，因此需要做RBAC授权，准备一个ServiceAccount，直接将ServiceAccount绑定到cluster-admin集群角色上，使Jenkins拥有对所有namespace下的项目有操作权限。
>
> 2.Jenkins部署采用statefulset控制器，并配合StorageClass动态将Jenkins数据进行持久化。
>
> 3.准备svc资源，将Jenkins的8080/50000端口进行暴露。

### 2.1.编写Jenkins namespace文件

```yaml
[root@k8s-master1 jenkins]\# cat jenkins-namespace.yaml 
apiVersion: v1 
kind: Namespace 
metadata: 
    name: jenkins 
```

### 2.2.编写Jenkins rbac授权文件

创建一个serviceaccount账号Jenkins，直接将sa账号与cluster-admin集群角色进行绑定

```yaml
[root@k8s-master1 jenkins]\# cat jenkins-rbac.yaml 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: jenkins
  namespace: jenkins

---

apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: jenkins-crb
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: jenkins
  namespace: jenkins

```

### 2.3.编写Jenkins statefulset资源文件

Jenkins也会产生数据，因此采用statefulset部署有状态的服务，并配合StorageClass动态创建存储系统

```yaml
[root@k8s-master1 jenkins]\# cat jenkins-statefulset.yaml 
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: jenkins-master
  namespace: jenkins
spec:
  replicas: 1
  serviceName: jenkins
  selector:
    matchLabels:
      app: jenkins-master
  template:
    metadata:
      labels:
        app: jenkins-master
    spec:
      serviceAccount: jenkins
      initContainers:
      - name: jenkins-chown
        image: harbor.jiangxl.com/jenkins/busybox:1.30
        command: ["sh","-c","chown -R 1000:1000 /var/jenkins_home"]
        securityContext:
          privileged: true
        volumeMounts:
        - name: jenkins-data
          mountPath: /var/jenkins_home
      containers:
      - name: jenkins-master
        image: harbor.jiangxl.com/jenkins/jenkinsci-blueocean:1.24.6
        env:
        - name: JAVA_OPTS
          value: "-Xms4096m -Xmx5120m -Duser.timezone=Asia/Shanghai -Dhudson.model.DirectoryBrowserSupport.CSP="
        ports:
        - name: http
          containerPort: 8080
        - name: slave
          containerPort: 50000
        volumeMounts:
        - name: jenkins-data
          mountPath: /var/jenkins_home
  volumeClaimTemplates:
    - metadata:
        name: jenkins-data
      spec:
        storageClassName: jenkins-storageclass
        accessModes:
        - ReadWriteMany
        resources:
          requests:
            storage: 10Gi
```

### 2.4.编写Jenkins StorageClass资源文件

```yaml
[root@k8s-master1 jenkins]\# cat jenkins-storageclass.yaml 
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: jenkins-storageclass
provisioner: nfs-storage-01
reclaimPolicy: Retain
```

### 2.5.编写Jenkins svc资源文件

```yaml
[root@k8s-master1 jenkins]\# cat jenkins-svc.yaml 
apiVersion: v1
kind: Service
metadata:
  labels:
    app: jenkins-master
  name: jenkins-svc
  namespace: jenkins
spec:
  ports:
  - name: http
    port: 8080
    targetPort: 8080
    nodePort: 38080
  - name: slave
    port: 50000
    targetPort: 50000
    nodePort: 50000
  selector: 
    app: jenkins-master
  type: NodePort
```

### 2.6.准备Jenkins镜像并推送至harbor

```sh
[root@k8s-master1 jenkins]\# docker pull jenkinsci/blueocean:1.24.6
[root@k8s-master1 jenkins]\# docker tag jenkinsci/blueocean:1.24.6 harbor.jiangxl.com/jenkins/jenkinsci-blueocean:1.24.6
[root@k8s-master1 jenkins]\# docker push harbor.jiangxl.com/jenkins/jenkinsci-blueocean:1.24.6
```

### 2.7.创建所有资源并查看资源的状态

```sh
1.创建所有资源
[root@k8s-master1 jenkins]\# kubectl apply -f ./
namespace/jenkins created
serviceaccount/jenkins created
clusterrolebinding.rbac.authorization.k8s.io/jenkins-crb created
statefulset.apps/jenkins-master created
storageclass.storage.k8s.io/jenkins-storageclass created
service/jenkins-svc created

2.查看资源状态
[root@k8s-master1 jenkins]\# kubectl get pod,statefulset,svc,storageclass,sa -n jenkins
NAME                   READY   STATUS    RESTARTS   AGE
pod/jenkins-master-0   1/1     Running   0          31m

NAME                              READY   AGE
statefulset.apps/jenkins-master   1/1     31m

NAME                  TYPE       CLUSTER-IP   EXTERNAL-IP   PORT(S)                         AGE
service/jenkins-svc   NodePort   10.101.2.5   <none>        8080:38080/TCP,50000:50000/TCP   31m

NAME                                               PROVISIONER      RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
storageclass.storage.k8s.io/jenkins-storageclass   nfs-storage-01   Retain          Immediate           false                  31m

NAME                     SECRETS   AGE
serviceaccount/jenkins   1         31m

3.查看pvc，已经动态创建
[root@k8s-master1 jenkins]\# kubectl get pvc -n jenkins
NAME                            STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS           AGE
jenkins-data-jenkins-master-0   Bound    pvc-3f49831b-7faa-456e-9a2f-65b6085933de   10Gi       RWX            jenkins-storageclass   32m
```

### 2.8.页面安装Jenkins

> 访问集群节点任意ip+38080端口
>
> 访问看到如下页面说明Jenkins还在启动中，当日志输出到下图样子时，刷新Jenkins即可进入系统，复制日志中password解锁Jenkins
>
> ![请添加图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/5072a83139484c61860f966035834408.png)

**1）解锁Jenkins**

可以在日志中复制password，也可以查看/var/jenkins_home/secrets/initialAdminPassword这个文件

![请添加图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/fd63e40a9e9f4cc8b62736a8f95e13fd.png)

**2）选择插件来安装**

把所有的插件都勾选上，避免后期出现软件依赖

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/a5dc04c56dc34f3098980e8a45329ad3.png)

点击全部即可全部勾选
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20a43cdcdaf04446a9e34d3910cf3720.png)

**3）等待插件安装完**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/a192f76b08cf490d924b8c07e2fca199.png)

**4）创建Jenkins账号**
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/6da90fc978394f78a6973653aa2d9b40.png)

**5）设置实例地址**
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b7698c5a282d4fd7805a01ea7e0d7785.png)

**6）重启Jenkins**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/0147db61d00345bb9bb5c89f20fb3f91.png)

### 2.9.登陆Jenkins

账号admin密码admin
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/ad1325a8e3a347d3bc795029cb401a12.png)

## 3.使用docker部署gitlab

> 这里只是扩展一下如何用docker部署gitlab，建议采用4中的k8s部署gitlab

### 3.1.部署gitlab

```sh
[root@k8s-master2 ~]\# docker run -d --hostname 192.168.16.105 -p 8443:443 -p 8080:80 -p 8022:22 --name gitlab --restart always -v /data2/k8s/gitlab-data/config/:/etc/gitlab -v /data2/k8s/gitlab-data/logs/:/var/log/gitlab -v /data2/k8s/gitlab-data/data/:/var/opt/gitlab gitlab/gitlab-ce:13.11.4-ce.0

[root@k8s-master2 ~]\# docker ps
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS                   PORTS                                                               NAMES
33d868fe0369        gitlab/gitlab-ce:13.11.4-ce.0   "/assets/wrapper"        14 minutes ago      Up 4 minutes (healthy)   0.0.0.0:8022->22/tcp, 0.0.0.0:8080->80/tcp, 0.0.0.0:8443->443/tcp   gitlab
```

当出现以下页面表示gitlab启动完成
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/8aecebfb08ed4dce8db08a824c33bdb1.png)

### 3.2.访问gitlab

访问http://192.168.16.105:8080/

第一次登陆需要设置root密码
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31be9f25fca64dd699b78ef9bbeaf6c4.png)
设置完密码即可登陆系统
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/cb47d2b998d940dd897ce6c253a29f20.png)

## 4.将gitlab部署在k8s集群

**部署分析：**

- gitlab采用statefulset控制器部署，通过StorageClass将gitlab的配置文件、gitlab的数据文件进行持久化存储
- 由于gitlab镜像集成了很多组件，每个组件在gitlab数据目录所使用的用户属组不同，因此都需要针对每个组件去修改对应的所属用户，否则无权限启动相关组件，首先用docker运行gitlab镜像，查询出gitlab数据目录中不同组件对应的不用所属用户，然后在初始化容器中进行赋权
- 修改gitlab的配置文件，确定对外提供访问的url
- gitlab的80端口通过svc资源进行暴露

### 4.1.将gitlab镜像推送至harbor仓库

```sh
[root@k8s-master1 ~]\# docker tag gitlab/gitlab-ce:13.11.4-ce.0 harbor.jiangxl.com/jenkins/gitlab-ce:13.11.4-ce.0 
[root@k8s-master1 ~]\# docker push  harbor.jiangxl.com/jenkins/gitlab-ce:13.11.4-ce.0 
```

### 4.2.使用docker运行gitlab查询用户的id号

gitlab每个组件都是不同的所属用户来管理，我们不明确每个用户的uid、gid是多少，因此需要先用docker启动查询一下

需要记好这些组件的用户uid、gid，一会在statfulset资源中定义初始化容器时会用到

```sh
1.使用docker运行gitlab容器
[root@k8s-master1 ~]\# docker run -d harbor.jiangxl.com/jenkins/gitlab-ce:13.11.4-ce.0

2.进入容器
[root@k8s-master1 ~]\# docker exec -it 33d868fe0369 bash

3.查看gitlab数据路径下各组件使用的所属用户
root@192:/# ll /var/opt/gitlab/
total 20
drwxr-xr-x 20 root              root       4096 May 20 09:12 ./
drwxr-xr-x  1 root              root         20 May 14 15:17 ../
drwxr-xr-x  2 git               git           6 May 20 09:01 .bundle/
-rw-r--r--  1 git               git         363 May 20 09:01 .gitconfig
drwx--->--->  2 git               git          29 May 20 09:01 .ssh/
drwxr-x--->  3 gitlab-prometheus root         42 May 20 09:11 alertmanager/
drwx--->--->  2 git               root          6 May 20 09:01 backups/
-rw--->--->-  1 root              root         38 May 20 09:06 bootstrapped
drwx--->--->  3 git               git          26 May 20 09:01 git-data/
drwx--->--->  3 git               root        123 May 20 09:11 gitaly/
drwxr-xr-x  3 git               root         20 May 20 09:01 gitlab-ci/
drwxr-xr-x  2 git               root         53 May 20 09:11 gitlab-exporter/
drwxr-xr-x  9 git               root        160 May 20 09:11 gitlab-rails/
drwx--->--->  2 git               root         24 May 20 09:10 gitlab-shell/
drwxr-x--->  3 git               gitlab-www   55 May 20 09:11 gitlab-workhorse/
drwx--->--->  4 gitlab-prometheus root         83 May 20 09:12 grafana/
drwx--->--->  3 root              root         71 May 21 02:21 logrotate/
drwxr-x--->  9 root              gitlab-www  163 May 20 09:05 nginx/
drwx--->--->  2 gitlab-psql       root         26 May 20 09:11 postgres-exporter/
drwxr-xr-x  3 gitlab-psql       root         81 May 20 09:11 postgresql/
drwxr-x--->  4 gitlab-prometheus root         53 May 20 09:11 prometheus/
-rw-r--r--  1 root              root        226 May 20 09:12 public_attributes.json
drwxr-x--->  2 gitlab-redis      git          60 May 21 02:29 redis/
-rw-r--r--  1 root              root         40 May 20 09:01 trusted-certs-directory-hash

4.只需要看postgresql、reids、gitlab-data、prometheus目录的用户即可，主要这四个
#可以看到gitlab-data的用户是git、postgresql的用户是gitlab-psql、redis的是gitlab-redis
root@192:/# id git
uid=998(git) gid=998(git) groups=998(git)
root@192:/# 
root@192:/# id gitlab-psql
uid=996(gitlab-psql) gid=996(gitlab-psql) groups=996(gitlab-psql)
root@192:/# 
root@192:/# id gitlab-redis
uid=997(gitlab-redis) gid=997(gitlab-redis) groups=997(gitlab-redis)
root@192:/# 
root@192:/# id gitlab-prometheus
uid=992(gitlab-prometheus) gid=992(gitlab-prometheus) groups=992(gitlab-prometheus)
```

### 4.3.编写gitlab StorageClass 资源文件

```yaml
[root@k8s-master1 gitlab]\# vim gitlab-storageclass.yaml 
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: gitlab-storageclass
provisioner: nfs-storage-01
reclaimPolicy: Retain
```

### 4.4.编写gitlab statefulset 资源文件

StorageClass pvc模板定义两个，一个存储gitlab数据，一个存储gitlab配置文件

将刚刚查到的用户uid、gid，通过初始化容器分别赋权限给每个组件目录

```yaml
[root@k8s-master1 gitlab]\# vim gitlab-statefulset.yaml 
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: gitlab
  namespace: jenkins
spec:
  replicas: 1
  serviceName: gitlab
  selector:
    matchLabels:
      app: gitlab
  template:
    metadata:
      labels:
        app: gitlab
    spec:
      initContainers:             #定义初始化容器，将每个组件路径赋予对应的用户权限
      - name: gitlab-data-git
        image: harbor.jiangxl.com/jenkins/busybox:1.30
        command: ["sh","-c","chown -R 998:998 /var/opt/gitlab"]     #git用户授权整个gitlab数据目录
        securityContext:      #开启特权模式
          privileged: true  
        volumeMounts:       #将数据持久化的pvc进行挂载
        - name: gitlab-data
          mountPath: /var/opt/gitlab
      - name: gitlab-data-psql
        image: harbor.jiangxl.com/jenkins/busybox:1.30
        command: ["sh","-c","chown -R 996:996 /var/opt/gitlab/postgresql*"]     #gitlab-psql授权postgresql目录
        securityContext:
          privileged: true
        volumeMounts:
        - name: gitlab-data
          mountPath: /var/opt/gitlab
      - name: gitlab-data-redis
        image: harbor.jiangxl.com/jenkins/busybox:1.30
        command: ["sh","-c","chown -R 997:997 /var/opt/gitlab/redis"]   #gitlab-redis授权redis目录
        securityContext:
          privileged: true
        volumeMounts:
        - name: gitlab-data
          mountPath: /var/opt/gitlab
      - name: gitlab-data-prome                 #gitlab-prometheus用户授权prometheus目录
        image: harbor.jiangxl.com/jenkins/busybox:1.30
        command: ["sh","-c","chown -R 992:992 /var/opt/gitlab/alertmanager /var/opt/gitlab/grafana /var/opt/gitlab/prometheus"]
        securityContext:
          privileged: true
        volumeMounts:
        - name: gitlab-data
          mountPath: /var/opt/gitlab

      - name: gitlab-config-chown         #这个初始化容器主要就是把配置目录进行授权，可做可不做，因为这个目录的所属用户就是root，而nfs创建的存储路径默认也是root的所属
        image: harbor.jiangxl.com/jenkins/busybox:1.30
        command: ["sh","-c","chown -R 998:998 /etc/gitlab"]     #授权给gitlab用户
        securityContext:  
          privileged: true
        volumeMounts:
        - name: gitlab-config
          mountPath: /etc/gitlab
      containers:                   #定义主容器
      - name: gitlab
        image: harbor.jiangxl.com/jenkins/gitlab-ce:13.11.4-ce.0
        ports:
        - name: http
          containerPort: 80
        volumeMounts:             #挂载持久化数据卷到容器的路径
        - name: gitlab-data
          mountPath: /var/opt/gitlab
        - name: gitlab-config
          mountPath: /etc/gitlab
  volumeClaimTemplates:           #定义pvc模板
    - metadata:               #metadata是数组形式，因此可以定义多个，一个metadata就是一个pvc模板
        name: gitlab-data         #pvc名称
      spec:
        storageClassName: gitlab-storageclass     #使用的StorageClass名称
        accessModes:
        - ReadWriteMany           #访问模式为多主机可读写
        resources:
          requests:
            storage: 10Gi
    - metadata:
        name: gitlab-config
      spec:
        storageClassName: gitlab-storageclass
        accessModes:
        - ReadWriteMany
        resources:
          requests:
            storage: 1Gi
```

### 4.5.编写gitlab service 资源文件

```yaml
[root@k8s-master1 gitlab]\# vim gitlab-svc.yaml 
apiVersion: v1
kind: Service
metadata:
  labels:
    app: gitlab
  name: gitlab-svc
  namespace: jenkins
spec:
  ports:
  - name: http
    port: 80 
    targetPort: 80
    nodePort: 30080
  selector: 
    app: gitlab
  type: NodePort
```

### 4.6.创建所有资源并查看状态

```sh
1.创建所有资源
[root@k8s-master1 gitlab]\# kubectl apply -f ./
statefulset.apps/gitlab created
storageclass.storage.k8s.io/gitlab-storageclass created
service/gitlab-svc created

2.查看资源的状态
[root@k8s-master1 gitlab]\# kubectl get all -n jenkins
NAME                   READY   STATUS    RESTARTS   AGE
pod/gitlab-0           1/1     Running   0          4m21s
pod/jenkins-master-0   1/1     Running   0          18h

NAME                  TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)                          AGE
service/gitlab-svc    NodePort   10.101.97.95    <none>        80:30080/TCP                     57m
service/jenkins-svc   NodePort   10.99.113.179   <none>        8080:38080/TCP,50000:50000/TCP   23h

NAME                              READY   AGE
statefulset.apps/gitlab           1/1     57m
statefulset.apps/jenkins-master   1/1     23h

3.查看pvc资源的状态
[root@k8s-master1 gitlab]\# kubectl get pvc -n jenkins
NAME                            STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS           AGE
gitlab-config-gitlab-0          Bound    pvc-91e63538-e07d-4196-82e8-4195b29d9352   1Gi        RWX            gitlab-storageclass    64m
gitlab-data-gitlab-0            Bound    pvc-2a300c8d-49e6-4035-99f1-81c3e190fe3e   10Gi       RWX            gitlab-storageclass    57m
jenkins-data-jenkins-master-0   Bound    pvc-9efb572b-d566-418d-bb6e-b225b43de4a5   10Gi       RWX            jenkins-storageclass   23h
```

### 4.7.修改gitlab配置

当gitlab服务启动之后，配置文件和数据目录就会存储在pvc上，我们需要修改gitlab的配置文件明确访问地址

主要：这里只写地址，不要加端口，如果加了除80以外的端口，那么容器里gitlab的80就会改成你指定的端口，那么做得svc将会失效，无法暴露gitlab

这一步也可以不做，因为对于k8s而言都是通过集群任意节点ip去映射的

```sh
[root@k8s-master2 ~]\# vim /data2/k8s/storageclass/jenkins-gitlab-config-gitlab-0-pvc-91e63538-e07d-4196-82e8-4195b29d9352/gitlab.rb 
external_url 'http://192.168.16.106'
```

修改完重新部署一下gitlab即可

```sh
[root@k8s-master1 gitlab]\# kubectl replace -f gitlab-statefulset.yaml 
statefulset.apps/gitlab replaced

```

### 4.8.访问gitlab

访问http://集群任意节点ip:30080端口

> gitlab启动缓慢，进入容器查看gitlab状态，都是run后即可访问
>
> ![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/3cb3db85c0a44853bb427cc3f739f8ef.png)

**1）设置用户密码**

最少8位，这里设置admin123
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/f272c0ffc079443199a81e55f95fba69.png)

**2）进入gitlab**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/207da6d0e57b43008394ab964311a6f2.png)

**3）设置语言为中文**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b1c0dfdc00c24d8588f29c1ef4664fae.png)

## 5.提交程序代码到gitlab上

### 5.1.新建一个项目

**1）点击新建项目**
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/77ce6e59d41d4ec1b016f50bd766ef68.png)

**2）创建空白项目**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/bf036a4f46f84a9e94d1d137ee7d310f.png)

**3）填写项目信息**

可见级别设置为公开
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/101cb12d291e489abf69647313fecc9d.png)

**4）创建完成**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/c1de124f7b624b2b95efcf335767eecb.png)

### 5.2.将程序代码提交到gitlab

```sh
[root@k8s-master1 python-demo]\# git init
初始化空的 Git 版本库于 /root/gitlab_project/python-demo/.git/
[root@k8s-master1 python-demo]\# git remote add origin http://192.168.16.106:30080/root/blog_project.git
[root@k8s-master1 python-demo]\# git add .
[root@k8s-master1 python-demo]\# git commit -m "Initial commit"
[root@k8s-master1 python-demo]\# git push -u origin master
Username for 'http://192.168.16.106:30080': root        #输入用户名
Password for 'http://root@192.168.16.106:30080':        #输入密码
Counting objects: 48, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (44/44), done.
Writing objects: 100% (48/48), 978.49 KiB | 0 bytes/s, done.
Total 48 (delta 4), reused 0 (delta 0)
To http://192.168.16.106:30080/root/blog_project.git
 * [new branch]      master -> master
分支 master 设置为跟踪来自 origin 的远程分支 master。
```

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/d4306e08735645e5ae24a93123b7a064.png)

## 6.Jenkins集成gitlab

必须在jenkins配置gitlab地址，否则pipeline找不到git地址

### 6.1.在Jenkins上安装gitlab插件

修改Jenkins默认源为清华源

```sh
1.修改源
cd /data2/k8s/storageclassjenkins-jenkins-data-jenkins-master-0-pvc-9efb572b-d566-418d-bb6e-b225b43de4a5/updates
sed -i 's/http:\/\/updates.jenkins- ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' default.json
sed -i 's/http:\/\/www.google.com/https:\/\/www.baidu.com/g' default.json

2.重启Jenkins
[root@k8s-master1 ~]\# kubectl replace -f /root/k8s1.19/jenkins/jenkins-statefulset.yaml 
statefulset.apps/jenkins-master replaced
```

系统管理—>插件管理—>可选插件—>搜索gitlab—>安装
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/07defd42b2a5485ba30659d6d4d775af.png)

### 6.2.在gitlab上生成token

edit profile—>>访问令牌—>>填写token名称—>>勾选权限范围
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/63547133425548b5a3e5e3a902cf90b3.png)

token只显示一次，妥善保管：F4N8_LrfC7BdNWXXyJA2

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/41554f761e5742c9af47c519ceedaf51.png)

### 6.3.在Jenkins添加gitlab api token

系统管理—>找到gitlab—>进行配置即可

Connection name：gitlab-token

Gitlab host URL：http://192.168.16.104:30080/

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/04b27f6631e648c0a81627335fdab789.png)

填写完基本信息后点击添加gitlab token，类型只能选择gitlab api token，将token粘进去即可

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/3a3cf1606a7b45c6b02a3132aab80ac0.png)

添加完token之后，下拉选择刚刚添加的token，不再变红说明连接gitlab成功

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/6af8522a35b843e7a3da53e2a3179bd4.png)

## 7.Jenkins分布式master-slave模式

jenkins分布式就是有多个slave节点，当需要构建的项目非常多时，master的性能会有影响，slave会承担master的工作量，在slave在上创建项目。slave节点与master的区别就在于slave不需要安装Jenkins

slave节点有很多方式部署，我们采用

### 7.1.新增Jenkins节点

**1）系统管理—>节点管理—>新建节点—>填写节点名称—>固定节点—>确定**
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/95f634c391aa41359aba7c928eb3e693.png)

**2）添加节点详细信息**

名字：Jenkins-slave1-107

执行器数量：3

远程工作目录：/data/jenkins_jobs

标签：Jenkins-slave1-107 #用于让Jenkins某个任务运行在某个节点上

用法：尽可能的使用这个节点

启动方式：通过java web启动代理

自定义工作目录：/data/jenkins_jobs
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/24e8095eed63443f90c3b86db984ec93.jpg)

**3）添加完节点发现节点是红的，这说明代理程序还没有启动，Jenkins不知道节点是谁**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/3dccdb73b2834db791fb00270d95d0e5.png)

点击节点，进去后会看到如何启动agent，右键复制agent.jar拿到链接地址，去对应的服务器上下载jar包，然后启动即可成功添加节点
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/747440af22584bf5867db7b32b7fa9dc.png)

```sh
1.创建节点工作目录
[root@k8s-node2 ~]\# mkdir /data/jenkins_jobs
[root@k8s-node2 ~]\# cd /data/jenkins_jobs

2.下载agent程序
[root@k8s-node2 /data/jenkins_jobs]\# wget http://192.168.16.104:38080/jnlpJars/agent.jar

3.启动agent
[root@k8s-node2 /data/jenkins_jobs]\# nohup java -jar agent.jar -jnlpUrl http://192.168.16.104:38080/computer/Jenkins-slave1-107/jenkins-agent.jnlp -secret efbde6c51590ca2c9097e6866de9f2d18520bfc05440a1872135e78b47283721 -workDir "/data/jenkins_jobs" &


命令解释：
 java -jar agent.jar \      #启动jar包
 -jnlpUrl http://192.168.16.104:38080/computer/Jenkins-slave1-107/jenkins-agent.jnlp \  #这个路径就是我们在Jenkins上新建节点之后的节点所在路径，如果不指定，Jenkins根本不知道这个节点对应哪台服务器
 -secret efbde6c51590ca2c9097e6866de9f2d18520bfc05440a1872135e78b47283721 \   #认证
 -workDir "/data/jenkins_obs" &     #工作目录
```

agent启动后在Jenkins页面上观察节点，发现已经是可用状态
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/5199668c5f564bb78b30223cc63d465d.png)

### 7.2.新建一个任务运行在slave1节点上

**1）配置任务—>general—>限制项目的运行节点—>填写节点设置的标签即可**
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/385087446afa435da77418de3cebfdf5.png)

**2）运行任务观察运行在哪个节点**

选择master分支，开始构建
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/11026daa09754df8892cc7c42d434b32.png)

任务已经运行到了Jenkins-slave1-107节点上

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/f4003605156e44fc994c7a9da3f63b69.png)

钉钉已经收到信息并且在节点工作目录已经产生数据

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/2b0b214b6069439c837821a44b043a74.png)

### 7.3.观察节点关联的执行任务

> 到这一步CI/CD平台已经部署完成，我们可以新建一个流程，更新程序到kubernetes平台
> ![](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/37216cf5a5824c899d172e8f4137e2c0.png)

## 8.使用pipeline流水线将know-system项目更新到kubernetes环境

**k8s更新可以采用两种方式**

 1.将资源yaml文件也上传到代码仓库，项目打完镜像后，可以通过替换deployment资源我们指定image的字符串，把最新版本的镜 像替换到deployment资源中，最后执行kubectl apply ./完成更新

 2.执行kubectl 命令更新deployment资源的镜像

**由于我们构建任务都是通过agent去运行的，agent部署在k8s node节点，继承了docker、kubectl命令，因此不必担心kubectl命令不能用**

### 8.1.实现思路

1.首先将know-system在k8s中进行部署，实现可以访问的状态

2.将部署know-system的yaml文件复制到代码目录中，并将deployment资源中容器image对应的镜像改成一个字符串，这样pipeline更新时可以通过更换这个字符串，把最新的镜像版本替换到deployment资源中完成更新，最后将代码及部署文件推送到gitlab

3.优化pipeline脚本，增加k8s部署步骤

4.更新代码，使用流水线更新项目到k8s

### 8.2.将know-system部署在k8s中

**1）准备项目yaml文件**

```yaml
1.准备deployment资源
[root@k8s-master1 know-system]\# cat nginx-depoly.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: know-system
  namespace: know-system
spec:
  replicas: 3
  selector:
    matchLabels:
      app: know-system
  template:
    metadata:
      labels:
        app: know-system
    spec:
      containers:
      - name: nginx
        image: harbor.jiangxl.com/project/nginx-project:v1-code
        ports:
        - containerPort: 80
        volumeMounts:
        - name: nginx-data
          mountPath: /data/code
        - name: nginx-config
          mountPath: /data/nginx/conf/conf.d/
      volumes:
        - name: nginx-config
          configMap:
            name: nginx-configmap
        - name : nginx-data
          persistentVolumeClaim:
            claimName: pvc-know
            readOnly: false

2.准备configmap资源
[root@k8s-master1 know-system]\# cat nginx-configmap.yaml 
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-configmap
  namespace: know-system
data:
  know.jiangxl.com.conf: |
    server {
      listen 80;
      server_name know.jiangxl.com;
      location / {
        root /data/code/know_system;
        index index.html;
      }
    }

3.准备svc资源
[root@k8s-master1 know-system]\# cat nginx-svc.yaml 
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
  namespace: know-system
spec:
  selector:
    app: know-system
  type: NodePort
  ports:
  - port: 80    
    targetPort: 80
```

**2）创建所有资源**

```sh
[root@k8s-master1 know-system]\# kubectl apply -f ./
configmap/nginx-configmap unchanged
deployment.apps/know-system configured
service/nginx-service configured
```

**3）查看项目首页**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/5c579af45d324e1c857e235d62ca72f1.png)

### 8.3.将k8s资源文件提交至gitlab

```sh
1.将部署文件复制到代码目录
[root@k8s-master1 know_system]\# mkdir deploy
[root@k8s-master1 know_system]\# cp /root/k8s1.19/know-system/* deploy/

2.修改deployment资源中的image
#将image对应的镜像改成一个字符串，pipeline更新时可以通过更换这个字符串把最新的镜像替换到deployment资源中
[root@k8s-master1 know_system]\# vim deploy/nginx-depoly.yaml 
        image: {{updateimage}}

2.提交至gitlab
[root@k8s-master1 know_system]\# git add .
[root@k8s-master1 know_system]\# git commit -m "deploy"
[root@k8s-master1 know_system]\# git push origin master
```

### 8.4.编写Jenkins pipeline将项目更新到k8s

> 当前pipeline脚本主要是更新用yaml文件创建的项目pod现

```shell
pipeline {
    agent { label 'Jenkins-slave1-107' }                //让该pipeline始终运行在Jenkins-slave1-107 Jenkins agent节点上，因为这个节点所在的服务器可以运行k8s集群的docker、kubelet命令

    environment {                                   //environment主要用于定义环境变量，可以把一些常用到的值做成环境变量
        IMAGE_REPO="harbor.jiangxl.com/project"
    }

  parameters {                               //定义参数化构建流程
    gitParameter(name: 'VERSION',defaultValue: 'master',type: 'BRANCH',description: '选择要更新的分支')             //定义一个gitparamters参数化构建过程，用于选择更新的代码
    string(name: 'project',defaultValue: 'know-system',description: '项目名称',trim: true)                  //定义一个空白字符串，声明项目名称
  } 
    stages {                        //定义pipeline执行阶段
        stage('运维确认信息') {                                 //阶段1，使用一个交互式，让运行确认更新信息，如果有误可直接退出更新，避免更新错误
            steps {
                input message: """                          
                jobname: ${project}
                branch: ${VERSION}""", ok: "更新"                       //交互式输出一个更新的项目和分支号
            }
        }
        stage('拉取项目代码') {                                  //阶段2，用于拉取git上对应的项目代码
            steps {
        checkout([$class: 'GitSCM', branches: [[name: '$VERSION']], extensions: [], userRemoteConfigs: [[credentialsId: 'gitlab-root', url: 'http://192.168.16.106:30080/root/know_system.git']]])
            }
        }  
        stage('构建项目镜像') {                             //阶段3.用于将项目代码更新到docker初始镜像中，主要步骤就是生产一个dockerfile，将代码复制到镜像中，最后根据Dockerfile构建出镜像
            steps {
        sh """              
                pwd
        echo "
FROM harbor.jiangxl.com/project/nginx-project:v1-code

RUN mkdir /data/code/know_system
COPY  ./* /data/code/know_system/
EXPOSE 80
        " >Dockerfile
        """                             //编写一个Dockerfile，定义初始镜像，并将更新的代码复制到容器的指定路径

        sh 'docker build -t ${IMAGE_REPO}/${project}:master-v${BUILD_ID} .'   //最终镜像的名称就是harbor.jiangxl.com/project/know-system:master-v1                
            }
        }   

        stage('推送镜像到harbor仓库') {             //阶段4，将构建好的镜像推送至harbor仓库中，便于k8s拉取更新程序
            steps {
        sh 'docker push ${IMAGE_REPO}/${project}:master-v${BUILD_ID}'   //推送镜像到harbor仓库
            }
        }           
        stage('将项目更新到k8s') {                     //阶段5，主要是更新k8s中项目使用的容器，将最新构建的镜像替换到项目pod中，然后更新pod
            steps {                                     //使用kubectl命令更新项目
        sh "sed -i 's#{{updateimage}}#${IMAGE_REPO}/${project}:master-v${BUILD_ID}#g' deploy/*"       //将deployment资源中我们写死的镜像版本字符串，替换成刚刚推送至harbor仓库的镜像版本
                sh 'kubectl apply -f deploy/'                   //当镜像版本替换后，更新资源的yaml文件即可完成项目更新
            }
        }                  
    }
    post {
      success {       //构建成功了发送一个构成成功的消息到钉钉
          echo "构建成功，发送消息到钉钉"
          sh """
          curl 'https://oapi.dingtalk.com/robot/send?access_token=6719ac958daf4f31114cb0c1289837c9aca45d111d8653b04c3d6ae164f25146' \
 -H 'Content-Type: application/json' \
 -d '{"msgtype": "text","text": {"content":"😄👍构建成功👍😄\n 关键字：jenkins\n 项目 名称: ${JOB_BASE_NAME}\n 更新的分支号: ${VERSION}\n 本次构建的镜像版本：${IMAGE_REPO}/${project}:master-v${BUILD_ID}\n 构建地址：${RUN_DISPLAY_URL} "}}'
          """
      }
      failure {       //构建失败了发送一个构成成功的消息到钉钉
          echo "构建失败，发送消息到钉钉"
          sh """
          curl 'https://oapi.dingtalk.com/robot/send?access_token=6719ac958daf4f31114cb0c1289837c9aca45d111d8653b04c3d6ae164f25146' \
 -H 'Content-Type: application/json' \
 -d '{"msgtype": "text","text": {"content":"😖❌构建失败❌😖\n 关键字：jenkins\n 项目 名称: ${JOB_BASE_NAME}\n 更新的分支号: ${VERSION}\n 本次构建的镜像版本：${IMAGE_REPO}/${project}:master-v${BUILD_ID}\n 构建地址：${RUN_DISPLAY_URL} "}}'
        """
      }
      always {          //无论成功还是失败都执行此步骤
        echo "构建流程结束"
      }
    }
}
```

### 8.5.将pipeline粘贴到流水线任务中

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/6b567d43deb0474e8b57f717070c1e95.png)

### 8.6.构建master分支完成项目更新

**1）选择更新信息**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/cebe0301954b46e0a696ebe6e2d05e93.png)

**2）运维确认信息**
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/e14279c1a0824528a12931943441b2ab.png)

**3）pipeline任务更新成功**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b322ccd2bf6e48f5a5609660bc537d55.png)

**4）在blue ocean查看此次更新的镜像版本**
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/0e471501cd6c4617b630b6bebb53f41c.png)

**5）在rancher上观察项目是否更新成最新的镜像版本**

更新流程顺利完成！
![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b261c18ee6c646a2848342ae64dda144.png)

> 该文章为转载内容，仅做备份私人学习使用，原文：https://jiangxl.blog.csdn.net/article/details/119828244

