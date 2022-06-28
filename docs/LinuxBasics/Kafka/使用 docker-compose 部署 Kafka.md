# 使用 docker-compose 部署 Kafka

`docker-compose.yml`内容如下：

```yaml
version: '3'
services:
  zookeeper:
	image: zookeeper:latest
	container_name: zookeeper
	volumes:
      - /data/docker/kafka/zookeeper/data:/data
      - /data/docker/kafka/zookeeper/datalog:/datalog
    ports:
      - 2181:2181
    restart: always
  kafka:
    image: wurstmeister/kafka
    container_name: kafka
    volumes:
      - /data/docker/kafka/data:/kafka
    ports:
      - 9092:9092
    environment:
      KAFKA_ADVERTISED_HOST_NAME: kafka
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      # KAFKA_ADVERTISED_PORT: 9092
      # KAFKA_LOG_RETENTION_HOURS: 120
      # KAFKA_MESSAGE_MAX_BYTES: 10000000
      # KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000
      # KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000
      # KAFKA_NUM_PARTITIONS: 3
      # KAFKA_DELETE_RETENTION_MS: 1000
    restart: always
  kafka-manager:
    image: kafkamanager/kafka-manager
    container_name: kafka-manager
    environment:
      ZK_HOSTS: kafka
    ports:
      - 9000:9000
    restart: always
```

运行脚本：

```bash
mkdir /data/docker/kafka/zookeeper/{data,datalog} /data/docker/kafka/data -pv && docker-compose up -d
```
