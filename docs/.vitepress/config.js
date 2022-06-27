export default {
  title: 'AGou\'s Docsv3',
  description: 'Welcome to AGou\'s Documetations.',
  markdown: {
    lineNumbers: false,
    theme: 'material-palenight'
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
            { text: '😊 Linux基础', link: '/LnuxBasics/' },
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
      '/LnuxBasics/': LnuxBasics(),
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
            { text: '😊 Linux基础', link: '/LnuxBasics/' },
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
      text: '云计算服务',
      items: [
        { text: 'Amazon EKS Basic', link: '/CloudNative/CloudComptering/Amazon EKS Basic' },
        { text: 'Amazon Web Services', link: '/CloudNative/CloudComptering/Amazon Web Services' },
        { text: 'Microsoft Azure', link: '/CloudNative/CloudComptering/Microsoft Azure' },
        { text: 'index', link: '/CloudNative/CloudComptering/index' },
        { text: 'Consul 入门', link: '/CloudNative/Consul 入门' },
        ]
    },
    {
      text: 'Docker',
      items: [
        { text: 'Docker Basic', link: '/CloudNative/Docker/Docker Basic' },
        { text: 'Docker Compose', link: '/CloudNative/Docker/Docker Compose' },
        { text: 'Docker Network', link: '/CloudNative/Docker/Docker Network' },
        { text: 'Docker Portainer', link: '/CloudNative/Docker/Docker Portainer' },
        { text: 'Docker Private Registry', link: '/CloudNative/Docker/Docker Private Registry' },
        { text: 'Docker Remote Access', link: '/CloudNative/Docker/Docker Remote Access' },
        { text: 'Docker Volume', link: '/CloudNative/Docker/Docker Volume' },
        { text: 'Docker openvswitch', link: '/CloudNative/Docker/Docker openvswitch' },
        { text: 'Docker 固定IP及跨主机互通', link: '/CloudNative/Docker/Docker 固定IP及跨主机互通' },
        { text: 'DockerFile', link: '/CloudNative/Docker/DockerFile' },
        { text: 'SSH Docker container', link: '/CloudNative/Docker/SSH Docker container' },
        { text: 'index', link: '/CloudNative/Docker/index' },
        { text: 'Dubbo Basic', link: '/CloudNative/Dubbo Basic' },
        ]
    },
    {
      text: 'ELFK',
      items: [
        { text: 'ELK basic', link: '/CloudNative/ELFK/ELK basic' },
        { text: 'ELK+Kafka+Filebeat', link: '/CloudNative/ELFK/ELK+Kafka+Filebeat' },
        { text: 'ELK+Redis缓存以及日志分流', link: '/CloudNative/ELFK/ELK+Redis缓存以及日志分流' },
        { text: 'ES 3rd part Plugins', link: '/CloudNative/ELFK/ES 3rd part Plugins' },
        { text: 'ES Docker三节点部署', link: '/CloudNative/ELFK/ES Docker三节点部署' },
        { text: 'ES 配置文件详解', link: '/CloudNative/ELFK/ES 配置文件详解' },
        { text: 'Filebeat basic', link: '/CloudNative/ELFK/Filebeat basic' },
        { text: 'Kafka(Redis)+ELFK分布式日志收集', link: '/CloudNative/ELFK/Kafka(Redis)+ELFK分布式日志收集' },
        { text: 'Kafka+ELFK分布式日志收集', link: '/CloudNative/ELFK/Kafka+ELFK分布式日志收集' },
        { text: 'Logstash Basic & Plugins', link: '/CloudNative/ELFK/Logstash Basic & Plugins' },
        { text: 'Logstash 日志分流', link: '/CloudNative/ELFK/Logstash 日志分流' },
        { text: 'TCP+ELK日志收集', link: '/CloudNative/ELFK/TCP+ELK日志收集' },
        { text: '[Elastic Stack].Beats', link: '/CloudNative/ELFK/[Elastic Stack].Beats' },
        { text: 'index', link: '/CloudNative/ELFK/index' },
        { text: 'syslog+ELK日志收集', link: '/CloudNative/ELFK/syslog+ELK日志收集' },
        { text: '使用 docker-compose 部署 ELK', link: '/CloudNative/ELFK/使用 docker-compose 部署 ELK' },
        { text: '部署ELK+Kafka+Filebeat日志收集分析系统', link: '/CloudNative/ELFK/部署ELK+Kafka+Filebeat日志收集分析系统' },
        { text: '收集Java、Tomcat日志', link: '/CloudNative/ELFK/收集Java、Tomcat日志' },
        { text: 'Grafana Loki Basic', link: '/CloudNative/Grafana Loki Basic' },
        { text: 'Istio Basic', link: '/CloudNative/Istio Basic' },
        ]
    },
    {
      text: 'Prometheus',
      items: [
        { text: 'Prometheus + AlertManager', link: '/CloudNative/Prometheus/Prometheus + AlertManager' },
        { text: 'Prometheus + Consul(服务发现)', link: '/CloudNative/Prometheus/Prometheus + Consul(服务发现)' },
        { text: 'Prometheus in Docker', link: '/CloudNative/Prometheus/Prometheus in Docker' },
        { text: 'Prometheus 进阶', link: '/CloudNative/Prometheus/Prometheus 进阶' },
        { text: 'Prometheus 安装与部署、Grafana', link: '/CloudNative/Prometheus/Prometheus 安装与部署、Grafana' },
        { text: 'index', link: '/CloudNative/Prometheus/index' },
        { text: 'influxDB、Telegraf Basic', link: '/CloudNative/Prometheus/influxDB、Telegraf Basic' },
        ]
    },
    // {
    //   text: 'CI & CD',
    //   items: [
    //     ]
    // },
    {
      text: 'CI & CD - Jenkins',
      items: [
        { text: 'Jenkins Basic', link: '/CloudNative/cicd/Jenkins/Jenkins Basic' },
        { text: 'Jenkins Plugins', link: '/CloudNative/cicd/Jenkins/Jenkins Plugins' },
        { text: 'Jenkinsfile', link: '/CloudNative/cicd/Jenkins/Jenkinsfile' },
        { text: 'index', link: '/CloudNative/cicd/Jenkins/index' },
        { text: 'Jira Basic', link: '/CloudNative/cicd/Jira Basic' },
        ]
    },
    {
      text: 'CI & CD - Sonarqube',
      items: [
        { text: 'Sonarqube + Jenkins', link: '/CloudNative/cicd/Sonarqube/Sonarqube + Jenkins' },
        { text: 'Sonarqube Basic', link: '/CloudNative/cicd/Sonarqube/Sonarqube Basic' },
        { text: 'index', link: '/CloudNative/cicd/Sonarqube/index' },
        { text: 'index', link: '/CloudNative/cicd/index' },
        { text: '发布方式', link: '/CloudNative/cicd/发布方式' },
        ]
    },
    // {
    //   text: '/CloudNative/k8s',
    //   items: [
    //     ]
    // },
    {
      text: 'k8s - Helm',
      items: [
        { text: 'Helm Basic', link: '/CloudNative/k8s/Helm/Helm Basic' },
        { text: 'Helm（Go）template', link: '/CloudNative/k8s/Helm/Helm（Go）template' },
        { text: 'charts', link: '/CloudNative/k8s/Helm/charts' },
        { text: 'index', link: '/CloudNative/k8s/Helm/index' },
        ]
    },
    {
      text: 'k8s - 安装与部署',
      items: [
        { text: '⭐Kubernetes 二进制安装', link: '/CloudNative/k8s/Installation/Kubernetes 二进制安装' },
        { text: 'index', link: '/CloudNative/k8s/Installation/index' },
        { text: '使用 Kubeadm 部署（单master）', link: '/CloudNative/k8s/Installation/使用 Kubeadm 部署（单master）' },
        { text: '使用 Kubespray 部署', link: '/CloudNative/k8s/Installation/使用 Kubespray 部署' },
        { text: '使用国内源及相关小工具', link: '/CloudNative/k8s/Installation/使用国内源及相关小工具' },
        { text: 'Kubeadm 快速部署k8s集群', link: '/CloudNative/k8s/Kubeadm 快速部署k8s集群' },
        { text: 'Kubernetes REST API', link: '/CloudNative/k8s/Kubernetes REST API' },
        { text: 'Kubernetes Yaml quicklystart', link: '/CloudNative/k8s/Kubernetes Yaml quicklystart' },
        { text: 'Kubernetes with Jenkins CICD', link: '/CloudNative/k8s/Kubernetes with Jenkins CICD' },
        { text: 'Minikube Basic', link: '/CloudNative/k8s/Minikube Basic' },
        { text: 'Prometheus+Grafana全方位监控Kubernetes集群', link: '/CloudNative/k8s/Prometheus+Grafana全方位监控Kubernetes集群' },
        ]
    },
    {
      text: 'k8s - 快速开始',
      items: [
        { text: 'index', link: '/CloudNative/k8s/Quicklystart/index' },
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
        { text: 'Remote access k8s', link: '/CloudNative/k8s/Remote access k8s' },
        { text: 'index', link: '/CloudNative/k8s/index' },
        { text: 'k3d', link: '/CloudNative/k8s/k3d' },
        { text: 'k8s command', link: '/CloudNative/k8s/k8s command' },
        { text: 'k8s 图解大全', link: '/CloudNative/k8s/k8s 图解大全' },
        { text: 'k8s概念及原理相关', link: '/CloudNative/k8s/k8s概念及原理相关' },
        { text: 'kompose Basic', link: '/CloudNative/k8s/kompose Basic' },
        { text: 'kubenetes远程调试工具', link: '/CloudNative/k8s/kubenetes远程调试工具' },
        ]
    },
    {
      text: 'k8s - 实战案例',
      items: [
        { text: 'RBAC 实战案例', link: '/CloudNative/k8s/实战案例/RBAC 实战案例' },
        { text: 'SpringCloud微服务电商系统在Kubernetes集群中上线详细教程', link: '/CloudNative/k8s/实战案例/SpringCloud微服务电商系统在Kubernetes集群中上线详细教程' },
        { text: 'index', link: '/CloudNative/k8s/实战案例/index' },
        { text: '其他实战案例', link: '/CloudNative/k8s/实战案例/其他实战案例' },
        { text: '实现基于EFK日志平台收集Kubernetes集群日志信息', link: '/CloudNative/k8s/实现基于EFK日志平台收集Kubernetes集群日志信息' },
        ]
    }
	]
}
function Interview(){
	return [
    {
      text: '工作面试题',
      items: [
        { text: 'Redis', link: '/Interview/工作面试题/Redis' },
        { text: 'index', link: '/Interview/工作面试题/index' },
        { text: '选择公司', link: '/Interview/工作面试题/选择公司' },
        ]
    }
	]
}

