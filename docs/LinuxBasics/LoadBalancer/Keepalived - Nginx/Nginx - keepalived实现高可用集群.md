## 1.图解Nginx七层与四层

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70.png)

大型企业架构一般是用户先访问到四层负载均衡，在由四层负载均衡转发至七层服务在均衡，七层负载均衡再转发至后端服务器，四层负载均衡只起到一个分流的作用，根据用户访问的端口，比如说80端口就会跳转至七层的对应的集群，两台四层负载均衡配置是一模一样的，形成高可用，七层的配置也是一模一样的，当有1500个请求需要响应时，四层负载均衡就会平均将1500个请求分给急群中的lb，每个lb响应500个请求，减轻单点的压力。

- 负载均衡的选择
    - Nginx 四层和七层
    - LVS 四层，需要懂网络（NAT，iptables）
    - HAproxy 四层和七层
    - F5 四层和七层，硬件设备，不适合云平台
    - SLB 四层
- session
    - 会话保持，可以采用ip_hash
    - 会话共享，最好写入 redis或者mysql
    - 写入浏览器，由开发人员实现

## 2.负载均衡手机端配置
```sh
upstream firefox {
	server 172.31.57.133:80;
}

upstream chrome {
	server 172.31.57.133:8080;
}

upstream iphone {
	server 172.31.57.134:8081;
}

upstream android {
	server172.31.57.134:8081；
}

upstream default {
	server 172.31.57.134:80；
}

server {
	if ($http_user_agent ~* "iphone"){
		proxy_pass http://iphone;
	}
	
	if ($http_user_agent ~* "chrome"){
		proxy_pass http://chrome
	}
}
```

## 进入高可用环节

## 3.高可用概念

### 3.1.什么是高可用

一般指2台机器启动着相同的业务系统，当有一台机器down机了，另外一台服务器能快速的接管，对于访问当用户是无感知的

### 3.2.高可用使用场景

业务系统需要保证7x24小时不down机，作为业务来说要随机都可以用，让你的业务系统更顽强。

## 4.Keepalive工作 原理

vrrp工作原理

1.将所有设备加入到一个虚拟组

2.具有相同的虚拟ip（会有对应的虚拟MAC地址）

3.主机会在发送数据的时候，在数据包的目标地址写上虚拟的IP及MAC

4.虚拟组收到数据后，会将目标地址转换成当前虚拟组的master设备的IP和MAC

vrrp角色：一主多备

实际工作角色：主

通过优先级来选举主备：优先级越高越优先

如果虚拟组中的服务器都认为自己是master这时就产生了裂脑

## 5.keepalived高可用安装部署

### 5.1.环境规划

| 服务器系统 | 角色             | ip地址               |
| ---------- | ---------------- | -------------------- |
| centos7.5  | keepalive-master | ens33:192.168.81.210 |
| centos7.5  | keepalive-backup | ens33:192.168.81.220 |

### 5.2.在两台机器上分别安装keepalive
```sh
1.配置yum仓库，下载镜像源
[root@localhost ~]\# curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo 
[root@localhost ~]\# curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

2.安装keepalive，将软件包下载至本地推送至其他服务器，方便机器安装
[root@localhost ~]\# yum -y install keepalived --downloaddir=/root/soft
[root@localhost ~]\# scp keepalived-1.3.5-16.el7.x86_64.rpm root@192.168.81.220:/root

3.第二台机器直接安装下载好的rpm包即可
[root@localhost ~]\# yum localinstall /root/keepalived-1.3.5-16.el7.x86_64.rpm -y
```

### 5.3.配置keepalive-master
```sh
[root@localhost keepalived]\# cp keepalived.conf keepalived.conf.bak
[root@localhost keepalived]\# vim keepalived.conf
global_defs {
   router_id lb01			//路由名称，不能使用相同的路由名称
}

vrrp_instance VI_1 {		//定义一个虚拟组实例，实例名是VI_1，不建议修改
    state MASTER				//服务器的状态
    interface ens33				//提供服务的网卡名称即通信端口
    virtual_router_id 51			//实例的ID
    priority 150			//优先级，master要比backup的高，默认100，最高255
    advert_int 1			//心跳建哥，也就是健康检测周期，1表示1秒内与backup进行健康检查，检查失败立刻抢占
    authentication {		
        auth_type PASS		//PASS认证类型，此参数备节点和主节点相同
        auth_pass 1111		//密码是1111，此参数备节点和主节点相同
    }		
    virtual_ipaddress {			//定义一个漂移ip
       192.168.81.100
    }
}
```

