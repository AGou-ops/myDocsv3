import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"Nginx \u5FEB\u901F\u624B\u518C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u672C\u5730 HTTPS","slug":"\u914D\u7F6E\u672C\u5730-https"},{"level":2,"title":"\u7981\u6B62IP\u76F4\u63A5\u8BBF\u95EE","slug":"\u7981\u6B62ip\u76F4\u63A5\u8BBF\u95EE"},{"level":2,"title":"php","slug":"php"},{"level":2,"title":"Log format","slug":"log-format"},{"level":2,"title":"\u72B6\u6001\u76D1\u63A7","slug":"\u72B6\u6001\u76D1\u63A7"},{"level":2,"title":"\u76EE\u5F55\u6D4F\u89C8","slug":"\u76EE\u5F55\u6D4F\u89C8"},{"level":2,"title":"\u8C03\u6574\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F","slug":"\u8C03\u6574\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F"},{"level":2,"title":"\u8BBE\u7F6E\u9519\u8BEF\u9875\u9762","slug":"\u8BBE\u7F6E\u9519\u8BEF\u9875\u9762"},{"level":2,"title":"\u8BBF\u95EE\u9650\u5236","slug":"\u8BBF\u95EE\u9650\u5236"},{"level":3,"title":"\u8FDE\u63A5\u6570\u9650\u5236","slug":"\u8FDE\u63A5\u6570\u9650\u5236"},{"level":3,"title":"\u8BF7\u6C42\u6570\u9650\u5236","slug":"\u8BF7\u6C42\u6570\u9650\u5236"},{"level":2,"title":"\u8BBF\u95EE\u63A7\u5236","slug":"\u8BBF\u95EE\u63A7\u5236"},{"level":3,"title":"\u7981\u6B62\u7528\u6237\u8BBF\u95EE\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55","slug":"\u7981\u6B62\u7528\u6237\u8BBF\u95EE\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55"},{"level":3,"title":"\u57FA\u4E8EIP\u7684\u8BBF\u95EE\u63A7\u5236","slug":"\u57FA\u4E8Eip\u7684\u8BBF\u95EE\u63A7\u5236"},{"level":3,"title":"\u57FA\u4E8E\u7528\u6237\u767B\u5F55\u7684\u57FA\u672C\u8BA4\u8BC1","slug":"\u57FA\u4E8E\u7528\u6237\u767B\u5F55\u7684\u57FA\u672C\u8BA4\u8BC1"},{"level":2,"title":"Root \u4E0E alias","slug":"root-\u4E0E-alias"},{"level":2,"title":"try_file \u8DEF\u5F84\u5339\u914D","slug":"try-file-\u8DEF\u5F84\u5339\u914D"}],"relativePath":"LinuxBasics/Web Servers/Nginx/Nginx \u5FEB\u901F\u914D\u7F6E\u624B\u518C.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Web Servers/Nginx/Nginx \u5FEB\u901F\u914D\u7F6E\u624B\u518C.md"},o=l(`<h1 id="nginx-\u5FEB\u901F\u624B\u518C" tabindex="-1">Nginx \u5FEB\u901F\u624B\u518C <a class="header-anchor" href="#nginx-\u5FEB\u901F\u624B\u518C" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E\u672C\u5730-https" tabindex="-1">\u914D\u7F6E\u672C\u5730 HTTPS <a class="header-anchor" href="#\u914D\u7F6E\u672C\u5730-https" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo openssl req -x509 --nodes --days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/example.com.key -out /etc/nginx/ssl/example.com.crt</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo openssl req -x509 --nodes --days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/example.com.key -out /etc/nginx/ssl/example.com.crt</span></span>
<span class="line"></span></code></pre></div><p><code>vim /etc/nginx/conf.d/www.example.com.conf</code>:</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#4D9375;">	listen </span><span style="color:#DBD7CA;">80</span><span style="color:#D4976C;"> default_server</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">	server_name </span><span style="color:#DBD7CA;">www.example.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">301</span><span style="color:#DBD7CA;"> https://</span><span style="color:#858585;">$</span><span style="color:#B8A965;">server_name</span><span style="color:#858585;">$</span><span style="color:#B8A965;">request_uri</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#4D9375;">	listen </span><span style="color:#DBD7CA;">443 ssl</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">	server_name </span><span style="color:#DBD7CA;">www.example.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">	ssl_certificate </span><span style="color:#DBD7CA;">/etc/nginx/ssl/example.com.crt</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">	ssl_certificate_key </span><span style="color:#DBD7CA;">/etc/nginx/ssl/example.com.key</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	root </span><span style="color:#DBD7CA;">/usr/share/nginx/html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#4D9375;">	index </span><span style="color:#DBD7CA;">index.html index.htm</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#1C6B48;">	listen </span><span style="color:#393A34;">80</span><span style="color:#A65E2B;"> default_server</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">	server_name </span><span style="color:#393A34;">www.example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">301</span><span style="color:#393A34;"> https://</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">server_name</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">request_uri</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#1C6B48;">	listen </span><span style="color:#393A34;">443 ssl</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">	server_name </span><span style="color:#393A34;">www.example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">	ssl_certificate </span><span style="color:#393A34;">/etc/nginx/ssl/example.com.crt</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">	ssl_certificate_key </span><span style="color:#393A34;">/etc/nginx/ssl/example.com.key</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	root </span><span style="color:#393A34;">/usr/share/nginx/html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1C6B48;">	index </span><span style="color:#393A34;">index.html index.htm</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">	}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\uFF0C<code>nginx -t</code>\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u8BED\u6CD5\uFF0C<code>nginx -s reload</code>\u91CD\u8F7D\u670D\u52A1\u5373\u53EF\u3002</p><h2 id="\u7981\u6B62ip\u76F4\u63A5\u8BBF\u95EE" tabindex="-1">\u7981\u6B62IP\u76F4\u63A5\u8BBF\u95EE <a class="header-anchor" href="#\u7981\u6B62ip\u76F4\u63A5\u8BBF\u95EE" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#D4976C;"> default_server</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">example.com</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;"> ssl_certificate /etc/nginx/ssl/example.com.crt</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;"> ssl_certificate_key </span><span style="color:#DBD7CA;">/etc/nginx/ssl/example.com.key</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> (</span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!= </span><span style="color:#C98A7D;">&quot;example.com&quot;</span><span style="color:#DBD7CA;">) {</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">404</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;"> }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#D4976C;"> default_server</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> server_name </span><span style="color:#C98A7D;">&quot;&quot;</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">444</span><span style="color:#DBD7CA;">;		</span><span style="color:#758575;"># \u8FD4\u56DE\u7A7A\u54CD\u5E94</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">301</span><span style="color:#DBD7CA;"> http://YOUR_DOMAIN;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#A65E2B;"> default_server</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">example.com</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;"> ssl_certificate /etc/nginx/ssl/example.com.crt</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;"> ssl_certificate_key </span><span style="color:#393A34;">/etc/nginx/ssl/example.com.key</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;"> </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> (</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!= </span><span style="color:#B56959;">&quot;example.com&quot;</span><span style="color:#393A34;">) {</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">404</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;"> }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#A65E2B;"> default_server</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> server_name </span><span style="color:#B56959;">&quot;&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">444</span><span style="color:#393A34;">;		</span><span style="color:#A0ADA0;"># \u8FD4\u56DE\u7A7A\u54CD\u5E94</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">301</span><span style="color:#393A34;"> http://YOUR_DOMAIN;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="php" tabindex="-1">php <a class="header-anchor" href="#php" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#4D9375;">cat</span><span style="color:#DBD7CA;"> php.conf </span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">php.example.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">/code</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> index </span><span style="color:#DBD7CA;">index.php index.html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">\\.php$ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> fastcgi_pass </span><span style="color:#DBD7CA;">127.0.0.1:9000</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> fastcgi_param </span><span style="color:#DBD7CA;">SCRIPT_FILENAME </span><span style="color:#858585;">$</span><span style="color:#B8A965;">document_root</span><span style="color:#858585;">$</span><span style="color:#B8A965;">fastcgi_script_name</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> include </span><span style="color:#DBD7CA;">fastcgi_params</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#4D9375;">cat</span><span style="color:#DBD7CA;"> /code/index.php </span></span>
<span class="line"><span style="color:#DBD7CA;">&lt;?</span><span style="color:#4D9375;">php</span></span>
<span class="line"><span style="color:#DBD7CA;">    phpinfo();</span></span>
<span class="line"><span style="color:#DBD7CA;">?&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ </span><span style="color:#1C6B48;">cat</span><span style="color:#393A34;"> php.conf </span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">php.example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">/code</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> index </span><span style="color:#393A34;">index.php index.html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">\\.php$ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> fastcgi_pass </span><span style="color:#393A34;">127.0.0.1:9000</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> fastcgi_param </span><span style="color:#393A34;">SCRIPT_FILENAME </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">document_root</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">fastcgi_script_name</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> include </span><span style="color:#393A34;">fastcgi_params</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#393A34;">$ </span><span style="color:#1C6B48;">cat</span><span style="color:#393A34;"> /code/index.php </span></span>
<span class="line"><span style="color:#393A34;">&lt;?</span><span style="color:#1C6B48;">php</span></span>
<span class="line"><span style="color:#393A34;">    phpinfo();</span></span>
<span class="line"><span style="color:#393A34;">?&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="log-format" tabindex="-1">Log format <a class="header-anchor" href="#log-format" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u793A\u4F8B1</span></span>
<span class="line"><span style="color:#DBD7CA;">log_format compression </span><span style="color:#C98A7D;">&#39;$remote_addr - $remote_user [$time_local] &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;$request&quot; $status $bytes_sent &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot; &quot;$gzip_ratio&quot;&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">access_log /spool/logs/nginx-access.log compression buffer=32k</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;"># \u793A\u4F8B2</span></span>
<span class="line"><span style="color:#DBD7CA;">log_format combined </span><span style="color:#C98A7D;">&#39;$remote_addr - $remote_user [$time_local] &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                    </span><span style="color:#C98A7D;">&#39;&quot;$request&quot; $status $body_bytes_sent &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                    </span><span style="color:#C98A7D;">&#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot;&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;"># \u793A\u4F8B3</span></span>
<span class="line"><span style="color:#DBD7CA;">log_format  main  </span><span style="color:#C98A7D;">&#39;$remote_addr - $remote_user [$time_local]&quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                    </span><span style="color:#C98A7D;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                    </span><span style="color:#C98A7D;">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u793A\u4F8B1</span></span>
<span class="line"><span style="color:#393A34;">log_format compression </span><span style="color:#B56959;">&#39;$remote_addr - $remote_user [$time_local] &#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;$request&quot; $status $bytes_sent &#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot; &quot;$gzip_ratio&quot;&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">access_log /spool/logs/nginx-access.log compression buffer=32k</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u793A\u4F8B2</span></span>
<span class="line"><span style="color:#393A34;">log_format combined </span><span style="color:#B56959;">&#39;$remote_addr - $remote_user [$time_local] &#39;</span></span>
<span class="line"><span style="color:#393A34;">                    </span><span style="color:#B56959;">&#39;&quot;$request&quot; $status $body_bytes_sent &#39;</span></span>
<span class="line"><span style="color:#393A34;">                    </span><span style="color:#B56959;">&#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot;&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u793A\u4F8B3</span></span>
<span class="line"><span style="color:#393A34;">log_format  main  </span><span style="color:#B56959;">&#39;$remote_addr - $remote_user [$time_local]&quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                    </span><span style="color:#B56959;">&#39;$status $body_bytes_sent&quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#393A34;">                    </span><span style="color:#B56959;">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u591A\u53C2\u8003\uFF1A<a href="http://nginx.org/en/docs/http/ngx_http_log_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_log_module.html</a></p><h2 id="\u72B6\u6001\u76D1\u63A7" tabindex="-1">\u72B6\u6001\u76D1\u63A7 <a class="header-anchor" href="#\u72B6\u6001\u76D1\u63A7" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/mystatus </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">stub_status</span><span style="color:#DBD7CA;"> on</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> access_log </span><span style="color:#DBD7CA;">off</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/mystatus </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">stub_status</span><span style="color:#393A34;"> on</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> access_log </span><span style="color:#393A34;">off</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u76EE\u5F55\u6D4F\u89C8" tabindex="-1">\u76EE\u5F55\u6D4F\u89C8 <a class="header-anchor" href="#\u76EE\u5F55\u6D4F\u89C8" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> autoindex </span><span style="color:#DBD7CA;">on</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> autoindex_localtime </span><span style="color:#DBD7CA;">on</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> autoindex_exact_size </span><span style="color:#DBD7CA;">off</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> autoindex </span><span style="color:#393A34;">on</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> autoindex_localtime </span><span style="color:#393A34;">on</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> autoindex_exact_size </span><span style="color:#393A34;">off</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8C03\u6574\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F" tabindex="-1">\u8C03\u6574\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F <a class="header-anchor" href="#\u8C03\u6574\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># nginx\u957F\u4F20\u6587\u4EF6\u5927\u5C0F\u9650\u5236\u914D\u7F6E\u793A\u4F8B</span></span>
<span class="line"><span style="color:#758575;"># \u4E5F\u53EF\u4EE5\u653E\u5165http\u5C42\uFF0C\u5168\u5C40\u751F\u6548</span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">_</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> client_max_body_size </span><span style="color:#DBD7CA;">200m</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># nginx\u957F\u4F20\u6587\u4EF6\u5927\u5C0F\u9650\u5236\u914D\u7F6E\u793A\u4F8B</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E5F\u53EF\u4EE5\u653E\u5165http\u5C42\uFF0C\u5168\u5C40\u751F\u6548</span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">_</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> client_max_body_size </span><span style="color:#393A34;">200m</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8BBE\u7F6E\u9519\u8BEF\u9875\u9762" tabindex="-1">\u8BBE\u7F6E\u9519\u8BEF\u9875\u9762 <a class="header-anchor" href="#\u8BBE\u7F6E\u9519\u8BEF\u9875\u9762" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u8BBE\u7F6E error_page</span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">      </span><span style="color:#6394BF;">80</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;"> _</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">/code</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;"># 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#error_page  404  http://www.baidu.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> index </span><span style="color:#DBD7CA;">index.html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> error_page </span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">404</span><span style="color:#DBD7CA;">  http://www.baidu.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }    </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;"># 2</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> error_page </span><span style="color:#DBD7CA;">403 </span><span style="color:#6394BF;">404</span><span style="color:#DBD7CA;"> /404.html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">/404.html </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">/code</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> index </span><span style="color:#DBD7CA;">index.html</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">   </span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E error_page</span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">      </span><span style="color:#296AA3;">80</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;"> _</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">/code</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;"># 1</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#error_page  404  http://www.baidu.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> index </span><span style="color:#393A34;">index.html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> error_page </span><span style="color:#393A34;"> </span><span style="color:#296AA3;">404</span><span style="color:#393A34;">  http://www.baidu.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }    </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;"># 2</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> error_page </span><span style="color:#393A34;">403 </span><span style="color:#296AA3;">404</span><span style="color:#393A34;"> /404.html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">/404.html </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">/code</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> index </span><span style="color:#393A34;">index.html</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">   </span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8BBF\u95EE\u9650\u5236" tabindex="-1">\u8BBF\u95EE\u9650\u5236 <a class="header-anchor" href="#\u8BBF\u95EE\u9650\u5236" aria-hidden="true">#</a></h2><h3 id="\u8FDE\u63A5\u6570\u9650\u5236" tabindex="-1">\u8FDE\u63A5\u6570\u9650\u5236 <a class="header-anchor" href="#\u8FDE\u63A5\u6570\u9650\u5236" aria-hidden="true">#</a></h3><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">http</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#758575;"># http\u6BB5\u914D\u7F6E\u8FDE\u63A5\u9650\u5236, \u540C\u4E00\u65F6\u523B\u53EA\u5141\u8BB8\u4E00\u4E2A\u5BA2\u6237\u7AEFIP\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#4D9375;">limit_conn_zone </span><span style="color:#858585;">$</span><span style="color:#B8A965;">binary_remote_addr</span><span style="color:#DBD7CA;"> zone=conn_zone:10m</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    ...</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">    ...  </span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># \u540C\u4E00\u65F6\u523B\u53EA\u5141\u8BB8\u4E00\u4E2A\u5BA2\u6237\u7AEFIP\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#DBD7CA;">           </span><span style="color:#4D9375;"> limit_conn </span><span style="color:#DBD7CA;">conn_zone </span><span style="color:#6394BF;">1</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">http</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#A0ADA0;"># http\u6BB5\u914D\u7F6E\u8FDE\u63A5\u9650\u5236, \u540C\u4E00\u65F6\u523B\u53EA\u5141\u8BB8\u4E00\u4E2A\u5BA2\u6237\u7AEFIP\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#1C6B48;">limit_conn_zone </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">binary_remote_addr</span><span style="color:#393A34;"> zone=conn_zone:10m</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    ...</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">    ...  </span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># \u540C\u4E00\u65F6\u523B\u53EA\u5141\u8BB8\u4E00\u4E2A\u5BA2\u6237\u7AEFIP\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#393A34;">           </span><span style="color:#1C6B48;"> limit_conn </span><span style="color:#393A34;">conn_zone </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8BF7\u6C42\u6570\u9650\u5236" tabindex="-1">\u8BF7\u6C42\u6570\u9650\u5236 <a class="header-anchor" href="#\u8BF7\u6C42\u6570\u9650\u5236" aria-hidden="true">#</a></h3><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">http</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#758575;"># \u5F00\u8F9F\u4E00\u4E2A10m\u7684\u8BF7\u6C42\u63A7\u4EF6\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3Areq_zone\uFF0Chttp\u6BB5\u914D\u7F6E\u8BF7\u6C42\u9650\u5236, rate\u9650\u5236\u901F\u7387\uFF0C\u9650\u5236\u4E00\u79D2\u949F\u6700\u591A\u4E00\u4E2AIP\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#4D9375;">limit_req_zone </span><span style="color:#858585;">$</span><span style="color:#B8A965;">binary_remote_addr</span><span style="color:#DBD7CA;"> zone=req_zone:10m rate=1r/s</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    ...</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">    ...  </span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># \u53EA\u63A5\u6536\u4E00\u4E2A\u8BF7\u6C42,\u5176\u4F59\u8BF7\u6C42\u62D2\u7EDD\u5904\u7406\u5E76\u8FD4\u56DE\u9519\u8BEF\u7801\u7ED9\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#DBD7CA;">           </span><span style="color:#4D9375;"> limit_req </span><span style="color:#DBD7CA;">zone=req_zone</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># \u8BF7\u6C42\u8D85\u8FC71r/s,\u5269\u4E0B\u7684\u5C06\u88AB\u5EF6\u8FDF\u5904\u7406,\u8BF7\u6C42\u6570\u8D85\u8FC7burst\u5B9A\u4E49\u7684\u6570\u91CF, \u591A\u4F59\u7684\u8BF7\u6C42\u8FD4\u56DE503</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#758575;">#limit_req zone=req_zone burst=3 nodelay;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">http</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F00\u8F9F\u4E00\u4E2A10m\u7684\u8BF7\u6C42\u63A7\u4EF6\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3Areq_zone\uFF0Chttp\u6BB5\u914D\u7F6E\u8BF7\u6C42\u9650\u5236, rate\u9650\u5236\u901F\u7387\uFF0C\u9650\u5236\u4E00\u79D2\u949F\u6700\u591A\u4E00\u4E2AIP\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#1C6B48;">limit_req_zone </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">binary_remote_addr</span><span style="color:#393A34;"> zone=req_zone:10m rate=1r/s</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    ...</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">    ...  </span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># \u53EA\u63A5\u6536\u4E00\u4E2A\u8BF7\u6C42,\u5176\u4F59\u8BF7\u6C42\u62D2\u7EDD\u5904\u7406\u5E76\u8FD4\u56DE\u9519\u8BEF\u7801\u7ED9\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#393A34;">           </span><span style="color:#1C6B48;"> limit_req </span><span style="color:#393A34;">zone=req_zone</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># \u8BF7\u6C42\u8D85\u8FC71r/s,\u5269\u4E0B\u7684\u5C06\u88AB\u5EF6\u8FDF\u5904\u7406,\u8BF7\u6C42\u6570\u8D85\u8FC7burst\u5B9A\u4E49\u7684\u6570\u91CF, \u591A\u4F59\u7684\u8BF7\u6C42\u8FD4\u56DE503</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A0ADA0;">#limit_req zone=req_zone burst=3 nodelay;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u2753 <strong>\u8FDE\u63A5\u9650\u5236\u6CA1\u6709\u8BF7\u6C42\u9650\u5236\u6709\u6548?</strong> \u591A\u4E2A\u8BF7\u6C42\u53EF\u4EE5\u5EFA\u7ACB\u5728\u4E00\u6B21\u7684TCP\u8FDE\u63A5\u4E4B\u4E0A, \u90A3\u4E48\u6211\u4EEC\u5BF9\u8BF7\u6C42\u7684\u7CBE\u5EA6\u9650\u5236\uFF0C\u5F53\u7136\u6BD4\u5BF9\u4E00\u4E2A\u8FDE\u63A5\u7684\u9650\u5236\u4F1A\u66F4\u52A0\u7684\u6709\u6548\u3002\u56E0\u4E3A\u540C\u4E00\u65F6\u523B\u53EA\u5141\u8BB8\u4E00\u4E2A\u8FDE\u63A5\u8BF7\u6C42\u8FDB\u5165\u3002\u4F46\u662F\u540C\u4E00\u65F6\u523B\u591A\u4E2A\u8BF7\u6C42\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A\u8FDE\u63A5\u8FDB\u5165\u3002<em>\u6240\u4EE5\u8BF7\u6C42\u9650\u5236\u624D\u662F\u6BD4\u8F83\u4F18\u7684\u89E3\u51B3\u65B9\u6848\u3002</em></p></blockquote><h2 id="\u8BBF\u95EE\u63A7\u5236" tabindex="-1">\u8BBF\u95EE\u63A7\u5236 <a class="header-anchor" href="#\u8BBF\u95EE\u63A7\u5236" aria-hidden="true">#</a></h2><h3 id="\u7981\u6B62\u7528\u6237\u8BBF\u95EE\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55" tabindex="-1">\u7981\u6B62\u7528\u6237\u8BBF\u95EE\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55 <a class="header-anchor" href="#\u7981\u6B62\u7528\u6237\u8BBF\u95EE\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55" aria-hidden="true">#</a></h3><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u7981\u6B62htaccess</span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">~/\\.ht </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> deny </span><span style="color:#DBD7CA;">all</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">	</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># \u7981\u6B62\u591A\u4E2A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">^/(cron|templates)/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> deny </span><span style="color:#DBD7CA;">all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">break</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># \u7981\u6B62\u4EE5/data\u5F00\u5934\u7684\u6587\u4EF6, \u53EF\u4EE5\u7981\u6B62/data/\u4E0B\u591A\u7EA7\u76EE\u5F55\u4E0B.log.txt\u7B49\u8BF7\u6C42;</span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">^/data </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> deny </span><span style="color:#DBD7CA;">all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># \u7981\u6B62\u5355\u4E2A\u76EE\u5F55, \u4E0D\u80FD\u7981\u6B62.log.txt\u80FD\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/searchword/cron/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> deny </span><span style="color:#DBD7CA;">all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u7981\u6B62htaccess</span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">~/\\.ht </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> deny </span><span style="color:#393A34;">all</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">	</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7981\u6B62\u591A\u4E2A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">^/(cron|templates)/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> deny </span><span style="color:#393A34;">all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">break</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7981\u6B62\u4EE5/data\u5F00\u5934\u7684\u6587\u4EF6, \u53EF\u4EE5\u7981\u6B62/data/\u4E0B\u591A\u7EA7\u76EE\u5F55\u4E0B.log.txt\u7B49\u8BF7\u6C42;</span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">^/data </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> deny </span><span style="color:#393A34;">all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7981\u6B62\u5355\u4E2A\u76EE\u5F55, \u4E0D\u80FD\u7981\u6B62.log.txt\u80FD\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/searchword/cron/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> deny </span><span style="color:#393A34;">all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u57FA\u4E8Eip\u7684\u8BBF\u95EE\u63A7\u5236" tabindex="-1">\u57FA\u4E8EIP\u7684\u8BBF\u95EE\u63A7\u5236 <a class="header-anchor" href="#\u57FA\u4E8Eip\u7684\u8BBF\u95EE\u63A7\u5236" aria-hidden="true">#</a></h3><p>\u4EE5\u4E0B\u65B9\u6CD5\u5B58\u5728\u5C40\u9650\u6027\uFF0C\u6BD4\u5982\u5BA2\u6237\u7AEF\u4F7F\u7528\u6B63\u5411\u4EE3\u7406\u8BBF\u95EE\u65F6</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u914D\u7F6E\u62D2\u7EDD\u67D0\u4E00\u4E2AIP, \u5176\u4ED6\u5168\u90E8\u5141\u8BB8</span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">^/1.html </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">/usr/share/nginx/html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> index </span><span style="color:#DBD7CA;">index.html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> deny </span><span style="color:#DBD7CA;">192.168.56.1</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> allow </span><span style="color:#DBD7CA;">all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># \u53EA\u5141\u8BB8\u67D0\u4E00\u4E2A\u7F51\u6BB5\u8BBF\u95EE,\u5176\u5B83\u5168\u90E8\u62D2\u7EDD</span></span>
<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">  html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> index </span><span style="color:#DBD7CA;"> index.php index.html index.html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> allow </span><span style="color:#DBD7CA;">  192.168.56.0/24</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> deny </span><span style="color:#DBD7CA;">  </span><span style="color:#D4976C;"> all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u914D\u7F6E\u62D2\u7EDD\u67D0\u4E00\u4E2AIP, \u5176\u4ED6\u5168\u90E8\u5141\u8BB8</span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">^/1.html </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">/usr/share/nginx/html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> index </span><span style="color:#393A34;">index.html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> deny </span><span style="color:#393A34;">192.168.56.1</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> allow </span><span style="color:#393A34;">all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EA\u5141\u8BB8\u67D0\u4E00\u4E2A\u7F51\u6BB5\u8BBF\u95EE,\u5176\u5B83\u5168\u90E8\u62D2\u7EDD</span></span>
<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">  html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> index </span><span style="color:#393A34;"> index.php index.html index.html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> allow </span><span style="color:#393A34;">  192.168.56.0/24</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> deny </span><span style="color:#393A34;">  </span><span style="color:#A65E2B;"> all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u4E3A\u7CBE\u7EC6\u7684\u505A\u6CD5\uFF0C\u4F7F\u7528<code>realip</code>\u548C<code>geo</code>\u6A21\u5757\u518D\u52A0\u4E0A<code>X-Forwarded-For</code>\u53C2\u6570\u4E00\u5757\u4F7F\u7528\uFF1A</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u793A\u4F8B\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#4D9375;">geo </span><span style="color:#858585;">$</span><span style="color:#B8A965;">allow</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#D4976C;"> default</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    192.168.168.0/</span><span style="color:#4D9375;">24</span><span style="color:#DBD7CA;"> 1</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> real_ip_header </span><span style="color:#DBD7CA;">X-Forwarded-For</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> set_real_ip_from </span><span style="color:#DBD7CA;">10.1.2.3</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> (</span><span style="color:#858585;">$</span><span style="color:#B8A965;">allow</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">= </span><span style="color:#DBD7CA;">0) {</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">403</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u793A\u4F8B\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#1C6B48;">geo </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">allow</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#A65E2B;"> default</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    192.168.168.0/</span><span style="color:#1C6B48;">24</span><span style="color:#393A34;"> 1</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> real_ip_header </span><span style="color:#393A34;">X-Forwarded-For</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> set_real_ip_from </span><span style="color:#393A34;">10.1.2.3</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> (</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">allow</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">= </span><span style="color:#393A34;">0) {</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">403</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6A21\u5757\u53C2\u8003\u94FE\u63A5\uFF1A</p><ul><li><a href="http://nginx.org/en/docs/http/ngx_http_realip_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_realip_module.html</a></li><li><a href="http://nginx.org/en/docs/http/ngx_http_geo_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_geo_module.html</a></li></ul><h3 id="\u57FA\u4E8E\u7528\u6237\u767B\u5F55\u7684\u57FA\u672C\u8BA4\u8BC1" tabindex="-1">\u57FA\u4E8E\u7528\u6237\u767B\u5F55\u7684\u57FA\u672C\u8BA4\u8BC1 <a class="header-anchor" href="#\u57FA\u4E8E\u7528\u6237\u767B\u5F55\u7684\u57FA\u672C\u8BA4\u8BC1" aria-hidden="true">#</a></h3><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># 1. \u9996\u5148\u5B89\u88C5\u597Dapache2-utils \u6216\u8005 httpd-tools</span></span>
<span class="line"><span style="color:#758575;"># 2. \u521B\u5EFA\u5BC6\u7801\u6587\u4EF6\u548C\u7528\u6237\uFF0C\u4EC5\u9996\u6B21\u521B\u5EFA\u9700\u8981\u4F7F\u7528\`-c\`\u9009\u9879</span></span>
<span class="line"><span style="color:#4D9375;">sudo</span><span style="color:#DBD7CA;"> htpasswd -c /etc/apache2/.htpasswd user1</span></span>
<span class="line"><span style="color:#4D9375;">sudo</span><span style="color:#DBD7CA;"> htpasswd /etc/apache2/.htpasswd user2</span></span>
<span class="line"><span style="color:#758575;"># 3. \u914D\u7F6Enginx\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">    ...</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;"># \u4F55\u4E3Asatisfy</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;"># https://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> satisfy </span><span style="color:#DBD7CA;">all</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> auth_basic </span><span style="color:#DBD7CA;">          </span><span style="color:#C98A7D;">&quot;Administrator\u2019s Area&quot;</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> auth_basic_user_file </span><span style="color:#DBD7CA;">conf/htpasswd</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/public/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> auth_basic </span><span style="color:#DBD7CA;">off</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 1. \u9996\u5148\u5B89\u88C5\u597Dapache2-utils \u6216\u8005 httpd-tools</span></span>
<span class="line"><span style="color:#A0ADA0;"># 2. \u521B\u5EFA\u5BC6\u7801\u6587\u4EF6\u548C\u7528\u6237\uFF0C\u4EC5\u9996\u6B21\u521B\u5EFA\u9700\u8981\u4F7F\u7528\`-c\`\u9009\u9879</span></span>
<span class="line"><span style="color:#1C6B48;">sudo</span><span style="color:#393A34;"> htpasswd -c /etc/apache2/.htpasswd user1</span></span>
<span class="line"><span style="color:#1C6B48;">sudo</span><span style="color:#393A34;"> htpasswd /etc/apache2/.htpasswd user2</span></span>
<span class="line"><span style="color:#A0ADA0;"># 3. \u914D\u7F6Enginx\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">    ...</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;"># \u4F55\u4E3Asatisfy</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;"># https://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> satisfy </span><span style="color:#393A34;">all</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> auth_basic </span><span style="color:#393A34;">          </span><span style="color:#B56959;">&quot;Administrator\u2019s Area&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> auth_basic_user_file </span><span style="color:#393A34;">conf/htpasswd</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/public/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> auth_basic </span><span style="color:#393A34;">off</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>\u7528\u6237\u8BA4\u8BC1\u5C40\u9650\u6027</strong></p><ol><li>\u7528\u6237\u4FE1\u606F\u4F9D\u8D56\u6587\u4EF6\u65B9\u5F0F</li><li>\u7528\u6237\u7BA1\u7406\u6587\u4EF6\u8FC7\u591A, \u65E0\u6CD5\u8054\u52A8</li><li>\u64CD\u4F5C\u7BA1\u7406\u673A\u68B0\uFF0C\u6548\u7387\u4F4E\u4E0B</li></ol><p><strong>\u89E3\u51B3\u529E\u6CD5</strong></p><ol><li>Nginx\u7ED3\u5408LUA\u5B9E\u73B0\u9AD8\u6548\u9A8C\u8BC1</li><li>Nginx\u7ED3\u5408LDAP\u5229\u7528nginx-auth-ldap\u6A21\u5757</li></ol></blockquote><h2 id="root-\u4E0E-alias" tabindex="-1">Root \u4E0E alias <a class="header-anchor" href="#root-\u4E0E-alias" aria-hidden="true">#</a></h2><p><strong>root\u4E0Ealias\u8DEF\u5F84\u5339\u914D\u4E3B\u8981\u533A\u522B\u5728\u4E8Enginx\u5982\u4F55\u89E3\u91CAlocation\u540E\u9762\u7684uri\uFF0C\u8FD9\u4F1A\u4F7F\u4E24\u8005\u5206\u522B\u4EE5\u4E0D\u540C\u7684\u65B9\u5F0F\u5C06\u8BF7\u6C42\u6620\u5C04\u5230\u670D\u52A1\u5668\u6587\u4EF6\u4E0A\uFF0Calias\u662F\u4E00\u4E2A\u76EE\u5F55\u522B\u540D\u7684\u5B9A\u4E49\uFF0Croot\u5219\u662F\u6700\u4E0A\u5C42\u76EE\u5F55\u7684\u5B9A\u4E49\u3002</strong></p><p>\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B\uFF1A</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">image.example.com</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">/code</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~*</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">^.*\\.(png|jpg|gif)$ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> alias </span><span style="color:#DBD7CA;">/code/images/</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">image.example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">/code</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~*</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">^.*\\.(png|jpg|gif)$ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> alias </span><span style="color:#393A34;">/code/images/</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="try-file-\u8DEF\u5F84\u5339\u914D" tabindex="-1">try_file \u8DEF\u5F84\u5339\u914D <a class="header-anchor" href="#try-file-\u8DEF\u5F84\u5339\u914D" aria-hidden="true">#</a></h2><p><strong>nginx\u7684try_file\u8DEF\u5F84\u5339\u914D\uFF0CNginx\u4F1A\u6309\u987A\u5E8F\u68C0\u67E5\u6587\u4EF6\u53CA\u76EE\u5F55\u662F\u5426\u5B58\u5728\uFF08\u6839\u636E root \u548C alias \u6307\u4EE4\u8BBE\u7F6E\u7684\u53C2\u6570\u6784\u9020\u5B8C\u6574\u7684\u6587\u4EF6\u8DEF\u5F84\uFF09\uFF0C\u5E76\u7528\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u6587\u4EF6\u63D0\u4F9B\u670D\u52A1\u3002\u5728\u5143\u7D20\u540D\u540E\u9762\u6DFB\u52A0\u659C\u6760 / \u8868\u793A\u8FD9\u4E2A\u662F\u76EE\u5F55\u3002\u5982\u679C\u6587\u4EF6\u548C\u76EE\u5F55\u90FD\u4E0D\u5B58\u5728\uFF0CNginx\u4F1A\u6267\u884C\u5185\u90E8\u91CD\u5B9A\u5411\uFF0C\u8DF3\u8F6C\u5230\u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A uri \u53C2\u6570\u5B9A\u4E49\u7684 URI \u4E2D\u3002</strong></p><p>\u914D\u7F6E\u793A\u4F8B\u6587\u4EF6\uFF1A</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> try_files </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;">/ /404.png</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">* \u4E3E\u4F8B\uFF1A\u5982\u679C\u8BBF\u95EE\u6839\u76EE\u5F55\u4E0B\u7684logo.png\u6587\u4EF6\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u524D\u5F80logo.png\u6587\u4EF6\u5939\u4E0B\u53BB\u67E5\u627E\uFF0C\u5982\u679C\u8FD8\u672A\u67E5\u5230\uFF0C\u5219\u8FD4\u56DE404.png\u6587\u4EF6\u5185\u5BB9\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06\u6700\u540E\u7684\u5904\u7406\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> try_files </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;">/ @java</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">             </span><span style="color:#758575;"># \u5F53$uri\u548C$uri/\u90FD\u5339\u914D\u4E0D\u5230\u65F6\uFF0C\u7531\u540E\u7AEF\u7684java\u6765\u8FDB\u884C\u5904\u7406\uFF0C\u540D\u5B57\u53EF\u81EA\u5B9A\u4E49\uFF0C\u4F46\u4E00\u5B9A\u8981\u52A0@</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">@java </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://172.16.1.8:8080</span><span style="color:#858585;">;</span><span style="color:#DBD7CA;">          </span><span style="color:#758575;"># \u914D\u7F6E\u540E\u7AEFtomcat</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> try_files </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;">/ /404.png</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">* \u4E3E\u4F8B\uFF1A\u5982\u679C\u8BBF\u95EE\u6839\u76EE\u5F55\u4E0B\u7684logo.png\u6587\u4EF6\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u524D\u5F80logo.png\u6587\u4EF6\u5939\u4E0B\u53BB\u67E5\u627E\uFF0C\u5982\u679C\u8FD8\u672A\u67E5\u5230\uFF0C\u5219\u8FD4\u56DE404.png\u6587\u4EF6\u5185\u5BB9\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u6700\u540E\u7684\u5904\u7406\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> try_files </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;">/ @java</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">             </span><span style="color:#A0ADA0;"># \u5F53$uri\u548C$uri/\u90FD\u5339\u914D\u4E0D\u5230\u65F6\uFF0C\u7531\u540E\u7AEF\u7684java\u6765\u8FDB\u884C\u5904\u7406\uFF0C\u540D\u5B57\u53EF\u81EA\u5B9A\u4E49\uFF0C\u4F46\u4E00\u5B9A\u8981\u52A0@</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">@java </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://172.16.1.8:8080</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;">          </span><span style="color:#A0ADA0;"># \u914D\u7F6E\u540E\u7AEFtomcat</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"></span></code></pre></div>`,48),e=[o];function c(t,r,y,i,A,D){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{C as __pageData,d as default};
