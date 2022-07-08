import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const d=JSON.parse('{"title":"Prometheus in Docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"docker \u624B\u52A8\u90E8\u7F72","slug":"docker-\u624B\u52A8\u90E8\u7F72"},{"level":3,"title":"\u542F\u52A8 node-exporter\uFF1A","slug":"\u542F\u52A8-node-exporter\uFF1A"},{"level":3,"title":"\u542F\u52A8prometheus\uFF1A","slug":"\u542F\u52A8prometheus\uFF1A"},{"level":3,"title":"\u542F\u52A8 Grafana","slug":"\u542F\u52A8-grafana"},{"level":2,"title":"docekr compose \u5FEB\u901F\u90E8\u7F72","slug":"docekr-compose-\u5FEB\u901F\u90E8\u7F72"},{"level":3,"title":"\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6","slug":"\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/Prometheus/Prometheus in Docker.md","lastUpdated":1657272051000}'),p={name:"CloudNative/Prometheus/Prometheus in Docker.md"},o=l(`<h1 id="prometheus-in-docker" tabindex="-1">Prometheus in Docker <a class="header-anchor" href="#prometheus-in-docker" aria-hidden="true">#</a></h1><h2 id="docker-\u624B\u52A8\u90E8\u7F72" tabindex="-1">docker \u624B\u52A8\u90E8\u7F72 <a class="header-anchor" href="#docker-\u624B\u52A8\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF0C\u5B89\u88C5docker\uFF0C\u53C2\u8003https://docs.docker.com/engine/install/</p><p>\u62C9\u53D6\u955C\u50CF\u5305\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker pull prom/node-exporter</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull prom/prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull grafana/grafana</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker pull prom/node-exporter</span></span>
<span class="line"><span style="color:#393A34;">docker pull prom/prometheus</span></span>
<span class="line"><span style="color:#393A34;">docker pull grafana/grafana</span></span>
<span class="line"></span></code></pre></div><h3 id="\u542F\u52A8-node-exporter\uFF1A" tabindex="-1">\u542F\u52A8 <code>node-exporter</code>\uFF1A <a class="header-anchor" href="#\u542F\u52A8-node-exporter\uFF1A" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run -d -p 9100:9100 \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  -v </span><span style="color:#C98A7D;">&quot;/proc:/home/docker/proc:ro&quot;</span><span style="color:#DBD7CA;"> \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  -v </span><span style="color:#C98A7D;">&quot;/sys:/home/docker/sys:ro&quot;</span><span style="color:#DBD7CA;"> \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  -v </span><span style="color:#C98A7D;">&quot;/:/home/docker/rootfs:ro&quot;</span><span style="color:#DBD7CA;"> \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  --net=</span><span style="color:#C98A7D;">&quot;host&quot;</span><span style="color:#DBD7CA;"> \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  prom/node-exporter</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run -d -p 9100:9100 \\</span></span>
<span class="line"><span style="color:#393A34;">  -v </span><span style="color:#B56959;">&quot;/proc:/home/docker/proc:ro&quot;</span><span style="color:#393A34;"> \\</span></span>
<span class="line"><span style="color:#393A34;">  -v </span><span style="color:#B56959;">&quot;/sys:/home/docker/sys:ro&quot;</span><span style="color:#393A34;"> \\</span></span>
<span class="line"><span style="color:#393A34;">  -v </span><span style="color:#B56959;">&quot;/:/home/docker/rootfs:ro&quot;</span><span style="color:#393A34;"> \\</span></span>
<span class="line"><span style="color:#393A34;">  --net=</span><span style="color:#B56959;">&quot;host&quot;</span><span style="color:#393A34;"> \\</span></span>
<span class="line"><span style="color:#393A34;">  prom/node-exporter</span></span>
<span class="line"></span></code></pre></div><p>\u6D4B\u8BD5<code>node-exporter</code>\u662F\u5426\u6210\u529F\u542F\u52A8\uFF0C<a href="http://172.16.1.132:9100/metrics" target="_blank" rel="noopener noreferrer">http://172.16.1.132:9100/metrics</a></p><h3 id="\u542F\u52A8prometheus\uFF1A" tabindex="-1">\u542F\u52A8<code>prometheus</code>\uFF1A <a class="header-anchor" href="#\u542F\u52A8prometheus\uFF1A" aria-hidden="true">#</a></h3><p>\u542F\u52A8\u4E4B\u524D\u5148\u914D\u7F6E\u597D Prom \u7684\u914D\u7F6E\u6587\u4EF6<code>/root/prometheus.yml</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">global:</span></span>
<span class="line"><span style="color:#DBD7CA;">  scrape_interval:     60s</span></span>
<span class="line"><span style="color:#DBD7CA;">  evaluation_interval: 60s</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">scrape_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - job_name: prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;">    static_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">      - targets: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;localhost:9090&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">        labels:</span></span>
<span class="line"><span style="color:#DBD7CA;">          instance: prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">  - job_name: linux</span></span>
<span class="line"><span style="color:#DBD7CA;">    static_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">      - targets: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;172.16.1.132:9100&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">        labels:</span></span>
<span class="line"><span style="color:#DBD7CA;">          instance: localhost</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">global:</span></span>
<span class="line"><span style="color:#393A34;">  scrape_interval:     60s</span></span>
<span class="line"><span style="color:#393A34;">  evaluation_interval: 60s</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">scrape_configs:</span></span>
<span class="line"><span style="color:#393A34;">  - job_name: prometheus</span></span>
<span class="line"><span style="color:#393A34;">    static_configs:</span></span>
<span class="line"><span style="color:#393A34;">      - targets: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;localhost:9090&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">        labels:</span></span>
<span class="line"><span style="color:#393A34;">          instance: prometheus</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  - job_name: linux</span></span>
<span class="line"><span style="color:#393A34;">    static_configs:</span></span>
<span class="line"><span style="color:#393A34;">      - targets: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;172.16.1.132:9100&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">        labels:</span></span>
<span class="line"><span style="color:#393A34;">          instance: localhost</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\u5BB9\u5668\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run  -d \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  -p 9090:9090 \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  -v /root/prometheus.yml:/etc/prometheus/prometheus.yml  \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  prom/prometheus</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run  -d \\</span></span>
<span class="line"><span style="color:#393A34;">  -p 9090:9090 \\</span></span>
<span class="line"><span style="color:#393A34;">  -v /root/prometheus.yml:/etc/prometheus/prometheus.yml  \\</span></span>
<span class="line"><span style="color:#393A34;">  prom/prometheus</span></span>
<span class="line"></span></code></pre></div><p>\u6D4B\u8BD5<code>node-exporter</code>\u662F\u5426\u6210\u529F\u542F\u52A8\uFF0C<a href="http://172.16.1.132:9090" target="_blank" rel="noopener noreferrer">http://172.16.1.132:9090</a></p><h3 id="\u542F\u52A8-grafana" tabindex="-1">\u542F\u52A8 Grafana <a class="header-anchor" href="#\u542F\u52A8-grafana" aria-hidden="true">#</a></h3><p>\u65B0\u5EFA\u7A7A\u6587\u4EF6\u5939<code>grafana-storage</code>\uFF0C\u7528\u6765\u5B58\u50A8\u6570\u636E\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mkdir -pv /data/grafana-storage</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mkdir -pv /data/grafana-storage</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\u5BB9\u5668\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run -d \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  -p 3000:3000 \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  --name=grafana \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  -v /data/grafana-storage:/var/lib/grafana \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  grafana/grafana</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run -d \\</span></span>
<span class="line"><span style="color:#393A34;">  -p 3000:3000 \\</span></span>
<span class="line"><span style="color:#393A34;">  --name=grafana \\</span></span>
<span class="line"><span style="color:#393A34;">  -v /data/grafana-storage:/var/lib/grafana \\</span></span>
<span class="line"><span style="color:#393A34;">  grafana/grafana</span></span>
<span class="line"></span></code></pre></div><p>\u6D4B\u8BD5\u5BB9\u5668\u8FD0\u884C\u72B6\u6001\uFF0C\u6D4F\u89C8\u5668\u8BBF\u95EEhttp://172.16.1.132:3000</p><p>\u67E5\u770B\u4E09\u4E2A\u5BB9\u5668\u72B6\u6001\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master docker</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> docker ps</span></span>
<span class="line"><span style="color:#DBD7CA;">CONTAINER ID        IMAGE                COMMAND                  CREATED                  STATUS                  PORTS                    NAMES</span></span>
<span class="line"><span style="color:#DBD7CA;">803d4e5c4ad3        prom/prometheus      </span><span style="color:#C98A7D;">&quot;/bin/prometheus --c\u2026&quot;</span><span style="color:#DBD7CA;">   Less than a second ago   Up Less than a second   0.0.0.0:9090-</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">9090/tcp   charming_morse</span></span>
<span class="line"><span style="color:#DBD7CA;">2569f2394344        prom/node-exporter   </span><span style="color:#C98A7D;">&quot;/bin/node_exporter&quot;</span><span style="color:#DBD7CA;">     Less than a second ago   Up Less than a second                            tender_elion</span></span>
<span class="line"><span style="color:#DBD7CA;">5a3f4258bec5        grafana/grafana      </span><span style="color:#C98A7D;">&quot;/run.sh&quot;</span><span style="color:#DBD7CA;">                5 seconds ago            Up 4 seconds            0.0.0.0:3000-</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">3000/tcp   grafana</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master docker</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> docker ps</span></span>
<span class="line"><span style="color:#393A34;">CONTAINER ID        IMAGE                COMMAND                  CREATED                  STATUS                  PORTS                    NAMES</span></span>
<span class="line"><span style="color:#393A34;">803d4e5c4ad3        prom/prometheus      </span><span style="color:#B56959;">&quot;/bin/prometheus --c\u2026&quot;</span><span style="color:#393A34;">   Less than a second ago   Up Less than a second   0.0.0.0:9090-</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">9090/tcp   charming_morse</span></span>
<span class="line"><span style="color:#393A34;">2569f2394344        prom/node-exporter   </span><span style="color:#B56959;">&quot;/bin/node_exporter&quot;</span><span style="color:#393A34;">     Less than a second ago   Up Less than a second                            tender_elion</span></span>
<span class="line"><span style="color:#393A34;">5a3f4258bec5        grafana/grafana      </span><span style="color:#B56959;">&quot;/run.sh&quot;</span><span style="color:#393A34;">                5 seconds ago            Up 4 seconds            0.0.0.0:3000-</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">3000/tcp   grafana</span></span>
<span class="line"></span></code></pre></div><p>\u6B64\u540E<code>Grafana</code>\u7684\u7B80\u5355\u8BBE\u7F6E\u53C2\u8003 [\u4F7F\u7528 Grafana \u5C55\u793A\u5DE5\u5177](./Prometheus <a href="http://xn--jhq814a951a01hvhk.md#%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">\u5B89\u88C5\u4E0E\u90E8\u7F72.md#\u4F7F\u7528</a> Grafana \u5C55\u793A\u5DE5\u5177)</p><h2 id="docekr-compose-\u5FEB\u901F\u90E8\u7F72" tabindex="-1">docekr compose \u5FEB\u901F\u90E8\u7F72 <a class="header-anchor" href="#docekr-compose-\u5FEB\u901F\u90E8\u7F72" aria-hidden="true">#</a></h2><p>docker compose \u5B89\u88C5\uFF1A</p><ul><li>\u501F\u52A9\u4E8E<code>epel</code>\u4ED3\u5E93\uFF0C\u76F4\u63A5\u5B89\u88C5\u5373\u53EF\uFF0C<code>yum install docker-compose</code></li><li>github \u5B98\u65B9\u4ED3\u5E93\uFF1A<a href="https://github.com/docker/compose/releases/" target="_blank" rel="noopener noreferrer">https://github.com/docker/compose/releases/</a></li></ul><h3 id="\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">mkdir -p /usr/local/src/config</span></span>
<span class="line"><span style="color:#dbd7ca;">cd /usr/local/src/config</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">mkdir -p /usr/local/src/config</span></span>
<span class="line"><span style="color:#393a34;">cd /usr/local/src/config</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u6DFB\u52A0<code>prometheus.yml</code>\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># my global config</span></span>
<span class="line"><span style="color:#429988;">global</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">scrape_interval</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;">     </span><span style="color:#C98A7D;">15s</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;"># Set the scrape interval to every 15 seconds. Default is every 1 minute.</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">evaluation_interval</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">15s</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;"># Evaluate rules every 15 seconds. The default is every 1 minute.</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># scrape_timeout is set to the global default (10s).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Alertmanager configuration</span></span>
<span class="line"><span style="color:#429988;">alerting</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">alertmanagers</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">static_configs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">targets</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;172.16.1.132:9093&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># - alertmanager:9093</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Load rules once and periodically evaluate them according to the global &#39;evaluation_interval&#39;.</span></span>
<span class="line"><span style="color:#429988;">rule_files</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;node_down.yml&quot;</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># - &quot;first_rules.yml&quot;</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># - &quot;second_rules.yml&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># A scrape configuration containing exactly one endpoint to scrape:</span></span>
<span class="line"><span style="color:#758575;"># Here it&#39;s Prometheus itself.</span></span>
<span class="line"><span style="color:#429988;">scrape_configs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries scraped from this config.</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">job_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;prometheus&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">static_configs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">targets</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;172.16.1.132:9090&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">job_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;cadvisor&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">static_configs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">targets</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;172.16.1.132:8080&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">job_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;node&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">scrape_interval</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">8s</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">static_configs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">targets</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;172.16.1.132:9100&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># my global config</span></span>
<span class="line"><span style="color:#2F8A89;">global</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">scrape_interval</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;">     </span><span style="color:#B56959;">15s</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># Set the scrape interval to every 15 seconds. Default is every 1 minute.</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">evaluation_interval</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">15s</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># Evaluate rules every 15 seconds. The default is every 1 minute.</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># scrape_timeout is set to the global default (10s).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Alertmanager configuration</span></span>
<span class="line"><span style="color:#2F8A89;">alerting</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">alertmanagers</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">static_configs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">targets</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;172.16.1.132:9093&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># - alertmanager:9093</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Load rules once and periodically evaluate them according to the global &#39;evaluation_interval&#39;.</span></span>
<span class="line"><span style="color:#2F8A89;">rule_files</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;node_down.yml&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># - &quot;first_rules.yml&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># - &quot;second_rules.yml&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># A scrape configuration containing exactly one endpoint to scrape:</span></span>
<span class="line"><span style="color:#A0ADA0;"># Here it&#39;s Prometheus itself.</span></span>
<span class="line"><span style="color:#2F8A89;">scrape_configs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries scraped from this config.</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">job_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;prometheus&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">static_configs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">targets</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;172.16.1.132:9090&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">job_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;cadvisor&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">static_configs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">targets</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;172.16.1.132:8080&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">job_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;node&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">scrape_interval</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">8s</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">static_configs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">targets</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;172.16.1.132:9100&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6<code>alertmanager.yml</code>\uFF0C\u914D\u7F6E\u6536\u53D1\u90AE\u4EF6\u90AE\u7BB1</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">global</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">smtp_smarthost</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;smtp.163.com:25&#39;</span><span style="color:#DBD7CA;">\u3000\u3000#</span><span style="color:#C98A7D;">163\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">smtp_from</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;xxxx@163.com&#39;</span><span style="color:#DBD7CA;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#C98A7D;">\u53D1\u90AE\u4EF6\u7684\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">smtp_auth_username</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;xxxx@163.com&#39;</span><span style="color:#DBD7CA;">\u3000\u3000#</span><span style="color:#C98A7D;">\u53D1\u90AE\u4EF6\u7684\u90AE\u7BB1\u7528\u6237\u540D\uFF0C\u4E5F\u5C31\u662F\u4F60\u7684\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">smtp_auth_password</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;xxxx&#39;</span><span style="color:#DBD7CA;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#C98A7D;">\u53D1\u90AE\u4EF6\u7684\u90AE\u7BB1\u5BC6\u7801</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">smtp_require_tls</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">false</span><span style="color:#DBD7CA;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#C98A7D;">\u4E0D\u8FDB\u884Ctls\u9A8C\u8BC1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">route</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">group_by</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;alertname&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">group_wait</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">10s</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">group_interval</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">10s</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">repeat_interval</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">10m</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">receiver</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">live-monitoring</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">receivers</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;live-monitoring&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">email_configs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">to</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;xxxx@qq.com&#39;</span><span style="color:#DBD7CA;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#C98A7D;">\u6536\u90AE\u4EF6\u7684\u90AE\u7BB1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">global</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">smtp_smarthost</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;smtp.163.com:25&#39;</span><span style="color:#393A34;">\u3000\u3000#</span><span style="color:#B56959;">163\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">smtp_from</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;xxxx@163.com&#39;</span><span style="color:#393A34;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#B56959;">\u53D1\u90AE\u4EF6\u7684\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">smtp_auth_username</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;xxxx@163.com&#39;</span><span style="color:#393A34;">\u3000\u3000#</span><span style="color:#B56959;">\u53D1\u90AE\u4EF6\u7684\u90AE\u7BB1\u7528\u6237\u540D\uFF0C\u4E5F\u5C31\u662F\u4F60\u7684\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">smtp_auth_password</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;xxxx&#39;</span><span style="color:#393A34;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#B56959;">\u53D1\u90AE\u4EF6\u7684\u90AE\u7BB1\u5BC6\u7801</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">smtp_require_tls</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">false</span><span style="color:#393A34;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#B56959;">\u4E0D\u8FDB\u884Ctls\u9A8C\u8BC1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">route</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">group_by</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;alertname&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">group_wait</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">10s</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">group_interval</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">10s</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">repeat_interval</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">10m</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">receiver</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">live-monitoring</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">receivers</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;live-monitoring&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">email_configs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">to</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;xxxx@qq.com&#39;</span><span style="color:#393A34;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#</span><span style="color:#B56959;">\u6536\u90AE\u4EF6\u7684\u90AE\u7BB1</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0\u62A5\u8B66\u89C4\u5219\uFF0C\u6DFB\u52A0\u4E00\u4E2A<code>node_down.yml</code>\u4E3A prometheus targets \u76D1\u63A7</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">groups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">node_down</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">rules</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">alert</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">InstanceDown</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">expr</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">up == 0</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">for</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">1m</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">labels</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">user</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">test</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">annotations</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">summary</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Instance \u3010\u3010 $labels.instance \u3011\u3011 down&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">description</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;\u3010\u3010 $labels.instance \u3011\u3011 of job \u3010\u3010 $labels.job \u3011\u3011 has been down for more than 1 minutes.&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">groups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node_down</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">rules</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">alert</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">InstanceDown</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">expr</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">up == 0</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">for</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">1m</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">labels</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">user</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">test</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">annotations</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">summary</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Instance \u3010\u3010 $labels.instance \u3011\u3011 down&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">description</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;\u3010\u3010 $labels.instance \u3011\u3011 of job \u3010\u3010 $labels.job \u3011\u3011 has been down for more than 1 minutes.&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u5199 docker-compose \u6587\u4EF6<code>docker-compose-monitor.yml</code>\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">version</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;2&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">networks</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">monitor</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">driver</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">bridge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">services</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">prometheus</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">prom/prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">hostname</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">volumes</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/usr/local/src/config/prometheus.yml:/etc/prometheus/prometheus.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/usr/local/src/config/node_down.yml:/etc/prometheus/node_down.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;9090:9090&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">networks</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">alertmanager</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">prom/alertmanager</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">alertmanager</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">hostname</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">alertmanager</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">volumes</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/usr/local/src/config/alertmanager.yml:/etc/alertmanager/alertmanager.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;9093:9093&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">networks</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">grafana</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">grafana/grafana</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">grafana</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">hostname</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">grafana</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">networks</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">node-exporter</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">quay.io/prometheus/node-exporter</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">node-exporter</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">hostname</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">node-exporter</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;9100:9100&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">networks</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">cadvisor</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">google/cadvisor:latest</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">container_name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">cadvisor</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">hostname</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">cadvisor</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">restart</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">always</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">volumes</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/:/rootfs:ro</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/var/run:/var/run:rw</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/sys:/sys:ro</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/var/lib/docker/:/var/lib/docker:ro</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;8080:8080&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">networks</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">monitor</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">version</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;2&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">networks</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">monitor</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">driver</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">bridge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">services</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">prometheus</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">prom/prometheus</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">prometheus</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">hostname</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">prometheus</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">volumes</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/usr/local/src/config/prometheus.yml:/etc/prometheus/prometheus.yml</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/usr/local/src/config/node_down.yml:/etc/prometheus/node_down.yml</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;9090:9090&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">networks</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">alertmanager</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">prom/alertmanager</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">alertmanager</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">hostname</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">alertmanager</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">volumes</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/usr/local/src/config/alertmanager.yml:/etc/alertmanager/alertmanager.yml</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;9093:9093&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">networks</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">grafana</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">grafana/grafana</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">grafana</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">hostname</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">grafana</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">networks</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">node-exporter</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">quay.io/prometheus/node-exporter</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node-exporter</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">hostname</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node-exporter</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;9100:9100&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">networks</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">monitor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">cadvisor</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">google/cadvisor:latest</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">container_name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">cadvisor</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">hostname</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">cadvisor</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">restart</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">always</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">volumes</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/:/rootfs:ro</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/var/run:/var/run:rw</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/sys:/sys:ro</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/var/lib/docker/:/var/lib/docker:ro</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;8080:8080&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">networks</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">monitor</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8<code>docker-compose</code></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#\u542F\u52A8\u5BB9\u5668\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-compose -f /usr/local/src/config/docker-compose-monitor.yml up -d</span></span>
<span class="line"><span style="color:#758575;">#\u5220\u9664\u5BB9\u5668\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-compose -f /usr/local/src/config/docker-compose-monitor.yml down</span></span>
<span class="line"><span style="color:#758575;">#\u91CD\u542F\u5BB9\u5668\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">docker restart </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">ID</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#\u542F\u52A8\u5BB9\u5668\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">docker-compose -f /usr/local/src/config/docker-compose-monitor.yml up -d</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5220\u9664\u5BB9\u5668\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">docker-compose -f /usr/local/src/config/docker-compose-monitor.yml down</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u91CD\u542F\u5BB9\u5668\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">docker restart </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">ID</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>docker-compose\u53C2\u8003\uFF1A<a href="https://blog.51cto.com/msiyuetian/2369130" target="_blank" rel="noopener noreferrer">https://blog.51cto.com/msiyuetian/2369130</a></li></ul>`,40),e=[o];function c(r,t,y,i,A,D){return n(),a("div",null,e)}var C=s(p,[["render",c]]);export{d as __pageData,C as default};
