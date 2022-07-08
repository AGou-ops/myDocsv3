import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"\u4E94 \u914D\u7F6E\u6E05\u5355\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"5.1 \u53EF\u914D\u7F6E\u7684\u5BF9\u8C61","slug":"_5-1-\u53EF\u914D\u7F6E\u7684\u5BF9\u8C61"},{"level":2,"title":"5.2 \u914D\u7F6E\u6E05\u5355\u7EC4\u6210","slug":"_5-2-\u914D\u7F6E\u6E05\u5355\u7EC4\u6210"},{"level":2,"title":"5.3 \u83B7\u53D6\u6E05\u5355\u5E2E\u52A9","slug":"_5-3-\u83B7\u53D6\u6E05\u5355\u5E2E\u52A9"},{"level":2,"title":"5.4 \u6E05\u5355\u57FA\u672C\u683C\u5F0F","slug":"_5-4-\u6E05\u5355\u57FA\u672C\u683C\u5F0F"},{"level":2,"title":"5.5 \u5FEB\u6377\u83B7\u53D6\u6E05\u5355","slug":"_5-5-\u5FEB\u6377\u83B7\u53D6\u6E05\u5355"},{"level":2,"title":"5.6 create \u521B\u5EFA","slug":"_5-6-create-\u521B\u5EFA"},{"level":2,"title":"5.7 delete \u5220\u9664","slug":"_5-7-delete-\u5220\u9664"},{"level":2,"title":"5.8 apply \u521B\u5EFA\u6216\u66F4\u65B0","slug":"_5-8-apply-\u521B\u5EFA\u6216\u66F4\u65B0"}],"relativePath":"CloudNative/k8s/Quicklystart/\u4E94 \u914D\u7F6E\u6E05\u5355\u4F7F\u7528.md","lastUpdated":1657272051000}'),p={name:"CloudNative/k8s/Quicklystart/\u4E94 \u914D\u7F6E\u6E05\u5355\u4F7F\u7528.md"},e=l(`<h1 id="\u4E94-\u914D\u7F6E\u6E05\u5355\u4F7F\u7528" tabindex="-1">\u4E94 \u914D\u7F6E\u6E05\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u4E94-\u914D\u7F6E\u6E05\u5355\u4F7F\u7528" aria-hidden="true">#</a></h1><p>apiserver \u4EC5\u63A5\u6536 json \u683C\u5F0F\u7684\u8D44\u6E90\u5B9A\u4E49\uFF0Cyaml \u683C\u5F0F\u5B9A\u4E49\u63D0\u4F9B\u7684\u914D\u7F6E\u6E05\u5355\uFF0Capiserver \u53EF\u81EA\u52A8\u5C06\u5176\u8F6C\u6362\u4E3A json \u683C\u5F0F\uFF0C\u800C\u540E\u518D\u8FDB\u884C\u6267\u884C\u3002</p><h2 id="_5-1-\u53EF\u914D\u7F6E\u7684\u5BF9\u8C61" tabindex="-1">5.1 \u53EF\u914D\u7F6E\u7684\u5BF9\u8C61 <a class="header-anchor" href="#_5-1-\u53EF\u914D\u7F6E\u7684\u5BF9\u8C61" aria-hidden="true">#</a></h2><ul><li>\u53EF\u7528\u8D44\u6E90\u6E05\u5355\u914D\u7F6E\u7684\u5BF9\u8C61</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">workload\uFF1APod\u3001ReplicaSet\u3001Deployment\u3001StatefulSet\u3001DaemonSet\u3001Job\u3001CronJob</span></span>
<span class="line"><span style="color:#DBD7CA;">\u670D\u52A1\u53D1\u73B0\u53CA\u5747\u8861\uFF1AService\u3001Ingress</span></span>
<span class="line"><span style="color:#DBD7CA;">\u914D\u7F6E\u4E0E\u5B58\u50A8\uFF1AVolume\u3001CSI</span></span>
<span class="line"><span style="color:#DBD7CA;">    ConfigMap\u3001Secret</span></span>
<span class="line"><span style="color:#DBD7CA;">    DownwardAPI</span></span>
<span class="line"><span style="color:#DBD7CA;">\u96C6\u7FA4\u7EA7\u8D44\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">    Namespace\u3001None\u3001Role\u3001ClusterRole\u3001RoleBinding\u3001ClusterRoleBinding</span></span>
<span class="line"><span style="color:#DBD7CA;">\u5143\u6570\u636E\u7C7B\u578B\u8D44\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">    HPA\u3001PodTemplate\u3001LimitRange</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">workload\uFF1APod\u3001ReplicaSet\u3001Deployment\u3001StatefulSet\u3001DaemonSet\u3001Job\u3001CronJob</span></span>
<span class="line"><span style="color:#393A34;">\u670D\u52A1\u53D1\u73B0\u53CA\u5747\u8861\uFF1AService\u3001Ingress</span></span>
<span class="line"><span style="color:#393A34;">\u914D\u7F6E\u4E0E\u5B58\u50A8\uFF1AVolume\u3001CSI</span></span>
<span class="line"><span style="color:#393A34;">    ConfigMap\u3001Secret</span></span>
<span class="line"><span style="color:#393A34;">    DownwardAPI</span></span>
<span class="line"><span style="color:#393A34;">\u96C6\u7FA4\u7EA7\u8D44\u6E90</span></span>
<span class="line"><span style="color:#393A34;">    Namespace\u3001None\u3001Role\u3001ClusterRole\u3001RoleBinding\u3001ClusterRoleBinding</span></span>
<span class="line"><span style="color:#393A34;">\u5143\u6570\u636E\u7C7B\u578B\u8D44\u6E90</span></span>
<span class="line"><span style="color:#393A34;">    HPA\u3001PodTemplate\u3001LimitRange</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-2-\u914D\u7F6E\u6E05\u5355\u7EC4\u6210" tabindex="-1">5.2 \u914D\u7F6E\u6E05\u5355\u7EC4\u6210 <a class="header-anchor" href="#_5-2-\u914D\u7F6E\u6E05\u5355\u7EC4\u6210" aria-hidden="true">#</a></h2><ul><li>\u914D\u7F6E\u6E05\u5355\u7EC4\u6210\u90E8\u5206\uFF0C\u5927\u90E8\u5206\u8D44\u6E90\u4F7F\u7528\u914D\u7F6E\u6E05\u5355\u65B9\u5F0F\u6765\u521B\u5EFA</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">apiVersion</span></span>
<span class="line"><span style="color:#858585;">	</span><span style="color:#758575;"># \u4EE5 &quot;group/version&quot; \u5F62\u5F0F\u6307\u660E\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C5E\u4E8E\u54EA\u4E2A API \u7EC4\uFF08\u7248\u672C\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">kind:</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;"># \u8D44\u6E90\u7C7B\u522B\uFF0C\u6807\u8BB0\u521B\u5EFA\u4EC0\u4E48\u7C7B\u578B\u7684\u8D44\u6E90</span></span>
<span class="line"><span style="color:#DBD7CA;">metadata:</span></span>
<span class="line"><span style="color:#858585;">	</span><span style="color:#758575;"># \u5143\u6570\u636E\u5185\u90E8\u662F\u5D4C\u5957\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#858585;">	</span><span style="color:#758575;"># \u5B9A\u4E49\u4E86\u8D44\u6E90\u5BF9\u8C61\u7684\u540D\u79F0\u3001\u547D\u540D\u7A7A\u95F4\uFF08k8s\u7EA7\u522B\u7684\u4E0D\u662F\u7CFB\u7EDF\u7684\uFF09\u7B49\u3001\u6807\u7B7E\u3001\u6CE8\u89E3\u7B49</span></span>
<span class="line"><span style="color:#DBD7CA;">spec:</span></span>
<span class="line"><span style="color:#858585;">	</span><span style="color:#758575;"># \u89C4\u8303\u5B9A\u4E49\u8D44\u6E90\u5E94\u8BE5\u62E5\u6709\u4EC0\u4E48\u6837\u7684\u7279\u6027\uFF0C\u4F9D\u9760\u63A7\u5236\u5668\u786E\u4FDD\u7279\u6027\u80FD\u591F\u88AB\u6EE1\u8DB3</span></span>
<span class="line"><span style="color:#858585;">	</span><span style="color:#758575;"># \u5B83\u662F\u7528\u6237\u5B9A\u4E49\u7684\u6240\u671F\u671B\u4E86\u8D44\u6E90\u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">status:</span></span>
<span class="line"><span style="color:#858585;">	</span><span style="color:#758575;"># \u663E\u793A\u8D44\u6E90\u7684\u5F53\u524D\u72B6\u6001\uFF0Ck8s \u5C31\u662F\u786E\u4FDD\u5F53\u524D\u72B6\u6001\u5411\u76EE\u6807\u72B6\u6001\u65E0\u9650\u9760\u8FD1\u4ECE\u800C\u6EE1\u8DB3\u7528\u6237\u671F\u671B</span></span>
<span class="line"><span style="color:#858585;">	</span><span style="color:#758575;"># \u5B83\u662F\u53EA\u8BFB\u7684\uFF0C\u4EE3\u8868\u4E86\u8D44\u6E90\u5F53\u524D\u72B6\u6001</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">apiVersion</span></span>
<span class="line"><span style="color:#8E8F8B;">	</span><span style="color:#A0ADA0;"># \u4EE5 &quot;group/version&quot; \u5F62\u5F0F\u6307\u660E\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C5E\u4E8E\u54EA\u4E2A API \u7EC4\uFF08\u7248\u672C\uFF09</span></span>
<span class="line"><span style="color:#393A34;">kind:</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;"># \u8D44\u6E90\u7C7B\u522B\uFF0C\u6807\u8BB0\u521B\u5EFA\u4EC0\u4E48\u7C7B\u578B\u7684\u8D44\u6E90</span></span>
<span class="line"><span style="color:#393A34;">metadata:</span></span>
<span class="line"><span style="color:#8E8F8B;">	</span><span style="color:#A0ADA0;"># \u5143\u6570\u636E\u5185\u90E8\u662F\u5D4C\u5957\u7684\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#8E8F8B;">	</span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u4E86\u8D44\u6E90\u5BF9\u8C61\u7684\u540D\u79F0\u3001\u547D\u540D\u7A7A\u95F4\uFF08k8s\u7EA7\u522B\u7684\u4E0D\u662F\u7CFB\u7EDF\u7684\uFF09\u7B49\u3001\u6807\u7B7E\u3001\u6CE8\u89E3\u7B49</span></span>
<span class="line"><span style="color:#393A34;">spec:</span></span>
<span class="line"><span style="color:#8E8F8B;">	</span><span style="color:#A0ADA0;"># \u89C4\u8303\u5B9A\u4E49\u8D44\u6E90\u5E94\u8BE5\u62E5\u6709\u4EC0\u4E48\u6837\u7684\u7279\u6027\uFF0C\u4F9D\u9760\u63A7\u5236\u5668\u786E\u4FDD\u7279\u6027\u80FD\u591F\u88AB\u6EE1\u8DB3</span></span>
<span class="line"><span style="color:#8E8F8B;">	</span><span style="color:#A0ADA0;"># \u5B83\u662F\u7528\u6237\u5B9A\u4E49\u7684\u6240\u671F\u671B\u4E86\u8D44\u6E90\u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">status:</span></span>
<span class="line"><span style="color:#8E8F8B;">	</span><span style="color:#A0ADA0;"># \u663E\u793A\u8D44\u6E90\u7684\u5F53\u524D\u72B6\u6001\uFF0Ck8s \u5C31\u662F\u786E\u4FDD\u5F53\u524D\u72B6\u6001\u5411\u76EE\u6807\u72B6\u6001\u65E0\u9650\u9760\u8FD1\u4ECE\u800C\u6EE1\u8DB3\u7528\u6237\u671F\u671B</span></span>
<span class="line"><span style="color:#8E8F8B;">	</span><span style="color:#A0ADA0;"># \u5B83\u662F\u53EA\u8BFB\u7684\uFF0C\u4EE3\u8868\u4E86\u8D44\u6E90\u5F53\u524D\u72B6\u6001</span></span>
<span class="line"></span></code></pre></div><ul><li>\u83B7\u53D6\u5168\u90E8\u7684 api \u7248\u672C</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl api-versions</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl api-versions</span></span>
<span class="line"></span></code></pre></div><ul><li>\u83B7\u53D6\u5168\u90E8\u7684 api \u8D44\u6E90\u5BF9\u8C61</li></ul><p>\u4ECE\u5185\u5BB9\u53EF\u4EE5\u770B\u5230\u4E00\u4E9B\u7F29\u5199\uFF0C\u65B9\u4FBF\u6211\u4EEC\u65E5\u5E38\u547D\u4EE4\u540E\u7B80\u5199</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl api-resources</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">kubectl get po          </span><span style="color:#758575;"># \u67E5\u770Bpod</span></span>
<span class="line"><span style="color:#DBD7CA;">kubectl get deploy      </span><span style="color:#758575;"># \u67E5\u770Bdeployment</span></span>
<span class="line"><span style="color:#DBD7CA;">kubectl get svc         </span><span style="color:#758575;"># \u67E5\u770Bservice</span></span>
<span class="line"><span style="color:#DBD7CA;">kubectl get cm          </span><span style="color:#758575;"># \u67E5\u770B configmap</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl api-resources</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">kubectl get po          </span><span style="color:#A0ADA0;"># \u67E5\u770Bpod</span></span>
<span class="line"><span style="color:#393A34;">kubectl get deploy      </span><span style="color:#A0ADA0;"># \u67E5\u770Bdeployment</span></span>
<span class="line"><span style="color:#393A34;">kubectl get svc         </span><span style="color:#A0ADA0;"># \u67E5\u770Bservice</span></span>
<span class="line"><span style="color:#393A34;">kubectl get cm          </span><span style="color:#A0ADA0;"># \u67E5\u770B configmap</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-3-\u83B7\u53D6\u6E05\u5355\u5E2E\u52A9" tabindex="-1">5.3 \u83B7\u53D6\u6E05\u5355\u5E2E\u52A9 <a class="header-anchor" href="#_5-3-\u83B7\u53D6\u6E05\u5355\u5E2E\u52A9" aria-hidden="true">#</a></h2><ul><li>\u67E5\u770B k8s \u67D0\u4E2A\u5185\u7F6E\u5BF9\u8C61\u7684\u914D\u7F6E\u6E05\u5355\u683C\u5F0F\uFF0C\u5E94\u8BE5\u5305\u542B\u54EA\u4E9B\u5B57\u6BB5\uFF0C\u4F7F\u7528 . \u6765\u663E\u793A\u5B57\u6BB5\u7684\u683C\u5F0F\u5E2E\u52A9\u4FE1\u606F</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl explain pods</span></span>
<span class="line"><span style="color:#DBD7CA;">kubectl explain pods.metadata</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl explain pods</span></span>
<span class="line"><span style="color:#393A34;">kubectl explain pods.metadata</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-4-\u6E05\u5355\u57FA\u672C\u683C\u5F0F" tabindex="-1">5.4 \u6E05\u5355\u57FA\u672C\u683C\u5F0F <a class="header-anchor" href="#_5-4-\u6E05\u5355\u57FA\u672C\u683C\u5F0F" aria-hidden="true">#</a></h2><ul><li>\u5B9A\u4E49\u4E00\u4E2A\u8D44\u6E90\u6E05\u5355</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">apiVersion: v1</span></span>
<span class="line"><span style="color:#DBD7CA;">kind: Pod</span></span>
<span class="line"><span style="color:#DBD7CA;">metadata:</span></span>
<span class="line"><span style="color:#DBD7CA;">  name: pod-deme</span></span>
<span class="line"><span style="color:#DBD7CA;">  namespace: default</span></span>
<span class="line"><span style="color:#DBD7CA;">  labels:</span></span>
<span class="line"><span style="color:#DBD7CA;">    app: myapp</span></span>
<span class="line"><span style="color:#DBD7CA;">    tier: frontend</span></span>
<span class="line"><span style="color:#DBD7CA;">spec:</span></span>
<span class="line"><span style="color:#DBD7CA;">  containers:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - name: myapp</span></span>
<span class="line"><span style="color:#DBD7CA;">    image: ikubernetes/myapp:v1</span></span>
<span class="line"><span style="color:#DBD7CA;">  - name: busybox</span></span>
<span class="line"><span style="color:#DBD7CA;">    image: busybox:latest</span></span>
<span class="line"><span style="color:#DBD7CA;">    command:</span></span>
<span class="line"><span style="color:#DBD7CA;">    - </span><span style="color:#C98A7D;">&quot;/bin/sh&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    - </span><span style="color:#C98A7D;">&quot;-c&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    - </span><span style="color:#C98A7D;">&quot;sleep 10&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">apiVersion: v1</span></span>
<span class="line"><span style="color:#393A34;">kind: Pod</span></span>
<span class="line"><span style="color:#393A34;">metadata:</span></span>
<span class="line"><span style="color:#393A34;">  name: pod-deme</span></span>
<span class="line"><span style="color:#393A34;">  namespace: default</span></span>
<span class="line"><span style="color:#393A34;">  labels:</span></span>
<span class="line"><span style="color:#393A34;">    app: myapp</span></span>
<span class="line"><span style="color:#393A34;">    tier: frontend</span></span>
<span class="line"><span style="color:#393A34;">spec:</span></span>
<span class="line"><span style="color:#393A34;">  containers:</span></span>
<span class="line"><span style="color:#393A34;">  - name: myapp</span></span>
<span class="line"><span style="color:#393A34;">    image: ikubernetes/myapp:v1</span></span>
<span class="line"><span style="color:#393A34;">  - name: busybox</span></span>
<span class="line"><span style="color:#393A34;">    image: busybox:latest</span></span>
<span class="line"><span style="color:#393A34;">    command:</span></span>
<span class="line"><span style="color:#393A34;">    - </span><span style="color:#B56959;">&quot;/bin/sh&quot;</span></span>
<span class="line"><span style="color:#393A34;">    - </span><span style="color:#B56959;">&quot;-c&quot;</span></span>
<span class="line"><span style="color:#393A34;">    - </span><span style="color:#B56959;">&quot;sleep 10&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-5-\u5FEB\u6377\u83B7\u53D6\u6E05\u5355" tabindex="-1">5.5 \u5FEB\u6377\u83B7\u53D6\u6E05\u5355 <a class="header-anchor" href="#_5-5-\u5FEB\u6377\u83B7\u53D6\u6E05\u5355" aria-hidden="true">#</a></h2><ul><li>\u4F7F\u7528 -o \u53C2\u6570\u6765\u6307\u5B9A\u5BF9\u8C61\u6570\u636E\u7684\u8F93\u51FA\u683C\u5F0F\uFF0C\u4F7F\u7528 --dry-run \u6765\u6D4B\u8BD5\u6027\u6267\u884C\u4E00\u4E2A\u6307\u4EE4\uFF0C\u5B83\u4E24\u4E2A\u7ED3\u5408\u8D77\u6765\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA\uFF0C\u4E14\u751F\u6210 yaml \u683C\u5F0F\u914D\u7F6E\u6587\u4EF6\u4E86 -o yaml --dry-run</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl create secret docker-registry regsecret --docker-server=registry-vpc.cn-hangzhou.aliyuncs.com --docker-username=admin --docker-password=123456 --docker-email=420123641@qq.com -o yaml --dry-run</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl create secret docker-registry regsecret --docker-server=registry-vpc.cn-hangzhou.aliyuncs.com --docker-username=admin --docker-password=123456 --docker-email=420123641@qq.com -o yaml --dry-run</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-6-create-\u521B\u5EFA" tabindex="-1">5.6 create \u521B\u5EFA <a class="header-anchor" href="#_5-6-create-\u521B\u5EFA" aria-hidden="true">#</a></h2><ul><li>\u521B\u5EFA\u8D44\u6E90\u6E05\u5355\u4E2D\u7684\u8D44\u6E90\uFF0C\u8FD9\u6837\u521B\u5EFA\u7684\u4E3A\u88F8 POD \uFF0C\u6CA1\u6709\u63A7\u5236\u5668\u7BA1\u7406\uFF0C\u6240\u4EE5\u5220\u9664\u540E\u4E0D\u4F1A\u81EA\u52A8\u91CD\u5EFA\uFF0C\u6210\u4E3A\u81EA\u4E3B\u5F0F POD</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl create -f pod-demo.yaml</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl create -f pod-demo.yaml</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-7-delete-\u5220\u9664" tabindex="-1">5.7 delete \u5220\u9664 <a class="header-anchor" href="#_5-7-delete-\u5220\u9664" aria-hidden="true">#</a></h2><ul><li>\u5220\u9664\u8D44\u6E90\u6E05\u5355\u4E2D\u5B9A\u4E49\u7684 POD</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl delete -f pod-demo.yaml</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl delete -f pod-demo.yaml</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-8-apply-\u521B\u5EFA\u6216\u66F4\u65B0" tabindex="-1">5.8 apply \u521B\u5EFA\u6216\u66F4\u65B0 <a class="header-anchor" href="#_5-8-apply-\u521B\u5EFA\u6216\u66F4\u65B0" aria-hidden="true">#</a></h2><p>apply \u53EF\u4EE5\u6267\u884C\u591A\u6B21\uFF0C\u5982\u679C\u53D1\u73B0\u6587\u4EF6\u4E0D\u540C\uFF0C\u5219\u66F4\u65B0</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl apply -f pod-demo.yaml</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl apply -f pod-demo.yaml</span></span>
<span class="line"></span></code></pre></div>`,31),o=[e];function c(t,r,i,d,y,A){return a(),n("div",null,o)}var h=s(p,[["render",c]]);export{D as __pageData,h as default};
