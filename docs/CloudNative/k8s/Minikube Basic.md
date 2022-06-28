#  Minikube Basic

## minikube 简介

Minikube 是一种可以让您在本地轻松运行 Kubernetes 的工具。Minikube 在笔记本电脑上的虚拟机（VM）中运行单节点 Kubernetes 集群，供那些希望尝试 Kubernetes 或进行日常开发的用户使用。

## minikube 安装与启动

### Windows 系统下

在`windows`操作系统下, 使用`choco`包管理器进行快速安装.

```powershell
# 安装 choco 包管理器, 以管理员身份打开 powershell, 输入以下命令.
PS C:\Users\Administrator> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

#### 安装 kubectl

请确保你已正确安装 kubectl。您可以根据[安装并设置 kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows) 的说明来安装 kubectl。

#### 安装 Hypervisor

如果你还没有安装 hypervisor，请选择以下方式之一进行安装：

• [Hyper-V](https://msdn.microsoft.com/en-us/virtualization/hyperv_on_windows/quick_start/walkthrough_install)

• [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

> **说明：**
>
> Hyper-V 可以运行在三个版本的 Windows 10 上：企业版、专业版和教育版（Enterprise, Professional, Education）。

#### 使用 Chocolatey 安装 Minikube

Windows 安装 Minikube 最简单的方法是使用 [Chocolatey](https://chocolatey.org/) （以管理员身份运行）：

```shell
choco install minikube
```

完成 Minikube 的安装后，关闭当前 CLI 界面再重新打开。 Minikube 应该已经自动添加至 path 中。

#### 使用安装程序安装 Minikube

在 Windows 上使用 [Windows Installer](https://docs.microsoft.com/en-us/windows/desktop/msi/windows-installer-portal) 手动安装 Minikube，下载并运行 [`minikube-installer.exe`](https://github.com/kubernetes/minikube/releases/latest/download/minikube-installer.exe) 即可。

#### 直接下载并安装 Minikube

Run kubectl version to verify that the version you’ve installed is sufficiently up-to-date.

```
kubectl version
```

### Linux 系统下

这里我以`Ubuntu 20.04`为例，首先运行下面的`grep`命令来验证您的处理器支持硬件虚拟化：

```bash
grep -Eoc '(vmx|svm)' /proc/cpuinfo
```

检查***BIOS的VT是否开启***，使用以下工具进行检测：

```bash
sudo apt update
sudo apt install cpu-checker

# 安装完毕之后使用以下命令进行检查
$ kvm-ok
INFO: /dev/kvm exists
KVM acceleration can be used</pre>
```

安装`kvm`：

```bash
sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virtinst virt-manager -y
```

安装完成之后，运行以下命令：

```bash
sudo systemctl is-active libvirtd
virt-host-validate			# 无报错即可

sudo usermod -aG libvirt $USER
sudo usermod -aG kvm $USER
```

启动`minikube`之前，先获取`minikube`[二进制包](https://minikube.sigs.k8s.io/docs/start/)：

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

## 启动 minikube

### Windows 系统下

完成之后运行启动：

```bash
$ minikube start --vm-driver="hyperv" --memory='5g' --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers
* Microsoft Windows 10 Pro 10.0.18363 Build 18363 上的 minikube v1.12.1
* Automatically selected the hyperv driver
* 正在下载 VM boot image...
    > minikube-v1.12.0.iso.sha256: 65 B / 65 B [-------------] 100.00% ? p/s 0s
* Starting control plane node minikube in cluster minikube
* Downloading Kubernetes v1.18.3 preload ...
    > preloaded-images-k8s-v4-v1.18.3-docker-overlay2-amd64.tar.lz4: 82.39 MiB
* Creating hyperv VM (CPUs=2, Memory=3000MB, Disk=20000MB) ...
...
```

等待镜像包`minikube-v1.12.0.iso`下载完成即可.

### Linux系统下

Start a cluster using the kvm2 driver:

```shell
minikube start --driver=kvm2 --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers
```

To make kvm2 the default driver:

```shell
minikube config set driver kvm2
```

---

一旦 `minikube start` 完成，你可以运行下面的命令来检查集群的状态：

```shell
minikube status
```

如果你的集群正在运行，`minikube status` 的输出结果应该类似于这样：

```
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

在确认 Minikube 与 hypervisor 均正常工作后，您可以继续使用 Minikube 或停止集群。要停止集群，请运行：

```shell
minikube stop
```

## 多节点Minikube

前提要求：

- minikube version > 1.10.1
- kubectl installed

开始吧：

```bash
minikube start --nodes 2 -p multinode-demo
```

## 启用 DashBoard

```bash
minikube addons enable dashboard
minikube dashboard
```

启动完毕之后, 会自动打开浏览器并访问`Dashboard`.

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/minikube/minikube-dashboard.png)

## 常用命令

- `minikube start --driver=<driver_name>`: 启动minikube;
- `minikube status`: 查看 minikube 运行状态;
- `minikube stop`: 停止运行 minikube;
- `minikube delete`: 当 minikube 无法运行或者想完全清理掉 minikube 时使用, 用来删除 minikube.
- `minikube service --url <service-name> `：暴露NodePort到本机本地地址；
- `minikube tunnel`：暴露LoadBalancer到本机本地地址；



## 其他

### 部署 minikube 时出现`* The "docker" driver should not be used with root privileges.`:

解决方法：

> ### Add new User
>
> ```bash
> adduser developer
> # password@7
> usermod -aG sudo developer
> su - developer
> ```
>
> ### Login to the newly created User
>
> ```bash
> su - developer
> # password@7
> ```
>
> ### Add User to the Docker Group
>
> ```bash
> sudo groupadd docker
> sudo usermod -aG docker $USER
> - Re-Login or Restart the Server
> ```
>
> #### Install Minicube
>
> ```bash
> curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
> chmod +x minikube
> mv ./minikube /usr/local/bin/minikube
> ```
>
> #### Start minikube with Docker Driver
>
> ```bash
> minikube start --driver=docker
> ```
>
> #### Verify minikube Installation
>
> ```bash
> docker ps
> ```

参考来源：https://github.com/kubernetes/minikube/issues/7903#issuecomment-624074810

## 参考链接

- minikube installation: https://kubernetes.io/zh/docs/tasks/tools/install-minikube/#%E5%AE%89%E8%A3%85-minikube
- https://kubernetes.io/docs/setup/learning-environment/minikube/
- minikube 代理相关: https://minikube.sigs.k8s.io/docs/handbook/vpn_and_proxy/