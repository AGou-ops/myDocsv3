import{_ as s,o as a,c as n,a as p}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Redis \u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F","description":"","frontmatter":{},"headers":[],"relativePath":"LinuxBasics/DataBases/Redis/Redis Backup.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/DataBases/Redis/Redis Backup.md"},e=p(`<h1 id="redis-\u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F" tabindex="-1">Redis \u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F <a class="header-anchor" href="#redis-\u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F" aria-hidden="true">#</a></h1><p>rdb\u6587\u4EF6\u5B9E\u9645\u4E0A\u662F\u5F53\u524Dredis\u6570\u636E\u96C6\u7684\u4E00\u4E2A\u5FEB\u7167\uFF0Credis\u9ED8\u8BA4\u4E5F\u662F\u7528dump.rdb\u6765\u8FDB\u884C\u5907\u4EFD\u3002</p><h4 id="\uFF081\uFF09\u914D\u7F6E\u6587\u4EF6\u5206\u6790" tabindex="-1">\uFF081\uFF09\u914D\u7F6E\u6587\u4EF6\u5206\u6790 <a class="header-anchor" href="#\uFF081\uFF09\u914D\u7F6E\u6587\u4EF6\u5206\u6790" aria-hidden="true">#</a></h4><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5148\u6765\u770B\u4E0Bredis\u914D\u7F6E\u6587\u4EF6\u4E2D\u5173\u4E8Edump.rdb\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">save 900 1</span></span>
<span class="line"><span style="color:#DBD7CA;">save 300 10</span></span>
<span class="line"><span style="color:#DBD7CA;">save 60 10000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06DB\u540C\u6B65\u5230\u78C1\u76D8\uFF0C\u4F7F\u7528SAVE\u547D\u4EE4\uFF0C\u81EA\u52A8\u540C\u6B65\u7684\u89E6\u53D1\u6761\u4EF6\uFF1A save &lt;\u79D2&gt; &lt;\u66F4\u65B0\u6570&gt;</span></span>
<span class="line"><span style="color:#758575;"># save 900 1 \u4EE3\u8868900\u79D2\u5185\u67091\u4E2Akey\u53D1\u751F\u6539\u53D8\u5C31\u89E6\u53D1save</span></span>
<span class="line"><span style="color:#758575;"># save 300 10 \u4EE3\u8868300\u79D2\u5185\u670910\u4E2Akey\u53D1\u751F\u6539\u53D8\u5C31\u89E6\u53D1save</span></span>
<span class="line"><span style="color:#758575;"># save 60 10000 \u4EE3\u8868300\u79D2\u5185\u670910\u4E2Akey\u53D1\u751F\u6539\u53D8\u5C31\u89E6\u53D1save</span></span>
<span class="line"><span style="color:#758575;"># \u5404\u6761\u4EF6\u4E4B\u95F4\u662F\u2018\u6216\u2019\u7684\u5173\u7CFB\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6709\u4E00\u4E2A\u6761\u4EF6\u6EE1\u8DB3\u5C31\u4F1A\u89E6\u53D1save\u7684\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u8981\u7981\u7528\u81EA\u52A8\u5FEB\u7167\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u5C06</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">stop-writes-on-bgsave-error yes</span></span>
<span class="line"><span style="color:#758575;"># \u5F53\u540E\u53F0\u8FDB\u7A0B\u6267\u884Csave\u51FA\u9519\u65F6\uFF0C\u505C\u6B62redis\u7684\u5199\u5165\u64CD\u4F5C\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rdbcompression yes</span></span>
<span class="line"><span style="color:#758575;"># \u5C06rdb\u6587\u4EF6\u8FDB\u884C\u538B\u7F29</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rdbchecksum yes</span></span>
<span class="line"><span style="color:#758575;"># \u5BF9rdb\u6587\u4EF6\u8FDB\u884C\u6821\u9A8C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#758575;"># rdb\u6587\u4EF6\u547D\u540D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">dir /mnt/redis_data</span></span>
<span class="line"><span style="color:#758575;"># rdb\u6587\u4EF6\u5B58\u50A8\u76EE\u5F55</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5148\u6765\u770B\u4E0Bredis\u914D\u7F6E\u6587\u4EF6\u4E2D\u5173\u4E8Edump.rdb\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">save 900 1</span></span>
<span class="line"><span style="color:#393A34;">save 300 10</span></span>
<span class="line"><span style="color:#393A34;">save 60 10000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06DB\u540C\u6B65\u5230\u78C1\u76D8\uFF0C\u4F7F\u7528SAVE\u547D\u4EE4\uFF0C\u81EA\u52A8\u540C\u6B65\u7684\u89E6\u53D1\u6761\u4EF6\uFF1A save &lt;\u79D2&gt; &lt;\u66F4\u65B0\u6570&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;"># save 900 1 \u4EE3\u8868900\u79D2\u5185\u67091\u4E2Akey\u53D1\u751F\u6539\u53D8\u5C31\u89E6\u53D1save</span></span>
<span class="line"><span style="color:#A0ADA0;"># save 300 10 \u4EE3\u8868300\u79D2\u5185\u670910\u4E2Akey\u53D1\u751F\u6539\u53D8\u5C31\u89E6\u53D1save</span></span>
<span class="line"><span style="color:#A0ADA0;"># save 60 10000 \u4EE3\u8868300\u79D2\u5185\u670910\u4E2Akey\u53D1\u751F\u6539\u53D8\u5C31\u89E6\u53D1save</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5404\u6761\u4EF6\u4E4B\u95F4\u662F\u2018\u6216\u2019\u7684\u5173\u7CFB\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6709\u4E00\u4E2A\u6761\u4EF6\u6EE1\u8DB3\u5C31\u4F1A\u89E6\u53D1save\u7684\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u8981\u7981\u7528\u81EA\u52A8\u5FEB\u7167\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u5C06</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">stop-writes-on-bgsave-error yes</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F53\u540E\u53F0\u8FDB\u7A0B\u6267\u884Csave\u51FA\u9519\u65F6\uFF0C\u505C\u6B62redis\u7684\u5199\u5165\u64CD\u4F5C\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rdbcompression yes</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06rdb\u6587\u4EF6\u8FDB\u884C\u538B\u7F29</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rdbchecksum yes</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5BF9rdb\u6587\u4EF6\u8FDB\u884C\u6821\u9A8C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#A0ADA0;"># rdb\u6587\u4EF6\u547D\u540D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">dir /mnt/redis_data</span></span>
<span class="line"><span style="color:#A0ADA0;"># rdb\u6587\u4EF6\u5B58\u50A8\u76EE\u5F55</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E0B\u67E5\u770B\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> CONFIG GET dir</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;dir&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;/mnt/redis_data&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> CONFIG GET dir</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;dir&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;/mnt/redis_data&quot;</span></span>
<span class="line"></span></code></pre></div><h4 id="\uFF082\uFF09\u5907\u4EFD\u547D\u4EE4\u6267\u884C" tabindex="-1">\uFF082\uFF09\u5907\u4EFD\u547D\u4EE4\u6267\u884C <a class="header-anchor" href="#\uFF082\uFF09\u5907\u4EFD\u547D\u4EE4\u6267\u884C" aria-hidden="true">#</a></h4><p>\u5907\u4EFDredis\u53EF\u4EE5\u624B\u52A8\u4F7F\u7528SAVE\u547D\u4EE4\uFF0C\u6267\u884CSAVE\u547D\u4EE4\u4F1A\u4F7F\u7528\u4E3B\u8FDB\u7A0B\u6267\u884C\u5FEB\u7167\u64CD\u4F5C\uFF0C\u8FD9\u610F\u5473\u7740\u5728SAVE\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u963B\u585E\u4E3B\u8FDB\u7A0B\u3002</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">SAVE</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">SAVE</span></span>
<span class="line"></span></code></pre></div><p>\u53E6\u4E00\u79CD\u64CD\u4F5C\u662F\u4F7F\u7528BGSAVE\uFF0C\u4F7F\u7528BGSAVE\u7684\u8BDDredis\u4F1Afork\u51FA\u4E00\u4E2A\u5B50\u8FDB\u7A0B\u6765\u6267\u884C\u5FEB\u7167\u64CD\u4F5C\uFF0C\u800C\u4E0D\u5F71\u54CD\u4E3B\u8FDB\u7A0B\u3002</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">BGSAVE</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">BGSAVE</span></span>
<span class="line"></span></code></pre></div><p>\u4E0B\u9762\u5F00\u59CB\u5907\u4EFD\u64CD\u4F5C\uFF0C\u9996\u5148\u8FDB\u5165\u751F\u4EA7\u670D\u52A1\u5668\uFF0C\u67E5\u770Bredis\u72B6\u6001\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> INFO</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># Keyspace</span></span>
<span class="line"><span style="color:#DBD7CA;">db0:keys=285360,expires=3,avg_ttl=60319628</span></span>
<span class="line"><span style="color:#DBD7CA;">db1:keys=193361,expires=2121,avg_ttl=55351639</span></span>
<span class="line"><span style="color:#DBD7CA;">db5:keys=31,expires=2,avg_ttl=26979</span></span>
<span class="line"><span style="color:#DBD7CA;">db10:keys=586,expires=586,avg_ttl=48543037</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> INFO</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># Keyspace</span></span>
<span class="line"><span style="color:#393A34;">db0:keys=285360,expires=3,avg_ttl=60319628</span></span>
<span class="line"><span style="color:#393A34;">db1:keys=193361,expires=2121,avg_ttl=55351639</span></span>
<span class="line"><span style="color:#393A34;">db5:keys=31,expires=2,avg_ttl=26979</span></span>
<span class="line"><span style="color:#393A34;">db10:keys=586,expires=586,avg_ttl=48543037</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u67E5\u770B\u76EE\u524Dredis\u7684\u5B58\u50A8\u72B6\u6001\u3002\u4E0B\u9762\u5F00\u59CB\u5907\u4EFD</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># redis-cli save</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># redis-cli save</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"></span></code></pre></div><p>\u4E3A\u4E86\u770B\u4E0B\u5907\u4EFD\u7684\u65F6\u95F4\uFF0C\u4F7F\u7528time\u547D\u4EE4\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># time redis-cli save</span></span>
<span class="line"><span style="color:#DBD7CA;">OK</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">real    0m1.867s</span></span>
<span class="line"><span style="color:#DBD7CA;">user    0m0.000s</span></span>
<span class="line"><span style="color:#DBD7CA;">sys 0m0.010s</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># time redis-cli save</span></span>
<span class="line"><span style="color:#393A34;">OK</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">real    0m1.867s</span></span>
<span class="line"><span style="color:#393A34;">user    0m0.000s</span></span>
<span class="line"><span style="color:#393A34;">sys 0m0.010s</span></span>
<span class="line"></span></code></pre></div><p>\u5907\u4EFD50\u4E07\u6761\u6570\u636E\uFF0C\u7528\u65F61.8\u79D2\uFF0C\u5F53\u7136\u8FD9\u8DDF\u6570\u636E\u7684\u5927\u5C0F\u6709\u76F4\u63A5\u5173\u7CFB\u3002</p><h4 id="\uFF083\uFF09\u9A8C\u8BC1\u5907\u4EFD\u6587\u4EF6" tabindex="-1">\uFF083\uFF09\u9A8C\u8BC1\u5907\u4EFD\u6587\u4EF6 <a class="header-anchor" href="#\uFF083\uFF09\u9A8C\u8BC1\u5907\u4EFD\u6587\u4EF6" aria-hidden="true">#</a></h4><p>\u9996\u5148\u5230redis\u7684\u5FEB\u7167\u76EE\u5F55\u4E0B\u67E5\u770B\u4E0B\u5907\u4EFD\u7684\u6570\u636E\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># cd /mnt/redis_data</span></span>
<span class="line"><span style="color:#758575;"># ls -l</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r-- 1 root root  39M Feb  1 19:43 dump.rdb</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># cd /mnt/redis_data</span></span>
<span class="line"><span style="color:#A0ADA0;"># ls -l</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r-- 1 root root  39M Feb  1 19:43 dump.rdb</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u5907\u4EFD\u7684\u6587\u4EF6\u62C9\u5230\u6D4B\u8BD5\u73AF\u5883\u8FDB\u884C\u6062\u590D\u6D4B\u8BD5\uFF0Credis\u7684\u6062\u590D\u4E5F\u5F88\u7B80\u5355\uFF0C\u5C06dump.rdb\u6587\u4EF6\u653E\u5230\u9700\u8981\u6062\u590D\u7684\u7684\u670D\u52A1\u5668\u7684\u5FEB\u7167\u76EE\u5F55\u4E0B\uFF0C\u5E76\u547D\u540D\u4E3Adump.rdb\uFF0C\u7136\u540E\u542F\u52A8redis\u670D\u52A1\u5373\u53EF\u3002\uFF08\u4EE5\u4E0B\u64CD\u4F5C\u5728\u6D4B\u8BD5\u673A\u4E0A\u8FDB\u884C\uFF09</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> CONFIG GET dir</span></span>
<span class="line"><span style="color:#DBD7CA;">1) </span><span style="color:#C98A7D;">&quot;dir&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">2) </span><span style="color:#C98A7D;">&quot;/mnt/redis_data&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> INFO </span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># Keyspace</span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#758575;"># \u6CA1\u6709\u6570\u636E</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> CONFIG GET dir</span></span>
<span class="line"><span style="color:#393A34;">1) </span><span style="color:#B56959;">&quot;dir&quot;</span></span>
<span class="line"><span style="color:#393A34;">2) </span><span style="color:#B56959;">&quot;/mnt/redis_data&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> INFO </span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># Keyspace</span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6CA1\u6709\u6570\u636E</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u5907\u4EFD\u6587\u4EF6\u62F7\u8D1D\u5230/mnt/redis_data/\u4E0B</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># ls -lh </span></span>
<span class="line"><span style="color:#DBD7CA;">total 39M</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--. 1 root root 39M Feb  1 06:54 dump.rdb</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># ls -lh </span></span>
<span class="line"><span style="color:#393A34;">total 39M</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--. 1 root root 39M Feb  1 06:54 dump.rdb</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\u670D\u52A1</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#  /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#  /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770Bredis\u6570\u636E\u72B6\u6001</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">127.0.0.1:</span><span style="color:#CB7676;">6379&gt;</span><span style="color:#DBD7CA;"> INFO</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># Keyspace</span></span>
<span class="line"><span style="color:#DBD7CA;">db0:keys=285363,expires=3,avg_ttl=56465074</span></span>
<span class="line"><span style="color:#DBD7CA;">db1:keys=193350,expires=2106,avg_ttl=58764349</span></span>
<span class="line"><span style="color:#DBD7CA;">db5:keys=29,expires=0,avg_ttl=0</span></span>
<span class="line"><span style="color:#DBD7CA;">db10:keys=586,expires=586,avg_ttl=44861233</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">127.0.0.1:</span><span style="color:#AB5959;">6379&gt;</span><span style="color:#393A34;"> INFO</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># Keyspace</span></span>
<span class="line"><span style="color:#393A34;">db0:keys=285363,expires=3,avg_ttl=56465074</span></span>
<span class="line"><span style="color:#393A34;">db1:keys=193350,expires=2106,avg_ttl=58764349</span></span>
<span class="line"><span style="color:#393A34;">db5:keys=29,expires=0,avg_ttl=0</span></span>
<span class="line"><span style="color:#393A34;">db10:keys=586,expires=586,avg_ttl=44861233</span></span>
<span class="line"></span></code></pre></div><p>\u6570\u636E\u6062\u590D\u6210\u529F\u3002</p><h4 id="\uFF084\uFF09\u5199\u6210\u811A\u672C\u5B9A\u65F6\u6267\u884C" tabindex="-1">\uFF084\uFF09\u5199\u6210\u811A\u672C\u5B9A\u65F6\u6267\u884C <a class="header-anchor" href="#\uFF084\uFF09\u5199\u6210\u811A\u672C\u5B9A\u65F6\u6267\u884C" aria-hidden="true">#</a></h4><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"><span style="color:#DBD7CA;">REDIS_DIR=/mnt/redis_data</span></span>
<span class="line"><span style="color:#DBD7CA;">REDIS_CMD=/usr/local/redis/bin/redis-cli</span></span>
<span class="line"><span style="color:#DBD7CA;">now=</span><span style="color:#C98A7D;">&quot;$(date -d&#39;+0 day&#39; +&#39;%Y%m%d%H%M%S&#39;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">$</span><span style="color:#B8A965;">REDIS_CMD</span><span style="color:#DBD7CA;"> save </span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">?</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-eq</span><span style="color:#DBD7CA;"> 0 </span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  cp </span><span style="color:#858585;">$</span><span style="color:#B8A965;">REDIS_DIR</span><span style="color:#DBD7CA;">/dump.rdb </span><span style="color:#858585;">$</span><span style="color:#B8A965;">REDIS_DIR</span><span style="color:#DBD7CA;">/dump_</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">now</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">.rdb</span></span>
<span class="line"><span style="color:#DBD7CA;">    rsync -avz </span><span style="color:#858585;">$</span><span style="color:#B8A965;">REDIS_DIR</span><span style="color:#DBD7CA;">/dump_</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">now</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">.rdb ruser@192.168.1.122::dbm --password-file=/etc/rsync.passwd</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"><span style="color:#393A34;">REDIS_DIR=/mnt/redis_data</span></span>
<span class="line"><span style="color:#393A34;">REDIS_CMD=/usr/local/redis/bin/redis-cli</span></span>
<span class="line"><span style="color:#393A34;">now=</span><span style="color:#B56959;">&quot;$(date -d&#39;+0 day&#39; +&#39;%Y%m%d%H%M%S&#39;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">REDIS_CMD</span><span style="color:#393A34;"> save </span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">?</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-eq</span><span style="color:#393A34;"> 0 </span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  cp </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">REDIS_DIR</span><span style="color:#393A34;">/dump.rdb </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">REDIS_DIR</span><span style="color:#393A34;">/dump_</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">now</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">.rdb</span></span>
<span class="line"><span style="color:#393A34;">    rsync -avz </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">REDIS_DIR</span><span style="color:#393A34;">/dump_</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">now</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">.rdb ruser@192.168.1.122::dbm --password-file=/etc/rsync.passwd</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u52A0\u5165\u5B9A\u65F6\u4EFB\u52A1\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">5 0 </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">   /bin/sh  /opt/sh/redis_bkup.sh </span><span style="color:#CB7676;">&amp;&gt;</span><span style="color:#DBD7CA;">/dev/null</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">5 0 </span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">   /bin/sh  /opt/sh/redis_bkup.sh </span><span style="color:#AB5959;">&amp;&gt;</span><span style="color:#393A34;">/dev/null</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u8F6C\u8F7D\u81EA\uFF1A<a href="https://blog.51cto.com/hld1992/2067917" target="_blank" rel="noopener noreferrer">https://blog.51cto.com/hld1992/2067917</a></p></blockquote>`,35),o=[e];function c(r,t,i,d,y,A){return a(),n("div",null,o)}var v=s(l,[["render",c]]);export{B as __pageData,v as default};
