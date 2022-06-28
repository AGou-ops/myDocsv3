export default {
  title: 'AGou\'s Docsv3',
  description: 'Welcome to AGou\'s Documetations.',
  markdown: {
    lineNumbers: true,
    theme: 'material-palenight',
    linkify: false
  },
  themeConfig: {
    lang: 'zh-CN',
    siteTitle: 'AGou\'s Docsv3',
    // 读取public下的文件
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AGou-ops' },
      // { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' }
    ],
    algolia: {
      appId: '5M8VQRD7W9',
      apiKey: '2fcdbd0ce638664e7a28cc64939603b9',
      indexName: 'myDocsv3',
      // buttonText: '搜索'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present AGou-ops'
    },
    editLink: {
      pattern: 'https://github.com/AGou-ops/myDocsv3/edit/main/docs/:path',
      text: '在GitHub编辑此页'
    },
    lastUpdatedText: '更新时间',
    nav: [
      {
        text: '🏠 主页',
        link: '/'
        // activeMatch: '/config/'
      },
      {
        text: '📖 目录',
        items: [
            { text: '☁️ 云原生相关', link: '/CloudNative/' },
            { text: '😊 Linux基础', link: '/LinuxBasics/' },
            { text: '♨️ 编程语言', link: '/ProgramLang/' },
            { text: '🕹️ 脚本相关', link: '/Scripts/' },
            { text: '👨‍⚖️ 面试相关', link: '/Interview/' },
        ]
      },
      {
        text: '版本',
        items: [
            { text: 'Ver1.0', link: 'https://agou-ops.cn/myDocs' },
            { text: 'Ver2.0', link: 'https://agou-ops.cn/myDocsv2' },
        ]
      },
      {
        text: '✨ 我的博客',
        link: 'https://agou-ops.cn',
      }
    ],
    sidebar: {
      '/guide/': guide(),
      '/CloudNative/': CloudNative(),
      '/Interview/': Interview(),
      '/LinuxBasics/': LinuxBasics(),
      '/ProgramLang/': ProgramLang(),
      '/Scripts/': Scripts(),
  }
}
}


function guide() {
  return [
        {
          text: '所有文章分组',
          items: [
            { text: '🏠 目录主页', link: '/guide/index' },
            { text: '☁️ 云原生相关', link: '/CloudNative/' },
            { text: '😊 Linux基础', link: '/LinuxBasics/' },
            { text: '♨️ 编程语言', link: '/ProgramLang/' },
            { text: '🕹️ 脚本相关', link: '/Scripts/' },
            { text: '👨‍⚖️ 面试相关', link: '/Interview/' },
          ]
        },

  ]
}

