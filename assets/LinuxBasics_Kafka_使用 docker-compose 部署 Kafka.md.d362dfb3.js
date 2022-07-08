import{_ as s,o as a,c as n,a as p}from"./app.1e6146c3.js";const k=JSON.parse('{"title":"\u4F7F\u7528 docker-compose \u90E8\u7F72 Kafka","description":"","frontmatter":{},"headers":[],"relativePath":"LinuxBasics/Kafka/\u4F7F\u7528 docker-compose \u90E8\u7F72 Kafka.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Kafka/\u4F7F\u7528 docker-compose \u90E8\u7F72 Kafka.md"},o=p(`<h1 id="\u4F7F\u7528-docker-compose-\u90E8\u7F72-kafka" tabindex="-1">\u4F7F\u7528 docker-compose \u90E8\u7F72 Kafka <a class="header-anchor" href="#\u4F7F\u7528-docker-compose-\u90E8\u7F72-kafka" aria-hidden="true">#</a></h1><p><code>docker-compose.yml</code>\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">version</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#429988;">services</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">zookeeper</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">zookeeper:latest</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">zookeeper</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#429988;">volumes</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/data/docker/kafka/zookeeper/data:/data</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/data/docker/kafka/zookeeper/datalog:/datalog</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">2181:2181</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">kafka</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">wurstmeister/kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">volumes</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/data/docker/kafka/data:/kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">9092:9092</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">environment</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">KAFKA_ADVERTISED_HOST_NAME</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">KAFKA_ZOOKEEPER_CONNECT</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">zookeeper:2181</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># KAFKA_ADVERTISED_PORT: 9092</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># KAFKA_LOG_RETENTION_HOURS: 120</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># KAFKA_MESSAGE_MAX_BYTES: 10000000</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># KAFKA_NUM_PARTITIONS: 3</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># KAFKA_DELETE_RETENTION_MS: 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">kafka-manager</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kafkamanager/kafka-manager</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kafka-manager</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">environment</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">ZK_HOSTS</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kafka</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">9000:9000</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">version</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#2F8A89;">services</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">zookeeper</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">zookeeper:latest</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">zookeeper</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#2F8A89;">volumes</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/data/docker/kafka/zookeeper/data:/data</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/data/docker/kafka/zookeeper/datalog:/datalog</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">2181:2181</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">kafka</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">wurstmeister/kafka</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kafka</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">volumes</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/data/docker/kafka/data:/kafka</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">9092:9092</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">environment</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">KAFKA_ADVERTISED_HOST_NAME</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kafka</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">KAFKA_ZOOKEEPER_CONNECT</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">zookeeper:2181</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># KAFKA_ADVERTISED_PORT: 9092</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># KAFKA_LOG_RETENTION_HOURS: 120</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># KAFKA_MESSAGE_MAX_BYTES: 10000000</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># KAFKA_NUM_PARTITIONS: 3</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># KAFKA_DELETE_RETENTION_MS: 1000</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">kafka-manager</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kafkamanager/kafka-manager</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kafka-manager</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">environment</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">ZK_HOSTS</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kafka</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">9000:9000</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u811A\u672C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mkdir /data/docker/kafka/zookeeper/{data,datalog} /data/docker/kafka/data -pv </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> docker-compose up -d</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mkdir /data/docker/kafka/zookeeper/{data,datalog} /data/docker/kafka/data -pv </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> docker-compose up -d</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(r,t,y,A,D,i){return a(),n("div",null,e)}var _=s(l,[["render",c]]);export{k as __pageData,_ as default};
