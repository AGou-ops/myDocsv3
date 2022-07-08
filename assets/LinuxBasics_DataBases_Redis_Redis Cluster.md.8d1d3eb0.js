import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Redis Cluster","description":"","frontmatter":{},"headers":[{"level":2,"title":"Redis-Cluster \u96C6\u7FA4\u6982\u5FF5","slug":"redis-cluster-\u96C6\u7FA4\u6982\u5FF5"},{"level":3,"title":"\u96C6\u7FA4\u8282\u70B9\u590D\u5236","slug":"\u96C6\u7FA4\u8282\u70B9\u590D\u5236"},{"level":3,"title":"\u6545\u969C\u8F6C\u79FB","slug":"\u6545\u969C\u8F6C\u79FB"},{"level":3,"title":"\u96C6\u7FA4\u5206\u7247\u7B56\u7565","slug":"\u96C6\u7FA4\u5206\u7247\u7B56\u7565"},{"level":3,"title":"\u96C6\u7FA4\u91CD\u5B9A\u5411","slug":"\u96C6\u7FA4\u91CD\u5B9A\u5411"},{"level":3,"title":"\u4E3B\u4ECE\u590D\u5236\u539F\u7406","slug":"\u4E3B\u4ECE\u590D\u5236\u539F\u7406"},{"level":2,"title":"Redis-Cluster \u96C6\u7FA4\u642D\u5EFA","slug":"redis-cluster-\u96C6\u7FA4\u642D\u5EFA"},{"level":2,"title":"\u9644\u5F55\uFF1A\u5FEB\u901F\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883","slug":"\u9644\u5F55\uFF1A\u5FEB\u901F\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/DataBases/Redis/Redis Cluster.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/DataBases/Redis/Redis Cluster.md"},e=l(`<h1 id="redis-cluster" tabindex="-1">Redis Cluster <a class="header-anchor" href="#redis-cluster" aria-hidden="true">#</a></h1><h2 id="redis-cluster-\u96C6\u7FA4\u6982\u5FF5" tabindex="-1">Redis-Cluster \u96C6\u7FA4\u6982\u5FF5 <a class="header-anchor" href="#redis-cluster-\u96C6\u7FA4\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\uFF081\uFF09\u7531\u591A\u4E2ARedis\u670D\u52A1\u5668\u7EC4\u6210\u7684\u5206\u5E03\u5F0F\u7F51\u7EDC\u670D\u52A1\u96C6\u7FA4\uFF1B</p><p>\uFF082\uFF09\u96C6\u7FA4\u4E4B\u4E2D\u6709\u591A\u4E2AMaster\u4E3B\u8282\u70B9\uFF0C\u6BCF\u4E00\u4E2A\u4E3B\u8282\u70B9\u90FD\u53EF\u8BFB\u53EF\u5199\uFF1B</p><p>\uFF083\uFF09\u8282\u70B9\u4E4B\u95F4\u4F1A\u4E92\u76F8\u901A\u4FE1\uFF0C\u4E24\u4E24\u76F8\u8FDE\uFF1B</p><p>\uFF084\uFF09Redis\u96C6\u7FA4\u65E0\u4E2D\u5FC3\u8282\u70B9\u3002</p><h3 id="\u96C6\u7FA4\u8282\u70B9\u590D\u5236" tabindex="-1">\u96C6\u7FA4\u8282\u70B9\u590D\u5236 <a class="header-anchor" href="#\u96C6\u7FA4\u8282\u70B9\u590D\u5236" aria-hidden="true">#</a></h3><p>\u5728Redis-Cluster\u96C6\u7FA4\u4E2D\uFF0C\u53EF\u4EE5\u7ED9\u6BCF\u4E00\u4E2A\u4E3B\u8282\u70B9\u6DFB\u52A0\u4ECE\u8282\u70B9\uFF0C\u4E3B\u8282\u70B9\u548C\u4ECE\u8282\u70B9\u76F4\u63A5\u9075\u5FAA\u4E3B\u4ECE\u6A21\u578B\u7684\u7279\u6027\u3002</p><p>\u5F53\u7528\u6237\u9700\u8981\u5904\u7406\u66F4\u591A\u8BFB\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u6DFB\u52A0\u4ECE\u8282\u70B9\u53EF\u4EE5\u6269\u5C55\u7CFB\u7EDF\u7684\u8BFB\u6027\u80FD\u3002</p><h3 id="\u6545\u969C\u8F6C\u79FB" tabindex="-1">\u6545\u969C\u8F6C\u79FB <a class="header-anchor" href="#\u6545\u969C\u8F6C\u79FB" aria-hidden="true">#</a></h3><p>Redis\u96C6\u7FA4\u7684\u4E3B\u8282\u70B9\u5185\u7F6E\u4E86\u7C7B\u4F3CRedis Sentinel\u7684\u8282\u70B9\u6545\u969C\u68C0\u6D4B\u548C\u81EA\u52A8\u6545\u969C\u8F6C\u79FB\u529F\u80FD\uFF0C\u5F53\u96C6\u7FA4\u4E2D\u7684\u67D0\u4E2A\u4E3B\u8282\u70B9\u4E0B\u7EBF\u65F6\uFF0C\u96C6\u7FA4\u4E2D\u7684\u5176\u4ED6\u5728\u7EBF\u4E3B\u8282\u70B9\u4F1A\u6CE8\u610F\u5230\u8FD9\u4E00\u70B9\uFF0C\u5E76\u5BF9\u5DF2\u4E0B\u7EBF\u7684\u4E3B\u8282\u70B9\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u3002</p><p>\u96C6\u7FA4\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u7684\u65B9\u6CD5\u548CRedis Sentinel\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u7684\u65B9\u6CD5\u57FA\u672C\u4E00\u6837\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u5728\u96C6\u7FA4\u91CC\u9762\uFF0C\u6545\u969C\u8F6C\u79FB\u662F\u7531\u96C6\u7FA4\u4E2D\u5176\u4ED6\u5728\u7EBF\u7684\u4E3B\u8282\u70B9\u8D1F\u8D23\u8FDB\u884C\u7684\uFF0C\u6240\u4EE5\u96C6\u7FA4\u4E0D\u5FC5\u53E6\u5916\u4F7F\u7528Redis Sentinel\u3002</p><h3 id="\u96C6\u7FA4\u5206\u7247\u7B56\u7565" tabindex="-1">\u96C6\u7FA4\u5206\u7247\u7B56\u7565 <a class="header-anchor" href="#\u96C6\u7FA4\u5206\u7247\u7B56\u7565" aria-hidden="true">#</a></h3><p>Redis-cluster\u5206\u7247\u7B56\u7565\uFF0C\u662F\u7528\u6765\u89E3\u51B3key\u5B58\u50A8\u4F4D\u7F6E\u7684\u3002</p><p>\u96C6\u7FA4\u5C06\u6574\u4E2A\u6570\u636E\u5E93\u5206\u4E3A16384\u4E2A\u69FD\u4F4Dslot\uFF0C\u6240\u6709key-value\u6570\u636E\u90FD\u5B58\u50A8\u5728\u8FD9\u4E9Bslot\u4E2D\u7684\u67D0\u4E00\u4E2A\u4E0A\u3002\u4E00\u4E2Aslot\u69FD\u4F4D\u53EF\u4EE5\u5B58\u653E\u591A\u4E2A\u6570\u636E\uFF0Ckey\u7684\u69FD\u4F4D\u8BA1\u7B97\u516C\u5F0F\u4E3A\uFF1A<code>slot_number=crc16(key)%16384</code>\uFF0C\u5176\u4E2Dcrc16\u4E3A16\u4F4D\u7684\u5FAA\u73AF\u5197\u4F59\u6821\u9A8C\u548C\u51FD\u6570\u3002</p><p>\u96C6\u7FA4\u4E2D\u7684\u6BCF\u4E2A\u4E3B\u8282\u70B9\u90FD\u53EF\u4EE5\u5904\u74060\u4E2A\u81F316383\u4E2A\u69FD\uFF0C\u5F5316384\u4E2A\u69FD\u90FD\u6709\u67D0\u4E2A\u8282\u70B9\u5728\u8D1F\u8D23\u5904\u7406\u65F6\uFF0C\u96C6\u7FA4\u8FDB\u5165\u4E0A\u7EBF\u72B6\u6001\uFF0C\u5E76\u5F00\u59CB\u5904\u7406\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u6570\u636E\u547D\u4EE4\u8BF7\u6C42\u3002</p><p>Redis \u96C6\u7FA4\u4F7F\u7528\u6570\u636E\u5206\u7247\uFF08sharding\uFF09\u800C\u975E\u4E00\u81F4\u6027\u54C8\u5E0C\uFF08consistency hashing\uFF09\u6765\u5B9E\u73B0\uFF1A \u4E00\u4E2A Redis \u96C6\u7FA4\u5305\u542B 16384 \u4E2A\u54C8\u5E0C\u69FD\uFF08hash slot\uFF09\uFF0C \u6570\u636E\u5E93\u4E2D\u7684\u6BCF\u4E2A\u952E\u90FD\u5C5E\u4E8E\u8FD9 16384 \u4E2A\u54C8\u5E0C\u69FD\u7684\u5176\u4E2D\u4E00\u4E2A\uFF0C \u96C6\u7FA4\u4F7F\u7528\u516C\u5F0F CRC16(key) % 16384 \u6765\u8BA1\u7B97\u952E key \u5C5E\u4E8E\u54EA\u4E2A\u69FD\uFF0C \u5176\u4E2D CRC16(key) \u8BED\u53E5\u7528\u4E8E\u8BA1\u7B97\u952E key \u7684 CRC16 \u6821\u9A8C\u548C \u3002</p><ol><li>\u8282\u70B9 A \u8D1F\u8D23\u5904\u7406 0 \u53F7\u81F3 5500 \u53F7\u54C8\u5E0C\u69FD\u3002</li><li>\u8282\u70B9 B \u8D1F\u8D23\u5904\u7406 5501 \u53F7\u81F3 11000 \u53F7\u54C8\u5E0C\u69FD\u3002</li><li>\u8282\u70B9 C \u8D1F\u8D23\u5904\u7406 11001 \u53F7\u81F3 16384 \u53F7\u54C8\u5E0C\u69FD\u3002</li></ol><p><img src="http://bak.agou-ops.top/uploads/redis/images/m_4d0eddb4cbb10a4882dafd941142339a_r.png" alt="null"></p><h3 id="\u96C6\u7FA4\u91CD\u5B9A\u5411" tabindex="-1">\u96C6\u7FA4\u91CD\u5B9A\u5411 <a class="header-anchor" href="#\u96C6\u7FA4\u91CD\u5B9A\u5411" aria-hidden="true">#</a></h3><p>\u7531\u4E8ERedis\u96C6\u7FA4\u65E0\u4E2D\u5FC3\u8282\u70B9\uFF0C\u8BF7\u6C42\u4F1A\u968F\u673A\u53D1\u7ED9\u4EFB\u610F\u4E3B\u8282\u70B9\uFF1B</p><p>\u4E3B\u8282\u70B9\u53EA\u4F1A\u5904\u7406\u81EA\u5DF1\u8D1F\u8D23\u69FD\u4F4D\u7684\u547D\u4EE4\u8BF7\u6C42\uFF0C\u5176\u5B83\u69FD\u4F4D\u7684\u547D\u4EE4\u8BF7\u6C42\uFF0C\u8BE5\u4E3B\u8282\u70B9\u4F1A\u8FD4\u56DE\u5BA2\u6237\u7AEF\u4E00\u4E2A\u8F6C\u5411\u9519\u8BEF\uFF1B</p><p>\u5BA2\u6237\u7AEF<em>\u6839\u636E\u9519\u8BEF\u4E2D\u5305\u542B\u7684\u5730\u5740\u548C\u7AEF\u53E3</em>\u91CD\u65B0\u5411\u6B63\u786E\u7684\u8D1F\u8D23\u7684\u4E3B\u8282\u70B9\u53D1\u8D77\u547D\u4EE4\u8BF7\u6C42\u3002</p><h3 id="\u4E3B\u4ECE\u590D\u5236\u539F\u7406" tabindex="-1">\u4E3B\u4ECE\u590D\u5236\u539F\u7406 <a class="header-anchor" href="#\u4E3B\u4ECE\u590D\u5236\u539F\u7406" aria-hidden="true">#</a></h3><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/image-20211103173116252.png" alt="image-20211103173116252"></p><p>\u56FE\u7247\u6765\u6E90\u4E8E\u7F51\u7EDC\u3002</p><h2 id="redis-cluster-\u96C6\u7FA4\u642D\u5EFA" tabindex="-1">Redis-Cluster \u96C6\u7FA4\u642D\u5EFA <a class="header-anchor" href="#redis-cluster-\u96C6\u7FA4\u642D\u5EFA" aria-hidden="true">#</a></h2><p>\u624B\u5934\u8D44\u6E90\u6709\u9650\uFF0C\u6545\u91C7\u7528\u5355\u673A\u90E8\u7F72\u96C6\u7FA4\uFF083\u4E3B3\u4ECE\uFF09</p><table><thead><tr><th>\u89D2\u8272</th><th>IP:PORT</th></tr></thead><tbody><tr><td>master1</td><td>172.16.1.135:7001</td></tr><tr><td>slave1</td><td>172.16.1.135:7002</td></tr><tr><td>master2</td><td>172.16.1.135:7003</td></tr><tr><td>slave2</td><td>172.16.1.135:7004</td></tr><tr><td>master3</td><td>172.16.1.135:7005</td></tr><tr><td>slave3</td><td>172.16.1.135:7006</td></tr></tbody></table><p>\u5728<code>/etc/redis</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>redis-cluster</code>\u7684\u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5B58\u653E\u5404\u8282\u70B9\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mkdir /usr/local/redis/redis-cluster -p</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /usr/local/redis/redis-cluster </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> mkdir -pv 700{1..6}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mkdir /usr/local/redis/redis-cluster -p</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /usr/local/redis/redis-cluster </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> mkdir -pv 700{1..6}</span></span>
<span class="line"></span></code></pre></div><p><img src="http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/redis/redis-1.png" alt=""></p><p>\u5C06\u7A0B\u5E8F\u53CA\u914D\u7F6E\u6587\u4EF6\u5206\u522B\u590D\u5236\u5230\u5404\u4E2A\u8282\u70B9\u6587\u4EF6\u5939\u4E2D\u53BB\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 700{2..6} </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> xargs -n 1 cp -ar 7001/</span><span style="color:#CB7676;">*</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 700{2..6} </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> xargs -n 1 cp -ar 7001/</span><span style="color:#AB5959;">*</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u90E8\u5206\u914D\u7F6E\u6587\u4EF6\uFF08\u4EE57001\u4E3A\u4F8B\uFF09\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">port 7001			</span><span style="color:#758575;"># \u6539\u6210\u5BF9\u5E94\u7684</span></span>
<span class="line"><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> 172.16.1.135</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#DBD7CA;">daemonized  yes</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile /var/log/redis/redis-7001.log		</span><span style="color:#758575;"># \u6539\u6210\u5BF9\u5E94\u7684</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">port 7001			</span><span style="color:#A0ADA0;"># \u6539\u6210\u5BF9\u5E94\u7684</span></span>
<span class="line"><span style="color:#B58451;">bind</span><span style="color:#393A34;"> 172.16.1.135</span></span>
<span class="line"><span style="color:#393A34;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#393A34;">daemonized  yes</span></span>
<span class="line"><span style="color:#393A34;">logfile /var/log/redis/redis-7001.log		</span><span style="color:#A0ADA0;"># \u6539\u6210\u5BF9\u5E94\u7684</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u5B8C\u914D\u7F6E\u6587\u4EF6\u4E4B\u540E\uFF0C\u542F\u52A8\u5404 redis \u8282\u70B9\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> -i i=1</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">while</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">((i</span><span style="color:#CB7676;">&lt;</span><span style="color:#6394BF;">7</span><span style="color:#C98A7D;">))</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">do</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /usr/local/redis/redis-cluster/700</span><span style="color:#858585;">$</span><span style="color:#B8A965;">i</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> ./redis-server redis.conf </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> sleep 1</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">let</span><span style="color:#DBD7CA;"> i++ </span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">done</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> -i i=1</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">while</span><span style="color:#393A34;"> </span><span style="color:#B56959;">((i</span><span style="color:#AB5959;">&lt;</span><span style="color:#296AA3;">7</span><span style="color:#B56959;">))</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">do</span><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /usr/local/redis/redis-cluster/700</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">i</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> ./redis-server redis.conf </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> sleep 1</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">let</span><span style="color:#393A34;"> i++ </span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">done</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u5404\u8282\u70B9\u542F\u52A8\u60C5\u51B5\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@ubuntu:/usr/local/redis/redis-cluster</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ps aux </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep -v grep </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep redis</span></span>
<span class="line"><span style="color:#DBD7CA;">root       2534  0.3  0.2  64360  4176 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        Ssl  14:00   0:00 ./redis-server 172.16.1.135:7001 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       2484  0.3  0.2  64360  4264 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        Ssl  13:57   0:00 ./redis-server 172.16.1.135:7002 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       2499  0.3  0.2  64360  4156 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7003 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       2506  0.3  0.2  61288  4064 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7004 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       2513  0.3  0.2  61288  5180 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7005 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       2520  0.3  0.2  64360  5284 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7006 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@ubuntu:/usr/local/redis/redis-cluster</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ps aux </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep -v grep </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep redis</span></span>
<span class="line"><span style="color:#393A34;">root       2534  0.3  0.2  64360  4176 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        Ssl  14:00   0:00 ./redis-server 172.16.1.135:7001 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       2484  0.3  0.2  64360  4264 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        Ssl  13:57   0:00 ./redis-server 172.16.1.135:7002 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       2499  0.3  0.2  64360  4156 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7003 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       2506  0.3  0.2  61288  4064 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7004 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       2513  0.3  0.2  61288  5180 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7005 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       2520  0.3  0.2  64360  5284 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7006 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u521B\u5EFA\u96C6\u7FA4\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u8BE5\u5DE5\u5177\u4F4D\u4E8E\u7F16\u8BD1\u5B89\u88C5\u4E4B\u540E\u7684\u6E90\u7801\u5305\u7684 src \u76EE\u5F55\u4E2D</span></span>
<span class="line"><span style="color:#758575;"># cd /root/redis-6.0.1/src</span></span>
<span class="line"><span style="color:#758575;"># \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u57286.0\u7248\u672C\u4E2Dredis-trib.rb\u4E0D\u518D\u88AB\u652F\u6301\uFF0C\u4E0D\u53EF\u7528</span></span>
<span class="line"><span style="color:#758575;"># ./redis-trib.rb create --replicas 1 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005  172.16.1.135:7006</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u6240\u4EE5\u5728\u8FD9\u91CC\u6211\u4F7F\u7528 redis-cli \u6765\u8FDB\u884C\u90E8\u7F72</span></span>
<span class="line"><span style="color:#DBD7CA;">./redis-cli --cluster create 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005 172.16.1.135:7006 --cluster-replicas 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8BE5\u5DE5\u5177\u4F4D\u4E8E\u7F16\u8BD1\u5B89\u88C5\u4E4B\u540E\u7684\u6E90\u7801\u5305\u7684 src \u76EE\u5F55\u4E2D</span></span>
<span class="line"><span style="color:#A0ADA0;"># cd /root/redis-6.0.1/src</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u57286.0\u7248\u672C\u4E2Dredis-trib.rb\u4E0D\u518D\u88AB\u652F\u6301\uFF0C\u4E0D\u53EF\u7528</span></span>
<span class="line"><span style="color:#A0ADA0;"># ./redis-trib.rb create --replicas 1 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005  172.16.1.135:7006</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6240\u4EE5\u5728\u8FD9\u91CC\u6211\u4F7F\u7528 redis-cli \u6765\u8FDB\u884C\u90E8\u7F72</span></span>
<span class="line"><span style="color:#393A34;">./redis-cli --cluster create 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005 172.16.1.135:7006 --cluster-replicas 1</span></span>
<span class="line"></span></code></pre></div><p>\u671F\u95F4\u4F1A\u8BA9\u4F60\u786E\u8BA4\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982\u679C\u68C0\u67E5\u65E0\u8BEF\uFF0C\u8F93\u5165<code>yes</code>\uFF0C\u7136\u540E\u56DE\u8F66\u5373\u53EF.</p><p><img src="http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/redis/redis-2.png" alt=""></p><p>\u5230\u8FD9\u91CC\uFF0CRedis-Cluster \u90E8\u7F72\u5C31\u5B8C\u6210\u4E86\u3002</p><p>\u67E5\u8BE2\u96C6\u7FA4\u4FE1\u606F\uFF0C\u767B\u5F55\u4EFB\u610F\u8282\u70B9\u5373\u53EF\u67E5\u8BE2\u96C6\u7FA4\u4FE1\u606F\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@ubuntu:/usr/local/redis/redis-cluster/7001</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./redis-cli -c -h 172.16.1.135 -p 7001</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1.135:</span><span style="color:#CB7676;">7001&gt;</span><span style="color:#DBD7CA;"> cluster nodes</span></span>
<span class="line"><span style="color:#DBD7CA;">57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589712996000 3 connected 10923-16383</span></span>
<span class="line"><span style="color:#DBD7CA;">e87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589712998000 4 connected</span></span>
<span class="line"><span style="color:#DBD7CA;">542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 master - 0 1589713000951 2 connected 5461-10922</span></span>
<span class="line"><span style="color:#DBD7CA;">7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589712999000 5 connected</span></span>
<span class="line"><span style="color:#DBD7CA;">6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589712999945 6 connected</span></span>
<span class="line"><span style="color:#DBD7CA;">94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 myself,master - 0 1589712997000 1 connected 0-5460</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1.135:</span><span style="color:#CB7676;">7001&gt;</span><span style="color:#DBD7CA;"> cluster info</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_state:ok</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_slots_assigned:16384</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_slots_ok:16384</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_slots_pfail:0</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_slots_fail:0</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_known_nodes:6</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_size:3</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_current_epoch:6</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_my_epoch:1</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_stats_messages_ping_sent:359</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_stats_messages_pong_sent:362</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_stats_messages_sent:721</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_stats_messages_ping_received:357</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_stats_messages_pong_received:359</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_stats_messages_meet_received:5</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster_stats_messages_received:721</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@ubuntu:/usr/local/redis/redis-cluster/7001</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./redis-cli -c -h 172.16.1.135 -p 7001</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">172.16.1.135:</span><span style="color:#AB5959;">7001&gt;</span><span style="color:#393A34;"> cluster nodes</span></span>
<span class="line"><span style="color:#393A34;">57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589712996000 3 connected 10923-16383</span></span>
<span class="line"><span style="color:#393A34;">e87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589712998000 4 connected</span></span>
<span class="line"><span style="color:#393A34;">542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 master - 0 1589713000951 2 connected 5461-10922</span></span>
<span class="line"><span style="color:#393A34;">7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589712999000 5 connected</span></span>
<span class="line"><span style="color:#393A34;">6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589712999945 6 connected</span></span>
<span class="line"><span style="color:#393A34;">94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 myself,master - 0 1589712997000 1 connected 0-5460</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">172.16.1.135:</span><span style="color:#AB5959;">7001&gt;</span><span style="color:#393A34;"> cluster info</span></span>
<span class="line"><span style="color:#393A34;">cluster_state:ok</span></span>
<span class="line"><span style="color:#393A34;">cluster_slots_assigned:16384</span></span>
<span class="line"><span style="color:#393A34;">cluster_slots_ok:16384</span></span>
<span class="line"><span style="color:#393A34;">cluster_slots_pfail:0</span></span>
<span class="line"><span style="color:#393A34;">cluster_slots_fail:0</span></span>
<span class="line"><span style="color:#393A34;">cluster_known_nodes:6</span></span>
<span class="line"><span style="color:#393A34;">cluster_size:3</span></span>
<span class="line"><span style="color:#393A34;">cluster_current_epoch:6</span></span>
<span class="line"><span style="color:#393A34;">cluster_my_epoch:1</span></span>
<span class="line"><span style="color:#393A34;">cluster_stats_messages_ping_sent:359</span></span>
<span class="line"><span style="color:#393A34;">cluster_stats_messages_pong_sent:362</span></span>
<span class="line"><span style="color:#393A34;">cluster_stats_messages_sent:721</span></span>
<span class="line"><span style="color:#393A34;">cluster_stats_messages_ping_received:357</span></span>
<span class="line"><span style="color:#393A34;">cluster_stats_messages_pong_received:359</span></span>
<span class="line"><span style="color:#393A34;">cluster_stats_messages_meet_received:5</span></span>
<span class="line"><span style="color:#393A34;">cluster_stats_messages_received:721</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u96C6\u7FA4\u5206\u7247\u7684\u60C5\u51B5\uFF0C\u53CA\u5176\u4ED6\u8BE6\u7EC6\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><p>\u6D4B\u8BD5\uFF0C\u67D0\u4E00\u4E3B\u8282\u70B9\u6302\u6389\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">root@ubuntu:/usr/local/redis/redis-cluster/7001</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">kill</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">\`ps aux </span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;"> grep redis </span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;"> grep 7001 </span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;"> awk &#39;{print $2}&#39;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u767B\u5F55 slave1 \u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1.135:</span><span style="color:#CB7676;">7002&gt;</span><span style="color:#DBD7CA;"> CLUSTER NODES</span></span>
<span class="line"><span style="color:#DBD7CA;">94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 master,fail - 1589713261516 1589713254000 1 disconnected 0-5460</span></span>
<span class="line"><span style="color:#DBD7CA;">7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589713313000 5 connected</span></span>
<span class="line"><span style="color:#DBD7CA;">57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589713313441 3 connected 10923-16383</span></span>
<span class="line"><span style="color:#DBD7CA;">e87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589713314452 4 connected</span></span>
<span class="line"><span style="color:#DBD7CA;">542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 myself,master - 0 1589713314000 2 connected 5461-10922</span></span>
<span class="line"><span style="color:#DBD7CA;">6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589713315463 6 connected </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">root@ubuntu:/usr/local/redis/redis-cluster/7001</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">kill</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\`ps aux </span><span style="color:#AB5959;">|</span><span style="color:#B56959;"> grep redis </span><span style="color:#AB5959;">|</span><span style="color:#B56959;"> grep 7001 </span><span style="color:#AB5959;">|</span><span style="color:#B56959;"> awk &#39;{print $2}&#39;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u767B\u5F55 slave1 \u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">172.16.1.135:</span><span style="color:#AB5959;">7002&gt;</span><span style="color:#393A34;"> CLUSTER NODES</span></span>
<span class="line"><span style="color:#393A34;">94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 master,fail - 1589713261516 1589713254000 1 disconnected 0-5460</span></span>
<span class="line"><span style="color:#393A34;">7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589713313000 5 connected</span></span>
<span class="line"><span style="color:#393A34;">57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589713313441 3 connected 10923-16383</span></span>
<span class="line"><span style="color:#393A34;">e87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589713314452 4 connected</span></span>
<span class="line"><span style="color:#393A34;">542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 myself,master - 0 1589713314000 2 connected 5461-10922</span></span>
<span class="line"><span style="color:#393A34;">6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589713315463 6 connected </span></span>
<span class="line"></span></code></pre></div><p>slave1 \u5DF2\u6210\u529F\u4E0A\u4EFB\uFF5E</p><h2 id="\u9644\u5F55\uFF1A\u5FEB\u901F\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883" tabindex="-1">\u9644\u5F55\uFF1A\u5FEB\u901F\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883 <a class="header-anchor" href="#\u9644\u5F55\uFF1A\u5FEB\u901F\u642D\u5EFA\u6D4B\u8BD5\u73AF\u5883" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u591A\u5B9E\u4F8B\u76EE\u5F55</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  mkdir -p /data/700{0..5}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u7F16\u8F91\u591A\u5B9E\u4F8B\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /data/7000/redis.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">port 7000</span></span>
<span class="line"><span style="color:#DBD7CA;">daemonize yes</span></span>
<span class="line"><span style="color:#DBD7CA;">pidfile /data/7000/redis.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">loglevel notice</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile </span><span style="color:#C98A7D;">&quot;/data/7000/redis.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#DBD7CA;">dir /data/7000</span></span>
<span class="line"><span style="color:#DBD7CA;">protected-mode no</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /data/7001/redis.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">port 7001</span></span>
<span class="line"><span style="color:#DBD7CA;">daemonize yes</span></span>
<span class="line"><span style="color:#DBD7CA;">pidfile /data/7001/redis.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">loglevel notice</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile </span><span style="color:#C98A7D;">&quot;/data/7001/redis.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#DBD7CA;">dir /data/7001</span></span>
<span class="line"><span style="color:#DBD7CA;">protected-mode no</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /data/7002/redis.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">port 7002</span></span>
<span class="line"><span style="color:#DBD7CA;">daemonize yes</span></span>
<span class="line"><span style="color:#DBD7CA;">pidfile /data/7002/redis.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">loglevel notice</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile </span><span style="color:#C98A7D;">&quot;/data/7002/redis.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#DBD7CA;">dir /data/7002</span></span>
<span class="line"><span style="color:#DBD7CA;">protected-mode no</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /data/7003/redis.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">port 7003</span></span>
<span class="line"><span style="color:#DBD7CA;">daemonize yes</span></span>
<span class="line"><span style="color:#DBD7CA;">pidfile /data/7003/redis.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">loglevel notice</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile </span><span style="color:#C98A7D;">&quot;/data/7003/redis.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#DBD7CA;">dir /data/7003</span></span>
<span class="line"><span style="color:#DBD7CA;">protected-mode no</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /data/7004/redis.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">port 7004</span></span>
<span class="line"><span style="color:#DBD7CA;">daemonize yes</span></span>
<span class="line"><span style="color:#DBD7CA;">pidfile /data/7004/redis.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">loglevel notice</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile </span><span style="color:#C98A7D;">&quot;/data/7004/redis.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#DBD7CA;">dir /data/7004</span></span>
<span class="line"><span style="color:#DBD7CA;">protected-mode no</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /data/7005/redis.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">port 7005</span></span>
<span class="line"><span style="color:#DBD7CA;">daemonize yes</span></span>
<span class="line"><span style="color:#DBD7CA;">pidfile /data/7005/redis.pid</span></span>
<span class="line"><span style="color:#DBD7CA;">loglevel notice</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile </span><span style="color:#C98A7D;">&quot;/data/7005/redis.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#DBD7CA;">dir /data/7005</span></span>
<span class="line"><span style="color:#DBD7CA;">protected-mode no</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#DBD7CA;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u542F\u52A8\u8282\u70B9</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  redis-server /data/7000/redis.conf </span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  redis-server /data/7001/redis.conf </span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  redis-server /data/7002/redis.conf </span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  redis-server /data/7003/redis.conf </span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  redis-server /data/7004/redis.conf </span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  redis-server /data/7005/redis.conf </span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u68C0\u67E5\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  netstat -lntup</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">grep 700</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:17003               0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7433/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:17004               0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7437/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:17005               0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7443/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:7000                0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7423/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:7001                0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7425/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:7002                0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7429/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:7003                0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7433/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:7004                0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7437/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:7005                0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7443/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:17000               0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7423/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:17001               0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7425/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 0.0.0.0:17002               0.0.0.0:</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                   LISTEN      7429/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::17003                    :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7433/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::17004                    :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7437/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::17005                    :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7443/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::7000                     :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7423/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::7001                     :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7425/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::7002                     :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7429/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::7003                     :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7433/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::7004                     :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7437/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::7005                     :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7443/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::17000                    :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7423/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::17001                    :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7425/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">tcp        0      0 :::17002                    :::</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">                        LISTEN      7429/redis-server </span><span style="color:#CB7676;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u68C0\u67E5\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@db01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  ps -ef</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">grep redis</span></span>
<span class="line"><span style="color:#DBD7CA;">root       7423      1  0 18:30 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        00:00:00 redis-server </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:7000 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       7425      1  0 18:30 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        00:00:00 redis-server </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:7001 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       7429      1  0 18:30 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        00:00:00 redis-server </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:7002 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       7433      1  0 18:30 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        00:00:00 redis-server </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:7003 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       7437      1  0 18:30 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        00:00:00 redis-server </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:7004 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">root       7443      1  0 18:30 </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;">        00:00:00 redis-server </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">:7005 </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">cluster</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u591A\u5B9E\u4F8B\u76EE\u5F55</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  mkdir -p /data/700{0..5}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u8F91\u591A\u5B9E\u4F8B\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /data/7000/redis.conf</span></span>
<span class="line"><span style="color:#393A34;">port 7000</span></span>
<span class="line"><span style="color:#393A34;">daemonize yes</span></span>
<span class="line"><span style="color:#393A34;">pidfile /data/7000/redis.pid</span></span>
<span class="line"><span style="color:#393A34;">loglevel notice</span></span>
<span class="line"><span style="color:#393A34;">logfile </span><span style="color:#B56959;">&quot;/data/7000/redis.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#393A34;">dir /data/7000</span></span>
<span class="line"><span style="color:#393A34;">protected-mode no</span></span>
<span class="line"><span style="color:#393A34;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#393A34;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#393A34;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#393A34;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /data/7001/redis.conf</span></span>
<span class="line"><span style="color:#393A34;">port 7001</span></span>
<span class="line"><span style="color:#393A34;">daemonize yes</span></span>
<span class="line"><span style="color:#393A34;">pidfile /data/7001/redis.pid</span></span>
<span class="line"><span style="color:#393A34;">loglevel notice</span></span>
<span class="line"><span style="color:#393A34;">logfile </span><span style="color:#B56959;">&quot;/data/7001/redis.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#393A34;">dir /data/7001</span></span>
<span class="line"><span style="color:#393A34;">protected-mode no</span></span>
<span class="line"><span style="color:#393A34;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#393A34;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#393A34;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#393A34;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /data/7002/redis.conf</span></span>
<span class="line"><span style="color:#393A34;">port 7002</span></span>
<span class="line"><span style="color:#393A34;">daemonize yes</span></span>
<span class="line"><span style="color:#393A34;">pidfile /data/7002/redis.pid</span></span>
<span class="line"><span style="color:#393A34;">loglevel notice</span></span>
<span class="line"><span style="color:#393A34;">logfile </span><span style="color:#B56959;">&quot;/data/7002/redis.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#393A34;">dir /data/7002</span></span>
<span class="line"><span style="color:#393A34;">protected-mode no</span></span>
<span class="line"><span style="color:#393A34;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#393A34;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#393A34;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#393A34;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /data/7003/redis.conf</span></span>
<span class="line"><span style="color:#393A34;">port 7003</span></span>
<span class="line"><span style="color:#393A34;">daemonize yes</span></span>
<span class="line"><span style="color:#393A34;">pidfile /data/7003/redis.pid</span></span>
<span class="line"><span style="color:#393A34;">loglevel notice</span></span>
<span class="line"><span style="color:#393A34;">logfile </span><span style="color:#B56959;">&quot;/data/7003/redis.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#393A34;">dir /data/7003</span></span>
<span class="line"><span style="color:#393A34;">protected-mode no</span></span>
<span class="line"><span style="color:#393A34;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#393A34;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#393A34;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#393A34;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /data/7004/redis.conf</span></span>
<span class="line"><span style="color:#393A34;">port 7004</span></span>
<span class="line"><span style="color:#393A34;">daemonize yes</span></span>
<span class="line"><span style="color:#393A34;">pidfile /data/7004/redis.pid</span></span>
<span class="line"><span style="color:#393A34;">loglevel notice</span></span>
<span class="line"><span style="color:#393A34;">logfile </span><span style="color:#B56959;">&quot;/data/7004/redis.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#393A34;">dir /data/7004</span></span>
<span class="line"><span style="color:#393A34;">protected-mode no</span></span>
<span class="line"><span style="color:#393A34;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#393A34;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#393A34;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#393A34;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /data/7005/redis.conf</span></span>
<span class="line"><span style="color:#393A34;">port 7005</span></span>
<span class="line"><span style="color:#393A34;">daemonize yes</span></span>
<span class="line"><span style="color:#393A34;">pidfile /data/7005/redis.pid</span></span>
<span class="line"><span style="color:#393A34;">loglevel notice</span></span>
<span class="line"><span style="color:#393A34;">logfile </span><span style="color:#B56959;">&quot;/data/7005/redis.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#393A34;">dir /data/7005</span></span>
<span class="line"><span style="color:#393A34;">protected-mode no</span></span>
<span class="line"><span style="color:#393A34;">cluster-enabled yes</span></span>
<span class="line"><span style="color:#393A34;">cluster-config-file nodes.conf</span></span>
<span class="line"><span style="color:#393A34;">cluster-node-timeout 5000</span></span>
<span class="line"><span style="color:#393A34;">appendonly yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u542F\u52A8\u8282\u70B9</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  redis-server /data/7000/redis.conf </span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  redis-server /data/7001/redis.conf </span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  redis-server /data/7002/redis.conf </span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  redis-server /data/7003/redis.conf </span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  redis-server /data/7004/redis.conf </span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  redis-server /data/7005/redis.conf </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u68C0\u67E5\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  netstat -lntup</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">grep 700</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:17003               0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7433/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:17004               0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7437/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:17005               0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7443/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:7000                0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7423/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:7001                0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7425/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:7002                0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7429/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:7003                0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7433/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:7004                0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7437/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:7005                0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7443/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:17000               0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7423/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:17001               0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7425/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 0.0.0.0:17002               0.0.0.0:</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                   LISTEN      7429/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::17003                    :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7433/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::17004                    :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7437/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::17005                    :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7443/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::7000                     :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7423/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::7001                     :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7425/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::7002                     :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7429/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::7003                     :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7433/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::7004                     :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7437/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::7005                     :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7443/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::17000                    :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7423/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::17001                    :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7425/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">tcp        0      0 :::17002                    :::</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">                        LISTEN      7429/redis-server </span><span style="color:#AB5959;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u68C0\u67E5\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@db01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  ps -ef</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">grep redis</span></span>
<span class="line"><span style="color:#393A34;">root       7423      1  0 18:30 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        00:00:00 redis-server </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:7000 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       7425      1  0 18:30 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        00:00:00 redis-server </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:7001 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       7429      1  0 18:30 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        00:00:00 redis-server </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:7002 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       7433      1  0 18:30 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        00:00:00 redis-server </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:7003 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       7437      1  0 18:30 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        00:00:00 redis-server </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:7004 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">root       7443      1  0 18:30 </span><span style="color:#AB5959;">?</span><span style="color:#393A34;">        00:00:00 redis-server </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">:7005 </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">cluster</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>redis cluster-tutorial: <a href="https://redis.io/topics/cluster-tutorial/" target="_blank" rel="noopener noreferrer">https://redis.io/topics/cluster-tutorial/</a></li></ul>`,55),o=[e];function c(r,t,y,i,d,A){return n(),a("div",null,o)}var C=s(p,[["render",c]]);export{B as __pageData,C as default};
