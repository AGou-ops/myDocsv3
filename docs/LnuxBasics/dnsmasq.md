# dnsmasq 部署与使用

## 编译安装

从 http://www.thekelleys.org.uk/dnsmasq/ 下载源码包, 安装编译环境, 然后直接使用`root`身份运行`make install`命令即可, 默认安装的二进制文件位置为`/usr/local/sbin/dnsmasq`.

## install dnsmasq on ubuntu

### Step 1: Installing Dnsmasq on Ubuntu 18.04

Ubuntu 18.04 comes with systemd-resolve which you need to disable since it binds to port **53** which will conflict with Dnsmasq port.

Run the following commands to disable the resolved service:

```bash
sudo systemctl disable systemd-resolved
sudo systemctl stop systemd-resolved
```

Also, remove the symlinked `resolv.conf` file

```bash
$ ls -lh /etc/resolv.conf 
lrwxrwxrwx 1 root root 39 Aug  8 15:52 /etc/resolv.conf -> ../run/systemd/resolve/stub-resolv.conf

$ sudo rm /etc/resolv.conf
```

Then create new **resolv.conf** file.

```bash
echo "nameserver 8.8.8.8" > /etc/resolv.conf
```

Dnsmasq is available on the apt repository, easy installation can be done by running:

```bash
sudo apt-get install dnsmasq
```

The main configuration file for Dnsmasq is `/etc/dnsmasq.conf`. Configure Dnsmasq by modifying this file.

```bash
sudo vim /etc/dnsmasq.conf
```

Here is minimal configuration

```bash
# Listen on this specific port instead of the standard DNS port
# (53). Setting this to zero completely disables DNS function,
# leaving only DHCP and/or TFTP.
port=53
# Never forward plain names (without a dot or domain part)
domain-needed
# Never forward addresses in the non-routed address spaces.
bogus-priv
# By  default,  dnsmasq  will  send queries to any of the upstream
# servers it knows about and tries to favour servers to are  known
# to  be  up.  Uncommenting this forces dnsmasq to try each query
# with  each  server  strictly  in  the  order  they   appear   in
# /etc/resolv.conf
strict-order
# Set this (and domain: see below) if you want to have a domain
# automatically added to simple names in a hosts-file.
expand-hosts
# Set the domain for dnsmasq. this is optional, but if it is set, it
# does the following things.
# 1) Allows DHCP hosts to have fully qualified domain names, as long
#     as the domain part matches this setting.
# 2) Sets the "domain" DHCP option thereby potentially setting the
#    domain of all systems configured by DHCP
# 3) Provides the domain part for "expand-hosts"
#domain=thekelleys.org.uk
domain=mypridomain.com

# Set Liste address
listen-address=127.0.0.1 # Set to Server IP for network responses
```

If you want to enable DNSSEC validation and caching, uncomment

```bash
#dnssec
```

Make any other changes you see relevant and restart dnsmasq when done:

```bash
sudo systemctl restart dnsmasq
```

### Step 2: Adding DNS records to Dnsmasq

Add DNS records in the file.`/etc/hosts`. Dnsmasq will reply to queries from clients using these records.

```bash
$ sudo vim /etc/hosts
10.1.3.4 server1.mypridomain.com
10.1.4.4 erp.mypridomain.com 
192.168.10.2 checkout.mypridomain.com 
192.168.4.3 hello.world
```

You need to restart dnsmasq service after adding the records.

```bash
sudo systemctl restart dnsmasq
```

### Step 3: Testing Dnsmasq DNS functionality

To verify that Dnsmasq responds to the records we added, point DNS server of your servers to Dnsmasq server. Edit `/etc/network/interfaces` for persistent configuration, or the file `/etc/netplan/` on Ubuntu 18.04 servers.

Since this is a test, I’ll modify runtime file `/etc/resolv.conf`

```bash
$ sudo vim /etc/resolv.conf
nameserver 127.0.0.1
nameserver 8.8.8.8
```

Test using dig:

```bash
$ dig A erp.mypridomain.com

; <<>> DiG 9.11.3-1ubuntu1.1-Ubuntu <<>> A erp.mypridomain.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 43392
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;erp.mypridomain.com.		IN	A

;; ANSWER SECTION:
erp.mypridomain.com.	0	IN	A	10.1.4.4

;; Query time: 0 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Tue Aug 21 10:35:41 UTC 2018
;; MSG SIZE  rcvd: 64
```

Here is another example:

```bash
$ dig checkout.mypridomain.com A +noall +answer

; <<>> DiG 9.11.3-1ubuntu1.1-Ubuntu <<>> checkout.mypridomain.com A +noall +answer
;; global options: +cmd
checkout.mypridomain.com. 0 IN A 192.168.10.2
```

You can confirm that we’re getting responses as configured.

### Configure Dnsmasq as DHCP Server (Optional)

You can use Dnsmasq to assign IP addresses to clients, either static or dynamic.

Edit the file a`/etc/dnsmasq.conf` and provide DHCP options. You need to provide:

- Default gateway IP address
- DNS server IP address (Probably Dnsmasq or different DNS server)
- Network Subnet mask
- DHCP Addresses range
- NTP server

See below example

```bash
dhcp-range=192.168.3.25,192.168.3.50,24h
dhcp-option=option:router,192.168.3.1
dhcp-option=option:ntp-server,192.168.3.5
dhcp-option=option:dns-server,192.168.3.5
dhcp-option=option:netmask,255.255.255.0
```

Restart dnsmasq and configure clients to obtain an IP address from this server.

```
sudo systemctl restart dnsmasq
```

### Conclusion

Dnsmasq is an easy to configure DNS cache which can speed up internet browsing and the resolving of domain records on your systems. You can also enjoy its DHCP subsystem which is easy to configure and use for a small network.

> 来源: https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu-18-04-lts/

## install dnsmasq on CentOS

> 参考: https://www.tecmint.com/setup-a-dns-dhcp-server-using-dnsmasq-on-centos-rhel/

## 参考链接

- dnsmasq docs: http://www.thekelleys.org.uk/dnsmasq/doc.html