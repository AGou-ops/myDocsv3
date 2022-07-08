import{_ as s,o as a,c as n,a as e}from"./app.1e6146c3.js";const A=JSON.parse('{"title":"Docker\u4E2D\u76F4\u63A5\u90E8\u7F72\u4E09\u8282\u70B9es","description":"","frontmatter":{},"headers":[],"relativePath":"CloudNative/ELFK/ES Docker\u4E09\u8282\u70B9\u90E8\u7F72.md","lastUpdated":1657272051000}'),l={name:"CloudNative/ELFK/ES Docker\u4E09\u8282\u70B9\u90E8\u7F72.md"},p=e(`<h1 id="docker\u4E2D\u76F4\u63A5\u90E8\u7F72\u4E09\u8282\u70B9es" tabindex="-1">Docker\u4E2D\u76F4\u63A5\u90E8\u7F72\u4E09\u8282\u70B9es <a class="header-anchor" href="#docker\u4E2D\u76F4\u63A5\u90E8\u7F72\u4E09\u8282\u70B9es" aria-hidden="true">#</a></h1><p>\u4EE5\u4E0B\u4EC5\u8BB0\u5F55\u5173\u952E\u6B65\u9AA4\uFF1A</p><h4 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1">\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker pull elasticsearch:7.7.1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker pull elasticsearch:7.7.1</span></span>
<span class="line"></span></code></pre></div><h4 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h4><p><code>elasticsearch.yml</code>\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># bin/elasticsearch-certutil ca -out certs/elastic-certificates.p12 -pass &quot;&quot;</span></span>
<span class="line"><span style="color:#758575;">#\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.name: es-cluster</span></span>
<span class="line"><span style="color:#DBD7CA;">node.name: es01</span></span>
<span class="line"><span style="color:#DBD7CA;">node.master: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">node.data: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">network.host: 0.0.0.0</span></span>
<span class="line"><span style="color:#DBD7CA;">network.publish_host: 172.26.127.100</span></span>
<span class="line"><span style="color:#DBD7CA;">http.port: 9200</span></span>
<span class="line"><span style="color:#DBD7CA;">transport.tcp.port: 9300</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.seed_hosts: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;172.26.127.100&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;172.26.127.96&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;172.26.127.99&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.initial_master_nodes: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;172.26.127.100&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;172.26.127.96&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;172.26.127.99&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.allow-origin: </span><span style="color:#C98A7D;">&quot;*&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">xpack.security.enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">xpack.security.transport.ssl.enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">xpack.security.transport.ssl.verification_mode: certificate </span></span>
<span class="line"><span style="color:#DBD7CA;">xpack.security.transport.ssl.keystore.path: elastic-certificates.p12 </span></span>
<span class="line"><span style="color:#DBD7CA;">xpack.security.transport.ssl.truststore.path: elastic-certificates.p12 </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># bin/elasticsearch-certutil ca -out certs/elastic-certificates.p12 -pass &quot;&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">cluster.name: es-cluster</span></span>
<span class="line"><span style="color:#393A34;">node.name: es01</span></span>
<span class="line"><span style="color:#393A34;">node.master: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">node.data: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">network.host: 0.0.0.0</span></span>
<span class="line"><span style="color:#393A34;">network.publish_host: 172.26.127.100</span></span>
<span class="line"><span style="color:#393A34;">http.port: 9200</span></span>
<span class="line"><span style="color:#393A34;">transport.tcp.port: 9300</span></span>
<span class="line"><span style="color:#393A34;">discovery.seed_hosts: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;172.26.127.100&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;172.26.127.96&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;172.26.127.99&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">cluster.initial_master_nodes: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;172.26.127.100&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;172.26.127.96&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;172.26.127.99&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">http.cors.enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">http.cors.allow-origin: </span><span style="color:#B56959;">&quot;*&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">xpack.security.enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">xpack.security.transport.ssl.enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">xpack.security.transport.ssl.verification_mode: certificate </span></span>
<span class="line"><span style="color:#393A34;">xpack.security.transport.ssl.keystore.path: elastic-certificates.p12 </span></span>
<span class="line"><span style="color:#393A34;">xpack.security.transport.ssl.truststore.path: elastic-certificates.p12 </span></span>
<span class="line"></span></code></pre></div><p>\u5404\u8282\u70B9\u4E4B\u95F4\u914D\u7F6E\u6587\u4EF6\u57FA\u672C\u76F8\u540C\uFF0C\u4E0D\u540C\u4E4B\u5904\u5C31\u662F<code>node.name</code>\u9700\u8981\u5728\u96C6\u7FA4\u5185\u662F\u552F\u4E00\u7684\u3002</p><h4 id="\u542F\u52A8\u5BB9\u5668" tabindex="-1">\u542F\u52A8\u5BB9\u5668 <a class="header-anchor" href="#\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a></h4><p>\u4F7F\u7528\u8BC1\u4E66\u6765\u4FDD\u8BC1\u5404\u8282\u70B9\u4E4B\u95F4\u7684\u5B89\u5168\u4EA4\u6D41\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u7684\u5BB9\u5668\uFF0C\u8FDB\u5165\u5230\u91CC\u9762\uFF0C\u751F\u6210\u8BC1\u4E66\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">bin/elasticsearch-certutil ca -out certs/elastic-certificates.p12 -pass </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u7684\u5BB9\u5668\uFF0C\u8FDB\u5165\u5230\u91CC\u9762\uFF0C\u751F\u6210\u8BC1\u4E66\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">bin/elasticsearch-certutil ca -out certs/elastic-certificates.p12 -pass </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u5404\u8282\u70B9\u4E2D\u542F\u52A8es\uFF08\u5E76\u6302\u8F7D\u4E0A\u9762\u5199\u597D\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u548C\u7528\u4E8E\u4E3B\u673A\u4E4B\u95F4\u7684\u5B89\u5168\u8BC1\u4E66\u6587\u4EF6\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run --name elasticsearch -p 9200:9200 -p 9300:9300    \\</span></span>
<span class="line"><span style="color:#DBD7CA;">--privileged=true   \\</span></span>
<span class="line"><span style="color:#DBD7CA;">--hostname elasticsearch  \\</span></span>
<span class="line"><span style="color:#DBD7CA;">--restart=on-failure:3   \\</span></span>
<span class="line"><span style="color:#DBD7CA;">-e ES_JAVA_OPTS=</span><span style="color:#C98A7D;">&quot;-Xms2g -Xmx2g&quot;</span><span style="color:#DBD7CA;">    \\</span></span>
<span class="line"><span style="color:#DBD7CA;">-v /root/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml   \\</span></span>
<span class="line"><span style="color:#DBD7CA;">-v /root/elasticsearch/config/elastic-certificates.p12:/usr/share/elasticsearch/config/elastic-certificates.p12   \\</span></span>
<span class="line"><span style="color:#DBD7CA;">-v /root/elasticsearch/data:/usr/share/elasticsearch/data   \\</span></span>
<span class="line"><span style="color:#DBD7CA;">-v /root/elasticsearch/plugins:/usr/share/elasticsearch/plugins   \\</span></span>
<span class="line"><span style="color:#DBD7CA;">-d elasticsearch:7.7.1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run --name elasticsearch -p 9200:9200 -p 9300:9300    \\</span></span>
<span class="line"><span style="color:#393A34;">--privileged=true   \\</span></span>
<span class="line"><span style="color:#393A34;">--hostname elasticsearch  \\</span></span>
<span class="line"><span style="color:#393A34;">--restart=on-failure:3   \\</span></span>
<span class="line"><span style="color:#393A34;">-e ES_JAVA_OPTS=</span><span style="color:#B56959;">&quot;-Xms2g -Xmx2g&quot;</span><span style="color:#393A34;">    \\</span></span>
<span class="line"><span style="color:#393A34;">-v /root/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml   \\</span></span>
<span class="line"><span style="color:#393A34;">-v /root/elasticsearch/config/elastic-certificates.p12:/usr/share/elasticsearch/config/elastic-certificates.p12   \\</span></span>
<span class="line"><span style="color:#393A34;">-v /root/elasticsearch/data:/usr/share/elasticsearch/data   \\</span></span>
<span class="line"><span style="color:#393A34;">-v /root/elasticsearch/plugins:/usr/share/elasticsearch/plugins   \\</span></span>
<span class="line"><span style="color:#393A34;">-d elasticsearch:7.7.1</span></span>
<span class="line"></span></code></pre></div><p>\u8FDB\u5165\u4EFB\u4E00\u8282\u70B9\u4E2D\uFF0C\u751F\u6210\u76F8\u5173\u7684\u5BC6\u7801\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u624B\u52A8\u8BBE\u7F6E\u5BC6\u7801</span></span>
<span class="line"><span style="color:#DBD7CA;">bin/elasticsearch-setup-passwords interactive</span></span>
<span class="line"><span style="color:#758575;"># \u81EA\u52A8\u751F\u6210\u5BC6\u7801</span></span>
<span class="line"><span style="color:#DBD7CA;">bin/elasticsearch-setup-passwords auto </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u624B\u52A8\u8BBE\u7F6E\u5BC6\u7801</span></span>
<span class="line"><span style="color:#393A34;">bin/elasticsearch-setup-passwords interactive</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u81EA\u52A8\u751F\u6210\u5BC6\u7801</span></span>
<span class="line"><span style="color:#393A34;">bin/elasticsearch-setup-passwords auto </span></span>
<span class="line"></span></code></pre></div><h4 id="\u68C0\u67E5es\u96C6\u7FA4-\u8282\u70B9\u72B6\u6001" tabindex="-1">\u68C0\u67E5es\u96C6\u7FA4/\u8282\u70B9\u72B6\u6001 <a class="header-anchor" href="#\u68C0\u67E5es\u96C6\u7FA4-\u8282\u70B9\u72B6\u6001" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">curl -XGET http://172.26.127.100:9200/_cat/health</span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">curl -XGET http://172.26.127.100:9200/_cluster/health</span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">pretty</span></span>
<span class="line"><span style="color:#DBD7CA;">curl -XGET http://172.26.127.100:9200/_cat/nodes</span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">v</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">curl -XGET http://172.26.127.100:9200/_cat/health</span><span style="color:#AB5959;">?</span><span style="color:#393A34;">v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">curl -XGET http://172.26.127.100:9200/_cluster/health</span><span style="color:#AB5959;">?</span><span style="color:#393A34;">pretty</span></span>
<span class="line"><span style="color:#393A34;">curl -XGET http://172.26.127.100:9200/_cat/nodes</span><span style="color:#AB5959;">?</span><span style="color:#393A34;">v</span></span>
<span class="line"></span></code></pre></div>`,17),c=[p];function o(t,r,i,y,d,u){return a(),n("div",null,c)}var D=s(l,[["render",o]]);export{A as __pageData,D as default};
