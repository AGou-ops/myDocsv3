import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const h=JSON.parse('{"title":"useful command","description":"","frontmatter":{},"headers":[],"relativePath":"LinuxBasics/Shell/command.md","lastUpdated":1657272051000}'),o={name:"LinuxBasics/Shell/command.md"},p=l(`<h1 id="useful-command" tabindex="-1">useful command <a class="header-anchor" href="#useful-command" aria-hidden="true">#</a></h1><ul><li><code>getent</code>: \u7528\u6765\u67E5\u770B\u7CFB\u7EDF\u7684\u6570\u636E\u5E93\u4E2D\u7684\u76F8\u5173\u8BB0\u5F55\u3002</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u83B7\u53D6\u4E3B\u673Aip</span></span>
<span class="line"><span style="color:#DBD7CA;">getent hosts baidu.com </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> awk </span><span style="color:#C98A7D;">&#39;{print $1}&#39;</span></span>
<span class="line"><span style="color:#758575;"># \u83B7\u53D6\u7528\u6237\u5BB6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">getent passwd </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">UID&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> awk -F</span><span style="color:#C98A7D;">&quot;:&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;{print $6}&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u4E3B\u673Aip</span></span>
<span class="line"><span style="color:#393A34;">getent hosts baidu.com </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> awk </span><span style="color:#B56959;">&#39;{print $1}&#39;</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u7528\u6237\u5BB6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">getent passwd </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">UID&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> awk -F</span><span style="color:#B56959;">&quot;:&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;{print $6}&#39;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>lshw</code>: \u67E5\u770B\u4E3B\u673A\u786C\u4EF6\u4FE1\u606F\u3002</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5217\u51FA\u4E3B\u673A\u78C1\u76D8\u4FE1\u606F, \u53C2\u6570-short\u7B80\u7565\u8F93\u51FA, -C\u6307\u5B9A\u67E5\u8BE2\u7C7B\u578B</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo lshw -short -C disk</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo lshw -C storage</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo lshw -C cpu</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo lshw -C network</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5217\u51FA\u4E3B\u673A\u78C1\u76D8\u4FE1\u606F, \u53C2\u6570-short\u7B80\u7565\u8F93\u51FA, -C\u6307\u5B9A\u67E5\u8BE2\u7C7B\u578B</span></span>
<span class="line"><span style="color:#393A34;">sudo lshw -short -C disk</span></span>
<span class="line"><span style="color:#393A34;">sudo lshw -C storage</span></span>
<span class="line"><span style="color:#393A34;">sudo lshw -C cpu</span></span>
<span class="line"><span style="color:#393A34;">sudo lshw -C network</span></span>
<span class="line"></span></code></pre></div><ul><li><p><code>chattr u+i &lt;FILE&gt;</code>\u4E0D\u53EF\u4FEE\u6539\u6743\u9650/<code>chattr u+a &lt;FILE&gt;</code>\u8D4B\u4E88\u53EA\u53EF\u8FFD\u52A0\u6743\u9650, \u4E14\u4E0D\u80FD\u901A\u8FC7\u7F16\u8F91\u5668\u8FFD\u52A0, \u4F7F\u7528<code>lsattr &lt;FILE&gt;</code>\u6765\u67E5\u770B.</p></li><li><p><code>chmod ug+x &lt;FILE&gt;</code></p></li><li><p><code>auditd</code>: \u7528\u4E8Elinux\u7CFB\u7EDF\u6587\u4EF6\u5BA1\u8BA1.</p></li><li><p><code>umask -S</code>: \u5217\u51FA\u5F53\u524D\u76EE\u5F55\u7684umask\u4FE1\u606F, \u4F7F\u7528rwx\u7B26\u53F7\u8868\u793A, \u4E0D\u52A0<code>-S</code>\u9009\u9879\u5219\u7528\u6570\u5B57\u4EE3\u53F7\u8868\u793A, \u5BF9\u4E8E\u6587\u4EF6, \u5176\u6EE1\u6743\u9650\u662F<code>666</code>, \u800C\u5BF9\u4E8E\u6587\u4EF6\u5939, \u6EE1\u6743\u9650\u662F<code>777</code>, \u9ED8\u8BA4<code>umask</code>\u503C\u4E3A<code>022</code>.</p></li><li><p><code>timeout 10 sh -c &#39;ls -lt&#39;</code>: \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4.</p></li></ul>`,6),e=[p];function c(t,r,d,i,u,y){return a(),n("div",null,e)}var D=s(o,[["render",c]]);export{h as __pageData,D as default};
