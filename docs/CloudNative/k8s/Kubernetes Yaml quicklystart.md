# Kubernetes YAML file quicklystart

[toc]

## 1.集群级别资源

### 1.1.namespace资源清单文件

```yaml
apiVersion: v1					# api版本
kind: Namespace					# 资源类型
metadata:						# 元数据
  name: dev						# namespace的名称
```

## 2.pod资源

### 2.1.pod资源清单文件-涵盖全部参数

```yaml
apiVersion: v1			 # 必选,版本号,例如v1
kind: Pod				# 必选,资源类型,例如 Pod
metadata:				# 必选,元数据
  name : string			 # 必选,Pod名称
  namespace: string 		# Pod所属的命名空间，默认为" default"labels:
  labels:					# 自定义标签列表
    - namd: string
spec:						# 必选,Pod中容器的详细定义 
  containers: 				# 必选,Pod中容器列表
  - name: string			# 必选,容器名称
    image: string			# 必选,容器的镜像名称
    imagePullPolicy: [ Always | Never |IfNotPresent ]		# 获取镜像的策略
	command: [string] 				# 容器的启动命令列表,如不指定，使用打包时使用的启动命令
    args: [string]					# 容器的启动命令参数列表
    workingDir: string			     # 容器的工作目录
    volumeMounts:					# 挂载到容器内部的存储卷配置
	- name: string					# 好用pod定义的共享存储卷的名称,需用volumes[ ]部分定义的的卷名
	  mountPath: string				# 存储卷在容器内mount的绝对路径，应少于512字符
	  readonly: boolean				# 是否为只读模式
    ports:						# 需要暴露的端口库号列表
    - name: string				# 端口的名称
	  containerPort: int		 # 容器需要监听的端口号
	  hostPort: int					# 容器所在主机需要监听的端口号,默认与Container相同
	  protocol: string				# 端口协议,支持TCP和UDP,默认TCP 
	env:						# 容器运行前需设置的环境变量列表
	- name: string				 # 环境变量名称
 	  value: string				 # 环境变量的值
 	resources:					 # 资源限制和请求的设置
 	  limits:						# 资源限制的设置
	  	cpu: string					# cpu的限制,单位为core数,将用于docker run --cpu-shares参数
		memory: string				# 内存限制，单位可以为Mib/Gib,将用于docker run --memory参数
	  requests:						# 资源请求的设置
	    cpu: string					# cpu请求,容器启动的初始可用数量
	    memory: string 				# 内存请求，容器启动的初始可用数量
    lifecycle:						# 生命周期钩子
	  postStart: 					# 容器启动后立即执行此钩子,如果执行失败,会根据重启策略进行重启
	  preStop: 						# 溶容器终止前执行此钩子,无论结果如何，容器都会终止
	livenessProbe: 					# 对Pod内各容哭健唐检查的设署，当探测无响应几次后将自动重启该容器
	  exec:							# Pod容器内检查方式设置为exec方式
	    command: [string] 				# exec方式需要制定的命令或脚本
	    httpGet:							# 对Pod某个容器健康检查方法设置为HttpGet，需要制定Path、port
		  path: string
		  port: number
		  host: string
		  scheme: string
		  HttpHeaders:
		  - name : string
			value: string
		tcpSocket: 							# 对Pod内个容器健康检查方式设置为tcpSocket方式
		  port: number
		initialDelaySeconds: 0					# 容器启动完成后首次探测的时间,单位为秒
		timeoutSeconds: 0						# 对容器健康检查探测等待响应的超时时间，单位秒,默认1秒
		periodSeconds: 0						# 对容器监控检查的定期探测时间设置,单位秒，黑认18秒一次
		successThreshold: 0
		failureThreshold: 0
		securityContext:
		  privileged: false
	restartPolicy: [Always  Never| OnFailure] 					# Pod的重启策略
	nodeName: <string>									# 设置NodeName表示将该Pod调度到指定到名称的node节点上
	nodeSelector: obeject 							# 设置NodeSelector表示将该Pod调度到包含这个label的node节点上
	imagePullSecrets:							# Pull镜像时使用的secret名称，以key: secretkey格式指定
	- name: string
     hostNetwork: false					# 是否使用主机网络模式，默认为false,如果设置为true,表示使用宿主机网络
     volumes: 								# 在该pod上定义共享存储卷列表
	 - name: string							# 共享存储卷名称（volumes类型有很多种)
	 emptyDir: {}									# 类型为emtyDir的存储卷,与Pod同生命周期的一个临时目录,为空值
	 hostPath: string						# 类型为hostPath的存储卷,表示挂载Pod所在宿主机的目录
	   path: string						# Pod所在宿主机的目录,将被用于同期中mount的目录
	 secret:							# 类型为secret的存储卷,挂载集群与定义的secret对象到容器内部
	   scretname: string
	   items :
	   - key : string
	     path: string
	   configMap:						# 类型为configMap的存储卷，挂载预定义的configMap对象到容器内部
	     name: string
	     items:
	     - key: string
	       path: string
```

