# Amazon EKS Basic

## 安装`aws cli`客户端工具

参考指南: https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/cli-chap-install.html

### 为用户生成可供使用的安全证书

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/aws%20iam-2.png)

## 添加`IAM`用户授权

可给予管理员权限(如下图所示):

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/aws%20iam.png)

其他`IAM`管理参考官方指南: https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html

## 安装`eksctl`客户端工具

`eks`ctl官方仓库: https://github.com/weaveworks/eksctl

下载合适版本和操作系统的包: https://github.com/weaveworks/eksctl/releases

将下载好的程序放置到环境变量包含的文件夹之中即可, `Linux`, `Windows`, `MacOS`系统都是如此.

配置完成之后检查是否成功安装, 打开`cmd 命令指示符`(Windows 系统):

```bash
C:\Users\Administrator>eksctl version
0.27.0
# 输出以上版本信息则表明安装已经完成
```

## 部署`EKS`集群

在命令行中输入以下内容以部署集群服务:

```bash
C:\Users\Administrator>eksctl create cluster --name test-cluster --version 1.17 --region ap-east-1 --nodegroup-name linux-nodes --node-type=t3.micro --nodes 2
[ℹ]  eksctl version 0.27.0
[ℹ]  using region ap-east-1
[ℹ]  setting availability zones to [ap-east-1a ap-east-1c ap-east-1b]
[ℹ]  subnets for ap-east-1a - public:192.168.0.0/19 private:192.168.96.0/19
[ℹ]  subnets for ap-east-1c - public:192.168.32.0/19 private:192.168.128.0/19
[ℹ]  subnets for ap-east-1b - public:192.168.64.0/19 private:192.168.160.0/19
[ℹ]  nodegroup "linux-nodes" will use "ami-004c6d9e8cfe1a936" [AmazonLinux2/1.17]
[ℹ]  using Kubernetes version 1.17
[ℹ]  creating EKS cluster "test-cluste" in "ap-east-1" region with un-managed nodes
[ℹ]  will create 2 separate CloudFormation stacks for cluster itself and the initial nodegroup
[ℹ]  if you encounter any issues, check CloudFormation console or try 'eksctl utils describe-stacks --region=ap-east-1 --cluster=test-cluste'
[ℹ]  CloudWatch logging will not be enabled for cluster "test-cluste" in "ap-east-1"
[ℹ]  you can enable it with 'eksctl utils update-cluster-logging --region=ap-east-1 --cluster=test-cluste'
[ℹ]  Kubernetes API endpoint access will use default of {publicAccess=true, privateAccess=false} for cluster "test-cluste" in "ap-east-1"
[ℹ]  2 sequential tasks: { create cluster control plane "test-cluste", 2 sequential sub-tasks: { no tasks, create nodegroup "linux-nodes" } }
[ℹ]  building cluster stack "eksctl-test-cluste-cluster"
[ℹ]  deploying stack "eksctl-test-cluste-cluster"
[ℹ]  building nodegroup stack "eksctl-test-cluste-nodegroup-linux-nodes"
[ℹ]  --nodes-min=2 was set automatically for nodegroup linux-nodes
[ℹ]  --nodes-max=2 was set automatically for nodegroup linux-nodes
[ℹ]  deploying stack "eksctl-test-cluste-nodegroup-linux-nodes"
[ℹ]  waiting for the control plane availability...
[✔]  saved kubeconfig as "C:\\Users\\Administrator/.kube/config"
[ℹ]  no tasks
[✔]  all EKS cluster resources for "test-cluste" have been created
[ℹ]  adding identity "arn:aws:iam::657565858235:role/eksctl-test-cluste-nodegroup-linu-NodeInstanceRole-18M4CYW81A99T" to auth ConfigMap
[ℹ]  nodegroup "linux-nodes" has 1 node(s)
[ℹ]  node "ip-192-168-89-250.ap-east-1.compute.internal" is not ready
[ℹ]  waiting for at least 2 node(s) to become ready in "linux-nodes"
[ℹ]  nodegroup "linux-nodes" has 2 node(s)
[ℹ]  node "ip-192-168-23-105.ap-east-1.compute.internal" is ready
[ℹ]  node "ip-192-168-89-250.ap-east-1.compute.internal" is ready
[ℹ]  kubectl command should work with "C:\\Users\\Administrator/.kube/config", try 'kubectl get nodes'
[✔]  EKS cluster "test-cluste" in "ap-east-1" region is ready
```

参数说明:

- `--name`: 即集群的名称;.
- `--version`: k8s版本;
- `--region`: 创建`ec2`主机的地域;
- `--nodegroup`: 节点所属组;
- `--node-type`: 实例主机(node)的类型;
- `--nodes`: 节点数.

等待`Ready`之后, 分别登录`Amazon EKS`控制台和`aws`的`ec2`控制台, 可以发现创建好的实例:

![Amazon EKS](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/amazon%20EKS.png)

![EC2 dashboard](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/20200913163437.png)

### 使用`kubectl`查看集群状态

使用`eksctl`部署好集群之后, 会自动生成`kubeconfig`, 可以直接在客户机使用`kubectl`工具连接至集群:

```bash
C:\Users\Administrator>kubectl cluster-info
Kubernetes master is running at https://100AE2D3CC8AE36B32810F469B566E5B.yl4.ap-east-1.eks.amazonaws.com
CoreDNS is running at https://100AE2D3CC8AE36B32810F469B566E5B.yl4.ap-east-1.eks.amazonaws.com/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

C:\Users\Administrator>kubectl get nodes
NAME                                           STATUS   ROLES    AGE   VERSION
ip-192-168-23-105.ap-east-1.compute.internal   Ready    <none>   18m   v1.17.9-eks-4c6976
ip-192-168-89-250.ap-east-1.compute.internal   Ready    <none>   18m   v1.17.9-eks-4c6976
```

## 其他

### 使用`eksctl`删除`EKS`集群

```bash
C:\Users\Administrator>eksctl delete cluster --name test-cluste
[ℹ]  eksctl version 0.27.0
[ℹ]  using region ap-east-1
[ℹ]  deleting EKS cluster "test-cluste"
[ℹ]  either account is not authorized to use Fargate or region ap-east-1 is not supported. Ignoring error
[✔]  kubeconfig has been updated
[ℹ]  cleaning up AWS load balancers created by Kubernetes objects of Kind Service or Ingress
[ℹ]  2 sequential tasks: { delete nodegroup "linux-nodes", delete cluster control plane "test-cluste" [async] }
[ℹ]  will delete stack "eksctl-test-cluste-nodegroup-linux-nodes"
[ℹ]  waiting for stack "eksctl-test-cluste-nodegroup-linux-nodes" to get deleted
[ℹ]  will delete stack "eksctl-test-cluste-cluster"
[✔]  all cluster resources were deleted
```

## 参考链接

- Amazon EKS Documentation: https://docs.aws.amazon.com/zh_cn/eks/index.html