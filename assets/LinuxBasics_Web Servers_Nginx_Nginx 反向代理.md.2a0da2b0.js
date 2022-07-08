import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Nginx \u53CD\u5411\u4EE3\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx \u53CD\u5411\u4EE3\u7406","slug":"nginx-\u53CD\u5411\u4EE3\u7406-1"},{"level":2,"title":"Nginx \u7F13\u5B58\u8BBE\u7F6E","slug":"nginx-\u7F13\u5B58\u8BBE\u7F6E"},{"level":2,"title":"Nginx \u52A8\u6001\u8BF7\u6C42PHP","slug":"nginx-\u52A8\u6001\u8BF7\u6C42php"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"},{"level":2,"title":"\u53C2\u8003\u6587\u6863:","slug":"\u53C2\u8003\u6587\u6863"}],"relativePath":"LinuxBasics/Web Servers/Nginx/Nginx \u53CD\u5411\u4EE3\u7406.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Web Servers/Nginx/Nginx \u53CD\u5411\u4EE3\u7406.md"},o=p(`<h1 id="nginx-\u53CD\u5411\u4EE3\u7406" tabindex="-1">Nginx \u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#nginx-\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h1><h2 id="nginx-\u53CD\u5411\u4EE3\u7406-1" tabindex="-1">Nginx \u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#nginx-\u53CD\u5411\u4EE3\u7406-1" aria-hidden="true">#</a></h2><p>The <code>ngx_http_proxy_module</code> module allows passing requests to another server.</p><p>Example Configuration</p><blockquote><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">location / {</span></span>
<span class="line"><span style="color:#dbd7ca;">    proxy_pass       http://127.0.0.1:8000;</span></span>
<span class="line"><span style="color:#dbd7ca;">    proxy_set_header Host      $host;</span></span>
<span class="line"><span style="color:#dbd7ca;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#dbd7ca;">}</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">location / {</span></span>
<span class="line"><span style="color:#393a34;">    proxy_pass       http://127.0.0.1:8000;</span></span>
<span class="line"><span style="color:#393a34;">    proxy_set_header Host      $host;</span></span>
<span class="line"><span style="color:#393a34;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div></blockquote><p>\u793A\u4F8B:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        listen 80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server_name agou-ops.com</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                proxy_pass http://192.168.174.141</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                proxy_set_header X-Real-IP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u5411\u540E\u7AEF\u670D\u52A1\u5668\u4F20\u53C2\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">                add_header X-Via </span><span style="color:#858585;">$</span><span style="color:#B8A965;">server_addr</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">			</span><span style="color:#758575;"># \u5411\u5BA2\u6237\u7AEF\u4F20\u9012\u53C2\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># \u53CD\u4EE3\u56FE\u7247\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#DBD7CA;">        location </span><span style="color:#CB7676;">~*</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">\\.</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">jpg</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">png</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">jpeg</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">$ </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                proxy_pass http://192.168.174.141:8088</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        listen 80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server_name agou-ops.com</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                proxy_pass http://192.168.174.141</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                proxy_set_header X-Real-IP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u5411\u540E\u7AEF\u670D\u52A1\u5668\u4F20\u53C2\u6570</span></span>
<span class="line"><span style="color:#393A34;">                add_header X-Via </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">server_addr</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">			</span><span style="color:#A0ADA0;"># \u5411\u5BA2\u6237\u7AEF\u4F20\u9012\u53C2\u6570</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53CD\u4EE3\u56FE\u7247\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#393A34;">        location </span><span style="color:#AB5959;">~*</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">\\.</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">jpg</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">png</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">jpeg</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">$ </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                proxy_pass http://192.168.174.141:8088</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx-\u7F13\u5B58\u8BBE\u7F6E" tabindex="-1">Nginx \u7F13\u5B58\u8BBE\u7F6E <a class="header-anchor" href="#nginx-\u7F13\u5B58\u8BBE\u7F6E" aria-hidden="true">#</a></h2><p>\u793A\u4F8B:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">http{</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">    proxy_cache_path  /usr/share/nginx/proxy_cache_dir  levels=1:2   keys_zone=cache_one:200m inactive=1d max_size=30g</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u53C2\u6570\u5206\u522B\u662F\u7F13\u5B58\u5B58\u653E\u8DEF\u5F84,levels\u8868\u793A\u4F7F\u7528\u51E0\u7EA7\u7F13\u5B58\u76EE\u5F55,keys_zone\u8868\u793A\u4ECE\u5185\u5B58\u4E2D\u62BD\u51FA\u591A\u5927\u7A7A\u95F4,inactive\u8868\u793A\u5B58\u53D6\u591A\u957F\u65F6\u95F4\u540E\u8FC7\u671F,max_size\u8868\u793A\u6700\u5927\u4F7F\u7528\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">    proxy_cache  cache_one</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u542F\u7528\u7F13\u5B58,\u7F13\u5B58ID\u4E3Acache_one</span></span>
<span class="line"><span style="color:#DBD7CA;">    proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    proxy_cache_valid  200 304 12h</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;">#\u5BF9\u4E0D\u540C\u7684HTTP\u72B6\u6001\u7801\u8BBE\u7F6E\u4E0D\u540C\u7684\u7F13\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">    proxy_cache_key </span><span style="color:#858585;">$</span><span style="color:#B8A965;">request_uri</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">http{</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">    proxy_cache_path  /usr/share/nginx/proxy_cache_dir  levels=1:2   keys_zone=cache_one:200m inactive=1d max_size=30g</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u53C2\u6570\u5206\u522B\u662F\u7F13\u5B58\u5B58\u653E\u8DEF\u5F84,levels\u8868\u793A\u4F7F\u7528\u51E0\u7EA7\u7F13\u5B58\u76EE\u5F55,keys_zone\u8868\u793A\u4ECE\u5185\u5B58\u4E2D\u62BD\u51FA\u591A\u5927\u7A7A\u95F4,inactive\u8868\u793A\u5B58\u53D6\u591A\u957F\u65F6\u95F4\u540E\u8FC7\u671F,max_size\u8868\u793A\u6700\u5927\u4F7F\u7528\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#393A34;">server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">    proxy_cache  cache_one</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u542F\u7528\u7F13\u5B58,\u7F13\u5B58ID\u4E3Acache_one</span></span>
<span class="line"><span style="color:#393A34;">    proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    proxy_cache_valid  200 304 12h</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;">#\u5BF9\u4E0D\u540C\u7684HTTP\u72B6\u6001\u7801\u8BBE\u7F6E\u4E0D\u540C\u7684\u7F13\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">    proxy_cache_key </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">request_uri</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx-\u52A8\u6001\u8BF7\u6C42php" tabindex="-1">Nginx \u52A8\u6001\u8BF7\u6C42PHP <a class="header-anchor" href="#nginx-\u52A8\u6001\u8BF7\u6C42php" aria-hidden="true">#</a></h2><p>Example Configuration</p><blockquote><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">location / {</span></span>
<span class="line"><span style="color:#dbd7ca;">    fastcgi_pass  localhost:9000;</span></span>
<span class="line"><span style="color:#dbd7ca;">    fastcgi_index index.php;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">    fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#dbd7ca;">    fastcgi_param QUERY_STRING    $query_string;</span></span>
<span class="line"><span style="color:#dbd7ca;">    fastcgi_param REQUEST_METHOD  $request_method;</span></span>
<span class="line"><span style="color:#dbd7ca;">    fastcgi_param CONTENT_TYPE    $content_type;</span></span>
<span class="line"><span style="color:#dbd7ca;">    fastcgi_param CONTENT_LENGTH  $content_length;</span></span>
<span class="line"><span style="color:#dbd7ca;">}</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">location / {</span></span>
<span class="line"><span style="color:#393a34;">    fastcgi_pass  localhost:9000;</span></span>
<span class="line"><span style="color:#393a34;">    fastcgi_index index.php;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    fastcgi_param SCRIPT_FILENAME /home/www/scripts/php$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#393a34;">    fastcgi_param QUERY_STRING    $query_string;</span></span>
<span class="line"><span style="color:#393a34;">    fastcgi_param REQUEST_METHOD  $request_method;</span></span>
<span class="line"><span style="color:#393a34;">    fastcgi_param CONTENT_TYPE    $content_type;</span></span>
<span class="line"><span style="color:#393a34;">    fastcgi_param CONTENT_LENGTH  $content_length;</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div></blockquote><p>\u793A\u4F8B\u4E00:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        listen 80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server_name agou-ops.com</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        index index.php index.html</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                root /usr/share/nginx/html/vhost1</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                proxy_pass http://192.168.174.142</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u9759\u6001\u9875\u9762</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        location </span><span style="color:#CB7676;">~*</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">\\.</span><span style="color:#DBD7CA;">php$ </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                fastcgi_pass 192.168.174.141:9000</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u52A8\u6001php\u9875\u9762</span></span>
<span class="line"><span style="color:#DBD7CA;">                fastcgi_index index.php</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                include fastcgi_params</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                fastcgi_param SCRIPT_FILENAME /data/php/</span><span style="color:#858585;">$</span><span style="color:#B8A965;">fastcgi_script_name</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">        location </span><span style="color:#CB7676;">~*</span><span style="color:#DBD7CA;"> ^/</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">status/ping</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">$ </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        	include fastcgi_params</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        	fastcgi_pass 192.168.174.141:9000</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        	fastcgi_param SCRIPT_FILENAME /data/php/</span><span style="color:#858585;">$</span><span style="color:#B8A965;">fastcgi_script_name</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        listen 80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server_name agou-ops.com</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        index index.php index.html</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                root /usr/share/nginx/html/vhost1</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                proxy_pass http://192.168.174.142</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u9759\u6001\u9875\u9762</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        location </span><span style="color:#AB5959;">~*</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">\\.</span><span style="color:#393A34;">php$ </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                fastcgi_pass 192.168.174.141:9000</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u52A8\u6001php\u9875\u9762</span></span>
<span class="line"><span style="color:#393A34;">                fastcgi_index index.php</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                include fastcgi_params</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                fastcgi_param SCRIPT_FILENAME /data/php/</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">fastcgi_script_name</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">        location </span><span style="color:#AB5959;">~*</span><span style="color:#393A34;"> ^/</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">status/ping</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">$ </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        	include fastcgi_params</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        	fastcgi_pass 192.168.174.141:9000</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        	fastcgi_param SCRIPT_FILENAME /data/php/</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">fastcgi_script_name</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B\u4E8C:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">http </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">	fastcgi_cache_path /data/nginx/cache levels=1:2 keys_zone=one:10m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">    fastcgi_cache one</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    fastcgi_keep_conn on</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">	</span><span style="color:#758575;"># This is necessary, in particular, for keepalive connections to FastCGI servers to function.</span></span>
<span class="line"><span style="color:#DBD7CA;">    fastcgi_cache_key </span><span style="color:#858585;">$</span><span style="color:#B8A965;">request_uri</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    fastcgi_cache_valid 200 302 10m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    fastcgi_cache_valid 301 1h</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    fastcgi_cache_valid any 1m</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">http </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">	fastcgi_cache_path /data/nginx/cache levels=1:2 keys_zone=one:10m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">    fastcgi_cache one</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    fastcgi_keep_conn on</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">	</span><span style="color:#A0ADA0;"># This is necessary, in particular, for keepalive connections to FastCGI servers to function.</span></span>
<span class="line"><span style="color:#393A34;">    fastcgi_cache_key </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">request_uri</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    fastcgi_cache_valid 200 302 10m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    fastcgi_cache_valid 301 1h</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    fastcgi_cache_valid any 1m</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><ul><li>\u53CD\u5411\u4EE3\u7406\u4EE3\u7406\u5230\u65B0\u5730\u5740\uFF0C\u6D4F\u89C8\u5668\u5730\u5740\u680F\u663E\u793A\u539F\u59CB\u5730\u5740\uFF1A</li></ul><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">^/api/live/.*$ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_next_upstream </span><span style="color:#DBD7CA;">error timeout http_500 http_502 http_503 http_504</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_set_header </span><span style="color:#DBD7CA;">Host  </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_set_header </span><span style="color:#DBD7CA;">X-Forwarded-For  </span><span style="color:#858585;">$</span><span style="color:#B8A965;">http_x_forwarded_for</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_set_header </span><span style="color:#DBD7CA;">cmccip </span><span style="color:#858585;">$</span><span style="color:#B8A965;">cmccip</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_pass </span><span style="color:#DBD7CA;">http://new_pool</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_http_version </span><span style="color:#DBD7CA;">1.1</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_set_header </span><span style="color:#DBD7CA;">Connection </span><span style="color:#C98A7D;">&quot;&quot;</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_connect_timeout </span><span style="color:#DBD7CA;">10</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	proxy_read_timeout </span><span style="color:#DBD7CA;">15</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">^/api/live/.*$ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_next_upstream </span><span style="color:#393A34;">error timeout http_500 http_502 http_503 http_504</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_set_header </span><span style="color:#393A34;">Host  </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_set_header </span><span style="color:#393A34;">X-Forwarded-For  </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">http_x_forwarded_for</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_set_header </span><span style="color:#393A34;">cmccip </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">cmccip</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_pass </span><span style="color:#393A34;">http://new_pool</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_http_version </span><span style="color:#393A34;">1.1</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_set_header </span><span style="color:#393A34;">Connection </span><span style="color:#B56959;">&quot;&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_connect_timeout </span><span style="color:#393A34;">10</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	proxy_read_timeout </span><span style="color:#393A34;">15</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863: <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h2><ul><li>nginx HttpProxy modules:<a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_proxy_module.html</a></li><li>ngx_http_headers_module:<a href="http://nginx.org/en/docs/http/ngx_http_headers_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_headers_module.html</a></li><li>proxy_cache:<a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path</a></li><li>ngx_http_fastcgi_module:<a href="http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html</a></li><li>fastcgi_cache:<a href="http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache</a></li></ul>`,22),e=[o];function c(t,r,y,i,_,A){return n(),a("div",null,e)}var h=s(l,[["render",c]]);export{B as __pageData,h as default};
