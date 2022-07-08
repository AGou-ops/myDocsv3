import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const m=JSON.parse('{"title":"Helm/GO Template","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"CloudNative/k8s/Helm/Helm\uFF08Go\uFF09template.md","lastUpdated":1657272051000}'),e={name:"CloudNative/k8s/Helm/Helm\uFF08Go\uFF09template.md"},p=l(`<h1 id="helm-go-template" tabindex="-1">Helm/GO Template <a class="header-anchor" href="#helm-go-template" aria-hidden="true">#</a></h1><ul><li><p><code>\u3010\u3010 quote .Values.favorite.drink \u3011\u3011</code>: \u4F7F\u7528<code>quote</code>\u51FD\u6570\u6765\u4E3A\u5B57\u7B26\u4E32\u6DFB\u52A0\u53CC\u5F15\u53F7\uFF1A \u7B49\u4EF7\u4E8E<code>\u3010\u3010 .Values.favorite.drink | quote \u3011\u3011</code>;</p></li><li><p><code>\u3010\u3010 .Values.foo | upper | quote \u3011\u3011</code>: \u4F7F\u7528<code>upper</code>\u51FD\u6570\u5C06\u5B57\u7B26\u4E32\u5168\u90E8\u5927\u5199\u5E76\u6DFB\u52A0\u53CC\u5F15\u53F7.</p></li><li><p><code>\u3010\u3010- \u3011\u3011</code>\u6216\u8005<code>\u3010\u3010 -\u3011\u3011</code>\u7528\u4E8E\u6D88\u9664\u591A\u4F59\u7A7A\u683C\uFF1A <code>-</code>\u5728\u5DE6\u8FB9\u5373\u6D88\u9664\u5DE6\u8FB9\u7684\u7A7A\u683C\uFF1A \u5728\u53F3\u8FB9\u5373\u6D88\u9664\u53F3\u8FB9\u7684\u7A7A\u683C;</p></li><li><p><code>\u3010\u3010 .Values.foo | indent2 \u3011\u3011</code>: \u4F7F\u7528<code>indent</code>\u51FD\u6570\u6765\u6DFB\u52A0\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB;</p></li><li><p><code>\u3010\u3010 .Value.foo | title \u3011\u3011</code>: \u7528\u4E8E\u5927\u5199\u9996\u5B57\u6BCD;</p></li><li><p><code>\u3010\u3010 .Value.foo | default &quot;bar&quot; \u3011\u3011</code>: \u7528\u4E8E\u7ED9\u4E88\u53D8\u91CF\u9ED8\u8BA4\u503C\uFF1B</p></li><li></li><li><p>\u6D41\u7A0B\u63A7\u5236 \uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"></span></code></pre></div></li></ul><p>\u3010\u3010 if PIPELINE \u3011\u3011</p><h1 id="do-something" tabindex="-1">Do something <a class="header-anchor" href="#do-something" aria-hidden="true">#</a></h1><p>\u3010\u3010 else if OTHER PIPELINE \u3011\u3011</p><h1 id="do-something-else" tabindex="-1">Do something else <a class="header-anchor" href="#do-something-else" aria-hidden="true">#</a></h1><p>\u3010\u3010 else \u3011\u3011</p><h1 id="default-case" tabindex="-1">Default case <a class="header-anchor" href="#default-case" aria-hidden="true">#</a></h1><p>\u3010\u3010 end \u3011\u3011</p><h1 id="\u4F7F\u7528\u8303\u4F8B\uFF0C\u5982\u679C\u67D0\u4E2Akey\u5BF9\u5E94\u7684value\u4E0E\u7279\u5B9A\u7684value\u76F8\u7B49\uFF0C\u5219mug\u4E3Atrue" tabindex="-1">\u4F7F\u7528\u8303\u4F8B\uFF0C\u5982\u679C\u67D0\u4E2Akey\u5BF9\u5E94\u7684value\u4E0E\u7279\u5B9A\u7684value\u76F8\u7B49\uFF0C\u5219mug\u4E3Atrue <a class="header-anchor" href="#\u4F7F\u7528\u8303\u4F8B\uFF0C\u5982\u679C\u67D0\u4E2Akey\u5BF9\u5E94\u7684value\u4E0E\u7279\u5B9A\u7684value\u76F8\u7B49\uFF0C\u5219mug\u4E3Atrue" aria-hidden="true">#</a></h1><p>\u3010\u3010 if eq .Values.favorite.drink &quot;coffee&quot; \u3011\u3011mug: true\u3010\u3010 end \u3011\u3011</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">- \`with\`:\u6539\u53D8\u5F53\u524D\u4F5C\u7528\u57DF(.)\uFF1A</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">\`\`\`yaml</span></span>
<span class="line"><span style="color:#dbd7ca;"># \u4F7F\u7528with\u53EF\u4EE5\u7B80\u5316\u53D8\u91CF\u5F15\u7528</span></span>
<span class="line"><span style="color:#dbd7ca;">\u3010\u3010- with .Values.favorite \u3011\u3011</span></span>
<span class="line"><span style="color:#dbd7ca;">drink: \u3010\u3010 .drink | default &quot;tea&quot; | quote \u3011\u3011</span></span>
<span class="line"><span style="color:#dbd7ca;">food: \u3010\u3010 .food | upper | quote \u3011\u3011</span></span>
<span class="line"><span style="color:#dbd7ca;">\u3010\u3010- end \u3011\u3011</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">- \`with\`:\u6539\u53D8\u5F53\u524D\u4F5C\u7528\u57DF(.)\uFF1A</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">\`\`\`yaml</span></span>
<span class="line"><span style="color:#393a34;"># \u4F7F\u7528with\u53EF\u4EE5\u7B80\u5316\u53D8\u91CF\u5F15\u7528</span></span>
<span class="line"><span style="color:#393a34;">\u3010\u3010- with .Values.favorite \u3011\u3011</span></span>
<span class="line"><span style="color:#393a34;">drink: \u3010\u3010 .drink | default &quot;tea&quot; | quote \u3011\u3011</span></span>
<span class="line"><span style="color:#393a34;">food: \u3010\u3010 .food | upper | quote \u3011\u3011</span></span>
<span class="line"><span style="color:#393a34;">\u3010\u3010- end \u3011\u3011</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><ul><li><p><code>range</code>\u7528\u4E8E\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\u6216\u662Fmap\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4F8B\u5982values.yaml\u6587\u4EF6\u4E2D\u6709\u5982\u4E0B\u4FE1\u606F\uFF1A</span></span>
<span class="line"><span style="color:#429988;">pizzaToppings</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">mushrooms</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">cheese</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">peppers</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">onions</span></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528\u3010\u3010 range\u3011\u3011...\u3010\u3010 end\u3011\u3011\u5FAA\u73AF\u8BED\u53E5\u5FAA\u73AFpizzaToppings\u6570\u7EC4\uFF1A</span></span>
<span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">v1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ConfigMap</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">\u3010\u3010 .Release.Name \u3011\u3011-configmap</span></span>
<span class="line"><span style="color:#429988;">data</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">toppings</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">|</span><span style="color:#CB7676;">-</span></span>
<span class="line"><span style="color:#C98A7D;">    \u3010\u3010- range .Values.pizzaToppings \u3011\u3011</span></span>
<span class="line"><span style="color:#C98A7D;">    # title \u51FD\u6570\u7528\u4E8E\u5927\u5199\u9996\u5B57\u6BCD</span></span>
<span class="line"><span style="color:#C98A7D;">    - \u3010\u3010 . | title | quote \u3011\u3011</span></span>
<span class="line"><span style="color:#C98A7D;">    \u3010\u3010- end \u3011\u3011</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4F8B\u5982values.yaml\u6587\u4EF6\u4E2D\u6709\u5982\u4E0B\u4FE1\u606F\uFF1A</span></span>
<span class="line"><span style="color:#2F8A89;">pizzaToppings</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">mushrooms</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">cheese</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">peppers</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">onions</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528\u3010\u3010 range\u3011\u3011...\u3010\u3010 end\u3011\u3011\u5FAA\u73AF\u8BED\u53E5\u5FAA\u73AFpizzaToppings\u6570\u7EC4\uFF1A</span></span>
<span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">v1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ConfigMap</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\u3010\u3010 .Release.Name \u3011\u3011-configmap</span></span>
<span class="line"><span style="color:#2F8A89;">data</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">toppings</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">|</span><span style="color:#AB5959;">-</span></span>
<span class="line"><span style="color:#B56959;">    \u3010\u3010- range .Values.pizzaToppings \u3011\u3011</span></span>
<span class="line"><span style="color:#B56959;">    # title \u51FD\u6570\u7528\u4E8E\u5927\u5199\u9996\u5B57\u6BCD</span></span>
<span class="line"><span style="color:#B56959;">    - \u3010\u3010 . | title | quote \u3011\u3011</span></span>
<span class="line"><span style="color:#B56959;">    \u3010\u3010- end \u3011\u3011</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li>Helm \u5185\u7F6E\u53D8\u91CF: <a href="https://helm.sh/docs/chart_template_guide/builtin_objects/" target="_blank" rel="noopener noreferrer">https://helm.sh/docs/chart_template_guide/builtin_objects/</a></li><li>Helm \u65B9\u6CD5\u5B8C\u6574\u5217\u8868\uFF1A<a href="https://helm.sh/docs/chart_template_guide/function_list/" target="_blank" rel="noopener noreferrer">https://helm.sh/docs/chart_template_guide/function_list/</a></li><li>Helm \u5FEB\u901F\u5165\u95E8\uFF1A<a href="https://juejin.im/post/6844904199818313735" target="_blank" rel="noopener noreferrer">https://juejin.im/post/6844904199818313735</a></li></ul>`,15),o=[p];function c(t,r,i,d,y,u){return a(),n("div",null,o)}var A=s(e,[["render",c]]);export{m as __pageData,A as default};
