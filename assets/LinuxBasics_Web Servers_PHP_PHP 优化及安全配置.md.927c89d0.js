import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"PHP \u4F18\u5316\u53CA\u5B89\u5168\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6\u4F18\u5316","slug":"\u914D\u7F6E\u6587\u4EF6\u4F18\u5316"},{"level":2,"title":"php-fpm \u914D\u7F6E\u4F18\u5316","slug":"php-fpm-\u914D\u7F6E\u4F18\u5316"},{"level":2,"title":"php-fpm \u76D1\u63A7\u9875\u9762","slug":"php-fpm-\u76D1\u63A7\u9875\u9762"},{"level":2,"title":"\u9644\u5F55\uFF1A\u6240\u7981\u7528\u7684\u5371\u9669\u51FD\u6570","slug":"\u9644\u5F55\uFF1A\u6240\u7981\u7528\u7684\u5371\u9669\u51FD\u6570"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Web Servers/PHP/PHP \u4F18\u5316\u53CA\u5B89\u5168\u914D\u7F6E.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Web Servers/PHP/PHP \u4F18\u5316\u53CA\u5B89\u5168\u914D\u7F6E.md"},o=p(`<h1 id="php-\u4F18\u5316\u53CA\u5B89\u5168\u914D\u7F6E" tabindex="-1">PHP \u4F18\u5316\u53CA\u5B89\u5168\u914D\u7F6E <a class="header-anchor" href="#php-\u4F18\u5316\u53CA\u5B89\u5168\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E\u6587\u4EF6\u4F18\u5316" tabindex="-1">\u914D\u7F6E\u6587\u4EF6\u4F18\u5316 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u4F18\u5316" aria-hidden="true">#</a></h2><p>php\u7A0B\u5E8F\u914D\u7F6E\u7BA1\u7406\u6587\u4EF6<code>/etc/php.ini</code>\uFF0C\u4E3B\u8981\u8C03\u6574\u65E5\u5FD7\u3001\u6587\u4EF6\u4E0A\u4F20\u3001\u7981\u6B62\u5371\u9669\u51FD\u6570\u3001\u5173\u95ED\u7248\u672C\u53F7\u663E\u793A\u7B49\u3002</p><div class="language-ini"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#;;;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#758575;"># Error  logging ;  #\u9519\u8BEF\u65E5\u5FD7\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#758575;">#;;;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#4D9375;">expose_php</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> Off                        </span><span style="color:#758575;"># \u5173\u95EDphp\u7248\u672C\u4FE1\u606F</span></span>
<span class="line"><span style="color:#4D9375;">display_error</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> Off                     </span><span style="color:#758575;"># \u5C4F\u5E55\u4E0D\u663E\u793A\u9519\u8BEF\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#4D9375;">error_reporting</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> E_ALL                 </span><span style="color:#758575;"># \u8BB0\u5F55PHP\u7684\u6BCF\u4E2A\u9519\u8BEF</span></span>
<span class="line"><span style="color:#4D9375;">log_errors</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> On                         </span><span style="color:#758575;"># \u5F00\u542F\u9519\u8BEF\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#4D9375;">error_log</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /var/log/php_error.log      </span><span style="color:#758575;"># \u9519\u8BEF\u65E5\u5FD7\u5199\u5165\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#4D9375;">date.timezone</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> Asia/Shanghai           </span><span style="color:#758575;"># \u8C03\u6574\u65F6\u533A,\u9ED8\u8BA4PRC</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#758575;"># File Uploads ;    #\u6587\u4EF6\u4E0A\u4F20\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#758575;">#;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#4D9375;">file_uploads</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> On           </span><span style="color:#758575;"># \u5141\u8BB8\u6587\u4EF6\u4E0A\u4F20</span></span>
<span class="line"><span style="color:#4D9375;">upload_max_filesize</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 300M  </span><span style="color:#758575;"># \u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u7684\u6700\u5927\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">post_max_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 300M        </span><span style="color:#758575;"># \u5141\u8BB8\u5BA2\u6237\u7AEF\u5355\u4E2APOST\u8BF7\u6C42\u53D1\u9001\u7684\u6700\u5927\u6570\u636E</span></span>
<span class="line"><span style="color:#4D9375;">max_file_uploads</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 20       </span><span style="color:#758575;"># \u5141\u8BB8\u540C\u65F6\u4E0A\u4F20\u7684\u6587\u4EF6\u7684\u6700\u5927\u6570\u91CF</span></span>
<span class="line"><span style="color:#4D9375;">memory_limit</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 128M         </span><span style="color:#758575;"># \u6BCF\u4E2A\u811A\u672C\u6267\u884C\u6700\u5927\u5185\u5B58</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">Session</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">       </span><span style="color:#758575;">#\u4F1A\u8BDD\u5171\u4EAB</span></span>
<span class="line"><span style="color:#4D9375;">session.save_handler</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> redis</span></span>
<span class="line"><span style="color:#4D9375;">session.save_path</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;tcp://172.16.1.51:6379&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#php\u7981\u6B62\u5371\u9669\u51FD\u6570\u6267\u884C\uFF08\u53D6\u51B3\u4E8E\u5B9E\u9645\u60C5\u51B5\uFF0C\u9700\u8981\u548C\u5F00\u53D1\u6C9F\u901A\uFF09</span></span>
<span class="line"><span style="color:#4D9375;">disable_functions</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> chown,chmod,pfsockopen,phpinfo</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#;;;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#A0ADA0;"># Error  logging ;  #\u9519\u8BEF\u65E5\u5FD7\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#A0ADA0;">#;;;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#1C6B48;">expose_php</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> Off                        </span><span style="color:#A0ADA0;"># \u5173\u95EDphp\u7248\u672C\u4FE1\u606F</span></span>
<span class="line"><span style="color:#1C6B48;">display_error</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> Off                     </span><span style="color:#A0ADA0;"># \u5C4F\u5E55\u4E0D\u663E\u793A\u9519\u8BEF\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#1C6B48;">error_reporting</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> E_ALL                 </span><span style="color:#A0ADA0;"># \u8BB0\u5F55PHP\u7684\u6BCF\u4E2A\u9519\u8BEF</span></span>
<span class="line"><span style="color:#1C6B48;">log_errors</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> On                         </span><span style="color:#A0ADA0;"># \u5F00\u542F\u9519\u8BEF\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#1C6B48;">error_log</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /var/log/php_error.log      </span><span style="color:#A0ADA0;"># \u9519\u8BEF\u65E5\u5FD7\u5199\u5165\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#1C6B48;">date.timezone</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> Asia/Shanghai           </span><span style="color:#A0ADA0;"># \u8C03\u6574\u65F6\u533A,\u9ED8\u8BA4PRC</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#A0ADA0;"># File Uploads ;    #\u6587\u4EF6\u4E0A\u4F20\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#A0ADA0;">#;;;;;;;;;;;;;;;</span></span>
<span class="line"><span style="color:#1C6B48;">file_uploads</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> On           </span><span style="color:#A0ADA0;"># \u5141\u8BB8\u6587\u4EF6\u4E0A\u4F20</span></span>
<span class="line"><span style="color:#1C6B48;">upload_max_filesize</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 300M  </span><span style="color:#A0ADA0;"># \u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u7684\u6700\u5927\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">post_max_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 300M        </span><span style="color:#A0ADA0;"># \u5141\u8BB8\u5BA2\u6237\u7AEF\u5355\u4E2APOST\u8BF7\u6C42\u53D1\u9001\u7684\u6700\u5927\u6570\u636E</span></span>
<span class="line"><span style="color:#1C6B48;">max_file_uploads</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 20       </span><span style="color:#A0ADA0;"># \u5141\u8BB8\u540C\u65F6\u4E0A\u4F20\u7684\u6587\u4EF6\u7684\u6700\u5927\u6570\u91CF</span></span>
<span class="line"><span style="color:#1C6B48;">memory_limit</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 128M         </span><span style="color:#A0ADA0;"># \u6BCF\u4E2A\u811A\u672C\u6267\u884C\u6700\u5927\u5185\u5B58</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">Session</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;">#\u4F1A\u8BDD\u5171\u4EAB</span></span>
<span class="line"><span style="color:#1C6B48;">session.save_handler</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> redis</span></span>
<span class="line"><span style="color:#1C6B48;">session.save_path</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;tcp://172.16.1.51:6379&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#php\u7981\u6B62\u5371\u9669\u51FD\u6570\u6267\u884C\uFF08\u53D6\u51B3\u4E8E\u5B9E\u9645\u60C5\u51B5\uFF0C\u9700\u8981\u548C\u5F00\u53D1\u6C9F\u901A\uFF09</span></span>
<span class="line"><span style="color:#1C6B48;">disable_functions</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> chown,chmod,pfsockopen,phpinfo</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="php-fpm-\u914D\u7F6E\u4F18\u5316" tabindex="-1">php-fpm \u914D\u7F6E\u4F18\u5316 <a class="header-anchor" href="#php-fpm-\u914D\u7F6E\u4F18\u5316" aria-hidden="true">#</a></h2><div class="language-ini"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u7B2C\u4E00\u90E8\u5206\uFF0Cfpm\u914D\u7F6E</span></span>
<span class="line"><span style="color:#758575;">;include=etc/fpm.d/*.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u7B2C\u4E8C\u90E8\u5206\uFF0C\u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">global</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#758575;">;pid = /var/log/php-fpm/php-fpm.pid     # pid\u6587\u4EF6\u5B58\u653E\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#758575;">;error_log = /var/log/php-fpm/php-fpm.log   # \u9519\u8BEF\u65E5\u5FD7\u5B58\u653E\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#758575;">;log_level = error  # \u65E5\u5FD7\u7EA7\u522B, alert, error, warning, notice, debug</span></span>
<span class="line"><span style="color:#4D9375;">rlimit_files</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 65535     </span><span style="color:#758575;"># php-fpm\u8FDB\u7A0B\u80FD\u6253\u5F00\u7684\u6587\u4EF6\u6570</span></span>
<span class="line"><span style="color:#758575;">;events.mechanism = epoll # \u4F7F\u7528epoll\u4E8B\u4EF6\u6A21\u578B\u5904\u7406\u8BF7\u6C42</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u7B2C\u4E09\u90E8\u5206\uFF0C\u8FDB\u7A0B\u6C60\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">www</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">       </span><span style="color:#758575;"># \u6C60\u540D\u79F0</span></span>
<span class="line"><span style="color:#4D9375;">user</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> www  </span><span style="color:#758575;"># \u8FDB\u7A0B\u8FD0\u884C\u7684\u7528\u6237</span></span>
<span class="line"><span style="color:#4D9375;">group</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> www </span><span style="color:#758575;"># \u8FDB\u7A0B\u8FD0\u884C\u7684\u7EC4</span></span>
<span class="line"><span style="color:#758575;">;listen = /dev/shm/php-fpm.sock # \u76D1\u542C\u5728\u672C\u5730socket\u6587\u4EF6</span></span>
<span class="line"><span style="color:#4D9375;">listen</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 127.0.0.1:9000         </span><span style="color:#758575;"># \u76D1\u542C\u5728\u672C\u5730tcp\u76849000\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#758575;">;listen.allowed_clients = 127.0.0.1 # \u5141\u8BB8\u8BBF\u95EEFastCGI\u8FDB\u7A0B\u7684IP\uFF0Cany\u4E0D\u9650\u5236 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">pm</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> dynamic                    </span><span style="color:#758575;">#  \u52A8\u6001\u8C03\u8282php-fpm\u7684\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#4D9375;">pm.max_children</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 512           </span><span style="color:#758575;">#  \u6700\u5927\u542F\u52A8\u7684php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#4D9375;">pm.start_servers</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 32           </span><span style="color:#758575;">#  \u521D\u59CB\u542F\u52A8\u7684php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#4D9375;">pm.min_spare_servers</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 32       </span><span style="color:#758575;">#  \u6700\u5C11\u7684\u7A7A\u95F2php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#4D9375;">pm.max_spare_servers</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 64       </span><span style="color:#758575;">#  \u6700\u5927\u7684\u7A7A\u95F2php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#4D9375;">pm.max_requests</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1500          </span><span style="color:#758575;">#  \u6BCF\u4E00\u4E2A\u8FDB\u7A0B\u80FD\u54CD\u5E94\u7684\u8BF7\u6C42\u6570</span></span>
<span class="line"><span style="color:#4D9375;">pm.process_idle_timeout</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 15s</span><span style="color:#758575;">;</span></span>
<span class="line"><span style="color:#4D9375;">pm.status_path</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /phpfpm_status </span><span style="color:#758575;"># \u5F00\u542Fphp\u7684\u72B6\u6001\u9875\u9762</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#  \u7B2C\u56DB\u90E8\u5206\uFF0C\u65E5\u5FD7\u76F8\u5173</span></span>
<span class="line"><span style="color:#DBD7CA;">php_flag[display_errors] = off</span></span>
<span class="line"><span style="color:#DBD7CA;">php_admin_value[error_log] = /var/log/phpfpm_error.log</span></span>
<span class="line"><span style="color:#DBD7CA;">php_admin_flag[log_errors] = on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#  \u6162\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#4D9375;">request_slowlog_timeout</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 5s    </span><span style="color:#758575;"># php\u811A\u672C\u6267\u884C\u8D85\u8FC75s\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#4D9375;">slowlog</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /var/log/php_slow.log </span><span style="color:#758575;"># \u8BB0\u5F55\u81F3\u8BE5\u6587\u4EF6\u4E2D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#  \u6162\u65E5\u5FD7\u793A\u4F8B</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">21-Nov-2013 14:30:38</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> [pool www] pid 11877</span></span>
<span class="line"><span style="color:#4D9375;">script_filename</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/lnmp/nginx/html/www.quancha.cn/www/fyzb.php</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">0xb70fb88c</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> file_get_contents() /usr/local/lnmp/nginx/html/www.quancha.cn/www/fyzb.php:2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u7B2C\u4E00\u90E8\u5206\uFF0Cfpm\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A0ADA0;">;include=etc/fpm.d/*.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7B2C\u4E8C\u90E8\u5206\uFF0C\u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">global</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#A0ADA0;">;pid = /var/log/php-fpm/php-fpm.pid     # pid\u6587\u4EF6\u5B58\u653E\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A0ADA0;">;error_log = /var/log/php-fpm/php-fpm.log   # \u9519\u8BEF\u65E5\u5FD7\u5B58\u653E\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A0ADA0;">;log_level = error  # \u65E5\u5FD7\u7EA7\u522B, alert, error, warning, notice, debug</span></span>
<span class="line"><span style="color:#1C6B48;">rlimit_files</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 65535     </span><span style="color:#A0ADA0;"># php-fpm\u8FDB\u7A0B\u80FD\u6253\u5F00\u7684\u6587\u4EF6\u6570</span></span>
<span class="line"><span style="color:#A0ADA0;">;events.mechanism = epoll # \u4F7F\u7528epoll\u4E8B\u4EF6\u6A21\u578B\u5904\u7406\u8BF7\u6C42</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7B2C\u4E09\u90E8\u5206\uFF0C\u8FDB\u7A0B\u6C60\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">www</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;"># \u6C60\u540D\u79F0</span></span>
<span class="line"><span style="color:#1C6B48;">user</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> www  </span><span style="color:#A0ADA0;"># \u8FDB\u7A0B\u8FD0\u884C\u7684\u7528\u6237</span></span>
<span class="line"><span style="color:#1C6B48;">group</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> www </span><span style="color:#A0ADA0;"># \u8FDB\u7A0B\u8FD0\u884C\u7684\u7EC4</span></span>
<span class="line"><span style="color:#A0ADA0;">;listen = /dev/shm/php-fpm.sock # \u76D1\u542C\u5728\u672C\u5730socket\u6587\u4EF6</span></span>
<span class="line"><span style="color:#1C6B48;">listen</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 127.0.0.1:9000         </span><span style="color:#A0ADA0;"># \u76D1\u542C\u5728\u672C\u5730tcp\u76849000\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A0ADA0;">;listen.allowed_clients = 127.0.0.1 # \u5141\u8BB8\u8BBF\u95EEFastCGI\u8FDB\u7A0B\u7684IP\uFF0Cany\u4E0D\u9650\u5236 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">pm</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> dynamic                    </span><span style="color:#A0ADA0;">#  \u52A8\u6001\u8C03\u8282php-fpm\u7684\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">pm.max_children</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 512           </span><span style="color:#A0ADA0;">#  \u6700\u5927\u542F\u52A8\u7684php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">pm.start_servers</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 32           </span><span style="color:#A0ADA0;">#  \u521D\u59CB\u542F\u52A8\u7684php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">pm.min_spare_servers</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 32       </span><span style="color:#A0ADA0;">#  \u6700\u5C11\u7684\u7A7A\u95F2php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">pm.max_spare_servers</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 64       </span><span style="color:#A0ADA0;">#  \u6700\u5927\u7684\u7A7A\u95F2php-fpm\u8FDB\u7A0B\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">pm.max_requests</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1500          </span><span style="color:#A0ADA0;">#  \u6BCF\u4E00\u4E2A\u8FDB\u7A0B\u80FD\u54CD\u5E94\u7684\u8BF7\u6C42\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">pm.process_idle_timeout</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 15s</span><span style="color:#A0ADA0;">;</span></span>
<span class="line"><span style="color:#1C6B48;">pm.status_path</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /phpfpm_status </span><span style="color:#A0ADA0;"># \u5F00\u542Fphp\u7684\u72B6\u6001\u9875\u9762</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#  \u7B2C\u56DB\u90E8\u5206\uFF0C\u65E5\u5FD7\u76F8\u5173</span></span>
<span class="line"><span style="color:#393A34;">php_flag[display_errors] = off</span></span>
<span class="line"><span style="color:#393A34;">php_admin_value[error_log] = /var/log/phpfpm_error.log</span></span>
<span class="line"><span style="color:#393A34;">php_admin_flag[log_errors] = on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#  \u6162\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#1C6B48;">request_slowlog_timeout</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 5s    </span><span style="color:#A0ADA0;"># php\u811A\u672C\u6267\u884C\u8D85\u8FC75s\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#1C6B48;">slowlog</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /var/log/php_slow.log </span><span style="color:#A0ADA0;"># \u8BB0\u5F55\u81F3\u8BE5\u6587\u4EF6\u4E2D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#  \u6162\u65E5\u5FD7\u793A\u4F8B</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">21-Nov-2013 14:30:38</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> [pool www] pid 11877</span></span>
<span class="line"><span style="color:#1C6B48;">script_filename</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/lnmp/nginx/html/www.quancha.cn/www/fyzb.php</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">0xb70fb88c</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> file_get_contents() /usr/local/lnmp/nginx/html/www.quancha.cn/www/fyzb.php:2</span></span>
<span class="line"></span></code></pre></div><h2 id="php-fpm-\u76D1\u63A7\u9875\u9762" tabindex="-1">php-fpm \u76D1\u63A7\u9875\u9762 <a class="header-anchor" href="#php-fpm-\u76D1\u63A7\u9875\u9762" aria-hidden="true">#</a></h2><div class="language-nginx"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4FEE\u6539php-fpm\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#4D9375;">vim</span><span style="color:#DBD7CA;"> /etc/php-fpm.d/www.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">pm.</span><span style="color:#4D9375;">status_path</span><span style="color:#DBD7CA;"> = /phpfpm_status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539nginx\u914D\u7F6E</span></span>
<span class="line"><span style="color:#CB7676;">server</span><span style="color:#DBD7CA;"> {</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> listen </span><span style="color:#DBD7CA;">80</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> server_name </span><span style="color:#DBD7CA;">php.example.com</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">       </span><span style="color:#4D9375;"> root </span><span style="color:#DBD7CA;">/code</span><span style="color:#858585;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">               </span><span style="color:#4D9375;"> index </span><span style="color:#DBD7CA;">index.php index.html</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/phpfpm_status </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">               </span><span style="color:#4D9375;"> fastcgi_pass </span><span style="color:#DBD7CA;">127.0.0.1:9000</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">               </span><span style="color:#4D9375;"> fastcgi_param </span><span style="color:#DBD7CA;">SCRIPT_FILENAME </span><span style="color:#858585;">$</span><span style="color:#B8A965;">document_root</span><span style="color:#858585;">$</span><span style="color:#B8A965;">fastcgi_script_name</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">               </span><span style="color:#4D9375;"> include </span><span style="color:#DBD7CA;">fastcgi_params</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> </span><span style="color:#C4704F;">\\.php$ </span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">               </span><span style="color:#4D9375;"> fastcgi_pass </span><span style="color:#DBD7CA;">127.0.0.1:9000</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">               </span><span style="color:#4D9375;"> fastcgi_param </span><span style="color:#DBD7CA;">SCRIPT_FILENAME </span><span style="color:#858585;">$</span><span style="color:#B8A965;">document_root</span><span style="color:#858585;">$</span><span style="color:#B8A965;">fastcgi_script_name</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">               </span><span style="color:#4D9375;"> include </span><span style="color:#DBD7CA;">fastcgi_params</span><span style="color:#858585;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        }</span></span>
<span class="line"><span style="color:#DBD7CA;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539php-fpm\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">$ </span><span style="color:#1C6B48;">vim</span><span style="color:#393A34;"> /etc/php-fpm.d/www.conf</span></span>
<span class="line"><span style="color:#393A34;">pm.</span><span style="color:#1C6B48;">status_path</span><span style="color:#393A34;"> = /phpfpm_status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539nginx\u914D\u7F6E</span></span>
<span class="line"><span style="color:#AB5959;">server</span><span style="color:#393A34;"> {</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> listen </span><span style="color:#393A34;">80</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> server_name </span><span style="color:#393A34;">php.example.com</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#1C6B48;"> root </span><span style="color:#393A34;">/code</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">               </span><span style="color:#1C6B48;"> index </span><span style="color:#393A34;">index.php index.html</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/phpfpm_status </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">               </span><span style="color:#1C6B48;"> fastcgi_pass </span><span style="color:#393A34;">127.0.0.1:9000</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">               </span><span style="color:#1C6B48;"> fastcgi_param </span><span style="color:#393A34;">SCRIPT_FILENAME </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">document_root</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">fastcgi_script_name</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">               </span><span style="color:#1C6B48;"> include </span><span style="color:#393A34;">fastcgi_params</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> </span><span style="color:#AB5E3F;">\\.php$ </span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">               </span><span style="color:#1C6B48;"> fastcgi_pass </span><span style="color:#393A34;">127.0.0.1:9000</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">               </span><span style="color:#1C6B48;"> fastcgi_param </span><span style="color:#393A34;">SCRIPT_FILENAME </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">document_root</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">fastcgi_script_name</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">               </span><span style="color:#1C6B48;"> include </span><span style="color:#393A34;">fastcgi_params</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        }</span></span>
<span class="line"><span style="color:#393A34;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u76D1\u63A7\u9875\u9762\u6307\u6807\u8BF4\u660E\uFF1A</strong></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ curl http://example.com/phpfpm_status</span></span>
<span class="line"><span style="color:#DBD7CA;">pool:                 www           </span><span style="color:#758575;"># fpm\u6C60\u540D\u79F0,\u5927\u591A\u6570\u4E3Awww</span></span>
<span class="line"><span style="color:#DBD7CA;">process manager:      dynamic       </span><span style="color:#758575;"># \u52A8\u6001\u7BA1\u7406phpfpm\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#DBD7CA;">start time:           20/Jan/2019:00:00:09 +0800   </span><span style="color:#758575;"># \u542F\u52A8\u65F6\u95F4\uFF0C\u5982\u679C\u91CD\u542F\u4F1A\u53D1\u751F\u53D8\u5316</span></span>
<span class="line"><span style="color:#DBD7CA;">start since:          409           </span><span style="color:#758575;">#p hp-fpm\u8FD0\u884C\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">accepted conn:        22            </span><span style="color:#758575;"># \u5F53\u524D\u6C60\u63A5\u53D7\u7684\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">listen queue:         0     </span><span style="color:#758575;"># \u8BF7\u6C42\u7B49\u5F85\u961F\u5217,\u5982\u679C\u8FD9\u4E2A\u503C\u4E0D\u4E3A0,\u90A3\u4E48\u9700\u8981\u589E\u52A0FPM\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">max listen queue:     0     </span><span style="color:#758575;"># \u8BF7\u6C42\u7B49\u5F85\u961F\u5217\u6700\u9AD8\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">listen queue len:     128   </span><span style="color:#758575;"># \u8BF7\u6C42\u7B49\u5F85\u961F\u5217\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#DBD7CA;">idle processes:       4     </span><span style="color:#758575;"># php-fpm\u7A7A\u95F2\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">active processes:     1     </span><span style="color:#758575;"># php-fpm\u6D3B\u8DC3\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">total processes:      5     </span><span style="color:#758575;"># php-fpm\u603B\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">max active processes: 2     </span><span style="color:#758575;"># php-fpm\u6700\u5927\u6D3B\u8DC3\u7684\u8FDB\u7A0B\u6570\u91CF(FPM\u542F\u52A8\u5F00\u59CB\u8BA1\u7B97)</span></span>
<span class="line"><span style="color:#DBD7CA;">max children reached: 0     </span><span style="color:#758575;"># \u8FDB\u7A0B\u6700\u5927\u6570\u91CF\u9650\u5236\u7684\u6B21\u6570\uFF0C\u5982\u679C\u6570\u91CF\u4E0D\u4E3A0\uFF0C\u5219\u8BF4\u660Ephpfpm\u6700\u5927\u8FDB\u7A0B\u6570\u91CF\u8FC7\u5C0F,\u53EF\u4EE5\u9002\u5F53\u8C03\u6574\u3002</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ curl http://example.com/phpfpm_status</span></span>
<span class="line"><span style="color:#393A34;">pool:                 www           </span><span style="color:#A0ADA0;"># fpm\u6C60\u540D\u79F0,\u5927\u591A\u6570\u4E3Awww</span></span>
<span class="line"><span style="color:#393A34;">process manager:      dynamic       </span><span style="color:#A0ADA0;"># \u52A8\u6001\u7BA1\u7406phpfpm\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#393A34;">start time:           20/Jan/2019:00:00:09 +0800   </span><span style="color:#A0ADA0;"># \u542F\u52A8\u65F6\u95F4\uFF0C\u5982\u679C\u91CD\u542F\u4F1A\u53D1\u751F\u53D8\u5316</span></span>
<span class="line"><span style="color:#393A34;">start since:          409           </span><span style="color:#A0ADA0;">#p hp-fpm\u8FD0\u884C\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">accepted conn:        22            </span><span style="color:#A0ADA0;"># \u5F53\u524D\u6C60\u63A5\u53D7\u7684\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#393A34;">listen queue:         0     </span><span style="color:#A0ADA0;"># \u8BF7\u6C42\u7B49\u5F85\u961F\u5217,\u5982\u679C\u8FD9\u4E2A\u503C\u4E0D\u4E3A0,\u90A3\u4E48\u9700\u8981\u589E\u52A0FPM\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">max listen queue:     0     </span><span style="color:#A0ADA0;"># \u8BF7\u6C42\u7B49\u5F85\u961F\u5217\u6700\u9AD8\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">listen queue len:     128   </span><span style="color:#A0ADA0;"># \u8BF7\u6C42\u7B49\u5F85\u961F\u5217\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#393A34;">idle processes:       4     </span><span style="color:#A0ADA0;"># php-fpm\u7A7A\u95F2\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">active processes:     1     </span><span style="color:#A0ADA0;"># php-fpm\u6D3B\u8DC3\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">total processes:      5     </span><span style="color:#A0ADA0;"># php-fpm\u603B\u7684\u8FDB\u7A0B\u6570\u91CF</span></span>
<span class="line"><span style="color:#393A34;">max active processes: 2     </span><span style="color:#A0ADA0;"># php-fpm\u6700\u5927\u6D3B\u8DC3\u7684\u8FDB\u7A0B\u6570\u91CF(FPM\u542F\u52A8\u5F00\u59CB\u8BA1\u7B97)</span></span>
<span class="line"><span style="color:#393A34;">max children reached: 0     </span><span style="color:#A0ADA0;"># \u8FDB\u7A0B\u6700\u5927\u6570\u91CF\u9650\u5236\u7684\u6B21\u6570\uFF0C\u5982\u679C\u6570\u91CF\u4E0D\u4E3A0\uFF0C\u5219\u8BF4\u660Ephpfpm\u6700\u5927\u8FDB\u7A0B\u6570\u91CF\u8FC7\u5C0F,\u53EF\u4EE5\u9002\u5F53\u8C03\u6574\u3002</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9644\u5F55\uFF1A\u6240\u7981\u7528\u7684\u5371\u9669\u51FD\u6570" tabindex="-1">\u9644\u5F55\uFF1A\u6240\u7981\u7528\u7684\u5371\u9669\u51FD\u6570 <a class="header-anchor" href="#\u9644\u5F55\uFF1A\u6240\u7981\u7528\u7684\u5371\u9669\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#A1B567;">phpinfo</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u8F93\u51FA PHP \u73AF\u5883\u4FE1\u606F\u4EE5\u53CA\u76F8\u5173\u7684\u6A21\u5757\u3001WEB \u73AF\u5883\u7B49\u4FE1\u606F\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">passthru</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5141\u8BB8\u6267\u884C\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\u5E76\u56DE\u663E\u8F93\u51FA\uFF0C\u7C7B\u4F3C\u4E8E </span><span style="color:#A1B567;">exec</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;">\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">exec</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5141\u8BB8\u6267\u884C\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\uFF08\u5982 UNIX Shell \u6216 CMD \u547D\u4EE4\u7B49\uFF09\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">system</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5141\u8BB8\u6267\u884C\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\u5E76\u56DE\u663E\u8F93\u51FA\uFF0C\u7C7B\u4F3C\u4E8E </span><span style="color:#A1B567;">passthru</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;">\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">chroot</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u6539\u53D8\u5F53\u524D PHP \u8FDB\u7A0B\u7684\u5DE5\u4F5C\u6839\u76EE\u5F55\uFF0C\u4EC5\u5F53\u7CFB\u7EDF\u652F\u6301 CLI \u6A21\u5F0F </span></span>
<span class="line"><span style="color:#DBD7CA;">PHP \u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u4E14\u8BE5\u51FD\u6570\u4E0D\u9002\u7528\u4E8E Windows \u7CFB\u7EDF\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">scandir</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5217\u51FA\u6307\u5B9A\u8DEF\u5F84\u4E2D\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">chgrp</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u6539\u53D8\u6587\u4EF6\u6216\u76EE\u5F55\u6240\u5C5E\u7684\u7528\u6237\u7EC4\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">chown</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u6539\u53D8\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u6709\u8005\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">shell_exec</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u901A\u8FC7 Shell \u6267\u884C\u547D\u4EE4\uFF0C\u5E76\u5C06\u6267\u884C\u7ED3\u679C\u4F5C\u4E3A\u5B57\u7B26\u4E32\u8FD4\u56DE\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">proc_open</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u6267\u884C\u4E00\u4E2A\u547D\u4EE4\u5E76\u6253\u5F00\u6587\u4EF6\u6307\u9488\u7528\u4E8E\u8BFB\u53D6\u4EE5\u53CA\u5199\u5165\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">proc_get_status</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u83B7\u53D6\u4F7F\u7528 </span><span style="color:#A1B567;">proc_open</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> \u6240\u6253\u5F00\u8FDB\u7A0B\u7684\u4FE1\u606F\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">error_log</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5C06\u9519\u8BEF\u4FE1\u606F\u53D1\u9001\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF08\u6587\u4EF6\uFF09\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5B89\u5168\u5907\u6CE8\uFF1A\u5728\u67D0\u4E9B\u7248\u672C\u7684 PHP \u4E2D\uFF0C\u53EF\u4F7F\u7528 </span><span style="color:#A1B567;">error_log</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> \u7ED5\u8FC7 PHP safe mode\uFF0C </span></span>
<span class="line"><span style="color:#DBD7CA;">\u6267\u884C\u4EFB\u610F\u547D\u4EE4\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4F4E </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">ini_alter</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u662F </span><span style="color:#A1B567;">ini_set</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> \u51FD\u6570\u7684\u4E00\u4E2A\u522B\u540D\u51FD\u6570\uFF0C\u529F\u80FD\u4E0E </span><span style="color:#A1B567;">ini_set</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> \u76F8\u540C\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5177\u4F53\u53C2\u89C1 </span><span style="color:#A1B567;">ini_set</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;">\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">ini_set</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u7528\u4E8E\u4FEE\u6539\u3001\u8BBE\u7F6E PHP \u73AF\u5883\u914D\u7F6E\u53C2\u6570\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">ini_restore</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u7528\u4E8E\u6062\u590D PHP \u73AF\u5883\u914D\u7F6E\u53C2\u6570\u5230\u5176\u521D\u59CB\u503C\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">dl</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5728 PHP \u8FDB\u884C\u8FD0\u884C\u8FC7\u7A0B\u5F53\u4E2D\uFF08\u800C\u975E\u542F\u52A8\u65F6\uFF09\u52A0\u8F7D\u4E00\u4E2A PHP \u5916\u90E8\u6A21\u5757\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">pfsockopen</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5EFA\u7ACB\u4E00\u4E2A Internet \u6216 UNIX \u57DF\u7684 socket \u6301\u4E45\u8FDE\u63A5\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">syslog</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u8C03\u7528 UNIX \u7CFB\u7EDF\u7684\u7CFB\u7EDF\u5C42 </span><span style="color:#A1B567;">syslog</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> \u51FD\u6570\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">readlink</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u8FD4\u56DE\u7B26\u53F7\u8FDE\u63A5\u6307\u5411\u7684\u76EE\u6807\u6587\u4EF6\u5185\u5BB9\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">symlink</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5728 UNIX \u7CFB\u7EDF\u4E2D\u5EFA\u7ACB\u4E00\u4E2A\u7B26\u53F7\u94FE\u63A5\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">popen</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u901A\u8FC7 </span><span style="color:#A1B567;">popen</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> \u7684\u53C2\u6570\u4F20\u9012\u4E00\u6761\u547D\u4EE4\uFF0C\u5E76\u5BF9 </span><span style="color:#A1B567;">popen</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> \u6240\u6253\u5F00\u7684\u6587\u4EF6\u8FDB\u884C\u6267\u884C\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">stream_socket_server</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5EFA\u7ACB\u4E00\u4E2A Internet \u6216 UNIX \u670D\u52A1\u5668\u8FDE\u63A5\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">putenv</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u7528\u4E8E\u5728 PHP \u8FD0\u884C\u65F6\u6539\u53D8\u7CFB\u7EDF\u5B57\u7B26\u96C6\u73AF\u5883\u3002\u5728\u4F4E\u4E8E 5.2.6 \u7248\u672C\u7684 PHP \u4E2D\uFF0C\u53EF\u5229\u7528\u8BE5\u51FD\u6570 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u4FEE\u6539\u7CFB\u7EDF\u5B57\u7B26\u96C6\u73AF\u5883\u540E\uFF0C\u5229\u7528 sendmail \u6307\u4EE4\u53D1\u9001\u7279\u6B8A\u53C2\u6570\u6267\u884C\u7CFB\u7EDF SHELL \u547D\u4EE4\u3002 </span></span>
<span class="line"><span style="color:#DBD7CA;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">\u7981\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A </span></span>
<span class="line"><span style="color:#DBD7CA;">\u6253\u5F00/etc/php.ini\u6587\u4EF6\uFF0C </span></span>
<span class="line"><span style="color:#DBD7CA;">\u67E5\u627E\u5230 disable_functions \uFF0C\u6DFB\u52A0\u9700\u7981\u7528\u7684\u51FD\u6570\u540D\uFF0C\u5982\u4E0B\uFF1A </span></span>
<span class="line"><span style="color:#DBD7CA;">phpinfo,eval,passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_open,proc_get_status,ini_alter,ini_alter,ini_restore,dl,pfsockopen,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server,fsocket,fsockopen</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6C7834;">phpinfo</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u8F93\u51FA PHP \u73AF\u5883\u4FE1\u606F\u4EE5\u53CA\u76F8\u5173\u7684\u6A21\u5757\u3001WEB \u73AF\u5883\u7B49\u4FE1\u606F\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">passthru</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5141\u8BB8\u6267\u884C\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\u5E76\u56DE\u663E\u8F93\u51FA\uFF0C\u7C7B\u4F3C\u4E8E </span><span style="color:#6C7834;">exec</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;">\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">exec</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5141\u8BB8\u6267\u884C\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\uFF08\u5982 UNIX Shell \u6216 CMD \u547D\u4EE4\u7B49\uFF09\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">system</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5141\u8BB8\u6267\u884C\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\u5E76\u56DE\u663E\u8F93\u51FA\uFF0C\u7C7B\u4F3C\u4E8E </span><span style="color:#6C7834;">passthru</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;">\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">chroot</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u6539\u53D8\u5F53\u524D PHP \u8FDB\u7A0B\u7684\u5DE5\u4F5C\u6839\u76EE\u5F55\uFF0C\u4EC5\u5F53\u7CFB\u7EDF\u652F\u6301 CLI \u6A21\u5F0F </span></span>
<span class="line"><span style="color:#393A34;">PHP \u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u4E14\u8BE5\u51FD\u6570\u4E0D\u9002\u7528\u4E8E Windows \u7CFB\u7EDF\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">scandir</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5217\u51FA\u6307\u5B9A\u8DEF\u5F84\u4E2D\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">chgrp</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u6539\u53D8\u6587\u4EF6\u6216\u76EE\u5F55\u6240\u5C5E\u7684\u7528\u6237\u7EC4\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">chown</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u6539\u53D8\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u6709\u8005\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">shell_exec</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u901A\u8FC7 Shell \u6267\u884C\u547D\u4EE4\uFF0C\u5E76\u5C06\u6267\u884C\u7ED3\u679C\u4F5C\u4E3A\u5B57\u7B26\u4E32\u8FD4\u56DE\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">proc_open</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u6267\u884C\u4E00\u4E2A\u547D\u4EE4\u5E76\u6253\u5F00\u6587\u4EF6\u6307\u9488\u7528\u4E8E\u8BFB\u53D6\u4EE5\u53CA\u5199\u5165\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">proc_get_status</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u83B7\u53D6\u4F7F\u7528 </span><span style="color:#6C7834;">proc_open</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> \u6240\u6253\u5F00\u8FDB\u7A0B\u7684\u4FE1\u606F\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">error_log</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5C06\u9519\u8BEF\u4FE1\u606F\u53D1\u9001\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF08\u6587\u4EF6\uFF09\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5B89\u5168\u5907\u6CE8\uFF1A\u5728\u67D0\u4E9B\u7248\u672C\u7684 PHP \u4E2D\uFF0C\u53EF\u4F7F\u7528 </span><span style="color:#6C7834;">error_log</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> \u7ED5\u8FC7 PHP safe mode\uFF0C </span></span>
<span class="line"><span style="color:#393A34;">\u6267\u884C\u4EFB\u610F\u547D\u4EE4\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4F4E </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">ini_alter</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u662F </span><span style="color:#6C7834;">ini_set</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> \u51FD\u6570\u7684\u4E00\u4E2A\u522B\u540D\u51FD\u6570\uFF0C\u529F\u80FD\u4E0E </span><span style="color:#6C7834;">ini_set</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> \u76F8\u540C\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5177\u4F53\u53C2\u89C1 </span><span style="color:#6C7834;">ini_set</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;">\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">ini_set</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u7528\u4E8E\u4FEE\u6539\u3001\u8BBE\u7F6E PHP \u73AF\u5883\u914D\u7F6E\u53C2\u6570\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">ini_restore</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u7528\u4E8E\u6062\u590D PHP \u73AF\u5883\u914D\u7F6E\u53C2\u6570\u5230\u5176\u521D\u59CB\u503C\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">dl</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5728 PHP \u8FDB\u884C\u8FD0\u884C\u8FC7\u7A0B\u5F53\u4E2D\uFF08\u800C\u975E\u542F\u52A8\u65F6\uFF09\u52A0\u8F7D\u4E00\u4E2A PHP \u5916\u90E8\u6A21\u5757\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">pfsockopen</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5EFA\u7ACB\u4E00\u4E2A Internet \u6216 UNIX \u57DF\u7684 socket \u6301\u4E45\u8FDE\u63A5\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">syslog</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u8C03\u7528 UNIX \u7CFB\u7EDF\u7684\u7CFB\u7EDF\u5C42 </span><span style="color:#6C7834;">syslog</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> \u51FD\u6570\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">readlink</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u8FD4\u56DE\u7B26\u53F7\u8FDE\u63A5\u6307\u5411\u7684\u76EE\u6807\u6587\u4EF6\u5185\u5BB9\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">symlink</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5728 UNIX \u7CFB\u7EDF\u4E2D\u5EFA\u7ACB\u4E00\u4E2A\u7B26\u53F7\u94FE\u63A5\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">popen</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u901A\u8FC7 </span><span style="color:#6C7834;">popen</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> \u7684\u53C2\u6570\u4F20\u9012\u4E00\u6761\u547D\u4EE4\uFF0C\u5E76\u5BF9 </span><span style="color:#6C7834;">popen</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> \u6240\u6253\u5F00\u7684\u6587\u4EF6\u8FDB\u884C\u6267\u884C\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">stream_socket_server</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u5EFA\u7ACB\u4E00\u4E2A Internet \u6216 UNIX \u670D\u52A1\u5668\u8FDE\u63A5\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u4E2D </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">putenv</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">\u529F\u80FD\u63CF\u8FF0\uFF1A\u7528\u4E8E\u5728 PHP \u8FD0\u884C\u65F6\u6539\u53D8\u7CFB\u7EDF\u5B57\u7B26\u96C6\u73AF\u5883\u3002\u5728\u4F4E\u4E8E 5.2.6 \u7248\u672C\u7684 PHP \u4E2D\uFF0C\u53EF\u5229\u7528\u8BE5\u51FD\u6570 </span></span>
<span class="line"><span style="color:#393A34;">\u4FEE\u6539\u7CFB\u7EDF\u5B57\u7B26\u96C6\u73AF\u5883\u540E\uFF0C\u5229\u7528 sendmail \u6307\u4EE4\u53D1\u9001\u7279\u6B8A\u53C2\u6570\u6267\u884C\u7CFB\u7EDF SHELL \u547D\u4EE4\u3002 </span></span>
<span class="line"><span style="color:#393A34;">\u5371\u9669\u7B49\u7EA7\uFF1A\u9AD8 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">\u7981\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A </span></span>
<span class="line"><span style="color:#393A34;">\u6253\u5F00/etc/php.ini\u6587\u4EF6\uFF0C </span></span>
<span class="line"><span style="color:#393A34;">\u67E5\u627E\u5230 disable_functions \uFF0C\u6DFB\u52A0\u9700\u7981\u7528\u7684\u51FD\u6570\u540D\uFF0C\u5982\u4E0B\uFF1A </span></span>
<span class="line"><span style="color:#393A34;">phpinfo,eval,passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_open,proc_get_status,ini_alter,ini_alter,ini_restore,dl,pfsockopen,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server,fsocket,fsockopen</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li></li></ul><blockquote><p>\u6587\u7AE0\u5185\u5BB9\u6536\u96C6\u4E8E\u7F51\u7EDC\u3002</p></blockquote>`,15),e=[o];function c(r,t,y,i,A,D){return n(),a("div",null,e)}var _=s(l,[["render",c]]);export{C as __pageData,_ as default};
