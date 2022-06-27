# Docker Portainer   

## Portainer 简介

Portainer是个轻量级的Docker管理面板，和Rancher这种重量级选手没法比，Portainer倾向于单机的管理(后来发现能够添加多个单机节点切换着管理)，当然，在Docker搞出Swarm之后Portainer也借此实现了集群管理。

## 拉取镜像并运行

拉取镜像：

```bash
docker pull portainer/portainer
```

为 Portainer 添加一个数据卷，当然你也可以在运行容器时指定：

```bash
docker volume create portainer_data
```

运行容器：

```bash
# 如果想要Portainer管理本地容器的话，使用以下命令：
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data --restart=always --name prtainer portainer/portainer
# 如果想要Portainer管理远程容器的话，使用以下命令：
docker run -d -p 9000:9000 -v portainer_data:/data portainer/portainer
```

此时，打开浏览器，进入 http://PORTAINTER_IP:9000 即可访问.