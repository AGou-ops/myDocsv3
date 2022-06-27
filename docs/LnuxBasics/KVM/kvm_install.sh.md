# kvm_install.sh 

```bash
#!/bin/bash
echo "[1] 检查是否开启虚拟化"
echo "[2] 配置YUM"
echo "[3] 安装KVM"
echo "[4] 关闭防火墙"
echo "[5] 关闭SElinux"
echo "[6] 设置桥接"
echo "[7] 安装虚拟机"
echo "[8] 查看虚拟机"
echo "[9] 连接虚拟机"
echo "[0] 退出"
read -p "请输入您的选项:"  NUM
if [ $NUM = 0 ];then
	exit;
elif [ $NUM = 1 ];then
#检查是否开启虚拟化
	if $(egrep -o 'vmx|svm' /proc/cpuinfo >>/dev/null);then
		echo "[当前设备已开启虚拟化]"
	else
		echo "[当前设备未开启虚拟化，请参考https://www.asfor.cn/archives/611.html教程开启虚拟化后再次使用此脚本]";
	fi
elif [ $NUM = 2 ];then
#配置yum源
	mv /etc/yum.repos.d/* ~/;
	echo "[此处使用网易163镜像源]"
	echo "[其他镜像源可参考https:/www.asfor.cn/server/mirror]";
	echo "[您的repo文件已被移动至当前用户的家目录]"
	# curl -o /etc/yum.repos.d/CentOS7-Base-163.repo http://mirrors.163.com/.help/CentOS7-Base-163.repo;
	curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo;
	# sed -i 's/\$releasever/7/g' /etc/yum.repos.d/CentOS7-Base-163.repo;
	# sed -i 's/^enabled=.*/enabled=1/g' /etc/yum.repos.d/CentOS7-Base-163.repo;
	echo "[yum源文件配置成功，正在执行检测软件包数量]";
	yum clean all;
	yum makecache;
	yum repolist;
elif [ $NUM = 3 ];then
#安装KVM
	yum -y install epel-release vim wget net-tools unzip zip gcc gcc-c++;
	yum -y install qemu-kvm qemu-kvm-tools qemu-img virt-manager libvirt libvirt-python libvirt-client virt-install virt-viewer bridge-utils libguestfs-tools;
	echo "[KVM相关工具已安装成功]"
elif [ $NUM = 4 ];then
#关闭防火墙
systemctl stop firewalld;
echo "[防火墙已关闭]"
systemctl disable firewalld;
echo "[防火墙服务已被移出开机启动列表]"
elif [ $NUM = 5 ];then
#关闭SELINUX
setenforce 0;
sed -ri 's/^(SELINUX=).*/\1disabled/g' /etc/selinux/config;
echo "[SELINUX已被临时关闭，重启后将永久生效]";
elif [ $NUM = 6 ];then
#设置桥接
	read -p "网卡名称(example:ens33): " NETNAME
	read -p "IP(example:192.168.81.134): " NETIP
	read -p "网关(example:192.168.81.1): " NETGATEWAY
	read -p "子网掩码(example:255.255.255.0):" NETMASK
	cp /etc/sysconfig/network-scripts/ifcfg-$NETNAME /etc/sysconfig/network-scripts/ifcfg-br0
cat >> /etc/sysconfig/network-scripts/ifcfg-$NETNAME <<EOF
BRIDGE=br0
NM_CONTROLLED=no
EOF

echo "[$NETNAME网卡已修改完成]"

cat > /etc/sysconfig/network-scripts/ifcfg-br0 <<EOF
TYPE=Bridge
DEVICE=br0
NM_CONTROLLED=no
BOOTPROTO=static
NAME=br0
ONBOOT=yes
IPADDR=$NETIP
NETMASK=$NETMASK
GATEWAY=$NETGATEWAY
DNS1=114.114.114.114
DNS2=8.8.8.8
EOF
echo "[br0网卡已修改完成]"
systemctl restart network
echo "[网络重启完成，您的网卡列表如下，请检查！]"
ip addr list

elif [ $NUM = 7 ];then
#安装虚拟机
    read -p "输入虚拟机的名字："  NAME
    read -p "CPU核数(example:1)" CPU
    read -p "输入虚拟机内存大小(M): "  MEM
    read -p "输入虚拟及硬盘大小(G): "  SIZE
    read -p "ISO镜像位置(example:/root/rhel-server-7.3-x84_64-dvd.iso):" ISOPATH
    read -p "硬盘镜像位置(example:/root):" DISKPATH
    virt-install --virt-type=kvm --name=$NAME --vcpus=$CPU --memory=$MEM --location=$ISOPATH --disk path=$DISKPATH/$NAME.qcow2,size=$SIZE,format=qcow2 --network bridge=virbr0 --graphics none --extra-args='console=ttyS0' --force

elif [ $NUM = 8 ];then
#查看虚拟机
virsh list --all
elif [ $NUM = 9 ];then
#连接虚拟机
read -p "虚拟机名称: " XNAME
virsh console $XNAME;

else
echo "请输入:0~9数字!";
fi
```

> 脚本来源于网络，仅稍作修改。