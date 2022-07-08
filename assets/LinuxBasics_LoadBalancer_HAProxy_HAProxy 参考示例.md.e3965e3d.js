import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const d=JSON.parse('{"title":"HAProxy \u53C2\u8003\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/LoadBalancer/HAProxy/HAProxy \u53C2\u8003\u793A\u4F8B.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/LoadBalancer/HAProxy/HAProxy \u53C2\u8003\u793A\u4F8B.md"},e=l(`<h1 id="haproxy-\u53C2\u8003\u793A\u4F8B" tabindex="-1">HAProxy \u53C2\u8003\u793A\u4F8B <a class="header-anchor" href="#haproxy-\u53C2\u8003\u793A\u4F8B" aria-hidden="true">#</a></h1><p>\u793A\u4F8B\u4E00(\u4E03\u5C42):</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">global</span></span>
<span class="line"><span style="color:#DBD7CA;">    log         127.0.0.1 local2</span></span>
<span class="line"><span style="color:#DBD7CA;">    chroot /usr/local/haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">    pidfile     /var/run/haproxy.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">    maxconn     4000</span></span>
<span class="line"><span style="color:#DBD7CA;">    user        haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">    group       haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">    daemon</span></span>
<span class="line"><span style="color:#DBD7CA;">    spread-checks 2</span></span>
<span class="line"><span style="color:#DBD7CA;">defaults</span></span>
<span class="line"><span style="color:#DBD7CA;">    mode                    http</span></span>
<span class="line"><span style="color:#DBD7CA;">    log                     global</span></span>
<span class="line"><span style="color:#DBD7CA;">    option                  httplog</span></span>
<span class="line"><span style="color:#DBD7CA;">    option                  dontlognull		</span><span style="color:#758575;">#  \u4E0D\u8981\u5728\u65E5\u5FD7\u4E2D\u8BB0\u5F55\u7A7A\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#DBD7CA;">    option http-server-close</span></span>
<span class="line"><span style="color:#DBD7CA;">    option forwardfor       except 127.0.0.0/8</span></span>
<span class="line"><span style="color:#DBD7CA;">    option                  redispatch</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout http-request    2s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout queue           3s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout connect         1s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout client          10s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout server          2s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout http-keep-alive 10s</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout check           2s</span></span>
<span class="line"><span style="color:#DBD7CA;">    maxconn                 18000 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">frontend http-in</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;">             </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:8080</span></span>
<span class="line"><span style="color:#DBD7CA;">    mode             http</span></span>
<span class="line"><span style="color:#DBD7CA;">    log              global</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  \u4EE5\u4E0B\u662F\u65E5\u5FD7\u8BB0\u5F55\u5185\u5BB9\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">    capture request  header Host len 20</span></span>
<span class="line"><span style="color:#DBD7CA;">    capture request  header Referer len 60</span></span>
<span class="line"><span style="color:#DBD7CA;">    capture request  header Content-Length len 10</span></span>
<span class="line"><span style="color:#DBD7CA;">    capture response  header Server len 40</span></span>
<span class="line"><span style="color:#DBD7CA;">    capture response  header Content-Length len 10</span></span>
<span class="line"><span style="color:#DBD7CA;">    capture response  header Cache-Control len 8</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">    acl url_static   path_beg  -i /static /images /stylesheets</span></span>
<span class="line"><span style="color:#DBD7CA;">    acl url_static   path_end  -i .jpg .jpeg .gif .png .ico .bmp .css .js</span></span>
<span class="line"><span style="color:#DBD7CA;">    acl url_static   path_end  -i .html .htm .shtml .shtm .pdf .mp3 .mp4 .rm .rmvb .txt</span></span>
<span class="line"><span style="color:#DBD7CA;">    acl url_static   path_end  -i .zip .rar .gz .tgz .bz2 .tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    use_backend      static_group   </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> url_static</span></span>
<span class="line"><span style="color:#DBD7CA;">    default_backend  dynamic_group</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">    errorfile 400 /usr/local/haproxy/examples/errorfiles/400.http</span></span>
<span class="line"><span style="color:#DBD7CA;">    errorfile 403 /usr/local/haproxy/examples/errorfiles/403.http</span></span>
<span class="line"><span style="color:#DBD7CA;">    errorfile 408 /usr/local/haproxy/examples/errorfiles/408.http</span></span>
<span class="line"><span style="color:#DBD7CA;">    errorfile 500 /usr/local/haproxy/examples/errorfiles/500.http</span></span>
<span class="line"><span style="color:#DBD7CA;">    errorfile 502 /usr/local/haproxy/examples/errorfiles/502.http</span></span>
<span class="line"><span style="color:#DBD7CA;">    errorfile 503 /usr/local/haproxy/examples/errorfiles/503.http</span></span>
<span class="line"><span style="color:#DBD7CA;">    errorfile 504 /usr/local/haproxy/examples/errorfiles/504.http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">backend static_group</span></span>
<span class="line"><span style="color:#DBD7CA;">    balance            roundrobin</span></span>
<span class="line"><span style="color:#DBD7CA;">    option             http-keep-alive</span></span>
<span class="line"><span style="color:#DBD7CA;">    http-reuse         safe</span></span>
<span class="line"><span style="color:#DBD7CA;">    option httpchk     GET /health.html</span></span>
<span class="line"><span style="color:#DBD7CA;">    http-check expect  status 200</span></span>
<span class="line"><span style="color:#DBD7CA;">    server staticsrv1  192.168.159.129:80 check rise 1 maxconn 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">    server staticsrv2  192.168.159.130:80 check rise 1 maxconn 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">    option forwardfor header X-Forwarded-For</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">backend dynamic_group</span></span>
<span class="line"><span style="color:#DBD7CA;">    cookie appsrv insert nocache</span></span>
<span class="line"><span style="color:#DBD7CA;">    balance roundrobin</span></span>
<span class="line"><span style="color:#DBD7CA;">    option http-server-close</span></span>
<span class="line"><span style="color:#DBD7CA;">    option httpchk     GET  /health.html</span></span>
<span class="line"><span style="color:#DBD7CA;">    http-check expect  status 200</span></span>
<span class="line"><span style="color:#DBD7CA;">    server appsrv1 192.168.159.129:81   check rise 1 maxconn 3000 cookie appsrv1</span></span>
<span class="line"><span style="color:#DBD7CA;">    server appsrv2 192.168.159.130:81  check rise 1 maxconn 3000 cookie appsrv2</span></span>
<span class="line"><span style="color:#DBD7CA;">    option forwardfor header X-Forwarded-For</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">listen report_stats</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:8081</span></span>
<span class="line"><span style="color:#DBD7CA;">        stats </span><span style="color:#E0A569;">enable</span></span>
<span class="line"><span style="color:#DBD7CA;">        stats hide-version</span></span>
<span class="line"><span style="color:#DBD7CA;">        stats uri    /hastats</span></span>
<span class="line"><span style="color:#DBD7CA;">        stats realm  </span><span style="color:#C98A7D;">&quot;pls enter your name&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        stats auth   admin:admin</span></span>
<span class="line"><span style="color:#DBD7CA;">        stats admin  </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> TRUE</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">global</span></span>
<span class="line"><span style="color:#393A34;">    log         127.0.0.1 local2</span></span>
<span class="line"><span style="color:#393A34;">    chroot /usr/local/haproxy</span></span>
<span class="line"><span style="color:#393A34;">    pidfile     /var/run/haproxy.pid</span></span>
<span class="line"><span style="color:#393A34;">    maxconn     4000</span></span>
<span class="line"><span style="color:#393A34;">    user        haproxy</span></span>
<span class="line"><span style="color:#393A34;">    group       haproxy</span></span>
<span class="line"><span style="color:#393A34;">    daemon</span></span>
<span class="line"><span style="color:#393A34;">    spread-checks 2</span></span>
<span class="line"><span style="color:#393A34;">defaults</span></span>
<span class="line"><span style="color:#393A34;">    mode                    http</span></span>
<span class="line"><span style="color:#393A34;">    log                     global</span></span>
<span class="line"><span style="color:#393A34;">    option                  httplog</span></span>
<span class="line"><span style="color:#393A34;">    option                  dontlognull		</span><span style="color:#A0ADA0;">#  \u4E0D\u8981\u5728\u65E5\u5FD7\u4E2D\u8BB0\u5F55\u7A7A\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#393A34;">    option http-server-close</span></span>
<span class="line"><span style="color:#393A34;">    option forwardfor       except 127.0.0.0/8</span></span>
<span class="line"><span style="color:#393A34;">    option                  redispatch</span></span>
<span class="line"><span style="color:#393A34;">    timeout http-request    2s</span></span>
<span class="line"><span style="color:#393A34;">    timeout queue           3s</span></span>
<span class="line"><span style="color:#393A34;">    timeout connect         1s</span></span>
<span class="line"><span style="color:#393A34;">    timeout client          10s</span></span>
<span class="line"><span style="color:#393A34;">    timeout server          2s</span></span>
<span class="line"><span style="color:#393A34;">    timeout http-keep-alive 10s</span></span>
<span class="line"><span style="color:#393A34;">    timeout check           2s</span></span>
<span class="line"><span style="color:#393A34;">    maxconn                 18000 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">frontend http-in</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">bind</span><span style="color:#393A34;">             </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:8080</span></span>
<span class="line"><span style="color:#393A34;">    mode             http</span></span>
<span class="line"><span style="color:#393A34;">    log              global</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  \u4EE5\u4E0B\u662F\u65E5\u5FD7\u8BB0\u5F55\u5185\u5BB9\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">    capture request  header Host len 20</span></span>
<span class="line"><span style="color:#393A34;">    capture request  header Referer len 60</span></span>
<span class="line"><span style="color:#393A34;">    capture request  header Content-Length len 10</span></span>
<span class="line"><span style="color:#393A34;">    capture response  header Server len 40</span></span>
<span class="line"><span style="color:#393A34;">    capture response  header Content-Length len 10</span></span>
<span class="line"><span style="color:#393A34;">    capture response  header Cache-Control len 8</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">    acl url_static   path_beg  -i /static /images /stylesheets</span></span>
<span class="line"><span style="color:#393A34;">    acl url_static   path_end  -i .jpg .jpeg .gif .png .ico .bmp .css .js</span></span>
<span class="line"><span style="color:#393A34;">    acl url_static   path_end  -i .html .htm .shtml .shtm .pdf .mp3 .mp4 .rm .rmvb .txt</span></span>
<span class="line"><span style="color:#393A34;">    acl url_static   path_end  -i .zip .rar .gz .tgz .bz2 .tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    use_backend      static_group   </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> url_static</span></span>
<span class="line"><span style="color:#393A34;">    default_backend  dynamic_group</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">    errorfile 400 /usr/local/haproxy/examples/errorfiles/400.http</span></span>
<span class="line"><span style="color:#393A34;">    errorfile 403 /usr/local/haproxy/examples/errorfiles/403.http</span></span>
<span class="line"><span style="color:#393A34;">    errorfile 408 /usr/local/haproxy/examples/errorfiles/408.http</span></span>
<span class="line"><span style="color:#393A34;">    errorfile 500 /usr/local/haproxy/examples/errorfiles/500.http</span></span>
<span class="line"><span style="color:#393A34;">    errorfile 502 /usr/local/haproxy/examples/errorfiles/502.http</span></span>
<span class="line"><span style="color:#393A34;">    errorfile 503 /usr/local/haproxy/examples/errorfiles/503.http</span></span>
<span class="line"><span style="color:#393A34;">    errorfile 504 /usr/local/haproxy/examples/errorfiles/504.http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">backend static_group</span></span>
<span class="line"><span style="color:#393A34;">    balance            roundrobin</span></span>
<span class="line"><span style="color:#393A34;">    option             http-keep-alive</span></span>
<span class="line"><span style="color:#393A34;">    http-reuse         safe</span></span>
<span class="line"><span style="color:#393A34;">    option httpchk     GET /health.html</span></span>
<span class="line"><span style="color:#393A34;">    http-check expect  status 200</span></span>
<span class="line"><span style="color:#393A34;">    server staticsrv1  192.168.159.129:80 check rise 1 maxconn 5000</span></span>
<span class="line"><span style="color:#393A34;">    server staticsrv2  192.168.159.130:80 check rise 1 maxconn 5000</span></span>
<span class="line"><span style="color:#393A34;">    option forwardfor header X-Forwarded-For</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">backend dynamic_group</span></span>
<span class="line"><span style="color:#393A34;">    cookie appsrv insert nocache</span></span>
<span class="line"><span style="color:#393A34;">    balance roundrobin</span></span>
<span class="line"><span style="color:#393A34;">    option http-server-close</span></span>
<span class="line"><span style="color:#393A34;">    option httpchk     GET  /health.html</span></span>
<span class="line"><span style="color:#393A34;">    http-check expect  status 200</span></span>
<span class="line"><span style="color:#393A34;">    server appsrv1 192.168.159.129:81   check rise 1 maxconn 3000 cookie appsrv1</span></span>
<span class="line"><span style="color:#393A34;">    server appsrv2 192.168.159.130:81  check rise 1 maxconn 3000 cookie appsrv2</span></span>
<span class="line"><span style="color:#393A34;">    option forwardfor header X-Forwarded-For</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">listen report_stats</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:8081</span></span>
<span class="line"><span style="color:#393A34;">        stats </span><span style="color:#B58451;">enable</span></span>
<span class="line"><span style="color:#393A34;">        stats hide-version</span></span>
<span class="line"><span style="color:#393A34;">        stats uri    /hastats</span></span>
<span class="line"><span style="color:#393A34;">        stats realm  </span><span style="color:#B56959;">&quot;pls enter your name&quot;</span></span>
<span class="line"><span style="color:#393A34;">        stats auth   admin:admin</span></span>
<span class="line"><span style="color:#393A34;">        stats admin  </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> TRUE</span></span>
<span class="line"></span></code></pre></div><ul><li>(1).\u9759\u6001\u8BF7\u6C42\u5C06\u5206\u914D\u7ED9static_group\u5E76\u8FDB\u884Croundrobin\u8C03\u5EA6\uFF0C\u540C\u65F6\u901A\u8FC7\u83B7\u53D6index.html\u6765\u505A\u5065\u5EB7\u72B6\u51B5\u68C0\u67E5\uFF0C\u6B64\u5916\u8FD8\u8BBE\u7F6E\u4E86haproxy\u548C\u540E\u7AEF\u8FDE\u63A5\u91CD\u7528\u7684\u529F\u80FD\u3002</li><li>(2).\u52A8\u6001\u8BF7\u6C42\u5C06\u5206\u914D\u7ED9dynamic_group\u5E76\u8FDB\u884Croundrobin\u8C03\u5EA6\uFF0C\u4F46\u662F\u5411\u54CD\u5E94\u62A5\u6587\u4E2D\u63D2\u5165\u4E86\u4E00\u4E2Acookie\uFF0C\u4FDD\u8BC1\u88AB\u8C03\u5EA6\u8FC7\u7684\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u80FD\u4FDD\u6301\u4F1A\u8BDD\u3002\u6B64\u5916\u8FD8\u8BBE\u7F6E\u4E86\u901A\u8FC7\u83B7\u53D6index.php\u6765\u505A\u5065\u5EB7\u72B6\u51B5\u68C0\u67E5\u3002</li></ul><p>\u793A\u4F8B\u4E8C(\u56DB\u5C42):</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">global</span></span>
<span class="line"><span style="color:#DBD7CA;">    daemon</span></span>
<span class="line"><span style="color:#DBD7CA;">    maxconn 30000   </span><span style="color:#758575;"># ulimit -n\u81F3\u5C11\u4E3A60018</span></span>
<span class="line"><span style="color:#DBD7CA;">    user        haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">    group       haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">    pidfile     /var/run/haproxy.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">    log 127.0.0.1 local0 info</span></span>
<span class="line"><span style="color:#DBD7CA;">    log 127.0.0.1 local1 warning</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">defaults</span></span>
<span class="line"><span style="color:#DBD7CA;">    mode tcp</span></span>
<span class="line"><span style="color:#DBD7CA;">    log global</span></span>
<span class="line"><span style="color:#DBD7CA;">    option tcplog            </span><span style="color:#758575;"># \u5F00\u542Ftcplog</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout connect 5000ms</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout client 10000ms</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout server 10000ms   </span><span style="color:#758575;"># TCP\u6A21\u5F0F\u4E0B\uFF0C\u5E94\u5C06timeout client\u548Ctimeout server\u8BBE\u7F6E\u4E3A\u4E00\u6837\u7684\u503C\uFF0C\u4EE5\u9632\u6B62\u51FA\u73B0\u95EE\u9898</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;"># option tcp-check ...   # \u5B9A\u4E49\u9ED8\u8BA4\u7684\u5065\u5EB7\u68C0\u67E5\u7B56\u7565</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">frontend tcp-in</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:9002</span></span>
<span class="line"><span style="color:#DBD7CA;">    maxconn 30000                    </span><span style="color:#758575;"># \u5B9A\u4E49\u6B64\u7AEF\u53E3\u4E0A\u7684maxconn</span></span>
<span class="line"><span style="color:#DBD7CA;">    default_backend default_servers  </span><span style="color:#758575;"># \u8BF7\u6C42\u5B9A\u5411\u81F3\u540E\u7AEF\u670D\u52A1\u7FA4default_servers</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">backend default_servers    </span><span style="color:#758575;"># \u5B9A\u4E49\u540E\u7AEF\u670D\u52A1\u7FA4default_servers</span></span>
<span class="line"><span style="color:#DBD7CA;">    balance roundrobin</span></span>
<span class="line"><span style="color:#DBD7CA;">    server sqlsrv1 192.168.159.129:3306 maxconn 300 check</span></span>
<span class="line"><span style="color:#DBD7CA;">    server sqlsrv2 192.168.159.130:3306 maxconn 300 check</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">global</span></span>
<span class="line"><span style="color:#393A34;">    daemon</span></span>
<span class="line"><span style="color:#393A34;">    maxconn 30000   </span><span style="color:#A0ADA0;"># ulimit -n\u81F3\u5C11\u4E3A60018</span></span>
<span class="line"><span style="color:#393A34;">    user        haproxy</span></span>
<span class="line"><span style="color:#393A34;">    group       haproxy</span></span>
<span class="line"><span style="color:#393A34;">    pidfile     /var/run/haproxy.pid</span></span>
<span class="line"><span style="color:#393A34;">    log 127.0.0.1 local0 info</span></span>
<span class="line"><span style="color:#393A34;">    log 127.0.0.1 local1 warning</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">defaults</span></span>
<span class="line"><span style="color:#393A34;">    mode tcp</span></span>
<span class="line"><span style="color:#393A34;">    log global</span></span>
<span class="line"><span style="color:#393A34;">    option tcplog            </span><span style="color:#A0ADA0;"># \u5F00\u542Ftcplog</span></span>
<span class="line"><span style="color:#393A34;">    timeout connect 5000ms</span></span>
<span class="line"><span style="color:#393A34;">    timeout client 10000ms</span></span>
<span class="line"><span style="color:#393A34;">    timeout server 10000ms   </span><span style="color:#A0ADA0;"># TCP\u6A21\u5F0F\u4E0B\uFF0C\u5E94\u5C06timeout client\u548Ctimeout server\u8BBE\u7F6E\u4E3A\u4E00\u6837\u7684\u503C\uFF0C\u4EE5\u9632\u6B62\u51FA\u73B0\u95EE\u9898</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;"># option tcp-check ...   # \u5B9A\u4E49\u9ED8\u8BA4\u7684\u5065\u5EB7\u68C0\u67E5\u7B56\u7565</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">frontend tcp-in</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:9002</span></span>
<span class="line"><span style="color:#393A34;">    maxconn 30000                    </span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u6B64\u7AEF\u53E3\u4E0A\u7684maxconn</span></span>
<span class="line"><span style="color:#393A34;">    default_backend default_servers  </span><span style="color:#A0ADA0;"># \u8BF7\u6C42\u5B9A\u5411\u81F3\u540E\u7AEF\u670D\u52A1\u7FA4default_servers</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">backend default_servers    </span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u540E\u7AEF\u670D\u52A1\u7FA4default_servers</span></span>
<span class="line"><span style="color:#393A34;">    balance roundrobin</span></span>
<span class="line"><span style="color:#393A34;">    server sqlsrv1 192.168.159.129:3306 maxconn 300 check</span></span>
<span class="line"><span style="color:#393A34;">    server sqlsrv2 192.168.159.130:3306 maxconn 300 check</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B\u914D\u7F6E\u8BE6\u89E3:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#   \u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">global</span></span>
<span class="line"><span style="color:#DBD7CA;">    log 127.0.0.1 local0         </span><span style="color:#758575;">#   \u8BBE\u7F6E\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#DBD7CA;">    log 127.0.0.1 local1 notice</span></span>
<span class="line"><span style="color:#DBD7CA;">    maxconn 4000                 </span><span style="color:#758575;">#   \u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">    chroot /usr/local/haproxy    </span><span style="color:#758575;">#   \u5B89\u88C5\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">    user haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">    group haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">    daemon                       </span><span style="color:#758575;">#   \u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  nbproc 1                    #   \u8FDB\u7A0B\u6570\u91CF\uFF0C\u53EA\u80FD\u7528\u4E8E\u5B88\u62A4\u8FDB\u7A0B\u6A21\u5F0F\u7684haproxy\uFF1B\u9ED8\u8BA4\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4E00\u822C\u53EA\u5728\u5355\u8FDB\u7A0B\u4EC5\u80FD\u6253\u5F00\u5C11\u6570\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u573A\u666F\u4E2D\u624D\u4F7F\u7528\u591A\u8FDB\u7A0B\u6A21\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">    pidfile /var/run/haproxy.pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#   \u9ED8\u8BA4\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">defaults</span></span>
<span class="line"><span style="color:#DBD7CA;">    log     global</span></span>
<span class="line"><span style="color:#DBD7CA;">    mode    http                 </span><span style="color:#758575;">#   \u9ED8\u8BA4\u7684\u6A21\u5F0Fmode { tcp|http|health }\uFF0Ctcp\u662F4\u5C42\uFF0Chttp\u662F7\u5C42\uFF0Chealth\u53EA\u4F1A\u8FD4\u56DEOK</span></span>
<span class="line"><span style="color:#DBD7CA;">    option  httplog              </span><span style="color:#758575;">#   http \u65E5\u5FD7\u683C\u5F0F</span></span>
<span class="line"><span style="color:#DBD7CA;">    option dontlognull           </span><span style="color:#758575;">#   \u4E0D\u8BB0\u5F55\u5065\u5EB7\u68C0\u67E5\u65E5\u5FD7\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">    option  redispatch           </span><span style="color:#758575;">#   serverId\u5BF9\u5E94\u7684\u670D\u52A1\u5668\u6302\u6389\u540E,\u5F3A\u5236\u5B9A\u5411\u5230\u5176\u4ED6\u5065\u5EB7\u7684\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#DBD7CA;">    option http-server-close</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  option  abortonclose        #   \u5F53\u670D\u52A1\u5668\u8D1F\u8F7D\u5F88\u9AD8\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u7ED3\u675F\u6389\u5F53\u524D\u961F\u5217\u5904\u7406\u6BD4\u8F83\u4E45\u7684\u94FE\u63A5\uFF1B</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  option  forwardfor          #   \u5982\u679C\u540E\u7AEF\u670D\u52A1\u5668\u9700\u8981\u83B7\u5F97\u5BA2\u6237\u7AEF\u771F\u5B9Eip\u9700\u8981\u914D\u7F6E\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u4ECEHttp Header\u4E2D\u83B7\u5F97\u5BA2\u6237\u7AEFip\uFF1B</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  option  httpclose           #   \u4E3B\u52A8\u5173\u95EDhttp\u901A\u9053,\u6BCF\u6B21\u8BF7\u6C42\u5B8C\u6BD5\u540E\u4E3B\u52A8\u5173\u95EDhttp\u901A\u9053,ha-proxy\u4E0D\u652F\u6301keep-alive,\u53EA\u80FD\u6A21\u62DF\u8FD9\u79CD\u6A21\u5F0F\u7684\u5B9E\u73B0;  </span></span>
<span class="line"><span style="color:#DBD7CA;">    balance roundrobin           </span><span style="color:#758575;">#   \u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5,\u8F6E\u8BE2\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">    retries 3                    </span><span style="color:#758575;">#   \u91CD\u8BD5\u6B21\u6570\uFF1B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    timeout http-request    10s     </span><span style="color:#758575;">#  \u6B64\u4E3A\u7B49\u5F85\u5BA2\u6237\u7AEF\u53D1\u9001\u5B8C\u6574\u8BF7\u6C42\u7684\u6700\u5927\u65F6\u957F\uFF0C\u5E94\u8BE5\u8BBE\u7F6E\u8F83\u77ED\u4E9B\u9632\u6B62\u6D2A\u6C34\u653B\u51FB\uFF0C\u5982\u8BBE\u7F6E\u4E3A2-3\u79D2</span></span>
<span class="line"><span style="color:#858585;">                                    </span><span style="color:#758575;">#  haproxy\u603B\u662F\u8981\u6C42\u4E00\u6B21\u8BF7\u6C42\u6216\u54CD\u5E94\u5168\u90E8\u53D1\u9001\u5B8C\u6210\u540E\u624D\u4F1A\u5904\u7406\u3001\u8F6C\u53D1\uFF0C</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout queue           1m      </span><span style="color:#758575;">#  \u8BF7\u6C42\u5728\u961F\u5217\u4E2D\u7684\u6700\u5927\u65F6\u957F\uFF0C1\u5206\u949F\u592A\u957F\u4E86\u3002\u8BBE\u7F6E\u4E3A10\u79D2\u90FD\u6709\u70B9\u957F\uFF0C10\u79D2\u8BF7\u6C42\u4E0D\u5230\u8D44\u6E90\u5BA2\u6237\u7AEF\u4F1A\u5931\u53BB\u8010\u5FC3</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout connect         10s     </span><span style="color:#758575;">#  haproxy\u548C\u670D\u52A1\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\u7684\u6700\u5927\u65F6\u957F\uFF0C\u8BBE\u7F6E\u4E3A1\u79D2\u5C31\u8DB3\u591F\u4E86\u3002\u5C40\u57DF\u7F51\u5185\u5EFA\u7ACB\u8FDE\u63A5\u4E00\u822C\u90FD\u662F\u77AC\u95F4\u7684</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout client          1m      </span><span style="color:#758575;">#  \u548C\u5BA2\u6237\u7AEF\u4FDD\u6301\u7A7A\u95F2\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F\uFF0C\u5728\u9AD8\u5E76\u53D1\u4E0B\u53EF\u7A0D\u5FAE\u77ED\u4E00\u70B9\uFF0C\u53EF\u8BBE\u7F6E\u4E3A10\u79D2\u4EE5\u5C3D\u5FEB\u91CA\u653E\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout server          1m      </span><span style="color:#758575;">#  \u548C\u670D\u52A1\u7AEF\u4FDD\u6301\u7A7A\u95F2\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F\uFF0C\u5C40\u57DF\u7F51\u5185\u5EFA\u7ACB\u8FDE\u63A5\u5F88\u5FEB\uFF0C\u6240\u4EE5\u5C3D\u91CF\u8BBE\u7F6E\u77ED\u4E00\u4E9B\uFF0C\u7279\u522B\u662F\u5E76\u53D1\u65F6\uFF0C\u5982\u8BBE\u7F6E\u4E3A1-3\u79D2</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout http-keep-alive 10s     </span><span style="color:#758575;">#  \u548C\u5BA2\u6237\u7AEF\u4FDD\u6301\u957F\u8FDE\u63A5\u7684\u6700\u5927\u65F6\u957F\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8Etimeout http-request\u9AD8\u4E8Etimeout client</span></span>
<span class="line"><span style="color:#DBD7CA;">    timeout check           10s     </span><span style="color:#758575;">#  \u548C\u540E\u7AEF\u670D\u52A1\u5668\u6210\u529F\u5EFA\u7ACB\u8FDE\u63A5\u540E\u5230\u6700\u7EC8\u5B8C\u6210\u68C0\u67E5\u7684\u65F6\u957F(\u4E0D\u5305\u62EC\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u53EA\u662F\u8BFB\u53D6\u5230\u68C0\u67E5\u7ED3\u679C\u7684\u65F6\u957F)\uFF0C</span></span>
<span class="line"><span style="color:#858585;">                                    </span><span style="color:#758575;">#  \u53EF\u8BBE\u7F6E\u77ED\u4E00\u70B9\uFF0C\u59821-2\u79D2</span></span>
<span class="line"><span style="color:#DBD7CA;">    maxconn                 3000    </span><span style="color:#758575;">#  \u9ED8\u8BA4\u548C\u524D\u6BB5\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u4F46\u4E0D\u80FD\u8D85\u8FC7global\u4E2D\u7684maxconn\u786C\u9650\u5236\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#   \u7EDF\u8BA1\u9875\u9762\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">listen admin_stats  </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> 0.0.0.0:50000           </span><span style="color:#758575;">#   \u76D1\u542CIP\u548C\u7AEF\u53E3\uFF0C\u4E3A\u4E86\u5B89\u5168\u53EF\u4EE5\u8BBE\u7F6E\u672C\u673A\u7684\u5C40\u57DF\u7F51IP\u53CA\u7AEF\u53E3\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">    mode http</span></span>
<span class="line"><span style="color:#DBD7CA;">    option httplog               </span><span style="color:#758575;">#   \u91C7\u7528http\u65E5\u5FD7\u683C\u5F0F  </span></span>
<span class="line"><span style="color:#DBD7CA;">    stats refresh 30s            </span><span style="color:#758575;">#   \u7EDF\u8BA1\u9875\u9762\u81EA\u52A8\u5237\u65B0\u65F6\u95F4  </span></span>
<span class="line"><span style="color:#DBD7CA;">    stats uri /haproxy</span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">stats     </span><span style="color:#758575;">#   \u72B6\u6001\u7BA1\u7406\u9875\u9762\uFF0C\u901A\u8FC7/haproxy?stats\u6765\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#DBD7CA;">    stats realm Haproxy Manager  </span><span style="color:#758575;">#   \u7EDF\u8BA1\u9875\u9762\u5BC6\u7801\u6846\u4E0A\u63D0\u793A\u6587\u672C  </span></span>
<span class="line"><span style="color:#DBD7CA;">    stats auth admin:admin     </span><span style="color:#758575;">#   \u7EDF\u8BA1\u9875\u9762\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E  </span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  stats hide-version          #   \u9690\u85CF\u7EDF\u8BA1\u9875\u9762\u4E0AHAProxy\u7684\u7248\u672C\u4FE1\u606F</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  errorfile 403 /usr/local/haproxy/examples/errorfiles/   #  \u8BBE\u7F6Ehaproxy \u9519\u8BEF\u9875\u9762</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#  \u524D\u7AEF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">frontend http_main</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> 0.0.0.0:80              </span><span style="color:#758575;">#   http\u8BF7\u6C42\u7684\u7AEF\u53E3\uFF0C\u4F1A\u88AB\u8F6C\u53D1\u5230\u8BBE\u7F6E\u7684ip\u53CA\u7AEF\u53E3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   \u8F6C\u53D1\u89C4\u5219</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  acl url_yuming   path_beg www.yuming.com</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  use_backend server_yuming if url_yuming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   \u9ED8\u8BA4\u8DF3\u8F6C\u9879\uFF0C\u5F53\u4E0A\u9762\u90FD\u6CA1\u6709\u5339\u914D\u4E0A\uFF0C\u5C31\u8F6C\u5230backend\u7684http_default\u4E0A\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">    default_backend http_default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   \u63D0\u5347\u5931\u8D25\u7684\u65F6\u5019\u7684\u7528\u6237\u4F53\u9A8C</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  errorfile 502 /usr/local/haproxy/examples/errorfiles/502.http</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  errorfile 503 /usr/local/haproxy/examples/errorfiles/503.http</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  errorfile 504 /usr/local/haproxy/examples/errorfiles/504.http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#   \u540E\u7AEF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">backend http_default</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   \u989D\u5916\u7684\u4E00\u4E9B\u8BBE\u7F6E\uFF0C\u6309\u9700\u4F7F\u7528</span></span>
<span class="line"><span style="color:#DBD7CA;">    option forwardfor</span></span>
<span class="line"><span style="color:#DBD7CA;">    option forwardfor header Client-IP</span></span>
<span class="line"><span style="color:#DBD7CA;">    option http-server-close</span></span>
<span class="line"><span style="color:#DBD7CA;">    option httpclose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   \u8D1F\u8F7D\u5747\u8861\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  source \u6839\u636E\u8BF7\u6C42\u6E90IP</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  static-rr \u6839\u636E\u6743\u91CD</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  leastconn \u6700\u5C11\u8FDE\u63A5\u5148\u5904\u7406;\u5728\u6709\u7740\u8F83\u957F\u65F6\u95F4\u4F1A\u8BDD\u7684\u573A\u666F\u4E2D\u63A8\u8350\u4F7F\u7528\u6B64\u7B97\u6CD5\uFF0C\u5982LDAP\u3001SQL\u7B49\uFF0C\u5176\u5E76\u4E0D\u592A\u9002\u7528\u4E8E\u8F83\u77ED\u4F1A\u8BDD\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u5982HTTP\uFF1B\u6B64\u7B97\u6CD5\u662F\u52A8\u6001\u7684\uFF0C</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  uri \u6839\u636E\u8BF7\u6C42\u7684uri</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  url_param \u6839\u636E\u8BF7\u6C42\u7684url\u53C2\u6570</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  rdp-cookie \u636E\u636Ecookie(name)\u6765\u9501\u5B9A\u5E76\u54C8\u5E0C\u6BCF\u4E00\u6B21\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  hdr(name) \u6839\u636EHTTP\u8BF7\u6C42\u5934\u6765\u9501\u5B9A\u6BCF\u4E00\u6B21HTTP\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  roundrobin \u8F6E\u8BE2\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#DBD7CA;">    balance roundrobin           </span><span style="color:#758575;">#   \u8D1F\u8F7D\u5747\u8861\u7684\u65B9\u5F0F,\u8F6E\u8BE2\u65B9\u5F0F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   \u8BBE\u7F6E\u5065\u5EB7\u68C0\u67E5\u9875\u9762</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  option httpchk GET /index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#  \u4F20\u9012\u5BA2\u6237\u7AEF\u771F\u5B9EIP</span></span>
<span class="line"><span style="color:#DBD7CA;">    option forwardfor header X-Forwarded-For</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   \u9700\u8981\u8F6C\u53D1\u7684ip\u53CA\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   inter 2000 \u5065\u5EB7\u68C0\u67E5\u65F6\u95F4\u95F4\u96942\u79D2</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   rise 3 \u68C0\u6D4B\u591A\u5C11\u6B21\u624D\u8BA4\u4E3A\u662F\u6B63\u5E38\u7684</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   fall 3 \u5931\u8D25\u591A\u5C11\u6B21\u624D\u8BA4\u4E3A\u662F\u4E0D\u53EF\u7528\u7684</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#   weight 30 \u6743\u91CD</span></span>
<span class="line"><span style="color:#DBD7CA;">    server node1 192.168.1.101:8080 check inter 2000 rise 3 fall 3 weight 30</span></span>
<span class="line"><span style="color:#DBD7CA;">    server node2 192.168.1.101:8081 check inter 2000 rise 3 fall 3 weight 30</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#   \u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">global</span></span>
<span class="line"><span style="color:#393A34;">    log 127.0.0.1 local0         </span><span style="color:#A0ADA0;">#   \u8BBE\u7F6E\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#393A34;">    log 127.0.0.1 local1 notice</span></span>
<span class="line"><span style="color:#393A34;">    maxconn 4000                 </span><span style="color:#A0ADA0;">#   \u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#393A34;">    chroot /usr/local/haproxy    </span><span style="color:#A0ADA0;">#   \u5B89\u88C5\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">    user haproxy</span></span>
<span class="line"><span style="color:#393A34;">    group haproxy</span></span>
<span class="line"><span style="color:#393A34;">    daemon                       </span><span style="color:#A0ADA0;">#   \u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  nbproc 1                    #   \u8FDB\u7A0B\u6570\u91CF\uFF0C\u53EA\u80FD\u7528\u4E8E\u5B88\u62A4\u8FDB\u7A0B\u6A21\u5F0F\u7684haproxy\uFF1B\u9ED8\u8BA4\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4E00\u822C\u53EA\u5728\u5355\u8FDB\u7A0B\u4EC5\u80FD\u6253\u5F00\u5C11\u6570\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u573A\u666F\u4E2D\u624D\u4F7F\u7528\u591A\u8FDB\u7A0B\u6A21\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">    pidfile /var/run/haproxy.pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#   \u9ED8\u8BA4\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">defaults</span></span>
<span class="line"><span style="color:#393A34;">    log     global</span></span>
<span class="line"><span style="color:#393A34;">    mode    http                 </span><span style="color:#A0ADA0;">#   \u9ED8\u8BA4\u7684\u6A21\u5F0Fmode { tcp|http|health }\uFF0Ctcp\u662F4\u5C42\uFF0Chttp\u662F7\u5C42\uFF0Chealth\u53EA\u4F1A\u8FD4\u56DEOK</span></span>
<span class="line"><span style="color:#393A34;">    option  httplog              </span><span style="color:#A0ADA0;">#   http \u65E5\u5FD7\u683C\u5F0F</span></span>
<span class="line"><span style="color:#393A34;">    option dontlognull           </span><span style="color:#A0ADA0;">#   \u4E0D\u8BB0\u5F55\u5065\u5EB7\u68C0\u67E5\u65E5\u5FD7\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">    option  redispatch           </span><span style="color:#A0ADA0;">#   serverId\u5BF9\u5E94\u7684\u670D\u52A1\u5668\u6302\u6389\u540E,\u5F3A\u5236\u5B9A\u5411\u5230\u5176\u4ED6\u5065\u5EB7\u7684\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#393A34;">    option http-server-close</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  option  abortonclose        #   \u5F53\u670D\u52A1\u5668\u8D1F\u8F7D\u5F88\u9AD8\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u7ED3\u675F\u6389\u5F53\u524D\u961F\u5217\u5904\u7406\u6BD4\u8F83\u4E45\u7684\u94FE\u63A5\uFF1B</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  option  forwardfor          #   \u5982\u679C\u540E\u7AEF\u670D\u52A1\u5668\u9700\u8981\u83B7\u5F97\u5BA2\u6237\u7AEF\u771F\u5B9Eip\u9700\u8981\u914D\u7F6E\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u4ECEHttp Header\u4E2D\u83B7\u5F97\u5BA2\u6237\u7AEFip\uFF1B</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  option  httpclose           #   \u4E3B\u52A8\u5173\u95EDhttp\u901A\u9053,\u6BCF\u6B21\u8BF7\u6C42\u5B8C\u6BD5\u540E\u4E3B\u52A8\u5173\u95EDhttp\u901A\u9053,ha-proxy\u4E0D\u652F\u6301keep-alive,\u53EA\u80FD\u6A21\u62DF\u8FD9\u79CD\u6A21\u5F0F\u7684\u5B9E\u73B0;  </span></span>
<span class="line"><span style="color:#393A34;">    balance roundrobin           </span><span style="color:#A0ADA0;">#   \u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5,\u8F6E\u8BE2\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">    retries 3                    </span><span style="color:#A0ADA0;">#   \u91CD\u8BD5\u6B21\u6570\uFF1B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    timeout http-request    10s     </span><span style="color:#A0ADA0;">#  \u6B64\u4E3A\u7B49\u5F85\u5BA2\u6237\u7AEF\u53D1\u9001\u5B8C\u6574\u8BF7\u6C42\u7684\u6700\u5927\u65F6\u957F\uFF0C\u5E94\u8BE5\u8BBE\u7F6E\u8F83\u77ED\u4E9B\u9632\u6B62\u6D2A\u6C34\u653B\u51FB\uFF0C\u5982\u8BBE\u7F6E\u4E3A2-3\u79D2</span></span>
<span class="line"><span style="color:#8E8F8B;">                                    </span><span style="color:#A0ADA0;">#  haproxy\u603B\u662F\u8981\u6C42\u4E00\u6B21\u8BF7\u6C42\u6216\u54CD\u5E94\u5168\u90E8\u53D1\u9001\u5B8C\u6210\u540E\u624D\u4F1A\u5904\u7406\u3001\u8F6C\u53D1\uFF0C</span></span>
<span class="line"><span style="color:#393A34;">    timeout queue           1m      </span><span style="color:#A0ADA0;">#  \u8BF7\u6C42\u5728\u961F\u5217\u4E2D\u7684\u6700\u5927\u65F6\u957F\uFF0C1\u5206\u949F\u592A\u957F\u4E86\u3002\u8BBE\u7F6E\u4E3A10\u79D2\u90FD\u6709\u70B9\u957F\uFF0C10\u79D2\u8BF7\u6C42\u4E0D\u5230\u8D44\u6E90\u5BA2\u6237\u7AEF\u4F1A\u5931\u53BB\u8010\u5FC3</span></span>
<span class="line"><span style="color:#393A34;">    timeout connect         10s     </span><span style="color:#A0ADA0;">#  haproxy\u548C\u670D\u52A1\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\u7684\u6700\u5927\u65F6\u957F\uFF0C\u8BBE\u7F6E\u4E3A1\u79D2\u5C31\u8DB3\u591F\u4E86\u3002\u5C40\u57DF\u7F51\u5185\u5EFA\u7ACB\u8FDE\u63A5\u4E00\u822C\u90FD\u662F\u77AC\u95F4\u7684</span></span>
<span class="line"><span style="color:#393A34;">    timeout client          1m      </span><span style="color:#A0ADA0;">#  \u548C\u5BA2\u6237\u7AEF\u4FDD\u6301\u7A7A\u95F2\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F\uFF0C\u5728\u9AD8\u5E76\u53D1\u4E0B\u53EF\u7A0D\u5FAE\u77ED\u4E00\u70B9\uFF0C\u53EF\u8BBE\u7F6E\u4E3A10\u79D2\u4EE5\u5C3D\u5FEB\u91CA\u653E\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#393A34;">    timeout server          1m      </span><span style="color:#A0ADA0;">#  \u548C\u670D\u52A1\u7AEF\u4FDD\u6301\u7A7A\u95F2\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F\uFF0C\u5C40\u57DF\u7F51\u5185\u5EFA\u7ACB\u8FDE\u63A5\u5F88\u5FEB\uFF0C\u6240\u4EE5\u5C3D\u91CF\u8BBE\u7F6E\u77ED\u4E00\u4E9B\uFF0C\u7279\u522B\u662F\u5E76\u53D1\u65F6\uFF0C\u5982\u8BBE\u7F6E\u4E3A1-3\u79D2</span></span>
<span class="line"><span style="color:#393A34;">    timeout http-keep-alive 10s     </span><span style="color:#A0ADA0;">#  \u548C\u5BA2\u6237\u7AEF\u4FDD\u6301\u957F\u8FDE\u63A5\u7684\u6700\u5927\u65F6\u957F\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8Etimeout http-request\u9AD8\u4E8Etimeout client</span></span>
<span class="line"><span style="color:#393A34;">    timeout check           10s     </span><span style="color:#A0ADA0;">#  \u548C\u540E\u7AEF\u670D\u52A1\u5668\u6210\u529F\u5EFA\u7ACB\u8FDE\u63A5\u540E\u5230\u6700\u7EC8\u5B8C\u6210\u68C0\u67E5\u7684\u65F6\u957F(\u4E0D\u5305\u62EC\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u53EA\u662F\u8BFB\u53D6\u5230\u68C0\u67E5\u7ED3\u679C\u7684\u65F6\u957F)\uFF0C</span></span>
<span class="line"><span style="color:#8E8F8B;">                                    </span><span style="color:#A0ADA0;">#  \u53EF\u8BBE\u7F6E\u77ED\u4E00\u70B9\uFF0C\u59821-2\u79D2</span></span>
<span class="line"><span style="color:#393A34;">    maxconn                 3000    </span><span style="color:#A0ADA0;">#  \u9ED8\u8BA4\u548C\u524D\u6BB5\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u4F46\u4E0D\u80FD\u8D85\u8FC7global\u4E2D\u7684maxconn\u786C\u9650\u5236\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#   \u7EDF\u8BA1\u9875\u9762\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">listen admin_stats  </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> 0.0.0.0:50000           </span><span style="color:#A0ADA0;">#   \u76D1\u542CIP\u548C\u7AEF\u53E3\uFF0C\u4E3A\u4E86\u5B89\u5168\u53EF\u4EE5\u8BBE\u7F6E\u672C\u673A\u7684\u5C40\u57DF\u7F51IP\u53CA\u7AEF\u53E3\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">    mode http</span></span>
<span class="line"><span style="color:#393A34;">    option httplog               </span><span style="color:#A0ADA0;">#   \u91C7\u7528http\u65E5\u5FD7\u683C\u5F0F  </span></span>
<span class="line"><span style="color:#393A34;">    stats refresh 30s            </span><span style="color:#A0ADA0;">#   \u7EDF\u8BA1\u9875\u9762\u81EA\u52A8\u5237\u65B0\u65F6\u95F4  </span></span>
<span class="line"><span style="color:#393A34;">    stats uri /haproxy</span><span style="color:#AB5959;">?</span><span style="color:#393A34;">stats     </span><span style="color:#A0ADA0;">#   \u72B6\u6001\u7BA1\u7406\u9875\u9762\uFF0C\u901A\u8FC7/haproxy?stats\u6765\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#393A34;">    stats realm Haproxy Manager  </span><span style="color:#A0ADA0;">#   \u7EDF\u8BA1\u9875\u9762\u5BC6\u7801\u6846\u4E0A\u63D0\u793A\u6587\u672C  </span></span>
<span class="line"><span style="color:#393A34;">    stats auth admin:admin     </span><span style="color:#A0ADA0;">#   \u7EDF\u8BA1\u9875\u9762\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E  </span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  stats hide-version          #   \u9690\u85CF\u7EDF\u8BA1\u9875\u9762\u4E0AHAProxy\u7684\u7248\u672C\u4FE1\u606F</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  errorfile 403 /usr/local/haproxy/examples/errorfiles/   #  \u8BBE\u7F6Ehaproxy \u9519\u8BEF\u9875\u9762</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#  \u524D\u7AEF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">frontend http_main</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> 0.0.0.0:80              </span><span style="color:#A0ADA0;">#   http\u8BF7\u6C42\u7684\u7AEF\u53E3\uFF0C\u4F1A\u88AB\u8F6C\u53D1\u5230\u8BBE\u7F6E\u7684ip\u53CA\u7AEF\u53E3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   \u8F6C\u53D1\u89C4\u5219</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  acl url_yuming   path_beg www.yuming.com</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  use_backend server_yuming if url_yuming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   \u9ED8\u8BA4\u8DF3\u8F6C\u9879\uFF0C\u5F53\u4E0A\u9762\u90FD\u6CA1\u6709\u5339\u914D\u4E0A\uFF0C\u5C31\u8F6C\u5230backend\u7684http_default\u4E0A\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">    default_backend http_default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   \u63D0\u5347\u5931\u8D25\u7684\u65F6\u5019\u7684\u7528\u6237\u4F53\u9A8C</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  errorfile 502 /usr/local/haproxy/examples/errorfiles/502.http</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  errorfile 503 /usr/local/haproxy/examples/errorfiles/503.http</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  errorfile 504 /usr/local/haproxy/examples/errorfiles/504.http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#   \u540E\u7AEF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">backend http_default</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   \u989D\u5916\u7684\u4E00\u4E9B\u8BBE\u7F6E\uFF0C\u6309\u9700\u4F7F\u7528</span></span>
<span class="line"><span style="color:#393A34;">    option forwardfor</span></span>
<span class="line"><span style="color:#393A34;">    option forwardfor header Client-IP</span></span>
<span class="line"><span style="color:#393A34;">    option http-server-close</span></span>
<span class="line"><span style="color:#393A34;">    option httpclose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   \u8D1F\u8F7D\u5747\u8861\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  source \u6839\u636E\u8BF7\u6C42\u6E90IP</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  static-rr \u6839\u636E\u6743\u91CD</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  leastconn \u6700\u5C11\u8FDE\u63A5\u5148\u5904\u7406;\u5728\u6709\u7740\u8F83\u957F\u65F6\u95F4\u4F1A\u8BDD\u7684\u573A\u666F\u4E2D\u63A8\u8350\u4F7F\u7528\u6B64\u7B97\u6CD5\uFF0C\u5982LDAP\u3001SQL\u7B49\uFF0C\u5176\u5E76\u4E0D\u592A\u9002\u7528\u4E8E\u8F83\u77ED\u4F1A\u8BDD\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u5982HTTP\uFF1B\u6B64\u7B97\u6CD5\u662F\u52A8\u6001\u7684\uFF0C</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  uri \u6839\u636E\u8BF7\u6C42\u7684uri</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  url_param \u6839\u636E\u8BF7\u6C42\u7684url\u53C2\u6570</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  rdp-cookie \u636E\u636Ecookie(name)\u6765\u9501\u5B9A\u5E76\u54C8\u5E0C\u6BCF\u4E00\u6B21\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  hdr(name) \u6839\u636EHTTP\u8BF7\u6C42\u5934\u6765\u9501\u5B9A\u6BCF\u4E00\u6B21HTTP\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  roundrobin \u8F6E\u8BE2\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#393A34;">    balance roundrobin           </span><span style="color:#A0ADA0;">#   \u8D1F\u8F7D\u5747\u8861\u7684\u65B9\u5F0F,\u8F6E\u8BE2\u65B9\u5F0F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   \u8BBE\u7F6E\u5065\u5EB7\u68C0\u67E5\u9875\u9762</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  option httpchk GET /index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#  \u4F20\u9012\u5BA2\u6237\u7AEF\u771F\u5B9EIP</span></span>
<span class="line"><span style="color:#393A34;">    option forwardfor header X-Forwarded-For</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   \u9700\u8981\u8F6C\u53D1\u7684ip\u53CA\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   inter 2000 \u5065\u5EB7\u68C0\u67E5\u65F6\u95F4\u95F4\u96942\u79D2</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   rise 3 \u68C0\u6D4B\u591A\u5C11\u6B21\u624D\u8BA4\u4E3A\u662F\u6B63\u5E38\u7684</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   fall 3 \u5931\u8D25\u591A\u5C11\u6B21\u624D\u8BA4\u4E3A\u662F\u4E0D\u53EF\u7528\u7684</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#   weight 30 \u6743\u91CD</span></span>
<span class="line"><span style="color:#393A34;">    server node1 192.168.1.101:8080 check inter 2000 rise 3 fall 3 weight 30</span></span>
<span class="line"><span style="color:#393A34;">    server node2 192.168.1.101:8081 check inter 2000 rise 3 fall 3 weight 30</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>haproxy\u5B9E\u73B0\u4F1A\u8BDD\u4FDD\u6301(cookie):<a href="https://www.cnblogs.com/f-ck-need-u/p/8553190.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/f-ck-need-u/p/8553190.html</a></li></ul>`,10),o=[e];function c(t,r,i,y,A,D){return n(),a("div",null,o)}var u=s(p,[["render",c]]);export{d as __pageData,u as default};
