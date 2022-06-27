# Nginx + keepalived 

## 双机主从模式

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
   vrrp_mcast_group4 224.1.111.11
}

vrrp_script chk_down {          # 声明定义脚本
        script "[[ -f /etc/keepalived/down ]] && exit 1 || exit 0"      # 执行脚本内容
        
        weight -10      # 如果脚本失败则将其权重降低10
        interval 1      # 检查间隔
        fall 1          # 失败次数
        rise 1			# 检测1次成功就算成功
}

vrrp_script chk_ngx {
        script "killall -0 nginx && exit 0 || exit 1"
        # script "/root/chk_ngx.sh"
        weight -10     
        interval 1    
        fall 3         
        rise 2	
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
        192.168.174.99/32 dev ens33 label ens33:1                       # LVS VIP地址
    }
    track_script {          # 调用脚本
        chk_down
        chk_ngx
	}
     notify_master "/root/notify.sh master"
    notify_backup "/root/notify.sh backup"
    notify_fault "/root/notify.sh fault"
}
```

脚本一：通过通知脚本实现当 keepalived 节点变成主节点时启用 nginx, 变成备用节点时停用 nginx 

notify.sh

```bash
#!/bin/bash

contact='agou-ops@foxmail.com'
notify() {
mailsubject="$(hostname) to be $1, vip floating"
mailbody="$(date +'%F %T'): vrrp transition, $(hostname) changed to be $1"
echo "$mailbody" | mail -s "$mailsubject" $contact
}
case $1 in
    master)
        systemctl start nginx.service
        notify master
    ;;
    backup)
        systemctl stop nginx.service
        notify backup
    ;;
    fault)
        systemctl stop nginx.service
        notify fault
    ;;
    *)
    echo "Usage: $(basename $0) {master|backup|fault}"
    exit 1
    ;;
esac
```

脚本二：检测 nginx 运行状态，当 nginx 异常退出时尝试重新启动，若仍然无法启动 nginx，则将该节点降为备用节点(BACKUP)

chk_ngx.sh

```bash
#!/bin/bash
counter=$(ps -C nginx --no-heading|wc -l)
if [ "${counter}" = "0" ]; then
    /usr/local/bin/nginx
    sleep 2
    counter=$(ps -C nginx --no-heading|wc -l)
    if [ "${counter}" = "0" ]; then
        /etc/init.d/keepalived stop
    fi
fi
```

## 参考链接

- https://blog.driverzeng.com/zenglaoshi/2326.html