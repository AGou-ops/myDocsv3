# 使用 docker-compose 部署 ELK

`docker-compose.yml` 文件内容：

```yml
version: '3'
services:
  elasticsearch:
    image: elasticsearch:7.7.1
    container_name: elasticsearch
    environment:
      - "cluster.name=elasticsearch" #设置集群名称为elasticsearch
      - "discovery.type=single-node" #以单一节点模式启动
      - "ES_JAVA_OPTS=-Xms512m -Xmx1024m" #设置使用jvm内存大小
    volumes:
      - /data/docker/elfk/elasticsearch/plugins:/usr/share/elasticsearch/plugins # 插件文件挂载
      - /data/docker/elfk/elasticsearch/data:/usr/share/elasticsearch/data # 数据文件挂载
    ports:
      - 9200:9200
    restart: always
  kibana:
    image: kibana:7.7.1
    container_name: kibana
    links:
      - elasticsearch:es #可以用es这个域名访问elasticsearch服务
    depends_on:
      - elasticsearch #kibana在elasticsearch启动之后再启动
    environment:
      - "elasticsearch.hosts=http://es:9200" #设置访问elasticsearch的地址
    ports:
      - 5601:5601
    restart: always
  logstash:
    image: logstash:7.7.1
    container_name: logstash
    volumes:
      - /Users/zhouxinlei/docker/elfk/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    depends_on:
      - elasticsearch #kibana在elasticsearch启动之后再启动
    links:
      - elasticsearch:es #可以用es这个域名访问elasticsearch服务
    ports:
      - 5044:5044
    restart: always
  filebeat:
    image: elastic/filebeat:7.7.1
    container_name: filebeat
    links:
      - logstash:logstash #可以用es这个域名访问elasticsearch服务
    volumes:
      - /Users/zhouxinlei/logs/:/var/logs/springboot/ # 宿主机实际应用日志文件映射到容器内部
      - /Users/zhouxinlei/docker/elfk/filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml
    depends_on:
      - logstash #kibana在elasticsearch启动之后再启动
    restart: always

```

运行`docker-compose`脚本：

```bash
docker-compose up -d
```

- 在logstash中安装json_lines插件

```shell
# 进入logstash容器
docker exec -it logstash /bin/bash
# 进入bin目录
cd /bin/
# 安装插件
logstash-plugin install logstash-codec-json_lines
# 退出容器
exit
# 重启logstash服务
docker restart logstash
```