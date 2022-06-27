## 1.EFK工作原理

> EFK其实和ELK差不多，只不过EFK是k8s专门的日志收集平台，其中的F是fluentd
>
> 首先通过fluentd收集程序的日志，然后将日志存储到elasticsearch集群，最后在kibana上关联elasticsearch，实现日志的查询。
> ![实现基于EFK日志平台收集Kubernetes集群日志信息_docker](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044814_620c118edfe6953900.png)

- Elasticsearch
    - 一个开源的分布式、Restful 风格的搜索和数据分析引擎，它的底层是开源库Apache Lucene。
    - 一个分布式的实时文档存储，每个字段可以被索引与搜索；
    - 一个分布式实时分析搜索引擎；
    - 能胜任上百个服务节点的扩展，并支持 PB 级别的结构化或者非结构化数据。
- Fluentd
    - 一个针对日志的收集、处理、转发系统。通过丰富的插件系统，可以收集来自于各种系统或应用的日志，转化为用户指定的格式后，转发到用户所指定的日志存储系统之中。
    - Fluentd通过一组给定的数据源抓取日志数据，处理后，将它们转发给其他服务，比如elasticsearch、对象存储、kafka等

![实现基于EFK日志平台收集Kubernetes集群日志信息_nginx_02](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044815_620c118f332f876321.png)

- Kibana

    分析、可视化平台，设计用于和Elasticsearch一起工作。可以通过Kibana来搜索，查看，并和存储在Elasticsearch索引中的数据进行交互。也可以轻松地执行高级数据分析， 并且以各种图标、表格和地图的形式可视化数据。

**使用docker运行fluentd模拟日志收集**

> 使用docker运行fluentd，然后创建一个日志文件，输入内容，观察fluentd的变化
>
> fluentd配置文件内容：
> ```sh
> <source>                               #定义日志的源
>  @type tail                        #类型为tail，追踪日志的输出
>  @id nginx_access                   #定义一个id号
>  @label @nginx_access               #定义一个标签，用于区分不同程序的日志        
>  path /fluentd/access.log             #日志所在路径
>  exclude_path ["/fluentd/nginx/*.gz","/fluentd/nginx/*.zip"]             #排除的文件名
>  pos_file /fluentd/nginx_access.posg                                   #当fluentd中断后，日志保存的路径
>  tag nginx_access                                   #定义一个tag标签，可以通过tag标签来决定日志存储在哪个es索引库
>  format none 
>  @log_level trace
> </source>
> <label @nginx_access>                          #针对nginx_access标签的日志做一些处理规则
>  <filter nginx_access>                        #转发规则
>      @type parser
>      key_name message
>      format /(?<serverIp>\d+.\d+.\d+.\d+) (?<timestamp>\S+) (?<respondTime>\d+.\d+) (?<httpcode>\d{2,3}|0) (?<eventTime>\[\d{2}\S*\s\S*) (?<clientIp>\d+.\d+.\d+.\d+) (?<clientPort>\d+) (?<method>\b\w+\b) (?<protocol>http|https) (?<channel>.*|-) (?<url>\S+)(?<httpversion>(HTTP|HTTPS)\/S+) (?<bodyBytes>\d+) (?<destIp>\S+|-) \"(?<status>[^\"]*)\" \"(?<referer>[^\"]*)\" \"(?<ua>[^\"]*)\" \"(?<fileType>[^\"]*)\" \"(?<from>[^\"]*)\"/              #将输入的日志通过正则的方式进行解析
>  </filter>                            
>  <filter nginx_access>                #可以定义多个转发规则
>      @type record_transformer                #记录转换
>      <record>                                #增加两个字段到日志中，这样一来就可以做路由匹配，分别存储在不同的索引中
>          host_name "#{Socket.gethostname}"
>          my_key "my_val"
>      </record>
>  </filter>
>  <match nginx_access>                        #输出到哪里
>      @type file                           #输出到文件
>      path /fluentd/data               #文件的路径
> </match>
> </label>
> ```
```powershell
1.运行fluentd
[root@k8s-master1 EFK]\# docker run -u root -it --name fluentd fluent/fluentd:v1.6.2-1.0 sh

2.编写fluentd配置文件
/ # cat fluentd/etc/fluent.conf 
<source>
    @type tail
    @id nginx_access
    @label @nginx_access
    path /fluentd/access.log
    exclude_path ["/fluentd/nginx/*.gz","/fluentd/nginx/*.zip"]
    pos_file /fluentd/nginx_access.posg
    tag nginx_access
    format none
    @log_level trace
</source>
<label @nginx_access>
    <filter nginx_access>
        @type parser
        key_name message
        format /(?<serverIp>\d+.\d+.\d+.\d+) (?<timestamp>\S+) (?<respondTime>\d+.\d+) (?<httpcode>\d{2,3}|0) (?<eventTime>\[\d{2}\S*\s\S*) (?<clientIp>\d+.\d+.\d+.\d+) (?<clientPort>\d+) (?<method>\b\w+\b) (?<protocol>http|https) (?<channel>.*|-) (?<url>\S+)(?<httpversion>(HTTP|HTTPS)\/S+) (?<bodyBytes>\d+) (?<destIp>\S+|-) \"(?<status>[^\"]*)\" \"(?<referer>[^\"]*)\" \"(?<ua>[^\"]*)\" \"(?<fileType>[^\"]*)\" \"(?<from>[^\"]*)\"/
    </filter>
    <filter nginx_access>
        @type record_transformer
        <record>
            host_name "#{Socket.gethostname}"
            my_key "my_val"
        </record>
    </filter>
    <match nginx_access>
        @type file
        path /fluentd/data
   </match>
</label>

3.启动fluentd
/ # fluentd -c fluentd/etc/fluent.conf 

4.写入日志文件
/fluentd # touch access.log
/fluentd # echo '10.10.1.1 1561620585.973 0.005 502 [27/Jun/2020:15:29:45 +0800] 178.73.215.171 33337 GE
T https microsoft.test2.cn https://microsoft.test2.cn/ HTTP/1.0 247 58.49.156.139:8080 "MISS from 58.49.
156.139" "_" "_" "_" "_" - - 0.005 502 0f547fb6de9odc9778c48e35b9a8acb7' >>/fluentd/access.log
```

