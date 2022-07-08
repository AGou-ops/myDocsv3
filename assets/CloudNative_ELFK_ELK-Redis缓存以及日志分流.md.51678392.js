import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"input {","description":"","frontmatter":{},"headers":[],"relativePath":"CloudNative/ELFK/ELK-Redis\u7F13\u5B58\u4EE5\u53CA\u65E5\u5FD7\u5206\u6D41.md","lastUpdated":1657272051000}'),p={name:"CloudNative/ELFK/ELK-Redis\u7F13\u5B58\u4EE5\u53CA\u65E5\u5FD7\u5206\u6D41.md"},o=l(`<p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=.png" alt="\u914D\u7F6Elogstash\u4ECEredis\u8BFB\u53D6filebeat\u6536\u96C6\u7684\u65E5\u5FD7\uFF08\u4E0A\uFF09_elasticsearch"></p><p>\u5B89\u88C5\u6B65\u9AA4\u5728\u6B64\u4E0D\u518D\u8D58\u8FF0\u3002</p><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li><p>logstash\u5E76\u4E0D\u662F\u5168\u90E8\u6536\u96C6\u5B8C\u5728\u4F20\u8F93\u7ED9es\u96C6\u7FA4\uFF0C\u800C\u662F\u6536\u96C6\u8FC7\u6765\u4E00\u6761\u5C31\u4F20\u8F93\u7ED9es\u4E00\u6761\uFF0C\u8FD9\u6837\u4E00\u6837\u5C31\u51CF\u8F7B\u4E86es\u7684\u538B\u529B</p></li><li><p>\u5E38\u89C4\u7684\u65E5\u5FD7\u6536\u96C6\u65B9\u5F0F\u90FD\u662F\u7531filebeat\u6536\u96C6\u5B8C\u76F4\u63A5\u8F93\u51FA\u7ED9es\u96C6\u7FA4\uFF0C\u5982\u679C\u5F53\u540E\u7AEF\u5E94\u7528\u8BBF\u95EE\u91CF\u5927\uFF0C\u4EA7\u751F\u7684\u65E5\u5FD7\u4E5F\u7279\u522B\u5DE8\u5927\uFF0C\u8FD9\u65F6\u518D\u7531filebeat\u6536\u96C6\u65E5\u5FD7\u76F4\u63A5\u4F20\u8F93\u7ED9es\uFF0C\u4F1A\u7ED9es\u5E26\u6765\u7279\u522B\u5927\u7684\u538B\u529B\uFF0C\u5982\u679Ces\u8FD9\u65F6\u6302\u6389\uFF0Cfilebeat\u4F9D\u7136\u5728\u6536\u96C6\u65E5\u5FD7\uFF0C\u8FD9\u65F6filebeat\u627E\u4E0D\u5230es\u96C6\u7FA4\uFF0C\u5219\u4F1A\u628A\u6536\u96C6\u6765\u7684\u65E5\u5FD7\u4E22\u5F03</p><p>\u9488\u5BF9\u65E5\u5FD7\u91CF\u5927\u7684\u95EE\u9898\u53EF\u4EE5\u5728es\u96C6\u7FA4\u524D\u9762\u589E\u52A0redis\u548Clogstash\uFF0Cfilebeat\u6536\u96C6\u5B8C\u65E5\u5FD7\u4EA4\u7ED9redis\uFF0C\u7531logstash\u4ECEredis\u4E2D\u8BFB\u53D6\u6536\u96C6\u6765\u7684\u65E5\u5FD7\u6570\u636E\u4F20\u8F93\u7ED9es\u96C6\u7FA4\uFF0C\u6700\u7EC8\u5728kibana\u4E0A\u8FDB\u884C\u5C55\u793A</p><p>logstash\u53EA\u9700\u8981\u90E8\u7F72\u4E00\u53F0\u5373\u53EF\uFF0C\u53EA\u662F\u7528\u4E8E\u5C06redis\u6536\u96C6\u6765\u7684\u65E5\u5FD7\u4F20\u8F93\u7ED9es\u96C6\u7FA4</p></li><li><p>\u7531\u4E8Eredis\u5C5E\u4E8E\u7F13\u5B58\u6570\u636E\u5E93\uFF0C\u5F53logstash\u628A\u6570\u636E\u4ECEredis\u4E0A\u53D6\u5B8C\u540E\uFF0C\u4F1A\u81EA\u52A8\u628Akey\u5220\u6389</p></li></ul><p>\u914D\u7F6E<code>filebeat</code>\u6536\u96C6\u65E5\u5FD7\u5E76\u81EA\u5B9A\u4E49redis key:</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#C98A7D;">root@nginx ~</span><span style="color:#858585;">]</span><span style="color:#C98A7D;">\\# vim /etc/filebeat/filebeat.yml</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#758575;">#\u5B9A\u4E49\u6536\u96C6\u4EC0\u4E48\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#429988;">filebeat.inputs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">type</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">enabled</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">paths</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/var/log/nginx/www_access.log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.keys_under_root</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.overwrite_keys</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">tags</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;nginx-www&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">type</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">enabled</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">paths</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/var/log/nginx/bbs_access.log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.keys_under_root</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.overwrite_keys</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">tags</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;nginx-bbs&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u5B9A\u4E49modules\u6A21\u5757\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#429988;">filebeat.config.modules</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">path</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">\${path.config}/modules.d/*.yml</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">reload.enabled</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u6307\u5B9Akibana\u5730\u5740</span></span>
<span class="line"><span style="color:#429988;">setup.kibana</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">host</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;192.168.81.210:5601&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u5B9A\u4E49redis\u96C6\u7FA4\u5730\u5740\u4EE5\u53CA\u5B9A\u4E49\u7D22\u5F15\u540D</span></span>
<span class="line"><span style="color:#429988;">output.redis</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">hosts</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.220:6379&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;">#key: &quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">keys</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">key</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">when.contains</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">tags</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">key</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-bbs&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">when.contains</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">tags</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-bbs&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">db</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">timeout</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">setup.template.name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx&quot;</span></span>
<span class="line"><span style="color:#429988;">setup.template.pattern</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-*&quot;</span></span>
<span class="line"><span style="color:#429988;">setup.template.enabled</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"><span style="color:#429988;">setup.template.overwrite</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#C98A7D;">root@nginx ~</span><span style="color:#858585;">]</span><span style="color:#C98A7D;">\\# systemctl restart filebeat</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">root@nginx ~</span><span style="color:#8E8F8B;">]</span><span style="color:#B56959;">\\# vim /etc/filebeat/filebeat.yml</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5B9A\u4E49\u6536\u96C6\u4EC0\u4E48\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#2F8A89;">filebeat.inputs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">type</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">paths</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/var/log/nginx/www_access.log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.keys_under_root</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.overwrite_keys</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">tags</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;nginx-www&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">type</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">paths</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/var/log/nginx/bbs_access.log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.keys_under_root</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.overwrite_keys</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">tags</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;nginx-bbs&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u5B9A\u4E49modules\u6A21\u5757\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#2F8A89;">filebeat.config.modules</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">path</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\${path.config}/modules.d/*.yml</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">reload.enabled</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">false</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u6307\u5B9Akibana\u5730\u5740</span></span>
<span class="line"><span style="color:#2F8A89;">setup.kibana</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">host</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;192.168.81.210:5601&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u5B9A\u4E49redis\u96C6\u7FA4\u5730\u5740\u4EE5\u53CA\u5B9A\u4E49\u7D22\u5F15\u540D</span></span>
<span class="line"><span style="color:#2F8A89;">output.redis</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">hosts</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.220:6379&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;">#key: &quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">keys</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">key</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">when.contains</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">tags</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">key</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-bbs&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">when.contains</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">tags</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-bbs&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">db</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">timeout</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">setup.template.name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx&quot;</span></span>
<span class="line"><span style="color:#2F8A89;">setup.template.pattern</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-*&quot;</span></span>
<span class="line"><span style="color:#2F8A89;">setup.template.enabled</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">false</span></span>
<span class="line"><span style="color:#2F8A89;">setup.template.overwrite</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">root@nginx ~</span><span style="color:#8E8F8B;">]</span><span style="color:#B56959;">\\# systemctl restart filebeat</span></span>
<span class="line"></span></code></pre></div><p>option2\uFF08\u5C06\u6240\u6709\u7684\u65E5\u5FD7\u90FD\u5B58\u5728\u4E8E\u540C\u4E00\u4E2Akey\u4E2D\uFF0C\u53EA\u7528tag\u6765\u6807\u8BC6\uFF09:</p><p>\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u51CF\u5C11\u5DE5\u4F5C\u91CF\uFF0C\u4E0D\u7136\u6BCF\u589E\u52A0\u4E00\u4E2A\u65E5\u5FD7\uFF0C\u5C31\u5F97\u5411filebeat\u4E2D\u589E\u52A0\u4E00\u5C0F\u6BB5\u914D\u7F6E\uFF0C\u4E0D\u662F\u5F88\u65B9\u4FBF\uFF1B</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#C98A7D;">root@nginx /etc/filebeat</span><span style="color:#858585;">]</span><span style="color:#C98A7D;">\\# vim filebeat.yml</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#758575;">#\u5B9A\u4E49\u6536\u96C6\u4EC0\u4E48\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#429988;">filebeat.inputs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">type</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">enabled</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">paths</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/var/log/nginx/www_access.log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.keys_under_root</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.overwrite_keys</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">tags</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;nginx-www&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">type</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">enabled</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">paths</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">/var/log/nginx/bbs_access.log</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.keys_under_root</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">json.overwrite_keys</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">tags</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;nginx-bbs&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#\u5B9A\u4E49redis\u96C6\u7FA4\u5730\u5740\u4EE5\u53CA\u5B9A\u4E49\u7D22\u5F15\u540D</span></span>
<span class="line"><span style="color:#429988;">output.redis</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">hosts</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;192.168.81.220:6379&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">key</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-all-key&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">db</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">timeout</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">setup.template.name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx&quot;</span></span>
<span class="line"><span style="color:#429988;">setup.template.pattern</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nginx-*&quot;</span></span>
<span class="line"><span style="color:#429988;">setup.template.enabled</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"><span style="color:#429988;">setup.template.overwrite</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">root@nginx /etc/filebeat</span><span style="color:#8E8F8B;">]</span><span style="color:#B56959;">\\# vim filebeat.yml</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5B9A\u4E49\u6536\u96C6\u4EC0\u4E48\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#2F8A89;">filebeat.inputs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">type</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">paths</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/var/log/nginx/www_access.log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.keys_under_root</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.overwrite_keys</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">tags</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;nginx-www&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">type</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">paths</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">/var/log/nginx/bbs_access.log</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.keys_under_root</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">json.overwrite_keys</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">tags</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;nginx-bbs&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#\u5B9A\u4E49redis\u96C6\u7FA4\u5730\u5740\u4EE5\u53CA\u5B9A\u4E49\u7D22\u5F15\u540D</span></span>
<span class="line"><span style="color:#2F8A89;">output.redis</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">hosts</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;192.168.81.220:6379&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">key</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-all-key&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">db</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">timeout</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">setup.template.name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx&quot;</span></span>
<span class="line"><span style="color:#2F8A89;">setup.template.pattern</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nginx-*&quot;</span></span>
<span class="line"><span style="color:#2F8A89;">setup.template.enabled</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">false</span></span>
<span class="line"><span style="color:#2F8A89;">setup.template.overwrite</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E<code>logstash</code>\u6307\u5B9A\u4E0D\u540C\u7684\u7D22\u5F15\u5E93\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#C98A7D;">input {</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">redis {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">host =&gt; &quot;192.168.81.220&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">port =&gt; &quot;6379&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">db =&gt; &quot;0&quot;</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">key =&gt; &quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">data_type =&gt; &quot;list&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">redis {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">host =&gt; &quot;192.168.81.220&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">port =&gt; &quot;6379&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">db =&gt; &quot;0&quot;</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">key =&gt; &quot;nginx-bbs&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">data_type =&gt; &quot;list&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">output {</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">if &quot;nginx-www&quot; in [tags] {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">stdout{}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">elasticsearch {</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">index =&gt; &quot;nginx-www-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }   </span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">if &quot;nginx-bbs&quot; in [tags] {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">stdout{}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">elasticsearch {</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">index =&gt; &quot;nginx-bbs-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }   </span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#B56959;">input {</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">redis {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">host =&gt; &quot;192.168.81.220&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">port =&gt; &quot;6379&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">db =&gt; &quot;0&quot;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">key =&gt; &quot;nginx-www&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">data_type =&gt; &quot;list&quot;</span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">redis {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">host =&gt; &quot;192.168.81.220&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">port =&gt; &quot;6379&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">db =&gt; &quot;0&quot;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">key =&gt; &quot;nginx-bbs&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">data_type =&gt; &quot;list&quot;</span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">output {</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">if &quot;nginx-www&quot; in [tags] {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">stdout{}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">elasticsearch {</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">index =&gt; &quot;nginx-www-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#393A34;">    }   </span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">if &quot;nginx-bbs&quot; in [tags] {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">stdout{}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">elasticsearch {</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">index =&gt; &quot;nginx-bbs-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#393A34;">    }   </span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p>option2\uFF08\u53EA\u7559\u4E00\u4E2Akey\uFF0C\u540C\u6837\u6839\u636E\u6807\u7B7E\u4E0D\u540C\u6765\u521B\u5EFA\u4E0D\u540C\u7684\u7D22\u5F15\u5E93\uFF09:</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#</span></span>
<span class="line"><span style="color:#C98A7D;">input {</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">redis {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">host =&gt; &quot;192.168.81.220&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">port =&gt; &quot;6379&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">db =&gt; &quot;0&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">key =&gt; &quot;nginx-all-key&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">data_type =&gt; &quot;list&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">output {</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">if &quot;nginx-www&quot; in [tags] {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">stdout{}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">elasticsearch {</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">index =&gt; &quot;nginx-www-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#C98A7D;">if &quot;nginx-bbs&quot; in [tags] {</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">stdout{}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">elasticsearch {</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">index =&gt; &quot;nginx-bbs-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#</span></span>
<span class="line"><span style="color:#B56959;">input {</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">redis {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">host =&gt; &quot;192.168.81.220&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">port =&gt; &quot;6379&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">db =&gt; &quot;0&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">key =&gt; &quot;nginx-all-key&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">data_type =&gt; &quot;list&quot;</span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">output {</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">if &quot;nginx-www&quot; in [tags] {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">stdout{}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">elasticsearch {</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">index =&gt; &quot;nginx-www-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">if &quot;nginx-bbs&quot; in [tags] {</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">stdout{}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">elasticsearch {</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">hosts =&gt; &quot;http://192.168.81.210:9200&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">manage_template =&gt; false</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">index =&gt; &quot;nginx-bbs-access-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="color:#393A34;">    }</span></span>
<span class="line"><span style="color:#393A34;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function t(c,r,y,i,A,D){return n(),a("div",null,e)}var C=s(p,[["render",t]]);export{u as __pageData,C as default};
