# 	k3s & k3d Basic

## k3s

**Lightweight Kubernetes**

官方站点：https://k3s.io

官方仓库：https://github.com/rancher/k3s

### 安装

将`k3s`安装成为服务：

```bash
curl -sfL https://get.k3s.io | sh -
# 添加worker节点
curl -sfL https://get.k3s.io | K3S_URL=https://k3s-server:6443 K3S_TOKEN=`ssh k3s-server  cat /var/lib/rancher/k3s/server/node-token` sh -
```
A kubeconfig file is written to `/etc/rancher/k3s/k3s.yaml`.

手动安装使用`k3s`：

1. Download `k3s` from latest [release](https://github.com/rancher/k3s/releases/latest), x86_64, armhf, and arm64 are supported.
2. Run server.

```bash
sudo k3s server &
# Kubeconfig is written to /etc/rancher/k3s/k3s.yaml
sudo k3s kubectl get nodes

# On a different node run the below. NODE_TOKEN comes from
# /var/lib/rancher/k3s/server/node-token on your server
sudo k3s agent --server https://myserver:6443 --token ${NODE_TOKEN}
```

## k3d 简介

> k3d is a lightweight wrapper to run k3s (Rancher Lab’s minimal Kubernetes distribution) in docker.
> k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.

官方站点: https://k3d.io

## 安装

### linux系统下

```bash
# use the install script to grab the latest release:
wget: wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
# 或者
curl: curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash

```

### Windows系统下

从[官方仓库](https://github.com/rancher/k3d/releases/tag/v3.1.3)中下载对应的包, 配置好环境变量即可.

## 集群部署

单节点部署:

```bash
k3d cluster create mycluster
```

多节点部署:

```bash
k3d cluster create multiserver --servers 3
# 向已存在的集群中添加节点
k3d node create newserver --cluster multiserver --role server
# 部署两个agent节点
k3d cluster create --api-port 6550 -p "8081:80@loadbalancer" --agents 2
```

## 输出kubeconfig信息

```bash
k3d kubeconfig write k3s-default
```

## 暴露服务

> ## 1. via Ingress
>
> In this example, we will deploy a simple nginx webserver deployment and make it accessible via ingress. Therefore, we have to create the cluster in a way, that the internal port 80 (where the `traefik` ingress controller is listening on) is exposed on the host system.
>
> 1. Create a cluster, mapping the ingress port 80 to localhost:8081
>
>    `k3d cluster create --api-port 6550 -p "8081:80@loadbalancer" --agents 2`
>
>    Good to know
>
>    - `--api-port 6550` is not required for the example to work. It’s used to have `k3s`‘s API-Server listening on port 6550 with that port mapped to the host system.
>    - the port-mapping construct`8081:80@loadbalancer`means
>      - map port `8081` from the host to port `80` on the container which matches the nodefilter `loadbalancer`
>    - the`loadbalancer`nodefilter matches only the`serverlb` that’s deployed in front of a cluster’s server nodes
>      - all ports exposed on the `serverlb` will be proxied to the same ports on all server nodes in the cluster
>
> 2. Get the kubeconfig file
>
>    `export KUBECONFIG="$(k3d kubeconfig write k3s-default)"`
>
> 3. Create a nginx deployment
>
>    `kubectl create deployment nginx --image=nginx`
>
> 4. Create a ClusterIP service for it
>
>    `kubectl create service clusterip nginx --tcp=80:80`
>
> 5. Create an ingress object for it with `kubectl apply -f` *Note*: `k3s` deploys [`traefik`](https://github.com/containous/traefik) as the default ingress controller
>
>    ```
>    apiVersion: extensions/v1beta1
>    kind: Ingress
>    metadata:
>      name: nginx
>      annotations:
>        ingress.kubernetes.io/ssl-redirect: "false"
>    spec:
>      rules:
>      - http:
>          paths:
>          - path: /
>            backend:
>              serviceName: nginx
>              servicePort: 80
>    ```
>
> 6. Curl it via localhost
>
>    `curl localhost:8081/`
>
> ## 2. via NodePort
>
> 1. Create a cluster, mapping the port 30080 from agent-0 to localhost:8082
>
>    `k3d cluster create mycluster -p "8082:30080@agent[0]" --agents 2`
>
>    - **Note**: Kubernetes’ default NodePort range is [`30000-32767`](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport)
>    - **Note**: You may as well expose the whole NodePort range from the very beginning, e.g. via `k3d cluster create mycluster --agents 3 -p "30000-32767:30000-32767@server[0]"` (See [this video from @portainer](https://www.youtube.com/watch?v=5HaU6338lAk))
>
> … (Steps 2 and 3 like above) …
>
> 1. Create a NodePort service for it with `kubectl apply -f`
>
>    ```
>    apiVersion: v1
>    kind: Service
>    metadata:
>      labels:
>        app: nginx
>      name: nginx
>    spec:
>      ports:
>      - name: 80-80
>        nodePort: 30080
>        port: 80
>        protocol: TCP
>        targetPort: 80
>      selector:
>        app: nginx
>      type: NodePort
>    ```
>
> 2. Curl it via localhost
>
>    `curl localhost:8082/`


## 参考链接

- k3d官方github仓库: https://github.com/rancher/k3d

- k3d Documentation: https://k3d.io/

