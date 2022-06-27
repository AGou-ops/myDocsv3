# CMAK 

## CMAK 简介

CMAK 全称`Cluster Manager for Apache Kafka`，是Apache Kafka的集群管理器，以前称为`Kafka Manager`。

官方仓库：https://github.com/yahoo/CMAK

## CMAK 安装

:warning:注意：新版本至少需要`jdk11`版本才能正常运行。

1. 从[官方releases仓库](https://github.com/yahoo/CMAK/releases)下载所需程序包并解压缩：

```bash
wget https://github.com/yahoo/CMAK/releases/download/3.0.0.4/cmak-3.0.0.4.zip
unzip cmak-3.0.0.4.zip
cd cmak-3.0.0.4
```

2. 启动服务：

默认情况下端口`9000`，这是可更改的，配置文件的位置也是如此。例如：

```bash
bin/cmak -Dconfig.file=/path/to/application.conf -Dhttp.port=8080 -java-home /usr/lib/jvm/zulu-11-amd64
```

在这里，我使用默认配置，直接使用以下命令启动服务：

```bash
bin/cmak
```

打开浏览器访问：http://YOUR_IP:9000

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/kafka/cmak.png)

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/kafka/cmak-1.png)