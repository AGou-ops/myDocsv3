# WireGuard VPN for Ubuntu 

## WireGuard 简介

​		WireGuard是具有最新加密技术的现代VPN（虚拟专用网）技术。与IPsec和OpenVPN等其他类似解决方案相比，WireGuard更快，更易于配置且性能更高。它是一个跨平台，几乎可以在任何地方运行，包括Linux，Windows，Android和macOS。 Wireguard是对等VPN。它不使用客户端-服务器模型。根据其配置，对等方可以充当传统的服务器或客户端。 WireGuard通过在充当隧道的每个对等设备上创建网络接口来工作。对等体通过交换和验证公共密钥（类似于SSH模型）来相互认证。公钥与隧道中允许的IP地址列表进行映射。 VPN流量封装在UDP中。在本教程中，我们将在充当VPN服务器的Ubuntu 18.04计算机上设置WireGuard。我们还将向您展示如何将WireGuard配置为客户端。客户端的流量将通过Ubuntu 18.04服务器进行路由。此设置可用于防御中间人攻击，匿名浏览网络，绕过受地域限制的内容，或允许您的同事在远程工作时安全地连接到公司网络。

## WG安装

1. 更新软件包列表，并安装管理系统存储库所需的工具：

```bash
sudo apt update
sudo apt install software-properties-common
```

2. 添加 WireGuard 仓库：

```bash
sudo add-apt-repository ppa:wireguard/wireguard
```

出现提示时，按Enter键继续。 add-apt-repository也将自动更新软件包列表。

3. 安装WireGuard软件包：

```bash
sudo apt install wireguard
```

WireGuard作为内核模块运行，该模块被编译为`DKMS`模块。成功完成后，您将看到以下输出：

```
wireguard:
Running module version sanity check.
 - Original module
   - No original module exists within this kernel
 - Installation
   - Installing to /lib/modules/4.15.0-88-generic/updates/dkms/

depmod...

DKMS: install completed.
```

更新内核时，需要将针对新内核编译WireGuard模块。

## 配置WG

WireGuard 程序包附带了两个名为`wg`和`wg-quick`的命令行工具，可用于配置和管理WireGuard接口。

运行以下命令以生成公钥和私钥：

```bash
wg genkey | sudo tee /etc/wireguard/privatekey | wg pubkey | sudo tee /etc/wireguard/publickey
```

:information_source: 公私钥放置于`/etc/wireguard`目录,其中私钥绝对不能与任何人共享

生成密钥后，我们需要配置路由VPN的隧道设备

可以使用ip和wg从命令行设置设备，也可以使用文本编辑器创建配置文件。

创建一个名为`wg0.conf`(文件名可以随意)的新文件，并添加以下内容：

```bash
cat >> /etc/wireguard/wg0.conf << EOF
[Interface]
Address = 192.168.159.0/24		# 填写网络地址段
SaveConfig = true		# 关闭时，接口的当前状态将保存到配置文件中
ListenPort = 51820			# 监听端口
PrivateKey = QNKQCtPo2E5saDnXORaIORhZH6NtcvIJPHqF9EdEL1o=	# 私钥文件,即/etc/wireguard/privatekey
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE		# 在启动之前执行的命令或脚本,使用iptables启用伪装,允许流量离开服务器，从而使VPN客户端可以访问Internet。
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o ens33 -j MASQUERADE		# 在启动之后执行的命令或脚本,接口关闭后，iptables规则将被删除
EOF
```

修改`privatekey`和`wg0.conf`的权限, 保证其安全性：

```bash
sudo chmod 600 /etc/wireguard/{privatekey,wg0.conf}
```

完成后，使用配置文件中指定的属性启动`wg0`接口：

```bash
$ sudo wg-quick up wg0

* 输出内容如下所示:
[#] ip link add wg0 type wireguard
[#] wg setconf wg0 /dev/fd/63
[#] ip -4 address add 192.168.159.0/24 dev wg0
[#] ip link set mtu 1420 up dev wg0
[#] iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE
```

运行`wg show wg0`检查接口状态和配置：

```bash
$ sudo wg show wg0

* 输出内容如下所示:
interface: wg0
  public key: uD6Xex2eP5CEUVcVP3EZB5csh2JReWXthoVZMzURwCQ=
  private key: (hidden)
  listening port: 51820
```

也可以运行`ip a show wg0`来验证接口状态：

```bash
$ ip a show wg0

* 输出内容如下所示:
4: wg0: <POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1420 qdisc noqueue state UNKNOWN group default qlen 1000
    link/none
    inet 192.168.159.0/24 scope global wg0
       valid_lft forever preferred_lft forever
```

设置wireguard 开机自启:

```bash
sudo systemctl enable wg-quick@wg0
```

## 服务器网络和防火墙配置

