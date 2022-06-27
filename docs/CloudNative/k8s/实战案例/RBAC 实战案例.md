# （一）通过用户账号的方式分配单独Namespace的权限

## 1.案例描述

创建一个用户，仅拥有对know-system命名空间下的pods、deployments资源操作权限，采用RoleBinding绑定ClusterRole的方式来实现。

大致实现思路：

 1.生成用户的证书文件key

 2.通过apiserver生成证书请求

 3.通过k8s的api的ca证书签发用户的证书请求

 4.配置k8s设置集群、创建用户、配置上下文信息

 5.创建ClusterRole、RoleBinding资源

## 2.创建用户账号

```sh
1.创建证书文件
[root@k8s-master ~]\# cd /etc/kubernetes/pki/
[root@k8s-master /etc/kubernetes/pki]\# (umask 077;openssl genrsa -out knowman.key 2048)
Generating RSA private key, 2048 bit long modulus
....................................................................................+++
................+++
e is 65537 (0x10001)

2.使用apiserver的证书签发证书请求

2-1.申请签名，证书请求，申请的用户名是knowman，组是knowgroup
[root@k8s-master /etc/kubernetes/pki]\# openssl req -new -key knowman.key -out knowman.csr -subj "/CN=knowman/O=knowgroup"
[root@k8s-master /etc/kubernetes/pki]\# ll knowman.*
-rw-r--r-- 1 root root  915 4月  20 13:27 knowman.csr
-rw------- 1 root root 1679 4月  20 13:25 knowman.key

2-2.签发证书(使用apiserver的ca证书签发用户证书)
[root@k8s-master /etc/kubernetes/pki]\# openssl x509 -req -in knowman.csr -CA ca.crt  -CAkey ca.key  -CAcreateserial -out knowman.crt -days 3650
Signature ok
subject=/CN=knowman/O=knowgroup
Getting CA Private Key

0.3 👀 先查看一下集群apiserver的监听地址，确保监听的该地址可以访问到kubernetes（这里我做了代理。。）
❯ kubectl cluster-info
Kubernetes control plane is running at https://127.0.0.1:52520
CoreDNS is running at https://127.0.0.1:52520/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

3.配置集群、用户、上下文信息
#配置集群
[root@k8s-master /etc/kubernetes/pki]\# kubectl config set-cluster kubernetes --embed-certs=true --certificate-authority=/etc/kubernetes/pki/ca.crt --server=https://192.168.81.210:6443
Cluster "kubernetes" set.

#配置用户信息
[root@k8s-master /etc/kubernetes/pki]\# kubectl config set-credentials knowman --embed-certs=true --client-certificate=/etc/kubernetes/pki/knowman.crt --client-key=/etc/kubernetes/pki/knowman.key 
User "knowman" set.

#配置上下文信息
[root@k8s-master /etc/kubernetes/pki]\# kubectl config set-context knowman@kubernetes --cluster=kubernetes --user=knowman
Context "knowman@kubernetes" created.

4.查看配置的集群信息
[root@k8s-master /etc/kubernetes/pki]\# kubectl config view
```

![Kubernetes集群RBAC授权案例（一）通过用户账号的方式分配单独Namespace的权限（四十）_用户账号](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=-20220616085930486.png)

```sh
5）切换到knowman用户
[root@k8s-master /etc/kubernetes/pki]\# kubectl config use-context knowman@kubernetes
Switched to context "knowman@kubernetes".

6）试着查看下know-system命名空间下的资源
[root@k8s-master /etc/kubernetes/pki]\# kubectl get pod -n know-system
Error from server (Forbidden): pods is forbidden: User "knowman" cannot list resource "pods" in API group "" in the namespace "know-system"
#可以看到没有权限访问

7）切换到admin用户进行授权
[root@k8s-master ~]\# kubectl config use-context kubernetes-admin@kubernetes 
Switched to context "kubernetes-admin@kubernetes"
```

## 3.创建ClusterRole资源设置权限

创建一个ClusterRole，针对资源做一些授权，由于ClusterRole是集群级别的角色授权，可以多次复用

```sh
1.编写ClusterRole资源
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# vim knowman-clusterrole.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: knowman-clusterrole
rules:											#定义角色
- apiGroups: ["","apps"]						#对哪个api组进行授权，""核心资源组，apps组是deployment控制器所在的api组
  resources: ["pods","deployments"]				  #对什么资源进行授权
  verbs:										#具体的权限列表
  - get
  - list
  - watch

2.创建资源
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl create -f knowman-clusterrole.yaml
clusterrole.rbac.authorization.k8s.io/knowman-clusterrole created

3.查看资源
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl get clusterrole knowman-clusterrole
NAME                  CREATED AT
knowman-clusterrole   2021-04-20T06:26:20Z

4.查看资源的详细信息
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl describe clusterrole knowman-clusterrole
```

