import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"Nginx \u9AD8\u7EA7\u6A21\u5757\u53CA\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"ngxstreamcore_module","slug":"ngx-stream-core-module"},{"level":2,"title":"nginxupstreamcheck_module","slug":"nginx-upstream-check-module"},{"level":2,"title":"httpgeomodule","slug":"http-geo-module"},{"level":2,"title":"httpgeoipmodule","slug":"http-geoip-module"}],"relativePath":"LinuxBasics/Web Servers/Nginx/Nginx \u9AD8\u7EA7\u6A21\u5757.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Web Servers/Nginx/Nginx \u9AD8\u7EA7\u6A21\u5757.md"},e=p(`<h1 id="nginx-\u9AD8\u7EA7\u6A21\u5757\u53CA\u4F18\u5316" tabindex="-1">Nginx \u9AD8\u7EA7\u6A21\u5757\u53CA\u4F18\u5316 <a class="header-anchor" href="#nginx-\u9AD8\u7EA7\u6A21\u5757\u53CA\u4F18\u5316" aria-hidden="true">#</a></h1><h2 id="ngx-stream-core-module" tabindex="-1">ngx_stream_core_module <a class="header-anchor" href="#ngx-stream-core-module" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8BE5\u6A21\u5757\u4E0D\u4F1A\u81EA\u52A8\u5B89\u88C5,\u9700\u8981\u5728\u7F16\u8BD1\u662F\u4F7F\u7528with\u6765\u5B89\u88C5. \u68C0\u67E5\u5F53\u524Dnginx\u662F\u5426\u5B89\u88C5\u6709\u8BE5\u6A21\u5757,<code>rpm -qa nginx | grep mod-stream</code></p><p>Example Configuration</p><blockquote><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">worker_processes auto;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">error_log /var/log/nginx/error.log info;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">events {</span></span>
<span class="line"><span style="color:#dbd7ca;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#dbd7ca;">}</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">stream {</span></span>
<span class="line"><span style="color:#dbd7ca;">    upstream backend {</span></span>
<span class="line"><span style="color:#dbd7ca;">        hash $remote_addr consistent;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">        server backend1.example.com:12345 weight=5;</span></span>
<span class="line"><span style="color:#dbd7ca;">        server 127.0.0.1:12345            max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span style="color:#dbd7ca;">        server unix:/tmp/backend3;</span></span>
<span class="line"><span style="color:#dbd7ca;">    }</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">    upstream dns {</span></span>
<span class="line"><span style="color:#dbd7ca;">       server 192.168.0.1:53535;</span></span>
<span class="line"><span style="color:#dbd7ca;">       server dns.example.com:53;</span></span>
<span class="line"><span style="color:#dbd7ca;">    }</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">    server {</span></span>
<span class="line"><span style="color:#dbd7ca;">        listen 12345;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_connect_timeout 1s;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_timeout 3s;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_pass backend;</span></span>
<span class="line"><span style="color:#dbd7ca;">    }</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">    server {</span></span>
<span class="line"><span style="color:#dbd7ca;">        listen 127.0.0.1:53 udp reuseport;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_timeout 20s;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_pass dns;</span></span>
<span class="line"><span style="color:#dbd7ca;">    }</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">    server {</span></span>
<span class="line"><span style="color:#dbd7ca;">        listen [::1]:12345;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_pass unix:/tmp/stream.socket;</span></span>
<span class="line"><span style="color:#dbd7ca;">    }</span></span>
<span class="line"><span style="color:#dbd7ca;">}</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">worker_processes auto;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">error_log /var/log/nginx/error.log info;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">events {</span></span>
<span class="line"><span style="color:#393a34;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">stream {</span></span>
<span class="line"><span style="color:#393a34;">    upstream backend {</span></span>
<span class="line"><span style="color:#393a34;">        hash $remote_addr consistent;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">        server backend1.example.com:12345 weight=5;</span></span>
<span class="line"><span style="color:#393a34;">        server 127.0.0.1:12345            max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span style="color:#393a34;">        server unix:/tmp/backend3;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    upstream dns {</span></span>
<span class="line"><span style="color:#393a34;">       server 192.168.0.1:53535;</span></span>
<span class="line"><span style="color:#393a34;">       server dns.example.com:53;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    server {</span></span>
<span class="line"><span style="color:#393a34;">        listen 12345;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_connect_timeout 1s;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_timeout 3s;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_pass backend;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    server {</span></span>
<span class="line"><span style="color:#393a34;">        listen 127.0.0.1:53 udp reuseport;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_timeout 20s;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_pass dns;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    server {</span></span>
<span class="line"><span style="color:#393a34;">        listen [::1]:12345;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_pass unix:/tmp/stream.socket;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div></blockquote><h2 id="nginx-upstream-check-module" tabindex="-1">nginx_upstream_check_module <a class="header-anchor" href="#nginx-upstream-check-module" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u793A\u4F8B\uFF1A</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">upstream</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">data_pool </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">server</span><span style="color:#DBD7CA;"> 10.10.81.125:9090;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">server</span><span style="color:#DBD7CA;"> 10.10.81.220:9090;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">check</span><span style="color:#DBD7CA;"> interval=5000 rise=2 fall=10 timeout=3000 type=http</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">check_http_send</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;GET /login.html HTTP/1.0\\r</span><span style="color:#D4976C;">\\n</span><span style="color:#C98A7D;">\\r</span><span style="color:#D4976C;">\\n</span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">check_http_expect_alive</span><span style="color:#DBD7CA;"> http_2xx http_3xx</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">upstream</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">data_pool </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">server</span><span style="color:#393A34;"> 10.10.81.125:9090;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">server</span><span style="color:#393A34;"> 10.10.81.220:9090;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">check</span><span style="color:#393A34;"> interval=5000 rise=2 fall=10 timeout=3000 type=http</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">check_http_send</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;GET /login.html HTTP/1.0\\r</span><span style="color:#A65E2B;">\\n</span><span style="color:#B56959;">\\r</span><span style="color:#A65E2B;">\\n</span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">check_http_expect_alive</span><span style="color:#393A34;"> http_2xx http_3xx</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u591A\u53C2\u8003\uFF1A<a href="https://github.com/yaoweibin/nginx_upstream_check_module" target="_blank" rel="noopener noreferrer">https://github.com/yaoweibin/nginx_upstream_check_module</a></p><h2 id="http-geo-module" tabindex="-1">http_geo_module <a class="header-anchor" href="#http-geo-module" aria-hidden="true">#</a></h2><p>\u66F4\u591A\u53C2\u8003\uFF1A<a href="http://nginx.org/en/docs/http/ngx_http_geo_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_geo_module.html</a></p><h2 id="http-geoip-module" tabindex="-1">http_geoip_module <a class="header-anchor" href="#http-geoip-module" aria-hidden="true">#</a></h2><p>\u901A\u8FC7<code>nginx GeoIP</code>\u6A21\u5757\u6765\u9650\u5236\u67D0\u4E9B\u56FD\u5BB6\u6216\u8005\u5177\u4F53\u5730\u533A\u8BBF\u95EE\u7F51\u7AD9\u3002</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># 1. \u9996\u5148\u786E\u4FDDhttp_geoip_module\u5DF2\u6210\u529F\u7F16\u8BD1\u8FDBnginx</span></span>
<span class="line"><span style="color:#DBD7CA;">nginx -V </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep http_geoip_module</span></span>
<span class="line"><span style="color:#758575;"># 2. \u4E0B\u8F7D\u533A\u57DF\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /etc/nginx/geoip</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /etc/nginx/geoip</span></span>
<span class="line"><span style="color:#DBD7CA;">wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">gunzip GeoIP.dat.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">gunzip GeoLiteCity.dat.gz</span></span>
<span class="line"><span style="color:#758575;"># 3. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">load_module modules/ngx_http_geoip2_module.so</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">http </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;"> geoip_country /etc/nginx/geoip/GeoIP.dat</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;"># the country IP database</span></span>
<span class="line"><span style="color:#DBD7CA;"> geoip_city /etc/nginx/geoip/GeoLiteCity.dat</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;"># the city IP database</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#858585;"> </span><span style="color:#758575;"># map the list of denied countries</span></span>
<span class="line"><span style="color:#DBD7CA;">map </span><span style="color:#858585;">$</span><span style="color:#B8A965;">geoip_country_code</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">allowed_country</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#758575;"># \u4EE3\u7801\uFF1Ahttps://dev.maxmind.com/geoip/legacy/codes/iso3166/</span></span>
<span class="line"><span style="color:#DBD7CA;">   default yes</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;"># Pakistan</span></span>
<span class="line"><span style="color:#DBD7CA;">   PK no</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;"># Ukraine</span></span>
<span class="line"><span style="color:#DBD7CA;">   UA no</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;"># Russia</span></span>
<span class="line"><span style="color:#DBD7CA;">   RU no</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">   </span><span style="color:#758575;"># China</span></span>
<span class="line"><span style="color:#DBD7CA;">   CN no</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># --------------------- \u6216\u8005</span></span>
<span class="line"><span style="color:#758575;"># http\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">http </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">...</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">geoip_country /usr/share/GeoIP/GeoIP.dat</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">map </span><span style="color:#858585;">$</span><span style="color:#B8A965;">geoip_country_code</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">allowed_country</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">default yes</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">CN no</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">...</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># server\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">...</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">($</span><span style="color:#B8A965;">allowed_country</span><span style="color:#DBD7CA;"> = no</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> 444</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;"># # This means the server will stop processing, returns error 444 (The connection was reset),</span></span>
<span class="line"><span style="color:#758575;"># # And ignore always sending the response header.</span></span>
<span class="line"><span style="color:#758575;"># # Replace 444 by 403 if you want</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">...</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 1. \u9996\u5148\u786E\u4FDDhttp_geoip_module\u5DF2\u6210\u529F\u7F16\u8BD1\u8FDBnginx</span></span>
<span class="line"><span style="color:#393A34;">nginx -V </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep http_geoip_module</span></span>
<span class="line"><span style="color:#A0ADA0;"># 2. \u4E0B\u8F7D\u533A\u57DF\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#393A34;">mkdir /etc/nginx/geoip</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /etc/nginx/geoip</span></span>
<span class="line"><span style="color:#393A34;">wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz</span></span>
<span class="line"><span style="color:#393A34;">gunzip GeoIP.dat.gz</span></span>
<span class="line"><span style="color:#393A34;">wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz</span></span>
<span class="line"><span style="color:#393A34;">gunzip GeoLiteCity.dat.gz</span></span>
<span class="line"><span style="color:#A0ADA0;"># 3. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">load_module modules/ngx_http_geoip2_module.so</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">http </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;"> geoip_country /etc/nginx/geoip/GeoIP.dat</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># the country IP database</span></span>
<span class="line"><span style="color:#393A34;"> geoip_city /etc/nginx/geoip/GeoLiteCity.dat</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># the city IP database</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#8E8F8B;"> </span><span style="color:#A0ADA0;"># map the list of denied countries</span></span>
<span class="line"><span style="color:#393A34;">map </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">geoip_country_code</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">allowed_country</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4EE3\u7801\uFF1Ahttps://dev.maxmind.com/geoip/legacy/codes/iso3166/</span></span>
<span class="line"><span style="color:#393A34;">   default yes</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;"># Pakistan</span></span>
<span class="line"><span style="color:#393A34;">   PK no</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;"># Ukraine</span></span>
<span class="line"><span style="color:#393A34;">   UA no</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;"># Russia</span></span>
<span class="line"><span style="color:#393A34;">   RU no</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">   </span><span style="color:#A0ADA0;"># China</span></span>
<span class="line"><span style="color:#393A34;">   CN no</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------------------- \u6216\u8005</span></span>
<span class="line"><span style="color:#A0ADA0;"># http\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">http </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">...</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">geoip_country /usr/share/GeoIP/GeoIP.dat</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">map </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">geoip_country_code</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">allowed_country</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">default yes</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">CN no</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">...</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># server\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">...</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">($</span><span style="color:#8C862B;">allowed_country</span><span style="color:#393A34;"> = no</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> 444</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;"># # This means the server will stop processing, returns error 444 (The connection was reset),</span></span>
<span class="line"><span style="color:#A0ADA0;"># # And ignore always sending the response header.</span></span>
<span class="line"><span style="color:#A0ADA0;"># # Replace 444 by 403 if you want</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">...</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u2139\uFE0F\u5C06\u6A21\u5757\u7F16\u8BD1\u8FDBnginx</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u514B\u9686\u6A21\u5757\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#DBD7CA;">git clone https://github.com/leev/ngx_http_geoip2_module.git</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770Bnginx\u7248\u672C</span></span>
<span class="line"><span style="color:#DBD7CA;">$ nginx -v</span></span>
<span class="line"><span style="color:#DBD7CA;">nginx version: nginx/VERSION</span></span>
<span class="line"><span style="color:#758575;"># \u4E0B\u8F7D\u548C\u5F53\u524D\u7248\u672C\u76F8\u540C\u7684nginx\u6E90\u7801\u5305</span></span>
<span class="line"><span style="color:#DBD7CA;">wget http://nginx.org/download/nginx-VERSION.tar.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">tar zxvf nginx-VERSION.tar.gz</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> nginx-VERSION</span></span>
<span class="line"><span style="color:#758575;"># \u7F16\u8BD1\u6A21\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">./configure --with-compat --add-dynamic-module=../ngx_http_geoip2_module</span></span>
<span class="line"><span style="color:#DBD7CA;">make modules</span></span>
<span class="line"><span style="color:#758575;"># \u590D\u5236geoip2\u6A21\u5757\u5230nginx\u76EE\u5F55\u5F53\u4E2D\u53BB</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /etc/nginx/modules</span></span>
<span class="line"><span style="color:#DBD7CA;">cp -vi objs/ngx_http_geoip2_module.so /etc/nginx/modules/</span></span>
<span class="line"><span style="color:#758575;"># \u5C06\u6A21\u5757\u6DFB\u52A0\u5230\u914D\u7F6E\u6587\u4EF6\u5F53\u4E2D\u53BB</span></span>
<span class="line"><span style="color:#DBD7CA;">load_module modules/ngx_http_geoip2_module.so</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;"># \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u6B63\u786E\u6027\u548C\u662F\u5426\u6210\u529F\u8F7D\u5165\u6A21\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">nginx -t </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> nginx -V </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep geo</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u514B\u9686\u6A21\u5757\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#393A34;">git clone https://github.com/leev/ngx_http_geoip2_module.git</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770Bnginx\u7248\u672C</span></span>
<span class="line"><span style="color:#393A34;">$ nginx -v</span></span>
<span class="line"><span style="color:#393A34;">nginx version: nginx/VERSION</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E0B\u8F7D\u548C\u5F53\u524D\u7248\u672C\u76F8\u540C\u7684nginx\u6E90\u7801\u5305</span></span>
<span class="line"><span style="color:#393A34;">wget http://nginx.org/download/nginx-VERSION.tar.gz</span></span>
<span class="line"><span style="color:#393A34;">tar zxvf nginx-VERSION.tar.gz</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> nginx-VERSION</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u8BD1\u6A21\u5757</span></span>
<span class="line"><span style="color:#393A34;">./configure --with-compat --add-dynamic-module=../ngx_http_geoip2_module</span></span>
<span class="line"><span style="color:#393A34;">make modules</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u590D\u5236geoip2\u6A21\u5757\u5230nginx\u76EE\u5F55\u5F53\u4E2D\u53BB</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p /etc/nginx/modules</span></span>
<span class="line"><span style="color:#393A34;">cp -vi objs/ngx_http_geoip2_module.so /etc/nginx/modules/</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u6A21\u5757\u6DFB\u52A0\u5230\u914D\u7F6E\u6587\u4EF6\u5F53\u4E2D\u53BB</span></span>
<span class="line"><span style="color:#393A34;">load_module modules/ngx_http_geoip2_module.so</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u6B63\u786E\u6027\u548C\u662F\u5426\u6210\u529F\u8F7D\u5165\u6A21\u5757</span></span>
<span class="line"><span style="color:#393A34;">nginx -t </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> nginx -V </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep geo</span></span>
<span class="line"></span></code></pre></div>`,16),o=[e];function c(t,r,i,y,d,A){return n(),a("div",null,o)}var B=s(l,[["render",c]]);export{D as __pageData,B as default};