### 5.4.配置keepalive-backup
```sh
[root@localhost keepalived]\# cp keepalived.conf keepalived.conf.bak
[root@localhost keepalived]\# vim keepalived.conf
global_defs {
	router_id lb02
}

vrrp_instance VI_1 {
	state BACKUP
	interface ens33
	virtual_router_id 51
	priority 100
	advert_int 1
	authentication {
	    auth_type PASS
	    auth_pass 1111
	}
	virtual_ipaddress {
	   192.168.81.100
	}
}
```

### 5.5.启动主备服务器的keepalived
```sh
keepalived-master
[root@localhost keepalived]\# systemctl start keepalived
[root@localhost keepalived]\# systemctl enable keepalived

keepalived-backup
[root@localhost keepalived]\# systemctl start keepalived
[root@localhost keepalived]\# systemctl enable keepalived
```

## 6.检查虚拟IP是否漂移

**虚拟IP漂移时会产生一个丢包现象，master或者slave将进行抢占**

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70-20220615154102444.png)
下面开始验证，具体思路：

 1.主节点查看是否存在虚拟ip

 2.主节点停掉keepalived进程

 3.观察丢包

 4.从节点验证是否存在虚拟ip

 5.主节点开启keepalived进程

 6.主节点查看是否抢占成功虚拟ip

**在keepalive-master上操作**
```sh
已经获得漂移ip
[root@jxl ~]\# ip add show dev ens33
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:46:66:34 brd ff:ff:ff:ff:ff:ff
    inet 192.168.81.220/24 brd 192.168.81.255 scope global ens33
       valid_lft forever preferred_lft forever
    inet 192.168.81.100/32 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fe46:6634/64 scope link 
       valid_lft forever preferred_lft forever

```

**在keepalive-master上恢复master节点并验证是否存在漂移ip**
```sh
[root@localhost ~]\# systemctl start keepalived
[root@localhost ~]\# ip add show dev ens33
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:55:83:b7 brd ff:ff:ff:ff:ff:ff
    inet 192.168.81.210/24 brd 192.168.81.255 scope global ens33
       valid_lft forever preferred_lft forever
    inet 192.168.81.100/32 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fe55:83b7/64 scope link 
       valid_lft forever preferred_lft forever

```

**在keepalive-backup上验证漂移ip是否已丢失**
```sh
[root@jxl ~]\# ip add show dev ens33
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:46:66:34 brd ff:ff:ff:ff:ff:ff
    inet 192.168.81.220/24 brd 192.168.81.255 scope global ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fe46:6634/64 scope link 
       valid_lft forever preferred_lft forever

```

## 7.keepalived主备配置区别

| master配置     | backup配置     | 含义         |
| -------------- | -------------- | ------------ |
| router_id lb01 | router_id lb02 | 路由名称     |
| state MASTER   | state BACKUP   | 服务器状态   |
| priority 150   | priority 100   | 服务器优先级 |

## 8.keepalived高可用配置

### 8.1.环境规划

| 角色              | 部署内容      | IP             |
| ----------------- | ------------- | -------------- |
| keepalived-master | keepalived主  | 192.168.81.210 |
| keepalived-backup | keepalived备  | 192.168.81.220 |
| nginx-负载1       | nginx负载均衡 | 192.168.81.210 |
| nginx-负载2       | nginx负载均衡 | 192.168.81.220 |
| web01             | nginx         | 192.168.81.230 |
| web02             | nginx         | 192.168.81.240 |

### 8.2.实现思路

1.先部署web节点，在web节点上部署LNMP平台，并部署网站源码包

2.部署nginx负载均衡，再第一台部署好后直接推送过去

3.部署keepalive主备

### 8.3.部署web节点
```sh
详细部署步骤请参考https://blog.csdn.net/weixin_44953658/article/details/105928687
```

