# Prometheus in Docker 

## docker 手动部署

首先，安装docker，参考https://docs.docker.com/engine/install/

拉取镜像包：

```bash
docker pull prom/node-exporter
docker pull prom/prometheus
docker pull grafana/grafana
```

### 启动 `node-exporter`：

```bash
docker run -d -p 9100:9100 \
  -v "/proc:/home/docker/proc:ro" \
  -v "/sys:/home/docker/sys:ro" \
  -v "/:/home/docker/rootfs:ro" \
  --net="host" \
  prom/node-exporter
```

测试`node-exporter`是否成功启动，http://172.16.1.132:9100/metrics

### 启动`prometheus`：

启动之前先配置好 Prom 的配置文件`/root/prometheus.yml`：

```bash
global:
  scrape_interval:     60s
  evaluation_interval: 60s
 
scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ['localhost:9090']
        labels:
          instance: prometheus
 
  - job_name: linux
    static_configs:
      - targets: ['172.16.1.132:9100']
        labels:
          instance: localhost
```

启动容器：

```bash
docker run  -d \
  -p 9090:9090 \
  -v /root/prometheus.yml:/etc/prometheus/prometheus.yml  \
  prom/prometheus
```

测试`node-exporter`是否成功启动，http://172.16.1.132:9090

### 启动 Grafana

新建空文件夹`grafana-storage`，用来存储数据：

```bash
mkdir -pv /data/grafana-storage
```

启动容器：

```bash
docker run -d \
  -p 3000:3000 \
  --name=grafana \
  -v /data/grafana-storage:/var/lib/grafana \
  grafana/grafana
```

测试容器运行状态，浏览器访问http://172.16.1.132:3000

查看三个容器状态：

```bash
[root@master docker]\# docker ps
CONTAINER ID        IMAGE                COMMAND                  CREATED                  STATUS                  PORTS                    NAMES
803d4e5c4ad3        prom/prometheus      "/bin/prometheus --c…"   Less than a second ago   Up Less than a second   0.0.0.0:9090->9090/tcp   charming_morse
2569f2394344        prom/node-exporter   "/bin/node_exporter"     Less than a second ago   Up Less than a second                            tender_elion
5a3f4258bec5        grafana/grafana      "/run.sh"                5 seconds ago            Up 4 seconds            0.0.0.0:3000->3000/tcp   grafana
```

此后`Grafana`的简单设置参考   [使用 Grafana 展示工具](./Prometheus 安装与部署.md#使用 Grafana 展示工具)

## docekr compose 快速部署

docker compose 安装：

* 借助于`epel`仓库，直接安装即可，`yum install docker-compose`
* github 官方仓库：https://github.com/docker/compose/releases/

### 添加配置文件

```
mkdir -p /usr/local/src/config
cd /usr/local/src/config
```

添加`prometheus.yml`配置文件：

```yaml
# my global config
global:
  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
  - static_configs:
    - targets: ['172.16.1.132:9093']
      # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  - "node_down.yml"
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: 'prometheus'
    static_configs:
- targets: ['172.16.1.132:9090']

  - job_name: 'cadvisor'
    static_configs:
    - targets: ['172.16.1.132:8080']

  - job_name: 'node'
    scrape_interval: 8s
    static_configs:
      - targets: ['172.16.1.132:9100']
```

添加配置文件`alertmanager.yml`，配置收发邮件邮箱

```yaml
global:
  smtp_smarthost: 'smtp.163.com:25'　　#163服务器
  smtp_from: 'xxxx@163.com'　　　　　　　　#发邮件的邮箱
  smtp_auth_username: 'xxxx@163.com'　　#发邮件的邮箱用户名，也就是你的邮箱
  smtp_auth_password: 'xxxx'　　　　　　　　#发邮件的邮箱密码
  smtp_require_tls: false　　　　　　　　#不进行tls验证

route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 10m
  receiver: live-monitoring

receivers:
- name: 'live-monitoring'
  email_configs:
  - to: 'xxxx@qq.com'　　　　　　　　#收邮件的邮箱
```

添加报警规则，添加一个`node_down.yml`为 prometheus targets 监控

```yaml
groups:
- name: node_down
  rules:
  - alert: InstanceDown
    expr: up == 0
    for: 1m
    labels:
      user: test
    annotations:
      summary: "Instance 【【 $labels.instance 】】 down"
      description: "【【 $labels.instance 】】 of job 【【 $labels.job 】】 has been down for more than 1 minutes."
```

编写 docker-compose 文件`docker-compose-monitor.yml`：

```yaml
version: '2'

networks:
    monitor:
        driver: bridge

services:
    prometheus:
        image: prom/prometheus
        container_name: prometheus
        hostname: prometheus
        restart: always
        volumes:
            - /usr/local/src/config/prometheus.yml:/etc/prometheus/prometheus.yml
            - /usr/local/src/config/node_down.yml:/etc/prometheus/node_down.yml
        ports:
            - "9090:9090"
        networks:
            - monitor

    alertmanager:
        image: prom/alertmanager
        container_name: alertmanager
        hostname: alertmanager
        restart: always
        volumes:
            - /usr/local/src/config/alertmanager.yml:/etc/alertmanager/alertmanager.yml
        ports:
            - "9093:9093"
        networks:
            - monitor

    grafana:
        image: grafana/grafana
        container_name: grafana
        hostname: grafana
        restart: always
        ports:
            - "3000:3000"
        networks:
            - monitor

    node-exporter:
        image: quay.io/prometheus/node-exporter
        container_name: node-exporter
        hostname: node-exporter
        restart: always
        ports:
            - "9100:9100"
        networks:
            - monitor

    cadvisor:
        image: google/cadvisor:latest
        container_name: cadvisor
        hostname: cadvisor
        restart: always
        volumes:
            - /:/rootfs:ro
            - /var/run:/var/run:rw
            - /sys:/sys:ro
            - /var/lib/docker/:/var/lib/docker:ro
        ports:
            - "8080:8080"
        networks:
            - monitor
```

启动`docker-compose`

```bash
#启动容器：
docker-compose -f /usr/local/src/config/docker-compose-monitor.yml up -d
#删除容器：
docker-compose -f /usr/local/src/config/docker-compose-monitor.yml down
#重启容器：
docker restart [ID]
```

## 参考链接

* docker-compose参考：https://blog.51cto.com/msiyuetian/2369130