### 2.2.pod资源基本配置清单文件

```yaml
apiVersion: v1							# api版本
kind: Pod								# 资源类型为pod
metadata:								# 定义元数据
  name: pod-resources					# pod的名称
  namespace: dev						# pod所在的namespace
  labels:								# 定义标签
    app: base
spec:
  containers:
  - name: nginx-port						# 容器的名称
    image: nginx:1.11						# 镜像版本
  	imagePullPolicy: IfNotPresent				# 镜像拉取策略
    command: ["/bin/sh"]				# 容器启动后要执行的命令，命令有很多子命令，以逗号分隔
    args: ["-c","touch/hello.txt;while true;do /bin/echo $(date +%T)>>/tmp/hellow.txt;sleep 3;done;"]
    env:						# 定义环境变量
    - name: "username"			# 定义变量名称
      value: "jiangxl"			# 定义变量值
    - name: "job"
      value: "it"    
    ports:							   # 定义端口，一个- name表示一个端口，可以写多个
    - name:	nginx-port					# 定义端口名称			
      containerPort: 80					# 定义开放的端口
      protocol: TCP						# 指定端口属于什么协议    
    resources:						# 定义资源配置
      limits:						# 最大资源限制
        cpu: "2"						# cpu限制在2核
        memory: "10Gi"					 # 内存限制在10G
      requests: 					# 最小资源限制
        cpu: "1"						# cpu限制在1核
        memory: "10Mi"					# 内存限制在10M
```

### 2.3.pod资源健康检查资源清单文件

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-livereadiness
  namespace: dev
spec:
  containers:
  - name: nginx
    image: nginx:1.15
    ports:
    - name: nginx-port
      containerPort: 80
    livenessProbe:							# 存活性探测	
      tcpSocket:							# 使用TCPSocket探测方式
        port: 80							# 探测的端口
    initialDelaySeconds: 30					# 容器启动后30s以后开始探测
    timeoutSeconds: 5 					    # 探测超时时间
    readinessProbe:							# 就绪性探测		
      httpGet:							   # 使用HTTPGet探测方式
        scheme: HTTP					   # 协议使用http
        port: 80						  # 应用端口
        path: /	    					  # url路径
```

### 2.2.pod资源一级可配置属性

```yaml
[root@k8s-master ~]\# kubectl explain pod
KIND:     Pod
VERSION:  v1						# 编写yaml文件时第一行的版本号可以从这里进行查找
FIELDS:									# 可配置的一级属性，基本所有资源都是如下五个，如果当前级别配置参数后面<>中是string就表示没有下一级配置参数，直接填写一个字符串即可，如果<>为object说明他还有下一级配置参数，可以通过资源类型.属性的方式查找
   apiVersion	<string>					# 当前资源支持的版本
   kind	<string>						# 控制器类型
   metadata	<Object>							# 元数据
   spec	<Object>							# 设置属性
   status	<Object>					# 记录pod的状态，包括ip地址、创建时间等等，是自动增加的，不是手动写入的
```

### 2.4.pod初始化容器配置参数

```yaml
[root@k8s-master ~/k8s_1.19_yaml]\# kubectl explain pod.spec.initContainers
KIND:     Pod
VERSION:  v1
RESOURCE: initContainers <[]Object>
DESCRIPTION:
FIELDS:
   args	<[]string>						# 设置容器启动参数
   command	<[]string>					# 设置容器启动命令
   env	<[]Object>						# 设置容器的环境变量
   image	<string>					# 容器的镜像
   imagePullPolicy	<string>			# 容器镜像的拉取策略
   name	<string> -required-					# 初始化容器的名称
   ports	<[]Object>						# 端口号设置
