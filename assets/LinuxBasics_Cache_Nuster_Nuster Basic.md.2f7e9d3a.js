import{_ as s,o as n,c as a,a as e}from"./app.1e6146c3.js";const b=JSON.parse('{"title":"Nuster Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"\u7F16\u8BD1\u5B89\u88C5","slug":"\u7F16\u8BD1\u5B89\u88C5"},{"level":2,"title":"\u914D\u7F6E\u4E0E\u4F7F\u7528","slug":"\u914D\u7F6E\u4E0E\u4F7F\u7528"},{"level":3,"title":"\u5B98\u65B9\u793A\u4F8B","slug":"\u5B98\u65B9\u793A\u4F8B"},{"level":2,"title":"\u7B80\u5355\u793A\u4F8B","slug":"\u7B80\u5355\u793A\u4F8B"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Cache/Nuster/Nuster Basic.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Cache/Nuster/Nuster Basic.md"},p=e(`<h1 id="nuster-basic" tabindex="-1">Nuster Basic <a class="header-anchor" href="#nuster-basic" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>nuster\u662F\u4E00\u4E2A\u57FA\u4E8EHAProxy\u7684\u9AD8\u6027\u80FDHTTP\u7F13\u5B58\u670D\u52A1\u5668\u548CRESTful NoSQL\u7F13\u5B58\u670D\u52A1\u5668\uFF0C\u5B8C\u5168\u517C\u5BB9HAProxy\uFF0C\u5E76\u4E14\u5229\u7528HAProxy\u7684ACL\u529F\u80FD\u6765\u63D0\u4F9B\u975E\u5E38\u7EC6\u81F4\u7684\u7F13\u5B58\u89C4\u5219\u3002</p><p>\u6027\u80FD:\u975E\u5E38\u5FEB, \u5355\u8FDB\u7A0B\u6A21\u5F0F\u4E0B\u662Fnginx\u76843\u500D\uFF0C\u591A\u8FDB\u7A0B\u4E0Bnginx\u76842\u500D\uFF0Cvarnish\u76843\u500D\u3002\u8BE6\u89C1<a href="https://github.com/jiangwenyuan/nuster/wiki/Web-cache-server-performance-benchmark:-nuster-vs-nginx-vs-varnish-vs-squid" target="_blank" rel="noopener noreferrer">\u6027\u80FD\u6BD4\u8F83</a></p><p>\u7279\u6027\u53CA\u6027\u80FD\u53C2\u8003:<a href="https://github.com/jiangwenyuan/nuster/blob/master/README.md#features" target="_blank" rel="noopener noreferrer">https://github.com/jiangwenyuan/nuster/blob/master/README.md#features</a></p><h2 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u4ECEgithub\u5B98\u65B9\u62C9\u53D6\u6E90\u7801\u5305\u5E76\u89E3\u538B</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">wget https://github.com/jiangwenyuan/nuster/releases/download/v5.0.2.21/nuster-5.0.2.21.tar.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">tar xf nuster-5.0.2.21.tar.gz</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">wget https://github.com/jiangwenyuan/nuster/releases/download/v5.0.2.21/nuster-5.0.2.21.tar.gz</span></span>
<span class="line"><span style="color:#393A34;">tar xf nuster-5.0.2.21.tar.gz</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u7F16\u8BD1\u5B89\u88C5</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> nuster-5.0.2.21</span></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u6CA1\u6709\u914D\u7F6E\u597DLUA,openssl,pcre\u548Czlib\u7684\u8BDD\u53EF\u4EE5\u5FFD\u7565\u7F16\u8BD1\u9009\u9879USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1</span></span>
<span class="line"><span style="color:#DBD7CA;">make TARGET=linux2628 USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1</span></span>
<span class="line"><span style="color:#DBD7CA;">make install PREFIX=/usr/local/nuster</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> nuster-5.0.2.21</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u6CA1\u6709\u914D\u7F6E\u597DLUA,openssl,pcre\u548Czlib\u7684\u8BDD\u53EF\u4EE5\u5FFD\u7565\u7F16\u8BD1\u9009\u9879USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1</span></span>
<span class="line"><span style="color:#393A34;">make TARGET=linux2628 USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1</span></span>
<span class="line"><span style="color:#393A34;">make install PREFIX=/usr/local/nuster</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u542F\u52A8nuster</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">/usr/local/nuster/sbin/nuster -f nuster.cfg</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">/usr/local/nuster/sbin/nuster -f nuster.cfg</span></span>
<span class="line"></span></code></pre></div><p>\u2139\uFE0F \u5728Docker\u4E2D\u4F7F\u7528:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker pull nuster/nuster</span></span>
<span class="line"><span style="color:#DBD7CA;">docker run -d -v /path/to/nuster.cfg:/etc/nuster/nuster.cfg:ro -p 8080:8080 nuster/nuster</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker pull nuster/nuster</span></span>
<span class="line"><span style="color:#393A34;">docker run -d -v /path/to/nuster.cfg:/etc/nuster/nuster.cfg:ro -p 8080:8080 nuster/nuster</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E\u4E0E\u4F7F\u7528" tabindex="-1">\u914D\u7F6E\u4E0E\u4F7F\u7528 <a class="header-anchor" href="#\u914D\u7F6E\u4E0E\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u5B98\u65B9\u793A\u4F8B" tabindex="-1">\u5B98\u65B9\u793A\u4F8B <a class="header-anchor" href="#\u5B98\u65B9\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">global</span></span>
<span class="line"><span style="color:#dbd7ca;">    nuster cache on data-size 100m</span></span>
<span class="line"><span style="color:#dbd7ca;">    nuster nosql on data-size 200m</span></span>
<span class="line"><span style="color:#dbd7ca;">    master-worker # v3</span></span>
<span class="line"><span style="color:#dbd7ca;">defaults</span></span>
<span class="line"><span style="color:#dbd7ca;">    mode http</span></span>
<span class="line"><span style="color:#dbd7ca;">frontend fe</span></span>
<span class="line"><span style="color:#dbd7ca;">    bind *:8080</span></span>
<span class="line"><span style="color:#dbd7ca;">    #bind *:4433 ssl crt example.com.pem alpn h2,http/1.1</span></span>
<span class="line"><span style="color:#dbd7ca;">    use_backend be2 if { path_beg /_kv/ }</span></span>
<span class="line"><span style="color:#dbd7ca;">    default_backend be1</span></span>
<span class="line"><span style="color:#dbd7ca;">backend be1</span></span>
<span class="line"><span style="color:#dbd7ca;">    nuster cache on</span></span>
<span class="line"><span style="color:#dbd7ca;">    nuster rule img ttl 1d if { path_beg /img/ }</span></span>
<span class="line"><span style="color:#dbd7ca;">    nuster rule api ttl 30s if { path /api/some/api }</span></span>
<span class="line"><span style="color:#dbd7ca;">    server s1 127.0.0.1:80</span></span>
<span class="line"><span style="color:#dbd7ca;">    server s2 127.0.0.1:80</span></span>
<span class="line"><span style="color:#dbd7ca;">backend be2</span></span>
<span class="line"><span style="color:#dbd7ca;">    nuster nosql on</span></span>
<span class="line"><span style="color:#dbd7ca;">    nuster rule r1 ttl 3600</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">global</span></span>
<span class="line"><span style="color:#393a34;">    nuster cache on data-size 100m</span></span>
<span class="line"><span style="color:#393a34;">    nuster nosql on data-size 200m</span></span>
<span class="line"><span style="color:#393a34;">    master-worker # v3</span></span>
<span class="line"><span style="color:#393a34;">defaults</span></span>
<span class="line"><span style="color:#393a34;">    mode http</span></span>
<span class="line"><span style="color:#393a34;">frontend fe</span></span>
<span class="line"><span style="color:#393a34;">    bind *:8080</span></span>
<span class="line"><span style="color:#393a34;">    #bind *:4433 ssl crt example.com.pem alpn h2,http/1.1</span></span>
<span class="line"><span style="color:#393a34;">    use_backend be2 if { path_beg /_kv/ }</span></span>
<span class="line"><span style="color:#393a34;">    default_backend be1</span></span>
<span class="line"><span style="color:#393a34;">backend be1</span></span>
<span class="line"><span style="color:#393a34;">    nuster cache on</span></span>
<span class="line"><span style="color:#393a34;">    nuster rule img ttl 1d if { path_beg /img/ }</span></span>
<span class="line"><span style="color:#393a34;">    nuster rule api ttl 30s if { path /api/some/api }</span></span>
<span class="line"><span style="color:#393a34;">    server s1 127.0.0.1:80</span></span>
<span class="line"><span style="color:#393a34;">    server s2 127.0.0.1:80</span></span>
<span class="line"><span style="color:#393a34;">backend be2</span></span>
<span class="line"><span style="color:#393a34;">    nuster nosql on</span></span>
<span class="line"><span style="color:#393a34;">    nuster rule r1 ttl 3600</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>nuster\u76D1\u542C8080\u7AEF\u53E3\uFF0C\u63A5\u53D7HTTP\u8BF7\u6C42\u3002 <code>/_kv/</code>\u5F00\u5934\u7684\u8BF7\u6C42\u5206\u914D\u5230backend <code>be2</code>, \u53EF\u4EE5\u53D1\u9001HTTP <code>POST/GET/DELETE</code>\u5230<code>/_kv/any_key</code> \u6765 \u6DFB\u52A0/\u53D6\u5F97/\u5220\u9664 Key/Value. \u5176\u4ED6\u7684\u8BF7\u6C42\u90FD\u88AB\u5206\u914D\u5230backend <code>be1</code>, \u5E76\u4E14\u4F1A\u88AB\u8F6C\u53D1\u5230\u670D\u52A1\u5668<code>s1</code> or <code>s2</code>. \u5176\u4E2D<code>/img/*</code>\u8BF7\u6C42\u4F1A\u88AB\u7F13\u5B581\u5929\uFF0C\u800C<code>/api/some/api</code>\u4F1A\u88AB\u7F13\u5B5830\u79D2\u3002</p><h2 id="\u7B80\u5355\u793A\u4F8B" tabindex="-1">\u7B80\u5355\u793A\u4F8B <a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4F5C\u4E3A <code>HTTP/HTTPS</code> \u8D1F\u8F7D\u5747\u8861\u5668</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">defaults</span></span>
<span class="line"><span style="color:#DBD7CA;">    retries 3</span></span>
<span class="line"><span style="color:#DBD7CA;">    option redispatch</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout client  30s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout connect 30s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout server  30s</span></span>
<span class="line"><span style="color:#DBD7CA;">frontend web-lb</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:8080</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;">#bind *:443 ssl crt XXX.pem</span></span>
<span class="line"><span style="color:#DBD7CA;">   mode http</span></span>
<span class="line"><span style="color:#DBD7CA;">   default_backend apps</span></span>
<span class="line"><span style="color:#DBD7CA;">backend apps</span></span>
<span class="line"><span style="color:#DBD7CA;">   balance roundrobin</span></span>
<span class="line"><span style="color:#DBD7CA;">   mode http</span></span>
<span class="line"><span style="color:#DBD7CA;">   server s1 127.0.0.1:80</span></span>
<span class="line"><span style="color:#DBD7CA;">   server s2 node01:80</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;">#server s3 10.0.0.103:8080</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;">#server s4 10.0.0.101:8443 ssl verify none</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">defaults</span></span>
<span class="line"><span style="color:#393A34;">    retries 3</span></span>
<span class="line"><span style="color:#393A34;">    option redispatch</span></span>
<span class="line"><span style="color:#393A34;">    timeout client  30s</span></span>
<span class="line"><span style="color:#393A34;">    timeout connect 30s</span></span>
<span class="line"><span style="color:#393A34;">    timeout server  30s</span></span>
<span class="line"><span style="color:#393A34;">frontend web-lb</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:8080</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;">#bind *:443 ssl crt XXX.pem</span></span>
<span class="line"><span style="color:#393A34;">   mode http</span></span>
<span class="line"><span style="color:#393A34;">   default_backend apps</span></span>
<span class="line"><span style="color:#393A34;">backend apps</span></span>
<span class="line"><span style="color:#393A34;">   balance roundrobin</span></span>
<span class="line"><span style="color:#393A34;">   mode http</span></span>
<span class="line"><span style="color:#393A34;">   server s1 127.0.0.1:80</span></span>
<span class="line"><span style="color:#393A34;">   server s2 node01:80</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;">#server s3 10.0.0.103:8080</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;">#server s4 10.0.0.101:8443 ssl verify none</span></span>
<span class="line"></span></code></pre></div><p>\u4F5C\u4E3A <code>TCP</code> \u8D1F\u8F7D\u5747\u8861\u5668(\u8FD9\u91CC\u4EE5mysql\u670D\u52A1\u4E3A\u4F8B)</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">frontend mysql-lb</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:3306</span></span>
<span class="line"><span style="color:#DBD7CA;">   mode tcp</span></span>
<span class="line"><span style="color:#DBD7CA;">   default_backend mysql-cluster</span></span>
<span class="line"><span style="color:#DBD7CA;">backend mysql-cluster</span></span>
<span class="line"><span style="color:#DBD7CA;">   balance roundrobin</span></span>
<span class="line"><span style="color:#DBD7CA;">   mode tcp</span></span>
<span class="line"><span style="color:#DBD7CA;">   server s1 127.0.0.1:3306</span></span>
<span class="line"><span style="color:#DBD7CA;">   server s2 node01:3306</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;">#server s3 10.0.0.103:3306</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">frontend mysql-lb</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:3306</span></span>
<span class="line"><span style="color:#393A34;">   mode tcp</span></span>
<span class="line"><span style="color:#393A34;">   default_backend mysql-cluster</span></span>
<span class="line"><span style="color:#393A34;">backend mysql-cluster</span></span>
<span class="line"><span style="color:#393A34;">   balance roundrobin</span></span>
<span class="line"><span style="color:#393A34;">   mode tcp</span></span>
<span class="line"><span style="color:#393A34;">   server s1 127.0.0.1:3306</span></span>
<span class="line"><span style="color:#393A34;">   server s2 node01:3306</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;">#server s3 10.0.0.103:3306</span></span>
<span class="line"></span></code></pre></div><p>\u4F5C\u4E3A<code>HTTP-CACHE</code>\u7F13\u5B58\u670D\u52A1\u5668</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">global</span></span>
<span class="line"><span style="color:#DBD7CA;">    nuster cache on data-size 200m</span></span>
<span class="line"><span style="color:#DBD7CA;">frontend fe</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:8080</span></span>
<span class="line"><span style="color:#DBD7CA;">    default_backend be</span></span>
<span class="line"><span style="color:#DBD7CA;">backend be</span></span>
<span class="line"><span style="color:#DBD7CA;">    nuster cache on</span></span>
<span class="line"><span style="color:#DBD7CA;">    nuster rule all</span></span>
<span class="line"><span style="color:#DBD7CA;">    server s1 127.0.0.1:8081</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">global</span></span>
<span class="line"><span style="color:#393A34;">    nuster cache on data-size 200m</span></span>
<span class="line"><span style="color:#393A34;">frontend fe</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:8080</span></span>
<span class="line"><span style="color:#393A34;">    default_backend be</span></span>
<span class="line"><span style="color:#393A34;">backend be</span></span>
<span class="line"><span style="color:#393A34;">    nuster cache on</span></span>
<span class="line"><span style="color:#393A34;">    nuster rule all</span></span>
<span class="line"><span style="color:#393A34;">    server s1 127.0.0.1:8081</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>\u5B98\u65B9\u6587\u6863:<a href="https://github.com/jiangwenyuan/nuster/blob/master/README.md" target="_blank" rel="noopener noreferrer">https://github.com/jiangwenyuan/nuster/blob/master/README.md</a></li></ul>`,27),c=[p];function o(r,t,i,d,y,u){return n(),a("div",null,c)}var h=s(l,[["render",o]]);export{b as __pageData,h as default};
