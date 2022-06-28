# varnish Basic 

## 从epel仓库中安装

```bash
yum install epel-release -y
yum install varnish
```

epel仓库中的varnish版本为`4.0.5`,截止目前,官方最新版本为`6.4.0`

## 从官方仓库中安装较新版本

以`5.2.0`版本为例

```bash
curl -s https://packagecloud.io/install/repositories/varnishcache/varnish52/script.rpm.sh | sudo bash
yum install -y varnish
```

## 编译安装

1. Download the appropriate release tarball, which you can find on https://varnish-cache.org/releases/ .

2. To build Varnish on a Red Hat or CentOS system, this command should install required packages (replace sudo yum install if needed):

```bash
sudo yum install \
    make \
    autoconf \
    automake \
    jemalloc-devel \
    libedit-devel \
    libtool \
    ncurses-devel \
    pcre-devel \
    pkgconfig \
    python-docutils \
    python-sphinx
```

Optionally, to rebuild the svg files:

```bash
yum install graphviz
```

Optionally, to pull from a repository:

```bash
yum install git
```

3. The configuration will need the dependencies above satisfied. Once that is taken care of:

```bash
cd varnish-cache
sh autogen.sh
sh configure
make
```

The configure script takes some arguments, but more likely than not you can forget about that for now, almost everything in Varnish can be tweaked with run time parameters.

4. Before you install, you may want to run the test suite, make a cup of tea while it runs, it usually takes a couple of minutes:

```bash
make check
```

5. And finally, the true test of a brave heart: `sudo make install`

Varnish will now be installed in /usr/local. The varnishd binary is in /usr/local/sbin/varnishd. To make sure that the necessary links and caches of the most recent shared libraries are found, run sudo ldconfig.

## 启动

使用`systemctl start varnish`即可,手动启动使用一下命令:

```bash
varnishd -a :6081 -T localhost:6082 -b localhost:8080
```

## 参考链接

* 官方安装指南:<https://varnish-cache.org/docs/6.0/installation/install.html>
* 官方镜像仓库:<https://packagecloud.io/varnishcache>