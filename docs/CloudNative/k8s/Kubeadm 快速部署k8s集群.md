## 1.集群类型

kubernetes集群大体上分为两类，一主多从和多主多从

- 一主多从：一台master节点和多台node节点，搭建简单，但是有单机故障风险，适合用于测试环境
- 多主多从：多台master节点和多台node节点，搭建麻烦，安全性高，适合用于生产环境

![kubeadm方式部署Kubernetes1.19集群环境（二）_其他](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072119_61ce3eef1c8d185797.png)

## 2.集群安装方式

kubernetes有多种部署方式，目前主流的方式有kubeadm、minikube、二进制安装

- minikube：快速搭建单节点的kubernetes工具
- kubeadm：快速搭建kubernetes集群的工具
- 二进制包：每个组件都是单独的二进制包，依次去安装，可以对kubernetes更加理解

## 3.环境规划

| IP地址         | 操作系统  | 角色   | 配置              |
| -------------- | --------- | ------ | ----------------- |
| 192.168.81.210 | centos7.5 | Master | CPU：2核 内存：2G |
| 192.168.81.220 | centos7.5 | Node-1 | CPU：2核 内存：2G |
| 192.168.81.230 | centos7.5 | Node-2 | CPU：2核 内存：2G |

## 4.系统初始化

系统初始化要求所有节点都执行

所有节点配置yum源
```sh
curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo ;curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

### 4.1.检查操作系统版本

kubeadm安装的k8s要求系统版本在centos 7.5以上
```sh
cat /etc/redhat-release 
CentOS Linux release 7.6.1810 (Core) 
```

### 4.2.主机名解析
```sh
vim /etc/hosts
192.168.81.210 k8s-master
192.168.81.220 k8s-node1
192.168.81.230 k8s-node2                
```

### 4.3.时间同步

kubernetes要求集群中节点的时间必须一致
```sh
systemctl start chronyd
systemctl enable chronyd
```

### 4.4.禁用防火墙
```sh
systemctl stop firewalld
systemctl disable firewalld
```

### 4.5.禁用selinux
```sh
setenforce 0
sed -ri '/^SELINUX=/c SELINUX=disabled' /etc/sysconfig/selinux
sed -ri '/^SELINUX=/c SELINUX=disabled' /etc/selinux/config 
```

### 4.6.禁用swapp分区

将fstab文件中的swap分区注释掉即可

kubernetes要求每个节点都要禁用swap设备
```sh
vim /etc/fstab 
#/dev/mapper/centos-swap swap                    swap    defaults        0 0

关闭成功如下所示
free -h
              total        used        free      shared  buff/cache   available
Mem:           1.8G        340M        1.0G         12M        425M        1.3G
Swap:            0B          0B          0B
```

### 4.7.修改linux内核参数

添加网桥过滤和地址转发功能
```sh
1.添加内核参数
vim /etc/sysctl.d/kubernetes.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1

2.加载配置
sysctl -p

3.加载网桥过滤模块
modprobe br_netfilter

4.查看是否加载成功
lsmod | grep br_netfilter
br_netfilter           22256  0 
bridge                151336  1 br_netfilter
```

### 4.8.配置ipvs功能

在kubernetes中service有两种代理模式，一种是基于iptables的，一种是基于ipvs的

ipvs的性能比iptables要高，因此采用ipvs，如果要用ipvs，需要手动载入ipvs模块
```sh
1.安装ipset和ipvsadm
yum -y install ipset ipvsadmin

2.配置加载模块脚本
vim /etc/sysconfig/modules/ipvs.modules
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4

3.增加执行权限
chmod a+x /etc/sysconfig/modules/ipvs.modules

4.执行脚本文件
sh /etc/sysconfig/modules/ipvs.modules

5.查看是否加载成功
lsmod | grep -E 'ip_vs|nf_conntrack'
nf_conntrack_ipv4      15053  0 
nf_defrag_ipv4         12729  1 nf_conntrack_ipv4
ip_vs_sh               12688  0 
ip_vs_wrr              12697  0 
ip_vs_rr               12600  0 
ip_vs                 145497  6 ip_vs_rr,ip_vs_sh,ip_vs_wrr
nf_conntrack          133095  2 ip_vs,nf_conntrack_ipv4
libcrc32c              12644  3 xfs,ip_vs,nf_conntrack

```

### 4.9.重启服务器

初始化操作配置完成后需要重启服务器
```sh
reboot
```

## 5.部署kubernetes集群

### 5.1.所有节点部署docker
```sh
1.准备镜像源
[root@k8s-master ~]\# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo

2.查看当前支持的docker版本
[root@k8s-master ~]\# yum list docker-ce --showduplicates

3.安装特定版本的docker-ce
[root@k8s-master ~]\# yum -y install --setopt=obsoletes=0 docker-ce-19.03.11-3.el7

