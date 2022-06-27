# Ansible Basic

## 简介

Ansible 是一个开源的基于 OpenSSH 的自动化配置管理工具。可以用它来配置系统、部署软件和编排更高级的 IT 任务，比如持续部署或零停机更新。Ansible 的主要目标是简单和易用，并且它还高度关注安全性和可靠性。基于这样的目标，Ansible 适用于开发人员、系统管理员、发布工程师、IT 经理，以及介于两者之间的所有人。Ansible 适合管理几乎所有的环境，从拥有少数实例的小型环境到有数千个实例的企业环境。

使用 Ansible 无须在被管理的机器上安装代理，所以不存在如何升级远程守护进程的问题，也不存在由于卸载了守护进程而无法管理系统的问题。

官方站点: https://www.ansible.com/

官方GitHub仓库: https://github.com/ansible/ansible

Ansible 架构: 

![](https://res.cloudinary.com/practicaldev/image/fetch/s--IdLVmgo1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/skvvt051gys64k62ez0h.png)

## Ansible 安装部署

### 编译安装

从github仓库安装最新版的ansible:

```bash
$ git clone https://github.com/ansible/ansible.git
$ cd ./ansible
```

配置环境变量:

```bash
$ source ./hacking/env-setup
```

如果没有`pip`,则需要安装`pip`程序包

```bash
$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
$ python get-pip.py --user
```

安装所需的依赖包:

```bash
$ pip install --user -r ./requirements.txt
```

使用`make rpm`制作并安装rpm包:

```bash
$ make rpm
$ sudo rpm -Uvh ./rpm-build/ansible-*.noarch.rpm
```

更新本地 ansible 仓库:

```bash
$ git pull --rebase
```

### 通过仓库安装(推荐)

#### CentOS

```bash
# 目前epel仓库最新版本为 2.9.6
yum install ansible -y
```

需要注意的一点的是: `ansible`属于`epel`仓库, 如果没有`epel`, 需要提前安装. `yum install -y epel-release`

#### Ubuntu

```bash
$ sudo apt update
$ sudo apt install software-properties-common
$ sudo apt-add-repository --yes --update ppa:ansible/ansible
$ sudo apt install ansible
```

#### pip

```bash
$ pip install --user ansible
```

## 程序环境

常用命令行工具:

* `ansible` : 主程序
* `ansible-doc` : ansible 文档
  * `-l`: 列出所有模块
  * `<Module_Name> -s`: 列出指定模块的选项
* `ansible-playbook` : 剧本工具

配置文件:

* `/etc/ansible/ansible.cfg`: 主配置文件
* `/etc/ansible/hosts` : 主机配置文件
* `/etc/ansible/roles`: 角色配置文件

## 参考链接

* Ansible Installation : https://docs.ansible.com/ansible/latest/installation_guide
* Ansible Documentation : https://docs.ansible.com/ansible/latest/index.html