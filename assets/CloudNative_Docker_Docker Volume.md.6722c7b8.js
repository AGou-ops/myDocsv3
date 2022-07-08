import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const v=JSON.parse('{"title":"Docker Volume","description":"","frontmatter":{},"headers":[{"level":2,"title":"Volume \u6570\u636E\u5171\u4EAB","slug":"volume-\u6570\u636E\u5171\u4EAB"},{"level":2,"title":"Volume \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D","slug":"volume-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D"},{"level":2,"title":"Volume \u4F7F\u7528\u5916\u90E8\u5B58\u50A8(NFS)","slug":"volume-\u4F7F\u7528\u5916\u90E8\u5B58\u50A8-nfs"}],"relativePath":"CloudNative/Docker/Docker Volume.md","lastUpdated":1657272051000}'),p={name:"CloudNative/Docker/Docker Volume.md"},e=l(`<h1 id="docker-volume" tabindex="-1">Docker Volume <a class="header-anchor" href="#docker-volume" aria-hidden="true">#</a></h1><p>\u67E5\u770B\u5BB9\u5668\u5B58\u50A8\u5377\u6302\u8F7D\u60C5\u51B5\u4F7F\u7528\uFF1A<code>docker inspect -f \u3010\u3010.Mounts\u3011\u3011 ID</code></p><h2 id="volume-\u6570\u636E\u5171\u4EAB" tabindex="-1">Volume \u6570\u636E\u5171\u4EAB <a class="header-anchor" href="#volume-\u6570\u636E\u5171\u4EAB" aria-hidden="true">#</a></h2><p>\u5BB9\u5668<code>busybox2</code>\u5171\u4EAB\u4F7F\u7528<code>busybox2</code>\u7684\u6570\u636E\u5377</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker create --name busybox1 -v /data/test1:/data/test1 busybox</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">docker run -itd --name busybox2 --volumes-from busybox1 busybox</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker create --name busybox1 -v /data/test1:/data/test1 busybox</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">docker run -itd --name busybox2 --volumes-from busybox1 busybox</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u6302\u8F7D\u591A\u4E2A\u5171\u4EAB\u5377\uFF0C\u4F7F\u7528\u591A\u4E2A<code>--volumes-from</code>\u53C2\u6570\u5373\u53EF.</p><h2 id="volume-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D" tabindex="-1">Volume \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D <a class="header-anchor" href="#volume-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D" aria-hidden="true">#</a></h2><p>\u2139\uFE0F\u5B9E\u7528\u6027\u4E0D\u9AD8\u3002\u3002\u3002</p><p>\u5907\u4EFD\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run --rm --volumes-from busybox1 -v </span><span style="color:#C98A7D;">$(pwd)</span><span style="color:#DBD7CA;">:/backup busybox \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  tar cvf /backup/backup.tar /data/test1/</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run --rm --volumes-from busybox1 -v </span><span style="color:#B56959;">$(pwd)</span><span style="color:#393A34;">:/backup busybox \\</span></span>
<span class="line"><span style="color:#393A34;">  tar cvf /backup/backup.tar /data/test1/</span></span>
<span class="line"></span></code></pre></div><p>\u6062\u590D\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run -itd -v --name busybox3 /data/ busybox /bin/sh</span></span>
<span class="line"><span style="color:#DBD7CA;">docker run --volumes-from busybox1 -v /data/backup/:/backup busybox tar xf /backup/backup.tar</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run -itd -v --name busybox3 /data/ busybox /bin/sh</span></span>
<span class="line"><span style="color:#393A34;">docker run --volumes-from busybox1 -v /data/backup/:/backup busybox tar xf /backup/backup.tar</span></span>
<span class="line"></span></code></pre></div><h2 id="volume-\u4F7F\u7528\u5916\u90E8\u5B58\u50A8-nfs" tabindex="-1">Volume \u4F7F\u7528\u5916\u90E8\u5B58\u50A8(NFS) <a class="header-anchor" href="#volume-\u4F7F\u7528\u5916\u90E8\u5B58\u50A8-nfs" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u914D\u7F6E NFS \u670D\u52A1\u5668\uFF08172.16.1.128\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install nfs-utils rpcbind -y</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /data/nfs/docker</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;/data/nfs *(rw,no_root_squash,sync)&quot;</span><span style="color:#CB7676;">&gt;&gt;</span><span style="color:#DBD7CA;">/etc/exports</span></span>
<span class="line"><span style="color:#DBD7CA;">exportfs -r</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl start rpcbind nfs-server</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B NFS \u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">showmount -e localhost</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install nfs-utils rpcbind -y</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p /data/nfs/docker</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;/data/nfs *(rw,no_root_squash,sync)&quot;</span><span style="color:#AB5959;">&gt;&gt;</span><span style="color:#393A34;">/etc/exports</span></span>
<span class="line"><span style="color:#393A34;">exportfs -r</span></span>
<span class="line"><span style="color:#393A34;">systemctl start rpcbind nfs-server</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B NFS \u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">showmount -e localhost</span></span>
<span class="line"></span></code></pre></div><p>\u5BA2\u6237\u7AEF\uFF08\u4E5F\u5C31\u662F\u5BB9\u5668\u7AEF\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u786E\u4FDD\u4E3B\u673A\u5B89\u88C5\u4E86 nfs \u7684\u5BA2\u6237\u7AEF\u5DE5\u5177</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install -y nfs-utils rpcbind</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA NFS \u6302\u8F7D\u5377</span></span>
<span class="line"><span style="color:#DBD7CA;">docker volume create --driver </span><span style="color:#CB7676;">local</span><span style="color:#DBD7CA;"> \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  --opt type=nfs \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  --opt o=addr=172.16.1.128,rw \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  --opt device=:/data/nfs \\</span></span>
<span class="line"><span style="color:#DBD7CA;">  volume-nfs</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u786E\u4FDD\u4E3B\u673A\u5B89\u88C5\u4E86 nfs \u7684\u5BA2\u6237\u7AEF\u5DE5\u5177</span></span>
<span class="line"><span style="color:#393A34;">yum install -y nfs-utils rpcbind</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA NFS \u6302\u8F7D\u5377</span></span>
<span class="line"><span style="color:#393A34;">docker volume create --driver </span><span style="color:#AB5959;">local</span><span style="color:#393A34;"> \\</span></span>
<span class="line"><span style="color:#393A34;">  --opt type=nfs \\</span></span>
<span class="line"><span style="color:#393A34;">  --opt o=addr=172.16.1.128,rw \\</span></span>
<span class="line"><span style="color:#393A34;">  --opt device=:/data/nfs \\</span></span>
<span class="line"><span style="color:#393A34;">  volume-nfs</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u5E76\u4F7F\u7528 NFS \u5916\u90E8\u5B58\u50A8\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u67E5\u770B</span></span>
<span class="line"><span style="color:#DBD7CA;">docker volume ls</span></span>
<span class="line"><span style="color:#DBD7CA;">docker volume inspect volume-nfs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528 NFS</span></span>
<span class="line"><span style="color:#DBD7CA;">docker run -itd --name busybox4 -v volume-nfs:/nfs busybox</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u5BB9\u5668\u6302\u8F7D\u60C5\u51B5</span></span>
<span class="line"><span style="color:#DBD7CA;">docker inspect -f \u3010\u3010.Mounts\u3011\u3011 busybox4</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B</span></span>
<span class="line"><span style="color:#393A34;">docker volume ls</span></span>
<span class="line"><span style="color:#393A34;">docker volume inspect volume-nfs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528 NFS</span></span>
<span class="line"><span style="color:#393A34;">docker run -itd --name busybox4 -v volume-nfs:/nfs busybox</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u5BB9\u5668\u6302\u8F7D\u60C5\u51B5</span></span>
<span class="line"><span style="color:#393A34;">docker inspect -f \u3010\u3010.Mounts\u3011\u3011 busybox4</span></span>
<span class="line"></span></code></pre></div><p>\u5220\u9664\u6302\u8F7D\u5377\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker rm -f -v volume-nfs</span></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#DBD7CA;">docker volume rm volume-nfs</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker rm -f -v volume-nfs</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#393A34;">docker volume rm volume-nfs</span></span>
<span class="line"></span></code></pre></div>`,21),o=[e];function c(r,t,d,i,u,y){return a(),n("div",null,o)}var m=s(p,[["render",c]]);export{v as __pageData,m as default};
