import{_ as s,o as a,c as p,a as n}from"./app.1e6146c3.js";const v=JSON.parse('{"title":"Ceph Cluster \u79FB\u9664","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5378\u8F7D Ceph \u96C6\u7FA4","slug":"\u5378\u8F7D-ceph-\u96C6\u7FA4"},{"level":2,"title":"\u6E05\u9664\u96C6\u7FA4\u73AF\u5883","slug":"\u6E05\u9664\u96C6\u7FA4\u73AF\u5883"}],"relativePath":"LinuxBasics/FileSystem/Ceph/Ceph Cluster \u79FB\u9664.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/FileSystem/Ceph/Ceph Cluster \u79FB\u9664.md"},e=n(`<h1 id="ceph-cluster-\u79FB\u9664" tabindex="-1">Ceph Cluster \u79FB\u9664 <a class="header-anchor" href="#ceph-cluster-\u79FB\u9664" aria-hidden="true">#</a></h1><h2 id="\u5378\u8F7D-ceph-\u96C6\u7FA4" tabindex="-1">\u5378\u8F7D Ceph \u96C6\u7FA4 <a class="header-anchor" href="#\u5378\u8F7D-ceph-\u96C6\u7FA4" aria-hidden="true">#</a></h2><ol><li>\u505C\u6B62<code>ceph</code>\u76F8\u5173\u670D\u52A1\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ps aux</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">grep ceph </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">awk </span><span style="color:#C98A7D;">&#39;{print $2}&#39;</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">xargs </span><span style="color:#E0A569;">kill</span><span style="color:#DBD7CA;"> -9</span></span>
<span class="line"><span style="color:#758575;"># \u68C0\u67E5\u662F\u5426\u6210\u529F\u505C\u6B62\u670D\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">ps -ef</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">grep ceph</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ps aux</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">grep ceph </span><span style="color:#AB5959;">|</span><span style="color:#393A34;">awk </span><span style="color:#B56959;">&#39;{print $2}&#39;</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">xargs </span><span style="color:#B58451;">kill</span><span style="color:#393A34;"> -9</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u68C0\u67E5\u662F\u5426\u6210\u529F\u505C\u6B62\u670D\u52A1</span></span>
<span class="line"><span style="color:#393A34;">ps -ef</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">grep ceph</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5378\u8F7D<code>OSD</code>\u78C1\u76D8\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">umount /var/lib/ceph/osd/</span><span style="color:#CB7676;">*</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">umount /var/lib/ceph/osd/</span><span style="color:#AB5959;">*</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u5220\u9664\u76F8\u5173\u914D\u7F6E\u9879\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/osd/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/mon/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/mds/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/bootstrap-mds/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/bootstrap-osd/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/bootstrap-rgw/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/bootstrap-mgr/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/lib/ceph/tmp/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /etc/ceph/</span><span style="color:#CB7676;">*</span></span>
<span class="line"><span style="color:#DBD7CA;">rm -rf /var/run/ceph/</span><span style="color:#CB7676;">*</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/osd/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/mon/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/mds/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/bootstrap-mds/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/bootstrap-osd/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/bootstrap-rgw/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/bootstrap-mgr/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/lib/ceph/tmp/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /etc/ceph/</span><span style="color:#AB5959;">*</span></span>
<span class="line"><span style="color:#393A34;">rm -rf /var/run/ceph/</span><span style="color:#AB5959;">*</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u64E6\u9664\u78C1\u76D8\u6570\u636E\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy disk zap stor1:/dev/sdb stor2:/dev/sdb</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy disk zap stor1:/dev/sdb stor2:/dev/sdb</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u5378\u8F7D\u76F8\u5173\u8F6F\u4EF6\u5305\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /root/ceph-cluster/</span></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664\u8F6F\u4EF6\u5305</span></span>
<span class="line"><span style="color:#DBD7CA;">ceph-deploy purge stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /root/ceph-cluster/</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u8F6F\u4EF6\u5305</span></span>
<span class="line"><span style="color:#393A34;">ceph-deploy purge stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u6E05\u9664\u6570\u636E\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy purgedata stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy purgedata stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>\u6E05\u9664<code>keys</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy forgetkeys</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy forgetkeys</span></span>
<span class="line"></span></code></pre></div><ol start="8"><li>\u5220\u9664\u76F8\u5173<code>LV</code>\u3001<code>VG</code>\u3001<code>PV</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">lvdisplay </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep /dev/ceph</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> awk </span><span style="color:#C98A7D;">&#39;{print $3}&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> xargs lvremove -f</span></span>
<span class="line"><span style="color:#DBD7CA;">vgdisplay </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> grep ceph </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> awk </span><span style="color:#C98A7D;">&#39;{print $3}&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> xargs vgremove -f</span></span>
<span class="line"><span style="color:#DBD7CA;">pvremove /dev/sdb</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">lvdisplay </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep /dev/ceph</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> awk </span><span style="color:#B56959;">&#39;{print $3}&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> xargs lvremove -f</span></span>
<span class="line"><span style="color:#393A34;">vgdisplay </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> grep ceph </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> awk </span><span style="color:#B56959;">&#39;{print $3}&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> xargs vgremove -f</span></span>
<span class="line"><span style="color:#393A34;">pvremove /dev/sdb</span></span>
<span class="line"></span></code></pre></div><ol start="9"><li>\u5220\u9664\u521D\u59CB\u5316\u914D\u7F6E\u4FE1\u606F\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@stor1 ceph-cluster</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">pwd</span></span>
<span class="line"><span style="color:#DBD7CA;">/root/ceph-cluster</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@stor1 ceph-cluster</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> rm -f </span><span style="color:#CB7676;">*</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@stor1 ceph-cluster</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> </span><span style="color:#B58451;">pwd</span></span>
<span class="line"><span style="color:#393A34;">/root/ceph-cluster</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@stor1 ceph-cluster</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> rm -f </span><span style="color:#AB5959;">*</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6E05\u9664\u96C6\u7FA4\u73AF\u5883" tabindex="-1">\u6E05\u9664\u96C6\u7FA4\u73AF\u5883 <a class="header-anchor" href="#\u6E05\u9664\u96C6\u7FA4\u73AF\u5883" aria-hidden="true">#</a></h2><ol><li>\u91CD\u590D[\u5378\u8F7D Ceph \u96C6\u7FA4](#\u5378\u8F7D Ceph \u96C6\u7FA4)\u7684\u7B2C<code>1</code>\u3001<code>2</code>\u3001<code>3</code>\u3001<code>9</code>\u6B65</li><li>\u5728<code>mon</code>\u8282\u70B9\u4E0A\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy new stor1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy new stor1</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u5728\u6BCF\u4E2A\u8282\u70B9\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF08\u8BE5\u6B65\u9AA4\u53EF\u7701\u7565\uFF0C\u56E0\u4E3A\u4E0B\u4E00\u6B65\u4F1A\u81EA\u52A8\u4E3A\u6BCF\u4E2A\u8282\u70B9\u5B89\u88C5\u4EE5\u4E0B\u7A0B\u5E8F\u5305\uFF09\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo yum install ceph epel-release ceph-radosgw</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo yum install ceph epel-release ceph-radosgw</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u5728<code>mon</code>\u8282\u70B9\u4E0A\u6267\u884C\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy install --release nautilus stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy install --release nautilus stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u521D\u59CB\u5316<code>mon</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy mon create-initial</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy mon create-initial</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u4E3A\u6BCF\u4E2A\u8282\u70B9\u4F20\u9012<code>keys</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy admin stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy admin stor1 stor2 stor3</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>\u6DFB\u52A0<code>mgr</code>\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">ceph-deploy mgr create stor1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">ceph-deploy mgr create stor1</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0<code>osd</code>\u53C2\u8003[Ceph-deploy \u96C6\u7FA4\u5FEB\u901F\u90E8\u7F72](./Ceph-deploy <a href="http://xn--66tt51eiea188dz2an0v.md" target="_blank" rel="noopener noreferrer">\u96C6\u7FA4\u5FEB\u901F\u90E8\u7F72.md</a>)</p>`,34),o=[e];function c(r,t,d,i,y,h){return a(),p("div",null,o)}var B=s(l,[["render",c]]);export{v as __pageData,B as default};
