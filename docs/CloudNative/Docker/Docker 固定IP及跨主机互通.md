# Docker 固定IP及跨主机互通    

| 服务器IP     | 容器分配网段   | 启动容器的IP  |
| ------------ | -------------- | ------------- |
| 172.16.1.128 | 172.117.0.0/24 | 172.117.0.128 |
| 172.16.1.129 | 172.118.0.0/24 | 172.118.0.129 |

### 在`172.16.1.128`主机上

1. 创建自定义网络：

```bash
docker network create --subnet=172.117.0.0/24 docker-br0
```

查看：

```bash
[root@master ~]\# docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
afec70e77155        bridge              bridge              local
`a94a2946f56e        bridge-test         bridge              local`
e72048375b94        docker-br0          bridge              local
9dd2a18f0566        host                host                local
f553fc44b4d4        none                null                local
```

如果想要删除自定义的网络，可以使用`docker network rm docker-br0 `进行删除操作

2. 在自定义的网络中，任选IP地址作为容器的IP地址（**即固定IP**）：

```bash
docker run -it --net docker-br0 --ip 172.117.0.128 busybox /bin/sh
```

测试与主机和互联网是否可达：

```bash
/ # ping 172.16.1.128
PING 172.16.1.128 (172.16.1.128): 56 data bytes
64 bytes from 172.16.1.128: seq=0 ttl=64 time=0.726 ms
/ # ping baidu.com
PING baidu.com (39.156.69.79): 56 data bytes
64 bytes from 39.156.69.79: seq=1 ttl=127 time=22.570 ms
```

### 在`172.16.1.129`主机上

前面的操作和在`128`主机上一样：

```bash
docker network create --subnet=172.118.0.0/24 docker-br0
docker run -it --net docker-br0 --ip 172.118.0.129 busybox /bin/sh
```

测试该主机的容器是否可以连通`128`主机容器（显然是不能:joy: ）：

```bash
/ # ping 172.117.0.128
PING 172.117.0.128 (172.117.0.128): 56 data bytes
```

### 跨主机容器互通

在两台主机智商都添加路由规则：

```bash
# 172.16.1.128 主机
 ip route add 172.118.0.0/24 via 172.16.1.129 dev ens33
# 172.16.1.129 主机
 ip route add 172.117.0.0/24 via 172.16.1.128 dev ens33 
```



 