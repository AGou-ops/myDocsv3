import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const T=JSON.parse('{"title":"firewalld iptables\u5FEB\u901F\u624B\u518C","description":"","frontmatter":{},"headers":[{"level":2,"title":"Netfilter \u673A\u5236","slug":"netfilter-\u673A\u5236"},{"level":2,"title":"iptables","slug":"iptables"},{"level":3,"title":"\u4E94\u94FE\uFF1A","slug":"\u4E94\u94FE\uFF1A"},{"level":3,"title":"\u56DB\u8868","slug":"\u56DB\u8868"},{"level":3,"title":"\u8868\u94FE\u5173\u7CFB","slug":"\u8868\u94FE\u5173\u7CFB"},{"level":3,"title":"\u76F8\u5173\u547D\u4EE4\uFF08CRUD\uFF09","slug":"\u76F8\u5173\u547D\u4EE4\uFF08crud\uFF09"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"},{"level":2,"title":"firewalld","slug":"firewalld"},{"level":3,"title":"\u57FA\u7840","slug":"\u57FA\u7840"},{"level":3,"title":"\u76F8\u5173\u547D\u4EE4","slug":"\u76F8\u5173\u547D\u4EE4"},{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6-1"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Firewalld IPtables\u5FEB\u901F\u624B\u518C.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Firewalld IPtables\u5FEB\u901F\u624B\u518C.md"},e=l(`<h1 id="firewalld-iptables\u5FEB\u901F\u624B\u518C" tabindex="-1">firewalld iptables\u5FEB\u901F\u624B\u518C <a class="header-anchor" href="#firewalld-iptables\u5FEB\u901F\u624B\u518C" aria-hidden="true">#</a></h1><h2 id="netfilter-\u673A\u5236" tabindex="-1">Netfilter \u673A\u5236 <a class="header-anchor" href="#netfilter-\u673A\u5236" aria-hidden="true">#</a></h2><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHlnZw==,size_16,color_FFFFFF,t_70.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">\u62A5\u6587\u6D41\u5411\uFF1A</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">     \u6D41\u5165\u672C\u673A\uFF1APREROUTING --&gt; INPUT--&gt;\u7528\u6237\u7A7A\u95F4\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">     \u6D41\u51FA\u672C\u673A\uFF1A\u7528\u6237\u7A7A\u95F4\u8FDB\u7A0B--&gt;OUTPUT--&gt; POSTROUTING</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">     \u8F6C\u53D1\uFF1APREROUTING --&gt; FORWARD --&gt; POSTROUTING</span></span>
<span class="line"><span style="color:#dbd7ca;">     </span></span>
<span class="line"><span style="color:#dbd7ca;">\u5185\u6838\u4E2D\u6570\u636E\u5305\u7684\u4F20\u8F93\u8FC7\u7A0B\uFF1A</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">   (1)\u5F53\u4E00\u4E2A\u6570\u636E\u5305\u8FDB\u5165\u7F51\u5361\u65F6\uFF0C\u6570\u636E\u5305\u9996\u5148\u8FDB\u5165PREROUTING\u94FE\uFF0C\u5185\u6838\u6839\u636E\u6570\u636E\u5305\u76EE\u7684IP\u5224\u65AD\u662F\u5426\u9700\u8981\u8F6C\u9001\u51FA\u53BB</span></span>
<span class="line"><span style="color:#dbd7ca;">   </span></span>
<span class="line"><span style="color:#dbd7ca;">   (2)\u5982\u679C\u6570\u636E\u5305\u5C31\u662F\u8FDB\u5165\u672C\u673A\u7684\uFF0C\u6570\u636E\u5305\u5C31\u4F1A\u5230\u8FBEINPUT\u94FE\u3002\u7ECFINPUT\u94FE\u68C0\u67E5\u540E\uFF0C\u6570\u636E\u5305\u88AB\u53D1\u5F80\u672C\u5730\u8FDB\u7A0B\u3002</span></span>
<span class="line"><span style="color:#dbd7ca;">      \u672C\u5730\u8FDB\u7A0B\u8FDB\u884C\u76F8\u5E94\u5904\u7406\u540E\u53D1\u9001\u54CD\u5E94\u6570\u636E\u5305\uFF0C\u6570\u636E\u5305\u7ECF\u8FC7OUTPUT\u94FE\uFF0C\u7136\u540E\u5230\u8FBEPOSTROUTING\u94FE\u8F93\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#dbd7ca;">      \u5982\u679C\u6570\u636E\u5305\u662F\u8981\u8F6C\u53D1\u51FA\u53BB\u7684\uFF0C\u4E14\u5185\u6838\u5141\u8BB8\u8F6C\u53D1\uFF0C\u6570\u636E\u5305\u5C31\u4F1A\u5411\u53F3\u79FB\u52A8\uFF0C\u7ECF\u8FC7FORWARD\u94FE\uFF0C\u7136\u540E\u5230\u8FBEPOSTROUTING\u94FE\u8F93\u51FA\u3002</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">\u62A5\u6587\u6D41\u5411\uFF1A</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">     \u6D41\u5165\u672C\u673A\uFF1APREROUTING --&gt; INPUT--&gt;\u7528\u6237\u7A7A\u95F4\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">     \u6D41\u51FA\u672C\u673A\uFF1A\u7528\u6237\u7A7A\u95F4\u8FDB\u7A0B--&gt;OUTPUT--&gt; POSTROUTING</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">     \u8F6C\u53D1\uFF1APREROUTING --&gt; FORWARD --&gt; POSTROUTING</span></span>
<span class="line"><span style="color:#393a34;">     </span></span>
<span class="line"><span style="color:#393a34;">\u5185\u6838\u4E2D\u6570\u636E\u5305\u7684\u4F20\u8F93\u8FC7\u7A0B\uFF1A</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">   (1)\u5F53\u4E00\u4E2A\u6570\u636E\u5305\u8FDB\u5165\u7F51\u5361\u65F6\uFF0C\u6570\u636E\u5305\u9996\u5148\u8FDB\u5165PREROUTING\u94FE\uFF0C\u5185\u6838\u6839\u636E\u6570\u636E\u5305\u76EE\u7684IP\u5224\u65AD\u662F\u5426\u9700\u8981\u8F6C\u9001\u51FA\u53BB</span></span>
<span class="line"><span style="color:#393a34;">   </span></span>
<span class="line"><span style="color:#393a34;">   (2)\u5982\u679C\u6570\u636E\u5305\u5C31\u662F\u8FDB\u5165\u672C\u673A\u7684\uFF0C\u6570\u636E\u5305\u5C31\u4F1A\u5230\u8FBEINPUT\u94FE\u3002\u7ECFINPUT\u94FE\u68C0\u67E5\u540E\uFF0C\u6570\u636E\u5305\u88AB\u53D1\u5F80\u672C\u5730\u8FDB\u7A0B\u3002</span></span>
<span class="line"><span style="color:#393a34;">      \u672C\u5730\u8FDB\u7A0B\u8FDB\u884C\u76F8\u5E94\u5904\u7406\u540E\u53D1\u9001\u54CD\u5E94\u6570\u636E\u5305\uFF0C\u6570\u636E\u5305\u7ECF\u8FC7OUTPUT\u94FE\uFF0C\u7136\u540E\u5230\u8FBEPOSTROUTING\u94FE\u8F93\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#393a34;">      \u5982\u679C\u6570\u636E\u5305\u662F\u8981\u8F6C\u53D1\u51FA\u53BB\u7684\uFF0C\u4E14\u5185\u6838\u5141\u8BB8\u8F6C\u53D1\uFF0C\u6570\u636E\u5305\u5C31\u4F1A\u5411\u53F3\u79FB\u52A8\uFF0C\u7ECF\u8FC7FORWARD\u94FE\uFF0C\u7136\u540E\u5230\u8FBEPOSTROUTING\u94FE\u8F93\u51FA\u3002</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="iptables" tabindex="-1">iptables <a class="header-anchor" href="#iptables" aria-hidden="true">#</a></h2><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/ac586d71025972c3c200ca6bc96917c5.png" alt="iptables dataflo"></p><h3 id="\u4E94\u94FE\uFF1A" tabindex="-1">\u4E94\u94FE\uFF1A <a class="header-anchor" href="#\u4E94\u94FE\uFF1A" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">INPUT\u94FE\uFF1A\u5F53\u63A5\u6536\u5230\u9632\u706B\u5899\u672C\u673A\u5730\u5740\u7684\u6570\u636E\u5305</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">\u5165\u7AD9</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">\u65F6\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">OUTPUT\u94FE\uFF1A\u5F53\u9632\u706B\u5899\u672C\u673A\u5411\u5916\u53D1\u9001\u6570\u636E\u5305</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">\u51FA\u7AD9</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">\u65F6\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">FORWARD\u94FE\uFF1A\u5F53\u63A5\u6536\u5230\u9700\u8981\u901A\u8FC7\u9632\u706B\u5899\u53D1\u9001\u7ED9\u5176\u4ED6\u5730\u5740\u7684\u6570\u636E\u5305</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">\u8F6C\u53D1</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">\u65F6\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">PREROUTING\u94FE\uFF1A\u5728\u5BF9\u6570\u636E\u5305\u4F5C\u8DEF\u7531\u9009\u62E9\u4E4B\u524D\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF0C\u5982DNAT\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">POSTROUTING\u94FE\uFF1A\u5728\u5BF9\u6570\u636E\u5305\u4F5C\u8DEF\u7531\u9009\u62E9\u4E4B\u540E\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF0C\u5982SNAT\u3002</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">INPUT\u94FE\uFF1A\u5F53\u63A5\u6536\u5230\u9632\u706B\u5899\u672C\u673A\u5730\u5740\u7684\u6570\u636E\u5305</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">\u5165\u7AD9</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">\u65F6\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">OUTPUT\u94FE\uFF1A\u5F53\u9632\u706B\u5899\u672C\u673A\u5411\u5916\u53D1\u9001\u6570\u636E\u5305</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">\u51FA\u7AD9</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">\u65F6\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">FORWARD\u94FE\uFF1A\u5F53\u63A5\u6536\u5230\u9700\u8981\u901A\u8FC7\u9632\u706B\u5899\u53D1\u9001\u7ED9\u5176\u4ED6\u5730\u5740\u7684\u6570\u636E\u5305</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">\u8F6C\u53D1</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">\u65F6\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">PREROUTING\u94FE\uFF1A\u5728\u5BF9\u6570\u636E\u5305\u4F5C\u8DEF\u7531\u9009\u62E9\u4E4B\u524D\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF0C\u5982DNAT\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">POSTROUTING\u94FE\uFF1A\u5728\u5BF9\u6570\u636E\u5305\u4F5C\u8DEF\u7531\u9009\u62E9\u4E4B\u540E\uFF0C\u5E94\u7528\u6B64\u94FE\u4E2D\u7684\u89C4\u5219\uFF0C\u5982SNAT\u3002</span></span>
<span class="line"></span></code></pre></div><h3 id="\u56DB\u8868" tabindex="-1">\u56DB\u8868 <a class="header-anchor" href="#\u56DB\u8868" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">\u2013 filter\u8868\uFF1A\u4E3B\u8981\u7528\u4E8E\u5BF9\u6570\u636E\u5305\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u6839\u636E\u5177\u4F53\u7684\u89C4\u5219\u51B3\u5B9A\u662F\u5426\u653E\u884C\u8BE5\u6570\u636E\u5305</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">\u5982DROP\u3001ACCEPT\u3001REJECT</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">\u3001LOG</span><span style="color:#858585;">[</span><span style="color:#C98A7D;">\`\u8BB0\u5F55\u65E5\u5FD7\u4FE1\u606F\uFF1F\`</span><span style="color:#858585;">])</span><span style="color:#DBD7CA;">\uFF0C\u6240\u8C13\u7684\u9632\u706B\u5899\u5176\u5B9E\u57FA\u672C\u4E0A\u662F\u6307\u8FD9\u5F20\u8868\u4E0A\u7684\u8FC7\u6EE4\u89C4\u5219\uFF0C\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_filter\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2013 nat\u8868\uFF1Anetwork address translation\uFF0C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\u529F\u80FD\uFF0C\u4E3B\u8981\u7528\u4E8E\u4FEE\u6539\u6570\u636E\u5305\u7684IP\u5730\u5740\u3001\u7AEF\u53E3\u53F7\u7B49\u4FE1\u606F</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\uFF0C\u5982SNAT\u3001DNAT\u3001MASQUERADE</span><span style="color:#858585;">[</span><span style="color:#C98A7D;">\`SNAT\u7684\u4E00\u79CD\u7279\u6B8A\u5F62\u5F0F\uFF0C\u9002\u7528\u4E8E\u52A8\u6001\u7684\u3001\u4E34\u65F6\u4F1A\u53D8\u5F97IP\u4E0A\`</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">\u3001REDIRECT</span><span style="color:#858585;">[</span><span style="color:#C98A7D;">\`\u5728\u672C\u673A\u505A\u7AEF\u53E3\u6620\u5C04\`</span><span style="color:#858585;">])</span><span style="color:#DBD7CA;">\u3002\u5C5E\u4E8E\u4E00\u4E2A\u6D41\u7684\u5305</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">\u56E0\u4E3A\u5305\u7684\u5927\u5C0F\u9650\u5236\u5BFC\u81F4\u6570\u636E\u53EF\u80FD\u4F1A\u88AB\u5206\u6210\u591A\u4E2A\u6570\u636E\u5305</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">\u53EA\u4F1A\u7ECF\u8FC7\u8FD9\u4E2A\u8868\u4E00\u6B21\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u5305\u88AB\u5141\u8BB8\u505ANAT\u6216Masqueraded\uFF0C\u90A3\u4E48\u4F59\u4E0B\u7684\u5305\u90FD\u4F1A\u81EA\u52A8\u5730\u88AB\u505A\u76F8\u540C\u7684\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F59\u4E0B\u7684\u5305\u4E0D\u4F1A\u518D\u901A\u8FC7\u8FD9\u4E2A\u8868\u3002\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_nat\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2013 mangle\u8868\uFF1A\u62C6\u89E3\u62A5\u6587\uFF0C\u505A\u51FA\u4FEE\u6539\uFF0C\u5E76\u91CD\u65B0\u5C01\u88C5\uFF0C\u4E3B\u8981\u7528\u4E8E\u4FEE\u6539\u6570\u636E\u5305\u7684TOS</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">Type Of Service\uFF0C\u670D\u52A1\u7C7B\u578B</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">\u3001TTL</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">Time To Live\uFF0C\u751F\u5B58\u5468\u671F</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">\u6307\u4EE5\u53CA\u4E3A\u6570\u636E\u5305\u8BBE\u7F6EMark\u6807\u8BB0\uFF0C\u4EE5\u5B9E\u73B0Qos</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">Quality Of Service\uFF0C\u670D\u52A1\u8D28\u91CF</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">\u8C03\u6574\u4EE5\u53CA\u7B56\u7565\u8DEF\u7531\u7B49\u5E94\u7528\uFF0C\u7531\u4E8E\u9700\u8981\u76F8\u5E94\u7684\u8DEF\u7531\u8BBE\u5907\u652F\u6301\uFF0C\u56E0\u6B64\u5E94\u7528\u5E76\u4E0D\u5E7F\u6CDB\u3002\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_mangle\uFF1B</span></span>
<span class="line"><span style="color:#DBD7CA;">\u2013 raw\u8868\uFF1A\u662F\u81EA1.2.9\u4EE5\u540E\u7248\u672C\u7684iptables\u65B0\u589E\u7684\u8868\uFF0C\u4E3B\u8981\u7528\u4E8E\u51B3\u5B9A\u6570\u636E\u5305\u662F\u5426\u88AB\u72B6\u6001\u8DDF\u8E2A\u673A\u5236\u5904\u7406\uFF0C\u5728\u5339\u914D\u6570\u636E\u5305\u65F6\uFF0Craw\u8868\u7684\u89C4\u5219\u8981\u4F18\u5148\u4E8E\u5176\u4ED6\u8868\uFF0C\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_raw\u3002</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">\u2013 filter\u8868\uFF1A\u4E3B\u8981\u7528\u4E8E\u5BF9\u6570\u636E\u5305\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u6839\u636E\u5177\u4F53\u7684\u89C4\u5219\u51B3\u5B9A\u662F\u5426\u653E\u884C\u8BE5\u6570\u636E\u5305</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">\u5982DROP\u3001ACCEPT\u3001REJECT</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">\u3001LOG</span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">\`\u8BB0\u5F55\u65E5\u5FD7\u4FE1\u606F\uFF1F\`</span><span style="color:#8E8F8B;">])</span><span style="color:#393A34;">\uFF0C\u6240\u8C13\u7684\u9632\u706B\u5899\u5176\u5B9E\u57FA\u672C\u4E0A\u662F\u6307\u8FD9\u5F20\u8868\u4E0A\u7684\u8FC7\u6EE4\u89C4\u5219\uFF0C\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_filter\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">\u2013 nat\u8868\uFF1Anetwork address translation\uFF0C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\u529F\u80FD\uFF0C\u4E3B\u8981\u7528\u4E8E\u4FEE\u6539\u6570\u636E\u5305\u7684IP\u5730\u5740\u3001\u7AEF\u53E3\u53F7\u7B49\u4FE1\u606F</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\uFF0C\u5982SNAT\u3001DNAT\u3001MASQUERADE</span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">\`SNAT\u7684\u4E00\u79CD\u7279\u6B8A\u5F62\u5F0F\uFF0C\u9002\u7528\u4E8E\u52A8\u6001\u7684\u3001\u4E34\u65F6\u4F1A\u53D8\u5F97IP\u4E0A\`</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">\u3001REDIRECT</span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">\`\u5728\u672C\u673A\u505A\u7AEF\u53E3\u6620\u5C04\`</span><span style="color:#8E8F8B;">])</span><span style="color:#393A34;">\u3002\u5C5E\u4E8E\u4E00\u4E2A\u6D41\u7684\u5305</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">\u56E0\u4E3A\u5305\u7684\u5927\u5C0F\u9650\u5236\u5BFC\u81F4\u6570\u636E\u53EF\u80FD\u4F1A\u88AB\u5206\u6210\u591A\u4E2A\u6570\u636E\u5305</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">\u53EA\u4F1A\u7ECF\u8FC7\u8FD9\u4E2A\u8868\u4E00\u6B21\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u5305\u88AB\u5141\u8BB8\u505ANAT\u6216Masqueraded\uFF0C\u90A3\u4E48\u4F59\u4E0B\u7684\u5305\u90FD\u4F1A\u81EA\u52A8\u5730\u88AB\u505A\u76F8\u540C\u7684\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F59\u4E0B\u7684\u5305\u4E0D\u4F1A\u518D\u901A\u8FC7\u8FD9\u4E2A\u8868\u3002\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_nat\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">\u2013 mangle\u8868\uFF1A\u62C6\u89E3\u62A5\u6587\uFF0C\u505A\u51FA\u4FEE\u6539\uFF0C\u5E76\u91CD\u65B0\u5C01\u88C5\uFF0C\u4E3B\u8981\u7528\u4E8E\u4FEE\u6539\u6570\u636E\u5305\u7684TOS</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">Type Of Service\uFF0C\u670D\u52A1\u7C7B\u578B</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">\u3001TTL</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">Time To Live\uFF0C\u751F\u5B58\u5468\u671F</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">\u6307\u4EE5\u53CA\u4E3A\u6570\u636E\u5305\u8BBE\u7F6EMark\u6807\u8BB0\uFF0C\u4EE5\u5B9E\u73B0Qos</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">Quality Of Service\uFF0C\u670D\u52A1\u8D28\u91CF</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">\u8C03\u6574\u4EE5\u53CA\u7B56\u7565\u8DEF\u7531\u7B49\u5E94\u7528\uFF0C\u7531\u4E8E\u9700\u8981\u76F8\u5E94\u7684\u8DEF\u7531\u8BBE\u5907\u652F\u6301\uFF0C\u56E0\u6B64\u5E94\u7528\u5E76\u4E0D\u5E7F\u6CDB\u3002\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_mangle\uFF1B</span></span>
<span class="line"><span style="color:#393A34;">\u2013 raw\u8868\uFF1A\u662F\u81EA1.2.9\u4EE5\u540E\u7248\u672C\u7684iptables\u65B0\u589E\u7684\u8868\uFF0C\u4E3B\u8981\u7528\u4E8E\u51B3\u5B9A\u6570\u636E\u5305\u662F\u5426\u88AB\u72B6\u6001\u8DDF\u8E2A\u673A\u5236\u5904\u7406\uFF0C\u5728\u5339\u914D\u6570\u636E\u5305\u65F6\uFF0Craw\u8868\u7684\u89C4\u5219\u8981\u4F18\u5148\u4E8E\u5176\u4ED6\u8868\uFF0C\u5BF9\u5E94\u5185\u6838\u6A21\u5757iptables_raw\u3002</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8868\u94FE\u5173\u7CFB" tabindex="-1">\u8868\u94FE\u5173\u7CFB <a class="header-anchor" href="#\u8868\u94FE\u5173\u7CFB" aria-hidden="true">#</a></h3><p>\u5E76\u975E\u6240\u6709\u7684\u94FE\u90FD\u53EF\u4EE5\u5E94\u7528\u6240\u6709\u7684\u8868\uFF0C\u4EE5\u4E0B\u662F\u4ED6\u4EEC\u7684\u5BF9\u5E94\u5173\u7CFB\uFF08\u4E0A\u4E0B\u987A\u5E8F\u4E3A\u8868\u7684\u4F18\u5148\u7EA7\uFF09\uFF1A</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/55afd069e4f1ba01d87cee0b9322c6c7.png" alt="hook point chain - table"></p><p>\u7B80\u5355\u8BB0\u4F4F\uFF1A<code>filter</code>\u8868\u53EF\u4EE5\u7BA1\u7406<code>INPUT/FORWARD/OUTPUT</code>\u94FE\uFF0C<code>nat</code>\u8868\u53EF\u4EE5\u7BA1\u7406<code>PREROUTING/INPUT/OUTPUT/POSTROUTING</code>\u94FE\u3002</p><p>\u6B64\u5916\uFF1A<code>mangle</code>\u8868\u53EF\u4EE5\u7BA1\u7406\u6240\u6709\u94FE\uFF0C<code>raw</code>\u8868\u53EF\u4EE5\u7BA1\u7406<code>PREROUTING/OUTPUT</code>\u94FE\uFF0C\u8FD9\u4E24\u4E2A\u8868\u5176\u5B9E\u5F88\u5C11\u7528\u5230.</p><h3 id="\u76F8\u5173\u547D\u4EE4\uFF08crud\uFF09" tabindex="-1">\u76F8\u5173\u547D\u4EE4\uFF08CRUD\uFF09 <a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4\uFF08crud\uFF09" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u67E5\u770B\u6307\u5B9A\u94FE\u4E0A\u7684\u89C4\u5219\u4FE1\u606F\uFF0C\u4E0D\u6307\u5B9A\u94FE\u5219\u67E5\u8BE2\u5168\u90E8</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -L INPUT</span></span>
<span class="line"><span style="color:#758575;"># -t\u6307\u5B9A\u8868\u540D\uFF0C\u9ED8\u8BA4\u4E0D\u5199\u5C31\u662Ffilter\u8868\uFF0C</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -L</span></span>
<span class="line"><span style="color:#758575;"># \u5E38\u7528\u7EC4\u5408</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -vnL --line-numbers</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u589E\u52A0\u89C4\u5219\uFF0C-A\u540E\u9762\u6DFB\u52A0\u89C4\u5219\uFF0C-I\u5728\u524D\u9762\u6DFB\u52A0\u89C4\u5219</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -s 10.37.129.2 -j DROP</span></span>
<span class="line"><span style="color:#758575;"># * \u53C2\u6570\uFF1A</span></span>
<span class="line"><span style="color:#758575;"># * -s \u6E90ip\uFF0Csource</span></span>
<span class="line"><span style="color:#758575;"># * -j \u8DF3\u8F6Cjump\uFF0C\u540E\u9762\u53EF\u4EE5\u63A5\`target\`\u6216\u8005\`action\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664INPUT\u94FEfilter\u8868\u7684\u7B2C\u4E8C\u6761\u89C4\u5219</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -D INPUT 2</span></span>
<span class="line"><span style="color:#758575;"># \u6839\u636E\u6761\u4EF6\u8FDB\u884C\u5220\u9664</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -D INPUT -s 10.37.129.2 -j DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u6E05\u7A7A\u67D0\u94FE\u67D0\u8868\u4E0B\u7684\u6240\u6709\u89C4\u5219</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -F INPUT</span></span>
<span class="line"><span style="color:#758575;"># \u4E0D\u6307\u5B9A\u8868\u548C\u94FE\u5219\u6E05\u7A7A\u6240\u6709</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u66FF\u6362\uFF08\u4FEE\u6539\uFF09\u89C4\u5219</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -R INPUT 1 -s 10.37.129.3 -j ACCEPT</span></span>
<span class="line"><span style="color:#758575;"># \u53C2\u6570\uFF1A -R replace \u66FF\u6362\u89C4\u5219</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u9ED8\u8BA4\u89C4\u5219\u4F5C\u7528\u4E8E\u6574\u4E2A\u94FE\uFF0C\u4E0D\u9488\u5BF9\u67D0\u4E2A\u8868</span></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539\u7B56\u7565\uFF0C\u5C06FORWARD\u94FE\u7684\u9ED8\u8BA4\u89C4\u5219\u8BBE\u7F6E\u4E3ADROP</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -P FORWARD DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4FDD\u5B58\u89C4\u5219\uFF0C\u5BF9\u4E8ECentOS7\uFF0C\u9700\u8981yum install -y iptables-services</span></span>
<span class="line"><span style="color:#DBD7CA;">services iptables save</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u6307\u5B9A\u94FE\u4E0A\u7684\u89C4\u5219\u4FE1\u606F\uFF0C\u4E0D\u6307\u5B9A\u94FE\u5219\u67E5\u8BE2\u5168\u90E8</span></span>
<span class="line"><span style="color:#393A34;">iptables -L INPUT</span></span>
<span class="line"><span style="color:#A0ADA0;"># -t\u6307\u5B9A\u8868\u540D\uFF0C\u9ED8\u8BA4\u4E0D\u5199\u5C31\u662Ffilter\u8868\uFF0C</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -L</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5E38\u7528\u7EC4\u5408</span></span>
<span class="line"><span style="color:#393A34;">iptables -vnL --line-numbers</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u589E\u52A0\u89C4\u5219\uFF0C-A\u540E\u9762\u6DFB\u52A0\u89C4\u5219\uFF0C-I\u5728\u524D\u9762\u6DFB\u52A0\u89C4\u5219</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -s 10.37.129.2 -j DROP</span></span>
<span class="line"><span style="color:#A0ADA0;"># * \u53C2\u6570\uFF1A</span></span>
<span class="line"><span style="color:#A0ADA0;"># * -s \u6E90ip\uFF0Csource</span></span>
<span class="line"><span style="color:#A0ADA0;"># * -j \u8DF3\u8F6Cjump\uFF0C\u540E\u9762\u53EF\u4EE5\u63A5\`target\`\u6216\u8005\`action\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664INPUT\u94FEfilter\u8868\u7684\u7B2C\u4E8C\u6761\u89C4\u5219</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -D INPUT 2</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6839\u636E\u6761\u4EF6\u8FDB\u884C\u5220\u9664</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -D INPUT -s 10.37.129.2 -j DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6E05\u7A7A\u67D0\u94FE\u67D0\u8868\u4E0B\u7684\u6240\u6709\u89C4\u5219</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -F INPUT</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E0D\u6307\u5B9A\u8868\u548C\u94FE\u5219\u6E05\u7A7A\u6240\u6709</span></span>
<span class="line"><span style="color:#393A34;">iptables -F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u66FF\u6362\uFF08\u4FEE\u6539\uFF09\u89C4\u5219</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -R INPUT 1 -s 10.37.129.3 -j ACCEPT</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53C2\u6570\uFF1A -R replace \u66FF\u6362\u89C4\u5219</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u9ED8\u8BA4\u89C4\u5219\u4F5C\u7528\u4E8E\u6574\u4E2A\u94FE\uFF0C\u4E0D\u9488\u5BF9\u67D0\u4E2A\u8868</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u7B56\u7565\uFF0C\u5C06FORWARD\u94FE\u7684\u9ED8\u8BA4\u89C4\u5219\u8BBE\u7F6E\u4E3ADROP</span></span>
<span class="line"><span style="color:#393A34;">iptables -P FORWARD DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FDD\u5B58\u89C4\u5219\uFF0C\u5BF9\u4E8ECentOS7\uFF0C\u9700\u8981yum install -y iptables-services</span></span>
<span class="line"><span style="color:#393A34;">services iptables save</span></span>
<span class="line"></span></code></pre></div><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># -d\uFF1Adestination\uFF0C\u7528\u4E8E\u5339\u914D\u62A5\u6587\u7684\u76EE\u6807\u5730\u5740\uFF0C\u53EF\u4EE5\u540C\u65F6\u6307\u5B9A\u591A\u4E2Aip(\u9017\u53F7\u9694\u5F00\uFF0C\u9017\u53F7\u4E24\u4FA7\u90FD\u4E0D\u5141\u8BB8\u6709\u7A7A\u683C)\uFF0C\u4E5F\u53EF\u6307\u5B9Aip\u6BB5\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.111,192.168.1.118\xA0-j\xA0DROP</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-d\xA0192.168.1.0/24\xA0-j\xA0ACCEPT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">\xA0-d\xA0192.168.1.0/24\xA0-j\xA0ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06\u672C\u673A\u76847777\u7AEF\u53E3\u8F6C\u53D1\u52306666\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -A PREROUTING -p tcp --dport 7777 -j REDIRECT --to-port 6666</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5F00\u542F\u8F6C\u53D1\u529F\u80FD</span></span>
<span class="line"><span style="color:#DBD7CA;">sysctl -w net.ipv4.ip_forward=1</span></span>
<span class="line"><span style="color:#758575;"># client -&gt; 192.168.1.168:6666 -&gt; 192.168.1.8:7777</span></span>
<span class="line"><span style="color:#758575;"># \u5C06\u672C\u673A\u76846666\u7AEF\u63A5\u53E3\u8F6C\u53D1\u5230 192.168.1.8 \u4E3B\u673A\u76847777\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -A PREROUTING -p tcp --dport 6666 -j DNAT --to-destination 192.168.1.8:7777</span></span>
<span class="line"><span style="color:#758575;"># \u5C06client\u7684\u5730\u5740\u8F6C\u6362\u4E3A192.168.1.168\uFF0C</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -A POSTROUTING -p tcp -d 192.168.1.8 --dport 7777 -j SNAT --to-source 192.168.1.168</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u8BBF\u95EE\u672C\u673A\u768480\u7AEF\u53E3\uFF0C\u8F6C\u53D1\u52308080\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080</span></span>
<span class="line"><span style="color:#758575;"># \u5C06\u672C\u673A\u8BBF\u95EE80\u7AEF\u53E3\u7684\u8F6C\u53D1\u5230\u672C\u673A8080</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -A OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j DNAT --to 127.0.0.1:8080</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -A OUTPUT -p tcp -d 192.168.4.177 --dport 80 -j DNAT --to 127.0.0.1:8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5C06192.168.75.3 8000\u7AEF\u53E3\u5C06\u6570\u636E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u65F6\uFF0C\u5C06\u6E90ip\u6539\u4E3A192.168.75.5</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t nat -A POSTROUTING -d 192.168.75.3 -p tcp --dport 8000 -j SNAT --to 192.168.75.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># -p\uFF1A\u7528\u4E8E\u5339\u914D\u62A5\u6587\u7684\u534F\u8BAE\u7C7B\u578B,\u53EF\u4EE5\u5339\u914D\u7684\u534F\u8BAE\u7C7B\u578Btcp\u3001udp\u3001udplite\u3001icmp\u3001esp\u3001ah\u3001sctp\u7B49\uFF08centos7\u4E2D\u8FD8\u652F\u6301icmpv6\u3001mh\uFF09\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p tcp -s 192.168.1.146 -j ACCEPT</span></span>
<span class="line"><span style="color:#758575;"># \u611F\u53F9\u53F7\u8868\u793A\u201C\u975E\u201D\uFF0C\u5373\u9664\u4E86\u5339\u914D\u8FD9\u4E2A\u6761\u4EF6\u7684\u90FDACCEPT\uFF0C\u4F46\u5339\u914D\u8FD9\u4E2A\u6761\u4EF6\u4E0D\u4E00\u5B9A\u5C31\u662FREJECT\u6216DROP\uFF1F\u8FD9\u8981\u770B\u662F\u5426\u6709\u4E3A\u5B83\u7279\u522B\u5199\u4E00\u6761\u89C4\u5219\uFF0C\u5982\u679C\u6CA1\u6709\u5199\u5C31\u4F1A\u7528\u9ED8\u8BA4\u7B56\u7565\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> -p udp -s 192.168.1.146 -j ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># -i\uFF1A\u7528\u4E8E\u5339\u914D\u62A5\u6587\u662F\u4ECE\u54EA\u4E2A\u7F51\u5361\u63A5\u53E3\u6D41\u5165\u672C\u673A\u7684\uFF0C\u7531\u4E8E\u5339\u914D\u6761\u4EF6\u53EA\u662F\u7528\u4E8E\u5339\u914D\u62A5\u6587\u6D41\u5165\u7684\u7F51\u5361\uFF0C\u6240\u4EE5\u5728OUTPUT\u94FE\u4E0EPOSTROUTING\u94FE\u4E2D\u4E0D\u80FD\u4F7F\u7528\u6B64\u9009\u9879\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p icmp -i eth0 -j DROP</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p icmp </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> -i eth0 -j DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># -o\uFF1A\u7528\u4E8E\u5339\u914D\u62A5\u6587\u5C06\u8981\u4ECE\u54EA\u4E2A\u7F51\u5361\u63A5\u53E3\u6D41\u51FA\u672C\u673A\uFF0C\u4E8E\u5339\u914D\u6761\u4EF6\u53EA\u662F\u7528\u4E8E\u5339\u914D\u62A5\u6587\u6D41\u51FA\u7684\u7F51\u5361\uFF0C\u6240\u4EE5\u5728INPUT\u94FE\u4E0EPREROUTING\u94FE\u4E2D\u4E0D\u80FD\u4F7F\u7528\u6B64\u9009\u9879</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-p\xA0icmp\xA0-o\xA0eth0\xA0-j\xA0DROP</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-p\xA0icmp\xA0</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">\xA0-o\xA0eth0\xA0-j\xA0DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># iptables\u6269\u5C55\u6A21\u5757</span></span>
<span class="line"><span style="color:#758575;"># TCP\u3001UDP\u6A21\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--sport\xA022\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--dport\xA022:25\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--dport\xA0:22\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--dport\xA080:\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">\xA0--sport\xA022\xA0-j\xA0ACCEPT</span></span>
<span class="line"><span style="color:#758575;"># multiport\u6A21\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.146\xA0-p\xA0udp\xA0-m\xA0multiport\xA0--sports\xA0137,138\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0--dports\xA022,80\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;">\xA0--dports\xA022,80\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0--dports\xA080:88\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0--dports\xA022,80:88\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#758575;"># ip-range</span></span>
<span class="line"><span style="color:#758575;"># --src-range(\u5339\u914D\u6E90\u5730\u5740\u8303\u56F4)</span></span>
<span class="line"><span style="color:#758575;"># --dst-range(\u5339\u914D\u76EE\u6807\u5730\u5740\u8303\u56F4)</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -m iprange --src-range 192.168.1.127-192.168.1.146 -j DROP</span></span>
<span class="line"><span style="color:#758575;"># string\uFF0C\u7528\u6765\u62E6\u622A\u6570\u636E\u5305\u4E2D\u7684\u67D0\u4E2A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#758575;"># --algo \u6307\u5B9A\u7B97\u6CD5\u5339\u914D\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -m string --algo bm --string </span><span style="color:#C98A7D;">&quot;XXOO&quot;</span><span style="color:#DBD7CA;"> -j REJECT</span></span>
<span class="line"><span style="color:#758575;"># time\uFF0C\u89C4\u5B9A\u67D0\u6BB5\u65F6\u95F4\u7684\u52A8\u4F5C</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p tcp --dport 80 -m </span><span style="color:#4D9375;">time</span><span style="color:#DBD7CA;"> --timestart 09:00:00 --timestop 18:00:00 -j REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p tcp --dport 443 -m </span><span style="color:#4D9375;">time</span><span style="color:#DBD7CA;"> --timestart 09:00:00 --timestop 18:00:00 -j REJECT</span></span>
<span class="line"><span style="color:#758575;"># connlimit</span></span>
<span class="line"><span style="color:#758575;"># \u9650\u5236ssh\u7AEF\u53E3\u7684\u8FDE\u63A5\u6570\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p tcp --dport 22 -m connlimit --connlimit-above 2 -j REJECT</span></span>
<span class="line"><span style="color:#758575;"># limit</span></span>
<span class="line"><span style="color:#758575;"># \u9650\u5236icmp\u7684\u6D41\u5165\u901F\u5EA6 </span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p icmp -m limit --limit 10/minite -j ACCEPT</span></span>
<span class="line"><span style="color:#758575;"># icmp\u6A21\u5757</span></span>
<span class="line"><span style="color:#758575;"># * icmp type</span></span>
<span class="line"><span style="color:#758575;"># 0 Echo Reply\u2014\u2014\u56DE\u663E\u5E94\u7B54\uFF08Ping\u5E94\u7B54\uFF09</span></span>
<span class="line"><span style="color:#758575;"># 8 Echo request\u2014\u2014\u56DE\u663E\u8BF7\u6C42\uFF08Ping\u8BF7\u6C42\uFF09	</span></span>
<span class="line"><span style="color:#758575;"># \u7981\u6B62\u6240\u6709icmp\u5305</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p icmp -j REJECT</span></span>
<span class="line"><span style="color:#758575;"># \u53EF\u4EE5ping\u522B\u4EBA\uFF0C\u522B\u4EBAping\u4E0D\u4E86\u81EA\u5DF1</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -p icmp --icmp-type 8/0 -j REJECT</span></span>
<span class="line"><span style="color:#758575;"># state\u6A21\u5757\uFF0C\u7528\u4E8E\u5904\u7406\u62A5\u6587\u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -t filter -I INPUT -m state --state RELATED, ESTABLISHED -j ACCEPT</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># -d\uFF1Adestination\uFF0C\u7528\u4E8E\u5339\u914D\u62A5\u6587\u7684\u76EE\u6807\u5730\u5740\uFF0C\u53EF\u4EE5\u540C\u65F6\u6307\u5B9A\u591A\u4E2Aip(\u9017\u53F7\u9694\u5F00\uFF0C\u9017\u53F7\u4E24\u4FA7\u90FD\u4E0D\u5141\u8BB8\u6709\u7A7A\u683C)\uFF0C\u4E5F\u53EF\u6307\u5B9Aip\u6BB5\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.111,192.168.1.118\xA0-j\xA0DROP</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-d\xA0192.168.1.0/24\xA0-j\xA0ACCEPT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">\xA0-d\xA0192.168.1.0/24\xA0-j\xA0ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u672C\u673A\u76847777\u7AEF\u53E3\u8F6C\u53D1\u52306666\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -A PREROUTING -p tcp --dport 7777 -j REDIRECT --to-port 6666</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F00\u542F\u8F6C\u53D1\u529F\u80FD</span></span>
<span class="line"><span style="color:#393A34;">sysctl -w net.ipv4.ip_forward=1</span></span>
<span class="line"><span style="color:#A0ADA0;"># client -&gt; 192.168.1.168:6666 -&gt; 192.168.1.8:7777</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u672C\u673A\u76846666\u7AEF\u63A5\u53E3\u8F6C\u53D1\u5230 192.168.1.8 \u4E3B\u673A\u76847777\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -A PREROUTING -p tcp --dport 6666 -j DNAT --to-destination 192.168.1.8:7777</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06client\u7684\u5730\u5740\u8F6C\u6362\u4E3A192.168.1.168\uFF0C</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -A POSTROUTING -p tcp -d 192.168.1.8 --dport 7777 -j SNAT --to-source 192.168.1.168</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBF\u95EE\u672C\u673A\u768480\u7AEF\u53E3\uFF0C\u8F6C\u53D1\u52308080\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06\u672C\u673A\u8BBF\u95EE80\u7AEF\u53E3\u7684\u8F6C\u53D1\u5230\u672C\u673A8080</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -A OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j DNAT --to 127.0.0.1:8080</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -A OUTPUT -p tcp -d 192.168.4.177 --dport 80 -j DNAT --to 127.0.0.1:8080</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5C06192.168.75.3 8000\u7AEF\u53E3\u5C06\u6570\u636E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u65F6\uFF0C\u5C06\u6E90ip\u6539\u4E3A192.168.75.5</span></span>
<span class="line"><span style="color:#393A34;">iptables -t nat -A POSTROUTING -d 192.168.75.3 -p tcp --dport 8000 -j SNAT --to 192.168.75.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># -p\uFF1A\u7528\u4E8E\u5339\u914D\u62A5\u6587\u7684\u534F\u8BAE\u7C7B\u578B,\u53EF\u4EE5\u5339\u914D\u7684\u534F\u8BAE\u7C7B\u578Btcp\u3001udp\u3001udplite\u3001icmp\u3001esp\u3001ah\u3001sctp\u7B49\uFF08centos7\u4E2D\u8FD8\u652F\u6301icmpv6\u3001mh\uFF09\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p tcp -s 192.168.1.146 -j ACCEPT</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u611F\u53F9\u53F7\u8868\u793A\u201C\u975E\u201D\uFF0C\u5373\u9664\u4E86\u5339\u914D\u8FD9\u4E2A\u6761\u4EF6\u7684\u90FDACCEPT\uFF0C\u4F46\u5339\u914D\u8FD9\u4E2A\u6761\u4EF6\u4E0D\u4E00\u5B9A\u5C31\u662FREJECT\u6216DROP\uFF1F\u8FD9\u8981\u770B\u662F\u5426\u6709\u4E3A\u5B83\u7279\u522B\u5199\u4E00\u6761\u89C4\u5219\uFF0C\u5982\u679C\u6CA1\u6709\u5199\u5C31\u4F1A\u7528\u9ED8\u8BA4\u7B56\u7565\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> -p udp -s 192.168.1.146 -j ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># -i\uFF1A\u7528\u4E8E\u5339\u914D\u62A5\u6587\u662F\u4ECE\u54EA\u4E2A\u7F51\u5361\u63A5\u53E3\u6D41\u5165\u672C\u673A\u7684\uFF0C\u7531\u4E8E\u5339\u914D\u6761\u4EF6\u53EA\u662F\u7528\u4E8E\u5339\u914D\u62A5\u6587\u6D41\u5165\u7684\u7F51\u5361\uFF0C\u6240\u4EE5\u5728OUTPUT\u94FE\u4E0EPOSTROUTING\u94FE\u4E2D\u4E0D\u80FD\u4F7F\u7528\u6B64\u9009\u9879\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p icmp -i eth0 -j DROP</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p icmp </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> -i eth0 -j DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># -o\uFF1A\u7528\u4E8E\u5339\u914D\u62A5\u6587\u5C06\u8981\u4ECE\u54EA\u4E2A\u7F51\u5361\u63A5\u53E3\u6D41\u51FA\u672C\u673A\uFF0C\u4E8E\u5339\u914D\u6761\u4EF6\u53EA\u662F\u7528\u4E8E\u5339\u914D\u62A5\u6587\u6D41\u51FA\u7684\u7F51\u5361\uFF0C\u6240\u4EE5\u5728INPUT\u94FE\u4E0EPREROUTING\u94FE\u4E2D\u4E0D\u80FD\u4F7F\u7528\u6B64\u9009\u9879</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-p\xA0icmp\xA0-o\xA0eth0\xA0-j\xA0DROP</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-p\xA0icmp\xA0</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">\xA0-o\xA0eth0\xA0-j\xA0DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># iptables\u6269\u5C55\u6A21\u5757</span></span>
<span class="line"><span style="color:#A0ADA0;"># TCP\u3001UDP\u6A21\u5757</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--sport\xA022\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--dport\xA022:25\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--dport\xA0:22\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0--dport\xA080:\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0tcp\xA0</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">\xA0--sport\xA022\xA0-j\xA0ACCEPT</span></span>
<span class="line"><span style="color:#A0ADA0;"># multiport\u6A21\u5757</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0OUTPUT\xA0-d\xA0192.168.1.146\xA0-p\xA0udp\xA0-m\xA0multiport\xA0--sports\xA0137,138\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0--dports\xA022,80\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0</span><span style="color:#AB5959;">!</span><span style="color:#393A34;">\xA0--dports\xA022,80\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0--dports\xA080:88\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables\xA0-t\xA0filter\xA0-I\xA0INPUT\xA0-s\xA0192.168.1.146\xA0-p\xA0tcp\xA0-m\xA0multiport\xA0--dports\xA022,80:88\xA0-j\xA0REJECT</span></span>
<span class="line"><span style="color:#A0ADA0;"># ip-range</span></span>
<span class="line"><span style="color:#A0ADA0;"># --src-range(\u5339\u914D\u6E90\u5730\u5740\u8303\u56F4)</span></span>
<span class="line"><span style="color:#A0ADA0;"># --dst-range(\u5339\u914D\u76EE\u6807\u5730\u5740\u8303\u56F4)</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -m iprange --src-range 192.168.1.127-192.168.1.146 -j DROP</span></span>
<span class="line"><span style="color:#A0ADA0;"># string\uFF0C\u7528\u6765\u62E6\u622A\u6570\u636E\u5305\u4E2D\u7684\u67D0\u4E2A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A0ADA0;"># --algo \u6307\u5B9A\u7B97\u6CD5\u5339\u914D\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -m string --algo bm --string </span><span style="color:#B56959;">&quot;XXOO&quot;</span><span style="color:#393A34;"> -j REJECT</span></span>
<span class="line"><span style="color:#A0ADA0;"># time\uFF0C\u89C4\u5B9A\u67D0\u6BB5\u65F6\u95F4\u7684\u52A8\u4F5C</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p tcp --dport 80 -m </span><span style="color:#1C6B48;">time</span><span style="color:#393A34;"> --timestart 09:00:00 --timestop 18:00:00 -j REJECT</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p tcp --dport 443 -m </span><span style="color:#1C6B48;">time</span><span style="color:#393A34;"> --timestart 09:00:00 --timestop 18:00:00 -j REJECT</span></span>
<span class="line"><span style="color:#A0ADA0;"># connlimit</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u9650\u5236ssh\u7AEF\u53E3\u7684\u8FDE\u63A5\u6570\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p tcp --dport 22 -m connlimit --connlimit-above 2 -j REJECT</span></span>
<span class="line"><span style="color:#A0ADA0;"># limit</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u9650\u5236icmp\u7684\u6D41\u5165\u901F\u5EA6 </span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p icmp -m limit --limit 10/minite -j ACCEPT</span></span>
<span class="line"><span style="color:#A0ADA0;"># icmp\u6A21\u5757</span></span>
<span class="line"><span style="color:#A0ADA0;"># * icmp type</span></span>
<span class="line"><span style="color:#A0ADA0;"># 0 Echo Reply\u2014\u2014\u56DE\u663E\u5E94\u7B54\uFF08Ping\u5E94\u7B54\uFF09</span></span>
<span class="line"><span style="color:#A0ADA0;"># 8 Echo request\u2014\u2014\u56DE\u663E\u8BF7\u6C42\uFF08Ping\u8BF7\u6C42\uFF09	</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7981\u6B62\u6240\u6709icmp\u5305</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p icmp -j REJECT</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EF\u4EE5ping\u522B\u4EBA\uFF0C\u522B\u4EBAping\u4E0D\u4E86\u81EA\u5DF1</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -p icmp --icmp-type 8/0 -j REJECT</span></span>
<span class="line"><span style="color:#A0ADA0;"># state\u6A21\u5757\uFF0C\u7528\u4E8E\u5904\u7406\u62A5\u6587\u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">iptables -t filter -I INPUT -m state --state RELATED, ESTABLISHED -j ACCEPT</span></span>
<span class="line"></span></code></pre></div><p>\u81EA\u5B9A\u4E49\u94FE\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u65B0\u5EFA\u81EA\u5B9A\u4E49\u94FE</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -N IN_WEB</span></span>
<span class="line"><span style="color:#758575;"># \u5F15\u7528\u8DF3\u8F6C\u81EA\u5B9A\u4E49\u94FE</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -I INPUT -p tcp --dport 80 -j IN_WEB</span></span>
<span class="line"><span style="color:#758575;"># \u4FEE\u6539\u81EA\u5B9A\u4E49\u94FE\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -E IN_WEB WEB</span></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664\u81EA\u5B9A\u4E49\u94FE</span></span>
<span class="line"><span style="color:#DBD7CA;">iptables -X IN_WEB</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u65B0\u5EFA\u81EA\u5B9A\u4E49\u94FE</span></span>
<span class="line"><span style="color:#393A34;">iptables -N IN_WEB</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F15\u7528\u8DF3\u8F6C\u81EA\u5B9A\u4E49\u94FE</span></span>
<span class="line"><span style="color:#393A34;">iptables -I INPUT -p tcp --dport 80 -j IN_WEB</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u81EA\u5B9A\u4E49\u94FE\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#393A34;">iptables -E IN_WEB WEB</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664\u81EA\u5B9A\u4E49\u94FE</span></span>
<span class="line"><span style="color:#393A34;">iptables -X IN_WEB</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h3><ol><li><code>filter</code>\u8868\u4E2D\u7684<code>DROP</code>\u548C<code>REJECT</code>\u7684\u533A\u522B\uFF1A\u524D\u8005\u4F1A\u76F4\u63A5\u4E22\u5F03\u6570\u636E\u5305\u5E76\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u54CD\u5E94\uFF0C\u540E\u8005\u5728\u4E22\u5F03\u6570\u636E\u5305\u7684\u540C\u65F6\u8FD4\u56DE\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF.</li></ol><p>\u6BD4\u5982\u4E24\u8005\u5728<code>ping</code>\u547D\u4EE4\u4E0B\u7684\u4E0D\u540C\u8868\u73B0\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># DROP</span></span>
<span class="line"><span style="color:#DBD7CA;">PING 10.37.129.9 </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">10.37.129.9</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">: 56 data bytes</span></span>
<span class="line"><span style="color:#DBD7CA;">Request timeout </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> icmp_seq 0</span></span>
<span class="line"><span style="color:#DBD7CA;">Request timeout </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> icmp_seq 1</span></span>
<span class="line"><span style="color:#DBD7CA;">Request timeout </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> icmp_seq 2</span></span>
<span class="line"><span style="color:#DBD7CA;">Request timeout </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> icmp_seq 3</span></span>
<span class="line"><span style="color:#DBD7CA;">Request timeout </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> icmp_seq 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># REJECT</span></span>
<span class="line"><span style="color:#DBD7CA;">PING 10.37.129.9 </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">10.37.129.9</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">: 56 data bytes</span></span>
<span class="line"><span style="color:#DBD7CA;">92 bytes from centos-linux-6.5.host-only </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">10.37.129.9</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">: Destination Port Unreachable</span></span>
<span class="line"><span style="color:#DBD7CA;">Vr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst</span></span>
<span class="line"><span style="color:#DBD7CA;"> 4  5  00 5400 29a3   0 0000  40  01 3ab1 10.37.129.2  10.37.129.9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Request timeout </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> icmp_seq 0</span></span>
<span class="line"><span style="color:#DBD7CA;">92 bytes from centos-linux-6.5.host-only </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">10.37.129.9</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">: Destination Port Unreachable</span></span>
<span class="line"><span style="color:#DBD7CA;">Vr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst</span></span>
<span class="line"><span style="color:#DBD7CA;"> 4  5  00 5400 999d   0 0000  40  01 cab6 10.37.129.2  10.37.129.9</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># DROP</span></span>
<span class="line"><span style="color:#393A34;">PING 10.37.129.9 </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">10.37.129.9</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">: 56 data bytes</span></span>
<span class="line"><span style="color:#393A34;">Request timeout </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> icmp_seq 0</span></span>
<span class="line"><span style="color:#393A34;">Request timeout </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> icmp_seq 1</span></span>
<span class="line"><span style="color:#393A34;">Request timeout </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> icmp_seq 2</span></span>
<span class="line"><span style="color:#393A34;">Request timeout </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> icmp_seq 3</span></span>
<span class="line"><span style="color:#393A34;">Request timeout </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> icmp_seq 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># REJECT</span></span>
<span class="line"><span style="color:#393A34;">PING 10.37.129.9 </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">10.37.129.9</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">: 56 data bytes</span></span>
<span class="line"><span style="color:#393A34;">92 bytes from centos-linux-6.5.host-only </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">10.37.129.9</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">: Destination Port Unreachable</span></span>
<span class="line"><span style="color:#393A34;">Vr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst</span></span>
<span class="line"><span style="color:#393A34;"> 4  5  00 5400 29a3   0 0000  40  01 3ab1 10.37.129.2  10.37.129.9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Request timeout </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> icmp_seq 0</span></span>
<span class="line"><span style="color:#393A34;">92 bytes from centos-linux-6.5.host-only </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">10.37.129.9</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">: Destination Port Unreachable</span></span>
<span class="line"><span style="color:#393A34;">Vr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst</span></span>
<span class="line"><span style="color:#393A34;"> 4  5  00 5400 999d   0 0000  40  01 cab6 10.37.129.2  10.37.129.9</span></span>
<span class="line"></span></code></pre></div><h2 id="firewalld" tabindex="-1">firewalld <a class="header-anchor" href="#firewalld" aria-hidden="true">#</a></h2><p>(1). \u533A\u57DF\u7BA1\u7406</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">\u901A\u8FC7\u5C06\u7F51\u7EDC\u5212\u5206\u6210\u4E0D\u540C\u7684\u533A\u57DF\uFF0C\u5236\u5B9A\u51FA\u4E0D\u540C\u533A\u57DF\u4E4B\u95F4\u7684\u8BBF\u95EE\u63A7\u5236\u7B56\u7565\u6765\u63A7\u5236\u4E0D\u540C\u7A0B\u5E8F\u533A\u57DF\u95F4\u4F20\u9001\u7684\u6570\u636E\u6D41\u3002</span></span>
<span class="line"><span style="color:#dbd7ca;">\u4F8B\u5982\uFF0C\u4E92\u8054\u7F51\u662F\u4E0D\u53EF\u4FE1\u4EFB\u7684\u533A\u57DF\uFF0C\u800C\u5185\u90E8\u7F51\u7EDC\u662F\u9AD8\u5EA6\u4FE1\u4EFB\u7684\u533A\u57DF\u3002\u7F51\u7EDC\u5B89\u5168\u6A21\u578B\u53EF\u4EE5\u5728\u5B89\u88C5\uFF0C</span></span>
<span class="line"><span style="color:#dbd7ca;">\u521D\u6B21\u542F\u52A8\u548C\u9996\u6B21\u5EFA\u7ACB\u7F51\u7EDC\u8FDE\u63A5\u65F6\u9009\u62E9\u521D\u59CB\u5316\u3002\u8BE5\u6A21\u578B\u63CF\u8FF0\u4E86\u4E3B\u673A\u6240\u8FDE\u63A5\u7684\u6574\u4E2A\u7F51\u7EDC\u73AF\u5883\u7684\u53EF\u4FE1\u7EA7\u522B\uFF0C\u5E76\u5B9A\u4E49\u4E86\u65B0\u8FDE\u63A5\u7684\u5904\u7406\u65B9\u5F0F\u3002</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">\u901A\u8FC7\u5C06\u7F51\u7EDC\u5212\u5206\u6210\u4E0D\u540C\u7684\u533A\u57DF\uFF0C\u5236\u5B9A\u51FA\u4E0D\u540C\u533A\u57DF\u4E4B\u95F4\u7684\u8BBF\u95EE\u63A7\u5236\u7B56\u7565\u6765\u63A7\u5236\u4E0D\u540C\u7A0B\u5E8F\u533A\u57DF\u95F4\u4F20\u9001\u7684\u6570\u636E\u6D41\u3002</span></span>
<span class="line"><span style="color:#393a34;">\u4F8B\u5982\uFF0C\u4E92\u8054\u7F51\u662F\u4E0D\u53EF\u4FE1\u4EFB\u7684\u533A\u57DF\uFF0C\u800C\u5185\u90E8\u7F51\u7EDC\u662F\u9AD8\u5EA6\u4FE1\u4EFB\u7684\u533A\u57DF\u3002\u7F51\u7EDC\u5B89\u5168\u6A21\u578B\u53EF\u4EE5\u5728\u5B89\u88C5\uFF0C</span></span>
<span class="line"><span style="color:#393a34;">\u521D\u6B21\u542F\u52A8\u548C\u9996\u6B21\u5EFA\u7ACB\u7F51\u7EDC\u8FDE\u63A5\u65F6\u9009\u62E9\u521D\u59CB\u5316\u3002\u8BE5\u6A21\u578B\u63CF\u8FF0\u4E86\u4E3B\u673A\u6240\u8FDE\u63A5\u7684\u6574\u4E2A\u7F51\u7EDC\u73AF\u5883\u7684\u53EF\u4FE1\u7EA7\u522B\uFF0C\u5E76\u5B9A\u4E49\u4E86\u65B0\u8FDE\u63A5\u7684\u5904\u7406\u65B9\u5F0F\u3002</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>(2). firewalld\u57DF <img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHlnZw==,size_16,color_FFFFFF,t_70-20220617134856888.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u6CE8\uFF1Afirewalld\u7684\u9ED8\u8BA4\u533A\u57DF\u662Fpublic</p><blockquote><p>\u4EE5\u4E0A\u6765\u81EA\uFF1A<a href="https://blog.csdn.net/lilygg/article/details/84981537" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/lilygg/article/details/84981537</a></p></blockquote><h3 id="\u57FA\u7840" tabindex="-1">\u57FA\u7840 <a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install firewalld firewalld-config</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --state		</span><span style="color:#758575;"># \u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">systemctl status firewalld.service		</span><span style="color:#758575;"># \u670D\u52A1\u76F8\u5173</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --reload		</span><span style="color:#758575;"># \u91CD\u8F7D\u9632\u706B\u5899\u914D\u7F6E</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install firewalld firewalld-config</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --state		</span><span style="color:#A0ADA0;"># \u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">systemctl status firewalld.service		</span><span style="color:#A0ADA0;"># \u670D\u52A1\u76F8\u5173</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --reload		</span><span style="color:#A0ADA0;"># \u91CD\u8F7D\u9632\u706B\u5899\u914D\u7F6E</span></span>
<span class="line"></span></code></pre></div><h3 id="\u76F8\u5173\u547D\u4EE4" tabindex="-1">\u76F8\u5173\u547D\u4EE4 <a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u83B7\u53D6\u652F\u6301\u7684\u533A\u57DF\u5217\u5217\u8868</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --get-zones</span></span>
<span class="line"><span style="color:#758575;"># \u5217\u51FA\u5168\u90E8\u542F\u7528\u7684\u533A\u57DF\u7684\u7279\u6027</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --list-all-zones</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --get-default-zone</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u9632\u706B\u5899\u5DF2\u653E\u884C\u7AEF\u53E3(\u5916\u90E8\u53EF\u901A\u8FC7\u6B64\u7AEF\u53E3\u8BBF\u95EE\u670D\u52A1\u5668)</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --permanent --list-port</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u5F53\u524D\u5F00\u4E86\u54EA\u4E9B\u7AEF\u53E3,\u6BCF\u4E2A\u670D\u52A1\u5BF9\u5E94/usr/lib/firewalld/services\u4E0B\u9762\u4E00\u4E2Axml\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --list-services</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u8FD8\u6709\u54EA\u4E9B\u670D\u52A1\u53EF\u4EE5\u6253\u5F00</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --get-services</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770B\u7AEF\u53E3\u76F8\u5173\u60C5\u51B5</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --zone=public --query-port=80/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5220\u9664</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5F00\u542F\u67D0\u7AEF\u53E3(\u653E\u884C\u6B64\u7AEF\u53E3) --permanent\u6807\u8BC6\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u7AEF\u53E3\u5931\u6548</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --zone=public --add-port=80/tcp --permanent</span></span>
<span class="line"><span style="color:#758575;"># \u6279\u91CF\u653E\u884C</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --zone=public --add-port=7000-7005/udp --permanent</span></span>
<span class="line"><span style="color:#758575;"># \u5173\u95ED</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u7AEF\u53E3\u8F6C\u53D1\uFF0Cex: \u8F6C\u53D122\u7AEF\u53E3\u5230123\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">firewall-cmd --zone=external --add-forward-port=22:porto=tcp:toport=123</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u83B7\u53D6\u652F\u6301\u7684\u533A\u57DF\u5217\u5217\u8868</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --get-zones</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5217\u51FA\u5168\u90E8\u542F\u7528\u7684\u533A\u57DF\u7684\u7279\u6027</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --list-all-zones</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --get-default-zone</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u9632\u706B\u5899\u5DF2\u653E\u884C\u7AEF\u53E3(\u5916\u90E8\u53EF\u901A\u8FC7\u6B64\u7AEF\u53E3\u8BBF\u95EE\u670D\u52A1\u5668)</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --permanent --list-port</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u5F53\u524D\u5F00\u4E86\u54EA\u4E9B\u7AEF\u53E3,\u6BCF\u4E2A\u670D\u52A1\u5BF9\u5E94/usr/lib/firewalld/services\u4E0B\u9762\u4E00\u4E2Axml\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --list-services</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u8FD8\u6709\u54EA\u4E9B\u670D\u52A1\u53EF\u4EE5\u6253\u5F00</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --get-services</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770B\u7AEF\u53E3\u76F8\u5173\u60C5\u51B5</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --zone=public --query-port=80/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5220\u9664</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F00\u542F\u67D0\u7AEF\u53E3(\u653E\u884C\u6B64\u7AEF\u53E3) --permanent\u6807\u8BC6\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u7AEF\u53E3\u5931\u6548</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --zone=public --add-port=80/tcp --permanent</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6279\u91CF\u653E\u884C</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --zone=public --add-port=7000-7005/udp --permanent</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5173\u95ED</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u7AEF\u53E3\u8F6C\u53D1\uFF0Cex: \u8F6C\u53D122\u7AEF\u53E3\u5230123\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#393A34;">firewall-cmd --zone=external --add-forward-port=22:porto=tcp:toport=123</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5176\u4ED6-1" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6-1" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;"> </span><span style="color:#758575;"># \u542F\u7528\u5E94\u6025\u6A21\u5F0F\uFF0C\u963B\u65AD\u6240\u6709\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u4EE5\u9632\u51FA\u73B0\u7D27\u6025\u72B6\u51B5</span></span>
<span class="line"><span style="color:#DBD7CA;"> firewall-cmd --panic-on</span></span>
<span class="line"><span style="color:#DBD7CA;"> firewall-cmd --panic-off</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;"> </span><span style="color:#A0ADA0;"># \u542F\u7528\u5E94\u6025\u6A21\u5F0F\uFF0C\u963B\u65AD\u6240\u6709\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u4EE5\u9632\u51FA\u73B0\u7D27\u6025\u72B6\u51B5</span></span>
<span class="line"><span style="color:#393A34;"> firewall-cmd --panic-on</span></span>
<span class="line"><span style="color:#393A34;"> firewall-cmd --panic-off</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>\u6D45\u6790Firewalld\u4E0EIptables\uFF1A<a href="https://blog.csdn.net/lilygg/article/details/84981537" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/lilygg/article/details/84981537</a></li><li>iptables\u8BE6\u89E3\uFF1A<a href="https://www.xiebruce.top/1071.html" target="_blank" rel="noopener noreferrer">https://www.xiebruce.top/1071.html</a></li></ul>`,39),o=[e];function t(c,r,i,y,A,D){return n(),a("div",null,o)}var C=s(p,[["render",t]]);export{T as __pageData,C as default};
