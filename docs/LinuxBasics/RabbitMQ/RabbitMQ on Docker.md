# RabbitMQ on Docker

Try the [community Docker image](https://registry.hub.docker.com/_/rabbitmq/):

```bash
# for RabbitMQ 3.9, the latest series
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
# for RabbitMQ 3.8,
# 3.8.x support timeline: https://www.rabbitmq.com/versions.html
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8-management
```



## 参考链接

- RabbitMQ Quickly start: https://www.rabbitmq.com/download.html