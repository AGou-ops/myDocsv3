# keepalived 

### keepalived简介

keepalived是集群管理中保证集群高可用的一个服务软件，其功能类似于[heartbeat](https://github.com/chenzhiwei/linux/tree/master/heartbeat)，用来防止单点故障。

### 工作原理

​	[keepalived](https://baike.baidu.com/item/Keepalived)是以VRRP协议为实现基础的，VRRP全称Virtual Router Redundancy Protocol，即[虚拟路由冗余协议](https://baike.baidu.com/item/虚拟路由器冗余协议/2991482?fromtitle=虚拟路由冗余协议&fromid=22253650&fr=aladdin)。

​	虚拟路由冗余协议，可以认为是实现路由器高可用的协议，即将N台提供相同功能的路由器组成一个路由器组，这个组里面有一个master和多个backup，master上面有一个对外提供服务的vip（该路由器所在局域网内其他机器的默认路由为该vip），master会发组播，当backup收不到vrrp包时就认为master宕掉了，这时就需要根据VRRP的优先级来选举一个backup当master。这样的话就可以保证路由器的高可用了。

​    keepalived主要有三个模块，分别是core、check和vrrp。core模块为keepalived的核心，负责主进程的启动、维护以及全局配置文件的加载和解析。check负责健康检查，包括常见的各种检查方式。vrrp模块是来实现VRRP协议的。

### 程序环境

要求主机网卡需支持多播组播功能，即`MULTILCAST`

* 主配置文件：`/etc/keepalived/keepalived.conf`
* 主程序文件：`/usr/sbin/keepalived`
* Unit File配置文件：`/etc/sysconfig/keepalived`
* keepalived 启动后会有三个进程：
  * 父进程：内存管理，子进程管理等等
  * 子进程：VRRP子进程
  * 子进程：healthchecker子进程

### 配置文件

keepalived配置文件分为三个部分，分别是：`全局配置GLOBAL CONFIGURATION `、`VRRPD配置 VRRPD CONFIGURATION`、和`LVS配置LVS CONFIGURATION`.

```bash
! Configuration File for keepalived

global_defs {
  notification_email {
    acassen@firewall.loc
    failover@firewall.loc
    sysadmin@firewall.loc 		# 邮件报警，可以不设置，后期nagios统一监控。
  }
  notification_email_from Alexandre.Cassen@firewall.loc
  smtp_server 192.168.200.1
  smtp_connect_timeout 30
  router_id LVS_DEVEL  		# 此处注意router_id为负载均衡标识，在局域网内应该是唯一的。
  vrrp_skip_check_adv_addr
  vrrp_strict
  vrrp_garp_interval 0
  vrrp_gna_interval 0
}
  +++++++++++++++++++++++++++++++++++++

# VRRP实例定义块
vrrp_instance VI_1 {
    state MASTER 		# 状态只有MASTER和BACKUP两种，并且要大写，MASTER为工作状态，BACKUP是备用状态。
    interface eth0
        lvs_sync_daemon_inteface eth0  		# 这个默认没有，相当于心跳线接口，DR模式用的和上面的接口一样，也可以用机器上的其他网卡eth1，用来防止脑裂。
    virtual_router_id 51 		# 虚拟路由标识，同一个vrrp_instance的MASTER和BACKUP的vitrual_router_id 是一致的。
    priority 100  		# 优先级，同一个vrrp_instance的MASTER优先级必须比BACKUP高。
    advert_int 1 		# MASTER 与BACKUP 负载均衡器之间同步检查的时间间隔，单位为秒。
    authentication {
        auth_type PASS  		# 验证authentication。包含验证类型和验证密码。类型主要有PASS、AH 两种，通常使用的类型为PASS，\
        auth_pass 1111  据说AH 使用时有问题。验证密码为明文，同一vrrp 实例MASTER 与BACKUP 使用相同的密码才能正常通信。
    }
    virtual_ipaddress { 		# 虚拟ip地址,可以有多个地址，每个地址占一行，不需要子网掩码，同时这个ip 必须与我们在lvs 客户端设定的vip 相一致！
        192.168.200.100
        192.168.200.101
        192.168.200.102
    }
}
  ++++++++++++++++++++++++++++++++++++
 
# 虚拟服务器定义块
virtual_server 192.168.200.100 443 {  		# 虚拟IP，来源与上面的虚拟IP地址，后面加空格加端口号
    delay_loop 6  		# 健康检查间隔，单位为秒
    lb_algo rr    		# 负载均衡调度算法，一般用wrr、rr、wlc
    lb_kind NAT  		# 负载均衡转发规则。一般包括DR,NAT,TUN 3种。
    persistence_timeout 50 		# 会话保持时间，会话保持，就是把用户请求转发给同一个服务器，不然刚在1上提交完帐号密码，就跳转到另一台服务器2上了。
    protocol TCP  		# 转发协议，有TCP和UDP两种，一般用TCP，没用过UDP。

    real_server 192.168.201.100 80 { 		# 真实服务器，包括IP和端口号
        weight 1  		# 权重，数值越大，权重越高
        TCP_CHECK {  		# 通过tcpcheck判断RealServer的健康状态
            connect_timeout 3 		# 连接超时时间
            nb_get_retry 3 		# 重连次数
            delay_before_retry 3 		# 重连时间间隔
            connect_port 80  		# 检测端口
        }
    }
```

**示例配置信息1（双机热备）：**

```bash
! Configuration File for keepalived

global_defs {
   notification_email {
        root@localhost
    }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id master			# 备用节点改为node01
   vrrp_mcast_group4  224.1.100.33
}

vrrp_instance VI_1 {
    state MASTER		# 备用节点改为BACKUP	
    interface ens33
    virtual_router_id 51
    priority 100			# 备用节点降低优先级
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass GU6hbFS4
    }
    virtual_ipaddress {
        172.16.1.99 dev ens33 label ens33:0
    }
}

vrrp_instance VI_2 {
    state BACKUP		# 主节点改为BACKUP	
    interface ens33
    virtual_router_id 52
    priority 97			# 主节点升高优先级
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass GU6hbFS4
    }
    virtual_ipaddress {
        172.16.1.100 dev ens33 label ens33:0
    }
}
```

**示例配置信息2（调用自定义脚本）：**

```bash
# 脚本内容：当主机状态切换时触发邮件提醒
#!/bin/bash

contact='agou-ops@foxmail.com'
notify() {
mailsubject="$(hostname) to be $1, vip floating"
mailbody="$(date +'%F %T'): vrrp transition, $(hostname) changed to be $1"
echo "$mailbody" | mail -s "$mailsubject" $contact
}
case $1 in
master)
notify master
;;
backup)
notify backup
;;
fault)
notify fault
;;
*)
echo "Usage: $(basename $0) {master|backup|fault}"
exit 1
;;
esac

# 配置文件keepalived.conf内容
! Configuration File for keepalived

global_defs {
   notification_email {
        agou-ops@foxmail.com
    }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id master
   vrrp_mcast_group4  224.1.111.1
}

vrrp_instance VI_1 {
    state BACKUP
    interface ens33
    virtual_router_id 51
    priority 98
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass GU6hbFS4
    }
    virtual_ipaddress {
        172.16.1.99 dev ens33 label ens33:0
    }
    notify_master "/root/notify.sh master"
    notify_backup "/root/notify.sh backup"
    notify_fault "/root/notify.sh fault"
}

# mail.rc内容
set from=ictw@qq.com  
set smtp=smtp.qq.com 
set smtp-auth-user=ictw@qq.com  
set smtp-auth-password=qitvvrcfidxxxxxxx
set smtp-auth=login
set ssl-verify=ignore
```



### 其他

参考配置文件

```bash
! Configuration File for keepalived     #全局定义
  
global_defs {
notification_email {     #指定keepalived在发生事件时(比如切换)发送通知邮件的邮箱
ops@wangshibo.cn   #设置报警邮件地址，可以设置多个，每行一个。 需开启本机的sendmail服务
tech@wangshibo.cn
}
  
notification_email_from ops@wangshibo.cn   #keepalived在发生诸如切换操作时需要发送email通知地址
smtp_server 127.0.0.1      #指定发送email的smtp服务器
smtp_connect_timeout 30    #设置连接smtp server的超时时间
router_id master-node     #运行keepalived的机器的一个标识，通常可设为hostname。故障发生时，发邮件时显示在邮件主题中的信息。
}
  
vrrp_script chk_http_port {      #检测nginx服务是否在运行。有很多方式，比如进程，用脚本检测等等
    script "/opt/chk_nginx.sh"   #这里通过脚本监测
    interval 2                   #脚本执行间隔，每2s检测一次
    weight -5                    #脚本结果导致的优先级变更，检测失败（脚本返回非0）则优先级 -5
    fall 2                    #检测连续2次失败才算确定是真失败。会用weight减少优先级（1-255之间）
    rise 1                    #检测1次成功就算成功。但不修改优先级
}
  
vrrp_instance VI_1 {    #keepalived在同一virtual_router_id中priority（0-255）最大的会成为master，也就是接管VIP，当priority最大的主机发生故障后次priority将会接管
    state MASTER    #指定keepalived的角色，MASTER表示此主机是主服务器，BACKUP表示此主机是备用服务器。注意这里的state指定instance(Initial)的初始状态，就是说在配置好后，这台服务器的初始状态就是这里指定的，但这里指定的不算，还是得要通过竞选通过优先级来确定。如果这里设置为MASTER，但如若他的优先级不及另外一台，那么这台在发送通告时，会发送自己的优先级，另外一台发现优先级不如自己的高，那么他会就回抢占为MASTER
    interface em1          #指定HA监测网络的接口。实例绑定的网卡，因为在配置虚拟IP的时候必须是在已有的网卡上添加的
    mcast_src_ip 103.110.98.14  # 发送多播数据包时的源IP地址，这里注意了，这里实际上就是在哪个地址上发送VRRP通告，这个非常重要，一定要选择稳定的网卡端口来发送，这里相当于heartbeat的心跳端口，如果没有设置那么就用默认的绑定的网卡的IP，也就是interface指定的IP地址
    virtual_router_id 51         #虚拟路由标识，这个标识是一个数字，同一个vrrp实例使用唯一的标识。即同一vrrp_instance下，MASTER和BACKUP必须是一致的
    priority 101                 #定义优先级，数字越大，优先级越高，在同一个vrrp_instance下，MASTER的优先级必须大于BACKUP的优先级
    advert_int 1                 #设定MASTER与BACKUP负载均衡器之间同步检查的时间间隔，单位是秒
    authentication {             #设置验证类型和密码。主从必须一样
        auth_type PASS           #设置vrrp验证类型，主要有PASS和AH两种
        auth_pass 1111           #设置vrrp验证密码，在同一个vrrp_instance下，MASTER与BACKUP必须使用相同的密码才能正常通信
    }
    virtual_ipaddress {          #VRRP HA 虚拟地址 如果有多个VIP，继续换行填写
        103.110.98.20
    }
 
track_script {                      #执行监控的服务。注意这个设置不能紧挨着写在vrrp_script配置块的后面（实验中碰过的坑），否则nginx监控失效！！
   chk_http_port                    #引用VRRP脚本，即在 vrrp_script 部分指定的名字。定期运行它们来改变优先级，并最终引发主备切换。
}
}
```

