import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const A=JSON.parse('{"title":"MongoDB Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9884\u5148\u51C6\u5907\u4E0E\u5B89\u88C5","slug":"\u9884\u5148\u51C6\u5907\u4E0E\u5B89\u88C5"},{"level":3,"title":"\u4F7F\u7528\u73B0\u6210\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u8FDB\u884C\u5B89\u88C5","slug":"\u4F7F\u7528\u73B0\u6210\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u8FDB\u884C\u5B89\u88C5"},{"level":3,"title":"\u624B\u52A8\u5B89\u88C5","slug":"\u624B\u52A8\u5B89\u88C5"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/DataBases/MongoDB/MongoDB Installation.md","lastUpdated":1657272051000}'),o={name:"LinuxBasics/DataBases/MongoDB/MongoDB Installation.md"},e=l(`<h1 id="mongodb-installation" tabindex="-1">MongoDB Installation <a class="header-anchor" href="#mongodb-installation" aria-hidden="true">#</a></h1><h2 id="\u9884\u5148\u51C6\u5907\u4E0E\u5B89\u88C5" tabindex="-1">\u9884\u5148\u51C6\u5907\u4E0E\u5B89\u88C5 <a class="header-anchor" href="#\u9884\u5148\u51C6\u5907\u4E0E\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u4E4B\u524D\u7981\u7528\u5927\u9875\u5185\u5B58\u673A\u5236:</p><blockquote><p>\u900F\u660E\u5927\u9875\u9762\uFF08THP\uFF09\u662F\u4E00\u79CDLinux\u5185\u5B58\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u5B83\u901A\u8FC7\u4F7F\u7528\u8F83\u5927\u7684\u5185\u5B58\u9875\u9762\u6765\u51CF\u5C11\u5177\u6709\u5927\u91CF\u5185\u5B58\u7684\u8BA1\u7B97\u673A\u4E0A\u7684\u8F6C\u6362\u540E\u5907\u7F13\u51B2\u533A\uFF08TLB\uFF09\u67E5\u627E\u7684\u5F00\u9500\u3002 \u4F46\u662F\uFF0C\u5728\u542F\u7528THP\u7684\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u5E93\u5DE5\u4F5C\u8D1F\u8F7D\u901A\u5E38\u8868\u73B0\u4E0D\u4F73\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5F80\u5F80\u5177\u6709\u7A00\u758F\u800C\u4E0D\u662F\u8FDE\u7EED\u7684\u5185\u5B58\u8BBF\u95EE\u6A21\u5F0F\u3002\u5728Linux\u4E0A\u8FD0\u884CMongoDB\u65F6\uFF0C\u5E94\u7981\u7528THP\u4EE5\u83B7\u5F97\u6700\u4F73\u6027\u80FD</p></blockquote><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># ------ systemd\u7BA1\u7406\u7684\u7CFB\u7EDF</span></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA\u670D\u52A1:</span></span>
<span class="line"><span style="color:#DBD7CA;">$ vim /etc/systemd/system/disable-transparent-huge-pages.service</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Unit</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Description=Disable Transparent Huge Pages </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">THP</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">DefaultDependencies=no</span></span>
<span class="line"><span style="color:#DBD7CA;">After=sysinit.target local-fs.target</span></span>
<span class="line"><span style="color:#DBD7CA;">Before=mongod.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Service</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Type=oneshot</span></span>
<span class="line"><span style="color:#DBD7CA;">ExecStart=/bin/sh -c </span><span style="color:#C98A7D;">&#39;echo never | tee /sys/kernel/mm/transparent_hugepage/enabled &gt; /dev/null&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">Install</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">WantedBy=basic.target</span></span>
<span class="line"><span style="color:#758575;"># \u91CD\u8F7D\u670D\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo systemctl start disable-transparent-huge-pages</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo systemctl </span><span style="color:#E0A569;">enable</span><span style="color:#DBD7CA;"> disable-transparent-huge-pages</span></span>
<span class="line"><span style="color:#758575;"># \u68C0\u67E5\u662F\u5426\u5173\u95ED</span></span>
<span class="line"><span style="color:#DBD7CA;">cat /sys/kernel/mm/transparent_hugepage/enabled</span></span>
<span class="line"><span style="color:#DBD7CA;">always madvise </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">never</span><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># ------ systemd\u7BA1\u7406\u7684\u7CFB\u7EDF</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u670D\u52A1:</span></span>
<span class="line"><span style="color:#393A34;">$ vim /etc/systemd/system/disable-transparent-huge-pages.service</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Unit</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Description=Disable Transparent Huge Pages </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">THP</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">DefaultDependencies=no</span></span>
<span class="line"><span style="color:#393A34;">After=sysinit.target local-fs.target</span></span>
<span class="line"><span style="color:#393A34;">Before=mongod.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Service</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Type=oneshot</span></span>
<span class="line"><span style="color:#393A34;">ExecStart=/bin/sh -c </span><span style="color:#B56959;">&#39;echo never | tee /sys/kernel/mm/transparent_hugepage/enabled &gt; /dev/null&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">Install</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">WantedBy=basic.target</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u91CD\u8F7D\u670D\u52A1</span></span>
<span class="line"><span style="color:#393A34;">$ sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#393A34;">$ sudo systemctl start disable-transparent-huge-pages</span></span>
<span class="line"><span style="color:#393A34;">$ sudo systemctl </span><span style="color:#B58451;">enable</span><span style="color:#393A34;"> disable-transparent-huge-pages</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u68C0\u67E5\u662F\u5426\u5173\u95ED</span></span>
<span class="line"><span style="color:#393A34;">cat /sys/kernel/mm/transparent_hugepage/enabled</span></span>
<span class="line"><span style="color:#393A34;">always madvise </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">never</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u591A\u53C2\u8003: <a href="https://docs.mongodb.com/manual/tutorial/transparent-huge-pages/" target="_blank" rel="noopener noreferrer">https://docs.mongodb.com/manual/tutorial/transparent-huge-pages/</a></p><h3 id="\u4F7F\u7528\u73B0\u6210\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u8FDB\u884C\u5B89\u88C5" tabindex="-1">\u4F7F\u7528\u73B0\u6210\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u8FDB\u884C\u5B89\u88C5 <a class="header-anchor" href="#\u4F7F\u7528\u73B0\u6210\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u8FDB\u884C\u5B89\u88C5" aria-hidden="true">#</a></h3><p>Debian10 \u7CFB\u7EDF\u4E0B:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u670D\u52A1\u5668\u5305</span></span>
<span class="line"><span style="color:#DBD7CA;">$ wget https://repo.mongodb.org/apt/debian/dists/buster/mongodb-org/4.4/main/binary-amd64/mongodb-org-server_4.4.1_amd64.deb</span></span>
<span class="line"><span style="color:#758575;"># \u5BA2\u6237\u7AEFshell\u5305</span></span>
<span class="line"><span style="color:#DBD7CA;">$ wget https://repo.mongodb.org/apt/debian/dists/buster/mongodb-org/4.4/main/binary-amd64/mongodb-org-shell_4.4.1_amd64.deb</span></span>
<span class="line"><span style="color:#DBD7CA;">$ dpkg -i mongodb-org-s</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">.deb</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u670D\u52A1\u5668\u5305</span></span>
<span class="line"><span style="color:#393A34;">$ wget https://repo.mongodb.org/apt/debian/dists/buster/mongodb-org/4.4/main/binary-amd64/mongodb-org-server_4.4.1_amd64.deb</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5BA2\u6237\u7AEFshell\u5305</span></span>
<span class="line"><span style="color:#393A34;">$ wget https://repo.mongodb.org/apt/debian/dists/buster/mongodb-org/4.4/main/binary-amd64/mongodb-org-shell_4.4.1_amd64.deb</span></span>
<span class="line"><span style="color:#393A34;">$ dpkg -i mongodb-org-s</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">.deb</span></span>
<span class="line"></span></code></pre></div><p>\u2139\uFE0F \u4F7F\u7528\u5B89\u88C5\u5305\u5B89\u88C5\u7684 MongoDB \u9ED8\u8BA4\u6570\u636E\u6587\u4EF6\u5B58\u5728\u4E8E<code>/var/lib/mongodb</code>, \u9ED8\u8BA4\u65E5\u5FD7\u6587\u4EF6\u5B58\u5728\u4E8E<code>/var/log/mongodb</code>.</p><p>\u542F\u52A8 MongoDB :</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ sudo systemctl start mongod</span></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u62A5\u51FA Failed to start mongod.service: Unit mongod.service not found. \u9519\u8BEF, \u5219\u8FD0\u884C</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo systemctl daemon-reload</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ sudo systemctl start mongod</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u62A5\u51FA Failed to start mongod.service: Unit mongod.service not found. \u9519\u8BEF, \u5219\u8FD0\u884C</span></span>
<span class="line"><span style="color:#393A34;">$ sudo systemctl daemon-reload</span></span>
<span class="line"></span></code></pre></div><p>\u5176\u4ED6\u64CD\u4F5C\u7CFB\u7EDF\u5B89\u88C5\u53C2\u8003: <a href="https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials" target="_blank" rel="noopener noreferrer">https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials</a></p><h3 id="\u624B\u52A8\u5B89\u88C5" tabindex="-1">\u624B\u52A8\u5B89\u88C5 <a class="header-anchor" href="#\u624B\u52A8\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u4ECE <a href="https://www.mongodb.com/try/download/community?tck=docs_server" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/community?tck=docs_server</a> \u4E0B\u8F7D\u6307\u5B9Atar\u5305</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5B89\u88C5\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo apt-get install libcurl4 openssl liblzma5</span></span>
<span class="line"><span style="color:#DBD7CA;">tar -zxvf mongodb-linux-</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">-4.4.1.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">groupadd -g 800 mongod</span></span>
<span class="line"><span style="color:#DBD7CA;">useradd -u 801 -g mongod mongod</span></span>
<span class="line"><span style="color:#DBD7CA;">passwd mongod</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -pv /mongodb/{bin,conf,log,data}</span></span>
<span class="line"><span style="color:#DBD7CA;">chown -R mongod:mongod /mongodb</span></span>
<span class="line"><span style="color:#758575;"># \u521B\u5EFA\u8F6F\u8FDE\u63A5, \u65B9\u4FBF\u76F4\u63A5\u4F7F\u7528</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo ln -s  /path/to/the/mongodb-directory/bin/</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> /usr/local/bin/</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5\u4F9D\u8D56\u5305</span></span>
<span class="line"><span style="color:#393A34;">sudo apt-get install libcurl4 openssl liblzma5</span></span>
<span class="line"><span style="color:#393A34;">tar -zxvf mongodb-linux-</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">-4.4.1.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">groupadd -g 800 mongod</span></span>
<span class="line"><span style="color:#393A34;">useradd -u 801 -g mongod mongod</span></span>
<span class="line"><span style="color:#393A34;">passwd mongod</span></span>
<span class="line"><span style="color:#393A34;">mkdir -pv /mongodb/{bin,conf,log,data}</span></span>
<span class="line"><span style="color:#393A34;">chown -R mongod:mongod /mongodb</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u8F6F\u8FDE\u63A5, \u65B9\u4FBF\u76F4\u63A5\u4F7F\u7528</span></span>
<span class="line"><span style="color:#393A34;">sudo ln -s  /path/to/the/mongodb-directory/bin/</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> /usr/local/bin/</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C MongoDB:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mongod --dbpath /mongodb/data --logpath /mongodb/log/mongodb.log --port=27017 --logappend --fork</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mongod --dbpath /mongodb/data --logpath /mongodb/log/mongodb.log --port=27017 --logappend --fork</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>MongoDB documentations: <a href="https://docs.mongodb.com/manual/" target="_blank" rel="noopener noreferrer">https://docs.mongodb.com/manual/</a></li></ul>`,20),p=[e];function t(c,r,i,d,g,y){return n(),a("div",null,p)}var b=s(o,[["render",t]]);export{A as __pageData,b as default};
