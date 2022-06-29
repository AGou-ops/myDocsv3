# Prometheus + AlertManager 

## AlertManager 简介

Alertmanager 主要用于接收 Prometheus 发送的告警信息，它支持丰富的告警通知渠道，例如邮件、微信、钉钉、Slack 等常用沟通工具，而且很容易做到告警信息进行去重，降噪，分组等，是一款很好用的告警通知系统。

### promtheus告警能力

> 告警能力在Prometheus的架构中被划分成两个独立的部分。如下所示，通过在Prometheus中定义AlertRule（告警规则），Prometheus会周期性的对告警规则进行计算，如果满足告警触发条件就会向Alertmanager发送告警信息。
>
> ![img](https://2584451478-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LBdoxo9EmQ0bJP2BuUi%2F-LVMF4RtPS-2rjW9R-hG%2F-LPS9QhUbi37E1ZK8mXF%2Fprometheus-alert-artich.png?generation=1546578333144123&alt=media)
>
> Prometheus告警处理
>
> 在Prometheus中一条告警规则主要由以下几部分组成：
>
> - 告警名称：用户需要为告警规则命名，当然对于命名而言，需要能够直接表达出该告警的主要内容
> - 告警规则：告警规则实际上主要由PromQL进行定义，其实际意义是当表达式（PromQL）查询结果持续多长时间（During）后出发告警
>
> 在Prometheus中，还可以通过Group（告警组）对一组相关的告警进行统一定义。当然这些定义都是通过YAML文件来统一管理的。
>
> Alertmanager作为一个独立的组件，负责接收并处理来自Prometheus Server(也可以是其它的客户端程序)的告警信息。Alertmanager可以对这些告警信息进行进一步的处理，比如当接收到大量重复告警时能够消除重复的告警信息，同时对告警信息进行分组并且路由到正确的通知方，Prometheus内置了对邮件，Slack等多种通知方式的支持，同时还支持与Webhook的集成，以支持更多定制化的场景。例如，目前Alertmanager还不支持钉钉，那用户完全可以通过Webhook与钉钉机器人进行集成，从而通过钉钉接收告警信息。同时AlertManager还提供了静默和告警抑制机制来对告警通知行为进行优化。

## 配置 node-exporter 和 Prom

### 配置 node-exporter

`node-exporter`是最基本的节点监控客户端，负责监控机器的各个指标，包括节点存活、CPU、Mem、Network、IO 等等，方便后边演示 `Alertmanager `报警时的触发条件，例如配置节点存活检测，当机器 Down 时，触发报警控制，那么就可以通过停止 node-exporter 来模拟实现.

所以直接启动即可：

```bash
docker run --name node-exporter -d -p 9100:9100 prom/node-exporter
```

访问测试：http://127.0.0.1:9100

### 配置 Prom

编辑 Prometheus 配置文件`prometheus.yml`：

```bash
global:
  scrape_interval:     15s 
  evaluation_interval: 15s  
  # scrape_timeout is set to the global default (10s).

# -------------------------------------
# Alertmanager configuration
alerting:
  alertmanagers:
  - static_configs:
    - targets:
      - 172.16.1.132:9093

rule_files:
  - "/etc/prometheus/rules/*.rules"
# -------------------------------------

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
    - targets: ['172.16.1.132:9090']
      labels:
        instance: prometheus
        service: prometheus-service

  - job_name: 'node-exporter'
    file_sd_configs:		# 使用该模块动态装载，而无需每次重启prom服务
      - files: ['/etc/prometheus/nodes/*.json']
```

创建`node-exporter.json`，内容如下所示：

```bash
[
    {
        "targets": [
            "172.16.1.132:9100"
        ],
        "labels": {
            "instance": "vm-172.16.1.132",
            "service": "node-service"
        }
    }
]
```

启动 Prom 容器：

```bash
docker run -d --name prometheus -p 9090:9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ prom/prometheus
```

查看`node-exporter`和`prometheus`健康状况：http://127.0.0.1:9090/targets

## 配置 AlertManager

简单启动`AlertManager`：

```bash
docker run --name alertmanager -d -p 9093:9093 prom/alertmanager
```

打开浏览器访问 http://lcoalhost:9093 进行测试，这里没有报警规则，所有没有内容呈现，

编辑 AlertManager 的配置文件`alertmanager.yml`：

```bash
global:			# 全局设置
  resolve_timeout: 5m
  smtp_from: 'dai15628960878@163.com'
  smtp_smarthost: 'smtp.163.com:465'		# 163邮箱的SMTP SSL端口为465/994，非SSL为25
  smtp_auth_username: 'dai15628960878@163.com'
  smtp_auth_password: 'xxxxxxxxxxxxxxx'
  smtp_require_tls: false		# 是否需要tls验证
  smtp_hello: '163.com'
route:
  group_by: ['alertname']
  group_wait: 5s
  group_interval: 5s
  repeat_interval: 5m
  receiver: 'email'
receivers:
- name: 'email'
  email_configs:
  - to: 'agou-ops@foxmail.com'
    send_resolved: true
inhibit_rules:
  - source_match:
      severity: 'critical'
    target_match:
      severity: 'warning'
    equal: ['alertname', 'dev', 'instance']
```

启动容器：

```bash
docker run -d --name alertmanager -p 9093:9093 -v /home/prom/alertmanager.yml:/etc/alertmanager/alertmanager.yml -v /home/prom/rules/:/etc/prometheus/rules/ prom/alertmanager
```

## 配置  Prom 的报警规则

在 Prometheus 配置 AlertManager 服务地址以及告警规则，新建报警规则文件`/home/prom/rules/ test_alert.rules` 如下：

```bash
groups:
- name: node-up
  rules:
  - alert: node-up
    expr: up{job="node-exporter"} == 0
    for: 15s
    labels:
      severity: 1
      team: node
    annotations:
      summary: "【【 $labels.instance 】】 已停止运行超过 15s！"
```

然后，修改 `prometheus.yml` 配置文件，添加 rules 规则文件，内容如下（上面已经修改过）：

```bash
...
# Alertmanager configuration
alerting:
  alertmanagers:
  - static_configs:
    - targets:
      - 172.16.1.132:9093

rule_files:
  - "/etc/prometheus/rules/*.rules"
...
```

启动容器：

```bash
docker run -d --name prometheus -p 9090:9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ -v           /home/prom/rules/:/etc/prometheus/rules/ prom/prometheus
```

查看报警规则`rules`：

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-1.png)

这里说明一下 Prometheus Alert 告警状态有三种状态：`Inactive`、`Pending`、`Firing`

* `Inactive`：非活动状态，表示正在监控，但是还未有任何警报触发。
* `Pending`：表示这个警报必须被触发。由于警报可以被分组、压抑/抑制或静默/静音，所以等待验证，一旦所有的验证都通过，则将转到 Firing 状态。
* `Firing`：将警报发送到 AlertManager，它将按照配置将警报的发送给所有接收者。一旦警报解除，则将状态转到 Inactive，如此循环。

手动停掉`node-exporter`容器，测试触发警告：

```bash
docker stop node-exporter
```

在 Prom web面板中查看：

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-2.png)

在`alertmanager`web面板中查看：

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-3.png)

已成功收到报警邮件：

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-4.png)

## 参考链接

* alert configuration：https://prometheus.io/docs/alerting/configuration/
* 动态config文件：https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config