4.创建docker配置文件
docker默认情况下使用cgroup driver作为cgroupfs，而k8s推荐使用systemd来代替cgroupfs
[root@k8s-master ~]\# mkdir /etc/docker
[root@k8s-master ~]\# vim /etc/docker/daemon.json
{
        "exec-opts": ["native.cgroupdriver=systemd"],
        "registry-mirrors": ["https://zggyaen3.mirror.aliyuncs.com"]
}

5.启动docker
[root@k8s-master ~]\# systemctl start docker
[root@k8s-master ~]\# systemctl enable docker

6.查看docker版本
[root@k8s-master ~]\# docker version
```

![kubeadm方式部署Kubernetes1.19集群环境（二）_其他_02](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072119_61ce3eef66b7188674.png)

### 5.2.所有节点安装kubernetes组件
```sh
1.准备k8s镜像源
[root@k8s-master ~]\# vim /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes Repo
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64   
gpgcheck=0
enabled=1
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpgp
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg

2.查询kubeadm可用的版本
[root@k8s-master ~]\# yum list kubeadm --showduplicates

3.安装kubeadm、kubelet、kubect
[root@k8s-master ~]\# yum -y install --setopt=obsoletes=0 kubeadm-1.19.6-0 kubelet-1.19.6-0 kubectl-1.19.6-0 --downloaddir=/root/soft/kubernetes

4.配置kubelet的cgroup以及使用ipvs转发
[root@k8s-master ~]\# vim /etc/sysconfig/kubelet 
KUBELET_EXTRA_ARGS="--cgroup-driver=systemd"
KUBE_PROXY_MODE="ipvs"

5.设置kubelet开机自启
#安装好kubelet后先不用启动，当集群初始化的时候会自动启动kubelet，选择启动kubelet会报错
[root@k8s-master ~]\# systemctl enable kubelet

```

> 选择软件版本

![kubeadm方式部署Kubernetes1.19集群环境（二）_其他_03](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072119_61ce3eeff1c5061461.png)

> 所有节点成功安装kubeadm、kublet、kubectl

![kubeadm方式部署Kubernetes1.19集群环境（二）_docker_04](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072120_61ce3ef0681be88204.png)

> 安装完kubelet先不用启动，启动会报错

![kubeadm方式部署Kubernetes1.19集群环境（二）_linux_05](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072120_61ce3ef0bb97f70034.png)

### 5.3.所有节点准备集群组件镜像包

> 在安装kubernetes集群之前，必须要提前准备好集群需要的镜像
>
> 由于镜像都在国外，阿里云上有对应的镜像，我们可以直接从阿里云上下载，然后修改为国外镜像的名字即可
>
> 首先查一下适合当前k8s集群版本的组件镜像包在去下载，其实主要是看pause、etcd、coredns这三个组件的版本，apiserver、contorller-manager、scheduler、proxy都和kubeadm的版本一致
```sh
1.查看镜像包列表
[root@k8s-master ~]\# kubeadm config images list
k8s.gcr.io/kube-apiserver:v1.19.8
k8s.gcr.io/kube-controller-manager:v1.19.8
k8s.gcr.io/kube-scheduler:v1.19.8
k8s.gcr.io/kube-proxy:v1.19.8
k8s.gcr.io/pause:3.2
k8s.gcr.io/etcd:3.4.13-0
k8s.gcr.io/coredns:1.7.0

2.下载镜像
[root@k8s-master ~]\# images=(
	kube-apiserver:v1.19.6
	kube-controller-manager:v1.19.6
	kube-scheduler:v1.19.6
	kube-proxy:v1.19.6
	pause:3.2
	etcd:3.4.13-0
	coredns:1.7.0
)
[root@k8s-master ~]\# for imageName in ${images[@]}
do
	docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName
	docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName k8s.gcr.io/$imageName
	docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName
done
```

### 5.4.master节点初始化

> 只在master操作，初始化成功后，kubelet组件会自动启动，并且使用kubectl get node命令也可以看到集群中已经有master节点了
```sh
1.集群初始化
[root@k8s-master ~]\# kubeadm init \
--kubernetes-version=v1.19.6 \											#指定k8s的版本
--pod-network-cidr=10.244.0.0/16 \								#pod网络地址段
--service-cidr=10.96.0.0/12 \									#service资源网络地址段
--apiserver-advertise-address=192.168.81.210								#apiserver地址

2.创建必要文件
这些文件是使用kubectl命令的前提，kubectl命令使用是需要去找config配置文件
[root@k8s-master ~]\# mkdir -p $HOME/.kube
[root@k8s-master ~]\# sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
[root@k8s-master ~]\# sudo chown $(id -u).$(id -g) $HOME/.kube/config

3.查看master是否加入集群
[root@k8s-master ~]\# kubectl get node
NAME         STATUS     ROLES    AGE   VERSION
k8s-master   NotReady   master   12m   v1.19.6