![实现基于EFK日志平台收集Kubernetes集群日志信息_elasticsearch_03](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044815_620c118f926e91114.png)

## 2.部署EFK平台

> - 部署elasticsearch、kibana、fluentd，对elasticsearch、kibana创建pv、pvc持久化数据
> - 部署nfs，存储容器的数据
> - 将所有组件的镜像都推送至harbor镜像仓库

### 2.1.部署nfs

在master2上部署nfs存储k8s集群数据
```sh
[root@k8s-master2 ~]\# yum -y install nfs

[root@k8s-master2 ~]\# vim /etc/exports
/data2/k8s  192.168.16.0/24(rw,sync,no_root_squash)

[root@k8s-master2 ~]\# mkdir -p /data2/k8s/

[root@k8s-master2 ~]\# systemctl restart nfs

[root@k8s-master2 ~]\# showmount -e
Export list for k8s-master2:
/data2/k8s 192.168.16.0/24
```

### 2.2.部署elasticsearch

> - 我们采用单节点的es，集群的es只需要准备三个statfulset资源即可
> - 采用PV、PVC将数据库持久化存储
> - es默认使用elasticsearch用户启动进程，es的数据目录是通过挂载nfs的路径，因此目录权限被nfs的目录权限覆盖，所以可以利用初始化容器在es进程启动之前把目录的权限修改掉，注意初始化容器要用特权模式启动。

#### 2.2.1.创建es的pv及pvc资源

**1.在nfs创建存储路径**
```sh
[root@k8s-master2 ~]\# mkdir -p /data2/k8s/es-data 
```

**2.编写pv、pvc的yaml文件**
```yaml
[root@k8s-master1 EFK]\# cat es-pv-pvc.yaml
apiVersion: v1
kind:  PersistentVolume
metadata:
  name: es-pv
  labels:
    pv: es-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    path: /data2/k8s/es-data
    server: 192.168.16.105

---

apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: es-pvc
  namespace: efk
spec:
  accessModes:
  - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
  selector:
    matchLabels:
      pv: es-pv
```

**3.创建资源并查看资源的状态**
```sh
1.创建资源
[root@k8s-master1 EFK]\# kubectl create -f es-pv-pvc.yaml 
persistentvolume/es-pv created
persistentvolumeclaim/es-pvc created

2.查看资源的状态
[root@k8s-master1 EFK]\# kubectl get pv,pvc -n efk
NAME                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM        STORAGECLASS   REASON   AGE
persistentvolume/es-pv   10Gi       RWX            Retain           Bound    efk/es-pvc                           2m10s

NAME                           STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/es-pvc   Bound    es-pv    10Gi       RWX                           2m10s
```

#### 2.2.2.准备elasticsearch镜像并推送至harbor
```sh
1.拉取镜像
[root@k8s-master1 EFK]\# docker pull elasticsearch:7.4.2
7.4.2: Pulling from library/elasticsearch
d8d02d457314: Pull complete 
f26fec8fc1eb: Pull complete 
8177ad1fe56d: Pull complete 
d8fdf75b73c1: Pull complete 
47ac89c1da81: Pull complete 
fc8e09b48887: Pull complete 
367b97f47d5c: Pull complete 
Digest: sha256:543bf7a3d61781bad337d31e6cc5895f16b55aed4da48f40c346352420927f74
Status: Downloaded newer image for elasticsearch:7.4.2
docker.io/library/elasticsearch:7.4.2

2.添加harbor仓库
#所有节点都按如下操作
1）增加harbor仓库地址
vim /etc/docker/daemon.json 
{
  "registry-mirrors": ["https://7lhvut0q.mirror.aliyuncs.com"],
  "insecure-registries": [
    "harbor.jiangxl.com"
  ]
}


2)添加hosts解析
vim /etc/hosts
192.168.16.106 harbor.jiangxl.com

3)重启docker
systemctl restart docker

4)登陆Harbor
docker login harbor.jiangxl.com
Username: admin
Password: admin

3.推送镜像到harbor
[root@k8s-master1 EFK]\# docker tag elasticsearch:7.4.2 harbor.jiangxl.com/efk/elasticsearch:7.4.2
[root@k8s-master1 EFK]\# docker push elasticsearch:7.4.2
```

在harbor上新建项目
![实现基于EFK日志平台收集Kubernetes集群日志信息_elasticsearch_04](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044816_620c11902a94067440.png)

进入项目，将项目设置为公开，如果不设置为公开，拉取镜像会失败

![实现基于EFK日志平台收集Kubernetes集群日志信息_其他_05](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044816_620c11907050745715.png)
```sh
3.给镜像打标签
[root@k8s-master1 EFK]\# docker tag elasticsearch:7.4.2 harbor.jiangxl.com/efk/elasticsearch:7.4.2
[root@k8s-master1 EFK]\# docker tag alpine:3.6 harbor.jiangxl.com/efk/alpine:3.6

4.推送至harbor
[root@k8s-master1 EFK]\# docker push harbor.jiangxl.com/efk/elasticsearch:7.4.2
[root@k8s-master1 EFK]\# docker push harbor.jiangxl.com/efk/alpine:3.6
```

![实现基于EFK日志平台收集Kubernetes集群日志信息_nginx_06](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044816_620c1190b5cba39236.png)

#### 2.2.3.编写elasticsearch yaml文件
```yaml
1.编写yaml文件
[root@k8s-master1 EFK]\# cat elasticsearch.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
    k8s-app: elasticsearch
    version: v7.4.2
  name: elasticsearch
  namespace: efk
spec:
  replicas: 1							#副本数为1表示是1个es节点
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: elasticsearch
      version: v7.4.2
  serviceName: elasticsearch
  template:
    metadata:
      labels:
        k8s-app: elasticsearch
        version: v7.4.2
    spec:
      containers:
      - env:
        - name: NAMESPACE
          valueFrom:
            fieldRef:
              apiVersion: v1
              fieldPath: metadata.namespace
        - name: cluster.initial_master_nodes
          value: elasticsearch-0
        - name: ES_JAVA_OPTS
          value: "-Xms512m -Xmx512m"
        image: harbor.jiangxl.com/efk/elasticsearch:7.4.2
        name: elasticsearch
        ports:
        - containerPort: 9200
          name: db
          protocol: TCP
        - containerPort: 9300
          name: transport
          protocol: TCP
        volumeMounts:										#将pvc挂载到/usr/share/elasticsearch/data路径
        - mountPath: /usr/share/elasticsearch/data
          name: elasticsearch
      dnsConfig:
        options:
        - name: single-request-reopen
      initContainers:
      - command:
        - /sbin/sysctl
        - -w
        - vm.max_map_count=262144
        image: harbor.jiangxl.com/efk/alpine:3.6
        imagePullPolicy: IfNotPresent
        name: elasticsearch-init
        resources: {}
        securityContext:
          privileged: true
      - name: fix-permissions							#定义初始化容器，将pvc挂载进去并在es主容器启动之前将目录权限进行修改
        image: harbor.jiangxl.com/efk/alpine:3.6
        command: ["sh", "-c", "chown -R 1000:1000 /usr/share/elasticsearch/data"]
        securityContext:
          privileged: true
        volumeMounts:
        - name: elasticsearch
          mountPath: /usr/share/elasticsearch/data
      volumes:								#定义我们刚刚创建的pvc
      - name: elasticsearch
        persistentVolumeClaim:
          claimName: es-pvc
          readOnly: false
---
apiVersion: v1
kind: Service
metadata:
  labels:
    k8s-app: elasticsearch
  name: elasticsearch
  namespace: efk
spec:
  ports:
  - port: 9200
    protocol: TCP
    targetPort: 9200
  selector:
    k8s-app: elasticsearch
  type: ClusterIP
```

