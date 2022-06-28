# TCP + ELK 日志收集

## 配置`Logstash`

```yaml
# vim /usr/local/logstash-7.7.1/config/tcp2es.conf

input {
  tcp {
    type => "tcp"
    port => 6789
    mode => "server"
  }
}

output {
  elasticsearch {
    hosts => ["192.168.1.6:9200"]
    index => "tcp-log-%{+YYYY.MM}"    
  }
}
```

## 写入测试信息

使用`nc`命令向主机的`tcp:6789`端口发送测试信息:

```bash
[root@master ~]\# echo "TEST TCP MESSAGES" | nc 192.168.1.6 6789
[root@master ~]\# nc 192.168.1.6 6789 < /etc/rsyslog.conf
```

## 启动相关服务

启动`logstash`和`es`:

```bash
# es
[root@master elasticsearch-7.7.1]\# su esuser
[esuser@master elasticsearch-7.7.1]$ bin/elasticsearch -d
# logstash
[root@master logstash-7.7.1]\# bin/logstash -f config/tcp2es.conf
```

## 查看服务状态

### ES 状态

略.

参考之前文章查看`browser`方法.

### Kibana 状态

略.

参考之前的文章添加索引, 在此不再赘述.