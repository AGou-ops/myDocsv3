# Kubernetes REST API

## 从 Pod 中访问 API 

从 Pod 内部访问 API 时，定位 API 服务器和向服务器认证身份的操作 与外部客户端场景不同。

从 Pod 使用 Kubernetes API 的最简单的方法就是使用官方的 [客户端库](https://kubernetes.io/zh/docs/reference/using-api/client-libraries/)。 这些库可以自动发现 API 服务器并进行身份验证。

## 使用官方客户端库 

从一个 Pod 内部连接到 Kubernetes API 的推荐方式为：

- 对于 Go 语言客户端，使用官方的 [Go 客户端库](https://github.com/kubernetes/client-go/)。 函数 `rest.InClusterConfig()` 自动处理 API 主机发现和身份认证。 参见[这里的一个例子](https://git.k8s.io/client-go/examples/in-cluster-client-configuration/main.go)。
- 对于 Python 客户端，使用官方的 [Python 客户端库](https://github.com/kubernetes-client/python/)。 函数 `config.load_incluster_config()` 自动处理 API 主机的发现和身份认证。 参见[这里的一个例子](https://github.com/kubernetes-client/python/blob/master/examples/in_cluster_config.py)。
- 还有一些其他可用的客户端库，请参阅[客户端库](https://kubernetes.io/zh/docs/reference/using-api/client-libraries/)页面。

在以上场景中，客户端库都使用 Pod 的服务账号凭据来与 API 服务器安全地通信。

## 直接访问 REST API 

在运行在 Pod 中时，可以通过 `default` 命名空间中的名为 `kubernetes` 的服务访问 Kubernetes API 服务器。也就是说，Pod 可以使用 `kubernetes.default.svc` 主机名 来查询 API 服务器。官方客户端库自动完成这个工作。

向 API 服务器进行身份认证的推荐做法是使用 [服务账号](https://kubernetes.io/zh/docs/tasks/configure-pod-container/configure-service-account/)凭据。 默认情况下，每个 Pod 与一个服务账号关联，该服务账户的凭证（令牌）放置在此 Pod 中 每个容器的文件系统树中的 `/var/run/secrets/kubernetes.io/serviceaccount/token` 处。

如果证书包可用，则凭证包被放入每个容器的文件系统树中的 `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt` 处， 且将被用于验证 API 服务器的服务证书。

最后，用于命名空间域 API 操作的默认命名空间放置在每个容器中的 `/var/run/secrets/kubernetes.io/serviceaccount/namespace` 文件中。

## 使用 kubectl proxy 

如果你希望不使用官方客户端库就完成 API 查询，可以将 `kubectl proxy` 作为 [command](https://kubernetes.io/zh/docs/tasks/inject-data-application/define-command-argument-container/) 在 Pod 中启动一个边车（Sidecar）容器。这样，`kubectl proxy` 自动完成对 API 的身份认证，并将其暴露到 Pod 的 `localhost` 接口，从而 Pod 中的其他容器可以 直接使用 API。

## 不使用代理 

通过将认证令牌直接发送到 API 服务器，也可以避免运行 kubectl proxy 命令。 内部的证书机制能够为链接提供保护。

```shell
# 指向内部 API 服务器的主机名
APISERVER=https://kubernetes.default.svc

# 服务账号令牌的路径
SERVICEACCOUNT=/var/run/secrets/kubernetes.io/serviceaccount

# 读取 Pod 的名字空间
NAMESPACE=$(cat ${SERVICEACCOUNT}/namespace)

# 读取服务账号的持有者令牌
TOKEN=$(cat ${SERVICEACCOUNT}/token)

# 引用内部证书机构（CA）
CACERT=${SERVICEACCOUNT}/ca.crt

# 使用令牌访问 API
curl --cacert ${CACERT} --header "Authorization: Bearer ${TOKEN}" -X GET ${APISERVER}/api
```

输出类似于：

```json
{
  "kind": "APIVersions",
  "versions": [
    "v1"
  ],
  "serverAddressByClientCIDRs": [
    {
      "clientCIDR": "0.0.0.0/0",
      "serverAddress": "10.0.1.149:443"
    }
  ]
}
```

## 使用ambassador容器简化访问

`Dockerfile`以及jio本文件：

```bash
# Dockerfile
FROM alpine
RUN apk update && apk add curl && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && chmod +x kubectl

ADD kubectl-proxy.sh /kubectl-proxy.sh
ENTRYPOINT /kubectl-proxy.sh

# kubectl-proxy.sh
#!/bin/sh

API_SERVER="https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_SERVICE_PORT"
CA_CRT="/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"
TOKEN="$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)"

/kubectl proxy --server="$API_SERVER" --certificate-authority="$CA_CRT" --token="$TOKEN" --accept-paths='^.*'
```

测试样例：

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-with-kubeapi
spec:
  containers:
  - name: main
    image: curlimages/curl
    imagePullPolicy: IfNotPresent
    command:
      - "/bin/sh"
    args:
      - "-c"
      - "sleep 99999s"
  - name: ambassador
    image: suofeiya/kube-api:v1.1
    imagePullPolicy: IfNotPresent
```

连入`main`容器通过代理访问`kubernetes API`：

```bash
$ kubectl exec pod-with-kubeapi -c main -- curl  localhost:8001/apis/batch/v1
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1278  100  1278    0     0   181k      0 --:--:-- --:--:-- --:--:--  {  0
  "kind": "APIResourceList",
  "apiVersion": "v1",
  "groupVersion": "batch/v1",
  "resources": [
    {
      "name": "cronjobs",
      "singularName": "",
      "namespaced": true,
      "kind": "CronJob",
      "verbs": [
        "create",
        "delete",
        "deletecollection",
        "get",
        "list",
        "patch",
        "update",
        "watch"
      ],
      "shortNames": [
        "cj"
      ],
      "categories": [
        "all"
      ],
      "storageVersionHash": "sd5LIXh4Fjs="
    },
    {
      "name": "cronjobs/status",
      "singularName": "",
      "namespaced": true,
      "kind": "CronJob",
      "verbs": [
        "get",
        "patch",
        "update"
      ]
    },
    {
      "name": "jobs",
      "singularName": "",
      "namespaced": true,
      "kind": "Job",
      "verbs": [
        "create",
        "delete",
        "deletecollection",
        "get",
        "list",
        "patch",
        "update",
        "watch"
      ],
      "categories": [
        "all"
      ],
      "storageVersionHash": "mudhfqk/qZY="
    },
    {
      "name": "jobs/status",
      "singularName": "",
      "namespaced": true,
      "kind": "Job",
      "verbs": [
        "get",
        "patch",
        "update"
      ]
    }
  ]
}208k
```

:smile: Success.

## 参考链接

- access api from pod: [https://kubernetes.io/zh/docs/tasks/run-application/access-api-from-pod/](https://kubernetes.io/zh/docs/tasks/run-application/access-api-from-pod/)

