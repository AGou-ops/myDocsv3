import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const d=JSON.parse('{"title":"ELK+Kafka+Filebeat\u65E5\u5FD7\u7CFB\u7EDF","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u73AF\u5883\u89C4\u5212","slug":"_1-\u73AF\u5883\u89C4\u5212"},{"level":2,"title":"2.\u90E8\u7F72elasticsearch\u96C6\u7FA4","slug":"_2-\u90E8\u7F72elasticsearch\u96C6\u7FA4"},{"level":3,"title":"2.1.\u914D\u7F6Ees-1\u8282\u70B9","slug":"_2-1-\u914D\u7F6Ees-1\u8282\u70B9"},{"level":3,"title":"2.2.\u914D\u7F6Ees-2\u8282\u70B9","slug":"_2-2-\u914D\u7F6Ees-2\u8282\u70B9"},{"level":3,"title":"2.3.\u914D\u7F6Ees-3\u8282\u70B9","slug":"_2-3-\u914D\u7F6Ees-3\u8282\u70B9"},{"level":3,"title":"2.4.\u4F7F\u7528es-head\u63D2\u4EF6\u67E5\u770B\u96C6\u7FA4\u72B6\u6001","slug":"_2-4-\u4F7F\u7528es-head\u63D2\u4EF6\u67E5\u770B\u96C6\u7FA4\u72B6\u6001"},{"level":2,"title":"3.\u90E8\u7F72kibana","slug":"_3-\u90E8\u7F72kibana"},{"level":2,"title":"4.\u90E8\u7F72zookeeper","slug":"_4-\u90E8\u7F72zookeeper"},{"level":3,"title":"4.1.\u914D\u7F6Ezookeeper-1\u8282\u70B9","slug":"_4-1-\u914D\u7F6Ezookeeper-1\u8282\u70B9"},{"level":3,"title":"4.2.\u914D\u7F6Ezookeeper-2\u8282\u70B9","slug":"_4-2-\u914D\u7F6Ezookeeper-2\u8282\u70B9"},{"level":3,"title":"4.3.\u914D\u7F6Ezookeeper-3\u8282\u70B9","slug":"_4-3-\u914D\u7F6Ezookeeper-3\u8282\u70B9"},{"level":3,"title":"4.4.\u542F\u52A8\u6240\u6709\u8282\u70B9","slug":"_4-4-\u542F\u52A8\u6240\u6709\u8282\u70B9"},{"level":2,"title":"5.\u90E8\u7F72kafka","slug":"_5-\u90E8\u7F72kafka"},{"level":3,"title":"5.1.\u914D\u7F6Ekafka-1\u8282\u70B9","slug":"_5-1-\u914D\u7F6Ekafka-1\u8282\u70B9"},{"level":3,"title":"5.2.\u914D\u7F6Ekafka-2\u8282\u70B9","slug":"_5-2-\u914D\u7F6Ekafka-2\u8282\u70B9"},{"level":3,"title":"5.3.\u914D\u7F6Ekafka-3\u8282\u70B9","slug":"_5-3-\u914D\u7F6Ekafka-3\u8282\u70B9"},{"level":3,"title":"5.4.\u542F\u52A8kafka","slug":"_5-4-\u542F\u52A8kafka"},{"level":2,"title":"6.\u6D4B\u8BD5kafka\u4E0Ezookeeper\u8FDE\u63A5","slug":"_6-\u6D4B\u8BD5kafka\u4E0Ezookeeper\u8FDE\u63A5"},{"level":2,"title":"7.\u914D\u7F6Efilebeat\u6536\u96C6nginx\u3001tomcat\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka\u4E2D","slug":"_7-\u914D\u7F6Efilebeat\u6536\u96C6nginx\u3001tomcat\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka\u4E2D"},{"level":3,"title":"7.1.\u5B89\u88C5\u5E76\u914D\u7F6Enginx\u670D\u52A1","slug":"_7-1-\u5B89\u88C5\u5E76\u914D\u7F6Enginx\u670D\u52A1"},{"level":3,"title":"7.2.\u5B89\u88C5tomcat\u670D\u52A1","slug":"_7-2-\u5B89\u88C5tomcat\u670D\u52A1"},{"level":3,"title":"7.3.\u5B89\u88C5filebeat\u670D\u52A1","slug":"_7-3-\u5B89\u88C5filebeat\u670D\u52A1"},{"level":3,"title":"7.4.\u914D\u7F6Efilebeat\u6536\u96C6\u5E94\u7528\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka","slug":"_7-4-\u914D\u7F6Efilebeat\u6536\u96C6\u5E94\u7528\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka"},{"level":3,"title":"7.5.\u4EA7\u751F\u7A0B\u5E8F\u65E5\u5FD7\u6570\u636E\u89C2\u5BDF\u6570\u636E\u662F\u5426\u5B58\u50A8kafka","slug":"_7-5-\u4EA7\u751F\u7A0B\u5E8F\u65E5\u5FD7\u6570\u636E\u89C2\u5BDF\u6570\u636E\u662F\u5426\u5B58\u50A8kafka"},{"level":2,"title":"8.\u914D\u7F6Elogstash\u4ECEkafka\u4E2D\u8BFB\u53D6\u6570\u636E\u5E76\u5B58\u50A8\u5230es\u96C6\u7FA4","slug":"_8-\u914D\u7F6Elogstash\u4ECEkafka\u4E2D\u8BFB\u53D6\u6570\u636E\u5E76\u5B58\u50A8\u5230es\u96C6\u7FA4"},{"level":3,"title":"8.1.\u90E8\u7F72logstash\u670D\u52A1","slug":"_8-1-\u90E8\u7F72logstash\u670D\u52A1"},{"level":3,"title":"8.2.\u914D\u7F6Elogstash\u4ECEkafka\u8BFB\u53D6\u6570\u636E\u5B58\u50A8\u5230es\u96C6\u7FA4","slug":"_8-2-\u914D\u7F6Elogstash\u4ECEkafka\u8BFB\u53D6\u6570\u636E\u5B58\u50A8\u5230es\u96C6\u7FA4"},{"level":3,"title":"8.3.\u542F\u52A8logstash\u5E76\u89C2\u5BDF\u65E5\u5FD7","slug":"_8-3-\u542F\u52A8logstash\u5E76\u89C2\u5BDF\u65E5\u5FD7"},{"level":3,"title":"8.4.\u67E5\u770Belasticsearch\u96C6\u7FA4\u662F\u5426\u589E\u52A0\u4E86\u5BF9\u5E94\u7684\u7D22\u5F15\u5E93","slug":"_8-4-\u67E5\u770Belasticsearch\u96C6\u7FA4\u662F\u5426\u589E\u52A0\u4E86\u5BF9\u5E94\u7684\u7D22\u5F15\u5E93"},{"level":2,"title":"9.\u5728kibana\u4E0A\u5173\u8054elasticsearch\u7D22\u5F15\u5E93\u6D4F\u89C8\u65E5\u5FD7\u6570\u636E","slug":"_9-\u5728kibana\u4E0A\u5173\u8054elasticsearch\u7D22\u5F15\u5E93\u6D4F\u89C8\u65E5\u5FD7\u6570\u636E"},{"level":3,"title":"9.1.\u5728kibana\u4E0A\u6DFB\u52A0nginx-access\u7D22\u5F15\u6A21\u5F0F","slug":"_9-1-\u5728kibana\u4E0A\u6DFB\u52A0nginx-access\u7D22\u5F15\u6A21\u5F0F"},{"level":3,"title":"9.2.\u540C\u6837\u65B9\u6CD5\u6DFB\u52A0tomcat-cata\u7D22\u5F15\u6A21\u5F0F","slug":"_9-2-\u540C\u6837\u65B9\u6CD5\u6DFB\u52A0tomcat-cata\u7D22\u5F15\u6A21\u5F0F"},{"level":3,"title":"9.3.\u67E5\u8BE2nginx-access\u7D22\u5F15\u65E5\u5FD7\u6570\u636E","slug":"_9-3-\u67E5\u8BE2nginx-access\u7D22\u5F15\u65E5\u5FD7\u6570\u636E"},{"level":3,"title":"9.4.\u67E5\u770Btomcat-cata\u7D22\u5F15\u65E5\u5FD7\u6570\u636E","slug":"_9-4-\u67E5\u770Btomcat-cata\u7D22\u5F15\u65E5\u5FD7\u6570\u636E"},{"level":2,"title":"10.\u62A5\u9519\u5408\u96C6","slug":"_10-\u62A5\u9519\u5408\u96C6"},{"level":3,"title":"10.1.es\u542F\u52A8\u65F6\u62A5\u9519\u65E0\u6CD5\u6307\u5B9A\u88AB\u8BF7\u6C42\u7684\u5730\u5740","slug":"_10-1-es\u542F\u52A8\u65F6\u62A5\u9519\u65E0\u6CD5\u6307\u5B9A\u88AB\u8BF7\u6C42\u7684\u5730\u5740"},{"level":3,"title":"10.2.filebeat\u5199\u5165\u6570\u636E\u5230kafka api\u7248\u672C\u62A5\u9519","slug":"_10-2-filebeat\u5199\u5165\u6570\u636E\u5230kafka-api\u7248\u672C\u62A5\u9519"}],"relativePath":"CloudNative/ELFK/ELK-Kafka-Filebeat.md","lastUpdated":1657272051000}'),p={name:"CloudNative/ELFK/ELK-Kafka-Filebeat.md"},o=l(`<h1 id="elk-kafka-filebeat\u65E5\u5FD7\u7CFB\u7EDF" tabindex="-1">ELK+Kafka+Filebeat\u65E5\u5FD7\u7CFB\u7EDF <a class="header-anchor" href="#elk-kafka-filebeat\u65E5\u5FD7\u7CFB\u7EDF" aria-hidden="true">#</a></h1><h2 id="_1-\u73AF\u5883\u89C4\u5212" tabindex="-1">1.\u73AF\u5883\u89C4\u5212 <a class="header-anchor" href="#_1-\u73AF\u5883\u89C4\u5212" aria-hidden="true">#</a></h2><table><thead><tr><th>IP\u5730\u5740</th><th>\u90E8\u7F72\u7684\u670D\u52A1</th><th>\u4E3B\u673A\u540D</th></tr></thead><tbody><tr><td>192.168.81.210</td><td>es+kafka+zookeeper+kibana+logstash</td><td>elk-1</td></tr><tr><td>192.168.81.220</td><td>es+kafka+zookeeper</td><td>elk-2</td></tr><tr><td>192.168.81.230</td><td>es+kafka+zookeeper+nginx+filebeat</td><td>elk-3</td></tr></tbody></table><p><strong>\u65E5\u5FD7\u7CFB\u7EDF\u67B6\u6784\u56FE</strong></p><p>nginx\u2014&gt;filebeat\u2014&gt;kafka\u2014&gt;logstash\u2014&gt;elasticsearch\u2014&gt;kibana</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b9066d7fba54457688d3d8801ae405c4.png" alt="\u8BF7\u6DFB\u52A0\u56FE\u7247\u63CF\u8FF0"></p><h2 id="_2-\u90E8\u7F72elasticsearch\u96C6\u7FA4" tabindex="-1">2.\u90E8\u7F72elasticsearch\u96C6\u7FA4 <a class="header-anchor" href="#_2-\u90E8\u7F72elasticsearch\u96C6\u7FA4" aria-hidden="true">#</a></h2><h3 id="_2-1-\u914D\u7F6Ees-1\u8282\u70B9" tabindex="-1">2.1.\u914D\u7F6Ees-1\u8282\u70B9 <a class="header-anchor" href="#_2-1-\u914D\u7F6Ees-1\u8282\u70B9" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u4E0B\u8F7Delasticsearch7.6</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> wget https://mirrors.huaweicloud.com/elasticsearch/7.6.0/elasticsearch-7.6.0-x86_64.rpm</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">/soft</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> rpm -ivh elasticsearch-7.6.0-x86_64.rpm </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6\uFF0C\u914D\u7F6E\u96C6\u7FA4\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /etc/elasticsearch/elasticsearch.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.name: elk-application</span></span>
<span class="line"><span style="color:#DBD7CA;">node.name: elk-1</span></span>
<span class="line"><span style="color:#DBD7CA;">path.data: /data/elasticsearch</span></span>
<span class="line"><span style="color:#DBD7CA;">path.logs: /var/log/elasticsearch</span></span>
<span class="line"><span style="color:#DBD7CA;">bootstrap.memory_lock: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">network.host: 192.168.81.210,127.0.0.1</span></span>
<span class="line"><span style="color:#DBD7CA;">http.port: 9200</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.initial_master_nodes: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;elk-1&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.ping.unicast.hosts: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.210&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.220&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.230&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_timeout: 120s</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_retries: 6</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_interval: 30s</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.allow-origin: </span><span style="color:#C98A7D;">&quot;*&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">3.\u521B\u5EFA\u6570\u636E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mkdir /data/elasticsearch/ -p</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> chown -R elasticsearch.elasticsearch /data/elasticsearch/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">4.\u914D\u7F6E\u5185\u5B58\u9501\u5B9A</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mkdir /etc/systemd/system/elasticsearch.service.d/</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> vim /etc/systemd/system/elasticsearch.service.d/override.conf</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Service</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">LimitMEMLOCK=infinity</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">5.\u542F\u52A8elasticsearch</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl daemon-reload </span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl start elasticsearch</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> elasticsearch</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u4E0B\u8F7Delasticsearch7.6</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> wget https://mirrors.huaweicloud.com/elasticsearch/7.6.0/elasticsearch-7.6.0-x86_64.rpm</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/soft</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> rpm -ivh elasticsearch-7.6.0-x86_64.rpm </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6\uFF0C\u914D\u7F6E\u96C6\u7FA4\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /etc/elasticsearch/elasticsearch.yml</span></span>
<span class="line"><span style="color:#393A34;">cluster.name: elk-application</span></span>
<span class="line"><span style="color:#393A34;">node.name: elk-1</span></span>
<span class="line"><span style="color:#393A34;">path.data: /data/elasticsearch</span></span>
<span class="line"><span style="color:#393A34;">path.logs: /var/log/elasticsearch</span></span>
<span class="line"><span style="color:#393A34;">bootstrap.memory_lock: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">network.host: 192.168.81.210,127.0.0.1</span></span>
<span class="line"><span style="color:#393A34;">http.port: 9200</span></span>
<span class="line"><span style="color:#393A34;">cluster.initial_master_nodes: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;elk-1&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.ping.unicast.hosts: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.210&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.220&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.230&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_timeout: 120s</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_retries: 6</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_interval: 30s</span></span>
<span class="line"><span style="color:#393A34;">http.cors.enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">http.cors.allow-origin: </span><span style="color:#B56959;">&quot;*&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">3.\u521B\u5EFA\u6570\u636E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mkdir /data/elasticsearch/ -p</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> chown -R elasticsearch.elasticsearch /data/elasticsearch/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">4.\u914D\u7F6E\u5185\u5B58\u9501\u5B9A</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mkdir /etc/systemd/system/elasticsearch.service.d/</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> vim /etc/systemd/system/elasticsearch.service.d/override.conf</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Service</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">LimitMEMLOCK=infinity</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">5.\u542F\u52A8elasticsearch</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl daemon-reload </span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl start elasticsearch</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> elasticsearch</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-2-\u914D\u7F6Ees-2\u8282\u70B9" tabindex="-1">2.2.\u914D\u7F6Ees-2\u8282\u70B9 <a class="header-anchor" href="#_2-2-\u914D\u7F6Ees-2\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u53EA\u662F\u914D\u7F6E\u6587\u4EF6\u4E2Dnode.name\u548Cnetwork.host\u4E0D\u540C\uFF0C\u5176\u4ED6\u64CD\u4F5C\u65B9\u5F0F\u4E00\u81F4</p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-2 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /etc/elasticsearch/elasticsearch.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.name: elk-application</span></span>
<span class="line"><span style="color:#DBD7CA;">node.name: elk-2</span></span>
<span class="line"><span style="color:#DBD7CA;">path.data: /data/elasticsearch</span></span>
<span class="line"><span style="color:#DBD7CA;">path.logs: /var/log/elasticsearch</span></span>
<span class="line"><span style="color:#DBD7CA;">bootstrap.memory_lock: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">network.host: 192.168.81.220,127.0.0.1</span></span>
<span class="line"><span style="color:#DBD7CA;">http.port: 9200</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.initial_master_nodes: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;elk-1&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.ping.unicast.hosts: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.210&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.220&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.230&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_timeout: 120s</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_retries: 6</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_interval: 30s</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.allow-origin: </span><span style="color:#C98A7D;">&quot;*&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-2 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /etc/elasticsearch/elasticsearch.yml</span></span>
<span class="line"><span style="color:#393A34;">cluster.name: elk-application</span></span>
<span class="line"><span style="color:#393A34;">node.name: elk-2</span></span>
<span class="line"><span style="color:#393A34;">path.data: /data/elasticsearch</span></span>
<span class="line"><span style="color:#393A34;">path.logs: /var/log/elasticsearch</span></span>
<span class="line"><span style="color:#393A34;">bootstrap.memory_lock: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">network.host: 192.168.81.220,127.0.0.1</span></span>
<span class="line"><span style="color:#393A34;">http.port: 9200</span></span>
<span class="line"><span style="color:#393A34;">cluster.initial_master_nodes: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;elk-1&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.ping.unicast.hosts: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.210&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.220&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.230&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_timeout: 120s</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_retries: 6</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_interval: 30s</span></span>
<span class="line"><span style="color:#393A34;">http.cors.enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">http.cors.allow-origin: </span><span style="color:#B56959;">&quot;*&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-3-\u914D\u7F6Ees-3\u8282\u70B9" tabindex="-1">2.3.\u914D\u7F6Ees-3\u8282\u70B9 <a class="header-anchor" href="#_2-3-\u914D\u7F6Ees-3\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u53EA\u662F\u914D\u7F6E\u6587\u4EF6\u4E2Dnode.name\u548Cnetwork.host\u4E0D\u540C\uFF0C\u5176\u4ED6\u64CD\u4F5C\u65B9\u5F0F\u4E00\u81F4</p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-2 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  vim /etc/elasticsearch/elasticsearch.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.name: elk-application</span></span>
<span class="line"><span style="color:#DBD7CA;">node.name: elk-3</span></span>
<span class="line"><span style="color:#DBD7CA;">path.data: /data/elasticsearch</span></span>
<span class="line"><span style="color:#DBD7CA;">path.logs: /var/log/elasticsearch</span></span>
<span class="line"><span style="color:#DBD7CA;">bootstrap.memory_lock: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">network.host: 192.168.81.230,127.0.0.1</span></span>
<span class="line"><span style="color:#DBD7CA;">http.port: 9200</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster.initial_master_nodes: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;elk-1&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.ping.unicast.hosts: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.210&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.220&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.230&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_timeout: 120s</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_retries: 6</span></span>
<span class="line"><span style="color:#DBD7CA;">discovery.zen.fd.ping_interval: 30s</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">http.cors.allow-origin: </span><span style="color:#C98A7D;">&quot;*&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-2 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  vim /etc/elasticsearch/elasticsearch.yml</span></span>
<span class="line"><span style="color:#393A34;">cluster.name: elk-application</span></span>
<span class="line"><span style="color:#393A34;">node.name: elk-3</span></span>
<span class="line"><span style="color:#393A34;">path.data: /data/elasticsearch</span></span>
<span class="line"><span style="color:#393A34;">path.logs: /var/log/elasticsearch</span></span>
<span class="line"><span style="color:#393A34;">bootstrap.memory_lock: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">network.host: 192.168.81.230,127.0.0.1</span></span>
<span class="line"><span style="color:#393A34;">http.port: 9200</span></span>
<span class="line"><span style="color:#393A34;">cluster.initial_master_nodes: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;elk-1&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.ping.unicast.hosts: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.210&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.220&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.230&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_timeout: 120s</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_retries: 6</span></span>
<span class="line"><span style="color:#393A34;">discovery.zen.fd.ping_interval: 30s</span></span>
<span class="line"><span style="color:#393A34;">http.cors.enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">http.cors.allow-origin: </span><span style="color:#B56959;">&quot;*&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-4-\u4F7F\u7528es-head\u63D2\u4EF6\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" tabindex="-1">2.4.\u4F7F\u7528es-head\u63D2\u4EF6\u67E5\u770B\u96C6\u7FA4\u72B6\u6001 <a class="header-anchor" href="#_2-4-\u4F7F\u7528es-head\u63D2\u4EF6\u67E5\u770B\u96C6\u7FA4\u72B6\u6001" aria-hidden="true">#</a></h3><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b9dd64efa7e14925867b0305a8978a8d.png" alt="\u8BF7\u6DFB\u52A0\u56FE\u7247\u63CF\u8FF0"></p><h2 id="_3-\u90E8\u7F72kibana" tabindex="-1">3.\u90E8\u7F72kibana <a class="header-anchor" href="#_3-\u90E8\u7F72kibana" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u4E0B\u8F7Dkibana rpm\u5305</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  rpm -ivh kibana-7.6.0-x86_64.rpm </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u914D\u7F6Ekibana</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> vim /etc/kibana/kibana.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">server.port: 5601                 </span></span>
<span class="line"><span style="color:#DBD7CA;">server.host: </span><span style="color:#C98A7D;">&quot;192.168.81.210&quot;</span><span style="color:#DBD7CA;">               </span></span>
<span class="line"><span style="color:#DBD7CA;">server.name: </span><span style="color:#C98A7D;">&quot;elk-application&quot;</span><span style="color:#DBD7CA;">                        </span></span>
<span class="line"><span style="color:#DBD7CA;">elasticsearch.hosts: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;http://192.168.81.210:9200&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">       </span></span>
<span class="line"><span style="color:#DBD7CA;">i18n.locale: </span><span style="color:#C98A7D;">&quot;zh-CN&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl restart kibana</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> elasticsearch</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u4E0B\u8F7Dkibana rpm\u5305</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  rpm -ivh kibana-7.6.0-x86_64.rpm </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u914D\u7F6Ekibana</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> vim /etc/kibana/kibana.yml</span></span>
<span class="line"><span style="color:#393A34;">server.port: 5601                 </span></span>
<span class="line"><span style="color:#393A34;">server.host: </span><span style="color:#B56959;">&quot;192.168.81.210&quot;</span><span style="color:#393A34;">               </span></span>
<span class="line"><span style="color:#393A34;">server.name: </span><span style="color:#B56959;">&quot;elk-application&quot;</span><span style="color:#393A34;">                        </span></span>
<span class="line"><span style="color:#393A34;">elasticsearch.hosts: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;http://192.168.81.210:9200&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">       </span></span>
<span class="line"><span style="color:#393A34;">i18n.locale: </span><span style="color:#B56959;">&quot;zh-CN&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl restart kibana</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> elasticsearch</span></span>
<span class="line"></span></code></pre></div><p><strong>kibana\u90E8\u7F72\u6210\u529F</strong></p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/6424482e309e41be978d64816562e14b.png" alt="\u8BF7\u6DFB\u52A0\u56FE\u7247\u63CF\u8FF0"></p><h2 id="_4-\u90E8\u7F72zookeeper" tabindex="-1">4.\u90E8\u7F72zookeeper <a class="header-anchor" href="#_4-\u90E8\u7F72zookeeper" aria-hidden="true">#</a></h2><h3 id="_4-1-\u914D\u7F6Ezookeeper-1\u8282\u70B9" tabindex="-1">4.1.\u914D\u7F6Ezookeeper-1\u8282\u70B9 <a class="header-anchor" href="#_4-1-\u914D\u7F6Ezookeeper-1\u8282\u70B9" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u4E0B\u8F7D\u8F6F\u4EF6</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> wget http://archive.apache.org/dist/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u89E3\u538B\u5E76\u79FB\u52A8zookeeper</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> tar xf soft/zookeeper-3.4.13.tar.gz -C /data/</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mv /data/zookeeper-3.4.13/ /data/zookeeper</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">3.\u521B\u5EFA\u6570\u636E\u76EE\u5F55\u548C\u65E5\u5FD7\u76EE\u5F55</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mkdir /data/zookeeper/{data,logs}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">4.\u51C6\u5907\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /data/zookeeper/conf</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/zookeeper/conf</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cp zoo_sample.cfg zoo.cfg</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/zookeeper/conf</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> vim zoo.cfg </span></span>
<span class="line"><span style="color:#DBD7CA;">tickTime=2000</span></span>
<span class="line"><span style="color:#DBD7CA;">initLimit=10</span></span>
<span class="line"><span style="color:#DBD7CA;">syncLimit=5</span></span>
<span class="line"><span style="color:#DBD7CA;">dataDir=/data/zookeeper/data</span></span>
<span class="line"><span style="color:#DBD7CA;">DataLogDir=/data/zookeeper/logs</span></span>
<span class="line"><span style="color:#DBD7CA;">clientPort=2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">server.1=192.168.81.210:2888:3888</span></span>
<span class="line"><span style="color:#DBD7CA;">server.2=192.168.81.220:2888:3888</span></span>
<span class="line"><span style="color:#DBD7CA;">server.3=192.168.81.230:2888:3888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">5.\u751F\u6210\u8282\u70B9id\u6587\u4EF6</span></span>
<span class="line"><span style="color:#758575;">#\u8282\u70B9id\u53EA\u80FD\u4FDD\u62A4\u6570\u5B57</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/zookeeper</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 1 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /data/zookeeper/data/myid</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u4E0B\u8F7D\u8F6F\u4EF6</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> wget http://archive.apache.org/dist/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u89E3\u538B\u5E76\u79FB\u52A8zookeeper</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> tar xf soft/zookeeper-3.4.13.tar.gz -C /data/</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mv /data/zookeeper-3.4.13/ /data/zookeeper</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">3.\u521B\u5EFA\u6570\u636E\u76EE\u5F55\u548C\u65E5\u5FD7\u76EE\u5F55</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mkdir /data/zookeeper/{data,logs}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">4.\u51C6\u5907\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /data/zookeeper/conf</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/zookeeper/conf</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cp zoo_sample.cfg zoo.cfg</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/zookeeper/conf</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> vim zoo.cfg </span></span>
<span class="line"><span style="color:#393A34;">tickTime=2000</span></span>
<span class="line"><span style="color:#393A34;">initLimit=10</span></span>
<span class="line"><span style="color:#393A34;">syncLimit=5</span></span>
<span class="line"><span style="color:#393A34;">dataDir=/data/zookeeper/data</span></span>
<span class="line"><span style="color:#393A34;">DataLogDir=/data/zookeeper/logs</span></span>
<span class="line"><span style="color:#393A34;">clientPort=2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">server.1=192.168.81.210:2888:3888</span></span>
<span class="line"><span style="color:#393A34;">server.2=192.168.81.220:2888:3888</span></span>
<span class="line"><span style="color:#393A34;">server.3=192.168.81.230:2888:3888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">5.\u751F\u6210\u8282\u70B9id\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u8282\u70B9id\u53EA\u80FD\u4FDD\u62A4\u6570\u5B57</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/zookeeper</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 1 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /data/zookeeper/data/myid</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-2-\u914D\u7F6Ezookeeper-2\u8282\u70B9" tabindex="-1">4.2.\u914D\u7F6Ezookeeper-2\u8282\u70B9 <a class="header-anchor" href="#_4-2-\u914D\u7F6Ezookeeper-2\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u4E0Ezookeeper-1\u8282\u70B9\u53EA\u6709\u914D\u7F6E\u6587\u4EF6\u548C\u8282\u70B9id\u6587\u4EF6\u6709\u70B9\u4E0D\u540C\uFF0C\u5176\u4F59\u5168\u4E00\u6837</p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-2 /data/zookeeper/conf</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat zoo.cfg </span></span>
<span class="line"><span style="color:#DBD7CA;">tickTime=2000</span></span>
<span class="line"><span style="color:#DBD7CA;">initLimit=10</span></span>
<span class="line"><span style="color:#DBD7CA;">syncLimit=5</span></span>
<span class="line"><span style="color:#DBD7CA;">dataDir=/data/zookeeper/data</span></span>
<span class="line"><span style="color:#DBD7CA;">DataLogDir=/data/zookeeper/logs</span></span>
<span class="line"><span style="color:#DBD7CA;">clientPort=2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">server.1=192.168.81.210:2888:3888</span></span>
<span class="line"><span style="color:#DBD7CA;">server.2=192.168.81.220:2888:3888</span></span>
<span class="line"><span style="color:#DBD7CA;">server.3=192.168.81.230:2888:3888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-2 /data/zookeeper/conf</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 2 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /data/zookeeper/data/myid</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-2 /data/zookeeper/conf</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat zoo.cfg </span></span>
<span class="line"><span style="color:#393A34;">tickTime=2000</span></span>
<span class="line"><span style="color:#393A34;">initLimit=10</span></span>
<span class="line"><span style="color:#393A34;">syncLimit=5</span></span>
<span class="line"><span style="color:#393A34;">dataDir=/data/zookeeper/data</span></span>
<span class="line"><span style="color:#393A34;">DataLogDir=/data/zookeeper/logs</span></span>
<span class="line"><span style="color:#393A34;">clientPort=2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">server.1=192.168.81.210:2888:3888</span></span>
<span class="line"><span style="color:#393A34;">server.2=192.168.81.220:2888:3888</span></span>
<span class="line"><span style="color:#393A34;">server.3=192.168.81.230:2888:3888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-2 /data/zookeeper/conf</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 2 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /data/zookeeper/data/myid</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-3-\u914D\u7F6Ezookeeper-3\u8282\u70B9" tabindex="-1">4.3.\u914D\u7F6Ezookeeper-3\u8282\u70B9 <a class="header-anchor" href="#_4-3-\u914D\u7F6Ezookeeper-3\u8282\u70B9" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 /data/zookeeper/conf</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat zoo.cfg </span></span>
<span class="line"><span style="color:#DBD7CA;">tickTime=2000</span></span>
<span class="line"><span style="color:#DBD7CA;">initLimit=10</span></span>
<span class="line"><span style="color:#DBD7CA;">syncLimit=5</span></span>
<span class="line"><span style="color:#DBD7CA;">dataDir=/data/zookeeper/data</span></span>
<span class="line"><span style="color:#DBD7CA;">DataLogDir=/data/zookeeper/logs</span></span>
<span class="line"><span style="color:#DBD7CA;">clientPort=2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">server.1=192.168.81.210:2888:3888</span></span>
<span class="line"><span style="color:#DBD7CA;">server.2=192.168.81.220:2888:3888</span></span>
<span class="line"><span style="color:#DBD7CA;">server.3=192.168.81.230:2888:3888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 /data/zookeeper/conf</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 3 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /data/zookeeper/data/myid</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 /data/zookeeper/conf</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat zoo.cfg </span></span>
<span class="line"><span style="color:#393A34;">tickTime=2000</span></span>
<span class="line"><span style="color:#393A34;">initLimit=10</span></span>
<span class="line"><span style="color:#393A34;">syncLimit=5</span></span>
<span class="line"><span style="color:#393A34;">dataDir=/data/zookeeper/data</span></span>
<span class="line"><span style="color:#393A34;">DataLogDir=/data/zookeeper/logs</span></span>
<span class="line"><span style="color:#393A34;">clientPort=2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">server.1=192.168.81.210:2888:3888</span></span>
<span class="line"><span style="color:#393A34;">server.2=192.168.81.220:2888:3888</span></span>
<span class="line"><span style="color:#393A34;">server.3=192.168.81.230:2888:3888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 /data/zookeeper/conf</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 3 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /data/zookeeper/data/myid</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-4-\u542F\u52A8\u6240\u6709\u8282\u70B9" tabindex="-1">4.4.\u542F\u52A8\u6240\u6709\u8282\u70B9 <a class="header-anchor" href="#_4-4-\u542F\u52A8\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a></h3><blockquote><p>zookeeper\u96C6\u7FA4\u5FC5\u987B\u4FDD\u8BC1\u6709\u4E24\u4E2A\u8282\u70B9\u5B58\u6D3B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5FC5\u987B\u540C\u65F6\u8981\u542F\u52A8\u4E24\u4E2A\u8282\u70B9\uFF0C\u5426\u5219\u96C6\u7FA4\u5C06\u542F\u52A8\u4E0D\u6210\u529F\uFF0C\u56E0\u6B64\u8981\u90FD\u4FEE\u6539\u597D\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u518D\u7EDF\u4E00\u542F\u52A8</p></blockquote><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/zookeeper</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/zkServer.sh status</span></span>
<span class="line"><span style="color:#DBD7CA;">ZooKeeper JMX enabled by default</span></span>
<span class="line"><span style="color:#DBD7CA;">Using config: /data/zookeeper/bin/../conf/zoo.cfg</span></span>
<span class="line"><span style="color:#DBD7CA;">Mode: follower</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-2 /data/zookeeper</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/zkServer.sh status</span></span>
<span class="line"><span style="color:#DBD7CA;">ZooKeeper JMX enabled by default</span></span>
<span class="line"><span style="color:#DBD7CA;">Using config: /data/zookeeper/bin/../conf/zoo.cfg</span></span>
<span class="line"><span style="color:#DBD7CA;">Mode: follower</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 /data/zookeeper</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/zkServer.sh status</span></span>
<span class="line"><span style="color:#DBD7CA;">ZooKeeper JMX enabled by default</span></span>
<span class="line"><span style="color:#DBD7CA;">Using config: /data/zookeeper/bin/../conf/zoo.cfg</span></span>
<span class="line"><span style="color:#DBD7CA;">Mode: leader</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/zookeeper</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/zkServer.sh status</span></span>
<span class="line"><span style="color:#393A34;">ZooKeeper JMX enabled by default</span></span>
<span class="line"><span style="color:#393A34;">Using config: /data/zookeeper/bin/../conf/zoo.cfg</span></span>
<span class="line"><span style="color:#393A34;">Mode: follower</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-2 /data/zookeeper</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/zkServer.sh status</span></span>
<span class="line"><span style="color:#393A34;">ZooKeeper JMX enabled by default</span></span>
<span class="line"><span style="color:#393A34;">Using config: /data/zookeeper/bin/../conf/zoo.cfg</span></span>
<span class="line"><span style="color:#393A34;">Mode: follower</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 /data/zookeeper</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/zkServer.sh status</span></span>
<span class="line"><span style="color:#393A34;">ZooKeeper JMX enabled by default</span></span>
<span class="line"><span style="color:#393A34;">Using config: /data/zookeeper/bin/../conf/zoo.cfg</span></span>
<span class="line"><span style="color:#393A34;">Mode: leader</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-\u90E8\u7F72kafka" tabindex="-1">5.\u90E8\u7F72kafka <a class="header-anchor" href="#_5-\u90E8\u7F72kafka" aria-hidden="true">#</a></h2><p><strong>\u6CE8\u610F\uFF1A</strong><code>\u4E0D\u8981\u4F7F\u7528kafka2.11\u7248\u672C\uFF0C\u6709\u4E25\u91CD\u7684bug\uFF0Cfilebeat\u65E0\u6CD5\u5199\u5165\u6570\u636E\u5230kafka\u96C6\u7FA4\uFF0C\u5199\u5165\u7684\u534F\u8BAE\u7248\u672C\u4E0D\u540C\uFF0C\u5B58\u5728\u95EE\u9898</code></p><h3 id="_5-1-\u914D\u7F6Ekafka-1\u8282\u70B9" tabindex="-1">5.1.\u914D\u7F6Ekafka-1\u8282\u70B9 <a class="header-anchor" href="#_5-1-\u914D\u7F6Ekafka-1\u8282\u70B9" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> wget https://archive.apache.org/dist/kafka/2.0.0/kafka_2.11-2.0.0.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u5B89\u88C5kafka</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">/soft</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> tar xf kafka_2.13-2.4.0.tgz -C /data/</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mv /data/kafka_2.13-2.4.0 /data/kafka</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">3.\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /data/kafka</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> vim config/server.properties </span></span>
<span class="line"><span style="color:#DBD7CA;">broker.id=1</span></span>
<span class="line"><span style="color:#DBD7CA;">listeners=PLAINTEXT://192.168.81.210:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">host.name=192.168.81.210</span></span>
<span class="line"><span style="color:#DBD7CA;">advertised.listeners=PLAINTEXT://192.168.81.210:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">advertised.host.name=192.168.81.210</span></span>
<span class="line"><span style="color:#DBD7CA;">num.network.threads=3</span></span>
<span class="line"><span style="color:#DBD7CA;">num.io.threads=8</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#DBD7CA;">log.dirs=/data/kafka/data</span></span>
<span class="line"><span style="color:#DBD7CA;">num.partitions=3</span></span>
<span class="line"><span style="color:#DBD7CA;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#DBD7CA;">auto.create.topics.enable=true </span></span>
<span class="line"><span style="color:#DBD7CA;">replica.fetch.max.bytes=5242880</span></span>
<span class="line"><span style="color:#DBD7CA;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#DBD7CA;">offsets.topic.replication.factor=3</span></span>
<span class="line"><span style="color:#DBD7CA;">transaction.state.log.replication.factor=3</span></span>
<span class="line"><span style="color:#DBD7CA;">transaction.state.log.min.isr=3</span></span>
<span class="line"><span style="color:#DBD7CA;">message.max.byte=5242880</span></span>
<span class="line"><span style="color:#DBD7CA;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.hours=48</span></span>
<span class="line"><span style="color:#DBD7CA;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.check.interval.ms=15000</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connect=192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connection.timeout.ms=60000</span></span>
<span class="line"><span style="color:#DBD7CA;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">4.\u521B\u5EFA\u6570\u636E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mkdir /data/kafka/data</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> wget https://archive.apache.org/dist/kafka/2.0.0/kafka_2.11-2.0.0.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u5B89\u88C5kafka</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/soft</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> tar xf kafka_2.13-2.4.0.tgz -C /data/</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mv /data/kafka_2.13-2.4.0 /data/kafka</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">3.\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /data/kafka</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> vim config/server.properties </span></span>
<span class="line"><span style="color:#393A34;">broker.id=1</span></span>
<span class="line"><span style="color:#393A34;">listeners=PLAINTEXT://192.168.81.210:9092</span></span>
<span class="line"><span style="color:#393A34;">host.name=192.168.81.210</span></span>
<span class="line"><span style="color:#393A34;">advertised.listeners=PLAINTEXT://192.168.81.210:9092</span></span>
<span class="line"><span style="color:#393A34;">advertised.host.name=192.168.81.210</span></span>
<span class="line"><span style="color:#393A34;">num.network.threads=3</span></span>
<span class="line"><span style="color:#393A34;">num.io.threads=8</span></span>
<span class="line"><span style="color:#393A34;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#393A34;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#393A34;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#393A34;">log.dirs=/data/kafka/data</span></span>
<span class="line"><span style="color:#393A34;">num.partitions=3</span></span>
<span class="line"><span style="color:#393A34;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#393A34;">auto.create.topics.enable=true </span></span>
<span class="line"><span style="color:#393A34;">replica.fetch.max.bytes=5242880</span></span>
<span class="line"><span style="color:#393A34;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#393A34;">offsets.topic.replication.factor=3</span></span>
<span class="line"><span style="color:#393A34;">transaction.state.log.replication.factor=3</span></span>
<span class="line"><span style="color:#393A34;">transaction.state.log.min.isr=3</span></span>
<span class="line"><span style="color:#393A34;">message.max.byte=5242880</span></span>
<span class="line"><span style="color:#393A34;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#393A34;">log.retention.hours=48</span></span>
<span class="line"><span style="color:#393A34;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#393A34;">log.retention.check.interval.ms=15000</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connect=192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connection.timeout.ms=60000</span></span>
<span class="line"><span style="color:#393A34;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">4.\u521B\u5EFA\u6570\u636E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mkdir /data/kafka/data</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-2-\u914D\u7F6Ekafka-2\u8282\u70B9" tabindex="-1">5.2.\u914D\u7F6Ekafka-2\u8282\u70B9 <a class="header-anchor" href="#_5-2-\u914D\u7F6Ekafka-2\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u53EA\u662F\u914D\u7F6E\u6587\u4EF6\u4E0D\u540C\uFF0C\u5176\u4F59\u4E0Ekafka-1\u8282\u70B9\u64CD\u4F5C\u4E00\u81F4</p><p>\u914D\u7F6E\u6587\u4EF6\u9700\u8981\u6539\u7684\u5730\u65B9\uFF1Abroker.id\u6539\u62102\uFF0C\u8868\u793A\u7B2C\u4E8C\u4E2A\u8282\u70B9 listeners <a href="http://host.name" target="_blank" rel="noopener noreferrer">host.name</a> advertised.listeners advertised.host.name\u6539\u6210\u672C\u673Aip\u5730\u5740</p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-2 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat config/server.properties </span></span>
<span class="line"><span style="color:#DBD7CA;">broker.id=2</span></span>
<span class="line"><span style="color:#DBD7CA;">listeners=PLAINTEXT://192.168.81.220:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">host.name=192.168.81.220</span></span>
<span class="line"><span style="color:#DBD7CA;">advertised.listeners=PLAINTEXT://192.168.81.220:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">advertised.host.name=192.168.81.220</span></span>
<span class="line"><span style="color:#DBD7CA;">num.network.threads=3</span></span>
<span class="line"><span style="color:#DBD7CA;">num.io.threads=8</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#DBD7CA;">log.dirs=/data/kafka/data</span></span>
<span class="line"><span style="color:#DBD7CA;">num.partitions=3</span></span>
<span class="line"><span style="color:#DBD7CA;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#DBD7CA;">auto.create.topics.enable=true </span></span>
<span class="line"><span style="color:#DBD7CA;">replica.fetch.max.bytes=5242880</span></span>
<span class="line"><span style="color:#DBD7CA;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#DBD7CA;">offsets.topic.replication.factor=3</span></span>
<span class="line"><span style="color:#DBD7CA;">transaction.state.log.replication.factor=3</span></span>
<span class="line"><span style="color:#DBD7CA;">transaction.state.log.min.isr=3</span></span>
<span class="line"><span style="color:#DBD7CA;">message.max.byte=5242880</span></span>
<span class="line"><span style="color:#DBD7CA;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.hours=48</span></span>
<span class="line"><span style="color:#DBD7CA;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.check.interval.ms=15000</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connect=192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connection.timeout.ms=60000</span></span>
<span class="line"><span style="color:#DBD7CA;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-2 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat config/server.properties </span></span>
<span class="line"><span style="color:#393A34;">broker.id=2</span></span>
<span class="line"><span style="color:#393A34;">listeners=PLAINTEXT://192.168.81.220:9092</span></span>
<span class="line"><span style="color:#393A34;">host.name=192.168.81.220</span></span>
<span class="line"><span style="color:#393A34;">advertised.listeners=PLAINTEXT://192.168.81.220:9092</span></span>
<span class="line"><span style="color:#393A34;">advertised.host.name=192.168.81.220</span></span>
<span class="line"><span style="color:#393A34;">num.network.threads=3</span></span>
<span class="line"><span style="color:#393A34;">num.io.threads=8</span></span>
<span class="line"><span style="color:#393A34;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#393A34;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#393A34;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#393A34;">log.dirs=/data/kafka/data</span></span>
<span class="line"><span style="color:#393A34;">num.partitions=3</span></span>
<span class="line"><span style="color:#393A34;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#393A34;">auto.create.topics.enable=true </span></span>
<span class="line"><span style="color:#393A34;">replica.fetch.max.bytes=5242880</span></span>
<span class="line"><span style="color:#393A34;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#393A34;">offsets.topic.replication.factor=3</span></span>
<span class="line"><span style="color:#393A34;">transaction.state.log.replication.factor=3</span></span>
<span class="line"><span style="color:#393A34;">transaction.state.log.min.isr=3</span></span>
<span class="line"><span style="color:#393A34;">message.max.byte=5242880</span></span>
<span class="line"><span style="color:#393A34;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#393A34;">log.retention.hours=48</span></span>
<span class="line"><span style="color:#393A34;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#393A34;">log.retention.check.interval.ms=15000</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connect=192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connection.timeout.ms=60000</span></span>
<span class="line"><span style="color:#393A34;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-3-\u914D\u7F6Ekafka-3\u8282\u70B9" tabindex="-1">5.3.\u914D\u7F6Ekafka-3\u8282\u70B9 <a class="header-anchor" href="#_5-3-\u914D\u7F6Ekafka-3\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u53EA\u662F\u914D\u7F6E\u6587\u4EF6\u4E0D\u540C\uFF0C\u5176\u4F59\u4E0Ekafka-1\u8282\u70B9\u64CD\u4F5C\u4E00\u81F4</p><p>\u914D\u7F6E\u6587\u4EF6\u9700\u8981\u6539\u7684\u5730\u65B9\uFF1Abroker.id\u6539\u62103\uFF0C\u8868\u793A\u7B2C\u4E09\u4E2A\u8282\u70B9 listeners <a href="http://host.name" target="_blank" rel="noopener noreferrer">host.name</a> advertised.listeners advertised.host.name\u6539\u6210\u672C\u673Aip\u5730\u5740</p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat config/server.properties </span></span>
<span class="line"><span style="color:#DBD7CA;">broker.id=3</span></span>
<span class="line"><span style="color:#DBD7CA;">listeners=PLAINTEXT://192.168.81.230:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">host.name=192.168.81.230</span></span>
<span class="line"><span style="color:#DBD7CA;">advertised.listeners=PLAINTEXT://192.168.81.230:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">advertised.host.name=192.168.81.230</span></span>
<span class="line"><span style="color:#DBD7CA;">num.network.threads=3</span></span>
<span class="line"><span style="color:#DBD7CA;">num.io.threads=8</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#DBD7CA;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#DBD7CA;">log.dirs=/data/kafka/data</span></span>
<span class="line"><span style="color:#DBD7CA;">num.partitions=3</span></span>
<span class="line"><span style="color:#DBD7CA;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#DBD7CA;">auto.create.topics.enable=true </span></span>
<span class="line"><span style="color:#DBD7CA;">replica.fetch.max.bytes=5242880</span></span>
<span class="line"><span style="color:#DBD7CA;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#DBD7CA;">offsets.topic.replication.factor=3</span></span>
<span class="line"><span style="color:#DBD7CA;">transaction.state.log.replication.factor=3</span></span>
<span class="line"><span style="color:#DBD7CA;">transaction.state.log.min.isr=3</span></span>
<span class="line"><span style="color:#DBD7CA;">message.max.byte=5242880</span></span>
<span class="line"><span style="color:#DBD7CA;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.hours=48</span></span>
<span class="line"><span style="color:#DBD7CA;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#DBD7CA;">log.retention.check.interval.ms=15000</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connect=192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#DBD7CA;">zookeeper.connection.timeout.ms=60000</span></span>
<span class="line"><span style="color:#DBD7CA;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat config/server.properties </span></span>
<span class="line"><span style="color:#393A34;">broker.id=3</span></span>
<span class="line"><span style="color:#393A34;">listeners=PLAINTEXT://192.168.81.230:9092</span></span>
<span class="line"><span style="color:#393A34;">host.name=192.168.81.230</span></span>
<span class="line"><span style="color:#393A34;">advertised.listeners=PLAINTEXT://192.168.81.230:9092</span></span>
<span class="line"><span style="color:#393A34;">advertised.host.name=192.168.81.230</span></span>
<span class="line"><span style="color:#393A34;">num.network.threads=3</span></span>
<span class="line"><span style="color:#393A34;">num.io.threads=8</span></span>
<span class="line"><span style="color:#393A34;">socket.send.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#393A34;">socket.receive.buffer.bytes=102400</span></span>
<span class="line"><span style="color:#393A34;">socket.request.max.bytes=104857600</span></span>
<span class="line"><span style="color:#393A34;">log.dirs=/data/kafka/data</span></span>
<span class="line"><span style="color:#393A34;">num.partitions=3</span></span>
<span class="line"><span style="color:#393A34;">delete.topic.enable=true</span></span>
<span class="line"><span style="color:#393A34;">auto.create.topics.enable=true </span></span>
<span class="line"><span style="color:#393A34;">replica.fetch.max.bytes=5242880</span></span>
<span class="line"><span style="color:#393A34;">num.recovery.threads.per.data.dir=1</span></span>
<span class="line"><span style="color:#393A34;">offsets.topic.replication.factor=3</span></span>
<span class="line"><span style="color:#393A34;">transaction.state.log.replication.factor=3</span></span>
<span class="line"><span style="color:#393A34;">transaction.state.log.min.isr=3</span></span>
<span class="line"><span style="color:#393A34;">message.max.byte=5242880</span></span>
<span class="line"><span style="color:#393A34;">log.cleaner.enable=true</span></span>
<span class="line"><span style="color:#393A34;">log.retention.hours=48</span></span>
<span class="line"><span style="color:#393A34;">log.segment.bytes=1073741824</span></span>
<span class="line"><span style="color:#393A34;">log.retention.check.interval.ms=15000</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connect=192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#393A34;">zookeeper.connection.timeout.ms=60000</span></span>
<span class="line"><span style="color:#393A34;">group.initial.rebalance.delay.ms=0</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-4-\u542F\u52A8kafka" tabindex="-1">5.4.\u542F\u52A8kafka <a class="header-anchor" href="#_5-4-\u542F\u52A8kafka" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> /data/kafka/bin/kafka-server-start -daemon /data/kafka/config/server.properties</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-2 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> /data/kafka/bin/kafka-server-start -daemon /data/kafka/config/server.properties</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> /data/kafka/bin/kafka-server-start -daemon /data/kafka/config/server.properties</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> /data/kafka/bin/kafka-server-start -daemon /data/kafka/config/server.properties</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-2 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> /data/kafka/bin/kafka-server-start -daemon /data/kafka/config/server.properties</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> /data/kafka/bin/kafka-server-start -daemon /data/kafka/config/server.properties</span></span>
<span class="line"></span></code></pre></div><h2 id="_6-\u6D4B\u8BD5kafka\u4E0Ezookeeper\u8FDE\u63A5" tabindex="-1">6.\u6D4B\u8BD5kafka\u4E0Ezookeeper\u8FDE\u63A5 <a class="header-anchor" href="#_6-\u6D4B\u8BD5kafka\u4E0Ezookeeper\u8FDE\u63A5" aria-hidden="true">#</a></h2><p>kafka\u80FD\u591F\u4EA7\u751F\u6570\u636E\u5E76\u6D88\u8D39\uFF0C\u6574\u4E2A\u96C6\u7FA4\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86</p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u521B\u5EFA\u4E00\u4E2Atopic</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/kafka-topics.sh --create --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181 --replication-factor 1 --partitions 1 --topic testpic</span></span>
<span class="line"><span style="color:#DBD7CA;">Created topic </span><span style="color:#C98A7D;">&quot;testpic&quot;</span><span style="color:#DBD7CA;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u67E5\u770Btopic</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/kafka-topics.sh --list --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#DBD7CA;">testpic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">3.\u67E5\u770Btopic\u7684\u63CF\u8FF0\u4FE1\u606F</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/kafka-topics.sh --describe --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181 --topic testpic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">4.\u4F7F\u7528kafka-console-producer\u63A7\u5236\u53F0\u751F\u4EA7\u6570\u636E</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/kafka-console-producer.sh --broker-list 192.168.81.210:9092,192.168.81.220:9092,192.168.81.230:9092 --topic testpic</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test1</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test2</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test3</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test4</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test5</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test6</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test7</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test8</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test9</span></span>
<span class="line"><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">test10</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">5.\u4F7F\u7528kafka-console-consumer\u63A7\u5236\u53F0\u6D88\u8D39\u6570\u636E</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/kafka-console-consumer.sh --bootstrap-server 192.168.81.210:9092,192.168.81.220:9092,192.168.81.230:9092 --topic testpic --from-beginning</span></span>
<span class="line"><span style="color:#DBD7CA;">test1</span></span>
<span class="line"><span style="color:#DBD7CA;">test2</span></span>
<span class="line"><span style="color:#DBD7CA;">test3</span></span>
<span class="line"><span style="color:#DBD7CA;">test4</span></span>
<span class="line"><span style="color:#DBD7CA;">test5</span></span>
<span class="line"><span style="color:#DBD7CA;">test6</span></span>
<span class="line"><span style="color:#DBD7CA;">test7</span></span>
<span class="line"><span style="color:#DBD7CA;">test8</span></span>
<span class="line"><span style="color:#DBD7CA;">test9</span></span>
<span class="line"><span style="color:#DBD7CA;">test10</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u5220\u9664\u4E00\u4E2Atopic</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/kafka-topics.sh --delete --zookeeper 192.168.81.210:2181  --topic testpic</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u521B\u5EFA\u4E00\u4E2Atopic</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/kafka-topics.sh --create --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181 --replication-factor 1 --partitions 1 --topic testpic</span></span>
<span class="line"><span style="color:#393A34;">Created topic </span><span style="color:#B56959;">&quot;testpic&quot;</span><span style="color:#393A34;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u67E5\u770Btopic</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/kafka-topics.sh --list --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#393A34;">testpic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">3.\u67E5\u770Btopic\u7684\u63CF\u8FF0\u4FE1\u606F</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/kafka-topics.sh --describe --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181 --topic testpic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">4.\u4F7F\u7528kafka-console-producer\u63A7\u5236\u53F0\u751F\u4EA7\u6570\u636E</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/kafka-console-producer.sh --broker-list 192.168.81.210:9092,192.168.81.220:9092,192.168.81.230:9092 --topic testpic</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test1</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test2</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test3</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test4</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test5</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test6</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test7</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test8</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test9</span></span>
<span class="line"><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">test10</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">5.\u4F7F\u7528kafka-console-consumer\u63A7\u5236\u53F0\u6D88\u8D39\u6570\u636E</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/kafka-console-consumer.sh --bootstrap-server 192.168.81.210:9092,192.168.81.220:9092,192.168.81.230:9092 --topic testpic --from-beginning</span></span>
<span class="line"><span style="color:#393A34;">test1</span></span>
<span class="line"><span style="color:#393A34;">test2</span></span>
<span class="line"><span style="color:#393A34;">test3</span></span>
<span class="line"><span style="color:#393A34;">test4</span></span>
<span class="line"><span style="color:#393A34;">test5</span></span>
<span class="line"><span style="color:#393A34;">test6</span></span>
<span class="line"><span style="color:#393A34;">test7</span></span>
<span class="line"><span style="color:#393A34;">test8</span></span>
<span class="line"><span style="color:#393A34;">test9</span></span>
<span class="line"><span style="color:#393A34;">test10</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u5220\u9664\u4E00\u4E2Atopic</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/kafka-topics.sh --delete --zookeeper 192.168.81.210:2181  --topic testpic</span></span>
<span class="line"></span></code></pre></div><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/61738bb4dacf417784c5a62ce3388bdd.png" alt="\u8BF7\u6DFB\u52A0\u56FE\u7247\u63CF\u8FF0"></p><h2 id="_7-\u914D\u7F6Efilebeat\u6536\u96C6nginx\u3001tomcat\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka\u4E2D" tabindex="-1">7.\u914D\u7F6Efilebeat\u6536\u96C6nginx\u3001tomcat\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka\u4E2D <a class="header-anchor" href="#_7-\u914D\u7F6Efilebeat\u6536\u96C6nginx\u3001tomcat\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka\u4E2D" aria-hidden="true">#</a></h2><h3 id="_7-1-\u5B89\u88C5\u5E76\u914D\u7F6Enginx\u670D\u52A1" tabindex="-1">7.1.\u5B89\u88C5\u5E76\u914D\u7F6Enginx\u670D\u52A1 <a class="header-anchor" href="#_7-1-\u5B89\u88C5\u5E76\u914D\u7F6Enginx\u670D\u52A1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u5B89\u88C5nginx</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> yum -y install nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u914D\u7F6Enginx\u65E5\u5FD7\u683C\u5F0F</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> vim /etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">http </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7</span></span>
<span class="line"><span style="color:#DBD7CA;">    log_format  main </span><span style="color:#C98A7D;">&#39;{&quot;\u65F6\u95F4&quot;:&quot;$time_iso8601&quot;,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u5BA2\u6237\u7AEF\u5916\u7F51\u5730\u5740&quot;:&quot;$http_x_forwarded_for&quot;,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u5BA2\u6237\u7AEF\u5185\u7F51\u5730\u5740&quot;:&quot;$remote_addr&quot;,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u72B6\u6001\u7801&quot;:$status,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u4F20\u8F93\u6D41\u91CF&quot;:$body_bytes_sent,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u8DF3\u8F6C\u6765\u6E90&quot;:&quot;$http_referer&quot;,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;URL&quot;:&quot;$request&quot;,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u6D4F\u89C8\u5668&quot;:&quot;$http_user_agent&quot;,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u8BF7\u6C42\u54CD\u5E94\u65F6\u95F4&quot;:$request_time,&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">                       </span><span style="color:#C98A7D;">&#39;&quot;\u540E\u7AEF\u5730\u5740&quot;:&quot;$upstream_addr&quot;}&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    access_log  /var/log/nginx/access.log  main</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u542F\u52A8nginx</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl start nginx</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">4.\u8BBF\u95EE\u4EA7\u751F\u65E5\u5FD7\u67E5\u770B\u6548\u679C</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> curl 127.0.0.1</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> tail /var/log/nginx/access.log </span></span>
<span class="line"><span style="color:#DBD7CA;">{</span><span style="color:#C98A7D;">&quot;\u65F6\u95F4&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;2021-07-12T11:29:33+08:00&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;\u5BA2\u6237\u7AEF\u5916\u7F51\u5730\u5740&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;-&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;\u5BA2\u6237\u7AEF\u5185\u7F51\u5730\u5740&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;127.0.0.1&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;\u72B6\u6001\u7801&quot;</span><span style="color:#DBD7CA;">:200,</span><span style="color:#C98A7D;">&quot;\u4F20\u8F93\u6D41\u91CF&quot;</span><span style="color:#DBD7CA;">:4833,</span><span style="color:#C98A7D;">&quot;\u8DF3\u8F6C\u6765\u6E90&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;-&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;URL&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;GET / HTTP/1.1&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;\u6D4F\u89C8\u5668&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;curl/7.29.0&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;\u8BF7\u6C42\u54CD\u5E94\u65F6\u95F4&quot;</span><span style="color:#DBD7CA;">:0.000,</span><span style="color:#C98A7D;">&quot;\u540E\u7AEF\u5730\u5740&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;-&quot;</span><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u5B89\u88C5nginx</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> yum -y install nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u914D\u7F6Enginx\u65E5\u5FD7\u683C\u5F0F</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> vim /etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#393A34;">http </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7</span></span>
<span class="line"><span style="color:#393A34;">    log_format  main </span><span style="color:#B56959;">&#39;{&quot;\u65F6\u95F4&quot;:&quot;$time_iso8601&quot;,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u5BA2\u6237\u7AEF\u5916\u7F51\u5730\u5740&quot;:&quot;$http_x_forwarded_for&quot;,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u5BA2\u6237\u7AEF\u5185\u7F51\u5730\u5740&quot;:&quot;$remote_addr&quot;,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u72B6\u6001\u7801&quot;:$status,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u4F20\u8F93\u6D41\u91CF&quot;:$body_bytes_sent,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u8DF3\u8F6C\u6765\u6E90&quot;:&quot;$http_referer&quot;,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;URL&quot;:&quot;$request&quot;,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u6D4F\u89C8\u5668&quot;:&quot;$http_user_agent&quot;,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u8BF7\u6C42\u54CD\u5E94\u65F6\u95F4&quot;:$request_time,&#39;</span></span>
<span class="line"><span style="color:#393A34;">                       </span><span style="color:#B56959;">&#39;&quot;\u540E\u7AEF\u5730\u5740&quot;:&quot;$upstream_addr&quot;}&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    access_log  /var/log/nginx/access.log  main</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u542F\u52A8nginx</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl start nginx</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">4.\u8BBF\u95EE\u4EA7\u751F\u65E5\u5FD7\u67E5\u770B\u6548\u679C</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> curl 127.0.0.1</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> tail /var/log/nginx/access.log </span></span>
<span class="line"><span style="color:#393A34;">{</span><span style="color:#B56959;">&quot;\u65F6\u95F4&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;2021-07-12T11:29:33+08:00&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;\u5BA2\u6237\u7AEF\u5916\u7F51\u5730\u5740&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;-&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;\u5BA2\u6237\u7AEF\u5185\u7F51\u5730\u5740&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;127.0.0.1&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;\u72B6\u6001\u7801&quot;</span><span style="color:#393A34;">:200,</span><span style="color:#B56959;">&quot;\u4F20\u8F93\u6D41\u91CF&quot;</span><span style="color:#393A34;">:4833,</span><span style="color:#B56959;">&quot;\u8DF3\u8F6C\u6765\u6E90&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;-&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;URL&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;GET / HTTP/1.1&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;\u6D4F\u89C8\u5668&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;curl/7.29.0&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;\u8BF7\u6C42\u54CD\u5E94\u65F6\u95F4&quot;</span><span style="color:#393A34;">:0.000,</span><span style="color:#B56959;">&quot;\u540E\u7AEF\u5730\u5740&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;-&quot;</span><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-2-\u5B89\u88C5tomcat\u670D\u52A1" tabindex="-1">7.2.\u5B89\u88C5tomcat\u670D\u52A1 <a class="header-anchor" href="#_7-2-\u5B89\u88C5tomcat\u670D\u52A1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> tar xf apache-tomcat-8.5.12.tar.gz -C /data/</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mv /data/apache-tomcat-8.5.12/ /data/tomcat</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> /data/tomcat/bin/startup.sh </span></span>
<span class="line"><span style="color:#DBD7CA;">Using CATALINA_BASE:   /data/tomcat</span></span>
<span class="line"><span style="color:#DBD7CA;">Using CATALINA_HOME:   /data/tomcat</span></span>
<span class="line"><span style="color:#DBD7CA;">Using CATALINA_TMPDIR: /data/tomcat/temp</span></span>
<span class="line"><span style="color:#DBD7CA;">Using JRE_HOME:        /usr</span></span>
<span class="line"><span style="color:#DBD7CA;">Using CLASSPATH:       /data/tomcat/bin/bootstrap.jar:/data/tomcat/bin/tomcat-juli.jar</span></span>
<span class="line"><span style="color:#DBD7CA;">Tomcat started.</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> tar xf apache-tomcat-8.5.12.tar.gz -C /data/</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mv /data/apache-tomcat-8.5.12/ /data/tomcat</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> /data/tomcat/bin/startup.sh </span></span>
<span class="line"><span style="color:#393A34;">Using CATALINA_BASE:   /data/tomcat</span></span>
<span class="line"><span style="color:#393A34;">Using CATALINA_HOME:   /data/tomcat</span></span>
<span class="line"><span style="color:#393A34;">Using CATALINA_TMPDIR: /data/tomcat/temp</span></span>
<span class="line"><span style="color:#393A34;">Using JRE_HOME:        /usr</span></span>
<span class="line"><span style="color:#393A34;">Using CLASSPATH:       /data/tomcat/bin/bootstrap.jar:/data/tomcat/bin/tomcat-juli.jar</span></span>
<span class="line"><span style="color:#393A34;">Tomcat started.</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-3-\u5B89\u88C5filebeat\u670D\u52A1" tabindex="-1">7.3.\u5B89\u88C5filebeat\u670D\u52A1 <a class="header-anchor" href="#_7-3-\u5B89\u88C5filebeat\u670D\u52A1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> rpm -ivh filebeat-7.6.0-x86_64.rpm </span><span style="color:#C98A7D;">\`\`\`</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> rpm -ivh filebeat-7.6.0-x86_64.rpm </span><span style="color:#B56959;">\`\`\`</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-4-\u914D\u7F6Efilebeat\u6536\u96C6\u5E94\u7528\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka" tabindex="-1">7.4.\u914D\u7F6Efilebeat\u6536\u96C6\u5E94\u7528\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka <a class="header-anchor" href="#_7-4-\u914D\u7F6Efilebeat\u6536\u96C6\u5E94\u7528\u65E5\u5FD7\u5E76\u5B58\u50A8\u5230kafka" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u914D\u7F6Efilebeat</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> vim /etc/filebeat/filebeat.yml </span></span>
<span class="line"><span style="color:#DBD7CA;">filebeat.inputs:</span></span>
<span class="line"><span style="color:#DBD7CA;">- type: log                                      </span><span style="color:#758575;">#\u7C7B\u578B\u4E3Alog</span></span>
<span class="line"><span style="color:#DBD7CA;">  enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  paths:                                        </span><span style="color:#758575;">#\u6307\u5B9A\u65E5\u5FD7\u6240\u5728\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#DBD7CA;">    - /var/log/nginx/access.log</span></span>
<span class="line"><span style="color:#DBD7CA;">  json.keys_under_root: </span><span style="color:#E0A569;">true</span><span style="color:#DBD7CA;">                    </span><span style="color:#758575;">#\u652F\u6301json\u683C\u5F0F\u7684\u65E5\u5FD7\u8F93\u51FA</span></span>
<span class="line"><span style="color:#DBD7CA;">  json.overwriite_keys: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  fields:                                       </span><span style="color:#758575;">#\u5728\u65E5\u5FD7\u4E2D\u589E\u52A0\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u4E3Alog_topic\uFF0C\u503C\u4E3Anginx_access\uFF0Clogstash\u6839\u636E\u5E26\u6709\u8FD9\u4E2A\u5B57\u6BB5\u7684\u65E5\u5FD7\u5B58\u50A8\u5230\u6307\u5B9A\u7684es\u7D22\u5F15\u5E93</span></span>
<span class="line"><span style="color:#DBD7CA;">    log_topic: nginx-access</span></span>
<span class="line"><span style="color:#DBD7CA;">  tail_files: </span><span style="color:#E0A569;">true</span><span style="color:#DBD7CA;">                              </span><span style="color:#758575;">#\u5F00\u542F\u65E5\u5FD7\u76D1\u63A7\uFF0C\u4ECE\u65E5\u5FD7\u7684\u6700\u540E\u4E00\u884C\u5F00\u59CB\u6536\u96C6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">- type: log</span></span>
<span class="line"><span style="color:#DBD7CA;">  enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  paths:</span></span>
<span class="line"><span style="color:#DBD7CA;">    - /data/tomcat/logs/catalina.out</span></span>
<span class="line"><span style="color:#DBD7CA;">  multiline.pattern: </span><span style="color:#C98A7D;">&#39;^20&#39;</span><span style="color:#DBD7CA;">                      </span><span style="color:#758575;">#\u6536\u96C6tomcat\u9519\u8BEF\u65E5\u5FD7\uFF0C\u4ECE\u7B2C\u4E00\u4E2A20\u5230\u4E0B\u4E00\u4E2A20\u4E4B\u95F4\u7684\u65E5\u5FD7\u6574\u5408\u5728\u4E00\u884C\u4E2D\u663E\u793A</span></span>
<span class="line"><span style="color:#DBD7CA;">  multiline.negate: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  multiline.match: after</span></span>
<span class="line"><span style="color:#DBD7CA;">  fields:</span></span>
<span class="line"><span style="color:#DBD7CA;">    log_topic: tomcat-cata</span></span>
<span class="line"><span style="color:#DBD7CA;">  tail_files: </span><span style="color:#E0A569;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">output.kafka:                                   </span><span style="color:#758575;">#\u8F93\u51FA\u5230kafka\u7CFB\u7EDF</span></span>
<span class="line"><span style="color:#DBD7CA;">  enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  hosts: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.210:9092&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.220:9092&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.230:9092&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">                           </span><span style="color:#758575;">#kafka\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">  topic: </span><span style="color:#C98A7D;">&#39;%{[fields][log_topic]}&#39;</span><span style="color:#DBD7CA;">               </span><span style="color:#758575;">#\u6307\u5B9A\u5C06\u65E5\u5FD7\u5B58\u50A8\u5230kafka\u96C6\u7FA4\u7684\u54EA\u4E2Atopic\u4E2D\uFF0C\u8FD9\u91CC\u7684topic\u503C\u662F\u5F15\u7528\u5728inputs\u4E2D\u5B9A\u4E49\u7684fields\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5C06\u4E0D\u540C\u8DEF\u5F84\u7684\u65E5\u5FD7\u5206\u522B\u5B58\u50A8\u5230\u4E0D\u540C\u7684topic\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">  partition.round_robin:</span></span>
<span class="line"><span style="color:#DBD7CA;">    reachable_only: </span><span style="color:#E0A569;">false</span></span>
<span class="line"><span style="color:#DBD7CA;">  required_acks: 1</span></span>
<span class="line"><span style="color:#DBD7CA;">  compression: gzip</span></span>
<span class="line"><span style="color:#DBD7CA;">  max_message_bytes: 1000000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u542F\u52A8filebeat</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl start filebeat</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> filebeat</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u914D\u7F6Efilebeat</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> vim /etc/filebeat/filebeat.yml </span></span>
<span class="line"><span style="color:#393A34;">filebeat.inputs:</span></span>
<span class="line"><span style="color:#393A34;">- type: log                                      </span><span style="color:#A0ADA0;">#\u7C7B\u578B\u4E3Alog</span></span>
<span class="line"><span style="color:#393A34;">  enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">  paths:                                        </span><span style="color:#A0ADA0;">#\u6307\u5B9A\u65E5\u5FD7\u6240\u5728\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#393A34;">    - /var/log/nginx/access.log</span></span>
<span class="line"><span style="color:#393A34;">  json.keys_under_root: </span><span style="color:#B58451;">true</span><span style="color:#393A34;">                    </span><span style="color:#A0ADA0;">#\u652F\u6301json\u683C\u5F0F\u7684\u65E5\u5FD7\u8F93\u51FA</span></span>
<span class="line"><span style="color:#393A34;">  json.overwriite_keys: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">  fields:                                       </span><span style="color:#A0ADA0;">#\u5728\u65E5\u5FD7\u4E2D\u589E\u52A0\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u4E3Alog_topic\uFF0C\u503C\u4E3Anginx_access\uFF0Clogstash\u6839\u636E\u5E26\u6709\u8FD9\u4E2A\u5B57\u6BB5\u7684\u65E5\u5FD7\u5B58\u50A8\u5230\u6307\u5B9A\u7684es\u7D22\u5F15\u5E93</span></span>
<span class="line"><span style="color:#393A34;">    log_topic: nginx-access</span></span>
<span class="line"><span style="color:#393A34;">  tail_files: </span><span style="color:#B58451;">true</span><span style="color:#393A34;">                              </span><span style="color:#A0ADA0;">#\u5F00\u542F\u65E5\u5FD7\u76D1\u63A7\uFF0C\u4ECE\u65E5\u5FD7\u7684\u6700\u540E\u4E00\u884C\u5F00\u59CB\u6536\u96C6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">- type: log</span></span>
<span class="line"><span style="color:#393A34;">  enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">  paths:</span></span>
<span class="line"><span style="color:#393A34;">    - /data/tomcat/logs/catalina.out</span></span>
<span class="line"><span style="color:#393A34;">  multiline.pattern: </span><span style="color:#B56959;">&#39;^20&#39;</span><span style="color:#393A34;">                      </span><span style="color:#A0ADA0;">#\u6536\u96C6tomcat\u9519\u8BEF\u65E5\u5FD7\uFF0C\u4ECE\u7B2C\u4E00\u4E2A20\u5230\u4E0B\u4E00\u4E2A20\u4E4B\u95F4\u7684\u65E5\u5FD7\u6574\u5408\u5728\u4E00\u884C\u4E2D\u663E\u793A</span></span>
<span class="line"><span style="color:#393A34;">  multiline.negate: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">  multiline.match: after</span></span>
<span class="line"><span style="color:#393A34;">  fields:</span></span>
<span class="line"><span style="color:#393A34;">    log_topic: tomcat-cata</span></span>
<span class="line"><span style="color:#393A34;">  tail_files: </span><span style="color:#B58451;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">output.kafka:                                   </span><span style="color:#A0ADA0;">#\u8F93\u51FA\u5230kafka\u7CFB\u7EDF</span></span>
<span class="line"><span style="color:#393A34;">  enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">  hosts: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.210:9092&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.220:9092&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.230:9092&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">                           </span><span style="color:#A0ADA0;">#kafka\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">  topic: </span><span style="color:#B56959;">&#39;%{[fields][log_topic]}&#39;</span><span style="color:#393A34;">               </span><span style="color:#A0ADA0;">#\u6307\u5B9A\u5C06\u65E5\u5FD7\u5B58\u50A8\u5230kafka\u96C6\u7FA4\u7684\u54EA\u4E2Atopic\u4E2D\uFF0C\u8FD9\u91CC\u7684topic\u503C\u662F\u5F15\u7528\u5728inputs\u4E2D\u5B9A\u4E49\u7684fields\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5C06\u4E0D\u540C\u8DEF\u5F84\u7684\u65E5\u5FD7\u5206\u522B\u5B58\u50A8\u5230\u4E0D\u540C\u7684topic\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">  partition.round_robin:</span></span>
<span class="line"><span style="color:#393A34;">    reachable_only: </span><span style="color:#B58451;">false</span></span>
<span class="line"><span style="color:#393A34;">  required_acks: 1</span></span>
<span class="line"><span style="color:#393A34;">  compression: gzip</span></span>
<span class="line"><span style="color:#393A34;">  max_message_bytes: 1000000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u542F\u52A8filebeat</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl start filebeat</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> filebeat</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-5-\u4EA7\u751F\u7A0B\u5E8F\u65E5\u5FD7\u6570\u636E\u89C2\u5BDF\u6570\u636E\u662F\u5426\u5B58\u50A8kafka" tabindex="-1">7.5.\u4EA7\u751F\u7A0B\u5E8F\u65E5\u5FD7\u6570\u636E\u89C2\u5BDF\u6570\u636E\u662F\u5426\u5B58\u50A8kafka <a class="header-anchor" href="#_7-5-\u4EA7\u751F\u7A0B\u5E8F\u65E5\u5FD7\u6570\u636E\u89C2\u5BDF\u6570\u636E\u662F\u5426\u5B58\u50A8kafka" aria-hidden="true">#</a></h3><p><strong>1.\u4EA7\u751F\u7A0B\u5E8F\u65E5\u5FD7</strong></p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u4EA7\u751Fnginx\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ab -n 1000 -c 100 http://127.0.0.1/index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">2.\u4EA7\u751Ftomcat\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> /data/tomcat/bin/shutdown.sh</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> /data/tomcat/bin/startup.sh </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u4EA7\u751Fnginx\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ab -n 1000 -c 100 http://127.0.0.1/index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">2.\u4EA7\u751Ftomcat\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> /data/tomcat/bin/shutdown.sh</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> /data/tomcat/bin/startup.sh </span></span>
<span class="line"></span></code></pre></div><p><strong>2.\u89C2\u5BDFkafka\u4E2D\u662F\u5426\u521B\u5EFA\u5BF9\u5E94\u7684topic</strong></p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ./bin/kafka-topics.sh --list --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#DBD7CA;">__consumer_offsets</span></span>
<span class="line"><span style="color:#DBD7CA;">nginx-access</span></span>
<span class="line"><span style="color:#DBD7CA;">testpic</span></span>
<span class="line"><span style="color:#DBD7CA;">tomcat-cata</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#nginx-access\u4EE5\u53CAtomcat-cata\u7684topic\u5DF2\u7ECF\u521B\u5EFA\u6210\u529F</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ./bin/kafka-topics.sh --list --zookeeper 192.168.81.210:2181,192.168.81.220:2181,192.168.81.230:2181</span></span>
<span class="line"><span style="color:#393A34;">__consumer_offsets</span></span>
<span class="line"><span style="color:#393A34;">nginx-access</span></span>
<span class="line"><span style="color:#393A34;">testpic</span></span>
<span class="line"><span style="color:#393A34;">tomcat-cata</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#nginx-access\u4EE5\u53CAtomcat-cata\u7684topic\u5DF2\u7ECF\u521B\u5EFA\u6210\u529F</span></span>
<span class="line"></span></code></pre></div><p><strong>3.\u89C2\u5BDFkafka\u65E5\u5FD7\u7684\u8F93\u51FA</strong></p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-1 /data/kafka</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> tail -f logs/kafkaServer.out</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-1 /data/kafka</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> tail -f logs/kafkaServer.out</span></span>
<span class="line"></span></code></pre></div><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/ec8b60b64feb4c1c818b878612dce48d.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h2 id="_8-\u914D\u7F6Elogstash\u4ECEkafka\u4E2D\u8BFB\u53D6\u6570\u636E\u5E76\u5B58\u50A8\u5230es\u96C6\u7FA4" tabindex="-1">8.\u914D\u7F6Elogstash\u4ECEkafka\u4E2D\u8BFB\u53D6\u6570\u636E\u5E76\u5B58\u50A8\u5230es\u96C6\u7FA4 <a class="header-anchor" href="#_8-\u914D\u7F6Elogstash\u4ECEkafka\u4E2D\u8BFB\u53D6\u6570\u636E\u5E76\u5B58\u50A8\u5230es\u96C6\u7FA4" aria-hidden="true">#</a></h2><blockquote><p>\u90E8\u7F72logstash\uFF0C\u914D\u7F6Elogstash\u4ECEkafka\u4E2D\u8BFB\u53D6topic\u6570\u636E\u5E76\u5B58\u50A8\u5230es\u96C6\u7FA4</p></blockquote><h3 id="_8-1-\u90E8\u7F72logstash\u670D\u52A1" tabindex="-1">8.1.\u90E8\u7F72logstash\u670D\u52A1 <a class="header-anchor" href="#_8-1-\u90E8\u7F72logstash\u670D\u52A1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">1.\u5B89\u88C5logstash</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> rpm -ivh logstash-7.6.0.rpm</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">1.\u5B89\u88C5logstash</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> rpm -ivh logstash-7.6.0.rpm</span></span>
<span class="line"></span></code></pre></div><h3 id="_8-2-\u914D\u7F6Elogstash\u4ECEkafka\u8BFB\u53D6\u6570\u636E\u5B58\u50A8\u5230es\u96C6\u7FA4" tabindex="-1">8.2.\u914D\u7F6Elogstash\u4ECEkafka\u8BFB\u53D6\u6570\u636E\u5B58\u50A8\u5230es\u96C6\u7FA4 <a class="header-anchor" href="#_8-2-\u914D\u7F6Elogstash\u4ECEkafka\u8BFB\u53D6\u6570\u636E\u5B58\u50A8\u5230es\u96C6\u7FA4" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat /etc/logstash/conf.d/in_kafka_to_es.conf </span></span>
<span class="line"><span style="color:#758575;">#\u4ECEkafka\u4E2D\u8BFB\u53D6\u65E5\u5FD7\u6570\u636E</span></span>
<span class="line"><span style="color:#DBD7CA;">input </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">       </span><span style="color:#758575;">#\u6570\u636E\u6E90\u7AEF</span></span>
<span class="line"><span style="color:#DBD7CA;">  kafka </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">       </span><span style="color:#758575;">#\u7C7B\u578B\u4E3Akafka</span></span>
<span class="line"><span style="color:#DBD7CA;">    bootstrap_servers =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.210:9092,192.168.81.220:9092,192.168.81.230:9092&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#kafka\u96C6\u7FA4\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    topics =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;nginx-access&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;tomcat-cata&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#\u8981\u8BFB\u53D6\u90A3\u4E9Bkafka topics</span></span>
<span class="line"><span style="color:#DBD7CA;">    codec =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;json&quot;</span><span style="color:#DBD7CA;">                   </span><span style="color:#758575;">#\u5904\u7406json\u683C\u5F0F\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#DBD7CA;">    auto_offset_reset =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;latest&quot;</span><span style="color:#DBD7CA;">           </span><span style="color:#758575;">#\u53EA\u6D88\u8D39\u6700\u65B0\u7684kafka\u6570\u636E</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u5904\u7406\u6570\u636E\uFF0C\u53BB\u6389\u6CA1\u7528\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">filter </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  if</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">fields</span><span style="color:#858585;">][</span><span style="color:#DBD7CA;">log_topic</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> == </span><span style="color:#C98A7D;">&quot;nginx-access&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u5982\u679Clog_topic\u5B57\u6BB5\u4E3Anginx-access\u5219\u8FDB\u884C\u4EE5\u4E0B\u6570\u636E\u5904\u7406</span></span>
<span class="line"><span style="color:#DBD7CA;">      json </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">          </span><span style="color:#758575;">#json\u683C\u5F0F\u6570\u636E\u5904\u7406</span></span>
<span class="line"><span style="color:#DBD7CA;">           </span><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;"> =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;message&quot;</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#source\u7B49\u4E8Emessage\u7684</span></span>
<span class="line"><span style="color:#DBD7CA;">           remove_field =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;@version&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;path&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;beat&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;input&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;log&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;offset&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;prospector&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;source&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;tags&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u5220\u9664\u6307\u5B9A\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">      mutate </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#\u4FEE\u6539\u6570\u636E</span></span>
<span class="line"><span style="color:#DBD7CA;">           remove_field =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;_index&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_id&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_type&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_version&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_score&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;referer&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;agent&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u5220\u9664\u6CA1\u7528\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">  if</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">fields</span><span style="color:#858585;">][</span><span style="color:#DBD7CA;">log_topic</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> == </span><span style="color:#C98A7D;">&quot;tomcat-cata&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#\u5982\u679Clog_topic\u5B57\u6BB5\u4E3Atomcat-cata</span></span>
<span class="line"><span style="color:#DBD7CA;">      grok </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">        </span><span style="color:#758575;">#\u89E3\u6790\u683C\u5F0F</span></span>
<span class="line"><span style="color:#DBD7CA;">     match =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#C98A7D;">&quot;message&quot;</span><span style="color:#DBD7CA;"> =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;(?&lt;\u65F6\u95F4&gt;20[0-9]{2}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}) \\[(?&lt;\u7EBF\u7A0B\u540D\u79F0&gt;[^\\s]{0,})\\] (?&lt;\u65E5\u5FD7\u7B49\u7EA7&gt;\\w+) (?&lt;\u7C7B\u540D\u79F0&gt;[^\\s]{0,}) (?&lt;\u65E5\u5FD7\u8BE6\u60C5&gt;[\\W\\w]+)&quot;</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#\u5C06message\u7684\u503C\u589E\u52A0\u4E0A\u4E00\u4E9B\u683C\u5F0F</span></span>
<span class="line"><span style="color:#DBD7CA;">     </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">      mutate </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#\u4FEE\u6539\u6570\u636E</span></span>
<span class="line"><span style="color:#DBD7CA;">                 remove_field =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;_index&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_id&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_type&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_version&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;_score&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;referer&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;agent&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u5220\u9664\u6CA1\u7528\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u6570\u636E\u5904\u7406\u540E\u5B58\u50A8es\u96C6\u7FA4</span></span>
<span class="line"><span style="color:#DBD7CA;">output </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">        </span><span style="color:#758575;">#\u76EE\u6807\u7AEF</span></span>
<span class="line"><span style="color:#DBD7CA;">  if</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">fields</span><span style="color:#858585;">][</span><span style="color:#DBD7CA;">log_topic</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> == </span><span style="color:#C98A7D;">&quot;nginx-access&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u5982\u679Clog_topic\u7684\u5B57\u6BB5\u503C\u4E3Anginx-access\u5C31\u5B58\u5230\u4E0B\u9762\u7684es\u96C6\u7FA4\u91CC</span></span>
<span class="line"><span style="color:#DBD7CA;">      elasticsearch </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">           </span></span>
<span class="line"><span style="color:#DBD7CA;">    action =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;index&quot;</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u7C7B\u578B\u4E3A\u7D22\u5F15</span></span>
<span class="line"><span style="color:#DBD7CA;">    hosts =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.210:9200&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.220:9200&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.230:9200&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#es\u96C6\u7FA4\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    index =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-access-%{+YYYY.MM.dd}&quot;</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#\u5B58\u50A8\u5230es\u96C6\u7FA4\u7684\u54EA\u4E2A\u7D22\u5F15\u91CC</span></span>
<span class="line"><span style="color:#DBD7CA;">    codec =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;json&quot;</span><span style="color:#DBD7CA;">           </span><span style="color:#758575;">#\u5904\u7406json\u683C\u5F0F\u7684\u89E3\u6790</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">  if</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">fields</span><span style="color:#858585;">][</span><span style="color:#DBD7CA;">log_topic</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> == </span><span style="color:#C98A7D;">&quot;tomcat-cata&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">        </span><span style="color:#758575;">#\u5982\u679Clog_topic\u7684\u5B57\u6BB5\u503C\u4E3Atomcat-cata\u5C31\u5B58\u5230\u4E0B\u9762\u7684es\u96C6\u7FA4\u91CC</span></span>
<span class="line"><span style="color:#DBD7CA;">      elasticsearch </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    action =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;index&quot;</span><span style="color:#DBD7CA;">       </span><span style="color:#758575;">#\u7C7B\u578B\u4E3A\u7D22\u5F15</span></span>
<span class="line"><span style="color:#DBD7CA;">    hosts =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.210:9200&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.220:9200&quot;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;192.168.81.230:9200&quot;</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#es\u96C6\u7FA4\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    index =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;tomcat-cata-%{+YYYY.MM.dd}&quot;</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u5B58\u50A8\u5230es\u96C6\u7FA4\u7684\u54EA\u4E2A\u7D22\u5F15\u91CC</span></span>
<span class="line"><span style="color:#DBD7CA;">    codec =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;json&quot;</span><span style="color:#DBD7CA;">           </span><span style="color:#758575;">#\u5904\u7406json\u683C\u5F0F\u7684\u89E3\u6790</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">     </span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat /etc/logstash/conf.d/in_kafka_to_es.conf </span></span>
<span class="line"><span style="color:#A0ADA0;">#\u4ECEkafka\u4E2D\u8BFB\u53D6\u65E5\u5FD7\u6570\u636E</span></span>
<span class="line"><span style="color:#393A34;">input </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;">#\u6570\u636E\u6E90\u7AEF</span></span>
<span class="line"><span style="color:#393A34;">  kafka </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;">#\u7C7B\u578B\u4E3Akafka</span></span>
<span class="line"><span style="color:#393A34;">    bootstrap_servers =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.210:9092,192.168.81.220:9092,192.168.81.230:9092&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#kafka\u96C6\u7FA4\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    topics =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;nginx-access&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;tomcat-cata&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#\u8981\u8BFB\u53D6\u90A3\u4E9Bkafka topics</span></span>
<span class="line"><span style="color:#393A34;">    codec =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;json&quot;</span><span style="color:#393A34;">                   </span><span style="color:#A0ADA0;">#\u5904\u7406json\u683C\u5F0F\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#393A34;">    auto_offset_reset =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;latest&quot;</span><span style="color:#393A34;">           </span><span style="color:#A0ADA0;">#\u53EA\u6D88\u8D39\u6700\u65B0\u7684kafka\u6570\u636E</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u5904\u7406\u6570\u636E\uFF0C\u53BB\u6389\u6CA1\u7528\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">filter </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  if</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">fields</span><span style="color:#8E8F8B;">][</span><span style="color:#393A34;">log_topic</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> == </span><span style="color:#B56959;">&quot;nginx-access&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u5982\u679Clog_topic\u5B57\u6BB5\u4E3Anginx-access\u5219\u8FDB\u884C\u4EE5\u4E0B\u6570\u636E\u5904\u7406</span></span>
<span class="line"><span style="color:#393A34;">      json </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">#json\u683C\u5F0F\u6570\u636E\u5904\u7406</span></span>
<span class="line"><span style="color:#393A34;">           </span><span style="color:#B58451;">source</span><span style="color:#393A34;"> =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;message&quot;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#source\u7B49\u4E8Emessage\u7684</span></span>
<span class="line"><span style="color:#393A34;">           remove_field =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;@version&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;path&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;beat&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;input&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;log&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;offset&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;prospector&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;source&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;tags&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u5220\u9664\u6307\u5B9A\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">      mutate </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#\u4FEE\u6539\u6570\u636E</span></span>
<span class="line"><span style="color:#393A34;">           remove_field =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;_index&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_id&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_type&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_version&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_score&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;referer&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;agent&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u5220\u9664\u6CA1\u7528\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">  if</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">fields</span><span style="color:#8E8F8B;">][</span><span style="color:#393A34;">log_topic</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> == </span><span style="color:#B56959;">&quot;tomcat-cata&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#\u5982\u679Clog_topic\u5B57\u6BB5\u4E3Atomcat-cata</span></span>
<span class="line"><span style="color:#393A34;">      grok </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;">#\u89E3\u6790\u683C\u5F0F</span></span>
<span class="line"><span style="color:#393A34;">     match =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#B56959;">&quot;message&quot;</span><span style="color:#393A34;"> =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;(?&lt;\u65F6\u95F4&gt;20[0-9]{2}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}) \\[(?&lt;\u7EBF\u7A0B\u540D\u79F0&gt;[^\\s]{0,})\\] (?&lt;\u65E5\u5FD7\u7B49\u7EA7&gt;\\w+) (?&lt;\u7C7B\u540D\u79F0&gt;[^\\s]{0,}) (?&lt;\u65E5\u5FD7\u8BE6\u60C5&gt;[\\W\\w]+)&quot;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#\u5C06message\u7684\u503C\u589E\u52A0\u4E0A\u4E00\u4E9B\u683C\u5F0F</span></span>
<span class="line"><span style="color:#393A34;">     </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">      mutate </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#\u4FEE\u6539\u6570\u636E</span></span>
<span class="line"><span style="color:#393A34;">                 remove_field =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;_index&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_id&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_type&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_version&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;_score&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;referer&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;agent&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u5220\u9664\u6CA1\u7528\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u6570\u636E\u5904\u7406\u540E\u5B58\u50A8es\u96C6\u7FA4</span></span>
<span class="line"><span style="color:#393A34;">output </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;">#\u76EE\u6807\u7AEF</span></span>
<span class="line"><span style="color:#393A34;">  if</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">fields</span><span style="color:#8E8F8B;">][</span><span style="color:#393A34;">log_topic</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> == </span><span style="color:#B56959;">&quot;nginx-access&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u5982\u679Clog_topic\u7684\u5B57\u6BB5\u503C\u4E3Anginx-access\u5C31\u5B58\u5230\u4E0B\u9762\u7684es\u96C6\u7FA4\u91CC</span></span>
<span class="line"><span style="color:#393A34;">      elasticsearch </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">           </span></span>
<span class="line"><span style="color:#393A34;">    action =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;index&quot;</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u7C7B\u578B\u4E3A\u7D22\u5F15</span></span>
<span class="line"><span style="color:#393A34;">    hosts =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.210:9200&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.220:9200&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.230:9200&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#es\u96C6\u7FA4\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    index =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-access-%{+YYYY.MM.dd}&quot;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#\u5B58\u50A8\u5230es\u96C6\u7FA4\u7684\u54EA\u4E2A\u7D22\u5F15\u91CC</span></span>
<span class="line"><span style="color:#393A34;">    codec =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;json&quot;</span><span style="color:#393A34;">           </span><span style="color:#A0ADA0;">#\u5904\u7406json\u683C\u5F0F\u7684\u89E3\u6790</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">  if</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">fields</span><span style="color:#8E8F8B;">][</span><span style="color:#393A34;">log_topic</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> == </span><span style="color:#B56959;">&quot;tomcat-cata&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;">#\u5982\u679Clog_topic\u7684\u5B57\u6BB5\u503C\u4E3Atomcat-cata\u5C31\u5B58\u5230\u4E0B\u9762\u7684es\u96C6\u7FA4\u91CC</span></span>
<span class="line"><span style="color:#393A34;">      elasticsearch </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    action =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;index&quot;</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;">#\u7C7B\u578B\u4E3A\u7D22\u5F15</span></span>
<span class="line"><span style="color:#393A34;">    hosts =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.210:9200&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.220:9200&quot;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;192.168.81.230:9200&quot;</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#es\u96C6\u7FA4\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    index =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;tomcat-cata-%{+YYYY.MM.dd}&quot;</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u5B58\u50A8\u5230es\u96C6\u7FA4\u7684\u54EA\u4E2A\u7D22\u5F15\u91CC</span></span>
<span class="line"><span style="color:#393A34;">    codec =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;json&quot;</span><span style="color:#393A34;">           </span><span style="color:#A0ADA0;">#\u5904\u7406json\u683C\u5F0F\u7684\u89E3\u6790</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">     </span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_8-3-\u542F\u52A8logstash\u5E76\u89C2\u5BDF\u65E5\u5FD7" tabindex="-1">8.3.\u542F\u52A8logstash\u5E76\u89C2\u5BDF\u65E5\u5FD7 <a class="header-anchor" href="#_8-3-\u542F\u52A8logstash\u5E76\u89C2\u5BDF\u65E5\u5FD7" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@elk-3 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> nphup /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/in_kafka_to_es.conf </span><span style="color:#CB7676;">&amp;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@elk-3 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> nphup /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/in_kafka_to_es.conf </span><span style="color:#AB5959;">&amp;</span></span>
<span class="line"></span></code></pre></div><p>\u89C2\u5BDF\u65E5\u5FD7\u7684\u8F93\u51FA\uFF0C\u5DF2\u7ECF\u4ECEnginx-access\u3001tomcat-cata topic\u4E2D\u8BFB\u53D6\u4E86\u6570\u636E\u5E76\u5B58\u5230\u4E86es\u96C6\u7FA4\u4E2D <img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/dea0c0f1f103481c9a73df6a82ca16d7.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_8-4-\u67E5\u770Belasticsearch\u96C6\u7FA4\u662F\u5426\u589E\u52A0\u4E86\u5BF9\u5E94\u7684\u7D22\u5F15\u5E93" tabindex="-1">8.4.\u67E5\u770Belasticsearch\u96C6\u7FA4\u662F\u5426\u589E\u52A0\u4E86\u5BF9\u5E94\u7684\u7D22\u5F15\u5E93 <a class="header-anchor" href="#_8-4-\u67E5\u770Belasticsearch\u96C6\u7FA4\u662F\u5426\u589E\u52A0\u4E86\u5BF9\u5E94\u7684\u7D22\u5F15\u5E93" aria-hidden="true">#</a></h3><p>es\u96C6\u7FA4\u5DF2\u7ECF\u751F\u6210\u4E86tomcat-cata\u4EE5\u53CAnginx-access\u7D22\u5F15\u5E93</p><p>\u5230\u6B64\u4E3A\u6B62logstash\u5DF2\u7ECF\u6210\u529F\u4ECEkafka\u96C6\u7FA4\u8BFB\u53D6\u5230\u65E5\u5FD7\u6570\u636E\uFF0C\u7136\u540E\u4F20\u5165\u5230elasticsearch\u96C6\u7FA4\u4E0D\u540C\u7684\u7D22\u5F15\u5E93</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/186fadff16cc45d188cb2ee02b40d11f.png" alt="\u8BF7\u6DFB\u52A0\u56FE\u7247\u63CF\u8FF0"></p><h2 id="_9-\u5728kibana\u4E0A\u5173\u8054elasticsearch\u7D22\u5F15\u5E93\u6D4F\u89C8\u65E5\u5FD7\u6570\u636E" tabindex="-1">9.\u5728kibana\u4E0A\u5173\u8054elasticsearch\u7D22\u5F15\u5E93\u6D4F\u89C8\u65E5\u5FD7\u6570\u636E <a class="header-anchor" href="#_9-\u5728kibana\u4E0A\u5173\u8054elasticsearch\u7D22\u5F15\u5E93\u6D4F\u89C8\u65E5\u5FD7\u6570\u636E" aria-hidden="true">#</a></h2><h3 id="_9-1-\u5728kibana\u4E0A\u6DFB\u52A0nginx-access\u7D22\u5F15\u6A21\u5F0F" tabindex="-1">9.1.\u5728kibana\u4E0A\u6DFB\u52A0nginx-access\u7D22\u5F15\u6A21\u5F0F <a class="header-anchor" href="#_9-1-\u5728kibana\u4E0A\u6DFB\u52A0nginx-access\u7D22\u5F15\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><strong>1\uFF09\u70B9\u51FB\u521B\u5EFA\u7D22\u5F15</strong><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/70a3b3aeb1c4474e8326021566c7f70c.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p><strong>2\uFF09\u586B\u5199\u7D22\u5F15\u540D</strong></p><p>\u91C7\u7528\u901A\u914D\u7B26\u7684\u65B9\u5F0F\uFF0C\u586B\u5199\u5B8C\u70B9\u51FB\u4E0B\u4E00\u6B65\u5B8C\u6210\u521B\u5EFA\u5373\u53EF</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/b31ee5436a13417eb40c9fa57c36b010.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p><strong>3\uFF09\u6DFB\u52A0\u4E00\u4E2A\u65F6\u95F4\u7B5B\u9009\u5B57\u6BB5</strong><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/7dc6fe61a48247419859ea2b10770f36.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p><strong>4\uFF09\u521B\u5EFA\u6210\u529F</strong></p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/9d02b90e81b54360a8952d356453cdfc.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_9-2-\u540C\u6837\u65B9\u6CD5\u6DFB\u52A0tomcat-cata\u7D22\u5F15\u6A21\u5F0F" tabindex="-1">9.2.\u540C\u6837\u65B9\u6CD5\u6DFB\u52A0tomcat-cata\u7D22\u5F15\u6A21\u5F0F <a class="header-anchor" href="#_9-2-\u540C\u6837\u65B9\u6CD5\u6DFB\u52A0tomcat-cata\u7D22\u5F15\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/f64e10dd7823423cb905551c93340751.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_9-3-\u67E5\u8BE2nginx-access\u7D22\u5F15\u65E5\u5FD7\u6570\u636E" tabindex="-1">9.3.\u67E5\u8BE2nginx-access\u7D22\u5F15\u65E5\u5FD7\u6570\u636E <a class="header-anchor" href="#_9-3-\u67E5\u8BE2nginx-access\u7D22\u5F15\u65E5\u5FD7\u6570\u636E" aria-hidden="true">#</a></h3><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/4540ea34a2d44141a0faff48019d077d.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_9-4-\u67E5\u770Btomcat-cata\u7D22\u5F15\u65E5\u5FD7\u6570\u636E" tabindex="-1">9.4.\u67E5\u770Btomcat-cata\u7D22\u5F15\u65E5\u5FD7\u6570\u636E <a class="header-anchor" href="#_9-4-\u67E5\u770Btomcat-cata\u7D22\u5F15\u65E5\u5FD7\u6570\u636E" aria-hidden="true">#</a></h3><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/9317c5e4851d40178f101c88058e8cbc.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h2 id="_10-\u62A5\u9519\u5408\u96C6" tabindex="-1">10.\u62A5\u9519\u5408\u96C6 <a class="header-anchor" href="#_10-\u62A5\u9519\u5408\u96C6" aria-hidden="true">#</a></h2><h3 id="_10-1-es\u542F\u52A8\u65F6\u62A5\u9519\u65E0\u6CD5\u6307\u5B9A\u88AB\u8BF7\u6C42\u7684\u5730\u5740" tabindex="-1">10.1.es\u542F\u52A8\u65F6\u62A5\u9519\u65E0\u6CD5\u6307\u5B9A\u88AB\u8BF7\u6C42\u7684\u5730\u5740 <a class="header-anchor" href="#_10-1-es\u542F\u52A8\u65F6\u62A5\u9519\u65E0\u6CD5\u6307\u5B9A\u88AB\u8BF7\u6C42\u7684\u5730\u5740" aria-hidden="true">#</a></h3><blockquote><p>\u62A5\u9519\u5185\u5BB9\u5982\u4E0B</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u4ED4\u7EC6\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\uFF0C\u80AF\u5B9A\u662F\u67D0\u4E2A\u5730\u5740\u914D\u7F6E\u9519\u4E86\uFF0C\u6211\u7684\u5C31\u662F\u76D1\u542C\u5730\u5740\u7684ip\u5199\u9519\u4E86 <img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/146eb6476be4493ab8285c8457087ac2.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p></blockquote><h3 id="_10-2-filebeat\u5199\u5165\u6570\u636E\u5230kafka-api\u7248\u672C\u62A5\u9519" tabindex="-1">10.2.filebeat\u5199\u5165\u6570\u636E\u5230kafka api\u7248\u672C\u62A5\u9519 <a class="header-anchor" href="#_10-2-filebeat\u5199\u5165\u6570\u636E\u5230kafka-api\u7248\u672C\u62A5\u9519" aria-hidden="true">#</a></h3><blockquote><p>\u62A5\u9519\u5982\u4E0B\uFF1A</p><p>\u5206\u6790\u89E3\u51B3\u601D\u8DEF\uFF1A\u521D\u6B65\u5224\u5B9A\u4E3Akafka2.11\u7248\u672C\u95EE\u9898\u5BFC\u81F4\u7684\uFF0C\u6362\u62102.13\u95EE\u9898\u89E3\u51B3</p></blockquote><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/cb481cdb7ef5411795728d7d4bdc4843.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><blockquote><p>\u8BE5\u6587\u7AE0\u4E3A\u8F6C\u8F7D\u5185\u5BB9\uFF0C\u4EC5\u505A\u5907\u4EFD\u79C1\u4EBA\u5B66\u4E60\u4F7F\u7528\uFF0C\u539F\u6587\uFF1A<a href="https://jiangxl.blog.csdn.net/article/details/119733673" target="_blank" rel="noopener noreferrer">https://jiangxl.blog.csdn.net/article/details/119733673</a></p></blockquote>`,102),e=[o];function t(c,r,y,i,A,D){return a(),n("div",null,e)}var C=s(p,[["render",t]]);export{d as __pageData,C as default};