function LnuxBasics(){
	return [
    {
      text: 'Ansible',
      items: [
        { text: 'Ansible Ad-hoc Basic', link: '/LnuxBasics/Ansible/Ansible Ad-hoc Basic' },
        { text: 'Ansible Basic', link: '/LnuxBasics/Ansible/Ansible Basic' },
        { text: 'Ansible Best Practices', link: '/LnuxBasics/Ansible/Ansible Best Practices' },
        { text: 'Ansible Playbook Basic', link: '/LnuxBasics/Ansible/Ansible Playbook Basic' },
        { text: 'Ansible Tower', link: '/LnuxBasics/Ansible/Ansible Tower' },
        { text: 'Ansible inventory', link: '/LnuxBasics/Ansible/Ansible inventory' },
        { text: 'Ansible modules', link: '/LnuxBasics/Ansible/Ansible modules' },
        { text: 'index', link: '/LnuxBasics/Ansible/index' },
        ]
    },
    // {
    //   text: '/LnuxBasics/Cache',
    //   items: [
    //     ]
    // },
    {
      text: '缓存 - Nuster',
      items: [
        { text: 'Nuster Basic', link: '/LnuxBasics/Cache/Nuster/Nuster Basic' },
        { text: 'index', link: '/LnuxBasics/Cache/Nuster/index' },
        ]
    },
    {
      text: '缓存 - Varnish',
      items: [
        { text: 'index', link: '/LnuxBasics/Cache/Varnish/index' },
        { text: 'varnish Basic', link: '/LnuxBasics/Cache/Varnish/varnish Basic' },
        { text: 'varnish 参考示例', link: '/LnuxBasics/Cache/Varnish/varnish 参考示例' },
        { text: 'varnish 架构、工作原理及简单配置', link: '/LnuxBasics/Cache/Varnish/varnish 架构、工作原理及简单配置' },
        { text: 'CertBot Nginx SSL', link: '/LnuxBasics/CertBot Nginx SSL' },
        ]
    },
    {
      text: 'DHCP & PXE & Cobbler',
      items: [
        { text: 'Cobbler CentOS', link: '/LnuxBasics/DHCP-PXE-Cobbler/Cobbler CentOS' },
        { text: 'DHCP 简单使用', link: '/LnuxBasics/DHCP-PXE-Cobbler/DHCP 简单使用' },
        { text: 'PXE CentOS', link: '/LnuxBasics/DHCP-PXE-Cobbler/PXE CentOS' },
        { text: 'index', link: '/LnuxBasics/DHCP-PXE-Cobbler/index' },
        ]
    },
    // {
    //   text: '/LnuxBasics/DataBases',
    //   items: [
    //     ]
    // },
    {
      text: '数据库 - MongoDB',
      items: [
        { text: 'MongoDB Backup', link: '/LnuxBasics/DataBases/MongoDB/MongoDB Backup' },
        { text: 'MongoDB Basic', link: '/LnuxBasics/DataBases/MongoDB/MongoDB Basic' },
        { text: 'MongoDB Cluster', link: '/LnuxBasics/DataBases/MongoDB/MongoDB Cluster' },
        { text: 'MongoDB Installation', link: '/LnuxBasics/DataBases/MongoDB/MongoDB Installation' },
        { text: 'MongoDB Sharded-Cluster', link: '/LnuxBasics/DataBases/MongoDB/MongoDB Sharded-Cluster' },
        { text: 'MongoDB 异构数据平台迁移', link: '/LnuxBasics/DataBases/MongoDB/MongoDB 异构数据平台迁移' },
        { text: 'index', link: '/LnuxBasics/DataBases/MongoDB/index' },
        { text: 'mongodump(restore) oplog高级备份', link: '/LnuxBasics/DataBases/MongoDB/mongodump(restore) oplog高级备份' },
        ]
    },
    {
      text: '数据库 - MySQL',
      items: [
        { text: 'MariaDB Log', link: '/LnuxBasics/DataBases/MySQL/MariaDB Log' },
        { text: 'MySQL Auth CLI', link: '/LnuxBasics/DataBases/MySQL/MySQL Auth CLI' },
        { text: 'MySQL BackUP & Client Tools', link: '/LnuxBasics/DataBases/MySQL/MySQL BackUP & Client Tools' },
        { text: 'MySQL Cluster', link: '/LnuxBasics/DataBases/MySQL/MySQL Cluster' },
        { text: 'MySQL Configuration', link: '/LnuxBasics/DataBases/MySQL/MySQL Configuration' },
        { text: 'MySQL Cursor', link: '/LnuxBasics/DataBases/MySQL/MySQL Cursor' },
        { text: 'MySQL Data_Type', link: '/LnuxBasics/DataBases/MySQL/MySQL Data_Type' },
        { text: 'MySQL EXPLAIN', link: '/LnuxBasics/DataBases/MySQL/MySQL EXPLAIN' },
        { text: 'MySQL Function', link: '/LnuxBasics/DataBases/MySQL/MySQL Function' },
        { text: 'MySQL Internal_function', link: '/LnuxBasics/DataBases/MySQL/MySQL Internal_function' },
        { text: 'MySQL Stored Procedure', link: '/LnuxBasics/DataBases/MySQL/MySQL Stored Procedure' },
        { text: 'MySQL Transaction', link: '/LnuxBasics/DataBases/MySQL/MySQL Transaction' },
        { text: 'MySQL 约束', link: '/LnuxBasics/DataBases/MySQL/MySQL 约束' },
        { text: 'MySQL 小技巧', link: '/LnuxBasics/DataBases/MySQL/MySQL 小技巧' },
        { text: 'MySQL 快速手册', link: '/LnuxBasics/DataBases/MySQL/MySQL 快速手册' },
        { text: 'index', link: '/LnuxBasics/DataBases/MySQL/index' },
        ]
    },
    {
      text: '数据库 - Redis',
      items: [
        { text: 'Redis  HA', link: '/LnuxBasics/DataBases/Redis/Redis  HA' },
        { text: 'Redis Backup', link: '/LnuxBasics/DataBases/Redis/Redis Backup' },
        { text: 'Redis Basic', link: '/LnuxBasics/DataBases/Redis/Redis Basic' },
        { text: 'Redis Cluster', link: '/LnuxBasics/DataBases/Redis/Redis Cluster' },
        { text: 'Redis Codis', link: '/LnuxBasics/DataBases/Redis/Redis Codis' },
        { text: 'Redis Installation', link: '/LnuxBasics/DataBases/Redis/Redis Installation' },
        { text: 'Redis Sentinel', link: '/LnuxBasics/DataBases/Redis/Redis Sentinel' },
        { text: 'Redis 进阶', link: '/LnuxBasics/DataBases/Redis/Redis 进阶' },
        { text: 'index', link: '/LnuxBasics/DataBases/Redis/index' },
        { text: '缓存穿透、缓存击穿、缓存雪崩', link: '/LnuxBasics/DataBases/Redis/缓存穿透、缓存击穿、缓存雪崩' },
        { text: 'index', link: '/LnuxBasics/DataBases/index' },
        ]
    },
    {
      text: '数据库 - 压测工具',
      items: [
        { text: 'index', link: '/LnuxBasics/DataBases/压测工具/index' },
        ]
    },
    // {
    //   text: '/LnuxBasics/FileSystem',
    //   items: [
    //     ]
    // },
    {
      text: '文件系统 - Ceph',
      items: [
        { text: 'Ceph Basic', link: '/LnuxBasics/FileSystem/Ceph/Ceph Basic' },
        { text: 'Ceph Cluster 移除', link: '/LnuxBasics/FileSystem/Ceph/Ceph Cluster 移除' },
        { text: 'Ceph Manager Dashboard', link: '/LnuxBasics/FileSystem/Ceph/Ceph Manager Dashboard' },
        { text: 'Ceph RGW', link: '/LnuxBasics/FileSystem/Ceph/Ceph RGW' },
        { text: 'Ceph-deploy 集群快速部署', link: '/LnuxBasics/FileSystem/Ceph/Ceph-deploy 集群快速部署' },
        { text: 'CephFS', link: '/LnuxBasics/FileSystem/Ceph/CephFS' },
        { text: 'Cephadm 部署octopus', link: '/LnuxBasics/FileSystem/Ceph/Cephadm 部署octopus' },
        { text: 'ceph 部署问题汇总', link: '/LnuxBasics/FileSystem/Ceph/ceph 部署问题汇总' },
        { text: 'index', link: '/LnuxBasics/FileSystem/Ceph/index' },
        ]
    },
    {
      text: '文件系统 - FastDFS',
      items: [
        { text: 'FastDFS Basic', link: '/LnuxBasics/FileSystem/FastDFS/FastDFS Basic' },
        { text: 'index', link: '/LnuxBasics/FileSystem/FastDFS/index' },
        ]
    },
    {
      text: '文件系统 - GlusterFS',
      items: [
        { text: 'index', link: '/LnuxBasics/FileSystem/GlusterFS/index' },
        { text: '临时', link: '/LnuxBasics/FileSystem/GlusterFS/临时' },
        ]
    },
    {
      text: '文件系统 - MinIO',
      items: [
        { text: 'MinIO Basic', link: '/LnuxBasics/FileSystem/MinIO/MinIO Basic' },
        { text: 'MinIO in Docker', link: '/LnuxBasics/FileSystem/MinIO/MinIO in Docker' },
        { text: 'index', link: '/LnuxBasics/FileSystem/MinIO/index' },
        { text: 'NFS 基础及实战', link: '/LnuxBasics/FileSystem/NFS 基础及实战' },
        { text: 'SAMBA 基础及实战', link: '/LnuxBasics/FileSystem/SAMBA 基础及实战' },
        { text: 'TFTP', link: '/LnuxBasics/FileSystem/TFTP' },
        { text: 'index', link: '/LnuxBasics/FileSystem/index' },
        { text: 'smb.conf详解', link: '/LnuxBasics/FileSystem/smb.conf详解' },
        { text: 'vsFTP 基础及实战', link: '/LnuxBasics/FileSystem/vsFTP 基础及实战' },
        { text: 'Firewalld IPtables快速手册', link: '/LnuxBasics/Firewalld IPtables快速手册' },
        { text: 'JumpServer', link: '/LnuxBasics/JumpServer' },
        ]
    },
    {
      text: 'KVM',
      items: [
        { text: 'KVM 2 VMware Station', link: '/LnuxBasics/KVM/KVM 2 VMware Station' },
        { text: 'KVM Basic', link: '/LnuxBasics/KVM/KVM Basic' },
        { text: 'index', link: '/LnuxBasics/KVM/index' },
        { text: 'kvm_install.sh', link: '/LnuxBasics/KVM/kvm_install.sh' },
        ]
    },
    {
      text: 'Kafka',
      items: [
        { text: 'CMAK', link: '/LnuxBasics/Kafka/CMAK' },
        { text: 'Kafka Basic', link: '/LnuxBasics/Kafka/Kafka Basic' },
        { text: 'index', link: '/LnuxBasics/Kafka/index' },
        { text: '使用 docker-compose 部署 Kafka', link: '/LnuxBasics/Kafka/使用 docker-compose 部署 Kafka' },
        ]
    },
    // {
    //   text: 'LoadBalancer',
    //   items: [
    //     ]
    // },
    {
      text: '负载均衡 - HAProxy',
      items: [
        { text: 'HAProxy + Docker', link: '/LnuxBasics/LoadBalancer/HAProxy/HAProxy + Docker' },
        { text: 'HAProxy Basic', link: '/LnuxBasics/LoadBalancer/HAProxy/HAProxy Basic' },
        { text: 'HAProxy 参考示例', link: '/LnuxBasics/LoadBalancer/HAProxy/HAProxy 参考示例' },
        { text: 'HAProxy 配置详解', link: '/LnuxBasics/LoadBalancer/HAProxy/HAProxy 配置详解' },
        ]
    },
    {
      text: '/LnuxBasics/LoadBalancer/HAProxy/configuration.txt',
      items: [
        { text: 'index', link: '/LnuxBasics/LoadBalancer/HAProxy/index' },
        ]
    },
    {
      text: '负载均衡 - Keepalived & Nginx',
      items: [
        { text: 'Nginx+keepalived实现高可用集群', link: '/LnuxBasics/LoadBalancer/Keepalived+Nginx/Nginx+keepalived实现高可用集群' },
        { text: 'Nginx+keepalived快速配置及脚本', link: '/LnuxBasics/LoadBalancer/Keepalived+Nginx/Nginx+keepalived快速配置及脚本' },
        { text: 'index', link: '/LnuxBasics/LoadBalancer/Keepalived+Nginx/index' },
        ]
    },
    {
      text: '负载均衡 - LVS',
      items: [
        { text: 'LVS + keepalived', link: '/LnuxBasics/LoadBalancer/LVS/LVS + keepalived' },
        { text: 'LVS 简单应用', link: '/LnuxBasics/LoadBalancer/LVS/LVS 简单应用' },
        { text: 'LVS 调度算法', link: '/LnuxBasics/LoadBalancer/LVS/LVS 调度算法' },
        { text: 'LVS 进阶配置', link: '/LnuxBasics/LoadBalancer/LVS/LVS 进阶配置' },
        { text: 'LVS 四种模型详解', link: '/LnuxBasics/LoadBalancer/LVS/LVS 四种模型详解' },
        { text: 'index', link: '/LnuxBasics/LoadBalancer/LVS/index' },
        { text: 'ipvsadm 参数', link: '/LnuxBasics/LoadBalancer/LVS/ipvsadm 参数' },
        { text: 'index', link: '/LnuxBasics/LoadBalancer/index' },
        ]
    },
    {
      text: 'Makefile',
      items: [
        { text: 'Makefile Basic', link: '/LnuxBasics/Makefile/Makefile Basic' },
        ]
    },
    {
      text: 'Nexus',
      items: [
        { text: 'Nexus + yum 私服', link: '/LnuxBasics/Nexus/Nexus + yum 私服' },
        { text: 'Nexus Basic + Maven 私服', link: '/LnuxBasics/Nexus/Nexus Basic + Maven 私服' },
        { text: 'index', link: '/LnuxBasics/Nexus/index' },
        { text: 'nexus 批量上传脚本', link: '/LnuxBasics/Nexus/nexus 批量上传脚本' },
        { text: 'OpenVPN for CentOS', link: '/LnuxBasics/OpenVPN for CentOS' },
        { text: 'PowerDNS', link: '/LnuxBasics/PowerDNS' },
        ]
    },
    {
      text: 'RabbitMQ',
      items: [
        { text: 'RabbitMQ Basic', link: '/LnuxBasics/RabbitMQ/RabbitMQ Basic' },
        { text: 'RabbitMQ Mirror Queue', link: '/LnuxBasics/RabbitMQ/RabbitMQ Mirror Queue' },
        { text: 'RabbitMQ on Docker', link: '/LnuxBasics/RabbitMQ/RabbitMQ on Docker' },
        { text: 'index', link: '/LnuxBasics/RabbitMQ/index' },
        { text: 'SQL review', link: '/LnuxBasics/SQL review' },
        { text: 'SSH Tunnel', link: '/LnuxBasics/SSH Tunnel' },
        ]
    },
    {
      text: 'Shell',
      items: [
        { text: 'Linux Shell 实用命令及使用场景', link: '/LnuxBasics/Shell/Linux Shell 实用命令及使用场景' },
        { text: 'Shell getopts 样例', link: '/LnuxBasics/Shell/Shell getopts 样例' },
        { text: 'command', link: '/LnuxBasics/Shell/command' },
        { text: 'index', link: '/LnuxBasics/Shell/index' },
        { text: 'userful-shell', link: '/LnuxBasics/Shell/userful-shell' },
        { text: 'Split & Logrotate', link: '/LnuxBasics/Split & Logrotate' },
        ]
    },
    {
      text: 'SpringBoot',
      items: [
        { text: 'SpringBoot Quicklystart', link: '/LnuxBasics/SpringBoot/SpringBoot Quicklystart' },
        { text: 'SpringBoot in Docker', link: '/LnuxBasics/SpringBoot/SpringBoot in Docker' },
        { text: 'index', link: '/LnuxBasics/SpringBoot/index' },
        ]
    },
    {
      text: 'Terraform',
      items: [
        { text: 'Terraform Basic', link: '/LnuxBasics/Terraform/Terraform Basic' },
        { text: 'Terraform Examples', link: '/LnuxBasics/Terraform/Terraform Examples' },
        { text: 'Terraform Variable', link: '/LnuxBasics/Terraform/Terraform Variable' },
        { text: 'index', link: '/LnuxBasics/Terraform/index' },
        { text: 'Useful Command', link: '/LnuxBasics/Useful Command' },
        { text: 'Vagrant', link: '/LnuxBasics/Vagrant' },
        ]
    },
    // {
    //   text: '/LnuxBasics/Web Servers',
    //   items: [
    //     ]
    // },
    {
      text: '网页服务器 - Apache',
      items: [
        { text: 'LAMP 快速部署', link: '/LnuxBasics/Web Servers/Apache/LAMP 快速部署' },
        { text: 'index', link: '/LnuxBasics/Web Servers/Apache/index' },
        ]
    },
    {
      text: '网页服务器 - Jvm & Tomcat',
      items: [
        { text: 'Jvm Monitor Tools', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Jvm Monitor Tools' },
        { text: 'Tomcat Basic', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Tomcat Basic' },
        { text: 'Tomcat Cluster(nginx)', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Tomcat Cluster(nginx)' },
        { text: 'Tomcat Session(Redis with Nginx)', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Tomcat Session(Redis with Nginx)' },
        { text: 'Tomcat Session(memcached)', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Tomcat Session(memcached)' },
        { text: 'Tomcat 调优', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Tomcat 调优' },
        { text: 'Tomcat 常用设置及安全管理规范', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Tomcat 常用设置及安全管理规范' },
        { text: 'Tomcat中间件方方面面储备知识', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/Tomcat中间件方方面面储备知识' },
        { text: 'index', link: '/LnuxBasics/Web Servers/Jvm & Tomcat/index' },
        ]
    },
    {
      text: '网页服务器 - Nginx',
      items: [
        { text: 'HTTPS  配置及优化', link: '/LnuxBasics/Web Servers/Nginx/HTTPS  配置及优化' },
        { text: 'Nginx + uWSGI 部署Django', link: '/LnuxBasics/Web Servers/Nginx/Nginx + uWSGI 部署Django' },
        { text: 'Nginx Cache', link: '/LnuxBasics/Web Servers/Nginx/Nginx Cache' },
        { text: 'Nginx Rewrite', link: '/LnuxBasics/Web Servers/Nginx/Nginx Rewrite' },
        { text: 'Nginx try_files', link: '/LnuxBasics/Web Servers/Nginx/Nginx try_files' },
        { text: 'Nginx 内置变量', link: '/LnuxBasics/Web Servers/Nginx/Nginx 内置变量' },
        { text: 'Nginx 反向代理', link: '/LnuxBasics/Web Servers/Nginx/Nginx 反向代理' },
        { text: 'Nginx 爬虫限制', link: '/LnuxBasics/Web Servers/Nginx/Nginx 爬虫限制' },
        { text: 'Nginx 负载均衡', link: '/LnuxBasics/Web Servers/Nginx/Nginx 负载均衡' },
        { text: 'Nginx 高级模块', link: '/LnuxBasics/Web Servers/Nginx/Nginx 高级模块' },
        { text: 'Nginx 快速配置手册', link: '/LnuxBasics/Web Servers/Nginx/Nginx 快速配置手册' },
        { text: 'Nginx 编译及制作包', link: '/LnuxBasics/Web Servers/Nginx/Nginx 编译及制作包' },
        { text: 'Nginx 平滑升级与回滚', link: '/LnuxBasics/Web Servers/Nginx/Nginx 平滑升级与回滚' },
        { text: 'Nginx 性能优化与安全', link: '/LnuxBasics/Web Servers/Nginx/Nginx 性能优化与安全' },
        ]
    },
    {
      text: '网页服务器 - Nginx/Others',
      items: [
        { text: 'Node.js with ssl & nginx', link: '/LnuxBasics/Web Servers/Nginx/Others/Node.js with ssl & nginx' },
        { text: 'index', link: '/LnuxBasics/Web Servers/Nginx/Others/index' },
        { text: '使用logrotate切割nginx日志', link: '/LnuxBasics/Web Servers/Nginx/Others/使用logrotate切割nginx日志' },
        { text: '检查服务器是否支持gzip', link: '/LnuxBasics/Web Servers/Nginx/Others/检查服务器是否支持gzip' },
        ]
    },
    {
      text: '网页服务器 - Nginx/Problems',
      items: [
        { text: 'index', link: '/LnuxBasics/Web Servers/Nginx/Problems/index' },
        { text: 'rewrite参数处理问题', link: '/LnuxBasics/Web Servers/Nginx/Problems/rewrite参数处理问题' },
        { text: 'index', link: '/LnuxBasics/Web Servers/Nginx/index' },
        ]
    },
    {
      text: '网页服务器 - PHP',
      items: [
        { text: 'PHP 优化及安全配置', link: '/LnuxBasics/Web Servers/PHP/PHP 优化及安全配置' },
        { text: 'index', link: '/LnuxBasics/Web Servers/PHP/index' },
        ]
    },
    {
      text: '网页服务器 - Python Django',
      items: [
        { text: 'Access to Database', link: '/LnuxBasics/Web Servers/Python Django/Access to Database' },
        { text: 'Django Basic', link: '/LnuxBasics/Web Servers/Python Django/Django Basic' },
        { text: 'index', link: '/LnuxBasics/Web Servers/Python Django/index' },
        { text: 'index', link: '/LnuxBasics/Web Servers/index' },
        { text: 'Windows useful cmd', link: '/LnuxBasics/Windows useful cmd' },
        { text: 'WireGuard VPN for Ubuntu', link: '/LnuxBasics/WireGuard VPN for Ubuntu' },
        { text: 'WireShark Filter', link: '/LnuxBasics/WireShark Filter' },
        ]
    },
    {
      text: 'Zabbix',
      items: [
        { text: 'Zabbix Basic', link: '/LnuxBasics/Zabbix/Zabbix Basic' },
        { text: 'Zabbix 详细介绍', link: '/LnuxBasics/Zabbix/Zabbix 详细介绍' },
        { text: 'index', link: '/LnuxBasics/Zabbix/index' },
        ]
    },
    {
      text: 'Zookeeper',
      items: [
        { text: 'Zookeeper Basic', link: '/LnuxBasics/Zookeeper/Zookeeper Basic' },
        { text: 'index', link: '/LnuxBasics/Zookeeper/index' },
        { text: 'dnsmasq', link: '/LnuxBasics/dnsmasq' },
        { text: 'inotifywait 文件监控', link: '/LnuxBasics/inotifywait 文件监控' },
        { text: 'k3s & k3d Basic', link: '/LnuxBasics/k3s & k3d Basic' },
        { text: 'keepalived', link: '/LnuxBasics/keepalived' },
        { text: 'lsyncd', link: '/LnuxBasics/lsyncd' },
        { text: 'lvm 讲解', link: '/LnuxBasics/lvm 讲解' },
        { text: 'rsync + inotify(sersync)', link: '/LnuxBasics/rsync + inotify(sersync)' },
        { text: 'vim tricks', link: '/LnuxBasics/vim tricks' },
        ]
    }
	]
}

function ProgramLang(){
	return [

    {
      text: '编程语言 - Golang',
      items: [
        { text: 'Golang Basic', link: '/ProgramLang/Golang/Golang Basic' },
        { text: 'Golang Errors&handler', link: '/ProgramLang/Golang/Golang Errors&handler' },
        { text: 'Golang File Operate', link: '/ProgramLang/Golang/Golang File Operate' },
        { text: 'Golang Function', link: '/ProgramLang/Golang/Golang Function' },
        { text: 'Golang Interface', link: '/ProgramLang/Golang/Golang Interface' },
        { text: 'Golang Json', link: '/ProgramLang/Golang/Golang Json' },
        { text: 'Golang Package manage', link: '/ProgramLang/Golang/Golang Package manage' },
        { text: 'Golang Pkgs', link: '/ProgramLang/Golang/Golang Pkgs' },
        { text: 'Golang Pointer', link: '/ProgramLang/Golang/Golang Pointer' },
        { text: 'Golang Project Layout', link: '/ProgramLang/Golang/Golang Project Layout' },
        { text: 'Golang Testing', link: '/ProgramLang/Golang/Golang Testing' },
        { text: 'Golang fmt占位符', link: '/ProgramLang/Golang/Golang fmt占位符' },
        { text: 'Golang 并发', link: '/ProgramLang/Golang/Golang 并发' },
        { text: 'String Operate', link: '/ProgramLang/Golang/String Operate' },
        { text: 'index', link: '/ProgramLang/Golang/index' },
        ]
    },
    {
      text: '编程语言 - Lua',
      items: [
        { text: 'Lua Baisc', link: '/ProgramLang/Lua/Lua Baisc' },
        { text: 'Lua continue Ex', link: '/ProgramLang/Lua/Lua continue Ex' },
        { text: 'index', link: '/ProgramLang/Lua/index' },
        ]
    }
	]
}

function Scripts(){
	return [
    {
      text: 'Shell 脚本',
      items: [
        // {
        //   text: '/Scripts/golang',
        //   items: [
        //     ]
        // },
        // {
        //   text: '/Scripts/python',
        //   items: [
        //     ]
        // },

        { text: 'CentOS sys information', link: '/Scripts/shell/CentOS sys information' },
        { text: 'Dokcer 镜像备份', link: '/Scripts/shell/Dokcer 镜像备份' },
        { text: 'Nginx Log Check', link: '/Scripts/shell/Nginx Log Check' },
        { text: 'Redis tools', link: '/Scripts/shell/Redis tools' },
        { text: 'Rsync', link: '/Scripts/shell/Rsync' },
        { text: 'Shell 并发', link: '/Scripts/shell/Shell 并发' },
        { text: 'index', link: '/Scripts/shell/index' },
        ]
    },
        {
          text: 'Windows 脚本',
          items: [
        { text: '通用修改dns', link: '/Scripts/windows/通用修改dns' },
            ]
        },
    {
      text: '/Scripts/shell/resort-file-from-csv',
      items: [
        { text: 'index', link: '/Scripts/shell/resort-file-from-csv/index' },
        { text: 'resort-file', link: '/Scripts/shell/resort-file-from-csv/resort-file' },
        { text: '日常巡检Shell', link: '/Scripts/shell/日常巡检Shell' },
        ]
    }
	]
}