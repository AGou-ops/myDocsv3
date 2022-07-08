import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"Nginx \u7F16\u8BD1\u53CA\u5236\u4F5C\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx\u7F16\u8BD1\u5B89\u88C5","slug":"nginx\u7F16\u8BD1\u5B89\u88C5"},{"level":2,"title":"Nginx\u81EA\u5B9A\u4E49RPM\u5305","slug":"nginx\u81EA\u5B9A\u4E49rpm\u5305"},{"level":2,"title":"Nginx\u7F16\u8BD1\u53C2\u6570","slug":"nginx\u7F16\u8BD1\u53C2\u6570"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Web Servers/Nginx/Nginx \u7F16\u8BD1\u53CA\u5236\u4F5C\u5305.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Web Servers/Nginx/Nginx \u7F16\u8BD1\u53CA\u5236\u4F5C\u5305.md"},e=l(`<h1 id="nginx-\u7F16\u8BD1\u53CA\u5236\u4F5C\u5305" tabindex="-1">Nginx \u7F16\u8BD1\u53CA\u5236\u4F5C\u5305 <a class="header-anchor" href="#nginx-\u7F16\u8BD1\u53CA\u5236\u4F5C\u5305" aria-hidden="true">#</a></h1><h2 id="nginx\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">Nginx\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#nginx\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5\u7F16\u8BD1\u73AF\u5883</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum groupinstall </span><span style="color:#C98A7D;">&quot;Development Tools&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Server Platform Development&quot;</span><span style="color:#DBD7CA;"> -y</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y pcre-devel openssl-devel</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum groupinstall </span><span style="color:#B56959;">&quot;Development Tools&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Server Platform Development&quot;</span><span style="color:#393A34;"> -y</span></span>
<span class="line"><span style="color:#393A34;">yum install -y pcre-devel openssl-devel</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u7F16\u8BD1\u8FC7\u7A0B(./configure --help)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi --http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi --http-scgi-temp-path=/var/lib/nginx/tmp/scgi --pid-path=/run/nginx.pid --lock-path=/run/lock/subsys/nginx --user=nginx --group=nginx --with-file-aio --with-ipv6 --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-stream_ssl_preread_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module=dynamic --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --with-cc-opt=</span><span style="color:#C98A7D;">&#39;-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic&#39;</span><span style="color:#DBD7CA;"> --with-ld-opt=</span><span style="color:#C98A7D;">&#39;-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi --http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi --http-scgi-temp-path=/var/lib/nginx/tmp/scgi --pid-path=/run/nginx.pid --lock-path=/run/lock/subsys/nginx --user=nginx --group=nginx --with-file-aio --with-ipv6 --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-stream_ssl_preread_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module=dynamic --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --with-cc-opt=</span><span style="color:#B56959;">&#39;-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic&#39;</span><span style="color:#393A34;"> --with-ld-opt=</span><span style="color:#B56959;">&#39;-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u4E0A\u4E3Aepel\u4ED3\u5E93\u4E2D\u9ED8\u8BA4\u7684\u9009\u9879,\u6309\u7167\u81EA\u8EAB\u9700\u6C42\u8FDB\u884C\u6DFB\u52A0\u6216\u8005\u5220\u9664</p><p>\u7F16\u8BD1\u5B89\u88C5:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">make </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> make install</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">make </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> make install</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Nginx\u7684Unit File(\u53C2\u8003epel\u4ED3\u5E93\u4E2D\u7684Unit File)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat /usr/lib/systemd/system/nginx.service</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Unit</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Description=The nginx HTTP and reverse proxy server</span></span>
<span class="line"><span style="color:#DBD7CA;">After=network.target remote-fs.target nss-lookup.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Service</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Type=forking</span></span>
<span class="line"><span style="color:#DBD7CA;">PIDFile=/run/nginx.pid</span></span>
<span class="line"><span style="color:#758575;"># Nginx will fail to start if /run/nginx.pid already exists but has the wrong</span></span>
<span class="line"><span style="color:#758575;"># SELinux context. This might happen when running \`nginx -t\` from the cmdline.</span></span>
<span class="line"><span style="color:#758575;"># https://bugzilla.redhat.com/show_bug.cgi?id=1268621</span></span>
<span class="line"><span style="color:#DBD7CA;">ExecStartPre=/usr/bin/rm -f /run/nginx.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">ExecStartPre=/usr/sbin/nginx -t</span></span>
<span class="line"><span style="color:#DBD7CA;">ExecStart=/usr/sbin/nginx</span></span>
<span class="line"><span style="color:#DBD7CA;">ExecReload=/bin/kill -s HUP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">MAINPID</span></span>
<span class="line"><span style="color:#DBD7CA;">KillSignal=SIGQUIT</span></span>
<span class="line"><span style="color:#DBD7CA;">TimeoutStopSec=5</span></span>
<span class="line"><span style="color:#DBD7CA;">KillMode=process</span></span>
<span class="line"><span style="color:#DBD7CA;">PrivateTmp=true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Install</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">WantedBy=multi-user.target</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat /usr/lib/systemd/system/nginx.service</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Unit</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Description=The nginx HTTP and reverse proxy server</span></span>
<span class="line"><span style="color:#393A34;">After=network.target remote-fs.target nss-lookup.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Service</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Type=forking</span></span>
<span class="line"><span style="color:#393A34;">PIDFile=/run/nginx.pid</span></span>
<span class="line"><span style="color:#A0ADA0;"># Nginx will fail to start if /run/nginx.pid already exists but has the wrong</span></span>
<span class="line"><span style="color:#A0ADA0;"># SELinux context. This might happen when running \`nginx -t\` from the cmdline.</span></span>
<span class="line"><span style="color:#A0ADA0;"># https://bugzilla.redhat.com/show_bug.cgi?id=1268621</span></span>
<span class="line"><span style="color:#393A34;">ExecStartPre=/usr/bin/rm -f /run/nginx.pid</span></span>
<span class="line"><span style="color:#393A34;">ExecStartPre=/usr/sbin/nginx -t</span></span>
<span class="line"><span style="color:#393A34;">ExecStart=/usr/sbin/nginx</span></span>
<span class="line"><span style="color:#393A34;">ExecReload=/bin/kill -s HUP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">MAINPID</span></span>
<span class="line"><span style="color:#393A34;">KillSignal=SIGQUIT</span></span>
<span class="line"><span style="color:#393A34;">TimeoutStopSec=5</span></span>
<span class="line"><span style="color:#393A34;">KillMode=process</span></span>
<span class="line"><span style="color:#393A34;">PrivateTmp=true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Install</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">WantedBy=multi-user.target</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx\u81EA\u5B9A\u4E49rpm\u5305" tabindex="-1">Nginx\u81EA\u5B9A\u4E49RPM\u5305 <a class="header-anchor" href="#nginx\u81EA\u5B9A\u4E49rpm\u5305" aria-hidden="true">#</a></h2><ol><li>\u4E0B\u8F7D\u5E76\u5B89\u88C5Nginx\u7684 <code>src.rpm</code> \u5305,\u4EE5CentOS 7 \u4E3A\u4F8B</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">wget http://nginx.org/packages/centos/7/SRPMS/nginx-1.16.1-1.el7.ngx.src.rpm</span></span>
<span class="line"><span style="color:#DBD7CA;">rpm -ivh nginx-1.16.1-1.el7.ngx.src.rpm</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">wget http://nginx.org/packages/centos/7/SRPMS/nginx-1.16.1-1.el7.ngx.src.rpm</span></span>
<span class="line"><span style="color:#393A34;">rpm -ivh nginx-1.16.1-1.el7.ngx.src.rpm</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u67E5\u770B\u5B89\u88C5\u751F\u6210\u7684<code>rpmbuild/</code>\u76EE\u5F55</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rpmbuild/</span></span>
<span class="line"><span style="color:#DBD7CA;">\u251C\u2500\u2500 SOURCES</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 COPYRIGHT</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 logrotate</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx-1.16.1.tar.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.check-reload.sh</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.conf		</span><span style="color:#758575;"># \u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx-debug.service</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx-debug.sysconf</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.init.in</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.service</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.suse.logrotate</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.sysconf</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.upgrade.sh</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2502\xA0\xA0 \u2514\u2500\u2500 nginx.vh.default.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2514\u2500\u2500 SPECS</span></span>
<span class="line"><span style="color:#DBD7CA;">    \u2514\u2500\u2500 nginx.spec		</span><span style="color:#758575;"># \u6307\u660E\u5982\u4F55\u5B9A\u4E49RPM\u5305,\u6A21\u5757\u53EF\u4EE5\u5728\u6B64\u6587\u4EF6\u5B9A\u4E49</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2 directories, 14 files</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rpmbuild/</span></span>
<span class="line"><span style="color:#393A34;">\u251C\u2500\u2500 SOURCES</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 COPYRIGHT</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 logrotate</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx-1.16.1.tar.gz</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.check-reload.sh</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.conf		</span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx-debug.service</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx-debug.sysconf</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.init.in</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.service</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.suse.logrotate</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.sysconf</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u251C\u2500\u2500 nginx.upgrade.sh</span></span>
<span class="line"><span style="color:#393A34;">\u2502\xA0\xA0 \u2514\u2500\u2500 nginx.vh.default.conf</span></span>
<span class="line"><span style="color:#393A34;">\u2514\u2500\u2500 SPECS</span></span>
<span class="line"><span style="color:#393A34;">    \u2514\u2500\u2500 nginx.spec		</span><span style="color:#A0ADA0;"># \u6307\u660E\u5982\u4F55\u5B9A\u4E49RPM\u5305,\u6A21\u5757\u53EF\u4EE5\u5728\u6B64\u6587\u4EF6\u5B9A\u4E49</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2 directories, 14 files</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u4FEE\u6539\u597D\u9700\u6C42\u540E,\u5373\u53EF\u5F00\u59CB\u5236\u4F5C</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rpmbuild -bb rpmbuild/SPECS/nginx.spec		</span><span style="color:#758575;"># \u9009\u9879-bb\u8868\u793A\u53EA\u5EFA\u7ACB\u4E8C\u8FDB\u5236\u5305,-ba\u8868\u793A\u5EFA\u7ACB\u6E90\u7801\u548C\u4E8C\u8FDB\u5236\u5305</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rpmbuild -bb rpmbuild/SPECS/nginx.spec		</span><span style="color:#A0ADA0;"># \u9009\u9879-bb\u8868\u793A\u53EA\u5EFA\u7ACB\u4E8C\u8FDB\u5236\u5305,-ba\u8868\u793A\u5EFA\u7ACB\u6E90\u7801\u548C\u4E8C\u8FDB\u5236\u5305</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u6267\u884C\u5B8C\u6210\u4E4B\u540E,\u4F1A\u5728<code>rpmbuild</code>\u6587\u4EF6\u5939\u4E2D\u751F\u6210\u4E00\u4E2A\u540D\u4E3A<code>RPMS</code>\u7684\u6587\u4EF6\u5939,\u5185\u5BB9\u5373\u4E3A\u5236\u4F5C\u597D\u7684<code>RPM</code>\u5305,\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u5B89\u88C5</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rpmbuild/RPMS</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2514\u2500\u2500 x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">    \u251C\u2500\u2500 nginx-1.16.1-1.el7.ngx.x86_64.rpm		</span><span style="color:#758575;"># \u76F4\u63A5\u5B89\u88C5\u5373\u53EF\u4F7F\u7528</span></span>
<span class="line"><span style="color:#DBD7CA;">    \u2514\u2500\u2500 nginx-debuginfo-1.16.1-1.el7.ngx.x86_64.rpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">1 directory, 2 files</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rpmbuild/RPMS</span></span>
<span class="line"><span style="color:#393A34;">\u2514\u2500\u2500 x86_64</span></span>
<span class="line"><span style="color:#393A34;">    \u251C\u2500\u2500 nginx-1.16.1-1.el7.ngx.x86_64.rpm		</span><span style="color:#A0ADA0;"># \u76F4\u63A5\u5B89\u88C5\u5373\u53EF\u4F7F\u7528</span></span>
<span class="line"><span style="color:#393A34;">    \u2514\u2500\u2500 nginx-debuginfo-1.16.1-1.el7.ngx.x86_64.rpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">1 directory, 2 files</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx\u7F16\u8BD1\u53C2\u6570" tabindex="-1">Nginx\u7F16\u8BD1\u53C2\u6570 <a class="header-anchor" href="#nginx\u7F16\u8BD1\u53C2\u6570" aria-hidden="true">#</a></h2><p><strong>\u67E5\u770BNginx\u7F16\u8BD1\u53C2\u6570</strong></p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@Nginx </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> nginx -V</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@Nginx </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> nginx -V</span></span>
<span class="line"></span></code></pre></div><p>\u4E0B\u8868\u5C55\u793A\u4E86Nginx\u7F16\u8BD1\u53C2\u6570\u9009\u9879\u4EE5\u53CA\u4F5C\u7528 <img src="http://bak.agou-ops.top/uploads/linux/images/m_7631947d4602972ffd8cdc039960e216_r.png" alt="null"></p><p><strong>Nginx\u5E38\u7528\u6A21\u5757</strong> Nginx\u6A21\u5757\u5206\u4E3A Nginx\u5B98\u65B9\u6A21\u5757\u4EE5\u53CANginx\u7B2C\u4E09\u65B9\u6A21\u5757 <img src="http://bak.agou-ops.top/uploads/linux/images/m_aebb6eae6beb31b1507f0131e67d543e_r.png" alt="null"></p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>nginx\u5B98\u65B9RPMS\u4ED3\u5E93:<a href="http://nginx.org/packages/centos/7/SRPMS/" target="_blank" rel="noopener noreferrer">http://nginx.org/packages/centos/7/SRPMS/</a></li></ul>`,27),t=[e];function o(i,c,r,d,g,h){return n(),a("div",null,t)}var m=s(p,[["render",o]]);export{u as __pageData,m as default};
