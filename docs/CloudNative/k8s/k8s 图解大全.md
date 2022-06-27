# k8s图解大全

### Kubernetes 概括

#### Kubernetes 基础架构

![Overview of Kubernetes' basic architecture](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/k8s-architecture.svg)

#### Kubernetes 负载对象

![Overview of Kubernetes Workload objects](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/k8s-workloads-20220509101507789.svg)



#### Kubernetes 网络

![Overview of Kubernetes Networking objects](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/k8s-network.svg)

#### Kubernetes 存储

![Overview of Kubernetes Storage objects](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/k8s-storage.svg)



#### Kubernetes RBAC

![Overview of Kubernetes RBAC objects](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/k8s-rbac-20220509102242675.svg)

#### Kubernetes 资源请求和限制

![Overview of Kubernetes resources requests and limits](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/k8s-resources.svg)

### Kubernetes 单个组件

#### pod底层网络和数据存储

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjgwODE4,size_16,color_FFFFFF,t_70.png)



**pod 底层**

- pod 内部容器创建之前，必须先创建 pause 容器。pause 有两个作用：**共享网络和共享存储**。
- 每个服务容器共享 pause 存储，不需要自己存储数据，都交给 pause维护。
- pause 也相当于这三个容器的网卡，因此他们之间的访问可以通过 localhost 方式访问，相当于访问本地服务一样，性能非常高（就像本地几台虚拟机之间可以 ping 通）。

#### service实现服务发现（kube-proxy）

![图片](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/640-20220509090419888.png)



- service 实现服务的发现：kube-proxy 监控 pod，一旦发现 pod 服务变化，将会把新的 ip 地址更新到 service。

注意：endpoints 那些都是存储在 etcd 里的，所以 kube-proxy 更新的存储在 etcd 里的映射关系。

> 以上部分图源于网络。

