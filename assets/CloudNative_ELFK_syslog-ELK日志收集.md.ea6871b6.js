import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const A=JSON.parse('{"title":"Syslog + ELK \u65E5\u5FD7\u6536\u96C6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E syslog","slug":"\u914D\u7F6E-syslog"},{"level":2,"title":"\u914D\u7F6ELogstash","slug":"\u914D\u7F6Elogstash"},{"level":2,"title":"\u542F\u52A8\u76F8\u5173\u670D\u52A1","slug":"\u542F\u52A8\u76F8\u5173\u670D\u52A1"},{"level":2,"title":"\u67E5\u770B\u670D\u52A1\u72B6\u6001","slug":"\u67E5\u770B\u670D\u52A1\u72B6\u6001"},{"level":3,"title":"ES \u72B6\u6001","slug":"es-\u72B6\u6001"},{"level":3,"title":"Kibana \u72B6\u6001","slug":"kibana-\u72B6\u6001"}],"relativePath":"CloudNative/ELFK/syslog-ELK\u65E5\u5FD7\u6536\u96C6.md","lastUpdated":1657272051000}'),e={name:"CloudNative/ELFK/syslog-ELK\u65E5\u5FD7\u6536\u96C6.md"},p=l(`<h1 id="syslog-elk-\u65E5\u5FD7\u6536\u96C6" tabindex="-1">Syslog + ELK \u65E5\u5FD7\u6536\u96C6 <a class="header-anchor" href="#syslog-elk-\u65E5\u5FD7\u6536\u96C6" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E-syslog" tabindex="-1">\u914D\u7F6E<code> syslog</code> <a class="header-anchor" href="#\u914D\u7F6E-syslog" aria-hidden="true">#</a></h2><p>\u7F16\u8F91<code>syslog</code>\u7684\u914D\u7F6E\u6587\u4EF6<code>/etc/rsyslog.conf</code>:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">.</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> @@192.168.1.6:514</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;">.</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> @@192.168.1.6:514</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u542F<code>rsyslog</code>:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl restart rsyslog</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl restart rsyslog</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6Elogstash" tabindex="-1">\u914D\u7F6E<code>Logstash</code> <a class="header-anchor" href="#\u914D\u7F6Elogstash" aria-hidden="true">#</a></h2><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># vim /usr/local/logstash-7.7.1/config/syslog2es.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">input {</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">syslog {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">type =&gt; &quot;system-syslog&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">port =&gt; 514</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">output {</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">elasticsearch {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">hosts =&gt; [&quot;192.168.56.12:9200&quot;]</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">index =&gt; &quot;system-syslog-%{+YYYY.MM}&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># vim /usr/local/logstash-7.7.1/config/syslog2es.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">input {</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">syslog {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">type =&gt; &quot;system-syslog&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">port =&gt; 514</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">output {</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">elasticsearch {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">hosts =&gt; [&quot;192.168.56.12:9200&quot;]</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">index =&gt; &quot;system-syslog-%{+YYYY.MM}&quot;</span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u542F\u52A8\u76F8\u5173\u670D\u52A1" tabindex="-1">\u542F\u52A8\u76F8\u5173\u670D\u52A1 <a class="header-anchor" href="#\u542F\u52A8\u76F8\u5173\u670D\u52A1" aria-hidden="true">#</a></h2><p>\u542F\u52A8<code>logstash</code>\u548C<code>es</code>:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># es</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master elasticsearch-7.7.1</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> su esuser</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">esuser@master elasticsearch-7.7.1</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">$ bin/elasticsearch -d</span></span>
<span class="line"><span style="color:#758575;"># logstash</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master logstash-7.7.1</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> bin/logstash -f config/syslog2es.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># es</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master elasticsearch-7.7.1</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> su esuser</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">esuser@master elasticsearch-7.7.1</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">$ bin/elasticsearch -d</span></span>
<span class="line"><span style="color:#A0ADA0;"># logstash</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master logstash-7.7.1</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> bin/logstash -f config/syslog2es.conf</span></span>
<span class="line"></span></code></pre></div><h2 id="\u67E5\u770B\u670D\u52A1\u72B6\u6001" tabindex="-1">\u67E5\u770B\u670D\u52A1\u72B6\u6001 <a class="header-anchor" href="#\u67E5\u770B\u670D\u52A1\u72B6\u6001" aria-hidden="true">#</a></h2><h3 id="es-\u72B6\u6001" tabindex="-1">ES \u72B6\u6001 <a class="header-anchor" href="#es-\u72B6\u6001" aria-hidden="true">#</a></h3><p>\u5728\u6D4F\u89C8\u5668\u7684<code>es</code>\u63D2\u4EF6\u4E2D\u7684<code>browser</code>\u8FDB\u884C\u67E5\u770B:</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/elk%20stack/syslog%2Belk.png" alt=""></p><h3 id="kibana-\u72B6\u6001" tabindex="-1">Kibana \u72B6\u6001 <a class="header-anchor" href="#kibana-\u72B6\u6001" aria-hidden="true">#</a></h3><p>\u7565.</p><p>\u53C2\u8003\u4E4B\u524D\u7684\u6587\u7AE0\u6DFB\u52A0\u7D22\u5F15, \u5728\u6B64\u4E0D\u518D\u8D58\u8FF0.</p>`,18),o=[p];function c(t,r,i,y,d,g){return a(),n("div",null,o)}var D=s(e,[["render",c]]);export{A as __pageData,D as default};
