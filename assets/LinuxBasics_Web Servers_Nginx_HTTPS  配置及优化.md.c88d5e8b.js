import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"https \u914D\u7F6E\u53CA\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"NGX\u914D\u7F6EHTTPS","slug":"ngx\u914D\u7F6Ehttps"},{"level":3,"title":"\u5355\u673A\u5FEB\u901F\u751F\u6210\u6D4B\u8BD5","slug":"\u5355\u673A\u5FEB\u901F\u751F\u6210\u6D4B\u8BD5"},{"level":3,"title":"easyrsa \u5FEB\u901F\u751F\u6210","slug":"easyrsa-\u5FEB\u901F\u751F\u6210"},{"level":2,"title":"nginx \u8D1F\u8F7D\u5747\u8861 https","slug":"nginx-\u8D1F\u8F7D\u5747\u8861-https"},{"level":2,"title":"\u4F18\u5316 HTTPS","slug":"\u4F18\u5316-https"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Web Servers/Nginx/HTTPS  \u914D\u7F6E\u53CA\u4F18\u5316.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Web Servers/Nginx/HTTPS  \u914D\u7F6E\u53CA\u4F18\u5316.md"},o=l(`<h1 id="https-\u914D\u7F6E\u53CA\u4F18\u5316" tabindex="-1">https \u914D\u7F6E\u53CA\u4F18\u5316 <a class="header-anchor" href="#https-\u914D\u7F6E\u53CA\u4F18\u5316" aria-hidden="true">#</a></h1><h2 id="ngx\u914D\u7F6Ehttps" tabindex="-1">NGX\u914D\u7F6EHTTPS <a class="header-anchor" href="#ngx\u914D\u7F6Ehttps" aria-hidden="true">#</a></h2><ol><li>\u9996\u5148\u68C0\u67E5\u5F53\u524Dnginx\u662F\u5426\u5DF2\u7ECF\u88C5\u8F7D<code>http_ssl_module</code>\u6A21\u5757</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> nginx -V</span></span>
<span class="line"><span style="color:#DBD7CA;">nginx version: nginx/1.16.1</span></span>
<span class="line"><span style="color:#DBD7CA;">built by gcc 4.8.5 20150623 </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">Red Hat 4.8.5-39</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">GCC</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">built with OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span style="color:#DBD7CA;">TLS SNI support enabled</span></span>
<span class="line"><span style="color:#DBD7CA;">configure arguments: --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi</span><span style="color:#C98A7D;">\` --with-http_ssl_module\`</span><span style="color:#DBD7CA;"> --with-http_v2_module ...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> nginx -V</span></span>
<span class="line"><span style="color:#393A34;">nginx version: nginx/1.16.1</span></span>
<span class="line"><span style="color:#393A34;">built by gcc 4.8.5 20150623 </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">Red Hat 4.8.5-39</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">GCC</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">built with OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span style="color:#393A34;">TLS SNI support enabled</span></span>
<span class="line"><span style="color:#393A34;">configure arguments: --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi</span><span style="color:#B56959;">\` --with-http_ssl_module\`</span><span style="color:#393A34;"> --with-http_v2_module ...</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\u6BB5</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">    server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        listen       443 ssl http2 default_server</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        listen       </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">::</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">:443 ssl http2 default_server</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server_name  _</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        root         /usr/share/nginx/html/ssl</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        ssl_certificate </span><span style="color:#C98A7D;">&quot;/etc/pki/nginx/ngx.crt&quot;</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span></span>
<span class="line"><span style="color:#DBD7CA;">        ssl_certificate_key </span><span style="color:#C98A7D;">&quot;/etc/pki/nginx/private/ngx.key&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        ssl_session_cache shared:SSL:1m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        ssl_session_timeout  10m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        ssl_ciphers HIGH:</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">aNULL:</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">MD5</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        ssl_prefer_server_ciphers on</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;"># Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#DBD7CA;">        include /etc/nginx/default.d/</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">.conf</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        error_page 404 /404.html</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">            location = /40x.html </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        error_page 500 502 503 504 /50x.html</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">            location = /50x.html </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">    server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        listen       443 ssl http2 default_server</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        listen       </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">::</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">:443 ssl http2 default_server</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server_name  _</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        root         /usr/share/nginx/html/ssl</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        ssl_certificate </span><span style="color:#B56959;">&quot;/etc/pki/nginx/ngx.crt&quot;</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span></span>
<span class="line"><span style="color:#393A34;">        ssl_certificate_key </span><span style="color:#B56959;">&quot;/etc/pki/nginx/private/ngx.key&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        ssl_session_cache shared:SSL:1m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        ssl_session_timeout  10m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        ssl_ciphers HIGH:</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">aNULL:</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">MD5</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        ssl_prefer_server_ciphers on</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;"># Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#393A34;">        include /etc/nginx/default.d/</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">.conf</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        error_page 404 /404.html</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">            location = /40x.html </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        error_page 500 502 503 504 /50x.html</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">            location = /50x.html </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u521B\u5EFA\u672C\u5730CA</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># CA\u670D\u52A1\u5668\u4E0A</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@ca-server </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /etc/pki/CA/</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@ca-server CA</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">umask 077</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">openssl genrsa -out private/cakey.pem 2048</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">Generating RSA private key, 2048 bit long modulus</span></span>
<span class="line"><span style="color:#DBD7CA;">..................................................+++</span></span>
<span class="line"><span style="color:#DBD7CA;">..............+++</span></span>
<span class="line"><span style="color:#DBD7CA;">e is 65537 </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">0x10001</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@ca-server CA</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> openssl req -new -x509 -key private/cakey.pem -out cacert.pem -days 365</span></span>
<span class="line"><span style="color:#DBD7CA;">You are about to be asked to enter information that will be incorporated</span></span>
<span class="line"><span style="color:#DBD7CA;">into your certificate request.</span></span>
<span class="line"><span style="color:#DBD7CA;">What you are about to enter is what is called a Distinguished Name or a DN.</span></span>
<span class="line"><span style="color:#DBD7CA;">There are quite a few fields but you can leave some blank</span></span>
<span class="line"><span style="color:#DBD7CA;">For some fields there will be a default value,</span></span>
<span class="line"><span style="color:#DBD7CA;">If you enter </span><span style="color:#C98A7D;">&#39;.&#39;</span><span style="color:#DBD7CA;">, the field will be left blank.</span></span>
<span class="line"><span style="color:#DBD7CA;">-----</span></span>
<span class="line"><span style="color:#DBD7CA;">Country Name </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">2 letter code</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">XX</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">:CN</span></span>
<span class="line"><span style="color:#DBD7CA;">State or Province Name </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">full name</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[]</span><span style="color:#DBD7CA;">:Jinan</span></span>
<span class="line"><span style="color:#DBD7CA;">Locality Name </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">eg, city</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Default City</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">:Jinan</span></span>
<span class="line"><span style="color:#DBD7CA;">Organization Name </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">eg, company</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Default Company Ltd</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">:agou</span></span>
<span class="line"><span style="color:#DBD7CA;">Organizational Unit Name </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">eg, section</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[]</span><span style="color:#DBD7CA;">:agou</span></span>
<span class="line"><span style="color:#DBD7CA;">Common Name </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">eg, your name or your server</span><span style="color:#C98A7D;">&#39;s hostname) []:ca.agou-ops.com</span></span>
<span class="line"><span style="color:#C98A7D;">Email Address []:</span></span>
<span class="line"><span style="color:#C98A7D;">[root@ca-server CA]\\# touch index.txt</span></span>
<span class="line"><span style="color:#C98A7D;">[root@ca-server CA]\\# echo 01 &gt; serial</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;"># \u5728\u5BA2\u6237\u673A\u4E0A</span></span>
<span class="line"><span style="color:#C98A7D;">[root@master /]\\# cd /etc/pki/nginx/private/</span></span>
<span class="line"><span style="color:#C98A7D;">[root@master private]\\# (umask 077;openssl genrsa -out ngx.key 2048)	# \u751F\u6210\u79C1\u94A5</span></span>
<span class="line"><span style="color:#C98A7D;">Generating RSA private key, 2048 bit long modulus</span></span>
<span class="line"><span style="color:#C98A7D;">...........................................................................................+++</span></span>
<span class="line"><span style="color:#C98A7D;">..................+++</span></span>
<span class="line"><span style="color:#C98A7D;">e is 65537 (0x10001)</span></span>
<span class="line"><span style="color:#C98A7D;">[root@master private]\\# openssl req -new -key ngx.key -out ngx.csr</span></span>
<span class="line"><span style="color:#C98A7D;">You are about to be asked to enter information that will be incorporated</span></span>
<span class="line"><span style="color:#C98A7D;">into your certificate request.</span></span>
<span class="line"><span style="color:#C98A7D;">What you are about to enter is what is called a Distinguished Name or a DN.</span></span>
<span class="line"><span style="color:#C98A7D;">There are quite a few fields but you can leave some blank</span></span>
<span class="line"><span style="color:#C98A7D;">For some fields there will be a default value,</span></span>
<span class="line"><span style="color:#C98A7D;">If you enter &#39;</span><span style="color:#DBD7CA;">.</span><span style="color:#C98A7D;">&#39;, the field will be left blank.</span></span>
<span class="line"><span style="color:#C98A7D;">-----</span></span>
<span class="line"><span style="color:#C98A7D;">Country Name (2 letter code) [XX]:CN</span></span>
<span class="line"><span style="color:#C98A7D;">State or Province Name (full name) []:Jinan</span></span>
<span class="line"><span style="color:#C98A7D;">Locality Name (eg, city) [Default City]:Jinan</span></span>
<span class="line"><span style="color:#C98A7D;">Organization Name (eg, company) [Default Company Ltd]:agou</span></span>
<span class="line"><span style="color:#C98A7D;">Organizational Unit Name (eg, section) []:agou</span></span>
<span class="line"><span style="color:#C98A7D;">Common Name (eg, your name or your server&#39;</span><span style="color:#DBD7CA;">s hostname</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[]</span><span style="color:#DBD7CA;">:www.agou-ops.com</span></span>
<span class="line"><span style="color:#DBD7CA;">Email Address </span><span style="color:#858585;">[]</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Please enter the following </span><span style="color:#C98A7D;">&#39;extra&#39;</span><span style="color:#DBD7CA;"> attributes</span></span>
<span class="line"><span style="color:#DBD7CA;">to be sent with your certificate request</span></span>
<span class="line"><span style="color:#DBD7CA;">A challenge password </span><span style="color:#858585;">[]</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">An optional company name </span><span style="color:#858585;">[]</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master private</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> scp ngx.csr root@172.16.1.135:/root		</span><span style="color:#758575;"># \u53D1\u9001\u5230ca\u4E3B\u673A\u7B7E\u7F72</span></span>
<span class="line"><span style="color:#DBD7CA;">ngx.csr                                                                                          100% 1001   541.8KB/s   00:00    </span></span>
<span class="line"><span style="color:#758575;"># \u5728CA\u4E3B\u673A\u4E0A\u7B7E\u7F72</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@ca-server </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> openssl ca -in ngx.csr -out /etc/pki/CA/certs/ngx.crt -days 365</span></span>
<span class="line"><span style="color:#DBD7CA;">Using configuration from /etc/pki/tls/openssl.cnf</span></span>
<span class="line"><span style="color:#DBD7CA;">Check that the request matches the signature</span></span>
<span class="line"><span style="color:#DBD7CA;">Signature ok</span></span>
<span class="line"><span style="color:#DBD7CA;">Certificate Details:</span></span>
<span class="line"><span style="color:#DBD7CA;">        Serial Number: 1 </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">0x1</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        Validity</span></span>
<span class="line"><span style="color:#DBD7CA;">            Not Before: Apr  4 12:36:18 2020 GMT</span></span>
<span class="line"><span style="color:#DBD7CA;">            Not After </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> Apr  4 12:36:18 2021 GMT</span></span>
<span class="line"><span style="color:#DBD7CA;">        Subject:</span></span>
<span class="line"><span style="color:#DBD7CA;">            countryName               = CN</span></span>
<span class="line"><span style="color:#DBD7CA;">            stateOrProvinceName       = Jinan</span></span>
<span class="line"><span style="color:#DBD7CA;">            organizationName          = agou</span></span>
<span class="line"><span style="color:#DBD7CA;">            organizationalUnitName    = agou</span></span>
<span class="line"><span style="color:#DBD7CA;">            commonName                = www.agou-ops.com</span></span>
<span class="line"><span style="color:#DBD7CA;">        X509v3 extensions:</span></span>
<span class="line"><span style="color:#DBD7CA;">            X509v3 Basic Constraints: </span></span>
<span class="line"><span style="color:#DBD7CA;">                CA:FALSE</span></span>
<span class="line"><span style="color:#DBD7CA;">            Netscape Comment: </span></span>
<span class="line"><span style="color:#DBD7CA;">                OpenSSL Generated Certificate</span></span>
<span class="line"><span style="color:#DBD7CA;">            X509v3 Subject Key Identifier: </span></span>
<span class="line"><span style="color:#DBD7CA;">                8B:23:27:C4:7C:B0:A3:71:72:00:88:1E:9D:8F:BA:B6:52:DC:30:3C</span></span>
<span class="line"><span style="color:#DBD7CA;">            X509v3 Authority Key Identifier: </span></span>
<span class="line"><span style="color:#DBD7CA;">                keyid:19:60:32:59:F6:8A:49:04:C9:A6:07:41:62:DF:7B:3A:3D:FC:83:86</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Certificate is to be certified </span><span style="color:#4D9375;">until</span><span style="color:#DBD7CA;"> Apr  4 12:36:18 2021 GMT </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">365 days</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">Sign the certificate</span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">y/n</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">:y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">1 out of 1 certificate requests certified, commit</span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">y/n</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">y</span></span>
<span class="line"><span style="color:#DBD7CA;">Write out database with 1 new entries</span></span>
<span class="line"><span style="color:#DBD7CA;">Data Base Updated</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@ca-server </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> scp /etc/pki/CA/certs/ngx.crt root@172.16.1.134:/etc/pki/nginx/ 	</span><span style="color:#758575;"># \u5C06\u751F\u6210\u7684crt\u53D1\u9001\u7ED9\u5BA2\u6237\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">ngx.crt                                                                                          100% 4450     2.3MB/s   00:00    </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># CA\u670D\u52A1\u5668\u4E0A</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@ca-server </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /etc/pki/CA/</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@ca-server CA</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">umask 077</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">openssl genrsa -out private/cakey.pem 2048</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">Generating RSA private key, 2048 bit long modulus</span></span>
<span class="line"><span style="color:#393A34;">..................................................+++</span></span>
<span class="line"><span style="color:#393A34;">..............+++</span></span>
<span class="line"><span style="color:#393A34;">e is 65537 </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">0x10001</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@ca-server CA</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> openssl req -new -x509 -key private/cakey.pem -out cacert.pem -days 365</span></span>
<span class="line"><span style="color:#393A34;">You are about to be asked to enter information that will be incorporated</span></span>
<span class="line"><span style="color:#393A34;">into your certificate request.</span></span>
<span class="line"><span style="color:#393A34;">What you are about to enter is what is called a Distinguished Name or a DN.</span></span>
<span class="line"><span style="color:#393A34;">There are quite a few fields but you can leave some blank</span></span>
<span class="line"><span style="color:#393A34;">For some fields there will be a default value,</span></span>
<span class="line"><span style="color:#393A34;">If you enter </span><span style="color:#B56959;">&#39;.&#39;</span><span style="color:#393A34;">, the field will be left blank.</span></span>
<span class="line"><span style="color:#393A34;">-----</span></span>
<span class="line"><span style="color:#393A34;">Country Name </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">2 letter code</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">XX</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">:CN</span></span>
<span class="line"><span style="color:#393A34;">State or Province Name </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">full name</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[]</span><span style="color:#393A34;">:Jinan</span></span>
<span class="line"><span style="color:#393A34;">Locality Name </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">eg, city</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Default City</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">:Jinan</span></span>
<span class="line"><span style="color:#393A34;">Organization Name </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">eg, company</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Default Company Ltd</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">:agou</span></span>
<span class="line"><span style="color:#393A34;">Organizational Unit Name </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">eg, section</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[]</span><span style="color:#393A34;">:agou</span></span>
<span class="line"><span style="color:#393A34;">Common Name </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">eg, your name or your server</span><span style="color:#B56959;">&#39;s hostname) []:ca.agou-ops.com</span></span>
<span class="line"><span style="color:#B56959;">Email Address []:</span></span>
<span class="line"><span style="color:#B56959;">[root@ca-server CA]\\# touch index.txt</span></span>
<span class="line"><span style="color:#B56959;">[root@ca-server CA]\\# echo 01 &gt; serial</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;"># \u5728\u5BA2\u6237\u673A\u4E0A</span></span>
<span class="line"><span style="color:#B56959;">[root@master /]\\# cd /etc/pki/nginx/private/</span></span>
<span class="line"><span style="color:#B56959;">[root@master private]\\# (umask 077;openssl genrsa -out ngx.key 2048)	# \u751F\u6210\u79C1\u94A5</span></span>
<span class="line"><span style="color:#B56959;">Generating RSA private key, 2048 bit long modulus</span></span>
<span class="line"><span style="color:#B56959;">...........................................................................................+++</span></span>
<span class="line"><span style="color:#B56959;">..................+++</span></span>
<span class="line"><span style="color:#B56959;">e is 65537 (0x10001)</span></span>
<span class="line"><span style="color:#B56959;">[root@master private]\\# openssl req -new -key ngx.key -out ngx.csr</span></span>
<span class="line"><span style="color:#B56959;">You are about to be asked to enter information that will be incorporated</span></span>
<span class="line"><span style="color:#B56959;">into your certificate request.</span></span>
<span class="line"><span style="color:#B56959;">What you are about to enter is what is called a Distinguished Name or a DN.</span></span>
<span class="line"><span style="color:#B56959;">There are quite a few fields but you can leave some blank</span></span>
<span class="line"><span style="color:#B56959;">For some fields there will be a default value,</span></span>
<span class="line"><span style="color:#B56959;">If you enter &#39;</span><span style="color:#393A34;">.</span><span style="color:#B56959;">&#39;, the field will be left blank.</span></span>
<span class="line"><span style="color:#B56959;">-----</span></span>
<span class="line"><span style="color:#B56959;">Country Name (2 letter code) [XX]:CN</span></span>
<span class="line"><span style="color:#B56959;">State or Province Name (full name) []:Jinan</span></span>
<span class="line"><span style="color:#B56959;">Locality Name (eg, city) [Default City]:Jinan</span></span>
<span class="line"><span style="color:#B56959;">Organization Name (eg, company) [Default Company Ltd]:agou</span></span>
<span class="line"><span style="color:#B56959;">Organizational Unit Name (eg, section) []:agou</span></span>
<span class="line"><span style="color:#B56959;">Common Name (eg, your name or your server&#39;</span><span style="color:#393A34;">s hostname</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[]</span><span style="color:#393A34;">:www.agou-ops.com</span></span>
<span class="line"><span style="color:#393A34;">Email Address </span><span style="color:#8E8F8B;">[]</span><span style="color:#393A34;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Please enter the following </span><span style="color:#B56959;">&#39;extra&#39;</span><span style="color:#393A34;"> attributes</span></span>
<span class="line"><span style="color:#393A34;">to be sent with your certificate request</span></span>
<span class="line"><span style="color:#393A34;">A challenge password </span><span style="color:#8E8F8B;">[]</span><span style="color:#393A34;">:</span></span>
<span class="line"><span style="color:#393A34;">An optional company name </span><span style="color:#8E8F8B;">[]</span><span style="color:#393A34;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master private</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> scp ngx.csr root@172.16.1.135:/root		</span><span style="color:#A0ADA0;"># \u53D1\u9001\u5230ca\u4E3B\u673A\u7B7E\u7F72</span></span>
<span class="line"><span style="color:#393A34;">ngx.csr                                                                                          100% 1001   541.8KB/s   00:00    </span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728CA\u4E3B\u673A\u4E0A\u7B7E\u7F72</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@ca-server </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> openssl ca -in ngx.csr -out /etc/pki/CA/certs/ngx.crt -days 365</span></span>
<span class="line"><span style="color:#393A34;">Using configuration from /etc/pki/tls/openssl.cnf</span></span>
<span class="line"><span style="color:#393A34;">Check that the request matches the signature</span></span>
<span class="line"><span style="color:#393A34;">Signature ok</span></span>
<span class="line"><span style="color:#393A34;">Certificate Details:</span></span>
<span class="line"><span style="color:#393A34;">        Serial Number: 1 </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">0x1</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">        Validity</span></span>
<span class="line"><span style="color:#393A34;">            Not Before: Apr  4 12:36:18 2020 GMT</span></span>
<span class="line"><span style="color:#393A34;">            Not After </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> Apr  4 12:36:18 2021 GMT</span></span>
<span class="line"><span style="color:#393A34;">        Subject:</span></span>
<span class="line"><span style="color:#393A34;">            countryName               = CN</span></span>
<span class="line"><span style="color:#393A34;">            stateOrProvinceName       = Jinan</span></span>
<span class="line"><span style="color:#393A34;">            organizationName          = agou</span></span>
<span class="line"><span style="color:#393A34;">            organizationalUnitName    = agou</span></span>
<span class="line"><span style="color:#393A34;">            commonName                = www.agou-ops.com</span></span>
<span class="line"><span style="color:#393A34;">        X509v3 extensions:</span></span>
<span class="line"><span style="color:#393A34;">            X509v3 Basic Constraints: </span></span>
<span class="line"><span style="color:#393A34;">                CA:FALSE</span></span>
<span class="line"><span style="color:#393A34;">            Netscape Comment: </span></span>
<span class="line"><span style="color:#393A34;">                OpenSSL Generated Certificate</span></span>
<span class="line"><span style="color:#393A34;">            X509v3 Subject Key Identifier: </span></span>
<span class="line"><span style="color:#393A34;">                8B:23:27:C4:7C:B0:A3:71:72:00:88:1E:9D:8F:BA:B6:52:DC:30:3C</span></span>
<span class="line"><span style="color:#393A34;">            X509v3 Authority Key Identifier: </span></span>
<span class="line"><span style="color:#393A34;">                keyid:19:60:32:59:F6:8A:49:04:C9:A6:07:41:62:DF:7B:3A:3D:FC:83:86</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Certificate is to be certified </span><span style="color:#1C6B48;">until</span><span style="color:#393A34;"> Apr  4 12:36:18 2021 GMT </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">365 days</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">Sign the certificate</span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">y/n</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">:y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">1 out of 1 certificate requests certified, commit</span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">y/n</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">y</span></span>
<span class="line"><span style="color:#393A34;">Write out database with 1 new entries</span></span>
<span class="line"><span style="color:#393A34;">Data Base Updated</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@ca-server </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> scp /etc/pki/CA/certs/ngx.crt root@172.16.1.134:/etc/pki/nginx/ 	</span><span style="color:#A0ADA0;"># \u5C06\u751F\u6210\u7684crt\u53D1\u9001\u7ED9\u5BA2\u6237\u673A</span></span>
<span class="line"><span style="color:#393A34;">ngx.crt                                                                                          100% 4450     2.3MB/s   00:00    </span></span>
<span class="line"></span></code></pre></div><h3 id="\u5355\u673A\u5FEB\u901F\u751F\u6210\u6D4B\u8BD5" tabindex="-1">\u5355\u673A\u5FEB\u901F\u751F\u6210\u6D4B\u8BD5 <a class="header-anchor" href="#\u5355\u673A\u5FEB\u901F\u751F\u6210\u6D4B\u8BD5" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u5B58\u653Essl\u8BC1\u4E66\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@web03 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mkdir -p /etc/nginx/ssl_key</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@web03 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /etc/nginx/ssl_key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@web03 ssl_key</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> openssl genrsa -idea -out server.key 2048</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@web03 ssl_key</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> openssl req -days 36500 -x509 \\</span></span>
<span class="line"><span style="color:#DBD7CA;">-sha256 -nodes -newkey rsa:2048 -keyout server.key -out server.crt</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u5B58\u653Essl\u8BC1\u4E66\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@web03 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mkdir -p /etc/nginx/ssl_key</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@web03 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /etc/nginx/ssl_key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@web03 ssl_key</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> openssl genrsa -idea -out server.key 2048</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@web03 ssl_key</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> openssl req -days 36500 -x509 \\</span></span>
<span class="line"><span style="color:#393A34;">-sha256 -nodes -newkey rsa:2048 -keyout server.key -out server.crt</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="easyrsa-\u5FEB\u901F\u751F\u6210" tabindex="-1">easyrsa \u5FEB\u901F\u751F\u6210 <a class="header-anchor" href="#easyrsa-\u5FEB\u901F\u751F\u6210" aria-hidden="true">#</a></h3><p>\u53C2\u8003\uFF1A<a href="https://gist.github.com/marcopaganini/0823d31d43557f9711e21b43a3223fce" target="_blank" rel="noopener noreferrer">https://gist.github.com/marcopaganini/0823d31d43557f9711e21b43a3223fce</a></p><h2 id="nginx-\u8D1F\u8F7D\u5747\u8861-https" tabindex="-1">nginx \u8D1F\u8F7D\u5747\u8861 https <a class="header-anchor" href="#nginx-\u8D1F\u8F7D\u5747\u8861-https" aria-hidden="true">#</a></h2><p>\u5916\u7F51\u8FDE\u63A5nginx\u4F7F\u7528 https\uFF0C\u5185\u7F51nginx\u8D1F\u8F7D\u5747\u8861\u540E\u7AEF\u670D\u52A1\u5668\u4F7F\u7528 http\u3002</p><p>\u793A\u4F8B\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5728 nginx lb \u4E3B\u673A\u4E0B</span></span>
<span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#4D9375;">cat</span><span style="color:#DBD7CA;"> proxy_ssl.conf </span></span>
<span class="line"><span style="color:#CB7676;">upstream</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">website </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">server</span><span style="color:#DBD7CA;"> 172.16.1.8:80;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">server</span><span style="color:#DBD7CA;"> 172.16.1.9:80;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">443 ssl</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">example.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> ssl_certificate </span><span style="color:#DBD7CA;">  ssl_key/server.crt</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> ssl_certificate_key </span><span style="color:#DBD7CA;"> ssl_key/server.key</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">           </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://website</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">           </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">http_host</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">example.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">302</span><span style="color:#DBD7CA;"> https://</span><span style="color:#858585;">$</span><span style="color:#B8A965;">server_name</span><span style="color:#858585;">$</span><span style="color:#B8A965;">request_uri</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5728 nginx lb \u4E3B\u673A\u4E0B</span></span>
<span class="line"><span style="color:#393A34;">$ </span><span style="color:#1C6B48;">cat</span><span style="color:#393A34;"> proxy_ssl.conf </span></span>
<span class="line"><span style="color:#AB5959;">upstream</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">website </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">server</span><span style="color:#393A34;"> 172.16.1.8:80;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">server</span><span style="color:#393A34;"> 172.16.1.9:80;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">443 ssl</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> ssl_certificate </span><span style="color:#393A34;">  ssl_key/server.crt</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> ssl_certificate_key </span><span style="color:#393A34;"> ssl_key/server.key</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">           </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://website</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">           </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">http_host</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">302</span><span style="color:#393A34;"> https://</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">server_name</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">request_uri</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F18\u5316-https" tabindex="-1">\u4F18\u5316 HTTPS <a class="header-anchor" href="#\u4F18\u5316-https" aria-hidden="true">#</a></h2><p>\u53C2\u6570\u4F18\u5316\uFF1A</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">443</span><span style="color:#D4976C;"> default_server</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">example.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl </span><span style="color:#DBD7CA;">on</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">/var/www/wordpress</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> index </span><span style="color:#DBD7CA;">index.php index.html index.htm</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl_certificate </span><span style="color:#DBD7CA;">  ssl/example.com.pem</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl_certificate_key </span><span style="color:#DBD7CA;"> ssl/example.com.key</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl_session_cache </span><span style="color:#DBD7CA;">shared:SSL:10m</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">#\u5728 \u5EFA\u7ACB\u5B8Cssl\u63E1\u624B\u540E\u5982\u679C\u65AD\u5F00\u8FDE\u63A5\uFF0C\u5728session_timeout\u65F6\u95F4\u5185\u518D\u6B21\u8FDE\u63A5\uFF0C\u662F\u4E0D\u9700\u8981\u518D\u6B21\u83B7\u53D6\u516C\u94A5\u5EFA\u7ACB\u63E1\u624B\u7684\uFF0C\u53EF\u4EE5\u670D\u7528\u4E4B\u524D\u7684\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl_session_timeout </span><span style="color:#DBD7CA;">1440m</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">  </span><span style="color:#758575;"># ssl\u8FDE\u63A5\u65AD\u5F00\u540E\u7684\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl_ciphers </span><span style="color:#DBD7CA;">ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">  </span><span style="color:#758575;">#\u914D \u7F6E\u52A0\u5BC6\u5957\u63A5\u534F\u8BAE</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl_protocols </span><span style="color:#DBD7CA;">TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">  </span><span style="color:#758575;"># \u4F7F\u7528TLS\u7248\u672C\u534F\u8BAE</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> ssl_prefer_server_ciphers </span><span style="color:#DBD7CA;">on</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">  </span><span style="color:#758575;"># nginx\u51B3\u5B9A\u4F7F\u7528\u54EA\u4E9B\u534F\u8BAE\u4E0E\u6D4F\u89C8\u5668\u901A\u4FE1</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">    ...</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">443</span><span style="color:#A65E2B;"> default_server</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl </span><span style="color:#393A34;">on</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">/var/www/wordpress</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> index </span><span style="color:#393A34;">index.php index.html index.htm</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl_certificate </span><span style="color:#393A34;">  ssl/example.com.pem</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl_certificate_key </span><span style="color:#393A34;"> ssl/example.com.key</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl_session_cache </span><span style="color:#393A34;">shared:SSL:10m</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#\u5728 \u5EFA\u7ACB\u5B8Cssl\u63E1\u624B\u540E\u5982\u679C\u65AD\u5F00\u8FDE\u63A5\uFF0C\u5728session_timeout\u65F6\u95F4\u5185\u518D\u6B21\u8FDE\u63A5\uFF0C\u662F\u4E0D\u9700\u8981\u518D\u6B21\u83B7\u53D6\u516C\u94A5\u5EFA\u7ACB\u63E1\u624B\u7684\uFF0C\u53EF\u4EE5\u670D\u7528\u4E4B\u524D\u7684\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl_session_timeout </span><span style="color:#393A34;">1440m</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">  </span><span style="color:#A0ADA0;"># ssl\u8FDE\u63A5\u65AD\u5F00\u540E\u7684\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl_ciphers </span><span style="color:#393A34;">ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">#\u914D \u7F6E\u52A0\u5BC6\u5957\u63A5\u534F\u8BAE</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl_protocols </span><span style="color:#393A34;">TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">  </span><span style="color:#A0ADA0;"># \u4F7F\u7528TLS\u7248\u672C\u534F\u8BAE</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> ssl_prefer_server_ciphers </span><span style="color:#393A34;">on</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">  </span><span style="color:#A0ADA0;"># nginx\u51B3\u5B9A\u4F7F\u7528\u54EA\u4E9B\u534F\u8BAE\u4E0E\u6D4F\u89C8\u5668\u901A\u4FE1</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">    ...</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Ningx HTTPS \u5B9E\u8DF5\uFF1A<a href="https://blog.driverzeng.com/zenglaoshi/2315.html" target="_blank" rel="noopener noreferrer">https://blog.driverzeng.com/zenglaoshi/2315.html</a></li></ul>`,21),e=[o];function t(c,r,y,i,A,D){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
