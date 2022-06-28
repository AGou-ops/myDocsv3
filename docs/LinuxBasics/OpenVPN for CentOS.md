# OpenVPN for CentOS 

## CentOS7 安装配置 OpenVPN

## OpenVPN 简介

OpenVPN 是一个基于 OpenSSL 库的应用层 VPN 实现。和传统 VPN 相比，它的优点是简单易用。 [1] 

OpenVPN允许参与建立VPN的单点使用共享金钥，电子证书，或者用户名/密码来进行身份验证。它大量使用了OpenSSL加密库中的SSLv3/TLSv1 协议函式库。OpenVPN能在Solaris、Linux、OpenBSD、FreeBSD、NetBSD、Mac OS X与Windows 2000/XP/Vista上运行，并包含了许多安全性的功能。它并不是一个基于Web的VPN软件，也不与IPsec及其他VPN软件包兼容。

## OpenVPN 安装

### 使用`EasyRSA`构建 CA

1. 首先从项目[Github存储库](https://github.com/OpenVPN/easy-rsa)下载EasyRSA的最新版本并解压：

```bash
cd && wget https://github.com/OpenVPN/easy-rsa/releases/download/v3.0.5/EasyRSA-nix-3.0.7.tgz
tar xzf EasyRSA-3.0.7.tgz
```

2. 复制模板文件，并进行适当修改：

```bash
mv EasyRSA-3.0.7 EasyRSA-CA; cd EasyRSA-CA
cp vars.example vars
# ---------- 编辑 vars 文件内容`95`行左右 ----------
set_var EASYRSA_REQ_COUNTRY    "CN"
set_var EASYRSA_REQ_PROVINCE   "Shandong"
set_var EASYRSA_REQ_CITY       "Jinan"
set_var EASYRSA_REQ_ORG        "AGou"
set_var EASYRSA_REQ_EMAIL      "AGou-ops@foxmail.com"
set_var EASYRSA_REQ_OU         "Community"
```

修改完成之后保存退出。

3. 初始化`PKI`：

```bash
[root@test EasyRSA-CA]\# ./easyrsa init-pki

Note: using Easy-RSA configuration from: /root/EasyRSA-3.0.7/vars

init-pki complete; you may now create a CA or requests.
Your newly created PKI dir is: /root/EasyRSA-3.0.7/pki
```

4. 接下来建立`CA`：

```bash
[root@test EasyRSA-CA]\# ./easyrsa build-ca nopass

Note: using Easy-RSA configuration from: /root/EasyRSA-3.0.7/vars
Using SSL: openssl OpenSSL 1.0.2k-fips  26 Jan 2017
Generating RSA private key, 2048 bit long modulus
...............+++
............................................................................................................................+++
e is 65537 (0x10001)
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Common Name (eg: your user, host, or server name) [Easy-RSA CA]:

CA creation complete and you may now import and sign cert requests.
Your new CA certificate file for publishing is at:
/root/EasyRSA-3.0.7/pki/ca.crt
```

完成后，该脚本将创建两个文件-CA公共证书`PKI/ca.crt`和CA私钥`PKI/private/ca.key`

### 安装 OpenVPN 和 EasyRSA

1. 可以在 OpenVPN 的官方 github 仓库 下载最新源码包进行编译安装，在这里为了方便，我使用`epel`仓库进行安装：

```bash
yum install epel-release -y
yum install openvpn -y
```

2. 获取最新版本的`EasyRSA`：

```bash
cd && wget https://github.com/OpenVPN/easy-rsa/releases/download/v3.0.5/EasyRSA-nix-3.0.7.tgz
tar xzf EasyRSA-3.0.7.tgz
mv EasyRSA-3.0.7 EasyRSA-Sever1
cd EasyRSA-Sever1
```

3. 尽管我们已经在 CA 主机上初始化了PKI，但是我们还需要在 `OpenVPN 服务器`上创建一个新的 PKI ：

```bash
[root@test EasyRSA-Server1]\# ./easyrsa init-pki

Note: using Easy-RSA configuration from: /root/EasyRSA-Server1/vars

init-pki complete; you may now create a CA or requests.
Your newly created PKI dir is: /root/EasyRSA-Server1/pki
```

### 创建`Diffie-Hellman`和`HMAC`密钥

生成一个`Diffie-Hellman`密钥，该密钥将在密钥交换期间使用，并使用`HMAC`签名文件为连接添加附加的安全层。

1. 在`OpenVPN`服务器上，生成`Diffie-Hellman`密钥：

```bash
cd ~/EasyRSA-Server1
./easyrsa gen-dh
```

2. 复制该文件到`/etc/openvpn`目录中去：

```bash
cp /root/EasyRSA-Server1/pki/dh.pem /etc/openvpn
```

3. 接下来，使用`openvpn`二进制文件生成`HMAC`签名：

```bash
openvpn --genkey --secret ta.key
```

然后将生成的`ta.key`复制到`/etc/openvpn`目录中去：

```bash
cp ta.key /etc/openvpn
```

### 创建服务器证书和私钥

1. 进入`OpenVPN服务器`上的EasyRSA目录，并为服务器和证书请求文件生成一个新的私钥：

```bash
cd ~/EasyRSA-Server1
./easyrsa gen-req server1 nopass
```

该命令将创建两个文件，一个私钥（`server1.key`）和一个证书请求文件（`server1.req`）

2. 将生成的私钥复制到`/etc/openvpn`目录：

```bash
cp /root/EasyRSA-Server1/pki/private/server1.key /etc/openvpn/
```

3. 将证书请求发送到`CA`主机（这里我CA主机与OpenVPN为同一主机）：

```bash
cp ~/EasyRSA-Server1/pki/reqs/server1.req /tmp
```

4. 登录`CA主机`，切换到 EasyRSA 目录并导入证书请求文件：

```bash
cd ~/EasyRSA-CA
./easyrsa import-req /tmp/server1.req server1
```

此命令只是将请求文件复制到`pki/reqs`目录中。

5. 在`CA主机`上，签署证书：

```bash
./easyrsa sign-req server server1
```

确认信息无误之后，输入 yes 然后点击回车即可。

6. 在`CA主机`上，将签名的证书`server1.crt`和`ca.crt`文件传发送回`OpenVPN主机`：

```bash
cp ~/EasyRSA-CA/pki/issued/server1.crt /etc/openvpn/
cp ~/EasyRSA-CA/pki/ca.crt /etc/openvpn/
```

:warning: 这里需要注意的是：我的`CA主机`和`OpenVPN`主机是同一主机，所以上面的`/etc/openvpn`目录是`OpenVPN主机`的。

所有步骤都完成之后，在`/etc/openvpn`目录下应当有这些文件存在：

```bash
[root@test EasyRSA-CA]\# ls /etc/openvpn/
ca.crt  client  dh.pem  server  server1.crt  server1.key  ta.key
```

### 配置`OpenVPN`服务

1. 将 OpenVPN 的模板配置文件复制到`/etc/openvpn`：

```bash
cp /usr/share/doc/openvpn-2.4.9/sample/sample-config-files/server.conf /etc/openvpn/server1.conf
```

2. 修改`server1.conf`，找到证书，密钥和DH参数指令并更改文件名：

```bash
user nobody
group nogroup
# ---------- 大约在78行左右 ----------
cert server1.crt
key server1.key 

dh dh.pem

# 在文件末尾添加以下行。该指令会将消息身份验证算法（HMAC）从SHA1更改为SHA256
auth SHA256
```

:information_source:可选： 要通过VPN重定向客户端流量，请找到并取消注释`redirect-gateway`和`dhcp-option`选项：

`/etc/openvpn/server1.conf`

```
push "redirect-gateway def1 bypass-dhcp"

push "dhcp-option DNS 208.67.222.222"
push "dhcp-option DNS 208.67.220.220"
```

默认情况下，使用OpenDNS解析器。您可以更改它并使用CloudFlare，Google或您想要的任何其他DNS解析器。

完整配置文件参考：

```
port 1194
proto udp
dev tun
ca ca.crt
cert server1.crt
key server1.key  # This file should be kept secret
dh dh.pem
server 10.8.0.0 255.255.255.0
ifconfig-pool-persist ipp.txt
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 208.67.222.222"
push "dhcp-option DNS 208.67.220.220"
keepalive 10 120
tls-auth ta.key 0 # This file is secret
cipher AES-256-CBC
user nobody
group nobody
persist-key
persist-tun
status openvpn-status.log
verb 3
explicit-exit-notify 1
auth SHA256
```

### 启动 OpenVPN 服务

```bash
systemctl start openvpn@server1
```

成功启动之后，OpenVPN Server 会创建一个 tun 设备，即`tun0`：

```bash
[root@test openvpn]\# ip a show tun0
3: tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 100
    link/none 
    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0
       valid_lft forever preferred_lft forever
    inet6 fe80::afaa:c6f7:7ae8:3a76/64 scope link flags 800 
       valid_lft forever preferred_lft forever
```

为了正确转发网络数据包，我们需要启用IP转发：

```bash
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf
sysctl -p
```

## 配置客户端接口

创建一个单独的SSL证书，并为每个VPN客户端生成一个不同的配置文件。

客户端私钥和证书请求可以在客户端计算机或服务器上生成。为简单起见，我们将在服务器上生成证书请求，然后将其发送到CA进行签名。

生成客户端证书和配置文件的整个过程如下：

1. 在OpenVPN服务器上生成私钥和证书请求；
2. 将请求发送到要签名的CA计算机；
3. 将签名的SSL证书复制到OpenVPN服务器并生成配置文件；
4. 将配置文件发送到VPN客户端的计算机。

1. 首先，在`OpenVPN主机`上创建一组目录来存放客户端文件：

```bash
mkdir -p ~/openvpn-clients/{configs,base,files}
```

- `base` 目录将存储将在所有客户端文件之间共享的基本文件和配置；
- `configs` 目录将存储生成的客户端配置；
- `files` 目录将存储特定于客户端的证书/密钥对。

2. 复制`ca.crt`和`ta.key`文件到`~/openvpn-clients/base`目录：

```bash
cp ~/EasyRSA-Server1/ta.key ~/openvpn-clients/base/
cp /etc/openvpn/ca.crt ~/openvpn-clients/base/
```

3. 将示例客户端配置文件复制到`~/openvpn-clients/base/`目录下：

```bash
cp /usr/share/doc/openvpn-2.4.9/sample/sample-config-files/client.conf ~/openvpn-clients/base/
```

4. 编辑`client.conf`文件以匹配我们的服务器配置：

```bash
remote 172.16.1.131 1194
# 在文件结尾添加以下内容
auth SHA256
key-direction 1
```

完整配置文件参考如下所示：

```
client
dev tun
proto udp
remote 172.16.1.131 1194
resolv-retry infinite
nobind
persist-key
persist-tun
remote-cert-tls server
cipher AES-256-CBC
verb 3
auth SHA256
key-direction 1
```

5. 接下来，创建一个简单的bash脚本，它将基本配置和文件与客户端证书和密钥合并，并将生成的配置存储在`~/openvpn-clients/configs`目录中：

`vim ~/openvpn-clients/gen_config.sh`

```bash
#!/bin/bash

FILES_DIR=$HOME/openvpn-clients/files
BASE_DIR=$HOME/openvpn-clients/base
CONFIGS_DIR=$HOME/openvpn-clients/configs

BASE_CONF=${BASE_DIR}/client.conf
CA_FILE=${BASE_DIR}/ca.crt
TA_FILE=${BASE_DIR}/ta.key

CLIENT_CERT=${FILES_DIR}/${1}.crt
CLIENT_KEY=${FILES_DIR}/${1}.key

# Test for files
for i in "$BASE_CONF" "$CA_FILE" "$TA_FILE" "$CLIENT_CERT" "$CLIENT_KEY"; do
    if [[ ! -f $i ]]; then
        echo " The file $i does not exist"
        exit 1
    fi

    if [[ ! -r $i ]]; then
        echo " The file $i is not readable."
        exit 1
    fi
done

# Generate client config
cat > ${CONFIGS_DIR}/${1}.ovpn <<EOF
$(cat ${BASE_CONF})
<key>
$(cat ${CLIENT_KEY})
</key>
<cert>
$(cat ${CLIENT_CERT})
</cert>
<ca>
$(cat ${CA_FILE})
</ca>
<tls-auth>
$(cat ${TA_FILE})
</tls-auth>
EOF
```

赋予执行权限：

```bash
chmod +x ~/openvpn-clients/gen_config.sh
```

## 创建客户端证书私钥和配置 

生成客户端私钥和证书请求的过程与生成服务器密钥和证书请求的过程相同。

1. 登录`OpenVPN主机`为客户端生成一个新的私钥和一个证书请求：

```bash
cd ~/EasyRSA-Server1
./easyrsa gen-req client1 nopass
```

2. 将私钥`client1.key`复制到`~/openvpn-clients/files`中：

```bash
cp ~/EasyRSA-Server1/pki/private/client1.key ~/openvpn-clients/files/
```

3. 将证书请求文件传输到`CA主机`：

```bash
cp ~/EasyRSA-Server1/pki/reqs/client1.req /tmp
```

4. 进入`CA主机`，导入证书请求并进行签署：

```bash
cd ~/EasyRSA-CA
./easyrsa import-req /tmp/client1.req client1
./easyrsa sign-req client client1
```

5. 接下来，将签好名的证书`client1.crt`文件发送回`OpenVPN主机`：

```bash
cp ~/EasyRSA-CA/pki/issued/client1.crt ~/openvpn-clients/files
```

6. 最后一步是使用`gen_config.sh`脚本生成客户端配置，切换到`~/openvpn-clients`目录并使用客户端名称作为参数运行脚本：

```bash
cd ~/openvpn-clients
./gen_config.sh client1
```

该脚本将在`~/client-configs/configs`目录中创建一个名为`client1.ovpn`的文件：

```bash
[root@test openvpn-clients]\# ls ~/openvpn-clients/configs
client1.ovpn
```

此时，客户端配置已创建，可以直接将配置文件传输到要用作客户端的设备上。

如果想要添加其他的客户端，重复这些步骤即可。

## 使用 OpenVPN

在`Debian`系系统下：

```bash
sudo apt update -y && sudo apt instal openvpn
```

安装完软件包之后，使用以下命令连接到`OpenVPN`服务器：

```bash
sudo openvpn --config client1.ovpn
```

## 快速安装 OpenVPN

```bash
sudo apt update -y
sudo apt install -y openvpn
```

从 github 获取一键安装脚本:

```bash
git clone https://github.com/angristan/openvpn-install.git
cd openvpn-install
```

赋予脚本可执行权限:

```bash
chmod +x openvpn-install
```

执行脚本:

```bash
AUTO_INSTALL=y ./openvpn-install.sh
```

:warning: 注意: 在客户端使用 OpenVPN 时, 要确保服务器端的 OpenVPN 监听的端口处于放行状态.

Linux 客户端使用:

```bash
sudo apt install network-manager-openvpn
```

```bash
sudo openvpn ./client.ovpn
```

Windows 客户端使用:

直接去[ OpenVPN 官方下载站点](https://openvpn.net/community-downloads/)下载然后导入客户端配置文件 `client.ovpn`, 然后启动服务即可.