```

### 2.5.pod资源钩子函数配置参数

```yaml
KIND:     Pod
VERSION:  v1
RESOURCE: lifecycle <Object>
FIELDS:
   postStart	<Object>			# 定义容器启动后执行的钩子函数
     exec	<Object>				# exec命令方式，在容器里面执行相应的命令
       command		<[]string>		# 指定运行的命令
   	 httpGet	<Object>			# httpGet方式，探测容器应用的url
   	   host	<string>				# 主机地址，一般就是pod地址
   	   path	<string>				# 请求的url路径
   	   port	<string>				# 应用端口号
   	   scheme	<string>			# 协议
     tcpSocket	<Object>			# tcpSocket方式，访问容器指定的socket
     	host	<string>			# pod地址
     	port	<string>			# 端口号
   preStop	<Object>				# 定期容器关闭前执行的钩子函数
     exec	<Object>				# exec命令方式，在容器里面执行相应的命令
     ·····
   	 httpGet	<Object>			# httpGet方式，探测容器应用的url
   	 ·····
     tcpSocket	<Object>			# tcpSocket方式，访问容器指定的socket
     ·····     
```

### 2.6.Pod资源node调度策略配置参数

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-nodename
  namespace: dev
spec:
  containers:
  - name: nginx
    image: nginx:1.15
  nodeName: k8s-node1				# 指定要调度的node节点名称
```

### 2.7.Pode亲和性调度配置参数

```yaml
[root@k8s-master ~]\# kubectl explain pod.spec.affinity.nodeAffinity
requiredDuringSchedulingIgnoredDuringExecution	<Object>		# node节点必须满足所有规则才可以，相当于硬限制，（这名字真是有够长的），不会驱逐已经存在并运行的pod
nodeSelectorTerms	<[]Object>				# 定义节点选择列表，也就是定义具体匹配规则
 matchFields  <Object>						# 根据节点字段列出的节点选择器要求选择
   key										# 键
   operator			# 关系符，支持Exists（存在）、DoesNotExist（不存在）、In（是这个范围）、NotIN（不是这个范围）、Gt（大于）、Lt（小于）
   values										# 值
 matchExpressions   <Object>			# 根据节点标签选择器进行匹配（推荐使用）
   key								# 键，标签名
   operator							# 关系符，支持Exists、DoesNotExist、In、NotIN、Gt、Lt
   values							# 值，标签值
   
preferredDuringSchedulingIgnoredDuringExecution	<[]Object>		# 优先调度到满足指定规则的Node，相当于软限制，（这名字真是有够长的），不会驱逐已经存在并运行的pod
preference	<Object>						# 节点选择器，与权重关联，可以定义多个，多个prefence如何选择就要看权重设置的大小
 matchFields  <Object>						# 根据节点字段进行匹配
   key	
   operator
   values
 matchExpressions   <Object>							# 根据节点标签选择器进行匹配（推荐使用）
   key									# 键，标签名
   operator								# 关系符，支持Exists、DoesNotExist、In、NotIN、Gt、Lt			
   values  								# 值，标签值
weight      									# 设置权重，范围在1-100

# node亲和示例配置清单文件
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: disktype
            operator: In
            values:
            - ssd  
# pod亲和示例配置清单文件
spec:
  affinity:
    podAffinity:
    # podAntiAffinity:					# pod反亲和性
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
      	  # matchLabels:
      	  #  app: fronted
          matchExpressions:
          - key: security
            operator: In
            values:
            - S1
        topologyKey: topology.kubernetes.io/zone		# 不在同一区域
        # topologyKey: kubernetes.io/hostname			# 不在同一主机
  containers:
  - name: with-pod-affinity
    image: k8s.gcr.io/pause:2.0
```

## 3.pod资源控制器资源

### 3.1.ReplicaSet控制器资源清单文件

```yaml
apiVersion: apps/v1 					# 版本号
kind : ReplicaSet 					    # 类型
metadata:								# 元数据
  name : 								# rs名称
  namespace : 							# 所属命名空间
  labels:								# 标签
	controller : rs
spec:									# 详情描述
  replicas: 3 							# 副本数量
  selector: 							# 选择器，通过它指定该控制器管理哪些pod
    matchLabels :						# Labels匹配配规则
	  app: nginx-pod					# 匹配标签app值为nginx-pod的pod
    matchExpressions: 					# Expressions匹配规则
      - {key : app, operator : In, values : [nginx-pod ] }		# 指定一个就可以了
  template: 							# 模板，也就是定义pod的信息，当副本数量不足时，会根据下面的模板创建pod副本
    metadata :							# 元数据
	  labels :							# 定义标签与rs进行关联
        app: nginx-pod				
	spec:								# pod属性
      containers:						# 定义容器	
	  - name : nginx						# 容器名称
        image: nginx :1.17.1				# 镜像
	    ports :								# 端口号
		- containerPort : 80
```

