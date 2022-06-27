# Helm Basic

> ## The package manager for Kubernetes
>
> ### Helm is the best way to find, share, and use software built for Kubernetes.

## Helm Installation

### From the Binary Releases

Every [release](https://github.com/helm/helm/releases) of Helm provides binary releases for a variety of OSes. These binary versions can be manually downloaded and installed.

1. Download your [desired version](https://github.com/helm/helm/releases)
2. Unpack it (`tar -zxvf helm-v2.0.0-linux-amd64.tgz`)
3. Find the `helm` binary in the unpacked directory, and move it to its desired destination (`mv linux-amd64/helm /usr/local/bin/helm`)

## Helm command

:information_source:注意: 以下使用的均为`Helm v3.0+`版本, `helm v2.0+`版本略有不同.

- 查看当前仓库信息

```bash
$ helm repo list
NAME    URL
enapter https://enapter.github.io/charts/
hkube   https://hkube.io/helm
```

- 添加仓库

```bash
$ helm repo add https://enapter.github.io/charts/
```

- 其他`repo`相关子命令

```bash
$ helm remove <REPO_NAME> 	# 移除一个仓库
$ helm repo update		# 同步仓库内容
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "enapter" chart repository
...Successfully got an update from the "hkube" chart repository
Update Complete. ⎈Happy Helming!⎈
```

- 搜寻本地/远程仓库中的`charts`

```bash
# 获取所有
$ helm search hub
URL                                                     CHART VERSION           APP VERSION                             DESCRIPTION      
https://hub.helm.sh/charts/citrix/citrix-cloud-...      1.0.0                   1.0.0                                   A Helm chart for deploying all Citrix Cloud Nat...
https://hub.helm.sh/charts/citrix/citrix-node-c...      2.0.0                   2.0.0                                   A Helm chart for Citrix k8s node controller
https://hub.helm.sh/charts/citrix/citrix-ipam-c...      0.0.1                   0.0.1                                   A Helm chart for Citrix IPAM Controller which a...
https://hub.helm.sh/charts/citrix/citrix-observ...      1.2.001                 1.2.001                                 A Helm chart for Citrix Observability Exporter
...
# 获取hub上的指定charts
$ helm search hub redis-ha
URL                                                     CHART VERSION   APP VERSION     DESCRIPTION                                      
https://hub.helm.sh/charts/stable/redis-ha              4.4.4           5.0.6           Highly available Kubernetes implementation of R...
https://hub.helm.sh/charts/hkube/redis-ha               3.6.1005        5.0.5           Highly available Kubernetes implementation of R...
https://hub.helm.sh/charts/dandydeveloper/redis-ha      4.9.3           5.0.6           Highly available Kubernetes implementation of R...
# 获取本地charts
$ helm search repo redis
NAME            CHART VERSION   APP VERSION     DESCRIPTION
hkube/redis-ha  3.6.1005        5.0.5           Highly available Kubernetes implementation of R...
enapter/keydb   0.14.0          6.0.16          A Helm chart for KeyDB multimaster setup
```


- 查看`chart`的介绍信息

```bash
$ helm inspect chart hkube/redis-ha
apiVersion: v1
appVersion: 5.0.5
description: Highly available Kubernetes implementation of Redis
home: http://redis.io/
icon: https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Redis_Logo.svg/1200px-Redis_Logo.svg.png
keywords:
- redis
- keyvalue
- database
maintainers:
- email: salimsalaues@gmail.com
  name: ssalaues
name: redis-ha
sources:
- https://redis.io/download
- https://github.com/scality/Zenko/tree/development/1.0/kubernetes/zenko/charts/redis-ha
- https://github.com/oliver006/redis_exporter
version: 3.6.1005
```

- 安装`chart`

```bash
$ helm install hkube/redis-ha --version 3.6.1005  --generate-name
```

- 其他`install`相关子命令

```bash
# 安装本地chart
$ helm install -f myvalues.yaml myredis ./redis
* `-f`: 指明文件,覆盖变量
* `--set name=prod`: 命令行合并或覆盖变量
$ helm install --dry-run --debug --set test_var=NEW test ../../test/
```

- 卸载`chart`

```bash
$ helm uninstall redis-ha-1601859332
release "redis-ha-1601859332" uninstalled
```

- 下载并解压缩`chart`

```bash
$ helm pull hkube/redis-ha --untar --untardir .
```

- 打包`chart`

```bash
$ helm package keydb
```

- 拉取依赖

```bash
$ helm dependency update
```



## 自定义`chart`

创建自定义`chart`:

```bash
$ helm create mychart
# 初始化目录如下所示
$ helm create mychart
Creating mychart
$ tree mychart/
mychart/
├── Chart.yaml
├── charts
├── templates
│   ├── NOTES.txt
│   ├── _helpers.tpl
│   ├── deployment.yaml
│   ├── hpa.yaml
│   ├── ingress.yaml
│   ├── service.yaml
│   ├── serviceaccount.yaml
│   └── tests
│       └── test-connection.yaml
└── values.yaml

3 directories, 10 files
```

`Chart.yaml`文件是chart必需的。包含了以下字段：

```yaml
apiVersion: chart API 版本 （必需）
name: chart名称 （必需）
version: 语义化2 版本（必需）
kubeVersion: 兼容Kubernetes版本的语义化版本（可选）	示例: >= 1.13.0 < 1.15.0
description: 一句话对这个项目的描述（可选）
type: chart类型 （可选）
keywords:
  - 关于项目的一组关键字（可选）
home: 项目home页面的URL （可选）
sources:
  - 项目源码的URL列表（可选）
dependencies: # chart 必要条件列表 （可选）
  - name: chart名称 (nginx)
    version: chart版本 ("1.2.3")
    repository: 仓库URL ("https://example.com/charts") 或别名 ("@repo-name")
    condition: （可选） 解析为布尔值的yaml路径，用于启用/禁用chart (e.g. subchart1.enabled )
    tags: # （可选）
      - 用于一次启用/禁用 一组chart的tag
    enabled: （可选） 决定是否加载chart的布尔值
    import-values: # （可选）
      - ImportValue 保存源值到导入父键的映射。每项可以是字符串或者一对子/父列表项
    alias: （可选） chart中使用的别名。当你要多次添加相同的chart时会很有用
maintainers: # （可选）
  - name: 维护者名字 （每个维护者都需要）
    email: 维护者邮箱 （每个维护者可选）
    url: 维护者URL （每个维护者可选）
icon: 用做icon的SVG或PNG图片URL （可选）
appVersion: 包含的应用版本（可选）。不需要是语义化的
deprecated: 不被推荐的chart/被弃用chart （可选，布尔值）
annotations:
  example: 按名称输入的批注列表 （可选）.
```

其他字段将被忽略。

### 全局`value`

从2.0.0-Alpha.2开始，Helm 支持特殊的"global"值。(如果不单独设置, 则`charts`文件夹中的chart无法共享使用该变量)

```yaml
global:
  app: MyWordPress
```

上面添加了`global`部分和一个值`app: MyWordPress`。这个值以`.Values.global.app`在 _所有_ chart中有效, **父chart的全局变量优先于子chart中的全局变量。**



## 参考链接

- Helm Docs: https://v2.helm.sh/docs
- Helm commands: https://helm.sh/docs/helm/
- Helm Variables: https://helm.sh/docs/chart_template_guide/builtin_objects/