#### 2.2.4.创建lasticsearch资源并查看状态
```sh
1.创建资源
[root@k8s-master1 EFK]\# kubectl apply -f elasticsearch.yaml 
statefulset.apps/elasticsearch created
service/elasticsearch created

2.查看资源的状态
[root@k8s-master1 harbor]\# kubectl get all -n efk -o wide
NAME                  READY   STATUS    RESTARTS   AGE   IP                NODE        NOMINATED NODE   READINESS GATES
pod/elasticsearch-0   1/1     Running   0          18s   100.111.156.122   k8s-node1   <none>           <none>

NAME                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE   SELECTOR
service/elasticsearch   ClusterIP   10.110.161.181   <none>        9200/TCP   33m   k8s-app=elasticsearch

NAME                             READY   AGE   CONTAINERS      IMAGES
statefulset.apps/elasticsearch   1/1     33m   elasticsearch   harbor.jiangxl.com/efk/elasticsearch:7.4.2

3.访问elasticsearch
#svcip+svc端口
[root@k8s-master1 harbor]\# curl 10.110.161.181:9200
{
  "name" : "elasticsearch-0",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "od39aNdaRUi8hZTbbvfjdA",
  "version" : {
    "number" : "7.4.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "2f90bbf7b93631e52bafb59b3b049cb44ec25e96",
    "build_date" : "2019-10-28T20:40:44.881551Z",
    "build_snapshot" : false,
    "lucene_version" : "8.2.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

### 2.3.部署kibana

> - kibana需要在web页面使用，因此使用ingress配置域名来实现对kibana的访问
> - kibana为无状态应用，直接使用Deployment来启动
> - kibana的数据目录采用pvc进行持久化存储，kibana默认使用kibana用户启动进程，kibana的数据目录是通过挂载nfs的路径，因此目录权限被nfs的目录权限覆盖，所以可以利用初始化容器在kibana进程启动之前把目录的权限修改掉，注意初始化容器要用特权模式启动。
> - kibana需要访问es，直接利用k8s coredns服务发现访问此地址：http://elasticsearch:9200即可

#### 2.3.1.准备kibana的pv及pvc资源

**1.准备nfs存储路径**
```sh
[root@k8s-master2 ~]\# mkdir /data2/k8s/kibana-data
```

**2.编写pv及pvc的yaml文件**
```yaml
[root@k8s-master1 EFK]\# vim kibana-pv-pvc.yaml 
apiVersion: v1
kind:  PersistentVolume
metadata:
  name: kibana-pv
  labels:
    pv: kibana-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    path: /data2/k8s/kibana-data
    server: 192.168.16.105

---

apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: kibana-pvc
  namespace: efk
spec:
  accessModes:
  - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
  selector:
    matchLabels:
      pv: kibana-pv

```

**3.创建资源并查看资源的状态**
```sh
1.创建资源
[root@k8s-master1 EFK]\# kubectl create -f kibana-pv-pvc.yaml
persistentvolume/kibana-pv created
persistentvolumeclaim/kibana-pvc created

2.查看资源的状态
[root@k8s-master1 EFK]\# kubectl get pv,pvc -n efk
NAME                         CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM            STORAGECLASS   REASON   AGE
persistentvolume/kibana-pv   10Gi       RWX            Retain           Bound    efk/kibana-pvc                           167m

NAME                               STATUS   VOLUME      CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/kibana-pvc   Bound    kibana-pv   10Gi       RWX                           167m

