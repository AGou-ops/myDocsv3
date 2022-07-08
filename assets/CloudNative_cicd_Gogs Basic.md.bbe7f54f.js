import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const h=JSON.parse('{"title":"Gogs Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u914D\u7F6E\u4F9D\u8D56\u73AF\u5883","slug":"\u5B89\u88C5\u914D\u7F6E\u4F9D\u8D56\u73AF\u5883"},{"level":2,"title":"\u5B89\u88C5Gogs","slug":"\u5B89\u88C5gogs"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"CloudNative/cicd/Gogs Basic.md","lastUpdated":1657272051000}'),e={name:"CloudNative/cicd/Gogs Basic.md"},o=l(`<h1 id="gogs-basic" tabindex="-1">Gogs Basic <a class="header-anchor" href="#gogs-basic" aria-hidden="true">#</a></h1><p>Gogs\uFF08<code>/g\u0251gz/</code>\uFF09\u9879\u76EE\u65E8\u5728\u6253\u9020\u4E00\u4E2A\u4EE5\u6700\u7B80\u4FBF\u7684\u65B9\u5F0F\u642D\u5EFA\u7B80\u5355\u3001\u7A33\u5B9A\u548C\u53EF\u6269\u5C55\u7684\u81EA\u52A9 Git \u670D\u52A1\u3002\u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1\u4F7F\u5F97 Gogs \u80FD\u591F\u901A\u8FC7\u72EC\u7ACB\u7684\u4E8C\u8FDB\u5236\u5206\u53D1\uFF0C\u5E76\u4E14\u652F\u6301 Go \u8BED\u8A00\u652F\u6301\u7684 <strong>\u6240\u6709\u5E73\u53F0</strong>\uFF0C\u5305\u62EC Linux\u3001macOS\u3001Windows \u4EE5\u53CA ARM \u5E73\u53F0\u3002</p><h2 id="\u5B89\u88C5\u914D\u7F6E\u4F9D\u8D56\u73AF\u5883" tabindex="-1">\u5B89\u88C5\u914D\u7F6E\u4F9D\u8D56\u73AF\u5883 <a class="header-anchor" href="#\u5B89\u88C5\u914D\u7F6E\u4F9D\u8D56\u73AF\u5883" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">APP_NAME=&quot;gogs&quot;</span></span>
<span class="line"><span style="color:#dbd7ca;">MYSQL_PASSWORD=&quot;change_me&quot;</span></span>
<span class="line"><span style="color:#dbd7ca;">HOSTNAME=&quot;example.com&quot;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># setup mysql</span></span>
<span class="line"><span style="color:#dbd7ca;">yum install mysql-server -y</span></span>
<span class="line"><span style="color:#dbd7ca;">service mysql-server start</span></span>
<span class="line"><span style="color:#dbd7ca;">chkconfig mysql-server</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">mysqladmin -u root password &quot;\${MYSQL_PASSWORD}&quot;</span></span>
<span class="line"><span style="color:#dbd7ca;">mysqladmin -u root --password=&quot;\${MYSQL_PASSWORD}&quot; password &quot;\${MYSQL_PASSWORD}&quot;</span></span>
<span class="line"><span style="color:#dbd7ca;">mysql -u root -p\${MYSQL_PASSWORD} -e &quot;CREATE DATABASE IF NOT EXISTS \${APP_NAME}; use \${APP_NAME}; set global storage_engine=INNODB;&quot;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># install nginx</span></span>
<span class="line"><span style="color:#dbd7ca;">rpm -Uhv http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm</span></span>
<span class="line"><span style="color:#dbd7ca;"> yum install -y nginx</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">cat &gt; /etc/nginx/conf.d/default.conf &lt;&lt;EOF</span></span>
<span class="line"><span style="color:#dbd7ca;">server {</span></span>
<span class="line"><span style="color:#dbd7ca;">  listen          80;</span></span>
<span class="line"><span style="color:#dbd7ca;">  server_name     \${HOSTNAME};</span></span>
<span class="line"><span style="color:#dbd7ca;">  location / {</span></span>
<span class="line"><span style="color:#dbd7ca;">    proxy_pass      http://127.0.0.1:6000;</span></span>
<span class="line"><span style="color:#dbd7ca;">  }</span></span>
<span class="line"><span style="color:#dbd7ca;">}</span></span>
<span class="line"><span style="color:#dbd7ca;">EOF</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">service nginx start</span></span>
<span class="line"><span style="color:#dbd7ca;">chkconfig nginx on</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">APP_NAME=&quot;gogs&quot;</span></span>
<span class="line"><span style="color:#393a34;">MYSQL_PASSWORD=&quot;change_me&quot;</span></span>
<span class="line"><span style="color:#393a34;">HOSTNAME=&quot;example.com&quot;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># setup mysql</span></span>
<span class="line"><span style="color:#393a34;">yum install mysql-server -y</span></span>
<span class="line"><span style="color:#393a34;">service mysql-server start</span></span>
<span class="line"><span style="color:#393a34;">chkconfig mysql-server</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">mysqladmin -u root password &quot;\${MYSQL_PASSWORD}&quot;</span></span>
<span class="line"><span style="color:#393a34;">mysqladmin -u root --password=&quot;\${MYSQL_PASSWORD}&quot; password &quot;\${MYSQL_PASSWORD}&quot;</span></span>
<span class="line"><span style="color:#393a34;">mysql -u root -p\${MYSQL_PASSWORD} -e &quot;CREATE DATABASE IF NOT EXISTS \${APP_NAME}; use \${APP_NAME}; set global storage_engine=INNODB;&quot;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># install nginx</span></span>
<span class="line"><span style="color:#393a34;">rpm -Uhv http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm</span></span>
<span class="line"><span style="color:#393a34;"> yum install -y nginx</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">cat &gt; /etc/nginx/conf.d/default.conf &lt;&lt;EOF</span></span>
<span class="line"><span style="color:#393a34;">server {</span></span>
<span class="line"><span style="color:#393a34;">  listen          80;</span></span>
<span class="line"><span style="color:#393a34;">  server_name     \${HOSTNAME};</span></span>
<span class="line"><span style="color:#393a34;">  location / {</span></span>
<span class="line"><span style="color:#393a34;">    proxy_pass      http://127.0.0.1:6000;</span></span>
<span class="line"><span style="color:#393a34;">  }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">EOF</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">service nginx start</span></span>
<span class="line"><span style="color:#393a34;">chkconfig nginx on</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>Now, access <code>http://\${HOSTNAME}</code> and finish the installation process. Easy!</p><h2 id="\u5B89\u88C5gogs" tabindex="-1">\u5B89\u88C5<code>Gogs</code> <a class="header-anchor" href="#\u5B89\u88C5gogs" aria-hidden="true">#</a></h2><p>There are 6 ways to install Gogs:</p><ul><li><a href="https://gogs.io/docs/installation/install_from_binary.html" target="_blank" rel="noopener noreferrer">Install from binary</a></li><li><a href="https://gogs.io/docs/installation/install_from_source.html" target="_blank" rel="noopener noreferrer">Install from source</a></li><li><a href="https://gogs.io/docs/installation/install_from_packages.html" target="_blank" rel="noopener noreferrer">Install from packages</a></li><li><a href="https://github.com/gogs/gogs/tree/master/docker" target="_blank" rel="noopener noreferrer">Ship with Docker</a></li><li><a href="https://github.com/geerlingguy/ansible-vagrant-examples/tree/master/gogs" target="_blank" rel="noopener noreferrer">Install with Vagrant</a></li><li><a href="https://github.com/helm/charts/tree/master/incubator/gogs" target="_blank" rel="noopener noreferrer">Install with Kubernetes Using Helm Charts</a></li></ul><p>\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u8D77\u89C1, \u6211\u4F7F\u7528<code>packages</code>\u5305\u8FDB\u884C\u5B89\u88C5:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo wget -O /etc/yum.repos.d/gogs.repo \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  https://dl.packager.io/srv/gogs/gogs/master/installer/el/7.repo</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo yum install gogs</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo wget -O /etc/yum.repos.d/gogs.repo \\</span></span>
<span class="line"><span style="color:#393A34;">  https://dl.packager.io/srv/gogs/gogs/master/installer/el/7.repo</span></span>
<span class="line"><span style="color:#393A34;">sudo yum install gogs</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u7136\u901A\u8FC7<code>Docker</code>\u5B89\u88C5\u4E5F\u5341\u5206\u7B80\u5355\u5FEB\u6377:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># Pull image from Docker Hub.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ docker pull gogs/gogs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Create local directory for volume.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ mkdir -p /var/gogs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Use \`docker run\` for the first time.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ docker run --name=gogs -p 10022:22 -p 10080:3000 -v /var/gogs:/data gogs/gogs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Use \`docker start\` if you have stopped it.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ docker start gogs</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># Pull image from Docker Hub.</span></span>
<span class="line"><span style="color:#393A34;">$ docker pull gogs/gogs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Create local directory for volume.</span></span>
<span class="line"><span style="color:#393A34;">$ mkdir -p /var/gogs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Use \`docker run\` for the first time.</span></span>
<span class="line"><span style="color:#393A34;">$ docker run --name=gogs -p 10022:22 -p 10080:3000 -v /var/gogs:/data gogs/gogs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Use \`docker start\` if you have stopped it.</span></span>
<span class="line"><span style="color:#393A34;">$ docker start gogs</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li>gogs installation: <a href="https://github.com/gogs/gogs#-installation" target="_blank" rel="noopener noreferrer">https://github.com/gogs/gogs#-installation</a></li><li>\u4F7F\u7528 Gogs \u642D\u5EFA\u81EA\u5DF1\u7684 Git \u670D\u52A1\u5668: <a href="https://blog.mynook.info/post/host-your-own-git-server-using-gogs/" target="_blank" rel="noopener noreferrer">https://blog.mynook.info/post/host-your-own-git-server-using-gogs/</a></li></ul>`,14),p=[o];function c(t,r,i,g,d,y){return a(),n("div",null,p)}var m=s(e,[["render",c]]);export{h as __pageData,m as default};
