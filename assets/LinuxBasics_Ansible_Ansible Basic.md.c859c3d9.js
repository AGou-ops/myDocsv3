import{_ as s,o as a,c as e,a as n}from"./app.1e6146c3.js";const y=JSON.parse('{"title":"Ansible Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"Ansible \u5B89\u88C5\u90E8\u7F72","slug":"ansible-\u5B89\u88C5\u90E8\u7F72"},{"level":3,"title":"\u7F16\u8BD1\u5B89\u88C5","slug":"\u7F16\u8BD1\u5B89\u88C5"},{"level":3,"title":"\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5(\u63A8\u8350)","slug":"\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5-\u63A8\u8350"},{"level":2,"title":"\u7A0B\u5E8F\u73AF\u5883","slug":"\u7A0B\u5E8F\u73AF\u5883"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Ansible/Ansible Basic.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Ansible/Ansible Basic.md"},p=n(`<h1 id="ansible-basic" tabindex="-1">Ansible Basic <a class="header-anchor" href="#ansible-basic" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Ansible \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u57FA\u4E8E OpenSSH \u7684\u81EA\u52A8\u5316\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177\u3002\u53EF\u4EE5\u7528\u5B83\u6765\u914D\u7F6E\u7CFB\u7EDF\u3001\u90E8\u7F72\u8F6F\u4EF6\u548C\u7F16\u6392\u66F4\u9AD8\u7EA7\u7684 IT \u4EFB\u52A1\uFF0C\u6BD4\u5982\u6301\u7EED\u90E8\u7F72\u6216\u96F6\u505C\u673A\u66F4\u65B0\u3002Ansible \u7684\u4E3B\u8981\u76EE\u6807\u662F\u7B80\u5355\u548C\u6613\u7528\uFF0C\u5E76\u4E14\u5B83\u8FD8\u9AD8\u5EA6\u5173\u6CE8\u5B89\u5168\u6027\u548C\u53EF\u9760\u6027\u3002\u57FA\u4E8E\u8FD9\u6837\u7684\u76EE\u6807\uFF0CAnsible \u9002\u7528\u4E8E\u5F00\u53D1\u4EBA\u5458\u3001\u7CFB\u7EDF\u7BA1\u7406\u5458\u3001\u53D1\u5E03\u5DE5\u7A0B\u5E08\u3001IT \u7ECF\u7406\uFF0C\u4EE5\u53CA\u4ECB\u4E8E\u4E24\u8005\u4E4B\u95F4\u7684\u6240\u6709\u4EBA\u3002Ansible \u9002\u5408\u7BA1\u7406\u51E0\u4E4E\u6240\u6709\u7684\u73AF\u5883\uFF0C\u4ECE\u62E5\u6709\u5C11\u6570\u5B9E\u4F8B\u7684\u5C0F\u578B\u73AF\u5883\u5230\u6709\u6570\u5343\u4E2A\u5B9E\u4F8B\u7684\u4F01\u4E1A\u73AF\u5883\u3002</p><p>\u4F7F\u7528 Ansible \u65E0\u987B\u5728\u88AB\u7BA1\u7406\u7684\u673A\u5668\u4E0A\u5B89\u88C5\u4EE3\u7406\uFF0C\u6240\u4EE5\u4E0D\u5B58\u5728\u5982\u4F55\u5347\u7EA7\u8FDC\u7A0B\u5B88\u62A4\u8FDB\u7A0B\u7684\u95EE\u9898\uFF0C\u4E5F\u4E0D\u5B58\u5728\u7531\u4E8E\u5378\u8F7D\u4E86\u5B88\u62A4\u8FDB\u7A0B\u800C\u65E0\u6CD5\u7BA1\u7406\u7CFB\u7EDF\u7684\u95EE\u9898\u3002</p><p>\u5B98\u65B9\u7AD9\u70B9: <a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">https://www.ansible.com/</a></p><p>\u5B98\u65B9GitHub\u4ED3\u5E93: <a href="https://github.com/ansible/ansible" target="_blank" rel="noopener noreferrer">https://github.com/ansible/ansible</a></p><p>Ansible \u67B6\u6784:</p><p><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--IdLVmgo1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/skvvt051gys64k62ez0h.png" alt=""></p><h2 id="ansible-\u5B89\u88C5\u90E8\u7F72" tabindex="-1">Ansible \u5B89\u88C5\u90E8\u7F72 <a class="header-anchor" href="#ansible-\u5B89\u88C5\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u4ECEgithub\u4ED3\u5E93\u5B89\u88C5\u6700\u65B0\u7248\u7684ansible:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ git clone https://github.com/ansible/ansible.git</span></span>
<span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> ./ansible</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ git clone https://github.com/ansible/ansible.git</span></span>
<span class="line"><span style="color:#393A34;">$ </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> ./ansible</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;"> ./hacking/env-setup</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ </span><span style="color:#B58451;">source</span><span style="color:#393A34;"> ./hacking/env-setup</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6CA1\u6709<code>pip</code>,\u5219\u9700\u8981\u5B89\u88C5<code>pip</code>\u7A0B\u5E8F\u5305</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py</span></span>
<span class="line"><span style="color:#DBD7CA;">$ python get-pip.py --user</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py</span></span>
<span class="line"><span style="color:#393A34;">$ python get-pip.py --user</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u6240\u9700\u7684\u4F9D\u8D56\u5305:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ pip install --user -r ./requirements.txt</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ pip install --user -r ./requirements.txt</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528<code>make rpm</code>\u5236\u4F5C\u5E76\u5B89\u88C5rpm\u5305:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ make rpm</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo rpm -Uvh ./rpm-build/ansible-</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;">.noarch.rpm</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ make rpm</span></span>
<span class="line"><span style="color:#393A34;">$ sudo rpm -Uvh ./rpm-build/ansible-</span><span style="color:#AB5959;">*</span><span style="color:#393A34;">.noarch.rpm</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u65B0\u672C\u5730 ansible \u4ED3\u5E93:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ git pull --rebase</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ git pull --rebase</span></span>
<span class="line"></span></code></pre></div><h3 id="\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5-\u63A8\u8350" tabindex="-1">\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5(\u63A8\u8350) <a class="header-anchor" href="#\u901A\u8FC7\u4ED3\u5E93\u5B89\u88C5-\u63A8\u8350" aria-hidden="true">#</a></h3><h4 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u76EE\u524Depel\u4ED3\u5E93\u6700\u65B0\u7248\u672C\u4E3A 2.9.6</span></span>
<span class="line"><span style="color:#DBD7CA;">yum install ansible -y</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u76EE\u524Depel\u4ED3\u5E93\u6700\u65B0\u7248\u672C\u4E3A 2.9.6</span></span>
<span class="line"><span style="color:#393A34;">yum install ansible -y</span></span>
<span class="line"></span></code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\u7684\u662F: <code>ansible</code>\u5C5E\u4E8E<code>epel</code>\u4ED3\u5E93, \u5982\u679C\u6CA1\u6709<code>epel</code>, \u9700\u8981\u63D0\u524D\u5B89\u88C5. <code>yum install -y epel-release</code></p><h4 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ sudo apt update</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo apt install software-properties-common</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo apt-add-repository --yes --update ppa:ansible/ansible</span></span>
<span class="line"><span style="color:#DBD7CA;">$ sudo apt install ansible</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ sudo apt update</span></span>
<span class="line"><span style="color:#393A34;">$ sudo apt install software-properties-common</span></span>
<span class="line"><span style="color:#393A34;">$ sudo apt-add-repository --yes --update ppa:ansible/ansible</span></span>
<span class="line"><span style="color:#393A34;">$ sudo apt install ansible</span></span>
<span class="line"></span></code></pre></div><h4 id="pip" tabindex="-1">pip <a class="header-anchor" href="#pip" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ pip install --user ansible</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ pip install --user ansible</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7A0B\u5E8F\u73AF\u5883" tabindex="-1">\u7A0B\u5E8F\u73AF\u5883 <a class="header-anchor" href="#\u7A0B\u5E8F\u73AF\u5883" aria-hidden="true">#</a></h2><p>\u5E38\u7528\u547D\u4EE4\u884C\u5DE5\u5177:</p><ul><li><code>ansible</code> : \u4E3B\u7A0B\u5E8F</li><li><code>ansible-doc</code> : ansible \u6587\u6863 <ul><li><code>-l</code>: \u5217\u51FA\u6240\u6709\u6A21\u5757</li><li><code>&lt;Module_Name&gt; -s</code>: \u5217\u51FA\u6307\u5B9A\u6A21\u5757\u7684\u9009\u9879</li></ul></li><li><code>ansible-playbook</code> : \u5267\u672C\u5DE5\u5177</li></ul><p>\u914D\u7F6E\u6587\u4EF6:</p><ul><li><code>/etc/ansible/ansible.cfg</code>: \u4E3B\u914D\u7F6E\u6587\u4EF6</li><li><code>/etc/ansible/hosts</code> : \u4E3B\u673A\u914D\u7F6E\u6587\u4EF6</li><li><code>/etc/ansible/roles</code>: \u89D2\u8272\u914D\u7F6E\u6587\u4EF6</li></ul><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Ansible Installation : <a href="https://docs.ansible.com/ansible/latest/installation_guide" target="_blank" rel="noopener noreferrer">https://docs.ansible.com/ansible/latest/installation_guide</a></li><li>Ansible Documentation : <a href="https://docs.ansible.com/ansible/latest/index.html" target="_blank" rel="noopener noreferrer">https://docs.ansible.com/ansible/latest/index.html</a></li></ul>`,37),c=[p];function i(o,t,r,d,h,b){return a(),e("div",null,c)}var g=s(l,[["render",i]]);export{y as __pageData,g as default};