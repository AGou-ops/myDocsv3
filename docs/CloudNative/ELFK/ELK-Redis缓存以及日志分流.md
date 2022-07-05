![配置logstash从redis读取filebeat收集的日志（上）_elasticsearch](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=.png)



安装步骤在此不再赘述。



注意点：

- logstash并不是全部收集完在传输给es集群，而是收集过来一条就传输给es一条，这样一样就减轻了es的压力

- 常规的日志收集方式都是由filebeat收集完直接输出给es集群，如果当后端应用访问量大，产生的日志也特别巨大，这时再由filebeat收集日志直接传输给es，会给es带来特别大的压力，如果es这时挂掉，filebeat依然在收集日志，这时filebeat找不到es集群，则会把收集来的日志丢弃

    针对日志量大的问题可以在es集群前面增加redis和logstash，filebeat收集完日志交给redis，由logstash从redis中读取收集来的日志数据传输给es集群，最终在kibana上进行展示

    logstash只需要部署一台即可，只是用于将redis收集来的日志传输给es集群

- 由于redis属于缓存数据库，当logstash把数据从redis上取完后，会自动把key删掉



配置`filebeat`收集日志并自定义redis key:

```yaml
[root@nginx ~]\# vim /etc/filebeat/filebeat.yml 
#定义收集什么日志
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/nginx/www_access.log
  json.keys_under_root: true
  json.overwrite_keys: true
  tags: ["nginx-www"]

- type: log
  enabled: true
  paths:
    - /var/log/nginx/bbs_access.log
  json.keys_under_root: true
  json.overwrite_keys: true
  tags: ["nginx-bbs"]


#定义modules模块路径
filebeat.config.modules:
  path: ${path.config}/modules.d/*.yml
  reload.enabled: false


#指定kibana地址
setup.kibana:
  host: "192.168.81.210:5601"


#定义redis集群地址以及定义索引名
output.redis:
  hosts: ["192.168.81.220:6379"]
  #key: "nginx-www"
  keys:
    - key: "nginx-www"
      when.contains:
        tags: "nginx-www"
    - key: "nginx-bbs"
      when.contains:
        tags: "nginx-bbs"
  db: 0
  timeout: 5

setup.template.name: "nginx"
setup.template.pattern: "nginx-*"
setup.template.enabled: false
setup.template.overwrite: true

[root@nginx ~]\# systemctl restart filebeat
```

option2（将所有的日志都存在于同一个key中，只用tag来标识）: 

这样做的好处是减少工作量，不然每增加一个日志，就得向filebeat中增加一小段配置，不是很方便；

```yaml
[root@nginx /etc/filebeat]\# vim filebeat.yml 
#定义收集什么日志
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/nginx/www_access.log
  json.keys_under_root: true
  json.overwrite_keys: true
  tags: ["nginx-www"]

- type: log
  enabled: true
  paths:
    - /var/log/nginx/bbs_access.log
  json.keys_under_root: true
  json.overwrite_keys: true
  tags: ["nginx-bbs"]


#定义redis集群地址以及定义索引名
output.redis:
  hosts: ["192.168.81.220:6379"]
  key: "nginx-all-key"
  db: 0
  timeout: 5

setup.template.name: "nginx"
setup.template.pattern: "nginx-*"
setup.template.enabled: false
setup.template.overwrite: true

```



配置`logstash`指定不同的索引库：

```yaml

input {
  redis {
    host => "192.168.81.220"
    port => "6379"
    db => "0" 
    key => "nginx-www"
    data_type => "list"
  }

  redis {
    host => "192.168.81.220"
    port => "6379"
    db => "0" 
    key => "nginx-bbs"
    data_type => "list"
  }

}

output {
  if "nginx-www" in [tags] {
    stdout{}
    elasticsearch {
      hosts => "http://192.168.81.210:9200"
      manage_template => false
      index => "nginx-www-access-%{+yyyy.MM.dd}"
    }   
  }

  if "nginx-bbs" in [tags] {
    stdout{}
    elasticsearch {
      hosts => "http://192.168.81.210:9200"
      manage_template => false
      index => "nginx-bbs-access-%{+yyyy.MM.dd}"
    }   
  }
}
```

option2（只留一个key，同样根据标签不同来创建不同的索引库）: 



```yaml
#
input {
  redis {
    host => "192.168.81.220"
    port => "6379"
    db => "0"
    key => "nginx-all-key"
    data_type => "list"
  }
}

output {
  if "nginx-www" in [tags] {
    stdout{}
    elasticsearch {
      hosts => "http://192.168.81.210:9200"
      manage_template => false
      index => "nginx-www-access-%{+yyyy.MM.dd}"
    }
  }

  if "nginx-bbs" in [tags] {
    stdout{}
    elasticsearch {
      hosts => "http://192.168.81.210:9200"
      manage_template => false
      index => "nginx-bbs-access-%{+yyyy.MM.dd}"
    }
  }

}

```

