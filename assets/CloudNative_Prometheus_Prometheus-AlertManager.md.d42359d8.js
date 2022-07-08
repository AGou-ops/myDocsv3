import{_ as s,o as a,c as n,a as e}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"Prometheus + AlertManager","description":"","frontmatter":{},"headers":[{"level":2,"title":"AlertManager \u7B80\u4ECB","slug":"alertmanager-\u7B80\u4ECB"},{"level":3,"title":"promtheus\u544A\u8B66\u80FD\u529B","slug":"promtheus\u544A\u8B66\u80FD\u529B"},{"level":2,"title":"\u914D\u7F6E node-exporter \u548C Prom","slug":"\u914D\u7F6E-node-exporter-\u548C-prom"},{"level":3,"title":"\u914D\u7F6E node-exporter","slug":"\u914D\u7F6E-node-exporter"},{"level":3,"title":"\u914D\u7F6E Prom","slug":"\u914D\u7F6E-prom"},{"level":2,"title":"\u914D\u7F6E AlertManager","slug":"\u914D\u7F6E-alertmanager"},{"level":2,"title":"\u914D\u7F6E  Prom \u7684\u62A5\u8B66\u89C4\u5219","slug":"\u914D\u7F6E-prom-\u7684\u62A5\u8B66\u89C4\u5219"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/Prometheus/Prometheus-AlertManager.md","lastUpdated":1657272051000}'),p={name:"CloudNative/Prometheus/Prometheus-AlertManager.md"},l=e(`<h1 id="prometheus-alertmanager" tabindex="-1">Prometheus + AlertManager <a class="header-anchor" href="#prometheus-alertmanager" aria-hidden="true">#</a></h1><h2 id="alertmanager-\u7B80\u4ECB" tabindex="-1">AlertManager \u7B80\u4ECB <a class="header-anchor" href="#alertmanager-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Alertmanager \u4E3B\u8981\u7528\u4E8E\u63A5\u6536 Prometheus \u53D1\u9001\u7684\u544A\u8B66\u4FE1\u606F\uFF0C\u5B83\u652F\u6301\u4E30\u5BCC\u7684\u544A\u8B66\u901A\u77E5\u6E20\u9053\uFF0C\u4F8B\u5982\u90AE\u4EF6\u3001\u5FAE\u4FE1\u3001\u9489\u9489\u3001Slack \u7B49\u5E38\u7528\u6C9F\u901A\u5DE5\u5177\uFF0C\u800C\u4E14\u5F88\u5BB9\u6613\u505A\u5230\u544A\u8B66\u4FE1\u606F\u8FDB\u884C\u53BB\u91CD\uFF0C\u964D\u566A\uFF0C\u5206\u7EC4\u7B49\uFF0C\u662F\u4E00\u6B3E\u5F88\u597D\u7528\u7684\u544A\u8B66\u901A\u77E5\u7CFB\u7EDF\u3002</p><h3 id="promtheus\u544A\u8B66\u80FD\u529B" tabindex="-1">promtheus\u544A\u8B66\u80FD\u529B <a class="header-anchor" href="#promtheus\u544A\u8B66\u80FD\u529B" aria-hidden="true">#</a></h3><blockquote><p>\u544A\u8B66\u80FD\u529B\u5728Prometheus\u7684\u67B6\u6784\u4E2D\u88AB\u5212\u5206\u6210\u4E24\u4E2A\u72EC\u7ACB\u7684\u90E8\u5206\u3002\u5982\u4E0B\u6240\u793A\uFF0C\u901A\u8FC7\u5728Prometheus\u4E2D\u5B9A\u4E49AlertRule\uFF08\u544A\u8B66\u89C4\u5219\uFF09\uFF0CPrometheus\u4F1A\u5468\u671F\u6027\u7684\u5BF9\u544A\u8B66\u89C4\u5219\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5982\u679C\u6EE1\u8DB3\u544A\u8B66\u89E6\u53D1\u6761\u4EF6\u5C31\u4F1A\u5411Alertmanager\u53D1\u9001\u544A\u8B66\u4FE1\u606F\u3002</p><p><img src="https://2584451478-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LBdoxo9EmQ0bJP2BuUi%2F-LVMF4RtPS-2rjW9R-hG%2F-LPS9QhUbi37E1ZK8mXF%2Fprometheus-alert-artich.png?generation=1546578333144123&amp;alt=media" alt="img"></p><p>Prometheus\u544A\u8B66\u5904\u7406</p><p>\u5728Prometheus\u4E2D\u4E00\u6761\u544A\u8B66\u89C4\u5219\u4E3B\u8981\u7531\u4EE5\u4E0B\u51E0\u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li>\u544A\u8B66\u540D\u79F0\uFF1A\u7528\u6237\u9700\u8981\u4E3A\u544A\u8B66\u89C4\u5219\u547D\u540D\uFF0C\u5F53\u7136\u5BF9\u4E8E\u547D\u540D\u800C\u8A00\uFF0C\u9700\u8981\u80FD\u591F\u76F4\u63A5\u8868\u8FBE\u51FA\u8BE5\u544A\u8B66\u7684\u4E3B\u8981\u5185\u5BB9</li><li>\u544A\u8B66\u89C4\u5219\uFF1A\u544A\u8B66\u89C4\u5219\u5B9E\u9645\u4E0A\u4E3B\u8981\u7531PromQL\u8FDB\u884C\u5B9A\u4E49\uFF0C\u5176\u5B9E\u9645\u610F\u4E49\u662F\u5F53\u8868\u8FBE\u5F0F\uFF08PromQL\uFF09\u67E5\u8BE2\u7ED3\u679C\u6301\u7EED\u591A\u957F\u65F6\u95F4\uFF08During\uFF09\u540E\u51FA\u53D1\u544A\u8B66</li></ul><p>\u5728Prometheus\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7Group\uFF08\u544A\u8B66\u7EC4\uFF09\u5BF9\u4E00\u7EC4\u76F8\u5173\u7684\u544A\u8B66\u8FDB\u884C\u7EDF\u4E00\u5B9A\u4E49\u3002\u5F53\u7136\u8FD9\u4E9B\u5B9A\u4E49\u90FD\u662F\u901A\u8FC7YAML\u6587\u4EF6\u6765\u7EDF\u4E00\u7BA1\u7406\u7684\u3002</p><p>Alertmanager\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u7EC4\u4EF6\uFF0C\u8D1F\u8D23\u63A5\u6536\u5E76\u5904\u7406\u6765\u81EAPrometheus Server(\u4E5F\u53EF\u4EE5\u662F\u5176\u5B83\u7684\u5BA2\u6237\u7AEF\u7A0B\u5E8F)\u7684\u544A\u8B66\u4FE1\u606F\u3002Alertmanager\u53EF\u4EE5\u5BF9\u8FD9\u4E9B\u544A\u8B66\u4FE1\u606F\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u5904\u7406\uFF0C\u6BD4\u5982\u5F53\u63A5\u6536\u5230\u5927\u91CF\u91CD\u590D\u544A\u8B66\u65F6\u80FD\u591F\u6D88\u9664\u91CD\u590D\u7684\u544A\u8B66\u4FE1\u606F\uFF0C\u540C\u65F6\u5BF9\u544A\u8B66\u4FE1\u606F\u8FDB\u884C\u5206\u7EC4\u5E76\u4E14\u8DEF\u7531\u5230\u6B63\u786E\u7684\u901A\u77E5\u65B9\uFF0CPrometheus\u5185\u7F6E\u4E86\u5BF9\u90AE\u4EF6\uFF0CSlack\u7B49\u591A\u79CD\u901A\u77E5\u65B9\u5F0F\u7684\u652F\u6301\uFF0C\u540C\u65F6\u8FD8\u652F\u6301\u4E0EWebhook\u7684\u96C6\u6210\uFF0C\u4EE5\u652F\u6301\u66F4\u591A\u5B9A\u5236\u5316\u7684\u573A\u666F\u3002\u4F8B\u5982\uFF0C\u76EE\u524DAlertmanager\u8FD8\u4E0D\u652F\u6301\u9489\u9489\uFF0C\u90A3\u7528\u6237\u5B8C\u5168\u53EF\u4EE5\u901A\u8FC7Webhook\u4E0E\u9489\u9489\u673A\u5668\u4EBA\u8FDB\u884C\u96C6\u6210\uFF0C\u4ECE\u800C\u901A\u8FC7\u9489\u9489\u63A5\u6536\u544A\u8B66\u4FE1\u606F\u3002\u540C\u65F6AlertManager\u8FD8\u63D0\u4F9B\u4E86\u9759\u9ED8\u548C\u544A\u8B66\u6291\u5236\u673A\u5236\u6765\u5BF9\u544A\u8B66\u901A\u77E5\u884C\u4E3A\u8FDB\u884C\u4F18\u5316\u3002</p></blockquote><h2 id="\u914D\u7F6E-node-exporter-\u548C-prom" tabindex="-1">\u914D\u7F6E node-exporter \u548C Prom <a class="header-anchor" href="#\u914D\u7F6E-node-exporter-\u548C-prom" aria-hidden="true">#</a></h2><h3 id="\u914D\u7F6E-node-exporter" tabindex="-1">\u914D\u7F6E node-exporter <a class="header-anchor" href="#\u914D\u7F6E-node-exporter" aria-hidden="true">#</a></h3><p><code>node-exporter</code>\u662F\u6700\u57FA\u672C\u7684\u8282\u70B9\u76D1\u63A7\u5BA2\u6237\u7AEF\uFF0C\u8D1F\u8D23\u76D1\u63A7\u673A\u5668\u7684\u5404\u4E2A\u6307\u6807\uFF0C\u5305\u62EC\u8282\u70B9\u5B58\u6D3B\u3001CPU\u3001Mem\u3001Network\u3001IO \u7B49\u7B49\uFF0C\u65B9\u4FBF\u540E\u8FB9\u6F14\u793A <code>Alertmanager </code>\u62A5\u8B66\u65F6\u7684\u89E6\u53D1\u6761\u4EF6\uFF0C\u4F8B\u5982\u914D\u7F6E\u8282\u70B9\u5B58\u6D3B\u68C0\u6D4B\uFF0C\u5F53\u673A\u5668 Down \u65F6\uFF0C\u89E6\u53D1\u62A5\u8B66\u63A7\u5236\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u901A\u8FC7\u505C\u6B62 node-exporter \u6765\u6A21\u62DF\u5B9E\u73B0.</p><p>\u6240\u4EE5\u76F4\u63A5\u542F\u52A8\u5373\u53EF\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run --name node-exporter -d -p 9100:9100 prom/node-exporter</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run --name node-exporter -d -p 9100:9100 prom/node-exporter</span></span>
<span class="line"></span></code></pre></div><p>\u8BBF\u95EE\u6D4B\u8BD5\uFF1A<a href="http://127.0.0.1:9100" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9100</a></p><h3 id="\u914D\u7F6E-prom" tabindex="-1">\u914D\u7F6E Prom <a class="header-anchor" href="#\u914D\u7F6E-prom" aria-hidden="true">#</a></h3><p>\u7F16\u8F91 Prometheus \u914D\u7F6E\u6587\u4EF6<code>prometheus.yml</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">global:</span></span>
<span class="line"><span style="color:#DBD7CA;">  scrape_interval:     15s </span></span>
<span class="line"><span style="color:#DBD7CA;">  evaluation_interval: 15s  </span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># scrape_timeout is set to the global default (10s).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># -------------------------------------</span></span>
<span class="line"><span style="color:#758575;"># Alertmanager configuration</span></span>
<span class="line"><span style="color:#DBD7CA;">alerting:</span></span>
<span class="line"><span style="color:#DBD7CA;">  alertmanagers:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - static_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">    - targets:</span></span>
<span class="line"><span style="color:#DBD7CA;">      - 172.16.1.132:9093</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rule_files:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - </span><span style="color:#C98A7D;">&quot;/etc/prometheus/rules/*.rules&quot;</span></span>
<span class="line"><span style="color:#758575;"># -------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">scrape_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - job_name: </span><span style="color:#C98A7D;">&#39;prometheus&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    static_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">    - targets: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;172.16.1.132:9090&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">      labels:</span></span>
<span class="line"><span style="color:#DBD7CA;">        instance: prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;">        service: prometheus-service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  - job_name: </span><span style="color:#C98A7D;">&#39;node-exporter&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    file_sd_configs:		</span><span style="color:#758575;"># \u4F7F\u7528\u8BE5\u6A21\u5757\u52A8\u6001\u88C5\u8F7D\uFF0C\u800C\u65E0\u9700\u6BCF\u6B21\u91CD\u542Fprom\u670D\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">      - files: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;/etc/prometheus/nodes/*.json&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">global:</span></span>
<span class="line"><span style="color:#393A34;">  scrape_interval:     15s </span></span>
<span class="line"><span style="color:#393A34;">  evaluation_interval: 15s  </span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># scrape_timeout is set to the global default (10s).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># -------------------------------------</span></span>
<span class="line"><span style="color:#A0ADA0;"># Alertmanager configuration</span></span>
<span class="line"><span style="color:#393A34;">alerting:</span></span>
<span class="line"><span style="color:#393A34;">  alertmanagers:</span></span>
<span class="line"><span style="color:#393A34;">  - static_configs:</span></span>
<span class="line"><span style="color:#393A34;">    - targets:</span></span>
<span class="line"><span style="color:#393A34;">      - 172.16.1.132:9093</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rule_files:</span></span>
<span class="line"><span style="color:#393A34;">  - </span><span style="color:#B56959;">&quot;/etc/prometheus/rules/*.rules&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># -------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">scrape_configs:</span></span>
<span class="line"><span style="color:#393A34;">  - job_name: </span><span style="color:#B56959;">&#39;prometheus&#39;</span></span>
<span class="line"><span style="color:#393A34;">    static_configs:</span></span>
<span class="line"><span style="color:#393A34;">    - targets: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;172.16.1.132:9090&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">      labels:</span></span>
<span class="line"><span style="color:#393A34;">        instance: prometheus</span></span>
<span class="line"><span style="color:#393A34;">        service: prometheus-service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  - job_name: </span><span style="color:#B56959;">&#39;node-exporter&#39;</span></span>
<span class="line"><span style="color:#393A34;">    file_sd_configs:		</span><span style="color:#A0ADA0;"># \u4F7F\u7528\u8BE5\u6A21\u5757\u52A8\u6001\u88C5\u8F7D\uFF0C\u800C\u65E0\u9700\u6BCF\u6B21\u91CD\u542Fprom\u670D\u52A1</span></span>
<span class="line"><span style="color:#393A34;">      - files: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;/etc/prometheus/nodes/*.json&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u521B\u5EFA<code>node-exporter.json</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#C98A7D;">&quot;targets&quot;</span><span style="color:#DBD7CA;">: </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;172.16.1.132:9100&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#C98A7D;">&quot;labels&quot;</span><span style="color:#DBD7CA;">: </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;instance&quot;</span><span style="color:#DBD7CA;">: </span><span style="color:#C98A7D;">&quot;vm-172.16.1.132&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;service&quot;</span><span style="color:#DBD7CA;">: </span><span style="color:#C98A7D;">&quot;node-service&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B56959;">&quot;targets&quot;</span><span style="color:#393A34;">: </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;172.16.1.132:9100&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B56959;">&quot;labels&quot;</span><span style="color:#393A34;">: </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;instance&quot;</span><span style="color:#393A34;">: </span><span style="color:#B56959;">&quot;vm-172.16.1.132&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;service&quot;</span><span style="color:#393A34;">: </span><span style="color:#B56959;">&quot;node-service&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8 Prom \u5BB9\u5668\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run -d --name prometheus -p 9090:9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ prom/prometheus</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run -d --name prometheus -p 9090:9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ prom/prometheus</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B<code>node-exporter</code>\u548C<code>prometheus</code>\u5065\u5EB7\u72B6\u51B5\uFF1A<a href="http://127.0.0.1:9090/targets" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9090/targets</a></p><h2 id="\u914D\u7F6E-alertmanager" tabindex="-1">\u914D\u7F6E AlertManager <a class="header-anchor" href="#\u914D\u7F6E-alertmanager" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u542F\u52A8<code>AlertManager</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run --name alertmanager -d -p 9093:9093 prom/alertmanager</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run --name alertmanager -d -p 9093:9093 prom/alertmanager</span></span>
<span class="line"></span></code></pre></div><p>\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE <a href="http://lcoalhost:9093" target="_blank" rel="noopener noreferrer">http://lcoalhost:9093</a> \u8FDB\u884C\u6D4B\u8BD5\uFF0C\u8FD9\u91CC\u6CA1\u6709\u62A5\u8B66\u89C4\u5219\uFF0C\u6240\u6709\u6CA1\u6709\u5185\u5BB9\u5448\u73B0\uFF0C</p><p>\u7F16\u8F91 AlertManager \u7684\u914D\u7F6E\u6587\u4EF6<code>alertmanager.yml</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">global:			</span><span style="color:#758575;"># \u5168\u5C40\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">  resolve_timeout: 5m</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_from: </span><span style="color:#C98A7D;">&#39;dai15628960878@163.com&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_smarthost: </span><span style="color:#C98A7D;">&#39;smtp.163.com:465&#39;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># 163\u90AE\u7BB1\u7684SMTP SSL\u7AEF\u53E3\u4E3A465/994\uFF0C\u975ESSL\u4E3A25</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_auth_username: </span><span style="color:#C98A7D;">&#39;dai15628960878@163.com&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_auth_password: </span><span style="color:#C98A7D;">&#39;xxxxxxxxxxxxxxx&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_require_tls: </span><span style="color:#E0A569;">false</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u662F\u5426\u9700\u8981tls\u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_hello: </span><span style="color:#C98A7D;">&#39;163.com&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">route:</span></span>
<span class="line"><span style="color:#DBD7CA;">  group_by: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;alertname&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  group_wait: 5s</span></span>
<span class="line"><span style="color:#DBD7CA;">  group_interval: 5s</span></span>
<span class="line"><span style="color:#DBD7CA;">  repeat_interval: 5m</span></span>
<span class="line"><span style="color:#DBD7CA;">  receiver: </span><span style="color:#C98A7D;">&#39;email&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">receivers:</span></span>
<span class="line"><span style="color:#DBD7CA;">- name: </span><span style="color:#C98A7D;">&#39;email&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">  email_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - to: </span><span style="color:#C98A7D;">&#39;agou-ops@foxmail.com&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    send_resolved: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">inhibit_rules:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - source_match:</span></span>
<span class="line"><span style="color:#DBD7CA;">      severity: </span><span style="color:#C98A7D;">&#39;critical&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    target_match:</span></span>
<span class="line"><span style="color:#DBD7CA;">      severity: </span><span style="color:#C98A7D;">&#39;warning&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    equal: </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;alertname&#39;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&#39;dev&#39;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&#39;instance&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">global:			</span><span style="color:#A0ADA0;"># \u5168\u5C40\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">  resolve_timeout: 5m</span></span>
<span class="line"><span style="color:#393A34;">  smtp_from: </span><span style="color:#B56959;">&#39;dai15628960878@163.com&#39;</span></span>
<span class="line"><span style="color:#393A34;">  smtp_smarthost: </span><span style="color:#B56959;">&#39;smtp.163.com:465&#39;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># 163\u90AE\u7BB1\u7684SMTP SSL\u7AEF\u53E3\u4E3A465/994\uFF0C\u975ESSL\u4E3A25</span></span>
<span class="line"><span style="color:#393A34;">  smtp_auth_username: </span><span style="color:#B56959;">&#39;dai15628960878@163.com&#39;</span></span>
<span class="line"><span style="color:#393A34;">  smtp_auth_password: </span><span style="color:#B56959;">&#39;xxxxxxxxxxxxxxx&#39;</span></span>
<span class="line"><span style="color:#393A34;">  smtp_require_tls: </span><span style="color:#B58451;">false</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u662F\u5426\u9700\u8981tls\u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#393A34;">  smtp_hello: </span><span style="color:#B56959;">&#39;163.com&#39;</span></span>
<span class="line"><span style="color:#393A34;">route:</span></span>
<span class="line"><span style="color:#393A34;">  group_by: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;alertname&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  group_wait: 5s</span></span>
<span class="line"><span style="color:#393A34;">  group_interval: 5s</span></span>
<span class="line"><span style="color:#393A34;">  repeat_interval: 5m</span></span>
<span class="line"><span style="color:#393A34;">  receiver: </span><span style="color:#B56959;">&#39;email&#39;</span></span>
<span class="line"><span style="color:#393A34;">receivers:</span></span>
<span class="line"><span style="color:#393A34;">- name: </span><span style="color:#B56959;">&#39;email&#39;</span></span>
<span class="line"><span style="color:#393A34;">  email_configs:</span></span>
<span class="line"><span style="color:#393A34;">  - to: </span><span style="color:#B56959;">&#39;agou-ops@foxmail.com&#39;</span></span>
<span class="line"><span style="color:#393A34;">    send_resolved: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">inhibit_rules:</span></span>
<span class="line"><span style="color:#393A34;">  - source_match:</span></span>
<span class="line"><span style="color:#393A34;">      severity: </span><span style="color:#B56959;">&#39;critical&#39;</span></span>
<span class="line"><span style="color:#393A34;">    target_match:</span></span>
<span class="line"><span style="color:#393A34;">      severity: </span><span style="color:#B56959;">&#39;warning&#39;</span></span>
<span class="line"><span style="color:#393A34;">    equal: </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;alertname&#39;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&#39;dev&#39;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&#39;instance&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\u5BB9\u5668\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run -d --name alertmanager -p 9093:9093 -v /home/prom/alertmanager.yml:/etc/alertmanager/alertmanager.yml -v /home/prom/rules/:/etc/prometheus/rules/ prom/alertmanager</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run -d --name alertmanager -p 9093:9093 -v /home/prom/alertmanager.yml:/etc/alertmanager/alertmanager.yml -v /home/prom/rules/:/etc/prometheus/rules/ prom/alertmanager</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E-prom-\u7684\u62A5\u8B66\u89C4\u5219" tabindex="-1">\u914D\u7F6E Prom \u7684\u62A5\u8B66\u89C4\u5219 <a class="header-anchor" href="#\u914D\u7F6E-prom-\u7684\u62A5\u8B66\u89C4\u5219" aria-hidden="true">#</a></h2><p>\u5728 Prometheus \u914D\u7F6E AlertManager \u670D\u52A1\u5730\u5740\u4EE5\u53CA\u544A\u8B66\u89C4\u5219\uFF0C\u65B0\u5EFA\u62A5\u8B66\u89C4\u5219\u6587\u4EF6<code>/home/prom/rules/ test_alert.rules</code> \u5982\u4E0B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">groups:</span></span>
<span class="line"><span style="color:#DBD7CA;">- name: node-up</span></span>
<span class="line"><span style="color:#DBD7CA;">  rules:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - alert: node-up</span></span>
<span class="line"><span style="color:#DBD7CA;">    expr: up{job=</span><span style="color:#C98A7D;">&quot;node-exporter&quot;</span><span style="color:#DBD7CA;">} == 0</span></span>
<span class="line"><span style="color:#DBD7CA;">    for: 15s</span></span>
<span class="line"><span style="color:#DBD7CA;">    labels:</span></span>
<span class="line"><span style="color:#DBD7CA;">      severity: 1</span></span>
<span class="line"><span style="color:#DBD7CA;">      team: node</span></span>
<span class="line"><span style="color:#DBD7CA;">    annotations:</span></span>
<span class="line"><span style="color:#DBD7CA;">      summary: </span><span style="color:#C98A7D;">&quot;\u3010\u3010 </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">labels.instance \u3011\u3011 \u5DF2\u505C\u6B62\u8FD0\u884C\u8D85\u8FC7 15s\uFF01&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">groups:</span></span>
<span class="line"><span style="color:#393A34;">- name: node-up</span></span>
<span class="line"><span style="color:#393A34;">  rules:</span></span>
<span class="line"><span style="color:#393A34;">  - alert: node-up</span></span>
<span class="line"><span style="color:#393A34;">    expr: up{job=</span><span style="color:#B56959;">&quot;node-exporter&quot;</span><span style="color:#393A34;">} == 0</span></span>
<span class="line"><span style="color:#393A34;">    for: 15s</span></span>
<span class="line"><span style="color:#393A34;">    labels:</span></span>
<span class="line"><span style="color:#393A34;">      severity: 1</span></span>
<span class="line"><span style="color:#393A34;">      team: node</span></span>
<span class="line"><span style="color:#393A34;">    annotations:</span></span>
<span class="line"><span style="color:#393A34;">      summary: </span><span style="color:#B56959;">&quot;\u3010\u3010 </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">labels.instance \u3011\u3011 \u5DF2\u505C\u6B62\u8FD0\u884C\u8D85\u8FC7 15s\uFF01&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\uFF0C\u4FEE\u6539 <code>prometheus.yml</code> \u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0 rules \u89C4\u5219\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF08\u4E0A\u9762\u5DF2\u7ECF\u4FEE\u6539\u8FC7\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># Alertmanager configuration</span></span>
<span class="line"><span style="color:#DBD7CA;">alerting:</span></span>
<span class="line"><span style="color:#DBD7CA;">  alertmanagers:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - static_configs:</span></span>
<span class="line"><span style="color:#DBD7CA;">    - targets:</span></span>
<span class="line"><span style="color:#DBD7CA;">      - 172.16.1.132:9093</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rule_files:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - </span><span style="color:#C98A7D;">&quot;/etc/prometheus/rules/*.rules&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># Alertmanager configuration</span></span>
<span class="line"><span style="color:#393A34;">alerting:</span></span>
<span class="line"><span style="color:#393A34;">  alertmanagers:</span></span>
<span class="line"><span style="color:#393A34;">  - static_configs:</span></span>
<span class="line"><span style="color:#393A34;">    - targets:</span></span>
<span class="line"><span style="color:#393A34;">      - 172.16.1.132:9093</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rule_files:</span></span>
<span class="line"><span style="color:#393A34;">  - </span><span style="color:#B56959;">&quot;/etc/prometheus/rules/*.rules&quot;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\u5BB9\u5668\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run -d --name prometheus -p 9090:9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ -v           /home/prom/rules/:/etc/prometheus/rules/ prom/prometheus</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run -d --name prometheus -p 9090:9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ -v           /home/prom/rules/:/etc/prometheus/rules/ prom/prometheus</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u62A5\u8B66\u89C4\u5219<code>rules</code>\uFF1A</p><p><img src="http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-1.png" alt=""></p><p>\u8FD9\u91CC\u8BF4\u660E\u4E00\u4E0B Prometheus Alert \u544A\u8B66\u72B6\u6001\u6709\u4E09\u79CD\u72B6\u6001\uFF1A<code>Inactive</code>\u3001<code>Pending</code>\u3001<code>Firing</code></p><ul><li><code>Inactive</code>\uFF1A\u975E\u6D3B\u52A8\u72B6\u6001\uFF0C\u8868\u793A\u6B63\u5728\u76D1\u63A7\uFF0C\u4F46\u662F\u8FD8\u672A\u6709\u4EFB\u4F55\u8B66\u62A5\u89E6\u53D1\u3002</li><li><code>Pending</code>\uFF1A\u8868\u793A\u8FD9\u4E2A\u8B66\u62A5\u5FC5\u987B\u88AB\u89E6\u53D1\u3002\u7531\u4E8E\u8B66\u62A5\u53EF\u4EE5\u88AB\u5206\u7EC4\u3001\u538B\u6291/\u6291\u5236\u6216\u9759\u9ED8/\u9759\u97F3\uFF0C\u6240\u4EE5\u7B49\u5F85\u9A8C\u8BC1\uFF0C\u4E00\u65E6\u6240\u6709\u7684\u9A8C\u8BC1\u90FD\u901A\u8FC7\uFF0C\u5219\u5C06\u8F6C\u5230 Firing \u72B6\u6001\u3002</li><li><code>Firing</code>\uFF1A\u5C06\u8B66\u62A5\u53D1\u9001\u5230 AlertManager\uFF0C\u5B83\u5C06\u6309\u7167\u914D\u7F6E\u5C06\u8B66\u62A5\u7684\u53D1\u9001\u7ED9\u6240\u6709\u63A5\u6536\u8005\u3002\u4E00\u65E6\u8B66\u62A5\u89E3\u9664\uFF0C\u5219\u5C06\u72B6\u6001\u8F6C\u5230 Inactive\uFF0C\u5982\u6B64\u5FAA\u73AF\u3002</li></ul><p>\u624B\u52A8\u505C\u6389<code>node-exporter</code>\u5BB9\u5668\uFF0C\u6D4B\u8BD5\u89E6\u53D1\u8B66\u544A\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker stop node-exporter</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker stop node-exporter</span></span>
<span class="line"></span></code></pre></div><p>\u5728 Prom web\u9762\u677F\u4E2D\u67E5\u770B\uFF1A</p><p><img src="http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-2.png" alt=""></p><p>\u5728<code>alertmanager</code>web\u9762\u677F\u4E2D\u67E5\u770B\uFF1A</p><p><img src="http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-3.png" alt=""></p><p>\u5DF2\u6210\u529F\u6536\u5230\u62A5\u8B66\u90AE\u4EF6\uFF1A</p><p><img src="http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-4.png" alt=""></p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>alert configuration\uFF1A<a href="https://prometheus.io/docs/alerting/configuration/" target="_blank" rel="noopener noreferrer">https://prometheus.io/docs/alerting/configuration/</a></li><li>\u52A8\u6001config\u6587\u4EF6\uFF1A<a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config" target="_blank" rel="noopener noreferrer">https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config</a></li></ul>`,48),o=[l];function r(t,c,i,y,m,d){return a(),n("div",null,o)}var D=s(p,[["render",r]]);export{u as __pageData,D as default};
