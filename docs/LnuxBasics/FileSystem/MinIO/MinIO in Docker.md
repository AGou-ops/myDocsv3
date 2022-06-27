# MinIO in Docker

use Docker:

```bash
docker run -d --name minio1 \
  -p 9000:9000 \
  -p 9001:9001 \
  -v /root/minio/data:/data \
  -v /root/minio/config:/root/.minio \
  -e "MINIO_ROOT_USER=QXLXHV2YBUNNIPK1LTYIB7IA" \
  -e "MINIO_ROOT_PASSWORD=fT59aVbwfbTceEeEuR2jWeJE3mv2nG_rQ_1dgSIXHFiIlIRf" \
  quay.io/minio/minio server /data --console-address ":9001"
```

use Podman:

```bash
podman run -p 9000:9000 -p 9001:9001 \
  quay.io/minio/minio server /data --console-address ":9001"
```

### 使用Docker secrets进行MinIO Access和Secret密钥自定义

要覆盖MinIO的自动生成的密钥,你可以把secret和access秘钥创建成[Docker secrets](https://docs.docker.com/engine/swarm/secrets/). MinIO允许常规字符串作为Access和Secret密钥。

```bash
Copyecho "AKIAIOSFODNN7EXAMPLE" | docker secret create access_key -
echo "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" | docker secret create secret_key -
```

使用`docker service`创建MinIO服务，并读取Docker secrets。

```bash
Copydocker service create --name="minio-service" --secret="access_key" --secret="secret_key" minio/minio server /data
```

更多 `docker service`信息，请访问 [这里](https://docs.docker.com/engine/swarm/how-swarm-mode-works/services/)

### 获取容器ID

在容器中使用Docker命令, 你需要知道这个容器的 `容器ID` 。 为了获取 `Container ID`, 运行

```sh
Copydocker ps -a
```

`-a` flag 确保你获取所有的容器(创建的，正在运行的，退出的)，然后从输出中识别`Container ID`。

### 启动和停止容器

启动容器,你可以使用 [`docker start`](https://docs.docker.com/engine/reference/commandline/start/) 命令。

```sh
Copydocker start <container_id>
```

停止一下正在运行的容器, 使用 [`docker stop`](https://docs.docker.com/engine/reference/commandline/stop/) 命令。

```sh
Copydocker stop <container_id>
```

### MinIO容器日志

获取MinIO日志，使用 [`docker logs`](https://docs.docker.com/engine/reference/commandline/logs/) 命令。

```sh
Copydocker logs <container_id>
```

### 监控MinioDocker容器

监控MinIO容器使用的资源,使用 [`docker stats`](https://docs.docker.com/engine/reference/commandline/stats/) 命令.

```sh
Copydocker stats <container_id>
```

