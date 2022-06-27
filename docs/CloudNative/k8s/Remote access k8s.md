# kubectl远程连接k8s

## 方案一：通过安全上下文访问本地网络k8s

### 基本流程操作

首先要确保k8s的`apiServer`可以被当前网络访问，确保网段在其监听的范围之内。（重要）

登录到`master`主机上：

```bash
$ kubectl cluster-info
Kubernetes control plane is running at https://0.0.0.0:6443 
CoreDNS is running at https://0.0.0.0:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy 

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

:warning:极不推荐使用`0.0.0.0`，这里我只是图方便进行测试使用。

获取当前集群的配置文件：

```bash
$ cat ~/.kube/config
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUdJTiB【此处省略。。。】==
    server: https://0.0.0.0:6443
  name: kind-my-cluster
contexts:
- context:
    cluster: kind-my-cluster
    user: kind-my-cluster
  name: kind-my-cluster
current-context: kind-my-cluster
kind: Config
preferences: {}
users:
- name: kind-my-cluster
  user:
    client-certificate-data: LS0tLS1【此处省略。。。】==
    client-key-data: LS0t【此处省略。。。】=
```

配置文件中的`certificate-authority-data【服务器端CA】`、`client-certificate-data【客户端证书】`和`client-key-data【客户端私钥】`都是`base64`简单加密过的，所以在引入上下文之前先将其解密。

- 使用`base64`命令进行解密：`echo <data> | base64 -d`
- 使用在线网站进行解密：https://www.base64decode.org/

将解密之后的文件保存在当前主机的`~/.kube/`目录之下，分别命名为（名字随意，记住就好）：

- my-cluster.ca
- k8s.crt
- k8s.key

> 当前主机还没有`kubectl`？三条命令快速安装。
>
> ```bash
> curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
> ```
>
> ```bash
> sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
> ```
>
> ```bash
> kubectl version --client
> ```

打开终端，确保`kubectl`已正确安装后运行以下几条命令来添加安全上下文：

```bash
# 添加集群地址，并设置集群ca
kubectl config set-cluster my-k8s --server https://10.0.0.18:6443  --certificate-authority=/home/agou-ops/.kube/my-cluster.ca	

# 添加用户，以及设置客户端证书及私钥
kubectl config set-credentials kubernetes-admin     --client-certificate=/home/agou-ops/.kube/k8s.crt     --client-key=/home/agou-ops/.kube/k8s.key

# 指定上下文，set-context名称可随便取
kubectl config set-context ubuntu --cluster=my-k8s  --namespace=default --user=kubernetes-admin 

# 激活上下文
kubectl config use-context ubuntu 
```

使用`kubectl config view`命令检查配置文件。

最后使用`kubectl cluster info`进行查看即可：

```bash
> kubectl --insecure-skip-tls-verify cluster-info
Kubernetes control plane is running at https://10.0.0.18:6443
CoreDNS is running at https://10.0.0.18:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

Done. :smile:

### 问题及解决方案

1. `Unable to connect to the server: x509: certificate is valid for 10.96.0.1, 172.18.0.4, 0.0.0.0, not 10.0.0.18`

>One option is to tell `kubectl` that you don't want the certificate to be validated. Obviously this brings up security issues but I guess you are only testing so here you go:
>
>```bash
>kubectl --insecure-skip-tls-verify --context=employee-context get pods
>```
>
>或者将其写入配置文件：
>
>```bash
>kubectl config set-cluster my-k8s --insecure-skip-tls-verify=true
>```
>
>The better option is to fix the certificate. Easiest if you reinitialize the cluster by running `kubeadm reset` on all nodes including the master and then do
>
>```bash
>kubeadm init --apiserver-cert-extra-sans=114.215.201.87
>```
>
>It's also possible to fix that certificate without wiping everything, but that's a bit more tricky. Execute something like this on the master as root:
>
>```bash
>rm /etc/kubernetes/pki/apiserver.*
>kubeadm init phase certs all --apiserver-advertise-address=0.0.0.0 --apiserver-cert-extra-sans=10.161.233.80,114.215.201.87
>docker rm `docker ps -q -f 'name=k8s_kube-apiserver*'`
>systemctl restart kubelet
>```
>
>来自：https://stackoverflow.com/a/46360852



## 方案二：修改证书域

### 查看 Apiserver 证书包含哪些地址

1.  进入证书目录
    

```bash
cd /etc/kubernetes/pki  
```

2.  查看证书
    

