# LVS 进阶配置

以下内容的maste为`172.16.1.134`，RS1为`192.168.1.111`，RS2为`192.168.1.112`

## 使用防火墙标记

1. （测试）为RS1和RS2配置HTTPS

```bash
[root@master ~]\# cd /etc/pki/CA/
[root@master CA]\# ls
certs  crl  newcerts  private
# 生成私钥
[root@master CA]\# (umask 077;openssl genrsa -out private/cakey.pem 2048) 
Generating RSA private key, 2048 bit long modulus
...+++
.............................................................................................+++
e is 65537 (0x10001)
# 生成自签证书
[root@master CA]\# openssl req -new -x509 -key private/cakey.pem -out cacert.pem -days 365
[root@master CA]\# touch index.txt
[root@master CA]\# echo 01 > serial
```

```bash
# node01生成私钥
[root@node01 ~]\#  (umask 077;openssl genrsa -out https.key 2048)         
Generating RSA private key, 2048 bit long modulus
..........................................................................+++
..........................................+++
e is 65537 (0x10001)
# 将私钥发送到CA主机进行签署
[root@node01 ~]\# scp https.key root@master:/root
[root@master ~]\# openssl req -new -key https.key -out https.csr
[root@master ~]\# openssl ca -in https.csr -out https.crt -days 365
```

2. 添加防火墙标记

```bash
[root@master ~]\# iptables -t mangle -A PREROUTING -d 172.16.1.134 -p tcp -m multiport --dport 80,443 -j MARK --set-mark 2
```

3. 添加规则

```bash
[root@master ~]\# ipvsadm -C
[root@master ~]\# ipvsadm -A -f 2 -s sh
[root@master ~]\# ipvsadm -a -f 2 -r  192.168.1.111 -m  
[root@master ~]\# ipvsadm -a -f 2 -r  192.168.1.112 -m
[root@master ~]\# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
FWM  2 sh
  -> 192.168.1.111:0              Masq    1      0          0         
  -> 192.168.1.112:0              Masq    1      0          0         
```

4. 测试

```bash
[root@master ~]\# curl https://172.16.1.134 --cacert /etc/pki/CA/cacert.pem 
<h1>Backend RS2 192.168.1.112</h1>
```

## 使用ldirectord

1. 安装ldirectord

```bash
[root@master ~]\# yum install -y http://rpmfind.net/linux/mageia/distrib/4/x86_64/media/core/release/ldirectord-3.9.5-2.mga3.x86_64.rpm
```

2. 。。。

