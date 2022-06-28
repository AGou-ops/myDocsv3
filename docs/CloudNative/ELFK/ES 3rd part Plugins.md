# ES 3rd part Plugins 

# ES 第三方插件

## head

Elasticsearch集群的Web前端工具。

官方开源地址：https://github.com/mobz/elasticsearch-head

常用运行方式：

### 容器化运行

```bash
# for Elasticsearch 5.x: 
docker run -p 9100:9100 mobz/elasticsearch-head:5
```

### 浏览器插件运行（推荐）

从`chrome商店`下载对应的插件，地址： https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm?utm_source=chrome-ntp-icon

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/elasticsearch/elasticsearch-head.png "截图")

### 作为插件使用

从官方github仓库站点的描述`Running as a plugin of Elasticsearch (deprecated) `可以得知，该运行方式已被弃用，所以不推荐使用该运行方式。

## cerebro

Cerebro 是一款项目管理和协作软件。专为营销部门、建筑公司、视觉特效处理和动画工作室以及建筑管理局设计。对于elasticsearch来说，cerebro可以对ElasticSearch进行**集群监控和管理、集群配置修改、索引分片管理。**

官方站点及github仓库：https://cerebrohq.com/en/ | https://github.com/lmenezes/cerebro

### 安装与使用

```bash
# 直接通过rpm包进行安装
yum install -y https://github.com/lmenezes/cerebro/releases/download/v0.9.2/cerebro-0.9.2-1.noarch.rpm
# 下载二进制包手动运行
wget https://github.com/lmenezes/cerebro/releases/download/v0.9.2/cerebro-0.9.2.zip
unzip cerebro-0.9.2.zip
```

启动`cerebro`：

```bash
cd cerebro-0.9.2
bin/cerebro
# 或者
systemctl start cerebro
```

`cerebro`默认监听端口为`9000`，直接打开浏览器访问，http://172.16.1.128:9000

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/elasticsearch/elasticsearch-cerebro.png "截图")

## 参考资料

* elasticsearch-head running: https://github.com/mobz/elasticsearch-head#running