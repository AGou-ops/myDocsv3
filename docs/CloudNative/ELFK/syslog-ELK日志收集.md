# Syslog + ELK 日志收集

## 配置` syslog`

编辑`syslog`的配置文件`/etc/rsyslog.conf`:

```bash
# 添加如下内容
*.* @@192.168.1.6:514
```

重启`rsyslog`:

```bash
systemctl restart rsyslog
```

## 配置`Logstash`

```yaml
# vim /usr/local/logstash-7.7.1/config/syslog2es.conf

input {
  syslog {
    type => "system-syslog"
    port => 514  
  }
}

output {
  elasticsearch {
    hosts => ["192.168.56.12:9200"]
    index => "system-syslog-%{+YYYY.MM}"
  }
}
```

## 启动相关服务

启动`logstash`和`es`:

```bash
# es
[root@master elasticsearch-7.7.1]\# su esuser
[esuser@master elasticsearch-7.7.1]$ bin/elasticsearch -d
# logstash
[root@master logstash-7.7.1]\# bin/logstash -f config/syslog2es.conf
```

## 查看服务状态

### ES 状态

在浏览器的`es`插件中的`browser`进行查看:

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/elk%20stack/syslog%2Belk.png)

### Kibana 状态

略.

参考之前的文章添加索引, 在此不再赘述.