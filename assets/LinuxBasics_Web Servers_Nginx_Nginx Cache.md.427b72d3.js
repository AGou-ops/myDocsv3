import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"Nginx \u7F13\u5B58","description":"","frontmatter":{},"headers":[{"level":2,"title":"1 \u73AF\u5883\u51C6\u5907","slug":"_1-\u73AF\u5883\u51C6\u5907"},{"level":2,"title":"2 \u914D\u7F6Ecache","slug":"_2-\u914D\u7F6Ecache"},{"level":3,"title":"2.1 \u521B\u5EFA\u76EE\u5F55\u5E76\u6302\u8F7Dtmpfs","slug":"_2-1-\u521B\u5EFA\u76EE\u5F55\u5E76\u6302\u8F7Dtmpfs"},{"level":3,"title":"2.2 \u914D\u7F6E\u7F13\u5B58\u76EE\u5F55\u5927\u5C0F\u4EE5\u53CAkey\u7A7A\u95F4\u540D","slug":"_2-2-\u914D\u7F6E\u7F13\u5B58\u76EE\u5F55\u5927\u5C0F\u4EE5\u53CAkey\u7A7A\u95F4\u540D"},{"level":3,"title":"2.3 \u914D\u7F6E\u53CD\u5411\u4EE3\u7406","slug":"_2-3-\u914D\u7F6E\u53CD\u5411\u4EE3\u7406"},{"level":3,"title":"2.4 \u914D\u7F6E\u65E5\u5FD7","slug":"_2-4-\u914D\u7F6E\u65E5\u5FD7"},{"level":3,"title":"2.5 \u76D1\u6D4B\u7F13\u5B58","slug":"_2-5-\u76D1\u6D4B\u7F13\u5B58"},{"level":2,"title":"\u901A\u8FC7url\u6E05\u7406\u7F13\u5B58","slug":"\u901A\u8FC7url\u6E05\u7406\u7F13\u5B58"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Web Servers/Nginx/Nginx Cache.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Web Servers/Nginx/Nginx Cache.md"},e=p(`<h1 id="nginx-\u7F13\u5B58" tabindex="-1">Nginx \u7F13\u5B58 <a class="header-anchor" href="#nginx-\u7F13\u5B58" aria-hidden="true">#</a></h1><p>Nginx\u672C\u8EAB\u5C31\u6709\u7F13\u5B58\u529F\u80FD\uFF0C\u80FD\u591F\u7F13\u5B58\u9759\u6001\u5BF9\u8C61\uFF0C\u6BD4\u5982\u56FE\u7247\u3001CSS\u3001JS\u7B49\u5185\u5BB9\u76F4\u63A5\u7F13\u5B58\u5230\u672C\u5730\uFF0C\u4E0B\u6B21\u8BBF\u95EE\u76F8\u540C\u5BF9\u8C61\u65F6\uFF0C\u76F4\u63A5\u4ECE\u7F13\u5B58\u5373\u53EF\uFF0C\u65E0\u9700\u8BBF\u95EE\u540E\u7AEF\u9759\u6001\u670D\u52A1\u5668\u4EE5\u53CA\u5B58\u50A8\u5B58\u50A8\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u66FF\u4EE3squid\u529F\u80FD\u3002</p><h2 id="_1-\u73AF\u5883\u51C6\u5907" tabindex="-1">1 \u73AF\u5883\u51C6\u5907 <a class="header-anchor" href="#_1-\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u8FD9\u91CC\u53EA\u6D4B\u8BD5nginx\u7684proxy_cache\u7684\u7F13\u5B58\u529F\u80FD\uFF0C\u6240\u4EE5\u7ED3\u6784\u8D8A\u7B80\u5355\u8D8A\u597D\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EA\u9700\u8981\u51C6\u5907\u4E00\u53F0nginx\u7684\u865A\u62DF\u673A\u5373\u53EF\uFF0C\u5982\u679C\u6CA1\u6709nginx\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528epel\u6E90\uFF0Cyum\u5B89\u88C5\u4E00\u4E2A\u5373\u53EF\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#\u6DFB\u52A0epel\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">root@~$ wget -O /etc/yum.repos.d/epel.repohttp://mirrors.aliyun.com/repo/epel-6.repo</span></span>
<span class="line"><span style="color:#758575;">#yum\u5B89\u88C5nginx</span></span>
<span class="line"><span style="color:#DBD7CA;">root@~$ yum install nginx -y</span></span>
<span class="line"><span style="color:#758575;">#rpm -ql\u67E5\u770B\u4E3B\u8981\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">root@~$ rpm -ql nginx</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#\u6DFB\u52A0epel\u6E90</span></span>
<span class="line"><span style="color:#393A34;">root@~$ wget -O /etc/yum.repos.d/epel.repohttp://mirrors.aliyun.com/repo/epel-6.repo</span></span>
<span class="line"><span style="color:#A0ADA0;">#yum\u5B89\u88C5nginx</span></span>
<span class="line"><span style="color:#393A34;">root@~$ yum install nginx -y</span></span>
<span class="line"><span style="color:#A0ADA0;">#rpm -ql\u67E5\u770B\u4E3B\u8981\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">root@~$ rpm -ql nginx</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u4E3A\u4E86\u7B80\u5355\uFF0C\u53EA\u4F7F\u7528\u7B80\u5355\u7684nginx.conf\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@nginx$ cat nginx.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">user              nginx</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">worker_processes  1</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">error_log /var/log/nginx/error.log</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">pid       /var/run/nginx.pid</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">events </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   worker_connections  1024</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">http </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   include      /etc/nginx/mime.types</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   default_type application/octet-stream</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   log_format  main  </span><span style="color:#C98A7D;">&#39;$remote_addr - $remote_user [$time_local]&quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                      </span><span style="color:#C98A7D;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                     </span><span style="color:#C98A7D;">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   sendfile        on</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   keepalive_timeout  65</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       listen 80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            root   /usr/share/nginx/html</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">            index  index.html index.htm</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@nginx$ cat nginx.conf</span></span>
<span class="line"><span style="color:#393A34;">user              nginx</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">worker_processes  1</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">error_log /var/log/nginx/error.log</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">pid       /var/run/nginx.pid</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">events </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   worker_connections  1024</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">http </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   include      /etc/nginx/mime.types</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   default_type application/octet-stream</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   log_format  main  </span><span style="color:#B56959;">&#39;$remote_addr - $remote_user [$time_local]&quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                      </span><span style="color:#B56959;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                     </span><span style="color:#B56959;">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   sendfile        on</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   keepalive_timeout  65</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">       listen 80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            root   /usr/share/nginx/html</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">            index  index.html index.htm</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\u67E5\u770B\u521D\u59CB\u754C\u9762\u662F\u5426\u6B63\u5E38\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@nginx$ nginx</span></span>
<span class="line"><span style="color:#DBD7CA;">root@nginx$ netstat -tupln</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">grepnginx</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp       0      0 0.0.0.0:80           0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      1043/nginx</span></span>
<span class="line"><span style="color:#DBD7CA;">root@nginx$ curl -I 192.168.16.199</span></span>
<span class="line"><span style="color:#DBD7CA;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#DBD7CA;">Server: nginx/1.0.15</span></span>
<span class="line"><span style="color:#DBD7CA;">Date: Mon, 14 Sep 2015 09:40:53 GMT</span></span>
<span class="line"><span style="color:#DBD7CA;">Content-Type: text/html</span></span>
<span class="line"><span style="color:#DBD7CA;">Content-Length: 3698</span></span>
<span class="line"><span style="color:#DBD7CA;">Last-Modified: Tue, 16 Jun 2015 21:34:15GMT</span></span>
<span class="line"><span style="color:#DBD7CA;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#DBD7CA;">Accept-Ranges: bytes</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@nginx$ nginx</span></span>
<span class="line"><span style="color:#393A34;">root@nginx$ netstat -tupln</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">grepnginx</span></span>
<span class="line"><span style="color:#393A34;">tcp       0      0 0.0.0.0:80           0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      1043/nginx</span></span>
<span class="line"><span style="color:#393A34;">root@nginx$ curl -I 192.168.16.199</span></span>
<span class="line"><span style="color:#393A34;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#393A34;">Server: nginx/1.0.15</span></span>
<span class="line"><span style="color:#393A34;">Date: Mon, 14 Sep 2015 09:40:53 GMT</span></span>
<span class="line"><span style="color:#393A34;">Content-Type: text/html</span></span>
<span class="line"><span style="color:#393A34;">Content-Length: 3698</span></span>
<span class="line"><span style="color:#393A34;">Last-Modified: Tue, 16 Jun 2015 21:34:15GMT</span></span>
<span class="line"><span style="color:#393A34;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#393A34;">Accept-Ranges: bytes</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u5207\u6B63\u5E38\uFF0C\u9996\u9875\u67092\u5F20\u56FE\u7247\uFF0C\u6B63\u597D\u7528\u4E8E\u5B9E\u9A8C\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@html$ tree/usr/share/nginx/html/</span></span>
<span class="line"><span style="color:#DBD7CA;">/usr/share/nginx/html/</span></span>
<span class="line"><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">-- 404.html</span></span>
<span class="line"><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">-- 50x.html</span></span>
<span class="line"><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">-- index.html</span></span>
<span class="line"><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">-- nginx-logo.png</span></span>
<span class="line"><span style="color:#C98A7D;">\`-- poweredby.png</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@html$ tree/usr/share/nginx/html/</span></span>
<span class="line"><span style="color:#393A34;">/usr/share/nginx/html/</span></span>
<span class="line"><span style="color:#AB5959;">|</span><span style="color:#393A34;">-- 404.html</span></span>
<span class="line"><span style="color:#AB5959;">|</span><span style="color:#393A34;">-- 50x.html</span></span>
<span class="line"><span style="color:#AB5959;">|</span><span style="color:#393A34;">-- index.html</span></span>
<span class="line"><span style="color:#AB5959;">|</span><span style="color:#393A34;">-- nginx-logo.png</span></span>
<span class="line"><span style="color:#B56959;">\`-- poweredby.png</span></span>
<span class="line"></span></code></pre></div><p>\u81F3\u6B64\u73AF\u5883\u51C6\u5907\u5B8C\u6BD5\u3002</p><h2 id="_2-\u914D\u7F6Ecache" tabindex="-1">2 \u914D\u7F6Ecache <a class="header-anchor" href="#_2-\u914D\u7F6Ecache" aria-hidden="true">#</a></h2><h3 id="_2-1-\u521B\u5EFA\u76EE\u5F55\u5E76\u6302\u8F7Dtmpfs" tabindex="-1">2.1 \u521B\u5EFA\u76EE\u5F55\u5E76\u6302\u8F7Dtmpfs <a class="header-anchor" href="#_2-1-\u521B\u5EFA\u76EE\u5F55\u5E76\u6302\u8F7Dtmpfs" aria-hidden="true">#</a></h3><p>nginx\u7684proxy_cache\u662F\u57FA\u4E8E\u5185\u5B58\u548C\u78C1\u76D8\u7684\u7F13\u5B58\uFF0C\u9700\u8981\u6307\u5B9A\u7F13\u5B58\u76EE\u5F55\u548C\u4E34\u65F6\u76EE\u5F55\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@nginx$ mkdir /tmp/{ngx_tmp,ngx_cache}-p</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@nginx$ mkdir /tmp/{ngx_tmp,ngx_cache}-p</span></span>
<span class="line"></span></code></pre></div><p>\u7F13\u5B58\u5B58\u653E\u4E8E\u78C1\u76D8\uFF0C\u78C1\u76D8IO\u4F1A\u5F71\u54CD\u7F13\u5B58\u7684\u901F\u5EA6\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u5C06tmpfs\u6302\u8F7D\u4E8Engx_cache\u76EE\u5F55\u4E0A\u6765\u52A0\u901F\u7F13\u5B58\u7684\u8BFB\u53D6\u548C\u5199\u5165\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@nginx$ mount -t tmpfs -osize=100M tmpfs /tmp/ngx_cache</span></span>
<span class="line"><span style="color:#DBD7CA;">root@nginx$ mount</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">grep tmpfs</span></span>
<span class="line"><span style="color:#DBD7CA;">tmpfs on /dev/shm </span><span style="color:#E0A569;">type</span><span style="color:#DBD7CA;"> tmpfs </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">rw</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">tmpfs on /tmp/ngx_cache </span><span style="color:#E0A569;">type</span><span style="color:#DBD7CA;"> tmpfs </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">rw,size=100M</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@nginx$ mount -t tmpfs -osize=100M tmpfs /tmp/ngx_cache</span></span>
<span class="line"><span style="color:#393A34;">root@nginx$ mount</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">grep tmpfs</span></span>
<span class="line"><span style="color:#393A34;">tmpfs on /dev/shm </span><span style="color:#B58451;">type</span><span style="color:#393A34;"> tmpfs </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">rw</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">tmpfs on /tmp/ngx_cache </span><span style="color:#B58451;">type</span><span style="color:#393A34;"> tmpfs </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">rw,size=100M</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-2-\u914D\u7F6E\u7F13\u5B58\u76EE\u5F55\u5927\u5C0F\u4EE5\u53CAkey\u7A7A\u95F4\u540D" tabindex="-1">2.2 \u914D\u7F6E\u7F13\u5B58\u76EE\u5F55\u5927\u5C0F\u4EE5\u53CAkey\u7A7A\u95F4\u540D <a class="header-anchor" href="#_2-2-\u914D\u7F6E\u7F13\u5B58\u76EE\u5F55\u5927\u5C0F\u4EE5\u53CAkey\u7A7A\u95F4\u540D" aria-hidden="true">#</a></h3><p>\u5C06\u4E0B\u9762\u914D\u7F6E\u653E\u81F3http\u6807\u7B7E\u4E2D\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@nginx$ grep proxy_cache_pathnginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100minactive=1d max_size=5g</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u6307\u5B9A\u7F13\u5B58\u76EE\u5F55\uFF0C\u7F13\u5B58\u7B49\u7EA7\uFF0C\u952E\u7A7A\u95F4\u540D\uFF0C\u952E\u7A7A\u95F4\u5927\u5C0F\uFF0C\u5931\u6548\u65F6\u95F4\uFF0C\u4EE5\u53CA\u78C1\u76D8\u6700\u5927\u7F13\u5B58\u5927\u5C0F</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@nginx$ grep proxy_cache_pathnginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100minactive=1d max_size=5g</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u6307\u5B9A\u7F13\u5B58\u76EE\u5F55\uFF0C\u7F13\u5B58\u7B49\u7EA7\uFF0C\u952E\u7A7A\u95F4\u540D\uFF0C\u952E\u7A7A\u95F4\u5927\u5C0F\uFF0C\u5931\u6548\u65F6\u95F4\uFF0C\u4EE5\u53CA\u78C1\u76D8\u6700\u5927\u7F13\u5B58\u5927\u5C0F</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-3-\u914D\u7F6E\u53CD\u5411\u4EE3\u7406" tabindex="-1">2.3 \u914D\u7F6E\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#_2-3-\u914D\u7F6E\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h3><p>\u9996\u5148\u914D\u7F6Eupstream\u8282\u70B9\u6C60\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">upstream server_pool </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   server 127.0.0.1:8080</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">upstream server_pool </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   server 127.0.0.1:8080</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5728server\u6807\u7B7E\u7684location\u6BB5\u4E2D\u914D\u7F6E\u4EE3\u7406\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">proxy_pass http://server_pool</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">proxy_pass http://server_pool</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E8080\u7AEF\u53E3\u7684\u6807\u7B7E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   listen 8080</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       root /usr/share/nginx/html</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       index index.html index.htm</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">   access_log /var/log/nginx/access.log  main</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   listen 8080</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">       root /usr/share/nginx/html</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       index index.html index.htm</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">   access_log /var/log/nginx/access.log  main</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6Eproxy_cache\u76F8\u5173\u53C2\u6570\u542F\u7528\u7F13\u5B58\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">proxy_pass http://server_pool</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_next_upstream http_502 http_504error timeout invalid_header</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">#\u51FA\u9519\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_cache cache_one</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#\u7F13\u5B58\u952E\u7A7A\u95F4\u540D</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_cache_valid 200 304 12h</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">#\u6307\u5B9A\u5BF9\u5E94\u72B6\u6001\u7801\u7684\u7F13\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_cache_valid 301 302 1m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_cache_valid any 1m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_cache_key </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#858585;">$</span><span style="color:#B8A965;">is_args</span><span style="color:#858585;">$</span><span style="color:#B8A965;">args</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">#\u6307\u5B9A\u952Ekey\u7684\u683C\u5F0F</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_set_header Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">        </span><span style="color:#758575;">#\u4F20\u9012\u4E3B\u673A\u540D\u7ED9\u540E\u7AEF\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_set_header X-Forwarded-For</span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">#\u4F20\u9012\u5BA2\u6237\u7AEFIP\u7ED9\u540E\u7AEF\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">expires 1d</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">#\u8D85\u671F\u65F6\u95F4</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">proxy_pass http://server_pool</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">proxy_next_upstream http_502 http_504error timeout invalid_header</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#\u51FA\u9519\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">proxy_cache cache_one</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#\u7F13\u5B58\u952E\u7A7A\u95F4\u540D</span></span>
<span class="line"><span style="color:#393A34;">proxy_cache_valid 200 304 12h</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#\u6307\u5B9A\u5BF9\u5E94\u72B6\u6001\u7801\u7684\u7F13\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">proxy_cache_valid 301 302 1m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">proxy_cache_valid any 1m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">proxy_cache_key </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">is_args</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">args</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#\u6307\u5B9A\u952Ekey\u7684\u683C\u5F0F</span></span>
<span class="line"><span style="color:#393A34;">proxy_set_header Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;">#\u4F20\u9012\u4E3B\u673A\u540D\u7ED9\u540E\u7AEF\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">proxy_set_header X-Forwarded-For</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#\u4F20\u9012\u5BA2\u6237\u7AEFIP\u7ED9\u540E\u7AEF\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">expires 1d</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#\u8D85\u671F\u65F6\u95F4</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u7EC8\u7684nginx.conf\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@nginx$ cat nginx.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">user              nginx</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">worker_processes  1</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">error_log /var/log/nginx/error.log</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">pid       /var/run/nginx.pid</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">events </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   worker_connections  1024</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">http </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   include      /etc/nginx/mime.types</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   default_type application/octet-stream</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   log_format  main  </span><span style="color:#C98A7D;">&#39;$remote_addr - $remote_user [$time_local]&quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                      </span><span style="color:#C98A7D;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                     </span><span style="color:#C98A7D;">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                                         </span><span style="color:#C98A7D;">&#39;&quot;addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status&quot;&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   sendfile        on</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   keepalive_timeout  65</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100m inactive=1dmax_size=5g</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       upstream server_pool </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                server 127.0.0.1:8080</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">   server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                listen 80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_passhttp://server_pool</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_next_upstreamhttp_502 http_504 error timeout invalid_header</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_cache cache_one</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_cache_valid 200304 12h</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_cache_valid 301302 1m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_cache_valid any 1m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_cache_key</span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#858585;">$</span><span style="color:#B8A965;">is_args</span><span style="color:#858585;">$</span><span style="color:#B8A965;">args</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_set_header Host</span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        proxy_set_headerX-Forwarded-For </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        expires 1d</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">       access_log /var/log/nginx/cache_access.log main</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">       server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                listen 8080</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                        root/usr/share/nginx/html</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                        index index.htmlindex.htm</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@nginx$ cat nginx.conf</span></span>
<span class="line"><span style="color:#393A34;">user              nginx</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">worker_processes  1</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">error_log /var/log/nginx/error.log</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">pid       /var/run/nginx.pid</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">events </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   worker_connections  1024</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">http </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   include      /etc/nginx/mime.types</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   default_type application/octet-stream</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   log_format  main  </span><span style="color:#B56959;">&#39;$remote_addr - $remote_user [$time_local]&quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                      </span><span style="color:#B56959;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                     </span><span style="color:#B56959;">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span></span>
<span class="line"><span style="color:#393A34;">                                         </span><span style="color:#B56959;">&#39;&quot;addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status&quot;&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   sendfile        on</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   keepalive_timeout  65</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100m inactive=1dmax_size=5g</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       upstream server_pool </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                server 127.0.0.1:8080</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">   server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                listen 80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_passhttp://server_pool</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_next_upstreamhttp_502 http_504 error timeout invalid_header</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_cache cache_one</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_cache_valid 200304 12h</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_cache_valid 301302 1m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_cache_valid any 1m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_cache_key</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">is_args</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">args</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_set_header Host</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        proxy_set_headerX-Forwarded-For </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        expires 1d</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">       access_log /var/log/nginx/cache_access.log main</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">       server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                listen 8080</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                        root/usr/share/nginx/html</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                        index index.htmlindex.htm</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-4-\u914D\u7F6E\u65E5\u5FD7" tabindex="-1">2.4 \u914D\u7F6E\u65E5\u5FD7 <a class="header-anchor" href="#_2-4-\u914D\u7F6E\u65E5\u5FD7" aria-hidden="true">#</a></h3><p>\u4E3A\u4E86\u89C2\u5BDF\u7F13\u5B58\u7684\u547D\u4E2D\u72B6\u6001\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u7F13\u5B58\u76F8\u5173\u7684\u53D8\u91CF\u8BB0\u5F55\u5728\u65E5\u5FD7\u4E2D\u3002</p><p>\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">log_format main  </span><span style="color:#C98A7D;">&#39;$remote_addr - $remote_user[$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                  </span><span style="color:#C98A7D;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                  </span><span style="color:#C98A7D;">&#39;&quot;$http_user_agent&quot;&quot;$http_x_forwarded_for&quot;&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                 </span><span style="color:#C98A7D;">&#39;&quot;addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status&quot;&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;">#\u5176\u4E2Dupstream_addr\u8BB0\u5F55\u5206\u53D1\u7684\u540E\u7AEF\u8282\u70B9IP\uFF1Bupstream_status\u8BB0\u5F55\u540E\u7AEF\u8282\u70B9\u8FD4\u56DE\u7684\u72B6\u6001\u7801\uFF1Bupstream_cache_status\u8BB0\u5F55\u7F13\u5B58\u7684\u547D\u4E2D\u60C5\u51B5\u3002</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">log_format main  </span><span style="color:#B56959;">&#39;$remote_addr - $remote_user[$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                  </span><span style="color:#B56959;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                  </span><span style="color:#B56959;">&#39;&quot;$http_user_agent&quot;&quot;$http_x_forwarded_for&quot;&#39;</span></span>
<span class="line"><span style="color:#393A34;">                 </span><span style="color:#B56959;">&#39;&quot;addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status&quot;&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5176\u4E2Dupstream_addr\u8BB0\u5F55\u5206\u53D1\u7684\u540E\u7AEF\u8282\u70B9IP\uFF1Bupstream_status\u8BB0\u5F55\u540E\u7AEF\u8282\u70B9\u8FD4\u56DE\u7684\u72B6\u6001\u7801\uFF1Bupstream_cache_status\u8BB0\u5F55\u7F13\u5B58\u7684\u547D\u4E2D\u60C5\u51B5\u3002</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u53CD\u5411\u4EE3\u7406\u6807\u7B7E\u4E2D\u5F15\u7528\u65E5\u5FD7\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">access_log /var/log/nginx/cache_access.log  main</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">access_log /var/log/nginx/cache_access.log  main</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span></code></pre></div><p>nginx\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@nginx$ nginx -s reload</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@nginx$ nginx -s reload</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-5-\u76D1\u6D4B\u7F13\u5B58" tabindex="-1">2.5 \u76D1\u6D4B\u7F13\u5B58 <a class="header-anchor" href="#_2-5-\u76D1\u6D4B\u7F13\u5B58" aria-hidden="true">#</a></h3><p>\u76D1\u6D4B\u7F13\u5B58\u6587\u4EF6\u7684\u4E8B\u4EF6</p><p>\u6D4F\u89C8\u7F51\u7AD9\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@ngx_cache$ inotifywait -mrq/tmp/ngx_cache/</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ CREATE,ISDIR 6</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ OPEN,ISDIR 6</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR6</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ CREATE,ISDIR 1</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ OPEN,ISDIR 1</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR1</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ CREATE,ISDIR 3</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ OPEN,ISDIR 3</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR3</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/ CREATE,ISDIR fd</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/ OPEN,ISDIR fd</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/CLOSE_NOWRITE,CLOSE,ISDIR fd</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/fd/ CREATEdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/fd/ OPENdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/fd/ MODIFYdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/fd/ CLOSE_WRITE,CLOSEdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/fd/ MOVED_FROMdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#DBD7CA;">/tmp/ngx_cache/3/fd/ MOVED_TOdd404cd351f6b9efb072e5806dc2efd3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@ngx_cache$ inotifywait -mrq/tmp/ngx_cache/</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ CREATE,ISDIR 6</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ OPEN,ISDIR 6</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR6</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ CREATE,ISDIR 1</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ OPEN,ISDIR 1</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR1</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ CREATE,ISDIR 3</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ OPEN,ISDIR 3</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR3</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/ CREATE,ISDIR fd</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/ OPEN,ISDIR fd</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/CLOSE_NOWRITE,CLOSE,ISDIR fd</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/fd/ CREATEdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/fd/ OPENdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/fd/ MODIFYdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/fd/ CLOSE_WRITE,CLOSEdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/fd/ MOVED_FROMdd404cd351f6b9efb072e5806dc2efd3.0000000026</span></span>
<span class="line"><span style="color:#393A34;">/tmp/ngx_cache/3/fd/ MOVED_TOdd404cd351f6b9efb072e5806dc2efd3</span></span>
<span class="line"></span></code></pre></div><p>\u8BF4\u660E\uFF1A\u6709\u6700\u540E\u51E0\u884C\u53EF\u77E5\uFF0C\u56FE\u7247\u7F13\u5B58\u5230\u76EE\u5F55\u4E2D\u3002</p><h2 id="\u901A\u8FC7url\u6E05\u7406\u7F13\u5B58" tabindex="-1">\u901A\u8FC7url\u6E05\u7406\u7F13\u5B58 <a class="header-anchor" href="#\u901A\u8FC7url\u6E05\u7406\u7F13\u5B58" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5728\u914D\u7F6E\u6BB5\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">/purge(/.*) </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> allow </span><span style="color:#DBD7CA;">  </span><span style="color:#D4976C;"> all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> proxy_cache_purge </span><span style="color:#DBD7CA;">   cache_one   </span><span style="color:#858585;">$</span><span style="color:#B8A965;">1</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">/purge2(/.*) </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> allow </span><span style="color:#DBD7CA;">  </span><span style="color:#D4976C;"> all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> proxy_cache_purge </span><span style="color:#DBD7CA;">   cache_two    </span><span style="color:#858585;">$</span><span style="color:#B8A965;">1</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5728\u914D\u7F6E\u6BB5\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">/purge(/.*) </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> allow </span><span style="color:#393A34;">  </span><span style="color:#A65E2B;"> all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> proxy_cache_purge </span><span style="color:#393A34;">   cache_one   </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">1</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">/purge2(/.*) </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> allow </span><span style="color:#393A34;">  </span><span style="color:#A65E2B;"> all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> proxy_cache_purge </span><span style="color:#393A34;">   cache_two    </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">1</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p>\u968F\u540E\u4F7F\u7528<code>curl</code>\u547D\u4EE4\u8FDB\u884C\u6E05\u7406\u7F13\u5B58\u64CD\u4F5C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> curl -s http://YOUR_IP/purge/</span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">YOUR_RESOURCES</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> curl -s http://YOUR_IP/purge/</span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">YOUR_RESOURCES</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>nginx cache path: <a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path</a></li></ul>`,51),o=[e];function c(t,r,y,i,A,d){return n(),a("div",null,o)}var _=s(l,[["render",c]]);export{D as __pageData,_ as default};
