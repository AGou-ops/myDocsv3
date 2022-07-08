import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const A=JSON.parse('{"title":"Tomcat Session(memcached)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E Nginx \u53CD\u5411\u4EE3\u7406","slug":"\u914D\u7F6E-nginx-\u53CD\u5411\u4EE3\u7406"}],"relativePath":"LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat Session\uFF08memcached\uFF09.md","lastUpdated":1657272051000}'),e={name:"LinuxBasics/Web Servers/Jvm - Tomcat/Tomcat Session\uFF08memcached\uFF09.md"},p=l(`<h1 id="tomcat-session-memcached" tabindex="-1">Tomcat Session(memcached) <a class="header-anchor" href="#tomcat-session-memcached" aria-hidden="true">#</a></h1><h1 id="nginx-tomcat-memcache-\u4F1A\u8BDD\u4FDD\u6301" tabindex="-1">nginx + tomcat + memcache \u4F1A\u8BDD\u4FDD\u6301 <a class="header-anchor" href="#nginx-tomcat-memcache-\u4F1A\u8BDD\u4FDD\u6301" aria-hidden="true">#</a></h1><p>\u73AF\u5883\uFF1A</p><table><thead><tr><th>\u89D2\u8272</th><th>IP</th></tr></thead><tbody><tr><td>nginx\u3001tomcat-1\u3001memcached</td><td>172.16.1.128</td></tr><tr><td>tomcat-2\u3001memcached</td><td>172.16.1.136</td></tr></tbody></table><h2 id="\u914D\u7F6E-nginx-\u53CD\u5411\u4EE3\u7406" tabindex="-1">\u914D\u7F6E Nginx \u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u914D\u7F6E-nginx-\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h2><p>\u7F16\u8F91 nginx \u4E3B\u914D\u7F6E\u6587\u4EF6<code>/etc/nginx/nginx.conf</code> \uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">    upstream tomcat-server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.128:8080 weight=1</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.136:8080 weight=1</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;"># \u5E76\u76F4\u63A5\u4FEE\u6539\u539F\u6765\u7684 server \u6BB5\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">    server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            listen       80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">            server_name  localhost</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">            root         /usr/share/nginx/html</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">            location </span><span style="color:#CB7676;">~*</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">\\.</span><span style="color:#DBD7CA;">jsp$ </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                proxy_pass http://tomcat-server</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                proxy_set_header Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">            location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                index  index.html index.htm</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">    upstream tomcat-server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.128:8080 weight=1</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.136:8080 weight=1</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;"># \u5E76\u76F4\u63A5\u4FEE\u6539\u539F\u6765\u7684 server \u6BB5\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">    server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            listen       80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">            server_name  localhost</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">            root         /usr/share/nginx/html</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">            location </span><span style="color:#AB5959;">~*</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">\\.</span><span style="color:#393A34;">jsp$ </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                proxy_pass http://tomcat-server</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                proxy_set_header Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">            location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                index  index.html index.htm</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div>`,7),o=[p];function c(t,r,i,y,d,h){return n(),a("div",null,o)}var B=s(e,[["render",c]]);export{A as __pageData,B as default};
