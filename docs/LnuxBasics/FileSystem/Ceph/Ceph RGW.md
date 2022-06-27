# Ceph RGW    



## Ceph RGW 架构简介

  RGW就是提供对象存储的网关，也即对象存储网关。所谓对象存储网关，也就是对象存储的入口，**本质上是一个HTTP服务器**，与Nginx和Apache无异。通过这个入口，用户可以通过HTTP协议，以RESTful的方式访问Ceph的对象存储。 对象存储网关实际上是*调用`librados`的API*来实现数据的存储和读取，而该网关同时提供了**兼容AWS S3和OpenStack Swift的对象存储访问接口（API）**。

## 安装Ceph对象存储网关

简单使用`ceph-deploy`部署命令安装对象存储网关：

```bash
# 进入ceph集群配置文件路径
cd ceph-cluster
#  ceph-deploy install --rgw <gateway-node1> [<gateway-node2> ...]
ceph-deploy install --rgw stor1
```

## 创建RGW实例

上面步骤只是安装了必要的软件，但并没有创建需要的存储资源（存储池）：

```bash
# 创建存储池
ceph-deploy rgw create stor1
```

:information_source: 查看集群资源状态：

```bash
[root@stor1 ceph-cluster]\# rados lspools
.rgw.root
default.rgw.control
default.rgw.meta
default.rgw.log
```

## 验证对象存储

上面提到过 Ceph 的对象存储网关是基于 HTTP 的，因此我们可以通过 HTTP 协议访问特定地址来进项验证：

打开浏览器，输入 http://172.16.1.128:7480/

大致会输出以下内容：

```xml
<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<Owner>
    <ID>anonymous</ID>
    <DisplayName/>
</Owner>
    <Buckets/>
</ListAllMyBucketsResult>
```

## 创建用户以使用对象存储

对象存储的数据结构，数据必须存储在某个用户下面。因此，想正常的访问RGW，需要创建相应的RGW用户，并赋予相应的权限，`radosgw-admin`命令实现了这些功能。 执行下面命令，来创建一个名为`testuser`的用户：

```bash
radosgw-admin user create --uid="testuser" --display-name="First User"
```

执行完成之后，会输出一堆相关数据，其中，需要特别保存返回结果中的`keys->access_key`和`keys->secret_key`

### 创建子用户

```bash
radosgw-admin subuser create --uid=testuser --subuser=testuser:swift --access=full
```

## 参考链接

* https://zhuanlan.zhihu.com/p/66671590
* https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/f6e336bd9999
* https://link.zhihu.com/?target=https%3A//blog.csdn.net/u011446736/article/details/81083078
* https://link.zhihu.com/?target=https%3A//blog.csdn.net/Poo_Chai/article/details/80856662%3Futm_source%3Dblogxgwz1