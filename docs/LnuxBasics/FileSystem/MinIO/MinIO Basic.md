# MinIO Basic

[MinIO](https://link.segmentfault.com/?url=https%3A%2F%2Fdocs.min.io%2Fcn%2F)是一个基于Apache License v2.0开源协议的对象存储服务。它兼容亚马逊S3云存储服务接口，非常适合于存储大容量非结构化的数据，例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等，而一个对象文件可以是任意大小，从几kb到最大5T不等。

MinIO是一个非常轻量的服务,可以很简单的和其他应用的结合，类似 NodeJS, Redis 或者 MySQL。

## MinIO 单机部署

### On GUN/Linux

```bash
wget http://dl.minio.org.cn/server/minio/release/linux-amd64/minio
chmod +x minio
./minio server /data
```

获取`MinIO`客户端工具：

```bash
wget http://dl.minio.org.cn/client/mc/release/linux-amd64/mc
chmod +x mc
mc --help
```

### On Windows

```powershell
wget "http://dl.minio.org.cn/server/minio/release/windows-amd64/minio.exe" -outfile "D:\minio\minio.exe"
d:
cd minio
minio.exe server D:\minio\data
```

获取`MinIO`客户端工具：

```bash
wget "http://dl.minio.org.cn/client/mc/release/windows-amd64/mc.exe" -outfile "D:\minio\mc.exe"
mc.exe --help
```

## mc 命令使用

添加并查看`MinIO server`:

```bash
# 添加minio服务
mc config host add minio-server http://10.0.0.18:9000 [ACCESS_KEY] [SECRET_KEY]
mc config host add ali-oss https://oss-cn-hangzhou.aliyuncs.com [ACCESS_KEY] [SECRET_KEY]
# 输入以上命令之后会提示输入access key和secret key

# 查看minio服务配置
mc admin info minio-server

# 查看所有minio服务配置
mc config host list
```

添加一个`bucket`:

```bash
mc mb minio-server/test-bucket
```

查看已创建的`bucket`:

```bash
mc ls minio-server
```

增删改文件到`bucket`:

```bash
# 增加一个文件到bucket
mc cp .mc/* minio-server/test-bucket/
# 删除一个文件
mc rm minio-server/test-bucket/config.json.old
```

更多参考`mc --help`

## 参考链接

- MinIO quickstart zh-cn: http://docs.minio.org.cn/docs/master/minio-deployment-quickstart-guide