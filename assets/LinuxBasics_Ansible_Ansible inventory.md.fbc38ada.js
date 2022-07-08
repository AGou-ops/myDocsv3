import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const A=JSON.parse('{"title":"Ansible \u6E05\u5355\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9644\u5F55: Ansible \u5185\u7F6E\u53D8\u91CF","slug":"\u9644\u5F55-ansible-\u5185\u7F6E\u53D8\u91CF"}],"relativePath":"LinuxBasics/Ansible/Ansible inventory.md","lastUpdated":1657272051000}'),t={name:"LinuxBasics/Ansible/Ansible inventory.md"},e=l(`<h1 id="ansible-\u6E05\u5355\u7BA1\u7406" tabindex="-1">Ansible \u6E05\u5355\u7BA1\u7406 <a class="header-anchor" href="#ansible-\u6E05\u5355\u7BA1\u7406" aria-hidden="true">#</a></h1><div class="language-ini"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">test1</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">A[1:4].agou-ops.top </span><span style="color:#4D9375;">ansible_ssh_pass</span><span style="color:#858585;">=</span><span style="color:#C98A7D;">&#39;suofeiya&#39;</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">test2</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">B.agou-ops.top</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">test:children</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">test1</span></span>
<span class="line"><span style="color:#DBD7CA;">test2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">test</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">test[1:4].agou-ops.top</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">test:vars</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#4D9375;">ansible_ssh_pass</span><span style="color:#858585;">=</span><span style="color:#C98A7D;">&#39;suofeiya&#39;</span></span>
<span class="line"><span style="color:#758575;"># yaml\u8BED\u6CD5\u5982\u4E0B</span></span>
<span class="line"><span style="color:#DBD7CA;">all:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0hosts:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0\xA0\xA010.1.1.61:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0children:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0\xA0\xA0test1:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0\xA0\xA0\xA0\xA0hosts:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA010.1.1.60:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0\xA0\xA0test2:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0\xA0\xA0\xA0\xA0hosts:</span></span>
<span class="line"><span style="color:#DBD7CA;">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA010.1.1.70:</span></span>
<span class="line"><span style="color:#758575;"># \u5BF9\u5E94ini\u683C\u5F0F</span></span>
<span class="line"><span style="color:#DBD7CA;">10.1.1.61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">test1</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">10.1.1.60</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">test2</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">10.1.1.70</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">test1</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">A[1:4].agou-ops.top </span><span style="color:#1C6B48;">ansible_ssh_pass</span><span style="color:#8E8F8B;">=</span><span style="color:#B56959;">&#39;suofeiya&#39;</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">test2</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">B.agou-ops.top</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">test:children</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">test1</span></span>
<span class="line"><span style="color:#393A34;">test2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">test</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">test[1:4].agou-ops.top</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">test:vars</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#1C6B48;">ansible_ssh_pass</span><span style="color:#8E8F8B;">=</span><span style="color:#B56959;">&#39;suofeiya&#39;</span></span>
<span class="line"><span style="color:#A0ADA0;"># yaml\u8BED\u6CD5\u5982\u4E0B</span></span>
<span class="line"><span style="color:#393A34;">all:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0hosts:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0\xA0\xA010.1.1.61:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0children:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0\xA0\xA0test1:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0\xA0\xA0\xA0\xA0hosts:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA010.1.1.60:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0\xA0\xA0test2:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0\xA0\xA0\xA0\xA0hosts:</span></span>
<span class="line"><span style="color:#393A34;">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA010.1.1.70:</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5BF9\u5E94ini\u683C\u5F0F</span></span>
<span class="line"><span style="color:#393A34;">10.1.1.61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">test1</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">10.1.1.60</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">test2</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">10.1.1.70</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9644\u5F55-ansible-\u5185\u7F6E\u53D8\u91CF" tabindex="-1">\u9644\u5F55: Ansible \u5185\u7F6E\u53D8\u91CF <a class="header-anchor" href="#\u9644\u5F55-ansible-\u5185\u7F6E\u53D8\u91CF" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7528\u9014</th><th style="text-align:left;">\u4F8B\u5B50</th></tr></thead><tbody><tr><td style="text-align:left;">ansible_ssh_host</td><td style="text-align:left;">\u5B9A\u4E49hosts ssh\u5730\u5740</td><td style="text-align:left;">ansible_ssh_host=192.168.6.240</td></tr><tr><td style="text-align:left;">ansible_ssh_port</td><td style="text-align:left;">\u5B9A\u4E49hosts ssh\u7AEF\u53E3</td><td style="text-align:left;">ansible_ssh_port=52113</td></tr><tr><td style="text-align:left;">ansible_ssh_user</td><td style="text-align:left;">\u5B9A\u4E49hosts ssh\u8BA4\u8BC1\u7528\u6237</td><td style="text-align:left;">ansible_ssh_user=user</td></tr><tr><td style="text-align:left;">ansible_ssh_pass</td><td style="text-align:left;">\u5B9A\u4E49hosts ssh\u8BA4\u8BC1\u5BC6\u7801</td><td style="text-align:left;">ansible_ssh_pass=pass</td></tr><tr><td style="text-align:left;">ansible_sudo</td><td style="text-align:left;">\u5B9A\u4E49hosts sudo\u7528\u6237</td><td style="text-align:left;">ansible_sudo=www</td></tr><tr><td style="text-align:left;">ansible_sudo_pass</td><td style="text-align:left;">\u5B9A\u4E49hosts sudo\u5BC6\u7801</td><td style="text-align:left;">ansible_sudo_pass=pass</td></tr><tr><td style="text-align:left;">ansible_sudo_exe</td><td style="text-align:left;">\u5B9A\u4E49hosts sudo\u8DEF\u5F84</td><td style="text-align:left;">ansible_sudo_exe=/usr/bin/sudo</td></tr><tr><td style="text-align:left;">ansible_connection</td><td style="text-align:left;">\u5B9A\u4E49hosts \u8FDE\u63A5\u65B9\u5F0F</td><td style="text-align:left;">ansible_connection=local</td></tr><tr><td style="text-align:left;">ansible_ssh_private_key_file</td><td style="text-align:left;">\u5B9A\u4E49hosts \u79C1\u94A5</td><td style="text-align:left;">ansible_ssh_private_key_file=/root/key</td></tr><tr><td style="text-align:left;">ansible_ssh_shell_type</td><td style="text-align:left;">\u5B9A\u4E49hosts shell\u7C7B\u578B</td><td style="text-align:left;">ansible_ssh_shell_type=bash</td></tr><tr><td style="text-align:left;">ansible_python_interpreter</td><td style="text-align:left;">\u5B9A\u4E49hosts \u4EFB\u52A1\u6267\u884Cpython\u8DEF\u5F84</td><td style="text-align:left;">ansible_python_interpreter=/usr/bin/python2.7</td></tr><tr><td style="text-align:left;">ansible_*_interpreter</td><td style="text-align:left;">\u5B9A\u4E49hosts \u5176\u4ED6\u8BED\u8A00\u89E3\u6790\u8DEF\u5F84</td><td style="text-align:left;">ansible_*_interpreter=/usr/bin/ruby</td></tr></tbody></table>`,4),p=[e];function o(c,i,r,y,d,_){return n(),a("div",null,p)}var f=s(t,[["render",o]]);export{A as __pageData,f as default};
