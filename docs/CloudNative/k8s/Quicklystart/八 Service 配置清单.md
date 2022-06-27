# 八 Service 配置清单

Service 为 POD 控制器控制的 POD 集群提供一个固定的访问端点，Service 的工作还依赖于 K8s 中的一个附件，就是 CoreDNS ，它将 Service 地址提供一个域名解析。

## 8.1 Service 工作模式

1.  userspace: 1.1 之前版本
2.  iptables: 1.10 之前版本
3.  ipvs：1.11 之后版本

## 8.2 Service 类型

| 类型         | 作用                                                    |
| ------------ | ------------------------------------------------------- |
| ClusterIP    | 默认值，分配一个 Service 网络的地址，仅用于集群内部通信 |
| NodePort     | 如果需要集群外部访问，可以使用这个类型                  |
| ExternalName | 把集群外部的服务引入到集群内部，方便在集群内部使用      |
| LoadBalancer | K8S 工作在云环境中，调用云环境创建负载均衡器            |

## 8.3 资源记录

SVC_NAME.NS_NAME.DOMAIN.LTD

例如：redis.default.svc.cluster.local.

## 8.4 Service 清单

*   清单组成

```bash
apiVersion	<string>    # api 版本号，v1
kind	    <string>    # 资源类别，标记创建什么类型的资源
metadata    <Object>    # POD 元数据
spec	    <Object>    # 元数据
```

## 8.5 service.spec 规范

1.  clusterIP：指定 Service 处于 service 网络的哪个 IP，默认为动态分配
2.  type： service 类型，可用：ExternalName, ClusterIP, NodePort, and LoadBalancer

## 8.6 ClusterIP 类型的 service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: redis
  namespace: default
spec:
  selector:
    app: redis
    role: logstor
  type: ClusterIP
  clusterIP: 10.96.0.100
  ports:
    - port: 6379         # service 端口
      targetPort: 6379   # pod 监听的端口
      protocol: TCP
```

## 8.7 NodePort 类型的 service

NodePort 是在 ClusterIP 类型上增加了一个暴露在了 node 的网络命名空间上的一个 nodePort，所以用户可以从集群外部访问到集群了，因而用户的请求流程是：Client -> NodeIP:NodePort -> ClusterIP:ServicePort -> PodIP:ContainerPort。

可以理解为 NodePort 增强了 ClusterIP 的功能，让客户端可以在每个集群外部访问任意一个 nodeip 从而访问到 clusterIP，再由 clusterIP 进行负载均衡至 POD。

*   清单示例

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp
  namespace: default
spec:
  selector:
    app: myapp
    release: canary
  type: NodePort
  ports:
    - port: 80         # service 端口
      targetPort: 80   # pod 监听的端口
      nodePort: 30080    # service 会在每个 node 上添加 iptables/ipvs 规则重定向这个端口的访问，所以必须保证所有 node 的这个端口没被占用
      protocol: TCP
```

```bash
在集群外部就可以使用: http://172.16.100.102:30080 来访问这个 service 地址了
```

```bash
在集群内可以使用 service 的域名在 coredns 上解析得到 service 地址: dig -t A myapp.default.svc.cluster.local @10.96.0.10
```

## 8.8 loadBalancerIP 类型

service 在每台主机的 iptables/ipvs 规则内，访问任意一台 node 都可以到达 pod，所以应该在这些 nodeip 前加负载均衡器，如果工作在公有云，可以使用 k8s 内置的 loadBalancerIP，操作公有云的负载均衡器即服务，实现动态的增删。

可以理解为 loadBalancerIP 增强了 NodePort 类型的 service ，在集群外部对每台 nodeip 进行负载均衡。

## 8.9 无集群地址的 Service

无头 service 表示 service 没有 ClusterIP 也不映射 NodePort，而是将 service 的域名直接解析为 nodeIP 从而直接访问 nodeIP 上的 POD。

-   清单示例

```
apiVersion: v1
kind: Service
metadata:
  name: myapp-nohead
  namespace: default
spec:
  selector:
    app: myapp-nohead
    release: canary
  type: ClusterIP
  clusterIP: None
  ports:
    - port: 80         # service 端口
      targetPort: 80   # pod 监听的端口
```

-   查看 CoreDNS 服务器的地址

```bash
kubectl get svc -n kube-system
```

-   在集群内使用 CoreDNS 的地址解析无头的 serive 域名，得到的直接为 nodeip 中的 pod 地址，利用 dns 的多条 A 记录来负载均衡

```bash
dig -t A myapp-nohead.default.svc.cluster.local. @10.96.0.10
```

```
;; ANSWER SECTION:
myapp-nohead.default.svc.cluster.local.	5 IN A	10.244.1.75
myapp-nohead.default.svc.cluster.local.	5 IN A	10.244.2.74
```

## 8.10 externalName 类型

当 POD 需要访问一个集群外部的服务时候，externalName 可以映射一个集群外部的服务到集群内部，供集群内 POD 访问。

就是把外部的一个域名地址，映射为集群内部 coredns 解析的一个内部地址，提供集群内部访问。
