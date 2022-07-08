import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const g=JSON.parse('{"title":"KVM Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"KVM \u7B80\u4ECB","slug":"kvm-\u7B80\u4ECB"},{"level":2,"title":"kvm \u73AF\u5883\u914D\u7F6E\u4E0E\u5B89\u88C5","slug":"kvm-\u73AF\u5883\u914D\u7F6E\u4E0E\u5B89\u88C5"},{"level":2,"title":"\u521B\u5EFA\u3001\u514B\u9686\u865A\u62DF\u673A","slug":"\u521B\u5EFA\u3001\u514B\u9686\u865A\u62DF\u673A"},{"level":2,"title":"\u7BA1\u7406\u865A\u62DF\u673A\u5E38\u7528\u547D\u4EE4","slug":"\u7BA1\u7406\u865A\u62DF\u673A\u5E38\u7528\u547D\u4EE4"},{"level":2,"title":"\u4F7F\u7528 WebVirtMgr \u865A\u62DF\u673A\u7BA1\u7406\u7684 web gui","slug":"\u4F7F\u7528-webvirtmgr-\u865A\u62DF\u673A\u7BA1\u7406\u7684-web-gui"},{"level":2,"title":"\u89E3\u51B3\u865A\u62DF\u673A\u65E0\u6CD5\u8FDE\u63A5\u5916\u7F51\u95EE\u9898","slug":"\u89E3\u51B3\u865A\u62DF\u673A\u65E0\u6CD5\u8FDE\u63A5\u5916\u7F51\u95EE\u9898"},{"level":2,"title":"\u9644\uFF1Akvm \u5B89\u88C5\u811A\u672C","slug":"\u9644\uFF1Akvm-\u5B89\u88C5\u811A\u672C"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/KVM/KVM Basic.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/KVM/KVM Basic.md"},e=l(`<h1 id="kvm-basic" tabindex="-1">KVM Basic <a class="header-anchor" href="#kvm-basic" aria-hidden="true">#</a></h1><h1 id="kvm" tabindex="-1">KVM <a class="header-anchor" href="#kvm" aria-hidden="true">#</a></h1><h2 id="kvm-\u7B80\u4ECB" tabindex="-1">KVM \u7B80\u4ECB <a class="header-anchor" href="#kvm-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>KVM (\u5168\u79F0\u662F Kernel-based Virtual Machine) \u662F Linux \u4E0B x86 \u786C\u4EF6\u5E73\u53F0\u4E0A\u7684\u5168\u529F\u80FD\u865A\u62DF\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u542B\u4E00\u4E2A\u53EF\u52A0\u8F7D\u7684\u5185\u6838\u6A21\u5757 kvm.ko \u63D0\u4F9B\u548C\u865A\u62DF\u5316\u6838\u5FC3\u67B6\u6784\u548C\u5904\u7406\u5668\u89C4\u8303\u6A21\u5757\u3002</p><p>\u4F7F\u7528 KVM \u53EF\u5141\u8BB8\u591A\u4E2A\u5305\u62EC Linux \u548C Windows \u6BCF\u4E2A\u865A\u62DF\u673A\u6709\u79C1\u6709\u7684\u786C\u4EF6\uFF0C\u5305\u62EC\u7F51\u5361\u3001\u78C1\u76D8\u4EE5\u53CA\u56FE\u5F62\u9002\u914D\u5361\u7B49\u3002</p><blockquote><p>\u865A\u62DF\u5316\u662F\u4E91\u8BA1\u7B97\u7684\u57FA\u7840\u3002\u7B80\u5355\u7684\u8BF4\uFF0C\u865A\u62DF\u5316\u4F7F\u5F97\u5728\u4E00\u53F0\u7269\u7406\u7684\u670D\u52A1\u5668\u4E0A\u53EF\u4EE5\u8DD1\u591A\u53F0\u865A\u62DF\u673A\uFF0C\u865A\u62DF\u673A\u5171\u4EAB\u7269\u7406\u673A\u7684 CPU\u3001\u5185\u5B58\u3001IO \u786C\u4EF6\u8D44\u6E90\uFF0C\u4F46\u903B\u8F91\u4E0A\u865A\u62DF\u673A\u4E4B\u95F4\u662F\u76F8\u4E92\u9694\u79BB\u7684\u3002 \u7269\u7406\u673A\u6211\u4EEC\u4E00\u822C\u79F0\u4E3A\u5BBF\u4E3B\u673A\uFF08Host\uFF09\uFF0C\u5BBF\u4E3B\u673A\u4E0A\u9762\u7684\u865A\u62DF\u673A\u79F0\u4E3A\u5BA2\u6237\u673A\uFF08Guest\uFF09</p></blockquote><p><strong>KVM\u5DE5\u4F5C\u539F\u7406</strong>\uFF1A\u7528\u6237\u6A21\u5F0F\u7684QEMU\u901A\u8FC7ioctl\u8FDB\u5165\u5185\u6838\u6A21\u5F0F\uFF0Ckvm\u6A21\u5757\u4E3A\u865A\u62DF\u673A\u521B\u5EFA\u865A\u62DF\u5185\u5B58\uFF0C\u865A\u62DFCPU\u540E\u6267\u884CVMLAUCH\u6307\u4EE4\u8FDB\u5165\u5BA2\u6237\u6A21\u5F0F\u3002\u52A0\u8F7DGuest OS\u5E76\u6267\u884C\u3002\u5982\u679CGuest OS\u53D1\u751F\u5916\u90E8\u4E2D\u65AD\u6216\u8005\u5F71\u5B50\u9875\u8868\u5374\u4E5F\u4E4B\u7C7B\u7684\u60C5\u51B5\uFF0C\u4F1A\u6682\u505CGuest OS\u7684\u6267\u884C\uFF0C\u9000\u51FA\u5BA2\u6237\u6A21\u5F0F\u8FDB\u884C\u5F02\u5E38\u5904\u7406\uFF0C\u6267\u884C\u5BA2\u6237\u4EE3\u7801\u3002\u5982\u679C\u53D1\u751FI/O\u4E8B\u4EF6\u6216\u8005\u4FE1\u53F7\u961F\u5217\u6709\u4FE1\u53F7\u5230\u8FBE\uFF0C\u5C31\u4F1A\u8FDB\u5165\u7528\u6237\u6A21\u5F0F\u5904\u7406\u3002</p><p><img src="https://img2018.cnblogs.com/blog/1630703/201910/1630703-20191007235241385-873683991.png" alt="" title="kvm\u539F\u7406"></p><p>KVM \u7531\u5904\u4E8E\u5185\u6838\u6001\u7684 KVM \u6A21\u5757\u548C\u7528\u6237\u6001\u7684 QEMU \u4E24\u90E8\u5206\u6784\u6210\u3002\u5185\u6838\u6A21\u5757\u5B9E\u73B0\u4E86 CPU \u548C\u5185\u5B58\u865A\u62DF\u5316\u7B49\u51B3\u5B9A\u5173\u952E\u6027\u80FD\u548C\u6838\u5FC3\u5B89\u5168\u7684\u529F\u80FD\u5E76\u5411\u7528\u6237\u7A7A\u95F4\u63D0\u4F9B\u4E86\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD\u7684\u63A5\u53E3\uFF0CQEMU \u5229\u7528 KVM \u6A21\u5757\u63D0\u4F9B\u7684\u63A5\u53E3\u6765\u5B9E\u73B0\u8BBE\u5907\u6A21\u62DF\u3001 IO \u865A\u62DF\u5316\u548C\u7F51\u7EDC\u865A\u62DF\u5316\u7B49\u3002\u5355\u4E2A\u865A\u62DF\u673A\u662F\u5BBF\u4E3B\u673A\u4E0A\u7684\u4E00\u4E2A\u666E\u901A QEMU \u8FDB\u7A0B\uFF0C\u865A\u62DF\u673A\u4E2D\u7684 CPU \u6838\uFF08vCPU\uFF09\u662F QEMU \u7684\u4E00\u4E2A\u7EBF\u7A0B\uFF0CVM \u7684\u7269\u7406\u5730\u5740\u7A7A\u95F4\u662F QEMU \u7684\u865A\u62DF\u5730\u5740\u7A7A\u95F4</p><p>\u56E0\u6B64\u5728\u865A\u62DF\u673A\u8FD0\u884C\u65F6\uFF0C\u6709\u4E09\u79CD\u6A21\u5F0F\uFF1A</p><p>\u5BA2\u6237\u6A21\u5F0F\uFF1A\u6267\u884C\u975EI/O\u7684\u5BA2\u6237\u4EE3\u7801\uFF0C\u865A\u62DF\u673A\u8FD0\u884C\u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\u3002</p><p>\u7528\u6237\u6A21\u5F0F\uFF1A\u4EE3\u8868\u7528\u6237\u6267\u884CI/O\u6307\u4EE4\uFF0CQEMU\u8FD0\u884C\u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\u3002</p><p>\u5185\u6838\u6A21\u5F0F\uFF1A\u5B9E\u73B0\u5BA2\u6237\u6A21\u5F0F\u7684\u5207\u6362\uFF0C\u5904\u7406\u56E0\u4E3AI/O\u6216\u8005\u5176\u4ED6\u6307\u4EE4\u5F15\u8D77\u7684\u4ECE\u5BA2\u6237\u6A21\u5F0F\u9000\u51FA\uFF08VM_EXIT\uFF09\u3002kvm\u6A21\u5757\u8FD0\u884C\u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\u3002</p><p>kvm\u6A21\u578B\u4E2D\uFF0C\u6BCF\u4E00\u4E2AGuest OS\u90FD\u662F\u4F5C\u4E3A\u4E00\u4E2A\u6807\u51C6\u7684Linux\u8FDB\u7A0B\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528Linux\u8FDB\u7A0B\u7BA1\u7406\u547D\u4EE4\u7BA1\u7406\u3002</p><h2 id="kvm-\u73AF\u5883\u914D\u7F6E\u4E0E\u5B89\u88C5" tabindex="-1">kvm \u73AF\u5883\u914D\u7F6E\u4E0E\u5B89\u88C5 <a class="header-anchor" href="#kvm-\u73AF\u5883\u914D\u7F6E\u4E0E\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u9996\u5148\u68C0\u67E5\u4E3B\u673A\u662F\u5426\u652F\u6301\u865A\u62DF\u5316\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">egrep -o </span><span style="color:#C98A7D;">&#39;vmx|svm&#39;</span><span style="color:#DBD7CA;"> /proc/cpuinfo</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">egrep -o </span><span style="color:#B56959;">&#39;vmx|svm&#39;</span><span style="color:#393A34;"> /proc/cpuinfo</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u4E3A\u4E86\u65B9\u4FBF\u8D77\u89C1\uFF0C\u5173\u95ED\u9632\u706B\u5899\u548C<code>SElinux</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#DBD7CA;">setenforce 0</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -ri </span><span style="color:#C98A7D;">&#39;s/^(SELINUX=).*/\\1disabled/g&#39;</span><span style="color:#DBD7CA;"> /etc/selinux/config</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#393A34;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#393A34;">setenforce 0</span></span>
<span class="line"><span style="color:#393A34;">sed -ri </span><span style="color:#B56959;">&#39;s/^(SELINUX=).*/\\1disabled/g&#39;</span><span style="color:#393A34;"> /etc/selinux/config</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u5B89\u88C5\u5FC5\u8981\u5DE5\u5177\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum -y install epel-release vim wget net-tools unzip zip gcc gcc-c++ bridge-utils</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum -y install epel-release vim wget net-tools unzip zip gcc gcc-c++ bridge-utils</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u5B89\u88C5 kvm\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum -y install kvm qemu-kvm qemu-kvm-tools qemu-img virt-manager libvirt libvirt-python libvirt-client virt-install virt-viewer bridge-utils libguestfs-tools python-virtinst</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum -y install kvm qemu-kvm qemu-kvm-tools qemu-img virt-manager libvirt libvirt-python libvirt-client virt-install virt-viewer bridge-utils libguestfs-tools python-virtinst</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u8BBE\u7F6E<code>libvirtd</code>\u4E3A\u5F00\u673A\u81EA\u542F\u9879\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> libvirtd</span></span>
<span class="line"><span style="color:#758575;"># \u91CD\u542F\u4E3B\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">reboot</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> libvirtd</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u91CD\u542F\u4E3B\u673A</span></span>
<span class="line"><span style="color:#393A34;">reboot</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u542F\u4E4B\u540E\u68C0\u67E5\u662F\u5426\u52A0\u8F7D<code>kvm</code>\u6A21\u5757\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@kvm </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> lsmod </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep kvm</span></span>
<span class="line"><span style="color:#DBD7CA;">kvm_intel             188688  0 </span></span>
<span class="line"><span style="color:#DBD7CA;">kvm                   636965  1 kvm_intel</span></span>
<span class="line"><span style="color:#DBD7CA;">irqbypass              13503  1 kvm</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@kvm </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> lsmod </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep kvm</span></span>
<span class="line"><span style="color:#393A34;">kvm_intel             188688  0 </span></span>
<span class="line"><span style="color:#393A34;">kvm                   636965  1 kvm_intel</span></span>
<span class="line"><span style="color:#393A34;">irqbypass              13503  1 kvm</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u914D\u7F6E kvm \u670D\u52A1\u5668\u7F51\u7EDC</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /etc/sysconfig/network-scripts/</span></span>
<span class="line"><span style="color:#DBD7CA;">cp ifcfg-ens33 ifcfg-br0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u7F16\u8F91 ifcfg-ens33 \u6587\u4EF6\uFF0C\u5728\u539F\u5148\u57FA\u7840\u4E0A\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">NM_CONTROLLED=no</span></span>
<span class="line"><span style="color:#DBD7CA;">BRIDGE=br0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u7F16\u8F91 ifcfg-br0 \u6587\u4EF6\uFF0C\u4FEE\u6539\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">TYPE=Bridge</span></span>
<span class="line"><span style="color:#DBD7CA;">NAME=br0</span></span>
<span class="line"><span style="color:#DBD7CA;">DEVICE=br0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /etc/sysconfig/network-scripts/</span></span>
<span class="line"><span style="color:#393A34;">cp ifcfg-ens33 ifcfg-br0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u8F91 ifcfg-ens33 \u6587\u4EF6\uFF0C\u5728\u539F\u5148\u57FA\u7840\u4E0A\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">NM_CONTROLLED=no</span></span>
<span class="line"><span style="color:#393A34;">BRIDGE=br0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u8F91 ifcfg-br0 \u6587\u4EF6\uFF0C\u4FEE\u6539\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">TYPE=Bridge</span></span>
<span class="line"><span style="color:#393A34;">NAME=br0</span></span>
<span class="line"><span style="color:#393A34;">DEVICE=br0</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u542F\u7F51\u7EDC\u670D\u52A1\uFF0C\u67E5\u770B\u7F51\u5361\u4FE1\u606F\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@kvm network-scripts</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ip a</span></span>
<span class="line"><span style="color:#DBD7CA;">1: lo: </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">LOOPBACK,UP,LOWER_UP</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet6 ::1/128 scope host </span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">2: ens33: </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> mtu 1500 qdisc pfifo_fast master br0 state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#DBD7CA;">3: br0: </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> mtu 1500 qdisc noqueue state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet 172.16.1.140/24 brd 172.16.1.255 scope global noprefixroute br0</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet6 fe80::20c:29ff:fedb:c408/64 scope link </span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@kvm network-scripts</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ip a</span></span>
<span class="line"><span style="color:#393A34;">1: lo: </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">LOOPBACK,UP,LOWER_UP</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span></span>
<span class="line"><span style="color:#393A34;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#393A34;">    inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">    inet6 ::1/128 scope host </span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">2: ens33: </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> mtu 1500 qdisc pfifo_fast master br0 state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#393A34;">    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#393A34;">3: br0: </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> mtu 1500 qdisc noqueue state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#393A34;">    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#393A34;">    inet 172.16.1.140/24 brd 172.16.1.255 scope global noprefixroute br0</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">    inet6 fe80::20c:29ff:fedb:c408/64 scope link </span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"></span></code></pre></div><p>\u53D1\u73B0<code>ens33</code>\u539F\u6765\u7684ip\u662F\u4E0D\u663E\u793A\u7684\uFF0C\u8FD9\u662F\u56E0\u4E3A<code>br0</code>\u7F51\u5361\u5360\u7528\u4E86\uFF0C\u5E76\u4E14\u6B64\u65F6\u7269\u7406\u673A\u4E0A\u7684Linux\u7CFB\u7EDF\u7684ip\u662F\u88ABbr0\u8986\u76D6\u6389\u7684\uFF0C\u539F\u5148\u7684ip\u5730\u5740\u4E0D\u80FD\u518D\u4F7F\u7528\u4E86\u3002\u6B64\u65F6\u6211\u4EEC\u770B\u5230br0\u7684ip\u5730\u5740\u5C31\u662F\u8FD9\u53F0\u7269\u7406\u673Aip\u5730\u5740\uFF0C\u8FD9\u4E0D\u662F\u865A\u62DF\u673A\u7684\u5730\u5740</p><p><img src="https://img2018.cnblogs.com/blog/1501874/201902/1501874-20190227234758267-625194066.png" alt="" title="\u6865\u63A5\u7F51\u7EDC\u6A21\u578B"></p><ol start="7"><li>\u6D4B\u8BD5\u9A8C\u8BC1\u5B89\u88C5\u7ED3\u679C\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">virsh -c qemu:///system list</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh --version</span></span>
<span class="line"><span style="color:#DBD7CA;">virt-install --version</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">virsh -c qemu:///system list</span></span>
<span class="line"><span style="color:#393A34;">virsh --version</span></span>
<span class="line"><span style="color:#393A34;">virt-install --version</span></span>
<span class="line"></span></code></pre></div><ol start="8"><li>\u521B\u5EFA\u8F6F\u8FDE\u63A5\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ln -s /usr/libexec/qemu-kvm /usr/bin/qemu-kvm</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ln -s /usr/libexec/qemu-kvm /usr/bin/qemu-kvm</span></span>
<span class="line"></span></code></pre></div><ol start="9"><li>\u67E5\u770B\u5F53\u524D\u7F51\u6865\u4FE1\u606F\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@kvm </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> brctl show</span></span>
<span class="line"><span style="color:#DBD7CA;">bridge name     bridge id               STP enabled     interfaces</span></span>
<span class="line"><span style="color:#DBD7CA;">br0             8000.000c29dbc408       no              ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">virbr0          8000.5254008ad9e8       yes             virbr0-nic</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@kvm </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> brctl show</span></span>
<span class="line"><span style="color:#393A34;">bridge name     bridge id               STP enabled     interfaces</span></span>
<span class="line"><span style="color:#393A34;">br0             8000.000c29dbc408       no              ens33</span></span>
<span class="line"><span style="color:#393A34;">virbr0          8000.5254008ad9e8       yes             virbr0-nic</span></span>
<span class="line"></span></code></pre></div><p>\u7531\u4E8E\u5F53\u524D\u672A\u521B\u5EFA\u4EFB\u4F55\u865A\u62DF\u673A\uFF0C\u6240\u4EE5\u6682\u65F6\u6CA1\u6709\u865A\u62DF\u7F51\u5361\u51FA\u73B0\u3002</p><h2 id="\u521B\u5EFA\u3001\u514B\u9686\u865A\u62DF\u673A" tabindex="-1">\u521B\u5EFA\u3001\u514B\u9686\u865A\u62DF\u673A <a class="header-anchor" href="#\u521B\u5EFA\u3001\u514B\u9686\u865A\u62DF\u673A" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">virt-install --name=elk01 --memory=2048,maxmemory=3072 --vcpus=2,maxvcpus=2 --os-type=linux --os-variant=rhel6 --location=/data/iso/CentOS-6.10-x86_64-minimal.iso --disk path=/data/elk01.img,size=30 --bridge=br0 --graphics=none --console=pty,target_type=serial --extra-args=</span><span style="color:#C98A7D;">&quot;console=tty0 console=ttyS0&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">virt-install --name=elk01 --memory=2048,maxmemory=3072 --vcpus=2,maxvcpus=2 --os-type=linux --os-variant=rhel6 --location=/data/iso/CentOS-6.10-x86_64-minimal.iso --disk path=/data/elk01.img,size=30 --bridge=br0 --graphics=none --console=pty,target_type=serial --extra-args=</span><span style="color:#B56959;">&quot;console=tty0 console=ttyS0&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u26A0\uFE0F\u6CE8\u610F\uFF1A\u955C\u50CF\u6587\u4EF6\u4E0D\u8981\u653E\u7F6E\u4E8E\u6839\u5BB6\u76EE\u5F55\u4E0B\uFF0C\u4E0D\u7136\u4F1A\u8FD0\u884C\u5931\u8D25\uFF0C\u663E\u793A<code>Permission Denied</code>\u9519\u8BEF</p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>--name </code>\u6307\u5B9A\u865A\u62DF\u673A\u7684\u540D\u79F0</li><li><code>--memory </code>\u6307\u5B9A\u5206\u914D\u7ED9\u865A\u62DF\u673A\u7684\u5185\u5B58\u8D44\u6E90\u5927\u5C0F</li><li><code>maxmemory </code>\u6307\u5B9A\u53EF\u8C03\u8282\u7684\u6700\u5927\u5185\u5B58\u8D44\u6E90\u5927\u5C0F\uFF0C\u56E0\u4E3AKVM\u652F\u6301\u70ED\u8C03\u6574\u865A\u62DF\u673A\u7684\u8D44\u6E90</li><li><code>--vcpus </code>\u6307\u5B9A\u5206\u914D\u7ED9\u865A\u62DF\u673A\u7684CPU\u6838\u5FC3\u6570\u91CF</li><li><code>maxvcpus </code>\u6307\u5B9A\u53EF\u8C03\u8282\u7684\u6700\u5927CPU\u6838\u5FC3\u6570\u91CF</li><li><code>--os-type</code> \u6307\u5B9A\u865A\u62DF\u673A\u5B89\u88C5\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7C7B\u578B</li><li><code>--os-variant </code>\u6307\u5B9A\u7CFB\u7EDF\u7684\u53D1\u884C\u7248\u672C</li><li><code>--location </code>\u6307\u5B9AISO\u955C\u50CF\u6587\u4EF6\u6240\u5728\u7684\u8DEF\u5F84\uFF0C\u652F\u6301\u4F7F\u7528\u7F51\u7EDC\u8D44\u6E90\u8DEF\u5F84\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EF\u4EE5\u4F7F\u7528URL</li><li><code>--disk path </code>\u6307\u5B9A\u865A\u62DF\u786C\u76D8\u6240\u5B58\u653E\u7684\u8DEF\u5F84\u53CA\u540D\u79F0\uFF0Csize \u5219\u662F\u6307\u5B9A\u8BE5\u786C\u76D8\u7684\u53EF\u7528\u5927\u5C0F\uFF0C\u5355\u4F4D\u662FG</li><li><code>--bridge </code>\u6307\u5B9A\u4F7F\u7528\u54EA\u4E00\u4E2A\u6865\u63A5\u7F51\u5361\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F7F\u7528\u6865\u63A5\u7684\u7F51\u7EDC\u6A21\u5F0F</li><li><code>--graphics </code>\u6307\u5B9A\u662F\u5426\u5F00\u542F\u56FE\u5F62</li><li><code>--console </code>\u5B9A\u4E49\u7EC8\u7AEF\u7684\u5C5E\u6027\uFF0Ctarget_type \u5219\u662F\u5B9A\u4E49\u7EC8\u7AEF\u7684\u7C7B\u578B</li><li><code>--extra-args </code>\u5B9A\u4E49\u7EC8\u7AEF\u989D\u5916\u7684\u53C2\u6570</li></ul><p>\u514B\u9686\u865A\u62DF\u673A\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">virt-clone -o elk04 -n elk05 -f /data/elk05.img</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">virt-clone -o elk04 -n elk05 -f /data/elk05.img</span></span>
<span class="line"></span></code></pre></div><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><p><code>-o</code>\u540E\u8DDF\u65E7\u7684\u7CFB\u7EDF\u7684\u540D\u79F0</p></li><li><p><code>-n</code>\u540E\u8DDF\u514B\u9686\u540E\u7684\u65B0\u7CFB\u7EDF\u7684\u540D\u79F0</p></li><li><p><code>-f</code>\u540E\u8DDF\u514B\u9686\u540E\u7684\u7CFB\u7EDF\u5B58\u653E\u7684\u4F4D\u7F6E</p></li></ul><p>\u521B\u5EFA<code>windows server 2008</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">virt-install -n windows_vm04 -r 8196 --vcpus=4 --os-type=windows --accelerate -c /data/vpsdata/img/virtio-win.iso --disk path=/data/vpsdata/img/cn_windows_server_2008_r2.iso,device=cdrom --disk path=/data/vpsdata/vps/vm04.img,format=qcow2,bus=virtio --network bridge=br0 --vnc --vncport=5904 --vnclisten=0.0.0.0 --force --autostart</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">virt-install -n windows_vm04 -r 8196 --vcpus=4 --os-type=windows --accelerate -c /data/vpsdata/img/virtio-win.iso --disk path=/data/vpsdata/img/cn_windows_server_2008_r2.iso,device=cdrom --disk path=/data/vpsdata/vps/vm04.img,format=qcow2,bus=virtio --network bridge=br0 --vnc --vncport=5904 --vnclisten=0.0.0.0 --force --autostart</span></span>
<span class="line"></span></code></pre></div><p>\u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\uFF0C\u4F7F\u7528<code>VNC</code>\u8FDC\u7A0B\u8FDE\u63A5\u8F6F\u4EF6\u8FDB\u884C\u5B89\u88C5.</p><h2 id="\u7BA1\u7406\u865A\u62DF\u673A\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u7BA1\u7406\u865A\u62DF\u673A\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u7BA1\u7406\u865A\u62DF\u673A\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u865A\u62DF\u673A\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">virsh list --all		</span><span style="color:#758575;"># \u5217\u51FA\u6240\u6709\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh dominfo elk01		</span><span style="color:#758575;"># \u663E\u793A\u865A\u62DF\u673A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#DBD7CA;">virt-top		</span><span style="color:#758575;"># \u663E\u793A\u865A\u62DF\u673A\u5185\u5B58\u548Ccpu\u4F7F\u7528\u60C5\u51B5\uFF0C\u8BE5\u5DE5\u5177\u9700\u8981\u5355\u72EC\u5B89\u88C5</span></span>
<span class="line"><span style="color:#DBD7CA;">virt-df elk01		</span><span style="color:#758575;"># \u663E\u793A\u865A\u62DF\u673A\u5206\u533A\u6302\u8F7D\u4FE1\u606F</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">virsh list --all		</span><span style="color:#A0ADA0;"># \u5217\u51FA\u6240\u6709\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#393A34;">virsh dominfo elk01		</span><span style="color:#A0ADA0;"># \u663E\u793A\u865A\u62DF\u673A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#393A34;">virt-top		</span><span style="color:#A0ADA0;"># \u663E\u793A\u865A\u62DF\u673A\u5185\u5B58\u548Ccpu\u4F7F\u7528\u60C5\u51B5\uFF0C\u8BE5\u5DE5\u5177\u9700\u8981\u5355\u72EC\u5B89\u88C5</span></span>
<span class="line"><span style="color:#393A34;">virt-df elk01		</span><span style="color:#A0ADA0;"># \u663E\u793A\u865A\u62DF\u673A\u5206\u533A\u6302\u8F7D\u4FE1\u606F</span></span>
<span class="line"></span></code></pre></div><p>\u7BA1\u7406\u865A\u62DF\u673A\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">virsh console elk01          </span><span style="color:#758575;"># \u8FDB\u5165\u6307\u5B9A\u7684\u865A\u62DF\u673A\uFF0C\u8FDB\u5165\u7684\u65F6\u5019\u8FD8\u9700\u8981\u6309\u4E00\u4E0B\u56DE\u8F66</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh start elk01          </span><span style="color:#758575;"># \u542F\u52A8\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh shutdown elk01          </span><span style="color:#758575;"># \u5173\u95ED\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh destroy elk01          </span><span style="color:#758575;"># \u5F3A\u5236\u505C\u6B62\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh undefine elk01          </span><span style="color:#758575;"># \u5F7B\u5E95\u9500\u6BC1\u865A\u62DF\u673A\uFF0C\u4F1A\u5220\u9664\u865A\u62DF\u673A\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F46\u4E0D\u4F1A\u5220\u9664\u865A\u62DF\u78C1\u76D8</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh autostart elk01          </span><span style="color:#758575;"># \u8BBE\u7F6E\u5BBF\u4E3B\u673A\u5F00\u673A\u65F6\u8BE5\u865A\u62DF\u673A\u4E5F\u5F00\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh autostart --disable elk01          </span><span style="color:#758575;"># \u89E3\u9664\u5F00\u673A\u542F\u52A8</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh </span><span style="color:#E0A569;">suspend</span><span style="color:#DBD7CA;"> elk01         </span><span style="color:#758575;"># \u6302\u8D77\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh resume elk01         </span><span style="color:#758575;"># \u6062\u590D\u6302\u8D77\u7684\u865A\u62DF\u673A</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">virsh console elk01          </span><span style="color:#A0ADA0;"># \u8FDB\u5165\u6307\u5B9A\u7684\u865A\u62DF\u673A\uFF0C\u8FDB\u5165\u7684\u65F6\u5019\u8FD8\u9700\u8981\u6309\u4E00\u4E0B\u56DE\u8F66</span></span>
<span class="line"><span style="color:#393A34;">virsh start elk01          </span><span style="color:#A0ADA0;"># \u542F\u52A8\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#393A34;">virsh shutdown elk01          </span><span style="color:#A0ADA0;"># \u5173\u95ED\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#393A34;">virsh destroy elk01          </span><span style="color:#A0ADA0;"># \u5F3A\u5236\u505C\u6B62\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#393A34;">virsh undefine elk01          </span><span style="color:#A0ADA0;"># \u5F7B\u5E95\u9500\u6BC1\u865A\u62DF\u673A\uFF0C\u4F1A\u5220\u9664\u865A\u62DF\u673A\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F46\u4E0D\u4F1A\u5220\u9664\u865A\u62DF\u78C1\u76D8</span></span>
<span class="line"><span style="color:#393A34;">virsh autostart elk01          </span><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u5BBF\u4E3B\u673A\u5F00\u673A\u65F6\u8BE5\u865A\u62DF\u673A\u4E5F\u5F00\u673A</span></span>
<span class="line"><span style="color:#393A34;">virsh autostart --disable elk01          </span><span style="color:#A0ADA0;"># \u89E3\u9664\u5F00\u673A\u542F\u52A8</span></span>
<span class="line"><span style="color:#393A34;">virsh </span><span style="color:#B58451;">suspend</span><span style="color:#393A34;"> elk01         </span><span style="color:#A0ADA0;"># \u6302\u8D77\u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#393A34;">virsh resume elk01         </span><span style="color:#A0ADA0;"># \u6062\u590D\u6302\u8D77\u7684\u865A\u62DF\u673A</span></span>
<span class="line"></span></code></pre></div><p>\u7ED9\u865A\u62DF\u673A\u6DFB\u52A0\u3001\u5220\u9664\u786C\u76D8\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">virsh attach-disk kvm-1 /dev/sdb vbd --driver qemu --mode shareable</span></span>
<span class="line"><span style="color:#DBD7CA;">virsh detach-disk kvm vdb</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">virsh attach-disk kvm-1 /dev/sdb vbd --driver qemu --mode shareable</span></span>
<span class="line"><span style="color:#393A34;">virsh detach-disk kvm vdb</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528-webvirtmgr-\u865A\u62DF\u673A\u7BA1\u7406\u7684-web-gui" tabindex="-1">\u4F7F\u7528 WebVirtMgr \u865A\u62DF\u673A\u7BA1\u7406\u7684 web gui <a class="header-anchor" href="#\u4F7F\u7528-webvirtmgr-\u865A\u62DF\u673A\u7BA1\u7406\u7684-web-gui" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u5F00\u6E90\u5730\u5740\uFF1A<a href="https://github.com/retspen/webvirtmgr" target="_blank" rel="noopener noreferrer">https://github.com/retspen/webvirtmgr</a></p><ol><li>\u5B89\u88C5\u6240\u9700\u7A0B\u5E8F\u5305\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u9996\u5148\u786E\u4FDD\u4E3B\u673A\u6709epel\u4ED3\u5E93\uFF0C\u6CA1\u6709\u5219\u9700\u8981\u5148\u5B89\u88C5</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install epel-release</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">yum -y install git python-pip libvirt-python libxml2-python python-websockify supervisor nginx</span></span>
<span class="line"><span style="color:#DBD7CA;">yum -y install gcc python-devel</span></span>
<span class="line"><span style="color:#DBD7CA;">pip install numpy</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u9996\u5148\u786E\u4FDD\u4E3B\u673A\u6709epel\u4ED3\u5E93\uFF0C\u6CA1\u6709\u5219\u9700\u8981\u5148\u5B89\u88C5</span></span>
<span class="line"><span style="color:#393A34;">yum install epel-release</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">yum -y install git python-pip libvirt-python libxml2-python python-websockify supervisor nginx</span></span>
<span class="line"><span style="color:#393A34;">yum -y install gcc python-devel</span></span>
<span class="line"><span style="color:#393A34;">pip install numpy</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5B89\u88C5python\u4F9D\u8D56\u5E76\u914D\u7F6E<code>Django</code>\u73AF\u5883</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">git clone git://github.com/retspen/webvirtmgr.git</span></span>
<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> webvirtmgr</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo pip install -r requirements.txt   </span><span style="color:#758575;"># or python-pip (RedHat, Fedora, CentOS, OpenSuse)</span></span>
<span class="line"><span style="color:#758575;"># \u521D\u59CB\u5316\u8D26\u6237</span></span>
<span class="line"><span style="color:#DBD7CA;">./manage.py syncdb</span></span>
<span class="line"><span style="color:#DBD7CA;">./manage.py collectstatic</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">git clone git://github.com/retspen/webvirtmgr.git</span></span>
<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> webvirtmgr</span></span>
<span class="line"><span style="color:#393A34;">sudo pip install -r requirements.txt   </span><span style="color:#A0ADA0;"># or python-pip (RedHat, Fedora, CentOS, OpenSuse)</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521D\u59CB\u5316\u8D26\u6237</span></span>
<span class="line"><span style="color:#393A34;">./manage.py syncdb</span></span>
<span class="line"><span style="color:#393A34;">./manage.py collectstatic</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u914D\u7F6E<code>nginx</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> ..</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo mv webvirtmgr /var/www/</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> ..</span></span>
<span class="line"><span style="color:#393A34;">sudo mv webvirtmgr /var/www/</span></span>
<span class="line"></span></code></pre></div><p>Add file <code>webvirtmgr.conf</code> in <code>/etc/nginx/conf.d</code>:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">server </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    listen 80 default_server</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    server_name </span><span style="color:#858585;">$</span><span style="color:#B8A965;">hostname</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#access_log /var/log/nginx/webvirtmgr_access_log; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    location /static/ </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        root /var/www/webvirtmgr/webvirtmgr</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;"># or /srv instead of /var</span></span>
<span class="line"><span style="color:#DBD7CA;">        expires max</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    location </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> .</span><span style="color:#CB7676;">*</span><span style="color:#D4976C;">\\.</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">js</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">css</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">$ </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">           proxy_pass http://127.0.0.1:8000</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    location / </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_pass http://127.0.0.1:8000</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_set_header X-Real-IP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_set_header X-Forwarded-for </span><span style="color:#858585;">$</span><span style="color:#B8A965;">proxy_add_x_forwarded_for</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_set_header Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#DBD7CA;">:</span><span style="color:#858585;">$</span><span style="color:#B8A965;">server_port</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_set_header X-Forwarded-Proto </span><span style="color:#858585;">$</span><span style="color:#B8A965;">scheme</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_connect_timeout 600</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_read_timeout 600</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        proxy_send_timeout 600</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">        client_max_body_size 1024M</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;"># Set higher depending on your needs </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">server </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    listen 80 default_server</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    server_name </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">hostname</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#access_log /var/log/nginx/webvirtmgr_access_log; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    location /static/ </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        root /var/www/webvirtmgr/webvirtmgr</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># or /srv instead of /var</span></span>
<span class="line"><span style="color:#393A34;">        expires max</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    location </span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> .</span><span style="color:#AB5959;">*</span><span style="color:#A65E2B;">\\.</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">js</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">css</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">$ </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">           proxy_pass http://127.0.0.1:8000</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    location / </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        proxy_pass http://127.0.0.1:8000</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_set_header X-Real-IP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_set_header X-Forwarded-for </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">proxy_add_x_forwarded_for</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_set_header Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#393A34;">:</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">server_port</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_set_header X-Forwarded-Proto </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">scheme</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_connect_timeout 600</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_read_timeout 600</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        proxy_send_timeout 600</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">        client_max_body_size 1024M</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># Set higher depending on your needs </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>Open nginx.conf out of <code>/etc/nginx/nginx.conf</code>:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6CE8\u91CA\u6389\u4EE5\u4E0B\u4FE1\u606F</span></span>
<span class="line"><span style="color:#758575;">#    server {</span></span>
<span class="line"><span style="color:#758575;">#        listen       80 default_server;</span></span>
<span class="line"><span style="color:#758575;">#        server_name  localhost;</span></span>
<span class="line"><span style="color:#758575;">#        root         /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#758575;">#</span></span>
<span class="line"><span style="color:#758575;">#        #charset koi8-r;</span></span>
<span class="line"><span style="color:#758575;">#</span></span>
<span class="line"><span style="color:#758575;">#        #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span style="color:#758575;">#</span></span>
<span class="line"><span style="color:#758575;">#        # Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#758575;">#        include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"><span style="color:#758575;">#</span></span>
<span class="line"><span style="color:#758575;">#        location / {</span></span>
<span class="line"><span style="color:#758575;">#        }</span></span>
<span class="line"><span style="color:#758575;">#</span></span>
<span class="line"><span style="color:#758575;">#        # redirect server error pages to the static page /40x.html</span></span>
<span class="line"><span style="color:#758575;">#        #</span></span>
<span class="line"><span style="color:#758575;">#        error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#758575;">#        location = /40x.html {</span></span>
<span class="line"><span style="color:#758575;">#        }</span></span>
<span class="line"><span style="color:#758575;">#</span></span>
<span class="line"><span style="color:#758575;">#        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#758575;">#        #</span></span>
<span class="line"><span style="color:#758575;">#        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#758575;">#        location = /50x.html {</span></span>
<span class="line"><span style="color:#758575;">#        }</span></span>
<span class="line"><span style="color:#758575;">#    }</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6CE8\u91CA\u6389\u4EE5\u4E0B\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A0ADA0;">#    server {</span></span>
<span class="line"><span style="color:#A0ADA0;">#        listen       80 default_server;</span></span>
<span class="line"><span style="color:#A0ADA0;">#        server_name  localhost;</span></span>
<span class="line"><span style="color:#A0ADA0;">#        root         /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#A0ADA0;">#</span></span>
<span class="line"><span style="color:#A0ADA0;">#        #charset koi8-r;</span></span>
<span class="line"><span style="color:#A0ADA0;">#</span></span>
<span class="line"><span style="color:#A0ADA0;">#        #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span style="color:#A0ADA0;">#</span></span>
<span class="line"><span style="color:#A0ADA0;">#        # Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#A0ADA0;">#        include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"><span style="color:#A0ADA0;">#</span></span>
<span class="line"><span style="color:#A0ADA0;">#        location / {</span></span>
<span class="line"><span style="color:#A0ADA0;">#        }</span></span>
<span class="line"><span style="color:#A0ADA0;">#</span></span>
<span class="line"><span style="color:#A0ADA0;">#        # redirect server error pages to the static page /40x.html</span></span>
<span class="line"><span style="color:#A0ADA0;">#        #</span></span>
<span class="line"><span style="color:#A0ADA0;">#        error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#A0ADA0;">#        location = /40x.html {</span></span>
<span class="line"><span style="color:#A0ADA0;">#        }</span></span>
<span class="line"><span style="color:#A0ADA0;">#</span></span>
<span class="line"><span style="color:#A0ADA0;">#        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#A0ADA0;">#        #</span></span>
<span class="line"><span style="color:#A0ADA0;">#        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A0ADA0;">#        location = /50x.html {</span></span>
<span class="line"><span style="color:#A0ADA0;">#        }</span></span>
<span class="line"><span style="color:#A0ADA0;">#    }</span></span>
<span class="line"></span></code></pre></div><p>\u8BBE\u7F6E\u5B8C\u6210\u4E4B\u540E\uFF0C\u91CD\u542F nginx \u670D\u52A1\uFF0C<code>systemctl restart nginx</code></p><ol start="4"><li>\u914D\u7F6E<code>Supervisor</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u8BBE\u7F6ESupervisor\u5F00\u673A\u542F\u52A8</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> supervisor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">chown -R nginx:nginx /var/www/webvirtmgr</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6ESupervisor\u5F00\u673A\u542F\u52A8</span></span>
<span class="line"><span style="color:#393A34;">systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> supervisor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">chown -R nginx:nginx /var/www/webvirtmgr</span></span>
<span class="line"></span></code></pre></div><p>Create file <code>/etc/supervisord.d/webvirtmgr.ini</code> with following content:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">program:webvirtmgr</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">command=/usr/bin/python /var/www/webvirtmgr/manage.py run_gunicorn -c /var/www/webvirtmgr/conf/gunicorn.conf.py</span></span>
<span class="line"><span style="color:#DBD7CA;">directory=/var/www/webvirtmgr</span></span>
<span class="line"><span style="color:#DBD7CA;">autostart=true</span></span>
<span class="line"><span style="color:#DBD7CA;">autorestart=true</span></span>
<span class="line"><span style="color:#DBD7CA;">logfile=/var/log/supervisor/webvirtmgr.log</span></span>
<span class="line"><span style="color:#DBD7CA;">log_stderr=true</span></span>
<span class="line"><span style="color:#DBD7CA;">user=nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">program:webvirtmgr-console</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">command=/usr/bin/python /var/www/webvirtmgr/console/webvirtmgr-console</span></span>
<span class="line"><span style="color:#DBD7CA;">directory=/var/www/webvirtmgr</span></span>
<span class="line"><span style="color:#DBD7CA;">autostart=true</span></span>
<span class="line"><span style="color:#DBD7CA;">autorestart=true</span></span>
<span class="line"><span style="color:#DBD7CA;">stdout_logfile=/var/log/supervisor/webvirtmgr-console.log</span></span>
<span class="line"><span style="color:#DBD7CA;">redirect_stderr=true</span></span>
<span class="line"><span style="color:#DBD7CA;">user=nginx</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">program:webvirtmgr</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">command=/usr/bin/python /var/www/webvirtmgr/manage.py run_gunicorn -c /var/www/webvirtmgr/conf/gunicorn.conf.py</span></span>
<span class="line"><span style="color:#393A34;">directory=/var/www/webvirtmgr</span></span>
<span class="line"><span style="color:#393A34;">autostart=true</span></span>
<span class="line"><span style="color:#393A34;">autorestart=true</span></span>
<span class="line"><span style="color:#393A34;">logfile=/var/log/supervisor/webvirtmgr.log</span></span>
<span class="line"><span style="color:#393A34;">log_stderr=true</span></span>
<span class="line"><span style="color:#393A34;">user=nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">program:webvirtmgr-console</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">command=/usr/bin/python /var/www/webvirtmgr/console/webvirtmgr-console</span></span>
<span class="line"><span style="color:#393A34;">directory=/var/www/webvirtmgr</span></span>
<span class="line"><span style="color:#393A34;">autostart=true</span></span>
<span class="line"><span style="color:#393A34;">autorestart=true</span></span>
<span class="line"><span style="color:#393A34;">stdout_logfile=/var/log/supervisor/webvirtmgr-console.log</span></span>
<span class="line"><span style="color:#393A34;">redirect_stderr=true</span></span>
<span class="line"><span style="color:#393A34;">user=nginx</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u542F\u52A8\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">./manage.py runserver 0:8000</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">./manage.py runserver 0:8000</span></span>
<span class="line"></span></code></pre></div><p>\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE<code>http://x.x.x.x:8000 (x.x.x.x - your server IP address )</code></p><h2 id="\u89E3\u51B3\u865A\u62DF\u673A\u65E0\u6CD5\u8FDE\u63A5\u5916\u7F51\u95EE\u9898" tabindex="-1">\u89E3\u51B3\u865A\u62DF\u673A\u65E0\u6CD5\u8FDE\u63A5\u5916\u7F51\u95EE\u9898 <a class="header-anchor" href="#\u89E3\u51B3\u865A\u62DF\u673A\u65E0\u6CD5\u8FDE\u63A5\u5916\u7F51\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="https://blog.csdn.net/zhydream77/article/details/81629586" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/zhydream77/article/details/81629586</a></p><h2 id="\u9644\uFF1Akvm-\u5B89\u88C5\u811A\u672C" tabindex="-1">\u9644\uFF1Akvm \u5B89\u88C5\u811A\u672C <a class="header-anchor" href="#\u9644\uFF1Akvm-\u5B89\u88C5\u811A\u672C" aria-hidden="true">#</a></h2><p><a href="./kvm_install.sh.html">kvm_install.sh</a></p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Kvm \u865A\u62DF\u5316\u4ECB\u7ECD: <a href="https://www.cnblogs.com/wete/p/11099339.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/wete/p/11099339.html</a></li><li>Kvm \u57FA\u672C\u8FD0\u7EF4\u547D\u4EE4\uFF1A<a href="https://www.cnblogs.com/zy-303/p/9930353.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/zy-303/p/9930353.html</a></li><li>webvirtmgr installation: <a href="https://github.com/retspen/webvirtmgr/wiki/Install-WebVirtMgr" target="_blank" rel="noopener noreferrer">https://github.com/retspen/webvirtmgr/wiki/Install-WebVirtMgr</a></li></ul>`,85),o=[e];function c(r,t,i,y,d,A){return n(),a("div",null,o)}var D=s(p,[["render",c]]);export{g as __pageData,D as default};
