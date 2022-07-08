import{_ as s,o as a,c as n,a as p}from"./app.1e6146c3.js";const g=JSON.parse('{"title":"Kafka Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"Kafka \u7B80\u4ECB","slug":"kafka-\u7B80\u4ECB"},{"level":2,"title":"Kafka \u5B89\u88C5\u4E0E\u90E8\u7F72","slug":"kafka-\u5B89\u88C5\u4E0E\u90E8\u7F72"},{"level":3,"title":"\u5355\u673A\u90E8\u7F72\uFF08single broker\uFF09","slug":"\u5355\u673A\u90E8\u7F72\uFF08single-broker\uFF09"},{"level":3,"title":"\u96C6\u7FA4\u90E8\u7F72\uFF08Mutil-broker\uFF09","slug":"\u96C6\u7FA4\u90E8\u7F72\uFF08mutil-broker\uFF09"},{"level":2,"title":"\u9644\uFF1Aserver.properties \u53C2\u6570\u8BF4\u660E","slug":"\u9644\uFF1Aserver-properties-\u53C2\u6570\u8BF4\u660E"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Kafka/Kafka Basic.md","lastUpdated":1657272051000}'),e={name:"LinuxBasics/Kafka/Kafka Basic.md"},l=p(`<h1 id="kafka-basic" tabindex="-1">Kafka Basic <a class="header-anchor" href="#kafka-basic" aria-hidden="true">#</a></h1><h2 id="kafka-\u7B80\u4ECB" tabindex="-1">Kafka \u7B80\u4ECB <a class="header-anchor" href="#kafka-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Kafka\u662F\u6700\u521D\u7531Linkedin\u516C\u53F8\u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u3001\u5206s\u533A\u7684\u3001\u591A\u526F\u672C\u7684\u3001\u591A\u8BA2\u9605\u8005\uFF0C\u57FA\u4E8Ezookeeper\u534F\u8C03\u7684\u5206\u5E03\u5F0F\u65E5\u5FD7\u7CFB\u7EDF\uFF08\u4E5F\u53EF\u4EE5\u5F53\u505AMQ\u7CFB\u7EDF\uFF09\uFF0C\u5E38\u89C1\u53EF\u4EE5\u7528\u4E8Eweb/nginx\u65E5\u5FD7\u3001\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u6D88\u606F\u670D\u52A1\u7B49\u7B49\uFF0CLinkedin\u4E8E2010\u5E74\u8D21\u732E\u7ED9\u4E86Apache\u57FA\u91D1\u4F1A\u5E76\u6210\u4E3A\u9876\u7EA7\u5F00\u6E90\u9879\u76EE\u3002</p><p>\u4E3B\u8981\u5E94\u7528\u573A\u666F\u662F\uFF1A<strong>\u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF\u548C\u6D88\u606F\u7CFB\u7EDF</strong>\u3002</p><p>Kafka\u4E3B\u8981\u8BBE\u8BA1\u76EE\u6807\u5982\u4E0B\uFF1A</p><ul><li>\u4EE5\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(1)\u7684\u65B9\u5F0F\u63D0\u4F9B\u6D88\u606F\u6301\u4E45\u5316\u80FD\u529B\uFF0C\u5373\u4F7F\u5BF9TB\u7EA7\u4EE5\u4E0A\u6570\u636E\u4E5F\u80FD\u4FDD\u8BC1\u5E38\u6570\u65F6\u95F4\u7684\u8BBF\u95EE\u6027\u80FD\u3002</li><li>\u9AD8\u541E\u5410\u7387\u3002\u5373\u4F7F\u5728\u975E\u5E38\u5EC9\u4EF7\u7684\u5546\u7528\u673A\u5668\u4E0A\u4E5F\u80FD\u505A\u5230\u5355\u673A\u652F\u6301\u6BCF\u79D2100K\u6761\u6D88\u606F\u7684\u4F20\u8F93\u3002</li><li>\u652F\u6301Kafka Server\u95F4\u7684\u6D88\u606F\u5206\u533A\uFF0C\u53CA\u5206\u5E03\u5F0F\u6D88\u8D39\uFF0C\u540C\u65F6\u4FDD\u8BC1\u6BCF\u4E2Apartition\u5185\u7684\u6D88\u606F\u987A\u5E8F\u4F20\u8F93\u3002</li><li>\u540C\u65F6\u652F\u6301\u79BB\u7EBF\u6570\u636E\u5904\u7406\u548C\u5B9E\u65F6\u6570\u636E\u5904\u7406\u3002</li><li>\u652F\u6301\u5728\u7EBF\u6C34\u5E73\u6269\u5C55</li></ul><p>\u5B98\u65B9\u7B80\u4ECB\uFF1A<a href="http://kafka.apache.org/intro" target="_blank" rel="noopener noreferrer">http://kafka.apache.org/intro</a></p><p>Kafka\u67B6\u6784\uFF1A</p><p><img src="https://images2018.cnblogs.com/blog/1385722/201808/1385722-20180804221732434-2116774825.png" alt="" title="zk Arch"></p><p>\u5B58\u50A8\u673A\u5236\uFF1A</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/bVbDJMc.png" alt="img"></p><ul><li><code>topic</code>\uFF1A \u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u6D88\u606F\u961F\u5217\u7684\u540D\u5B57</li><li><code>partition</code>\uFF1A\u4E3A\u4E86\u5B9E\u73B0\u6269\u5C55\u6027\uFF0C\u4E00\u4E2A\u975E\u5E38\u5927\u7684topic\u53EF\u4EE5\u5206\u5E03\u5230\u591A\u4E2A broker\uFF08\u5373\u670D\u52A1\u5668\uFF09\u4E0A\uFF0C\u4E00\u4E2Atopic\u53EF\u4EE5\u5206\u4E3A\u591A\u4E2Apartition\uFF0C\u6BCF\u4E2Apartition\u662F\u4E00\u4E2A\u6709\u5E8F\u7684\u961F\u5217</li><li><code>segment</code>\uFF1Apartition\u7269\u7406\u4E0A\u7531\u591A\u4E2Asegment\u7EC4\u6210</li><li><code>message</code>\uFF1A\u6BCF\u4E2Asegment\u6587\u4EF6\u4E2D\u5B9E\u9645\u5B58\u50A8\u7684\u6BCF\u4E00\u6761\u6570\u636E\u5C31\u662Fmessage</li><li><code>offset</code>\uFF1A\u6BCF\u4E2Apartition\u90FD\u7531\u4E00\u7CFB\u5217\u6709\u5E8F\u7684\u3001\u4E0D\u53EF\u53D8\u7684\u6D88\u606F\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u6D88\u606F\u88AB\u8FDE\u7EED\u7684\u8FFD\u52A0\u5230partition\u4E2D\uFF0Cpartition\u4E2D\u7684\u6BCF\u4E2A\u6D88\u606F\u90FD\u6709\u4E00\u4E2A\u8FDE\u7EED\u7684\u5E8F\u5217\u53F7\u53EB\u505Aoffset,\u7528\u4E8Epartition\u552F\u4E00\u6807\u8BC6\u4E00\u6761\u6D88\u606F</li></ul><h2 id="kafka-\u5B89\u88C5\u4E0E\u90E8\u7F72" tabindex="-1">Kafka \u5B89\u88C5\u4E0E\u90E8\u7F72 <a class="header-anchor" href="#kafka-\u5B89\u88C5\u4E0E\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="\u5355\u673A\u90E8\u7F72\uFF08single-broker\uFF09" tabindex="-1">\u5355\u673A\u90E8\u7F72\uFF08single broker\uFF09 <a class="header-anchor" href="#\u5355\u673A\u90E8\u7F72\uFF08single-broker\uFF09" aria-hidden="true">#</a></h3><ol><li>\u9996\u5148\u4ECE<a href="http://kafka.apache.org/downloads" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u4E0B\u8F7D\u7AD9\u70B9</a>\u83B7\u53D6\u6240\u9700\u7248\u672C\u7684\u4E8C\u8FDB\u5236\u5305\u5E76\u89E3\u538B\u7F29\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">wget http://apache.mirrors.hoobly.com/kafka/2.5.0/kafka_2.13-2.5.0.tgz</span></span>
<span class="line"><span style="color:#DBD7CA;">tar xf kafka_2.13-2.5.0.tgz</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> kafka_2.13-2.5.0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">wget http://apache.mirrors.hoobly.com/kafka/2.5.0/kafka_2.13-2.5.0.tgz</span></span>
<span class="line"><span style="color:#393A34;">tar xf kafka_2.13-2.5.0.tgz</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> kafka_2.13-2.5.0</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u542F\u52A8\u670D\u52A1\uFF1A</li></ol><p>Kafka\u4F9D\u8D56\u4E8E<code>ZooKeeper</code>\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u4F7F\u7528 kafka \u9644\u5E26\u7684\u811A\u672C\u6765\u542F\u52A8\u5355\u8282\u70B9 ZooKeeper \u5B9E\u4F8B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/zookeeper-server-start.sh config/zookeeper.properties</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/zookeeper-server-start.sh config/zookeeper.properties</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\uFF0C\u542F\u52A8<code>Kafka</code>\u670D\u52A1\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-server-start.sh config/server.properties</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-server-start.sh config/server.properties</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u521B\u5EFA\u4E00\u4E2A <code>topic</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u4E00\u4E2A\u5355\u8282\u70B9\uFF0C\u5355\u5206\u533A\u540D\u4E3Atest\u7684topic</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic </span><span style="color:#E0A569;">test</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E00\u4E2A\u5355\u8282\u70B9\uFF0C\u5355\u5206\u533A\u540D\u4E3Atest\u7684topic</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic </span><span style="color:#B58451;">test</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u5F53\u524D\u8FD0\u884C\u7684<code>topic</code>\u6709\u54EA\u4E9B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-topics.sh --list --bootstrap-server localhost:9092</span></span>
<span class="line"><span style="color:#E0A569;">test</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-topics.sh --list --bootstrap-server localhost:9092</span></span>
<span class="line"><span style="color:#B58451;">test</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u53D1\u9001\u4E00\u4E9B\u4FE1\u606F\uFF1A</li></ol><p>Kafka\u5E26\u6709\u4E00\u4E2A\u547D\u4EE4\u884C\u5BA2\u6237\u7AEF\uFF0C\u5B83\u5C06\u4ECE\u6587\u4EF6\u6216\u6807\u51C6\u8F93\u5165\u4E2D\u83B7\u53D6\u8F93\u5165\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A\u6D88\u606F\u53D1\u9001\u5230 Kafka \u96C6\u7FA4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u884C\u5C06\u4F5C\u4E3A\u5355\u72EC\u7684\u6D88\u606F\u53D1\u9001\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u751F\u4EA7\u8005\u7684\u4FE1\u606F\u53D1\u5F80broker</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic </span><span style="color:#E0A569;">test</span></span>
<span class="line"><span style="color:#DBD7CA;">hello kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">kafka</span></span>
<span class="line"><span style="color:#758575;"># kafka-console-producer.sh --broker-list node01:9093,node01:9094,node01:9095 --topic wzxmt</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u751F\u4EA7\u8005\u7684\u4FE1\u606F\u53D1\u5F80broker</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic </span><span style="color:#B58451;">test</span></span>
<span class="line"><span style="color:#393A34;">hello kafka</span></span>
<span class="line"><span style="color:#393A34;">kafka</span></span>
<span class="line"><span style="color:#A0ADA0;"># kafka-console-producer.sh --broker-list node01:9093,node01:9094,node01:9095 --topic wzxmt</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u542F\u52A8\u4E00\u4E2A\u6D88\u8D39\u8005<code>consumer</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic </span><span style="color:#E0A569;">test</span><span style="color:#DBD7CA;"> --from-beginning</span></span>
<span class="line"><span style="color:#758575;"># \u53EF\u4EE5\u770B\u5230\u751F\u4EA7\u8005\u53D1\u51FA\u7684\u4FE1\u606F</span></span>
<span class="line"><span style="color:#DBD7CA;">hello kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">kafka</span></span>
<span class="line"><span style="color:#758575;"># kafka-console-consumer.sh --bootstrap-server node01:2181 --from-beginning --topic wzxmt</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic </span><span style="color:#B58451;">test</span><span style="color:#393A34;"> --from-beginning</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EF\u4EE5\u770B\u5230\u751F\u4EA7\u8005\u53D1\u51FA\u7684\u4FE1\u606F</span></span>
<span class="line"><span style="color:#393A34;">hello kafka</span></span>
<span class="line"><span style="color:#393A34;">kafka</span></span>
<span class="line"><span style="color:#A0ADA0;"># kafka-console-consumer.sh --bootstrap-server node01:2181 --from-beginning --topic wzxmt</span></span>
<span class="line"></span></code></pre></div><h3 id="\u96C6\u7FA4\u90E8\u7F72\uFF08mutil-broker\uFF09" tabindex="-1">\u96C6\u7FA4\u90E8\u7F72\uFF08Mutil-broker\uFF09 <a class="header-anchor" href="#\u96C6\u7FA4\u90E8\u7F72\uFF08mutil-broker\uFF09" aria-hidden="true">#</a></h3><p>\u56E0\u624B\u5934\u8D44\u6E90\u6709\u9650\uFF0C\u6545\u7528\u5355\u53F0\u4E3B\u673A\u6A21\u62DF\u96C6\u7FA4\u3002</p><ol><li>\u9996\u5148\uFF0C\u4E3A\u6BCF\u4E00\u4E2A<code>broker</code>\u521B\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> cp config/server.properties config/server-1.properties</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> cp config/server.properties config/server-2.properties</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> cp config/server.properties config/server-3.properties</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> cp config/server.properties config/server-1.properties</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> cp config/server.properties config/server-2.properties</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> cp config/server.properties config/server-3.properties</span></span>
<span class="line"></span></code></pre></div><p>\u5206\u522B\u4FEE\u6539\u8FD9\u4E9B\u6587\u4EF6\u7684\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># --------- config/server-1.properties --------------</span></span>
<span class="line"><span style="color:#DBD7CA;">broker.id=1</span></span>
<span class="line"><span style="color:#758575;"># \u76D1\u542C</span></span>
<span class="line"><span style="color:#DBD7CA;">listeners=PLAINTEXT://:9091		</span><span style="color:#758575;"># \u6CE8\u610F\uFF1A\u65E9\u4E9B\u7248\u672C\u7684Kafka\u7528\u7684\u65F6 port \u5B57\u6BB5\u3002\u3002</span></span>
<span class="line"><span style="color:#758575;"># \u65E5\u5FD7\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">log.dirs=/data/kafka/logs-1</span></span>
<span class="line"><span style="color:#758575;"># \u914D\u7F6Ezookeeper\u7684\u8FDE\u63A5\uFF0C\u5F53zookeeper\u4E3A\u96C6\u7FA4\u65F6\u4F7F\u7528</span></span>
<span class="line"><span style="color:#758575;"># zookeeper.connect=node01:2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># --------- config/server-2.properties --------------</span></span>
<span class="line"><span style="color:#DBD7CA;">broker.id=2</span></span>
<span class="line"><span style="color:#DBD7CA;">listeners=PLAINTEXT://:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">log.dirs=/data/kafka/logs-2</span></span>
<span class="line"><span style="color:#758575;"># zookeeper.connect=node02:2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># --------- config/server-3.properties --------------</span></span>
<span class="line"><span style="color:#DBD7CA;">broker.id=2</span></span>
<span class="line"><span style="color:#DBD7CA;">listeners=PLAINTEXT://:9093</span></span>
<span class="line"><span style="color:#DBD7CA;">log.dirs=/data/kafka/logs-3</span></span>
<span class="line"><span style="color:#758575;"># zookeeper.connect=node03:2181</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># --------- config/server-1.properties --------------</span></span>
<span class="line"><span style="color:#393A34;">broker.id=1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u76D1\u542C</span></span>
<span class="line"><span style="color:#393A34;">listeners=PLAINTEXT://:9091		</span><span style="color:#A0ADA0;"># \u6CE8\u610F\uFF1A\u65E9\u4E9B\u7248\u672C\u7684Kafka\u7528\u7684\u65F6 port \u5B57\u6BB5\u3002\u3002</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u65E5\u5FD7\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">log.dirs=/data/kafka/logs-1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u914D\u7F6Ezookeeper\u7684\u8FDE\u63A5\uFF0C\u5F53zookeeper\u4E3A\u96C6\u7FA4\u65F6\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A0ADA0;"># zookeeper.connect=node01:2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># --------- config/server-2.properties --------------</span></span>
<span class="line"><span style="color:#393A34;">broker.id=2</span></span>
<span class="line"><span style="color:#393A34;">listeners=PLAINTEXT://:9092</span></span>
<span class="line"><span style="color:#393A34;">log.dirs=/data/kafka/logs-2</span></span>
<span class="line"><span style="color:#A0ADA0;"># zookeeper.connect=node02:2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># --------- config/server-3.properties --------------</span></span>
<span class="line"><span style="color:#393A34;">broker.id=2</span></span>
<span class="line"><span style="color:#393A34;">listeners=PLAINTEXT://:9093</span></span>
<span class="line"><span style="color:#393A34;">log.dirs=/data/kafka/logs-3</span></span>
<span class="line"><span style="color:#A0ADA0;"># zookeeper.connect=node03:2181</span></span>
<span class="line"></span></code></pre></div><p>\u4E3A\u5176\u521B\u5EFA\u65E5\u5FD7\u6587\u4EF6\u5939\uFF0C<code>mkdir -p /data/kafka/{logs-1,logs-2,logs-3}</code></p><ol start="2"><li>\u5206\u522B\u542F\u52A8\u8FD9\u4E09\u4E2A broker\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-server-start.sh config/server-1.properties </span><span style="color:#CB7676;">&amp;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-server-start.sh config/server-2.properties </span><span style="color:#CB7676;">&amp;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-server-start.sh config/server-3.properties </span><span style="color:#CB7676;">&amp;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-server-start.sh config/server-1.properties </span><span style="color:#AB5959;">&amp;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-server-start.sh config/server-2.properties </span><span style="color:#AB5959;">&amp;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-server-start.sh config/server-3.properties </span><span style="color:#AB5959;">&amp;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u521B\u5EFA<code>topic</code>\uFF08\u6307\u5B9A\u526F\u672C\u6570\u91CF\u4E3A3\uFF09\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-topics.sh --create --bootstrap-server  localhost:9092 --replication-factor 3 --partitions 1 --topic my-replicated-topic</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-topics.sh --create --bootstrap-server  localhost:9092 --replication-factor 3 --partitions 1 --topic my-replicated-topic</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u6240\u6709\u7684<code>topic</code>\u5217\u8868\u4FE1\u606F\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-topics.sh --list --bootstrap-server localhost:9092</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-topics.sh --list --bootstrap-server localhost:9092</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u7279\u5B9A topic \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master kafka_2.13-2.5.0</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#DBD7CA;">Topic: my-replicated-topic      PartitionCount: 1       ReplicationFactor: 3    Configs: segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#DBD7CA;">        Topic: my-replicated-topic      Partition: 0    Leader: 2       Replicas: 2,1,3 Isr: 2,1,3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master kafka_2.13-2.5.0</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#393A34;">Topic: my-replicated-topic      PartitionCount: 1       ReplicationFactor: 3    Configs: segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#393A34;">        Topic: my-replicated-topic      Partition: 0    Leader: 2       Replicas: 2,1,3 Isr: 2,1,3</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u53D1\u9001\u4E00\u4E9B\u4FE1\u606F\u5230<code>topic</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">hello kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">kafka</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">hello kafka</span></span>
<span class="line"><span style="color:#393A34;">kafka</span></span>
<span class="line"></span></code></pre></div><p>\u6D88\u8D39\u8FD9\u4E9B\u4FE1\u606F\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">hello kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">kafka</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">hello kafka</span></span>
<span class="line"><span style="color:#393A34;">kafka</span></span>
<span class="line"></span></code></pre></div><p>\u2139\uFE0F \u6D4B\u8BD5<code>leader</code>\u5B95\u6389\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master kafka_2.13-2.5.0</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ps aux </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep server-2.properties</span></span>
<span class="line"><span style="color:#DBD7CA;">root      </span><span style="color:#C98A7D;">\`32410\`</span><span style="color:#DBD7CA;">  9.1 18.9 4025076 353104 pts/6  Sl   02:48   0:16 ...</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">kill</span><span style="color:#DBD7CA;"> -9 32410</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master kafka_2.13-2.5.0</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ps aux </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep server-2.properties</span></span>
<span class="line"><span style="color:#393A34;">root      </span><span style="color:#B56959;">\`32410\`</span><span style="color:#393A34;">  9.1 18.9 4025076 353104 pts/6  Sl   02:48   0:16 ...</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">kill</span><span style="color:#393A34;"> -9 32410</span></span>
<span class="line"></span></code></pre></div><p><code>leader</code>\u8282\u70B9\u5DF2\u5207\u6362\u5230<code>observer</code>\u4E4B\u4E00\uFF0C\u5E76\u4E14\u8BE5\u8282\u70B9\u4E0D\u518D\u4F4D\u4E8E\u540C\u6B65\u526F\u672C\u96C6\u4E2D\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master kafka_2.13-2.5.0</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> bin/kafka-topics.sh --describe --bootstrap-server localhost:9091  --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#DBD7CA;">Topic: my-replicated-topic      PartitionCount: 1       ReplicationFactor: 3    Configs: segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#DBD7CA;">        Topic: my-replicated-topic      Partition: 0    Leader: 3       Replicas: 2,3,1 Isr: 3,1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master kafka_2.13-2.5.0</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> bin/kafka-topics.sh --describe --bootstrap-server localhost:9091  --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#393A34;">Topic: my-replicated-topic      PartitionCount: 1       ReplicationFactor: 3    Configs: segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#393A34;">        Topic: my-replicated-topic      Partition: 0    Leader: 3       Replicas: 2,3,1 Isr: 3,1</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u6B64\u524D\u53D1\u9001\u7684\u4FE1\u606F\u4F9D\u7136\u5B58\u5728\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> bin/kafka-console-consumer.sh --bootstrap-server localhost:9091  --from-beginning --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">hello kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">kafka</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> bin/kafka-console-consumer.sh --bootstrap-server localhost:9091  --from-beginning --topic my-replicated-topic</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">hello kafka</span></span>
<span class="line"><span style="color:#393A34;">kafka</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9644\uFF1Aserver-properties-\u53C2\u6570\u8BF4\u660E" tabindex="-1">\u9644\uFF1A<code>server.properties</code> \u53C2\u6570\u8BF4\u660E <a class="header-anchor" href="#\u9644\uFF1Aserver-properties-\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#broker\u7684\u5168\u5C40\u552F\u4E00\u7F16\u53F7\uFF0C\u4E0D\u80FD\u91CD\u590D\uFF0C\u53EA\u80FD\u662F\u6570\u5B57</span></span>
<span class="line"><span style="color:#DBD7CA;">broker.id=1</span></span>
<span class="line"><span style="color:#758575;">#\u6B64\u5904\u7684host.name\u4E3A\u672C\u673AIP(\u91CD\u8981),\u5982\u679C\u4E0D\u6539,\u5219\u5BA2\u6237\u7AEF\u4F1A\u629B\u51FA:Producerconnection to node01:9092 unsuccessful \u9519\u8BEF!</span></span>
<span class="line"><span style="color:#758575;"># host.name=10.0.0.11</span></span>
<span class="line"><span style="color:#758575;">#\u7528\u6765\u76D1\u542C\u94FE\u63A5\u7684\u7AEF\u53E3\uFF0Cproducer\u6216consumer\u5C06\u5728\u6B64\u7AEF\u53E3\u5EFA\u7ACB\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#758575;"># port=9092</span></span>
<span class="line"><span style="color:#758575;"># \u76D1\u542C</span></span>
<span class="line"><span style="color:#DBD7CA;">listeners=PLAINTEXT://:9091	</span></span>
<span class="line"><span style="color:#758575;">#\u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\u7684\u7EBF\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">num.network.threads=3</span></span>
<span class="line"><span style="color:#758575;">#\u7528\u6765\u5904\u7406\u78C1\u76D8IO\u7684\u7EBF\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">num.io.threads=8</span></span>
<span class="line"><span style="color:#758575;">#\u53D1\u9001\u5957\u63A5\u5B57\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#758575;">#\u63A5\u53D7\u5957\u63A5\u5B57\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#758575;">#\u8BF7\u6C42\u5957\u63A5\u5B57\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#758575;">#kafka\u6D88\u606F\u5B58\u653E\u7684\u8DEF\u5F84(\u6301\u4E45\u5316\u5230\u78C1\u76D8)</span></span>
<span class="line"><span style="color:#DBD7CA;">log.dirs=/data/kafka/logs</span></span>
<span class="line"><span style="color:#758575;">#topic\u5728\u5F53\u524Dbroker\u4E0A\u7684\u5206\u7247\u4E2A\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">num.partitions=2</span></span>
<span class="line"><span style="color:#758575;">#\u7528\u6765\u6062\u590D\u548C\u6E05\u7406data\u4E0B\u6570\u636E\u7684\u7EBF\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#758575;">#segment\u6587\u4EF6\u4FDD\u7559\u7684\u6700\u957F\u65F6\u95F4\uFF0C\u8D85\u65F6\u5C06\u88AB\u5220\u9664</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.hours=168</span></span>
<span class="line"><span style="color:#758575;">#\u6EDA\u52A8\u751F\u6210\u65B0\u7684segment\u6587\u4EF6\u7684\u6700\u5927\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">log.roll.hours=168</span></span>
<span class="line"><span style="color:#758575;">#\u65E5\u5FD7\u6587\u4EF6\u4E2D\u6BCF\u4E2Asegment\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A1G</span></span>
<span class="line"><span style="color:#DBD7CA;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#758575;">#\u5468\u671F\u6027\u68C0\u67E5\u6587\u4EF6\u5927\u5C0F\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.check.interval.ms=300000</span></span>
<span class="line"><span style="color:#758575;">#\u65E5\u5FD7\u6E05\u7406\u662F\u5426\u6253\u5F00</span></span>
<span class="line"><span style="color:#DBD7CA;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#758575;">#broker\u9700\u8981\u4F7F\u7528zookeeper\u4FDD\u5B58meta\u6570\u636E</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connect=node01:2181,node02:2181,node03:2181</span></span>
<span class="line"><span style="color:#758575;">#zookeeper\u94FE\u63A5\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connection.timeout.ms=6000</span></span>
<span class="line"><span style="color:#758575;">#partion buffer\u4E2D\uFF0C\u6D88\u606F\u7684\u6761\u6570\u8FBE\u5230\u9608\u503C\uFF0C\u5C06\u89E6\u53D1flush\u5230\u78C1\u76D8</span></span>
<span class="line"><span style="color:#DBD7CA;">log.flush.interval.messages=10000</span></span>
<span class="line"><span style="color:#758575;">#\u6D88\u606Fbuffer\u7684\u65F6\u95F4\uFF0C\u8FBE\u5230\u9608\u503C\uFF0C\u5C06\u89E6\u53D1flush\u5230\u78C1\u76D8</span></span>
<span class="line"><span style="color:#DBD7CA;">log.flush.interval.ms=3000</span></span>
<span class="line"><span style="color:#758575;">#\u5220\u9664topic\u9700\u8981server.properties\u4E2D\u8BBE\u7F6Edelete.topic.enable=true\u5426\u5219\u53EA\u662F\u6807\u8BB0\u5220\u9664</span></span>
<span class="line"><span style="color:#DBD7CA;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#758575;">#\u5EF6\u8FDF\u521D\u59CB\u4F7F\u7528\u8005\u91CD\u65B0\u5E73\u8861\u7684\u65F6\u95F4\uFF08\u751F\u4EA7\u75283\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"><span style="color:#758575;">#broker\u80FD\u63A5\u6536\u6D88\u606F\u7684\u6700\u5927\u5B57\u8282\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">message.max.bytes=2000000000</span></span>
<span class="line"><span style="color:#758575;">#broker\u53EF\u590D\u5236\u7684\u6D88\u606F\u7684\u6700\u5927\u5B57\u8282\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">replica.fetch.max.bytes=2000000000</span></span>
<span class="line"><span style="color:#758575;">#\u6D88\u8D39\u8005\u7AEF\u7684\u53EF\u8BFB\u53D6\u7684\u6700\u5927\u6D88\u606F</span></span>
<span class="line"><span style="color:#DBD7CA;">fetch.message.max.bytes=2000000000</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#broker\u7684\u5168\u5C40\u552F\u4E00\u7F16\u53F7\uFF0C\u4E0D\u80FD\u91CD\u590D\uFF0C\u53EA\u80FD\u662F\u6570\u5B57</span></span>
<span class="line"><span style="color:#393A34;">broker.id=1</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u6B64\u5904\u7684host.name\u4E3A\u672C\u673AIP(\u91CD\u8981),\u5982\u679C\u4E0D\u6539,\u5219\u5BA2\u6237\u7AEF\u4F1A\u629B\u51FA:Producerconnection to node01:9092 unsuccessful \u9519\u8BEF!</span></span>
<span class="line"><span style="color:#A0ADA0;"># host.name=10.0.0.11</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u7528\u6765\u76D1\u542C\u94FE\u63A5\u7684\u7AEF\u53E3\uFF0Cproducer\u6216consumer\u5C06\u5728\u6B64\u7AEF\u53E3\u5EFA\u7ACB\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A0ADA0;"># port=9092</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u76D1\u542C</span></span>
<span class="line"><span style="color:#393A34;">listeners=PLAINTEXT://:9091	</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\u7684\u7EBF\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">num.network.threads=3</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u7528\u6765\u5904\u7406\u78C1\u76D8IO\u7684\u7EBF\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">num.io.threads=8</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u53D1\u9001\u5957\u63A5\u5B57\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span></span>
<span class="line"><span style="color:#393A34;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u63A5\u53D7\u5957\u63A5\u5B57\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span></span>
<span class="line"><span style="color:#393A34;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u8BF7\u6C42\u5957\u63A5\u5B57\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span></span>
<span class="line"><span style="color:#393A34;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#A0ADA0;">#kafka\u6D88\u606F\u5B58\u653E\u7684\u8DEF\u5F84(\u6301\u4E45\u5316\u5230\u78C1\u76D8)</span></span>
<span class="line"><span style="color:#393A34;">log.dirs=/data/kafka/logs</span></span>
<span class="line"><span style="color:#A0ADA0;">#topic\u5728\u5F53\u524Dbroker\u4E0A\u7684\u5206\u7247\u4E2A\u6570</span></span>
<span class="line"><span style="color:#393A34;">num.partitions=2</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u7528\u6765\u6062\u590D\u548C\u6E05\u7406data\u4E0B\u6570\u636E\u7684\u7EBF\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#A0ADA0;">#segment\u6587\u4EF6\u4FDD\u7559\u7684\u6700\u957F\u65F6\u95F4\uFF0C\u8D85\u65F6\u5C06\u88AB\u5220\u9664</span></span>
<span class="line"><span style="color:#393A34;">log.retention.hours=168</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u6EDA\u52A8\u751F\u6210\u65B0\u7684segment\u6587\u4EF6\u7684\u6700\u5927\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">log.roll.hours=168</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u65E5\u5FD7\u6587\u4EF6\u4E2D\u6BCF\u4E2Asegment\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A1G</span></span>
<span class="line"><span style="color:#393A34;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5468\u671F\u6027\u68C0\u67E5\u6587\u4EF6\u5927\u5C0F\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">log.retention.check.interval.ms=300000</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u65E5\u5FD7\u6E05\u7406\u662F\u5426\u6253\u5F00</span></span>
<span class="line"><span style="color:#393A34;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#A0ADA0;">#broker\u9700\u8981\u4F7F\u7528zookeeper\u4FDD\u5B58meta\u6570\u636E</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connect=node01:2181,node02:2181,node03:2181</span></span>
<span class="line"><span style="color:#A0ADA0;">#zookeeper\u94FE\u63A5\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connection.timeout.ms=6000</span></span>
<span class="line"><span style="color:#A0ADA0;">#partion buffer\u4E2D\uFF0C\u6D88\u606F\u7684\u6761\u6570\u8FBE\u5230\u9608\u503C\uFF0C\u5C06\u89E6\u53D1flush\u5230\u78C1\u76D8</span></span>
<span class="line"><span style="color:#393A34;">log.flush.interval.messages=10000</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u6D88\u606Fbuffer\u7684\u65F6\u95F4\uFF0C\u8FBE\u5230\u9608\u503C\uFF0C\u5C06\u89E6\u53D1flush\u5230\u78C1\u76D8</span></span>
<span class="line"><span style="color:#393A34;">log.flush.interval.ms=3000</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5220\u9664topic\u9700\u8981server.properties\u4E2D\u8BBE\u7F6Edelete.topic.enable=true\u5426\u5219\u53EA\u662F\u6807\u8BB0\u5220\u9664</span></span>
<span class="line"><span style="color:#393A34;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5EF6\u8FDF\u521D\u59CB\u4F7F\u7528\u8005\u91CD\u65B0\u5E73\u8861\u7684\u65F6\u95F4\uFF08\u751F\u4EA7\u75283\uFF09</span></span>
<span class="line"><span style="color:#393A34;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"><span style="color:#A0ADA0;">#broker\u80FD\u63A5\u6536\u6D88\u606F\u7684\u6700\u5927\u5B57\u8282\u6570</span></span>
<span class="line"><span style="color:#393A34;">message.max.bytes=2000000000</span></span>
<span class="line"><span style="color:#A0ADA0;">#broker\u53EF\u590D\u5236\u7684\u6D88\u606F\u7684\u6700\u5927\u5B57\u8282\u6570</span></span>
<span class="line"><span style="color:#393A34;">replica.fetch.max.bytes=2000000000</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u6D88\u8D39\u8005\u7AEF\u7684\u53EF\u8BFB\u53D6\u7684\u6700\u5927\u6D88\u606F</span></span>
<span class="line"><span style="color:#393A34;">fetch.message.max.bytes=2000000000</span></span>
<span class="line"></span></code></pre></div><p>\u4E0D\u540C\u8282\u70B9\u4E4B\u95F4\u53EA\u9700\u8981\u4FEE\u6539<code>server.properties </code>\u7684<code> broker.id</code>\u5373\u53EF\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Kafka \u67B6\u6784\u539F\u7406\uFF1A<a href="https://juejin.im/post/5e217c3fe51d450200787f23Kafka" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5e217c3fe51d450200787f23Kafka</a></li><li>Kafka\u6587\u4EF6\u5B58\u50A8\u673A\u5236\uFF1A<a href="https://segmentfault.com/a/1190000021824942" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000021824942</a></li><li>QuickStart: <a href="http://kafka.apache.org/quickstart" target="_blank" rel="noopener noreferrer">http://kafka.apache.org/quickstart</a></li><li><a href="http://kafka.apache.org/quickstart#quickstart_kafkaconnect" target="_blank" rel="noopener noreferrer">http://kafka.apache.org/quickstart#quickstart_kafkaconnect</a></li></ul>`,60),o=[l];function c(r,t,i,y,d,A){return a(),n("div",null,o)}var f=s(e,[["render",c]]);export{g as __pageData,f as default};
