import{_ as a,o as s,c as e,a as n}from"./app.1e6146c3.js";const _=JSON.parse('{"title":"KVM  VMware Station","description":"","frontmatter":{},"headers":[{"level":3,"title":"kvm \u865A\u62DF\u673A\u8FC1\u79FB\u5230 vmware","slug":"kvm-\u865A\u62DF\u673A\u8FC1\u79FB\u5230-vmware"},{"level":3,"title":"vmware \u865A\u62DF\u673A\u8FC1\u79FB\u5230 kvm","slug":"vmware-\u865A\u62DF\u673A\u8FC1\u79FB\u5230-kvm"}],"relativePath":"LinuxBasics/KVM/KVM 2 VMware Station.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/KVM/KVM 2 VMware Station.md"},t=n(`<h1 id="kvm-2-vmware-station" tabindex="-1">KVM &lt;2&gt; VMware Station <a class="header-anchor" href="#kvm-2-vmware-station" aria-hidden="true">#</a></h1><h3 id="kvm-\u865A\u62DF\u673A\u8FC1\u79FB\u5230-vmware" tabindex="-1">kvm \u865A\u62DF\u673A\u8FC1\u79FB\u5230 vmware <a class="header-anchor" href="#kvm-\u865A\u62DF\u673A\u8FC1\u79FB\u5230-vmware" aria-hidden="true">#</a></h3><ol><li>\u9996\u5148\u786E\u4FDD\u6240\u8981\u8FC1\u79FB\u4E3B\u673A\u5904\u4E8E\u5173\u673A\u72B6\u6001\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@kvm www</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> virsh list --all</span></span>
<span class="line"><span style="color:#DBD7CA;"> Id    Name                           State</span></span>
<span class="line"><span style="color:#DBD7CA;">----------------------------------------------------</span></span>
<span class="line"><span style="color:#DBD7CA;"> -     elk01                          shut off</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@kvm www</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> virsh list --all</span></span>
<span class="line"><span style="color:#393A34;"> Id    Name                           State</span></span>
<span class="line"><span style="color:#393A34;">----------------------------------------------------</span></span>
<span class="line"><span style="color:#393A34;"> -     elk01                          shut off</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5C06kvm\u4E0B<code>img</code>\u6587\u4EF6\u683C\u5F0F\u7684\u865A\u62DF\u673A\u8F6C\u6362\u6210<code>vmdk</code>\u683C\u5F0F\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">qemu-img convert /data/elk01.img  -O vmdk /data/elk01.vmdk </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">qemu-img convert /data/elk01.img  -O vmdk /data/elk01.vmdk </span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u6700\u540E\u5728 <code>vmware station</code>\u6216\u8005<code>vmware esxi</code> \u4E2D\u521B\u5EFA\u4E00\u4E2A\u76F8\u540C\u914D\u7F6E\u7684\u4E3B\u673A\uFF0C\u4F7F\u7528\u4E0A\u9762\u751F\u6210\u7684<code>vmdk</code>\u5373\u53EF.</li></ol><h3 id="vmware-\u865A\u62DF\u673A\u8FC1\u79FB\u5230-kvm" tabindex="-1">vmware \u865A\u62DF\u673A\u8FC1\u79FB\u5230 kvm <a class="header-anchor" href="#vmware-\u865A\u62DF\u673A\u8FC1\u79FB\u5230-kvm" aria-hidden="true">#</a></h3><p><a href="https://blog.csdn.net/sin30_zhangdj/article/details/79384360" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/sin30_zhangdj/article/details/79384360</a></p>`,9),o=[t];function r(p,c,i,d,m,v){return s(),e("div",null,o)}var k=a(l,[["render",r]]);export{_ as __pageData,k as default};