![Kubernetes集群RBAC授权案例（一）通过用户账号的方式分配单独Namespace的权限（四十）_docker_02](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=-20220616085930519.png)

## 4.创建RoleBinding资源将用户和角色绑定

通过RoleBinding角色绑定将用户与集群角色进行绑定

```sh
1.编写yaml
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# vim knowman-rolebinding.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: knowman-rolebinding
  namespace: know-system
subjects:												#关联用户信息
- kind: User											#类型为用户
  name: knowman											#用户名称
  namespace: know-system								#角色所能控制的命名空间
  apiGroup: rbac.authorization.k8s.io
roleRef:											#关联角色信息
  kind: ClusterRole									 #类型为ClusterRole
  name: knowman-clusterrole							  #角色名称
  apiGroup: rbac.authorization.k8s.io

2.创建资源
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl create -f knowman-rolebinding.yaml
rolebinding.rbac.authorization.k8s.io/knowman-rolebinding created

3.查看资源
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl get rolebinding knowman-rolebinding -n know-system
NAME                  ROLE                              AGE
knowman-rolebinding   ClusterRole/knowman-clusterrole   17s

4.查看资源的详细信息
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl describe rolebinding knowman-rolebinding -n know-system
```

![Kubernetes集群RBAC授权案例（一）通过用户账号的方式分配单独Namespace的权限（四十）_nginx_03](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=-20220616085930655.png)

## 5.切换knowman用户查看权限

```sh
1.切换用户
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl config use-context knowman@kubernetes 
Switched to context "knowman@kubernetes".

2.查看可以操作的pod/deployment资源
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl get pod,deployment -n know-system
NAME                                READY   STATUS    RESTARTS   AGE
pod/deploy-nginx-5cfd6fd7bd-79z4t   1/1     Running   1          6d3h
pod/deploy-nginx-5cfd6fd7bd-b67wf   1/1     Running   1          6d3h
pod/deploy-nginx-5cfd6fd7bd-qpl2w   1/1     Running   1          6d3h

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/deploy-nginx   3/3     3            3           6d5h

3.删除pod查看是否有权限
[root@k8s-master ~/k8s_1.19_yaml/rbac]\# kubectl delete pod deploy-nginx-5cfd6fd7bd-79z4t -n know-system
Error from server (Forbidden): pods "deploy-nginx-5cfd6fd7bd-79z4t" is forbidden: User "knowman" cannot delete resource "pods" in API group "" in the namespace "know-system"
#无权删除
```

除了deployment、pod资源之前无权操作其他资源

![Kubernetes集群RBAC授权案例（一）通过用户账号的方式分配单独Namespace的权限（四十）_nginx_04](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=-20220616085930822.png)



# （二）通过kubeconfig授权文件实现特定资源的权限分配

## 1.案例描述

我们可以使用根证书签发一个客户端证书，在客户端证书里面指定用户名，然后在通过kubectl config命令生成一个kubeconfig授权文件，文件内容中包括了集群信息、用户信息、客户端证书信息，然后再创建一个rbac策略，将证书中的用户与创建的role角色进行绑定，即可实现通过授权文件的方式去访问集群的特定资源

**最终实现目的：** 将授权文件发给对应的人员，让人员只需kubectl命令的时候指定kubeconfig文件的路径即可请求集群资源

**实现步骤：**

1.安装cfssl工具，用k8s ca根证书签发一个客户端证书

2.用kubectl config生成授权文件

3.创建rbac授权策略

## 2.准备cfssl工具命令

```sh
1.编写脚本
[root@k8s-master 1 rbac]\# cat cfssl.sh 
wget https://pkg.cfssl.org/R1.2/cfssl_linux-amd64
wget https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64
wget https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64
chmod +x cfssl*
mv cfssl_linux-amd64 /usr/bin/cfssl
mv cfssljson_linux-amd64 /usr/bin/cfssljson
mv cfssl-certinfo_linux-amd64 /usr/bin/cfssl-certinfo

2.执行脚本
[root@k8s-master1 rbac]\# sh cfssl.sh 

3.查看是否安装成功
[root@k8s-master1 rbac]\# ll /usr/bin/cfssl* /usr/local/bin/cfssl
-rwxr-xr-x 1 root root  6595195 4月  17 03:17 /usr/bin/cfssl-certinfo
-rwxr-xr-x 1 root root  2277873 4月  17 03:17 /usr/bin/cfssljson
-rwxr-xr-x 1 root root 10376657 5月  11 10:17 /usr/local/bin/cfssl
```

## 3.利用k8s根证书签发一个客户端证书

