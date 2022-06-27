# JumpServer 


## JumpServer 简介

JumpServer 是全球首款完全开源的堡垒机, 使用 GNU GPL v2.0 开源协议, 是符合 4A 的专业运维审计系统。

JumpServer 使用 Python / Django 进行开发, 遵循 Web 2.0 规范, 配备了业界领先的 Web Terminal 解决方案, 交互界面美观、用户体验好。

JumpServer 采纳分布式架构, 支持多机房跨区域部署, 中心节点提供 API, 各机房部署登录节点, 可横向扩展、无并发访问限制。

JumpServer 现已支持管理 SSH、 Telnet、 RDP、 VNC 协议资产。

功能列表：https://jumpserver.readthedocs.io/zh/master/#_3

## JumpServer 安装配置

### 编译安装

参考官方文档：https://jumpserver.readthedocs.io/zh/master/install/step_by_step/

### 快速安装

下载所需文件：

```bash
cd /opt
yum -y install wget git
git clone --depth=1 https://github.com/jumpserver/setuptools.git
cd setuptools
cp config_example.conf config.conf
vi config.conf
```

安装：

```bash
./jmsctl.sh install
```

升级：

```bash
cd /opt/setuptools
git pull
./jmsctl.sh upgrade
```

卸载：

```bash
cd /opt/setuptools
./jmsctl.sh uninstall
```

帮助：`./jmsctl.sh -h`

### 容器部署

参考官方文档：https://jumpserver.readthedocs.io/zh/master/install/docker_install/

### 分布式部署

参考官方文档：https://jumpserver.readthedocs.io/zh/master/install/setup_by_prod/

### Ansible 部署

参考官方文档：https://jumpserver.readthedocs.io/zh/master/install/ansible_install/

### JumpServer 卸载

参考：https://jumpserver.readthedocs.io/zh/master/install/uninstall/

## 参考链接

* 官方文档：https://jumpserver.readthedocs.io/zh/master/
* 安装Python依赖失败解决方案：https://blog.csdn.net/a13568hki/article/details/103259532

