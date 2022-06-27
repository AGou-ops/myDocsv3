# LVS + keepalived 

[LVS/NAT + keepalived](#LVS-NAT 模式)	|	[LVS/DR + keepalived](#LVS-DR 模式)

## LVS-NAT 模式

1. 测试环境

| 服务器类型            | 公网ip          | 内网ip        |
| --------------------- | --------------- | ------------- |
| **LVS VIP**           | **172.16.1.99** | 192.168.1.2   |
| **Keepalived Master** | 172.16.1.134    | 192.168.1.131 |
| **Keepalived Backup** | 172.16.1.138    | 192.168.1.138 |
| **Realserver 1**      | 无              | 192.168.1.130 |
| **Realserver 2**      | 无              | 192.168.1.129 |

:warning:**注意：** MASTER和BACKUP主机上需开启`net.ipv4.ip_forward`内核转发，并且后端RS1和RS2的默认网关应指为`192.168.1.2`

2. Keepalived 完整配置文件内容如下

```bash
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

vrrp_sync_group VG1 {
   group {
      VI_1
      VI_GATEWAY
   }
}

vrrp_instance VI_1 {
    state MASTER			# ---备用主机更换为BACKUP
    interface ens33
    lvs_sync_daemon_inteface ens33
    virtual_router_id 51
    priority 100			# ---备用主机适当降低优先级
    advert_int 1
    authentication {
        auth_type PASS
                auth_pass GU6hbFS4
    }
    virtual_ipaddress {
        172.16.1.99			# LVS VIP公网IP地址
    }
}


vrrp_instance VI_GATEWAY {
    state MASTER			# ---备用主机更换为BACKUP
    interface ens37
    lvs_sync_daemon_inteface ens37
    virtual_router_id 51
    priority 100			# ---备用主机适当降低优先级
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass GU6hbFS4
    }
    virtual_ipaddress {
        192.168.1.2			# LVS VIP内网IP地址
    }
}


virtual_server 172.16.1.99 80 {
    delay_loop 1
    lb_algo wrr
    lb_kind NAT
    protocol TCP
    sorry_server 127.0.0.1 80

    real_server 192.168.1.130 80 {			# RS1
    weight 2
    HTTP_GET {
        url {
            path /index.html
            status_code 200
        }
        nb_get_retry 3
        delay_before_retry 2
        connect_timeout 4
      }
    }
    real_server 192.168.1.129 80 {			# RS2
    weight 1
    HTTP_GET {
        url {
            path /index.html
            status_code 200
        }
        nb_get_retry 3
        delay_before_retry 2
        connect_timeout 4
        }
    }
}
```

3. 客户机网站测试

```bash
suofeiya@suofeiya-15ISK:~$ while true;do curl 172.16.1.99;sleep 1;done
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1> 
...
```

主备节点宕机VIP转移测试

```bash
# 手动关闭master节点的keepalived模拟宕机行为
[root@master ~]\# systemctl stop keepalived  
# 在备用节点上查看状态
[root@master-1 ~]\# systemctl status keepalived
● keepalived.service - LVS and VRRP High Availability Monitor
   Loaded: loaded (/usr/lib/systemd/system/keepalived.service; disabled; vendor preset: disabled)
   Active: active (running) since Sat 2020-04-04 18:42:27 CST; 1s ago
  Process: 4556 ExecStart=/usr/sbin/keepalived $KEEPALIVED_OPTIONS (code=exited, status=0/SUCCESS)
 Main PID: 4557 (keepalived)
   CGroup: /system.slice/keepalived.service
           ├─4557 /usr/sbin/keepalived -D
           ├─4558 /usr/sbin/keepalived -D
           └─4559 /usr/sbin/keepalived -D

Apr 04 18:42:27 master Keepalived_vrrp[4559]: Unknown keyword 'lvs_sync_daemon_inteface'
Apr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_1) removing protocol VIPs.
Apr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_GATEWAY) removing protocol VIPs.
Apr 04 18:42:27 master Keepalived_vrrp[4559]: Using LinkWatch kernel netlink reflector...
Apr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_1) Entering BACKUP STATE
Apr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_GATEWAY) Entering BACKUP STATE
Apr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP sockpool: [ifindex(2), proto(112), unicast(0), fd(10,11)]
Apr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP sockpool: [ifindex(3), proto(112), unicast(0), fd(12,13)]
Apr 04 18:42:27 master Keepalived_healthcheckers[4558]: Activating healthchecker for service [172.16.1.99]:80
Apr 04 18:42:27 master Keepalived_healthcheckers[4558]: Activating healthchecker for service [172.16.1.99]:80
# 查看VIP是否到手
[root@master ~]\# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:50:bb:aa brd ff:ff:ff:ff:ff:ff
    inet 172.16.1.138/24 brd 172.16.1.255 scope global noprefixroute dynamic ens33
       valid_lft 1058sec preferred_lft 1058sec
    inet` 172.16.1.99/32` scope global ens33
       valid_lft forever preferred_lft forever
3: ens37: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:50:bb:b4 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.132/24 brd 192.168.1.255 scope global noprefixroute dynamic ens37
       valid_lft 1561sec preferred_lft 1561sec
    inet 192.168.1.2/32 scope global ens37
       valid_lft forever preferred_lft forever
    inet6 fe80::991a:e225:4c8c:1cf9/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever

# 在master节点上查看组播情况
[root@master ~]\# tcpdump -i ens33 -nn host 224.1.111.1
18:46:04.783459 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20
18:46:05.784773 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20
18:46:06.786493 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20
18:46:07.788104 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20
18:46:08.055519 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 0, authtype simple, intvl 1s, length 20
18:46:08.680212 IP 172.16.1.138 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20
18:46:09.304072 IP 172.16.1.138 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20
18:46:10.304891 IP 172.16.1.138 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20
# 此处可发现备用节点已收到组播通告
```

## LVS-DR 模式

1. 测试环境

| **服务器类型**        | **IP**地址   |
| --------------------- | ------------ |
| **Lvs VIP**           | 172.16.1.99  |
| **Keepalived Master** | 172.16.1.134 |
| **Keepalived Backup** | 172.16.1.138 |
| **Realserver 1**      | 172.16.1.135 |
| **Realserver 2**      | 172.16.1.136 |

2. 后端 RS1和RS2 所需操作(以RS1为例)

```bash
# 为方便起见，此处使用shell脚本，脚本内容如下
[root@node01 ~]\# cat lvs-rs.sh 
#!/bin/bash
vip='172.16.1.99'
mask='255.255.255.255'
dev='lo:1'

case $1 in
start)
    echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore
    echo 1 > /proc/sys/net/ipv4/conf/lo/arp_ignore
    echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce
    echo 2 > /proc/sys/net/ipv4/conf/lo/arp_announce
    #ifconfig $dev $vip netmask $mask
    ip addr add $vip/32 label lo:1 dev lo
    #route add -host $vip dev $dev
    echo "The RS Server is Ready!"
    ;;
stop)
    ifconfig $dev down
    echo 0 > /proc/sys/net/ipv4/conf/all/arp_ignore
    echo 0 > /proc/sys/net/ipv4/conf/lo/arp_ignore
    echo 0 > /proc/sys/net/ipv4/conf/all/arp_announce
    echo 0 > /proc/sys/net/ipv4/conf/lo/arp_announce
    echo "The RS Server is Canceled!"
    ;;
*)
    echo "Usage: $(basename $0) start|stop"
    exit 1
    ;;
esac
```

分别在 RS1和RS2 上执行`sh lvs-rs.sh start `命令，然后查看VIP信息(以RS1为例)

```bash
[root@node01 ~]\# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet` 172.16.1.99/32` scope global lo:1
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
```

3. Keepalived 完整配置文件内容如下

```bash
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
    state MASTER                        # ---备用主机更换为BACKUP
    interface ens33
    lvs_sync_daemon_inteface ens33
    virtual_router_id 51
    priority 100                        # ---备用主机适当降低优先级
    advert_int 1
    authentication {
        auth_type PASS
                auth_pass GU6hbFS4
    }
    virtual_ipaddress {
        172.16.1.99/32 dev ens33 label ens33:0                  # LVS VIP地址
    }
}
virtual_server 172.16.1.99 80 {
    delay_loop 1
    lb_algo wrr
    lb_kind DR
    protocol TCP
    sorry_server 127.0.0.1 80

    real_server 172.16.1.135 80 {                      # RS1
    weight 2
    HTTP_GET {
        url {
            path /index.html
            status_code 200
        }
        nb_get_retry 3
        delay_before_retry 2
        connect_timeout 4
      }
    }
    real_server 172.16.1.136 80 {                      # RS2
    weight 1
    HTTP_GET {
        url {
            path /index.html
            status_code 200
        }
        nb_get_retry 3
        delay_before_retry 2
        connect_timeout 4
                }
    }
}
```

4. 客户端网站测试

```bash
suofeiya@suofeiya-15ISK:~$ while true;do curl 172.16.1.99;sleep 1;done
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
<h1>Backend RS1</h1>
<h1>Backend RS2</h1>
<h1>Backend RS1</h1>
...
```

主备节点宕机VIP转移测试：参考上面NAT模式的步骤