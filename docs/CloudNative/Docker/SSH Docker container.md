# SSH Docker container    

**System has not been booted with systemd as init system (PID 1). Can't operate.**
**Failed to connect to bus: Host is down**

---

解决方法：

```bash
docker run -itd  --privileged --name centos centos /usr/sbin/init
```

创建完成后，请使用以下命令进入容器：

```bash
docker exec -it centos /bin/bash
```

安装`openssh`服务器端、客户端等工具：

```bash
yum install passwd openssl openssh-server openssh-clients initscripts -y
```

启动 ssh，`systemctl start sshd`