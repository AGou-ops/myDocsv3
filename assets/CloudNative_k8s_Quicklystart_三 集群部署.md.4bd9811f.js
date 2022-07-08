import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"\u4E09 \u96C6\u7FA4\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1 \u4E00\u822C\u90E8\u7F72","slug":"_3-1-\u4E00\u822C\u90E8\u7F72"},{"level":3,"title":"3.1.1 \u5173\u95ED firewalld \u548C selinux","slug":"_3-1-1-\u5173\u95ED-firewalld-\u548C-selinux"},{"level":3,"title":"3.1.2 \u52A0\u8F7D ipvs \u5185\u6838\u6A21\u5757","slug":"_3-1-2-\u52A0\u8F7D-ipvs-\u5185\u6838\u6A21\u5757"},{"level":3,"title":"3.1.3 \u4E0B\u8F7D Docker \u548C K8S","slug":"_3-1-3-\u4E0B\u8F7D-docker-\u548C-k8s"},{"level":3,"title":"3.1.4 \u8BBE\u7F6E\u5185\u6838\u53CA K8S \u53C2\u6570","slug":"_3-1-4-\u8BBE\u7F6E\u5185\u6838\u53CA-k8s-\u53C2\u6570"},{"level":2,"title":"3.2 \u90E8\u7F72 Master","slug":"_3-2-\u90E8\u7F72-master"},{"level":3,"title":"3.2.1 \u63D0\u524D\u62C9\u53D6\u955C\u50CF","slug":"_3-2-1-\u63D0\u524D\u62C9\u53D6\u955C\u50CF"},{"level":3,"title":"3.2.2 \u521D\u59CB\u5316Master","slug":"_3-2-2-\u521D\u59CB\u5316master"},{"level":2,"title":"3.3 \u90E8\u7F72 Node","slug":"_3-3-\u90E8\u7F72-node"},{"level":3,"title":"3.3.1 \u52A0\u5165\u96C6\u7FA4","slug":"_3-3-1-\u52A0\u5165\u96C6\u7FA4"},{"level":3,"title":"3.3.2 \u67E5\u770B\u8FDB\u5EA6","slug":"_3-3-2-\u67E5\u770B\u8FDB\u5EA6"},{"level":3,"title":"3.3.3 \u955C\u50CF\u4E0B\u8F7D\u592A\u6162","slug":"_3-3-3-\u955C\u50CF\u4E0B\u8F7D\u592A\u6162"},{"level":2,"title":"3.4 jio\u672C\u90E8\u7F72","slug":"_3-4-jio\u672C\u90E8\u7F72"},{"level":3,"title":"3.4.1 \u9884\u5148\u51C6\u5907","slug":"_3-4-1-\u9884\u5148\u51C6\u5907"},{"level":3,"title":"3.4.2 \u521D\u59CB\u5316 master \u8282\u70B9","slug":"_3-4-2-\u521D\u59CB\u5316-master-\u8282\u70B9"},{"level":3,"title":"3.4.3 \u521D\u59CB\u5316 node \u8282\u70B9","slug":"_3-4-3-\u521D\u59CB\u5316-node-\u8282\u70B9"},{"level":3,"title":"3.4.4 \u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C","slug":"_3-4-4-\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C"},{"level":2,"title":"3.5 \u4F7F\u7528 Kubespray \u90E8\u7F72","slug":"_3-5-\u4F7F\u7528-kubespray-\u90E8\u7F72"},{"level":3,"title":"3.5.1 Kubespray \u7B80\u4ECB","slug":"_3-5-1-kubespray-\u7B80\u4ECB"},{"level":3,"title":"3.5.2 \u521D\u59CB\u5316\u73AF\u5883","slug":"_3-5-2-\u521D\u59CB\u5316\u73AF\u5883"},{"level":3,"title":"3.5.3 \u5B89\u88C5 Kubespray","slug":"_3-5-3-\u5B89\u88C5-kubespray"},{"level":3,"title":"3.5.4 \u767B\u5F55 Dashboard","slug":"_3-5-4-\u767B\u5F55-dashboard"},{"level":3,"title":"3.5.5 \u9A8C\u8BC1 K8s \u96C6\u7FA4","slug":"_3-5-5-\u9A8C\u8BC1-k8s-\u96C6\u7FA4"},{"level":3,"title":"3.5.6 \u5176\u4ED6","slug":"_3-5-6-\u5176\u4ED6"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/k8s/Quicklystart/\u4E09 \u96C6\u7FA4\u90E8\u7F72.md","lastUpdated":1657272051000}'),p={name:"CloudNative/k8s/Quicklystart/\u4E09 \u96C6\u7FA4\u90E8\u7F72.md"},e=l(`<h1 id="\u4E09-\u96C6\u7FA4\u90E8\u7F72" tabindex="-1">\u4E09 \u96C6\u7FA4\u90E8\u7F72 <a class="header-anchor" href="#\u4E09-\u96C6\u7FA4\u90E8\u7F72" aria-hidden="true">#</a></h1><p>\u4E3A\u7B80\u5355\u4E0A\u624B\u4F53\u9A8C\u529F\u80FD\uFF0C\u53EF\u4EE5\u5148\u5229\u7528kubeadm\u5B89\u88C5\u6D4B\u8BD5\uFF0C\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\u4E8C\u8FDB\u5236\u6216\u8005\u4E00\u4E9B\u6210\u719F\u7684\u96C6\u7FA4\u9AD8\u53EF\u7528\u5B89\u88C5\u65B9\u5F0F\uFF0CKubeadm \u662F K8S \u5B98\u65B9\u63D0\u4F9B\u7684\u5FEB\u901F\u90E8\u7F72\u5DE5\u5177\uFF0C\u5B83\u63D0\u4F9B\u4E86 kubeadm init \u4EE5\u53CA kubeadm join \u8FD9\u4E24\u4E2A\u547D\u4EE4\u4F5C\u4E3A\u5FEB\u901F\u521B\u5EFA kubernetes \u96C6\u7FA4\u7684\u6700\u4F73\u5B9E\u8DF5\uFF0C\u672C\u7AE0\u8282\u8BF4\u660E\u4E86\u4F7F\u7528 kubeadm \u6765\u90E8\u7F72 K8S \u96C6\u7FA4\u7684\u8FC7\u7A0B\u3002</p><ul><li>\u96C6\u7FA4\u7EC4\u7EC7\u7ED3\u6784</li></ul><table><thead><tr><th>\u9879\u76EE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u96C6\u7FA4\u89C4\u6A21</td><td>Master\u3001node1\u3001node2</td></tr><tr><td>\u7CFB\u7EDF</td><td>CentOS 7.3</td></tr><tr><td>\u7F51\u7EDC\u89C4\u5212</td><td>POD\uFF1A10.244.0.0/16\u3001Service\uFF1A10.96.0.0/12</td></tr></tbody></table><h2 id="_3-1-\u4E00\u822C\u90E8\u7F72" tabindex="-1">3.1 \u4E00\u822C\u90E8\u7F72 <a class="header-anchor" href="#_3-1-\u4E00\u822C\u90E8\u7F72" aria-hidden="true">#</a></h2><blockquote><p>\u672C\u5C0F\u8282\u7684\u6240\u6709\u7684\u64CD\u4F5C\uFF0C\u5728\u6240\u6709\u7684\u8282\u70B9\u4E0A\u8FDB\u884C</p></blockquote><h3 id="_3-1-1-\u5173\u95ED-firewalld-\u548C-selinux" tabindex="-1">3.1.1 \u5173\u95ED firewalld \u548C selinux <a class="header-anchor" href="#_3-1-1-\u5173\u95ED-firewalld-\u548C-selinux" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">setenforce 0</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&#39;/^SELINUX=/cSELINUX=disabled&#39;</span><span style="color:#DBD7CA;"> /etc/selinux/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl disable firewalld</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">setenforce 0</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&#39;/^SELINUX=/cSELINUX=disabled&#39;</span><span style="color:#393A34;"> /etc/selinux/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#393A34;">systemctl disable firewalld</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-1-2-\u52A0\u8F7D-ipvs-\u5185\u6838\u6A21\u5757" tabindex="-1">3.1.2 \u52A0\u8F7D ipvs \u5185\u6838\u6A21\u5757 <a class="header-anchor" href="#_3-1-2-\u52A0\u8F7D-ipvs-\u5185\u6838\u6A21\u5757" aria-hidden="true">#</a></h3><ul><li>\u5B89\u88C5 IPVS \u6A21\u5757</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum -y install ipvsadm ipset sysstat conntrack libseccomp</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum -y install ipvsadm ipset sysstat conntrack libseccomp</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8BBE\u7F6E\u5F00\u673A\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;">/etc/modules-load.d/ipvs.conf</span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">EOF</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_dh</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_ftp</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_lblc</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_lblcr</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_lc</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_nq</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_pe_sip</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_rr</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_sed</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_sh</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_wlc</span></span>
<span class="line"><span style="color:#C98A7D;">ip_vs_wrr</span></span>
<span class="line"><span style="color:#C98A7D;">nf_conntrack_ipv4</span></span>
<span class="line"><span style="color:#4D9375;">EOF</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;">/etc/modules-load.d/ipvs.conf</span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">EOF</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_dh</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_ftp</span></span>
<span class="line"><span style="color:#B56959;">ip_vs</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_lblc</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_lblcr</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_lc</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_nq</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_pe_sip</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_rr</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_sed</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_sh</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_wlc</span></span>
<span class="line"><span style="color:#B56959;">ip_vs_wrr</span></span>
<span class="line"><span style="color:#B56959;">nf_conntrack_ipv4</span></span>
<span class="line"><span style="color:#1C6B48;">EOF</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8BBE\u7F6E\u5F00\u673A\u52A0\u8F7D IPVS \u6A21\u5757</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> systemd-modules-load.service   </span><span style="color:#758575;"># \u8BBE\u7F6E\u5F00\u673A\u52A0\u8F7D\u5185\u6838\u6A21\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">lsmod </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep -e ip_vs -e nf_conntrack_ipv4      </span><span style="color:#758575;"># \u91CD\u542F\u540E\u68C0\u67E5 ipvs \u6A21\u5757\u662F\u5426\u52A0\u8F7D</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> systemd-modules-load.service   </span><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u5F00\u673A\u52A0\u8F7D\u5185\u6838\u6A21\u5757</span></span>
<span class="line"><span style="color:#393A34;">lsmod </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep -e ip_vs -e nf_conntrack_ipv4      </span><span style="color:#A0ADA0;"># \u91CD\u542F\u540E\u68C0\u67E5 ipvs \u6A21\u5757\u662F\u5426\u52A0\u8F7D</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u96C6\u7FA4\u5DF2\u7ECF\u90E8\u7F72\u5728\u4E86 iptables \u6A21\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u547D\u4EE4\u4FEE\u6539\uFF0C\u4FEE\u6539 mode \u4E3A ipvs \u91CD\u542F\u96C6\u7FA4\u5373\u53EF\u3002</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl edit -n kube-system configmap kube-proxy</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl edit -n kube-system configmap kube-proxy</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-1-3-\u4E0B\u8F7D-docker-\u548C-k8s" tabindex="-1">3.1.3 \u4E0B\u8F7D Docker \u548C K8S <a class="header-anchor" href="#_3-1-3-\u4E0B\u8F7D-docker-\u548C-k8s" aria-hidden="true">#</a></h3><ul><li>\u8BBE\u7F6E docker \u6E90</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">curl -o /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">curl -o /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8BBE\u7F6E k8s \u6E90</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;">/etc/yum.repos.d/kuberetes.repo</span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">EOF</span></span>
<span class="line"><span style="color:#C98A7D;">[kuberneres]</span></span>
<span class="line"><span style="color:#C98A7D;">name=Kubernetes</span></span>
<span class="line"><span style="color:#C98A7D;">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span style="color:#C98A7D;">gpgcheck=0</span></span>
<span class="line"><span style="color:#C98A7D;">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg</span></span>
<span class="line"><span style="color:#C98A7D;">enabled=1</span></span>
<span class="line"><span style="color:#4D9375;">EOF</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;">/etc/yum.repos.d/kuberetes.repo</span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">EOF</span></span>
<span class="line"><span style="color:#B56959;">[kuberneres]</span></span>
<span class="line"><span style="color:#B56959;">name=Kubernetes</span></span>
<span class="line"><span style="color:#B56959;">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span style="color:#B56959;">gpgcheck=0</span></span>
<span class="line"><span style="color:#B56959;">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg</span></span>
<span class="line"><span style="color:#B56959;">enabled=1</span></span>
<span class="line"><span style="color:#1C6B48;">EOF</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5B89\u88C5 docker-ce \u548C kubernetes</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install docker-ce kubelet kubectl kubeadm -y</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install docker-ce kubelet kubectl kubeadm -y</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">systemctl start docker</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> docker</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> kubelet</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">systemctl start docker</span></span>
<span class="line"><span style="color:#393A34;">systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> docker</span></span>
<span class="line"><span style="color:#393A34;">systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> kubelet</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-1-4-\u8BBE\u7F6E\u5185\u6838\u53CA-k8s-\u53C2\u6570" tabindex="-1">3.1.4 \u8BBE\u7F6E\u5185\u6838\u53CA K8S \u53C2\u6570 <a class="header-anchor" href="#_3-1-4-\u8BBE\u7F6E\u5185\u6838\u53CA-k8s-\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u8BBE\u7F6E\u5185\u6838\u53C2\u6570</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;">/etc/sysctl.conf</span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">EOF</span></span>
<span class="line"><span style="color:#C98A7D;">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span style="color:#C98A7D;">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="color:#C98A7D;">net.ipv4.ip_forward = 1</span></span>
<span class="line"><span style="color:#4D9375;">EOF</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;">/etc/sysctl.conf</span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">EOF</span></span>
<span class="line"><span style="color:#B56959;">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span style="color:#B56959;">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="color:#B56959;">net.ipv4.ip_forward = 1</span></span>
<span class="line"><span style="color:#1C6B48;">EOF</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8BBE\u7F6E kubelet \u5FFD\u7565 swap\uFF0C\u4F7F\u7528 ipvs</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">/etc/sysconfig/kubelet</span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">EOF</span></span>
<span class="line"><span style="color:#C98A7D;">KUBELET_EXTRA_ARGS=&quot;--fail-swap-on=false&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">KUBE_PROXY_MODE=ipvs</span></span>
<span class="line"><span style="color:#4D9375;">EOF</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">/etc/sysconfig/kubelet</span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">EOF</span></span>
<span class="line"><span style="color:#B56959;">KUBELET_EXTRA_ARGS=&quot;--fail-swap-on=false&quot;</span></span>
<span class="line"><span style="color:#B56959;">KUBE_PROXY_MODE=ipvs</span></span>
<span class="line"><span style="color:#1C6B48;">EOF</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-2-\u90E8\u7F72-master" tabindex="-1">3.2 \u90E8\u7F72 Master <a class="header-anchor" href="#_3-2-\u90E8\u7F72-master" aria-hidden="true">#</a></h2><blockquote><p>\u672C\u5C0F\u8282\u7684\u6240\u6709\u7684\u64CD\u4F5C\uFF0C\u53EA\u5728 Master \u8282\u70B9\u4E0A\u8FDB\u884C</p></blockquote><h3 id="_3-2-1-\u63D0\u524D\u62C9\u53D6\u955C\u50CF" tabindex="-1">3.2.1 \u63D0\u524D\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#_3-2-1-\u63D0\u524D\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h3><p>\u5BBF\u4E3B\u673A\u6700\u597D\u80FD\u8BBF\u95EE\u56FD\u5916\u8D44\u6E90\uFF0C\u5728kubeadm init \u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u4F1A\u5230\u8C37\u6B4C\u7684 docker hub \u62C9\u53D6\u955C\u50CF\uFF0C\u5982\u679C\u5BBF\u4E3B\u673A\u6D4B\u8BD5\u65E0\u6CD5\u8BBF\u95EE <a href="http://k8s.gcr.io" target="_blank" rel="noopener noreferrer">k8s.gcr.io</a> \u53EF\u4EE5\u5728\u670D\u52A1\u5668\u6240\u4EE5\u6211\u4EEC\u8981\u63D0\u524D\u90E8\u7F72\u597D\u4EE3\u7406\u8F6F\u4EF6\uFF0C\u672C\u4F8B\u4E2D\u76D1\u542C\u4E2A\u672C\u673A 9666 \u8FDB\u884C\u90E8\u7F72\u3002</p><p>\u5982\u679C\u6761\u4EF6\u4E0D\u5141\u8BB8\u53EF\u4EE5\u53C2\u8003: <a href="https://blog.csdn.net/jinguangliu/article/details/82792617" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/jinguangliu/article/details/82792617</a> \u6765\u89E3\u51B3\u955C\u50CF\u95EE\u9898\u3002</p><ul><li>\u914D\u7F6E Docker \u62C9\u53D6\u955C\u50CF\u65F6\u5019\u7684\u4EE3\u7406\u5730\u5740\uFF0Cvim /usr/lib/systemd/system/docker.service\u3002</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Service</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Environment=</span><span style="color:#C98A7D;">&quot;HTTPS_PROXY=127.0.0.1:9666&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">Environment=</span><span style="color:#C98A7D;">&quot;NO_PROXY=127.0.0.0/8,172.16.0.0/16&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Service</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Environment=</span><span style="color:#B56959;">&quot;HTTPS_PROXY=127.0.0.1:9666&quot;</span></span>
<span class="line"><span style="color:#393A34;">Environment=</span><span style="color:#B56959;">&quot;NO_PROXY=127.0.0.0/8,172.16.0.0/16&quot;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u63D0\u524D\u62C9\u53D6\u521D\u59CB\u5316\u9700\u8981\u7684\u955C\u50CF</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm config images pull</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm config images pull</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4F7F\u7528\u5176\u4ED6\u6E90\u955C\u50CF</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker pull mirrorgooglecontainers/kube-apiserver:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull mirrorgooglecontainers/kube-controller-manager:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull mirrorgooglecontainers/kube-scheduler:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull mirrorgooglecontainers/kube-proxy:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull mirrorgooglecontainers/pause:3.1</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull mirrorgooglecontainers/etcd:3.3.10</span></span>
<span class="line"><span style="color:#DBD7CA;">docker pull coredns/coredns:1.3.1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">\u5229\u7528</span><span style="color:#C98A7D;">\`kubeadm config images list\`</span><span style="color:#DBD7CA;"> \u67E5\u770B\u9700\u8981\u7684docker image name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/kube-apiserver:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/kube-controller-manager:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/kube-scheduler:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/kube-proxy:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/pause:3.1</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/etcd:3.3.10</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/coredns:1.3.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">docker tag docker.io/mirrorgooglecontainers/kube-apiserver:v1.14.2 k8s.gcr.io/kube-apiserver:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker tag docker.io/mirrorgooglecontainers/kube-scheduler:v1.14.2 k8s.gcr.io/kube-scheduler:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker tag docker.io/mirrorgooglecontainers/kube-proxy:v1.14.2 k8s.gcr.io/kube-proxy:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker tag docker.io/mirrorgooglecontainers/kube-controller-manager:v1.14.2 k8s.gcr.io/kube-controller-manager:v1.14.2</span></span>
<span class="line"><span style="color:#DBD7CA;">docker tag docker.io/mirrorgooglecontainers/etcd:3.3.10  k8s.gcr.io/etcd:3.3.10</span></span>
<span class="line"><span style="color:#DBD7CA;">docker tag docker.io/mirrorgooglecontainers/pause:3.1  k8s.gcr.io/pause:3.1</span></span>
<span class="line"><span style="color:#DBD7CA;">docker tag docker.io/coredns/coredns:1.3.1  k8s.gcr.io/coredns:1.3.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">docker rmi </span><span style="color:#C98A7D;">\`docker images </span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;">grep docker.io/ </span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;">awk &#39;{print $1&quot;:&quot;$2}&#39;\`</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker pull mirrorgooglecontainers/kube-apiserver:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker pull mirrorgooglecontainers/kube-controller-manager:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker pull mirrorgooglecontainers/kube-scheduler:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker pull mirrorgooglecontainers/kube-proxy:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker pull mirrorgooglecontainers/pause:3.1</span></span>
<span class="line"><span style="color:#393A34;">docker pull mirrorgooglecontainers/etcd:3.3.10</span></span>
<span class="line"><span style="color:#393A34;">docker pull coredns/coredns:1.3.1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">\u5229\u7528</span><span style="color:#B56959;">\`kubeadm config images list\`</span><span style="color:#393A34;"> \u67E5\u770B\u9700\u8981\u7684docker image name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/kube-apiserver:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/kube-controller-manager:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/kube-scheduler:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/kube-proxy:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/pause:3.1</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/etcd:3.3.10</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/coredns:1.3.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">docker tag docker.io/mirrorgooglecontainers/kube-apiserver:v1.14.2 k8s.gcr.io/kube-apiserver:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker tag docker.io/mirrorgooglecontainers/kube-scheduler:v1.14.2 k8s.gcr.io/kube-scheduler:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker tag docker.io/mirrorgooglecontainers/kube-proxy:v1.14.2 k8s.gcr.io/kube-proxy:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker tag docker.io/mirrorgooglecontainers/kube-controller-manager:v1.14.2 k8s.gcr.io/kube-controller-manager:v1.14.2</span></span>
<span class="line"><span style="color:#393A34;">docker tag docker.io/mirrorgooglecontainers/etcd:3.3.10  k8s.gcr.io/etcd:3.3.10</span></span>
<span class="line"><span style="color:#393A34;">docker tag docker.io/mirrorgooglecontainers/pause:3.1  k8s.gcr.io/pause:3.1</span></span>
<span class="line"><span style="color:#393A34;">docker tag docker.io/coredns/coredns:1.3.1  k8s.gcr.io/coredns:1.3.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">docker rmi </span><span style="color:#B56959;">\`docker images </span><span style="color:#AB5959;">|</span><span style="color:#B56959;">grep docker.io/ </span><span style="color:#AB5959;">|</span><span style="color:#B56959;">awk &#39;{print $1&quot;:&quot;$2}&#39;\`</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-2-2-\u521D\u59CB\u5316master" tabindex="-1">3.2.2 \u521D\u59CB\u5316Master <a class="header-anchor" href="#_3-2-2-\u521D\u59CB\u5316master" aria-hidden="true">#</a></h3><ul><li>\u4F7F\u7528 kubeadm \u521D\u59CB\u5316 k8s \u96C6\u7FA4</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm init --kubernetes-version=v1.14.0 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12 --ignore-preflight-errors=Swap</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm init --kubernetes-version=v1.14.0 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12 --ignore-preflight-errors=Swap</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u6709\u62A5\u9519\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u67E5\u770B</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">journalctl -xeu kubelet</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">journalctl -xeu kubelet</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u521D\u59CB\u5316\u8FC7\u7A0B\u88AB\u4E2D\u65AD\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u6765\u6062\u590D</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm reset</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm reset</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E0B\u9762\u662F\u6700\u540E\u6267\u884C\u6210\u529F\u663E\u793A\u7684\u7ED3\u679C\uFF0C\u9700\u8981\u4FDD\u5B58\u8FD9\u4E2A\u6267\u884C\u7ED3\u679C\uFF0C\u4EE5\u8BA9 node \u8282\u70B9\u52A0\u5165\u96C6\u7FA4</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">Your Kubernetes control-plane has initialized successfully</span><span style="color:#CB7676;">!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">To start using your cluster, you need to run the following as a regular user:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  mkdir -p </span><span style="color:#858585;">$</span><span style="color:#B8A965;">HOME</span><span style="color:#DBD7CA;">/.kube</span></span>
<span class="line"><span style="color:#DBD7CA;">  sudo cp -i /etc/kubernetes/admin.conf </span><span style="color:#858585;">$</span><span style="color:#B8A965;">HOME</span><span style="color:#DBD7CA;">/.kube/config</span></span>
<span class="line"><span style="color:#DBD7CA;">  sudo chown </span><span style="color:#C98A7D;">$(id -u)</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">$(id -g)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">HOME</span><span style="color:#DBD7CA;">/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">You should now deploy a pod network to the cluster.</span></span>
<span class="line"><span style="color:#DBD7CA;">Run </span><span style="color:#C98A7D;">&quot;kubectl apply -f [podnetwork].yaml&quot;</span><span style="color:#DBD7CA;"> with one of the options listed at:</span></span>
<span class="line"><span style="color:#DBD7CA;">  https://kubernetes.io/docs/concepts/cluster-administration/addons/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Then you can join any number of worker nodes by running the following on each as root:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">kubeadm join 172.16.100.9:6443 --token 2dyd69.hrfsjkkxs4stim7n \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    --discovery-token-ca-cert-hash sha256:4e30c1f41aefb177b708a404ccb7e818e31647c7dbdd2d42f6c5c9894b6f41e7</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">Your Kubernetes control-plane has initialized successfully</span><span style="color:#AB5959;">!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">To start using your cluster, you need to run the following as a regular user:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  mkdir -p </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">HOME</span><span style="color:#393A34;">/.kube</span></span>
<span class="line"><span style="color:#393A34;">  sudo cp -i /etc/kubernetes/admin.conf </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">HOME</span><span style="color:#393A34;">/.kube/config</span></span>
<span class="line"><span style="color:#393A34;">  sudo chown </span><span style="color:#B56959;">$(id -u)</span><span style="color:#393A34;">:</span><span style="color:#B56959;">$(id -g)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">HOME</span><span style="color:#393A34;">/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">You should now deploy a pod network to the cluster.</span></span>
<span class="line"><span style="color:#393A34;">Run </span><span style="color:#B56959;">&quot;kubectl apply -f [podnetwork].yaml&quot;</span><span style="color:#393A34;"> with one of the options listed at:</span></span>
<span class="line"><span style="color:#393A34;">  https://kubernetes.io/docs/concepts/cluster-administration/addons/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Then you can join any number of worker nodes by running the following on each as root:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">kubeadm join 172.16.100.9:6443 --token 2dyd69.hrfsjkkxs4stim7n \\</span></span>
<span class="line"><span style="color:#393A34;">    --discovery-token-ca-cert-hash sha256:4e30c1f41aefb177b708a404ccb7e818e31647c7dbdd2d42f6c5c9894b6f41e7</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6700\u597D\u4EE5\u666E\u901A\u7528\u6237\u7684\u8EAB\u4EFD\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5728\u5F53\u524D\u7528\u6237\u5BB6\u76EE\u5F55\u4E0B\u521B\u5EFA.kube\u76EE\u5F55\u5E76\u914D\u7F6E\u8BBF\u95EE\u96C6\u7FA4\u7684config \u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p </span><span style="color:#858585;">$</span><span style="color:#B8A965;">HOME</span><span style="color:#DBD7CA;">/.kube</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo cp -i /etc/kubernetes/admin.conf </span><span style="color:#858585;">$</span><span style="color:#B8A965;">HOME</span><span style="color:#DBD7CA;">/.kube/config</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo chown </span><span style="color:#C98A7D;">$(id -u)</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">$(id -g)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">HOME</span><span style="color:#DBD7CA;">/.kube/config</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5728\u5F53\u524D\u7528\u6237\u5BB6\u76EE\u5F55\u4E0B\u521B\u5EFA.kube\u76EE\u5F55\u5E76\u914D\u7F6E\u8BBF\u95EE\u96C6\u7FA4\u7684config \u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">HOME</span><span style="color:#393A34;">/.kube</span></span>
<span class="line"><span style="color:#393A34;">sudo cp -i /etc/kubernetes/admin.conf </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">HOME</span><span style="color:#393A34;">/.kube/config</span></span>
<span class="line"><span style="color:#393A34;">sudo chown </span><span style="color:#B56959;">$(id -u)</span><span style="color:#393A34;">:</span><span style="color:#B56959;">$(id -g)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">HOME</span><span style="color:#393A34;">/.kube/config</span></span>
<span class="line"></span></code></pre></div><ul><li>\u90E8\u7F72 flannel \u7F51\u7EDC\u63D2\u4EF6</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B kube-system \u547D\u540D\u7A7A\u95F4\u4E2D\u8FD0\u884C\u7684 pods</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl get pods -n kube-system</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl get pods -n kube-system</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B k8s \u96C6\u7FA4\u7EC4\u4EF6\u7684\u72B6\u6001</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl get ComponentStatus</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl get ComponentStatus</span></span>
<span class="line"></span></code></pre></div><ul><li>\u914D\u7F6E\u547D\u4EE4\u8865\u5168</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install -y bash-completion</span></span>
<span class="line"><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;"> /usr/share/bash-completion/bash_completion</span></span>
<span class="line"><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&lt;(kubectl completion bash)</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;source &lt;(kubectl completion bash)&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">/.bashrc</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install -y bash-completion</span></span>
<span class="line"><span style="color:#B58451;">source</span><span style="color:#393A34;"> /usr/share/bash-completion/bash_completion</span></span>
<span class="line"><span style="color:#B58451;">source</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&lt;(kubectl completion bash)</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;source &lt;(kubectl completion bash)&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/.bashrc</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-3-\u90E8\u7F72-node" tabindex="-1">3.3 \u90E8\u7F72 Node <a class="header-anchor" href="#_3-3-\u90E8\u7F72-node" aria-hidden="true">#</a></h2><blockquote><p>\u672C\u5C0F\u8282\u7684\u6240\u6709\u7684\u64CD\u4F5C\uFF0C\u53EA\u5728 Node \u8282\u70B9\u4E0A\u8FDB\u884C\u3002</p></blockquote><h3 id="_3-3-1-\u52A0\u5165\u96C6\u7FA4" tabindex="-1">3.3.1 \u52A0\u5165\u96C6\u7FA4 <a class="header-anchor" href="#_3-3-1-\u52A0\u5165\u96C6\u7FA4" aria-hidden="true">#</a></h3><ul><li>\u52A0\u5165\u96C6\u7FA4\uFF0C\u6CE8\u610F\u5728\u547D\u4EE4\u5C3E\u90E8\u52A0\u4E0A --ignore-preflight-errors=Swap \uFF0C\u4EE5\u5FFD\u7565 k8s \u5BF9\u4E3B\u673A swap \u7684\u68C0\u67E5\uFF08k8s\u4E3A\u4E86\u6027\u80FD\u6240\u4EE5\u8981\u6C42\u8FDB\u5236 swap \uFF09</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm join 172.16.100.9:6443 --token 2dyd69.hrfsjkkxs4stim7n \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    --discovery-token-ca-cert-hash sha256:4e30c1f41aefb177b708a404ccb7e818e31647c7dbdd2d42f6c5c9894b6f41e7 --ignore-preflight-errors=Swap</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm join 172.16.100.9:6443 --token 2dyd69.hrfsjkkxs4stim7n \\</span></span>
<span class="line"><span style="color:#393A34;">    --discovery-token-ca-cert-hash sha256:4e30c1f41aefb177b708a404ccb7e818e31647c7dbdd2d42f6c5c9894b6f41e7 --ignore-preflight-errors=Swap</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8FD4\u56DE\u7ED3\u679C\uFF0C\u8868\u793A\u52A0\u5165\u96C6\u7FA4\u6210\u529F</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">This node has joined the cluster:</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> Certificate signing request was sent to apiserver and a response was received.</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> The Kubelet was informed of the new secure connection details.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Run </span><span style="color:#C98A7D;">&#39;kubectl get nodes&#39;</span><span style="color:#DBD7CA;"> on the control-plane to see this node join the cluster.</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">This node has joined the cluster:</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;"> Certificate signing request was sent to apiserver and a response was received.</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#393A34;"> The Kubelet was informed of the new secure connection details.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Run </span><span style="color:#B56959;">&#39;kubectl get nodes&#39;</span><span style="color:#393A34;"> on the control-plane to see this node join the cluster.</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-3-2-\u67E5\u770B\u8FDB\u5EA6" tabindex="-1">3.3.2 \u67E5\u770B\u8FDB\u5EA6 <a class="header-anchor" href="#_3-3-2-\u67E5\u770B\u8FDB\u5EA6" aria-hidden="true">#</a></h3><p>\u5F53 node \u8282\u70B9\u52A0\u5165 K8S \u96C6\u7FA4\u4E2D\u540E\uFF0CMaster \u4F1A\u8C03\u5EA6\u5230 Node \u8282\u70B9\u4E0A\u4E00\u4E9B\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5904\u7406\u96C6\u7FA4\u4E8B\u52A1\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u6CA1\u6709\u4E0B\u8F7D\u5B8C\u6210\u4E4B\u524D Node \u8282\u70B9\u5728\u96C6\u7FA4\u4E2D\u8FD8\u662F\u672A\u5C31\u7EEA\u72B6\u6001</p><ul><li>\u5728 node \u6267\u884C\u4E0B\u9762\u547D\u4EE4\uFF0C\u53EF\u4EE5\u67E5\u770B\u955C\u50CF\u7684\u4E0B\u8F7D\u8FDB\u5EA6\uFF0C\u4E0B\u9762\u662F\u6700\u7EC8\u7ED3\u679C\u663E\u793A</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ docker image ls</span></span>
<span class="line"><span style="color:#DBD7CA;">REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/kube-proxy    v1.14.0             5cd54e388aba        6 weeks ago         82.1MB</span></span>
<span class="line"><span style="color:#DBD7CA;">quay.io/coreos/flannel   v0.11.0-amd64       ff281650a721        3 months ago        52.6MB</span></span>
<span class="line"><span style="color:#DBD7CA;">k8s.gcr.io/pause         3.1                 da86e6ba6ca1        16 months ago       742kB</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ docker image ls</span></span>
<span class="line"><span style="color:#393A34;">REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/kube-proxy    v1.14.0             5cd54e388aba        6 weeks ago         82.1MB</span></span>
<span class="line"><span style="color:#393A34;">quay.io/coreos/flannel   v0.11.0-amd64       ff281650a721        3 months ago        52.6MB</span></span>
<span class="line"><span style="color:#393A34;">k8s.gcr.io/pause         3.1                 da86e6ba6ca1        16 months ago       742kB</span></span>
<span class="line"></span></code></pre></div><ul><li>\u53EF\u4EE5\u5728 Master \u4E0A\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u6765\u67E5\u770B\u65B0\u52A0\u5165\u7684\u8282\u70B9\u72B6\u6001</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl get nodes</span></span>
<span class="line"><span style="color:#DBD7CA;">NAME     STATUS   ROLES    AGE     VERSION</span></span>
<span class="line"><span style="color:#DBD7CA;">master   Ready    master   3d21h   v1.14.1</span></span>
<span class="line"><span style="color:#DBD7CA;">node1    Ready    </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">   3d21h   v1.14.1</span></span>
<span class="line"><span style="color:#DBD7CA;">node2    Ready    </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">   3d21h   v1.14.1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl get nodes</span></span>
<span class="line"><span style="color:#393A34;">NAME     STATUS   ROLES    AGE     VERSION</span></span>
<span class="line"><span style="color:#393A34;">master   Ready    master   3d21h   v1.14.1</span></span>
<span class="line"><span style="color:#393A34;">node1    Ready    </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">   3d21h   v1.14.1</span></span>
<span class="line"><span style="color:#393A34;">node2    Ready    </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">   3d21h   v1.14.1</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> kubectl cluster-info </span></span>
<span class="line"><span style="color:#DBD7CA;">Kubernetes master is running at https://10.234.2.204:6443</span></span>
<span class="line"><span style="color:#DBD7CA;">KubeDNS is running at https://10.234.2.204:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy</span></span>
<span class="line"><span style="color:#DBD7CA;">Metrics-server is running at https://10.234.2.204:6443/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">To further debug and diagnose cluster problems, use </span><span style="color:#C98A7D;">&#39;kubectl cluster-info dump&#39;</span><span style="color:#DBD7CA;">.</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> kubectl get componentstatuses</span></span>
<span class="line"><span style="color:#DBD7CA;">NAME                 STATUS    MESSAGE             ERROR</span></span>
<span class="line"><span style="color:#DBD7CA;">controller-manager   Healthy   ok                  </span></span>
<span class="line"><span style="color:#DBD7CA;">scheduler            Healthy   ok                  </span></span>
<span class="line"><span style="color:#DBD7CA;">etcd-0               Healthy   {</span><span style="color:#C98A7D;">&quot;health&quot;</span><span style="color:#DBD7CA;">:</span><span style="color:#C98A7D;">&quot;true&quot;</span><span style="color:#DBD7CA;">}   </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> kubectl cluster-info </span></span>
<span class="line"><span style="color:#393A34;">Kubernetes master is running at https://10.234.2.204:6443</span></span>
<span class="line"><span style="color:#393A34;">KubeDNS is running at https://10.234.2.204:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy</span></span>
<span class="line"><span style="color:#393A34;">Metrics-server is running at https://10.234.2.204:6443/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">To further debug and diagnose cluster problems, use </span><span style="color:#B56959;">&#39;kubectl cluster-info dump&#39;</span><span style="color:#393A34;">.</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> kubectl get componentstatuses</span></span>
<span class="line"><span style="color:#393A34;">NAME                 STATUS    MESSAGE             ERROR</span></span>
<span class="line"><span style="color:#393A34;">controller-manager   Healthy   ok                  </span></span>
<span class="line"><span style="color:#393A34;">scheduler            Healthy   ok                  </span></span>
<span class="line"><span style="color:#393A34;">etcd-0               Healthy   {</span><span style="color:#B56959;">&quot;health&quot;</span><span style="color:#393A34;">:</span><span style="color:#B56959;">&quot;true&quot;</span><span style="color:#393A34;">}   </span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u5ACC\u7F51\u7EDCpull\u955C\u50CF\u6162\u53EF\u4EE5\u5728\u4E00\u53F0\u4E0A\u9762\u5C06\u955C\u50CF\u6253\u5305\u53D1\u9001\u81F3\u5176\u4ED6node\u8282\u70B9</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">\u62F7\u8D1D\u5230node\u8282\u70B9</span></span>
<span class="line"><span style="color:#dbd7ca;">for i in /tmp/*.tar; do scp -i $i root@172.16.0.15:/root/;done</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">node\u8282\u70B9\u8FD8\u539F</span></span>
<span class="line"><span style="color:#dbd7ca;">for i in *.tar ;do docker load -i $i;done</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">\u62F7\u8D1D\u5230node\u8282\u70B9</span></span>
<span class="line"><span style="color:#393a34;">for i in /tmp/*.tar; do scp -i $i root@172.16.0.15:/root/;done</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">node\u8282\u70B9\u8FD8\u539F</span></span>
<span class="line"><span style="color:#393a34;">for i in *.tar ;do docker load -i $i;done</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><ul><li>\u67E5\u770B kube-system \u8FD9\u4E2A k8s \u547D\u540D\u7A7A\u95F4\u4E2D\u6709\u54EA\u4E9B\u7EC4\u4EF6\uFF0C\u5206\u522B\u8FD0\u884C\u5728\u54EA\u4E2A\u8282\u70B9\uFF0C-o wide \u662F\u4EE5\u8BE6\u7EC6\u65B9\u5F0F\u663E\u793A\u3002</li></ul><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl get pods -n kube-system -o wide</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">NAME                                 READY   STATUS    RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES</span></span>
<span class="line"><span style="color:#DBD7CA;">coredns-fb8b8dccf-cp24r              1/1     Running   0          26m     10.244.0.2      i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">coredns-fb8b8dccf-ljswp              1/1     Running   0          26m     10.244.0.3      i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">etcd-i-xeahpl98                      1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-apiserver-i-xeahpl98            1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-controller-manager-i-xeahpl98   1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-flannel-ds-amd64-crft8          1/1     Running   3          16m     172.16.100.6    i-me87b6gw   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-flannel-ds-amd64-nckw4          1/1     Running   0          6m41s   172.16.100.10   i-qhcc2owe   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-flannel-ds-amd64-zb7sg          1/1     Running   0          23m     172.16.100.9    i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-proxy-7kjkf                     1/1     Running   0          6m41s   172.16.100.10   i-qhcc2owe   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-proxy-c5xs2                     1/1     Running   2          16m     172.16.100.6    i-me87b6gw   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-proxy-rdzq2                     1/1     Running   0          26m     172.16.100.9    i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-scheduler-i-xeahpl98            1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">           </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl get pods -n kube-system -o wide</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">NAME                                 READY   STATUS    RESTARTS   AGE     IP              NODE         NOMINATED NODE   READINESS GATES</span></span>
<span class="line"><span style="color:#393A34;">coredns-fb8b8dccf-cp24r              1/1     Running   0          26m     10.244.0.2      i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">coredns-fb8b8dccf-ljswp              1/1     Running   0          26m     10.244.0.3      i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">etcd-i-xeahpl98                      1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-apiserver-i-xeahpl98            1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-controller-manager-i-xeahpl98   1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-flannel-ds-amd64-crft8          1/1     Running   3          16m     172.16.100.6    i-me87b6gw   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-flannel-ds-amd64-nckw4          1/1     Running   0          6m41s   172.16.100.10   i-qhcc2owe   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-flannel-ds-amd64-zb7sg          1/1     Running   0          23m     172.16.100.9    i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-proxy-7kjkf                     1/1     Running   0          6m41s   172.16.100.10   i-qhcc2owe   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-proxy-c5xs2                     1/1     Running   2          16m     172.16.100.6    i-me87b6gw   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-proxy-rdzq2                     1/1     Running   0          26m     172.16.100.9    i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">kube-scheduler-i-xeahpl98            1/1     Running   0          25m     172.16.100.9    i-xeahpl98   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">           </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-3-3-\u955C\u50CF\u4E0B\u8F7D\u592A\u6162" tabindex="-1">3.3.3 \u955C\u50CF\u4E0B\u8F7D\u592A\u6162 <a class="header-anchor" href="#_3-3-3-\u955C\u50CF\u4E0B\u8F7D\u592A\u6162" aria-hidden="true">#</a></h3><p>node \u8282\u70B9\u9700\u8981\u7FFB\u5899\u4E0B\u8F7D\u955C\u50CF\u592A\u6162\uFF0C\u5EFA\u8BAE\u4F7F\u7528 docker \u955C\u50CF\u7684\u5BFC\u5165\u5BFC\u51FA\u529F\u80FD \u5148\u5C06master\u7684\u4E09\u4E2A\u955C\u50CF\u6253\u5305\u53D1\u9001\u5230node\u8282\u70B9\uFF0Cload\u540E\u518Djion</p><ul><li>\u5BFC\u51FA</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker image save -o /tmp/kube-proxy.tar k8s.gcr.io/kube-proxy</span></span>
<span class="line"><span style="color:#DBD7CA;">docker image save -o /tmp/flannel.tar quay.io/coreos/flannel</span></span>
<span class="line"><span style="color:#DBD7CA;">docker image save -o /tmp/pause.tar k8s.gcr.io/pause</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker image save -o /tmp/kube-proxy.tar k8s.gcr.io/kube-proxy</span></span>
<span class="line"><span style="color:#393A34;">docker image save -o /tmp/flannel.tar quay.io/coreos/flannel</span></span>
<span class="line"><span style="color:#393A34;">docker image save -o /tmp/pause.tar k8s.gcr.io/pause</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5BFC\u5165</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker image load -i /tmp/kube-proxy.tar</span></span>
<span class="line"><span style="color:#DBD7CA;">docker image load -i /tmp/pause.tar</span></span>
<span class="line"><span style="color:#DBD7CA;">docker image load -i /tmp/flannel.tar</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker image load -i /tmp/kube-proxy.tar</span></span>
<span class="line"><span style="color:#393A34;">docker image load -i /tmp/pause.tar</span></span>
<span class="line"><span style="color:#393A34;">docker image load -i /tmp/flannel.tar</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-4-jio\u672C\u90E8\u7F72" tabindex="-1">3.4 jio\u672C\u90E8\u7F72 <a class="header-anchor" href="#_3-4-jio\u672C\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="_3-4-1-\u9884\u5148\u51C6\u5907" tabindex="-1">3.4.1 \u9884\u5148\u51C6\u5907 <a class="header-anchor" href="#_3-4-1-\u9884\u5148\u51C6\u5907" aria-hidden="true">#</a></h3><p>\u73AF\u5883\uFF1A</p><table><thead><tr><th>\u89D2\u8272</th><th>IP</th></tr></thead><tbody><tr><td>master</td><td>172.16.1.129</td></tr><tr><td>node01</td><td>172.16.1.133</td></tr></tbody></table><p>\u4FEE\u6539\u5F53\u524D\u7684\u4E3B\u673A\u540D\uFF0C\u786E\u4FDD\u4E0D\u662F <code>localhost</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">hostnamectl set-hostname master</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">hostnamectl set-hostname master</span></span>
<span class="line"></span></code></pre></div><p>\u4E3A\u5404\u8282\u70B9\u6DFB\u52A0\u4E3B\u673A\u540D\u89E3\u6790\uFF0C \u7F16\u8F91<code>/etc/hosts</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1 master master.agou-ops.com</span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1 node01 node01.aogu-ops.com</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">172.16.1 master master.agou-ops.com</span></span>
<span class="line"><span style="color:#393A34;">172.16.1 node01 node01.aogu-ops.com</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u786E\u4FDD\u4EFB\u610F\u8282\u70B9\u4E0A <code>Kubelet</code>\u4F7F\u7528\u7684 IP \u5730\u5740\u53EF\u4E92\u901A\uFF08\u65E0\u9700 NAT \u6620\u5C04\u5373\u53EF\u76F8\u4E92\u8BBF\u95EE\uFF09\uFF0C\u4E14\u6CA1\u6709\u9632\u706B\u5899\u3001\u5B89\u5168\u7EC4\u9694\u79BB</p></blockquote><p>\u5173\u95ED<code>\u9632\u706B\u5899</code>\u548C<code>SElinux</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&#39;s/SELINUX=*/SELINUX=disabled/&#39;</span><span style="color:#DBD7CA;"> /etc/selinux/config</span></span>
<span class="line"><span style="color:#758575;"># getenforce \u786E\u5B9A\u5F53\u524DSElinux\u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl disable firewalld </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> systemctl stop firewalld</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&#39;s/SELINUX=*/SELINUX=disabled/&#39;</span><span style="color:#393A34;"> /etc/selinux/config</span></span>
<span class="line"><span style="color:#A0ADA0;"># getenforce \u786E\u5B9A\u5F53\u524DSElinux\u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">systemctl disable firewalld </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> systemctl stop firewalld</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5 <code>docker</code> \u4EE5\u53CA <code>kubelet</code> \uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># --------- \u5728 master \u548C node \u8282\u70B9\u6267\u884C -----------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528\u963F\u91CC\u4E91 docker \u955C\u50CF\u52A0\u901F\uFF0C\u53EF\u4EE5\u81EA\u884C\u53BB\u63A7\u5236\u53F0\u7533\u8BF7\uFF0C\u5728\u8FD9\u91CC\u6211\u4F7F\u7528\u516C\u5171\u52A0\u901F\u955C\u50CF</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> REGISTRY_MIRROR=https://registry.cn-hangzhou.aliyuncs.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u7F16\u8F91\u811A\u672C\u5FEB\u901F\u5B89\u88C5\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5728 master \u8282\u70B9\u548C worker \u8282\u70B9\u90FD\u8981\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5 docker</span></span>
<span class="line"><span style="color:#758575;"># \u53C2\u8003\u6587\u6863\u5982\u4E0B</span></span>
<span class="line"><span style="color:#758575;"># https://docs.docker.com/install/linux/docker-ce/centos/ </span></span>
<span class="line"><span style="color:#758575;"># https://docs.docker.com/install/linux/linux-postinstall/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5378\u8F7D\u65E7\u7248\u672C</span></span>
<span class="line"><span style="color:#DBD7CA;">yum remove -y docker \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-client \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-client-latest \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-common \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-latest \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-latest-logrotate \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-logrotate \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-selinux \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-engine-selinux \\</span></span>
<span class="line"><span style="color:#DBD7CA;">docker-engine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E yum repository</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y yum-utils \\</span></span>
<span class="line"><span style="color:#DBD7CA;">device-mapper-persistent-data \\</span></span>
<span class="line"><span style="color:#DBD7CA;">lvm2</span></span>
<span class="line"><span style="color:#DBD7CA;">yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5\u5E76\u542F\u52A8 docker</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y docker-ce-19.03.8 docker-ce-cli-19.03.8 containerd.io</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> docker</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl start docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5 nfs-utils</span></span>
<span class="line"><span style="color:#758575;"># \u5FC5\u987B\u5148\u5B89\u88C5 nfs-utils \u624D\u80FD\u6302\u8F7D nfs \u7F51\u7EDC\u5B58\u50A8</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y nfs-utils</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y wget</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5173\u95ED swap \xD7\xD7\u91CD\u8981\xD7\xD7</span></span>
<span class="line"><span style="color:#DBD7CA;">swapoff -a </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;vm.swappiness=0&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> sysctl -p </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> free \u2013h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539 /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u6709\u914D\u7F6E\uFF0C\u5219\u4FEE\u6539</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^net.ipv4.ip_forward.*#net.ipv4.ip_forward=1#g&quot;</span><span style="color:#DBD7CA;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^net.bridge.bridge-nf-call-ip6tables.*#net.bridge.bridge-nf-call-ip6tables=1#g&quot;</span><span style="color:#DBD7CA;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^net.bridge.bridge-nf-call-iptables.*#net.bridge.bridge-nf-call-iptables=1#g&quot;</span><span style="color:#DBD7CA;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^net.ipv6.conf.all.disable_ipv6.*#net.ipv6.conf.all.disable_ipv6=1#g&quot;</span><span style="color:#DBD7CA;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^net.ipv6.conf.default.disable_ipv6.*#net.ipv6.conf.default.disable_ipv6=1#g&quot;</span><span style="color:#DBD7CA;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^net.ipv6.conf.lo.disable_ipv6.*#net.ipv6.conf.lo.disable_ipv6=1#g&quot;</span><span style="color:#DBD7CA;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^net.ipv6.conf.all.forwarding.*#net.ipv6.conf.all.forwarding=1#g&quot;</span><span style="color:#DBD7CA;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#758575;"># \u53EF\u80FD\u6CA1\u6709\uFF0C\u8FFD\u52A0</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;net.ipv4.ip_forward = 1&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;net.bridge.bridge-nf-call-ip6tables = 1&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;net.bridge.bridge-nf-call-iptables = 1&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;net.ipv6.conf.all.disable_ipv6 = 1&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;net.ipv6.conf.default.disable_ipv6 = 1&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;net.ipv6.conf.lo.disable_ipv6 = 1&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;net.ipv6.conf.all.forwarding = 1&quot;</span><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#758575;"># \u6267\u884C\u547D\u4EE4\u4EE5\u5E94\u7528</span></span>
<span class="line"><span style="color:#DBD7CA;">sysctl -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u914D\u7F6EK8S\u7684yum\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">EOF</span><span style="color:#C98A7D;"> &gt; /etc/yum.repos.d/kubernetes.repo</span></span>
<span class="line"><span style="color:#C98A7D;">[kubernetes]</span></span>
<span class="line"><span style="color:#C98A7D;">name=Kubernetes</span></span>
<span class="line"><span style="color:#C98A7D;">baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64</span></span>
<span class="line"><span style="color:#C98A7D;">enabled=1</span></span>
<span class="line"><span style="color:#C98A7D;">gpgcheck=0</span></span>
<span class="line"><span style="color:#C98A7D;">repo_gpgcheck=0</span></span>
<span class="line"><span style="color:#C98A7D;">gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg</span></span>
<span class="line"><span style="color:#C98A7D;">       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span style="color:#4D9375;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5378\u8F7D\u65E7\u7248\u672C</span></span>
<span class="line"><span style="color:#DBD7CA;">yum remove -y kubelet kubeadm kubectl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5kubelet\u3001kubeadm\u3001kubectl</span></span>
<span class="line"><span style="color:#758575;"># \u5C06 \${1} \u66FF\u6362\u4E3A kubernetes \u7248\u672C\u53F7\uFF0C\u4F8B\u5982 1.17.2</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y kubelet-</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">1</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> kubeadm-</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">1</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> kubectl-</span><span style="color:#858585;">\${</span><span style="color:#B8A965;">1</span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539docker Cgroup Driver\u4E3Asystemd</span></span>
<span class="line"><span style="color:#758575;"># # \u5C06/usr/lib/systemd/system/docker.service\u6587\u4EF6\u4E2D\u7684\u8FD9\u4E00\u884C ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock</span></span>
<span class="line"><span style="color:#758575;"># # \u4FEE\u6539\u4E3A ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd</span></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u4E0D\u4FEE\u6539\uFF0C\u5728\u6DFB\u52A0 worker \u8282\u70B9\u65F6\u53EF\u80FD\u4F1A\u78B0\u5230\u5982\u4E0B\u9519\u8BEF</span></span>
<span class="line"><span style="color:#758575;"># [WARNING IsDockerSystemdCheck]: detected &quot;cgroupfs&quot; as the Docker cgroup driver. The recommended driver is &quot;systemd&quot;. </span></span>
<span class="line"><span style="color:#758575;"># Please follow the guide at https://kubernetes.io/docs/setup/cri/</span></span>
<span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&quot;s#^ExecStart=/usr/bin/dockerd.*#ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd#g&quot;</span><span style="color:#DBD7CA;"> /usr/lib/systemd/system/docker.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E docker \u955C\u50CF\uFF0C\u63D0\u9AD8 docker \u955C\u50CF\u4E0B\u8F7D\u901F\u5EA6\u548C\u7A33\u5B9A\u6027</span></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u60A8\u8BBF\u95EE https://hub.docker.io \u901F\u5EA6\u975E\u5E38\u7A33\u5B9A\uFF0C\u4EA6\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u4E2A\u6B65\u9AA4</span></span>
<span class="line"><span style="color:#DBD7CA;">curl -sSL https://kuboard.cn/install-script/set_mirror.sh </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> sh -s </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">REGISTRY_MIRROR</span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u91CD\u542F docker\uFF0C\u5E76\u542F\u52A8 kubelet</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl restart docker</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> kubelet </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> systemctl start kubelet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">docker version</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># --------- \u5728 master \u548C node \u8282\u70B9\u6267\u884C -----------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528\u963F\u91CC\u4E91 docker \u955C\u50CF\u52A0\u901F\uFF0C\u53EF\u4EE5\u81EA\u884C\u53BB\u63A7\u5236\u53F0\u7533\u8BF7\uFF0C\u5728\u8FD9\u91CC\u6211\u4F7F\u7528\u516C\u5171\u52A0\u901F\u955C\u50CF</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> REGISTRY_MIRROR=https://registry.cn-hangzhou.aliyuncs.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u8F91\u811A\u672C\u5FEB\u901F\u5B89\u88C5\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728 master \u8282\u70B9\u548C worker \u8282\u70B9\u90FD\u8981\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5 docker</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53C2\u8003\u6587\u6863\u5982\u4E0B</span></span>
<span class="line"><span style="color:#A0ADA0;"># https://docs.docker.com/install/linux/docker-ce/centos/ </span></span>
<span class="line"><span style="color:#A0ADA0;"># https://docs.docker.com/install/linux/linux-postinstall/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5378\u8F7D\u65E7\u7248\u672C</span></span>
<span class="line"><span style="color:#393A34;">yum remove -y docker \\</span></span>
<span class="line"><span style="color:#393A34;">docker-client \\</span></span>
<span class="line"><span style="color:#393A34;">docker-client-latest \\</span></span>
<span class="line"><span style="color:#393A34;">docker-common \\</span></span>
<span class="line"><span style="color:#393A34;">docker-latest \\</span></span>
<span class="line"><span style="color:#393A34;">docker-latest-logrotate \\</span></span>
<span class="line"><span style="color:#393A34;">docker-logrotate \\</span></span>
<span class="line"><span style="color:#393A34;">docker-selinux \\</span></span>
<span class="line"><span style="color:#393A34;">docker-engine-selinux \\</span></span>
<span class="line"><span style="color:#393A34;">docker-engine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E yum repository</span></span>
<span class="line"><span style="color:#393A34;">yum install -y yum-utils \\</span></span>
<span class="line"><span style="color:#393A34;">device-mapper-persistent-data \\</span></span>
<span class="line"><span style="color:#393A34;">lvm2</span></span>
<span class="line"><span style="color:#393A34;">yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5\u5E76\u542F\u52A8 docker</span></span>
<span class="line"><span style="color:#393A34;">yum install -y docker-ce-19.03.8 docker-ce-cli-19.03.8 containerd.io</span></span>
<span class="line"><span style="color:#393A34;">systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> docker</span></span>
<span class="line"><span style="color:#393A34;">systemctl start docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5 nfs-utils</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5FC5\u987B\u5148\u5B89\u88C5 nfs-utils \u624D\u80FD\u6302\u8F7D nfs \u7F51\u7EDC\u5B58\u50A8</span></span>
<span class="line"><span style="color:#393A34;">yum install -y nfs-utils</span></span>
<span class="line"><span style="color:#393A34;">yum install -y wget</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5173\u95ED swap \xD7\xD7\u91CD\u8981\xD7\xD7</span></span>
<span class="line"><span style="color:#393A34;">swapoff -a </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;vm.swappiness=0&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> sysctl -p </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> free \u2013h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539 /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u6709\u914D\u7F6E\uFF0C\u5219\u4FEE\u6539</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^net.ipv4.ip_forward.*#net.ipv4.ip_forward=1#g&quot;</span><span style="color:#393A34;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^net.bridge.bridge-nf-call-ip6tables.*#net.bridge.bridge-nf-call-ip6tables=1#g&quot;</span><span style="color:#393A34;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^net.bridge.bridge-nf-call-iptables.*#net.bridge.bridge-nf-call-iptables=1#g&quot;</span><span style="color:#393A34;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^net.ipv6.conf.all.disable_ipv6.*#net.ipv6.conf.all.disable_ipv6=1#g&quot;</span><span style="color:#393A34;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^net.ipv6.conf.default.disable_ipv6.*#net.ipv6.conf.default.disable_ipv6=1#g&quot;</span><span style="color:#393A34;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^net.ipv6.conf.lo.disable_ipv6.*#net.ipv6.conf.lo.disable_ipv6=1#g&quot;</span><span style="color:#393A34;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^net.ipv6.conf.all.forwarding.*#net.ipv6.conf.all.forwarding=1#g&quot;</span><span style="color:#393A34;">  /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EF\u80FD\u6CA1\u6709\uFF0C\u8FFD\u52A0</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;net.ipv4.ip_forward = 1&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;net.bridge.bridge-nf-call-ip6tables = 1&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;net.bridge.bridge-nf-call-iptables = 1&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;net.ipv6.conf.all.disable_ipv6 = 1&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;net.ipv6.conf.default.disable_ipv6 = 1&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;net.ipv6.conf.lo.disable_ipv6 = 1&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;net.ipv6.conf.all.forwarding = 1&quot;</span><span style="color:#393A34;">  </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6267\u884C\u547D\u4EE4\u4EE5\u5E94\u7528</span></span>
<span class="line"><span style="color:#393A34;">sysctl -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u914D\u7F6EK8S\u7684yum\u6E90</span></span>
<span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">EOF</span><span style="color:#B56959;"> &gt; /etc/yum.repos.d/kubernetes.repo</span></span>
<span class="line"><span style="color:#B56959;">[kubernetes]</span></span>
<span class="line"><span style="color:#B56959;">name=Kubernetes</span></span>
<span class="line"><span style="color:#B56959;">baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64</span></span>
<span class="line"><span style="color:#B56959;">enabled=1</span></span>
<span class="line"><span style="color:#B56959;">gpgcheck=0</span></span>
<span class="line"><span style="color:#B56959;">repo_gpgcheck=0</span></span>
<span class="line"><span style="color:#B56959;">gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg</span></span>
<span class="line"><span style="color:#B56959;">       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span style="color:#1C6B48;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5378\u8F7D\u65E7\u7248\u672C</span></span>
<span class="line"><span style="color:#393A34;">yum remove -y kubelet kubeadm kubectl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5kubelet\u3001kubeadm\u3001kubectl</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06 \${1} \u66FF\u6362\u4E3A kubernetes \u7248\u672C\u53F7\uFF0C\u4F8B\u5982 1.17.2</span></span>
<span class="line"><span style="color:#393A34;">yum install -y kubelet-</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">1</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> kubeadm-</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">1</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> kubectl-</span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">1</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539docker Cgroup Driver\u4E3Asystemd</span></span>
<span class="line"><span style="color:#A0ADA0;"># # \u5C06/usr/lib/systemd/system/docker.service\u6587\u4EF6\u4E2D\u7684\u8FD9\u4E00\u884C ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock</span></span>
<span class="line"><span style="color:#A0ADA0;"># # \u4FEE\u6539\u4E3A ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u4E0D\u4FEE\u6539\uFF0C\u5728\u6DFB\u52A0 worker \u8282\u70B9\u65F6\u53EF\u80FD\u4F1A\u78B0\u5230\u5982\u4E0B\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A0ADA0;"># [WARNING IsDockerSystemdCheck]: detected &quot;cgroupfs&quot; as the Docker cgroup driver. The recommended driver is &quot;systemd&quot;. </span></span>
<span class="line"><span style="color:#A0ADA0;"># Please follow the guide at https://kubernetes.io/docs/setup/cri/</span></span>
<span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&quot;s#^ExecStart=/usr/bin/dockerd.*#ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd#g&quot;</span><span style="color:#393A34;"> /usr/lib/systemd/system/docker.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E docker \u955C\u50CF\uFF0C\u63D0\u9AD8 docker \u955C\u50CF\u4E0B\u8F7D\u901F\u5EA6\u548C\u7A33\u5B9A\u6027</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u60A8\u8BBF\u95EE https://hub.docker.io \u901F\u5EA6\u975E\u5E38\u7A33\u5B9A\uFF0C\u4EA6\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u4E2A\u6B65\u9AA4</span></span>
<span class="line"><span style="color:#393A34;">curl -sSL https://kuboard.cn/install-script/set_mirror.sh </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> sh -s </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">REGISTRY_MIRROR</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u91CD\u542F docker\uFF0C\u5E76\u542F\u52A8 kubelet</span></span>
<span class="line"><span style="color:#393A34;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#393A34;">systemctl restart docker</span></span>
<span class="line"><span style="color:#393A34;">systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> kubelet </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> systemctl start kubelet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">docker version</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u26A0\uFE0F <strong>WARNING</strong></p><p>\u5982\u679C\u6B64\u65F6\u6267\u884C <code>service status kubelet</code> \u547D\u4EE4\uFF0C\u5C06\u5F97\u5230 kubelet \u542F\u52A8\u5931\u8D25\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u8BF7\u5FFD\u7565\u6B64\u9519\u8BEF\uFF0C\u56E0\u4E3A\u5FC5\u987B\u5B8C\u6210\u540E\u7EED\u6B65\u9AA4\u4E2D <code>kubeadm init</code> \u7684\u64CD\u4F5C\uFF0Ckubelet \u624D\u80FD\u6B63\u5E38\u542F\u52A8</p></blockquote><p>\u8D4B\u4E88\u6743\u9650\u53CA\u8FD0\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">chmod +x preinstall.sh</span></span>
<span class="line"><span style="color:#DBD7CA;">./preinstall.sh 1.18.2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">chmod +x preinstall.sh</span></span>
<span class="line"><span style="color:#393A34;">./preinstall.sh 1.18.2</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-4-2-\u521D\u59CB\u5316-master-\u8282\u70B9" tabindex="-1">3.4.2 \u521D\u59CB\u5316 master \u8282\u70B9 <a class="header-anchor" href="#_3-4-2-\u521D\u59CB\u5316-master-\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u5173\u4E8E\u521D\u59CB\u5316\u65F6\u7528\u5230\u7684\u73AF\u5883\u53D8\u91CF</p><ul><li><strong><code>APISERVER_NAME</code></strong> \u4E0D\u80FD\u662F master \u7684 hostname</li><li><strong><code>APISERVER_NAME</code></strong> \u5FC5\u987B\u5168\u4E3A\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u5C0F\u6570\u70B9\uFF0C<strong>\u4E0D\u80FD\u5305\u542B\u51CF\u53F7</strong></li><li><strong><code>POD_SUBNET</code></strong> \u6240\u4F7F\u7528\u7684\u7F51\u6BB5\u4E0D\u80FD\u4E0E <em><strong>master\u8282\u70B9/worker\u8282\u70B9</strong></em> \u6240\u5728\u7684\u7F51\u6BB5\u91CD\u53E0\u3002\u8BE5\u5B57\u6BB5\u7684\u53D6\u503C\u4E3A\u4E00\u4E2A <a href="https://kuboard.cn/glossary/cidr.html" target="_blank" rel="noopener noreferrer">CIDR</a> \u503C\uFF0C\u5982\u679C\u60A8\u5BF9 CIDR \u8FD9\u4E2A\u6982\u5FF5\u8FD8\u4E0D\u719F\u6089\uFF0C\u8BF7\u4ECD\u7136\u6267\u884C <code>export POD_SUBNET=10.100.0.1/16 </code>\u547D\u4EE4\uFF0C\u4E0D\u505A\u4FEE\u6539</li></ul><p>\u5728 <code>master</code> \u8282\u70B9\u4E0A\u8FD0\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u66FF\u6362 x.x.x.x \u4E3A master \u8282\u70B9\u7684\u5185\u7F51IP</span></span>
<span class="line"><span style="color:#758575;"># export \u547D\u4EE4\u53EA\u5728\u5F53\u524D shell \u4F1A\u8BDD\u4E2D\u6709\u6548\uFF0C\u5F00\u542F\u65B0\u7684 shell \u7A97\u53E3\u540E\uFF0C\u5982\u679C\u8981\u7EE7\u7EED\u5B89\u88C5\u8FC7\u7A0B\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C\u6B64\u5904\u7684 export \u547D\u4EE4</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> MASTER_IP=172.16.1.129</span></span>
<span class="line"><span style="color:#758575;"># \u66FF\u6362 apiserver.demo \u4E3A \u60A8\u60F3\u8981\u7684 dnsName</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> APISERVER_NAME=apiserver.agou.com</span></span>
<span class="line"><span style="color:#758575;"># Kubernetes \u5BB9\u5668\u7EC4\u6240\u5728\u7684\u7F51\u6BB5\uFF0C\u8BE5\u7F51\u6BB5\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u7531 kubernetes \u521B\u5EFA\uFF0C\u4E8B\u5148\u5E76\u4E0D\u5B58\u5728\u4E8E\u60A8\u7684\u7269\u7406\u7F51\u7EDC\u4E2D</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> POD_SUBNET=10.100.0.1/16</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">MASTER_IP</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">    </span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">APISERVER_NAME</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/hosts</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u66FF\u6362 x.x.x.x \u4E3A master \u8282\u70B9\u7684\u5185\u7F51IP</span></span>
<span class="line"><span style="color:#A0ADA0;"># export \u547D\u4EE4\u53EA\u5728\u5F53\u524D shell \u4F1A\u8BDD\u4E2D\u6709\u6548\uFF0C\u5F00\u542F\u65B0\u7684 shell \u7A97\u53E3\u540E\uFF0C\u5982\u679C\u8981\u7EE7\u7EED\u5B89\u88C5\u8FC7\u7A0B\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C\u6B64\u5904\u7684 export \u547D\u4EE4</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> MASTER_IP=172.16.1.129</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u66FF\u6362 apiserver.demo \u4E3A \u60A8\u60F3\u8981\u7684 dnsName</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> APISERVER_NAME=apiserver.agou.com</span></span>
<span class="line"><span style="color:#A0ADA0;"># Kubernetes \u5BB9\u5668\u7EC4\u6240\u5728\u7684\u7F51\u6BB5\uFF0C\u8BE5\u7F51\u6BB5\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u7531 kubernetes \u521B\u5EFA\uFF0C\u4E8B\u5148\u5E76\u4E0D\u5B58\u5728\u4E8E\u60A8\u7684\u7269\u7406\u7F51\u7EDC\u4E2D</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> POD_SUBNET=10.100.0.1/16</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">MASTER_IP</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">    </span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">APISERVER_NAME</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/hosts</span></span>
<span class="line"></span></code></pre></div><p>\u5728<code>master</code>\u8282\u70B9\u4E0A\u6DFB\u52A0\u4EE5\u4E0B\u811A\u672C\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u53EA\u5728 master \u8282\u70B9\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u811A\u672C\u51FA\u9519\u65F6\u7EC8\u6B62\u6267\u884C</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">\${</span><span style="color:#CB7676;">#</span><span style="color:#B8A965;">POD_SUBNET</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-eq</span><span style="color:#DBD7CA;"> 0 </span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">||</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">\${</span><span style="color:#CB7676;">#</span><span style="color:#B8A965;">APISERVER_NAME</span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-eq</span><span style="color:#DBD7CA;"> 0 </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">then</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> -e </span><span style="color:#C98A7D;">&quot;\\033[31;1m\u8BF7\u786E\u4FDD\u60A8\u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u73AF\u5883\u53D8\u91CF POD_SUBNET \u548C APISERVER_NAME \\033[0m&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> \u5F53\u524DPOD_SUBNET=</span><span style="color:#858585;">$</span><span style="color:#B8A965;">POD_SUBNET</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> \u5F53\u524DAPISERVER_NAME=</span><span style="color:#858585;">$</span><span style="color:#B8A965;">APISERVER_NAME</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">exit</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#4D9375;">fi</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u5B8C\u6574\u914D\u7F6E\u9009\u9879 https://godoc.org/k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/v1beta2</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -f ./kubeadm-config.yaml</span></span>
<span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#4D9375;">EOF</span><span style="color:#C98A7D;"> &gt; ./kubeadm-config.yaml</span></span>
<span class="line"><span style="color:#C98A7D;">apiVersion: kubeadm.k8s.io/v1beta2</span></span>
<span class="line"><span style="color:#C98A7D;">kind: ClusterConfiguration</span></span>
<span class="line"><span style="color:#C98A7D;">kubernetesVersion: v\${1}</span></span>
<span class="line"><span style="color:#C98A7D;">imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers</span></span>
<span class="line"><span style="color:#C98A7D;">controlPlaneEndpoint: &quot;\${APISERVER_NAME}:6443&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">networking:</span></span>
<span class="line"><span style="color:#C98A7D;">  serviceSubnet: &quot;10.96.0.0/16&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">  podSubnet: &quot;\${POD_SUBNET}&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">  dnsDomain: &quot;cluster.local&quot;</span></span>
<span class="line"><span style="color:#4D9375;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># kubeadm init</span></span>
<span class="line"><span style="color:#758575;"># \u6839\u636E\u60A8\u670D\u52A1\u5668\u7F51\u901F\u7684\u60C5\u51B5\uFF0C\u60A8\u9700\u8981\u7B49\u5019 3 - 10 \u5206\u949F</span></span>
<span class="line"><span style="color:#DBD7CA;">kubeadm init --config=kubeadm-config.yaml --upload-certs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u914D\u7F6E kubectl</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /root/.kube/</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /root/.kube/</span></span>
<span class="line"><span style="color:#DBD7CA;">cp -i /etc/kubernetes/admin.conf /root/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5 calico \u7F51\u7EDC\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#758575;"># \u53C2\u8003\u6587\u6863 https://docs.projectcalico.org/v3.13/getting-started/kubernetes/self-managed-onprem/onpremises</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;\u5B89\u88C5calico-3.13.1&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -f calico-3.13.1.yaml</span></span>
<span class="line"><span style="color:#DBD7CA;">wget https://kuboard.cn/install-script/calico/calico-3.13.1.yaml</span></span>
<span class="line"><span style="color:#DBD7CA;">kubectl apply -f calico-3.13.1.yaml</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EA\u5728 master \u8282\u70B9\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u811A\u672C\u51FA\u9519\u65F6\u7EC8\u6B62\u6267\u884C</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">\${</span><span style="color:#AB5959;">#</span><span style="color:#8C862B;">POD_SUBNET</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-eq</span><span style="color:#393A34;"> 0 </span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">||</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">\${</span><span style="color:#AB5959;">#</span><span style="color:#8C862B;">APISERVER_NAME</span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-eq</span><span style="color:#393A34;"> 0 </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">then</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> -e </span><span style="color:#B56959;">&quot;\\033[31;1m\u8BF7\u786E\u4FDD\u60A8\u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u73AF\u5883\u53D8\u91CF POD_SUBNET \u548C APISERVER_NAME \\033[0m&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> \u5F53\u524DPOD_SUBNET=</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">POD_SUBNET</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> \u5F53\u524DAPISERVER_NAME=</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">APISERVER_NAME</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">exit</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#1C6B48;">fi</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u5B8C\u6574\u914D\u7F6E\u9009\u9879 https://godoc.org/k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/v1beta2</span></span>
<span class="line"><span style="color:#393A34;">rm -f ./kubeadm-config.yaml</span></span>
<span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#1C6B48;">EOF</span><span style="color:#B56959;"> &gt; ./kubeadm-config.yaml</span></span>
<span class="line"><span style="color:#B56959;">apiVersion: kubeadm.k8s.io/v1beta2</span></span>
<span class="line"><span style="color:#B56959;">kind: ClusterConfiguration</span></span>
<span class="line"><span style="color:#B56959;">kubernetesVersion: v\${1}</span></span>
<span class="line"><span style="color:#B56959;">imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers</span></span>
<span class="line"><span style="color:#B56959;">controlPlaneEndpoint: &quot;\${APISERVER_NAME}:6443&quot;</span></span>
<span class="line"><span style="color:#B56959;">networking:</span></span>
<span class="line"><span style="color:#B56959;">  serviceSubnet: &quot;10.96.0.0/16&quot;</span></span>
<span class="line"><span style="color:#B56959;">  podSubnet: &quot;\${POD_SUBNET}&quot;</span></span>
<span class="line"><span style="color:#B56959;">  dnsDomain: &quot;cluster.local&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># kubeadm init</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6839\u636E\u60A8\u670D\u52A1\u5668\u7F51\u901F\u7684\u60C5\u51B5\uFF0C\u60A8\u9700\u8981\u7B49\u5019 3 - 10 \u5206\u949F</span></span>
<span class="line"><span style="color:#393A34;">kubeadm init --config=kubeadm-config.yaml --upload-certs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u914D\u7F6E kubectl</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /root/.kube/</span></span>
<span class="line"><span style="color:#393A34;">mkdir /root/.kube/</span></span>
<span class="line"><span style="color:#393A34;">cp -i /etc/kubernetes/admin.conf /root/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5 calico \u7F51\u7EDC\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53C2\u8003\u6587\u6863 https://docs.projectcalico.org/v3.13/getting-started/kubernetes/self-managed-onprem/onpremises</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;\u5B89\u88C5calico-3.13.1&quot;</span></span>
<span class="line"><span style="color:#393A34;">rm -f calico-3.13.1.yaml</span></span>
<span class="line"><span style="color:#393A34;">wget https://kuboard.cn/install-script/calico/calico-3.13.1.yaml</span></span>
<span class="line"><span style="color:#393A34;">kubectl apply -f calico-3.13.1.yaml</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u8BE5\u811A\u672C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">bash master_init.sh 1.18.2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">bash master_init.sh 1.18.2</span></span>
<span class="line"></span></code></pre></div><p>\u68C0\u67E5<code>master</code>\u521D\u59CB\u5316\u7ED3\u679C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF0C\u7B49\u5F85 3-10 \u5206\u949F\uFF0C\u76F4\u5230\u6240\u6709\u7684\u5BB9\u5668\u7EC4\u5904\u4E8E Running \u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">watch kubectl get pod -n kube-system -o wide</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B master \u8282\u70B9\u521D\u59CB\u5316\u7ED3\u679C</span></span>
<span class="line"><span style="color:#DBD7CA;">kubectl get nodes -o wide</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF0C\u7B49\u5F85 3-10 \u5206\u949F\uFF0C\u76F4\u5230\u6240\u6709\u7684\u5BB9\u5668\u7EC4\u5904\u4E8E Running \u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">watch kubectl get pod -n kube-system -o wide</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B master \u8282\u70B9\u521D\u59CB\u5316\u7ED3\u679C</span></span>
<span class="line"><span style="color:#393A34;">kubectl get nodes -o wide</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-4-3-\u521D\u59CB\u5316-node-\u8282\u70B9" tabindex="-1">3.4.3 \u521D\u59CB\u5316 node \u8282\u70B9 <a class="header-anchor" href="#_3-4-3-\u521D\u59CB\u5316-node-\u8282\u70B9" aria-hidden="true">#</a></h3><h4 id="_3-4-3-1-\u83B7\u5F97-join\u547D\u4EE4\u53C2\u6570" tabindex="-1">3.4.3.1 \u83B7\u5F97 join\u547D\u4EE4\u53C2\u6570 <a class="header-anchor" href="#_3-4-3-1-\u83B7\u5F97-join\u547D\u4EE4\u53C2\u6570" aria-hidden="true">#</a></h4><p>\u5728<code>master</code> \u8282\u70B9\u4E0A\u83B7\u53D6<code>join</code>\u547D\u4EE4\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm token create --print-join-command</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm token create --print-join-command</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u2139\uFE0F <strong>\u6709\u6548\u65F6\u95F4</strong></p><p>\u8BE5<code> token</code> \u7684\u6709\u6548\u65F6\u95F4\u4E3A 2 \u4E2A\u5C0F\u65F6\uFF0C2\u5C0F\u65F6\u5185\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u6B64 token \u521D\u59CB\u5316\u4EFB\u610F\u6570\u91CF\u7684 worker \u8282\u70B9\u3002</p></blockquote><h4 id="_3-4-3-2-\u521D\u59CB\u5316-node-\u8282\u70B9" tabindex="-1">3.4.3.2 \u521D\u59CB\u5316 node \u8282\u70B9 <a class="header-anchor" href="#_3-4-3-2-\u521D\u59CB\u5316-node-\u8282\u70B9" aria-hidden="true">#</a></h4><p>\u7F16\u8F91\u672C\u5730\u4E3B\u673A\u89E3\u6790\u6587\u4EF6<code>/etc/hosts</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1.129    apiserver.agou.com</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">172.16.1.129    apiserver.agou.com</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u4ECE<code>master</code>\u8282\u70B9\u4E0A\u83B7\u53D6\u7684<code>join</code>\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm join apiserver.agou.com:6443 --token 7t8xh1.2y6pzjpgl9eai0kd     --discovery-token-ca-cert-hash sha256:a57479ae585f0c0a617d890c62c15c71023d85d4d55f4dd8fffeb56d9a467ef7 </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm join apiserver.agou.com:6443 --token 7t8xh1.2y6pzjpgl9eai0kd     --discovery-token-ca-cert-hash sha256:a57479ae585f0c0a617d890c62c15c71023d85d4d55f4dd8fffeb56d9a467ef7 </span></span>
<span class="line"></span></code></pre></div><h3 id="_3-4-4-\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C" tabindex="-1">3.4.4 \u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C <a class="header-anchor" href="#_3-4-4-\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C" aria-hidden="true">#</a></h3><p>\u5728<code>master</code>\u8282\u70B9\u4E0A\u6267\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl get nodes -o wide</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl get nodes -o wide</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-5-\u4F7F\u7528-kubespray-\u90E8\u7F72" tabindex="-1">3.5 \u4F7F\u7528 Kubespray \u90E8\u7F72 <a class="header-anchor" href="#_3-5-\u4F7F\u7528-kubespray-\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="_3-5-1-kubespray-\u7B80\u4ECB" tabindex="-1">3.5.1 Kubespray \u7B80\u4ECB <a class="header-anchor" href="#_3-5-1-kubespray-\u7B80\u4ECB" aria-hidden="true">#</a></h3><p><a href="https://github.com/kubernetes-incubator/kubespray" target="_blank" rel="noopener noreferrer">Kubespray</a> \u662F Kubernetes incubator \u4E2D\u7684\u9879\u76EE\uFF0C\u76EE\u6807\u662F\u63D0\u4F9B Production Ready Kubernetes \u90E8\u7F72\u65B9\u6848\uFF0C\u8BE5\u9879\u76EE\u57FA\u7840\u662F\u901A\u8FC7 Ansible Playbook \u6765\u5B9A\u4E49\u7CFB\u7EDF\u4E0E Kubernetes \u96C6\u7FA4\u90E8\u7F72\u7684\u4EFB\u52A1\uFF0C\u5177\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9\uFF1A</p><ul><li>\u53EF\u4EE5\u90E8\u7F72\u5728 AWS, GCE, Azure, OpenStack \u4EE5\u53CA\u88F8\u673A\u4E0A.</li><li>\u90E8\u7F72 High Available Kubernetes \u96C6\u7FA4.</li><li>\u53EF\u7EC4\u5408\u6027 (Composable)\uFF0C\u53EF\u81EA\u884C\u9009\u62E9 Network Plugin (flannel, calico, canal, weave) \u6765\u90E8\u7F72.</li><li>\u652F\u6301\u591A\u79CD Linux distributions(CoreOS, Debian Jessie, Ubuntu 16.04, CentOS/RHEL7).</li></ul><p>Kubespray \u7531\u4E00\u7CFB\u5217\u7684 <a href="http://docs.ansible.com/" target="_blank" rel="noopener noreferrer">Ansible</a> playbook\u3001\u751F\u6210 <a href="https://github.com/kubernetes-incubator/kubespray/blob/master/docs/ansible.md" target="_blank" rel="noopener noreferrer">inventory</a> \u7684\u547D\u4EE4\u884C\u5DE5\u5177\u4EE5\u53CA\u751F\u6210 OS/Kubernetes \u96C6\u7FA4\u914D\u7F6E\u7BA1\u7406\u4EFB\u52A1\u7684\u4E13\u4E1A\u77E5\u8BC6\u6784\u6210\u3002</p><h3 id="_3-5-2-\u521D\u59CB\u5316\u73AF\u5883" tabindex="-1">3.5.2 \u521D\u59CB\u5316\u73AF\u5883 <a class="header-anchor" href="#_3-5-2-\u521D\u59CB\u5316\u73AF\u5883" aria-hidden="true">#</a></h3><p>\u4E3B\u673A\u73AF\u5883\uFF1A</p><table><thead><tr><th>\u89D2\u8272</th><th>IP</th></tr></thead><tbody><tr><td>master</td><td>172.16.1.128</td></tr><tr><td>node01</td><td>172.16.1.129</td></tr></tbody></table><p>\u7F16\u8F91<code>/etc/hosts</code>\u6587\u4EF6\uFF0C\u4F7F\u5404\u4E3B\u673A\u4E4B\u95F4\u53EF\u4EE5\u901A\u8FC7\u4E3B\u673A\u540D\u4E92\u76F8\u901A\u4FE1\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1.128 master master.agou-ops.com</span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1.129 node01 node01.agou-ops.com</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">172.16.1.128 master master.agou-ops.com</span></span>
<span class="line"><span style="color:#393A34;">172.16.1.129 node01 node01.agou-ops.com</span></span>
<span class="line"></span></code></pre></div><p>\u5173\u95ED SELinux \u548C\u9632\u706B\u5899\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sed -i </span><span style="color:#C98A7D;">&#39;s/SELINUX=*/SELINUX=disabled/&#39;</span><span style="color:#DBD7CA;"> /etc/selinux/config</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl disable firewalld </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> systemctl stop firewalld</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sed -i </span><span style="color:#B56959;">&#39;s/SELINUX=*/SELINUX=disabled/&#39;</span><span style="color:#393A34;"> /etc/selinux/config</span></span>
<span class="line"><span style="color:#393A34;">systemctl disable firewalld </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> systemctl stop firewalld</span></span>
<span class="line"></span></code></pre></div><p>Kubernetes 1.8 \u5F00\u59CB\u8981\u6C42\u5173\u95ED\u7CFB\u7EDF\u7684 Swap \u4EA4\u6362\u5206\u533A\uFF0C\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">swapoff -a </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;vm.swappiness=0&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> /etc/sysctl.conf </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> sysctl -p </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> free \u2013h</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">swapoff -a </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;vm.swappiness=0&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> /etc/sysctl.conf </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> sysctl -p </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> free \u2013h</span></span>
<span class="line"></span></code></pre></div><p>Docker \u4ECE 1.13 \u7248\u672C\u5F00\u59CB\u8C03\u6574\u4E86\u9ED8\u8BA4\u7684\u9632\u706B\u5899\u89C4\u5219\uFF0C\u7981\u7528\u4E86 <code>iptables filter </code>\u8868\u4E2D<code>FOWARD</code>\u94FE\uFF0C\u8FD9\u6837\u4F1A\u5F15\u8D77 Kubernetes \u96C6\u7FA4\u4E2D\u8DE8 Node \u7684 Pod \u65E0\u6CD5\u901A\u4FE1\uFF0C\u5728\u5404\u4E2A Docker \u8282\u70B9\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">iptables -P FORWARD ACCEPT</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">iptables -P FORWARD ACCEPT</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E SSH Key \u8BA4\u8BC1\u3002\u786E\u4FDD\u672C\u673A\u4E5F\u53EF\u4EE5 SSH \u8FDE\u63A5\uFF0C\u5426\u5219\u4E0B\u9762\u90E8\u7F72\u5931\u8D25\u3002</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ssh-keygen -t rsa -N </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">/.ssh/id_rsa.pub </span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">/.ssh/authorized_keys</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ssh-keygen -t rsa -N </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">cat </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/.ssh/id_rsa.pub </span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/.ssh/authorized_keys</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u65B0\u7CFB\u7EDF\u5185\u6838\u4E3A 4.4.x , CentOS \u9ED8\u8BA4\u4E3A 3.10.x \u3002</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org</span></span>
<span class="line"><span style="color:#DBD7CA;">rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm</span></span>
<span class="line"><span style="color:#DBD7CA;">yum --enablerepo=elrepo-kernel install -y kernel-lt kernel-lt-devel </span></span>
<span class="line"><span style="color:#DBD7CA;">grub2-set-default 0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org</span></span>
<span class="line"><span style="color:#393A34;">rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm</span></span>
<span class="line"><span style="color:#393A34;">yum --enablerepo=elrepo-kernel install -y kernel-lt kernel-lt-devel </span></span>
<span class="line"><span style="color:#393A34;">grub2-set-default 0</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u542F\u7CFB\u7EDF\uFF1A<code>reboot</code></p><p>\u589E\u52A0\u5185\u6838\u914D\u7F6E\uFF0C\u7F16\u8F91<code>/etc/sysctl.conf</code>\u6587\u4EF6\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u589E\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="color:#DBD7CA;">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u589E\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="color:#393A34;">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u5176\u5185\u6838\u914D\u7F6E\u751F\u6548\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sysctl -p</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sysctl -p</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-5-3-\u5B89\u88C5-kubespray" tabindex="-1">3.5.3 \u5B89\u88C5 Kubespray <a class="header-anchor" href="#_3-5-3-\u5B89\u88C5-kubespray" aria-hidden="true">#</a></h3><p>\u5B89\u88C5 Centos \u7684 EPEL \u6E90\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> yum -y install epel-release</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> yum -y install epel-release</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u65B0\u7F13\u5B58\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> yum clean all </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> yum makecache</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> yum clean all </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> yum makecache</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u76F8\u5173\u8F6F\u4EF6\uFF08Ansible \u7248\u672C\u5FC5\u987B &gt;= 2.7\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> yum install -y python-pip python3 python-netaddr python3-pip ansible git</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> yum install -y python-pip python3 python-netaddr python3-pip ansible git</span></span>
<span class="line"></span></code></pre></div><p>\u4E0B\u8F7D\u6E90\u7801\uFF0C\u5F53\u524D Kubespray \u9879\u76EE\u7684 Master \u5206\u652F\u9ED8\u8BA4\u5B89\u88C5 K8s 1.13.1 \u7248\u672C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">git clone https://github.com/kubernetes-sigs/kubespray.git</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">git clone https://github.com/kubernetes-sigs/kubespray.git</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5 Kubespray \u4F9D\u8D56\uFF0C\u82E5\u65E0\u7279\u6B8A\u8BF4\u660E\uFF0C\u540E\u7EED\u64CD\u4F5C\u5747\u5728 ~/kubespray \`\u76EE\u5F55\u4E0B\u6267\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> kubespray </span></span>
<span class="line"><span style="color:#DBD7CA;"> pip3 install -r requirements.txt</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> kubespray </span></span>
<span class="line"><span style="color:#393A34;"> pip3 install -r requirements.txt</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E Kubespray\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> cp -rfp inventory/sample inventory/mycluster</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#858585;"> </span><span style="color:#758575;"># Update Ansible inventory file with inventory builder</span></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> -a IPS=</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">10.10.1.3 10.10.1.4 10.10.1.5</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">CONFIG_FILE=inventory/mycluster/hosts.yaml python3 contrib/inventory_builder/inventory.py </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">IPS</span><span style="color:#858585;">[</span><span style="color:#B8A965;">@</span><span style="color:#858585;">]}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> cp -rfp inventory/sample inventory/mycluster</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#8E8F8B;"> </span><span style="color:#A0ADA0;"># Update Ansible inventory file with inventory builder</span></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> -a IPS=</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">10.10.1.3 10.10.1.4 10.10.1.5</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">CONFIG_FILE=inventory/mycluster/hosts.yaml python3 contrib/inventory_builder/inventory.py </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">IPS</span><span style="color:#8E8F8B;">[</span><span style="color:#8C862B;">@</span><span style="color:#8E8F8B;">]}</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 <code>inventory/mycluster/hosts.ini </code>\uFF1A</p><div class="language-ini"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">all</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">master </span><span style="color:#4D9375;">ansible_host</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">master </span><span style="color:#4D9375;">ip</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">172.16.1.128</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">kube-master</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">etcd</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">kube-node</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">node01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">k8s-cluster:children</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-master</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">calico-rr</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">all</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">master </span><span style="color:#1C6B48;">ansible_host</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">master </span><span style="color:#1C6B48;">ip</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">172.16.1.128</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">kube-master</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">etcd</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">kube-node</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">node01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">k8s-cluster:children</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">kube-master</span></span>
<span class="line"><span style="color:#393A34;">kube-node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">calico-rr</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u2139\uFE0F\u6B64\u5904\u4E5F\u53EF\u4EE5\u7528\uFF1A<code>kubespray prepare --masters master1 --etcds master1 --nodes node1 node2 node3</code>\u6765\u81EA\u52A8\u751F\u6210<code>inventory</code>\u6587\u4EF6</p><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6<code> inventory/mycluster/group_vars/all/all.yml</code>\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4FEE\u6539\u5982\u4E0B\u914D\u7F6E:</span></span>
<span class="line"><span style="color:#429988;">loadbalancer_apiserver_localhost</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#758575;"># \u52A0\u8F7D\u5185\u6838\u6A21\u5757\uFF0C\u5426\u5219 ceph, gfs \u7B49\u65E0\u6CD5\u6302\u8F7D\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#429988;">kubelet_load_modules</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u5982\u4E0B\u914D\u7F6E:</span></span>
<span class="line"><span style="color:#2F8A89;">loadbalancer_apiserver_localhost</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;"># \u52A0\u8F7D\u5185\u6838\u6A21\u5757\uFF0C\u5426\u5219 ceph, gfs \u7B49\u65E0\u6CD5\u6302\u8F7D\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#2F8A89;">kubelet_load_modules</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u955C\u50CF\u9ED8\u8BA4\u7684 Repo \u5730\u5740\uFF0C\u4F7F\u7528 Calico \u4E09\u5C42\u7F51\u7EDC\uFF0C\u540C\u65F6\u53EF\u4EE5\u6307\u5B9A\u5B89\u88C5\u7684 K8s\u7248\u672C\uFF0C\u53C2\u6570\u4E3A<code> kube_version</code>\u3002\u7F16\u8F91\u6587\u4EF6<code>inventory/mycluster/group_vars/k8s-cluster/k8s-cluster.yml</code>(\u5728\u8FD9\u91CC\u6211\u80FD\u591F\u79D1\u5B66\u4E0A\u7F51\u5C31\u4E0D\u505A\u4FEE\u6539\u4E86)\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">kube_image_repo</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;gcr.io/google-containers&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">kube_image_repo</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;gcr.io/google-containers&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u9700\u8BBE\u7F6E\u4EE3\u7406\uFF0C\u5728<code> cluster.yml</code>\u4E2D\u7F16\u8F91 default \u503C\u5373\u53EF\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">proxy_env:</span></span>
<span class="line"><span style="color:#DBD7CA;">          http_proxy: </span><span style="color:#C98A7D;">&quot;\u3010\u3010 http_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">          HTTP_PROXY: </span><span style="color:#C98A7D;">&quot;\u3010\u3010 http_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">          https_proxy: </span><span style="color:#C98A7D;">&quot;\u3010\u3010 https_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">          HTTPS_PROXY: </span><span style="color:#C98A7D;">&quot;\u3010\u3010 https_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">          no_proxy: </span><span style="color:#C98A7D;">&quot;\u3010\u3010 no_proxy | default (&#39;&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">          NO_PROXY: </span><span style="color:#C98A7D;">&quot;\u3010\u3010 no_proxy | default (&#39;&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      no_log: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">proxy_env:</span></span>
<span class="line"><span style="color:#393A34;">          http_proxy: </span><span style="color:#B56959;">&quot;\u3010\u3010 http_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#393A34;">          HTTP_PROXY: </span><span style="color:#B56959;">&quot;\u3010\u3010 http_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#393A34;">          https_proxy: </span><span style="color:#B56959;">&quot;\u3010\u3010 https_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#393A34;">          HTTPS_PROXY: </span><span style="color:#B56959;">&quot;\u3010\u3010 https_proxy | default (&#39;192.168.43.37:8888&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#393A34;">          no_proxy: </span><span style="color:#B56959;">&quot;\u3010\u3010 no_proxy | default (&#39;&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#393A34;">          NO_PROXY: </span><span style="color:#B56959;">&quot;\u3010\u3010 no_proxy | default (&#39;&#39;) \u3011\u3011&quot;</span></span>
<span class="line"><span style="color:#393A34;">      no_log: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u9700\u8BBE\u7F6E<code>docker pull</code> \u4EE3\u7406\uFF0C\u65B0\u5EFA<code>/etc/systemd/system/docker.service.d/http-proxy.conf</code>\u6587\u4EF6\uFF0C\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Service</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Environment=</span><span style="color:#C98A7D;">&quot;http_proxy=192.168.43.37:8888&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">Environment=</span><span style="color:#C98A7D;">&quot;https_proxy=192.168.43.37:8888&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">Environment=</span><span style="color:#C98A7D;">&quot;NO_PROXY= hostname.example.com,172.10.10.10&quot;</span></span>
<span class="line"><span style="color:#758575;"># \u6700\u540E\u91CD\u542Fdocker</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl restart docker</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Service</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Environment=</span><span style="color:#B56959;">&quot;http_proxy=192.168.43.37:8888&quot;</span></span>
<span class="line"><span style="color:#393A34;">Environment=</span><span style="color:#B56959;">&quot;https_proxy=192.168.43.37:8888&quot;</span></span>
<span class="line"><span style="color:#393A34;">Environment=</span><span style="color:#B56959;">&quot;NO_PROXY= hostname.example.com,172.10.10.10&quot;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6700\u540E\u91CD\u542Fdocker</span></span>
<span class="line"><span style="color:#393A34;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#393A34;">systemctl restart docker</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539<code>./roles/kubernetes-apps/ansible/templates/dashboard.yml.j2</code>\u6587\u4EF6\uFF0C\u4F7F\u7528 <code>NodePort</code> \u65B9\u5F0F\u8BBF\u95EE Dashboard\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># ------------------- Dashboard Service ------------------- #\u2026\u2026\u2026\u2026      </span></span>
<span class="line"><span style="color:#429988;">targetPort</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">8443</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#429988;">type</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">NodePort    //\u6DFB\u52A0\u8FD9\u4E00\u884C</span><span style="color:#DBD7CA;">      </span></span>
<span class="line"><span style="color:#429988;">selector</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#429988;">k8s-app</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kubernetes-dashboard</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># ------------------- Dashboard Service ------------------- #\u2026\u2026\u2026\u2026      </span></span>
<span class="line"><span style="color:#2F8A89;">targetPort</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">8443</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#2F8A89;">type</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">NodePort    //\u6DFB\u52A0\u8FD9\u4E00\u884C</span><span style="color:#393A34;">      </span></span>
<span class="line"><span style="color:#2F8A89;">selector</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#2F8A89;">k8s-app</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kubernetes-dashboard</span></span>
<span class="line"></span></code></pre></div><p>\u26A0\uFE0F \u6CE8\u610F\uFF1A\u5982\u679C\u662F\u5355\u8282\u70B9\u90E8\u7F72 K8s\uFF0CKubespray \u9ED8\u8BA4\u4F1A\u521B\u5EFA 2 \u4E2A coredns Pod\uFF0C\u4F46 Deployment \u4E2D\u53C8\u7528\u5230\u4E86 podAntiAffinity\uFF0C\u56E0\u6B64\u4F1A\u5BFC\u81F4\u5176\u4E2D\u4E00\u4E2A coredns pod pending\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539<code>./roles/kubernetes-apps/ansible/templates/coredns-deployment.yml.j2</code>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6CE8\u91CA\u6389\u4EE5\u4E0B\u51E0\u884C\u4EE3\u7801</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">affinity</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;">#podAntiAffinity:</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;">#  requiredDuringSchedulingIgnoredDuringExecution:</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;">#  - topologyKey: &quot;kubernetes.io/hostname&quot;</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;">#    labelSelector:</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;">#      matchLabels:</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;">#        k8s-app: coredns\u3010\u3010 coredns_ordinal_suffix | default(&#39;&#39;) \u3011\u3011</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005\u5728spec\u4E00\u884C\u6DFB\u52A0\u4EE3\u7801\uFF1A</span></span>
<span class="line"><span style="color:#429988;">spec</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">replicas</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">1   //\u6307\u5B9Apod\u4E3A1\u4E2A\u526F\u672C</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6CE8\u91CA\u6389\u4EE5\u4E0B\u51E0\u884C\u4EE3\u7801</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">affinity</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;">#podAntiAffinity:</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;">#  requiredDuringSchedulingIgnoredDuringExecution:</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;">#  - topologyKey: &quot;kubernetes.io/hostname&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;">#    labelSelector:</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;">#      matchLabels:</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;">#        k8s-app: coredns\u3010\u3010 coredns_ordinal_suffix | default(&#39;&#39;) \u3011\u3011</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005\u5728spec\u4E00\u884C\u6DFB\u52A0\u4EE3\u7801\uFF1A</span></span>
<span class="line"><span style="color:#2F8A89;">spec</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">replicas</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">1   //\u6307\u5B9Apod\u4E3A1\u4E2A\u526F\u672C</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\u6267\u884C\u90E8\u7F72\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ansible-playbook -i inventory/mycluster/hosts.ini  --become --become-user=root cluster.yml -b -v</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ansible-playbook -i inventory/mycluster/hosts.ini  --become --become-user=root cluster.yml -b -v</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-5-4-\u767B\u5F55-dashboard" tabindex="-1">3.5.4 \u767B\u5F55 Dashboard <a class="header-anchor" href="#_3-5-4-\u767B\u5F55-dashboard" aria-hidden="true">#</a></h3><p>\u767B\u9646 Dashboard \u652F\u6301 kubeconfig \u548C token \u4E24\u79CD\u8BA4\u8BC1\u65B9\u5F0F\uFF0Ckubeconfig \u4E5F\u4F9D\u8D56 token \u5B57\u6BB5\uFF0C\u6240\u4EE5\u751F\u6210 token \u8FD9\u4E00\u6B65\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002\u6B64\u5904\uFF0C\u6211\u4EEC\u83B7\u53D6\u96C6\u7FA4\u7BA1\u7406\u5458\uFF08\u62E5\u6709\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684 admin \u6743\u9650\uFF09\u7684 token\u3002</p><p>\u67E5\u770B kubernetes-dashboard \u66B4\u9732\u7684\u7AEF\u53E3\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u8FD9\u91CC\u662F31777\u7AEF\u53E3\u3002</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master kubespray</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  kubectl get svc --all-namespaces </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep kubernetes-dashboard</span></span>
<span class="line"><span style="color:#DBD7CA;">kube-system   kubernetes-dashboard        NodePort    10.233.41.202   </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">none</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">        443:30548/TCP            8m16s</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master kubespray</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  kubectl get svc --all-namespaces </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep kubernetes-dashboard</span></span>
<span class="line"><span style="color:#393A34;">kube-system   kubernetes-dashboard        NodePort    10.233.41.202   </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">none</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">        443:30548/TCP            8m16s</span></span>
<span class="line"></span></code></pre></div><p>\u83B7\u53D6 admin \u7684 token</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master kubespray</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;">  kubectl -n kube-system describe </span><span style="color:#C98A7D;">$(kubectl -n kube-system get secret -n kube-system -o name </span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;"> grep namespace)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep token</span></span>
<span class="line"><span style="color:#DBD7CA;">Name:         namespace-controller-token-ksdvp</span></span>
<span class="line"><span style="color:#DBD7CA;">Type:  kubernetes.io/service-account-token</span></span>
<span class="line"><span style="color:#DBD7CA;">token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IkV0N0pLMXVqMzNxS2xCNXRlTkxpRTlOYnNMVzRiajNrLU9kdi1qRW5jTDQifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJuYW1lc3BhY2UtY29udHJvbGxlci10b2tlbi1rc2R2cCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJuYW1lc3BhY2UtY29udHJvbGxlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImZiM2NkMDBhLTE4ZjAtNGI4OC1hZGNiLWYwNGVjZWNlZTUzNiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpuYW1lc3BhY2UtY29udHJvbGxlciJ9.bYWcoopcYFC6EYNMNPkoiZeUQqfidC9NwlrMzzkZD3T9e-PbDd37pmTeWAcU_E4DCDzeVc9CXfWPhWCfr3syZKWiIXPNtDrNrIgnGs34Id2evsh7evVTgOjQtWkRoqX9UFdjWZdQPxvJChLZacRqbUp718umCzhR9evuE0zq8JeruBCTrcilQDDYobavfYs72HrwZ5xlIj2GMb66FeS7mYZacP-2-M3oVsziIWLs_kfBIaN_OkpImUPpvJxF-8xMmVP2BCKWyHWaLPIUdVsF8FkiLWH7bIS8f0cm8D4wEcMZ4IYkVe2FMcmMaiFJx5HEXrwA4YT7bMVy4PJhR71Thg</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master kubespray</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;">  kubectl -n kube-system describe </span><span style="color:#B56959;">$(kubectl -n kube-system get secret -n kube-system -o name </span><span style="color:#AB5959;">|</span><span style="color:#B56959;"> grep namespace)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep token</span></span>
<span class="line"><span style="color:#393A34;">Name:         namespace-controller-token-ksdvp</span></span>
<span class="line"><span style="color:#393A34;">Type:  kubernetes.io/service-account-token</span></span>
<span class="line"><span style="color:#393A34;">token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IkV0N0pLMXVqMzNxS2xCNXRlTkxpRTlOYnNMVzRiajNrLU9kdi1qRW5jTDQifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJuYW1lc3BhY2UtY29udHJvbGxlci10b2tlbi1rc2R2cCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJuYW1lc3BhY2UtY29udHJvbGxlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImZiM2NkMDBhLTE4ZjAtNGI4OC1hZGNiLWYwNGVjZWNlZTUzNiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpuYW1lc3BhY2UtY29udHJvbGxlciJ9.bYWcoopcYFC6EYNMNPkoiZeUQqfidC9NwlrMzzkZD3T9e-PbDd37pmTeWAcU_E4DCDzeVc9CXfWPhWCfr3syZKWiIXPNtDrNrIgnGs34Id2evsh7evVTgOjQtWkRoqX9UFdjWZdQPxvJChLZacRqbUp718umCzhR9evuE0zq8JeruBCTrcilQDDYobavfYs72HrwZ5xlIj2GMb66FeS7mYZacP-2-M3oVsziIWLs_kfBIaN_OkpImUPpvJxF-8xMmVP2BCKWyHWaLPIUdVsF8FkiLWH7bIS8f0cm8D4wEcMZ4IYkVe2FMcmMaiFJx5HEXrwA4YT7bMVy4PJhR71Thg</span></span>
<span class="line"></span></code></pre></div><p>\u5728 dashboard \u767B\u5F55\u9875\u9762\u4E0A\u4F7F\u7528\u4E0A\u9762\u8F93\u51FA\u4E2D\u7684\u90A3\u4E2A\u975E\u5E38\u957F\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A token \u767B\u5F55\uFF0C\u5373\u53EF\u4EE5\u62E5\u6709\u7BA1\u7406\u5458\u6743\u9650\u64CD\u4F5C\u6574\u4E2A kubernetes \u96C6\u7FA4\u4E2D\u7684\u5BF9\u8C61\u3002\u5F53\u7136\u60A8\u4E5F\u53EF\u4EE5\u5C06\u8FD9\u4E32 token \u52A0\u5230 admin \u7528\u6237\u7684 kubeconfig \u6587\u4EF6\u4E2D\uFF0C\u7EE7\u7EED\u4F7F\u7528 kubeconfig \u767B\u5F55\uFF0C\u4E24\u79CD\u8BA4\u8BC1\u65B9\u5F0F\u4EFB\u60A8\u9009\u62E9\u3002</p><p>\u767B\u5F55 dashboard\uFF1A<a href="https://172.16.1.128:30548" target="_blank" rel="noopener noreferrer">https://172.16.1.128:30548</a></p><blockquote><p>\u6CE8\u610F\uFF1A\u7531\u4E8E\u8FD9\u91CC\u4F7F\u7528\u7684 HTTPS\uFF0C\u5E76\u672A\u4F7F\u7528\u8BC1\u4E66\uFF0C\u56E0\u6B64\u4F7F\u7528 Google \u7B49\u6D4F\u89C8\u5668\u4F1A\u7EC8\u6B62\u8BBF\u95EE\u3002</p></blockquote><h3 id="_3-5-5-\u9A8C\u8BC1-k8s-\u96C6\u7FA4" tabindex="-1">3.5.5 \u9A8C\u8BC1 K8s \u96C6\u7FA4 <a class="header-anchor" href="#_3-5-5-\u9A8C\u8BC1-k8s-\u96C6\u7FA4" aria-hidden="true">#</a></h3><ul><li>\u67E5\u770B\u96C6\u7FA4\u7248\u672C</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> kubelet --version</span></span>
<span class="line"><span style="color:#DBD7CA;">Kubernetes v1.18.2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> kubelet --version</span></span>
<span class="line"><span style="color:#393A34;">Kubernetes v1.18.2</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> kubectl get nodes</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> kubectl get nodes</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B\u96C6\u7FA4 Pod</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> kubectl get pods --all-namespaces</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> kubectl get pods --all-namespaces</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B IPVS</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"> ipvsadm -L -n</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"> ipvsadm -L -n</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-5-6-\u5176\u4ED6" tabindex="-1">3.5.6 \u5176\u4ED6 <a class="header-anchor" href="#_3-5-6-\u5176\u4ED6" aria-hidden="true">#</a></h3><p>\u589E\u52A0 node \u8282\u70B9\uFF08\u63D0\u524D\u5728<code>hosts.ini</code>\u6587\u4EF6\u4E2D\u589E\u52A0\u4E3B\u673A\u8282\u70B9\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ansible-playbook -i inventory/mycluster/hosts.ini scale.yml -b -v -k</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ansible-playbook -i inventory/mycluster/hosts.ini scale.yml -b -v -k</span></span>
<span class="line"></span></code></pre></div><p>\u5C06<code> hosts.ini</code> \u6587\u4EF6\u4E2D\u7684 master \u548C etcd \u7684\u673A\u5668\u589E\u52A0\u5230\u591A\u53F0\uFF0C\u6267\u884C\u90E8\u7F72\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ansible-playbook -i inventory/mycluster/hosts.ini cluster.yml -b -vvv</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ansible-playbook -i inventory/mycluster/hosts.ini cluster.yml -b -vvv</span></span>
<span class="line"></span></code></pre></div><p>\u522A\u9664\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u8282\u70B9\u5C31\u662F\u522A\u9664\u6574\u4E2A\u96C6\u7FA4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ansible-playbook -i inventory/mycluster/hosts.ini remove-node.yml -b -v</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ansible-playbook -i inventory/mycluster/hosts.ini remove-node.yml -b -v</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u9700\u8981\u5378\u8F7D\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ansible-playbook -i inventory/mycluster/hosts.ini reset.yml -b \u2013vvv</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ansible-playbook -i inventory/mycluster/hosts.ini reset.yml -b \u2013vvv</span></span>
<span class="line"></span></code></pre></div><p>\u5347\u7EA7 K8s \u96C6\u7FA4\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684 K8s \u7248\u672C\u4FE1\u606F\uFF0C\u6267\u884C\u5347\u7EA7\u547D\u4EE4\u3002\u6D89\u53CA\u6587\u4EF6\u4E3A <code>upgrade-cluster.yml</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ansible-playbook upgrade-cluster.yml -b -i inventory/mycluster/hosts.ini -e kube_version=vX.XX.XX -vvv</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ansible-playbook upgrade-cluster.yml -b -i inventory/mycluster/hosts.ini -e kube_version=vX.XX.XX -vvv</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><p>kubespray GetStarted\uFF1A<a href="https://github.com/kubernetes-sigs/kubespray/blob/master/docs/getting-started.md" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes-sigs/kubespray/blob/master/docs/getting-started.md</a></p></li><li><p>\u4F7F\u7528 Kubespray \u5728\u57FA\u7840\u8BBE\u65BD\u6216\u4E91\u5E73\u53F0\u4E0A\u5B89\u88C5 Kubernetes\uFF1A<a href="https://k8smeetup.github.io/docs/getting-started-guides/kubespray/" target="_blank" rel="noopener noreferrer">https://k8smeetup.github.io/docs/getting-started-guides/kubespray/</a></p></li></ul>`,211),o=[e];function c(t,r,i,y,d,A){return n(),a("div",null,o)}var B=s(p,[["render",c]]);export{D as __pageData,B as default};
