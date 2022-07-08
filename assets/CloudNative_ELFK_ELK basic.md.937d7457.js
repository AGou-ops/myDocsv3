import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"ELK basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"ES \u96C6\u7FA4\u90E8\u7F72","slug":"es-\u96C6\u7FA4\u90E8\u7F72"},{"level":2,"title":"Logstash","slug":"logstash"},{"level":2,"title":"Kibana","slug":"kibana"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"},{"level":2,"title":"\u9644\uFF1Aes \u73AF\u5883\u811A\u672C","slug":"\u9644\uFF1Aes-\u73AF\u5883\u811A\u672C"}],"relativePath":"CloudNative/ELFK/ELK basic.md","lastUpdated":1657272051000}'),p={name:"CloudNative/ELFK/ELK basic.md"},o=l(`<h1 id="elk-basic" tabindex="-1">ELK basic <a class="header-anchor" href="#elk-basic" aria-hidden="true">#</a></h1><h2 id="es-\u96C6\u7FA4\u90E8\u7F72" tabindex="-1">ES \u96C6\u7FA4\u90E8\u7F72 <a class="header-anchor" href="#es-\u96C6\u7FA4\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u73AF\u5883\uFF1A</p><table><thead><tr><th>\u89D2\u8272</th><th>\u4E3B\u673A\u3001IP</th></tr></thead><tbody><tr><td>es-01</td><td>172.16.1.128</td></tr><tr><td>es-02</td><td>172.16.1.134</td></tr><tr><td>es-03</td><td>172.16.1.136</td></tr></tbody></table><p><code>ES</code>\u542F\u52A8\u65F6\u4E0D\u5141\u8BB8<code>root</code>\u7528\u6237\u8FD0\u884C\uFF0C\u6240\u4EE5\u5728\u90E8\u7F72\u4E4B\u524D\u5355\u72EC\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\uFF0C\u7528\u6765\u4E13\u95E8\u7BA1\u7406<code>es</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">useradd esuser</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 123 </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> passwd --stdin esuser</span></span>
<span class="line"><span style="color:#758575;"># \u5C06 esuser \u7528\u6237\u6DFB\u52A0\u8FDB\u65E0\u5BC6\u7801sudoers</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;esuser ALL = (root) NOPASSWD:ALL&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> tee /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#DBD7CA;">chmod 0440 /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#758575;"># \u4E3A\u4E4B\u540E\u7684es\u6570\u636E\u548C\u65E5\u5FD7\u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /es/data -pv</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /es/logs</span></span>
<span class="line"><span style="color:#DBD7CA;">chown -R esuser:esuser /es</span></span>
<span class="line"><span style="color:#DBD7CA;">chown -R esuser:esuser /usr/local/elasticsearch-7.7.1/</span></span>
<span class="line"><span style="color:#758575;"># ------ \u5207\u6362\u5230 esuser \u7528\u6237\uFF0C\u4E0B\u9762\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4F7F\u7528 esuser \u7528\u6237</span></span>
<span class="line"><span style="color:#DBD7CA;">su esuser</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">useradd esuser</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 123 </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> passwd --stdin esuser</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 esuser \u7528\u6237\u6DFB\u52A0\u8FDB\u65E0\u5BC6\u7801sudoers</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;esuser ALL = (root) NOPASSWD:ALL&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> tee /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#393A34;">chmod 0440 /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E3A\u4E4B\u540E\u7684es\u6570\u636E\u548C\u65E5\u5FD7\u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">mkdir /es/data -pv</span></span>
<span class="line"><span style="color:#393A34;">mkdir /es/logs</span></span>
<span class="line"><span style="color:#393A34;">chown -R esuser:esuser /es</span></span>
<span class="line"><span style="color:#393A34;">chown -R esuser:esuser /usr/local/elasticsearch-7.7.1/</span></span>
<span class="line"><span style="color:#A0ADA0;"># ------ \u5207\u6362\u5230 esuser \u7528\u6237\uFF0C\u4E0B\u9762\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4F7F\u7528 esuser \u7528\u6237</span></span>
<span class="line"><span style="color:#393A34;">su esuser</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5<code>ES</code>\u4E4B\u524D\uFF0C\u9700\u8981\u5B89\u88C5<code>JDK</code>\uFF0C\u8BE5\u6B65\u9AA4\u5728\u6B64\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002</p><p>\u4ECE\u5B98\u65B9\u7AD9\u70B9\u4E0B\u8F7D<code>ES</code>\u7684\u538B\u7F29\u5305\uFF0C \u5E76\u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55\u5F53\u4E2D\u53BB\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">tar xf elasticsearch-7.7.1-linux-x86_64.tar.gz -C /usr/local</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /usr/local/elasticsearch-7.7.1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">tar xf elasticsearch-7.7.1-linux-x86_64.tar.gz -C /usr/local</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /usr/local/elasticsearch-7.7.1</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6<code>config/elasticsearch.yml</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># vim config/elasticsearch.yml</span></span>
<span class="line"><span style="color:#758575;"># \u96C6\u7FA4\u540D\u79F0\uFF0C\u9ED8\u8BA4\u662Felasticsearch\uFF0C\u901A\u8FC7\u7EC4\u64AD\u7684\u65B9\u5F0F\u901A\u4FE1\uFF0C\u901A\u8FC7\u540D\u79F0\u5224\u65AD\u5C5E\u4E8E\u54EA\u4E2A\u96C6\u7FA4</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.name: es-cluster</span></span>
<span class="line"><span style="color:#758575;"># \u662F\u5426\u53EF\u4EE5\u6210\u4E3Amaster\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">node.master: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#758575;"># \u662F\u5426\u5141\u8BB8\u8BE5\u8282\u70B9\u5B58\u50A8\u6570\u636E,\u9ED8\u8BA4\u5F00\u542F</span></span>
<span class="line"><span style="color:#DBD7CA;">node.data: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#758575;"># \u8282\u70B9\u540D\u79F0\uFF0C\u8981\u552F\u4E00</span></span>
<span class="line"><span style="color:#DBD7CA;">node.name: es-01</span></span>
<span class="line"><span style="color:#758575;"># \u6570\u636E\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">path.data: /es/data</span></span>
<span class="line"><span style="color:#758575;"># \u65E5\u5FD7\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">path.logs: /es/logs</span></span>
<span class="line"><span style="color:#758575;"># \u7F51\u7EDC\u7ED1\u5B9A,\u8FD9\u91CC\u6211\u7ED1\u5B9A 0.0.0.0,\u652F\u6301\u5916\u7F51\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#DBD7CA;">network.host: 0.0.0.0</span></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E\u5BF9\u5916\u670D\u52A1\u7684http\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A9200</span></span>
<span class="line"><span style="color:#DBD7CA;">http.port: 9200</span></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E\u8282\u70B9\u95F4\u4EA4\u4E92\u7684tcp\u7AEF\u53E3,\u9ED8\u8BA4\u662F9300</span></span>
<span class="line"><span style="color:#DBD7CA;">transport.tcp.port: 9300</span></span>
<span class="line"><span style="color:#758575;"># \u96C6\u7FA4\u6700\u5C11master\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.minimum_master_nodes: 2</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.ping_timeout: 3s</span></span>
<span class="line"><span style="color:#758575;"># \u521D\u59CB\u5316\u65F6\u53EF\u8FDB\u884C\u9009\u4E3E\u7684\u8282\u70B9\uFF0C\u4E0D\u586B\u7AEF\u53E3\u9ED8\u8BA4\u4E3A9300</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.ping.unicast.hosts: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;es-01&quot;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&quot;es-02&quot;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&quot;es-03&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#758575;"># \u652F\u6301\u8DE8\u57DF\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.allow-origin: </span><span style="color:#C98A7D;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#758575;"># Bootstrap the cluster using an initial set of master-eligible nodes:</span></span>
<span class="line"><span style="color:#758575;"># \u624B\u52A8\u6307\u5B9A\u53EF\u521D\u59CB\u5316\u7684master\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.initial_master_nodes: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;es-01&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># vim config/elasticsearch.yml</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u96C6\u7FA4\u540D\u79F0\uFF0C\u9ED8\u8BA4\u662Felasticsearch\uFF0C\u901A\u8FC7\u7EC4\u64AD\u7684\u65B9\u5F0F\u901A\u4FE1\uFF0C\u901A\u8FC7\u540D\u79F0\u5224\u65AD\u5C5E\u4E8E\u54EA\u4E2A\u96C6\u7FA4</span></span>
<span class="line"><span style="color:#393A34;">cluster.name: es-cluster</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u662F\u5426\u53EF\u4EE5\u6210\u4E3Amaster\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">node.master: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u662F\u5426\u5141\u8BB8\u8BE5\u8282\u70B9\u5B58\u50A8\u6570\u636E,\u9ED8\u8BA4\u5F00\u542F</span></span>
<span class="line"><span style="color:#393A34;">node.data: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8282\u70B9\u540D\u79F0\uFF0C\u8981\u552F\u4E00</span></span>
<span class="line"><span style="color:#393A34;">node.name: es-01</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6570\u636E\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">path.data: /es/data</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u65E5\u5FD7\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">path.logs: /es/logs</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F51\u7EDC\u7ED1\u5B9A,\u8FD9\u91CC\u6211\u7ED1\u5B9A 0.0.0.0,\u652F\u6301\u5916\u7F51\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#393A34;">network.host: 0.0.0.0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u5BF9\u5916\u670D\u52A1\u7684http\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A9200</span></span>
<span class="line"><span style="color:#393A34;">http.port: 9200</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u8282\u70B9\u95F4\u4EA4\u4E92\u7684tcp\u7AEF\u53E3,\u9ED8\u8BA4\u662F9300</span></span>
<span class="line"><span style="color:#393A34;">transport.tcp.port: 9300</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u96C6\u7FA4\u6700\u5C11master\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.minimum_master_nodes: 2</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.ping_timeout: 3s</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521D\u59CB\u5316\u65F6\u53EF\u8FDB\u884C\u9009\u4E3E\u7684\u8282\u70B9\uFF0C\u4E0D\u586B\u7AEF\u53E3\u9ED8\u8BA4\u4E3A9300</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.ping.unicast.hosts: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;es-01&quot;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&quot;es-02&quot;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&quot;es-03&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u652F\u6301\u8DE8\u57DF\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#393A34;">http.cors.enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">http.cors.allow-origin: </span><span style="color:#B56959;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># Bootstrap the cluster using an initial set of master-eligible nodes:</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u624B\u52A8\u6307\u5B9A\u53EF\u521D\u59CB\u5316\u7684master\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">cluster.initial_master_nodes: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;es-01&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u5B8C\u914D\u7F6E\u6587\u4EF6\u4E4B\u540E\uFF0C\u542F\u52A8<code>es</code>\u8282\u70B9\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">bin/elasticsearch -d</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">bin/elasticsearch -d</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u26A0\uFE0F\u542F\u52A8\u65F6\u53EF\u80FD\u62A5\u51FA\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">1</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: max file descriptors </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4096</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> elasticsearch process is too low, increase to at least </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">65535</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">2</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: max virtual memory areas vm.max_map_count </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">65530</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> is too low, increase to at least </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">262144</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">max file descriptors </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4096</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> elasticsearch process is too low, increase to at least </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">65535</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">1</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: max file descriptors </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4096</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> elasticsearch process is too low, increase to at least </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">65535</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">2</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: max virtual memory areas vm.max_map_count </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">65530</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> is too low, increase to at least </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">262144</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">max file descriptors </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4096</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> elasticsearch process is too low, increase to at least </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">65535</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo vim /etc/security/limits.conf</span></span>
<span class="line"><span style="color:#758575;"># ----- \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9 ------</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> soft nofile 65536</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> hard nofile 65536</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> soft nproc 4096</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> hard nproc 4096</span></span>
<span class="line"><span style="color:#758575;"># -------------------------</span></span>
<span class="line"><span style="color:#758575;"># \u53EF\u4EE5\u4F7F\u7528 \`ulimit -Hn\` \u547D\u4EE4\u8FDB\u884C\u67E5\u770B</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;vm.max_map_count=262144&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> sysctl -p</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo vim /etc/security/limits.conf</span></span>
<span class="line"><span style="color:#A0ADA0;"># ----- \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9 ------</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;"> soft nofile 65536</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;"> hard nofile 65536</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;"> soft nproc 4096</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;"> hard nproc 4096</span></span>
<span class="line"><span style="color:#A0ADA0;"># -------------------------</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EF\u4EE5\u4F7F\u7528 \`ulimit -Hn\` \u547D\u4EE4\u8FDB\u884C\u67E5\u770B</span></span>
<span class="line"><span style="color:#393A34;">sudo </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;vm.max_map_count=262144&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> sysctl -p</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u91CD\u65B0\u6253\u5F00\u5F53\u524D\u7EC8\u7AEF\u4F7F\u5176\u751F\u6548\u3002</p></blockquote><p>\u6D4B\u8BD5<code>es</code>\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684<code>HTTP</code>\u7AEF\u53E3\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@es-01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> curl es-01:9200</span></span>
<span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">&quot;name&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;es-01&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">&quot;cluster_name&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;es-cluster&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">&quot;cluster_uuid&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;B6--eo9YQC62LNyo0JiLIw&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">&quot;version&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;number&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;7.7.1&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;build_flavor&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;default&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;build_type&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;tar&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;build_hash&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;ad56dce891c901a492bb1ee393f12dfff473a423&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;build_date&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;2020-05-28T16:30:01.040088Z&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;build_snapshot&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> false,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;lucene_version&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;8.5.1&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;minimum_wire_compatibility_version&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;6.8.0&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;minimum_index_compatibility_version&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;6.0.0-beta1&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">&quot;tagline&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;You Know, for Search&quot;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@es-01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> curl es-01:9200</span></span>
<span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">&quot;name&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;es-01&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">&quot;cluster_name&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;es-cluster&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">&quot;cluster_uuid&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;B6--eo9YQC62LNyo0JiLIw&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">&quot;version&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;number&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;7.7.1&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;build_flavor&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;default&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;build_type&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;tar&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;build_hash&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;ad56dce891c901a492bb1ee393f12dfff473a423&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;build_date&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;2020-05-28T16:30:01.040088Z&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;build_snapshot&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> false,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;lucene_version&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;8.5.1&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;minimum_wire_compatibility_version&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;6.8.0&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;minimum_index_compatibility_version&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;6.0.0-beta1&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">&quot;tagline&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;You Know, for Search&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u914D\u7F6E\u6587\u4EF6\u590D\u5236\u5230\u5176\u4ED6\u8282\u70B9\u4E0A\u53BB\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">scp conf/elasticsearch.yml es-02:/usr/local/elasticsearch-7.7.1/conf</span></span>
<span class="line"><span style="color:#DBD7CA;">scp conf/elasticsearch.yml es-03:/usr/local/elasticsearch-7.7.1/conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">scp conf/elasticsearch.yml es-02:/usr/local/elasticsearch-7.7.1/conf</span></span>
<span class="line"><span style="color:#393A34;">scp conf/elasticsearch.yml es-03:/usr/local/elasticsearch-7.7.1/conf</span></span>
<span class="line"></span></code></pre></div><p>\u540C\u6837\uFF0C\u5728\u5176\u4ED6\u8282\u70B9\u4E0A\uFF0C\u8FDB\u884C\u4E0E\u4E4B\u524D\u76F8\u540C\u7684\u64CD\u4F5C\uFF0C\u552F\u4E00\u9700\u8981\u4FEE\u6539\u7684\u5C31\u662F\u5176\u914D\u7F6E\u6587\u4EF6\u7684<code>node.name</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">vim config/elasticsearch.yml</span></span>
<span class="line"><span style="color:#758575;"># --------- es-02 ---------</span></span>
<span class="line"><span style="color:#DBD7CA;">node.name: es-02</span></span>
<span class="line"><span style="color:#758575;"># --------- es-03 ---------</span></span>
<span class="line"><span style="color:#DBD7CA;">node.name: es-03</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">vim config/elasticsearch.yml</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------- es-02 ---------</span></span>
<span class="line"><span style="color:#393A34;">node.name: es-02</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------- es-03 ---------</span></span>
<span class="line"><span style="color:#393A34;">node.name: es-03</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\uFF0C\u542F\u52A8\u5404\u8282\u70B9\u7684<code>ES</code>\u670D\u52A1\uFF1A<code>bin/elasticsearch -d</code></p><h2 id="logstash" tabindex="-1">Logstash <a class="header-anchor" href="#logstash" aria-hidden="true">#</a></h2><p>logstash \u540C\u6837\u4F9D\u8D56\u4E8E<code>JDK</code>\u73AF\u5883\uFF0C\u9700\u8981\u63D0\u524D\u5B89\u88C5\u3002</p><p>\u4ECE\u5B98\u65B9\u7AD9\u70B9\u4E0B\u8F7D logstash \u7684\u538B\u7F29\u5305\uFF0C\u5E76\u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">tar xf logstash-7.7.1-linux-x86_64.tar.gz -C /usr/local</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /usr/local/logstash-7.7.1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">tar xf logstash-7.7.1-linux-x86_64.tar.gz -C /usr/local</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /usr/local/logstash-7.7.1</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8<code>logstash</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5FEB\u901F\u542F\u52A8\u6D4B\u8BD5\uFF0C\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u4F5C\u4E3Ainput\u548Coutput</span></span>
<span class="line"><span style="color:#DBD7CA;">bin/logstash -e </span><span style="color:#C98A7D;">&#39;input { stdin {} } output { stdout {} }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> \u5E38\u7528\u542F\u52A8\u53C2\u6570\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#C98A7D;">\`-e\`</span><span style="color:#DBD7CA;">: \u7ACB\u5373\u6267\u884C\uFF0C\u4F7F\u7528\u547D\u4EE4\u884C\u91CC\u7684\u914D\u7F6E\u53C2\u6570\u542F\u52A8\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#C98A7D;">\`-f\`</span><span style="color:#DBD7CA;">: \u6307\u5B9A\u542F\u52A8\u5B9E\u4F8B\u7684\u914D\u7F6E\u6587\u4EF6	</span></span>
<span class="line"><span style="color:#C98A7D;">\`-t\`</span><span style="color:#DBD7CA;">: \u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u7684\u6B63\u786E\u6027	</span></span>
<span class="line"><span style="color:#C98A7D;">\`-l\`</span><span style="color:#DBD7CA;">: \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u540D\u79F0	</span></span>
<span class="line"><span style="color:#C98A7D;">\`-w\`</span><span style="color:#DBD7CA;">: \u6307\u5B9Afilter\u7EBF\u7A0B\u6570\u91CF\uFF0C\u9ED8\u8BA4\u7EBF\u7A0B\u6570\u662F5	</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5FEB\u901F\u542F\u52A8\u6D4B\u8BD5\uFF0C\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u4F5C\u4E3Ainput\u548Coutput</span></span>
<span class="line"><span style="color:#393A34;">bin/logstash -e </span><span style="color:#B56959;">&#39;input { stdin {} } output { stdout {} }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;"> \u5E38\u7528\u542F\u52A8\u53C2\u6570\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#B56959;">\`-e\`</span><span style="color:#393A34;">: \u7ACB\u5373\u6267\u884C\uFF0C\u4F7F\u7528\u547D\u4EE4\u884C\u91CC\u7684\u914D\u7F6E\u53C2\u6570\u542F\u52A8\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#B56959;">\`-f\`</span><span style="color:#393A34;">: \u6307\u5B9A\u542F\u52A8\u5B9E\u4F8B\u7684\u914D\u7F6E\u6587\u4EF6	</span></span>
<span class="line"><span style="color:#B56959;">\`-t\`</span><span style="color:#393A34;">: \u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u7684\u6B63\u786E\u6027	</span></span>
<span class="line"><span style="color:#B56959;">\`-l\`</span><span style="color:#393A34;">: \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u540D\u79F0	</span></span>
<span class="line"><span style="color:#B56959;">\`-w\`</span><span style="color:#393A34;">: \u6307\u5B9Afilter\u7EBF\u7A0B\u6570\u91CF\uFF0C\u9ED8\u8BA4\u7EBF\u7A0B\u6570\u662F5	</span></span>
<span class="line"></span></code></pre></div><h2 id="kibana" tabindex="-1">Kibana <a class="header-anchor" href="#kibana" aria-hidden="true">#</a></h2><p>\u4ECE\u5B98\u65B9\u7AD9\u70B9\u4E0B\u8F7D Kibana \u7684\u538B\u7F29\u5305\uFF0C\u5E76\u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> tar xf kibana-7.7.1-linux-x86_64.tar.gz -C /usr/local/</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /usr/local/kibana-7.7.1-linux-x86_64</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> tar xf kibana-7.7.1-linux-x86_64.tar.gz -C /usr/local/</span></span>
<span class="line"><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /usr/local/kibana-7.7.1-linux-x86_64</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8<code>kibana</code>\uFF0C<code>bin/kibana</code></p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u5B98\u65B9\u5747\u63D0\u4F9B\u6709\u5236\u4F5C\u597D\u7684<code>RPM</code>\u3001<code>DEB</code>\u548C\u9002\u7528\u4E8E<code>Windows</code>\u4E0B\u7684\u4E8C\u8FDB\u5236\u5305\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u5B89\u88C5\u4F7F\u7528\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4EE5redhat\u7CFB\u4E3A\u4F8B</span></span>
<span class="line"><span style="color:#DBD7CA;">yum localinstall -y kibana-7.7.1-x86_64.rpm</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4EE5redhat\u7CFB\u4E3A\u4F8B</span></span>
<span class="line"><span style="color:#393A34;">yum localinstall -y kibana-7.7.1-x86_64.rpm</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9644\uFF1Aes-\u73AF\u5883\u811A\u672C" tabindex="-1">\u9644\uFF1Aes \u73AF\u5883\u811A\u672C <a class="header-anchor" href="#\u9644\uFF1Aes-\u73AF\u5883\u811A\u672C" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">useradd esuser</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 123 </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> passwd --stdin esuser</span></span>
<span class="line"><span style="color:#758575;"># \u5C06 esuser \u7528\u6237\u6DFB\u52A0\u8FDB\u65E0\u5BC6\u7801sudoers</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;esuser ALL = (root) NOPASSWD:ALL&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> tee /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#DBD7CA;">chmod 0440 /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#758575;"># \u4E3A\u4E4B\u540E\u7684es\u6570\u636E\u548C\u65E5\u5FD7\u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /es/data -pv</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /es/logs</span></span>
<span class="line"><span style="color:#DBD7CA;">chown -R esuser:esuser /es</span></span>
<span class="line"><span style="color:#DBD7CA;">chown -R esuser:esuser /usr/local/elasticsearch-7.7.1/</span></span>
<span class="line"><span style="color:#758575;"># ------ \u5207\u6362\u5230 esuser \u7528\u6237\uFF0C\u4E0B\u9762\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4F7F\u7528 esuser \u7528\u6237</span></span>
<span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#C98A7D;"> </span><span style="color:#4D9375;">EOF</span><span style="color:#C98A7D;"> &gt;&gt; /etc/security/limits.conf</span></span>
<span class="line"><span style="color:#C98A7D;">* soft nofile 65536</span></span>
<span class="line"><span style="color:#C98A7D;">* hard nofile 65536</span></span>
<span class="line"><span style="color:#C98A7D;">* soft nproc 4096</span></span>
<span class="line"><span style="color:#C98A7D;">* hard nproc 4096</span></span>
<span class="line"><span style="color:#4D9375;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">sudo </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;vm.max_map_count=262144&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> sysctl -p</span></span>
<span class="line"><span style="color:#DBD7CA;">su - esuser</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">useradd esuser</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 123 </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> passwd --stdin esuser</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 esuser \u7528\u6237\u6DFB\u52A0\u8FDB\u65E0\u5BC6\u7801sudoers</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;esuser ALL = (root) NOPASSWD:ALL&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> tee /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#393A34;">chmod 0440 /etc/sudoers.d/es</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E3A\u4E4B\u540E\u7684es\u6570\u636E\u548C\u65E5\u5FD7\u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">mkdir /es/data -pv</span></span>
<span class="line"><span style="color:#393A34;">mkdir /es/logs</span></span>
<span class="line"><span style="color:#393A34;">chown -R esuser:esuser /es</span></span>
<span class="line"><span style="color:#393A34;">chown -R esuser:esuser /usr/local/elasticsearch-7.7.1/</span></span>
<span class="line"><span style="color:#A0ADA0;"># ------ \u5207\u6362\u5230 esuser \u7528\u6237\uFF0C\u4E0B\u9762\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4F7F\u7528 esuser \u7528\u6237</span></span>
<span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#B56959;"> </span><span style="color:#1C6B48;">EOF</span><span style="color:#B56959;"> &gt;&gt; /etc/security/limits.conf</span></span>
<span class="line"><span style="color:#B56959;">* soft nofile 65536</span></span>
<span class="line"><span style="color:#B56959;">* hard nofile 65536</span></span>
<span class="line"><span style="color:#B56959;">* soft nproc 4096</span></span>
<span class="line"><span style="color:#B56959;">* hard nproc 4096</span></span>
<span class="line"><span style="color:#1C6B48;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">sudo </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;vm.max_map_count=262144&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> sysctl -p</span></span>
<span class="line"><span style="color:#393A34;">su - esuser</span></span>
<span class="line"></span></code></pre></div>`,36),e=[o];function c(t,r,y,i,A,D){return a(),n("div",null,e)}var B=s(p,[["render",c]]);export{u as __pageData,B as default};
