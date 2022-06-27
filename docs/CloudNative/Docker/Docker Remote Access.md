# Docker 远程访问

## 配置服务端

编辑`/lib/systemd/system/docker.service`文件，找到`ExecStart`行，操作如下所示：

```bash
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
# 修改为
ExecStart=/usr/bin/dockerd -H fd:// -H=tcp://0.0.0.0:2375

systemctl daemon-reload && systemctl restart docker
# 测试访问
curl localhost:2375/images/json
```

## 配置客户端

远程访问之前可以做好SSH免密，在此就不再赘述。

### 使用环境变量：`DOCKER_HOST`

例如使用`docker-compose`时要连接远程docker：

```bash
$ DOCKER_HOST="ssh://user@remotehost" docker-compose up -d
```

### Docker Context

列出当前主机的`Docker 上下文`：

```bash
$ docker context ls
NAME                DESCRIPTION                               DOCKER ENDPOINT     KUBERNETES ENDPOINT                ORCHESTRATOR
default *           Current DOCKER_HOST based configuration   unix:///var/run/docker.sock    https://127.0.0.1:6443 (default)   swarm
```

创建一个新的上下文：

```bash
$ docker context create remote ‐‐docker "host=ssh://root@woniu"
# 或者使用tcp进行连接
# docker context create remote --docker "host=tcp://IP:PORT"
remote
Successfully created context “remote”
```

临时使用：

```bash
$ docker ‐‐context remote ps
CONTAINER ID    IMAGE   COMMAND   CREATED   STATUS   NAMES
```

切换当前上下文：

```bash
$ docker context use remote
remote
Current context is now "remote"
```



