import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Kafka + ELFK\u5206\u5E03\u5F0F\u65E5\u5FD7\u6536\u96C6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u80CC\u666F","slug":"\u4F7F\u7528\u80CC\u666F"},{"level":2,"title":"Filebeat --> Kafka","slug":"filebeat-kafka"},{"level":2,"title":"\u542F\u52A8 Kafka","slug":"\u542F\u52A8-kafka"},{"level":2,"title":"Logstash --> ElasticSearch","slug":"logstash-elasticsearch"}],"relativePath":"CloudNative/ELFK/Kafka-ELFK\u5206\u5E03\u5F0F\u65E5\u5FD7\u6536\u96C6.md","lastUpdated":1657272051000}'),o={name:"CloudNative/ELFK/Kafka-ELFK\u5206\u5E03\u5F0F\u65E5\u5FD7\u6536\u96C6.md"},p=l(`<h1 id="kafka-elfk\u5206\u5E03\u5F0F\u65E5\u5FD7\u6536\u96C6" tabindex="-1">Kafka + ELFK\u5206\u5E03\u5F0F\u65E5\u5FD7\u6536\u96C6 <a class="header-anchor" href="#kafka-elfk\u5206\u5E03\u5F0F\u65E5\u5FD7\u6536\u96C6" aria-hidden="true">#</a></h1><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/elk%20stack/log_collect.png" alt=""></p><p><em><strong>Filebeat --&gt; Kafka --&gt; Logstash --&gt; ES Cluster --&gt; Kibana/Grafana</strong></em></p><h2 id="\u4F7F\u7528\u80CC\u666F" tabindex="-1">\u4F7F\u7528\u80CC\u666F <a class="header-anchor" href="#\u4F7F\u7528\u80CC\u666F" aria-hidden="true">#</a></h2><p>\u7531\u4E8E<code>ELFK</code>\u7684\u5C40\u9650\u6027\uFF0C\u968F\u7740<code> Beats</code> \u6536\u96C6\u7684\u6BCF\u79D2\u6570\u636E\u91CF\u8D8A\u6765\u8D8A\u5927\uFF0C<code>Logstash </code>\u53EF\u80FD\u65E0\u6CD5\u627F\u8F7D\u8FD9\u4E48\u5927\u91CF\u65E5\u5FD7\u7684\u5904\u7406\u3002\u867D\u7136\u8BF4\uFF0C\u53EF\u4EE5\u589E\u52A0 Logstash \u8282\u70B9\u6570\u91CF\uFF0C\u63D0\u9AD8\u6BCF\u79D2\u6570\u636E\u7684\u5904\u7406\u901F\u5EA6\uFF0C\u4F46\u662F\u4ECD\u9700\u8003\u8651\u53EF\u80FD<code>Elasticsearch</code>\u65E0\u6CD5\u627F\u8F7D\u8FD9\u4E48\u5927\u91CF\u7684\u65E5\u5FD7\u7684\u5199\u5165\u3002\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651 <strong>\u5F15\u5165\u6D88\u606F\u961F\u5217</strong> \uFF08<code>Kafka</code>\uFF09\uFF0C\u8FDB\u884C\u7F13\u5B58\u3002</p><h2 id="filebeat-kafka" tabindex="-1">Filebeat --&gt; Kafka <a class="header-anchor" href="#filebeat-kafka" aria-hidden="true">#</a></h2><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># vim /usr/local/filebeat-7.7.1-linux-x86_64/filebeat.yml</span></span>
<span class="line"><span style="color:#429988;">filebeat.inputs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">type</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">paths</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/usr/local/apache-tomcat-9.0.34/logs/tomcat_access_log.*.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">output.kafka</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># initial brokers for reading cluster metadata</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;">#hosts: [&quot;kafka1:9092&quot;, &quot;kafka2:9092&quot;, &quot;kafka3:9092&quot;]</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">hosts</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;172.16.1.131:9092&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># message topic selection + partitioning</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># topic: &#39;%{[fields.log_topic]}&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">topic</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">tomcat-log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">partition.round_robin</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">reachable_only</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># vim /usr/local/filebeat-7.7.1-linux-x86_64/filebeat.yml</span></span>
<span class="line"><span style="color:#2F8A89;">filebeat.inputs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">type</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">paths</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/usr/local/apache-tomcat-9.0.34/logs/tomcat_access_log.*.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">output.kafka</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># initial brokers for reading cluster metadata</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;">#hosts: [&quot;kafka1:9092&quot;, &quot;kafka2:9092&quot;, &quot;kafka3:9092&quot;]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">hosts</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;172.16.1.131:9092&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># message topic selection + partitioning</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># topic: &#39;%{[fields.log_topic]}&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">topic</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">tomcat-log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">partition.round_robin</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">reachable_only</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">false</span></span>
<span class="line"></span></code></pre></div><h2 id="\u542F\u52A8-kafka" tabindex="-1">\u542F\u52A8 Kafka <a class="header-anchor" href="#\u542F\u52A8-kafka" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u8D77\u89C1\uFF0C\u6211\u4F7F\u7528<code>docker-compose</code>\u811A\u672C\u6765\u8FDB\u884C\u5FEB\u901F\u90E8\u7F72\uFF0C\u811A\u672C\u5185\u5BB9\u53C2\u89C1[\u4F7F\u7528 docker-compose \u90E8\u7F72 Kafka](../Kafka/\u4F7F\u7528 docker-compose \u90E8\u7F72 <a href="http://Kafka.md" target="_blank" rel="noopener noreferrer">Kafka.md</a>)</p><h2 id="logstash-elasticsearch" tabindex="-1">Logstash --&gt; ElasticSearch <a class="header-anchor" href="#logstash-elasticsearch" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># vim /usr/local/logstash-7.7.1/config/kafka2es.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">input </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    kafka </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    codec =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;json&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    topics =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;tomcat-log&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">    bootstrap_servers =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;172.16.1.131:9092&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    auto_offset_reset =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;latest&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    group_id =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;logstash-g1&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">output </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    elasticsearch </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    hosts =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;http://172.16.1.131:9200&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    index =</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;filebeat_%{[fields][log_source]}-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># vim /usr/local/logstash-7.7.1/config/kafka2es.conf</span></span>
<span class="line"><span style="color:#393A34;">input </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    kafka </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    codec =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;json&quot;</span></span>
<span class="line"><span style="color:#393A34;">    topics =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;tomcat-log&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">    bootstrap_servers =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;172.16.1.131:9092&quot;</span></span>
<span class="line"><span style="color:#393A34;">    auto_offset_reset =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;latest&quot;</span></span>
<span class="line"><span style="color:#393A34;">    group_id =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;logstash-g1&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">output </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    elasticsearch </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    hosts =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;http://172.16.1.131:9200&quot;</span></span>
<span class="line"><span style="color:#393A34;">    index =</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;filebeat_%{[fields][log_source]}-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div>`,11),e=[p];function t(c,r,y,i,A,d){return a(),n("div",null,e)}var g=s(o,[["render",t]]);export{B as __pageData,g as default};