4.初始化成功后kubelet也会自动启动
[root@k8s-master ~]\# systemctl status kubelet
● kubelet.service - kubelet: The Kubernetes Node Agent
   Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/kubelet.service.d
           └─10-kubeadm.conf
   Active: active (`running`) since 六 2021-02-20 10:14:21 CST; 17min ago
```

> 初始化过程产生了很多有价值的信息输出
>
> .Your Kubernetes control-plane has initialized successfully! //这个提示说明master节点已经初始化成功了
>
> To start using your cluster, you need to run the following as a regular user: //这个提示说要想使用k8s集群，还需要执行下面三条命令
> ```
> mkdir -p $HOME/.kube`
> `sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config`
> ```
>
> You should now deploy a pod network to the cluster.
> Run “kubectl apply -f [podnetwork].yaml” with one of the options listed at: //这个提示说明想要部署容器，还需要配置网络模型
> https://kubernetes.io/docs/concepts/cluster-administration/addons/
>
> Then you can join any number of worker nodes by running the following on each as root: //这个提示说明要想让其他node节点加入集群需要执行下面的命令
>
> kubeadm join 192.168.81.210:6443 --token z0hiaw.woiwvjvx8o1kd4ef
> –discovery-token-ca-cert-hash sha256:4009b1fad096615c3409fcd670feb8a915f7f1f6eb03bc3adcb1164cf871b960

![kubeadm方式部署Kubernetes1.19集群环境（二）_linux_06](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072121_61ce3ef13526811335.png)

### 5.5.node节点初始化

> 只在node节点操作
```sh
1.node-1操作
[root@k8s-node1 ~]\# kubeadm join 192.168.81.210:6443 \
--token z0hiaw.woiwvjvx8o1kd4ef \
--discovery-token-ca-cert-hash sha256:4009b1fad096615c3409fcd670feb8a915f7f1f6eb03bc3adcb1164cf871b960 

2.node-2操作
[root@k8s-node2 ~]\# kubeadm join 192.168.81.210:6443 \
--token z0hiaw.woiwvjvx8o1kd4ef \
--discovery-token-ca-cert-hash sha256:4009b1fad096615c3409fcd670feb8a915f7f1f6eb03bc3adcb1164cf871b960 

3.在master节点查看集群节点信息
#可以看到集群中已经有三个节点了，但是状态都是notready，说明我们还没有配置网络插件，集群节点之间不通讯导致的
[root@k8s-master ~]\# kubectl get node
NAME         STATUS     ROLES    AGE   VERSION
k8s-master   NotReady   master   18m   v1.19.6
k8s-node1    NotReady   <none>   51s   v1.19.6
k8s-node2    NotReady   <none>   10s   v1.19.6
```

![kubeadm方式部署Kubernetes1.19集群环境（二）_linux_07](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072121_61ce3ef1ac9e171538.png)

### 5.6.集群配置flannel网络
```sh
1.下载flannel yaml文件
链接：https://pan.baidu.com/s/1LXmk64m7cZZgr0X2GxX0FA 
提取码：r4i7 
下载后传到服务器上


2.将文件中quay.io仓库改为quay-mirror.qiniu.com
[root@k8s-master ~]\# mkdir k8s_1.19_yaml
[root@k8s-master ~]\# cd k8s_1.19_yaml
[root@k8s-master ~/k8s_1.19_yaml]\# sed -ri 's#quay.io#quay-mirror.qiniu.com#g' kube-flannel.yaml 

3.启动flannel网络
[root@k8s-master ~/k8s_1.19_yaml]\# kubectl apply -f kube-flannel.yaml 
podsecuritypolicy.policy/psp.flannel.unprivileged created
clusterrole.rbac.authorization.k8s.io/flannel created
clusterrolebinding.rbac.authorization.k8s.io/flannel created
serviceaccount/flannel created
configmap/kube-flannel-cfg created
daemonset.apps/kube-flannel-ds-amd64 created
daemonset.apps/kube-flannel-ds-arm64 created
daemonset.apps/kube-flannel-ds-arm created
daemonset.apps/kube-flannel-ds-ppc64le created
daemonset.apps/kube-flannel-ds-s390x created

4.flannel网络有时pull会失败可以从这里提取
链接：https://pan.baidu.com/s/1AqubJhTMIshf66ofOCkubQ 
提取码：ypbh 
下载后导入系统后，在把镜像打个标签和yaml配置文件中的保持一致
[root@k8s-master ~/k8s_1.19_yaml]\# docker load -i flanneld-v0.12.0-amd64.docker 
[root@k8s-master ~/k8s_1.19_yaml]\# docker tag quay.io/coreos/flannel:v0.12.0-amd64 quay-mirror.qiniu.com/coreos/flannel:v0.12.0-amd64

5.查看组件pod状态
[root@k8s-master ~/k8s_1.19_yaml]\# kubectl get pods -n kube-system
NAME                                 READY   STATUS    RESTARTS   AGE
coredns-f9fd979d6-r9s9q              1/1     Running   0          69m
coredns-f9fd979d6-znljq              1/1     Running   0          69m
etcd-k8s-master                      1/1     Running   0          70m
kube-apiserver-k8s-master            1/1     Running   0          70m
kube-controller-manager-k8s-master   1/1     Running   0          70m
kube-flannel-ds-amd64-cjlqh          1/1     Running   0          116s
kube-flannel-ds-amd64-kllsk          1/1     Running   0          116s
kube-flannel-ds-amd64-q5bjg          1/1     Running   0          116s
kube-proxy-6pdf8                     1/1     Running   0          51m
kube-proxy-lkm8r                     1/1     Running   0          69m
kube-proxy-whmll                     1/1     Running   0          52m
kube-scheduler-k8s-master            1/1     Running   0          70m
```

