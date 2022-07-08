import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"PXE CentOS","description":"","frontmatter":{},"headers":[{"level":2,"title":"PXE \u65E0\u4EBA\u503C\u5B88\u5B89\u88C5CentOS 7","slug":"pxe-\u65E0\u4EBA\u503C\u5B88\u5B89\u88C5centos-7"},{"level":3,"title":"\u76F8\u5173\u73AF\u5883\u4FE1\u606F","slug":"\u76F8\u5173\u73AF\u5883\u4FE1\u606F"},{"level":3,"title":"DHCP \u670D\u52A1\u5668","slug":"dhcp-\u670D\u52A1\u5668"},{"level":3,"title":"HTTP \u670D\u52A1\u5668(\u6216\u8005FTP\u670D\u52A1\u5668)","slug":"http-\u670D\u52A1\u5668-\u6216\u8005ftp\u670D\u52A1\u5668"},{"level":3,"title":"TFTP \u670D\u52A1\u5668","slug":"tftp-\u670D\u52A1\u5668"},{"level":2,"title":"PXE \u65E0\u4EBA\u503C\u5B88\u5B89\u88C5CentOS 6","slug":"pxe-\u65E0\u4EBA\u503C\u5B88\u5B89\u88C5centos-6"}],"relativePath":"LinuxBasics/DHCP-PXE-Cobbler/PXE CentOS.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/DHCP-PXE-Cobbler/PXE CentOS.md"},e=l(`<h1 id="pxe-centos" tabindex="-1">PXE CentOS <a class="header-anchor" href="#pxe-centos" aria-hidden="true">#</a></h1><h2 id="pxe-\u65E0\u4EBA\u503C\u5B88\u5B89\u88C5centos-7" tabindex="-1">PXE \u65E0\u4EBA\u503C\u5B88\u5B89\u88C5CentOS 7 <a class="header-anchor" href="#pxe-\u65E0\u4EBA\u503C\u5B88\u5B89\u88C5centos-7" aria-hidden="true">#</a></h2><h3 id="\u76F8\u5173\u73AF\u5883\u4FE1\u606F" tabindex="-1">\u76F8\u5173\u73AF\u5883\u4FE1\u606F <a class="header-anchor" href="#\u76F8\u5173\u73AF\u5883\u4FE1\u606F" aria-hidden="true">#</a></h3><p>\u4E3B\u673A<code>iptables</code>,<code>firewalld</code>\u548C<code>SElinux</code>\u5747\u4E3A\u5173\u95ED\u72B6\u6001</p><ul><li><p>DHCP \u670D\u52A1\u5668</p><p>\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u5FC5\u8981\u7684\u7F51\u7EDC\u4FE1\u606F\uFF0C\u5982IP\u3001netmask\u3001gateway\u3001dns\u7B49\uFF0C\u5E76\u5411\u5BA2\u6237\u7AEF\u63D0\u4F9B\u5F15\u5BFC\u6587\u4EF6(pxelinux.0)\u7684\u4F4D\u7F6E<code>(filename)</code>\u53CATFTP\u670D\u52A1\u5668\u5730\u5740<code>(next-server)</code>\u7B49\u3002</p></li><li><p>TFTP \u670D\u52A1\u5668</p><p>\u4E3B\u8981\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u5185\u6838\u6587\u4EF6\u548C\u5F15\u5BFC\u6587\u4EF6\u3002</p></li><li><p>FTP \u670D\u52A1\u5668(\u6216\u8005HTTP\u670D\u52A1\u5668\u90FD\u53EF)</p><p>\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B <code>kickstart</code> \u81EA\u52A8\u5316\u54CD\u5E94\u5B89\u88C5\u6587\u4EF6\u548C\u7CFB\u7EDF\u955C\u50CF\u6587\u4EF6(YUM\u4ED3\u5E93)\u3002</p></li></ul><h3 id="dhcp-\u670D\u52A1\u5668" tabindex="-1">DHCP \u670D\u52A1\u5668 <a class="header-anchor" href="#dhcp-\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><p>\u4FEE\u6539<code>/etc/dhcp/dhcpd.conf</code>\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/dhcp/dhcpd.conf </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#C98A7D;"> </span><span style="color:#4D9375;">EOF</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; #DHCP configuration for PXE boot server</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; ddns-update-style interim;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; ignore client-updates;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; authoritative;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; allow booting;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; allow bootp;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; allow unknown-clients;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; subnet 192.168.99.0</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; netmask 255.255.255.0</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; {</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; range 192.168.99.100 192.168.99.199;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; option domain-name-servers 192.168.99.2;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; option domain-name &quot;itlab.com&quot;;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; option routers 192.168.99.2;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; option broadcast-address 192.168.99.255;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; default-lease-time 600;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; max-lease-time 7200;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; #PXE boot server</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; next-server 192.168.99.99;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; filename &quot;pxelinux.0&quot;;</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; }</span></span>
<span class="line"><span style="color:#C98A7D;">&gt; EOF</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/dhcp/dhcpd.conf </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#B56959;"> </span><span style="color:#1C6B48;">EOF</span></span>
<span class="line"><span style="color:#B56959;">&gt; #DHCP configuration for PXE boot server</span></span>
<span class="line"><span style="color:#B56959;">&gt; ddns-update-style interim;</span></span>
<span class="line"><span style="color:#B56959;">&gt; ignore client-updates;</span></span>
<span class="line"><span style="color:#B56959;">&gt; authoritative;</span></span>
<span class="line"><span style="color:#B56959;">&gt; allow booting;</span></span>
<span class="line"><span style="color:#B56959;">&gt; allow bootp;</span></span>
<span class="line"><span style="color:#B56959;">&gt; allow unknown-clients;</span></span>
<span class="line"><span style="color:#B56959;">&gt;</span></span>
<span class="line"><span style="color:#B56959;">&gt; subnet 192.168.99.0</span></span>
<span class="line"><span style="color:#B56959;">&gt; netmask 255.255.255.0</span></span>
<span class="line"><span style="color:#B56959;">&gt; {</span></span>
<span class="line"><span style="color:#B56959;">&gt; range 192.168.99.100 192.168.99.199;</span></span>
<span class="line"><span style="color:#B56959;">&gt; option domain-name-servers 192.168.99.2;</span></span>
<span class="line"><span style="color:#B56959;">&gt; option domain-name &quot;itlab.com&quot;;</span></span>
<span class="line"><span style="color:#B56959;">&gt; option routers 192.168.99.2;</span></span>
<span class="line"><span style="color:#B56959;">&gt; option broadcast-address 192.168.99.255;</span></span>
<span class="line"><span style="color:#B56959;">&gt; default-lease-time 600;</span></span>
<span class="line"><span style="color:#B56959;">&gt; max-lease-time 7200;</span></span>
<span class="line"><span style="color:#B56959;">&gt; #PXE boot server</span></span>
<span class="line"><span style="color:#B56959;">&gt; next-server 192.168.99.99;</span></span>
<span class="line"><span style="color:#B56959;">&gt; filename &quot;pxelinux.0&quot;;</span></span>
<span class="line"><span style="color:#B56959;">&gt; }</span></span>
<span class="line"><span style="color:#B56959;">&gt; EOF</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\u5E76\u6DFB\u52A0dhcp\u670D\u52A1:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl start dhcpd.service </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> dhcpd.service</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl start dhcpd.service </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> dhcpd.service</span></span>
<span class="line"></span></code></pre></div><h3 id="http-\u670D\u52A1\u5668-\u6216\u8005ftp\u670D\u52A1\u5668" tabindex="-1">HTTP \u670D\u52A1\u5668(\u6216\u8005FTP\u670D\u52A1\u5668) <a class="header-anchor" href="#http-\u670D\u52A1\u5668-\u6216\u8005ftp\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><ol><li>\u6302\u8F7D\u672C\u5730\u5149\u76D8\u955C\u50CF,\u5E76\u6302\u8F7D\u81F3http\u670D\u52A1\u5668\u7684\u67D0\u4E2A\u8DEF\u5F84</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master /</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> mount -r /dev/cdrom /var/www/html/centos7	</span><span style="color:#758575;"># \u6302\u8F7D</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master /</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ls /var/www/html/centos7		</span><span style="color:#758575;"># \u67E5\u770B</span></span>
<span class="line"><span style="color:#DBD7CA;">CentOS_BuildTag  EULA  images    LiveOS    repodata              RPM-GPG-KEY-CentOS-Testing-7</span></span>
<span class="line"><span style="color:#DBD7CA;">EFI              GPL   isolinux  Packages  RPM-GPG-KEY-CentOS-7  TRANS.TBL</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master /</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> mount -r /dev/cdrom /var/www/html/centos7	</span><span style="color:#A0ADA0;"># \u6302\u8F7D</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master /</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ls /var/www/html/centos7		</span><span style="color:#A0ADA0;"># \u67E5\u770B</span></span>
<span class="line"><span style="color:#393A34;">CentOS_BuildTag  EULA  images    LiveOS    repodata              RPM-GPG-KEY-CentOS-Testing-7</span></span>
<span class="line"><span style="color:#393A34;">EFI              GPL   isolinux  Packages  RPM-GPG-KEY-CentOS-7  TRANS.TBL</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u6DFB\u52A0\u5E76\u4FEE\u6539<code>kickstart</code>\u6587\u4EF6(\u653E\u7F6E\u4E8E<code>/var/www/html/ks/centos7.cfg</code>)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4FEE\u6539\u90E8\u5206\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">url --url=</span><span style="color:#C98A7D;">&quot;http://192.168.99.99/centos7&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u90E8\u5206\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">url --url=</span><span style="color:#B56959;">&quot;http://192.168.99.99/centos7&quot;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><p>\u2139\uFE0F \u8BE5\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528<code>system-config-kickstart</code>\u56FE\u5F62\u5316\u5DE5\u5177\u6765\u751F\u6210.</p><ol start="3"><li>\u542F\u52A8 http \u670D\u52A1\u5668,<code>systemctl start httpd</code></li></ol><h3 id="tftp-\u670D\u52A1\u5668" tabindex="-1">TFTP \u670D\u52A1\u5668 <a class="header-anchor" href="#tftp-\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><ol><li>\u542F\u52A8 TFTP SERVER (\u8BE5\u670D\u52A1\u9ED8\u8BA4\u76D1\u542C\u5728<code>udp</code>\u7684<code>69</code>\u53F7\u7AEF\u53E3)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl start tftp.socket</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl start tftp.socket</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u7F16\u8F91<code>/etc/xinetd.d/tftp</code>\u6587\u4EF6</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">service tftp</span></span>
<span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        socket_type             = dgram</span></span>
<span class="line"><span style="color:#DBD7CA;">        protocol                = udp</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">wait</span><span style="color:#DBD7CA;">                    = yes</span></span>
<span class="line"><span style="color:#DBD7CA;">        user                    = root</span></span>
<span class="line"><span style="color:#DBD7CA;">        server                  = /usr/sbin/in.tftpd</span></span>
<span class="line"><span style="color:#DBD7CA;">        server_args             = -s /var/lib/tftpboot</span></span>
<span class="line"><span style="color:#DBD7CA;">        disable                 = no			</span><span style="color:#758575;"># \u6539\u4E3Ano</span></span>
<span class="line"><span style="color:#DBD7CA;">        per_source              = 11</span></span>
<span class="line"><span style="color:#DBD7CA;">        cps                     = 100 2</span></span>
<span class="line"><span style="color:#DBD7CA;">        flags                   = IPv4</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">service tftp</span></span>
<span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        socket_type             = dgram</span></span>
<span class="line"><span style="color:#393A34;">        protocol                = udp</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">wait</span><span style="color:#393A34;">                    = yes</span></span>
<span class="line"><span style="color:#393A34;">        user                    = root</span></span>
<span class="line"><span style="color:#393A34;">        server                  = /usr/sbin/in.tftpd</span></span>
<span class="line"><span style="color:#393A34;">        server_args             = -s /var/lib/tftpboot</span></span>
<span class="line"><span style="color:#393A34;">        disable                 = no			</span><span style="color:#A0ADA0;"># \u6539\u4E3Ano</span></span>
<span class="line"><span style="color:#393A34;">        per_source              = 11</span></span>
<span class="line"><span style="color:#393A34;">        cps                     = 100 2</span></span>
<span class="line"><span style="color:#393A34;">        flags                   = IPv4</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p><code>systemctl restart xinetd.service </code></p><p>\u6216\u8005:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl start tftp.socket </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> tftp.socket</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl start tftp.socket </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> tftp.socket</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5B89\u88C5<code>syslinux</code>\u7A0B\u5E8F\u5305</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install -y syslinux</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install -y syslinux</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u5C06\u6240\u9700\u6587\u4EF6\u653E\u7F6E\u5728 tftp \u6839\u76EE\u5F55(<code>/var/lib/tftpboot/</code>)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/	</span><span style="color:#758575;"># \u590D\u5236\u5F15\u5BFC\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">cp /usr/share/syslinux/{chain.c32,menu.c32,mboot.c32} /var/lib/tftpboot/		</span><span style="color:#758575;"># \u4F7F\u7528menu.c32\u754C\u9762</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /var/lib/tftpboot/networkboot/centos7</span></span>
<span class="line"><span style="color:#DBD7CA;">cp /var/www/html/centos7/images/pxeboot/{vmlinuz,initrd.img} /var/lib/tftpboot/networkboot/centos7	</span><span style="color:#758575;"># \u590D\u5236\u9A71\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /var/lib/tftpboot/pxelinux.cfg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># cp -rf /var/www/html/centos7/isolinux/* /var/lib/tftpboot/</span></span>
<span class="line"><span style="color:#758575;"># \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u539F\u7248\u955C\u50CF\u5F53\u4E2D\u7684\u83DC\u5355\u754C\u9762</span></span>
<span class="line"><span style="color:#758575;"># mv /var/lib/tftpboot/isolinux.cfg /var/lib/tftpboot/pxelinux.cfg/default</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/	</span><span style="color:#A0ADA0;"># \u590D\u5236\u5F15\u5BFC\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">cp /usr/share/syslinux/{chain.c32,menu.c32,mboot.c32} /var/lib/tftpboot/		</span><span style="color:#A0ADA0;"># \u4F7F\u7528menu.c32\u754C\u9762</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">mkdir -p /var/lib/tftpboot/networkboot/centos7</span></span>
<span class="line"><span style="color:#393A34;">cp /var/www/html/centos7/images/pxeboot/{vmlinuz,initrd.img} /var/lib/tftpboot/networkboot/centos7	</span><span style="color:#A0ADA0;"># \u590D\u5236\u9A71\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">mkdir /var/lib/tftpboot/pxelinux.cfg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># cp -rf /var/www/html/centos7/isolinux/* /var/lib/tftpboot/</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u539F\u7248\u955C\u50CF\u5F53\u4E2D\u7684\u83DC\u5355\u754C\u9762</span></span>
<span class="line"><span style="color:#A0ADA0;"># mv /var/lib/tftpboot/isolinux.cfg /var/lib/tftpboot/pxelinux.cfg/default</span></span>
<span class="line"></span></code></pre></div><p><code>/var/lib/tftpboot/pxelinux.cfg/default</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u6240\u793A:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /var/lib/tftpboot/pxelinux.cfg/default </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#C98A7D;"> </span><span style="color:#4D9375;">EOF</span></span>
<span class="line"><span style="color:#C98A7D;">default menu.c32</span></span>
<span class="line"><span style="color:#C98A7D;">prompt 0</span></span>
<span class="line"><span style="color:#C98A7D;">timeout 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">menu title AGou&#39;s PXE Menu</span></span>
<span class="line"><span style="color:#C98A7D;">label Install CentOS 7</span></span>
<span class="line"><span style="color:#C98A7D;">kernel /networkboot/centos7/vmlinuz</span></span>
<span class="line"><span style="color:#C98A7D;">append initrd=/networkboot/centos7/initrd.img inst.repo=http://192.168.99.99/centos7 inst.ks=http://192.168.99.99/ks/centos7.cfg</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /var/lib/tftpboot/pxelinux.cfg/default </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#B56959;"> </span><span style="color:#1C6B48;">EOF</span></span>
<span class="line"><span style="color:#B56959;">default menu.c32</span></span>
<span class="line"><span style="color:#B56959;">prompt 0</span></span>
<span class="line"><span style="color:#B56959;">timeout 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">menu title AGou&#39;s PXE Menu</span></span>
<span class="line"><span style="color:#B56959;">label Install CentOS 7</span></span>
<span class="line"><span style="color:#B56959;">kernel /networkboot/centos7/vmlinuz</span></span>
<span class="line"><span style="color:#B56959;">append initrd=/networkboot/centos7/initrd.img inst.repo=http://192.168.99.99/centos7 inst.ks=http://192.168.99.99/ks/centos7.cfg</span></span>
<span class="line"></span></code></pre></div><h2 id="pxe-\u65E0\u4EBA\u503C\u5B88\u5B89\u88C5centos-6" tabindex="-1">PXE \u65E0\u4EBA\u503C\u5B88\u5B89\u88C5CentOS 6 <a class="header-anchor" href="#pxe-\u65E0\u4EBA\u503C\u5B88\u5B89\u88C5centos-6" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u6B65\u9AA4\u5927\u81F4\u4E0E\u5B89\u88C5CentOS 7 \u76F8\u540C,\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> cp -rf /var/www/html/centos6/isolinux/</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> /var/lib/tftpboot/</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> cp -rf /var/www/html/centos6/isolinux/</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> /var/lib/tftpboot/</span></span>
<span class="line"></span></code></pre></div>`,34),o=[e];function t(c,r,i,d,y,A){return n(),a("div",null,o)}var g=s(p,[["render",t]]);export{u as __pageData,g as default};
