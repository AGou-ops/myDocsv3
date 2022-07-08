import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const d=JSON.parse('{"title":"\u4F7F\u7528 Kubeadm \u90E8\u7F72(\u5355master)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9884\u5148\u51C6\u5907","slug":"\u9884\u5148\u51C6\u5907"},{"level":2,"title":"\u521D\u59CB\u5316 master \u8282\u70B9","slug":"\u521D\u59CB\u5316-master-\u8282\u70B9"},{"level":2,"title":"\u521D\u59CB\u5316 node \u8282\u70B9","slug":"\u521D\u59CB\u5316-node-\u8282\u70B9"},{"level":3,"title":"\u83B7\u5F97 join\u547D\u4EE4\u53C2\u6570","slug":"\u83B7\u5F97-join\u547D\u4EE4\u53C2\u6570"},{"level":3,"title":"\u521D\u59CB\u5316 node \u8282\u70B9","slug":"\u521D\u59CB\u5316-node-\u8282\u70B9-1"},{"level":3,"title":"\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C","slug":"\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C"},{"level":2,"title":"\u5B89\u88C5 Ingress Controller","slug":"\u5B89\u88C5-ingress-controller"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/k8s/Installation/\u4F7F\u7528 Kubeadm \u90E8\u7F72\uFF08\u5355master\uFF09.md","lastUpdated":1657272051000}'),p={name:"CloudNative/k8s/Installation/\u4F7F\u7528 Kubeadm \u90E8\u7F72\uFF08\u5355master\uFF09.md"},o=l(`<h1 id="\u4F7F\u7528-kubeadm-\u90E8\u7F72-\u5355master" tabindex="-1">\u4F7F\u7528 Kubeadm \u90E8\u7F72(\u5355master) <a class="header-anchor" href="#\u4F7F\u7528-kubeadm-\u90E8\u7F72-\u5355master" aria-hidden="true">#</a></h1><h2 id="\u9884\u5148\u51C6\u5907" tabindex="-1">\u9884\u5148\u51C6\u5907 <a class="header-anchor" href="#\u9884\u5148\u51C6\u5907" aria-hidden="true">#</a></h2><p>\u73AF\u5883\uFF1A</p><table><thead><tr><th>\u89D2\u8272</th><th>IP</th></tr></thead><tbody><tr><td>master</td><td>172.16.1.129</td></tr><tr><td>node01</td><td>172.16.1.133</td></tr></tbody></table><p>\u4FEE\u6539\u5F53\u524D\u7684\u4E3B\u673A\u540D\uFF0C\u786E\u4FDD\u4E0D\u662F <code>localhost</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">hostnamectl set-hostname master</span></span>
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
<span class="line"></span></code></pre></div><h2 id="\u521D\u59CB\u5316-master-\u8282\u70B9" tabindex="-1">\u521D\u59CB\u5316 master \u8282\u70B9 <a class="header-anchor" href="#\u521D\u59CB\u5316-master-\u8282\u70B9" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u521D\u59CB\u5316\u65F6\u7528\u5230\u7684\u73AF\u5883\u53D8\u91CF</p><ul><li><strong><code>APISERVER_NAME</code></strong> \u4E0D\u80FD\u662F master \u7684 hostname</li><li><strong><code>APISERVER_NAME</code></strong> \u5FC5\u987B\u5168\u4E3A\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u5C0F\u6570\u70B9\uFF0C<strong>\u4E0D\u80FD\u5305\u542B\u51CF\u53F7</strong></li><li><strong><code>POD_SUBNET</code></strong> \u6240\u4F7F\u7528\u7684\u7F51\u6BB5\u4E0D\u80FD\u4E0E <em><strong>master\u8282\u70B9/worker\u8282\u70B9</strong></em> \u6240\u5728\u7684\u7F51\u6BB5\u91CD\u53E0\u3002\u8BE5\u5B57\u6BB5\u7684\u53D6\u503C\u4E3A\u4E00\u4E2A <a href="https://kuboard.cn/glossary/cidr.html" target="_blank" rel="noopener noreferrer">CIDR</a> \u503C\uFF0C\u5982\u679C\u60A8\u5BF9 CIDR \u8FD9\u4E2A\u6982\u5FF5\u8FD8\u4E0D\u719F\u6089\uFF0C\u8BF7\u4ECD\u7136\u6267\u884C <code>export POD_SUBNET=10.100.0.1/16 </code>\u547D\u4EE4\uFF0C\u4E0D\u505A\u4FEE\u6539</li></ul><p>\u5728 <code>master</code> \u8282\u70B9\u4E0A\u8FD0\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u66FF\u6362 x.x.x.x \u4E3A master \u8282\u70B9\u7684\u5185\u7F51IP</span></span>
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
<span class="line"></span></code></pre></div><h2 id="\u521D\u59CB\u5316-node-\u8282\u70B9" tabindex="-1">\u521D\u59CB\u5316 node \u8282\u70B9 <a class="header-anchor" href="#\u521D\u59CB\u5316-node-\u8282\u70B9" aria-hidden="true">#</a></h2><h3 id="\u83B7\u5F97-join\u547D\u4EE4\u53C2\u6570" tabindex="-1">\u83B7\u5F97 join\u547D\u4EE4\u53C2\u6570 <a class="header-anchor" href="#\u83B7\u5F97-join\u547D\u4EE4\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u5728<code>master</code> \u8282\u70B9\u4E0A\u83B7\u53D6<code>join</code>\u547D\u4EE4\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm token create --print-join-command</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm token create --print-join-command</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u2139\uFE0F <strong>\u6709\u6548\u65F6\u95F4</strong></p><p>\u8BE5<code> token</code> \u7684\u6709\u6548\u65F6\u95F4\u4E3A 2 \u4E2A\u5C0F\u65F6\uFF0C2\u5C0F\u65F6\u5185\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u6B64 token \u521D\u59CB\u5316\u4EFB\u610F\u6570\u91CF\u7684 worker \u8282\u70B9\u3002</p></blockquote><h3 id="\u521D\u59CB\u5316-node-\u8282\u70B9-1" tabindex="-1">\u521D\u59CB\u5316 node \u8282\u70B9 <a class="header-anchor" href="#\u521D\u59CB\u5316-node-\u8282\u70B9-1" aria-hidden="true">#</a></h3><p>\u7F16\u8F91\u672C\u5730\u4E3B\u673A\u89E3\u6790\u6587\u4EF6<code>/etc/hosts</code>\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">172.16.1.129    apiserver.agou.com</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">172.16.1.129    apiserver.agou.com</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u4ECE<code>master</code>\u8282\u70B9\u4E0A\u83B7\u53D6\u7684<code>join</code>\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubeadm join apiserver.agou.com:6443 --token 7t8xh1.2y6pzjpgl9eai0kd     --discovery-token-ca-cert-hash sha256:a57479ae585f0c0a617d890c62c15c71023d85d4d55f4dd8fffeb56d9a467ef7 </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubeadm join apiserver.agou.com:6443 --token 7t8xh1.2y6pzjpgl9eai0kd     --discovery-token-ca-cert-hash sha256:a57479ae585f0c0a617d890c62c15c71023d85d4d55f4dd8fffeb56d9a467ef7 </span></span>
<span class="line"></span></code></pre></div><h3 id="\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C" tabindex="-1">\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C <a class="header-anchor" href="#\u68C0\u67E5\u521D\u59CB\u5316\u7ED3\u679C" aria-hidden="true">#</a></h3><p>\u5728<code>master</code>\u8282\u70B9\u4E0A\u6267\u884C\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl get nodes -o wide</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl get nodes -o wide</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5-ingress-controller" tabindex="-1">\u5B89\u88C5 Ingress Controller <a class="header-anchor" href="#\u5B89\u88C5-ingress-controller" aria-hidden="true">#</a></h2><p>\u7F16\u8F91\u521D\u59CB\u5316\u6587\u4EF6<code>nginx-ingress.yaml</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5982\u679C\u6253\u7B97\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\uFF0C\u8BF7\u53C2\u8003 https://github.com/nginxinc/kubernetes-ingress/blob/v1.5.5/docs/installation.md \u5E76\u6839\u636E\u60A8\u81EA\u5DF1\u7684\u60C5\u51B5\u505A\u8FDB\u4E00\u6B65\u5B9A\u5236</span></span>
<span class="line"></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">v1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">Namespace</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">---</span></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">v1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ServiceAccount</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">namespace</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">---</span></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">v1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">Secret</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">default-server-secret</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">namespace</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#429988;">type</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">Opaque</span></span>
<span class="line"><span style="color:#429988;">data</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">tls.crt</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN2akNDQWFZQ0NRREFPRjl0THNhWFhEQU5CZ2txaGtpRzl3MEJBUXNGQURBaE1SOHdIUVlEVlFRRERCWk8KUjBsT1dFbHVaM0psYzNORGIyNTBjbTlzYkdWeU1CNFhEVEU0TURreE1qRTRNRE16TlZvWERUSXpNRGt4TVRFNApNRE16TlZvd0lURWZNQjBHQTFVRUF3d1dUa2RKVGxoSmJtZHlaWE56UTI5dWRISnZiR3hsY2pDQ0FTSXdEUVlKCktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUwvN2hIUEtFWGRMdjNyaUM3QlBrMTNpWkt5eTlyQ08KR2xZUXYyK2EzUDF0azIrS3YwVGF5aGRCbDRrcnNUcTZzZm8vWUk1Y2Vhbkw4WGM3U1pyQkVRYm9EN2REbWs1Qgo4eDZLS2xHWU5IWlg0Rm5UZ0VPaStlM2ptTFFxRlBSY1kzVnNPazFFeUZBL0JnWlJVbkNHZUtGeERSN0tQdGhyCmtqSXVuektURXUyaDU4Tlp0S21ScUJHdDEwcTNRYzhZT3ExM2FnbmovUWRjc0ZYYTJnMjB1K1lYZDdoZ3krZksKWk4vVUkxQUQ0YzZyM1lma1ZWUmVHd1lxQVp1WXN2V0RKbW1GNWRwdEMzN011cDBPRUxVTExSakZJOTZXNXIwSAo1TmdPc25NWFJNV1hYVlpiNWRxT3R0SmRtS3FhZ25TZ1JQQVpQN2MwQjFQU2FqYzZjNGZRVXpNQ0F3RUFBVEFOCkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQWpLb2tRdGRPcEsrTzhibWVPc3lySmdJSXJycVFVY2ZOUitjb0hZVUoKdGhrYnhITFMzR3VBTWI5dm15VExPY2xxeC9aYzJPblEwMEJCLzlTb0swcitFZ1U2UlVrRWtWcitTTFA3NTdUWgozZWI4dmdPdEduMS9ienM3bzNBaS9kclkrcUI5Q2k1S3lPc3FHTG1US2xFaUtOYkcyR1ZyTWxjS0ZYQU80YTY3Cklnc1hzYktNbTQwV1U3cG9mcGltU1ZmaXFSdkV5YmN3N0NYODF6cFErUyt1eHRYK2VBZ3V0NHh3VlI5d2IyVXYKelhuZk9HbWhWNThDd1dIQnNKa0kxNXhaa2VUWXdSN0diaEFMSkZUUkk3dkhvQXprTWIzbjAxQjQyWjNrN3RXNQpJUDFmTlpIOFUvOWxiUHNoT21FRFZkdjF5ZytVRVJxbStGSis2R0oxeFJGcGZnPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">tls.key</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBdi91RWM4b1JkMHUvZXVJTHNFK1RYZUprckxMMnNJNGFWaEMvYjVyYy9XMlRiNHEvClJOcktGMEdYaVN1eE9ycXgrajlnamx4NXFjdnhkenRKbXNFUkJ1Z1B0ME9hVGtIekhvb3FVWmcwZGxmZ1dkT0EKUTZMNTdlT1l0Q29VOUZ4amRXdzZUVVRJVUQ4R0JsRlNjSVo0b1hFTkhzbysyR3VTTWk2Zk1wTVM3YUhudzFtMApxWkdvRWEzWFNyZEJ6eGc2clhkcUNlUDlCMXl3VmRyYURiUzc1aGQzdUdETDU4cGszOVFqVUFQaHpxdmRoK1JWClZGNGJCaW9CbTVpeTlZTW1hWVhsMm0wTGZzeTZuUTRRdFFzdEdNVWozcGJtdlFmazJBNnljeGRFeFpkZFZsdmwKMm82MjBsMllxcHFDZEtCRThCay90elFIVTlKcU56cHpoOUJUTXdJREFRQUJBb0lCQVFDZklHbXowOHhRVmorNwpLZnZJUXQwQ0YzR2MxNld6eDhVNml4MHg4Mm15d1kxUUNlL3BzWE9LZlRxT1h1SENyUlp5TnUvZ2IvUUQ4bUFOCmxOMjRZTWl0TWRJODg5TEZoTkp3QU5OODJDeTczckM5bzVvUDlkazAvYzRIbjAzSkVYNzZ5QjgzQm9rR1FvYksKMjhMNk0rdHUzUmFqNjd6Vmc2d2szaEhrU0pXSzBwV1YrSjdrUkRWYmhDYUZhNk5nMUZNRWxhTlozVDhhUUtyQgpDUDNDeEFTdjYxWTk5TEI4KzNXWVFIK3NYaTVGM01pYVNBZ1BkQUk3WEh1dXFET1lvMU5PL0JoSGt1aVg2QnRtCnorNTZud2pZMy8yUytSRmNBc3JMTnIwMDJZZi9oY0IraVlDNzVWYmcydVd6WTY3TWdOTGQ5VW9RU3BDRkYrVm4KM0cyUnhybnhBb0dCQU40U3M0ZVlPU2huMVpQQjdhTUZsY0k2RHR2S2ErTGZTTXFyY2pOZjJlSEpZNnhubmxKdgpGenpGL2RiVWVTbWxSekR0WkdlcXZXaHFISy9iTjIyeWJhOU1WMDlRQ0JFTk5jNmtWajJTVHpUWkJVbEx4QzYrCk93Z0wyZHhKendWelU0VC84ajdHalRUN05BZVpFS2FvRHFyRG5BYWkyaW5oZU1JVWZHRXFGKzJyQW9HQkFOMVAKK0tZL0lsS3RWRzRKSklQNzBjUis3RmpyeXJpY05iWCtQVzUvOXFHaWxnY2grZ3l4b25BWlBpd2NpeDN3QVpGdwpaZC96ZFB2aTBkWEppc1BSZjRMazg5b2pCUmpiRmRmc2l5UmJYbyt3TFU4NUhRU2NGMnN5aUFPaTVBRHdVU0FkCm45YWFweUNweEFkREtERHdObit3ZFhtaTZ0OHRpSFRkK3RoVDhkaVpBb0dCQUt6Wis1bG9OOTBtYlF4VVh5YUwKMjFSUm9tMGJjcndsTmVCaWNFSmlzaEhYa2xpSVVxZ3hSZklNM2hhUVRUcklKZENFaHFsV01aV0xPb2I2NTNyZgo3aFlMSXM1ZUtka3o0aFRVdnpldm9TMHVXcm9CV2xOVHlGanIrSWhKZnZUc0hpOGdsU3FkbXgySkJhZUFVWUNXCndNdlQ4NmNLclNyNkQrZG8wS05FZzFsL0FvR0FlMkFVdHVFbFNqLzBmRzgrV3hHc1RFV1JqclRNUzRSUjhRWXQKeXdjdFA4aDZxTGxKUTRCWGxQU05rMXZLTmtOUkxIb2pZT2pCQTViYjhibXNVU1BlV09NNENoaFJ4QnlHbmR2eAphYkJDRkFwY0IvbEg4d1R0alVZYlN5T294ZGt5OEp0ek90ajJhS0FiZHd6NlArWDZDODhjZmxYVFo5MWpYL3RMCjF3TmRKS2tDZ1lCbyt0UzB5TzJ2SWFmK2UwSkN5TGhzVDQ5cTN3Zis2QWVqWGx2WDJ1VnRYejN5QTZnbXo5aCsKcDNlK2JMRUxwb3B0WFhNdUFRR0xhUkcrYlNNcjR5dERYbE5ZSndUeThXczNKY3dlSTdqZVp2b0ZpbmNvVlVIMwphdmxoTUVCRGYxSjltSDB5cDBwWUNaS2ROdHNvZEZtQktzVEtQMjJhTmtsVVhCS3gyZzR6cFE9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQo=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">---</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ConfigMap</span></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">v1</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-config</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">namespace</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#429988;">data</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">server-names-hash-bucket-size</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;1024&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">---</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ClusterRole</span></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io/v1beta1</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#429988;">rules</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">services</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">endpoints</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">get</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">list</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">watch</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">secrets</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">get</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">list</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">watch</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">configmaps</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">get</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">list</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">watch</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">update</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">create</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">pods</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">list</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">events</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">create</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">patch</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">extensions</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ingresses</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">list</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">watch</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">get</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;extensions&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ingresses/status</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">update</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">k8s.nginx.org</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">virtualservers</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">virtualserverroutes</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">list</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">watch</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">get</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">---</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io/v1beta1</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#429988;">subjects</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ServiceAccount</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">namespace</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#429988;">roleRef</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ClusterRole</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">apiGroup</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">---</span></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">apps/v1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">DaemonSet</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">namespace</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">annotations</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">prometheus.io/scrape</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">prometheus.io/port</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;9113&quot;</span></span>
<span class="line"><span style="color:#429988;">spec</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">selector</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">matchLabels</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">app</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">template</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">labels</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">app</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">spec</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">serviceAccountName</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#429988;">containers</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx/nginx-ingress:1.5.5</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">nginx-ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">http</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#429988;">containerPort</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">80</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#429988;">hostPort</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">80</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">https</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#429988;">containerPort</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">443</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#429988;">hostPort</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">443</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">prometheus</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#429988;">containerPort</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">9113</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">env</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">POD_NAMESPACE</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#429988;">valueFrom</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#429988;">fieldRef</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">              </span><span style="color:#429988;">fieldPath</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">metadata.namespace</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">POD_NAME</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#429988;">valueFrom</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#429988;">fieldRef</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">              </span><span style="color:#429988;">fieldPath</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">metadata.name</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#429988;">args</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">-nginx-configmaps=$(POD_NAMESPACE)/nginx-config</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">-default-server-tls-secret=$(POD_NAMESPACE)/default-server-secret</span></span>
<span class="line"><span style="color:#858585;">         </span><span style="color:#758575;">#- -v=3 # Enables extensive logging. Useful for troubleshooting.</span></span>
<span class="line"><span style="color:#858585;">         </span><span style="color:#758575;">#- -report-ingress-status</span></span>
<span class="line"><span style="color:#858585;">         </span><span style="color:#758575;">#- -external-service=nginx-ingress</span></span>
<span class="line"><span style="color:#858585;">         </span><span style="color:#758575;">#- -enable-leader-election</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">-enable-prometheus-metrics</span></span>
<span class="line"><span style="color:#858585;">         </span><span style="color:#758575;">#- -enable-custom-resources</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u6253\u7B97\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\uFF0C\u8BF7\u53C2\u8003 https://github.com/nginxinc/kubernetes-ingress/blob/v1.5.5/docs/installation.md \u5E76\u6839\u636E\u60A8\u81EA\u5DF1\u7684\u60C5\u51B5\u505A\u8FDB\u4E00\u6B65\u5B9A\u5236</span></span>
<span class="line"></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">v1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Namespace</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">---</span></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">v1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ServiceAccount</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">namespace</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">---</span></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">v1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Secret</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">default-server-secret</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">namespace</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#2F8A89;">type</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Opaque</span></span>
<span class="line"><span style="color:#2F8A89;">data</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">tls.crt</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN2akNDQWFZQ0NRREFPRjl0THNhWFhEQU5CZ2txaGtpRzl3MEJBUXNGQURBaE1SOHdIUVlEVlFRRERCWk8KUjBsT1dFbHVaM0psYzNORGIyNTBjbTlzYkdWeU1CNFhEVEU0TURreE1qRTRNRE16TlZvWERUSXpNRGt4TVRFNApNRE16TlZvd0lURWZNQjBHQTFVRUF3d1dUa2RKVGxoSmJtZHlaWE56UTI5dWRISnZiR3hsY2pDQ0FTSXdEUVlKCktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUwvN2hIUEtFWGRMdjNyaUM3QlBrMTNpWkt5eTlyQ08KR2xZUXYyK2EzUDF0azIrS3YwVGF5aGRCbDRrcnNUcTZzZm8vWUk1Y2Vhbkw4WGM3U1pyQkVRYm9EN2REbWs1Qgo4eDZLS2xHWU5IWlg0Rm5UZ0VPaStlM2ptTFFxRlBSY1kzVnNPazFFeUZBL0JnWlJVbkNHZUtGeERSN0tQdGhyCmtqSXVuektURXUyaDU4Tlp0S21ScUJHdDEwcTNRYzhZT3ExM2FnbmovUWRjc0ZYYTJnMjB1K1lYZDdoZ3krZksKWk4vVUkxQUQ0YzZyM1lma1ZWUmVHd1lxQVp1WXN2V0RKbW1GNWRwdEMzN011cDBPRUxVTExSakZJOTZXNXIwSAo1TmdPc25NWFJNV1hYVlpiNWRxT3R0SmRtS3FhZ25TZ1JQQVpQN2MwQjFQU2FqYzZjNGZRVXpNQ0F3RUFBVEFOCkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQWpLb2tRdGRPcEsrTzhibWVPc3lySmdJSXJycVFVY2ZOUitjb0hZVUoKdGhrYnhITFMzR3VBTWI5dm15VExPY2xxeC9aYzJPblEwMEJCLzlTb0swcitFZ1U2UlVrRWtWcitTTFA3NTdUWgozZWI4dmdPdEduMS9ienM3bzNBaS9kclkrcUI5Q2k1S3lPc3FHTG1US2xFaUtOYkcyR1ZyTWxjS0ZYQU80YTY3Cklnc1hzYktNbTQwV1U3cG9mcGltU1ZmaXFSdkV5YmN3N0NYODF6cFErUyt1eHRYK2VBZ3V0NHh3VlI5d2IyVXYKelhuZk9HbWhWNThDd1dIQnNKa0kxNXhaa2VUWXdSN0diaEFMSkZUUkk3dkhvQXprTWIzbjAxQjQyWjNrN3RXNQpJUDFmTlpIOFUvOWxiUHNoT21FRFZkdjF5ZytVRVJxbStGSis2R0oxeFJGcGZnPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">tls.key</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBdi91RWM4b1JkMHUvZXVJTHNFK1RYZUprckxMMnNJNGFWaEMvYjVyYy9XMlRiNHEvClJOcktGMEdYaVN1eE9ycXgrajlnamx4NXFjdnhkenRKbXNFUkJ1Z1B0ME9hVGtIekhvb3FVWmcwZGxmZ1dkT0EKUTZMNTdlT1l0Q29VOUZ4amRXdzZUVVRJVUQ4R0JsRlNjSVo0b1hFTkhzbysyR3VTTWk2Zk1wTVM3YUhudzFtMApxWkdvRWEzWFNyZEJ6eGc2clhkcUNlUDlCMXl3VmRyYURiUzc1aGQzdUdETDU4cGszOVFqVUFQaHpxdmRoK1JWClZGNGJCaW9CbTVpeTlZTW1hWVhsMm0wTGZzeTZuUTRRdFFzdEdNVWozcGJtdlFmazJBNnljeGRFeFpkZFZsdmwKMm82MjBsMllxcHFDZEtCRThCay90elFIVTlKcU56cHpoOUJUTXdJREFRQUJBb0lCQVFDZklHbXowOHhRVmorNwpLZnZJUXQwQ0YzR2MxNld6eDhVNml4MHg4Mm15d1kxUUNlL3BzWE9LZlRxT1h1SENyUlp5TnUvZ2IvUUQ4bUFOCmxOMjRZTWl0TWRJODg5TEZoTkp3QU5OODJDeTczckM5bzVvUDlkazAvYzRIbjAzSkVYNzZ5QjgzQm9rR1FvYksKMjhMNk0rdHUzUmFqNjd6Vmc2d2szaEhrU0pXSzBwV1YrSjdrUkRWYmhDYUZhNk5nMUZNRWxhTlozVDhhUUtyQgpDUDNDeEFTdjYxWTk5TEI4KzNXWVFIK3NYaTVGM01pYVNBZ1BkQUk3WEh1dXFET1lvMU5PL0JoSGt1aVg2QnRtCnorNTZud2pZMy8yUytSRmNBc3JMTnIwMDJZZi9oY0IraVlDNzVWYmcydVd6WTY3TWdOTGQ5VW9RU3BDRkYrVm4KM0cyUnhybnhBb0dCQU40U3M0ZVlPU2huMVpQQjdhTUZsY0k2RHR2S2ErTGZTTXFyY2pOZjJlSEpZNnhubmxKdgpGenpGL2RiVWVTbWxSekR0WkdlcXZXaHFISy9iTjIyeWJhOU1WMDlRQ0JFTk5jNmtWajJTVHpUWkJVbEx4QzYrCk93Z0wyZHhKendWelU0VC84ajdHalRUN05BZVpFS2FvRHFyRG5BYWkyaW5oZU1JVWZHRXFGKzJyQW9HQkFOMVAKK0tZL0lsS3RWRzRKSklQNzBjUis3RmpyeXJpY05iWCtQVzUvOXFHaWxnY2grZ3l4b25BWlBpd2NpeDN3QVpGdwpaZC96ZFB2aTBkWEppc1BSZjRMazg5b2pCUmpiRmRmc2l5UmJYbyt3TFU4NUhRU2NGMnN5aUFPaTVBRHdVU0FkCm45YWFweUNweEFkREtERHdObit3ZFhtaTZ0OHRpSFRkK3RoVDhkaVpBb0dCQUt6Wis1bG9OOTBtYlF4VVh5YUwKMjFSUm9tMGJjcndsTmVCaWNFSmlzaEhYa2xpSVVxZ3hSZklNM2hhUVRUcklKZENFaHFsV01aV0xPb2I2NTNyZgo3aFlMSXM1ZUtka3o0aFRVdnpldm9TMHVXcm9CV2xOVHlGanIrSWhKZnZUc0hpOGdsU3FkbXgySkJhZUFVWUNXCndNdlQ4NmNLclNyNkQrZG8wS05FZzFsL0FvR0FlMkFVdHVFbFNqLzBmRzgrV3hHc1RFV1JqclRNUzRSUjhRWXQKeXdjdFA4aDZxTGxKUTRCWGxQU05rMXZLTmtOUkxIb2pZT2pCQTViYjhibXNVU1BlV09NNENoaFJ4QnlHbmR2eAphYkJDRkFwY0IvbEg4d1R0alVZYlN5T294ZGt5OEp0ek90ajJhS0FiZHd6NlArWDZDODhjZmxYVFo5MWpYL3RMCjF3TmRKS2tDZ1lCbyt0UzB5TzJ2SWFmK2UwSkN5TGhzVDQ5cTN3Zis2QWVqWGx2WDJ1VnRYejN5QTZnbXo5aCsKcDNlK2JMRUxwb3B0WFhNdUFRR0xhUkcrYlNNcjR5dERYbE5ZSndUeThXczNKY3dlSTdqZVp2b0ZpbmNvVlVIMwphdmxoTUVCRGYxSjltSDB5cDBwWUNaS2ROdHNvZEZtQktzVEtQMjJhTmtsVVhCS3gyZzR6cFE9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQo=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">---</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ConfigMap</span></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">v1</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-config</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">namespace</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#2F8A89;">data</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">server-names-hash-bucket-size</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;1024&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">---</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ClusterRole</span></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io/v1beta1</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#2F8A89;">rules</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">services</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">endpoints</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">get</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">watch</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">secrets</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">get</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">watch</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">configmaps</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">get</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">watch</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">update</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">create</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pods</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">events</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">create</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">patch</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">extensions</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ingresses</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">watch</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">get</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;extensions&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ingresses/status</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">update</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">k8s.nginx.org</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">virtualservers</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">virtualserverroutes</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">watch</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">get</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">---</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io/v1beta1</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#2F8A89;">subjects</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ServiceAccount</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">namespace</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#2F8A89;">roleRef</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ClusterRole</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">apiGroup</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">---</span></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">apps/v1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">DaemonSet</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">namespace</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">annotations</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">prometheus.io/scrape</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">prometheus.io/port</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;9113&quot;</span></span>
<span class="line"><span style="color:#2F8A89;">spec</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">selector</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">matchLabels</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">app</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">template</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">labels</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">app</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">spec</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">serviceAccountName</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#2F8A89;">containers</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx/nginx-ingress:1.5.5</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">nginx-ingress</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">http</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#2F8A89;">containerPort</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">80</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#2F8A89;">hostPort</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">80</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">https</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#2F8A89;">containerPort</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">443</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#2F8A89;">hostPort</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">443</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">prometheus</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#2F8A89;">containerPort</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">9113</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">env</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">POD_NAMESPACE</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#2F8A89;">valueFrom</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#2F8A89;">fieldRef</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">              </span><span style="color:#2F8A89;">fieldPath</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">metadata.namespace</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">POD_NAME</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#2F8A89;">valueFrom</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#2F8A89;">fieldRef</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">              </span><span style="color:#2F8A89;">fieldPath</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">metadata.name</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#2F8A89;">args</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">-nginx-configmaps=$(POD_NAMESPACE)/nginx-config</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">-default-server-tls-secret=$(POD_NAMESPACE)/default-server-secret</span></span>
<span class="line"><span style="color:#8E8F8B;">         </span><span style="color:#A0ADA0;">#- -v=3 # Enables extensive logging. Useful for troubleshooting.</span></span>
<span class="line"><span style="color:#8E8F8B;">         </span><span style="color:#A0ADA0;">#- -report-ingress-status</span></span>
<span class="line"><span style="color:#8E8F8B;">         </span><span style="color:#A0ADA0;">#- -external-service=nginx-ingress</span></span>
<span class="line"><span style="color:#8E8F8B;">         </span><span style="color:#A0ADA0;">#- -enable-leader-election</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">-enable-prometheus-metrics</span></span>
<span class="line"><span style="color:#8E8F8B;">         </span><span style="color:#A0ADA0;">#- -enable-custom-resources</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u521D\u59CB\u5316\uFF1A</p><div class="language-sh"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl apply -f nginx-ingress.yaml</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl apply -f nginx-ingress.yaml</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u53C2\u8003\u81EA\uFF1A<a href="https://kuboard.cn/" target="_blank" rel="noopener noreferrer">https://kuboard.cn/</a> \u4EC5\u7A0D\u4F5C\u4FEE\u6539\u3002</p></blockquote><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>kuboard documetation\uFF1A <a href="https://kuboard.cn/install/install-k8s.html" target="_blank" rel="noopener noreferrer">https://kuboard.cn/install/install-k8s.html</a></li><li>image-pull-backoff\u89E3\u51B3\u65B9\u6848\uFF1A<a href="https://kuboard.cn/learning/faq/image-pull-backoff.html" target="_blank" rel="noopener noreferrer">https://kuboard.cn/learning/faq/image-pull-backoff.html</a></li></ul>`,48),e=[o];function c(t,r,y,i,A,D){return n(),a("div",null,e)}var C=s(p,[["render",c]]);export{d as __pageData,C as default};