> 当集群组件全部运行成功，网络模型flannel没问题后，集群节点就都是可用状态了
>
> 集群安装好之后所有操作都在master上进行

![kubeadm方式部署Kubernetes1.19集群环境（二）_初始化_08](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072122_61ce3ef23c59f85508.png)

## 6.部署一个nginx容器验证集群可用性
```sh
1.创建一个deployment资源的nginx
[root@k8s-master ~]\# kubectl create deployment nginx --image=nginx:1.16

2.对外暴露端口
这条命令其实就是创建了一个svc资源，暴露一个随机端口
[root@k8s-master ~]\# kubectl expose deployment nginx --port=80 --type=NodePort
service/nginx exposed

3.查看pod资源
[root@k8s-master ~]\# kubectl get pod -o wide
NAME                     READY   STATUS    RESTARTS   AGE     IP           NODE        NOMINATED NODE   READINESS GATES
nginx-6d4cf56db6-wwmvl   1/1     Running   0          3m59s   10.244.1.4   k8s-node1   <none>           <none>

4.查看所有资源
[root@k8s-master ~]\# kubectl get all

```

> 30376就是svc暴露出的随机端口，使用集群节点任意ip都可以访问到30376端口的应用

![kubeadm方式部署Kubernetes1.19集群环境（二）_其他_09](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072122_61ce3ef2974ec5568.png)

## 7.k8s命令开启tab功能
```sh
[root@k8s-master ~]\# yum install -y bash-completion
[root@k8s-master ~]\# source /usr/share/bash-completion/bash_completion
[root@k8s-master ~]\# source <(kubectl completion bash)
[root@k8s-master ~]\# echo "source <(kubectl completion bash)" >> ~/.bashrc
```

## 8.部署rancher管理k8s
```sh
1.导入rancher镜像
[root@k8s-master ~]\# docker load -i rancher_v244.tar.gz 

2.准备挂载点
[root@k8s-master ~]\# mkdir -p /docker_volume/rancher_home/rancher
[root@k8s-master ~]\# mkdir -p /docker_volume/rancher_home/auditlog

3.运行rancher容器
docker run -d --restart=unless-stopped -p 80:80 -p 443:443 \
-v /docker_volume/rancher_home/rancher:/var/lib/rancher \
-v /docker_volume/rancher_home/auditlog:/var/log/auditlog \
--name rancher rancher/rancher:v2.4.4  
```

> 导入集群

![kubeadm方式部署Kubernetes1.19集群环境（二）_linux_10](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072122_61ce3ef2bddb656521.png)
```sh
1.加入rancher
[root@k8s-master ~]\# curl --insecure -sfL https://192.168.16.107/v3/import/bpgwzbwqm7lwk48s89mw98llm6cnvgvx64x7lmvwjn88xn4b22l2ql.yaml | kubectl apply -f -
[root@k8s-master ~]\# kubectl apply -f https://192.168.16.107/v3/import/bpgwzbwqm7lwk48s89mw98llm6cnvgvx64x7lmvwjn88xn4b22l2ql.yaml


2.等待容器启动成功共即可加入rancher
[root@k8s-master ~]\# kubectl get pod -n cattle-system
NAME                                    READY   STATUS    RESTARTS   AGE
cattle-cluster-agent-69c6bd94ff-vhlqs   1/1     Running   0          55m
cattle-node-agent-72x2b                 1/1     Running   0          54m
cattle-node-agent-csnd7                 1/1     Running   0          55m
cattle-node-agent-gtf4s                 1/1     Running   0          54m

```

![kubeadm方式部署Kubernetes1.19集群环境（二）_其他_11](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/31072123_61ce3ef31268a2979.png)

> 文章来源于：https://blog.51cto.com/jiangxl/4803878
>
> 仅做个人备份学习使用.