### 3.2.Deployment控制器资源清单文件

```yaml
apiVersion: apps/v1		 # 版本号
kind: Deployment 		# 控制器类型
metadata: 				# 定义元数据
  name: 					# deployment资源名称
  namespace: 					# 所属命名空间
  labels:					# 定义标签
    controller: deploy
spec: 						    # 定义资源属性
  replicas: 3					# 副本数量
  revisionHistoryLimit: 3		 # 保留历史版本，默认是1日
  paused: false 				# 暂停部署，默认是false，也就是deployment资源创建好之后，是否立刻运行pod，如果设置true，deployment资源创建好不会立即运行pod
  progressDeadlineSeconds: 688			 # 部署超时时间(s），默认是68日
  tolerations:					# 容忍度
  - key: "key1"
    operator: "Equal"			# 操作符为Exists时，不能指定value值
    value: "value1"
    effect: "NoSchedule"			# 此外还有NoExecute(驱逐影响目前运行着的pod)和PreferNoschedule(尽量阻止pod调度到该节点，除非没有其他节点可调用，说白了就是备胎xd.)
    tolerationSeconds: 6000			# 用于当某个pod运行所在的节点变成unready或者unreachable状态时，k8s可以等待该pod被调度到其他节点的最长等待时间，一般与effect的NoExecute共同使用
  strategy: 				# 策略
    type: RollingUpdate 		# 滚动更新策略
    rollingUpdate: 				# 滚动更新
      maxSurge: 30% 				# 最大额外可以存在的副本数，可以为百分比，也可以为整数
      maxUn available: 30%			 # 最大不可用状态的 Pod 的最大值，可以为百分比，也可以为整数
  selector:							# 选择器，通过它指定该控制器管理哪些pod
    matchLabels:					# Labels匹配规则
      app: nginx-pod
    matchExpressions: 					#  Expressions匹配规则
      - {key: app, operator: In, values: [nginx-pod] }
  template:							# 模板，当副本数量不足时，会根据下面的模板创建pod副本
      metadata:
        labels:
          app: nginx-podspec:
      containers:
      - name: nginx
        image: nginx:1.17.1ports:
        ports:
        - containerPort: 80
```

### 3.3.HPA控制器资源清单文件

```yaml
apiVersion: autoscaling/v1					# hpa支持的版本号
kind: HorizontalPodAutoscaler				# 类型为hpa
metadata:									# 元数据
  name: hpa-nginx							# hpa名称
  namespace: dev							# 所在的命名空间
spec:										# 属性
  minReplicas: 1								# 最少存活的pod数量
  maxReplicas: 10								# 最多存活的pod数量
  targetCPUUtilizationPercentage: 85	# 当CPU使用率达到多少指标时触发规则，这里的85表示85%，方便测试，实际生产中采用80-85%
  scaleTargetRef:								# 声明对那个资源进行控制
    apiVersion: apps/v1							# 资源的api版本
    kind: Deployment							# 资源类型
    name: deployment-nginx						# 资源名称
```

### 3.4.DaemonSet控制器资源清单文件

```yaml
apiversion: apps/v1 				 # 版本号
kind: DaemonSet 					# 类型
metadata: 						    # 元数据
  name: 						    # 名称
  namespace:						# 所属命名空间
  labels: 							# 标签
    controller: daemonset
spec:								# 属性
  revisionHistoryLimit: 3		      # 保留历史版本
  updateStrategy :					 # 更新策略
    type: RollingUpdate 			  # 滚动更新
    rollingUpdate: 					  # 滚动更新策略
      maxUnavailable: 1 			   # 最大不可用状态的 Pod的最大值，可以为百分比，也可以为整数
  selector :						  # 选择器,通过它指定该控制器管理哪些pod
    matchLabels:					   # Labels匹配规则
      app: nginx-pod
    matchExpressions: 					# Expressions匹配规则
    - {key: app, operator: In, values: [nginx-pod ]}
  template: 							# 模板，当副本数量不足时，会根据下面的模板创建pod副本
    metadata:
	  labels:
		app: nginx-pod
    spec:
	  containers:
	  - name: nginx
        image: nginx:1.17.1
        ports:
        - containerPort: 80
```

### 3.5.Job控制器资源清单文件

