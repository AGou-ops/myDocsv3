# Ceph Manager Dashboar     


## Ceph Manager Dashboard 简介

Ceph仪表板是基于Web的内置Ceph管理和监视应用程序，用于管理集群的各个方面和对象。它作为Ceph Manager守护程序模块实现。

Ceph `luminous` 版本随附的原始Ceph仪表板最初是一个简单的只读视图，可查看Ceph集群的各种运行时信息和性能数据。 它使用了非常简单的架构来实现最初的目标。 但是，对于添加更多基于Web的管理功能的需求不断增长，以使更喜欢使用WebUI而不是使用命令行的用户更易于管理Ceph。新的Ceph仪表板模块替代了之前的模块，并向Ceph Manager添加了一个内置的基于Web的监视和管理应用程序。 这个新插件的架构和功能源自openATTIC Ceph管理和监视工具，并受其启发。 SUSE openATTIC背后的团队积极推动开发，并获得了Red Hat等公司和Ceph社区其他成员的大力支持。

仪表板模块的后端代码使用CherryPy框架和自定义REST API实现。 WebUI实现基于Angular / TypeScript，合并了来自原始仪表板的功能，并添加了最初为独立版本的openATTIC开发的新功能。 Ceph仪表板模块被实现为Web应用程序，它使用ceph-mgr托管的Web服务器可视化有关Ceph群集的信息和统计信息。

## `Dashboard`安装

1. 在线安装程序包：

```bash
yum install -y http://mirrors.aliyun.com/ceph/rpm-nautilus/el7/noarch/ceph-grafana-dashboards-14.2.9-0.el7.noarch.rpm
```

2. 启用`Ceph Mgr Dashboard`模块：

```bash
ceph mgr module enable dashboard
# ceph mgr module disable dashboard		# 禁用

# 查看模块是否成功装载
[root@stor1 ~]\# ceph mgr module ls | grep -A 2 -B 1 dashboard
    "enabled_modules": [
        "dashboard",
        "iostat",
        "restful"
```

3. 生成并安装自签名证书（默认情况下，与仪表板的所有HTTP连接均使用SSL / TLS保护）：

```bash
ceph dashboard create-self-signed-cert
```

其他详细参考：https://docs.ceph.com/docs/nautilus/mgr/dashboard/#ssl-tls-support

4. 自定义访问`IP`及`PORT`（可选操作）：https://docs.ceph.com/docs/nautilus/mgr/dashboard/#host-name-and-port

5. 为`Dashboard`创建用户：

```bash
# ceph dashboard ac-user-create <username> <password> administrator
ceph dashboard ac-user-create suofeiya suofeiya administrator
```

6. 查看`Dashboard`状态：

```bash
[root@stor1 ~]\# ceph mgr services 
{
    "dashboard": "https://stor1:8443/"
}
```

最后打开浏览器访问对应地址 https://172.16.1.128:8443 ，需注意**协议为 HTTPS**

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ceph-dashboard/ceph-dashboard-1.png "ceph-dashboard")

## 其他

`ansible`、`prometheus`、`zabbix`支持参考官方文档。

## 参考链接

* Ceph Mgr Dashboard Documentation: https://docs.ceph.com/docs/nautilus/mgr/dashboard/