```bash
$ openssl x509 -in apiserver.crt -noout -text|grep -A  2 'Alternative'

X509v3 Subject Alternative Name:  
                DNS:1-1-1-1, DNS:kubernetes, DNS:kubernetes.default, DNS:kubernetes.default.svc, DNS:kubernetes.default.svc.cluster.local, DNS:lb-apiserver.kubernetes.local, DNS:localhost, IP Address:1.1.1.1
```

这里如果只允许通过 1.1.1.1 访问集群的 Apiserver。如果需要使用域名，`kubernetes、kubernetes.default、kubernetes.default.svc` 等，则需要配置 hosts 将其指向 1.1.1.1 。

### 添加新的域名或 IP 到证书

1.  备份证书

```bash
$ cd /etc/kubernetes/pki  
$ mv apiserver.crt apiserver.crt.bak  
$ mv apiserver.key apiserver.key.bak  
```

2.  修改 `/etc/kubernetes/kubeadm-config.yaml`
    

在 ClusterConfiguration 的 apiServer 字段下，找到 certSANs。

```yaml
apiVersion: kubeadm.k8s.io/v1beta2  
kind: ClusterConfiguration  
...  
  certSANs:  
    - kubernetes  
    - kubernetes.default  
    - kubernetes.default.svc  
    - kubernetes.default.svc.cluster.local  
    - 10.233.0.1  
```

在 certSANs 中添加远程访问的域名或 IP 地址：

```yaml
certSANs:  
    - remote.doamin.com  
    - 1.2.3.4  
    - kubernetes  
    - kubernetes.default  
    - kubernetes.default.svc  
    - kubernetes.default.svc.cluster.local  
    - 10.233.0.1
```

如果你在 `/etc/kubernetes/` 目录中没有找到 kubeadm-config.yaml 文件，不要紧张，你可以使用下面的方式生成一个当前集群的配置文件：  

```bash
$ kubectl get cm kubeadm-config  -n kube-system -o yaml > /etc/kubernetes/kubeadm-config.yaml  
或者  
$ kubeadm config view | tee /etc/kubernetes/kubeadm-config.yaml  
```

当然你的集群的配置文件中可能没有 `certSANs` 配置段，你可以直接加在类似下面的位置处：

```yaml
apiServer:  
  certSANs:  

   - remote.doamin.com  
     - 1.2.3.4  
       - kubernetes  
       - kubernetes.default  
       - kubernetes.default.svc  
       - kubernetes.default.svc.cluster.local  
       - 10.233.0.1  
         extraArgs:  
         authorization-mode: Node,RBAC  
         timeoutForControlPlane: 4m0s  
         apiVersion: kubeadm.k8s.io/v1beta2  
         ....  
```

3.  重新生成证书

```bash
$ kubeadm init phase certs apiserver --config /etc/kubernetes/kubeadm-config.yaml  
```

4.  再次查看证书
    

检查输出的结果中，是否包含前面增加的公网 IP，如有则证明操作成功。

```bash
$ openssl x509 -in pki/apiserver.crt -noout -text | grep 1.2.3.4  
                IP Address:192.168.0.8, IP Address: 1.2.3.4  
```

5.  重启 kube-apiserver
    

-   如果是高可用集群
    

直接杀死当前节点的 kube-apiserver 进程，等待 kubelet 拉起 kube-apiserver 即可。需要在三个节点执行步骤 1 到步骤 4，逐一更新。

-   如果是非高可用集群
    

杀死 kube-apiserver 可能会导致服务有中断，需要在业务低峰的时候操作。

进入 `/etc/kubernetes/manifests` 目录下，移动 kube-apiserver.yaml 文件至其它位置，然后又移回来即可。

```bash
$ mv /etc/kubernetes/manifests/kube-apiserver.yaml /root/  
$ mv /root/kube-apiserver.yaml /etc/kubernetes/manifests  
```

6.  修改 kubeconfig 中的 server ip
    

最后，你只需要将 `kubeconfig` 文件中 `server` 地址修改为 `1.2.3.4`。

```yaml
apiVersion: v1  
clusters:  

- cluster:  
  ...  
    server: https://1.2.3.4:6443  
  ...  
```

保存之后，就可以直接通过公网 IP 访问 Kubernetes 集群。

`$ kubectl get node  `

> 该部分内容转载自：https://kubesphereio.com/post/add-public-ip-to-kubernetes-apiserver-operation-guide/

## 访问云端k8s

## 

未完。