```yaml
apiVersion: batch/v1 				 # 版本号
kind: Job 							# 类型
metadata: 							# 元数据
  name: 							# 名称
  namespace: 						# 所属命名空间
  labels :							# 标签
    controller: job
spec: 							    # 详情描述
  completions: 1					# 指定job成功运行需要Pods的次数，默认值:1
  parallelism: 1					# 指定job在任一时刻应该并发运行Pods的数量，默认值:1
  activeDeadlineSeconds: 30 		 # 指定job可运行的时间期限，超过时间还未结束，系统将会尝试进行终止。
  backoffLimit: 6					# 指定job失败后进行重试的次数，默认是6
  manualSelector: true 				# 是否可以使用selector选择器选择pod，默认是false
  selector: 						# 选择器,通过它指定该控制器管理哪些pod
    matchLabels:					# Labels匹配规则
      app: counter-pod
    matchExpressions: 				# Expressions[匹配规则
    - {key: app, operator: In, values: [ counter-pod]}
  template: 						# 模板,当副本数量不足时,会根据下面的模板创建pod副本
    metadata:
	  labels:
		app: counter-pod
    spec:
      restartPolicy: Never 			# 重启策略只能设置为Never或者OnFailure
      containers:
	  - name: counter
	    image: busybox: 1.30
	    command: [ "bin/sh" , "-c" , "for i in 9 8 7 654 3 2 1; do echo $i;sleep 2;done" ]
```

### 3.6.CronJob资源清单文件

```yaml
apiVersion: batch/v1beta1 			 # 版本号
kind: CronJob 						# 类型
metadata: 						    # 元数据
name: 							# 名称
namespace: 						# 所属命名空间
labels:							# 标签
 controller: cronjob
spec:								# 属性
schedule: 						# cron格式的作业调度运行时间点,用于控制任务在什么时间执行
concurrencyPolicy: 				# 并发执行策略，用于定义前一次作业运行尚未完成时是否运行下一次的作业
failedJobHistoryLimit: 			# 为失败的任务执行保留的历史记录数，默认为1
successfulJobHistoryLimit: 		# 为成功的任务执行保留的历史记录数，默认为3
startingDeadlineSeconds: 			# 启动作业错误的超时时长
jobTemplate: 						# job控制器模板，用于为cronjob控制器生成job对象，下面其实就是job的定义
 metadata:
 spec:
   completions: 1
   parallelism: 1
   activeDeadlineSeconds: 30
   backoffLimit: 6
   manualSelector: true
   selector:
     matchLabels:
       app: counter-pod
     matchExpressions:				# 规则
        - { key: app, operator: In, values: [counter-pod ] }
	  template:
		metadata:
		  labels:
			app: counter-pod
		spec:
		  restartPolicy: Never
		  containers:
		  - name: counter
		    image: busybox: 1.30
		    command: [ "bin/sh" , "-c" , " for i in 98 7 654 3 2 1; do echo $i;sleep 2 ;done" ]
```

### 3.7.StatefulSet资源清单文件

```yaml
apiVersion: apps/v1							# api版本
kind: StatefulSet							# 资源类型
metadata:									# 定义元数据
  name: remote-storage						# 资源名称
  namespace: kube-system					# 所在的namespace
spec:									# 定义属性
  selector:								# 定义标签选择器，关联pod的标签
    matchLabels:					
      app: remote
  serviceName: "remote-storage"				# 定义serviceName，这个serviceName将会成为主机名
  replicas: 1								# 副本数
  template:									# pod模板信息
    metadata:
      labels:
        app: remote
    spec:
      containers:
      - name: remote-storage
        image: remote_storage_adapter:v2
        ports:
        - containerPort: 9201
          name: remote
```

## 4.服务发现资源

### 4.1.service资源清单文件

```yaml
kind: Service							# 资源类型
apiVersion: v1 							# 资源版本
metadata: 								# 元数据
  name: service 						# 资源名称
  namespace: dev 						# 所在的命名空间
spec: 									# 属性
  selector: 							# 标签选择器，用于确定当前service代理哪些pod
    app: nginx							# pod的标签
  type: 								# Service类型， 指定service的访问方式
  clusterIP:							# 虚拟服务的ip地址，即service地址
  sessionAffinity: 						# session亲和性，支持ClientIP、 None两个选项
  ports: 								# 端口信息 
    protocol: TCP
    port: 3017 							# service端口
    targetPort: 5003					 # pod端口
    nodePort: 31122 					# 映射的主机端口

```

### 4.2.ingress资源清单文件

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ingress-https
  namespace: dev