利用k8s的ca根证书签发一个专门给某个客户端使用的证书

```sh
1.编写脚本
[root@k8s-master1 rbac]\# vim cert.sh
cat > ca-config.json <<EOF
{
  "signing": {
    "default": {
      "expiry": "87600h"			#证书的有效期
    },
    "profiles": {
      "kubernetes": {
        "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ],
        "expiry": "87600h"
      }
    }
  }
}
EOF

cat > jiangxl-csr.json <<EOF
{
  "CN": "jiangxl",					#可以理解为是用户名，rbac授权的时候也是根据这个值来授权
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "ST": "BeiJing",
      "L": "BeiJing",
      "O": "k8s",
      "OU": "System"
    }
  ]
}
EOF

cfssl gencert -ca=/etc/kubernetes/pki/ca.crt -ca-key=/etc/kubernetes/pki/ca.key -config=ca-config.json -profile=kubernetes jiangxl-csr.json | cfssljson -bare jiangxl			#通过cfssl生成证书，要指定k8s根证书的路径

2.生成证书
[root@k8s-master1 rbac]\# sh cert.sh
2021/07/06 14:52:58 [INFO] generate received request
2021/07/06 14:52:58 [INFO] received CSR
2021/07/06 14:52:58 [INFO] generating key: rsa-2048
2021/07/06 14:52:58 [INFO] encoded CSR
2021/07/06 14:52:58 [INFO] signed certificate with serial number 104120417046794075592128325952316827755218120119
2021/07/06 14:52:58 [WARNING] This certificate lacks a "hosts" field. This makes it unsuitable for
websites. For more information see the Baseline Requirements for the Issuance and Management
of Publicly-Trusted Certificates, v.1.1.6, from the CA/Browser Forum (https://cabforum.org);
specifically, section 10.2.3 ("Information Requirements")

3.查看生成的证书文件
[root@k8s-master1 rbac]\# ll ca-config.json jiangxl*
-rw-r--r-- 1 root root  292 7月   6 14:52 ca-config.json
-rw-r--r-- 1 root root  997 7月   6 14:52 jiangxl.csr
-rw-r--r-- 1 root root  220 7月   6 14:52 jiangxl-csr.json
-rw------- 1 root root 1679 7月   6 14:52 jiangxl-key.pem
-rw-r--r-- 1 root root 1281 7月   6 14:52 jiangxl.pem
#主要有用的就是jiangxl.pem jiangxl-key.pem
```

## 4.生成kubeconfig授权文件

生成一个kubeconfig授权文件，文件的内容和/root/.kube/config文件基本是一致的，只是证书内容不一样，证书内容不同所属的权限也不同，用户可以通过指定kubeconfig文件去执行k8s命令

生成授权文件需要分为三个步骤：设置集群、设置证书私钥文件路径、指定用户名，每当执行一个步骤，kubeconfig的内容就会增加上相应的配置

**1.生成授权文件设置集群信息：指定根证书路径、k8sapi地址、授权文件名称**

```sh
kubectl config set-cluster kubernetes \
  --certificate-authority=/etc/kubernetes/pki/ca.crt \
  --embed-certs=true \
  --server=https://192.168.16.106:6443 \
  --kubeconfig=jiangxl.kubeconfig

#set-cluster kubernetes：设置集群名称为kubernetes
#--certificate-authority：指定根证书路径
#--server：指定k8sapi地址
#--kubeconfig：指定授权文件名称  
```

当执行了第一步设置集群信息后，查看kubeconfig的文件内容，会发现文件里面多了根证书ca的文件内容以及集群apiserver的地址
![Kubernetes集群RBAC授权案例（二）通过kubeconfig授权文件实现特定资源的权限分配（四十一）_linux](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=-20220616090418303.png)

**2.设置客户端认证：指定客户端证书文件路径和私钥文件路径**

```sh
kubectl config set-credentials jiangxl \
  --client-key=jiangxl-key.pem \
  --client-certificate=jiangxl.pem \
  --embed-certs=true \
  --kubeconfig=jiangxl.kubeconfig

#--client-key：指定客户端证书的私钥文件
#--client-certificate：指定客户端证书的证书文件
#--kubeconfig：指定授权文件名称
#set-credentials jiangxl：设置证书的名称为jiangxl
```

当第二步设置客户端证书认证完成后，kubeconfig文件就会增加客户端证书文件的内容
![Kubernetes集群RBAC授权案例（二）通过kubeconfig授权文件实现特定资源的权限分配（四十一）_客户端_02](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=-20220616090418664.png)

**3.设置默认上下文：指定用户名是什么**

```sh
kubectl config set-context kubernetes \
  --cluster=kubernetes \
  --user=jiangxl \
  --kubeconfig=jiangxl.kubeconfig
```

