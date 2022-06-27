# SSH Tunnel 

## SSH Tunnel

| 角色  | IP           |
| ----- | ------------ |
| HostA | 172.16.1.130 |
| HostB | 172.16.1.129 |
| HostC | 172.16.1.128 |
| HostD | 172.16.1.127 |

### SSH -L

类似于正向代理（本地转发）

![ssh-tunnel-1](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ssh%20tunnel/ssh-tunnel-2.png)

在`HostB`主机上，在其本地起一个`8888`端口，使之映射到`HostC`主机的SSH默认`22`端口，如此，在` HostA `上可以使用 `HostB:8888` 就像使用 `HostC:22` 一样。

```bash
# 在HostA主机上执行
ssh -L 0.0.0.0:8888:172.16.1.128:22 root@172.16.1.129		# 默认不指明HostB地址为本地localhost
```

当链接断开时，隧道会自动关闭，临时性。

应用场景：通过公网远程如果直接使用mysql客户端连接是不安全的，因为其传输报文是明文的，所以可以在客户端与服务器之间搭建一条ssh 隧道来增强安全性。

**示例：**

```bash
ssh -L 9906:10.1.0.2:3306 root@10.1.0.2

* 上述命令表示从本机(ServerA)建立一个到ServerB(10.1.0.2)的ssh隧道，使用本地端口转发模式，监听ServerA本地的9906端口，访问本机的9906端口时，通讯数据将会被转发到ServerB(10.1.0.2)的3306端口。
```

此时就可以在serverA主机上通过本地的9906端口较为安全的访问serverB主机上的mysql服务

### SSH -R

类似于反向代理（远程转发）

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ssh%20tunnel/ssh-tunnel-3.png)

在 `HostC` 上，让 `HostB `起`8888 `端口，使之映射到 `localhost` 的 `22 `端口。如此，在` HostA `上可以使用 `HostB:8888` 就像使用 `HostC:22 `一样。

```bash
# 在HostC上执行
ssh -R 8888:localhost:22 root@172.16.1.129
```

![](http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ssh%20tunnel/ssh-tunnel-4.png)

在 `HostC 上`，让 `HostB `起 `8888 `端口，使之映射到` HostD` 的 `22 `端口。如此，在 `HostA `上可以使用 `HostB:8888 `就像使用 `HostD:22` 一样。

```bash
# 在HostC上执行
ssh -R 8888:172.16.1.127:22 root@172.16.1.129
```



应用场景：内网穿透，外网访问内网服务。假如公司内网环境中有一台mysql服务器（公司所有主机通过典型的NAT模式进行上网），通常的做法是，通过路由器或者防火墙，将公司的固定外网IP上的某个端口映射到ServerB内网IP的3306端口上，这样，我们只要访问公司外网IP的对应端口，即可访问到内网ServerB中的mysql服务了，但是你没有权限控制公司的防火墙或者路由器。但是，公司在公网上有另外一台服务器ServerA，ServerA有自己的公网IP，你有权控制ServerA，这时，我们就可以利用ServerA达到我们的目的。

显然，使用ssh本地正向代理的方式无法实现，因为外网主机仍无法连接到内网mysql服务器上，但是内网mysql服务器通过NAT可以ssh连接到那台具有公网ip的主机。

**示例：**

条件1：从ServerB(10.1.0.2)中主动连接到ServerA(10.1.0.1)，即在ServerB中执行创建隧道的命令，连接到ServerA。

条件2：隧道创建后，转发端口需要监听在ServerA中，以便利用ServerA访问到内网的ServerB。

```bash
# 在severB上执行
ssh -N -f -R 9906:10.1.0.2:3306 root@10.1.0.1
```

上述命令在ServerB中执行，执行后，即可在ServerA与ServerB之间建立ssh隧道，此时，ServerB是ssh客户端，ServerA是ssh服务端，隧道建立后，ServerA中的9906端口会被监听

>不过你肯定注意到了，当使用远程转发的命令时，我并没有指定监听ServerA的外网IP，也没有使用"-g选项"开启网关功能，这是因为，即使你在命令中指定了IP地址，最终在ServerA中还是会只监听127.0.0.1的9906端口，你可以在ServerB中尝试一下如下命令
>
>`ssh -f -N -R 10.1.0.1:9906:10.1.0.2:3306 root@10.1.0.1`
>
>即使在ServerB中执行上述命令时指定了IP或者开启了网关功能，ServerA的9906端口仍然只监听在127.0.0.1上，当然，如果你一心想要通过别的主机访问ServerA的9906端口，也可以使用其他程序去反代ServerA的9906端口，还有，我在实际的使用过程中，如果使用远程转发穿透到内网，ssh隧道将会非常不稳定，隧道会莫名其妙的消失或者失效，特别是在没有固定IP的网络内，网上有些朋友提供了autossh的解决方案，不过我并没有尝试过，如果你有兴趣，可以试一试。

### SSH -D

创建一个socks5代理

```bash
ssh -g -D 8080 root@172.16.1.130
```

## SSH 选项

* `-N`：当配合此选项创建ssh隧道时，并不会打开远程shell连接到目标主机，仅使用该选项时，可以发现终端会停留在输入密码之后的位置，显示空白，但此时连接已经建立
* `-f`：表示后台运行ssh隧道，即使我们关闭了创建隧道时所使用的ssh会话，对应的ssh隧道也不会消失，"-f"选项需要跟"-N"选项配合使用，例如：`ssh -N -f -L 172.16.1.129:2222:172.16.1.128:22 root@172.16.1.128`
* `-g`：表示ssh隧道对应的转发端口将监听在主机的所有IP中，不使用"-g选项"时，转发端口默认只监听在主机的本地回环地址中，"-g"表示开启网关模式，远程端口转发中，无法开启网关功能，例如：` ssh -g -N -f -L 0.0.0.0:2222:172.16.1.128:22 root@172.16.1.128`

## SSH 代理转发

原理简单示例：

在A主机上，把B主机上的某个文件复制到C主机上

```bash
scp root@hostB:/root/test root@hostC:/root
```

## 参考资料

* 朱双印博客：https://www.zsythink.net/archives/2450
* CSDN @蜜汁小强 ： https://blog.csdn.net/wxqee/article/details/49234595

