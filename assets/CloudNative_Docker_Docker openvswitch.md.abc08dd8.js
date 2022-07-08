import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Docker openvswitch","description":"","frontmatter":{},"headers":[{"level":2,"title":"openvswitch \u7B80\u4ECB","slug":"openvswitch-\u7B80\u4ECB"},{"level":2,"title":"openvswitch \u5B89\u88C5","slug":"openvswitch-\u5B89\u88C5"},{"level":2,"title":"\u5EFA\u7ACB vxLAN \u62D3\u6251","slug":"\u5EFA\u7ACB-vxlan-\u62D3\u6251"}],"relativePath":"CloudNative/Docker/Docker openvswitch.md","lastUpdated":1657272051000}'),l={name:"CloudNative/Docker/Docker openvswitch.md"},e=p(`<h1 id="docker-openvswitch" tabindex="-1">Docker openvswitch <a class="header-anchor" href="#docker-openvswitch" aria-hidden="true">#</a></h1><h2 id="openvswitch-\u7B80\u4ECB" tabindex="-1">openvswitch \u7B80\u4ECB <a class="header-anchor" href="#openvswitch-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>openvswitch\u4E3A\u6211\u4EEC\u5EFA\u7ACB\u4E00\u4E2A\u6269\u5C55\u5230\u4E09\u5C42\u7F51\u7EDC\u7684\u7F51\u6865\uFF0C\u6211\u4EEC\u77E5\u9053vlan\u662F\u4E0D\u80FD\u8DE8\u5B50\u7F51\u7684\uFF0Copenvswitch\u5229\u7528\u4E86\u96A7\u9053\u6280\u672F\uFF0C\u5C06\u4E8C\u5C42\u7684\u62A5\u6587\u7528\u4E09\u5C42\u7684\u534F\u8BAE(udp/sdn\uFF09\u91CD\u65B0\u5C01\u88C5\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E8C\u5C42\u7F51\u7EDC\u5728\u4E09\u5C42\u4E2D\u8FDB\u884C\u6269\u5C55\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://images2015.cnblogs.com/blog/659305/201604/659305-20160411021401410-1725005604.jpg" alt=""></p><h2 id="openvswitch-\u5B89\u88C5" tabindex="-1">openvswitch \u5B89\u88C5 <a class="header-anchor" href="#openvswitch-\u5B89\u88C5" aria-hidden="true">#</a></h2><p>openvswitch \u5B98\u65B9\u5E76\u672A\u5728 REHL \u7CFB\u5217\u63D0\u4F9B\u73B0\u6210\u7684 RPM \u5305\uFF0C\u6240\u4EE5\u9700\u8981\u6211\u4EEC\u624B\u52A8\u7F16\u8BD1\u8FDB\u884C\u5B89\u88C5\uFF0C\u5728\u8FD9\u91CC\u6211\u5236\u4F5C\u4E00\u4E2A\u53EF\u76F4\u63A5\u5B89\u88C5\u7684 RPM \u5305\u3002</p><ol><li>\u9996\u5148\u4ECE\u5B98\u7F51\u4E0B\u8F7D\u6700\u65B0\u7684 LTS \u7248\u672C\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">wget https://www.openvswitch.org/releases/openvswitch-2.5.9.tar.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">tar xf openvswitch-2.5.9.tar.gz </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">wget https://www.openvswitch.org/releases/openvswitch-2.5.9.tar.gz</span></span>
<span class="line"><span style="color:#393A34;">tar xf openvswitch-2.5.9.tar.gz </span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u5B89\u88C5\u7F16\u8BD1\u6240\u9700\u7684\u4F9D\u8D56\u5305\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">   yum install gcc make python-devel openssl-devel kernel-devel graphviz \\</span></span>
<span class="line"><span style="color:#DBD7CA;">       kernel-debug-devel autoconf automake rpm-build redhat-rpm-config \\</span></span>
<span class="line"><span style="color:#DBD7CA;">       libtool -y</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">   yum install gcc make python-devel openssl-devel kernel-devel graphviz \\</span></span>
<span class="line"><span style="color:#393A34;">       kernel-debug-devel autoconf automake rpm-build redhat-rpm-config \\</span></span>
<span class="line"><span style="color:#393A34;">       libtool -y</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u5EFA\u7ACB<code>rpmbuild</code>\u76EE\u5F55\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cp openvswitch-2.5.9.tar.gz /root/rpmbuild/SOURCES</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cp openvswitch-2.5.9.tar.gz /root/rpmbuild/SOURCES</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u68C0\u67E5\u5185\u6838\u5F00\u53D1<code>kernel-devel</code>\u6E90\u7801\u7684\u4F4D\u7F6E\u662F\u5426\u6B63\u786E\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@node01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ls /lib/modules/</span><span style="color:#C98A7D;">$(uname -r)</span><span style="color:#DBD7CA;"> -ln</span></span>
<span class="line"><span style="color:#DBD7CA;">total 3276</span></span>
<span class="line"><span style="color:#DBD7CA;">lrwxrwxrwx.  1 0 0     44 Apr 26 22:26 build -</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">\`/usr/src/kernels/3.10.0-1062.18.1.el7.x86_64\`</span><span style="color:#DBD7CA;">			</span><span style="color:#758575;"># \u5982\u679C\u8FD9\u91CC\u95EA\u7EA2\uFF0C\u5219\u8868\u793A\u4E0D\u6B63\u786E</span></span>
<span class="line"><span style="color:#DBD7CA;">drwxr-xr-x.  2 0 0      6 Mar 18 07:53 extra</span></span>
<span class="line"><span style="color:#DBD7CA;">drwxr-xr-x. 12 0 0    128 Apr 26 22:26 kernel</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0 852612 Apr 26 22:28 modules.alias</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0 813600 Apr 26 22:28 modules.alias.bin</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0   1333 Mar 18 07:53 modules.block</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0   7357 Mar 18 07:53 modules.builtin</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0   9425 Apr 26 22:28 modules.builtin.bin</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0 271605 Apr 26 22:28 modules.dep</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0 379944 Apr 26 22:28 modules.dep.bin</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0    361 Apr 26 22:28 modules.devname</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0    140 Mar 18 07:53 modules.drm</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0     69 Mar 18 07:53 modules.modesetting</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0   1787 Mar 18 07:53 modules.networking</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0  97175 Mar 18 07:53 modules.order</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0    569 Apr 26 22:28 modules.softdep</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0 395089 Apr 26 22:28 modules.symbols</span></span>
<span class="line"><span style="color:#DBD7CA;">-rw-r--r--.  1 0 0 483655 Apr 26 22:28 modules.symbols.bin</span></span>
<span class="line"><span style="color:#DBD7CA;">lrwxrwxrwx.  1 0 0      5 Apr 26 22:26 </span><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;"> -</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> build</span></span>
<span class="line"><span style="color:#DBD7CA;">drwxr-xr-x.  2 0 0      6 Mar 18 07:53 updates</span></span>
<span class="line"><span style="color:#DBD7CA;">drwxr-xr-x.  2 0 0     95 Apr 26 22:26 vdso</span></span>
<span class="line"><span style="color:#DBD7CA;">drwxr-xr-x.  2 0 0      6 Apr 26 22:28 weak-updates</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@node01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ls /lib/modules/</span><span style="color:#B56959;">$(uname -r)</span><span style="color:#393A34;"> -ln</span></span>
<span class="line"><span style="color:#393A34;">total 3276</span></span>
<span class="line"><span style="color:#393A34;">lrwxrwxrwx.  1 0 0     44 Apr 26 22:26 build -</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\`/usr/src/kernels/3.10.0-1062.18.1.el7.x86_64\`</span><span style="color:#393A34;">			</span><span style="color:#A0ADA0;"># \u5982\u679C\u8FD9\u91CC\u95EA\u7EA2\uFF0C\u5219\u8868\u793A\u4E0D\u6B63\u786E</span></span>
<span class="line"><span style="color:#393A34;">drwxr-xr-x.  2 0 0      6 Mar 18 07:53 extra</span></span>
<span class="line"><span style="color:#393A34;">drwxr-xr-x. 12 0 0    128 Apr 26 22:26 kernel</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0 852612 Apr 26 22:28 modules.alias</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0 813600 Apr 26 22:28 modules.alias.bin</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0   1333 Mar 18 07:53 modules.block</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0   7357 Mar 18 07:53 modules.builtin</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0   9425 Apr 26 22:28 modules.builtin.bin</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0 271605 Apr 26 22:28 modules.dep</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0 379944 Apr 26 22:28 modules.dep.bin</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0    361 Apr 26 22:28 modules.devname</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0    140 Mar 18 07:53 modules.drm</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0     69 Mar 18 07:53 modules.modesetting</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0   1787 Mar 18 07:53 modules.networking</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0  97175 Mar 18 07:53 modules.order</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0    569 Apr 26 22:28 modules.softdep</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0 395089 Apr 26 22:28 modules.symbols</span></span>
<span class="line"><span style="color:#393A34;">-rw-r--r--.  1 0 0 483655 Apr 26 22:28 modules.symbols.bin</span></span>
<span class="line"><span style="color:#393A34;">lrwxrwxrwx.  1 0 0      5 Apr 26 22:26 </span><span style="color:#B58451;">source</span><span style="color:#393A34;"> -</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> build</span></span>
<span class="line"><span style="color:#393A34;">drwxr-xr-x.  2 0 0      6 Mar 18 07:53 updates</span></span>
<span class="line"><span style="color:#393A34;">drwxr-xr-x.  2 0 0     95 Apr 26 22:26 vdso</span></span>
<span class="line"><span style="color:#393A34;">drwxr-xr-x.  2 0 0      6 Apr 26 22:28 weak-updates</span></span>
<span class="line"></span></code></pre></div><p>build\u662F\u4E00\u4E2A\u65E0\u6548\u7684\u79F0\u53F7\u94FE\u63A5\uFF0C\u5220\u9664\u8FD9\u4E2A\u94FE\u63A5\uFF0C\u91CD\u65B0\u94FE\u63A5\u5230\u6B63\u786E\u76EE\u5F55\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rm /lib/modules/</span><span style="color:#C98A7D;">$(uname -r)</span><span style="color:#DBD7CA;">/build</span></span>
<span class="line"><span style="color:#DBD7CA;">ln -s /usr/src/kernels/3.10.0-1062.18.1.el7.x86_64 /lib/modules/</span><span style="color:#C98A7D;">$(uname -r)</span><span style="color:#DBD7CA;">/build</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rm /lib/modules/</span><span style="color:#B56959;">$(uname -r)</span><span style="color:#393A34;">/build</span></span>
<span class="line"><span style="color:#393A34;">ln -s /usr/src/kernels/3.10.0-1062.18.1.el7.x86_64 /lib/modules/</span><span style="color:#B56959;">$(uname -r)</span><span style="color:#393A34;">/build</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u5F00\u59CB\u5236\u4F5C<code>RPM</code>\u5305</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> openvswitch-2.5.9</span></span>
<span class="line"><span style="color:#DBD7CA;">rpmbuild -bb --without check rhel/openvswitch.spec</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> openvswitch-2.5.9</span></span>
<span class="line"><span style="color:#393A34;">rpmbuild -bb --without check rhel/openvswitch.spec</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u6700\u540E\u5B89\u88C5\u6240\u751F\u6210\u7684 RPM \u5305</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum localinstall -y /root/rpmbuild/RPMS/x86_64/openvswitch-2.5.9-1.x86_64.rpm </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum localinstall -y /root/rpmbuild/RPMS/x86_64/openvswitch-2.5.9-1.x86_64.rpm </span></span>
<span class="line"></span></code></pre></div><h2 id="\u5EFA\u7ACB-vxlan-\u62D3\u6251" tabindex="-1">\u5EFA\u7ACB vxLAN \u62D3\u6251 <a class="header-anchor" href="#\u5EFA\u7ACB-vxlan-\u62D3\u6251" aria-hidden="true">#</a></h2><p>\u73AF\u5883:</p><table><thead><tr><th>\u4E3B\u673AIP</th><th>\u5BB9\u5668IP\u53CA\u7F51\u7EDC</th></tr></thead><tbody><tr><td>172.16.1.128</td><td>172.16.128.128\uFF08172.16.128.0/24\uFF09</td></tr><tr><td>172.16.1.129</td><td>172.16.129.129\uFF08172.16.129.0/24\uFF09</td></tr></tbody></table><p>\u5C06\u5236\u4F5C\u597D\u7684 RPM \u5305\u53D1\u9001\u7ED9\u53E6\u4E00\u53F0\u4E3B\u673A\uFF0C\u76F4\u63A5\u5B89\u88C5.</p><p>\u5728\u4E24\u4E3B\u673A\u4E0A\u542F\u52A8\u670D\u52A1\uFF1A<code>systemctl start openvswitch.service </code></p><p>\u5728<code>172.16.1.128</code>\u4E3B\u673A\u4E0A\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat /proc/sys/net/ipv4/ip_forward </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-br obr0</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-port obr0 gre0 -- </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> Interface gre0 type=gre options:remote_ip=172.16.1.128</span></span>
<span class="line"><span style="color:#DBD7CA;">brctl addbr kbr0</span></span>
<span class="line"><span style="color:#DBD7CA;">brctl addif kbr0 obr0</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> dev docker0 down</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link del dev docker0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># vi /etc/sysconfig/network-scripts/ifcfg-kbr0</span></span>
<span class="line"><span style="color:#DBD7CA;">ONBOOT=no</span></span>
<span class="line"><span style="color:#DBD7CA;">BOOTPROTO=static</span></span>
<span class="line"><span style="color:#DBD7CA;">IPADDR=172.16.128.1</span></span>
<span class="line"><span style="color:#DBD7CA;">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="color:#DBD7CA;">GATEWAY=172.16.128.0</span></span>
<span class="line"><span style="color:#DBD7CA;">USERCTL=no</span></span>
<span class="line"><span style="color:#DBD7CA;">TYPE=Bridge</span></span>
<span class="line"><span style="color:#DBD7CA;">IPV6INIT=no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># cat /etc/sysconfig/network-scripts/route-ens33 </span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.129.0/24 via 172.16.1.128 dev ens33</span></span>
<span class="line"><span style="color:#758575;"># systemctl  restart network.service</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat /proc/sys/net/ipv4/ip_forward </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-br obr0</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-port obr0 gre0 -- </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> Interface gre0 type=gre options:remote_ip=172.16.1.128</span></span>
<span class="line"><span style="color:#393A34;">brctl addbr kbr0</span></span>
<span class="line"><span style="color:#393A34;">brctl addif kbr0 obr0</span></span>
<span class="line"><span style="color:#393A34;">ip link </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> dev docker0 down</span></span>
<span class="line"><span style="color:#393A34;">ip link del dev docker0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># vi /etc/sysconfig/network-scripts/ifcfg-kbr0</span></span>
<span class="line"><span style="color:#393A34;">ONBOOT=no</span></span>
<span class="line"><span style="color:#393A34;">BOOTPROTO=static</span></span>
<span class="line"><span style="color:#393A34;">IPADDR=172.16.128.1</span></span>
<span class="line"><span style="color:#393A34;">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="color:#393A34;">GATEWAY=172.16.128.0</span></span>
<span class="line"><span style="color:#393A34;">USERCTL=no</span></span>
<span class="line"><span style="color:#393A34;">TYPE=Bridge</span></span>
<span class="line"><span style="color:#393A34;">IPV6INIT=no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># cat /etc/sysconfig/network-scripts/route-ens33 </span></span>
<span class="line"><span style="color:#393A34;">172.16.129.0/24 via 172.16.1.128 dev ens33</span></span>
<span class="line"><span style="color:#A0ADA0;"># systemctl  restart network.service</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat /proc/sys/net/ipv4/ip_forward </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-br obr0</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-port obr0 gre0 -- </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> Interface gre0 type=gre options:remote_ip=172.16.1.129</span></span>
<span class="line"><span style="color:#DBD7CA;">brctl addbr kbr0</span></span>
<span class="line"><span style="color:#DBD7CA;">brctl addif kbr0 obr0</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> dev docker0 down</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link del dev docker0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># vi /etc/sysconfig/network-scripts/ifcfg-kbr0</span></span>
<span class="line"><span style="color:#DBD7CA;">ONBOOT=no</span></span>
<span class="line"><span style="color:#DBD7CA;">BOOTPROTO=static</span></span>
<span class="line"><span style="color:#DBD7CA;">IPADDR=172.16.129.1</span></span>
<span class="line"><span style="color:#DBD7CA;">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="color:#DBD7CA;">GATEWAY=172.16.129.0</span></span>
<span class="line"><span style="color:#DBD7CA;">USERCTL=no</span></span>
<span class="line"><span style="color:#DBD7CA;">TYPE=Bridge</span></span>
<span class="line"><span style="color:#DBD7CA;">IPV6INIT=no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># cat /etc/sysconfig/network-scripts/route-ens33 </span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.128.0/24 via 172.16.1.129 dev ens33</span></span>
<span class="line"><span style="color:#758575;"># systemctl  restart network.service</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat /proc/sys/net/ipv4/ip_forward </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-br obr0</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-port obr0 gre0 -- </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> Interface gre0 type=gre options:remote_ip=172.16.1.129</span></span>
<span class="line"><span style="color:#393A34;">brctl addbr kbr0</span></span>
<span class="line"><span style="color:#393A34;">brctl addif kbr0 obr0</span></span>
<span class="line"><span style="color:#393A34;">ip link </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> dev docker0 down</span></span>
<span class="line"><span style="color:#393A34;">ip link del dev docker0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># vi /etc/sysconfig/network-scripts/ifcfg-kbr0</span></span>
<span class="line"><span style="color:#393A34;">ONBOOT=no</span></span>
<span class="line"><span style="color:#393A34;">BOOTPROTO=static</span></span>
<span class="line"><span style="color:#393A34;">IPADDR=172.16.129.1</span></span>
<span class="line"><span style="color:#393A34;">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="color:#393A34;">GATEWAY=172.16.129.0</span></span>
<span class="line"><span style="color:#393A34;">USERCTL=no</span></span>
<span class="line"><span style="color:#393A34;">TYPE=Bridge</span></span>
<span class="line"><span style="color:#393A34;">IPV6INIT=no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># cat /etc/sysconfig/network-scripts/route-ens33 </span></span>
<span class="line"><span style="color:#393A34;">172.16.128.0/24 via 172.16.1.129 dev ens33</span></span>
<span class="line"><span style="color:#A0ADA0;"># systemctl  restart network.service</span></span>
<span class="line"></span></code></pre></div><p>\u5728<code>172.16.1.128</code>\u4E3B\u673A\u6267\u884C\u4EE5\u4E0B\u811A\u672C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6709\u9519\u8BEF\u5219\u505C\u6B62\u6267\u884C</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> -e</span></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA\u4E00\u4E2Aopenvswitch bridge</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-br ovs-br0</span></span>
<span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u4E00\u4E2A\u5230172.16.1.129\u7684\u63A5\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.129 -- </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;">  interface vxlan-port-to-172.16.1.129 type=vxlan option:remote_ip=</span><span style="color:#C98A7D;">&quot;172.16.1.129&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA\u4E00\u5BF9\u865A\u62DF\u7F51\u5361veth</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link add vethx </span><span style="color:#E0A569;">type</span><span style="color:#DBD7CA;"> veth peer name vethContainer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># sleep 3 seconds to wait for the completion of previous work.</span></span>
<span class="line"><span style="color:#DBD7CA;">sleep 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06vethx\u63A5\u5165\u5230ovs-br0\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-port ovs-br0 vethx</span></span>
<span class="line"><span style="color:#DBD7CA;">ifconfig vethx up</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u542F\u52A8docker\u5BB9\u5668\uFF0C\u4F7F\u7528--net=none\u7B56\u7565</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> containerID=</span><span style="color:#C98A7D;">$(docker run -tid --net=none busybox:latest /bin/sh)</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> pid=</span><span style="color:#C98A7D;">$(docker inspect -f &quot;\u3010\u3010.State.Pid\u3011\u3011&quot; </span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">containerID</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> containerID=</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">containerID</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> pid=</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5982\u679Cnet namespace\u76EE\u5F55\u6CA1\u6709\u521B\u5EFA\u5219\u65B0\u5EFA\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-d</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;/var/run/netns&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">then</span></span>
<span class="line"><span style="color:#DBD7CA;">  mkdir -p /var/run/netns</span></span>
<span class="line"><span style="color:#4D9375;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06docker\u5BB9\u5668\u4F7F\u7528\u7684net namespace \u6253\u56DE\u539F\u5F62</span></span>
<span class="line"><span style="color:#DBD7CA;">ln -s /proc/</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">/ns/net /var/run/netns/</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">ip netns list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06vethContainer\u52A0\u5165\u5230\u5BB9\u5668\u7684net namespace\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> vethContainer netns </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u914D\u7F6EvethContainer\u63A5\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">ip netns </span><span style="color:#E0A569;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> ifconfig vethContainer 172.16.128.128/24 up</span></span>
<span class="line"><span style="color:#DBD7CA;">ip netns </span><span style="color:#E0A569;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> ifconfig -a</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6709\u9519\u8BEF\u5219\u505C\u6B62\u6267\u884C</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> -e</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E00\u4E2Aopenvswitch bridge</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-br ovs-br0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u4E00\u4E2A\u5230172.16.1.129\u7684\u63A5\u53E3</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.129 -- </span><span style="color:#B58451;">set</span><span style="color:#393A34;">  interface vxlan-port-to-172.16.1.129 type=vxlan option:remote_ip=</span><span style="color:#B56959;">&quot;172.16.1.129&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E00\u5BF9\u865A\u62DF\u7F51\u5361veth</span></span>
<span class="line"><span style="color:#393A34;">ip link add vethx </span><span style="color:#B58451;">type</span><span style="color:#393A34;"> veth peer name vethContainer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># sleep 3 seconds to wait for the completion of previous work.</span></span>
<span class="line"><span style="color:#393A34;">sleep 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06vethx\u63A5\u5165\u5230ovs-br0\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-port ovs-br0 vethx</span></span>
<span class="line"><span style="color:#393A34;">ifconfig vethx up</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u542F\u52A8docker\u5BB9\u5668\uFF0C\u4F7F\u7528--net=none\u7B56\u7565</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> containerID=</span><span style="color:#B56959;">$(docker run -tid --net=none busybox:latest /bin/sh)</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> pid=</span><span style="color:#B56959;">$(docker inspect -f &quot;\u3010\u3010.State.Pid\u3011\u3011&quot; </span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">containerID</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> containerID=</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">containerID</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> pid=</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679Cnet namespace\u76EE\u5F55\u6CA1\u6709\u521B\u5EFA\u5219\u65B0\u5EFA\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-d</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;/var/run/netns&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">then</span></span>
<span class="line"><span style="color:#393A34;">  mkdir -p /var/run/netns</span></span>
<span class="line"><span style="color:#1C6B48;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06docker\u5BB9\u5668\u4F7F\u7528\u7684net namespace \u6253\u56DE\u539F\u5F62</span></span>
<span class="line"><span style="color:#393A34;">ln -s /proc/</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">/ns/net /var/run/netns/</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">ip netns list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06vethContainer\u52A0\u5165\u5230\u5BB9\u5668\u7684net namespace\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">ip link </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> vethContainer netns </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u914D\u7F6EvethContainer\u63A5\u53E3</span></span>
<span class="line"><span style="color:#393A34;">ip netns </span><span style="color:#B58451;">exec</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> ifconfig vethContainer 172.16.128.128/24 up</span></span>
<span class="line"><span style="color:#393A34;">ip netns </span><span style="color:#B58451;">exec</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> ifconfig -a</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u811A\u672C\u6765\u6E90\u4E8E\u7F51\u7EDC\u3002</p></blockquote><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6709\u9519\u8BEF\u5219\u505C\u6B62\u6267\u884C</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> -e</span></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA\u4E00\u4E2Aopenvswitch bridge</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-br ovs-br0</span></span>
<span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u4E00\u4E2A\u5230172.16.1.128\u7684\u63A5\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.128 -- </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;">  interface vxlan-port-to-172.16.1.128 type=vxlan option:remote_ip=</span><span style="color:#C98A7D;">&quot;172.16.1.128&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA\u4E00\u5BF9\u865A\u62DF\u7F51\u5361veth</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link add vethx </span><span style="color:#E0A569;">type</span><span style="color:#DBD7CA;"> veth peer name vethContainer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># sleep 3 seconds to wait for the completion of previous work.</span></span>
<span class="line"><span style="color:#DBD7CA;">sleep 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06vethx\u63A5\u5165\u5230ovs-br0\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">ovs-vsctl add-port ovs-br0 vethx</span></span>
<span class="line"><span style="color:#DBD7CA;">ifconfig vethx up</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u542F\u52A8docker\u5BB9\u5668\uFF0C\u4F7F\u7528--net=none\u7B56\u7565</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> containerID=</span><span style="color:#C98A7D;">$(docker run -tid --net=none busybox:latest /bin/sh)</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> pid=</span><span style="color:#C98A7D;">$(docker inspect -f &quot;\u3010\u3010.State.Pid\u3011\u3011&quot; </span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">containerID</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> containerID=</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">containerID</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> pid=</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5982\u679Cnet namespace\u76EE\u5F55\u6CA1\u6709\u521B\u5EFA\u5219\u65B0\u5EFA\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-d</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;/var/run/netns&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">then</span></span>
<span class="line"><span style="color:#DBD7CA;">  mkdir -p /var/run/netns</span></span>
<span class="line"><span style="color:#4D9375;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06docker\u5BB9\u5668\u4F7F\u7528\u7684net namespace \u6253\u56DE\u539F\u5F62</span></span>
<span class="line"><span style="color:#DBD7CA;">ln -s /proc/</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">/ns/net /var/run/netns/</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">ip netns list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06vethContainer\u52A0\u5165\u5230\u5BB9\u5668\u7684net namespace\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">ip link </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> vethContainer netns </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u914D\u7F6EvethContainer\u63A5\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">ip netns </span><span style="color:#E0A569;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> ifconfig vethContainer 172.16.129.129/24 up</span></span>
<span class="line"><span style="color:#DBD7CA;">ip netns </span><span style="color:#E0A569;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">pid</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> ifconfig -a</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6709\u9519\u8BEF\u5219\u505C\u6B62\u6267\u884C</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> -e</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E00\u4E2Aopenvswitch bridge</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-br ovs-br0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u4E00\u4E2A\u5230172.16.1.128\u7684\u63A5\u53E3</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.128 -- </span><span style="color:#B58451;">set</span><span style="color:#393A34;">  interface vxlan-port-to-172.16.1.128 type=vxlan option:remote_ip=</span><span style="color:#B56959;">&quot;172.16.1.128&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E00\u5BF9\u865A\u62DF\u7F51\u5361veth</span></span>
<span class="line"><span style="color:#393A34;">ip link add vethx </span><span style="color:#B58451;">type</span><span style="color:#393A34;"> veth peer name vethContainer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># sleep 3 seconds to wait for the completion of previous work.</span></span>
<span class="line"><span style="color:#393A34;">sleep 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06vethx\u63A5\u5165\u5230ovs-br0\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">ovs-vsctl add-port ovs-br0 vethx</span></span>
<span class="line"><span style="color:#393A34;">ifconfig vethx up</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u542F\u52A8docker\u5BB9\u5668\uFF0C\u4F7F\u7528--net=none\u7B56\u7565</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> containerID=</span><span style="color:#B56959;">$(docker run -tid --net=none busybox:latest /bin/sh)</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> pid=</span><span style="color:#B56959;">$(docker inspect -f &quot;\u3010\u3010.State.Pid\u3011\u3011&quot; </span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">containerID</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> containerID=</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">containerID</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> pid=</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679Cnet namespace\u76EE\u5F55\u6CA1\u6709\u521B\u5EFA\u5219\u65B0\u5EFA\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-d</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;/var/run/netns&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">then</span></span>
<span class="line"><span style="color:#393A34;">  mkdir -p /var/run/netns</span></span>
<span class="line"><span style="color:#1C6B48;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06docker\u5BB9\u5668\u4F7F\u7528\u7684net namespace \u6253\u56DE\u539F\u5F62</span></span>
<span class="line"><span style="color:#393A34;">ln -s /proc/</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">/ns/net /var/run/netns/</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">ip netns list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06vethContainer\u52A0\u5165\u5230\u5BB9\u5668\u7684net namespace\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">ip link </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> vethContainer netns </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u914D\u7F6EvethContainer\u63A5\u53E3</span></span>
<span class="line"><span style="color:#393A34;">ip netns </span><span style="color:#B58451;">exec</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> ifconfig vethContainer 172.16.129.129/24 up</span></span>
<span class="line"><span style="color:#393A34;">ip netns </span><span style="color:#B58451;">exec</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">pid</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> ifconfig -a</span></span>
<span class="line"></span></code></pre></div>`,32),o=[e];function c(r,t,i,y,A,d){return n(),a("div",null,o)}var v=s(l,[["render",c]]);export{B as __pageData,v as default};