function CloudNative(){
	return [
    {
      text: '',
      items: [
        ]
    },
    {
      text: 'ELFK',
      items: [
        { text: 'Kafka-ELFK分布式日志收集', link: '/CloudNative/ELFK/Kafka-ELFK分布式日志收集' },
        { text: 'ES 3rd part Plugins', link: '/CloudNative/ELFK/ES 3rd part Plugins' },
        { text: 'ELK-Redis缓存以及日志分流', link: '/CloudNative/ELFK/ELK-Redis缓存以及日志分流' },
        { text: 'ELK basic', link: '/CloudNative/ELFK/ELK basic' },
        { text: 'index', link: '/CloudNative/ELFK/index' },
        { text: 'Kafka-Redis-ELFK分布式日志收集', link: '/CloudNative/ELFK/Kafka-Redis-ELFK分布式日志收集' },
        { text: 'ES Docker三节点部署', link: '/CloudNative/ELFK/ES Docker三节点部署' },
        { text: 'ELK-Kafka-Filebeat', link: '/CloudNative/ELFK/ELK-Kafka-Filebeat' },
        { text: 'Elastic Stack Beats', link: '/CloudNative/ELFK/Elastic Stack Beats' },
        { text: 'TCP-ELK日志收集', link: '/CloudNative/ELFK/TCP-ELK日志收集' },
        { text: '收集Java、Tomcat日志', link: '/CloudNative/ELFK/收集Java、Tomcat日志' },
        { text: 'syslog-ELK日志收集', link: '/CloudNative/ELFK/syslog-ELK日志收集' },
        { text: 'Filebeat basic', link: '/CloudNative/ELFK/Filebeat basic' },
        { text: 'ES 配置文件详解', link: '/CloudNative/ELFK/ES 配置文件详解' },
        { text: 'Logstash 日志分流', link: '/CloudNative/ELFK/Logstash 日志分流' },
        { text: 'Logstash Basic - Plugins', link: '/CloudNative/ELFK/Logstash Basic - Plugins' },
        { text: '使用 docker-compose 部署 ELK', link: '/CloudNative/ELFK/使用 docker-compose 部署 ELK' },
        { text: '部署ELK-Kafka-Filebeat日志收集分析系统', link: '/CloudNative/ELFK/部署ELK-Kafka-Filebeat日志收集分析系统' },
        ]
    },
    {
      text: 'Docker',
      items: [
        { text: 'DockerFile', link: '/CloudNative/Docker/DockerFile' },
        { text: 'Docker Network', link: '/CloudNative/Docker/Docker Network' },
        { text: 'Docker Volume', link: '/CloudNative/Docker/Docker Volume' },
        { text: 'Docker Portainer', link: '/CloudNative/Docker/Docker Portainer' },
        { text: 'Docker 固定IP及跨主机互通', link: '/CloudNative/Docker/Docker 固定IP及跨主机互通' },
        { text: 'index', link: '/CloudNative/Docker/index' },
        { text: 'SSH Docker container', link: '/CloudNative/Docker/SSH Docker container' },
        { text: 'Docker Compose', link: '/CloudNative/Docker/Docker Compose' },
        { text: 'Docker openvswitch', link: '/CloudNative/Docker/Docker openvswitch' },
        { text: 'Docker Private Registry', link: '/CloudNative/Docker/Docker Private Registry' },
        { text: 'Docker Basic', link: '/CloudNative/Docker/Docker Basic' },
        { text: 'Docker Remote Access', link: '/CloudNative/Docker/Docker Remote Access' },
        { text: 'Istio Basic', link: '/CloudNative/Istio Basic' },
        ]
    },
    {
      text: 'Kubernetes',
      items: [
        { text: '实现基于EFK日志平台收集Kubernetes集群日志信息', link: '/CloudNative/k8s/实现基于EFK日志平台收集Kubernetes集群日志信息' },
        { text: 'Kubernetes Yaml quicklystart', link: '/CloudNative/k8s/Kubernetes Yaml quicklystart' },
        { text: 'Kubernetes REST API', link: '/CloudNative/k8s/Kubernetes REST API' },
        { text: 'Minikube Basic', link: '/CloudNative/k8s/Minikube Basic' },
        { text: 'k8s command', link: '/CloudNative/k8s/k8s command' },
        { text: 'kompose Basic', link: '/CloudNative/k8s/kompose Basic' },
        { text: 'k8s 图解大全', link: '/CloudNative/k8s/k8s 图解大全' },
        ]
    },
    {
      text: 'Kubernetes - Installation',
      items: [
        { text: '使用 Kubeadm 部署（单master）', link: '/CloudNative/k8s/Installation/使用 Kubeadm 部署（单master）' },
        { text: '使用 Kubespray 部署', link: '/CloudNative/k8s/Installation/使用 Kubespray 部署' },
        { text: '使用国内源及相关小工具', link: '/CloudNative/k8s/Installation/使用国内源及相关小工具' },
        { text: 'index', link: '/CloudNative/k8s/Installation/index' },
        { text: 'Kubernetes 二进制安装', link: '/CloudNative/k8s/Installation/Kubernetes 二进制安装' },
        ]
    },
    {
      text: 'Kubernetes - 实战案例',
      items: [
        { text: 'SpringCloud微服务电商系统在Kubernetes集群中上线详细教程', link: '/CloudNative/k8s/实战案例/SpringCloud微服务电商系统在Kubernetes集群中上线详细教程' },
        { text: 'index', link: '/CloudNative/k8s/实战案例/index' },
        { text: 'RBAC 实战案例', link: '/CloudNative/k8s/实战案例/RBAC 实战案例' },
        { text: '其他实战案例', link: '/CloudNative/k8s/实战案例/其他实战案例' },
        { text: 'Kubeadm 快速部署k8s集群', link: '/CloudNative/k8s/Kubeadm 快速部署k8s集群' },
        { text: 'index', link: '/CloudNative/k8s/index' },
        { text: 'kubenetes远程调试工具', link: '/CloudNative/k8s/kubenetes远程调试工具' },
        ]
    },
    {
      text: 'Kubernetes- 快速开始',
      items: [
        { text: '一 Kubernetes概述', link: '/CloudNative/k8s/Quicklystart/一 Kubernetes概述' },
        { text: '二 核心组件及附件', link: '/CloudNative/k8s/Quicklystart/二 核心组件及附件' },
        { text: '三 集群部署', link: '/CloudNative/k8s/Quicklystart/三 集群部署' },
        { text: '四 入门命令', link: '/CloudNative/k8s/Quicklystart/四 入门命令' },
        { text: '五 配置清单使用', link: '/CloudNative/k8s/Quicklystart/五 配置清单使用' },
        { text: '六 POD 配置清单', link: '/CloudNative/k8s/Quicklystart/六 POD 配置清单' },
        { text: '七 控制器配置清单', link: '/CloudNative/k8s/Quicklystart/七 控制器配置清单' },
        { text: '八 Service 配置清单', link: '/CloudNative/k8s/Quicklystart/八 Service 配置清单' },
        { text: '九 ingress 控制器', link: '/CloudNative/k8s/Quicklystart/九 ingress 控制器' },
        { text: '十 POD 存储卷', link: '/CloudNative/k8s/Quicklystart/十 POD 存储卷' },
        { text: '十一 配置信息容器化', link: '/CloudNative/k8s/Quicklystart/十一 配置信息容器化' },
        { text: '十二 StatefulSet 控制器', link: '/CloudNative/k8s/Quicklystart/十二 StatefulSet 控制器' },
        { text: '十三 用户认证系统', link: '/CloudNative/k8s/Quicklystart/十三 用户认证系统' },
        { text: '十四 用户权限系统', link: '/CloudNative/k8s/Quicklystart/十四 用户权限系统' },
        { text: '十五 dashboard', link: '/CloudNative/k8s/Quicklystart/十五 dashboard' },
        { text: '十六 网络通信', link: '/CloudNative/k8s/Quicklystart/十六 网络通信' },
        { text: '十七 调度策略', link: '/CloudNative/k8s/Quicklystart/十七 调度策略' },
        { text: '十八 高级调度设置', link: '/CloudNative/k8s/Quicklystart/十八 高级调度设置' },
        { text: '十九 容器资源限制', link: '/CloudNative/k8s/Quicklystart/十九 容器资源限制' },
        { text: 'Kubernetes with Jenkins CICD', link: '/CloudNative/k8s/Kubernetes with Jenkins CICD' },
        { text: 'k3d', link: '/CloudNative/k8s/k3d' },
        { text: 'Remote access k8s', link: '/CloudNative/k8s/Remote access k8s' },
        { text: 'Prometheus-Grafana全方位监控Kubernetes集群', link: '/CloudNative/k8s/Prometheus-Grafana全方位监控Kubernetes集群' },
        ]
    },
    {
      text: 'Kubernetes - Helm',
      items: [
        { text: 'Helm（Go）template', link: '/CloudNative/k8s/Helm/Helm（Go）template' },
        { text: 'charts', link: '/CloudNative/k8s/Helm/charts' },
        { text: 'index', link: '/CloudNative/k8s/Helm/index' },
        { text: 'Helm Basic', link: '/CloudNative/k8s/Helm/Helm Basic' },
        { text: 'k8s概念及原理相关', link: '/CloudNative/k8s/k8s概念及原理相关' },
        { text: 'Grafana Loki Basic', link: '/CloudNative/Grafana Loki Basic' },
        { text: 'Dubbo Basic', link: '/CloudNative/Dubbo Basic' },
        ]
    },
    {
      text: 'cicd',
      items: [
        ]
    },
    {
      text: 'CI & CD - GitLab',
      items: [
        { text: 'GitLab reset passwd', link: '/CloudNative/cicd/GitLab/GitLab reset passwd' },
        { text: 'GitLab Basic', link: '/CloudNative/cicd/GitLab/GitLab Basic' },
        { text: 'GitLab Backup-Move', link: '/CloudNative/cicd/GitLab/GitLab Backup-Move' },
        { text: 'index', link: '/CloudNative/cicd/GitLab/index' },
        { text: '发布方式', link: '/CloudNative/cicd/发布方式' },
        { text: 'Gogs Basic', link: '/CloudNative/cicd/Gogs Basic' },
        { text: 'index', link: '/CloudNative/cicd/index' },
        { text: 'Jira Basic', link: '/CloudNative/cicd/Jira Basic' },
        ]
    },
    {
      text: 'CI & CD - Jenkins',
      items: [
        { text: 'Jenkinsfile', link: '/CloudNative/cicd/Jenkins/Jenkinsfile' },
        { text: 'Jenkins Plugins', link: '/CloudNative/cicd/Jenkins/Jenkins Plugins' },
        { text: 'index', link: '/CloudNative/cicd/Jenkins/index' },
        { text: 'Jenkins Basic', link: '/CloudNative/cicd/Jenkins/Jenkins Basic' },
        ]
    },
    {
      text: 'CI & CD - Sonarqube',
      items: [
        { text: 'index', link: '/CloudNative/cicd/Sonarqube/index' },
        { text: 'Sonarqube Basic', link: '/CloudNative/cicd/Sonarqube/Sonarqube Basic' },
        { text: 'Sonarqube with Jenkins', link: '/CloudNative/cicd/Sonarqube/Sonarqube with Jenkins' },
        { text: 'Consul 入门', link: '/CloudNative/Consul 入门' },
        { text: 'index', link: '/CloudNative/index' },
        ]
    },
    {
      text: 'Prometheus',
      items: [
        { text: 'Prometheus 安装与部署、Grafana', link: '/CloudNative/Prometheus/Prometheus 安装与部署、Grafana' },
        { text: 'Prometheus-Consul（服务发现）', link: '/CloudNative/Prometheus/Prometheus-Consul（服务发现）' },
        { text: 'Prometheus in Docker', link: '/CloudNative/Prometheus/Prometheus in Docker' },
        { text: 'Prometheus 进阶', link: '/CloudNative/Prometheus/Prometheus 进阶' },
        { text: 'index', link: '/CloudNative/Prometheus/index' },
        { text: 'influxDB、Telegraf Basic', link: '/CloudNative/Prometheus/influxDB、Telegraf Basic' },
        { text: 'Prometheus-AlertManager', link: '/CloudNative/Prometheus/Prometheus-AlertManager' },
        ]
    },
    {
      text: '云计算平台相关',
      items: [
        { text: 'Microsoft Azure', link: '/CloudNative/CloudComptering/Microsoft Azure' },
        { text: 'Amazon Web Services', link: '/CloudNative/CloudComptering/Amazon Web Services' },
        { text: 'index', link: '/CloudNative/CloudComptering/index' },
        { text: 'Amazon EKS Basic', link: '/CloudNative/CloudComptering/Amazon EKS Basic' },
        ]
    },
  ]
}
function Interview(){
	return [
    {
      text: '/Interview',
      items: [
        ]
    },
    {
      text: '工作面试题',
      items: [
        { text: 'Redis', link: '/Interview/工作面试题/Redis' },
        { text: '选择公司', link: '/Interview/工作面试题/选择公司' },
        { text: 'index', link: '/Interview/工作面试题/index' },
        { text: 'index', link: '/Interview/index' },
        ]
    },
	]
}