spec:
  ingressClassName:	<string>			# 定义使用哪种类型的ingress controllers
  tls:								# 定义域名绑定证书配置，只有通过https访问的方式才需要配置
    - hosts:						# 定义程序的域名列表
      - nginx.jiangxl.com
      - tomcat.jiangxl.com
      secretName: tls-secret		# 关联对应证书的secret资源
  rules:							# 定义ingress规则，用于关联对应的service资源
  - host: nginx.jiangxl.com				# 应用域名
    http:								# http方式
      paths:							# 定义要访问的路径
      - path: /							# 定义访问路径
        backend:						# 关联对应的service资源
          serviceName: nginx-service		# 对应的service名称
          servicePort: 80					# 对应的service端口

```

## 5.数据存储资源

### 5.1.EmptyDir资源清单文件

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: volume-emptydir
  namespace: dev
spec:
  containers:								# 定义容器列表
  - name: nginx								# 容器的名称
    image: nginx:1.17.1						# 容器使用的镜像版本
    ports:									# 定义端口号
    - containerPort: 80
    volumeMounts:							# 定义volume挂载信息，将logs-volume挂载到容器的/var/log/nginx路径
    - name: logs-volume						# volume的名称
      mountPath: /var/log/nginx				# 挂载到容器的指定路径
  - name: busybox
    image: busybox:1.30
    command: ["/bin/sh","-c","tail -f /logs/access.log"]		# busybox初始命令，动态读取volume挂载路径下的文件内容
    volumeMounts:							# 将logs-volume挂载到容器的/logs路径
    - name: logs-volume
      mountPath: /logs
  volumes:								# 定义volume信息
  - name: logs-volume					# volume名称
    emptyDir: {}						# 使用的volume类型为emptydir，{}不可省略
```

### 5.2.HostPath资源清单文件

```yaml
[root@k8s-master ~/k8s_1.19_yaml]\# vim volume-hostpath.yaml 
apiVersion: v1
kind: Pod
metadata:
  name: volume-hostpath
  namespace: dev
spec:
  containers:
  - name: nginx
    image: nginx:1.17.1
    ports:
    - containerPort: 80
    volumeMounts:
    - name: logs-volume
      mountPath: /var/log/nginx
  - name: busybox
    image: busybox:1.30
    command: ["/bin/sh","-c","tail -f /logs/access.log"]
    volumeMounts:				# 定义挂载那些volume卷
    - name: logs-volume				# volume名称
      mountPath: /logs				# 挂载到容器的哪个路径
  volumes:
  - name: logs-volume
    hostPath:					# 指定volume类型为hostPath
      path: /root/logs				# 指定node节点上的路径，为容器提供挂载点
      type: DirectoryOrCreate			# 针对路径做得类型，DirectoryOrCreate表示当路径不存在时则创建
```

### 5.3.NFS类型的资源清单文件

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: volume-nfs
  namespace: dev
spec:
  containers:
  - name: nginx
    image: nginx:1.17.1
    ports:
    - containerPort: 80
    volumeMounts:
    - name: logs-volume
      mountPath: /var/log/nginx
  - name: busybox
    image: busybox:1.30
    command: ["/bin/sh","-c","tail -f /logs/access.log"]
    volumeMounts:
    - name: logs-volume
      mountPath: /logs	
  volumes:								# 定义存储卷
  - name: logs-volume						# 指定存储卷的名称
    nfs:									# 类型为nfs
      server: 192.168.81.210					# nfs服务器地址
      path: /data/k8s_data						# nfs提供的共享路径
```

### 5.4.PV资源清单文件

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv1
spec:
  nfs:								# 存储类型，不同的存储类型配置都不相同，nfs则填写nfs
  capacity:								# 存储能力，目前只支持存储空间的设置
  storage: 2Gi						# 具体的存储大小
  accessModes:							# 访问模式
  storageClassName:							# 存储类别
  persistentVolumeReclaimPolicy:				# 回收策略
```

### 5.5.PVC资源清单文件

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc
  namespace: dev
spec:
  accessModes:				# 访问模式
  selector:						# 采用标签选择具体的pv
  storageClassName:					# 存储类别
  resources:					# 请求空间
    requests:
      storage: 5Gi				# 具体的请求大小
```

## 6.配置资源

### 6.1.configmap资源清单文件

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: configmap
  namespace: dev
data:						# configmap配置文件里面，不再有spec，而是data
  filename1: |					# 文件和内容的关系相当于一个键值对，filename表示文件的名称 |必须要有，固定写法
  	neirong1						# 具体的内容，所有内容都要和filename保持至少2个空格的对齐
  	neirong2
  filename2: |				# configmap可以同时定义多个文件的内容，接着往下写即可，一般还是一个cm定义一个配置文件，因为pod挂载是以目录进行挂载的，除非两个文件都在一个路径
  	xxxxxxxx
 
```

