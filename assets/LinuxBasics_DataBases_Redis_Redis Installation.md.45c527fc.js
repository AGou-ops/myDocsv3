import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"Redis \u5355\u673A\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5","slug":"\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5"},{"level":2,"title":"\u7F16\u8BD1\u5B89\u88C5","slug":"\u7F16\u8BD1\u5B89\u88C5"}],"relativePath":"LinuxBasics/DataBases/Redis/Redis Installation.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/DataBases/Redis/Redis Installation.md"},e=l(`<h1 id="redis-\u5355\u673A\u90E8\u7F72" tabindex="-1">Redis \u5355\u673A\u90E8\u7F72 <a class="header-anchor" href="#redis-\u5355\u673A\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5" tabindex="-1">\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5 <a class="header-anchor" href="#\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ yum install redis-server</span></span>
<span class="line"><span style="color:#758575;">#  ubuntu debian</span></span>
<span class="line"><span style="color:#DBD7CA;">$ apt install redis-server</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ yum install redis-server</span></span>
<span class="line"><span style="color:#A0ADA0;">#  ubuntu debian</span></span>
<span class="line"><span style="color:#393A34;">$ apt install redis-server</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u96C6\u7FA4\u63D2\u4EF6\uFF08\u65B0\u7248\u672C6.0\u4F3C\u4E4E\u5DF2\u7ECF\u5185\u7F6E\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># EPEL\u6E90\u5B89\u88C5ruby\u652F\u6301</span></span>
<span class="line"><span style="color:#DBD7CA;">$ yum install ruby rubygems -y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770Bgem\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">$ gem sources -l</span></span>
<span class="line"><span style="color:#CB7676;">***</span><span style="color:#DBD7CA;"> CURRENT SOURCES </span><span style="color:#CB7676;">***</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">http://rubygems.org/</span></span>
<span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u963F\u91CC\u4E91\u7684gem\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">$ gem sources -a http://mirrors.aliyun.com/rubygems/</span></span>
<span class="line"><span style="color:#DBD7CA;">http://mirrors.aliyun.com/rubygems/ added to sources </span></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664\u56FD\u5916gem\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">$ gem sources  --remove https://rubygems.org/</span></span>
<span class="line"><span style="color:#DBD7CA;">http://rubygems.org/ removed from sources</span></span>
<span class="line"><span style="color:#758575;"># \u518D\u6B21\u67E5\u770Bgem\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">$ gem sources -l</span></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528gem\u5B89\u88C5redis\u7684ruby\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">$ gem install redis -v 3.3.3</span></span>
<span class="line"><span style="color:#DBD7CA;">Successfully installed redis-3.3.3</span></span>
<span class="line"><span style="color:#DBD7CA;">1 gem installed</span></span>
<span class="line"><span style="color:#DBD7CA;">Installing ri documentation </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> redis-3.3.3...</span></span>
<span class="line"><span style="color:#DBD7CA;">Installing RDoc documentation </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> redis-3.3.3...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># EPEL\u6E90\u5B89\u88C5ruby\u652F\u6301</span></span>
<span class="line"><span style="color:#393A34;">$ yum install ruby rubygems -y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770Bgem\u6E90</span></span>
<span class="line"><span style="color:#393A34;">$ gem sources -l</span></span>
<span class="line"><span style="color:#AB5959;">***</span><span style="color:#393A34;"> CURRENT SOURCES </span><span style="color:#AB5959;">***</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">http://rubygems.org/</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u963F\u91CC\u4E91\u7684gem\u6E90</span></span>
<span class="line"><span style="color:#393A34;">$ gem sources -a http://mirrors.aliyun.com/rubygems/</span></span>
<span class="line"><span style="color:#393A34;">http://mirrors.aliyun.com/rubygems/ added to sources </span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u56FD\u5916gem\u6E90</span></span>
<span class="line"><span style="color:#393A34;">$ gem sources  --remove https://rubygems.org/</span></span>
<span class="line"><span style="color:#393A34;">http://rubygems.org/ removed from sources</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u518D\u6B21\u67E5\u770Bgem\u6E90</span></span>
<span class="line"><span style="color:#393A34;">$ gem sources -l</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528gem\u5B89\u88C5redis\u7684ruby\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">$ gem install redis -v 3.3.3</span></span>
<span class="line"><span style="color:#393A34;">Successfully installed redis-3.3.3</span></span>
<span class="line"><span style="color:#393A34;">1 gem installed</span></span>
<span class="line"><span style="color:#393A34;">Installing ri documentation </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> redis-3.3.3...</span></span>
<span class="line"><span style="color:#393A34;">Installing RDoc documentation </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> redis-3.3.3...</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u8BD1\u5B89\u88C5\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4E0B\u8F7D</span></span>
<span class="line"><span style="color:#DBD7CA;">$ wget http://download.redis.io/releases/redis-3.2.12.tar.gz</span></span>
<span class="line"><span style="color:#758575;"># \u89E3\u538B</span></span>
<span class="line"><span style="color:#DBD7CA;">$ tar xf redis-3.2.12.tar.gz</span></span>
<span class="line"><span style="color:#758575;"># \u79FB\u52A8\u5230\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">$ mv redis-3.2.12 /application/</span></span>
<span class="line"><span style="color:#758575;"># \u505A\u8F6F\u94FE\u63A5</span></span>
<span class="line"><span style="color:#DBD7CA;">$ ln -s /application/redis-3.2.12 /application/redis</span></span>
<span class="line"><span style="color:#758575;"># \u8FDB\u5165redis\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /application/redis</span></span>
<span class="line"><span style="color:#758575;"># \u7F16\u8BD1</span></span>
<span class="line"><span style="color:#DBD7CA;">$ make</span></span>
<span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">$ vim /etc/profile.d/redis.sh</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> PATH=</span><span style="color:#C98A7D;">&quot;/application/redis/src:</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">PATH&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4E0B\u8F7D</span></span>
<span class="line"><span style="color:#393A34;">$ wget http://download.redis.io/releases/redis-3.2.12.tar.gz</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u89E3\u538B</span></span>
<span class="line"><span style="color:#393A34;">$ tar xf redis-3.2.12.tar.gz</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u52A8\u5230\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">$ mv redis-3.2.12 /application/</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u505A\u8F6F\u94FE\u63A5</span></span>
<span class="line"><span style="color:#393A34;">$ ln -s /application/redis-3.2.12 /application/redis</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FDB\u5165redis\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">$ </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /application/redis</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u8BD1</span></span>
<span class="line"><span style="color:#393A34;">$ make</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#393A34;">$ vim /etc/profile.d/redis.sh</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> PATH=</span><span style="color:#B56959;">&quot;/application/redis/src:</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">PATH&quot;</span></span>
<span class="line"></span></code></pre></div>`,8),o=[e];function c(r,t,i,y,d,A){return n(),a("div",null,o)}var m=s(p,[["render",c]]);export{u as __pageData,m as default};
