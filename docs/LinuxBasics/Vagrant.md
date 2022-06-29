# Vagrant Basic

## Vagrant 简介

命令行实用工具来快速管理虚拟机的生命周期。(~~终于不用手动繁琐的创建测试环境了.~~)

## 安装与卸载

### 安装（Ubuntu 18.04环境下）

其他系统安装参考： https://www.vagrantup.com/docs/installation

前往`vagrant`官方下载站点，下载与当前系统版本相对应的软件版本，解压缩，然后添加到环境变量中即可。

```bash
curl https://releases.hashicorp.com/vagrant/2.2.10/vagrant_2.2.10_linux_amd64.zip -o vagrant_2.2.10_linux_amd64.zip
unzip vagrant_2.2.10_linux_amd64.zip
chmod +x vagrant
mv vagrant /usr/bin
```

检验安装是否成功：

```bash
$ vagrant --version
Vagrant 2.2.10
```

> :warning:禁用`kvm`
>
> First find out the name of the hypervisor:
>
> ```bash
> $ lsmod | grep kvm
> kvm_intel             204800  6
> kvm                   593920  1 kvm_intel
> irqbypass              16384  1 kvm
> ```
>
> The one we're interested in is `kvm_intel`. You might have another.
>
> Blacklist the hypervisor (run the following as root):
>
> ```bash
> $ echo 'blacklist kvm-intel' >> /etc/modprobe.d/blacklist.conf
> ```

### 卸载

其他系统参考：https://www.vagrantup.com/docs/installation/uninstallation

```bash
rm -rf /opt/vagrant
rm -f /usr/bin/vagrant
```

## 快速开始

初始化`Vagrant`：

```bash
$ mkdir vagrant_workspace && cd vagrant_workspace
$ vagrant init hashicorp/bionic64
```

初始化完毕之后会在当前目录生成一个名为`vagrantfile`的清单文件

启动虚拟机：

```bash
$ vagrant up
```

使用`SSH`连入创建完毕的虚拟机：

```bash
$ vagrant ssh
```

删除（摧毁）虚拟机：

```bash
$ vagrant destroy
```

摧毁虚拟机不会删除所下载的文件，如果需要删除，则需要运行：

```bash
# 查看box
$ vagrant box list
# 添加一个box
$ vagrant box add hashicorp/bionic64
# 删除box
$ vagrant box remove ubuntu/trusty64
```

## VagrantfIle

简单示例1：

```bash
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
end
```

启动：`vagrant up`

简单示例2：

```bash
$ mkdir html
$ echo "vagrant page here." > html/index.html

# 编写脚本
#!/usr/bin/env bash
apt-get update -y
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi

# 配置vagrantfile
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, guest: 80, host: 4567
end
```

重载配置：`vagrant reload --provision`

最后打开浏览器访问`http://127.0.0.1:4567`即可。

**配置项详解：**

```ruby
VAGRANTFILE_API_VERSION = "2"		# 可不定义该变量，直接指定
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|		# 其中VAGRANTFILE_API_VERSION可直接使用`2`来代替

    #######################################  使用循环语句快速创建三个虚拟机
    (1..3).each do |i|
      config.vm.define "node-#{i}" do |node|
        node.vm.provision "shell",
          inline: "echo hello from node #{i}"
      end
    end
    ####################################### 

    # ---------------------- config.vim
    config.vm.box = "generic/ubuntu1804"	# 镜像名称
    config.vm.hostname = "vm-demo1.local"		# 指定主机名称

    config.vm.network "forwarded_port", guest: 80, host: 8080, id: "http", protocol: "tcp"		# 设置转发端口，后面的id参数可以省略
    # config.vm.network "public_network", ip: "192.168.33.11", hostname: true		# 指明公网地址，并使用hostname选项，该选项可以将信息写入/etc/hosts，如`vm-demo1 192.168.33.11` 
    # config.vm.network "private_network", ip: "192.168.33.11"		# 指明私网地址
    config.vm.network "public_network", use_dhcp_assigned_default_route: true	# 使用默认dhcp获取IP
    # ----------------------

    config.vm.synced_folder "src/", "/srv/website", disabled: false, owner: "root", group: "root"		# 挂载文件夹, disable选项省略

end
```

## 多主机(Multi-Machine)

```ruby
Vagrant.configure("2") do |config|
  config.vm.network "private_network", type: "dhcp"		# 互联主机网路
  config.vm.provision "shell", inline: "echo Hello"

  config.vm.define "web" do |web|
    web.vm.box = "apache"
  end

  config.vm.define "db" do |db|
    db.vm.box = "mysql"
  end
end
```

管理多主机：

```bash
# 启动所有
$ vagrant up
# 启动指定主机
$ vagrant up web
```

## Plugins

### vagrant share

预先条件：安装`ngrok`，参考 https://ngrok.com/download

安装插件：

```bash
$ vagrant plugin install vagrant-share
```

共享环境：

```bash
$ vagrant share
==> default: Detecting network information for machine...
    default: Local machine address: 127.0.0.1
    default:
    default: Note: With the local address (127.0.0.1), Vagrant Share can only
    default: share any ports you have forwarded. Assign an IP or address to your
    default: machine to expose all TCP ports. Consult the documentation
    default: for your provider ('virtualbox') for more information.
    default:
    default: Local HTTP port: 4567
    default: Local HTTPS port: disabled
    default: Port: 2222
    default: Port: 4567
==> default: Creating Vagrant Share session...
==> default: HTTP URL: http://c726c8a40a7b.ngrok.io
==> default: 
```

## 参考链接

- Vagrant Documentation: https://www.vagrantup.com/docs/
- Vagrantfile: https://www.vagrantup.com/docs/vagrantfile