# Kompose Basic

## 简介

### A conversion tool to go from Docker Compose to Kubernetes

#### What’s Kompose?

Kompose is a conversion tool for Docker Compose to container orchestrators such as Kubernetes (or OpenShift).

Kompose is deployed as a binary onto a client. To install Kompose on Katacoda, run the command as blow:

```bash
curl -L https://github.com/kubernetes/kompose/releases/download/v1.9.0/kompose-linux-amd64 -o /usr/bin/kompose && chmod +x /usr/bin/kompose
```

Details on how to install Kompose for your OS can be found at https://github.com/kubernetes/kompose/releases

## 简单样例

`docker-compose.yaml`文件内容如下所示：

```yaml
version: "2"
services:
  redis-master:
    image: redis:latest
    ports:
      - "6379"
  redis-slave:
    image: gcr.io/google_samples/gb-redisslave:v1
    ports:
      - "6379"
    environment:
      - GET_HOSTS_FROM=dns
  frontend:
    image: gcr.io/google-samples/gb-frontend:v3
    ports:
      - "80:80"
    environment:
      - GET_HOSTS_FROM=dns
```

As with Docker Compose, Kompose allows the Images to be deployed using a single command of `kompose up`

The details of what has been deployed can be discovered with the Kubernetes CLI *kubectl*.

```
kubectl get deployment,svc,pods,pvc
```

Kompose also has the ability to take existing Compose files and generate the related Kubernetes Manifest files.

The command `kompose convert` will generate the files, viewable via `ls`.

Use command `kompose convert -j` will generate the json format files.

Use command `kompose --provider openshift convert ` will generate the `OpenShift` format files.

> 转载：Deploy Docker Compose with Kompose -- Katacoda

## Minikube and Kompose

In this guide, we’ll deploy a sample `docker-compose.yaml` file to a Kubernetes cluster.

Requirements:

- [minikube](https://github.com/kubernetes/minikube)
- [kompose](https://github.com/kubernetes/kompose)

**Start `minikube`:**

If you don’t already have a Kubernetes cluster running, [minikube](https://github.com/kubernetes/minikube) is the best way to get started.

```
$ minikube start
Starting local Kubernetes v1.7.5 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster
```

**Download an [example Docker Compose file](https://raw.githubusercontent.com/kubernetes/kompose/master/examples/docker-compose.yaml), or use your own:**

```
wget https://raw.githubusercontent.com/kubernetes/kompose/master/examples/docker-compose.yaml
```

**Convert your Docker Compose file to Kubernetes:**

Run `kompose convert` in the same directory as your `docker-compose.yaml` file.

```
$ kompose convert                           
INFO Kubernetes file "frontend-service.yaml" created         
INFO Kubernetes file "redis-master-service.yaml" created     
INFO Kubernetes file "redis-slave-service.yaml" created      
INFO Kubernetes file "frontend-deployment.yaml" created      
INFO Kubernetes file "redis-master-deployment.yaml" created  
INFO Kubernetes file "redis-slave-deployment.yaml" created 
```

Alternatively, you can convert and deploy directly to Kubernetes with `kompose up`.

```
$ kompose up
We are going to create Kubernetes Deployments, Services and PersistentVolumeClaims for your Dockerized application. 
If you need different kind of resources, use the 'kompose convert' and 'kubectl create -f' commands instead. 

INFO Successfully created Service: redis          
INFO Successfully created Service: web            
INFO Successfully created Deployment: redis       
INFO Successfully created Deployment: web         

Your application has been deployed to Kubernetes. You can run 'kubectl get deployment,svc,pods,pvc' for details.
```

**Access the newly deployed service:**

Now that your service has been deployed, let’s access it.

If you’re using `minikube` you may access it via the `minikube service` command.

```
$ minikube service frontend
```

Otherwise, use `kubectl` to see what IP the service is using:

```
$ kubectl describe svc frontend
Name:                   frontend
Namespace:              default
Labels:                 service=frontend
Selector:               service=frontend
Type:                   LoadBalancer
IP:                     10.0.0.183
LoadBalancer Ingress:   123.45.67.89
Port:                   80      80/TCP
NodePort:               80      31144/TCP
Endpoints:              172.17.0.4:80
Session Affinity:       None
No events.
```

Note: If you’re using a cloud provider, your IP will be listed next to `LoadBalancer Ingress`.

If you have yet to expose your service (for example, within GCE), use the command:

```
kubectl expose deployment frontend --type="LoadBalancer" 
```

To check functionality, you may also `curl` the URL.

```
$ curl http://123.45.67.89
```

## 参考链接

- kompose user-guide: https://kompose.io/user-guide/