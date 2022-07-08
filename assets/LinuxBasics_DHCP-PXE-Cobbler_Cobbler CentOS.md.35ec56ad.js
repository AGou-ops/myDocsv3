import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Cobbler CentOS","description":"","frontmatter":{},"headers":[{"level":2,"title":"Cobbler \u7B80\u4ECB","slug":"cobbler-\u7B80\u4ECB"},{"level":2,"title":"Cobbler \u90E8\u7F72","slug":"cobbler-\u90E8\u7F72"},{"level":2,"title":"\u7B80\u5355\u914D\u7F6E\u4E0E\u4F7F\u7528","slug":"\u7B80\u5355\u914D\u7F6E\u4E0E\u4F7F\u7528"},{"level":3,"title":"\u4FEE\u6539\u76F8\u5173\u914D\u7F6E","slug":"\u4FEE\u6539\u76F8\u5173\u914D\u7F6E"},{"level":2,"title":"cobbler-web \u56FE\u5F62\u5316\u5DE5\u5177","slug":"cobbler-web-\u56FE\u5F62\u5316\u5DE5\u5177"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/DHCP-PXE-Cobbler/Cobbler CentOS.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/DHCP-PXE-Cobbler/Cobbler CentOS.md"},o=l(`<h1 id="cobbler-centos" tabindex="-1">Cobbler CentOS <a class="header-anchor" href="#cobbler-centos" aria-hidden="true">#</a></h1><h2 id="cobbler-\u7B80\u4ECB" tabindex="-1">Cobbler \u7B80\u4ECB <a class="header-anchor" href="#cobbler-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Cobbler\u53EF\u4EE5\u9009\u62E9\u5E2E\u52A9\u7BA1\u7406<code>DHCP</code>\uFF0C<code>DNS</code>\u548C<code>yum\u8F6F\u4EF6\u5305\u955C\u50CF</code>\u57FA\u7840\u7ED3\u6784\u2013\u5728\u8FD9\u65B9\u9762\uFF0C\u5B83\u662F\u4E00\u79CD\u66F4\u901A\u7528\u7684\u81EA\u52A8\u5316\u5E94\u7528\u7A0B\u5E8F\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4E13\u95E8\u5904\u7406\u5B89\u88C5\u3002 \u8FD8\u6709\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u5185\u7F6E\u914D\u7F6E\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u4EE5\u53CA\u4E0EPuppet\u7B49\u914D\u7F6E\u7BA1\u7406\u7CFB\u7EDF\u96C6\u6210\u7684\u652F\u6301\u3002 Cobbler\u6709\u4E00\u4E2A\u547D\u4EE4\u884C\u754C\u9762\uFF0C\u4E00\u4E2AWeb\u754C\u9762\u4EE5\u53CA\u51E0\u4E2AAPI\u8BBF\u95EE\u9009\u9879\u3002 \u542C\u8D77\u6765\u5F88\u591A\uFF0C\u4F46\u5B9E\u9645\u4E0A\u975E\u5E38\u7B80\u5355\u3002</p><p>\u5B98\u65B9\u7AD9\u70B9: <a href="https://cobbler.github.io/" target="_blank" rel="noopener noreferrer">https://cobbler.github.io/</a></p><h2 id="cobbler-\u90E8\u7F72" tabindex="-1">Cobbler \u90E8\u7F72 <a class="header-anchor" href="#cobbler-\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u65B9\u4FBF\u8D77\u89C1, \u5EFA\u8BAE\u5173\u95ED\u9632\u706B\u5899\u548CSElinux(\u4E34\u65F6):</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#DBD7CA;">setenforce 0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#393A34;">setenforce 0</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0<code>epel</code>\u6E90\u5E76\u5B89\u88C5Cobbler\u53CAPXE\u76F8\u5173\u7A0B\u5E8F\u5305</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install epel-release -y</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install cobbler dhcp tftp tftp-server pykickstart httpd</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install epel-release -y</span></span>
<span class="line"><span style="color:#393A34;">yum install cobbler dhcp tftp tftp-server pykickstart httpd</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7B80\u5355\u914D\u7F6E\u4E0E\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u914D\u7F6E\u4E0E\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u914D\u7F6E\u4E0E\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u4FEE\u6539\u76F8\u5173\u914D\u7F6E" tabindex="-1">\u4FEE\u6539\u76F8\u5173\u914D\u7F6E <a class="header-anchor" href="#\u4FEE\u6539\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a></h3><ol><li>\u4FEE\u6539 Cobbler \u7684\u914D\u7F6E\u6587\u4EF6<code>/etc/cobbler/settings</code>, \u9009\u9879\u548C\u529F\u80FD\u975E\u5E38\u591A, \u4F46\u5B9E\u9645\u73AF\u5883\u7528\u5230\u7684\u5E76\u4E0D\u591A.</li></ol><p>\u4E3B\u8981\u4FEE\u6539\u5185\u5BB9\u6709:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">server: 192.168.99.99		</span><span style="color:#758575;"># \u8FD9\u91CC\u6539\u4E3A\u5F53\u524D\u4E3B\u673AIP</span></span>
<span class="line"><span style="color:#DBD7CA;">next_server: 192.168.99.99		</span><span style="color:#758575;"># \u8FD9\u91CC\u6539\u4E3A\u5F53\u524D\u4E3B\u673AIP</span></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528openssl\u6765\u52A0\u5BC6\u9ED8\u8BA4\u5BC6\u7801</span></span>
<span class="line"><span style="color:#758575;"># openssl passwd -1 -salt &#39;X5xfd&#39; &#39;suofeiya&#39; \u6216\u8005 openssl passwd -1</span></span>
<span class="line"><span style="color:#DBD7CA;">default_password_crypted: </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">1</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">X5xfd</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">VYYI6S7K6NiGJCq1ywt6x.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u662F\u5426\u5F00\u542F\u7BA1\u7406dhcp\u670D\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">manage_dhcp: 1		</span><span style="color:#758575;"># 1\u8868\u793A\u5F00\u542F,\u5982\u679C\u60F3\u5355\u72EC\u7BA1\u7406dhcp\u7684\u8BDD,\u53EF\u4EE5\u5C06\u5176\u5173\u95ED,\u8BBE\u7F6E\u4E3A0\u5373\u53EF</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">server: 192.168.99.99		</span><span style="color:#A0ADA0;"># \u8FD9\u91CC\u6539\u4E3A\u5F53\u524D\u4E3B\u673AIP</span></span>
<span class="line"><span style="color:#393A34;">next_server: 192.168.99.99		</span><span style="color:#A0ADA0;"># \u8FD9\u91CC\u6539\u4E3A\u5F53\u524D\u4E3B\u673AIP</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528openssl\u6765\u52A0\u5BC6\u9ED8\u8BA4\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A0ADA0;"># openssl passwd -1 -salt &#39;X5xfd&#39; &#39;suofeiya&#39; \u6216\u8005 openssl passwd -1</span></span>
<span class="line"><span style="color:#393A34;">default_password_crypted: </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">1</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">X5xfd</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">VYYI6S7K6NiGJCq1ywt6x.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u662F\u5426\u5F00\u542F\u7BA1\u7406dhcp\u670D\u52A1</span></span>
<span class="line"><span style="color:#393A34;">manage_dhcp: 1		</span><span style="color:#A0ADA0;"># 1\u8868\u793A\u5F00\u542F,\u5982\u679C\u60F3\u5355\u72EC\u7BA1\u7406dhcp\u7684\u8BDD,\u53EF\u4EE5\u5C06\u5176\u5173\u95ED,\u8BBE\u7F6E\u4E3A0\u5373\u53EF</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u5728<code>settings</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u5F00\u542F\u4E86<code>manage_dhcp</code>\u7684\u8BDD, \u9700\u8981\u4FEE\u6539 DHCP \u7684\u6A21\u677F\u6587\u4EF6, \u5373<code>/etc/cobbler/dhcp.template</code></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u53EA\u9700\u5C06\u4EE5\u4E0B\u914D\u7F6E\u5757\u7A0D\u4F5C\u4FEE\u6539\u5373\u53EF</span></span>
<span class="line"><span style="color:#DBD7CA;">subnet 192.168.1.0 netmask 255.255.255.0 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">     option routers             192.168.99.1</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     option subnet-mask         255.255.255.0</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     filename                   </span><span style="color:#C98A7D;">&quot;/pxelinux.0&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     default-lease-time         2.8.0</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     max-lease-time             43200</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">     next-server                </span><span style="color:#858585;">$</span><span style="color:#B8A965;">next_server</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u53EA\u9700\u5C06\u4EE5\u4E0B\u914D\u7F6E\u5757\u7A0D\u4F5C\u4FEE\u6539\u5373\u53EF</span></span>
<span class="line"><span style="color:#393A34;">subnet 192.168.1.0 netmask 255.255.255.0 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">     option routers             192.168.99.1</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     option subnet-mask         255.255.255.0</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     filename                   </span><span style="color:#B56959;">&quot;/pxelinux.0&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     default-lease-time         2.8.0</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     max-lease-time             43200</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">     next-server                </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">next_server</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4E0D\u60F3\u8BA9 Cobbler \u7BA1\u7406 DHCP \u7684\u8BDD, \u53EF\u4EE5\u76F4\u63A5\u7F16\u8F91<code>/etc/dhcp/dhcpd.conf</code>\u6587\u4EF6\u4E5F\u53EF\u4EE5.</p><p>\u793A\u4F8B<code>dhcpd.conf</code>\u6587\u4EF6:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># option definitions common to all supported networks...</span></span>
<span class="line"><span style="color:#758575;"># \u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">option domain-name </span><span style="color:#C98A7D;">&quot;agou-ops.com&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">option domain-name-servers 192.168.159.2</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u6307\u5B9A\u9ED8\u8BA4DNS\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#DBD7CA;">option routers 192.168.99.1</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">		</span><span style="color:#758575;"># \u6307\u5B9A\u9ED8\u8BA4\u8DEF\u7531</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">default-lease-time 43200</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">max-lease-time 86400</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">log-facility local7</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;"># \u5B50\u7F51\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">subnet 192.168.0.0 netmask 255.255.0.0 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    range 192.168.99.101 192.168.99.120</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    filename </span><span style="color:#C98A7D;">&quot;pxelinux.0&quot;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    next-server 192.168.99.99</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># \u4E3A\u7279\u5B9A\u4E3B\u673A\u5206\u914D\u56FA\u5B9AIP\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">host apex </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   hardware ethernet 00:0c:29:b8:73:9e</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">   fixed-address 192.168.99.99</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># option definitions common to all supported networks...</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">option domain-name </span><span style="color:#B56959;">&quot;agou-ops.com&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">option domain-name-servers 192.168.159.2</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u6307\u5B9A\u9ED8\u8BA4DNS\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#393A34;">option routers 192.168.99.1</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">		</span><span style="color:#A0ADA0;"># \u6307\u5B9A\u9ED8\u8BA4\u8DEF\u7531</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">default-lease-time 43200</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">max-lease-time 86400</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">log-facility local7</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B50\u7F51\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">subnet 192.168.0.0 netmask 255.255.0.0 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    range 192.168.99.101 192.168.99.120</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    filename </span><span style="color:#B56959;">&quot;pxelinux.0&quot;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    next-server 192.168.99.99</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E3A\u7279\u5B9A\u4E3B\u673A\u5206\u914D\u56FA\u5B9AIP\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">host apex </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   hardware ethernet 00:0c:29:b8:73:9e</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">   fixed-address 192.168.99.99</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u542F\u52A8\u76F8\u5173\u670D\u52A1:</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl start httpd rsyncd tftp cobblerd</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl start httpd rsyncd tftp cobblerd</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u4F7F\u7528<code>cobbler check</code>\u547D\u4EE4\u6765\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u7B49\u76F8\u5173\u4FE1\u606F</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">The following are potential configuration items that you may want to fix:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">1 </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> change </span><span style="color:#C98A7D;">&#39;disable&#39;</span><span style="color:#DBD7CA;"> to </span><span style="color:#C98A7D;">&#39;no&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">in</span><span style="color:#DBD7CA;"> /etc/xinetd.d/tftp</span></span>
<span class="line"><span style="color:#DBD7CA;">2 </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> Some network boot-loaders are missing from /var/lib/cobbler/loaders, you may run </span><span style="color:#C98A7D;">&#39;cobbler get-loaders&#39;</span><span style="color:#DBD7CA;"> to download them, or, </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> you only want to handle x86/x86_64 netbooting, you may ensure that you have installed a </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">recent</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> version of the syslinux package installed and can ignore this message entirely.  Files </span><span style="color:#4D9375;">in</span><span style="color:#DBD7CA;"> this directory, should you want to support all architectures, should include pxelinux.0, menu.c32, elilo.efi, and yaboot. The </span><span style="color:#C98A7D;">&#39;cobbler get-loaders&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">command</span><span style="color:#DBD7CA;"> is the easiest way to resolve these requirements.</span></span>
<span class="line"><span style="color:#DBD7CA;">3 </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> and start rsyncd.service with systemctl</span></span>
<span class="line"><span style="color:#DBD7CA;">4 </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> debmirror package is not installed, it will be required to manage debian deployments and repositories</span></span>
<span class="line"><span style="color:#DBD7CA;">5 </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> ksvalidator was not found, install pykickstart</span></span>
<span class="line"><span style="color:#DBD7CA;">6 </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> fencing tools were not found, and are required to use the </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">optional</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> power management features. install cman or fence-agents to use them</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Restart cobblerd and </span><span style="color:#4D9375;">then</span><span style="color:#DBD7CA;"> run </span><span style="color:#C98A7D;">&#39;cobbler sync&#39;</span><span style="color:#DBD7CA;"> to apply changes.</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">The following are potential configuration items that you may want to fix:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">1 </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> change </span><span style="color:#B56959;">&#39;disable&#39;</span><span style="color:#393A34;"> to </span><span style="color:#B56959;">&#39;no&#39;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">in</span><span style="color:#393A34;"> /etc/xinetd.d/tftp</span></span>
<span class="line"><span style="color:#393A34;">2 </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> Some network boot-loaders are missing from /var/lib/cobbler/loaders, you may run </span><span style="color:#B56959;">&#39;cobbler get-loaders&#39;</span><span style="color:#393A34;"> to download them, or, </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> you only want to handle x86/x86_64 netbooting, you may ensure that you have installed a </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">recent</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> version of the syslinux package installed and can ignore this message entirely.  Files </span><span style="color:#1C6B48;">in</span><span style="color:#393A34;"> this directory, should you want to support all architectures, should include pxelinux.0, menu.c32, elilo.efi, and yaboot. The </span><span style="color:#B56959;">&#39;cobbler get-loaders&#39;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">command</span><span style="color:#393A34;"> is the easiest way to resolve these requirements.</span></span>
<span class="line"><span style="color:#393A34;">3 </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> and start rsyncd.service with systemctl</span></span>
<span class="line"><span style="color:#393A34;">4 </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> debmirror package is not installed, it will be required to manage debian deployments and repositories</span></span>
<span class="line"><span style="color:#393A34;">5 </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> ksvalidator was not found, install pykickstart</span></span>
<span class="line"><span style="color:#393A34;">6 </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> fencing tools were not found, and are required to use the </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">optional</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> power management features. install cman or fence-agents to use them</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Restart cobblerd and </span><span style="color:#1C6B48;">then</span><span style="color:#393A34;"> run </span><span style="color:#B56959;">&#39;cobbler sync&#39;</span><span style="color:#393A34;"> to apply changes.</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u590D1,2,5\u5373\u53EF,\u5176\u4ED6\u5747\u53EF\u5FFD\u7565</p><ol start="5"><li>\u6302\u8F7D\u5149\u76D8\u955C\u50CF\u6587\u4EF6:</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mount -t iso9660 -o loop,ro /dev/cdrom /mnt/centos7/</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mount -t iso9660 -o loop,ro /dev/cdrom /mnt/centos7/</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u5BFC\u5165\u955C\u50CF\u5230 Cobbler</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@node02 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  cobbler import --name=CentOS-7-Minimal-1908 --arch=x86_64 --path=/mnt/centos7</span></span>
<span class="line"><span style="color:#DBD7CA;">task started: 2020-04-21_021858_import</span></span>
<span class="line"><span style="color:#DBD7CA;">task started </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">id=Media import, time=Tue Apr 21 02:18:58 2020</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">Found a candidate signature: breed=redhat, version=rhel6</span></span>
<span class="line"><span style="color:#DBD7CA;">Found a candidate signature: breed=redhat, version=rhel7</span></span>
<span class="line"><span style="color:#DBD7CA;">Found a matching signature: breed=redhat, version=rhel7</span></span>
<span class="line"><span style="color:#DBD7CA;">Adding distros from path /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64:</span></span>
<span class="line"><span style="color:#DBD7CA;">creating new distro: CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">trying symlink: /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64 -</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /var/www/cobbler/links/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">creating new profile: CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">associating repos</span></span>
<span class="line"><span style="color:#DBD7CA;">checking </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> rsync repo</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">s</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">checking </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> rhn repo</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">s</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">checking </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> yum repo</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">s</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">starting descent into /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64 </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">processing repo at </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">need to process repo/comps: /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">looking </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/repodata/</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">comps</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">.xml</span></span>
<span class="line"><span style="color:#DBD7CA;">Keeping repodata as-is :/var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/repodata</span></span>
<span class="line"><span style="color:#CB7676;">***</span><span style="color:#DBD7CA;"> TASK COMPLETE </span><span style="color:#CB7676;">***</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@node02 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  cobbler import --name=CentOS-7-Minimal-1908 --arch=x86_64 --path=/mnt/centos7</span></span>
<span class="line"><span style="color:#393A34;">task started: 2020-04-21_021858_import</span></span>
<span class="line"><span style="color:#393A34;">task started </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">id=Media import, time=Tue Apr 21 02:18:58 2020</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">Found a candidate signature: breed=redhat, version=rhel6</span></span>
<span class="line"><span style="color:#393A34;">Found a candidate signature: breed=redhat, version=rhel7</span></span>
<span class="line"><span style="color:#393A34;">Found a matching signature: breed=redhat, version=rhel7</span></span>
<span class="line"><span style="color:#393A34;">Adding distros from path /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64:</span></span>
<span class="line"><span style="color:#393A34;">creating new distro: CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">trying symlink: /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64 -</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /var/www/cobbler/links/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">creating new profile: CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">associating repos</span></span>
<span class="line"><span style="color:#393A34;">checking </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> rsync repo</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">s</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">checking </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> rhn repo</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">s</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">checking </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> yum repo</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">s</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">starting descent into /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64 </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">processing repo at </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">need to process repo/comps: /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">looking </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/repodata/</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">comps</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">.xml</span></span>
<span class="line"><span style="color:#393A34;">Keeping repodata as-is :/var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/repodata</span></span>
<span class="line"><span style="color:#AB5959;">***</span><span style="color:#393A34;"> TASK COMPLETE </span><span style="color:#AB5959;">***</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>\u6267\u884C<code>cobbler sync</code>\u540C\u6B65\u914D\u7F6E</li><li>\u4F7F\u7528<code>cobbler list</code>\u67E5\u770B\u76F8\u5173\u4FE1\u606F</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ cobbler list</span></span>
<span class="line"><span style="color:#DBD7CA;">distros:</span></span>
<span class="line"><span style="color:#DBD7CA;">   CentOS-7-Minimal-1908-x86_64			</span><span style="color:#758575;"># \u76F8\u5F53\u4E8EISO\u955C\u50CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">profiles:</span></span>
<span class="line"><span style="color:#DBD7CA;">   CentOS-7-Minimal-1908-x86_64			</span><span style="color:#758575;"># \u76F8\u5F53\u4E8Ekickstart\u6587\u4EF6,\u5982\u679C\u4E0D\u60F3\u7528\u81EA\u52A8\u751F\u6210\u7684kickstart\u6587\u4EF6,\u53EF\u4EE5\u81EA\u884C\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005\u5355\u72EC\u67E5\u770B</span></span>
<span class="line"><span style="color:#DBD7CA;">$ cobbler distro list</span></span>
<span class="line"><span style="color:#DBD7CA;">$ cobbler profile list</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ cobbler list</span></span>
<span class="line"><span style="color:#393A34;">distros:</span></span>
<span class="line"><span style="color:#393A34;">   CentOS-7-Minimal-1908-x86_64			</span><span style="color:#A0ADA0;"># \u76F8\u5F53\u4E8EISO\u955C\u50CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">profiles:</span></span>
<span class="line"><span style="color:#393A34;">   CentOS-7-Minimal-1908-x86_64			</span><span style="color:#A0ADA0;"># \u76F8\u5F53\u4E8Ekickstart\u6587\u4EF6,\u5982\u679C\u4E0D\u60F3\u7528\u81EA\u52A8\u751F\u6210\u7684kickstart\u6587\u4EF6,\u53EF\u4EE5\u81EA\u884C\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005\u5355\u72EC\u67E5\u770B</span></span>
<span class="line"><span style="color:#393A34;">$ cobbler distro list</span></span>
<span class="line"><span style="color:#393A34;">$ cobbler profile list</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u8BE6\u7EC6\u72B6\u6001:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@node02 conf.d</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cobbler distro report --name=CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">Name                           </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">Architecture                   </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> x86_64</span></span>
<span class="line"><span style="color:#DBD7CA;">TFTP Boot Files                </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> {}</span></span>
<span class="line"><span style="color:#DBD7CA;">Breed                          </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> redhat</span></span>
<span class="line"><span style="color:#DBD7CA;">Comment                        </span><span style="color:#E0A569;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">Fetchable Files                </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> {}</span></span>
<span class="line"><span style="color:#DBD7CA;">Initrd                         </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/images/pxeboot/initrd.img</span></span>
<span class="line"><span style="color:#DBD7CA;">Kernel                         </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/images/pxeboot/vmlinuz</span></span>
<span class="line"><span style="color:#DBD7CA;">Kernel Options                 </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> {}</span></span>
<span class="line"><span style="color:#DBD7CA;">Kernel Options </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">Post Install</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> {}</span></span>
<span class="line"><span style="color:#DBD7CA;">Kickstart Metadata             </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> {</span><span style="color:#C98A7D;">&#39;tree&#39;</span><span style="color:#DBD7CA;">: </span><span style="color:#C98A7D;">&#39;http://@@http_server@@/cblr/links/CentOS-7-Minimal-1908-x86_64&#39;</span><span style="color:#DBD7CA;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">Management Classes             </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[]</span></span>
<span class="line"><span style="color:#DBD7CA;">OS Version                     </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> rhel7</span></span>
<span class="line"><span style="color:#DBD7CA;">Owners                         </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&#39;admin&#39;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Red Hat Management Key         </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">inherit&gt;&gt;</span></span>
<span class="line"><span style="color:#C98A7D;">Red Hat Management Server      : &lt;&lt;inherit&gt;&gt;</span></span>
<span class="line"><span style="color:#C98A7D;">Template Files                 : {}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@node02 conf.d</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cobbler distro report --name=CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">Name                           </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"><span style="color:#393A34;">Architecture                   </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> x86_64</span></span>
<span class="line"><span style="color:#393A34;">TFTP Boot Files                </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> {}</span></span>
<span class="line"><span style="color:#393A34;">Breed                          </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> redhat</span></span>
<span class="line"><span style="color:#393A34;">Comment                        </span><span style="color:#B58451;">:</span></span>
<span class="line"><span style="color:#393A34;">Fetchable Files                </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> {}</span></span>
<span class="line"><span style="color:#393A34;">Initrd                         </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/images/pxeboot/initrd.img</span></span>
<span class="line"><span style="color:#393A34;">Kernel                         </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> /var/www/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64/images/pxeboot/vmlinuz</span></span>
<span class="line"><span style="color:#393A34;">Kernel Options                 </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> {}</span></span>
<span class="line"><span style="color:#393A34;">Kernel Options </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">Post Install</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">  </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> {}</span></span>
<span class="line"><span style="color:#393A34;">Kickstart Metadata             </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> {</span><span style="color:#B56959;">&#39;tree&#39;</span><span style="color:#393A34;">: </span><span style="color:#B56959;">&#39;http://@@http_server@@/cblr/links/CentOS-7-Minimal-1908-x86_64&#39;</span><span style="color:#393A34;">}</span></span>
<span class="line"><span style="color:#393A34;">Management Classes             </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[]</span></span>
<span class="line"><span style="color:#393A34;">OS Version                     </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> rhel7</span></span>
<span class="line"><span style="color:#393A34;">Owners                         </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&#39;admin&#39;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Red Hat Management Key         </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">inherit&gt;&gt;</span></span>
<span class="line"><span style="color:#B56959;">Red Hat Management Server      : &lt;&lt;inherit&gt;&gt;</span></span>
<span class="line"><span style="color:#B56959;">Template Files                 : {}</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8Bks\u6587\u4EF6:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">auth --useshadow  --enablemd5</span></span>
<span class="line"><span style="color:#DBD7CA;">install</span></span>
<span class="line"><span style="color:#DBD7CA;">text</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall --enabled</span></span>
<span class="line"><span style="color:#DBD7CA;">firstboot --disable</span></span>
<span class="line"><span style="color:#DBD7CA;">ignoredisk --only-use=sda</span></span>
<span class="line"><span style="color:#DBD7CA;">keyboard --vckeymap=us --xlayouts=</span><span style="color:#C98A7D;">&#39;&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">lang en_US.UTF-8</span></span>
<span class="line"><span style="color:#DBD7CA;">network  --bootproto=dhcp --device=eth0 --activate</span></span>
<span class="line"><span style="color:#DBD7CA;">network  --hostname=localhost.localdomain</span></span>
<span class="line"><span style="color:#DBD7CA;">reboot</span></span>
<span class="line"><span style="color:#DBD7CA;">repo --name=</span><span style="color:#C98A7D;">&quot;source-1&quot;</span><span style="color:#DBD7CA;"> --baseurl=http://192.168.99.99/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">url --url=</span><span style="color:#C98A7D;">&quot;http://192.168.99.99/cblr/links/CentOS-7-Minimal-1908-x86_64&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">rootpw --iscrypted </span><span style="color:#858585;">$</span><span style="color:#B8A965;">1</span><span style="color:#858585;">$</span><span style="color:#B8A965;">X5xfd</span><span style="color:#858585;">$</span><span style="color:#B8A965;">VYYI6S7K6NiGJCq1ywt6x</span><span style="color:#DBD7CA;">.</span></span>
<span class="line"><span style="color:#DBD7CA;">selinux --disabled</span></span>
<span class="line"><span style="color:#DBD7CA;">services --enabled=</span><span style="color:#C98A7D;">&quot;chronyd&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">skipx</span></span>
<span class="line"><span style="color:#DBD7CA;">timezone Asia/Shanghai</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">bootloader --append=</span><span style="color:#C98A7D;">&quot; crashkernel=auto&quot;</span><span style="color:#DBD7CA;"> --location=mbr --boot-drive=sda</span></span>
<span class="line"><span style="color:#DBD7CA;">autopart --type=lvm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">zerombr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">clearpart --all --initlabel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%pre</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> -x -v</span></span>
<span class="line"><span style="color:#E0A569;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">/tmp/ks-pre.log </span><span style="color:#CB7676;">2&gt;&amp;1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">while</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">do</span></span>
<span class="line"><span style="color:#DBD7CA;">    sleep 10</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-d</span><span style="color:#DBD7CA;"> /mnt/sysimage/root </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">then</span></span>
<span class="line"><span style="color:#DBD7CA;">        cp /tmp/ks-pre.log /mnt/sysimage/root/</span></span>
<span class="line"><span style="color:#DBD7CA;">        logger </span><span style="color:#C98A7D;">&quot;Copied %pre section log to system&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">break</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">fi</span></span>
<span class="line"><span style="color:#4D9375;">done</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">curl </span><span style="color:#C98A7D;">&quot;http://192.168.99.99/cblr/svc/op/trig/mode/pre/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#DBD7CA;"> -o /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%post --nochroot</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> -x -v</span></span>
<span class="line"><span style="color:#E0A569;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">/mnt/sysimage/root/ks-post-nochroot.log </span><span style="color:#CB7676;">2&gt;&amp;1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%post</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> -x -v</span></span>
<span class="line"><span style="color:#E0A569;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">/root/ks-post.log </span><span style="color:#CB7676;">2&gt;&amp;1</span></span>
<span class="line"><span style="color:#DBD7CA;">curl </span><span style="color:#C98A7D;">&quot;http://192.168.99.99/cblr/svc/op/yum/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#DBD7CA;"> --output /etc/yum.repos.d/cobbler-config.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;export COBBLER_SERVER=192.168.99.99&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /etc/profile.d/cobbler.sh</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;setenv COBBLER_SERVER 192.168.99.99&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /etc/profile.d/cobbler.csh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">curl </span><span style="color:#C98A7D;">&quot;http://192.168.99.99/cblr/svc/op/ks/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#DBD7CA;"> -o /root/cobbler.ks</span></span>
<span class="line"><span style="color:#DBD7CA;">curl </span><span style="color:#C98A7D;">&quot;http://192.168.99.99/cblr/svc/op/trig/mode/post/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#DBD7CA;"> -o /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%packages</span></span>
<span class="line"><span style="color:#DBD7CA;">chrony</span></span>
<span class="line"><span style="color:#DBD7CA;">kexec-tools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%addon com_redhat_kdump --enable --reserve-mb=</span><span style="color:#C98A7D;">&#39;auto&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">%end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">auth --useshadow  --enablemd5</span></span>
<span class="line"><span style="color:#393A34;">install</span></span>
<span class="line"><span style="color:#393A34;">text</span></span>
<span class="line"><span style="color:#393A34;">firewall --enabled</span></span>
<span class="line"><span style="color:#393A34;">firstboot --disable</span></span>
<span class="line"><span style="color:#393A34;">ignoredisk --only-use=sda</span></span>
<span class="line"><span style="color:#393A34;">keyboard --vckeymap=us --xlayouts=</span><span style="color:#B56959;">&#39;&#39;</span></span>
<span class="line"><span style="color:#393A34;">lang en_US.UTF-8</span></span>
<span class="line"><span style="color:#393A34;">network  --bootproto=dhcp --device=eth0 --activate</span></span>
<span class="line"><span style="color:#393A34;">network  --hostname=localhost.localdomain</span></span>
<span class="line"><span style="color:#393A34;">reboot</span></span>
<span class="line"><span style="color:#393A34;">repo --name=</span><span style="color:#B56959;">&quot;source-1&quot;</span><span style="color:#393A34;"> --baseurl=http://192.168.99.99/cobbler/ks_mirror/CentOS-7-Minimal-1908-x86_64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">url --url=</span><span style="color:#B56959;">&quot;http://192.168.99.99/cblr/links/CentOS-7-Minimal-1908-x86_64&quot;</span></span>
<span class="line"><span style="color:#393A34;">rootpw --iscrypted </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">1</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">X5xfd</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">VYYI6S7K6NiGJCq1ywt6x</span><span style="color:#393A34;">.</span></span>
<span class="line"><span style="color:#393A34;">selinux --disabled</span></span>
<span class="line"><span style="color:#393A34;">services --enabled=</span><span style="color:#B56959;">&quot;chronyd&quot;</span></span>
<span class="line"><span style="color:#393A34;">skipx</span></span>
<span class="line"><span style="color:#393A34;">timezone Asia/Shanghai</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">bootloader --append=</span><span style="color:#B56959;">&quot; crashkernel=auto&quot;</span><span style="color:#393A34;"> --location=mbr --boot-drive=sda</span></span>
<span class="line"><span style="color:#393A34;">autopart --type=lvm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">zerombr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">clearpart --all --initlabel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%pre</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> -x -v</span></span>
<span class="line"><span style="color:#B58451;">exec</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">/tmp/ks-pre.log </span><span style="color:#AB5959;">2&gt;&amp;1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">while</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">do</span></span>
<span class="line"><span style="color:#393A34;">    sleep 10</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-d</span><span style="color:#393A34;"> /mnt/sysimage/root </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">then</span></span>
<span class="line"><span style="color:#393A34;">        cp /tmp/ks-pre.log /mnt/sysimage/root/</span></span>
<span class="line"><span style="color:#393A34;">        logger </span><span style="color:#B56959;">&quot;Copied %pre section log to system&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">break</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">fi</span></span>
<span class="line"><span style="color:#1C6B48;">done</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">curl </span><span style="color:#B56959;">&quot;http://192.168.99.99/cblr/svc/op/trig/mode/pre/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#393A34;"> -o /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%post --nochroot</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> -x -v</span></span>
<span class="line"><span style="color:#B58451;">exec</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">/mnt/sysimage/root/ks-post-nochroot.log </span><span style="color:#AB5959;">2&gt;&amp;1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%post</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> -x -v</span></span>
<span class="line"><span style="color:#B58451;">exec</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">/root/ks-post.log </span><span style="color:#AB5959;">2&gt;&amp;1</span></span>
<span class="line"><span style="color:#393A34;">curl </span><span style="color:#B56959;">&quot;http://192.168.99.99/cblr/svc/op/yum/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#393A34;"> --output /etc/yum.repos.d/cobbler-config.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;export COBBLER_SERVER=192.168.99.99&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /etc/profile.d/cobbler.sh</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;setenv COBBLER_SERVER 192.168.99.99&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /etc/profile.d/cobbler.csh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">curl </span><span style="color:#B56959;">&quot;http://192.168.99.99/cblr/svc/op/ks/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#393A34;"> -o /root/cobbler.ks</span></span>
<span class="line"><span style="color:#393A34;">curl </span><span style="color:#B56959;">&quot;http://192.168.99.99/cblr/svc/op/trig/mode/post/profile/CentOS-7-Minimal-1908-x86_64&quot;</span><span style="color:#393A34;"> -o /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%packages</span></span>
<span class="line"><span style="color:#393A34;">chrony</span></span>
<span class="line"><span style="color:#393A34;">kexec-tools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%addon com_redhat_kdump --enable --reserve-mb=</span><span style="color:#B56959;">&#39;auto&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">%end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="cobbler-web-\u56FE\u5F62\u5316\u5DE5\u5177" tabindex="-1">cobbler-web \u56FE\u5F62\u5316\u5DE5\u5177 <a class="header-anchor" href="#cobbler-web-\u56FE\u5F62\u5316\u5DE5\u5177" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install cobbler-web -y</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install cobbler-web -y</span></span>
<span class="line"></span></code></pre></div><p>cobbler-web \u652F\u6301\u591A\u79CD\u8BA4\u8BC1\u65B9\u5F0F, \u9ED8\u8BA4\u7684\u662F<code>configfile</code>\u6A21\u5757\u8BA4\u8BC1, \u8FD9\u79CD\u65B9\u5F0F\u7684\u8BA4\u8BC1\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>htdigest</code>\u547D\u4EE4\u6DFB\u52A0<code>cobbler</code>\u7528\u6237\u548C\u5BC6\u7801, \u5176\u8BA4\u8BC1\u65B9\u5F0F\u76F8\u5173\u8BBE\u7F6E\u5728<code>/etc/cobbler/modules.conf</code></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@node02 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> htdigest -c /etc/cobbler/user.digest Cobbler admin</span></span>
<span class="line"><span style="color:#DBD7CA;">Adding password </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">admin</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">in</span><span style="color:#DBD7CA;"> realm Cobbler.</span></span>
<span class="line"><span style="color:#DBD7CA;">New password:</span></span>
<span class="line"><span style="color:#DBD7CA;">Re-type new password:</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@node02 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> htdigest -c /etc/cobbler/user.digest Cobbler admin</span></span>
<span class="line"><span style="color:#393A34;">Adding password </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">admin</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">in</span><span style="color:#393A34;"> realm Cobbler.</span></span>
<span class="line"><span style="color:#393A34;">New password:</span></span>
<span class="line"><span style="color:#393A34;">Re-type new password:</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F: Cobbler-web \u9ED8\u8BA4\u662F\u5F00\u542F SSL \u7684, \u6240\u4EE5\u8981\u901A\u8FC7<code>https://YOUR_IP/cobbler-web</code>\u6765\u8BBF\u95EE.</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Quick Start: <a href="https://cobbler.github.io/quickstart/" target="_blank" rel="noopener noreferrer">https://cobbler.github.io/quickstart/</a></li><li>Cobbler: <a href="https://cobbler.readthedocs.io/en/release28/about.html" target="_blank" rel="noopener noreferrer">https://cobbler.readthedocs.io/en/release28/about.html</a></li><li>Cobbler WEB : <a href="https://cobbler.readthedocs.io/en/release28/web-interface.html" target="_blank" rel="noopener noreferrer">https://cobbler.readthedocs.io/en/release28/web-interface.html</a></li></ul>`,41),e=[o];function c(t,r,i,y,A,d){return n(),a("div",null,e)}var C=s(p,[["render",c]]);export{B as __pageData,C as default};