```

#### 2.3.2.准备kibana镜像并推送至harbor仓库
```sh
1.拉取镜像
[root@k8s-master1 harbor]\# docker pull kibana:7.4.2
7.4.2: Pulling from library/kibana
d8d02d457314: Already exists 
bc64069ca967: Pull complete 
c7aae8f7d300: Pull complete 
8da0971e3b41: Pull complete 
58ea4bb2901c: Pull complete 
b1e21d4c2a7e: Pull complete 
3953eac632cb: Pull complete 
5f4406500758: Pull complete 
340d85e0d1c7: Pull complete 
1768564d16fb: Pull complete 
Digest: sha256:355f9c979dc9cdac3ff9a75a817b8b7660575e492bf7dbe796e705168f167efc
Status: Downloaded newer image for kibana:7.4.2
docker.io/library/kibana:7.4.2

2.给镜像打标签
[root@k8s-master1 harbor]\# docker tag kibana:7.4.2 harbor.jiangxl.com/efk/kibana:7.4.2

3.推送至Harbor
[root@k8s-master1 harbor]\# docker push harbor.jiangxl.com/efk/kibana:7.4.2
The push refers to repository [harbor.jiangxl.com/efk/kibana]
ccde9566aa40: Pushed 
3234e7f24c9c: Pushed 
cb5328c9d961: Pushed 
b34d7a00ef38: Pushed 
0b8e2117240b: Pushed 
90cabfea98a8: Pushed 
80642e52e3f7: Pushed 
9cfbbc5ed16e: Pushed 
01fc07851996: Pushed 
877b494a9f30: Mounted from efk/elasticsearch 
7.4.2: digest: sha256:d10acb82cc2872b4eb1319eff2d693c47be62d1bb22520f28000a596a637f727 size: 2409
```

#### 2.3.3.编写kibana yaml文件

> 使用pvc作为数据持久化，通过ingress将kibana进行暴露
```yaml
[root@k8s-master1 EFK]\# vim kibana.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kibana
  namespace: efk
  labels:
    app: kibana
spec:
  selector:
    matchLabels:
      app: kibana
  template:
    metadata:
      labels:
        app: kibana
    spec:
      containers:
      - name: kibana
        image: harbor.jiangxl.com/efk/kibana:7.4.2
        env:
          - name: ELASTICSEARCH_URL
            value: http://elasticsearch:9200
        ports:
        - containerPort: 5601
        volumeMounts:							#将pvc挂载到数据目录，实现持久化
        - name: kibana
          mountPath: /usr/share/kibana/data
      initContainers:									#定义一个初始化容器，将pvc进行挂载，然后修改目录权限，当主容器kibana启动时就有权限写入数据了
      - name: kibana-permissions
        image: harbor.jiangxl.com/efk/alpine:3.6
        command: ["sh", "-c", "chown -R 1000:1000 /usr/share/kibana"]
        securityContext:
          privileged: true
        volumeMounts:
        - name: kibana
          mountPath: /usr/share/kibana/data
      volumes:							#定义pvc
      - name: kibana
        persistentVolumeClaim:
          claimName: kibana-pvc
          readOnly: false
---
apiVersion: v1
kind: Service
metadata:
  name: kibana
  namespace: efk
  labels:
    app: kibana
spec:
  ports:
  - port: 5601
    protocol: TCP
    targetPort: 5601
  type: ClusterIP
  selector:
    app: kibana
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: kibana
  namespace: efk
spec:
  rules:
  - host: kibana.jiangxl.com					#这个域名要写到Windows的hosts中
    http:
      paths:
      - path: /
        backend:
          serviceName: kibana
          servicePort: 5601
```

#### 2.3.4.创建kibana资源并查看状态
```sh
1.创建资源
[root@k8s-master1 EFK]\# kubectl create -f kibana.yaml
deployment.apps/kibana created
service/kibana created
ingress.extensions/kibana created

2.查看资源
[root@k8s-master1 EFK]\# kubectl get pod,svc,ingress -n efk
NAME                          READY   STATUS    RESTARTS   AGE
pod/elasticsearch-0           1/1     Running   0          18s
pod/kibana-58cfc9fdc5-qqljb   1/1     Running   0          26m

NAME                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/elasticsearch   ClusterIP   10.110.161.181   <none>        9200/TCP   4h8m
service/kibana          ClusterIP   10.109.237.120   <none>        5601/TCP   26m

