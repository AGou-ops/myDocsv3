import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"varnish \u53C2\u8003\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u5355\u53C2\u8003\u793A\u4F8B","slug":"\u7B80\u5355\u53C2\u8003\u793A\u4F8B"},{"level":2,"title":"\u7EFC\u5408\u53C2\u8003\u793A\u4F8B","slug":"\u7EFC\u5408\u53C2\u8003\u793A\u4F8B"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Cache/Varnish/varnish \u53C2\u8003\u793A\u4F8B.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Cache/Varnish/varnish \u53C2\u8003\u793A\u4F8B.md"},o=p(`<h1 id="varnish-\u53C2\u8003\u793A\u4F8B" tabindex="-1">varnish \u53C2\u8003\u793A\u4F8B <a class="header-anchor" href="#varnish-\u53C2\u8003\u793A\u4F8B" aria-hidden="true">#</a></h1><h2 id="\u7B80\u5355\u53C2\u8003\u793A\u4F8B" tabindex="-1">\u7B80\u5355\u53C2\u8003\u793A\u4F8B <a class="header-anchor" href="#\u7B80\u5355\u53C2\u8003\u793A\u4F8B" aria-hidden="true">#</a></h2><ol><li>\u5BF9\u67D0\u79CD\u8BF7\u6C42\u4E0D\u68C0\u67E5\u7F13\u5B58</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)^/(login|admin)&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">pass</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)^/(login|admin)&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">pass</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u62D2\u7EDD\u67D0\u79CD\u8BF7\u6C42\u8BBF\u95EE</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.http.User-Agent </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)curl&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">synth</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">405</span><span style="color:#858585;">))</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.http.User-Agent </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)curl&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">synth</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">405</span><span style="color:#8E8F8B;">))</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u5BF9\u516C\u5F00\u8D44\u6E90\uFF0C\u53D6\u6D88\u79C1\u6709\u6807\u8BB0\uFF0C\u5E76\u8BBE\u5B9A\u7F13\u5B58\u65F6\u957F</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">beresp.http.cache-control </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">~ </span><span style="color:#C98A7D;">&quot;s-maxage&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">bereq.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)\\.(jpg|jpeg|png|gif|css|js)$&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">unset</span><span style="color:#DBD7CA;"> beresp.http.Set-Cookie</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> beresp.ttl = 3600s</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">beresp.http.cache-control </span><span style="color:#AB5959;">!</span><span style="color:#393A34;">~ </span><span style="color:#B56959;">&quot;s-maxage&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">bereq.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)\\.(jpg|jpeg|png|gif|css|js)$&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">unset</span><span style="color:#393A34;"> beresp.http.Set-Cookie</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> beresp.ttl = 3600s</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u663E\u793A\u540E\u7AEF\u4E3B\u673AIP</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.restarts == 0</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.http.X-Fowarded-For</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.http.X-Forwarded-For = req.http.X-Forwarded-For + </span><span style="color:#C98A7D;">&quot;,&quot;</span><span style="color:#DBD7CA;"> + client.ip</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.http.X-Forwarded-For = client.ip</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.restarts == 0</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.http.X-Fowarded-For</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.http.X-Forwarded-For = req.http.X-Forwarded-For + </span><span style="color:#B56959;">&quot;,&quot;</span><span style="color:#393A34;"> + client.ip</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">else</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.http.X-Forwarded-For = client.ip</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u6839\u636Epurge\u8BF7\u6C42\u6E05\u9664\u7F13\u5B58(\u53EF\u4EE5\u4F7F\u7528<code> curl -X PURGE URL</code>\u6765\u6D4B\u8BD5)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sub vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.method == </span><span style="color:#C98A7D;">&quot;PURGE&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">purge</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sub vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.method == </span><span style="color:#B56959;">&quot;PURGE&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">purge</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u8BBE\u7F6Eacl\u8BBF\u95EE\u63A7\u5236</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">acl purgers </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;127.0.0.0&quot;</span><span style="color:#DBD7CA;">/8</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;192.168.0.0&quot;</span><span style="color:#DBD7CA;">/16</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.method == </span><span style="color:#C98A7D;">&quot;PURGE&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">client.ip </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> purgers</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">synth</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">405,</span><span style="color:#C98A7D;">&quot;Purging not allowed for &quot;</span><span style="color:#DBD7CA;"> + client.ip</span><span style="color:#858585;">))</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">purge</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">acl purgers </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#B56959;">&quot;127.0.0.0&quot;</span><span style="color:#393A34;">/8</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#B56959;">&quot;192.168.0.0&quot;</span><span style="color:#393A34;">/16</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.method == </span><span style="color:#B56959;">&quot;PURGE&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">client.ip </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> purgers</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">synth</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">405,</span><span style="color:#B56959;">&quot;Purging not allowed for &quot;</span><span style="color:#393A34;"> + client.ip</span><span style="color:#8E8F8B;">))</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">purge</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>\u7528ban\u547D\u4EE4\u6E05\u9664\u7F13\u5B58(\u5728varnishadm\u4EA4\u4E92\u5F0F\u7EC8\u7AEF\u4E0B\u6267\u884C)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ban req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> ^/javascripts</span></span>
<span class="line"><span style="color:#DBD7CA;">ban req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> /js$</span></span>
<span class="line"><span style="color:#DBD7CA;">ban req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">i</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">.</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">jpg</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">jpeg</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">$   </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ban req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> ^/javascripts</span></span>
<span class="line"><span style="color:#393A34;">ban req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> /js$</span></span>
<span class="line"><span style="color:#393A34;">ban req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">?</span><span style="color:#393A34;">i</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">.</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">jpg</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">jpeg</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">$   </span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\u4E2D\u4F7F\u7528</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sub vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.method == </span><span style="color:#C98A7D;">&quot;BAN&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#858585;">                </span><span style="color:#758575;"># Same ACL check as above:</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">client.ip </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> purge</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                        return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">synth</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">403, </span><span style="color:#C98A7D;">&quot;Not allowed.&quot;</span><span style="color:#858585;">))</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">                ban</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;req.http.host == &quot;</span><span style="color:#DBD7CA;"> + req.http.host +</span></span>
<span class="line"><span style="color:#DBD7CA;">                      </span><span style="color:#C98A7D;">&quot; &amp;&amp; req.url == &quot;</span><span style="color:#DBD7CA;"> + req.url</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">                </span><span style="color:#758575;"># Throw a synthetic page so the</span></span>
<span class="line"><span style="color:#858585;">                </span><span style="color:#758575;"># request won&#39;t go to the backend.</span></span>
<span class="line"><span style="color:#DBD7CA;">                return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">synth</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">200, </span><span style="color:#C98A7D;">&quot;Ban added&quot;</span><span style="color:#858585;">))</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sub vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.method == </span><span style="color:#B56959;">&quot;BAN&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">                </span><span style="color:#A0ADA0;"># Same ACL check as above:</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">client.ip </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> purge</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                        return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">synth</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">403, </span><span style="color:#B56959;">&quot;Not allowed.&quot;</span><span style="color:#8E8F8B;">))</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">                ban</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;req.http.host == &quot;</span><span style="color:#393A34;"> + req.http.host +</span></span>
<span class="line"><span style="color:#393A34;">                      </span><span style="color:#B56959;">&quot; &amp;&amp; req.url == &quot;</span><span style="color:#393A34;"> + req.url</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">                </span><span style="color:#A0ADA0;"># Throw a synthetic page so the</span></span>
<span class="line"><span style="color:#8E8F8B;">                </span><span style="color:#A0ADA0;"># request won&#39;t go to the backend.</span></span>
<span class="line"><span style="color:#393A34;">                return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">synth</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">200, </span><span style="color:#B56959;">&quot;Ban added&quot;</span><span style="color:#8E8F8B;">))</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p>8.\u914D\u7F6Evarnish\u540E\u7AEF\u591A\u53F0\u4E3B\u673A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">import directors</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">#  \u5BFC\u5165\u6A21\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">backend server1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    .host = </span><span style="color:#C98A7D;">&quot;192.168.159.129&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">backend server2 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    .host = </span><span style="color:#C98A7D;">&quot;192.168.159.130&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_init </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    new websrvs = </span><span style="color:#A1B567;">directors.round_robin</span><span style="color:#858585;">();</span></span>
<span class="line"><span style="color:#DBD7CA;">    websrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">server1</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    websrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">server2</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#  \u7528\u54EA\u4E00\u7EC4server\u6765\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = </span><span style="color:#A1B567;">websrvs.backend</span><span style="color:#858585;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">import directors</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">#  \u5BFC\u5165\u6A21\u5757</span></span>
<span class="line"><span style="color:#393A34;">backend server1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    .host = </span><span style="color:#B56959;">&quot;192.168.159.129&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">backend server2 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    .host = </span><span style="color:#B56959;">&quot;192.168.159.130&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_init </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    new websrvs = </span><span style="color:#6C7834;">directors.round_robin</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"><span style="color:#393A34;">    websrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">server1</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    websrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">server2</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#  \u7528\u54EA\u4E00\u7EC4server\u6765\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = </span><span style="color:#6C7834;">websrvs.backend</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><ol start="9"><li>varnish\u52A8\u9759\u5206\u79BB</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">backend default </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    .host = </span><span style="color:#C98A7D;">&quot;192.168.159.129&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">backend appsrv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    .host = </span><span style="color:#C98A7D;">&quot;192.168.159.130&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)\\.php$&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = appsrv</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = default</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">backend default </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    .host = </span><span style="color:#B56959;">&quot;192.168.159.129&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">backend appsrv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    .host = </span><span style="color:#B56959;">&quot;192.168.159.130&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)\\.php$&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = appsrv</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">else</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = default</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7EFC\u5408\u53C2\u8003\u793A\u4F8B" tabindex="-1">\u7EFC\u5408\u53C2\u8003\u793A\u4F8B <a class="header-anchor" href="#\u7EFC\u5408\u53C2\u8003\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u793A\u4F8B\u4E00:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5FC5\u987B\u4EE5vcl \u5F00\u5934</span></span>
<span class="line"><span style="color:#DBD7CA;">vcl 4.0</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;"># \u5BFC\u5165directors\u6A21\u5757\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF1B\u5E76\u5B9A\u4E49acl\uFF0C\u6765\u63A7\u5236purger\uFF08\u66F4\u65B0\u7F13\u5B58\uFF09\u7684\u4F7F\u7528</span></span>
<span class="line"><span style="color:#DBD7CA;">import directors</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">acl  purgers </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;127.0.0.0&quot;</span><span style="color:#DBD7CA;">/8</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;192.168.2.0&quot;</span><span style="color:#DBD7CA;">/24</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;">#  \u5065\u5EB7\u72B6\u6001\u68C0\u67E5\u5B9A\u4E49\u9879</span></span>
<span class="line"><span style="color:#758575;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#DBD7CA;">probe healthche </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    .url=</span><span style="color:#C98A7D;">&quot;/index.html&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .timeout = 2s</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .window = 6 </span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .threshold = 5</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># backend\u7EC4\u5373\u4E3A\u540E\u53F0web\u7AEF</span></span>
<span class="line"><span style="color:#DBD7CA;">backend server1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    .host = </span><span style="color:#C98A7D;">&quot;192.168.159.129&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    .probe = healthche </span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">backend server2 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">     .host=</span><span style="color:#C98A7D;">&quot;192.168.159.130&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     .port=</span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     .probe = </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">				</span><span style="color:#758575;"># \u6B64\u5916\u5B9A\u4E49\u5065\u5EB7\u72B6\u6001\u68C0\u67E5\u8FD8\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#DBD7CA;">         .url=</span><span style="color:#C98A7D;">&quot;/index.html&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">         .timeout = 2s</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">         .window = 6 </span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">         .threshold = 5</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     </span></span>
<span class="line"><span style="color:#DBD7CA;">     </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span><span style="color:#DBD7CA;">	</span></span>
<span class="line"><span style="color:#758575;"># ++++++++++++++++++++++++++	\u624B\u52A8\u8C03\u6574backend server\u5065\u5EB7\u72B6\u6001	+++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#758575;"># help backend.set_health</span></span>
<span class="line"><span style="color:#758575;"># 200</span></span>
<span class="line"><span style="color:#758575;"># backend.set_health &lt;backend_pattern&gt; \`\`[auto|healthy|sick]\`\`</span></span>
<span class="line"><span style="color:#758575;"># Set health status on the backends.</span></span>
<span class="line"><span style="color:#758575;"># \u4F8B\u5982: backend.set_health server2 sick</span></span>
<span class="line"><span style="color:#758575;"># +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#758575;"># \u4EE5\u8F6E\u8BE2\u65B9\u5F0F\u8C03\u5EA6</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_init </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    new websrvs =directors.random</span><span style="color:#858585;">()</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u5F53\u8C03\u5EA6\u7B97\u6CD5\u4E3Arandom\u65F6\u624D\u4F1A\u6709\u6743\u91CD</span></span>
<span class="line"><span style="color:#DBD7CA;">    srvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">server1,1</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># backend &#39;server1&#39; with weight &#39;1&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    srvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">server2,2</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># backend &#39;server2&#39; with weight &#39;2&#39;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint=websrvs.backend</span><span style="color:#858585;">()</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;"># set req.backend_hint=srvs.backend(req.http.cookie);</span></span>
<span class="line"><span style="color:#758575;"># \u6B63\u5219\u5339\u914D login\u6216admin\u9690\u79C1\u4FE1\u606F\u4E0D\u5141\u8BB8\u670D\u52A1\u7AEF\u7F13\u5B58</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)^/(login|admin)&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">pass</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># url\u91CD\u5199\uFF0C\u544A\u8BC9\u540E\u7AEF\u670D\u52A1\u5668\u771F\u5B9E\u7684\u8BF7\u6C42\u8005\uFF0C\u5B89\u5168\u907F\u514D\u91CD\u590D\u6DFB\u52A0\uFF0C\u8FD8\u53EF\u5B9A\u4E49\u5728\u8BB0\u5F55\u65E5\u5FD7\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.restarts == 0</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.http.X-Fowarded-For</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.http.X-Forwarded-For = req.http.X-Forwarded-For + </span><span style="color:#C98A7D;">&quot;,&quot;</span><span style="color:#DBD7CA;"> + client.ip</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.http.X-Forwarded-For = client.ip</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    }                </span></span>
<span class="line"><span style="color:#758575;"># purge\u7684\u4F7F\u7528\uFF1A\u66F4\u65B0\u4E00\u4E2A\u7F13\u5B58\uFF0C\u800C\u66F4\u65B0\u4E00\u7EC4\u7F13\u5B58\u7528ban   </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.method == </span><span style="color:#C98A7D;">&quot;PURGE&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">client.ip </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> purgers</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">synth</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">405,</span><span style="color:#C98A7D;">&quot;Purging not allowed for &quot;</span><span style="color:#DBD7CA;">+client.ip</span><span style="color:#858585;">))</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    return</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">purge</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#758575;"># \u628A\u4E0D\u540C\u8D44\u6E90\u6309\u9700\u8C03\u5EA6\u5230\u4E0D\u540C\u4E3B\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)\\.(jpg|jpeg|png)$&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = server2</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = server1</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># ++++++++++++++++++++++++++++++++	\u540E\u7AEF\u6709\u591A\u4E2A\u865A\u62DF\u4E3B\u673A	++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#758575;">#	 if (req.http.host ~ &quot;foo.com&quot; || req.http.host == &quot;www.foo.com&quot;) {</span></span>
<span class="line"><span style="color:#758575;">#       set req.backend_hint = foo;</span></span>
<span class="line"><span style="color:#758575;">#    } elsif (req.http.host ~ &quot;bar.com&quot;) {</span></span>
<span class="line"><span style="color:#758575;">#        set req.backend_hint = bar;</span></span>
<span class="line"><span style="color:#758575;">#    }</span></span>
<span class="line"><span style="color:#758575;"># +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_backend_response </span><span style="color:#858585;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5BA2\u6237\u7AEF\u7684\u56FE\u7247\u7C7B\u4FE1\u606F\u53EF\u4EE5\u9664\u53BBcookies\u6807\u5FD7\u8BA9\u670D\u52A1\u5668\u80FD\u591F\u7F13\u5B58\uFF0C\u5E76\u5B9A\u4E49\u7F13\u5B58\u6709\u6548\u671F\u4E3A2H</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">bereq.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)\\.(jpg|jpeg|png|gif)$&quot;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">unset</span><span style="color:#DBD7CA;"> beresp.http.Set-cookies</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> beresp.ttl =7200s</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#758575;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_deliver </span><span style="color:#858585;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5B9A\u4E49\u7F13\u5B58\u54CD\u5E94\u5934\u90E8</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">obj.hits</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">0</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> resp.http.X-Cache = </span><span style="color:#C98A7D;">&quot;HIT via &quot;</span><span style="color:#DBD7CA;"> + server.ip</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> resp.http.X-Cache = </span><span style="color:#C98A7D;">&quot;MISS from &quot;</span><span style="color:#DBD7CA;"> + server.ip</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5FC5\u987B\u4EE5vcl \u5F00\u5934</span></span>
<span class="line"><span style="color:#393A34;">vcl 4.0</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5BFC\u5165directors\u6A21\u5757\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF1B\u5E76\u5B9A\u4E49acl\uFF0C\u6765\u63A7\u5236purger\uFF08\u66F4\u65B0\u7F13\u5B58\uFF09\u7684\u4F7F\u7528</span></span>
<span class="line"><span style="color:#393A34;">import directors</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">acl  purgers </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;127.0.0.0&quot;</span><span style="color:#393A34;">/8</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;192.168.2.0&quot;</span><span style="color:#393A34;">/24</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;">#  \u5065\u5EB7\u72B6\u6001\u68C0\u67E5\u5B9A\u4E49\u9879</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#393A34;">probe healthche </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    .url=</span><span style="color:#B56959;">&quot;/index.html&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .timeout = 2s</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .window = 6 </span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .threshold = 5</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># backend\u7EC4\u5373\u4E3A\u540E\u53F0web\u7AEF</span></span>
<span class="line"><span style="color:#393A34;">backend server1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    .host = </span><span style="color:#B56959;">&quot;192.168.159.129&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    .probe = healthche </span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">backend server2 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">     .host=</span><span style="color:#B56959;">&quot;192.168.159.130&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     .port=</span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     .probe = </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">				</span><span style="color:#A0ADA0;"># \u6B64\u5916\u5B9A\u4E49\u5065\u5EB7\u72B6\u6001\u68C0\u67E5\u8FD8\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#393A34;">         .url=</span><span style="color:#B56959;">&quot;/index.html&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">         .timeout = 2s</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">         .window = 6 </span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">         .threshold = 5</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     </span></span>
<span class="line"><span style="color:#393A34;">     </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">	</span></span>
<span class="line"><span style="color:#A0ADA0;"># ++++++++++++++++++++++++++	\u624B\u52A8\u8C03\u6574backend server\u5065\u5EB7\u72B6\u6001	+++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#A0ADA0;"># help backend.set_health</span></span>
<span class="line"><span style="color:#A0ADA0;"># 200</span></span>
<span class="line"><span style="color:#A0ADA0;"># backend.set_health &lt;backend_pattern&gt; \`\`[auto|healthy|sick]\`\`</span></span>
<span class="line"><span style="color:#A0ADA0;"># Set health status on the backends.</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F8B\u5982: backend.set_health server2 sick</span></span>
<span class="line"><span style="color:#A0ADA0;"># +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4EE5\u8F6E\u8BE2\u65B9\u5F0F\u8C03\u5EA6</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_init </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    new websrvs =directors.random</span><span style="color:#8E8F8B;">()</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u5F53\u8C03\u5EA6\u7B97\u6CD5\u4E3Arandom\u65F6\u624D\u4F1A\u6709\u6743\u91CD</span></span>
<span class="line"><span style="color:#393A34;">    srvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">server1,1</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># backend &#39;server1&#39; with weight &#39;1&#39;</span></span>
<span class="line"><span style="color:#393A34;">    srvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">server2,2</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># backend &#39;server2&#39; with weight &#39;2&#39;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint=websrvs.backend</span><span style="color:#8E8F8B;">()</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;"># set req.backend_hint=srvs.backend(req.http.cookie);</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6B63\u5219\u5339\u914D login\u6216admin\u9690\u79C1\u4FE1\u606F\u4E0D\u5141\u8BB8\u670D\u52A1\u7AEF\u7F13\u5B58</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)^/(login|admin)&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">pass</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># url\u91CD\u5199\uFF0C\u544A\u8BC9\u540E\u7AEF\u670D\u52A1\u5668\u771F\u5B9E\u7684\u8BF7\u6C42\u8005\uFF0C\u5B89\u5168\u907F\u514D\u91CD\u590D\u6DFB\u52A0\uFF0C\u8FD8\u53EF\u5B9A\u4E49\u5728\u8BB0\u5F55\u65E5\u5FD7\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.restarts == 0</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.http.X-Fowarded-For</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.http.X-Forwarded-For = req.http.X-Forwarded-For + </span><span style="color:#B56959;">&quot;,&quot;</span><span style="color:#393A34;"> + client.ip</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">else</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.http.X-Forwarded-For = client.ip</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    }                </span></span>
<span class="line"><span style="color:#A0ADA0;"># purge\u7684\u4F7F\u7528\uFF1A\u66F4\u65B0\u4E00\u4E2A\u7F13\u5B58\uFF0C\u800C\u66F4\u65B0\u4E00\u7EC4\u7F13\u5B58\u7528ban   </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.method == </span><span style="color:#B56959;">&quot;PURGE&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">client.ip </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> purgers</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">synth</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">405,</span><span style="color:#B56959;">&quot;Purging not allowed for &quot;</span><span style="color:#393A34;">+client.ip</span><span style="color:#8E8F8B;">))</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    return</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">purge</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u628A\u4E0D\u540C\u8D44\u6E90\u6309\u9700\u8C03\u5EA6\u5230\u4E0D\u540C\u4E3B\u673A</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)\\.(jpg|jpeg|png)$&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = server2</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">else</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = server1</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># ++++++++++++++++++++++++++++++++	\u540E\u7AEF\u6709\u591A\u4E2A\u865A\u62DF\u4E3B\u673A	++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#A0ADA0;">#	 if (req.http.host ~ &quot;foo.com&quot; || req.http.host == &quot;www.foo.com&quot;) {</span></span>
<span class="line"><span style="color:#A0ADA0;">#       set req.backend_hint = foo;</span></span>
<span class="line"><span style="color:#A0ADA0;">#    } elsif (req.http.host ~ &quot;bar.com&quot;) {</span></span>
<span class="line"><span style="color:#A0ADA0;">#        set req.backend_hint = bar;</span></span>
<span class="line"><span style="color:#A0ADA0;">#    }</span></span>
<span class="line"><span style="color:#A0ADA0;"># +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_backend_response </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5BA2\u6237\u7AEF\u7684\u56FE\u7247\u7C7B\u4FE1\u606F\u53EF\u4EE5\u9664\u53BBcookies\u6807\u5FD7\u8BA9\u670D\u52A1\u5668\u80FD\u591F\u7F13\u5B58\uFF0C\u5E76\u5B9A\u4E49\u7F13\u5B58\u6709\u6548\u671F\u4E3A2H</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">bereq.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)\\.(jpg|jpeg|png|gif)$&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">unset</span><span style="color:#393A34;"> beresp.http.Set-cookies</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> beresp.ttl =7200s</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#393A34;">sub vcl_deliver </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B9A\u4E49\u7F13\u5B58\u54CD\u5E94\u5934\u90E8</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">obj.hits</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">0</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> resp.http.X-Cache = </span><span style="color:#B56959;">&quot;HIT via &quot;</span><span style="color:#393A34;"> + server.ip</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">else</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> resp.http.X-Cache = </span><span style="color:#B56959;">&quot;MISS from &quot;</span><span style="color:#393A34;"> + server.ip</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B\u4E8C:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">backend imgsrv1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                .host = </span><span style="color:#C98A7D;">&quot;192.168.10.11&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">backend imgsrv2 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                .host = </span><span style="color:#C98A7D;">&quot;192.168.10.12&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span><span style="color:#DBD7CA;">       </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">backend appsrv1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                .host = </span><span style="color:#C98A7D;">&quot;192.168.10.21&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">backend appsrv2 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                .host = </span><span style="color:#C98A7D;">&quot;192.168.10.22&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                .port = </span><span style="color:#C98A7D;">&quot;80&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_init </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                new imgsrvs = </span><span style="color:#A1B567;">directors.random</span><span style="color:#858585;">();</span></span>
<span class="line"><span style="color:#DBD7CA;">                imgsrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">imgsrv1,10</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                imgsrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">imgsrv2,20</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                new staticsrvs = </span><span style="color:#A1B567;">directors.round_robin</span><span style="color:#858585;">();</span></span>
<span class="line"><span style="color:#DBD7CA;">                appsrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">appsrv1</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                appsrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">appsrv2</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span></span>
<span class="line"><span style="color:#DBD7CA;">                new appsrvs = </span><span style="color:#A1B567;">directors.hash</span><span style="color:#858585;">();</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># hash\u7ED1\u5B9A,\u5B9E\u73B0session\u4F1A\u8BDD\u7C98\u6027</span></span>
<span class="line"><span style="color:#DBD7CA;">                appsrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">appsrv1,1</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">                appsrvs.add_backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">appsrv2,1</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">         </span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">sub vcl_recv </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)\\.(css|js)$&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                        </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = </span><span style="color:#A1B567;">staticsrvs.backend</span><span style="color:#858585;">();</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">               </span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.url </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?i)\\.(jpg|jpeg|png|gif)$&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                        </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = </span><span style="color:#A1B567;">imgsrvs.backend</span><span style="color:#858585;">();</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">                </span></span>
<span class="line"><span style="color:#DBD7CA;">                        </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> req.backend_hint = appsrvs.backend</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">req.http.cookie</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u4F20\u9012\u8BF7\u6C42\u62A5\u6587\u9996\u90E8\u7684cookie\u4FE1\u606F\u7ED9\u540E\u7AEF\u52A8\u6001server</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">backend imgsrv1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                .host = </span><span style="color:#B56959;">&quot;192.168.10.11&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">backend imgsrv2 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                .host = </span><span style="color:#B56959;">&quot;192.168.10.12&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">       </span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">backend appsrv1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                .host = </span><span style="color:#B56959;">&quot;192.168.10.21&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">backend appsrv2 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                .host = </span><span style="color:#B56959;">&quot;192.168.10.22&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                .port = </span><span style="color:#B56959;">&quot;80&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">sub vcl_init </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                new imgsrvs = </span><span style="color:#6C7834;">directors.random</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"><span style="color:#393A34;">                imgsrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">imgsrv1,10</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                imgsrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">imgsrv2,20</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                new staticsrvs = </span><span style="color:#6C7834;">directors.round_robin</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"><span style="color:#393A34;">                appsrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">appsrv1</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                appsrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">appsrv2</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                </span></span>
<span class="line"><span style="color:#393A34;">                new appsrvs = </span><span style="color:#6C7834;">directors.hash</span><span style="color:#8E8F8B;">();</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># hash\u7ED1\u5B9A,\u5B9E\u73B0session\u4F1A\u8BDD\u7C98\u6027</span></span>
<span class="line"><span style="color:#393A34;">                appsrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">appsrv1,1</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">                appsrvs.add_backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">appsrv2,1</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">         </span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">sub vcl_recv </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)\\.(css|js)$&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                        </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = </span><span style="color:#6C7834;">staticsrvs.backend</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">               </span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.url </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?i)\\.(jpg|jpeg|png|gif)$&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                        </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = </span><span style="color:#6C7834;">imgsrvs.backend</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">else</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">                </span></span>
<span class="line"><span style="color:#393A34;">                        </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> req.backend_hint = appsrvs.backend</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">req.http.cookie</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u4F20\u9012\u8BF7\u6C42\u62A5\u6587\u9996\u90E8\u7684cookie\u4FE1\u606F\u7ED9\u540E\u7AEF\u52A8\u6001server</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u793A\u4F8B\u90E8\u5206\u53C2\u8003: cnblogs @\u9ED1\u591C\u7E41\u661F</p></blockquote><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>backend server:<a href="https://varnish-cache.org/docs/5.2/users-guide/vcl-backends.html#backend-servers" target="_blank" rel="noopener noreferrer">https://varnish-cache.org/docs/5.2/users-guide/vcl-backends.html#backend-servers</a></li><li>purging and banning:<a href="https://varnish-cache.org/docs/5.2/users-guide/purging.html#purging-and-banning" target="_blank" rel="noopener noreferrer">https://varnish-cache.org/docs/5.2/users-guide/purging.html#purging-and-banning</a></li><li>health check:<a href="https://varnish-cache.org/docs/5.2/users-guide/vcl-backends.html?highlight=health%20check#health-checks" target="_blank" rel="noopener noreferrer">https://varnish-cache.org/docs/5.2/users-guide/vcl-backends.html?highlight=health check#health-checks</a></li></ul>`,30),e=[o];function c(t,r,y,A,i,B){return n(),a("div",null,e)}var d=s(l,[["render",c]]);export{C as __pageData,d as default};