### 8.4.部署nginx负载均衡
```sh
lb01配置
[root@localhost ~]\# yum -y install nginx 
[root@localhost ~]\# cd /etc/nginx/conf.d
[root@localhost ~]\# vim lb_wecenter.conf
upstream lb_wecenter {
	server 192.168.81.230 weight=1 max_fails=3 fail_timeout=60;
	server 192.168.81.240 weight=1 max_fails=3 fail_timeout=60;
}

server {
	listen 80;
	server_name jxl.wecenter.com;
	client_max_body_size 200m;
	access_log /nginx_log/lb_jxl_wecenter_access.log main;
	
	location / {
		proxy_pass http://lb_wecenter;
		proxy_set_header HOST $http_host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_connect_timeout 30;
		proxy_send_timeout 60;
		proxy_read_timeout 60;
		proxy_buffering on;
		proxy_buffer_size 256k;
		proxy_buffers 4 256k;
	}
}

lb02配置
[root@localhost ~]\# yum -y install nginx
然后在lb01使用scp将配置文件推送到lb02上
[root@localhost ~]\# scp -rp /etc/nginx/* root@192.168.81.220:/etc/nginx/

在两台机器上启动nginx
[root@localhost ~]\# systemctl start nginx 
[root@localhost ~]\# systemctl enable nginx

```

### 8.5.配置keepalived主备

#### 8.5.1.在两台机器上分别安装keepalive
```sh
1.配置yum仓库，下载镜像源
[root@localhost ~]\# curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo 
[root@localhost ~]\# curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

2.安装keepalive，将软件包下载至本地推送至其他服务器，方便机器安装
[root@localhost ~]\# yum -y install keepalived --downloaddir=/root/soft
[root@localhost ~]\# scp keepalived-1.3.5-16.el7.x86_64.rpm root@192.168.81.220:/root

3.第二台机器直接安装下载好的rpm包即可
[root@localhost ~]\# yum localinstall /root/keepalived-1.3.5-16.el7.x86_64.rpm -y
```

#### 8.5.2.配置keepalive-master
```sh
[root@localhost keepalived]\# cp keepalived.conf keepalived.conf.bak
[root@localhost keepalived]\# vim keepalived.conf
global_defs {
   router_id lb01			//路由名称，不能使用相同的路由名称
}

vrrp_instance VI_1 {		//定义一个虚拟组实例，实例名是VI_1，不建议修改
    state MASTER				//服务器的状态
    interface ens33				//提供服务的网卡名称即通信端口
    virtual_router_id 51			//实例的ID
    priority 150			//优先级，master要比backup的高，默认100，最高255
    advert_int 1			//心跳建哥，也就是健康检测周期，1表示1秒内与backup进行健康检查，检查失败立刻抢占
    authentication {		
        auth_type PASS		//PASS认证类型，此参数备节点和主节点相同
        auth_pass 1111		//密码是1111，此参数备节点和主节点相同
    }		
    virtual_ipaddress {			//定义一个漂移ip
       192.168.81.100
    }
}
```

#### 8.5.3.配置keepalive-backup
```sh
[root@localhost keepalived]\# cp keepalived.conf keepalived.conf.bak
[root@localhost keepalived]\# vim keepalived.conf
global_defs {
	router_id lb02
}

vrrp_instance VI_1 {
	state BACKUP
	interface ens33
	virtual_router_id 51
	priority 100
	advert_int 1
	authentication {
	    auth_type PASS
	    auth_pass 1111
	}
	virtual_ipaddress {
	   192.168.81.100
	}
}
```

#### 8.5.4.启动主备服务器的keepalived
```sh
keepalived-master
[root@localhost keepalived]\# systemctl start keepalived
[root@localhost keepalived]\# systemctl enable keepalived

keepalived-backup
[root@localhost keepalived]\# systemctl start keepalived
[root@localhost keepalived]\# systemctl enable keepalived
```

### 8.6.页面访问

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70-20220615154102658.png)

### 8.7.抓包验证

![在这里插入图片描述](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70-20220615154102932.png)



> 文章转载自：https://blog.51cto.com/jiangxl/5169896
>
> 仅做个人备份学习使用。