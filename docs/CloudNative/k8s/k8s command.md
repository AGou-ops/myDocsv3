# Kubernetes CLI command -- kubectl

## 基础命令

- `kubectl cluster-info`: 查看集群状态;
- `kubectl get pods --selector="name=bad-frontend"`: 指定查看pod的`name`属性;
- `kubectl expose deployment first-deployment --port=80 --type=NodePort`: 暴露指定端口, 以及指定类型;
- `kubectl get svc first-deployment -o go-template='【【range.spec.ports】】【【if .nodePort】】【【.nodePort】】【【"\n"】】【【end】】【【end】】'`: 获取` service `暴露的端口;
  - [使用`jsonpath`获取]: `kubectl get svc first-deployment -o jsonpath='{.spec..ports[0].nodePort}'`
- 【新版本已弃用】`kubectl run http --image=katacoda/docker-http-server:latest --replicas=1`: 手动运行一个`deployment`并指定其`pod`镜像;
  - `kubectl expose deployment http --external-ip="172.17.0.42" --port=8000 --target-port=80`: 暴露端口及访问地址;
  - 或者直接使用: `kubectl run httpexposed --image=katacoda/docker-http-server:latest --replicas=1 --port=80 --hostport=8001`
- `kubectl exec -it POD_NAME -c CONTAINTER_NAME -- bin/sh`: 进入一个含有多个容器的pod;
- `kubectl scale --replicas=3 deployment http`: 扩容;
- `kubectl set image deployment.v1.apps/nginx-deployment nginx=nginx:1.9.1 --record`: 更新镜像;
- `kubectl set resources deployment nginx -c =nginx --limits =cpu=200m,memory =512Mi`: 更新资源使用;
- `kubectl patch deployments myapp-deploy -p '{ "spec": {"replicas":5}}'`: 打补丁;
- `kubectl rollout history deployment.v1.apps/nginx-deployment --revision=2`：查看历史修订的详细信息；
- `kubectl rollout undo deployment myapp-deploy --to-revision=2`: 回滚至指定版本;
- `kubectl rollout status deployments myapp-deploy`: 回滚操作状态信息;
- `kubectl rollout pause deployment/myapp-deploy`: 暂停更新deployment(用于多次更新deployment);
  - `kubectl rollout resume deployment/myapp-deploy`: 恢复更新deployment;
- `kubectl get pods -l 'environment in (production),tier in (frontend)'`: 过滤显示指定标签的pod;
  - `kubectl get pods -l environment=production,tier=frontend`
- `kubectl apply-validate-f pod.yaml`: 检查yaml文件格式是否有错误之处;
- `kubectl apply -R DIR/`: 递归应用目录中的配置清单文件;
- `kubectl get componentstatuses`: 检查控制平台组件的状态；
- `kubectl logs kube-scheduler-master01 -n kube-system`：获取调度器日志，包括调度记录，打分记录等；

## cluster 快速部署

```bash
# 使用轻量级容器引擎crio, 需要提前安装
# systemctl restart crio
kubeadm init --token=102952.1a7dd4cc8d1f4cc5 --kubernetes-version $(kubeadm version -o short)
# 初始化时调用crio引擎
# kubeadm init --cri-socket=/var/run/crio/crio.sock --kubernetes-version $(kubeadm version -o short)

# 初始化完毕之后, crio查看容器运行状态
# crictl ps
sudo cp /etc/kubernetes/admin.conf $HOME/
sudo chown $(id -u):$(id -g) $HOME/admin.conf
export KUBECONFIG=$HOME/admin.conf

kubectl apply -f /opt/weave-kube.yaml

kubectl get pod -n kube-system

kubeadm token list

kubeadm join --discovery-token-unsafe-skip-ca-verification --token=102952.1a7dd4cc8d1f4cc5 172.17.0.66:6443
```

By default, the `crictl` CLI is configured to communicate with the runtime by the config file at `cat /etc/crictl.yaml`

dashboard 账户认证(token):

```yaml
cat <<EOF | kubectl create -f - 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kube-system
EOF
```

获取token:

```bash
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}')
```

## 附录



## 参考链接

- kubectl commands offical documentation: https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands