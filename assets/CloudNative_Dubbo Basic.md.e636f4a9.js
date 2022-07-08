import{_ as e,o as t,c as a,a as r}from"./app.1e6146c3.js";const _=JSON.parse('{"title":"Dubbo Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dubbo \u7B80\u4ECB","slug":"dubbo-\u7B80\u4ECB"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/Dubbo Basic.md","lastUpdated":1657272051000}'),o={name:"CloudNative/Dubbo Basic.md"},d=r('<h1 id="dubbo-basic" tabindex="-1">Dubbo Basic <a class="header-anchor" href="#dubbo-basic" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#dubbo-\u7B80\u4ECB">Dubbo \u7B80\u4ECB</a></li><li><a href="#\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5</a></li></ul></nav><h2 id="dubbo-\u7B80\u4ECB" tabindex="-1">Dubbo \u7B80\u4ECB <a class="header-anchor" href="#dubbo-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Apache Dubbo |\u02C8d\u028Cb\u0259\u028A| \u662F\u4E00\u6B3E\u9AD8\u6027\u80FD\u3001\u8F7B\u91CF\u7EA7\u7684\u5F00\u6E90<code>Java RPC</code>[^rpc]\u6846\u67B6\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E09\u5927\u6838\u5FC3\u80FD\u529B\uFF1A<em>\u9762\u5411\u63A5\u53E3\u7684\u8FDC\u7A0B\u65B9\u6CD5\u8C03\u7528\uFF0C\u667A\u80FD\u5BB9\u9519\u548C\u8D1F\u8F7D\u5747\u8861\uFF0C\u4EE5\u53CA\u670D\u52A1\u81EA\u52A8\u6CE8\u518C\u548C\u53D1\u73B0\u3002</em></p><p><img src="http://dubbo.apache.org/docs/zh-cn/user/sources/images/dubbo-architecture.jpg" alt="" title="dubbo\u67B6\u6784"></p><p>\u8282\u70B9\u89D2\u8272\u8BF4\u660E\uFF1A</p><table><thead><tr><th>\u8282\u70B9</th><th>\u89D2\u8272\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>Provider</code></td><td>\u66B4\u9732\u670D\u52A1\u7684\u670D\u52A1\u63D0\u4F9B\u65B9</td></tr><tr><td><code>Consumer</code></td><td>\u8C03\u7528\u8FDC\u7A0B\u670D\u52A1\u7684\u670D\u52A1\u6D88\u8D39\u65B9</td></tr><tr><td><code>Registry</code></td><td>\u670D\u52A1\u6CE8\u518C\u4E0E\u53D1\u73B0\u7684\u6CE8\u518C\u4E2D\u5FC3</td></tr><tr><td><code>Monitor</code></td><td>\u7EDF\u8BA1\u670D\u52A1\u7684\u8C03\u7528\u6B21\u6570\u548C\u8C03\u7528\u65F6\u95F4\u7684\u76D1\u63A7\u4E2D\u5FC3</td></tr><tr><td><code>Container</code></td><td>\u670D\u52A1\u8FD0\u884C\u5BB9\u5668</td></tr></tbody></table><p>\u8C03\u7528\u5173\u7CFB\u8BF4\u660E\uFF1A</p><ol><li>\u670D\u52A1\u5BB9\u5668\u8D1F\u8D23\u542F\u52A8\uFF0C\u52A0\u8F7D\uFF0C\u8FD0\u884C\u670D\u52A1\u63D0\u4F9B\u8005\u3002</li><li>\u670D\u52A1\u63D0\u4F9B\u8005\u5728\u542F\u52A8\u65F6\uFF0C\u5411\u6CE8\u518C\u4E2D\u5FC3\u6CE8\u518C\u81EA\u5DF1\u63D0\u4F9B\u7684\u670D\u52A1\u3002</li><li>\u670D\u52A1\u6D88\u8D39\u8005\u5728\u542F\u52A8\u65F6\uFF0C\u5411\u6CE8\u518C\u4E2D\u5FC3\u8BA2\u9605\u81EA\u5DF1\u6240\u9700\u7684\u670D\u52A1\u3002</li><li>\u6CE8\u518C\u4E2D\u5FC3\u8FD4\u56DE\u670D\u52A1\u63D0\u4F9B\u8005\u5730\u5740\u5217\u8868\u7ED9\u6D88\u8D39\u8005\uFF0C\u5982\u679C\u6709\u53D8\u66F4\uFF0C\u6CE8\u518C\u4E2D\u5FC3\u5C06\u57FA\u4E8E\u957F\u8FDE\u63A5\u63A8\u9001\u53D8\u66F4\u6570\u636E\u7ED9\u6D88\u8D39\u8005\u3002</li><li>\u670D\u52A1\u6D88\u8D39\u8005\uFF0C\u4ECE\u63D0\u4F9B\u8005\u5730\u5740\u5217\u8868\u4E2D\uFF0C\u57FA\u4E8E\u8F6F\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF0C\u9009\u4E00\u53F0\u63D0\u4F9B\u8005\u8FDB\u884C\u8C03\u7528\uFF0C\u5982\u679C\u8C03\u7528\u5931\u8D25\uFF0C\u518D\u9009\u53E6\u4E00\u53F0\u8C03\u7528\u3002</li><li>\u670D\u52A1\u6D88\u8D39\u8005\u548C\u63D0\u4F9B\u8005\uFF0C\u5728\u5185\u5B58\u4E2D\u7D2F\u8BA1\u8C03\u7528\u6B21\u6570\u548C\u8C03\u7528\u65F6\u95F4\uFF0C\u5B9A\u65F6\u6BCF\u5206\u949F\u53D1\u9001\u4E00\u6B21\u7EDF\u8BA1\u6570\u636E\u5230\u76D1\u63A7\u4E2D\u5FC3\u3002</li></ol><blockquote><p>\u6765\u6E90\u4E8E\u5B98\u65B9\u67B6\u6784\u8BF4\u660E\uFF1A<a href="http://dubbo.apache.org/zh-cn/docs/user/preface/architecture.html" target="_blank" rel="noopener noreferrer">http://dubbo.apache.org/zh-cn/docs/user/preface/architecture.html</a></p></blockquote><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>\u5B98\u65B9\u6587\u6863\uFF1A<a href="http://dubbo.apache.org/zh-cn/docs/user/SUMMARY.html" target="_blank" rel="noopener noreferrer">http://dubbo.apache.org/zh-cn/docs/user/SUMMARY.html</a></li><li>Dubbo Quick Start: <a href="http://dubbo.apache.org/en-us/docs/user/quick-start.html" target="_blank" rel="noopener noreferrer">http://dubbo.apache.org/en-us/docs/user/quick-start.html</a></li><li>Dubbo \u4ECE\u5165\u95E8\u5230\u5B9E\u6218\uFF1A<a href="https://segmentfault.com/a/1190000019896723" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000019896723</a></li></ul><p>[^rpc]: RPC\uFF08Remote Procedure Call\uFF09\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\uFF0C\u7B80\u5355\u7684\u7406\u89E3\u662F\u4E00\u4E2A\u8282\u70B9\u8BF7\u6C42\u53E6\u4E00\u4E2A\u8282\u70B9\u63D0\u4F9B\u7684\u670D\u52A1\u3002</p>',13),c=[d];function l(i,b,s,h,u,n){return t(),a("div",null,c)}var f=e(o,[["render",l]]);export{_ as __pageData,f as default};
