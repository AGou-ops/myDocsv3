# Redis 快速脚本

**需求：**

 **1.可以启动、关闭、重启redis**

 **启动：当redis没有运行的时候直接启动并输出启动成功，运行了就输出已经启动，避免重复进程**

 **关闭：如果进程存在就关闭并输出已经关闭，没有进程则直接输出redis没有启动**

 **重启：当进程存在就先执行关闭再启动，并输出重启成功，如果进程不存在直接执行启动**

 **2.可以查看redis进程**

 **3.可以登录redis**

 **4.可以查看redis日志**

 **5.由于redis是多端口实例，因此需要能够实现指定一个端口就能够启动这个端口的进程****

代码如下：

```shell
#!/bin/bash
#redis控制脚本
redis_port=$2
redis_name="redis_${redis_port}"
redis_home=/data/redis_cluster/${redis_name}
redis_conf=${redis_home}/conf/${redis_name}.conf
redis_host=`ifconfig ens33 | awk 'NR==2{print $2}'`
redis_pass=$3
red="\e[031m"
green="\e[032m"
yellow="\e[033m"
black="\e[0m"

Usage(){
	echo "usage: sh $0 {start|stop|restart|login|ps|logs|-h} PORT"
}

Start(){
        redis_cz=`netstat -lnpt | grep redis | grep "${redis_port}" | wc -l`
        if [ $redis_cz -eq 0 ];then
                redis-server ${redis_conf}
                if [ -z $state ];then
                        echo -e "${green}redis ${redis_port}实例启动成功!${black}"
                else
                        echo -e "${green}redis ${redis_port}实例重启成功!${black}"
                fi
                netstat -lnpt | grep ${redis_port}
        else
                if [ -z $state ];then
                        echo -e "${yellow}redis "${redis_port}"实例已经是启动状态!${black}"
                        netstat -lnpt | grep ${redis_port}
                fi
        fi
}

Stop(){
        redis_cz=`netstat -lnpt | grep redis | grep "${redis_port}" | wc -l`
        if [ $redis_cz -gt 0 ];then
                redis-cli -h $redis_host -p $redis_port shutdown
                if [ -z $state ];then
                        echo -e "${green}redis ${redis_port}实例关闭成功!"
                fi
        else
                if [ -z $state ];then
                        echo -e "${red}redis "${redis_port}"实例没有启动!${black}"
                fi
        fi
}

Restart(){
	state=restart
	Stop
	Start
}

Login(){
        redis_cz=`netstat -lnpt | grep redis | grep "${redis_port}" | wc -l`
        if [ $redis_cz -gt 0 ];then
		redis-cli -h $redis_host -p $redis_port 
	else
		echo -e "${red}redis ${redis_port}实例没有启动!${black}"
		echo -en  "${yellow}是否要启动reis? [y/n]${black}"
		read action
		case $action in 
		y|Y)
			Start
			Login
			;;
		n|N)
			exit 1
			;;
		esac
	fi
}

Ps(){
	ps aux | grep redis
}

Logs(){
	tail -f ${redis_home}/logs/${redis_name}.log
}
	
Help(){
	Usage
	echo "+-------------------------------------------------------------------------------+"	
	echo "| start		启动redis							|"
	echo "| stop		关闭redis							|"
	echo "| restart	重启redis							|"
	echo "| login		登陆redis							|"
	echo "| ps		查看redis的进程信息,不需要加端口号				|"
	echo "| logs		查看redis日志持续输出						|"
	echo "| 除ps命令外,所有命令后面都需要加端口号						|"	
	echo "+-------------------------------------------------------------------------------+"	
}

if [ $# -ne 2 ];then
	if [ "$1" != "ps" ] &&  [ "$1" != "-h" ];then
		Usage
		exit 1
	fi
fi


case $1 in 
start)
	Start
	;;
stop)
	Stop
	;;
restart)
	Restart
	;;
login)
	Login
	;;
ps)
	Ps
	;;
logs)
	Logs
	;;
-h)
	Help
	;;
*)
	Help
	;;
esac
```

