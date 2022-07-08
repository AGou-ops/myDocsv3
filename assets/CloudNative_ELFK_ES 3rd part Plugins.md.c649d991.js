import{_ as e,o as a,c as s,a as n}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"ES 3rd part Plugins","description":"","frontmatter":{},"headers":[{"level":2,"title":"head","slug":"head"},{"level":3,"title":"\u5BB9\u5668\u5316\u8FD0\u884C","slug":"\u5BB9\u5668\u5316\u8FD0\u884C"},{"level":3,"title":"\u6D4F\u89C8\u5668\u63D2\u4EF6\u8FD0\u884C\uFF08\u63A8\u8350\uFF09","slug":"\u6D4F\u89C8\u5668\u63D2\u4EF6\u8FD0\u884C\uFF08\u63A8\u8350\uFF09"},{"level":3,"title":"\u4F5C\u4E3A\u63D2\u4EF6\u4F7F\u7528","slug":"\u4F5C\u4E3A\u63D2\u4EF6\u4F7F\u7528"},{"level":2,"title":"cerebro","slug":"cerebro"},{"level":3,"title":"\u5B89\u88C5\u4E0E\u4F7F\u7528","slug":"\u5B89\u88C5\u4E0E\u4F7F\u7528"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"CloudNative/ELFK/ES 3rd part Plugins.md","lastUpdated":1657272051000}'),r={name:"CloudNative/ELFK/ES 3rd part Plugins.md"},l=n(`<h1 id="es-3rd-part-plugins" tabindex="-1">ES 3rd part Plugins <a class="header-anchor" href="#es-3rd-part-plugins" aria-hidden="true">#</a></h1><h1 id="es-\u7B2C\u4E09\u65B9\u63D2\u4EF6" tabindex="-1">ES \u7B2C\u4E09\u65B9\u63D2\u4EF6 <a class="header-anchor" href="#es-\u7B2C\u4E09\u65B9\u63D2\u4EF6" aria-hidden="true">#</a></h1><h2 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-hidden="true">#</a></h2><p>Elasticsearch\u96C6\u7FA4\u7684Web\u524D\u7AEF\u5DE5\u5177\u3002</p><p>\u5B98\u65B9\u5F00\u6E90\u5730\u5740\uFF1A<a href="https://github.com/mobz/elasticsearch-head" target="_blank" rel="noopener noreferrer">https://github.com/mobz/elasticsearch-head</a></p><p>\u5E38\u7528\u8FD0\u884C\u65B9\u5F0F\uFF1A</p><h3 id="\u5BB9\u5668\u5316\u8FD0\u884C" tabindex="-1">\u5BB9\u5668\u5316\u8FD0\u884C <a class="header-anchor" href="#\u5BB9\u5668\u5316\u8FD0\u884C" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># for Elasticsearch 5.x: </span></span>
<span class="line"><span style="color:#DBD7CA;">docker run -p 9100:9100 mobz/elasticsearch-head:5</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># for Elasticsearch 5.x: </span></span>
<span class="line"><span style="color:#393A34;">docker run -p 9100:9100 mobz/elasticsearch-head:5</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6D4F\u89C8\u5668\u63D2\u4EF6\u8FD0\u884C\uFF08\u63A8\u8350\uFF09" tabindex="-1">\u6D4F\u89C8\u5668\u63D2\u4EF6\u8FD0\u884C\uFF08\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u63D2\u4EF6\u8FD0\u884C\uFF08\u63A8\u8350\uFF09" aria-hidden="true">#</a></h3><p>\u4ECE<code>chrome\u5546\u5E97</code>\u4E0B\u8F7D\u5BF9\u5E94\u7684\u63D2\u4EF6\uFF0C\u5730\u5740\uFF1A <a href="https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm?utm_source=chrome-ntp-icon" target="_blank" rel="noopener noreferrer">https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm?utm_source=chrome-ntp-icon</a></p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/elasticsearch/elasticsearch-head.png" alt="" title="\u622A\u56FE"></p><h3 id="\u4F5C\u4E3A\u63D2\u4EF6\u4F7F\u7528" tabindex="-1">\u4F5C\u4E3A\u63D2\u4EF6\u4F7F\u7528 <a class="header-anchor" href="#\u4F5C\u4E3A\u63D2\u4EF6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u4ECE\u5B98\u65B9github\u4ED3\u5E93\u7AD9\u70B9\u7684\u63CF\u8FF0<code>Running as a plugin of Elasticsearch (deprecated) </code>\u53EF\u4EE5\u5F97\u77E5\uFF0C\u8BE5\u8FD0\u884C\u65B9\u5F0F\u5DF2\u88AB\u5F03\u7528\uFF0C\u6240\u4EE5\u4E0D\u63A8\u8350\u4F7F\u7528\u8BE5\u8FD0\u884C\u65B9\u5F0F\u3002</p><h2 id="cerebro" tabindex="-1">cerebro <a class="header-anchor" href="#cerebro" aria-hidden="true">#</a></h2><p>Cerebro \u662F\u4E00\u6B3E\u9879\u76EE\u7BA1\u7406\u548C\u534F\u4F5C\u8F6F\u4EF6\u3002\u4E13\u4E3A\u8425\u9500\u90E8\u95E8\u3001\u5EFA\u7B51\u516C\u53F8\u3001\u89C6\u89C9\u7279\u6548\u5904\u7406\u548C\u52A8\u753B\u5DE5\u4F5C\u5BA4\u4EE5\u53CA\u5EFA\u7B51\u7BA1\u7406\u5C40\u8BBE\u8BA1\u3002\u5BF9\u4E8Eelasticsearch\u6765\u8BF4\uFF0Ccerebro\u53EF\u4EE5\u5BF9ElasticSearch\u8FDB\u884C<strong>\u96C6\u7FA4\u76D1\u63A7\u548C\u7BA1\u7406\u3001\u96C6\u7FA4\u914D\u7F6E\u4FEE\u6539\u3001\u7D22\u5F15\u5206\u7247\u7BA1\u7406\u3002</strong></p><p>\u5B98\u65B9\u7AD9\u70B9\u53CAgithub\u4ED3\u5E93\uFF1A<a href="https://cerebrohq.com/en/" target="_blank" rel="noopener noreferrer">https://cerebrohq.com/en/</a> | <a href="https://github.com/lmenezes/cerebro" target="_blank" rel="noopener noreferrer">https://github.com/lmenezes/cerebro</a></p><h3 id="\u5B89\u88C5\u4E0E\u4F7F\u7528" tabindex="-1">\u5B89\u88C5\u4E0E\u4F7F\u7528 <a class="header-anchor" href="#\u5B89\u88C5\u4E0E\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u76F4\u63A5\u901A\u8FC7rpm\u5305\u8FDB\u884C\u5B89\u88C5</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y https://github.com/lmenezes/cerebro/releases/download/v0.9.2/cerebro-0.9.2-1.noarch.rpm</span></span>
<span class="line"><span style="color:#758575;"># \u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305\u624B\u52A8\u8FD0\u884C</span></span>
<span class="line"><span style="color:#DBD7CA;">wget https://github.com/lmenezes/cerebro/releases/download/v0.9.2/cerebro-0.9.2.zip</span></span>
<span class="line"><span style="color:#DBD7CA;">unzip cerebro-0.9.2.zip</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u76F4\u63A5\u901A\u8FC7rpm\u5305\u8FDB\u884C\u5B89\u88C5</span></span>
<span class="line"><span style="color:#393A34;">yum install -y https://github.com/lmenezes/cerebro/releases/download/v0.9.2/cerebro-0.9.2-1.noarch.rpm</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305\u624B\u52A8\u8FD0\u884C</span></span>
<span class="line"><span style="color:#393A34;">wget https://github.com/lmenezes/cerebro/releases/download/v0.9.2/cerebro-0.9.2.zip</span></span>
<span class="line"><span style="color:#393A34;">unzip cerebro-0.9.2.zip</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8<code>cerebro</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> cerebro-0.9.2</span></span>
<span class="line"><span style="color:#DBD7CA;">bin/cerebro</span></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl start cerebro</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> cerebro-0.9.2</span></span>
<span class="line"><span style="color:#393A34;">bin/cerebro</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#393A34;">systemctl start cerebro</span></span>
<span class="line"></span></code></pre></div><p><code>cerebro</code>\u9ED8\u8BA4\u76D1\u542C\u7AEF\u53E3\u4E3A<code>9000</code>\uFF0C\u76F4\u63A5\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF0C<a href="http://172.16.1.128:9000" target="_blank" rel="noopener noreferrer">http://172.16.1.128:9000</a></p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/elasticsearch/elasticsearch-cerebro.png" alt="" title="\u622A\u56FE"></p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li>elasticsearch-head running: <a href="https://github.com/mobz/elasticsearch-head#running" target="_blank" rel="noopener noreferrer">https://github.com/mobz/elasticsearch-head#running</a></li></ul>`,24),c=[l];function o(p,t,i,h,d,b){return a(),s("div",null,c)}var m=e(r,[["render",o]]);export{u as __pageData,m as default};
