# 使用 Kubespray 部署 

## Kubespray 简介

[Kubespray](https://github.com/kubernetes-incubator/kubespray) 是 Kubernetes incubator 中的项目，目标是提供 Production Ready Kubernetes 部署方案，该项目基础是通过 Ansible Playbook 来定义系统与 Kubernetes 集群部署的任务，具有以下几个特点：

- 可以部署在 AWS, GCE, Azure, OpenStack 以及裸机上.
- 部署 High Available Kubernetes 集群.
- 可组合性 (Composable)，可自行选择 Network Plugin (flannel, calico, canal, weave) 来部署.
- 支持多种 Linux distributions(CoreOS, Debian Jessie, Ubuntu 16.04, CentOS/RHEL7).

Kubespray 由一系列的 [Ansible](http://docs.ansible.com/) playbook、生成 [inventory](https://github.com/kubernetes-incubator/kubespray/blob/master/docs/ansible.md) 的命令行工具以及生成 OS/Kubernetes 集群配置管理任务的专业知识构成。

## 初始化环境

主机环境：

| 角色   | IP           |
| ------ | ------------ |
| master | 172.16.1.128 |
| node01 | 172.16.1.129 |

编辑`/etc/hosts`文件，使各主机之间可以通过主机名互相通信：

```bash
# 添加以下内容
172.16.1.128 master master.agou-ops.com
172.16.1.129 node01 node01.agou-ops.com
```

关闭 SELinux 和防火墙：

```bash
sed -i 's/SELINUX=*/SELINUX=disabled/' /etc/selinux/config
systemctl disable firewalld && systemctl stop firewalld
```

Kubernetes 1.8 开始要求关闭系统的 Swap 交换分区，方法如下：

 ```bash
swapoff -a && echo "vm.swappiness=0" >> /etc/sysctl.conf && sysctl -p && free –h
 ```

Docker 从 1.13 版本开始调整了默认的防火墙规则，禁用了 `iptables filter `表中` FOWARD `链，这样会引起 Kubernetes 集群中跨 Node 的 Pod 无法通信，在各个 Docker 节点执行下面的命令：


```bash
iptables -P FORWARD ACCEPT
```

配置 SSH Key 认证。确保本机也可以 SSH 连接，否则下面部署失败。

```bash
ssh-keygen -t rsa -N ""
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```


更新系统内核为 4.4.x , CentOS 默认为 3.10.x 。


```bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm
yum --enablerepo=elrepo-kernel install -y kernel-lt kernel-lt-devel 
grub2-set-default 0
```

重启系统：`reboot`

增加内核配置，编辑`/etc/sysctl.conf`文件：

```bash
# 增加以下内容
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
```

使其内核配置生效：

```bash
sysctl -p
```

## 安装 Kubespray

安装 Centos 的 EPEL 源：

```bash
 yum -y install epel-release
```

更新缓存：

```bash
 yum clean all && yum makecache
```

安装相关软件（Ansible 版本必须 >= 2.7）：

```bash
 yum install -y python-pip python3 python-netaddr python3-pip ansible git
```


下载源码，当前 Kubespray 项目的 Master 分支默认安装 K8s 1.13.1 版本：

```bash
git clone https://github.com/kubernetes-sigs/kubespray.git
```

安装 Kubespray 依赖，若无特殊说明，后续操作均在 ~/kubespray `目录下执行：

```bash
 cd kubespray 
 pip3 install -r requirements.txt
```

配置 Kubespray：

```bash
 cp -rfp inventory/sample inventory/mycluster
 
 # Update Ansible inventory file with inventory builder
declare -a IPS=(10.10.1.3 10.10.1.4 10.10.1.5)
CONFIG_FILE=inventory/mycluster/hosts.yaml python3 contrib/inventory_builder/inventory.py ${IPS[@]}
```

修改配置文件 `inventory/mycluster/hosts.ini `：

```ini
[all]
master ansible_host=master ip=172.16.1.128

[kube-master]
master

[etcd]
master

[kube-node]
node01

[k8s-cluster:children]
kube-master
kube-node

[calico-rr]
```

:information_source:此处也可以用：`kubespray prepare --masters master1 --etcds master1 --nodes node1 node2 node3`来自动生成`inventory`文件

修改配置文件` inventory/mycluster/group_vars/all/all.yml`：

```yaml
# 修改如下配置:
loadbalancer_apiserver_localhost: true 
# 加载内核模块，否则 ceph, gfs 等无法挂载客户端
kubelet_load_modules: true
```

修改镜像默认的 Repo 地址，使用 Calico 三层网络，同时可以指定安装的 K8s版本，参数为` kube_version`。编辑文件`inventory/mycluster/group_vars/k8s-cluster/k8s-cluster.yml`(在这里我能够科学上网就不做修改了)：

```yaml
kube_image_repo: "gcr.io/google-containers"
```

如需设置代理，在` cluster.yml`中编辑 default 值即可：

```bash
...
proxy_env:
          http_proxy: "【【 http_proxy | default ('192.168.43.37:8888') 】】"
          HTTP_PROXY: "【【 http_proxy | default ('192.168.43.37:8888') 】】"
          https_proxy: "【【 https_proxy | default ('192.168.43.37:8888') 】】"
          HTTPS_PROXY: "【【 https_proxy | default ('192.168.43.37:8888') 】】"
          no_proxy: "【【 no_proxy | default ('') 】】"
          NO_PROXY: "【【 no_proxy | default ('') 】】"
      no_log: true
...
```

如需设置`docker pull` 代理，新建`/etc/systemd/system/docker.service.d/http-proxy.conf`文件，添加以下内容：

```bash
[Service]
Environment="http_proxy=192.168.43.37:8888"
Environment="https_proxy=192.168.43.37:8888"
Environment="NO_PROXY= hostname.example.com,172.10.10.10"
# 最后重启docker
systemctl daemon-reload
systemctl restart docker
```

修改`./roles/kubernetes-apps/ansible/templates/dashboard.yml.j2`文件，使用 `NodePort` 方式访问 Dashboard：

```yaml
# ------------------- Dashboard Service ------------------- #…………      
targetPort: 8443  
type: NodePort    //添加这一行      
selector:
k8s-app: kubernetes-dashboard
```

:warning: 注意：如果是单节点部署 K8s，Kubespray 默认会创建 2 个 coredns Pod，但 Deployment 中又用到了 podAntiAffinity，因此会导致其中一个 coredns pod pending，所以需要修改`./roles/kubernetes-apps/ansible/templates/coredns-deployment.yml.j2`代码如下：

```yaml
# 注释掉以下几行代码
      affinity:
        #podAntiAffinity:
        #  requiredDuringSchedulingIgnoredDuringExecution:
        #  - topologyKey: "kubernetes.io/hostname"
        #    labelSelector:
        #      matchLabels:
        #        k8s-app: coredns【【 coredns_ordinal_suffix | default('') 】】

# 或者在spec一行添加代码：
spec:
  replicas: 1   //指定pod为1个副本
```

最后执行部署命令：

```bash
ansible-playbook -i inventory/mycluster/hosts.ini  --become --become-user=root cluster.yml -b -v
```

## 登录 Dashboard


登陆 Dashboard 支持 kubeconfig 和 token 两种认证方式，kubeconfig 也依赖 token 字段，所以生成 token 这一步是必不可少的。此处，我们获取集群管理员（拥有所有命名空间的 admin 权限）的 token。

查看 kubernetes-dashboard 暴露的端口，如下所示，这里是31777端口。

```bash
[root@master kubespray]\#  kubectl get svc --all-namespaces | grep kubernetes-dashboard
kube-system   kubernetes-dashboard        NodePort    10.233.41.202   <none>        443:30548/TCP            8m16s
```

获取 admin 的 token

```bash
[root@master kubespray]\#  kubectl -n kube-system describe $(kubectl -n kube-system get secret -n kube-system -o name | grep namespace) | grep token
Name:         namespace-controller-token-ksdvp
Type:  kubernetes.io/service-account-token
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IkV0N0pLMXVqMzNxS2xCNXRlTkxpRTlOYnNMVzRiajNrLU9kdi1qRW5jTDQifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJuYW1lc3BhY2UtY29udHJvbGxlci10b2tlbi1rc2R2cCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJuYW1lc3BhY2UtY29udHJvbGxlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImZiM2NkMDBhLTE4ZjAtNGI4OC1hZGNiLWYwNGVjZWNlZTUzNiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpuYW1lc3BhY2UtY29udHJvbGxlciJ9.bYWcoopcYFC6EYNMNPkoiZeUQqfidC9NwlrMzzkZD3T9e-PbDd37pmTeWAcU_E4DCDzeVc9CXfWPhWCfr3syZKWiIXPNtDrNrIgnGs34Id2evsh7evVTgOjQtWkRoqX9UFdjWZdQPxvJChLZacRqbUp718umCzhR9evuE0zq8JeruBCTrcilQDDYobavfYs72HrwZ5xlIj2GMb66FeS7mYZacP-2-M3oVsziIWLs_kfBIaN_OkpImUPpvJxF-8xMmVP2BCKWyHWaLPIUdVsF8FkiLWH7bIS8f0cm8D4wEcMZ4IYkVe2FMcmMaiFJx5HEXrwA4YT7bMVy4PJhR71Thg
```

在 dashboard 登录页面上使用上面输出中的那个非常长的字符串作为 token 登录，即可以拥有管理员权限操作整个 kubernetes 集群中的对象。当然您也可以将这串 token 加到 admin 用户的 kubeconfig 文件中，继续使用 kubeconfig 登录，两种认证方式任您选择。

登录 dashboard：https://172.16.1.128:30548

> 注意：由于这里使用的 HTTPS，并未使用证书，因此使用 Google 等浏览器会终止访问。


## 验证 K8s 集群

- 查看集群版本

```bash
[root@master ~]\# kubelet --version
Kubernetes v1.18.2
```

- 查看集群状态

```bash
 kubectl get nodes
```

- 查看集群 Pod 

```bash
 kubectl get pods --all-namespaces
```

- 查看 IPVS

```bash
 ipvsadm -L -n
```

## 其他

增加 node 节点（提前在`hosts.ini`文件中增加主机节点）：

```bash
ansible-playbook -i inventory/mycluster/hosts.ini scale.yml -b -v -k
```

将` hosts.ini` 文件中的 master 和 etcd 的机器增加到多台，执行部署命令：

```bash
ansible-playbook -i inventory/mycluster/hosts.ini cluster.yml -b -vvv
```

刪除节点，如果不指定节点就是刪除整个集群：

```bash
ansible-playbook -i inventory/mycluster/hosts.ini remove-node.yml -b -v
```


如果需要卸载，可以执行以下命令：

```bash
ansible-playbook -i inventory/mycluster/hosts.ini reset.yml -b –vvv
```

升级 K8s 集群，选择对应的 K8s 版本信息，执行升级命令。涉及文件为 `upgrade-cluster.yml`：

```bash
ansible-playbook upgrade-cluster.yml -b -i inventory/mycluster/hosts.ini -e kube_version=vX.XX.XX -vvv
```

## 参考链接

* kubespray GetStarted：https://github.com/kubernetes-sigs/kubespray/blob/master/docs/getting-started.md

*  使用 Kubespray 在基础设施或云平台上安装 Kubernetes：https://k8smeetup.github.io/docs/getting-started-guides/kubespray/