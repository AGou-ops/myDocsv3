import{_ as e,o as s,c as i,a}from"./app.1e6146c3.js";const h=JSON.parse('{"title":"Redis  HA","description":"","frontmatter":{},"headers":[],"relativePath":"LinuxBasics/DataBases/Redis/Redis  HA.md","lastUpdated":1657272051000}'),r={name:"LinuxBasics/DataBases/Redis/Redis  HA.md"},t=a('<h1 id="redis-ha" tabindex="-1">Redis HA <a class="header-anchor" href="#redis-ha" aria-hidden="true">#</a></h1><ul><li>\u5B98\u65B9\u7684cluser\u65B9\u6848</li></ul><p>\u6574\u4E2Acluster\u88AB\u770B\u505A\u662F\u4E00\u4E2A\u6574\u4F53\uFF0C\u5BA2\u6237\u7AEF\u53EF\u8FDE\u63A5\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5F53\u5BA2\u6237\u7AEF\u64CD\u4F5C\u7684key\u6CA1\u6709\u5206\u914D\u5728\u8BE5\u8282\u70B9\u4E0A\u65F6\uFF0Credis\u4F1A\u8FD4\u56DE\u8F6C\u5411\u6307\u4EE4\uFF0C\u6307\u5411\u6B63\u786E\u7684\u8282\u70B9\u3002</p><p>\u4E3A\u4E86\u589E\u52A0\u96C6\u7FA4\u7684\u53EF\u8BBF\u95EE\u6027\uFF0C\u5B98\u65B9\u63A8\u8350\u7684\u65B9\u6848\u662F\u5C06node\u914D\u7F6E\u6210\u4E3B\u4ECE\u7ED3\u6784\uFF0C\u5373\u4E00\u4E2Amaster\u4E3B\u8282\u70B9\uFF0C\u6302n\u4E2Aslave\u4ECE\u8282\u70B9\u3002\u5982\u679C\u4E3B\u8282\u70B9\u5931\u6548\uFF0Credis cluster\u4F1A\u6839\u636E\u9009\u4E3E\u7B97\u6CD5\u4ECEslave\u8282\u70B9\u4E2D\u9009\u62E9\u4E00\u4E2A\u4E0A\u5347\u4E3Amaster\u8282\u70B9\uFF0C\u6574\u4E2A\u96C6\u7FA4\u7EE7\u7EED\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002</p><ul><li>redis sharding \u96C6\u7FA4\u5206\u7247</li><li>twemproxy\u4EE3\u7406\u65B9\u6848</li></ul><p>Redis\u4EE3\u7406\u4E2D\u95F4\u4EF6twemproxy\u662F\u4E00\u79CD\u5229\u7528\u4E2D\u95F4\u4EF6\u505A\u5206\u7247\u7684\u6280\u672F\u3002twemproxy\u5904\u4E8E\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7684\u4E2D\u95F4\uFF0C\u5C06\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u8BF7\u6C42\uFF0C\u8FDB\u884C\u4E00\u5B9A\u7684\u5904\u7406\u540E\uFF08sharding\uFF09\uFF0C\u518D\u8F6C\u53D1\u7ED9\u540E\u7AEF\u771F\u6B63\u7684redis\u670D\u52A1\u5668\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u76F4\u63A5\u8BBF\u95EEredis\u670D\u52A1\u5668\uFF0C\u800C\u662F\u901A\u8FC7twemproxy\u4EE3\u7406\u4E2D\u95F4\u4EF6\u95F4\u63A5\u8BBF\u95EE\u3002\u964D\u4F4E\u4E86\u5BA2\u6237\u7AEF\u76F4\u8FDE\u540E\u7AEF\u670D\u52A1\u5668\u7684\u8FDE\u63A5\u6570\u91CF\uFF0C\u5E76\u4E14\u652F\u6301\u670D\u52A1\u5668\u96C6\u7FA4\u6C34\u5E73\u6269\u5C55\u3002</p><p>twemproxy\u4E2D\u95F4\u4EF6\u7684\u5185\u90E8\u5904\u7406\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u5B83\u672C\u8EAB\u53EF\u4EE5\u5F88\u8F7B\u677E\u5730\u96C6\u7FA4\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u5355\u70B9\u538B\u529B\u6216\u6545\u969C\u3002</p><p>\u901A\u5E38\u4F1A\u7ED3\u5408keepalived\u6765\u5B9E\u73B0twemproy\u7684\u9AD8\u53EF\u7528</p><ul><li>codis</li></ul><p>codis\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684Redis\u89E3\u51B3\u65B9\u6848\uFF0C\u7531\u8C4C\u8C46\u835A\u5F00\u6E90\uFF0C\u5BF9\u4E8E\u4E0A\u5C42\u7684\u5E94\u7528\u6765\u8BF4\uFF0C\u8FDE\u63A5codis proxy\u548C\u8FDE\u63A5\u539F\u751F\u7684redis server\u6CA1\u4EC0\u4E48\u660E\u663E\u7684\u533A\u522B\uFF0C\u4E0A\u5C42\u5E94\u7528\u53EF\u4EE5\u50CF\u4F7F\u7528\u5355\u673A\u7684redis\u4E00\u6837\u4F7F\u7528\uFF0Ccodis\u5E95\u5C42\u4F1A\u5904\u7406\u8BF7\u6C42\u7684\u8F6C\u53D1\uFF0C\u4E0D\u505C\u673A\u7684\u6570\u636E\u8FC1\u79FB\u7B49\u5DE5\u4F5C\uFF0C\u6240\u6709\u540E\u8FB9\u7684\u4E8B\u60C5\uFF0C\u5BF9\u4E8E\u524D\u9762\u7684\u5BA2\u6237\u7AEF\u6765\u8BF4\u662F\u900F\u660E\u7684\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u8BA4\u4E3A\u540E\u8FB9\u8FDE\u63A5\u7684\u662F\u4E00\u4E2A\u5185\u5B58\u65E0\u9650\u5927\u7684redis\u670D\u52A1\u3002</p><ul><li>Sentinel \u54E8\u5175</li></ul><p>Sentinel\uFF08\u54E8\u5175\uFF09\u662FRedis\u7684\u9AD8\u53EF\u7528\u6027\u89E3\u51B3\u65B9\u6848\uFF1A\u7531\u4E00\u4E2A\u6216\u591A\u4E2ASentinel\u5B9E\u4F8B\u7EC4\u6210\u7684Sentinel\u7CFB\u7EDF\u53EF\u4EE5\u76D1\u89C6\u4EFB\u610F\u591A\u4E2A\u4E3B\u670D\u52A1\u5668\u4EE5\u53CA\u8FD9\u4E9B\u4E3B\u670D\u52A1\u5668\u4E0B\u7684\u6240\u6709\u4ECE\u670D\u52A1\u5668\uFF0C\u5E76\u5728\u88AB\u76D1\u89C6\u7684\u4E3B\u670D\u52A1\u5668\u8FDB\u5165\u4E0B\u7EBF\u72B6\u6001\u65F6\uFF0C\u81EA\u52A8\u5C06\u4E0B\u7EBF\u4E3B\u670D\u52A1\u5668\u5C5E\u4E0B\u7684\u67D0\u4E2A\u4ECE\u670D\u52A1\u5668\u5347\u7EA7\u4E3A\u65B0\u7684\u4E3B\u670D\u52A1\u5668\u3002</p>',12),d=[t];function l(n,o,p,c,_,u){return s(),i("div",null,d)}var x=e(r,[["render",l]]);export{h as __pageData,x as default};
