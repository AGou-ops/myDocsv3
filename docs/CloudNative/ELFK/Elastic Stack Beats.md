# [Elastic Stack].Beats 

## Beats 简介

Beats 是一个免费且开放的平台，集合了多种单一用途数据采集器。它们从成百上千或成千上万台机器和系统向 Logstash 或 Elasticsearch 发送数据。

官方文档：https://www.elastic.co/guide/en/beats/libbeat/current/index.html

## Beats 系列

官方介绍及文档：https://www.elastic.co/cn/beats/

### Filebeat(日志文件)

Filebeat主要用于转发和集中日志数据。Filebeat作为代理安装在服务器上，监视您指定的日志文件或位置，收集日志事件，并将它们转发到ElasticSearch或Logstash进行索引。

### Heartbeat(心跳监控)

主要是检测服务或主机是否正常运行或存活，Heartbeat 能够通过 ICMP、TCP 和 HTTP 进行 ping 检测。

### Metricbeat(指标监控)

定期收集操作系统、软件或服务的指标数据，Metricbeat支持收集的module非常多，常用的有***docker、kafka、mysql、nginx、redis、zookeeper***等等

### Packetbeat(网络数据)

packetbeat 是一款轻量型网络数据包分析器，Packetbeat的工作原理是捕获应用程序服务器之间的网络流量，解码应用程序层协议(HTTP，MySQL，Redis等)

1. 可以查看服务器与服务器之间的流量情况
2. 可以监控SQL语句执行次数排名以及响应时间排名。

### Auditbeat(审计数据)

Auditbeat 允许您在 Linux、macOS 和 Windows 平台上仔细监控任何您感兴趣的文件目录。文件改变会被实时发送到 Elasticsearch，每条消息都包含元数据和文件内容的加密哈希信息，以便后续进一步分析。

## 参考链接

* elastic之beats各组件使用：https://blog.csdn.net/yu849893679/article/details/99640921