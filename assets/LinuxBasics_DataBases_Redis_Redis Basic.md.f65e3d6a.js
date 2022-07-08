import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"Redis \u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6237\u8BA4\u8BC1\u767B\u5F55\u53CA\u4FEE\u6539\u5BC6\u7801","slug":"\u7528\u6237\u8BA4\u8BC1\u767B\u5F55\u53CA\u4FEE\u6539\u5BC6\u7801"},{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"\u7BA1\u7406\u5B9E\u6218","slug":"\u7BA1\u7406\u5B9E\u6218"},{"level":3,"title":"strings\uFF08\u5B57\u7B26\uFF09\u7C7B\u578B\u64CD\u4F5C","slug":"strings\uFF08\u5B57\u7B26\uFF09\u7C7B\u578B\u64CD\u4F5C"},{"level":3,"title":"hash\uFF08\u5B57\u5178\uFF09\u7C7B\u578B\u64CD\u4F5C","slug":"hash\uFF08\u5B57\u5178\uFF09\u7C7B\u578B\u64CD\u4F5C"},{"level":3,"title":"List\uFF08\u5217\u8868\uFF09\u7C7B\u578B\u64CD\u4F5C","slug":"list\uFF08\u5217\u8868\uFF09\u7C7B\u578B\u64CD\u4F5C"},{"level":3,"title":"Set\uFF08\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C","slug":"set\uFF08\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C"},{"level":3,"title":"Sorted-Set\uFF08\u6709\u5E8F\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C","slug":"sorted-set\uFF08\u6709\u5E8F\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C"},{"level":2,"title":"Redis \u4E8B\u52A1","slug":"redis-\u4E8B\u52A1"},{"level":3,"title":"\u7B80\u5355\u6837\u4F8B","slug":"\u7B80\u5355\u6837\u4F8B"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/DataBases/Redis/Redis Basic.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/DataBases/Redis/Redis Basic.md"},o=l(`<h1 id="redis-\u57FA\u7840" tabindex="-1">Redis \u57FA\u7840 <a class="header-anchor" href="#redis-\u57FA\u7840" aria-hidden="true">#</a></h1><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># redis\u767B\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">$ redis-cli -h </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">host</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> -p </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">port</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> -a </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">password</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">redis 127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> PING</span></span>
<span class="line"><span style="color:#DBD7CA;">PONG</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># redis\u767B\u5F55</span></span>
<span class="line"><span style="color:#393A34;">$ redis-cli -h </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">host</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> -p </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">port</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> -a </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">password</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">redis 127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> PING</span></span>
<span class="line"><span style="color:#393A34;">PONG</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7528\u6237\u8BA4\u8BC1\u767B\u5F55\u53CA\u4FEE\u6539\u5BC6\u7801" tabindex="-1">\u7528\u6237\u8BA4\u8BC1\u767B\u5F55\u53CA\u4FEE\u6539\u5BC6\u7801 <a class="header-anchor" href="#\u7528\u6237\u8BA4\u8BC1\u767B\u5F55\u53CA\u4FEE\u6539\u5BC6\u7801" aria-hidden="true">#</a></h2><p>reids\u7684\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u4E3A<code>/etc/redis.conf</code>\uFF0C\u5982\u679C\u8981\u4FEE\u6539\u5BC6\u7801\uFF0C\u9700\u8981\u66F4\u6539\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u627E\u5230\u6539\u884C\uFF0C\u5E76\u53D6\u6D88\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#DBD7CA;">requirepass </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">YOUR_PASSWD_HERE</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u627E\u5230\u6539\u884C\uFF0C\u5E76\u53D6\u6D88\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#393A34;">requirepass </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">YOUR_PASSWD_HERE</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5B8C\u6210\u4E4B\u540E\u91CD\u542FRedis\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">service redis restart		</span><span style="color:#758575;"># \u5982\u679C\u914D\u7F6E\u6210\u670D\u52A1\u7684\u8BDD</span></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#DBD7CA;">/usr/local/bin/redis-cli shutdown</span></span>
<span class="line"><span style="color:#DBD7CA;">/usr/local/bin/redis-server /etc/redis.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">service redis restart		</span><span style="color:#A0ADA0;"># \u5982\u679C\u914D\u7F6E\u6210\u670D\u52A1\u7684\u8BDD</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#393A34;">/usr/local/bin/redis-cli shutdown</span></span>
<span class="line"><span style="color:#393A34;">/usr/local/bin/redis-server /etc/redis.conf</span></span>
<span class="line"></span></code></pre></div><p>\u547D\u4EE4\u884C\u4E2D\u4FEE\u6539\u5BC6\u7801\uFF08\u65E0\u9700\u91CD\u542F\u670D\u52A1\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> config </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> requirepass </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">YOUR_PASSWD_HERE</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> config get requirepass</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;requirepass&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;mUWPMPyv8I069o&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> config </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> requirepass </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">YOUR_PASSWD_HERE</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> config get requirepass</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;requirepass&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;mUWPMPyv8I069o&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>String\uFF1A \u5B57\u7B26\u4E32\u7C7B\u578B Hash\uFF1A \u54C8\u5E0C\u7C7B\u578B List\uFF1A \u5217\u8868\u7C7B\u578B Set\uFF1A \u96C6\u5408\u7C7B\u578B Sorted set\uFF1A \u987A\u5E8F\u96C6\u5408\u7C7B\u578B</p><h2 id="\u7BA1\u7406\u5B9E\u6218" tabindex="-1">\u7BA1\u7406\u5B9E\u6218 <a class="header-anchor" href="#\u7BA1\u7406\u5B9E\u6218" aria-hidden="true">#</a></h2><p>\u901A\u7528\u64CD\u4F5C</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u67E5\u770B\u6240\u6709\u7684key</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> KEYS </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;age&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;name&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u5224\u65ADkey\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> EXISTS name</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u53D8\u66F4key\u540D</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> RENAME age nianling</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770Bkey\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">type</span><span style="color:#DBD7CA;"> name</span></span>
<span class="line"><span style="color:#DBD7CA;">string</span></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664key</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> del name</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u4EE5\u79D2\u4E3A\u5355\u4F4D\u8BBE\u7F6E\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> EXPIRE name 10</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\u8BBE\u7F6E\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> PEXPIRE name 10000</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u53D6\u6D88\u5269\u4F59\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> PERSIST name</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u6240\u6709\u7684key</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> KEYS </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;age&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;name&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5224\u65ADkey\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> EXISTS name</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53D8\u66F4key\u540D</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> RENAME age nianling</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770Bkey\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">type</span><span style="color:#393A34;"> name</span></span>
<span class="line"><span style="color:#393A34;">string</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664key</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> del name</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4EE5\u79D2\u4E3A\u5355\u4F4D\u8BBE\u7F6E\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> EXPIRE name 10</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\u8BBE\u7F6E\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> PEXPIRE name 10000</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53D6\u6D88\u5269\u4F59\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> PERSIST name</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="strings\uFF08\u5B57\u7B26\uFF09\u7C7B\u578B\u64CD\u4F5C" tabindex="-1">strings\uFF08\u5B57\u7B26\uFF09\u7C7B\u578B\u64CD\u4F5C <a class="header-anchor" href="#strings\uFF08\u5B57\u7B26\uFF09\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u5E94\u7528\u573A\u666F\uFF1A</p><p>\u5E38\u89C4\u8BA1\u6570\uFF1A\u5FAE\u535A\u6570\u3001\u7C89\u4E1D\u6570\u3001\u76F4\u64AD\u5E73\u53F0</p><p>\u589E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u8BBE\u7F6Ekey</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> name zls</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E\u591A\u4E2Akey</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> mset name zls age 18 sex m</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E\u503C\u3001\u53D6\u503C\u540C\u65F6\u8FDB\u884C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> GETSET name zls</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">nil</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> GETSET name zls</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E\u503C\u540C\u65F6\u8BBE\u7F6E\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> name zls ex 10</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#758575;"># \u6570\u91CF\u9012\u5F52\u589E\u52A0</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> incr num</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u6307\u5B9A\u589E\u52A0\u6570\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> incrby num 2</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 8</span></span>
<span class="line"><span style="color:#758575;"># \u6570\u91CF\u9012\u51CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> DECR num</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> -1</span></span>
<span class="line"><span style="color:#758575;"># \u6307\u5B9A\u9012\u51CF\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> DECRBY num 2</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> -3</span></span>
<span class="line"><span style="color:#758575;"># \u6D6E\u70B9\u589E\u52A0</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> incrbyfloat float 0.6</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;0.6&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6Ekey</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> name zls</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u591A\u4E2Akey</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> mset name zls age 18 sex m</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u503C\u3001\u53D6\u503C\u540C\u65F6\u8FDB\u884C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> GETSET name zls</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">nil</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> GETSET name zls</span></span>
<span class="line"><span style="color:#B56959;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u503C\u540C\u65F6\u8BBE\u7F6E\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> name zls ex 10</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6570\u91CF\u9012\u5F52\u589E\u52A0</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> incr num</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6307\u5B9A\u589E\u52A0\u6570\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> incrby num 2</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 8</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6570\u91CF\u9012\u51CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> DECR num</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> -1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6307\u5B9A\u9012\u51CF\u6570</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> DECRBY num 2</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> -3</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6D6E\u70B9\u589E\u52A0</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> incrbyfloat float 0.6</span></span>
<span class="line"><span style="color:#B56959;">&quot;0.6&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5220\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5220\u9664\u5DF2\u6709key</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> DEL num</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u5DF2\u6709key</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> DEL num</span></span>
<span class="line"></span></code></pre></div><p>\u6539\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u8FFD\u52A0(\u82E5\u8BE5\u952E\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA)</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> APPEND name bgx</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 6</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u8FFD\u52A0\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get name</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;zlsbgx&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539\u7B2CN\u4E2A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> SETRANGE name 3 a</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 6</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get name</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;zlsagx&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8FFD\u52A0(\u82E5\u8BE5\u952E\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA)</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> APPEND name bgx</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 6</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u8FFD\u52A0\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get name</span></span>
<span class="line"><span style="color:#B56959;">&quot;zlsbgx&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u7B2CN\u4E2A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> SETRANGE name 3 a</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 6</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get name</span></span>
<span class="line"><span style="color:#B56959;">&quot;zlsagx&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u83B7\u53D6key\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get name</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770Bstring\u7C7B\u578B\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> STRLEN name</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 6</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u6307\u5B9A\u957F\u5EA6\u7684string\u7C7B\u578B</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> GETRANGE name  0 4</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;zlsag&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u4EE5\u79D2\u67E5\u8BE2key\u5269\u4F59\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> ttl name</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 8</span></span>
<span class="line"><span style="color:#758575;"># \u4EE5\u6BEB\u79D2\u67E5\u8BE2key\u5269\u4F59\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> pttl name</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 44016</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u591A\u4E2Akey\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> mget name age sex</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;18&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">3) </span><span style="color:#C98A7D;">&quot;m&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6key\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get name</span></span>
<span class="line"><span style="color:#B56959;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770Bstring\u7C7B\u578B\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> STRLEN name</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 6</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u6307\u5B9A\u957F\u5EA6\u7684string\u7C7B\u578B</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> GETRANGE name  0 4</span></span>
<span class="line"><span style="color:#B56959;">&quot;zlsag&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4EE5\u79D2\u67E5\u8BE2key\u5269\u4F59\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> ttl name</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 8</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4EE5\u6BEB\u79D2\u67E5\u8BE2key\u5269\u4F59\u751F\u5B58\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> pttl name</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 44016</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u591A\u4E2Akey\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> mget name age sex</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;18&quot;</span></span>
<span class="line"><span style="color:#393A34;">3) </span><span style="color:#B56959;">&quot;m&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5E94\u7528\u573A\u666F\u5B9E\u73B0:</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u7C89\u4E1D\u6570\u91CF\u589E\u52A0\uFF0C\u6BCF\u70B9\u4E00\u6B21\u5173\u6CE8\uFF0C\u90FD\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E00\u6B21</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> incr num</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u53D6\u6D88\u5173\u6CE8\u5219\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E00\u6B21</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> DECR num</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> -1</span></span>
<span class="line"><span style="color:#758575;"># \u663E\u793A\u7C89\u4E1D\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get num</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;6&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u6697\u7BB1\u64CD\u4F5C\uFF0C\u5237\u7C89\u4E1D\uFF086\u4E86\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> incrby num 10000</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 10006</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u7C89\u4E1D\u6570\u91CF\u589E\u52A0\uFF0C\u6BCF\u70B9\u4E00\u6B21\u5173\u6CE8\uFF0C\u90FD\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E00\u6B21</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> incr num</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53D6\u6D88\u5173\u6CE8\u5219\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E00\u6B21</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> DECR num</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> -1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u663E\u793A\u7C89\u4E1D\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get num</span></span>
<span class="line"><span style="color:#B56959;">&quot;6&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6697\u7BB1\u64CD\u4F5C\uFF0C\u5237\u7C89\u4E1D\uFF086\u4E86\uFF09</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> incrby num 10000</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 10006</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="hash\uFF08\u5B57\u5178\uFF09\u7C7B\u578B\u64CD\u4F5C" tabindex="-1">hash\uFF08\u5B57\u5178\uFF09\u7C7B\u578B\u64CD\u4F5C <a class="header-anchor" href="#hash\uFF08\u5B57\u5178\uFF09\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u5E94\u7528\u573A\u666F\uFF1A</p><p>\u5B58\u50A8\u90E8\u5206\u53D8\u66F4\u7684\u6570\u636E\uFF0C\u5982\u7528\u6237\u4FE1\u606F\uFF0C\u5546\u54C1\u4FE1\u606F\u7B49\u3002 \u6700\u63A5\u8FD1\u8868\u7ED3\u6784\u7684\u4E00\u79CD\u7C7B\u578B\u3002</p><p>\u589E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFAcar\u7684price\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hset car price 500</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFAcar\u7684name\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hset car name BMW</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFAcar\u7684date\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hset car date 1982</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E\u591A\u4E2A\u54C8\u5E0Ckey(\u7C7B\u4F3C\u4E8EMySQL\u7684\u4E00\u4E2A\u8868\u4E2D\u7684\u4E00\u884C\u6570\u636E)</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hmset teacher name zls age 18 sex m</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hmset teacher name bgx age 80 sex f</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFAcar\u7684price\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hset car price 500</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFAcar\u7684name\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hset car name BMW</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFAcar\u7684date\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hset car date 1982</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u591A\u4E2A\u54C8\u5E0Ckey(\u7C7B\u4F3C\u4E8EMySQL\u7684\u4E00\u4E2A\u8868\u4E2D\u7684\u4E00\u884C\u6570\u636E)</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hmset teacher name zls age 18 sex m</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hmset teacher name bgx age 80 sex f</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"></span></code></pre></div><p>\u5220\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5220\u9664hash\u7C7B\u578B\u4E2D\u7684\u4E00\u4E2A\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> HDEL teacher name</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664\u6574\u4E2Ahash\u7C7B\u578Bkey</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> DEL teacher</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5220\u9664hash\u7C7B\u578B\u4E2D\u7684\u4E00\u4E2A\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> HDEL teacher name</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u6574\u4E2Ahash\u7C7B\u578Bkey</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> DEL teacher</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"></span></code></pre></div><p>\u6539\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4FEE\u6539hash\u7C7B\u578B\u503C \u589E\u52A01</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hincrby myhash num 1</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539hash\u7C7B\u578B\u503C \u589E\u52A01</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hincrby myhash num 1</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u83B7\u53D6car\u7684name\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hget car name</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;BMW&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6key\u7684\u5168\u90E8value\u548C\u503C\uFF08\u8FD0\u7EF4\u5E38\u7528\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> hgetall car</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;price&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;500&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">3) </span><span style="color:#C98A7D;">&quot;name&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">4) </span><span style="color:#C98A7D;">&quot;BMW&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">5) </span><span style="color:#C98A7D;">&quot;date&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">6) </span><span style="color:#C98A7D;">&quot;1982&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6key\u4E2D\u90E8\u5206\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> HMGET teacher name sex</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;m&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6car\u7684name\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hget car name</span></span>
<span class="line"><span style="color:#B56959;">&quot;BMW&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6key\u7684\u5168\u90E8value\u548C\u503C\uFF08\u8FD0\u7EF4\u5E38\u7528\uFF09</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> hgetall car</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;price&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;500&quot;</span></span>
<span class="line"><span style="color:#393A34;">3) </span><span style="color:#B56959;">&quot;name&quot;</span></span>
<span class="line"><span style="color:#393A34;">4) </span><span style="color:#B56959;">&quot;BMW&quot;</span></span>
<span class="line"><span style="color:#393A34;">5) </span><span style="color:#B56959;">&quot;date&quot;</span></span>
<span class="line"><span style="color:#393A34;">6) </span><span style="color:#B56959;">&quot;1982&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6key\u4E2D\u90E8\u5206\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> HMGET teacher name sex</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;m&quot;</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="list\uFF08\u5217\u8868\uFF09\u7C7B\u578B\u64CD\u4F5C" tabindex="-1">List\uFF08\u5217\u8868\uFF09\u7C7B\u578B\u64CD\u4F5C <a class="header-anchor" href="#list\uFF08\u5217\u8868\uFF09\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u5E94\u7528\u573A\u666F\uFF1A</p><p>\u6D88\u606F\u961F\u5217\u7CFB\u7EDF</p><p>\u6BD4\u5982sina\u5FAE\u535A\uFF1A\u5728redis\u4E2D\u6211\u4EEC\u7684\u6700\u65B0\u5FAE\u535AID\u4F7F\u7528\u4E86\u5E38\u9A7B\u7F13\u5B58\uFF0C\u8FD9\u662F\u4E00\u76F4\u66F4\u65B0\u7684\u3002 \u4F46\u662F\u505A\u4E86\u9650\u5236\u4E0D\u80FD\u8D85\u8FC75000\u4E2AID\uFF0C\u56E0\u6B64\u83B7\u53D6ID\u7684\u51FD\u6570\u4F1A\u4E00\u53EA\u8BE2\u95EEredis\u3002 \u7CFB\u7EDF\u4E0D\u4F1A\u50CF\u4F20\u7EDF\u65B9\u5F0F\u90A3\u6837\u201C\u5237\u65B0\u201D\u7F13\u5B58\uFF0Credis\u5B9E\u4F8B\u4E2D\u7684\u4FE1\u606F\u6C38\u8FDC\u662F\u4E00\u81F4\u7684\u3002 SQL\u6570\u636E\u5E93\uFF08\u6216\u662F\u786C\u76D8\u4E0A\u7684\u5176\u4ED6\u7C7B\u578B\u6570\u636E\uFF09\u53EA\u662F\u5728\u7528\u6237\u9700\u8981\u83B7\u53D6\u201C\u5F88\u8FDC\u201D\u7684\u6570\u636E\u65F6\u624D\u4F1A\u88AB\u89E6\u53D1\uFF0C\u800C\u4E3B\u9875\u6216\u7B2C\u4E00\u4E2A\u8BC4\u8BBA\u9875\u662F\u4E0D\u4F1A\u9EBB\u70E6\u5230\u786C\u76D8\u4E0A\u7684\u6570\u636E\u5E93\u4E86\u3002</p><p>\u589E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5C06\u4E00\u4E2A\u503C\u6216\u8005\u591A\u4E2A\u503C\u63D2\u5165\u5217\u8868\u7684\u8868\u5934(\u82E5key\u4E0D\u5B58\u5728\uFF0C\u5219\u6DFB\u52A0key\u5E76\u4F9D\u6B21\u6DFB\u52A0)</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lpush list zls</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lpush list bgx</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lpush list oldboy</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 3</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lpush list alex</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 4</span></span>
<span class="line"><span style="color:#758575;"># \u4E00\u884C\u6DFB\u52A0</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lpush teacher zls bgx oldboy alex</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 4</span></span>
<span class="line"><span style="color:#758575;"># \u8FFD\u52A0\u4E00\u4E2Avalue\u503C\uFF0C\u82E5key\u4E0D\u5B58\u5728\uFF0C\u5219\u4E0D\u521B\u5EFA</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> LPUSHX teacher1 zls</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 0</span></span>
<span class="line"><span style="color:#758575;"># \u5728bgx\u524D\u9762\u6DFB\u52A0zls</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> linsert teacher before bgx zls</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 6</span></span>
<span class="line"><span style="color:#758575;"># \u5728\u5C3E\u90E8\u6DFB\u52A0key</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> rpush teacher wang5</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 7</span></span>
<span class="line"><span style="color:#758575;"># \u5C06teacher\u7684\u5C3E\u90E8\u5143\u7D20\u5F39\u51FA\uFF0C\u518D\u63D2\u5165\u5230teacher1\u7684\u5934\u90E8</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> rpoplpush teacher teacher1</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;wang5&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u4E00\u4E2A\u5217\u8868\u5185\u6709\u591A\u5C11\u884C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> llen list</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 4</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C06\u4E00\u4E2A\u503C\u6216\u8005\u591A\u4E2A\u503C\u63D2\u5165\u5217\u8868\u7684\u8868\u5934(\u82E5key\u4E0D\u5B58\u5728\uFF0C\u5219\u6DFB\u52A0key\u5E76\u4F9D\u6B21\u6DFB\u52A0)</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lpush list zls</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lpush list bgx</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lpush list oldboy</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 3</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lpush list alex</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 4</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E00\u884C\u6DFB\u52A0</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lpush teacher zls bgx oldboy alex</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 4</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FFD\u52A0\u4E00\u4E2Avalue\u503C\uFF0C\u82E5key\u4E0D\u5B58\u5728\uFF0C\u5219\u4E0D\u521B\u5EFA</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> LPUSHX teacher1 zls</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728bgx\u524D\u9762\u6DFB\u52A0zls</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> linsert teacher before bgx zls</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 6</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728\u5C3E\u90E8\u6DFB\u52A0key</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> rpush teacher wang5</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 7</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06teacher\u7684\u5C3E\u90E8\u5143\u7D20\u5F39\u51FA\uFF0C\u518D\u63D2\u5165\u5230teacher1\u7684\u5934\u90E8</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> rpoplpush teacher teacher1</span></span>
<span class="line"><span style="color:#B56959;">&quot;wang5&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u4E00\u4E2A\u5217\u8868\u5185\u6709\u591A\u5C11\u884C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> llen list</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 4</span></span>
<span class="line"></span></code></pre></div><p>\u5220\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5220\u9664key</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> del teacher</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u4ECE\u5934\u90E8\u5F00\u59CB\u627E,\u6309\u5148\u540E\u987A\u5E8F,\u503C\u4E3Aa\u7684\u5143\u7D20,\u5220\u9664\u6570\u91CF\u4E3A2\u4E2A,\u82E5\u5B58\u5728\u7B2C3\u4E2A,\u5219\u4E0D\u5220\u9664</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lrem teacher 2 zls</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#758575;"># \u4ECE\u5934\u5F00\u59CB,\u7D22\u5F15\u4E3A0,1,2\u76843\u4E2A\u5143\u7D20,\u5176\u4F59\u5168\u90E8\u5220\u9664\u6539</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> ltrim teacher 0 2</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5220\u9664key</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> del teacher</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4ECE\u5934\u90E8\u5F00\u59CB\u627E,\u6309\u5148\u540E\u987A\u5E8F,\u503C\u4E3Aa\u7684\u5143\u7D20,\u5220\u9664\u6570\u91CF\u4E3A2\u4E2A,\u82E5\u5B58\u5728\u7B2C3\u4E2A,\u5219\u4E0D\u5220\u9664</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lrem teacher 2 zls</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4ECE\u5934\u5F00\u59CB,\u7D22\u5F15\u4E3A0,1,2\u76843\u4E2A\u5143\u7D20,\u5176\u4F59\u5168\u90E8\u5220\u9664\u6539</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> ltrim teacher 0 2</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"></span></code></pre></div><p>\u6539\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4ECE\u5934\u5F00\u59CB, \u5C06\u7D22\u5F15\u4E3A1\u7684\u5143\u7D20\u503C,\u8BBE\u7F6E\u4E3A\u65B0\u503C e,\u82E5\u7D22\u5F15\u8D8A\u754C,\u5219\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lset teacher 1 </span><span style="color:#E0A569;">test</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#758575;"># \u5C06 teacher \u4E2D\u7684\u5C3E\u90E8\u5143\u7D20\u79FB\u5230\u5176\u5934\u90E8</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> rpoplpush teacher teacher</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;oldboy&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4ECE\u5934\u5F00\u59CB, \u5C06\u7D22\u5F15\u4E3A1\u7684\u5143\u7D20\u503C,\u8BBE\u7F6E\u4E3A\u65B0\u503C e,\u82E5\u7D22\u5F15\u8D8A\u754C,\u5219\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lset teacher 1 </span><span style="color:#B58451;">test</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 teacher \u4E2D\u7684\u5C3E\u90E8\u5143\u7D20\u79FB\u5230\u5176\u5934\u90E8</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> rpoplpush teacher teacher</span></span>
<span class="line"><span style="color:#B56959;">&quot;oldboy&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5217\u8868\u5934\u90E8\u5F39\u51FA\uFF0C\u5F39\u4E00\u884C\u5C11\u4E00\u884C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lpop teacher</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u5217\u8868\u5C3E\u90E8</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> rpop teacher</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;wang5&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u8BE2\u7D22\u5F15\uFF08\u5934\u90E8\u5F00\u59CB\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lindex list 0</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u8BE2\u7D22\u5F15\uFF08\u5C3E\u90E8\u7B2C\u4E00\u4E2A\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lindex list -1</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;alex&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u8303\u56F4\u67E5\u8BE2\u7D22\u5F15</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> lrange list 0 1</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;oldboy&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5217\u8868\u5934\u90E8\u5F39\u51FA\uFF0C\u5F39\u4E00\u884C\u5C11\u4E00\u884C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lpop teacher</span></span>
<span class="line"><span style="color:#B56959;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5217\u8868\u5C3E\u90E8</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> rpop teacher</span></span>
<span class="line"><span style="color:#B56959;">&quot;wang5&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u8BE2\u7D22\u5F15\uFF08\u5934\u90E8\u5F00\u59CB\uFF09</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lindex list 0</span></span>
<span class="line"><span style="color:#B56959;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u8BE2\u7D22\u5F15\uFF08\u5C3E\u90E8\u7B2C\u4E00\u4E2A\uFF09</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lindex list -1</span></span>
<span class="line"><span style="color:#B56959;">&quot;alex&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8303\u56F4\u67E5\u8BE2\u7D22\u5F15</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> lrange list 0 1</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;oldboy&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5FAE\u535A\u3001\u5FAE\u4FE1\u670B\u53CB\u5708\u573A\u666F\u5B9E\u73B0:</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u53D1\u670B\u53CB\u5708</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> LPUSH wechat </span><span style="color:#C98A7D;">&quot;monday,bgx is a bad man&quot;</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> LPUSH wechat </span><span style="color:#C98A7D;">&quot;Tuesday,zls is a nice boy&quot;</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> LPUSH wechat </span><span style="color:#C98A7D;">&quot;Wednesday,alex is a loser&quot;</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u670B\u53CB\u5708\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> LRANGE wechat 0 -1</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;Wednesday,zls is a nice boy&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;Tuesday,zls is a nice boy&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">3) </span><span style="color:#C98A7D;">&quot;monday,zls is a nice boy&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u53D1\u670B\u53CB\u5708</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> LPUSH wechat </span><span style="color:#B56959;">&quot;monday,bgx is a bad man&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> LPUSH wechat </span><span style="color:#B56959;">&quot;Tuesday,zls is a nice boy&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> LPUSH wechat </span><span style="color:#B56959;">&quot;Wednesday,alex is a loser&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u670B\u53CB\u5708\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> LRANGE wechat 0 -1</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;Wednesday,zls is a nice boy&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;Tuesday,zls is a nice boy&quot;</span></span>
<span class="line"><span style="color:#393A34;">3) </span><span style="color:#B56959;">&quot;monday,zls is a nice boy&quot;</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="set\uFF08\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C" tabindex="-1">Set\uFF08\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C <a class="header-anchor" href="#set\uFF08\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u5E94\u7528\u573A\u666F\uFF1A</p><p>\u5728\u5FAE\u535A\u5E94\u7528\u4E2D\uFF0C\u53EF\u4EE5\u5C06\u4E00\u4E2A\u7528\u6237\u6240\u6709\u7684\u5173\u6CE8\u4EBA\u5B58\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D\uFF0C\u5C06\u5176\u6240\u6709\u7C89\u4E1D\u5B58\u5728\u4E00\u4E2A\u96C6\u5408\u3002Redis\u8FD8\u4E3A\u96C6\u5408\u63D0\u4F9B\u4E86\u6C42\u4EA4\u96C6\u3001\u5E76\u96C6\u3001\u5DEE\u96C6\u7B49\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u7684\u5B9E\u73B0\u5982\u5171\u540C\u5173\u6CE8\u3001\u5171\u540C\u559C\u597D\u3001\u4E8C\u5EA6\u597D\u53CB\u7B49\u529F\u80FD\uFF0C\u5BF9\u4E0A\u9762\u7684\u6240\u6709\u96C6\u5408\u64CD\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u547D\u4EE4\u9009\u62E9\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u8FD8\u662F\u5B58\u96C6\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D\u3002</p><p>\u589E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u82E5key\u4E0D\u5B58\u5728,\u521B\u5EFA\u8BE5\u952E\u53CA\u4E0E\u5176\u5173\u8054\u7684set,\u4F9D\u6B21\u63D2\u5165bgx\u3001lidao\u3001xiaomimei\u82E5key\u5B58\u5728,\u5219\u63D2\u5165value\u4E2D,\u82E5bgx\u5728zls_fans\u4E2D\u5DF2\u7ECF\u5B58\u5728,\u5219\u63D2\u5165\u4E86lidao\u548Cxiaomimei\u4E24\u4E2A\u65B0\u6210\u5458\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sadd zls_fans bgx lidao xiaomimei</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u82E5key\u4E0D\u5B58\u5728,\u521B\u5EFA\u8BE5\u952E\u53CA\u4E0E\u5176\u5173\u8054\u7684set,\u4F9D\u6B21\u63D2\u5165bgx\u3001lidao\u3001xiaomimei\u82E5key\u5B58\u5728,\u5219\u63D2\u5165value\u4E2D,\u82E5bgx\u5728zls_fans\u4E2D\u5DF2\u7ECF\u5B58\u5728,\u5219\u63D2\u5165\u4E86lidao\u548Cxiaomimei\u4E24\u4E2A\u65B0\u6210\u5458\u3002</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sadd zls_fans bgx lidao xiaomimei</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 3</span></span>
<span class="line"></span></code></pre></div><p>\u5220\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5C3E\u90E8\u7684b\u88AB\u79FB\u51FA,\u4E8B\u5B9E\u4E0Ab\u5E76\u4E0D\u662F\u4E4B\u524D\u63D2\u5165\u7684\u7B2C\u4E00\u4E2A\u6216\u6700\u540E\u4E00\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> spop zls_fans</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u82E5\u503C\u4E0D\u5B58\u5728, \u79FB\u51FA\u5B58\u5728\u7684\u503C,\u5E76\u8FD4\u56DE\u5269\u4F59\u503C\u5F97\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> SREM zls_fans lidao oldboy alex</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C3E\u90E8\u7684b\u88AB\u79FB\u51FA,\u4E8B\u5B9E\u4E0Ab\u5E76\u4E0D\u662F\u4E4B\u524D\u63D2\u5165\u7684\u7B2C\u4E00\u4E2A\u6216\u6700\u540E\u4E00\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> spop zls_fans</span></span>
<span class="line"><span style="color:#B56959;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u82E5\u503C\u4E0D\u5B58\u5728, \u79FB\u51FA\u5B58\u5728\u7684\u503C,\u5E76\u8FD4\u56DE\u5269\u4F59\u503C\u5F97\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> SREM zls_fans lidao oldboy alex</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"></span></code></pre></div><p>\u6539\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5C06\u5C0F\u8FF7\u59B9\u4ECE zls_fans \u79FB\u5230 bgx_fans</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> SMOVE zls_fans bgx_fans xiaomimei</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C06\u5C0F\u8FF7\u59B9\u4ECE zls_fans \u79FB\u5230 bgx_fans</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> SMOVE zls_fans bgx_fans xiaomimei</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5224\u65ADxiaomimei\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\uFF0C\u8FD4\u56DE\u503C\u4E3A 1 \u8868\u793A\u5B58\u5728</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> SISMEMBER zls_fans xiaomimei</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 0</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> SISMEMBER bgx_fans xiaomimei</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770Bset\u4E2D\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> SMEMBERS zls_fans</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;xiaomimei&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">3) </span><span style="color:#C98A7D;">&quot;lidao&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6Set \u96C6\u5408\u4E2D\u5143\u7D20\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> scard zls_fans</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 0</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> scard bgx_fans</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u968F\u673A\u7684\u8FD4\u56DE\u67D0\u4E00\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> srandmember bgx_fans</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;xiaomimei&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA\u4E09\u4E2A\u96C6\u5408</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sadd zls_fans bgx lidao xiaomimei</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 3</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sadd bgx_fans zls lidao xiaomimei</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sadd lidao_fans 0</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># 1\u548C2\u5F97\u5230\u4E00\u4E2A\u7ED3\u679C,\u62FF\u8FD9\u4E2A\u96C6\u5408\u548C3\u6BD4\u8F83,\u83B7\u5F97\u6BCF\u4E2A\u72EC\u6709\u7684\u503C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sdiff zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#758575;"># 3\u4E2A\u96C6\u548C\u6BD4\u8F83,\u83B7\u53D6\u72EC\u6709\u7684\u5143\u7D20,\u5E76\u5B58\u5165diffkey \u5173\u8054\u7684Set\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sdiffstore diffkey zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u5F973\u4E2A\u96C6\u5408\u4E2D\u90FD\u6709\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sinter zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">empty list or set</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">    //\u56E0\u4E3A\u8FD9\u91CC\u6CA1\u6709\u4EA4\u96C6\uFF0C\u6240\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u96C6\u5408</span></span>
<span class="line"><span style="color:#758575;"># \u628A\u4EA4\u96C6\u5B58\u5165interkey \u5173\u8054\u7684Set\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sinterstore interkey bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 0  // \u56E0\u4E3A\u8FD9\u91CC\u6CA1\u6709\u4EA4\u96C6\uFF0C\u6240\u4EE5\u5B58\u5165\u7684\u503C\u4E3A0</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D63\u4E2A\u96C6\u5408\u4E2D\u7684\u6210\u5458\u7684\u5E76\u96C6</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sunion zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;xiaomimei&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">3) </span><span style="color:#C98A7D;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">4) </span><span style="color:#C98A7D;">&quot;lidao&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">5) </span><span style="color:#C98A7D;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u628A\u5E76\u96C6\u5B58\u5165unionkey \u5173\u8054\u7684Set\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> sunionstore unionkey zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 5</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5224\u65ADxiaomimei\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\uFF0C\u8FD4\u56DE\u503C\u4E3A 1 \u8868\u793A\u5B58\u5728</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> SISMEMBER zls_fans xiaomimei</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 0</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> SISMEMBER bgx_fans xiaomimei</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770Bset\u4E2D\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> SMEMBERS zls_fans</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;xiaomimei&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#393A34;">3) </span><span style="color:#B56959;">&quot;lidao&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6Set \u96C6\u5408\u4E2D\u5143\u7D20\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> scard zls_fans</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 0</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> scard bgx_fans</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u968F\u673A\u7684\u8FD4\u56DE\u67D0\u4E00\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> srandmember bgx_fans</span></span>
<span class="line"><span style="color:#B56959;">&quot;xiaomimei&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E09\u4E2A\u96C6\u5408</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sadd zls_fans bgx lidao xiaomimei</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 3</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sadd bgx_fans zls lidao xiaomimei</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sadd lidao_fans 0</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 1\u548C2\u5F97\u5230\u4E00\u4E2A\u7ED3\u679C,\u62FF\u8FD9\u4E2A\u96C6\u5408\u548C3\u6BD4\u8F83,\u83B7\u5F97\u6BCF\u4E2A\u72EC\u6709\u7684\u503C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sdiff zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># 3\u4E2A\u96C6\u548C\u6BD4\u8F83,\u83B7\u53D6\u72EC\u6709\u7684\u5143\u7D20,\u5E76\u5B58\u5165diffkey \u5173\u8054\u7684Set\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sdiffstore diffkey zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u5F973\u4E2A\u96C6\u5408\u4E2D\u90FD\u6709\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sinter zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">empty list or set</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">    //\u56E0\u4E3A\u8FD9\u91CC\u6CA1\u6709\u4EA4\u96C6\uFF0C\u6240\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u96C6\u5408</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u628A\u4EA4\u96C6\u5B58\u5165interkey \u5173\u8054\u7684Set\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sinterstore interkey bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 0  // \u56E0\u4E3A\u8FD9\u91CC\u6CA1\u6709\u4EA4\u96C6\uFF0C\u6240\u4EE5\u5B58\u5165\u7684\u503C\u4E3A0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D63\u4E2A\u96C6\u5408\u4E2D\u7684\u6210\u5458\u7684\u5E76\u96C6</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sunion zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;bgx&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;xiaomimei&quot;</span></span>
<span class="line"><span style="color:#393A34;">3) </span><span style="color:#B56959;">&quot;zls&quot;</span></span>
<span class="line"><span style="color:#393A34;">4) </span><span style="color:#B56959;">&quot;lidao&quot;</span></span>
<span class="line"><span style="color:#393A34;">5) </span><span style="color:#B56959;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u628A\u5E76\u96C6\u5B58\u5165unionkey \u5173\u8054\u7684Set\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> sunionstore unionkey zls_fans bgx_fans lidao_fans</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 5</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="sorted-set\uFF08\u6709\u5E8F\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C" tabindex="-1">Sorted-Set\uFF08\u6709\u5E8F\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C <a class="header-anchor" href="#sorted-set\uFF08\u6709\u5E8F\u96C6\u5408\uFF09\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u5E94\u7528\u573A\u666F\uFF1A</p><p>\u6392\u884C\u699C\u5E94\u7528\uFF0C\u53D6TOP N\u64CD\u4F5C \u8FD9\u4E2A\u9700\u6C42\u4E0E\u4E0A\u9762\u9700\u6C42\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u524D\u9762\u64CD\u4F5C\u4EE5\u65F6\u95F4\u4E3A\u6743\u91CD\uFF0C\u8FD9\u4E2A\u662F\u4EE5\u67D0\u4E2A\u6761\u4EF6\u4E3A\u6743\u91CD\uFF0C\u6BD4\u5982\u6309\u9876\u7684\u6B21\u6570\u6392\u5E8F\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u6211\u4EEC\u7684sorted set\u51FA\u9A6C\u4E86\uFF0C\u5C06\u4F60\u8981\u6392\u5E8F\u7684\u503C\u8BBE\u7F6E\u6210sorted set\u7684score\uFF0C\u5C06\u5177\u4F53\u7684\u6570\u636E\u8BBE\u7F6E\u6210\u76F8\u5E94\u7684value\uFF0C\u6BCF\u6B21\u53EA\u9700\u8981\u6267\u884C\u4E00\u6761ZADD\u547D\u4EE4\u5373\u53EF\u3002</p><p>\u589E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u4E24\u4E2A\u5206\u6570\u5206\u522B\u662F 2 \u548C 3 \u7684\u4E24\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zadd myzset 2 </span><span style="color:#C98A7D;">&quot;two&quot;</span><span style="color:#DBD7CA;"> 3 </span><span style="color:#C98A7D;">&quot;three&quot;</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u4E24\u4E2A\u5206\u6570\u5206\u522B\u662F 2 \u548C 3 \u7684\u4E24\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zadd myzset 2 </span><span style="color:#B56959;">&quot;two&quot;</span><span style="color:#393A34;"> 3 </span><span style="color:#B56959;">&quot;three&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 2</span></span>
<span class="line"></span></code></pre></div><p>\u5220\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5220\u9664\u591A\u4E2A\u6210\u5458\u53D8\u91CF,\u8FD4\u56DE\u5220\u9664\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrem myzset one two</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u591A\u4E2A\u6210\u5458\u53D8\u91CF,\u8FD4\u56DE\u5220\u9664\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrem myzset one two</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"></span></code></pre></div><p>\u6539\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5C06\u6210\u5458 one \u7684\u5206\u6570\u589E\u52A0 2\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u6210\u5458\u66F4\u65B0\u540E\u7684\u5206\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zincrby myzset 2 one</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;2&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5C06\u6210\u5458 one \u7684\u5206\u6570\u589E\u52A0 2\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u6210\u5458\u66F4\u65B0\u540E\u7684\u5206\u6570</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zincrby myzset 2 one</span></span>
<span class="line"><span style="color:#B56959;">&quot;2&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u8FD4\u56DE\u6240\u6709\u6210\u5458\u548C\u5206\u6570,\u4E0D\u52A0WITHSCORES,\u53EA\u8FD4\u56DE\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrange myzset 0 -1 WITHSCORES</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;one&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">3) </span><span style="color:#C98A7D;">&quot;three&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">4) </span><span style="color:#C98A7D;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u6210\u5458one\u5728Sorted-Set\u4E2D\u7684\u4F4D\u7F6E\u7D22\u5F15\u503C\u30020\u8868\u793A\u7B2C\u4E00\u4E2A\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrank myzset one</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 0</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6 myzset \u952E\u4E2D\u6210\u5458\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zcard myzset</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u5206\u6570\u6EE1\u8DB3\u8868\u8FBE\u5F0F 1 &lt;= score &lt;= 2 \u7684\u6210\u5458\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zcount myzset 1 2</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1  </span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u6210\u5458 three \u7684\u5206\u6570 </span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zscore myzset three</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u5206\u6570\u6EE1\u8DB3\u8868\u8FBE\u5F0F 1 &lt; score &lt;= 2 \u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrangebyscore myzset  1 2</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;one&quot;</span></span>
<span class="line"><span style="color:#758575;"># -inf \u8868\u793A\u7B2C\u4E00\u4E2A\u6210\u5458\uFF0C+inf\u6700\u540E\u4E00\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#758575;"># limit\u9650\u5236\u5173\u952E\u5B57</span></span>
<span class="line"><span style="color:#758575;"># 2  3  \u662F\u7D22\u5F15\u53F7</span></span>
<span class="line"><span style="color:#DBD7CA;">zrangebyscore myzset -inf +inf limit 2 3  \u8FD4\u56DE\u7D22\u5F15\u662F2\u548C3\u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664\u5206\u6570 1&lt;= score &lt;= 2 \u7684\u6210\u5458\uFF0C\u5E76\u8FD4\u56DE\u5B9E\u9645\u5220\u9664\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zremrangebyscore myzset 1 2</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664\u4F4D\u7F6E\u7D22\u5F15\u6EE1\u8DB3\u8868\u8FBE\u5F0F 0 &lt;= rank &lt;= 1 \u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zremrangebyrank myzset 0 1</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">integer</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u6309\u4F4D\u7F6E\u7D22\u5F15\u4ECE\u9AD8\u5230\u4F4E,\u83B7\u53D6\u6240\u6709\u6210\u5458\u548C\u5206\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrevrange myzset 0 -1 WITHSCORES</span></span>
<span class="line"><span style="color:#758575;"># \u539F\u59CB\u6210\u5458:\u4F4D\u7F6E\u7D22\u5F15\u4ECE\u5C0F\u5230\u5927</span></span>
<span class="line"><span style="color:#DBD7CA;">      one  0</span></span>
<span class="line"><span style="color:#DBD7CA;">      two  1</span></span>
<span class="line"><span style="color:#758575;"># \u6267\u884C\u987A\u5E8F:\u628A\u7D22\u5F15\u53CD\u8F6C</span></span>
<span class="line"><span style="color:#DBD7CA;">      \u4F4D\u7F6E\u7D22\u5F15:\u4ECE\u5927\u5230\u5C0F</span></span>
<span class="line"><span style="color:#DBD7CA;">      one 1</span></span>
<span class="line"><span style="color:#DBD7CA;">      two 0</span></span>
<span class="line"><span style="color:#758575;"># \u8F93\u51FA\u7ED3\u679C: </span></span>
<span class="line"><span style="color:#DBD7CA;">       two</span></span>
<span class="line"><span style="color:#DBD7CA;">       one</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u4F4D\u7F6E\u7D22\u5F15,\u4E3A1,2,3\u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrevrange myzset 1 3</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">empty list or set</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#758575;"># \u76F8\u53CD\u7684\u987A\u5E8F:\u4ECE\u9AD8\u5230\u4F4E\u7684\u987A\u5E8F</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u5206\u6570 3&gt;=score&gt;=0\u7684\u6210\u5458\u5E76\u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u8F93\u51FA</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrevrangebyscore myzset 3 0</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">empty list or set</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u7D22\u5F15\u662F1\u548C2\u7684\u6210\u5458,\u5E76\u53CD\u8F6C\u4F4D\u7F6E\u7D22\u5F15</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> zrevrangebyscore myzset 4 0 limit 1 2</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">empty list or set</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8FD4\u56DE\u6240\u6709\u6210\u5458\u548C\u5206\u6570,\u4E0D\u52A0WITHSCORES,\u53EA\u8FD4\u56DE\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrange myzset 0 -1 WITHSCORES</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;one&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#393A34;">3) </span><span style="color:#B56959;">&quot;three&quot;</span></span>
<span class="line"><span style="color:#393A34;">4) </span><span style="color:#B56959;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u6210\u5458one\u5728Sorted-Set\u4E2D\u7684\u4F4D\u7F6E\u7D22\u5F15\u503C\u30020\u8868\u793A\u7B2C\u4E00\u4E2A\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrank myzset one</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6 myzset \u952E\u4E2D\u6210\u5458\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zcard myzset</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u5206\u6570\u6EE1\u8DB3\u8868\u8FBE\u5F0F 1 &lt;= score &lt;= 2 \u7684\u6210\u5458\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zcount myzset 1 2</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1  </span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u6210\u5458 three \u7684\u5206\u6570 </span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zscore myzset three</span></span>
<span class="line"><span style="color:#B56959;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u5206\u6570\u6EE1\u8DB3\u8868\u8FBE\u5F0F 1 &lt; score &lt;= 2 \u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrangebyscore myzset  1 2</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;one&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># -inf \u8868\u793A\u7B2C\u4E00\u4E2A\u6210\u5458\uFF0C+inf\u6700\u540E\u4E00\u4E2A\u6210\u5458</span></span>
<span class="line"><span style="color:#A0ADA0;"># limit\u9650\u5236\u5173\u952E\u5B57</span></span>
<span class="line"><span style="color:#A0ADA0;"># 2  3  \u662F\u7D22\u5F15\u53F7</span></span>
<span class="line"><span style="color:#393A34;">zrangebyscore myzset -inf +inf limit 2 3  \u8FD4\u56DE\u7D22\u5F15\u662F2\u548C3\u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u5206\u6570 1&lt;= score &lt;= 2 \u7684\u6210\u5458\uFF0C\u5E76\u8FD4\u56DE\u5B9E\u9645\u5220\u9664\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zremrangebyscore myzset 1 2</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u4F4D\u7F6E\u7D22\u5F15\u6EE1\u8DB3\u8868\u8FBE\u5F0F 0 &lt;= rank &lt;= 1 \u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zremrangebyrank myzset 0 1</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">integer</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6309\u4F4D\u7F6E\u7D22\u5F15\u4ECE\u9AD8\u5230\u4F4E,\u83B7\u53D6\u6240\u6709\u6210\u5458\u548C\u5206\u6570</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrevrange myzset 0 -1 WITHSCORES</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u539F\u59CB\u6210\u5458:\u4F4D\u7F6E\u7D22\u5F15\u4ECE\u5C0F\u5230\u5927</span></span>
<span class="line"><span style="color:#393A34;">      one  0</span></span>
<span class="line"><span style="color:#393A34;">      two  1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6267\u884C\u987A\u5E8F:\u628A\u7D22\u5F15\u53CD\u8F6C</span></span>
<span class="line"><span style="color:#393A34;">      \u4F4D\u7F6E\u7D22\u5F15:\u4ECE\u5927\u5230\u5C0F</span></span>
<span class="line"><span style="color:#393A34;">      one 1</span></span>
<span class="line"><span style="color:#393A34;">      two 0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8F93\u51FA\u7ED3\u679C: </span></span>
<span class="line"><span style="color:#393A34;">       two</span></span>
<span class="line"><span style="color:#393A34;">       one</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u4F4D\u7F6E\u7D22\u5F15,\u4E3A1,2,3\u7684\u6210\u5458</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrevrange myzset 1 3</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">empty list or set</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u76F8\u53CD\u7684\u987A\u5E8F:\u4ECE\u9AD8\u5230\u4F4E\u7684\u987A\u5E8F</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u5206\u6570 3&gt;=score&gt;=0\u7684\u6210\u5458\u5E76\u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u8F93\u51FA</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrevrangebyscore myzset 3 0</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">empty list or set</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u7D22\u5F15\u662F1\u548C2\u7684\u6210\u5458,\u5E76\u53CD\u8F6C\u4F4D\u7F6E\u7D22\u5F15</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> zrevrangebyscore myzset 4 0 limit 1 2</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">empty list or set</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="redis-\u4E8B\u52A1" tabindex="-1">Redis \u4E8B\u52A1 <a class="header-anchor" href="#redis-\u4E8B\u52A1" aria-hidden="true">#</a></h2><p>Redis \u4E8B\u52A1\u548CMysql \u4E8B\u52A1\u7684\u4E0D\u540C\u70B9\uFF1A</p><p>redis\u4E2D\u7684\u4E8B\u52A1\u8DDF\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u7684\u4E8B\u52A1\u662F\u4E00\u4E2A\u76F8\u4F3C\u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u6709\u4E0D\u540C\u4E4B\u5904\u3002\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E8B\u52A1\u6267\u884C\u5931\u8D25\u540E\u9762\u7684sql\u8BED\u53E5\u4E0D\u5728\u6267\u884C\u524D\u9762\u7684\u64CD\u4F5C\u90FD\u4F1A\u56DE\u6EDA\uFF0C\u800C\u5728redis\u4E2D\u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1\u65F6\u4F1A\u628A\u6240\u6709\u547D\u4EE4\u90FD\u653E\u5728\u4E00\u4E2A\u961F\u5217\u4E2D\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u5E76\u6CA1\u6709\u771F\u6B63\u7684\u6267\u884C\uFF0C<em>\u5982\u679C\u6709\u4E00\u4E2A\u547D\u4EE4\u62A5\u9519\uFF0C\u5219\u53D6\u6D88\u8FD9\u4E2A\u961F\u5217\uFF0C\u6240\u6709\u547D\u4EE4\u90FD\u4E0D\u518D\u6267\u884C</em>\u3002</p><p><img src="http://bak.agou-ops.top/uploads/redis/images/m_74f80af14efc08c54908d73f87895de4_r.png" alt="null"></p><p>Redis \u4E8B\u52A1\u76F8\u5173\u547D\u4EE4\uFF1A</p><p>1\uFF09DISCARD \u53D6\u6D88\u4E8B\u52A1\uFF0C\u653E\u5F03\u6267\u884C\u4E8B\u52A1\u5757\u5185\u7684\u6240\u6709\u547D\u4EE4\u3002 2\uFF09EXEC \u6267\u884C\u6240\u6709\u4E8B\u52A1\u5757\u5185\u7684\u547D\u4EE4\u3002 3\uFF09MULTI \u6807\u8BB0\u4E00\u4E2A\u4E8B\u52A1\u5757\u7684\u5F00\u59CB\u3002 4\uFF09UNWATCH \u53D6\u6D88 WATCH \u547D\u4EE4\u5BF9\u6240\u6709 key \u7684\u76D1\u89C6\u3002 5\uFF09WATCH key [key \u2026] \u76D1\u89C6\u4E00\u4E2A(\u6216\u591A\u4E2A) key \uFF0C\u5982\u679C\u5728\u4E8B\u52A1\u6267\u884C\u4E4B\u524D\u8FD9\u4E2A(\u6216\u8FD9\u4E9B) key \u88AB\u5176\u4ED6\u547D\u4EE4\u6240\u6539\u52A8\uFF0C\u90A3\u4E48\u4E8B\u52A1\u5C06\u88AB\u6253\u65AD\u3002</p><h3 id="\u7B80\u5355\u6837\u4F8B" tabindex="-1">\u7B80\u5355\u6837\u4F8B <a class="header-anchor" href="#\u7B80\u5355\u6837\u4F8B" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#\u767B\u5F55redis</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> redis-cli</span></span>
<span class="line"><span style="color:#758575;">#\u9A8C\u8BC1\u5BC6\u7801</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> auth 123</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#758575;">#\u4E0D\u5F00\u542F\u4E8B\u52A1\u76F4\u63A5\u8BBE\u7F6Ekey</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> zls </span><span style="color:#C98A7D;">&quot;Nice&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#758575;">#\u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get zls</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;Nice&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> MULTI</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"><span style="color:#758575;">#\u8BBE\u7F6E\u4E00\u4E2Akey</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> bgx </span><span style="color:#C98A7D;">&quot;low&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">QUEUED</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> alex </span><span style="color:#C98A7D;">&quot;Ugly&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">QUEUED</span></span>
<span class="line"><span style="color:#758575;">#\u5F00\u542F\u53E6\u4E00\u4E2A\u7A97\u53E3\u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get bgx</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">nil</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get alex</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">nil</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u6267\u884Cexec\u5B8C\u6210\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> EXEC</span></span>
<span class="line"><span style="color:#DBD7CA;">1) OK</span></span>
<span class="line"><span style="color:#DBD7CA;">2) OK</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u518D\u6B21\u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get bgx</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;low&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> get alex</span></span>
<span class="line"><span style="color:#C98A7D;">&quot;Ugly&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#\u767B\u5F55redis</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> redis-cli</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u9A8C\u8BC1\u5BC6\u7801</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> auth 123</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u4E0D\u5F00\u542F\u4E8B\u52A1\u76F4\u63A5\u8BBE\u7F6Ekey</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> zls </span><span style="color:#B56959;">&quot;Nice&quot;</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get zls</span></span>
<span class="line"><span style="color:#B56959;">&quot;Nice&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u5F00\u542F\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> MULTI</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u8BBE\u7F6E\u4E00\u4E2Akey</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> bgx </span><span style="color:#B56959;">&quot;low&quot;</span></span>
<span class="line"><span style="color:#393A34;">QUEUED</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> alex </span><span style="color:#B56959;">&quot;Ugly&quot;</span></span>
<span class="line"><span style="color:#393A34;">QUEUED</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5F00\u542F\u53E6\u4E00\u4E2A\u7A97\u53E3\u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get bgx</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">nil</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get alex</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">nil</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u6267\u884Cexec\u5B8C\u6210\u4E8B\u52A1</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> EXEC</span></span>
<span class="line"><span style="color:#393A34;">1) OK</span></span>
<span class="line"><span style="color:#393A34;">2) OK</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u518D\u6B21\u67E5\u770B\u7ED3\u679C</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get bgx</span></span>
<span class="line"><span style="color:#B56959;">&quot;low&quot;</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> get alex</span></span>
<span class="line"><span style="color:#B56959;">&quot;Ugly&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Redis \u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5E38\u7528\u547D\u4EE4\uFF1A <a href="https://juejin.im/post/6844904039159873544" target="_blank" rel="noopener noreferrer">https://juejin.im/post/6844904039159873544</a></li></ul>`,89),e=[o];function c(t,r,y,A,i,D){return n(),a("div",null,e)}var g=s(p,[["render",c]]);export{C as __pageData,g as default};