### 6.2.secret资源清单文件

```yaml
apiVersion: v1
kind: Secret					# 资源类型为Secret
metadata:
  name: admin-secret
  namespace: dev
type: Opaque					# 类型为Opaque，Opaque主要存储base64加密后的密码文件
data:							# 定义数据
  username: YWRtaW4=			# username为文件名称，YWRtaW4=为文件内容
  password: MTIzNDU2
```

## 7.RBAC访问授权资源

### 7.1.Role资源清单文件

```yaml
# Role只能对命名空间内的资源进行授权，需要指定namespace

apiVersion: rbac.authorization.k8s.io/v1beta1				# 资源api地址
kind: Role												# 控制器类型
metadata:												# 元数据
  name: authorization-role								# 资源名称
  namespace: dev										# 资源所在命名空间
rules:													# 定义角色
- apiGroups: [""]										# 支持的api组列表，""空字符串表示核心API群，写什么api就对什么api进行操作
  resources: ["pods"]										# 支持的资源对象列表，对那些资源进行操作
  verbs: ["get","watch","list"]							# 允许对资源对象的操作权限
```

### 7.2.ClusterRole资源清单文件

```yaml
# ClusterRole可以对集群内所有namespace下的资源进行授权，跨namespace、非资源对象都可以进行授权

apiVersion: rbac.authorization.k8s.io/v1beta1				# 资源api地址
kind: CLusterRole										# 控制器类型
metadata:												# 元数据
  name: authorization-clusterrole						# 资源名称
rules:													# 定义角色
- apiGroups: [""]									# 支持的api组列表，""空字符串表示核心API群，写什么api就对什么api进行操作
  resources: ["pods"]										# 支持的资源对象列表，对那些资源进行操作
  verbs: ["get","watch","list"]							# 允许对资源对象的操作权限
```

### 7.3.RoleBinding资源清单文件

```yaml
# RoleBinding可以将subjects定义的用户绑定在同一namespace中的role角色上，仅仅只能是同一namespace种的role

apiVersion: rbac.authorization.k8s.io/v1beta1			# 资源api地址
kind: RoleBinding										# 控制器类型
metadata:												# 元数据
  name: authorization-rolebinding						# 控制器名称
  namespace: dev										# 所在的namespace
subjects:												# 关联用户信息
- kind: User											# 用户的类型，可以是user、group、serviceaccount
  name: jiangxl											# 对应的用户名称
  apiGroup: rbac.authorization.k8s.io				# api组，持有引用主题的api组，默认为rbac.authorization.k8s.io
  namespace: dev										# 用户能控制的namespace
roleRef:											# 关联角色信息
  kind: Role										# 类型为角色
  name: authorization-role								# 对应的role名称
  apiGroup: rbac.authorization.k8s.io				# api组，持有引用主题的api组，默认为rbac.authorization.k8s.io
  
# 整个连起来的意思为用户jiangxl与authorization-role角色进行绑定，持有对dev命名空间下pod资源get、list、watch权限
```

### 7.4.CLusterRoleBinding资源清单文件

```yaml
# ClusterRoleBinding可以在整个集群级别和所有namespace中，将特定的subject与ClusterRoleBinding进行绑定授予权限，这样一来这个角色就拥有就集群级别资源的操作权限

apiVersion: rbac.authorization.k8s.io/v1beta1			# 资源api地址
kind: RoleBinding										# 控制器类型
metadata:												# 元数据
  name: authorization-rolebinding						# 控制器名称
subjects:												# 关联用户信息
- kind: User											# 用户的类型，可以是user、group、serviceaccount
  name: jiangxl											# 对应的用户名称
  apiGroup: rbac.authorization.k8s.io				# api组，持有引用主题的api组，默认为rbac.authorization.k8s.io
roleRef:											# 关联角色信息
  kind: ClusterRole										# 类型为集群角色
  name: authorization-clusterrole								# 对应的role名称
  apiGroup: rbac.authorization.k8s.io				# api组，持有引用主题的api组，默认为rbac.authorization.k8s.io

# 整个连起来的意思为用户jiangxl与authorization-role角色进行绑定，持有对集群级别以及所有命名空间下pod资源get、list、watch权限
```

## 8. LimitRange/ResourceQuota资源限制

名称空间级别资源，创建该资源时需要指定命名空间，如：`kubectl apply -f </PATH/TO/YOUR_YAML_FILE> --namespace=<YOUR_NAMESPACE>`

