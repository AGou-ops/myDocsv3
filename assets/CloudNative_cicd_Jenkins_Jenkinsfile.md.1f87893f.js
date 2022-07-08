import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const d=JSON.parse('{"title":"pipeline - Jenkinsfile","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u9009\u9879\u8BF4\u660E","slug":"\u5E38\u7528\u9009\u9879\u8BF4\u660E"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/cicd/Jenkins/Jenkinsfile.md","lastUpdated":1657272051000}'),p={name:"CloudNative/cicd/Jenkins/Jenkinsfile.md"},e=l(`<h1 id="pipeline-jenkinsfile" tabindex="-1">pipeline - Jenkinsfile <a class="header-anchor" href="#pipeline-jenkinsfile" aria-hidden="true">#</a></h1><p>\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u5F00\u59CB:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">pipeline </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    agent any</span></span>
<span class="line"><span style="color:#DBD7CA;">    stages </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        stage</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;Example&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            steps </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">pipeline </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    agent any</span></span>
<span class="line"><span style="color:#393A34;">    stages </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        stage</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;Example&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            steps </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5E38\u7528\u9009\u9879\u8BF4\u660E" tabindex="-1">\u5E38\u7528\u9009\u9879\u8BF4\u660E <a class="header-anchor" href="#\u5E38\u7528\u9009\u9879\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">pipeline </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    agent any</span></span>
<span class="line"><span style="color:#DBD7CA;">    environment </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> 		// \u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">        CC = </span><span style="color:#C98A7D;">&#39;clang&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    stages </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        stage</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;Example&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            environment </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">                AN_ACCESS_KEY = credentials</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;my-prefined-secret-text&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> 		// \u5C40\u90E8\u53D8\u91CF</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">            steps </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">                sh </span><span style="color:#C98A7D;">&#39;printenv&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">pipeline </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    agent any</span></span>
<span class="line"><span style="color:#393A34;">    environment </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> 		// \u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#393A34;">        CC = </span><span style="color:#B56959;">&#39;clang&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    stages </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        stage</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;Example&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            environment </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">                AN_ACCESS_KEY = credentials</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;my-prefined-secret-text&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> 		// \u5C40\u90E8\u53D8\u91CF</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">            steps </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">                sh </span><span style="color:#B56959;">&#39;printenv&#39;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>groovy documentation: <a href="http://groovy-lang.org/semantics.html" target="_blank" rel="noopener noreferrer">http://groovy-lang.org/semantics.html</a></li><li>pipeline syntax: <a href="https://www.jenkins.io/zh/doc/book/pipeline/syntax/" target="_blank" rel="noopener noreferrer">https://www.jenkins.io/zh/doc/book/pipeline/syntax/</a></li></ul>`,7),o=[e];function c(t,r,i,y,A,D){return n(),a("div",null,o)}var C=s(p,[["render",c]]);export{d as __pageData,C as default};
