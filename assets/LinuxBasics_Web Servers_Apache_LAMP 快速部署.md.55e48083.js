import{_ as s,o as a,c as n,a as p}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"LAMP\u5FEB\u901F\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"Ubuntu 18\u7248\u672C","slug":"ubuntu-18\u7248\u672C"}],"relativePath":"LinuxBasics/Web Servers/Apache/LAMP \u5FEB\u901F\u90E8\u7F72.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Web Servers/Apache/LAMP \u5FEB\u901F\u90E8\u7F72.md"},e=p(`<h1 id="lamp\u5FEB\u901F\u90E8\u7F72" tabindex="-1">LAMP\u5FEB\u901F\u90E8\u7F72 <a class="header-anchor" href="#lamp\u5FEB\u901F\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="ubuntu-18\u7248\u672C" tabindex="-1">Ubuntu 18\u7248\u672C <a class="header-anchor" href="#ubuntu-18\u7248\u672C" aria-hidden="true">#</a></h2><p>\u5FEB\u901F\u90E8\u7F72\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5B89\u88C5php7.2-fpm</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo apt -y install software-properties-common apt-transport-https lsb-release ca-certificates</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo add-apt-repository ppa:ondrej/php  </span></span>
<span class="line"><span style="color:#DBD7CA;">sudo apt-get update</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo apt install php7.2-fpm php7.2-mysql php7.2-curl php7.2-gd php7.2-mbstring php7.2-xml php7.2-xmlrpc php7.2-zip php7.2-opcache -y</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&#39;s/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/&#39;</span><span style="color:#DBD7CA;"> /etc/php/7.2/fpm/php.ini </span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl restart php7.2-fpm</span></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5apache2</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo apt-get install apache2</span></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5Apache2\u6A21\u5757\uFF0C\u4F7F\u5176\u652F\u6301php</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo apt-get install libapache2-mod-php7.2</span></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5MySQL</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo apt-get install mysql-server</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5php7.2-fpm</span></span>
<span class="line"><span style="color:#393A34;">sudo apt -y install software-properties-common apt-transport-https lsb-release ca-certificates</span></span>
<span class="line"><span style="color:#393A34;">sudo add-apt-repository ppa:ondrej/php  </span></span>
<span class="line"><span style="color:#393A34;">sudo apt-get update</span></span>
<span class="line"><span style="color:#393A34;">sudo apt install php7.2-fpm php7.2-mysql php7.2-curl php7.2-gd php7.2-mbstring php7.2-xml php7.2-xmlrpc php7.2-zip php7.2-opcache -y</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&#39;s/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/&#39;</span><span style="color:#393A34;"> /etc/php/7.2/fpm/php.ini </span></span>
<span class="line"><span style="color:#393A34;">systemctl restart php7.2-fpm</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5apache2</span></span>
<span class="line"><span style="color:#393A34;">sudo apt-get install apache2</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5Apache2\u6A21\u5757\uFF0C\u4F7F\u5176\u652F\u6301php</span></span>
<span class="line"><span style="color:#393A34;">sudo apt-get install libapache2-mod-php7.2</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5MySQL</span></span>
<span class="line"><span style="color:#393A34;">sudo apt-get install mysql-server</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8<code>mod_rewrite</code>\u6A21\u5757\uFF0C\u89E3\u51B3\u9664\u4E86index.php\u5176\u4ED6\u9875\u9762404\u7684\u95EE\u9898\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo a2enmod rewrite</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6/etc/apache2/apache2.conf</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">Directory /var/www/</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">        Options Indexes FollowSymLinks</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;"># \u4E3B\u8981\u662F\u4E0B\u9762\u8FD9\u884C\uFF0C\u6539\u4E3Aall</span></span>
<span class="line"><span style="color:#DBD7CA;">        AllowOverride all</span></span>
<span class="line"><span style="color:#DBD7CA;">        Require all granted</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">/Directory</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#758575;"># \u6700\u540E\u91CD\u542FApache2\u670D\u52A1\u5373\u53EF.</span></span>
<span class="line"><span style="color:#DBD7CA;">sytemctl restart apache2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo a2enmod rewrite</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6/etc/apache2/apache2.conf</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">Directory /var/www/</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">        Options Indexes FollowSymLinks</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;"># \u4E3B\u8981\u662F\u4E0B\u9762\u8FD9\u884C\uFF0C\u6539\u4E3Aall</span></span>
<span class="line"><span style="color:#393A34;">        AllowOverride all</span></span>
<span class="line"><span style="color:#393A34;">        Require all granted</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">/Directory</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6700\u540E\u91CD\u542FApache2\u670D\u52A1\u5373\u53EF.</span></span>
<span class="line"><span style="color:#393A34;">sytemctl restart apache2</span></span>
<span class="line"></span></code></pre></div>`,6),o=[e];function c(t,r,i,d,y,h){return a(),n("div",null,o)}var u=s(l,[["render",c]]);export{D as __pageData,u as default};