### 8.1 LimitRange资源清单文件

```yaml
# LimitRange用于限制命令空间中单个pod的资源使用情况，对象是个体

apiVersion: v1
kind: LimitRange
metadata:
  name: mem-limit-range
spec:
  limits:
  - default:
      memory: 512Mi				# 默认为命名空间中pod所分配的limits.memory内存
      cpu: 1					# 默认为命名空间中pod所分配的limits.cpu大小
    defaultRequest:
      memory: 256Mi				# 默认为命名空间中pod所分配的requests.memory内存
      cpu: 0.5					# 默认为命名空间中pod所分配的limits.cpu大小
    max:						# 最大资源限制
      memory: 1Gi
      cpu: "1000m"
    min:						# 最小资源限制
      memory: 1000Mi
      cpu: "500m"
    type: Container

# 更新limitrange，不会影响之前的pod
```

### 8.2 ResourceQuota资源清单文件

```yaml
# ResourceQuota用于限制整个工作空间的资源使用情况，对象是整个命名空间

apiVersion: v1
kind: ResourceQuota
metadata:
  name: mem-cpu-demo
spec:
  hard:		# 在指定命名空间下，限制每个容器必须有内存请求和限制，以及cpu请求和限制大小，并且所有cpu请求总和不能够超过2cpu，其他以此类推
    requests.cpu: "1"
    requests.memory: 1Gi
    limits.cpu: "2"
    limits.memory: 2Gi
    # 以下是对api对象资源进行的配额，按需分配，以下仅做演示
	persistentvolumeclaims: "1"
    services.loadbalancers: "2"
    services.nodeports: "0"
    replicationcontrollers: "1"
	resourcequotas: "1"
	pods: "10"
	secrets: "2"
    configmaps: "2"
```

## 9. 综合示例

sample1:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: test-yaml
  name: test-yaml
  namespace: freeswitch
spec:
  ports:
  - name: container-1-web-1
    port: 8080
    protocol: TCP
    targetPort: 8080
  selector:
    app: test-yaml
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  creationTimestamp: null
  name: test-yaml
spec:
  rules:
  - host: test.com
    http:
      paths:
      - backend:
          serviceName: test-yaml
          servicePort: 8080
        path: /
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: test-yaml
  name: test-yaml
  namespace: freeswitch
spec:
  replicas: 3
  selector:
    matchLabels:
      app: test-yaml
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      annotations:
        info: test for yaml
      labels:
        app: test-yaml
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - podAffinityTerm:
              labelSelector:
                matchExpressions:
                - key: app
                  operator: In
                  values:
                  - test-yaml
              topologyKey: kubernetes.io/hostname
            weight: 100
      containers:
      - env:
        - name: TZ
          value: Asia/Shanghai
        - name: LANG
          value: C.UTF-8
        image: nginx
        imagePullPolicy: Always
        lifecycle: {}
        livenessProbe:
          failureThreshold: 2
          initialDelaySeconds: 30
          periodSeconds: 10
          successThreshold: 1
          tcpSocket:
            port: 8080
          timeoutSeconds: 2
        name: test-yaml
        ports:
        - containerPort: 8080
          name: web
          protocol: TCP
        readinessProbe:
          failureThreshold: 2
          initialDelaySeconds: 30
          periodSeconds: 10
          successThreshold: 1
          tcpSocket:
            port: 8080
          timeoutSeconds: 2
        resources:
          limits:
            cpu: 195m
            memory: 375Mi
          requests:
            cpu: 10m
            memory: 10Mi
        securityContext:
          allowPrivilegeEscalation: false
          capabilities: {}
          privileged: false
          procMount: Default
          readOnlyRootFilesystem: false
          runAsNonRoot: false
        volumeMounts:
        - mountPath: /usr/share/zoneinfo/Asia/Shanghai
          name: tz-config
        - mountPath: /etc/localtime
          name: tz-config
        - mountPath: /etc/timezone
          name: timezone
      dnsPolicy: ClusterFirst
      hostAliases:
      - hostnames:
        - www.baidu.com
        ip: 114.114.114.114
      imagePullSecrets:
      - name: myregistrykey
      - name: myregistrykey2
      restartPolicy: Always
      securityContext: {}
      volumes:
      - hostPath:
          path: /usr/share/zoneinfo/Asia/Shanghai
          type: ""
        name: tz-config
      - hostPath:
          path: /etc/timezone
          type: ""
        name: timezone
```

> 此文章基于该博客进行修改和增删: https://blog.csdn.net/weixin_44953658/article/details/116161926

