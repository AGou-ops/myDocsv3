import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"\u5341\u56DB \u7528\u6237\u6743\u9650\u7CFB\u7EDF","description":"","frontmatter":{},"headers":[{"level":2,"title":"14.1 \u6743\u9650\u5217\u8868","slug":"_14-1-\u6743\u9650\u5217\u8868"},{"level":2,"title":"14.2 \u521B\u5EFA Role","slug":"_14-2-\u521B\u5EFA-role"},{"level":2,"title":"14.3 \u521B\u5EFA rolebinding","slug":"_14-3-\u521B\u5EFA-rolebinding"},{"level":2,"title":"14.4 \u521B\u5EFA clusterrole","slug":"_14-4-\u521B\u5EFA-clusterrole"},{"level":2,"title":"14.5 \u521B\u5EFA clusterrolebinding","slug":"_14-5-\u521B\u5EFA-clusterrolebinding"},{"level":2,"title":"14.6 rolebinding \u4E0E clusterrole","slug":"_14-6-rolebinding-\u4E0E-clusterrole"},{"level":2,"title":"14.7 RBAC\u6388\u6743","slug":"_14-7-rbac\u6388\u6743"}],"relativePath":"CloudNative/k8s/Quicklystart/\u5341\u56DB \u7528\u6237\u6743\u9650\u7CFB\u7EDF.md","lastUpdated":1657272051000}'),p={name:"CloudNative/k8s/Quicklystart/\u5341\u56DB \u7528\u6237\u6743\u9650\u7CFB\u7EDF.md"},e=l(`<h1 id="\u5341\u56DB-\u7528\u6237\u6743\u9650\u7CFB\u7EDF" tabindex="-1">\u5341\u56DB \u7528\u6237\u6743\u9650\u7CFB\u7EDF <a class="header-anchor" href="#\u5341\u56DB-\u7528\u6237\u6743\u9650\u7CFB\u7EDF" aria-hidden="true">#</a></h1><p>\u5728 k8s \u4E2D\u7684\u7528\u6237\u6743\u9650\u7CFB\u7EDF\u662F\u4F7F\u7528 RBAC \u6A21\u5F0F\u7684\uFF0CRBAC \u662F Role-Based AC \u7684\u7F29\u5199\uFF0C\u5168\u79F0\uFF1A\u57FA\u4E8E\u89D2\u8272\u7684\u8BBF\u95EE\u63A7\u5236\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u8BA9\u4E00\u4E2A\u7528\u6237\u626E\u6F14\u4E00\u4E2A\u89D2\u8272\uFF0C\u800C\u8FD9\u4E2A\u89D2\u8272\u62E5\u6709\u6743\u9650\uFF0C\u800C\u8FD9\u4E2A\u7528\u6237\u5C31\u62E5\u6709\u4E86\u8FD9\u4E2A\u6743\u9650\uFF0C\u6240\u4EE5\u5728 RBAC \u4E2D\uFF0C\u7528\u6237\u6388\u6743\u5C31\u662F\u6388\u6743\u67D0\u4E2A\u89D2\u8272\u3002</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">\u7528\u6237\uFF08user\uFF09\uFF1A\u7528\u6237\u53EF\u4EE5\u62E5\u6709\u67D0\u4E2A\u89D2\u8272\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">\u89D2\u8272\uFF08role\uFF09\uFF1A\u89D2\u8272\u53EF\u4EE5\u62E5\u6709\u67D0\u4E9B\u8BB8\u53EF\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">	1. \u64CD\u4F5C</span></span>
<span class="line"><span style="color:#DBD7CA;">	2. \u5BF9\u8C61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">\u8BB8\u53EF\uFF08permission\uFF09\uFF1A \u5728\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u80FD\u65BD\u52A0\u7684\u64CD\u4F5C\u7EC4\u5408\u8D77\u6765\uFF0C\u79F0\u4E4B\u4E3A\u4E00\u4E2A\u8BB8\u53EF\u6743\u9650\u3002</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">\u7528\u6237\uFF08user\uFF09\uFF1A\u7528\u6237\u53EF\u4EE5\u62E5\u6709\u67D0\u4E2A\u89D2\u8272\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">\u89D2\u8272\uFF08role\uFF09\uFF1A\u89D2\u8272\u53EF\u4EE5\u62E5\u6709\u67D0\u4E9B\u8BB8\u53EF\u3002</span></span>
<span class="line"><span style="color:#393A34;">	1. \u64CD\u4F5C</span></span>
<span class="line"><span style="color:#393A34;">	2. \u5BF9\u8C61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">\u8BB8\u53EF\uFF08permission\uFF09\uFF1A \u5728\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u80FD\u65BD\u52A0\u7684\u64CD\u4F5C\u7EC4\u5408\u8D77\u6765\uFF0C\u79F0\u4E4B\u4E3A\u4E00\u4E2A\u8BB8\u53EF\u6743\u9650\u3002</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u7528\u6237\u7C7B\u578B</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">Human User\uFF1A              </span><span style="color:#758575;"># \u7528\u6237\u8D26\u53F7</span></span>
<span class="line"><span style="color:#DBD7CA;">Pod Service Account\uFF1A     </span><span style="color:#758575;"># \u670D\u52A1\u8D26\u53F7</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">Human User\uFF1A              </span><span style="color:#A0ADA0;"># \u7528\u6237\u8D26\u53F7</span></span>
<span class="line"><span style="color:#393A34;">Pod Service Account\uFF1A     </span><span style="color:#A0ADA0;"># \u670D\u52A1\u8D26\u53F7</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u89D2\u8272\u7C7B\u578B</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">- role\uFF08\u89D2\u8272\uFF09\u3001rolebinding\uFF08\u89D2\u8272\u7ED1\u5B9A\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">- clusterrole\uFF08\u96C6\u7FA4\u89D2\u8272\uFF09\u3001clusterrolebinding\uFF08\u96C6\u7FA4\u89D2\u8272\u7ED1\u5B9A\uFF09</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">- role\uFF08\u89D2\u8272\uFF09\u3001rolebinding\uFF08\u89D2\u8272\u7ED1\u5B9A\uFF09</span></span>
<span class="line"><span style="color:#393A34;">- clusterrole\uFF08\u96C6\u7FA4\u89D2\u8272\uFF09\u3001clusterrolebinding\uFF08\u96C6\u7FA4\u89D2\u8272\u7ED1\u5B9A\uFF09</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u6388\u6743\u7C7B\u578B</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">- \u7528\u6237\u901A\u8FC7 rolebinding \u53BB </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> rule\uFF0Crolebinding \u53EA\u80FD\u662F\u5F53\u524D\u547D\u540D\u7A7A\u95F4\u4E2D</span></span>
<span class="line"><span style="color:#DBD7CA;">- \u901A\u8FC7 clusterrolebinding \u53BB </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> clausterrole\uFF0Cclusterrolebinding\u4F1A\u5728\u6240\u6709\u540D\u79F0\u7A7A\u95F4\u751F\u6548</span></span>
<span class="line"><span style="color:#DBD7CA;">- \u901A\u8FC7 rolebinding \u53BB </span><span style="color:#E0A569;">bind</span><span style="color:#DBD7CA;"> clausterrole\uFF0C\u7531\u4E8E rolebinding \u53EA\u5728\u5F53\u524D\u540D\u79F0\u7A7A\u95F4\uFF0C\u6240\u4EE5 clusterrole \u6743\u9650\u88AB\u9650\u5236\u4E3A\u5F53\u524D\u540D\u79F0\u7A7A\u95F4</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">- \u7528\u6237\u901A\u8FC7 rolebinding \u53BB </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> rule\uFF0Crolebinding \u53EA\u80FD\u662F\u5F53\u524D\u547D\u540D\u7A7A\u95F4\u4E2D</span></span>
<span class="line"><span style="color:#393A34;">- \u901A\u8FC7 clusterrolebinding \u53BB </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> clausterrole\uFF0Cclusterrolebinding\u4F1A\u5728\u6240\u6709\u540D\u79F0\u7A7A\u95F4\u751F\u6548</span></span>
<span class="line"><span style="color:#393A34;">- \u901A\u8FC7 rolebinding \u53BB </span><span style="color:#B58451;">bind</span><span style="color:#393A34;"> clausterrole\uFF0C\u7531\u4E8E rolebinding \u53EA\u5728\u5F53\u524D\u540D\u79F0\u7A7A\u95F4\uFF0C\u6240\u4EE5 clusterrole \u6743\u9650\u88AB\u9650\u5236\u4E3A\u5F53\u524D\u540D\u79F0\u7A7A\u95F4</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u901A\u8FC7 rolebinding \u53BB bind clusterrole \u7684\u597D\u5904</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">\u5982\u679C\u6709\u5F88\u591A\u540D\u79F0\u7A7A\u95F4\u3001\u5982\u679C\u7528 rolebinding \u7ED1\u5B9A role\uFF0C\u90A3\u4E48\u5219\u9700\u8981\u5728\u6BCF\u4E2A\u540D\u79F0\u7A7A\u95F4\u90FD\u5B9A\u4E49 role</span></span>
<span class="line"><span style="color:#DBD7CA;">\u5982\u679C\u4F7F\u7528 rolebinding \u7ED1\u5B9A\u4E00\u4E2A clausterrole \uFF0C\u7531\u4E8E clusterrole \u62E5\u6709\u6240\u6709\u540D\u79F0\u7A7A\u95F4\u7684\u6743\u9650\uFF0C\u800C rolebinding  \u53EA\u80FD\u7ED1\u5B9A\u5F53\u524D\u540D\u79F0\u7A7A\u95F4\uFF0C\u90A3\u4E48\u5C31\u7701\u53BB\u4E3A\u6BCF\u4E2A\u540D\u79F0\u7A7A\u95F4\u90FD\u65B0\u5EFA\u4E00\u4E2A role \u7684\u8FC7\u7A0B\u4E86\u3002</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">\u5982\u679C\u6709\u5F88\u591A\u540D\u79F0\u7A7A\u95F4\u3001\u5982\u679C\u7528 rolebinding \u7ED1\u5B9A role\uFF0C\u90A3\u4E48\u5219\u9700\u8981\u5728\u6BCF\u4E2A\u540D\u79F0\u7A7A\u95F4\u90FD\u5B9A\u4E49 role</span></span>
<span class="line"><span style="color:#393A34;">\u5982\u679C\u4F7F\u7528 rolebinding \u7ED1\u5B9A\u4E00\u4E2A clausterrole \uFF0C\u7531\u4E8E clusterrole \u62E5\u6709\u6240\u6709\u540D\u79F0\u7A7A\u95F4\u7684\u6743\u9650\uFF0C\u800C rolebinding  \u53EA\u80FD\u7ED1\u5B9A\u5F53\u524D\u540D\u79F0\u7A7A\u95F4\uFF0C\u90A3\u4E48\u5C31\u7701\u53BB\u4E3A\u6BCF\u4E2A\u540D\u79F0\u7A7A\u95F4\u90FD\u65B0\u5EFA\u4E00\u4E2A role \u7684\u8FC7\u7A0B\u4E86\u3002</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_14-1-\u6743\u9650\u5217\u8868" tabindex="-1">14.1 \u6743\u9650\u5217\u8868 <a class="header-anchor" href="#_14-1-\u6743\u9650\u5217\u8868" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl get clusterrole admin -o yaml</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl get clusterrole admin -o yaml</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_14-2-\u521B\u5EFA-role" tabindex="-1">14.2 \u521B\u5EFA Role <a class="header-anchor" href="#_14-2-\u521B\u5EFA-role" aria-hidden="true">#</a></h2><ul><li>\u547D\u4EE4\u884C\u5B9A\u4E49</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl create role pods-reader --verb=get,list,watch --resource=pods</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl create role pods-reader --verb=get,list,watch --resource=pods</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u4F7F\u7528\u6E05\u5355\u65B9\u5F0F\u5B9A\u4E49</li></ul><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">Role</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">pods-reder</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">namespace</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">default</span></span>
<span class="line"><span style="color:#429988;">rules</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroups</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;">                           </span><span style="color:#758575;"># \u5BF9\u54EA\u4E9B api \u7FA4\u7EC4\u5185\u7684\u8D44\u6E90\u8FDB\u884C\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">resources</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;">                           </span><span style="color:#758575;"># \u5BF9\u54EA\u4E9B\u8D44\u6E90\u6388\u6743</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">pods</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">verbs</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;">                               </span><span style="color:#758575;"># \u6388\u6743\u505A\u54EA\u4E9B\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">get</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">list</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">watch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Role</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pods-reder</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">namespace</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">default</span></span>
<span class="line"><span style="color:#2F8A89;">rules</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroups</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;">                           </span><span style="color:#A0ADA0;"># \u5BF9\u54EA\u4E9B api \u7FA4\u7EC4\u5185\u7684\u8D44\u6E90\u8FDB\u884C\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">resources</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;">                           </span><span style="color:#A0ADA0;"># \u5BF9\u54EA\u4E9B\u8D44\u6E90\u6388\u6743</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pods</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">verbs</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;">                               </span><span style="color:#A0ADA0;"># \u6388\u6743\u505A\u54EA\u4E9B\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">get</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">watch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_14-3-\u521B\u5EFA-rolebinding" tabindex="-1">14.3 \u521B\u5EFA rolebinding <a class="header-anchor" href="#_14-3-\u521B\u5EFA-rolebinding" aria-hidden="true">#</a></h2><ul><li>\u4F7F\u7528 rolebinding \u5BF9\u8C61\u521B\u5EFA\uFF0C\u7528\u6237\u4E0E role \u7684\u7ED1\u5B9A</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl create rolebinding kaliarch-read-pods --role=pods-reader --user=kaliarch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl create rolebinding kaliarch-read-pods --role=pods-reader --user=kaliarch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u4F7F\u7528\u6E05\u5355\u65B9\u5F0F\u5B9A\u4E49</li></ul><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">RoleBinding</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kaliarch-read-pods</span></span>
<span class="line"><span style="color:#429988;">roleRef</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">apiGroup</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">Role</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">pods-reader</span></span>
<span class="line"><span style="color:#429988;">subjects</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroup</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">User</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kaliarch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">RoleBinding</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kaliarch-read-pods</span></span>
<span class="line"><span style="color:#2F8A89;">roleRef</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">apiGroup</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">Role</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pods-reader</span></span>
<span class="line"><span style="color:#2F8A89;">subjects</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroup</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">User</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kaliarch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u5207\u6362\u7528\u6237\u548C\u73AF\u5883\u4E0A\u4E0B\u6587</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl config use-context kaliarch@kubernetes</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl config use-context kaliarch@kubernetes</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u6D4B\u8BD5\u7528\u6237\u662F\u5426\u62E5\u6709 get \u6743\u9650</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl get pods</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl get pods</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_14-4-\u521B\u5EFA-clusterrole" tabindex="-1">14.4 \u521B\u5EFA clusterrole <a class="header-anchor" href="#_14-4-\u521B\u5EFA-clusterrole" aria-hidden="true">#</a></h2><ul><li>\u547D\u4EE4\u884C\u5B9A\u4E49</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl create clusterrole cluster-reader --verb=get,list,watch --resource=pods</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl create clusterrole cluster-reader --verb=get,list,watch --resource=pods</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u4F7F\u7528\u6E05\u5355\u65B9\u5F0F\u5B9A\u4E49</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#DBD7CA;">kind: ClusterRole</span></span>
<span class="line"><span style="color:#DBD7CA;">metadata:</span></span>
<span class="line"><span style="color:#DBD7CA;">  name: cluster-reader</span></span>
<span class="line"><span style="color:#DBD7CA;">rules:</span></span>
<span class="line"><span style="color:#DBD7CA;">- apiGroups:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - </span><span style="color:#C98A7D;">&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  resources:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - pods</span></span>
<span class="line"><span style="color:#DBD7CA;">  verbs:</span></span>
<span class="line"><span style="color:#DBD7CA;">  - get</span></span>
<span class="line"><span style="color:#DBD7CA;">  - list</span></span>
<span class="line"><span style="color:#DBD7CA;">  - watch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#393A34;">kind: ClusterRole</span></span>
<span class="line"><span style="color:#393A34;">metadata:</span></span>
<span class="line"><span style="color:#393A34;">  name: cluster-reader</span></span>
<span class="line"><span style="color:#393A34;">rules:</span></span>
<span class="line"><span style="color:#393A34;">- apiGroups:</span></span>
<span class="line"><span style="color:#393A34;">  - </span><span style="color:#B56959;">&quot;&quot;</span></span>
<span class="line"><span style="color:#393A34;">  resources:</span></span>
<span class="line"><span style="color:#393A34;">  - pods</span></span>
<span class="line"><span style="color:#393A34;">  verbs:</span></span>
<span class="line"><span style="color:#393A34;">  - get</span></span>
<span class="line"><span style="color:#393A34;">  - list</span></span>
<span class="line"><span style="color:#393A34;">  - watch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u7CFB\u7EDF\u5185\u7F6E\u6709\u975E\u5E38\u591A\u7684 clusterrole\uFF0C\u8BE6\u89C1\uFF1Akubectl get clusterrole</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">NAME                                                                   AGE</span></span>
<span class="line"><span style="color:#DBD7CA;">admin                                                                  5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-admin                                                          5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">cluster-reader                                                         4m32s</span></span>
<span class="line"><span style="color:#DBD7CA;">edit                                                                   5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">flannel                                                                5d6h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:aggregate-to-admin                                              5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:aggregate-to-edit                                               5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:aggregate-to-view                                               5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:auth-delegator                                                  5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:aws-cloud-provider                                              5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:basic-user                                                      5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:certificates.k8s.io:certificatesigningrequests:nodeclient       5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:certificates.k8s.io:certificatesigningrequests:selfnodeclient   5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:controller:attachdetach-controller                              5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:controller:certificate-controller                               5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:controller:clusterrole-aggregation-controller                   5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:controller:cronjob-controller                                   5d16h</span></span>
<span class="line"><span style="color:#DBD7CA;">system:controller:daemon-set-controller                                5d16h</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">NAME                                                                   AGE</span></span>
<span class="line"><span style="color:#393A34;">admin                                                                  5d16h</span></span>
<span class="line"><span style="color:#393A34;">cluster-admin                                                          5d16h</span></span>
<span class="line"><span style="color:#393A34;">cluster-reader                                                         4m32s</span></span>
<span class="line"><span style="color:#393A34;">edit                                                                   5d16h</span></span>
<span class="line"><span style="color:#393A34;">flannel                                                                5d6h</span></span>
<span class="line"><span style="color:#393A34;">system:aggregate-to-admin                                              5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:aggregate-to-edit                                               5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:aggregate-to-view                                               5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:auth-delegator                                                  5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:aws-cloud-provider                                              5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:basic-user                                                      5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:certificates.k8s.io:certificatesigningrequests:nodeclient       5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:certificates.k8s.io:certificatesigningrequests:selfnodeclient   5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:controller:attachdetach-controller                              5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:controller:certificate-controller                               5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:controller:clusterrole-aggregation-controller                   5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:controller:cronjob-controller                                   5d16h</span></span>
<span class="line"><span style="color:#393A34;">system:controller:daemon-set-controller                                5d16h</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_14-5-\u521B\u5EFA-clusterrolebinding" tabindex="-1">14.5 \u521B\u5EFA clusterrolebinding <a class="header-anchor" href="#_14-5-\u521B\u5EFA-clusterrolebinding" aria-hidden="true">#</a></h2><ul><li>\u547D\u4EE4\u884C\u5B9A\u4E49</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">kubectl create clusterrolebinding kaliarch-read-all-pods --clusterrole=cluster-reader --user=kaliarch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">kubectl create clusterrolebinding kaliarch-read-all-pods --clusterrole=cluster-reader --user=kaliarch</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u6E05\u5355\u5B9A\u4E49</li></ul><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">apiVersion</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io/v1beta1</span></span>
<span class="line"><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#429988;">metadata</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kaliarch-read-all-pods</span></span>
<span class="line"><span style="color:#429988;">roleRef</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">apiGroup</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">ClusterRole</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">cluster-reader</span></span>
<span class="line"><span style="color:#429988;">subjects</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#429988;">apiGroup</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">kind</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">User</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">kaliarch</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">apiVersion</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io/v1beta1</span></span>
<span class="line"><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#2F8A89;">metadata</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kaliarch-read-all-pods</span></span>
<span class="line"><span style="color:#2F8A89;">roleRef</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">apiGroup</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ClusterRole</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">cluster-reader</span></span>
<span class="line"><span style="color:#2F8A89;">subjects</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#2F8A89;">apiGroup</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">kind</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">User</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">kaliarch</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5207\u6362\u7528\u6237\u548C\u73AF\u5883\u4E0A\u4E0B\u6587</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl config use-context kaliarch@kubernetes</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl config use-context kaliarch@kubernetes</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6D4B\u8BD5\u7528\u6237\u662F\u5426\u62E5\u6709 get \u6743\u9650</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl get pods -n kube-system</span></span>
<span class="line"><span style="color:#DBD7CA;">$ kubectl config use-context kubernetes-admin@kubernetes</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl get pods -n kube-system</span></span>
<span class="line"><span style="color:#393A34;">$ kubectl config use-context kubernetes-admin@kubernetes</span></span>
<span class="line"></span></code></pre></div><h2 id="_14-6-rolebinding-\u4E0E-clusterrole" tabindex="-1">14.6 rolebinding \u4E0E clusterrole <a class="header-anchor" href="#_14-6-rolebinding-\u4E0E-clusterrole" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F7F\u7528 rolebinding \u7ED1\u5B9A\u4E00\u4E2A clusterrole \uFF0C\u7531\u4E8E clusterrole \u62E5\u6709\u6240\u6709\u540D\u79F0\u7A7A\u95F4\u7684\u6743\u9650\uFF0C\u800C rolebinding \u53EA\u80FD\u7ED1\u5B9A\u5F53\u524D\u540D\u79F0\u7A7A\u95F4\uFF0C\u90A3\u4E48\u5C31\u7701\u53BB\u4E3A\u6BCF\u4E2A\u540D\u79F0\u7A7A\u95F4\u90FD\u65B0\u5EFA\u4E00\u4E2A role \u7684\u8FC7\u7A0B\u4E86\u3002</p><ul><li>\u547D\u4EE4\u5B9A\u4E49</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl create rolebinding kaliarch-cluster-reader --clusterrole=cluster-reader --user=kaliarch</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl create rolebinding kaliarch-cluster-reader --clusterrole=cluster-reader --user=kaliarch</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6E05\u5355\u5B9A\u4E49</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#DBD7CA;">kind: RoleBinding</span></span>
<span class="line"><span style="color:#DBD7CA;">metadata:</span></span>
<span class="line"><span style="color:#DBD7CA;">  name: kaliarch-admin</span></span>
<span class="line"><span style="color:#DBD7CA;">roleRef:</span></span>
<span class="line"><span style="color:#DBD7CA;">  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#DBD7CA;">  kind: ClusterRole</span></span>
<span class="line"><span style="color:#DBD7CA;">  name: admin</span></span>
<span class="line"><span style="color:#DBD7CA;">subjects:</span></span>
<span class="line"><span style="color:#DBD7CA;">- apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#DBD7CA;">  kind: User</span></span>
<span class="line"><span style="color:#DBD7CA;">  name: kaliarch</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#393A34;">kind: RoleBinding</span></span>
<span class="line"><span style="color:#393A34;">metadata:</span></span>
<span class="line"><span style="color:#393A34;">  name: kaliarch-admin</span></span>
<span class="line"><span style="color:#393A34;">roleRef:</span></span>
<span class="line"><span style="color:#393A34;">  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#393A34;">  kind: ClusterRole</span></span>
<span class="line"><span style="color:#393A34;">  name: admin</span></span>
<span class="line"><span style="color:#393A34;">subjects:</span></span>
<span class="line"><span style="color:#393A34;">- apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#393A34;">  kind: User</span></span>
<span class="line"><span style="color:#393A34;">  name: kaliarch</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5207\u6362\u7528\u6237\u548C\u73AF\u5883\u4E0A\u4E0B\u6587</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl config use-context kaliarch@kubernetes</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl config use-context kaliarch@kubernetes</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6D4B\u8BD5\u7528\u6237\u662F\u5426\u62E5\u6709 get \u6743\u9650\uFF0C\u7531\u4E8E\u4F7F\u7528\u4E86 rolebinding \uFF0C\u6240\u4EE5 cluster-reader \u88AB\u9650\u5236\u5230\u5F53\u524D\u547D\u540D\u7A7A\u95F4</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ kubectl get pods -n kube-system</span></span>
<span class="line"><span style="color:#DBD7CA;">$ kubectl config use-context kubernetes-admin@kubernetes</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ kubectl get pods -n kube-system</span></span>
<span class="line"><span style="color:#393A34;">$ kubectl config use-context kubernetes-admin@kubernetes</span></span>
<span class="line"></span></code></pre></div><h2 id="_14-7-rbac\u6388\u6743" tabindex="-1">14.7 RBAC\u6388\u6743 <a class="header-anchor" href="#_14-7-rbac\u6388\u6743" aria-hidden="true">#</a></h2><p>\u5728 bind \u6388\u6743\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7ED1\u5B9A\u7684\u7528\u6237\u4E3B\u4F53\u6709\uFF1Auser\u3001group</p><ul><li>\u4F7F\u7528 rolebinding \u548C clusterrolebinding \u7ED1\u5B9A</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">\u7ED1\u5B9A\u5230 user\uFF1A\u8868\u793A\u53EA\u6709\u8FD9\u4E00\u4E2A\u7528\u6237\u62E5\u6709 role \u6216\u8005 clusterrole \u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#DBD7CA;">\u7ED1\u5B9A\u5230 group\uFF1A\u8868\u793A\u8FD9\u4E2A\u7EC4\u5185\u7684\u6240\u6709\u7528\u6237\u90FD\u5177\u6709\u4E86 role \u6216\u8005 clusterrole \u7684\u6743\u9650</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">\u7ED1\u5B9A\u5230 user\uFF1A\u8868\u793A\u53EA\u6709\u8FD9\u4E00\u4E2A\u7528\u6237\u62E5\u6709 role \u6216\u8005 clusterrole \u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#393A34;">\u7ED1\u5B9A\u5230 group\uFF1A\u8868\u793A\u8FD9\u4E2A\u7EC4\u5185\u7684\u6240\u6709\u7528\u6237\u90FD\u5177\u6709\u4E86 role \u6216\u8005 clusterrole \u7684\u6743\u9650</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u521B\u5EFA\u7528\u6237\u65F6\u5019\u52A0\u5165\u7EC4\uFF0C\u52A0\u5165\u7EC4\u540E\u8D26\u6237\u81EA\u52A8\u96C6\u6210\u8BE5\u7EC4\u7684\u6743\u9650</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u79C1\u94A5</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">umask 077</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> openssl genrsa -out kaliarch.key 2048</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u751F\u6210\u8BC1\u4E66\u7B7E\u7F72\u8BF7\u6C42\uFF0CO \u662F\u7EC4\uFF0CCN \u5C31\u662F\u8D26\u53F7\uFF0C\u8FD9\u4E2A\u8D26\u53F7\u88AB k8s \u7528\u6765\u8BC6\u522B\u8EAB\u4EFD\uFF0C\u6388\u6743\u4E5F\u9700\u8981\u6388\u6743\u8FD9\u4E2A\u8D26\u53F7</span></span>
<span class="line"><span style="color:#DBD7CA;">openssl req -new -key kaliarch.key -out kaliarch.csr -subj </span><span style="color:#C98A7D;">&quot;O=system:masters/CN=kaliarch/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528 CA \u7B7E\u7F72\u8BC1\u4E66\uFF0C\u5E76\u4E14\u5728 1800 \u5929\u5185\u6709\u6548</span></span>
<span class="line"><span style="color:#DBD7CA;">openssl x509 -req -in kaliarch.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out kaliarch.crt -days 1800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u8BC1\u4E66</span></span>
<span class="line"><span style="color:#DBD7CA;">openssl x509 -in kaliarch.crt -text -noout</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u79C1\u94A5</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">umask 077</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> openssl genrsa -out kaliarch.key 2048</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u751F\u6210\u8BC1\u4E66\u7B7E\u7F72\u8BF7\u6C42\uFF0CO \u662F\u7EC4\uFF0CCN \u5C31\u662F\u8D26\u53F7\uFF0C\u8FD9\u4E2A\u8D26\u53F7\u88AB k8s \u7528\u6765\u8BC6\u522B\u8EAB\u4EFD\uFF0C\u6388\u6743\u4E5F\u9700\u8981\u6388\u6743\u8FD9\u4E2A\u8D26\u53F7</span></span>
<span class="line"><span style="color:#393A34;">openssl req -new -key kaliarch.key -out kaliarch.csr -subj </span><span style="color:#B56959;">&quot;O=system:masters/CN=kaliarch/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528 CA \u7B7E\u7F72\u8BC1\u4E66\uFF0C\u5E76\u4E14\u5728 1800 \u5929\u5185\u6709\u6548</span></span>
<span class="line"><span style="color:#393A34;">openssl x509 -req -in kaliarch.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out kaliarch.crt -days 1800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u8BC1\u4E66</span></span>
<span class="line"><span style="color:#393A34;">openssl x509 -in kaliarch.crt -text -noout</span></span>
<span class="line"></span></code></pre></div>`,60),o=[e];function c(r,t,i,y,d,A){return a(),n("div",null,o)}var B=s(p,[["render",c]]);export{D as __pageData,B as default};
