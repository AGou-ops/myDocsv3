# https 配置及优化 

## NGX配置HTTPS

1. 首先检查当前nginx是否已经装载`http_ssl_module`模块

```bash
[root@master ~]\# nginx -V
nginx version: nginx/1.16.1
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC) 
built with OpenSSL 1.0.2k-fips  26 Jan 2017
TLS SNI support enabled
configure arguments: --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi` --with-http_ssl_module` --with-http_v2_module ...
```

2. 添加如下配置段

```bash
    server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  _;
        root         /usr/share/nginx/html/ssl;

        ssl_certificate "/etc/pki/nginx/ngx.crt";		
        ssl_certificate_key "/etc/pki/nginx/private/ngx.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
```

3. 创建本地CA

```bash
# CA服务器上
[root@ca-server ~]\# cd /etc/pki/CA/
[root@ca-server CA]\# (umask 077;openssl genrsa -out private/cakey.pem 2048)
Generating RSA private key, 2048 bit long modulus
..................................................+++
..............+++
e is 65537 (0x10001)
[root@ca-server CA]\# openssl req -new -x509 -key private/cakey.pem -out cacert.pem -days 365
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:CN
State or Province Name (full name) []:Jinan
Locality Name (eg, city) [Default City]:Jinan
Organization Name (eg, company) [Default Company Ltd]:agou
Organizational Unit Name (eg, section) []:agou
Common Name (eg, your name or your server's hostname) []:ca.agou-ops.com
Email Address []:
[root@ca-server CA]\# touch index.txt
[root@ca-server CA]\# echo 01 > serial

# 在客户机上
[root@master /]\# cd /etc/pki/nginx/private/
[root@master private]\# (umask 077;openssl genrsa -out ngx.key 2048)	# 生成私钥
Generating RSA private key, 2048 bit long modulus
...........................................................................................+++
..................+++
e is 65537 (0x10001)
[root@master private]\# openssl req -new -key ngx.key -out ngx.csr
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:CN
State or Province Name (full name) []:Jinan
Locality Name (eg, city) [Default City]:Jinan
Organization Name (eg, company) [Default Company Ltd]:agou
Organizational Unit Name (eg, section) []:agou
Common Name (eg, your name or your server's hostname) []:www.agou-ops.com
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
[root@master private]\# scp ngx.csr root@172.16.1.135:/root		# 发送到ca主机签署
ngx.csr                                                                                          100% 1001   541.8KB/s   00:00    
# 在CA主机上签署
[root@ca-server ~]\# openssl ca -in ngx.csr -out /etc/pki/CA/certs/ngx.crt -days 365
Using configuration from /etc/pki/tls/openssl.cnf
Check that the request matches the signature
Signature ok
Certificate Details:
        Serial Number: 1 (0x1)
        Validity
            Not Before: Apr  4 12:36:18 2020 GMT
            Not After : Apr  4 12:36:18 2021 GMT
        Subject:
            countryName               = CN
            stateOrProvinceName       = Jinan
            organizationName          = agou
            organizationalUnitName    = agou
            commonName                = www.agou-ops.com
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            Netscape Comment: 
                OpenSSL Generated Certificate
            X509v3 Subject Key Identifier: 
                8B:23:27:C4:7C:B0:A3:71:72:00:88:1E:9D:8F:BA:B6:52:DC:30:3C
            X509v3 Authority Key Identifier: 
                keyid:19:60:32:59:F6:8A:49:04:C9:A6:07:41:62:DF:7B:3A:3D:FC:83:86

Certificate is to be certified until Apr  4 12:36:18 2021 GMT (365 days)
Sign the certificate? [y/n]:y

1 out of 1 certificate requests certified, commit? [y/n]y
Write out database with 1 new entries
Data Base Updated
[root@ca-server ~]\# scp /etc/pki/CA/certs/ngx.crt root@172.16.1.134:/etc/pki/nginx/ 	# 将生成的crt发送给客户机
ngx.crt                                                                                          100% 4450     2.3MB/s   00:00    
```

### 单机快速生成测试

```bash
# 创建存放ssl证书的路径
[root@web03 ~]\# mkdir -p /etc/nginx/ssl_key
[root@web03 ~]\# cd /etc/nginx/ssl_key

[root@web03 ssl_key]\# openssl genrsa -idea -out server.key 2048

[root@web03 ssl_key]\# openssl req -days 36500 -x509 \
-sha256 -nodes -newkey rsa:2048 -keyout server.key -out server.crt

```

### easyrsa 快速生成

参考：https://gist.github.com/marcopaganini/0823d31d43557f9711e21b43a3223fce

## nginx 负载均衡 https

外网连接nginx使用 https，内网nginx负载均衡后端服务器使用 http。

示例配置文件如下：

```nginx
# 在 nginx lb 主机下
$ cat proxy_ssl.conf 
upstream website {
        server 172.16.1.8:80;
        server 172.16.1.9:80;
}

server {
        listen 443 ssl;
        server_name example.com;
        ssl_certificate   ssl_key/server.crt;
        ssl_certificate_key  ssl_key/server.key;
        location / {
            proxy_pass http://website;
            proxy_set_header Host $http_host;
        }
}

server {
        listen 80;
        server_name example.com;
        return 302 https://$server_name$request_uri;
}
```

## 优化 HTTPS

参数优化：

```nginx
server {
    listen 443 default_server;
    server_name example.com;
    ssl on;
    root /var/www/wordpress;
    index index.php index.html index.htm;
    ssl_certificate   ssl/example.com.pem;
    ssl_certificate_key  ssl/example.com.key;
    
    ssl_session_cache shared:SSL:10m; #在 建立完ssl握手后如果断开连接，在session_timeout时间内再次连接，是不需要再次获取公钥建立握手的，可以服用之前的连接
    ssl_session_timeout 1440m;  # ssl连接断开后的超时时间
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #配 置加密套接协议
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;  # 使用TLS版本协议
    ssl_prefer_server_ciphers on;  # nginx决定使用哪些协议与浏览器通信
    
    ...
}
```

## 参考链接

-  Ningx HTTPS 实践：https://blog.driverzeng.com/zenglaoshi/2315.html