为了使`NAT`正常工作，我们需要启用IP转发，打开`/etc/sysctl.conf`文件，并添加或取消注释以下行：

```bash
...
net.ipv4.ip_forward=1
...
```

修改完成之后, 执行`sudo sysctl -p`使配置永久生效

如果你使用`UFW`来管理防火墙，则需要在端口51820上打开UDP通信：

```bash
sudo ufw allow 51820/udp
```

至此,WG SERVER 已完成配置

## 客户端配置

### Linux & macOS

去往官方下载站点(https://wireguard.com/install/), 查看如何安装WireGuard

* macOS App Store: https://apps.apple.com/us/app/wireguard/id1441195209?ls=1

* #### Ubuntu ≤ 19.04 [[module](https://launchpad.net/~wireguard/+archive/ubuntu/wireguard) – v1.0.20200413 & [tools](https://launchpad.net/~wireguard/+archive/ubuntu/wireguard) – v1.0.20200319]

  ```
  $ sudo add-apt-repository ppa:wireguard/wireguard
  $ sudo apt-get update
  $ sudo apt-get install wireguard
  ```

设置Linux和macOS客户端过程基本相同, 首先生成公钥与私钥

```bash
wg genkey | sudo tee /etc/wireguard/privatekey | wg pubkey | sudo tee /etc/wireguard/publickey
```

创建`/etc/wireguard/wg0.conf`并添加以下内容:

```bash
[Interface]
PrivateKey = CLIENT_PRIVATE_KEY			# /etc/wireguard/privatekey
Address = 192.168.43.0/24


[Peer]
PublicKey = SERVER_PUBLIC_KEY		# /etc/wireguard/publickey
Endpoint = SERVER_IP_ADDRESS:51820		# 对方wireguard server的ip和端口
AllowedIPs = 0.0.0.0/0
```

### Windows

直接下载客户端工具: https://download.wireguard.com/windows-client/wireguard-amd64-0.1.0.msi

安装好软件之后, 点击左下角的`Add Tunnel`, 创建一个新的隧道`Create new tunnel`

`name`随便起喽, 内容如下:

```bash
[Interface]
PrivateKey = MOeXEby5OG1xQBCP9AJEJEsxmxYDG1FHHzlcOgi/ClI=
Address = 192.168.43.0/24

[Peer]
PublicKey = uD6Xex2eP5CEUVcVP3EZB5csh2JReWXthoVZMzURwCQ=			# 服务器端公钥
Endpoint = 192.168.159.132:51820		# 服务器ip以及端口
AllowedIPs = 0.0.0.0/0
```

![wg](https://s1.ax1x.com/2020/04/20/JQBW4K.png)

## 将客户端对等方添加到服务器

最后一步是将客户端公钥和IP地址添加到服务器：

```bash
# sudo wg set wg0 peer CLIENT_PUBLIC_KEY allowed-ips 10.0.0.2
sudo wg set wg0 peer T5ZTibLaWh9/3EzA1ZfCdiojM0HfXvh99mfVlqHpaU0= allowed-ips 192.168.43.0/24
sudo wg set wg0 peer UqF/BDwShHFulAUN4yx0latMIiIW0Cbb+IuNHEYEBj0= allowed-ips 192.168.43.0/24
```

确保使用在客户端计算机上生成的公用密钥·（`sudo cat /etc/wireguard/publickey`）·更改`CLIENT_PUBLIC_KEY`并调整客户端IP地址（如果不同的话），Windows用户可以从WireGuard软件当中复制公钥

### Linux 和 macos 客户端

在Linux客户端上，运行以下命令以打开界面：

```bash
sudo wg-quick up wg0
```

 现在，应该已连接到Ubuntu服务器，并且来自客户端计算机的流量应通过该服务器进行路由，可以使用以下方法检查连接：

```bash
$ sudo wg

* 输出内容如下所示：
interface: wg0
  public key: sZThYo/0oECwzUsIKTa6LYXLhk+Jb/nqK4kCCP2pyFg=
  private key: (hidden)
  listening port: 48052
  fwmark: 0xca6c

peer: r3imyh3MCYggaZACmkx+CxlD6uAmICI8pe/PGq8+qCg=
  endpoint: XXX.XXX.XXX.XXX:51820
  allowed ips: 0.0.0.0/0
  latest handshake: 1 minute, 22 seconds ago
  transfer: 58.43 KiB received, 70.82 KiB sent
```

停止和关闭隧道：

```bash
sudo wg-quick down wg0
```

### Windows 客户端

点击软件上的`Activate` 即可

![wg-2](https://s1.ax1x.com/2020/04/20/JQBuAP.png)

## 一键安装 wireguard

* https://github.com/angristan/wireguard-install
* https://github.com/l-n-s/wireguard-install

## 参考链接

* wireguard Quick Start : https://www.wireguard.com/quickstart/
* wireguard Install : https://www.wireguard.com/install/