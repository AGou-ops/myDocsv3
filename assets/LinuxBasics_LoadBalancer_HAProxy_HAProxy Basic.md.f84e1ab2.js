import{_ as s,o as a,c as n,a as p}from"./app.1e6146c3.js";const A=JSON.parse('{"title":"HAProxy Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"HAProxy\u7B80\u4ECB","slug":"haproxy\u7B80\u4ECB"},{"level":2,"title":"HAProxy\u5B89\u88C5","slug":"haproxy\u5B89\u88C5"},{"level":3,"title":"\u76F4\u63A5\u901A\u8FC7yum\u4ED3\u5E93\u5B89\u88C5","slug":"\u76F4\u63A5\u901A\u8FC7yum\u4ED3\u5E93\u5B89\u88C5"},{"level":3,"title":"\u7F16\u8BD1\u5B89\u88C5","slug":"\u7F16\u8BD1\u5B89\u88C5"},{"level":2,"title":"haproxy\u547D\u4EE4\u884C\u5DE5\u5177","slug":"haproxy\u547D\u4EE4\u884C\u5DE5\u5177"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/LoadBalancer/HAProxy/HAProxy Basic.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/LoadBalancer/HAProxy/HAProxy Basic.md"},o=p(`<h1 id="haproxy-basic" tabindex="-1">HAProxy Basic <a class="header-anchor" href="#haproxy-basic" aria-hidden="true">#</a></h1><h2 id="haproxy\u7B80\u4ECB" tabindex="-1">HAProxy\u7B80\u4ECB <a class="header-anchor" href="#haproxy\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>HAProxy\u63D0\u4F9B\u9AD8\u53EF\u7528\u6027\u3001\u8D1F\u8F7D\u5747\u8861\u4EE5\u53CA\u57FA\u4E8ETCP\u548CHTTP\u5E94\u7528\u7684\u4EE3\u7406\uFF0C\u652F\u6301\u865A\u62DF\u4E3B\u673A\uFF0C\u5B83\u662F\u514D\u8D39\u3001\u5FEB\u901F\u5E76\u4E14\u53EF\u9760\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u3002</p><p>HAProxy\u7279\u522B\u9002\u7528\u4E8E\u90A3\u4E9B\u8D1F\u8F7D\u7279\u5927\u7684web\u7AD9\u70B9\uFF0C\u8FD9\u4E9B\u7AD9\u70B9\u901A\u5E38\u53C8\u9700\u8981\u4F1A\u8BDD\u4FDD\u6301\u6216\u4E03\u5C42\u5904\u7406\u3002</p><p>HAProxy\u8FD0\u884C\u5728\u5F53\u524D\u7684\u786C\u4EF6\u4E0A\uFF0C\u5B8C\u5168\u53EF\u4EE5\u652F\u6301\u6570\u4EE5\u4E07\u8BA1\u7684\u5E76\u53D1\u8FDE\u63A5\u3002\u5E76\u4E14\u5B83\u7684\u8FD0\u884C\u6A21\u5F0F\u4F7F\u5F97\u5B83\u53EF\u4EE5\u5F88\u7B80\u5355\u5B89\u5168\u7684\u6574\u5408\u8FDB\u60A8\u5F53\u524D\u7684\u67B6\u6784\u4E2D\uFF0C \u540C\u65F6\u53EF\u4EE5\u4FDD\u62A4\u4F60\u7684web\u670D\u52A1\u5668\u4E0D\u88AB\u66B4\u9732\u5230\u7F51\u7EDC\u4E0A\u3002</p><p>HAProxy\u5B9E\u73B0\u4E86\u4E00\u79CD\u4E8B\u4EF6\u9A71\u52A8, \u5355\u4E00\u8FDB\u7A0B\u6A21\u578B\uFF0C\u6B64\u6A21\u578B\u652F\u6301\u975E\u5E38\u5927\u7684\u5E76\u53D1\u8FDE\u63A5\u6570\u3002\u591A\u8FDB\u7A0B\u6216\u591A\u7EBF\u7A0B\u6A21\u578B\u53D7\u5185\u5B58\u9650\u5236 \u3001\u7CFB\u7EDF\u8C03\u5EA6\u5668\u9650\u5236\u4EE5\u53CA\u65E0\u5904\u4E0D\u5728\u7684\u9501\u9650\u5236\uFF0C\u5F88\u5C11\u80FD\u5904\u7406\u6570\u5343\u5E76\u53D1\u8FDE\u63A5\u3002\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u56E0\u4E3A\u5728\u6709\u66F4\u597D\u7684\u8D44\u6E90\u548C\u65F6\u95F4\u7BA1\u7406\u7684\u7528\u6237\u7A7A\u95F4(User-Space) \u5B9E\u73B0\u6240\u6709\u8FD9</p><p>\u4E9B\u4EFB\u52A1\uFF0C\u6240\u4EE5\u6CA1\u6709\u8FD9\u4E9B\u95EE\u9898\u3002\u6B64\u6A21\u578B\u7684\u5F0A\u7AEF\u662F\uFF0C\u5728\u591A\u6838\u7CFB\u7EDF\u4E0A\uFF0C\u8FD9\u4E9B\u7A0B\u5E8F\u901A\u5E38\u6269\u5C55\u6027\u8F83\u5DEE\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u4ED6\u4EEC\u5FC5\u987B\u8FDB\u884C\u4F18\u5316\u4EE5 \u4F7F\u6BCF\u4E2ACPU\u65F6\u95F4\u7247(Cycle)\u505A\u66F4\u591A\u7684\u5DE5\u4F5C\u3002</p><h2 id="haproxy\u5B89\u88C5" tabindex="-1">HAProxy\u5B89\u88C5 <a class="header-anchor" href="#haproxy\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="\u76F4\u63A5\u901A\u8FC7yum\u4ED3\u5E93\u5B89\u88C5" tabindex="-1">\u76F4\u63A5\u901A\u8FC7yum\u4ED3\u5E93\u5B89\u88C5 <a class="header-anchor" href="#\u76F4\u63A5\u901A\u8FC7yum\u4ED3\u5E93\u5B89\u88C5" aria-hidden="true">#</a></h3><p><code>yum install -y haproxy</code>,\u9ED8\u8BA4\u5B89\u88C5\u7248\u672C\u4E3A<code>1.5.18</code>(\u622A\u6B62\u76EE\u524D\u4E3A\u6B62)</p><h3 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h3><ol><li>\u4ECE<a href="http://www.haproxy.org/download/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u4ED3\u5E93</a>\u4E0B\u8F7D\u6E90\u7801\u5305,\u5E76\u89E3\u538B\u7F29</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">wget http://www.haproxy.org/download/1.8/src/haproxy-1.8.25.tar.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">tar xf haproxy-1.8.25.tar.gz</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">wget http://www.haproxy.org/download/1.8/src/haproxy-1.8.25.tar.gz</span></span>
<span class="line"><span style="color:#393A34;">tar xf haproxy-1.8.25.tar.gz</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u7F16\u8BD1\u53CA\u5B89\u88C5</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> haproxy-1.8.25</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u5B89\u88C5\u8BF4\u660E</span></span>
<span class="line"><span style="color:#DBD7CA;">$ less README</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">To build haproxy, you have to choose your target OS amongst the following ones</span></span>
<span class="line"><span style="color:#DBD7CA;">and assign it to the TARGET variable </span><span style="color:#E0A569;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  - linux26     </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> Linux 2.6 and above</span></span>
<span class="line"><span style="color:#DBD7CA;">  - linux2628   </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> Linux 2.6.28, 3.x, and above </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">enables splice and tproxy</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u5F53\u524D\u5185\u6838\u7248\u672C</span></span>
<span class="line"><span style="color:#DBD7CA;">$ uname -r</span></span>
<span class="line"><span style="color:#DBD7CA;">3.10.0-1062.18.1.el7.x86_64			</span><span style="color:#758575;"># \u6240\u4EE5\u4F7F\u7528linux2628\u6765\u8FDB\u884C\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#758575;"># \u5F00\u59CB\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#DBD7CA;">make TARGET=linux2628 ARCH=x86_64 PREFIX=/usr/local/haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">make install PREFIX=/usr/local/haproxy</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> haproxy-1.8.25</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u5B89\u88C5\u8BF4\u660E</span></span>
<span class="line"><span style="color:#393A34;">$ less README</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">To build haproxy, you have to choose your target OS amongst the following ones</span></span>
<span class="line"><span style="color:#393A34;">and assign it to the TARGET variable </span><span style="color:#B58451;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  - linux26     </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> Linux 2.6 and above</span></span>
<span class="line"><span style="color:#393A34;">  - linux2628   </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> Linux 2.6.28, 3.x, and above </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">enables splice and tproxy</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u5F53\u524D\u5185\u6838\u7248\u672C</span></span>
<span class="line"><span style="color:#393A34;">$ uname -r</span></span>
<span class="line"><span style="color:#393A34;">3.10.0-1062.18.1.el7.x86_64			</span><span style="color:#A0ADA0;"># \u6240\u4EE5\u4F7F\u7528linux2628\u6765\u8FDB\u884C\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F00\u59CB\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#393A34;">make TARGET=linux2628 ARCH=x86_64 PREFIX=/usr/local/haproxy</span></span>
<span class="line"><span style="color:#393A34;">make install PREFIX=/usr/local/haproxy</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u542F\u52A8</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">/usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/haproxy.cfg</span></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528\u8F6F\u8FDE\u63A5\u65B9\u4FBF\u4F7F\u7528</span></span>
<span class="line"><span style="color:#DBD7CA;">ln -sv /usr/local/haproxy/sbin/haproxy /usr/sbin/haproxy</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">/usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/haproxy.cfg</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528\u8F6F\u8FDE\u63A5\u65B9\u4FBF\u4F7F\u7528</span></span>
<span class="line"><span style="color:#393A34;">ln -sv /usr/local/haproxy/sbin/haproxy /usr/sbin/haproxy</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u4E3Ahaproxy\u521B\u5EFA\u76F8\u5173\u76EE\u5F55</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mkdir -pv /usr/local/haproxy/conf.d     </span><span style="color:#758575;"># \u4E3A\u591A\u914D\u7F6E\u6587\u4EF6\u51C6\u5907</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -pv /usr/local/haproxy/logs		</span><span style="color:#758575;"># haproxy\u65E5\u5FD7\u76EE\u5F55,\u53EF\u505A\u8F6F\u8FDE\u63A5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -pv /etc/haproxy/conf.d                      </span><span style="color:#758575;"># \u521B\u5EFA\u4E3B\u914D\u7F6E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">touch /usr/local/haproxy/haproxy.cfg  	 </span><span style="color:#758575;"># \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">ln -sv /usr/local/haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg 			</span><span style="color:#758575;"># \u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6\u8F6F\u8FDE\u63A5\u65B9\u4FBF\u7BA1\u7406</span></span>
<span class="line"><span style="color:#DBD7CA;">ln -sv /usr/local/haproxy/conf.d /etc/haproxy/conf.d</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mkdir -pv /usr/local/haproxy/conf.d     </span><span style="color:#A0ADA0;"># \u4E3A\u591A\u914D\u7F6E\u6587\u4EF6\u51C6\u5907</span></span>
<span class="line"><span style="color:#393A34;">mkdir -pv /usr/local/haproxy/logs		</span><span style="color:#A0ADA0;"># haproxy\u65E5\u5FD7\u76EE\u5F55,\u53EF\u505A\u8F6F\u8FDE\u63A5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">mkdir -pv /etc/haproxy/conf.d                      </span><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E3B\u914D\u7F6E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">touch /usr/local/haproxy/haproxy.cfg  	 </span><span style="color:#A0ADA0;"># \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">ln -sv /usr/local/haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg 			</span><span style="color:#A0ADA0;"># \u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6\u8F6F\u8FDE\u63A5\u65B9\u4FBF\u7BA1\u7406</span></span>
<span class="line"><span style="color:#393A34;">ln -sv /usr/local/haproxy/conf.d /etc/haproxy/conf.d</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u4E3Ahaproxy\u6DFB\u52A0\u5230\u7CFB\u7EDF\u670D\u52A1\u6216\u8005\u521B\u5EFA<code>UNIT file</code>\u65B9\u4FBF\u7BA1\u7406</li></ol><p>\u6DFB\u52A0\u5230\u7CFB\u7EDF\u670D\u52A1:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cp /root/haproxy-1.8.25/examples/haproxy.init /etc/init.d/haproxy		</span><span style="color:#758575;"># \u524D\u9762\u90A3\u4E2A\u6587\u4EF6\u4E3A\u6E90\u7801\u5305\u91CC\u9762\u7684\u793A\u4F8B\u6587\u4EF6,\u6309\u7167\u9700\u6C42\u4FEE\u6539\u5373\u53EF</span></span>
<span class="line"><span style="color:#DBD7CA;">chmod 755 /etc/init.d/haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">chkconfig --add haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">chkconfig haproxy on</span></span>
<span class="line"><span style="color:#DBD7CA;">chkconfig --list </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep haproxy</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cp /root/haproxy-1.8.25/examples/haproxy.init /etc/init.d/haproxy		</span><span style="color:#A0ADA0;"># \u524D\u9762\u90A3\u4E2A\u6587\u4EF6\u4E3A\u6E90\u7801\u5305\u91CC\u9762\u7684\u793A\u4F8B\u6587\u4EF6,\u6309\u7167\u9700\u6C42\u4FEE\u6539\u5373\u53EF</span></span>
<span class="line"><span style="color:#393A34;">chmod 755 /etc/init.d/haproxy</span></span>
<span class="line"><span style="color:#393A34;">chkconfig --add haproxy</span></span>
<span class="line"><span style="color:#393A34;">chkconfig haproxy on</span></span>
<span class="line"><span style="color:#393A34;">chkconfig --list </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep haproxy</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0\u5230<code>UNIT FILE</code>:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat /usr/lib/systemd/system/haproxy.service</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Unit</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Description=HAProxy Load Balancer</span></span>
<span class="line"><span style="color:#DBD7CA;">After=syslog.target network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Service</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">EnvironmentFile=/etc/sysconfig/haproxy</span></span>
<span class="line"><span style="color:#DBD7CA;">ExecStart=/usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/haproxy.cfg -p /run/haproxy.pid </span><span style="color:#858585;">$</span><span style="color:#B8A965;">OPTIONS</span></span>
<span class="line"><span style="color:#DBD7CA;">ExecReload=/bin/kill -USR2 </span><span style="color:#858585;">$</span><span style="color:#B8A965;">MAINPID</span></span>
<span class="line"><span style="color:#DBD7CA;">KillMode=mixed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Install</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">WantedBy=multi-user.target</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat /usr/lib/systemd/system/haproxy.service</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Unit</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Description=HAProxy Load Balancer</span></span>
<span class="line"><span style="color:#393A34;">After=syslog.target network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Service</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">EnvironmentFile=/etc/sysconfig/haproxy</span></span>
<span class="line"><span style="color:#393A34;">ExecStart=/usr/local/haproxy/sbin/haproxy -f /usr/local/haproxy/haproxy.cfg -p /run/haproxy.pid </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">OPTIONS</span></span>
<span class="line"><span style="color:#393A34;">ExecReload=/bin/kill -USR2 </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">MAINPID</span></span>
<span class="line"><span style="color:#393A34;">KillMode=mixed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Install</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">WantedBy=multi-user.target</span></span>
<span class="line"></span></code></pre></div><h2 id="haproxy\u547D\u4EE4\u884C\u5DE5\u5177" tabindex="-1">haproxy\u547D\u4EE4\u884C\u5DE5\u5177 <a class="header-anchor" href="#haproxy\u547D\u4EE4\u884C\u5DE5\u5177" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#DBD7CA;">haproxy -c -f /etc/haproxy/haproxy.cfg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4EE5daemon\u6A21\u5F0F\u542F\u52A8\uFF0C\u4EE5systemd\u7BA1\u7406\u7684daemon\u6A21\u5F0F\u542F\u52A8</span></span>
<span class="line"><span style="color:#DBD7CA;">haproxy -D -f /etc/haproxy/haproxy.cfg </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">-p /var/run/haproxy.pid</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">haproxy -Ds -f /etc/haproxy/haproxy.cfg </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">-p /var/run/haproxy.pid</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u542F\u52A8\u8C03\u8BD5\u529F\u80FD\uFF0C\u5C06\u663E\u793A\u6240\u6709\u8FDE\u63A5\u548C\u5904\u7406\u4FE1\u606F\u5728\u5C4F\u5E55</span></span>
<span class="line"><span style="color:#DBD7CA;">haproxy -d -f /etc/haproxy/haproxy.cfg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># restart\u3002\u9700\u8981\u4F7F\u7528st\u9009\u9879\u6307\u5B9Apid\u5217\u8868</span></span>
<span class="line"><span style="color:#DBD7CA;">haproxy -f /etc/haproxy.cfg </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">-p /var/run/haproxy.pid</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> -st </span><span style="color:#C98A7D;">\`cat /var/run/haproxy.pid\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># graceful restart\uFF0C\u5373reload\u3002\u9700\u8981\u4F7F\u7528sf\u9009\u9879\u6307\u5B9Apid\u5217\u8868</span></span>
<span class="line"><span style="color:#DBD7CA;">haproxy -f /etc/haproxy.cfg </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">-p /var/run/haproxy.pid</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> -sf </span><span style="color:#C98A7D;">\`cat /var/run/haproxy.pid\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u663E\u793Ahaproxy\u7F16\u8BD1\u548C\u542F\u52A8\u4FE1\u606F</span></span>
<span class="line"><span style="color:#DBD7CA;">haproxy -vv</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#393A34;">haproxy -c -f /etc/haproxy/haproxy.cfg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4EE5daemon\u6A21\u5F0F\u542F\u52A8\uFF0C\u4EE5systemd\u7BA1\u7406\u7684daemon\u6A21\u5F0F\u542F\u52A8</span></span>
<span class="line"><span style="color:#393A34;">haproxy -D -f /etc/haproxy/haproxy.cfg </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">-p /var/run/haproxy.pid</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">haproxy -Ds -f /etc/haproxy/haproxy.cfg </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">-p /var/run/haproxy.pid</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u542F\u52A8\u8C03\u8BD5\u529F\u80FD\uFF0C\u5C06\u663E\u793A\u6240\u6709\u8FDE\u63A5\u548C\u5904\u7406\u4FE1\u606F\u5728\u5C4F\u5E55</span></span>
<span class="line"><span style="color:#393A34;">haproxy -d -f /etc/haproxy/haproxy.cfg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># restart\u3002\u9700\u8981\u4F7F\u7528st\u9009\u9879\u6307\u5B9Apid\u5217\u8868</span></span>
<span class="line"><span style="color:#393A34;">haproxy -f /etc/haproxy.cfg </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">-p /var/run/haproxy.pid</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> -st </span><span style="color:#B56959;">\`cat /var/run/haproxy.pid\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># graceful restart\uFF0C\u5373reload\u3002\u9700\u8981\u4F7F\u7528sf\u9009\u9879\u6307\u5B9Apid\u5217\u8868</span></span>
<span class="line"><span style="color:#393A34;">haproxy -f /etc/haproxy.cfg </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">-p /var/run/haproxy.pid</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> -sf </span><span style="color:#B56959;">\`cat /var/run/haproxy.pid\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u663E\u793Ahaproxy\u7F16\u8BD1\u548C\u542F\u52A8\u4FE1\u606F</span></span>
<span class="line"><span style="color:#393A34;">haproxy -vv</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>\u5B98\u65B9\u7AD9\u70B9:<a href="http://www.haproxy.org/" target="_blank" rel="noopener noreferrer">http://www.haproxy.org/</a></li><li>1.8\u5B98\u65B9\u6587\u6863:<a href="http://cbonte.github.io/haproxy-dconv/1.8/configuration.html" target="_blank" rel="noopener noreferrer">http://cbonte.github.io/haproxy-dconv/1.8/configuration.html</a></li></ul>`,28),e=[o];function r(c,t,y,i,h,x){return a(),n("div",null,e)}var D=s(l,[["render",r]]);export{A as __pageData,D as default};
