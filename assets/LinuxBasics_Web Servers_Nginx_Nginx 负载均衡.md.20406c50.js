import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"Nginx \u8D1F\u8F7D\u5747\u8861","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx \u4E03\u5C42\u8D1F\u8F7D\u5747\u8861","slug":"nginx-\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861"},{"level":2,"title":"Nginx \u56DB\u5C42\u8D1F\u8F7D\u5747\u8861","slug":"nginx-\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861"},{"level":2,"title":"\u56DB\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u5BF9\u6BD4","slug":"\u56DB\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u5BF9\u6BD4"},{"level":2,"title":"Nginx\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5","slug":"nginx\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5"},{"level":2,"title":"\u6269\u5C55(\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5)","slug":"\u6269\u5C55-\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Web Servers/Nginx/Nginx \u8D1F\u8F7D\u5747\u8861.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Web Servers/Nginx/Nginx \u8D1F\u8F7D\u5747\u8861.md"},e=p(`<h1 id="nginx-\u8D1F\u8F7D\u5747\u8861" tabindex="-1">Nginx \u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#nginx-\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h1><h2 id="nginx-\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861" tabindex="-1">Nginx \u4E03\u5C42\u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#nginx-\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h2><p>Example Configuration</p><blockquote><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">upstream backend {</span></span>
<span class="line"><span style="color:#dbd7ca;">    server backend1.example.com       weight=5;</span></span>
<span class="line"><span style="color:#dbd7ca;">    server backend2.example.com:8080;</span></span>
<span class="line"><span style="color:#dbd7ca;">    server unix:/tmp/backend3;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">    server backup1.example.com:8080   backup;</span></span>
<span class="line"><span style="color:#dbd7ca;">    server backup2.example.com:8080   backup;</span></span>
<span class="line"><span style="color:#dbd7ca;">}</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">server {</span></span>
<span class="line"><span style="color:#dbd7ca;">    location / {</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_pass http://backend;</span></span>
<span class="line"><span style="color:#dbd7ca;">    }</span></span>
<span class="line"><span style="color:#dbd7ca;">}</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">upstream backend {</span></span>
<span class="line"><span style="color:#393a34;">    server backend1.example.com       weight=5;</span></span>
<span class="line"><span style="color:#393a34;">    server backend2.example.com:8080;</span></span>
<span class="line"><span style="color:#393a34;">    server unix:/tmp/backend3;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    server backup1.example.com:8080   backup;</span></span>
<span class="line"><span style="color:#393a34;">    server backup2.example.com:8080   backup;</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">server {</span></span>
<span class="line"><span style="color:#393a34;">    location / {</span></span>
<span class="line"><span style="color:#393a34;">        proxy_pass http://backend;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div></blockquote><p>\u793A\u4F8B:</p><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5728http\u914D\u7F6E\u6BB5\u4E2D</span></span>
<span class="line"><span style="color:#CB7676;">http</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">upstream</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">backend-server </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">server</span><span style="color:#DBD7CA;"> 192.168.174.141 </span><span style="color:#B8A965;">weight</span><span style="color:#CB7676;">=</span><span style="color:#6394BF;">1</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server </span><span style="color:#6394BF;">192.168.174.142</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">weight</span><span style="color:#CB7676;">=</span><span style="color:#6394BF;">2</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server </span><span style="color:#6394BF;">192.168.174.99</span><span style="color:#DBD7CA;"> backup;	</span><span style="color:#758575;"># \u5907\u4EFD\u670D\u52A1\u5668,\u5F53\u4E3B\u670D\u52A1\u5668\u5B95\u673A\u65E0\u6CD5\u63A5\u6536\u8BF7\u6C42\u65F6\u5C06\u4F1A\u88AB\u542F\u7528,\u53EF\u7528\u4E8Esorry server</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># server 192.168.174.100 down;		# \u624B\u52A8\u6807\u8BB0\u4E3B\u673A\u6C38\u4E45\u4E0D\u53EF\u7528 </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># server 192.168.174.101 max_conns=[NUMBER] max_fails=[NUMBER] fail_timeout=[NUMBER];		# \u4ECE\u5DE6\u5F80\u53F3\u53C2\u6570\u5206\u522B\u662F:\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570,\u7528\u4E8E\u5065\u5EB7\u72B6\u6001\u68C0\u6D4B\u7684\u6700\u591A\u5931\u8D25\u6B21\u6570,\u5931\u8D25\u7684\u65F6\u95F4 </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># --- \u8C03\u5EA6\u7B97\u6CD5 ---</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># least_conn;   # \u6700\u5C11\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># fair;         # \u6309\u540E\u7AEF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># ip_hash;      # \u6BCF\u4E2A\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1,\u6B64\u5916\u8FD8\u53EF\u4EE5\u901A\u8FC7hash\u6765\u6309\u7167\u952E\u503C\u6765\u7ED1\u5B9A\u8BF7\u6C42,\u2193\u2193\u2193\u5982\u4E0B\u6240\u793A\u2193\u2193\u2193</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># * \u8BED\u6CD5:	hash key [consistent];	\u4F8B\u5982: \`hash $remote_addr\`\u6548\u679C\u548Cip_hash\u7B97\u6CD5\u6548\u679C\u4E00\u81F4,[consistent]\u53C2\u6570\u53C2\u8003\` /\u6269\u5C55(\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5)/ \`</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># --- \u5176\u4ED6 ---</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># keepalive 32;		# \u6FC0\u6D3B\u8FDE\u63A5\u4E0A\u6E38\u670D\u52A1\u5668\u7684\u7F13\u5B58,\u6570\u5B5732\u8868\u793Anginx\u7684\u6BCF\u4E2Awork\u8FDB\u7A0B\u6700\u5927\u7684\u8FDE\u63A5\u6570,\u5F53\u8D85\u8FC7\u8BE5\u6570\u5B57\u65F6,\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7684\u8FDE\u63A5\u5C06\u4F1A\u88AB\u5173\u95ED,\u8BE5\u53C2\u6570\u5E38\u7528\u5728\u540E\u7AEF\u7F13\u5B58\u670D\u52A1\u5668\u4E0A</span></span>
<span class="line"><span style="color:#DBD7CA;">	}       </span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># \u5728server\u914D\u7F6E\u6BB5\u4E2D</span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">agou-ops.com</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://backend-server</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># ----------- \u8BBE\u7F6E\u8D1F\u8F7D\u5747\u8861\u6240\u8C03\u7528\u7684proxy\u53C2\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">5.\u51C6\u5907Nginx\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u4F7F\u7528\u7684proxy_params</span></span>
<span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#4D9375;">vim</span><span style="color:#DBD7CA;"> /etc/nginx/proxy_params</span></span>
<span class="line"><span style="color:#4D9375;">proxy_set_header </span><span style="color:#DBD7CA;">Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">http_host</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">proxy_set_header </span><span style="color:#DBD7CA;">X-Real-IP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">proxy_set_header </span><span style="color:#DBD7CA;">X-Forwarded-For </span><span style="color:#858585;">$</span><span style="color:#B8A965;">proxy_add_x_forwarded_for</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#4D9375;">proxy_connect_timeout </span><span style="color:#DBD7CA;">30</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">proxy_send_timeout </span><span style="color:#DBD7CA;">60</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">proxy_read_timeout </span><span style="color:#DBD7CA;">60</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#4D9375;">proxy_buffering </span><span style="color:#DBD7CA;">on</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">proxy_buffer_size </span><span style="color:#DBD7CA;">32k</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#4D9375;">proxy_buffers </span><span style="color:#DBD7CA;">4 </span><span style="color:#6394BF;">128k</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># -=------------------</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5728http\u914D\u7F6E\u6BB5\u4E2D</span></span>
<span class="line"><span style="color:#AB5959;">http</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">upstream</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">backend-server </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">server</span><span style="color:#393A34;"> 192.168.174.141 </span><span style="color:#8C862B;">weight</span><span style="color:#AB5959;">=</span><span style="color:#296AA3;">1</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">        server </span><span style="color:#296AA3;">192.168.174.142</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">weight</span><span style="color:#AB5959;">=</span><span style="color:#296AA3;">2</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">        server </span><span style="color:#296AA3;">192.168.174.99</span><span style="color:#393A34;"> backup;	</span><span style="color:#A0ADA0;"># \u5907\u4EFD\u670D\u52A1\u5668,\u5F53\u4E3B\u670D\u52A1\u5668\u5B95\u673A\u65E0\u6CD5\u63A5\u6536\u8BF7\u6C42\u65F6\u5C06\u4F1A\u88AB\u542F\u7528,\u53EF\u7528\u4E8Esorry server</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># server 192.168.174.100 down;		# \u624B\u52A8\u6807\u8BB0\u4E3B\u673A\u6C38\u4E45\u4E0D\u53EF\u7528 </span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># server 192.168.174.101 max_conns=[NUMBER] max_fails=[NUMBER] fail_timeout=[NUMBER];		# \u4ECE\u5DE6\u5F80\u53F3\u53C2\u6570\u5206\u522B\u662F:\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570,\u7528\u4E8E\u5065\u5EB7\u72B6\u6001\u68C0\u6D4B\u7684\u6700\u591A\u5931\u8D25\u6B21\u6570,\u5931\u8D25\u7684\u65F6\u95F4 </span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># --- \u8C03\u5EA6\u7B97\u6CD5 ---</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># least_conn;   # \u6700\u5C11\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># fair;         # \u6309\u540E\u7AEF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># ip_hash;      # \u6BCF\u4E2A\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1,\u6B64\u5916\u8FD8\u53EF\u4EE5\u901A\u8FC7hash\u6765\u6309\u7167\u952E\u503C\u6765\u7ED1\u5B9A\u8BF7\u6C42,\u2193\u2193\u2193\u5982\u4E0B\u6240\u793A\u2193\u2193\u2193</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># * \u8BED\u6CD5:	hash key [consistent];	\u4F8B\u5982: \`hash $remote_addr\`\u6548\u679C\u548Cip_hash\u7B97\u6CD5\u6548\u679C\u4E00\u81F4,[consistent]\u53C2\u6570\u53C2\u8003\` /\u6269\u5C55(\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5)/ \`</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># --- \u5176\u4ED6 ---</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># keepalive 32;		# \u6FC0\u6D3B\u8FDE\u63A5\u4E0A\u6E38\u670D\u52A1\u5668\u7684\u7F13\u5B58,\u6570\u5B5732\u8868\u793Anginx\u7684\u6BCF\u4E2Awork\u8FDB\u7A0B\u6700\u5927\u7684\u8FDE\u63A5\u6570,\u5F53\u8D85\u8FC7\u8BE5\u6570\u5B57\u65F6,\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7684\u8FDE\u63A5\u5C06\u4F1A\u88AB\u5173\u95ED,\u8BE5\u53C2\u6570\u5E38\u7528\u5728\u540E\u7AEF\u7F13\u5B58\u670D\u52A1\u5668\u4E0A</span></span>
<span class="line"><span style="color:#393A34;">	}       </span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728server\u914D\u7F6E\u6BB5\u4E2D</span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">agou-ops.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://backend-server</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># ----------- \u8BBE\u7F6E\u8D1F\u8F7D\u5747\u8861\u6240\u8C03\u7528\u7684proxy\u53C2\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">5.\u51C6\u5907Nginx\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u4F7F\u7528\u7684proxy_params</span></span>
<span class="line"><span style="color:#393A34;">$ </span><span style="color:#1C6B48;">vim</span><span style="color:#393A34;"> /etc/nginx/proxy_params</span></span>
<span class="line"><span style="color:#1C6B48;">proxy_set_header </span><span style="color:#393A34;">Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">http_host</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">proxy_set_header </span><span style="color:#393A34;">X-Real-IP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">proxy_set_header </span><span style="color:#393A34;">X-Forwarded-For </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">proxy_add_x_forwarded_for</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#1C6B48;">proxy_connect_timeout </span><span style="color:#393A34;">30</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">proxy_send_timeout </span><span style="color:#393A34;">60</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">proxy_read_timeout </span><span style="color:#393A34;">60</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#1C6B48;">proxy_buffering </span><span style="color:#393A34;">on</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">proxy_buffer_size </span><span style="color:#393A34;">32k</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#1C6B48;">proxy_buffers </span><span style="color:#393A34;">4 </span><span style="color:#296AA3;">128k</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># -=------------------</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx-\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861" tabindex="-1">Nginx \u56DB\u5C42\u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#nginx-\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h2><p>Example Configuration</p><blockquote><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">worker_processes auto;</span></span>
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
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div></blockquote><p>\u793A\u4F8B:</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">stream </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    upstream ssh_servers </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        server node01:22</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u540C\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861,\u53EF\u6307\u5B9A\u6743\u91CDweight,\u662F\u5426\u4E3A\u5907\u7528\u8282\u70B9backup,\u6B64\u5916\u8FD8\u6709fail_timeout</span></span>
<span class="line"><span style="color:#DBD7CA;">        server node02:22</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">	upsteam web_servers </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">		server node01:80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">		server node02:80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        listen 9922</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_pass ssh_servers</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_timeout 10m</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u5BA2\u6237\u7AEF\u4E24\u6B21\u8BF7\u6C42\u4E4B\u524D\u7684\u95F4\u9694,\u9ED8\u8BA4\u4E3A10min</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_connect_timeout 60s</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># nginx\u4E0E\u88AB\u53CD\u4EE3\u670D\u52A1\u5668\u8231\u5BA4\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F,\u9ED8\u8BA4\u4E3A60s</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    	listen 80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    	proxy_pass web_servers</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">stream </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    upstream ssh_servers </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        server node01:22</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u540C\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861,\u53EF\u6307\u5B9A\u6743\u91CDweight,\u662F\u5426\u4E3A\u5907\u7528\u8282\u70B9backup,\u6B64\u5916\u8FD8\u6709fail_timeout</span></span>
<span class="line"><span style="color:#393A34;">        server node02:22</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">	upsteam web_servers </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">		server node01:80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">		server node02:80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        listen 9922</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_pass ssh_servers</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_timeout 10m</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u5BA2\u6237\u7AEF\u4E24\u6B21\u8BF7\u6C42\u4E4B\u524D\u7684\u95F4\u9694,\u9ED8\u8BA4\u4E3A10min</span></span>
<span class="line"><span style="color:#393A34;">        proxy_connect_timeout 60s</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># nginx\u4E0E\u88AB\u53CD\u4EE3\u670D\u52A1\u5668\u8231\u5BA4\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F,\u9ED8\u8BA4\u4E3A60s</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    	listen 80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    	proxy_pass web_servers</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u56DB\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u5BF9\u6BD4" tabindex="-1">\u56DB\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u5BF9\u6BD4 <a class="header-anchor" href="#\u56DB\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u5BF9\u6BD4" aria-hidden="true">#</a></h2><ul><li>\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\u4EC5\u80FD\u8F6C\u53D1TCP/IP\u534F\u8BAE\u3001UDP\u534F\u8BAE\u3001\u901A\u5E38\u7528\u6765\u8F6C\u53D1\u7AEF\u53E3\uFF0C\u5982\uFF1Atcp/22\u3001udp/53\uFF1B</li><li>\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\u53EF\u4EE5\u7528\u6765\u89E3\u51B3\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u7AEF\u53E3\u9650\u5236\u95EE\u9898\uFF1B\uFF08\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u6700\u5927\u4F7F\u752865535\u4E2A\u7AEF\u53E3\u53F7\uFF09</li><li>\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\u53EF\u4EE5\u89E3\u51B3\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u9AD8\u53EF\u7528\u95EE\u9898\uFF1B\uFF08\u591A\u53F0\u540E\u7AEF\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u80FD\u540C\u4E8B\u7684\u4F7F\u7528\uFF09</li><li>\u56DB\u5C42\u7684\u8F6C\u53D1\u6548\u7387\u6BD4\u4E03\u5C42\u7684\u9AD8\u5F97\u591A\uFF0C\u4F46\u4EC5\u652F\u6301tcp/ip\u534F\u8BAE\uFF0C\u4E0D\u652F\u6301http\u548Chttps\u534F\u8BAE\uFF1B</li><li>\u901A\u5E38\u5927\u5E76\u53D1\u573A\u666F\u901A\u5E38\u4F1A\u9009\u62E9\u4F7F\u7528\u5728\u4E03\u5C42\u8D1F\u8F7D\u524D\u9762\u589E\u52A0\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\u3002</li></ul><h2 id="nginx\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5" tabindex="-1">Nginx\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5 <a class="header-anchor" href="#nginx\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u8BE6\u60C5\u53C2\u8003\uFF1A<a href="http://nginx.org/en/docs/http/ngx_http_upstream_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_upstream_module.html</a></p><table><thead><tr><th>\u8C03\u5EA6\u7B97\u6CD5</th><th>\u6982\u8FF0</th><th>\u7B80\u79F0</th></tr></thead><tbody><tr><td>\u8F6E\u8BE2</td><td>\u6309\u65F6\u95F4\u987A\u5E8F\u9010\u4E00\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF08\u9ED8\u8BA4\uFF09\u4E0D\u8003\u8651\u5B9E\u9645\u8D1F\u8F7D\u6216\u5B9E\u9645\u914D\u7F6E\uFF0C\u6240\u6709\u670D\u52A1\u5668\u90FD\u662F\u5E73\u7B49\uFF0C\u5E73\u5747\u8D1F\u8F7D\u8BF7\u6C42</td><td>rr</td></tr><tr><td>weight</td><td>\u52A0\u6743\u8F6E\u8BE2\uFF0Cweight\u503C\u8D8A\u5927\uFF0C\u5206\u914D\u5230\u7684\u8BBF\u95EE\u51E0\u7387\u8D8A\u9AD8</td><td>wrr</td></tr><tr><td>ip_hash</td><td>\u6BCF\u4E2A\u8BF7\u6C42\u6309\u8BBF\u95EEIP\u7684hash\u7ED3\u679C\u5206\u914D\uFF0C\u8FD9\u6837\u6765\u81EA\u540C\u4E00IP\u7684\u5BA2\u6237\u7AEF\u56FA\u5B9A\u4F1A\u8BBF\u95EE\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668</td><td>-</td></tr><tr><td>url_hash</td><td>\u6309\u7167\u8BBF\u95EEURL\u7684hash\u7ED3\u679C\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u6BCF\u6B21\u76F8\u540C\u7684URL\u90FD\u4F1A\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668</td><td>-</td></tr><tr><td>consistent_hash</td><td>\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5\uFF0C\u9700\u8981\u989D\u5916\u7684\u6A21\u5757\u5305</td><td>-</td></tr><tr><td>least_conn</td><td>\u6700\u5C11\u8FDE\u63A5\u6570\uFF0C\u90A3\u4E2A\u673A\u5668\u8FDE\u63A5\u6570\u5C11\u5C31\u5206\u53D1</td><td>lc</td></tr><tr><td>wlc</td><td>\u52A0\u6743\u6700\u5C0F\u8FDE\u63A5</td><td>wlc</td></tr></tbody></table><p>\u90E8\u5206\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># rr \u4E0E wrr</span></span>
<span class="line"><span style="color:#DBD7CA;">upstream web_lb </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.20:80 weight=5</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.30:80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.40:80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># ip_hash\uFF0C\u6CE8\u610Fip_hash\u4E0D\u80FD\u4E0E\u8F6E\u8BE2\u6216\u8005\u52A0\u6743\u8F6E\u8BE2\u5171\u540C\u4F7F\u7528</span></span>
<span class="line"><span style="color:#DBD7CA;">upstream web_lb </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        ip_hash</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.20:80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.30:80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        server 172.16.1.40:80</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># consistent_hash</span></span>
<span class="line"><span style="color:#DBD7CA;">upstream somestream </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  consistent_hash </span><span style="color:#858585;">$</span><span style="color:#B8A965;">request_uri</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">  server 10.50.1.3:11211</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">  server 10.50.1.4:11211</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">  server 10.50.1.5:11211</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># rr \u4E0E wrr</span></span>
<span class="line"><span style="color:#393A34;">upstream web_lb </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.20:80 weight=5</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.30:80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.40:80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># ip_hash\uFF0C\u6CE8\u610Fip_hash\u4E0D\u80FD\u4E0E\u8F6E\u8BE2\u6216\u8005\u52A0\u6743\u8F6E\u8BE2\u5171\u540C\u4F7F\u7528</span></span>
<span class="line"><span style="color:#393A34;">upstream web_lb </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        ip_hash</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.20:80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.30:80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        server 172.16.1.40:80</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># consistent_hash</span></span>
<span class="line"><span style="color:#393A34;">upstream somestream </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  consistent_hash </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">request_uri</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">  server 10.50.1.3:11211</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">  server 10.50.1.4:11211</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">  server 10.50.1.5:11211</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6269\u5C55-\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5" tabindex="-1">\u6269\u5C55(\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5) <a class="header-anchor" href="#\u6269\u5C55-\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u200B \u4E00\u81F4\u6027hash\u7528\u4E8E\u5BF9hash\u7B97\u6CD5\u7684\u6539\u8FDB\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u5728\u914D\u7F6E\u7684server\u7684\u6570\u91CF\u53D1\u751F\u53D8\u5316\u540E\uFF0C\u540C\u4E00\u4E2Aupstream server\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4F1A\u7684\u6570\u91CF\u548Cserver\u6570\u91CF\u53D8\u5316\u4E4B\u95F4\u4F1A\u6709\u53D8\u5316\u3002\u5C24\u5176\u662F\u5728\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E\u7684upstream server\u6570\u91CF\u53D1\u751F\u589E\u957F\u540E\uFF0C\u9020\u6210\u4EA7\u751F\u7684\u8BF7\u6C42\u53EF\u80FD\u4F1A\u5728\u540E\u7AEF\u7684upstream server\u4E2D\u5E76\u4E0D\u5747\u5300\uFF0C\u6709\u7684upstream server\u8D1F\u8F7D\u5F88\u4F4E\uFF0C\u6709\u7684upstream server\u8D1F\u8F7D\u8F83\u9AD8\uFF0C\u8FD9\u6837\u7684\u8D1F\u8F7D\u5747\u8861\u7684\u6548\u679C\u6BD4\u8F83\u5DEE\uFF0C\u53EF\u80FD\u5BF9upstream server\u9020\u6210\u4E0D\u826F\u7684\u5F71\u54CD\u3002\u7531\u6B64\uFF0C\u4EA7\u751F\u4E86\u4E00\u81F4\u6027hash\u7B97\u6CD5\u6765\u5747\u8861\u3002</p><p>\u2139\uFE0F \u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u8003:<a href="https://baike.baidu.com/item/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C/2460889?fr=aladdin" target="_blank" rel="noopener noreferrer">https://baike.baidu.com/item/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C/2460889?fr=aladdin</a></p><p>\u5728 nginx \u4E2D\u7684\u5E94\u7528:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">upstream backend_server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#E0A569;">hash</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">request_uri</span><span style="color:#DBD7CA;"> consistent</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u589E\u52A0\`consistent\`\u5373\u53EF</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">upstream backend_server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#B58451;">hash</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">request_uri</span><span style="color:#393A34;"> consistent</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u589E\u52A0\`consistent\`\u5373\u53EF</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>ngx_http_upstream_module:<a href="http://nginx.org/en/docs/http/ngx_http_upstream_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_upstream_module.html</a></li><li>upstream-keepalive:<a href="http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive</a></li><li>ngx_stream_core_module:<a href="http://nginx.org/en/docs/stream/ngx_stream_core_module.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/docs/stream/ngx_stream_core_module.html</a></li><li>ngx_stream_upstream_modulehttp://nginx.org/en/docs/stream/ngx_stream_upstream_module.html</li><li>\u4E00\u81F4\u6027\u54C8\u5E0C:<a href="https://baike.baidu.com/item/%E4%B8%80%E8%87%B4%E6%80%A7%E5%93%88%E5%B8%8C/2460889?fr=aladdin" target="_blank" rel="noopener noreferrer">https://baike.baidu.com/item/\u4E00\u81F4\u6027\u54C8\u5E0C/2460889?fr=aladdin</a></li></ul>`,25),o=[e];function c(r,t,y,i,d,A){return n(),a("div",null,o)}var _=s(l,[["render",c]]);export{D as __pageData,_ as default};
