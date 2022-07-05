# Nginx 编译及制作包 

## Nginx编译安装

1. 安装编译环境
```bash
yum groupinstall "Development Tools" "Server Platform Development" -y
yum install -y pcre-devel openssl-devel
```
2. 编译过程(./configure --help)
```bash
./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi --http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi --http-scgi-temp-path=/var/lib/nginx/tmp/scgi --pid-path=/run/nginx.pid --lock-path=/run/lock/subsys/nginx --user=nginx --group=nginx --with-file-aio --with-ipv6 --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-stream_ssl_preread_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module=dynamic --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic' --with-ld-opt='-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E'
```
以上为epel仓库中默认的选项,按照自身需求进行添加或者删除

编译安装:

```bash
make && make install
```
3. Nginx的Unit File(参考epel仓库中的Unit File)
```bash
[root@master ~]\# cat /usr/lib/systemd/system/nginx.service
[Unit]
Description=The nginx HTTP and reverse proxy server
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
# Nginx will fail to start if /run/nginx.pid already exists but has the wrong
# SELinux context. This might happen when running `nginx -t` from the cmdline.
# https://bugzilla.redhat.com/show_bug.cgi?id=1268621
ExecStartPre=/usr/bin/rm -f /run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t
ExecStart=/usr/sbin/nginx
ExecReload=/bin/kill -s HUP $MAINPID
KillSignal=SIGQUIT
TimeoutStopSec=5
KillMode=process
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

## Nginx自定义RPM包

1. 下载并安装Nginx的 `src.rpm` 包,以CentOS 7 为例

```bash
wget http://nginx.org/packages/centos/7/SRPMS/nginx-1.16.1-1.el7.ngx.src.rpm
rpm -ivh nginx-1.16.1-1.el7.ngx.src.rpm
```

2. 查看安装生成的`rpmbuild/`目录

```bash
rpmbuild/
├── SOURCES
│   ├── COPYRIGHT
│   ├── logrotate
│   ├── nginx-1.16.1.tar.gz
│   ├── nginx.check-reload.sh
│   ├── nginx.conf		# 定义配置文件默认内容
│   ├── nginx-debug.service
│   ├── nginx-debug.sysconf
│   ├── nginx.init.in
│   ├── nginx.service
│   ├── nginx.suse.logrotate
│   ├── nginx.sysconf
│   ├── nginx.upgrade.sh
│   └── nginx.vh.default.conf
└── SPECS
    └── nginx.spec		# 指明如何定义RPM包,模块可以在此文件定义

2 directories, 14 files
```

3. 修改好需求后,即可开始制作

```bash
rpmbuild -bb rpmbuild/SPECS/nginx.spec		# 选项-bb表示只建立二进制包,-ba表示建立源码和二进制包
```

4. 执行完成之后,会在`rpmbuild`文件夹中生成一个名为`RPMS`的文件夹,内容即为制作好的`RPM`包,可以直接进行安装

```bash
rpmbuild/RPMS
└── x86_64
    ├── nginx-1.16.1-1.el7.ngx.x86_64.rpm		# 直接安装即可使用
    └── nginx-debuginfo-1.16.1-1.el7.ngx.x86_64.rpm

1 directory, 2 files
```

## Nginx编译参数

**查看Nginx编译参数**

```shell
[root@Nginx ~]\# nginx -V
```

下表展示了Nginx编译参数选项以及作用
![null](http://bak.agou-ops.top/uploads/linux/images/m_7631947d4602972ffd8cdc039960e216_r.png)

**Nginx常用模块**
Nginx模块分为 Nginx官方模块以及Nginx第三方模块
![null](http://bak.agou-ops.top/uploads/linux/images/m_aebb6eae6beb31b1507f0131e67d543e_r.png)

## 参考链接

* nginx官方RPMS仓库:http://nginx.org/packages/centos/7/SRPMS/