NAME                        CLASS    HOSTS                ADDRESS   PORTS   AGE
ingress.extensions/kibana   <none>   kibana.jiangxl.com             80      26m
```

#### 2.3.5.访问kibana

> 我们的ingress 80端口映射在node节点的80端口，443端口映射在node节点的443端口
>
> 直接在Windows上绑上node节点地址和kibana域名即可访问kibana
>
> http://kibana.jiangxl.com

![实现基于EFK日志平台收集Kubernetes集群日志信息_nginx_07](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044817_620c1191081b724117.png)

### 2.4.部署fluentd

> - fluentd是日志采集服务，kubernetes集群的每个node节点都有日志产生，因此需要使用daemonset的模式进行部署，收集node节点产生的组件日志
> - 日志采集，需要采集哪些目录下的日志，采集后发送到es端，因此需要配置的内容比较多，我们选择使用configmap的方式把配置文件整个挂载出来

#### 2.4.1.创建fluentd配置文件的configmap资源

> 编辑主配置文件，增加一个include，引入其他目录的配置文件
```yaml
1.编写yaml
[root@k8s-master1 EFK]\# vim fluentd-es-main.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
  name: fluentd-es-config-main
  namespace: efk
data:
  fluent.conf: |-
    <match fluent.**>
    @type null
    </match>

    @include /fluentd/etc/config.d/*.conf

2.创建资源
[root@k8s-master1 EFK]\# kubectl create -f fluentd-es-main.yaml
configmap/fluentd-es-config-main created
```

#### 2.4.2.创建fluentd日志收集的configmap
```sh
1.编写yaml文件
[root@k8s-master1 EFK]\# vi fluentd-config.yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: fluentd-config
  namespace: efk
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
data:
  containers.input.conf: |-              #定义日志源
    <source>                                            #日志来源
      @id fluentd-containers.log
      @type tail                    #类型为tail，追踪日志的输出
      path /var/log/containers/*.log                       #日志所在路径
      pos_file /var/log/es-containers.log.pos
      time_format %Y-%m-%dT%H:%M:%S.%NZ
      localtime
      tag raw.kubernetes.*
      format json
      read_from_head true
    </source>
    # Detect exceptions in the log output and forward them as one log entry.
    <match raw.kubernetes.**>             #定义异常日志处理方式，即多行报错收集在一起              
      @id raw.kubernetes
      @type detect_exceptions
      remove_tag_prefix raw
      message log
      stream stream
      multiline_flush_interval 5
      max_bytes 500000
      max_lines 1000
    </match>
  forward.input.conf: |-
    # Takes the messages sent over TCP
    <source>
      @type forward
    </source>
  output.conf: |-						#这个文件用于定义将日志输出给谁，可以是es、kafka
    # Enriches records with Kubernetes metadata
    <filter kubernetes.**>
      @type kubernetes_metadata
    </filter>
    <match **>                       #定义日志存储在哪
      @id elasticsearch
      @type elasticsearch            #类型为elasticsearch，表示存储在es中
      @log_level info
      include_tag_key true
      host elasticsearch           #es的地址
      port 9200
      logstash_format true
      request_timeout    30s
      <buffer>                       #定义缓存区，避免es挂掉后，数据丢失，es挂掉之后，数据写入到缓区
        @type file           #缓存区类型为文件，表示将数据缓存到文件
        path /var/log/fluentd-buffers/kubernetes.system.buffer        #缓存文件路径
        flush_mode interval                     #推送模式为时间，根据时间的长久刷新数据到es
        retry_type exponential_backoff
        flush_thread_count 2       
        flush_interval 5s      #5秒同步一次
        retry_forever
        retry_max_interval 30
        chunk_limit_size 2M            #缓冲期块大小，当超过这个大小时就写入es
        queue_limit_length 8           #块的个数为8，即16M
        overflow_action block
      </buffer>
    </match>

2.创建资源
[root@k8s-master1 EFK]\# kubectl create -f fluentd-config.yaml 
configmap/fluentd-config created
```

#### 2.4.3.创建fluentd daemonset资源

> - 需要配置rbac规则，因为需要访问k8s api去根据日志查询元数据
> - 需要将/var/log/containers/目录挂载到容器中
> - 需要将fluentd的configmap中的配置文件挂载到容器内
> - 由于pod日志都是存储在node节点的/var/log/containers目录中，为了收集所有节点的pod日志，因此需要采用daemonset采用部署fluentd
```yaml
1.准备fluentd镜像并推送至harbor
[root@k8s-master1 EFK]\# docker tag fluent/fluentd:v1.6.2-1.0 harbor.jiangxl.com/efk/fluentd:v1.6.2-1.0
[root@k8s-master1 EFK]\# docker push harbor.jiangxl.com/efk/fluentd:v1.6.2-1.0

2.编写fluentd yaml文件
[root@k8s-master1 EFK]\# vim fluentd-daemonset.yaml 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: fluentd-es
  namespace: efk
  labels:
    k8s-app: fluentd-es
    kubernetes.io/cluster-service: "true"
    addonmanager.kubernetes.io/mode: Reconcile
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: fluentd-es
  labels:
    k8s-app: fluentd-es
    kubernetes.io/cluster-service: "true"
    addonmanager.kubernetes.io/mode: Reconcile
rules:
- apiGroups:
  - ""
  resources:
  - "namespaces"
  - "pods"
  verbs:
  - "get"
  - "watch"
  - "list"
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: fluentd-es
  labels:
    k8s-app: fluentd-es
    kubernetes.io/cluster-service: "true"
    addonmanager.kubernetes.io/mode: Reconcile
subjects:
- kind: ServiceAccount
  name: fluentd-es
  namespace: efk
  apiGroup: ""
roleRef:
  kind: ClusterRole
  name: fluentd-es
  apiGroup: ""
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
    k8s-app: fluentd-es
  name: fluentd-es
  namespace: efk
spec:
  selector:
    matchLabels:
      k8s-app: fluentd-es
  template:
    metadata:
      labels:
        k8s-app: fluentd-es
    spec:
      containers:
      - env:
        - name: FLUENTD_ARGS
          value: --no-supervisor -q
        image: harbor.jiangxl.com/efk/fluentd-es-root:v1.6.2-1.0
        imagePullPolicy: IfNotPresent
        name: fluentd-es
        resources:
          limits:
            memory: 500Mi
          requests:
            cpu: 100m
            memory: 200Mi
        volumeMounts:
        - mountPath: /var/log
          name: varlog
        - mountPath: /var/lib/docker/containers
          name: varlibdockercontainers
          readOnly: true
        - mountPath: /home/docker/containers
          name: varlibdockercontainershome
          readOnly: true
        - mountPath: /fluentd/etc/config.d
          name: config-volume
        - mountPath: /fluentd/etc/fluent.conf
          name: config-volume-main
          subPath: fluent.conf
      #nodeName: k8s-node2
      securityContext: {}
      serviceAccount: fluentd-es
      serviceAccountName: fluentd-es
      volumes:
      - hostPath:
          path: /var/log
          type: ""
        name: varlog
      - hostPath:
          path: /var/lib/docker/containers
          type: ""
        name: varlibdockercontainers
      - hostPath:
          path: /home/docker/containers
          type: ""
        name: varlibdockercontainershome
      - configMap:
          defaultMode: 420
          name: fluentd-config
        name: config-volume
      - configMap:
          defaultMode: 420
          items:
          - key: fluent.conf
            path: fluent.conf
          name: fluentd-es-config-main
        name: config-volume-main
1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39.40.41.42.43.44.45.46.47.48.49.50.51.52.53.54.55.56.57.58.59.60.61.62.63.64.65.66.67.68.69.70.71.72.73.74.75.76.77.78.79.80.81.82.83.84.85.86.87.88.89.90.91.92.93.94.95.96.97.98.99.100.101.102.103.104.105.106.107.108.109.110.111.112.113.114.115.116.117.118.119.120.121.122.123.124.125.
3.创建资源
[root@k8s-master1 EFK]\# kubectl create -f fluentd-daemonset.yaml
serviceaccount/fluentd-es created
clusterrole.rbac.authorization.k8s.io/fluentd-es created
clusterrolebinding.rbac.authorization.k8s.io/fluentd-es created
daemonset.apps/fluentd-es created
```

### 2.5.查看efk所有组件资源状态
```sh
[root@k8s-master1 EFK]\# kubectl get all -n efk
NAME                          READY   STATUS    RESTARTS   AGE
pod/elasticsearch-0           1/1     Running   0          27h
pod/fluentd-es-nfgbj          1/1     Running   0          8m32s
pod/fluentd-es-r2mhj          1/1     Running   0          8m32s
pod/kibana-58cfc9fdc5-qqljb   1/1     Running   0          27h
pod/test-efk                  1/1     Running   0          18m

NAME                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/elasticsearch   NodePort    10.110.161.181   <none>        9200:39200/TCP   31h
service/kibana          ClusterIP   10.109.237.120   <none>        5601/TCP         27h

NAME                        DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
daemonset.apps/fluentd-es   2         2         2       2            2           <none>          8m32s

NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/kibana   1/1     1            1           27h

NAME                                DESIRED   CURRENT   READY   AGE
replicaset.apps/kibana-58cfc9fdc5   1         1         1       27h

NAME                             READY   AGE
statefulset.apps/elasticsearch   1/1     31h

```

![实现基于EFK日志平台收集Kubernetes集群日志信息_其他_08](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044817_620c11914da0258358.png)

### 2.6.将es配置一个nodeport用于查看索引
```sh
[root@k8s-master1 EFK]\# vim elasticsearch.yaml 
·······
apiVersion: v1
kind: Service
metadata:
  labels:
    k8s-app: elasticsearch
  name: elasticsearch
  namespace: efk
spec:
  ports:
  - port: 9200
    protocol: TCP
    targetPort: 9200
    nodePort: 39200
  selector:
    k8s-app: elasticsearch
  type: NodePort
  
[root@k8s-master1 EFK]\# kubectl apply -f elasticsearch.yaml
statefulset.apps/elasticsearch configured
service/elasticsearch configured
```

## 3.验证EFK集群可用性

### 3.1.运行一个pod持续产生日志
```sh
1.编写yaml文件
[root@k8s-master1 EFK]\# vim test-efk.yaml 
apiVersion: v1
kind: Pod
metadata:
  name: test-efk
  namespace: efk
spec:
  containers:
  - name: test-efk
    image: harbor.jiangxl.com/efk/alpine:3.6
    args: [/bin/sh, -c,
            'i=0; while true; do echo "$i: $(date)"; i=$((i+1)); sleep 1; done']			#每秒输出一个当前时间
  nodeName: k8s-node2
  
2.创建资源
[root@k8s-master1 EFK]\# kubectl create -f test-efk.yaml
pod/counter created
```

### 3.2.观察fluentd日志输出

```sh
1.查看test-efk运行在哪个node节点
[root@k8s-master1 EFK]\# kubectl get pod -n efk -o wide
NAME                      READY   STATUS    RESTARTS   AGE    IP               NODE        NOMINATED NODE   READINESS GATES
elasticsearch-0           1/1     Running   0          27h    100.64.169.189   k8s-node2   <none>           <none>
fluentd-es-nfgbj          1/1     Running   0          9m3s   100.64.169.149   k8s-node2   <none>           <none>
fluentd-es-r2mhj          1/1     Running   0          9m3s   100.111.156.91   k8s-node1   <none>           <none>
kibana-58cfc9fdc5-qqljb   1/1     Running   0          27h    100.111.156.75   k8s-node1   <none>           <none>
test-efk                  1/1     Running   0          18m    100.64.169.147   k8s-node2   <none>           <none>

2.追踪与test-efk pod运行在同一node节点的fluentd容器的日志
[root@k8s-master1 EFK]\# kubectl -n efk logs -f fluentd-es-nfgbj 
```

已经收集到test-efk pod的日志了
![实现基于EFK日志平台收集Kubernetes集群日志信息_nginx_09](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044817_620c1191963a769274.png)

### 3.3.观察es上的索引变化

> 由于2.6中已经将es的9200做了一个nodeport暴露，可以通过es-head插件查看es索引库
>
> 可以看到在es上已经有索引产生了
> ![实现基于EFK日志平台收集Kubernetes集群日志信息_docker_10](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044817_620c1191f112c87951.png)

### 3.4.在kibana上关联es索引库

**1）点击设置—>index patterns—>create index pattern**

![实现基于EFK日志平台收集Kubernetes集群日志信息_docker_11](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044818_620c11924ad7b37598.png)

**2）索引名称填写logstash-\*即可匹配所有logstash的索引库**

![实现基于EFK日志平台收集Kubernetes集群日志信息_elasticsearch_12](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044818_620c11929a48715584.png)

**3）匹配所有字段，点击创建索引**
![实现基于EFK日志平台收集Kubernetes集群日志信息_nginx_13](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044818_620c1192f3c2f49565.png)

**4）可以看到收集过来很多日志字段**
![实现基于EFK日志平台收集Kubernetes集群日志信息_docker_14](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044819_620c119334a455865.png)

### 3.5.查看日志收集的统计图

**1）查看全部日志**

![实现基于EFK日志平台收集Kubernetes集群日志信息_elasticsearch_15](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044819_620c11937e76417952.png)

**2）过滤test-efk pod的日志**

![实现基于EFK日志平台收集Kubernetes集群日志信息_elasticsearch_16](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/16044819_620c1193ddd5617506.png)

> 该文章为转载内容，仅做备份私人学习使用，原文：https://blog.51cto.com/jiangxl/5076636