function LinuxBasics(){
	return [
    {
      text: '',
      items: [
        ]
    },
    {
      text: 'DHCP-PXE-Cobbler',
      items: [
        { text: 'PXE CentOS', link: '/LinuxBasics/DHCP-PXE-Cobbler/PXE CentOS' },
        { text: 'index', link: '/LinuxBasics/DHCP-PXE-Cobbler/index' },
        { text: 'DHCP 简单使用', link: '/LinuxBasics/DHCP-PXE-Cobbler/DHCP 简单使用' },
        { text: 'Cobbler CentOS', link: '/LinuxBasics/DHCP-PXE-Cobbler/Cobbler CentOS' },
        ]
    },
    {
      text: 'SpringBoot',
      items: [
        { text: 'index', link: '/LinuxBasics/SpringBoot/index' },
        { text: 'SpringBoot Quicklystart', link: '/LinuxBasics/SpringBoot/SpringBoot Quicklystart' },
        { text: 'SpringBoot in Docker', link: '/LinuxBasics/SpringBoot/SpringBoot in Docker' },
        ]
    },
    {
      text: 'Terraform',
      items: [
        { text: 'Terraform Examples', link: '/LinuxBasics/Terraform/Terraform Examples' },
        { text: 'Terraform Variable', link: '/LinuxBasics/Terraform/Terraform Variable' },
        { text: 'index', link: '/LinuxBasics/Terraform/index' },
        { text: 'Terraform Basic', link: '/LinuxBasics/Terraform/Terraform Basic' },
        ]
    },
    {
      text: 'DataBases',
      items: [
        ]
    },
    {
      text: '数据库 - Redis',
      items: [
        { text: 'Redis 进阶', link: '/LinuxBasics/DataBases/Redis/Redis 进阶' },
        { text: 'Redis Backup', link: '/LinuxBasics/DataBases/Redis/Redis Backup' },
        { text: 'Redis Installation', link: '/LinuxBasics/DataBases/Redis/Redis Installation' },
        { text: 'Redis  HA', link: '/LinuxBasics/DataBases/Redis/Redis  HA' },
        { text: 'index', link: '/LinuxBasics/DataBases/Redis/index' },
        { text: '缓存穿透、缓存击穿、缓存雪崩', link: '/LinuxBasics/DataBases/Redis/缓存穿透、缓存击穿、缓存雪崩' },
        { text: 'Redis Codis', link: '/LinuxBasics/DataBases/Redis/Redis Codis' },
        { text: 'Redis Sentinel', link: '/LinuxBasics/DataBases/Redis/Redis Sentinel' },
        { text: 'Redis Basic', link: '/LinuxBasics/DataBases/Redis/Redis Basic' },
        { text: 'Redis Cluster', link: '/LinuxBasics/DataBases/Redis/Redis Cluster' },
        ]
    },
    {
      text: '数据库 - MongoDB',
      items: [
        { text: 'MongoDB Backup', link: '/LinuxBasics/DataBases/MongoDB/MongoDB Backup' },
        { text: 'MongoDB Sharded-Cluster', link: '/LinuxBasics/DataBases/MongoDB/MongoDB Sharded-Cluster' },
        { text: 'MongoDB Cluster', link: '/LinuxBasics/DataBases/MongoDB/MongoDB Cluster' },
        { text: 'index', link: '/LinuxBasics/DataBases/MongoDB/index' },
        { text: 'mongodump（restore）oplog高级备份', link: '/LinuxBasics/DataBases/MongoDB/mongodump（restore）oplog高级备份' },
        { text: 'MongoDB 异构数据平台迁移', link: '/LinuxBasics/DataBases/MongoDB/MongoDB 异构数据平台迁移' },
        { text: 'MongoDB Basic', link: '/LinuxBasics/DataBases/MongoDB/MongoDB Basic' },
        { text: 'MongoDB Installation', link: '/LinuxBasics/DataBases/MongoDB/MongoDB Installation' },
        { text: 'index', link: '/LinuxBasics/DataBases/index' },
        ]
    },
    {
      text: '数据库 - MySQL',
      items: [
        { text: 'MySQL Function', link: '/LinuxBasics/DataBases/MySQL/MySQL Function' },
        { text: 'MySQL 小技巧', link: '/LinuxBasics/DataBases/MySQL/MySQL 小技巧' },
        { text: 'MariaDB Log', link: '/LinuxBasics/DataBases/MySQL/MariaDB Log' },
        { text: 'MySQL Auth CLI', link: '/LinuxBasics/DataBases/MySQL/MySQL Auth CLI' },
        { text: 'MySQL Cursor', link: '/LinuxBasics/DataBases/MySQL/MySQL Cursor' },
        { text: 'MySQL 快速手册', link: '/LinuxBasics/DataBases/MySQL/MySQL 快速手册' },
        { text: 'MySQL 约束', link: '/LinuxBasics/DataBases/MySQL/MySQL 约束' },
        { text: 'index', link: '/LinuxBasics/DataBases/MySQL/index' },
        { text: 'MySQL Stored Procedure', link: '/LinuxBasics/DataBases/MySQL/MySQL Stored Procedure' },
        { text: 'MySQL EXPLAIN', link: '/LinuxBasics/DataBases/MySQL/MySQL EXPLAIN' },
        { text: 'MySQL BackUP - Client Tools', link: '/LinuxBasics/DataBases/MySQL/MySQL BackUP - Client Tools' },
        { text: 'MySQL Internal_function', link: '/LinuxBasics/DataBases/MySQL/MySQL Internal_function' },
        { text: 'MySQL Cluster', link: '/LinuxBasics/DataBases/MySQL/MySQL Cluster' },
        { text: 'MySQL Transaction', link: '/LinuxBasics/DataBases/MySQL/MySQL Transaction' },
        { text: 'MySQL Data_Type', link: '/LinuxBasics/DataBases/MySQL/MySQL Data_Type' },
        { text: 'MySQL Configuration', link: '/LinuxBasics/DataBases/MySQL/MySQL Configuration' },
        ]
    },
    {
      text: '数据库 - 压测工具',
      items: [
        { text: 'index', link: '/LinuxBasics/DataBases/压测工具/index' },
        { text: 'lsyncd', link: '/LinuxBasics/lsyncd' },
        { text: 'Useful Command', link: '/LinuxBasics/Useful Command' },
        ]
    },
    {
      text: 'Web Servers',
      items: [
        ]
    },
    {
      text: '网页服务器 - Jvm - Tomcat',
      items: [
        { text: 'Tomcat中间件方方面面储备知识', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat中间件方方面面储备知识' },
        { text: 'Tomcat Session（memcached）', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat Session（memcached）' },
        { text: 'Tomcat 调优', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat 调优' },
        { text: 'Jvm Monitor Tools', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Jvm Monitor Tools' },
        { text: 'Tomcat Basic', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat Basic' },
        { text: 'Tomcat Session（Redis with Nginx）', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat Session（Redis with Nginx）' },
        { text: 'Tomcat Cluster（nginx）', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat Cluster（nginx）' },
        { text: 'Tomcat 常用设置及安全管理规范', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat 常用设置及安全管理规范' },
        { text: 'index', link: '/LinuxBasics/Web Servers/Jvm - Tomcat/index' },
        ]
    },
    {
      text: '网页服务器 - PHP',
      items: [
        { text: 'PHP 优化及安全配置', link: '/LinuxBasics/Web Servers/PHP/PHP 优化及安全配置' },
        { text: 'index', link: '/LinuxBasics/Web Servers/PHP/index' },
        { text: 'index', link: '/LinuxBasics/Web Servers/index' },
        ]
    },
    {
      text: '网页服务器 - Nginx',
      items: [
        { text: 'Nginx - uWSGI 部署Django', link: '/LinuxBasics/Web Servers/Nginx/Nginx - uWSGI 部署Django' },
        { text: 'Nginx 性能优化与安全', link: '/LinuxBasics/Web Servers/Nginx/Nginx 性能优化与安全' },
        { text: 'Nginx 高级模块', link: '/LinuxBasics/Web Servers/Nginx/Nginx 高级模块' },
        { text: 'Nginx 平滑升级与回滚', link: '/LinuxBasics/Web Servers/Nginx/Nginx 平滑升级与回滚' },
        ]
    },
    {
      text: '网页服务器 - Nginx/Others',
      items: [
        { text: 'Node.js with ssl - nginx', link: '/LinuxBasics/Web Servers/Nginx/Others/Node.js with ssl - nginx' },
        { text: '使用logrotate切割nginx日志', link: '/LinuxBasics/Web Servers/Nginx/Others/使用logrotate切割nginx日志' },
        { text: 'index', link: '/LinuxBasics/Web Servers/Nginx/Others/index' },
        { text: '检查服务器是否支持gzip', link: '/LinuxBasics/Web Servers/Nginx/Others/检查服务器是否支持gzip' },
        { text: 'Nginx 爬虫限制', link: '/LinuxBasics/Web Servers/Nginx/Nginx 爬虫限制' },
        ]
    },
    {
      text: '网页服务器 - Nginx/Problems',
      items: [
        { text: 'rewrite参数处理问题', link: '/LinuxBasics/Web Servers/Nginx/Problems/rewrite参数处理问题' },
        { text: 'index', link: '/LinuxBasics/Web Servers/Nginx/Problems/index' },
        { text: 'Nginx Cache', link: '/LinuxBasics/Web Servers/Nginx/Nginx Cache' },
        { text: 'Nginx 负载均衡', link: '/LinuxBasics/Web Servers/Nginx/Nginx 负载均衡' },
        { text: 'index', link: '/LinuxBasics/Web Servers/Nginx/index' },
        { text: 'Nginx 快速配置手册', link: '/LinuxBasics/Web Servers/Nginx/Nginx 快速配置手册' },
        { text: 'Nginx 反向代理', link: '/LinuxBasics/Web Servers/Nginx/Nginx 反向代理' },
        { text: 'Nginx Rewrite', link: '/LinuxBasics/Web Servers/Nginx/Nginx Rewrite' },
        { text: 'Nginx 编译及制作包', link: '/LinuxBasics/Web Servers/Nginx/Nginx 编译及制作包' },
        { text: 'HTTPS  配置及优化', link: '/LinuxBasics/Web Servers/Nginx/HTTPS  配置及优化' },
        { text: 'Nginx try_files', link: '/LinuxBasics/Web Servers/Nginx/Nginx try_files' },
        { text: 'Nginx 内置变量', link: '/LinuxBasics/Web Servers/Nginx/Nginx 内置变量' },
        ]
    },
    {
      text: '网页服务器 - Apache',
      items: [
        { text: 'LAMP 快速部署', link: '/LinuxBasics/Web Servers/Apache/LAMP 快速部署' },
        { text: 'index', link: '/LinuxBasics/Web Servers/Apache/index' },
        ]
    },
    {
      text: '网页服务器 - Python Django',
      items: [
        { text: 'Access to Database', link: '/LinuxBasics/Web Servers/Python Django/Access to Database' },
        { text: 'index', link: '/LinuxBasics/Web Servers/Python Django/index' },
        { text: 'Django Basic', link: '/LinuxBasics/Web Servers/Python Django/Django Basic' },
        ]
    },
    {
      text: '缓存服务器 - ',
      items: [
        ]
    },
    {
      text: '缓存服务器 - /Varnish',
      items: [
        { text: 'varnish 架构、工作原理及简单配置', link: '/LinuxBasics/Cache/Varnish/varnish 架构、工作原理及简单配置' },
        { text: 'index', link: '/LinuxBasics/Cache/Varnish/index' },
        { text: 'varnish 参考示例', link: '/LinuxBasics/Cache/Varnish/varnish 参考示例' },
        { text: 'varnish Basic', link: '/LinuxBasics/Cache/Varnish/varnish Basic' },
        ]
    },
    {
      text: '缓存服务器 - /Nuster',
      items: [
        { text: 'index', link: '/LinuxBasics/Cache/Nuster/index' },
        { text: 'Nuster Basic', link: '/LinuxBasics/Cache/Nuster/Nuster Basic' },
        { text: 'SSH Tunnel', link: '/LinuxBasics/SSH Tunnel' },
        { text: 'WireShark Filter', link: '/LinuxBasics/WireShark Filter' },
        ]
    },
    {
      text: 'Makefile',
      items: [
        { text: 'Makefile Basic', link: '/LinuxBasics/Makefile/Makefile Basic' },
        ]
    },
    {
      text: 'Shell',
      items: [
        { text: 'Shell getopts 样例', link: '/LinuxBasics/Shell/Shell getopts 样例' },
        { text: 'command', link: '/LinuxBasics/Shell/command' },
        { text: 'Linux Shell 实用命令及使用场景', link: '/LinuxBasics/Shell/Linux Shell 实用命令及使用场景' },
        { text: 'index', link: '/LinuxBasics/Shell/index' },
        { text: 'userful-shell', link: '/LinuxBasics/Shell/userful-shell' },
        { text: 'lvm 讲解', link: '/LinuxBasics/lvm 讲解' },
        { text: 'WireGuard VPN for Ubuntu', link: '/LinuxBasics/WireGuard VPN for Ubuntu' },
        ]
    },
    {
      text: '负载均衡器 - ',
      items: [
        ]
    },
    {
      text: '负载均衡器 - /LVS',
      items: [
        { text: 'ipvsadm 参数', link: '/LinuxBasics/LoadBalancer/LVS/ipvsadm 参数' },
        { text: 'LVS 调度算法', link: '/LinuxBasics/LoadBalancer/LVS/LVS 调度算法' },
        { text: 'LVS 进阶配置', link: '/LinuxBasics/LoadBalancer/LVS/LVS 进阶配置' },
        { text: 'LVS 简单应用', link: '/LinuxBasics/LoadBalancer/LVS/LVS 简单应用' },
        { text: 'index', link: '/LinuxBasics/LoadBalancer/LVS/index' },
        { text: 'LVS 四种模型详解', link: '/LinuxBasics/LoadBalancer/LVS/LVS 四种模型详解' },
        { text: 'LVS - keepalived', link: '/LinuxBasics/LoadBalancer/LVS/LVS - keepalived' },
        ]
    },
    {
      text: '负载均衡器 - /Keepalived - Nginx',
      items: [
        { text: 'Nginx - keepalived实现高可用集群', link: '/LinuxBasics/LoadBalancer/Keepalived - Nginx/Nginx - keepalived实现高可用集群' },
        { text: 'Nginx - keepalived快速配置及脚本', link: '/LinuxBasics/LoadBalancer/Keepalived - Nginx/Nginx - keepalived快速配置及脚本' },
        { text: 'index', link: '/LinuxBasics/LoadBalancer/Keepalived - Nginx/index' },
        { text: 'index', link: '/LinuxBasics/LoadBalancer/index' },
        ]
    },
    {
      text: '负载均衡器 - /HAProxy',
      items: [
        { text: 'HAProxy 参考示例', link: '/LinuxBasics/LoadBalancer/HAProxy/HAProxy 参考示例' },
        ]
    },
    {
      text: '负载均衡器 - /HAProxy/configuration.txt',
      items: [
        { text: 'HAProxy in Docker', link: '/LinuxBasics/LoadBalancer/HAProxy/HAProxy in Docker' },
        { text: 'index', link: '/LinuxBasics/LoadBalancer/HAProxy/index' },
        { text: 'HAProxy 配置详解', link: '/LinuxBasics/LoadBalancer/HAProxy/HAProxy 配置详解' },
        { text: 'Keepalived - HAProxy', link: '/LinuxBasics/LoadBalancer/HAProxy/Keepalived - HAProxy' },
        { text: 'HAProxy Basic', link: '/LinuxBasics/LoadBalancer/HAProxy/HAProxy Basic' },
        ]
    },
    {
      text: 'RabbitMQ',
      items: [
        { text: 'index', link: '/LinuxBasics/RabbitMQ/index' },
        { text: 'RabbitMQ on Docker', link: '/LinuxBasics/RabbitMQ/RabbitMQ on Docker' },
        { text: 'RabbitMQ Basic', link: '/LinuxBasics/RabbitMQ/RabbitMQ Basic' },
        { text: 'RabbitMQ Mirror Queue', link: '/LinuxBasics/RabbitMQ/RabbitMQ Mirror Queue' },
        ]
    },
    {
      text: '文件系统 - ',
      items: [
        { text: 'vsFTP 基础及实战', link: '/LinuxBasics/FileSystem/vsFTP 基础及实战' },
        { text: 'TFTP', link: '/LinuxBasics/FileSystem/TFTP' },
        ]
    },
    {
      text: '文件系统 - /FastDFS',
      items: [
        { text: 'index', link: '/LinuxBasics/FileSystem/FastDFS/index' },
        { text: 'FastDFS Basic', link: '/LinuxBasics/FileSystem/FastDFS/FastDFS Basic' },
        ]
    },
    {
      text: '文件系统 - /GlusterFS',
      items: [
        { text: 'index', link: '/LinuxBasics/FileSystem/GlusterFS/index' },
        { text: '临时', link: '/LinuxBasics/FileSystem/GlusterFS/临时' },
        ]
    },
    {
      text: '文件系统 - /Ceph',
      items: [
        { text: 'CephFS', link: '/LinuxBasics/FileSystem/Ceph/CephFS' },
        { text: 'Ceph Basic', link: '/LinuxBasics/FileSystem/Ceph/Ceph Basic' },
        { text: 'Ceph Manager Dashboard', link: '/LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard' },
        { text: 'Cephadm 部署octopus', link: '/LinuxBasics/FileSystem/Ceph/Cephadm 部署octopus' },
        { text: 'ceph 部署问题汇总', link: '/LinuxBasics/FileSystem/Ceph/ceph 部署问题汇总' },
        { text: 'Ceph Cluster 移除', link: '/LinuxBasics/FileSystem/Ceph/Ceph Cluster 移除' },
        { text: 'Ceph RGW', link: '/LinuxBasics/FileSystem/Ceph/Ceph RGW' },
        { text: 'Ceph-deploy 集群快速部署', link: '/LinuxBasics/FileSystem/Ceph/Ceph-deploy 集群快速部署' },
        { text: 'index', link: '/LinuxBasics/FileSystem/Ceph/index' },
        { text: 'NFS 基础及实战', link: '/LinuxBasics/FileSystem/NFS 基础及实战' },
        ]
    },
    {
      text: '文件系统 - /MinIO',
      items: [
        { text: 'MinIO Basic', link: '/LinuxBasics/FileSystem/MinIO/MinIO Basic' },
        { text: 'index', link: '/LinuxBasics/FileSystem/MinIO/index' },
        { text: 'MinIO in Docker', link: '/LinuxBasics/FileSystem/MinIO/MinIO in Docker' },
        { text: 'SAMBA 基础及实战', link: '/LinuxBasics/FileSystem/SAMBA 基础及实战' },
        { text: 'index', link: '/LinuxBasics/FileSystem/index' },
        { text: 'smb.conf详解', link: '/LinuxBasics/FileSystem/smb.conf详解' },
        { text: 'OpenVPN for CentOS', link: '/LinuxBasics/OpenVPN for CentOS' },
        { text: 'keepalived', link: '/LinuxBasics/keepalived' },
        ]
    },
    {
      text: 'Zookeeper',
      items: [
        { text: 'index', link: '/LinuxBasics/Zookeeper/index' },
        { text: 'Zookeeper Basic', link: '/LinuxBasics/Zookeeper/Zookeeper Basic' },
        { text: 'rsync - inotify（sersync）', link: '/LinuxBasics/rsync - inotify（sersync）' },
        ]
    },
    {
      text: 'Ansible',
      items: [
        { text: 'Ansible Playbook Basic', link: '/LinuxBasics/Ansible/Ansible Playbook Basic' },
        { text: 'Ansible inventory', link: '/LinuxBasics/Ansible/Ansible inventory' },
        { text: 'Ansible Ad-hoc Basic', link: '/LinuxBasics/Ansible/Ansible Ad-hoc Basic' },
        { text: 'index', link: '/LinuxBasics/Ansible/index' },
        { text: 'Ansible Best Practices', link: '/LinuxBasics/Ansible/Ansible Best Practices' },
        { text: 'Ansible modules', link: '/LinuxBasics/Ansible/Ansible modules' },
        { text: 'Ansible Basic', link: '/LinuxBasics/Ansible/Ansible Basic' },
        { text: 'Ansible Tower', link: '/LinuxBasics/Ansible/Ansible Tower' },
        { text: 'Split - Logrotate', link: '/LinuxBasics/Split - Logrotate' },
        { text: 'Windows useful cmd', link: '/LinuxBasics/Windows useful cmd' },
        ]
    },
    {
      text: 'Nexus',
      items: [
        { text: 'Nexus - yum 私服', link: '/LinuxBasics/Nexus/Nexus - yum 私服' },
        { text: 'Nexus Basic - Maven 私服', link: '/LinuxBasics/Nexus/Nexus Basic - Maven 私服' },
        { text: 'index', link: '/LinuxBasics/Nexus/index' },
        { text: 'nexus 批量上传脚本', link: '/LinuxBasics/Nexus/nexus 批量上传脚本' },
        { text: 'index', link: '/LinuxBasics/index' },
        ]
    },
    {
      text: 'Kafka',
      items: [
        { text: '使用 docker-compose 部署 Kafka', link: '/LinuxBasics/Kafka/使用 docker-compose 部署 Kafka' },
        { text: 'CMAK', link: '/LinuxBasics/Kafka/CMAK' },
        { text: 'index', link: '/LinuxBasics/Kafka/index' },
        { text: 'Kafka Basic', link: '/LinuxBasics/Kafka/Kafka Basic' },
        ]
    },
    {
      text: 'KVM',
      items: [
        { text: 'KVM Basic', link: '/LinuxBasics/KVM/KVM Basic' },
        { text: 'index', link: '/LinuxBasics/KVM/index' },
        { text: 'KVM 2 VMware Station', link: '/LinuxBasics/KVM/KVM 2 VMware Station' },
        { text: 'kvm_install.sh', link: '/LinuxBasics/KVM/kvm_install.sh' },
        { text: 'k3s - k3d Basic', link: '/LinuxBasics/k3s - k3d Basic' },
        { text: 'Vagrant', link: '/LinuxBasics/Vagrant' },
        ]
    },
    {
      text: 'Zabbix',
      items: [
        { text: 'Zabbix 详细介绍', link: '/LinuxBasics/Zabbix/Zabbix 详细介绍' },
        { text: 'Zabbix Basic', link: '/LinuxBasics/Zabbix/Zabbix Basic' },
        { text: 'index', link: '/LinuxBasics/Zabbix/index' },
        { text: 'SQL review', link: '/LinuxBasics/SQL review' },
        { text: 'dnsmasq', link: '/LinuxBasics/dnsmasq' },
        { text: 'inotifywait 文件监控', link: '/LinuxBasics/inotifywait 文件监控' },
        { text: 'Firewalld IPtables快速手册', link: '/LinuxBasics/Firewalld IPtables快速手册' },
        { text: 'PowerDNS', link: '/LinuxBasics/PowerDNS' },
        { text: 'CertBot Nginx SSL', link: '/LinuxBasics/CertBot Nginx SSL' },
        { text: 'JumpServer', link: '/LinuxBasics/JumpServer' },
        { text: 'vim tricks', link: '/LinuxBasics/vim tricks' },
        ]
    },
  ]
}

function ProgramLang(){
	return [
    {
      text: '/ProgramLang',
      items: [
        ]
    },
    {
      text: '编程语言 - Golang',
      items: [
        { text: 'Golang Pointer', link: '/ProgramLang/Golang/Golang Pointer' },
        { text: 'Golang Testing', link: '/ProgramLang/Golang/Golang Testing' },
        { text: 'Golang Errors - handler', link: '/ProgramLang/Golang/Golang Errors - handler' },
        { text: 'Golang fmt占位符', link: '/ProgramLang/Golang/Golang fmt占位符' },
        { text: 'Golang Pkgs', link: '/ProgramLang/Golang/Golang Pkgs' },
        { text: 'Golang Interface', link: '/ProgramLang/Golang/Golang Interface' },
        { text: 'Golang File Operate', link: '/ProgramLang/Golang/Golang File Operate' },
        { text: 'index', link: '/ProgramLang/Golang/index' },
        { text: 'Golang 并发', link: '/ProgramLang/Golang/Golang 并发' },
        { text: 'Golang Package manage', link: '/ProgramLang/Golang/Golang Package manage' },
        { text: 'Golang Json', link: '/ProgramLang/Golang/Golang Json' },
        { text: 'Golang Basic', link: '/ProgramLang/Golang/Golang Basic' },
        { text: 'String Operate', link: '/ProgramLang/Golang/String Operate' },
        { text: 'Golang Function', link: '/ProgramLang/Golang/Golang Function' },
        { text: 'Golang Project Layout', link: '/ProgramLang/Golang/Golang Project Layout' },
        ]
    },
    {
      text: '编程语言 - Lua',
      items: [
        { text: 'Lua Baisc', link: '/ProgramLang/Lua/Lua Baisc' },
        { text: 'index', link: '/ProgramLang/Lua/index' },
        { text: 'Lua continue Ex', link: '/ProgramLang/Lua/Lua continue Ex' },
        { text: 'index', link: '/ProgramLang/index' },
        ]
    },
  ]
}

function Scripts(){
	return [
    {
      text: '/Scripts',
      items: [
        ]
    },
    {
      text: '脚本 - python',
      items: [
        { text: 'index', link: '/Scripts/python/index' },
        ]
    },
    {
      text: '脚本 - golang',
      items: [
        { text: 'index', link: '/Scripts/golang/index' },
        ]
    },
    {
      text: '脚本 - shell',
      items: [
        { text: '日常巡检Shell', link: '/Scripts/shell/日常巡检Shell' },
        { text: 'Shell 并发', link: '/Scripts/shell/Shell 并发' },
        { text: 'CentOS sys information', link: '/Scripts/shell/CentOS sys information' },
        ]
    },
    {
      text: '脚本 - shell/resort-file-from-csv',
      items: [
        { text: 'resort-file', link: '/Scripts/shell/resort-file-from-csv/resort-file' },
        { text: 'index', link: '/Scripts/shell/resort-file-from-csv/index' },
        { text: 'Redis tools', link: '/Scripts/shell/Redis tools' },
        { text: 'Dokcer 镜像备份', link: '/Scripts/shell/Dokcer 镜像备份' },
        { text: 'index', link: '/Scripts/shell/index' },
        { text: 'Nginx Log Check', link: '/Scripts/shell/Nginx Log Check' },
        { text: 'Rsync', link: '/Scripts/shell/Rsync' },
        { text: 'index', link: '/Scripts/index' },
        ]
    },
    {
      text: '脚本 - windows',
      items: [
        { text: '通用修改dns', link: '/Scripts/windows/通用修改dns' },
        ]
    },
  ]
}