import{_ as s,o as n,c as a,a as e}from"./app.1e6146c3.js";const h=JSON.parse('{"title":"dnsmasq \u90E8\u7F72\u4E0E\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F16\u8BD1\u5B89\u88C5","slug":"\u7F16\u8BD1\u5B89\u88C5"},{"level":2,"title":"install dnsmasq on ubuntu","slug":"install-dnsmasq-on-ubuntu"},{"level":3,"title":"Step 1: Installing Dnsmasq on Ubuntu 18.04","slug":"step-1-installing-dnsmasq-on-ubuntu-18-04"},{"level":3,"title":"Step 2: Adding DNS records to Dnsmasq","slug":"step-2-adding-dns-records-to-dnsmasq"},{"level":3,"title":"Step 3: Testing Dnsmasq DNS functionality","slug":"step-3-testing-dnsmasq-dns-functionality"},{"level":3,"title":"Configure Dnsmasq as DHCP Server (Optional)","slug":"configure-dnsmasq-as-dhcp-server-optional"},{"level":3,"title":"Conclusion","slug":"conclusion"},{"level":2,"title":"install dnsmasq on CentOS","slug":"install-dnsmasq-on-centos"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/dnsmasq.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/dnsmasq.md"},p=e(`<h1 id="dnsmasq-\u90E8\u7F72\u4E0E\u4F7F\u7528" tabindex="-1">dnsmasq \u90E8\u7F72\u4E0E\u4F7F\u7528 <a class="header-anchor" href="#dnsmasq-\u90E8\u7F72\u4E0E\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u4ECE <a href="http://www.thekelleys.org.uk/dnsmasq/" target="_blank" rel="noopener noreferrer">http://www.thekelleys.org.uk/dnsmasq/</a> \u4E0B\u8F7D\u6E90\u7801\u5305, \u5B89\u88C5\u7F16\u8BD1\u73AF\u5883, \u7136\u540E\u76F4\u63A5\u4F7F\u7528<code>root</code>\u8EAB\u4EFD\u8FD0\u884C<code>make install</code>\u547D\u4EE4\u5373\u53EF, \u9ED8\u8BA4\u5B89\u88C5\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4F4D\u7F6E\u4E3A<code>/usr/local/sbin/dnsmasq</code>.</p><h2 id="install-dnsmasq-on-ubuntu" tabindex="-1">install dnsmasq on ubuntu <a class="header-anchor" href="#install-dnsmasq-on-ubuntu" aria-hidden="true">#</a></h2><h3 id="step-1-installing-dnsmasq-on-ubuntu-18-04" tabindex="-1">Step 1: Installing Dnsmasq on Ubuntu 18.04 <a class="header-anchor" href="#step-1-installing-dnsmasq-on-ubuntu-18-04" aria-hidden="true">#</a></h3><p>Ubuntu 18.04 comes with systemd-resolve which you need to disable since it binds to port <strong>53</strong> which will conflict with Dnsmasq port.</p><p>Run the following commands to disable the resolved service:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo systemctl disable systemd-resolved</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo systemctl stop systemd-resolved</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo systemctl disable systemd-resolved</span></span>
<span class="line"><span style="color:#393A34;">sudo systemctl stop systemd-resolved</span></span>
<span class="line"></span></code></pre></div><p>Also, remove the symlinked <code>resolv.conf</code> file</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ ls -lh /etc/resolv.conf </span></span>
<span class="line"><span style="color:#DBD7CA;">lrwxrwxrwx 1 root root 39 Aug  8 15:52 /etc/resolv.conf -</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> ../run/systemd/resolve/stub-resolv.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo rm /etc/resolv.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ ls -lh /etc/resolv.conf </span></span>
<span class="line"><span style="color:#393A34;">lrwxrwxrwx 1 root root 39 Aug  8 15:52 /etc/resolv.conf -</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> ../run/systemd/resolve/stub-resolv.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">$ sudo rm /etc/resolv.conf</span></span>
<span class="line"></span></code></pre></div><p>Then create new <strong>resolv.conf</strong> file.</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;nameserver 8.8.8.8&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /etc/resolv.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;nameserver 8.8.8.8&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /etc/resolv.conf</span></span>
<span class="line"></span></code></pre></div><p>Dnsmasq is available on the apt repository, easy installation can be done by running:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo apt-get install dnsmasq</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo apt-get install dnsmasq</span></span>
<span class="line"></span></code></pre></div><p>The main configuration file for Dnsmasq is <code>/etc/dnsmasq.conf</code>. Configure Dnsmasq by modifying this file.</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo vim /etc/dnsmasq.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo vim /etc/dnsmasq.conf</span></span>
<span class="line"></span></code></pre></div><p>Here is minimal configuration</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># Listen on this specific port instead of the standard DNS port</span></span>
<span class="line"><span style="color:#758575;"># (53). Setting this to zero completely disables DNS function,</span></span>
<span class="line"><span style="color:#758575;"># leaving only DHCP and/or TFTP.</span></span>
<span class="line"><span style="color:#DBD7CA;">port=53</span></span>
<span class="line"><span style="color:#758575;"># Never forward plain names (without a dot or domain part)</span></span>
<span class="line"><span style="color:#DBD7CA;">domain-needed</span></span>
<span class="line"><span style="color:#758575;"># Never forward addresses in the non-routed address spaces.</span></span>
<span class="line"><span style="color:#DBD7CA;">bogus-priv</span></span>
<span class="line"><span style="color:#758575;"># By  default,  dnsmasq  will  send queries to any of the upstream</span></span>
<span class="line"><span style="color:#758575;"># servers it knows about and tries to favour servers to are  known</span></span>
<span class="line"><span style="color:#758575;"># to  be  up.  Uncommenting this forces dnsmasq to try each query</span></span>
<span class="line"><span style="color:#758575;"># with  each  server  strictly  in  the  order  they   appear   in</span></span>
<span class="line"><span style="color:#758575;"># /etc/resolv.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">strict-order</span></span>
<span class="line"><span style="color:#758575;"># Set this (and domain: see below) if you want to have a domain</span></span>
<span class="line"><span style="color:#758575;"># automatically added to simple names in a hosts-file.</span></span>
<span class="line"><span style="color:#DBD7CA;">expand-hosts</span></span>
<span class="line"><span style="color:#758575;"># Set the domain for dnsmasq. this is optional, but if it is set, it</span></span>
<span class="line"><span style="color:#758575;"># does the following things.</span></span>
<span class="line"><span style="color:#758575;"># 1) Allows DHCP hosts to have fully qualified domain names, as long</span></span>
<span class="line"><span style="color:#758575;">#     as the domain part matches this setting.</span></span>
<span class="line"><span style="color:#758575;"># 2) Sets the &quot;domain&quot; DHCP option thereby potentially setting the</span></span>
<span class="line"><span style="color:#758575;">#    domain of all systems configured by DHCP</span></span>
<span class="line"><span style="color:#758575;"># 3) Provides the domain part for &quot;expand-hosts&quot;</span></span>
<span class="line"><span style="color:#758575;">#domain=thekelleys.org.uk</span></span>
<span class="line"><span style="color:#DBD7CA;">domain=mypridomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Set Liste address</span></span>
<span class="line"><span style="color:#DBD7CA;">listen-address=127.0.0.1 </span><span style="color:#758575;"># Set to Server IP for network responses</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># Listen on this specific port instead of the standard DNS port</span></span>
<span class="line"><span style="color:#A0ADA0;"># (53). Setting this to zero completely disables DNS function,</span></span>
<span class="line"><span style="color:#A0ADA0;"># leaving only DHCP and/or TFTP.</span></span>
<span class="line"><span style="color:#393A34;">port=53</span></span>
<span class="line"><span style="color:#A0ADA0;"># Never forward plain names (without a dot or domain part)</span></span>
<span class="line"><span style="color:#393A34;">domain-needed</span></span>
<span class="line"><span style="color:#A0ADA0;"># Never forward addresses in the non-routed address spaces.</span></span>
<span class="line"><span style="color:#393A34;">bogus-priv</span></span>
<span class="line"><span style="color:#A0ADA0;"># By  default,  dnsmasq  will  send queries to any of the upstream</span></span>
<span class="line"><span style="color:#A0ADA0;"># servers it knows about and tries to favour servers to are  known</span></span>
<span class="line"><span style="color:#A0ADA0;"># to  be  up.  Uncommenting this forces dnsmasq to try each query</span></span>
<span class="line"><span style="color:#A0ADA0;"># with  each  server  strictly  in  the  order  they   appear   in</span></span>
<span class="line"><span style="color:#A0ADA0;"># /etc/resolv.conf</span></span>
<span class="line"><span style="color:#393A34;">strict-order</span></span>
<span class="line"><span style="color:#A0ADA0;"># Set this (and domain: see below) if you want to have a domain</span></span>
<span class="line"><span style="color:#A0ADA0;"># automatically added to simple names in a hosts-file.</span></span>
<span class="line"><span style="color:#393A34;">expand-hosts</span></span>
<span class="line"><span style="color:#A0ADA0;"># Set the domain for dnsmasq. this is optional, but if it is set, it</span></span>
<span class="line"><span style="color:#A0ADA0;"># does the following things.</span></span>
<span class="line"><span style="color:#A0ADA0;"># 1) Allows DHCP hosts to have fully qualified domain names, as long</span></span>
<span class="line"><span style="color:#A0ADA0;">#     as the domain part matches this setting.</span></span>
<span class="line"><span style="color:#A0ADA0;"># 2) Sets the &quot;domain&quot; DHCP option thereby potentially setting the</span></span>
<span class="line"><span style="color:#A0ADA0;">#    domain of all systems configured by DHCP</span></span>
<span class="line"><span style="color:#A0ADA0;"># 3) Provides the domain part for &quot;expand-hosts&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;">#domain=thekelleys.org.uk</span></span>
<span class="line"><span style="color:#393A34;">domain=mypridomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Set Liste address</span></span>
<span class="line"><span style="color:#393A34;">listen-address=127.0.0.1 </span><span style="color:#A0ADA0;"># Set to Server IP for network responses</span></span>
<span class="line"></span></code></pre></div><p>If you want to enable DNSSEC validation and caching, uncomment</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#dnssec</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#dnssec</span></span>
<span class="line"></span></code></pre></div><p>Make any other changes you see relevant and restart dnsmasq when done:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo systemctl restart dnsmasq</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo systemctl restart dnsmasq</span></span>
<span class="line"></span></code></pre></div><h3 id="step-2-adding-dns-records-to-dnsmasq" tabindex="-1">Step 2: Adding DNS records to Dnsmasq <a class="header-anchor" href="#step-2-adding-dns-records-to-dnsmasq" aria-hidden="true">#</a></h3><p>Add DNS records in the file.<code>/etc/hosts</code>. Dnsmasq will reply to queries from clients using these records.</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ sudo vim /etc/hosts</span></span>
<span class="line"><span style="color:#DBD7CA;">10.1.3.4 server1.mypridomain.com</span></span>
<span class="line"><span style="color:#DBD7CA;">10.1.4.4 erp.mypridomain.com </span></span>
<span class="line"><span style="color:#DBD7CA;">192.168.10.2 checkout.mypridomain.com </span></span>
<span class="line"><span style="color:#DBD7CA;">192.168.4.3 hello.world</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ sudo vim /etc/hosts</span></span>
<span class="line"><span style="color:#393A34;">10.1.3.4 server1.mypridomain.com</span></span>
<span class="line"><span style="color:#393A34;">10.1.4.4 erp.mypridomain.com </span></span>
<span class="line"><span style="color:#393A34;">192.168.10.2 checkout.mypridomain.com </span></span>
<span class="line"><span style="color:#393A34;">192.168.4.3 hello.world</span></span>
<span class="line"></span></code></pre></div><p>You need to restart dnsmasq service after adding the records.</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo systemctl restart dnsmasq</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo systemctl restart dnsmasq</span></span>
<span class="line"></span></code></pre></div><h3 id="step-3-testing-dnsmasq-dns-functionality" tabindex="-1">Step 3: Testing Dnsmasq DNS functionality <a class="header-anchor" href="#step-3-testing-dnsmasq-dns-functionality" aria-hidden="true">#</a></h3><p>To verify that Dnsmasq responds to the records we added, point DNS server of your servers to Dnsmasq server. Edit <code>/etc/network/interfaces</code> for persistent configuration, or the file <code>/etc/netplan/</code> on Ubuntu 18.04 servers.</p><p>Since this is a test, I\u2019ll modify runtime file <code>/etc/resolv.conf</code></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ sudo vim /etc/resolv.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">nameserver 127.0.0.1</span></span>
<span class="line"><span style="color:#DBD7CA;">nameserver 8.8.8.8</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ sudo vim /etc/resolv.conf</span></span>
<span class="line"><span style="color:#393A34;">nameserver 127.0.0.1</span></span>
<span class="line"><span style="color:#393A34;">nameserver 8.8.8.8</span></span>
<span class="line"></span></code></pre></div><p>Test using dig:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ dig A erp.mypridomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">&gt;&gt;</span><span style="color:#C98A7D;"> DiG 9.11.3-1ubuntu1.1-Ubuntu &lt;&lt;&gt;&gt; A erp.mypridomain.com</span></span>
<span class="line"><span style="color:#C98A7D;">;; global options: +cmd</span></span>
<span class="line"><span style="color:#C98A7D;">;; Got answer:</span></span>
<span class="line"><span style="color:#C98A7D;">;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 43392</span></span>
<span class="line"><span style="color:#C98A7D;">;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span style="color:#C98A7D;">; EDNS: version: 0, flags:; udp: 4096</span></span>
<span class="line"><span style="color:#C98A7D;">;; QUESTION SECTION:</span></span>
<span class="line"><span style="color:#C98A7D;">;erp.mypridomain.com.		IN	A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">;; ANSWER SECTION:</span></span>
<span class="line"><span style="color:#C98A7D;">erp.mypridomain.com.	0	IN	A	10.1.4.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">;; Query time: 0 msec</span></span>
<span class="line"><span style="color:#C98A7D;">;; SERVER: 127.0.0.1#53(127.0.0.1)</span></span>
<span class="line"><span style="color:#C98A7D;">;; WHEN: Tue Aug 21 10:35:41 UTC 2018</span></span>
<span class="line"><span style="color:#C98A7D;">;; MSG SIZE  rcvd: 64</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ dig A erp.mypridomain.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">&gt;&gt;</span><span style="color:#B56959;"> DiG 9.11.3-1ubuntu1.1-Ubuntu &lt;&lt;&gt;&gt; A erp.mypridomain.com</span></span>
<span class="line"><span style="color:#B56959;">;; global options: +cmd</span></span>
<span class="line"><span style="color:#B56959;">;; Got answer:</span></span>
<span class="line"><span style="color:#B56959;">;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 43392</span></span>
<span class="line"><span style="color:#B56959;">;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span style="color:#B56959;">; EDNS: version: 0, flags:; udp: 4096</span></span>
<span class="line"><span style="color:#B56959;">;; QUESTION SECTION:</span></span>
<span class="line"><span style="color:#B56959;">;erp.mypridomain.com.		IN	A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">;; ANSWER SECTION:</span></span>
<span class="line"><span style="color:#B56959;">erp.mypridomain.com.	0	IN	A	10.1.4.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">;; Query time: 0 msec</span></span>
<span class="line"><span style="color:#B56959;">;; SERVER: 127.0.0.1#53(127.0.0.1)</span></span>
<span class="line"><span style="color:#B56959;">;; WHEN: Tue Aug 21 10:35:41 UTC 2018</span></span>
<span class="line"><span style="color:#B56959;">;; MSG SIZE  rcvd: 64</span></span>
<span class="line"></span></code></pre></div><p>Here is another example:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ dig checkout.mypridomain.com A +noall +answer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">&gt;&gt;</span><span style="color:#C98A7D;"> DiG 9.11.3-1ubuntu1.1-Ubuntu &lt;&lt;&gt;&gt; checkout.mypridomain.com A +noall +answer</span></span>
<span class="line"><span style="color:#C98A7D;">;; global options: +cmd</span></span>
<span class="line"><span style="color:#C98A7D;">checkout.mypridomain.com. 0 IN A 192.168.10.2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ dig checkout.mypridomain.com A +noall +answer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">&gt;&gt;</span><span style="color:#B56959;"> DiG 9.11.3-1ubuntu1.1-Ubuntu &lt;&lt;&gt;&gt; checkout.mypridomain.com A +noall +answer</span></span>
<span class="line"><span style="color:#B56959;">;; global options: +cmd</span></span>
<span class="line"><span style="color:#B56959;">checkout.mypridomain.com. 0 IN A 192.168.10.2</span></span>
<span class="line"></span></code></pre></div><p>You can confirm that we\u2019re getting responses as configured.</p><h3 id="configure-dnsmasq-as-dhcp-server-optional" tabindex="-1">Configure Dnsmasq as DHCP Server (Optional) <a class="header-anchor" href="#configure-dnsmasq-as-dhcp-server-optional" aria-hidden="true">#</a></h3><p>You can use Dnsmasq to assign IP addresses to clients, either static or dynamic.</p><p>Edit the file a<code>/etc/dnsmasq.conf</code> and provide DHCP options. You need to provide:</p><ul><li>Default gateway IP address</li><li>DNS server IP address (Probably Dnsmasq or different DNS server)</li><li>Network Subnet mask</li><li>DHCP Addresses range</li><li>NTP server</li></ul><p>See below example</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">dhcp-range=192.168.3.25,192.168.3.50,24h</span></span>
<span class="line"><span style="color:#DBD7CA;">dhcp-option=option:router,192.168.3.1</span></span>
<span class="line"><span style="color:#DBD7CA;">dhcp-option=option:ntp-server,192.168.3.5</span></span>
<span class="line"><span style="color:#DBD7CA;">dhcp-option=option:dns-server,192.168.3.5</span></span>
<span class="line"><span style="color:#DBD7CA;">dhcp-option=option:netmask,255.255.255.0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">dhcp-range=192.168.3.25,192.168.3.50,24h</span></span>
<span class="line"><span style="color:#393A34;">dhcp-option=option:router,192.168.3.1</span></span>
<span class="line"><span style="color:#393A34;">dhcp-option=option:ntp-server,192.168.3.5</span></span>
<span class="line"><span style="color:#393A34;">dhcp-option=option:dns-server,192.168.3.5</span></span>
<span class="line"><span style="color:#393A34;">dhcp-option=option:netmask,255.255.255.0</span></span>
<span class="line"></span></code></pre></div><p>Restart dnsmasq and configure clients to obtain an IP address from this server.</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">sudo systemctl restart dnsmasq</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo systemctl restart dnsmasq</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-hidden="true">#</a></h3><p>Dnsmasq is an easy to configure DNS cache which can speed up internet browsing and the resolving of domain records on your systems. You can also enjoy its DHCP subsystem which is easy to configure and use for a small network.</p><blockquote><p>\u6765\u6E90: <a href="https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu-18-04-lts/" target="_blank" rel="noopener noreferrer">https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu-18-04-lts/</a></p></blockquote><h2 id="install-dnsmasq-on-centos" tabindex="-1">install dnsmasq on CentOS <a class="header-anchor" href="#install-dnsmasq-on-centos" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u8003: <a href="https://www.tecmint.com/setup-a-dns-dhcp-server-using-dnsmasq-on-centos-rhel/" target="_blank" rel="noopener noreferrer">https://www.tecmint.com/setup-a-dns-dhcp-server-using-dnsmasq-on-centos-rhel/</a></p></blockquote><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>dnsmasq docs: <a href="http://www.thekelleys.org.uk/dnsmasq/doc.html" target="_blank" rel="noopener noreferrer">http://www.thekelleys.org.uk/dnsmasq/doc.html</a></li></ul>`,51),o=[p];function t(c,r,i,d,y,m){return n(),a("div",null,o)}var A=s(l,[["render",t]]);export{h as __pageData,A as default};
