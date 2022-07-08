import{_ as s,o as a,c as n,a as e}from"./app.1e6146c3.js";const g=JSON.parse('{"title":"Ceph RGW","description":"","frontmatter":{},"headers":[{"level":2,"title":"Ceph RGW \u67B6\u6784\u7B80\u4ECB","slug":"ceph-rgw-\u67B6\u6784\u7B80\u4ECB"},{"level":2,"title":"\u5B89\u88C5Ceph\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173","slug":"\u5B89\u88C5ceph\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173"},{"level":2,"title":"\u521B\u5EFARGW\u5B9E\u4F8B","slug":"\u521B\u5EFArgw\u5B9E\u4F8B"},{"level":2,"title":"\u9A8C\u8BC1\u5BF9\u8C61\u5B58\u50A8","slug":"\u9A8C\u8BC1\u5BF9\u8C61\u5B58\u50A8"},{"level":2,"title":"\u521B\u5EFA\u7528\u6237\u4EE5\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8","slug":"\u521B\u5EFA\u7528\u6237\u4EE5\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8"},{"level":3,"title":"\u521B\u5EFA\u5B50\u7528\u6237","slug":"\u521B\u5EFA\u5B50\u7528\u6237"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/FileSystem/Ceph/Ceph RGW.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/FileSystem/Ceph/Ceph RGW.md"},p=e(`<h1 id="ceph-rgw" tabindex="-1">Ceph RGW <a class="header-anchor" href="#ceph-rgw" aria-hidden="true">#</a></h1><h2 id="ceph-rgw-\u67B6\u6784\u7B80\u4ECB" tabindex="-1">Ceph RGW \u67B6\u6784\u7B80\u4ECB <a class="header-anchor" href="#ceph-rgw-\u67B6\u6784\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>RGW\u5C31\u662F\u63D0\u4F9B\u5BF9\u8C61\u5B58\u50A8\u7684\u7F51\u5173\uFF0C\u4E5F\u5373\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173\u3002\u6240\u8C13\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173\uFF0C\u4E5F\u5C31\u662F\u5BF9\u8C61\u5B58\u50A8\u7684\u5165\u53E3\uFF0C<strong>\u672C\u8D28\u4E0A\u662F\u4E00\u4E2AHTTP\u670D\u52A1\u5668</strong>\uFF0C\u4E0ENginx\u548CApache\u65E0\u5F02\u3002\u901A\u8FC7\u8FD9\u4E2A\u5165\u53E3\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7HTTP\u534F\u8BAE\uFF0C\u4EE5RESTful\u7684\u65B9\u5F0F\u8BBF\u95EECeph\u7684\u5BF9\u8C61\u5B58\u50A8\u3002 \u5BF9\u8C61\u5B58\u50A8\u7F51\u5173\u5B9E\u9645\u4E0A\u662F<em>\u8C03\u7528<code>librados</code>\u7684API</em>\u6765\u5B9E\u73B0\u6570\u636E\u7684\u5B58\u50A8\u548C\u8BFB\u53D6\uFF0C\u800C\u8BE5\u7F51\u5173\u540C\u65F6\u63D0\u4F9B\u4E86<strong>\u517C\u5BB9AWS S3\u548COpenStack Swift\u7684\u5BF9\u8C61\u5B58\u50A8\u8BBF\u95EE\u63A5\u53E3\uFF08API\uFF09</strong>\u3002</p><h2 id="\u5B89\u88C5ceph\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173" tabindex="-1">\u5B89\u88C5Ceph\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173 <a class="header-anchor" href="#\u5B89\u88C5ceph\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u4F7F\u7528<code>ceph-deploy</code>\u90E8\u7F72\u547D\u4EE4\u5B89\u88C5\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u8FDB\u5165ceph\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> ceph-cluster</span></span>
<span class="line"><span style="color:#758575;">#  ceph-deploy install --rgw &lt;gateway-node1&gt; [&lt;gateway-node2&gt; ...]</span></span>
<span class="line"><span style="color:#DBD7CA;">ceph-deploy install --rgw stor1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8FDB\u5165ceph\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> ceph-cluster</span></span>
<span class="line"><span style="color:#A0ADA0;">#  ceph-deploy install --rgw &lt;gateway-node1&gt; [&lt;gateway-node2&gt; ...]</span></span>
<span class="line"><span style="color:#393A34;">ceph-deploy install --rgw stor1</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFArgw\u5B9E\u4F8B" tabindex="-1">\u521B\u5EFARGW\u5B9E\u4F8B <a class="header-anchor" href="#\u521B\u5EFArgw\u5B9E\u4F8B" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u6B65\u9AA4\u53EA\u662F\u5B89\u88C5\u4E86\u5FC5\u8981\u7684\u8F6F\u4EF6\uFF0C\u4F46\u5E76\u6CA1\u6709\u521B\u5EFA\u9700\u8981\u7684\u5B58\u50A8\u8D44\u6E90\uFF08\u5B58\u50A8\u6C60\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u5B58\u50A8\u6C60</span></span>
<span class="line"><span style="color:#DBD7CA;">ceph-deploy rgw create stor1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u5B58\u50A8\u6C60</span></span>
<span class="line"><span style="color:#393A34;">ceph-deploy rgw create stor1</span></span>
<span class="line"></span></code></pre></div><p>\u2139\uFE0F \u67E5\u770B\u96C6\u7FA4\u8D44\u6E90\u72B6\u6001\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@stor1 ceph-cluster</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> rados lspools</span></span>
<span class="line"><span style="color:#DBD7CA;">.rgw.root</span></span>
<span class="line"><span style="color:#DBD7CA;">default.rgw.control</span></span>
<span class="line"><span style="color:#DBD7CA;">default.rgw.meta</span></span>
<span class="line"><span style="color:#DBD7CA;">default.rgw.log</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@stor1 ceph-cluster</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> rados lspools</span></span>
<span class="line"><span style="color:#393A34;">.rgw.root</span></span>
<span class="line"><span style="color:#393A34;">default.rgw.control</span></span>
<span class="line"><span style="color:#393A34;">default.rgw.meta</span></span>
<span class="line"><span style="color:#393A34;">default.rgw.log</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9A8C\u8BC1\u5BF9\u8C61\u5B58\u50A8" tabindex="-1">\u9A8C\u8BC1\u5BF9\u8C61\u5B58\u50A8 <a class="header-anchor" href="#\u9A8C\u8BC1\u5BF9\u8C61\u5B58\u50A8" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u63D0\u5230\u8FC7 Ceph \u7684\u5BF9\u8C61\u5B58\u50A8\u7F51\u5173\u662F\u57FA\u4E8E HTTP \u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 HTTP \u534F\u8BAE\u8BBF\u95EE\u7279\u5B9A\u5730\u5740\u6765\u8FDB\u9879\u9A8C\u8BC1\uFF1A</p><p>\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u8F93\u5165 <a href="http://172.16.1.128:7480/" target="_blank" rel="noopener noreferrer">http://172.16.1.128:7480/</a></p><p>\u5927\u81F4\u4F1A\u8F93\u51FA\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-xml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">ListAllMyBucketsResult</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">xmlns</span><span style="color:#DBD7CA;">=</span><span style="color:#C98A7D;">&quot;http://s3.amazonaws.com/doc/2006-03-01/&quot;</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">Owner</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">ID</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">anonymous</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">ID</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">DisplayName</span><span style="color:#858585;">/&gt;</span></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">Owner</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">Buckets</span><span style="color:#858585;">/&gt;</span></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">ListAllMyBucketsResult</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">ListAllMyBucketsResult</span><span style="color:#393A34;"> </span><span style="color:#B58451;">xmlns</span><span style="color:#393A34;">=</span><span style="color:#B56959;">&quot;http://s3.amazonaws.com/doc/2006-03-01/&quot;</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">Owner</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">ID</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">anonymous</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">ID</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">DisplayName</span><span style="color:#8E8F8B;">/&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">Owner</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">Buckets</span><span style="color:#8E8F8B;">/&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">ListAllMyBucketsResult</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u7528\u6237\u4EE5\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8" tabindex="-1">\u521B\u5EFA\u7528\u6237\u4EE5\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8 <a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237\u4EE5\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8" aria-hidden="true">#</a></h2><p>\u5BF9\u8C61\u5B58\u50A8\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6570\u636E\u5FC5\u987B\u5B58\u50A8\u5728\u67D0\u4E2A\u7528\u6237\u4E0B\u9762\u3002\u56E0\u6B64\uFF0C\u60F3\u6B63\u5E38\u7684\u8BBF\u95EERGW\uFF0C\u9700\u8981\u521B\u5EFA\u76F8\u5E94\u7684RGW\u7528\u6237\uFF0C\u5E76\u8D4B\u4E88\u76F8\u5E94\u7684\u6743\u9650\uFF0C<code>radosgw-admin</code>\u547D\u4EE4\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u529F\u80FD\u3002 \u6267\u884C\u4E0B\u9762\u547D\u4EE4\uFF0C\u6765\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>testuser</code>\u7684\u7528\u6237\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">radosgw-admin user create --uid=</span><span style="color:#C98A7D;">&quot;testuser&quot;</span><span style="color:#DBD7CA;"> --display-name=</span><span style="color:#C98A7D;">&quot;First User&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">radosgw-admin user create --uid=</span><span style="color:#B56959;">&quot;testuser&quot;</span><span style="color:#393A34;"> --display-name=</span><span style="color:#B56959;">&quot;First User&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u4F1A\u8F93\u51FA\u4E00\u5806\u76F8\u5173\u6570\u636E\uFF0C\u5176\u4E2D\uFF0C\u9700\u8981\u7279\u522B\u4FDD\u5B58\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7684<code>keys-&gt;access_key</code>\u548C<code>keys-&gt;secret_key</code></p><h3 id="\u521B\u5EFA\u5B50\u7528\u6237" tabindex="-1">\u521B\u5EFA\u5B50\u7528\u6237 <a class="header-anchor" href="#\u521B\u5EFA\u5B50\u7528\u6237" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">radosgw-admin subuser create --uid=testuser --subuser=testuser:swift --access=full</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">radosgw-admin subuser create --uid=testuser --subuser=testuser:swift --access=full</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/66671590" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/66671590</a></li><li><a href="https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/f6e336bd9999" target="_blank" rel="noopener noreferrer">https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/f6e336bd9999</a></li><li><a href="https://link.zhihu.com/?target=https%3A//blog.csdn.net/u011446736/article/details/81083078" target="_blank" rel="noopener noreferrer">https://link.zhihu.com/?target=https%3A//blog.csdn.net/u011446736/article/details/81083078</a></li><li><a href="https://link.zhihu.com/?target=https%3A//blog.csdn.net/Poo_Chai/article/details/80856662%3Futm_source%3Dblogxgwz1" target="_blank" rel="noopener noreferrer">https://link.zhihu.com/?target=https%3A//blog.csdn.net/Poo_Chai/article/details/80856662%3Futm_source%3Dblogxgwz1</a></li></ul>`,24),o=[p];function t(c,r,i,d,h,y){return a(),n("div",null,o)}var A=s(l,[["render",t]]);export{g as __pageData,A as default};
