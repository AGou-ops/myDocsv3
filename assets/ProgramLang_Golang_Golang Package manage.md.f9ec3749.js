import{_ as s,o as a,c as n,a as e}from"./app.1e6146c3.js";const h=JSON.parse('{"title":"Golang \u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"ProgramLang/Golang/Golang Package manage.md","lastUpdated":1657272051000}'),l={name:"ProgramLang/Golang/Golang Package manage.md"},p=e(`<h1 id="golang-\u5305" tabindex="-1">Golang \u5305 <a class="header-anchor" href="#golang-\u5305" aria-hidden="true">#</a></h1><ul><li><p>\u540D\u5B57\u662F\u4EE5 <strong>\u5927\u5199\u5B57\u6BCD</strong> \u5F00\u5934\u7684\uFF0C\u5C31\u662F\u53EF\u4EE5\u8F93\u51FA\u7684 variables\uFF0C\u53CD\u4E4B\uFF0C\u5C31\u662F\u5305\u79C1\u6709\u7684\uFF0C\u5176\u4ED6\u5305\u65E0\u6CD5\u5F15\u7528\u3002</p></li><li><p>\u5982\u679C\u6709\u4E9B\u5305\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0\u65E0\u6CD5\u6B63\u5E38\u8BBF\u95EE\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528<code>go mod edit</code>\u547D\u4EE4\u5C06\u5176\u66FF\u6362\uFF1B</p></li></ul><p>Example:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># Add a replace directive.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go mod edit -replace example.com/a@v1.0.0=./a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Remove a replace directive.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go mod edit -dropreplace example.com/a@v1.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Set the go version, add a requirement, and print the file</span></span>
<span class="line"><span style="color:#758575;"># instead of writing it to disk.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go mod edit -go=1.14 -require=example.com/m@v1.0.0 -print</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Format the go.mod file.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go mod edit -fmt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Format and print a different .mod file.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go mod edit -print tools.mod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Print a JSON representation of the go.mod file.</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go mod edit -json</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># Add a replace directive.</span></span>
<span class="line"><span style="color:#393A34;">$ go mod edit -replace example.com/a@v1.0.0=./a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Remove a replace directive.</span></span>
<span class="line"><span style="color:#393A34;">$ go mod edit -dropreplace example.com/a@v1.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Set the go version, add a requirement, and print the file</span></span>
<span class="line"><span style="color:#A0ADA0;"># instead of writing it to disk.</span></span>
<span class="line"><span style="color:#393A34;">$ go mod edit -go=1.14 -require=example.com/m@v1.0.0 -print</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Format the go.mod file.</span></span>
<span class="line"><span style="color:#393A34;">$ go mod edit -fmt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Format and print a different .mod file.</span></span>
<span class="line"><span style="color:#393A34;">$ go mod edit -print tools.mod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Print a JSON representation of the go.mod file.</span></span>
<span class="line"><span style="color:#393A34;">$ go mod edit -json</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B\u5305\u7684\u6240\u6709\u7248\u672C\uFF1A</li></ul><p>Example:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ go list -m all</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go list -m -versions example.com/m</span></span>
<span class="line"><span style="color:#DBD7CA;">$ go list -m -json example.com/m@latest</span></span>
<span class="line"><span style="color:#758575;"># \u540C\u65F6\u53EF\u4EE5\u7ED3\u5408git\u6765\u67E5\u770B\u8FDC\u7A0B\u7684\u7248\u672C\u53CA\u5206\u652F</span></span>
<span class="line"><span style="color:#DBD7CA;">$ git ls-remote --tags https://github.com/pkg/errors</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ go list -m all</span></span>
<span class="line"><span style="color:#393A34;">$ go list -m -versions example.com/m</span></span>
<span class="line"><span style="color:#393A34;">$ go list -m -json example.com/m@latest</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u540C\u65F6\u53EF\u4EE5\u7ED3\u5408git\u6765\u67E5\u770B\u8FDC\u7A0B\u7684\u7248\u672C\u53CA\u5206\u652F</span></span>
<span class="line"><span style="color:#393A34;">$ git ls-remote --tags https://github.com/pkg/errors</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5347\u7EA7\u9879\u76EE\u6240\u6709\u5305\uFF1A</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ go get -u ./...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ go get -u ./...</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>go-mod-edit: <a href="https://golang.org/ref/mod#go-mod-edit" target="_blank" rel="noopener noreferrer">https://golang.org/ref/mod#go-mod-edit</a></li><li>go list -m: <a href="https://golang.org/ref/mod#go-list-m" target="_blank" rel="noopener noreferrer">https://golang.org/ref/mod#go-list-m</a></li></ul>`,11),o=[p];function t(c,i,r,d,g,m){return a(),n("div",null,o)}var y=s(l,[["render",t]]);export{h as __pageData,y as default};
