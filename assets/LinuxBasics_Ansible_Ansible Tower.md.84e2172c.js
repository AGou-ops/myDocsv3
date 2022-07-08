import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Ansible Tower","description":"","frontmatter":{},"headers":[{"level":2,"title":"Tower \u5B89\u88C5\u4E0E\u7834\u89E3","slug":"tower-\u5B89\u88C5\u4E0E\u7834\u89E3"},{"level":2,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Ansible/Ansible Tower.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Ansible/Ansible Tower.md"},e=l(`<h1 id="ansible-tower" tabindex="-1">Ansible Tower <a class="header-anchor" href="#ansible-tower" aria-hidden="true">#</a></h1><h2 id="tower-\u5B89\u88C5\u4E0E\u7834\u89E3" tabindex="-1">Tower \u5B89\u88C5\u4E0E\u7834\u89E3 <a class="header-anchor" href="#tower-\u5B89\u88C5\u4E0E\u7834\u89E3" aria-hidden="true">#</a></h2><ol><li>\u4ECE\u5B98\u65B9\u4ED3\u5E93\u83B7\u53D6\u5B89\u88C5\u5305\u5E76\u89E3\u538B</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">wget https://releases.ansible.com/ansible-tower/setup-bundle/ansible-tower-setup-bundle-3.6.2-1.el7.tar.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">tar xf ansible-tower-setup-bundle-3.6.2-1.el7.tar.gz</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">wget https://releases.ansible.com/ansible-tower/setup-bundle/ansible-tower-setup-bundle-3.6.2-1.el7.tar.gz</span></span>
<span class="line"><span style="color:#393A34;">tar xf ansible-tower-setup-bundle-3.6.2-1.el7.tar.gz</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u7F16\u8F91\u4E3B\u673A<code>inventory</code>\u6E05\u5355\u6587\u4EF6</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> ansible-tower-setup-bundle-3.6.2-1/</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master ansible-tower-setup-bundle-3.6.2-1</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> vim inventory</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># \u586B\u5199\u5FC5\u8981\u7684\u8D26\u53F7\u5BC6\u7801</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">all:vars</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">admin_password=</span><span style="color:#C98A7D;">&#39;admin&#39;</span><span style="color:#DBD7CA;">	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">pg_password=</span><span style="color:#C98A7D;">&#39;admin&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rabbitmq_username=admin</span></span>
<span class="line"><span style="color:#DBD7CA;">rabbitmq_password=</span><span style="color:#C98A7D;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> ansible-tower-setup-bundle-3.6.2-1/</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master ansible-tower-setup-bundle-3.6.2-1</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> vim inventory</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u586B\u5199\u5FC5\u8981\u7684\u8D26\u53F7\u5BC6\u7801</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">all:vars</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">admin_password=</span><span style="color:#B56959;">&#39;admin&#39;</span><span style="color:#393A34;">	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">pg_password=</span><span style="color:#B56959;">&#39;admin&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rabbitmq_username=admin</span></span>
<span class="line"><span style="color:#393A34;">rabbitmq_password=</span><span style="color:#B56959;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li><p>\u6267\u884C\u5B89\u88C5\u811A\u672C<code>./setup.sh</code></p></li><li><p>\u5B89\u88C5\u5B8C\u540E\u8BBF\u95EE\u6D4B\u8BD5: \`\`</p></li><li><p><code>Ansible-Tower</code>\u7834\u89E3:</p></li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> /var/lib/awx/venv/awx/lib/python3.6/site-packages/tower_license</span></span>
<span class="line"><span style="color:#758575;"># \u5B89\u88C5pip</span></span>
<span class="line"><span style="color:#DBD7CA;">wget https://bootstrap.pypa.io/get-pip.py</span></span>
<span class="line"><span style="color:#DBD7CA;">python get-pip.py</span></span>
<span class="line"><span style="color:#DBD7CA;">pip install uncompyle6</span></span>
<span class="line"><span style="color:#758575;"># \u53CD\u6C47\u7F16init.pyc</span></span>
<span class="line"><span style="color:#DBD7CA;">uncompyle6 __init__.pyc </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;">__init__.py</span></span>
<span class="line"><span style="color:#758575;"># -----------------  \u4FEE\u6539__init__.py\u6587\u4EF6  -----------------</span></span>
<span class="line"><span style="color:#DBD7CA;">    def _check_cloudforms_subscription</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">self</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> True    </span><span style="color:#758575;">#\u6DFB\u52A0\u8FD9\u4E00\u884C</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> os.path.exists</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;/var/lib/awx/i18n.db&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> True</span></span>
<span class="line"><span style="color:#DBD7CA;">        else:</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> os.path.isdir</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;/opt/rh/cfme-appliance&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> os.path.isdir</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;/opt/rh/cfme-gemset&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">                    pass</span></span>
<span class="line"><span style="color:#DBD7CA;">            try:</span></span>
<span class="line"><span style="color:#DBD7CA;">                has_rpms = subprocess.call</span><span style="color:#858585;">([</span><span style="color:#C98A7D;">&#39;rpm&#39;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&#39;--quiet&#39;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&#39;-q&#39;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&#39;cfme&#39;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&#39;cfme-appliance&#39;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&#39;cfme-gemset&#39;</span><span style="color:#858585;">])</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> has_rpms == 0:</span></span>
<span class="line"><span style="color:#DBD7CA;">                    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> True</span></span>
<span class="line"><span style="color:#DBD7CA;">            except OSError:</span></span>
<span class="line"><span style="color:#DBD7CA;">                pass</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> False</span></span>
<span class="line"><span style="color:#DBD7CA;">....</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#758575;">#\u4FEE\u6539&quot;license_date=253370764800L&quot; \u4E3A &quot;license_date=253370764800&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    def _generate_cloudforms_subscription</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">self</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">        self._attrs.update</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">dict</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">company_name=</span><span style="color:#C98A7D;">&#39;Red Hat CloudForms License&#39;</span><span style="color:#DBD7CA;">, instance_count=MAX_INSTANCES,</span></span>
<span class="line"><span style="color:#DBD7CA;">          license_date=253370764800,  </span><span style="color:#758575;">#\u4FEE\u6539</span></span>
<span class="line"><span style="color:#DBD7CA;">          license_key=</span><span style="color:#C98A7D;">&#39;xxxx&#39;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">          license_type=</span><span style="color:#C98A7D;">&#39;enterprise&#39;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">          subscription_name=</span><span style="color:#C98A7D;">&#39;Red Hat CloudForms License&#39;</span><span style="color:#858585;">))</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#758575;"># ---------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539\u5B8C\u91CD\u65B0\u7F16\u8BD1\u4E00\u4E0B</span></span>
<span class="line"><span style="color:#DBD7CA;">python -m py_compile __init__.py</span></span>
<span class="line"><span style="color:#DBD7CA;">python -O -m py_compile __init__.py</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> /var/lib/awx/venv/awx/lib/python3.6/site-packages/tower_license</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B89\u88C5pip</span></span>
<span class="line"><span style="color:#393A34;">wget https://bootstrap.pypa.io/get-pip.py</span></span>
<span class="line"><span style="color:#393A34;">python get-pip.py</span></span>
<span class="line"><span style="color:#393A34;">pip install uncompyle6</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53CD\u6C47\u7F16init.pyc</span></span>
<span class="line"><span style="color:#393A34;">uncompyle6 __init__.pyc </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;">__init__.py</span></span>
<span class="line"><span style="color:#A0ADA0;"># -----------------  \u4FEE\u6539__init__.py\u6587\u4EF6  -----------------</span></span>
<span class="line"><span style="color:#393A34;">    def _check_cloudforms_subscription</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">self</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">:</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> True    </span><span style="color:#A0ADA0;">#\u6DFB\u52A0\u8FD9\u4E00\u884C</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> os.path.exists</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;/var/lib/awx/i18n.db&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> True</span></span>
<span class="line"><span style="color:#393A34;">        else:</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> os.path.isdir</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;/opt/rh/cfme-appliance&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">:</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> os.path.isdir</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;/opt/rh/cfme-gemset&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">:</span></span>
<span class="line"><span style="color:#393A34;">                    pass</span></span>
<span class="line"><span style="color:#393A34;">            try:</span></span>
<span class="line"><span style="color:#393A34;">                has_rpms = subprocess.call</span><span style="color:#8E8F8B;">([</span><span style="color:#B56959;">&#39;rpm&#39;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&#39;--quiet&#39;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&#39;-q&#39;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&#39;cfme&#39;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&#39;cfme-appliance&#39;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&#39;cfme-gemset&#39;</span><span style="color:#8E8F8B;">])</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> has_rpms == 0:</span></span>
<span class="line"><span style="color:#393A34;">                    </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> True</span></span>
<span class="line"><span style="color:#393A34;">            except OSError:</span></span>
<span class="line"><span style="color:#393A34;">                pass</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> False</span></span>
<span class="line"><span style="color:#393A34;">....</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;">#\u4FEE\u6539&quot;license_date=253370764800L&quot; \u4E3A &quot;license_date=253370764800&quot;</span></span>
<span class="line"><span style="color:#393A34;">    def _generate_cloudforms_subscription</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">self</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">:</span></span>
<span class="line"><span style="color:#393A34;">        self._attrs.update</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">dict</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">company_name=</span><span style="color:#B56959;">&#39;Red Hat CloudForms License&#39;</span><span style="color:#393A34;">, instance_count=MAX_INSTANCES,</span></span>
<span class="line"><span style="color:#393A34;">          license_date=253370764800,  </span><span style="color:#A0ADA0;">#\u4FEE\u6539</span></span>
<span class="line"><span style="color:#393A34;">          license_key=</span><span style="color:#B56959;">&#39;xxxx&#39;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">          license_type=</span><span style="color:#B56959;">&#39;enterprise&#39;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">          subscription_name=</span><span style="color:#B56959;">&#39;Red Hat CloudForms License&#39;</span><span style="color:#8E8F8B;">))</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#A0ADA0;"># ---------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u5B8C\u91CD\u65B0\u7F16\u8BD1\u4E00\u4E0B</span></span>
<span class="line"><span style="color:#393A34;">python -m py_compile __init__.py</span></span>
<span class="line"><span style="color:#393A34;">python -O -m py_compile __init__.py</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u91CD\u542F\u670D\u52A1, <code>ansible-tower-service restart</code></li></ol><h2 id="\u6D4B\u8BD5" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a></h2><p>Ansible Tower\u7684playbook\u9ED8\u8BA4\u5B58\u5728 <code>/var/lib/awx/projects/</code></p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Ansible-Tower \u914D\u7F6E\u8981\u6C42 : <a href="https://docs.ansible.com/ansible-tower/3.0/html/installandreference/requirements_refguide.html" target="_blank" rel="noopener noreferrer">https://docs.ansible.com/ansible-tower/3.0/html/installandreference/requirements_refguide.html</a></li></ul>`,13),o=[e];function c(t,r,i,y,A,D){return n(),a("div",null,o)}var _=s(p,[["render",c]]);export{B as __pageData,_ as default};
