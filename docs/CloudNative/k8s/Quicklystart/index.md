# Kubernetes 快速手册

> 变更日志：
>
> - 2021年09月13日：初始化，增加参考链接；

目录：

- [一 Kubernetes概述](/myDocs/k8s/一%20Kubernetes概述)
- [二 核心组件及附件](/myDocs/k8s/二%20核心组件及附件)
- [三 集群部署](/myDocs/k8s/三%20集群部署)
- [四 入门命令](/myDocs/k8s/四%20入门命令)
- [五 配置清单使用](/myDocs/k8s/五%20配置清单使用)
- [六 POD 配置清单](/myDocs/k8s/六%20POD%20配置清单)
- [七 控制器配置清单](/myDocs/k8s/七%20控制器配置清单)
- [八 Service配置清单](/myDocs/k8s/八%20Service%20配置清单)
- [九 ingress控制器](/myDocs/k8s/九%20ingress%20控制器)
- [十 POD 存储卷](/myDocs/k8s/十%20POD%20存储卷)
- [十一 配置信息容器化](/myDocs/k8s/十一%20配置信息容器化)
- [十二 StatefulSet控制器](/myDocs/k8s/十二%20StatefulSet%20控制器)
- [十三 用户认证系统](/myDocs/k8s/十三%20用户认证系统)
- [十四 用户权限系统](/myDocs/k8s/十四%20用户权限系统)
- [十五 dashboard](/myDocs/k8s/十五%20dashboard)
- [十六 网络通信](/myDocs/k8s/十六%20网络通信)
- [十七 调度策略](/myDocs/k8s/十七%20调度策略)
- [十八 高级调度设置](/myDocs/k8s/十八%20高级调度设置)
- [十九 容器资源限制](/myDocs/k8s/十九%20容器资源限制)

我的：

- [AGou's Docs -- Kubernetes笔记](https://agou-ops.cn/myDocs/post/Docker%20&%20Kubernetes%20&%20Micro%20Services/Kubernetes/)
- [AGou's Blog -- Kubernetes快速入门](https://agou-ops.cn/post/k8s/01-%E5%88%9D%E6%8E%A2kubernetes%E5%8A%9F%E8%83%BD%E4%B8%8E%E7%BB%84%E4%BB%B6/)**【文档内容来源于网络，仅做备份】**

## 参考链接

- awesome-kubernetes-notes:checkered_flag: :[https://awesome-kubernetes-notes.readthedocs.io/en/latest/](https://awesome-kubernetes-notes.readthedocs.io/en/latest/) **【源作者，在此基础上按照个人所需进行修改】**
- Kubernetes官网教程: [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
- Kubernetes中文社区: [https://www.kubernetes.org.cn/k8s](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
- An Ultimate Kubernetes Hands-on Labs: [https://kubelabs.collabnix.com/](https://kubelabs.collabnix.com/)
- Kubernetes HandBook: [https://www.bookstack.cn/read/feiskyer-kubernetes-handbook-202005/README.md](https://www.bookstack.cn/read/feiskyer-kubernetes-handbook-202005/README.md)
- 从Kubernetes到Cloud Native: [https://jimmysong.io/kubernetes-handbook/cloud-native/from-kubernetes-to-cloud-native.html](https://jimmysong.io/kubernetes-handbook/cloud-native/from-kubernetes-to-cloud-native.html)
- Kubernetes Handbook: [https://www.bookstack.cn/read/feiskyer-kubernetes-handbook/appendix-ecosystem.md](https://www.bookstack.cn/read/feiskyer-kubernetes-handbook/appendix-ecosystem.md)
- Kubernetes从入门到实战: [https://www.kancloud.cn/huyipow/kubernetes/722822](https://www.kancloud.cn/huyipow/kubernetes/722822)
- Kubernetes指南: [https://kubernetes.feisky.xyz/](https://kubernetes.feisky.xyz/)
- awesome-kubernetes: [https://ramitsurana.github.io/awesome-kubernetes/](https://ramitsurana.github.io/awesome-kubernetes/)
- 从Docker到Kubernetes进阶: [https://www.qikqiak.com/k8s-book/](https://www.qikqiak.com/k8s-book/)
- python微服务实战: [https://www.qikqiak.com/tdd-book/](https://www.qikqiak.com/tdd-book/)
- 云原生之路: [https://jimmysong.io/kubernetes-handbook/cloud-native/from-kubernetes-to-cloud-native.html](https://jimmysong.io/kubernetes-handbook/cloud-native/from-kubernetes-to-cloud-native.html)
- CNCF Cloud Native Interactive Landscape: [https://landscape.cncf.io/](https://landscape.cncf.io/)
