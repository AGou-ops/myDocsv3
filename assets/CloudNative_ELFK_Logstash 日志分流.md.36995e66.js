import{_ as s,o as n,c as a,a as t}from"./app.1e6146c3.js";const d=JSON.parse('{"title":"Logstash \u65E5\u5FD7\u5206\u6D41","description":"","frontmatter":{},"headers":[],"relativePath":"CloudNative/ELFK/Logstash \u65E5\u5FD7\u5206\u6D41.md","lastUpdated":1657272051000}'),p={name:"CloudNative/ELFK/Logstash \u65E5\u5FD7\u5206\u6D41.md"},l=t(`<h1 id="logstash-\u65E5\u5FD7\u5206\u6D41" tabindex="-1">Logstash \u65E5\u5FD7\u5206\u6D41 <a class="header-anchor" href="#logstash-\u65E5\u5FD7\u5206\u6D41" aria-hidden="true">#</a></h1><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C98A7D;">1.\u914D\u7F6Elogstash</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#C98A7D;">root@elkstack-1 ~</span><span style="color:#858585;">]</span><span style="color:#C98A7D;">\\# vim /data/elk/logstash/conf.d/nginx_tomcat.conf</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#C98A7D;">input {</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#C98A7D;">file {</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">path =&gt; &quot;/var/log/test/nginx.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">add_field =&gt; {</span></span>
<span class="line"><span style="color:#DBD7CA;">			</span><span style="color:#C98A7D;">&quot;app&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">=&gt; &quot;nginx&quot;</span><span style="color:#DBD7CA;">				</span><span style="color:#758575;">#\u641C\u96C6nginx\u7684\u65E5\u5FD7\uFF0C\u5728\u65E5\u5FD7\u4E2D\u589E\u52A0\u4E00\u4E2Aapp=nginx\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">		}</span></span>
<span class="line"><span style="color:#DBD7CA;">	}</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#C98A7D;">file {</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">path =&gt; &quot;/var/log/test/tomcat.log&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">add_field =&gt; {</span></span>
<span class="line"><span style="color:#DBD7CA;">			</span><span style="color:#C98A7D;">&quot;app&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">=&gt; &quot;tomcat&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">		}</span></span>
<span class="line"><span style="color:#DBD7CA;">	}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">filter {</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#C98A7D;">if [app] in [&quot;nginx&quot;,&quot;tengine&quot;] {</span><span style="color:#DBD7CA;">			</span><span style="color:#758575;">#\u5224\u65ADapp\u7684\u5B57\u6BB5\u503C\u4E3Anginx\u6216\u8005tengine</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">mutate {</span><span style="color:#DBD7CA;">						</span><span style="color:#758575;">#\u5B9A\u4E49mutate</span></span>
<span class="line"><span style="color:#DBD7CA;">			</span><span style="color:#C98A7D;">add_field =&gt; {</span><span style="color:#DBD7CA;">					</span><span style="color:#758575;">#\u589E\u52A0\u4E00\u4E2A\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">				</span><span style="color:#C98A7D;">&quot;[@metadata][target_index]&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">=&gt; &quot;nginx-app-%{+YYYY.MM.dd}&quot;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;">#\u58F0\u660E\u5B57\u6BB5\u662F\u5143\u6570\u636E\uFF0C\u5B57\u6BB5\u540D\u4E3Atarget_index\uFF0C\u503C\u4E3Anginx\u65E5\u5FD7\u5B58\u50A8\u7684\u7D22\u5F15\u5E93\u540D\u79F0</span></span>
<span class="line"><span style="color:#DBD7CA;">			}</span></span>
<span class="line"><span style="color:#DBD7CA;">		}</span></span>
<span class="line"><span style="color:#DBD7CA;">	}</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#C98A7D;">else if [app] == &quot;tomcat&quot; {</span><span style="color:#DBD7CA;">					</span><span style="color:#758575;">#\u5224\u65ADapp\u7684\u5B57\u6BB5\u503C\u4E3Atomcat</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">mutate {</span><span style="color:#DBD7CA;">						</span><span style="color:#758575;">#\u5B9A\u4E49mutate</span></span>
<span class="line"><span style="color:#DBD7CA;">			</span><span style="color:#C98A7D;">add_field =&gt; {</span><span style="color:#DBD7CA;">					</span><span style="color:#758575;">#\u589E\u52A0\u4E00\u4E2A\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#DBD7CA;">				</span><span style="color:#C98A7D;">&quot;[@metadata][target_index]&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">=&gt; &quot;tomcat-app-%{+YYYY.MM.dd}&quot;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;">#\u58F0\u660E\u5B57\u6BB5\u662F\u5143\u6570\u636E\uFF0C\u5B57\u6BB5\u540D\u4E3Atarget_index\uFF0C\u503C\u4E3Atomcat\u65E5\u5FD7\u5B58\u50A8\u7684\u7D22\u5F15\u5E93\u540D\u79F0</span></span>
<span class="line"><span style="color:#DBD7CA;">			}</span></span>
<span class="line"><span style="color:#DBD7CA;">		}</span></span>
<span class="line"><span style="color:#DBD7CA;">	}	</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#C98A7D;">else {</span><span style="color:#DBD7CA;">						</span><span style="color:#758575;">#\u5982\u679C\u6240\u6709\u6761\u4EF6\u90FD\u4E0D\u6EE1\u8DB3\uFF0C\u90A3\u4E48\u5C31\u5B58\u50A8\u5230\u4E0B\u9762\u7684\u8FD9\u4E2A\u7D22\u5F15\u5E93</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">mutate {</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">add_field =&gt; {</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#C98A7D;">&quot;[@metadata][target_index]&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">=&gt; &quot;unknown-app-%{+YYYY.MM.dd}&quot;</span><span style="color:#DBD7CA;">			</span><span style="color:#758575;">#\u503C\u4E3Aunknown</span></span>
<span class="line"><span style="color:#DBD7CA;">            }</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"><span style="color:#DBD7CA;">	}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">output {</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#C98A7D;">elasticsearch {</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">hosts =&gt; [&quot;192.168.20.11:9200&quot;,&quot;192.168.20.12:9200&quot;,&quot;192.168.20.13:9200&quot;]</span></span>
<span class="line"><span style="color:#DBD7CA;">		</span><span style="color:#C98A7D;">index =&gt;  &quot;%{[@metadata][target_index]}&quot;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;">#\u5F15\u7528\u5143\u6570\u636Etarget_index\uFF0C\u5C06\u5BF9\u5E94\u7684\u65E5\u5FD7\u5B58\u50A8\u5230\u5BF9\u5E94\u7684\u7D22\u5F15\u5E93\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">	}</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">2.\u91CD\u542Flogstash</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#C98A7D;">root@elkstack-1 conf.d</span><span style="color:#858585;">]</span><span style="color:#C98A7D;">\\# systemctl restart logstash</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B56959;">1.\u914D\u7F6Elogstash</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">root@elkstack-1 ~</span><span style="color:#8E8F8B;">]</span><span style="color:#B56959;">\\# vim /data/elk/logstash/conf.d/nginx_tomcat.conf</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#B56959;">input {</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B56959;">file {</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">path =&gt; &quot;/var/log/test/nginx.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">add_field =&gt; {</span></span>
<span class="line"><span style="color:#393A34;">			</span><span style="color:#B56959;">&quot;app&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">=&gt; &quot;nginx&quot;</span><span style="color:#393A34;">				</span><span style="color:#A0ADA0;">#\u641C\u96C6nginx\u7684\u65E5\u5FD7\uFF0C\u5728\u65E5\u5FD7\u4E2D\u589E\u52A0\u4E00\u4E2Aapp=nginx\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">		}</span></span>
<span class="line"><span style="color:#393A34;">	}</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B56959;">file {</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">path =&gt; &quot;/var/log/test/tomcat.log&quot;</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">add_field =&gt; {</span></span>
<span class="line"><span style="color:#393A34;">			</span><span style="color:#B56959;">&quot;app&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">=&gt; &quot;tomcat&quot;</span></span>
<span class="line"><span style="color:#393A34;">		}</span></span>
<span class="line"><span style="color:#393A34;">	}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">filter {</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B56959;">if [app] in [&quot;nginx&quot;,&quot;tengine&quot;] {</span><span style="color:#393A34;">			</span><span style="color:#A0ADA0;">#\u5224\u65ADapp\u7684\u5B57\u6BB5\u503C\u4E3Anginx\u6216\u8005tengine</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">mutate {</span><span style="color:#393A34;">						</span><span style="color:#A0ADA0;">#\u5B9A\u4E49mutate</span></span>
<span class="line"><span style="color:#393A34;">			</span><span style="color:#B56959;">add_field =&gt; {</span><span style="color:#393A34;">					</span><span style="color:#A0ADA0;">#\u589E\u52A0\u4E00\u4E2A\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">				</span><span style="color:#B56959;">&quot;[@metadata][target_index]&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">=&gt; &quot;nginx-app-%{+YYYY.MM.dd}&quot;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;">#\u58F0\u660E\u5B57\u6BB5\u662F\u5143\u6570\u636E\uFF0C\u5B57\u6BB5\u540D\u4E3Atarget_index\uFF0C\u503C\u4E3Anginx\u65E5\u5FD7\u5B58\u50A8\u7684\u7D22\u5F15\u5E93\u540D\u79F0</span></span>
<span class="line"><span style="color:#393A34;">			}</span></span>
<span class="line"><span style="color:#393A34;">		}</span></span>
<span class="line"><span style="color:#393A34;">	}</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B56959;">else if [app] == &quot;tomcat&quot; {</span><span style="color:#393A34;">					</span><span style="color:#A0ADA0;">#\u5224\u65ADapp\u7684\u5B57\u6BB5\u503C\u4E3Atomcat</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">mutate {</span><span style="color:#393A34;">						</span><span style="color:#A0ADA0;">#\u5B9A\u4E49mutate</span></span>
<span class="line"><span style="color:#393A34;">			</span><span style="color:#B56959;">add_field =&gt; {</span><span style="color:#393A34;">					</span><span style="color:#A0ADA0;">#\u589E\u52A0\u4E00\u4E2A\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#393A34;">				</span><span style="color:#B56959;">&quot;[@metadata][target_index]&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">=&gt; &quot;tomcat-app-%{+YYYY.MM.dd}&quot;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;">#\u58F0\u660E\u5B57\u6BB5\u662F\u5143\u6570\u636E\uFF0C\u5B57\u6BB5\u540D\u4E3Atarget_index\uFF0C\u503C\u4E3Atomcat\u65E5\u5FD7\u5B58\u50A8\u7684\u7D22\u5F15\u5E93\u540D\u79F0</span></span>
<span class="line"><span style="color:#393A34;">			}</span></span>
<span class="line"><span style="color:#393A34;">		}</span></span>
<span class="line"><span style="color:#393A34;">	}	</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B56959;">else {</span><span style="color:#393A34;">						</span><span style="color:#A0ADA0;">#\u5982\u679C\u6240\u6709\u6761\u4EF6\u90FD\u4E0D\u6EE1\u8DB3\uFF0C\u90A3\u4E48\u5C31\u5B58\u50A8\u5230\u4E0B\u9762\u7684\u8FD9\u4E2A\u7D22\u5F15\u5E93</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">mutate {</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">add_field =&gt; {</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B56959;">&quot;[@metadata][target_index]&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">=&gt; &quot;unknown-app-%{+YYYY.MM.dd}&quot;</span><span style="color:#393A34;">			</span><span style="color:#A0ADA0;">#\u503C\u4E3Aunknown</span></span>
<span class="line"><span style="color:#393A34;">            }</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"><span style="color:#393A34;">	}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">output {</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B56959;">elasticsearch {</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">hosts =&gt; [&quot;192.168.20.11:9200&quot;,&quot;192.168.20.12:9200&quot;,&quot;192.168.20.13:9200&quot;]</span></span>
<span class="line"><span style="color:#393A34;">		</span><span style="color:#B56959;">index =&gt;  &quot;%{[@metadata][target_index]}&quot;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;">#\u5F15\u7528\u5143\u6570\u636Etarget_index\uFF0C\u5C06\u5BF9\u5E94\u7684\u65E5\u5FD7\u5B58\u50A8\u5230\u5BF9\u5E94\u7684\u7D22\u5F15\u5E93\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">	}</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">2.\u91CD\u542Flogstash</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">root@elkstack-1 conf.d</span><span style="color:#8E8F8B;">]</span><span style="color:#B56959;">\\# systemctl restart logstash</span></span>
<span class="line"></span></code></pre></div>`,2),o=[l];function e(c,r,y,A,i,D){return n(),a("div",null,o)}var B=s(p,[["render",e]]);export{d as __pageData,B as default};
