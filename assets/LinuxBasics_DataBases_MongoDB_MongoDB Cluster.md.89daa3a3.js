import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"MongoDB \u4E3B\u4ECE\u590D\u5236\u96C6\u7FA4","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u89C4\u5212","slug":"_1\u3001\u89C4\u5212"},{"level":2,"title":"2\u3001\u914D\u7F6E\u590D\u5236\u96C6\uFF1A","slug":"_2\u3001\u914D\u7F6E\u590D\u5236\u96C6\uFF1A"},{"level":2,"title":"3\u3001\u590D\u5236\u96C6\u7BA1\u7406\u64CD\u4F5C\uFF1A","slug":"_3\u3001\u590D\u5236\u96C6\u7BA1\u7406\u64CD\u4F5C\uFF1A"},{"level":2,"title":"4\u3001\u526F\u672C\u96C6\u5176\u4ED6\u64CD\u4F5C\u547D\u4EE4\uFF1A","slug":"_4\u3001\u526F\u672C\u96C6\u5176\u4ED6\u64CD\u4F5C\u547D\u4EE4\uFF1A"}],"relativePath":"LinuxBasics/DataBases/MongoDB/MongoDB Cluster.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/DataBases/MongoDB/MongoDB Cluster.md"},o=p(`<h1 id="mongodb-\u4E3B\u4ECE\u590D\u5236\u96C6\u7FA4" tabindex="-1">MongoDB \u4E3B\u4ECE\u590D\u5236\u96C6\u7FA4 <a class="header-anchor" href="#mongodb-\u4E3B\u4ECE\u590D\u5236\u96C6\u7FA4" aria-hidden="true">#</a></h1><p>\u57FA\u672C\u539F\u7406\uFF1A \u57FA\u672C\u6784\u6210\u662F1\u4E3B2\u4ECE\u7684\u7ED3\u6784\uFF0C\u81EA\u5E26\u4E92\u76F8\u76D1\u63A7\u6295\u7968\u673A\u5236\uFF08Raft\uFF08MongoDB\uFF09 Paxos\uFF08mysql MGR \u7528\u7684\u662F\u53D8\u79CD\uFF09\uFF09 \u5982\u679C\u53D1\u751F\u4E3B\u5E93\u5B95\u673A\uFF0C\u590D\u5236\u96C6\u5185\u90E8\u4F1A\u8FDB\u884C\u6295\u7968\u9009\u4E3E\uFF0C\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u66FF\u4EE3\u539F\u6709\u4E3B\u5E93\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002\u540C\u65F6\u590D\u5236\u96C6\u4F1A\u81EA\u52A8\u901A\u77E5 \u5BA2\u6237\u7AEF\u7A0B\u5E8F\uFF0C\u4E3B\u5E93\u5DF2\u7ECF\u53D1\u751F\u5207\u6362\u4E86\u3002\u5E94\u7528\u5C31\u4F1A\u8FDE\u63A5\u5230\u65B0\u7684\u4E3B\u5E93\u3002</p><p>Replcation Set\u914D\u7F6E\u8FC7\u7A0B\u8BE6\u89E3</p><h2 id="_1\u3001\u89C4\u5212" tabindex="-1">1\u3001\u89C4\u5212 <a class="header-anchor" href="#_1\u3001\u89C4\u5212" aria-hidden="true">#</a></h2><p>\u4E09\u4E2A\u4EE5\u4E0A\u7684mongodb\u8282\u70B9\uFF08\u6216\u591A\u5B9E\u4F8B\uFF09</p><p>\u591A\u5B9E\u4F8B\uFF1A \uFF081\uFF09\u591A\u4E2A\u7AEF\u53E3\uFF1A28017\u300128018\u300128019\u300128020 \uFF082\uFF09\u591A\u5957\u76EE\u5F55\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mkdir -p /mongodb/28017/conf /mongodb/28017/data /mongodb/28017/log</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /mongodb/28018/conf /mongodb/28018/data /mongodb/28018/log</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /mongodb/28019/conf /mongodb/28019/data /mongodb/28019/log</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /mongodb/28020/conf /mongodb/28020/data /mongodb/28020/log</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mkdir -p /mongodb/28017/conf /mongodb/28017/data /mongodb/28017/log</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p /mongodb/28018/conf /mongodb/28018/data /mongodb/28018/log</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p /mongodb/28019/conf /mongodb/28019/data /mongodb/28019/log</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p /mongodb/28020/conf /mongodb/28020/data /mongodb/28020/log</span></span>
<span class="line"></span></code></pre></div><p>(3) \u591A\u5957\u914D\u7F6E\u6587\u4EF6</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">/mongodb/28017/conf/mongod.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">/mongodb/28018/conf/mongod.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">/mongodb/28019/conf/mongod.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">/mongodb/28020/conf/mongod.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">/mongodb/28017/conf/mongod.conf</span></span>
<span class="line"><span style="color:#393A34;">/mongodb/28018/conf/mongod.conf</span></span>
<span class="line"><span style="color:#393A34;">/mongodb/28019/conf/mongod.conf</span></span>
<span class="line"><span style="color:#393A34;">/mongodb/28020/conf/mongod.conf</span></span>
<span class="line"></span></code></pre></div><p>(4)\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">vi /mongodb/28017/conf/mongod.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">systemLog:</span></span>
<span class="line"><span style="color:#DBD7CA;">  destination: file</span></span>
<span class="line"><span style="color:#DBD7CA;">  path: /mongodb/28017/log/mongodb.log</span></span>
<span class="line"><span style="color:#DBD7CA;">  logAppend: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">storage:</span></span>
<span class="line"><span style="color:#DBD7CA;">  journal:</span></span>
<span class="line"><span style="color:#DBD7CA;">    enabled: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  dbPath: /mongodb/28017/data</span></span>
<span class="line"><span style="color:#DBD7CA;">  directoryPerDB: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;">##engine: wiredTiger</span></span>
<span class="line"><span style="color:#DBD7CA;">  wiredTiger:</span></span>
<span class="line"><span style="color:#DBD7CA;">    engineConfig:</span></span>
<span class="line"><span style="color:#DBD7CA;">      cacheSizeGB: 1</span></span>
<span class="line"><span style="color:#DBD7CA;">      directoryForIndexes: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">    collectionConfig:</span></span>
<span class="line"><span style="color:#DBD7CA;">      blockCompressor: zlib</span></span>
<span class="line"><span style="color:#DBD7CA;">    indexConfig:</span></span>
<span class="line"><span style="color:#DBD7CA;">      prefixCompression: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">processManagement:</span></span>
<span class="line"><span style="color:#DBD7CA;">  fork: </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">net:</span></span>
<span class="line"><span style="color:#DBD7CA;">  port: 28017</span></span>
<span class="line"><span style="color:#DBD7CA;">replication:</span></span>
<span class="line"><span style="color:#DBD7CA;">  oplogSizeMB: 2048</span></span>
<span class="line"><span style="color:#DBD7CA;">  replSetName: my_repl</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">vi /mongodb/28017/conf/mongod.conf</span></span>
<span class="line"><span style="color:#393A34;">systemLog:</span></span>
<span class="line"><span style="color:#393A34;">  destination: file</span></span>
<span class="line"><span style="color:#393A34;">  path: /mongodb/28017/log/mongodb.log</span></span>
<span class="line"><span style="color:#393A34;">  logAppend: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">storage:</span></span>
<span class="line"><span style="color:#393A34;">  journal:</span></span>
<span class="line"><span style="color:#393A34;">    enabled: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">  dbPath: /mongodb/28017/data</span></span>
<span class="line"><span style="color:#393A34;">  directoryPerDB: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;">##engine: wiredTiger</span></span>
<span class="line"><span style="color:#393A34;">  wiredTiger:</span></span>
<span class="line"><span style="color:#393A34;">    engineConfig:</span></span>
<span class="line"><span style="color:#393A34;">      cacheSizeGB: 1</span></span>
<span class="line"><span style="color:#393A34;">      directoryForIndexes: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">    collectionConfig:</span></span>
<span class="line"><span style="color:#393A34;">      blockCompressor: zlib</span></span>
<span class="line"><span style="color:#393A34;">    indexConfig:</span></span>
<span class="line"><span style="color:#393A34;">      prefixCompression: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">processManagement:</span></span>
<span class="line"><span style="color:#393A34;">  fork: </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">net:</span></span>
<span class="line"><span style="color:#393A34;">  port: 28017</span></span>
<span class="line"><span style="color:#393A34;">replication:</span></span>
<span class="line"><span style="color:#393A34;">  oplogSizeMB: 2048</span></span>
<span class="line"><span style="color:#393A34;">  replSetName: my_repl</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cp  /mongodb/28017/conf/mongod.conf  /mongodb/28018/conf/</span></span>
<span class="line"><span style="color:#DBD7CA;">cp  /mongodb/28017/conf/mongod.conf  /mongodb/28019/conf/</span></span>
<span class="line"><span style="color:#DBD7CA;">cp  /mongodb/28017/conf/mongod.conf  /mongodb/28020/conf/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">sed </span><span style="color:#C98A7D;">&#39;s##28017##28018##g&#39;</span><span style="color:#DBD7CA;"> /mongodb/28018/conf/mongod.conf -i</span></span>
<span class="line"><span style="color:#DBD7CA;">sed </span><span style="color:#C98A7D;">&#39;s##28017##28019##g&#39;</span><span style="color:#DBD7CA;"> /mongodb/28019/conf/mongod.conf -i</span></span>
<span class="line"><span style="color:#DBD7CA;">sed </span><span style="color:#C98A7D;">&#39;s##28017##28020##g&#39;</span><span style="color:#DBD7CA;"> /mongodb/28020/conf/mongod.conf -i</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cp  /mongodb/28017/conf/mongod.conf  /mongodb/28018/conf/</span></span>
<span class="line"><span style="color:#393A34;">cp  /mongodb/28017/conf/mongod.conf  /mongodb/28019/conf/</span></span>
<span class="line"><span style="color:#393A34;">cp  /mongodb/28017/conf/mongod.conf  /mongodb/28020/conf/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">sed </span><span style="color:#B56959;">&#39;s##28017##28018##g&#39;</span><span style="color:#393A34;"> /mongodb/28018/conf/mongod.conf -i</span></span>
<span class="line"><span style="color:#393A34;">sed </span><span style="color:#B56959;">&#39;s##28017##28019##g&#39;</span><span style="color:#393A34;"> /mongodb/28019/conf/mongod.conf -i</span></span>
<span class="line"><span style="color:#393A34;">sed </span><span style="color:#B56959;">&#39;s##28017##28020##g&#39;</span><span style="color:#393A34;"> /mongodb/28020/conf/mongod.conf -i</span></span>
<span class="line"></span></code></pre></div><hr><p>(5)\u542F\u52A8\u591A\u4E2A\u5B9E\u4F8B\u5907\u7528</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mongod -f /mongodb/28017/conf/mongod.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">mongod -f /mongodb/28018/conf/mongod.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">mongod -f /mongodb/28019/conf/mongod.conf</span></span>
<span class="line"><span style="color:#DBD7CA;">mongod -f /mongodb/28020/conf/mongod.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">netstat -lnp</span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;">grep 280</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mongod -f /mongodb/28017/conf/mongod.conf</span></span>
<span class="line"><span style="color:#393A34;">mongod -f /mongodb/28018/conf/mongod.conf</span></span>
<span class="line"><span style="color:#393A34;">mongod -f /mongodb/28019/conf/mongod.conf</span></span>
<span class="line"><span style="color:#393A34;">mongod -f /mongodb/28020/conf/mongod.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">netstat -lnp</span><span style="color:#AB5959;">|</span><span style="color:#393A34;">grep 280</span></span>
<span class="line"></span></code></pre></div><h2 id="_2\u3001\u914D\u7F6E\u590D\u5236\u96C6\uFF1A" tabindex="-1">2\u3001\u914D\u7F6E\u590D\u5236\u96C6\uFF1A <a class="header-anchor" href="#_2\u3001\u914D\u7F6E\u590D\u5236\u96C6\uFF1A" aria-hidden="true">#</a></h2><p>\uFF081\uFF091\u4E3B2\u4ECE\uFF0C\u4ECE\u5E93\u666E\u901A\u4ECE\u5E93</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mongo --port 28017 admin</span></span>
<span class="line"><span style="color:#DBD7CA;">config = {_id: </span><span style="color:#C98A7D;">&#39;my_repl&#39;</span><span style="color:#DBD7CA;">, members: </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">                          {_id: 0, host: </span><span style="color:#C98A7D;">&#39;10.0.0.53:28017&#39;</span><span style="color:#DBD7CA;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">                          {_id: 1, host: </span><span style="color:#C98A7D;">&#39;10.0.0.53:28018&#39;</span><span style="color:#DBD7CA;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">                          {_id: 2, host: </span><span style="color:#C98A7D;">&#39;10.0.0.53:28019&#39;</span><span style="color:#DBD7CA;">}</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rs.initiate</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">config</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mongo --port 28017 admin</span></span>
<span class="line"><span style="color:#393A34;">config = {_id: </span><span style="color:#B56959;">&#39;my_repl&#39;</span><span style="color:#393A34;">, members: </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">                          {_id: 0, host: </span><span style="color:#B56959;">&#39;10.0.0.53:28017&#39;</span><span style="color:#393A34;">},</span></span>
<span class="line"><span style="color:#393A34;">                          {_id: 1, host: </span><span style="color:#B56959;">&#39;10.0.0.53:28018&#39;</span><span style="color:#393A34;">},</span></span>
<span class="line"><span style="color:#393A34;">                          {_id: 2, host: </span><span style="color:#B56959;">&#39;10.0.0.53:28019&#39;</span><span style="color:#393A34;">}</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rs.initiate</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">config</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u8BE2\u590D\u5236\u96C6\u72B6\u6001</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#A1B567;">rs.status</span><span style="color:#858585;">();</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6C7834;">rs.status</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"></span></code></pre></div><p>\uFF082\uFF091\u4E3B1\u4ECE1\u4E2Aarbiter</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mongo -port 28017 admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">config = {_id: </span><span style="color:#C98A7D;">&#39;my_repl&#39;</span><span style="color:#DBD7CA;">, members: </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">                          {_id: 0, host: </span><span style="color:#C98A7D;">&#39;10.0.0.53:28017&#39;</span><span style="color:#DBD7CA;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">                          {_id: 1, host: </span><span style="color:#C98A7D;">&#39;10.0.0.53:28018&#39;</span><span style="color:#DBD7CA;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">                          {_id: 2, host: </span><span style="color:#C98A7D;">&#39;10.0.0.53:28019&#39;</span><span style="color:#DBD7CA;">,</span><span style="color:#C98A7D;">&quot;arbiterOnly&quot;</span><span style="color:#DBD7CA;">:true}</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">          }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rs.initiate</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">config</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mongo -port 28017 admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">config = {_id: </span><span style="color:#B56959;">&#39;my_repl&#39;</span><span style="color:#393A34;">, members: </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">                          {_id: 0, host: </span><span style="color:#B56959;">&#39;10.0.0.53:28017&#39;</span><span style="color:#393A34;">},</span></span>
<span class="line"><span style="color:#393A34;">                          {_id: 1, host: </span><span style="color:#B56959;">&#39;10.0.0.53:28018&#39;</span><span style="color:#393A34;">},</span></span>
<span class="line"><span style="color:#393A34;">                          {_id: 2, host: </span><span style="color:#B56959;">&#39;10.0.0.53:28019&#39;</span><span style="color:#393A34;">,</span><span style="color:#B56959;">&quot;arbiterOnly&quot;</span><span style="color:#393A34;">:true}</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">          }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rs.initiate</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">config</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="_3\u3001\u590D\u5236\u96C6\u7BA1\u7406\u64CD\u4F5C\uFF1A" tabindex="-1">3\u3001\u590D\u5236\u96C6\u7BA1\u7406\u64CD\u4F5C\uFF1A <a class="header-anchor" href="#_3\u3001\u590D\u5236\u96C6\u7BA1\u7406\u64CD\u4F5C\uFF1A" aria-hidden="true">#</a></h2><p>\uFF081\uFF09\u67E5\u770B\u590D\u5236\u96C6\u72B6\u6001\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#A1B567;">rs.status</span><span style="color:#858585;">();</span><span style="color:#DBD7CA;">    //\u67E5\u770B\u6574\u4F53\u590D\u5236\u96C6\u72B6\u6001</span></span>
<span class="line"><span style="color:#A1B567;">rs.isMaster</span><span style="color:#858585;">();</span><span style="color:#DBD7CA;"> // \u67E5\u770B\u5F53\u524D\u662F\u5426\u662F\u4E3B\u8282\u70B9</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6C7834;">rs.status</span><span style="color:#8E8F8B;">();</span><span style="color:#393A34;">    //\u67E5\u770B\u6574\u4F53\u590D\u5236\u96C6\u72B6\u6001</span></span>
<span class="line"><span style="color:#6C7834;">rs.isMaster</span><span style="color:#8E8F8B;">();</span><span style="color:#393A34;"> // \u67E5\u770B\u5F53\u524D\u662F\u5426\u662F\u4E3B\u8282\u70B9</span></span>
<span class="line"></span></code></pre></div><p>\uFF082\uFF09\u6DFB\u52A0\u5220\u9664\u8282\u70B9</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rs.add</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;ip:port&quot;</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> // \u65B0\u589E\u4ECE\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">rs.remove</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;ip:port&quot;</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> // \u5220\u9664\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">rs.addArb</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;ip:port&quot;</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> // \u65B0\u589E\u4EF2\u88C1\u8282\u70B9</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rs.add</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;ip:port&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> // \u65B0\u589E\u4ECE\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">rs.remove</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;ip:port&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> // \u5220\u9664\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">rs.addArb</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;ip:port&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> // \u65B0\u589E\u4EF2\u88C1\u8282\u70B9</span></span>
<span class="line"></span></code></pre></div><hr><p>\u6DFB\u52A0 arbiter\u8282\u70B9</p><p>1\u3001\u8FDE\u63A5\u5230\u4E3B\u8282\u70B9</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">mongod@db03 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">$ mongo --port 28018 admin</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">mongod@db03 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">$ mongo --port 28018 admin</span></span>
<span class="line"></span></code></pre></div><p>2\u3001\u6DFB\u52A0\u4EF2\u88C1\u8282\u70B9</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">my_repl:PRIMARY</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> rs.addArb</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;10.0.0.53:28020&quot;</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">my_repl:PRIMARY</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> rs.addArb</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;10.0.0.53:28020&quot;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><p>3\u3001\u67E5\u770B\u8282\u70B9\u72B6\u6001</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">my_repl:PRIMARY</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.isMaster</span><span style="color:#858585;">()</span></span>
<span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;hosts&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#C98A7D;">&quot;10.0.0.53:28017&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#C98A7D;">&quot;10.0.0.53:28018&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#C98A7D;">&quot;10.0.0.53:28019&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;arbiters&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#C98A7D;">&quot;10.0.0.53:28020&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">my_repl:PRIMARY</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.isMaster</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;hosts&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B56959;">&quot;10.0.0.53:28017&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B56959;">&quot;10.0.0.53:28018&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B56959;">&quot;10.0.0.53:28019&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;arbiters&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B56959;">&quot;10.0.0.53:28020&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">,</span></span>
<span class="line"></span></code></pre></div><p>\u5220\u9664\u4E00\u4E2A\u8282\u70B9</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">rs.remove</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;ip:port&quot;</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">rs.remove</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;ip:port&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span></code></pre></div><hr><p>\u4F8B\u5B50\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">my_repl:PRIMARY</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> rs.remove</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;10.0.0.53:28019&quot;</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;ok&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 1 }</span></span>
<span class="line"><span style="color:#DBD7CA;">my_repl:PRIMARY</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.isMaster</span><span style="color:#858585;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">rs.add</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;ip:port&quot;</span><span style="color:#858585;">)</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> // \u65B0\u589E\u4ECE\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">\u4F8B\u5B50\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">my_repl:PRIMARY</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> rs.add</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;10.0.0.53:28019&quot;</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;ok&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 1 }</span></span>
<span class="line"><span style="color:#DBD7CA;">my_repl:PRIMARY</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.isMaster</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">my_repl:PRIMARY</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> rs.remove</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;10.0.0.53:28019&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;ok&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 1 }</span></span>
<span class="line"><span style="color:#393A34;">my_repl:PRIMARY</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.isMaster</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">rs.add</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;ip:port&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> // \u65B0\u589E\u4ECE\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">\u4F8B\u5B50\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">my_repl:PRIMARY</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> rs.add</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;10.0.0.53:28019&quot;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;ok&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 1 }</span></span>
<span class="line"><span style="color:#393A34;">my_repl:PRIMARY</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.isMaster</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><hr><p>\u6CE8\uFF1A \u6DFB\u52A0\u7279\u6B8A\u8282\u70B9\u65F6\uFF0C 1&gt;\u53EF\u4EE5\u5728\u642D\u5EFA\u8FC7\u7A0B\u4E2D\u8BBE\u7F6E\u7279\u6B8A\u8282\u70B9 2&gt;\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u914D\u7F6E\u7684\u65B9\u5F0F\u5C06\u666E\u901A\u4ECE\u8282\u70B9\u8BBE\u7F6E\u4E3A\u7279\u6B8A\u8282\u70B9 /<em>\u627E\u5230\u9700\u8981\u6539\u4E3A\u5EF6\u8FDF\u6027\u540C\u6B65\u7684\u6570\u7EC4\u53F7</em>/;</p><p><strong>\u7279\u6B8A\u8282\u70B9\uFF1A</strong></p><blockquote><p>arbiter\u8282\u70B9\uFF1A\u4E3B\u8981\u8D1F\u8D23\u9009\u4E3B\u8FC7\u7A0B\u4E2D\u7684\u6295\u7968\uFF0C\u4F46\u662F\u4E0D\u5B58\u50A8\u4EFB\u4F55\u6570\u636E\uFF0C\u4E5F\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u670D\u52A1 hidden\u8282\u70B9\uFF1A\u9690\u85CF\u8282\u70B9\uFF0C\u4E0D\u53C2\u4E0E\u9009\u4E3B\uFF0C\u4E5F\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002 delay\u8282\u70B9\uFF1A\u5EF6\u65F6\u8282\u70B9\uFF0C\u6570\u636E\u843D\u540E\u4E8E\u4E3B\u5E93\u4E00\u6BB5\u65F6\u95F4\uFF0C\u56E0\u4E3A\u6570\u636E\u662F\u5EF6\u65F6\u7684\uFF0C\u4E5F\u4E0D\u5E94\u8BE5\u63D0\u4F9B\u670D\u52A1\u6216\u53C2\u4E0E\u9009\u4E3B\uFF0C\u6240\u4EE5\u901A\u5E38\u4F1A\u914D\u5408hidden\uFF08\u9690\u85CF\uFF09</p></blockquote><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u4F1A\u5C06delay+hidden\u4E00\u8D77\u914D\u7F6E\u4F7F\u7528</p><p>\uFF083\uFF09\u914D\u7F6E\u5EF6\u65F6\u8282\u70B9\uFF08\u4E00\u822C\u5EF6\u65F6\u8282\u70B9\u4E5F\u914D\u7F6E\u6210hidden\uFF09</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cfg=rs.conf</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">0</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.priority=0</span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">0</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.hidden=true</span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">0</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.slaveDelay=120</span></span>
<span class="line"><span style="color:#DBD7CA;">rs.reconfig</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">cfg</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cfg=rs.conf</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">0</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.priority=0</span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">0</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.hidden=true</span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">0</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.slaveDelay=120</span></span>
<span class="line"><span style="color:#393A34;">rs.reconfig</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">cfg</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><p>\u2014\u2014\u2014\u2014\u76EE\u524D\u72B6\u6001\u2014\u2014\u2014\u2014\u2014\u2014-</p><p>\u6211\u7684\u9700\u6C42\u662F\uFF1A\u628A28019\u8BBE\u7F6E\u4E3Ahidden\u548Cdelay</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">my_repl:PRIMARY</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.status</span><span style="color:#858585;">()</span></span>
<span class="line"><span style="color:#858585;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;members&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;_id&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 0,</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;name&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;10.0.0.53:28017&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;_id&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 1,</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;name&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;10.0.0.53:28018&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;_id&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 3,</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;name&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;10.0.0.53:28020&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;_id&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 4,</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#C98A7D;">&quot;name&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;10.0.0.53:28019&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">cfg</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;">rs.conf</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">3</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.priority</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;">0</span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">3</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.hidden</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">3</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.slaveDelay</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;">120</span></span>
<span class="line"><span style="color:#DBD7CA;">rs.reconfig</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">cfg</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">my_repl:PRIMARY</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.status</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;members&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;_id&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 0,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;name&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;10.0.0.53:28017&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;_id&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 1,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;name&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;10.0.0.53:28018&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;_id&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 3,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;name&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;10.0.0.53:28020&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;_id&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 4,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B56959;">&quot;name&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;10.0.0.53:28019&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">cfg</span><span style="color:#AB5959;">=</span><span style="color:#393A34;">rs.conf</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">3</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.priority</span><span style="color:#AB5959;">=</span><span style="color:#393A34;">0</span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">3</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.hidden</span><span style="color:#AB5959;">=</span><span style="color:#393A34;">true</span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">3</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.slaveDelay</span><span style="color:#AB5959;">=</span><span style="color:#393A34;">120</span></span>
<span class="line"><span style="color:#393A34;">rs.reconfig</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">cfg</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><hr><p>\u53D6\u6D88\u4EE5\u4E0A\u914D\u7F6E</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cfg=rs.conf</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">3</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.priority=1</span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">3</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.hidden=false</span></span>
<span class="line"><span style="color:#DBD7CA;">cfg.members</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">3</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">.slaveDelay=0</span></span>
<span class="line"><span style="color:#DBD7CA;">rs.reconfig</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">cfg</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cfg=rs.conf</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">3</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.priority=1</span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">3</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.hidden=false</span></span>
<span class="line"><span style="color:#393A34;">cfg.members</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">3</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">.slaveDelay=0</span></span>
<span class="line"><span style="color:#393A34;">rs.reconfig</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">cfg</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span></span>
<span class="line"></span></code></pre></div><hr><p>\u914D\u7F6E\u6210\u529F\u540E\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u8BE2\u914D\u7F6E\u540E\u7684\u5C5E\u6027</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#A1B567;">rs.conf</span><span style="color:#858585;">();</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6C7834;">rs.conf</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"></span></code></pre></div><h2 id="_4\u3001\u526F\u672C\u96C6\u5176\u4ED6\u64CD\u4F5C\u547D\u4EE4\uFF1A" tabindex="-1">4\u3001\u526F\u672C\u96C6\u5176\u4ED6\u64CD\u4F5C\u547D\u4EE4\uFF1A <a class="header-anchor" href="#_4\u3001\u526F\u672C\u96C6\u5176\u4ED6\u64CD\u4F5C\u547D\u4EE4\uFF1A" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u526F\u672C\u96C6\u7684\u914D\u7F6E\u4FE1\u606F</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.config</span><span style="color:#858585;">()</span></span>
<span class="line"><span style="color:#DBD7CA;">\u6216\u8005</span></span>
<span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.conf</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.config</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"><span style="color:#393A34;">\u6216\u8005</span></span>
<span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.conf</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u526F\u672C\u96C6\u5404\u6210\u5458\u7684\u72B6\u6001</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.status</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.status</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><p>++++++++++++++++++++++++++++++++++++++++++++++++</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">--\u526F\u672C\u96C6\u89D2\u8272\u5207\u6362\uFF08\u4E0D\u8981\u4EBA\u4E3A\u987A\u4FBF\u64CD\u4F5C\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.stepDown</span><span style="color:#858585;">()</span></span>
<span class="line"><span style="color:#DBD7CA;">\u6CE8\uFF1A</span></span>
<span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> rs.freeze</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">300</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> //\u9501\u5B9A\u4ECE\uFF0C\u4F7F\u5176\u4E0D\u4F1A\u8F6C\u53D8\u6210\u4E3B\u5E93</span></span>
<span class="line"><span style="color:#A1B567;">freeze</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;">\u548CstepDown\u5355\u4F4D\u90FD\u662F\u79D2\u3002</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">--\u526F\u672C\u96C6\u89D2\u8272\u5207\u6362\uFF08\u4E0D\u8981\u4EBA\u4E3A\u987A\u4FBF\u64CD\u4F5C\uFF09</span></span>
<span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.stepDown</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"><span style="color:#393A34;">\u6CE8\uFF1A</span></span>
<span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> rs.freeze</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">300</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> //\u9501\u5B9A\u4ECE\uFF0C\u4F7F\u5176\u4E0D\u4F1A\u8F6C\u53D8\u6210\u4E3B\u5E93</span></span>
<span class="line"><span style="color:#6C7834;">freeze</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;">\u548CstepDown\u5355\u4F4D\u90FD\u662F\u79D2\u3002</span></span>
<span class="line"></span></code></pre></div><p>+++++++++++++++++++++++++++++++++++++++++++++ \u2013\u8BBE\u7F6E\u526F\u672C\u8282\u70B9\u53EF\u8BFB\uFF1A\u5728\u526F\u672C\u8282\u70B9\u6267\u884C</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.slaveOk</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.slaveOk</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><p>eg\uFF1A</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> use app</span></span>
<span class="line"><span style="color:#DBD7CA;">switched to db app</span></span>
<span class="line"><span style="color:#DBD7CA;">app</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> db.createCollection</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;a&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;ok&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 0, </span><span style="color:#C98A7D;">&quot;errmsg&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;not master&quot;</span><span style="color:#DBD7CA;">, </span><span style="color:#C98A7D;">&quot;code&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">:</span><span style="color:#DBD7CA;"> 10107 }</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> use app</span></span>
<span class="line"><span style="color:#393A34;">switched to db app</span></span>
<span class="line"><span style="color:#393A34;">app</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> db.createCollection</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;a&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;ok&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 0, </span><span style="color:#B56959;">&quot;errmsg&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;not master&quot;</span><span style="color:#393A34;">, </span><span style="color:#B56959;">&quot;code&quot;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">:</span><span style="color:#393A34;"> 10107 }</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u526F\u672C\u8282\u70B9</p><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">admin</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">rs.printSlaveReplicationInfo</span><span style="color:#858585;">()</span></span>
<span class="line"><span style="color:#DBD7CA;">source: 192.168.1.22:27017</span></span>
<span class="line"><span style="color:#DBD7CA;">    syncedTo: Thu May 26 2016 10:28:56 GMT+0800 </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">CST</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">    0 secs </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">0 hrs</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> behind the primary</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">admin</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">rs.printSlaveReplicationInfo</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"><span style="color:#393A34;">source: 192.168.1.22:27017</span></span>
<span class="line"><span style="color:#393A34;">    syncedTo: Thu May 26 2016 10:28:56 GMT+0800 </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">CST</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">    0 secs </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">0 hrs</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> behind the primary</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6587\u7AE0\u8F6C\u8F7D\u81EA\u7F51\u7EDC\uFF0C\u4EC5\u505A\u4FEE\u6539\u3002</p></blockquote>`,71),e=[o];function c(r,t,y,i,A,D){return n(),a("div",null,e)}var C=s(l,[["render",c]]);export{B as __pageData,C as default};