第三步执行完成后，kubeconfig文件里面会增加用户信息配置，rbac授权也是将这个用户和某个role进行绑定
![Kubernetes集群RBAC授权案例（二）通过kubeconfig授权文件实现特定资源的权限分配（四十一）_容器_03](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=-20220616090418987.png)

## 5.执行kubectl命令时指定授权文件

使用`--kubeconfig`参数去指定使用哪个授权文件，到此时也就可以把授权文件发送给需要使用这个授权的人，虽然现在还是无权限获取资源的状态，但是已经可以连接到k8s集群了，只需要配置好rbac策略，即可有权限访问资源

```sh
[root@k8s-master1 rbac]\# kubectl --kubeconfig=jiangxl.kubeconfig get pod
Error from server (Forbidden): pods is forbidden: User "jiangxl" cannot list resource "pods" in API group "" in the namespace "default"
```

## 6.配置rbac策略授权kubeconfig相应的权限

**1.编写rbac yaml资源文件**

创建一个role，授权对default命名空间下pod、deployment、svc资源的访问权限，并将该role与jiangxl用户进行绑定

```yaml
[root@k8s-master1 rbac]\# vim rbac.yaml 
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: ["","apps"]
  resources: ["pods","deployments","services"]
  verbs: ["get", "watch", "list"]

---

apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: jiangxl
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

**2.创建rbac资源**

```sh
[root@k8s-master1 rbac]\# kubectl apply -f rbac.yaml
role.rbac.authorization.k8s.io/pod-reader created
rolebinding.rbac.authorization.k8s.io/read-pods created
```

## 7.验证kubeconfig授权文件是否有了对应的权限

```sh
[root@k8s-master1 rbac]\# kubectl --kubeconfig=jiangxl.kubeconfig get pod,deployment,svc
NAME                         READY   STATUS    RESTARTS   AGE
pod/jenkins-0                1/1     Running   0          38s
pod/tools-696bf5cc5c-z2znw   1/1     Running   0          103s

NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/tools   1/1     1            1           27d

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/jenkins      ClusterIP   None         <none>        42/TCP    15d
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   59d
service/tools        ClusterIP   None         <none>        42/TCP    27d

#已经对default命名空间下的pod、deployment、svc资源有了读取权限
```



# （三）通过Service Account账号授权实现特定资源的权限分配

## 1.创建一个sa账号

```yaml
[root@k8s-master1 sa]\# vim nginx-sa.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nginx-sa
  namespace: rbac
  labels:
    kubernetes.io/cluster-service: "true"
    addonmanager.kubernetes.io/mode: Reconcile
```

## 2.编写rbac资源授权yaml文件

```yaml
[root@k8s-master1 sa]\# vim nginx-rbac.yaml 
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: rbac
  name: pod-reader
rules:
- apiGroups: ["","apps"]
  resources: ["pods","deployments","services"]
  verbs: ["get", "watch", "list"]

---

kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: read-pods
  namespace: rbac
subjects:
- kind: ServiceAccount        #类型填写ServiceAccount
  name: nginx-sa
  namespace: rbac
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

## 3.编写nginx pod资源并使用sa账号

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
  namespace: stat`
spec:
  serviceName: "web"			#指定使用哪个headless service资源
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx    
    spec:
      serviceAccountName: nginx-sa
      containers:
      - name: nginx
        image: nginx:1.17
        ports:
        - name: web
          containerPort: 80
```

## 4.创建所有资源并查看

```sh
1.创建所有资源
[root@k8s-master1 sa]\# kubectl apply -f ./
role.rbac.authorization.k8s.io/pod-reader created
rolebinding.rbac.authorization.k8s.io/read-pods created
serviceaccount/nginx-sa created
statefulset.apps/web created

2.查看sa账号
#sa账号会生成一个token，这个token中保存这根证书ca以及sa用户的证书kube	

:q
，用于连接到k8s集群
[root@k8s-master1 sa]\# kubectl get sa -n rbac
NAME       SECRETS   AGE
default    1         4m48s
nginx-sa   1         103s
[root@k8s-master1 sa]\# kubectl get secret -n rbac
NAME                   TYPE                                  DATA   AGE
default-token-4fkpj    kubernetes.io/service-account-token   3      5m14s
nginx-sa-token-vcrmv   kubernetes.io/service-account-token   3      2m9s

3.查看nginx资源中是否关联sa
[root@k8s-master1 sa]\# kubectl describe statefulset -n rbac
Name:               web
···········
Pod Template:
  Labels:           app=nginx
  Service Account:  nginx-sa
···········
```

> 文章来源于：https://blog.51cto.com/jiangxl/5076630
>
> 仅做个人备份学习使用.