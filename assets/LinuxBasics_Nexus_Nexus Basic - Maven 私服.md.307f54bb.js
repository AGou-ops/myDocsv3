import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const h=JSON.parse('{"title":"Nexus Basic + Maven \u79C1\u670D","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nexus \u7B80\u4ECB","slug":"nexus-\u7B80\u4ECB"},{"level":2,"title":"Nexus  \u56DB\u79CD\u4ED3\u5E93\u7C7B\u578B\u4ECB\u7ECD","slug":"nexus-\u56DB\u79CD\u4ED3\u5E93\u7C7B\u578B\u4ECB\u7ECD"},{"level":2,"title":"Nexus  \u9884\u7F6E\u4ED3\u5E93","slug":"nexus-\u9884\u7F6E\u4ED3\u5E93"},{"level":2,"title":"Repositories\u8BF4\u660E","slug":"repositories\u8BF4\u660E"},{"level":2,"title":"Linux \u4E0A\u5B89\u88C5","slug":"linux-\u4E0A\u5B89\u88C5"},{"level":3,"title":"\u521B\u5EFA\u4ED3\u5E93(\u963F\u91CC\u7684\u4E2D\u592E\u4ED3\u5E93)","slug":"\u521B\u5EFA\u4ED3\u5E93-\u963F\u91CC\u7684\u4E2D\u592E\u4ED3\u5E93"},{"level":2,"title":"Docker \u4E2D\u8FD0\u884C","slug":"docker-\u4E2D\u8FD0\u884C"},{"level":2,"title":"Windows \u4E0A\u5B89\u88C5","slug":"windows-\u4E0A\u5B89\u88C5"},{"level":2,"title":"\u9879\u76EE\u914D\u7F6E","slug":"\u9879\u76EE\u914D\u7F6E"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Nexus/Nexus Basic - Maven \u79C1\u670D.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Nexus/Nexus Basic - Maven \u79C1\u670D.md"},e=l(`<h1 id="nexus-basic-maven-\u79C1\u670D" tabindex="-1">Nexus Basic + Maven \u79C1\u670D <a class="header-anchor" href="#nexus-basic-maven-\u79C1\u670D" aria-hidden="true">#</a></h1><h1 id="nexus-\u79C1\u670D\u642D\u5EFA" tabindex="-1">Nexus \u79C1\u670D\u642D\u5EFA <a class="header-anchor" href="#nexus-\u79C1\u670D\u642D\u5EFA" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#nexus-\u7B80\u4ECB">Nexus \u7B80\u4ECB</a></li><li><a href="#nexus-\u56DB\u79CD\u4ED3\u5E93\u7C7B\u578B\u4ECB\u7ECD">Nexus \u56DB\u79CD\u4ED3\u5E93\u7C7B\u578B\u4ECB\u7ECD</a></li><li><a href="#nexus-\u9884\u7F6E\u4ED3\u5E93">Nexus \u9884\u7F6E\u4ED3\u5E93</a></li><li><a href="#repositories\u8BF4\u660E">Repositories\u8BF4\u660E</a></li><li><a href="#linux-\u4E0A\u5B89\u88C5">Linux \u4E0A\u5B89\u88C5</a><ul><li><a href="#\u521B\u5EFA\u4ED3\u5E93-\u963F\u91CC\u7684\u4E2D\u592E\u4ED3\u5E93">\u521B\u5EFA\u4ED3\u5E93(\u963F\u91CC\u7684\u4E2D\u592E\u4ED3\u5E93)</a></li></ul></li><li><a href="#docker-\u4E2D\u8FD0\u884C">Docker \u4E2D\u8FD0\u884C</a></li><li><a href="#windows-\u4E0A\u5B89\u88C5">Windows \u4E0A\u5B89\u88C5</a></li><li><a href="#\u9879\u76EE\u914D\u7F6E">\u9879\u76EE\u914D\u7F6E</a></li><li><a href="#\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5</a></li></ul></nav><h2 id="nexus-\u7B80\u4ECB" tabindex="-1">Nexus \u7B80\u4ECB <a class="header-anchor" href="#nexus-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>nexus\u662F\u4E00\u4E2A\u5F3A\u5927\u7684maven\u4ED3\u5E93\u7BA1\u7406\u5668,\u5B83\u6781\u5927\u7684\u7B80\u5316\u4E86\u672C\u5730\u5185\u90E8\u4ED3\u5E93\u7684\u7EF4\u62A4\u548C\u5916\u90E8\u4ED3\u5E93\u7684\u8BBF\u95EE.</p><p>nexus\u662F\u4E00\u5957\u5F00\u7BB1\u5373\u7528\u7684\u7CFB\u7EDF\u4E0D\u9700\u8981\u6570\u636E\u5E93,\u5B83\u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u52A0Lucene\u6765\u7EC4\u7EC7\u6570\u636E</p><p>nexus\u4F7F\u7528ExtJS\u6765\u5F00\u53D1\u754C\u9762,\u5229\u7528Restlet\u6765\u63D0\u4F9B\u5B8C\u6574\u7684REST APIs,\u901A\u8FC7IDEA\u548CEclipse\u96C6\u6210\u4F7F\u7528</p><p>nexus\u652F\u6301webDAV\u4E0ELDAP\u5B89\u5168\u8EAB\u4EFD\u8BA4\u8BC1.</p><p>nexus\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u4ED3\u5E93\u7BA1\u7406\u529F\u80FD,\u6784\u4EF6\u641C\u7D22\u529F\u80FD,\u5B83\u57FA\u4E8EREST,\u53CB\u597D\u7684UI\u662F\u4E00\u4E2Aextjs\u7684REST\u5BA2\u6237\u7AEF,\u5360\u7528\u8F83\u5C11\u7684\u5185\u5B58,\u57FA\u4E8E\u7B80\u5355\u6587\u4EF6\u7CFB\u7EDF\u800C\u975E\u6570\u636E\u5E93.</p><p>\u79C1\u670D\u4ED3\u5E93\u7684\u5DE5\u4F5C\u6D41\u7A0B:</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-1.jpg" alt=""></p><p>Nexus Repository Manager, \u4ED3\u5E93\u7BA1\u7406\u5668, \u53EF\u4EE5\u7528\u6765\u642D\u5EFA<code>apt</code>,<code>docker</code>,<code>maven2</code>,<code>npm</code>,<code>nuget</code>,<code>pypi</code>,<code>yum</code>\u79C1\u670D.</p><p>\u5B98\u65B9\u6587\u6863:<a href="https://help.sonatype.com/repomanager3" target="_blank" rel="noopener noreferrer">https://help.sonatype.com/repomanager3</a></p><h2 id="nexus-\u56DB\u79CD\u4ED3\u5E93\u7C7B\u578B\u4ECB\u7ECD" tabindex="-1">Nexus \u56DB\u79CD\u4ED3\u5E93\u7C7B\u578B\u4ECB\u7ECD <a class="header-anchor" href="#nexus-\u56DB\u79CD\u4ED3\u5E93\u7C7B\u578B\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p><code>hosted</code>\uFF0C\u672C\u5730\u4ED3\u5E93\uFF0C\u901A\u5E38\u6211\u4EEC\u4F1A\u90E8\u7F72\u81EA\u5DF1\u7684\u6784\u4EF6\u5230\u8FD9\u4E00\u7C7B\u578B\u7684\u4ED3\u5E93\u3002\u6BD4\u5982\u516C\u53F8\u7684\u7B2C\u4E8C\u65B9\u5E93\u3002</p><p><code>proxy</code>\uFF0C\u4EE3\u7406\u4ED3\u5E93\uFF0C\u5B83\u4EEC\u88AB\u7528\u6765\u4EE3\u7406\u8FDC\u7A0B\u7684\u516C\u5171\u4ED3\u5E93\uFF0C\u5982maven\u4E2D\u592E\u4ED3\u5E93\u3002</p><p><code>group</code>\uFF0C\u4ED3\u5E93\u7EC4\uFF0C\u7528\u6765\u5408\u5E76\u591A\u4E2Ahosted/proxy\u4ED3\u5E93\uFF0C\u5F53\u4F60\u7684\u9879\u76EE\u5E0C\u671B\u5728\u591A\u4E2Arepository\u4F7F\u7528\u8D44\u6E90\u65F6\u5C31\u4E0D\u9700\u8981\u591A\u6B21\u5F15\u7528\u4E86\uFF0C\u53EA\u9700\u8981\u5F15\u7528\u4E00\u4E2Agroup\u5373\u53EF\u3002</p><h2 id="nexus-\u9884\u7F6E\u4ED3\u5E93" tabindex="-1">Nexus \u9884\u7F6E\u4ED3\u5E93 <a class="header-anchor" href="#nexus-\u9884\u7F6E\u4ED3\u5E93" aria-hidden="true">#</a></h2><p><strong>Releases:</strong> \u3010\u79C1\u5E93\u53D1\u884C\u7248jar\u3011\u8FD9\u91CC\u5B58\u653E\u6211\u4EEC\u81EA\u5DF1\u9879\u76EE\u4E2D\u53D1\u5E03\u7684\u6784\u5EFA, \u901A\u5E38\u662FRelease\u7248\u672C\u7684, \u6BD4\u5982\u6211\u4EEC\u81EA\u5DF1\u505A\u4E86\u4E00\u4E2AFTP Server\u7684\u9879\u76EE, \u751F\u6210\u7684\u6784\u4EF6\u4E3Aftpserver.war, \u6211\u4EEC\u5C31\u53EF\u4EE5\u628A\u8FD9\u4E2A\u6784\u5EFA\u53D1\u5E03\u5230Nexus\u7684Releases\u672C\u5730\u4ED3\u5E93. \u5173\u4E8E\u7B26\u5408\u53D1\u5E03\u540E\u9762\u4F1A\u6709\u4ECB\u7ECD.</p><p>**Snapshots:**\u8FD9\u4E2A\u4ED3\u5E93\u975E\u5E38\u7684\u6709\u7528, \u5B83\u7684\u76EE\u7684\u662F\u8BA9\u6211\u4EEC\u53EF\u4EE5\u53D1\u5E03\u90A3\u4E9B\u975Erelease\u7248\u672C, \u975E\u7A33\u5B9A\u7248\u672C, \u6BD4\u5982\u6211\u4EEC\u5728trunk\u4E0B\u5F00\u53D1\u4E00\u4E2A\u9879\u76EE,\u5728\u6B63\u5F0Frelease\u4E4B\u524D\u4F60\u53EF\u80FD\u9700\u8981\u4E34\u65F6\u53D1\u5E03\u4E00\u4E2A\u7248\u672C\u7ED9\u4F60\u7684\u540C\u4F34\u4F7F\u7528, \u56E0\u4E3A\u4F60\u7684\u540C\u4F34\u6B63\u5728\u4F9D\u8D56\u4F60\u7684\u6A21\u5757\u5F00\u53D1, \u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u53EF\u4EE5\u53D1\u5E03Snapshot\u7248\u672C\u5230\u8FD9\u4E2A\u4ED3\u5E93, \u4F60\u7684\u540C\u4F34\u5C31\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u547D\u4EE4\u6765\u83B7\u53D6\u548C\u4F7F\u7528\u8FD9\u4E2A\u4E34\u65F6\u7248\u672C.</p><p>**3rd Party:**\u987E\u540D\u601D\u4E49, \u7B2C\u4E09\u65B9\u5E93, \u4F60\u53EF\u80FD\u4F1A\u95EE\u4E0D\u662F\u6709\u4E2D\u592E\u4ED3\u5E93\u6765\u7BA1\u7406\u7B2C\u4E09\u65B9\u5E93\u561B,\u6CA1\u9519, \u8FD9\u91CC\u7684\u662F\u6307\u53EF\u4EE5\u8BA9\u4F60\u6DFB\u52A0\u81EA\u5DF1\u7684\u7B2C\u4E09\u65B9\u5E93, \u6BD4\u5982\u6709\u4E9B\u6784\u4EF6\u5728\u4E2D\u592E\u4ED3\u5E93\u662F\u4E0D\u5B58\u5728\u7684. \u6BD4\u5982\u4F60\u5728\u4E2D\u592E\u4ED3\u5E93\u627E\u4E0D\u5230Oracle \u7684JDBC\u9A71\u52A8, \u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u81EA\u5DF1\u6DFB\u52A0\u52303rdparty\u4ED3\u5E93\u3002</p><h2 id="repositories\u8BF4\u660E" tabindex="-1">Repositories\u8BF4\u660E <a class="header-anchor" href="#repositories\u8BF4\u660E" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u4ED3\u5E93\u540D</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">maven-central</td><td style="text-align:left;">maven\u4E2D\u592E\u5E93\uFF0C\u9ED8\u8BA4\u4ECEhttps://repo1.maven.org/maven2/\u62C9\u53D6jar</td></tr><tr><td style="text-align:left;">maven-releases</td><td style="text-align:left;">\u79C1\u5E93\u53D1\u884C\u7248jar</td></tr><tr><td style="text-align:left;">maven-snapshots</td><td style="text-align:left;">\u79C1\u5E93\u5FEB\u7167\uFF08\u8C03\u8BD5\u7248\u672C\uFF09jar</td></tr><tr><td style="text-align:left;">maven-public</td><td style="text-align:left;">\u4ED3\u5E93\u5206\u7EC4\uFF0C\u628A\u4E0A\u9762\u4E09\u4E2A\u4ED3\u5E93\u7EC4\u5408\u5728\u4E00\u8D77\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u5728\u672C\u5730maven\u57FA\u7840\u914D\u7F6Esettings.xml\u4E2D\u4F7F\u7528</td></tr></tbody></table><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-3.png" alt="" title="**Repositories**"></p><h2 id="linux-\u4E0A\u5B89\u88C5" tabindex="-1">Linux \u4E0A\u5B89\u88C5 <a class="header-anchor" href="#linux-\u4E0A\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4F7F\u7528tar xvzf\u547D\u4EE4\u63D0\u53D6\u4E0B\u8F7D\u7684GZip\u7684TAR\u5F52\u6863\u6587\u4EF6\u3002 \u5BF9\u4E8E\u751F\u4EA7\u800C\u8A00\uFF0C\u5EFA\u8BAE\u4E0D\u8981\u4ECE\u7528\u6237\u7684\u4E3B\u76EE\u5F55\u8FD0\u884Cnexus\uFF0C\u901A\u5E38\u7684\u505A\u6CD5\u662F\u4F7F\u7528<code>/opt</code>\u3002 \u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u8981\u5728\u7C7B\u4F3CLinux\u7684\u7C7BUnix\u5E73\u53F0\u4E0A\u4ECE<code>bin</code>\u6587\u4EF6\u5939\u4E2D\u7684\u5E94\u7528\u7A0B\u5E8F\u76EE\u5F55\u542F\u52A8\u5B58\u50A8\u5E93\u7BA1\u7406\u5668\uFF0C\u8BF7\u4F7F\u7528\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">./nexus run</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">./nexus run</span></span>
<span class="line"></span></code></pre></div><p>The <code>nexus</code> script can be used to manage the repository manager as a background application on OSX and Unix with the <code>start</code>, <code>stop</code>, <code>restart</code>, <code>force-reload</code> and <code>status</code> commands.</p><p>\u6700\u540E\u901A\u8FC7 <a href="http://ip:8081" target="_blank" rel="noopener noreferrer">http://ip:8081</a> \u5373\u53EF\u8BBF\u95EE, \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\u5206\u522B\u662F <code>admin/admin123</code></p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-2.png" alt="" title="\u622A\u56FE"></p><h3 id="\u521B\u5EFA\u4ED3\u5E93-\u963F\u91CC\u7684\u4E2D\u592E\u4ED3\u5E93" tabindex="-1">\u521B\u5EFA\u4ED3\u5E93(\u963F\u91CC\u7684\u4E2D\u592E\u4ED3\u5E93) <a class="header-anchor" href="#\u521B\u5EFA\u4ED3\u5E93-\u963F\u91CC\u7684\u4E2D\u592E\u4ED3\u5E93" aria-hidden="true">#</a></h3><p>proxy\u4EE3\u7406\u4ED3\u5E93</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-4.png" alt=""></p><p>hosted\u5BBF\u4E3B\u4ED3\u5E93</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-6.png" alt=""></p><p>group\u4ED3\u5E93\u7EC4</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-5.png" alt=""></p><h2 id="docker-\u4E2D\u8FD0\u884C" tabindex="-1">Docker \u4E2D\u8FD0\u884C <a class="header-anchor" href="#docker-\u4E2D\u8FD0\u884C" aria-hidden="true">#</a></h2><p>\u4ED3\u5E93\u5730\u5740:<a href="https://hub.docker.com/r/sonatype/nexus3/" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/sonatype/nexus3/</a></p><p>1\u3001\u521B\u5EFA\u5B58\u653E\u6570\u636E\u7684\u4F4D\u7F6E</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u4E2A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir /data/nexus-data</span></span>
<span class="line"><span style="color:#758575;"># \u8D4B\u4E88\u6743\u9650\uFF0C\u4E0D\u7136\u542F\u52A8\u4F1A\u62A5\u9519\uFF0C\u65E0\u64CD\u4F5C\u6743\u9650</span></span>
<span class="line"><span style="color:#DBD7CA;">chmod 755 nexus-data</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u4E2A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#393A34;">mkdir /data/nexus-data</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8D4B\u4E88\u6743\u9650\uFF0C\u4E0D\u7136\u542F\u52A8\u4F1A\u62A5\u9519\uFF0C\u65E0\u64CD\u4F5C\u6743\u9650</span></span>
<span class="line"><span style="color:#393A34;">chmod 755 nexus-data</span></span>
<span class="line"></span></code></pre></div><p>2\u3001\u542F\u52A8</p><p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\uFF0C\u4F1A\u81EA\u52A8\u62C9\u53D6\u955C\u50CF\u5E76\u542F\u52A8</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">docker run -d -p 8081:8081 --name nexus -v /data/nexus-data:/nexus-data --restart=always sonatype/nexus3</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">docker run -d -p 8081:8081 --name nexus -v /data/nexus-data:/nexus-data --restart=always sonatype/nexus3</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7<code>docker logs -f nexus</code>\u67E5\u770B\u542F\u52A8\u65E5\u5FD7\uFF0C\u5F53\u51FA\u73B0<code>Started Sonatype Nexus OSS</code>\u8BF4\u660E\u542F\u52A8\u6210\u529F\uFF0C\u8FD9\u65F6\u901A\u8FC7<code>http://ip:8081</code>\u5373\u53EF\u8BBF\u95EE</p><h2 id="windows-\u4E0A\u5B89\u88C5" tabindex="-1">Windows \u4E0A\u5B89\u88C5 <a class="header-anchor" href="#windows-\u4E0A\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u65B9\u4FBF\u7BA1\u7406<code>Nexus</code>, \u53EF\u4EE5\u5C06<code>nexus</code>\u7684<code>bin</code>\u76EE\u5F55\u6DFB\u52A0\u8FDB\u73AF\u5883\u53D8\u91CF, \u5177\u4F53\u65B9\u6CD5\u53EF\u4EE5\u7F51\u4E0A\u641C\u7D22, \u5728\u6B64\u4E0D\u518D\u8D58\u8FF0.</p><p>Windows \u76F4\u63A5\u8FD0\u884C:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">nexus.exe /run</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">nexus.exe /run</span></span>
<span class="line"></span></code></pre></div><p>The <code>nexus.exe</code> executable can be used to manage the repository manager as a service with the <code>/start</code>, <code>/stop</code>, <code>/restart</code>,<code> /force-reload</code> and <code>/\`\`status</code> commands.</p><p>\u6700\u540E, \u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE <a href="http://127.0.0.1:8081/" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8081/</a> \u5373\u53EF.</p><p>\u2139\uFE0F\u6CE8\u610F: <code>admin</code>\u8D26\u6237\u7684\u9ED8\u8BA4\u5BC6\u7801\u5728<code>[Nexus\u5B89\u88C5\u76EE\u5F55]\\sonatype-work\\nexus3\\admin.password</code>, \u7B2C\u4E00\u6B21\u5F15\u5BFC\u65F6\u4F1A\u63D0\u793A\u4F60\u4FEE\u6539\u5BC6\u7801.</p><h2 id="\u9879\u76EE\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-xml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">&lt;?</span><span style="color:#429988;">xml</span><span style="color:#E0A569;"> version</span><span style="color:#DBD7CA;">=</span><span style="color:#C98A7D;">&quot;1.0&quot;</span><span style="color:#E0A569;"> encoding</span><span style="color:#DBD7CA;">=</span><span style="color:#C98A7D;">&quot;UTF-8&quot;</span><span style="color:#858585;">?&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">&lt;!--</span></span>
<span class="line"><span style="color:#758575;">Licensed to the Apache Software Foundation (ASF) under one</span></span>
<span class="line"><span style="color:#758575;">or more contributor license agreements.  See the NOTICE file</span></span>
<span class="line"><span style="color:#758575;">distributed with this work for additional information</span></span>
<span class="line"><span style="color:#758575;">regarding copyright ownership.  The ASF licenses this file</span></span>
<span class="line"><span style="color:#758575;">to you under the Apache License, Version 2.0 (the</span></span>
<span class="line"><span style="color:#758575;">&quot;License&quot;); you may not use this file except in compliance</span></span>
<span class="line"><span style="color:#758575;">with the License.  You may obtain a copy of the License at</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">    http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">Unless required by applicable law or agreed to in writing,</span></span>
<span class="line"><span style="color:#758575;">software distributed under the License is distributed on an</span></span>
<span class="line"><span style="color:#758575;">&quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY</span></span>
<span class="line"><span style="color:#758575;">KIND, either express or implied.  See the License for the</span></span>
<span class="line"><span style="color:#758575;">specific language governing permissions and limitations</span></span>
<span class="line"><span style="color:#758575;">under the License.</span></span>
<span class="line"><span style="color:#758575;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">&lt;!--</span></span>
<span class="line"><span style="color:#758575;"> | This is the configuration file for Maven. It can be specified at two levels:</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> |  1. User Level. This settings.xml file provides configuration for a single user,</span></span>
<span class="line"><span style="color:#758575;"> |                 and is normally provided in \${user.home}/.m2/settings.xml.</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> |                 NOTE: This location can be overridden with the CLI option:</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> |                 -s /path/to/user/settings.xml</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> |  2. Global Level. This settings.xml file provides configuration for all Maven</span></span>
<span class="line"><span style="color:#758575;"> |                 users on a machine (assuming they&#39;re all using the same Maven</span></span>
<span class="line"><span style="color:#758575;"> |                 installation). It&#39;s normally provided in</span></span>
<span class="line"><span style="color:#758575;"> |                 \${maven.home}/conf/settings.xml.</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> |                 NOTE: This location can be overridden with the CLI option:</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> |                 -gs /path/to/global/settings.xml</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> | The sections in this sample file are intended to give you a running start at</span></span>
<span class="line"><span style="color:#758575;"> | getting the most out of your Maven installation. Where appropriate, the default</span></span>
<span class="line"><span style="color:#758575;"> | values (values used when the setting is not specified) are provided.</span></span>
<span class="line"><span style="color:#758575;"> |</span></span>
<span class="line"><span style="color:#758575;"> |--&gt;</span></span>
<span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">settings</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">xmlns</span><span style="color:#DBD7CA;">=</span><span style="color:#C98A7D;">&quot;http://maven.apache.org/SETTINGS/1.0.0&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#E0A569;">xmlns</span><span style="color:#858585;">:</span><span style="color:#E0A569;">xsi</span><span style="color:#DBD7CA;">=</span><span style="color:#C98A7D;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#E0A569;">xsi</span><span style="color:#858585;">:</span><span style="color:#E0A569;">schemaLocation</span><span style="color:#DBD7CA;">=</span><span style="color:#C98A7D;">&quot;http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd&quot;</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- localRepository</span></span>
<span class="line"><span style="color:#758575;">   | The path to the local repository maven will use to store artifacts.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | Default: \${user.home}/.m2/repository</span></span>
<span class="line"><span style="color:#758575;">    --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">localRepository</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">D:\\Maven\\repository</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">localRepository</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- interactiveMode</span></span>
<span class="line"><span style="color:#758575;">   | This will determine whether maven prompts you when it needs input. If set to false,</span></span>
<span class="line"><span style="color:#758575;">   | maven will use a sensible default value, perhaps based on some other setting, for</span></span>
<span class="line"><span style="color:#758575;">   | the parameter in question.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | Default: true</span></span>
<span class="line"><span style="color:#758575;">  &lt;interactiveMode&gt;true&lt;/interactiveMode&gt;</span></span>
<span class="line"><span style="color:#758575;">  --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- offline</span></span>
<span class="line"><span style="color:#758575;">   | Determines whether maven should attempt to connect to the network when executing a build.</span></span>
<span class="line"><span style="color:#758575;">   | This will have an effect on artifact downloads, artifact deployment, and others.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | Default: false</span></span>
<span class="line"><span style="color:#758575;">  &lt;offline&gt;false&lt;/offline&gt;</span></span>
<span class="line"><span style="color:#758575;">  --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- pluginGroups</span></span>
<span class="line"><span style="color:#758575;">   | This is a list of additional group identifiers that will be searched when resolving plugins by their prefix, i.e.</span></span>
<span class="line"><span style="color:#758575;">   | when invoking a command line like &quot;mvn prefix:goal&quot;. Maven will automatically add the group identifiers</span></span>
<span class="line"><span style="color:#758575;">   | &quot;org.apache.maven.plugins&quot; and &quot;org.codehaus.mojo&quot; if these are not already contained in the list.</span></span>
<span class="line"><span style="color:#758575;">   |--&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">pluginGroups</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">&lt;!-- pluginGroup</span></span>
<span class="line"><span style="color:#758575;">     | Specifies a further group identifier to use for plugin lookup.</span></span>
<span class="line"><span style="color:#758575;">    &lt;pluginGroup&gt;com.your.plugins&lt;/pluginGroup&gt;</span></span>
<span class="line"><span style="color:#758575;">    --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">pluginGroups</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- proxies</span></span>
<span class="line"><span style="color:#758575;">   | This is a list of proxies which can be used on this machine to connect to the network.</span></span>
<span class="line"><span style="color:#758575;">   | Unless otherwise specified (by system property or command-line switch), the first proxy</span></span>
<span class="line"><span style="color:#758575;">   | specification in this list marked as active will be used.</span></span>
<span class="line"><span style="color:#758575;">   |--&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">proxies</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">&lt;!-- proxy</span></span>
<span class="line"><span style="color:#758575;">     | Specification for one proxy, to be used in connecting to the network.</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">    &lt;proxy&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;id&gt;optional&lt;/id&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;active&gt;true&lt;/active&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;protocol&gt;http&lt;/protocol&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;username&gt;proxyuser&lt;/username&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;password&gt;proxypass&lt;/password&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;host&gt;proxy.host.net&lt;/host&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;port&gt;80&lt;/port&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;nonProxyHosts&gt;local.net|some.host.com&lt;/nonProxyHosts&gt;</span></span>
<span class="line"><span style="color:#758575;">    &lt;/proxy&gt;</span></span>
<span class="line"><span style="color:#758575;">    --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">proxies</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- servers</span></span>
<span class="line"><span style="color:#758575;">   | This is a list of authentication profiles, keyed by the server-id used within the system.</span></span>
<span class="line"><span style="color:#758575;">   | Authentication profiles can be used whenever maven must make a connection to a remote server.</span></span>
<span class="line"><span style="color:#758575;">   |--&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">servers</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">&lt;!-- server</span></span>
<span class="line"><span style="color:#758575;">     | Specifies the authentication information to use when connecting to a particular server, identified by</span></span>
<span class="line"><span style="color:#758575;">     | a unique name within the system (referred to by the &#39;id&#39; attribute below).</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">     | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are</span></span>
<span class="line"><span style="color:#758575;">     |       used together.</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">     --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">server</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">release</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">username</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">admin</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">username</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">password</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">admin123</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">password</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">server</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">server</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">snapshots</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">username</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">admin</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">username</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">password</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">admin123</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">password</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">server</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">&lt;!-- Another sample, using keys to authenticate.</span></span>
<span class="line"><span style="color:#758575;">    &lt;server&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;id&gt;release&lt;/id&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;privateKey&gt;/path/to/private/key&lt;/privateKey&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;passphrase&gt;optional; leave empty if not used.&lt;/passphrase&gt;</span></span>
<span class="line"><span style="color:#758575;">    &lt;/server&gt;</span></span>
<span class="line"><span style="color:#758575;">    --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">servers</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- mirrors</span></span>
<span class="line"><span style="color:#758575;">   | This is a list of mirrors to be used in downloading artifacts from remote repositories.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | It works like this: a POM may declare a repository to use in resolving certain artifacts.</span></span>
<span class="line"><span style="color:#758575;">   | However, this repository may have problems with heavy traffic at times, so people have mirrored</span></span>
<span class="line"><span style="color:#758575;">   | it to several places.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | That repository definition will have a unique id, so we can create a mirror reference for that</span></span>
<span class="line"><span style="color:#758575;">   | repository, to be used as an alternate download site. The mirror site will be the preferred</span></span>
<span class="line"><span style="color:#758575;">   | server for that repository.</span></span>
<span class="line"><span style="color:#758575;">   |--&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">mirrors</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">&lt;!-- mirror</span></span>
<span class="line"><span style="color:#758575;">     | Specifies a repository mirror site to use instead of a given repository. The repository that</span></span>
<span class="line"><span style="color:#758575;">     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used</span></span>
<span class="line"><span style="color:#758575;">     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">    &lt;mirror&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;id&gt;mirrorId&lt;/id&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;mirrorOf&gt;repositoryId&lt;/mirrorOf&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;name&gt;Human Readable Name for this Mirror.&lt;/name&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;url&gt;http://my.repository.com/repo/path&lt;/url&gt;</span></span>
<span class="line"><span style="color:#758575;">    &lt;/mirror&gt;</span></span>
<span class="line"><span style="color:#758575;">     --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">mirrors</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- profiles</span></span>
<span class="line"><span style="color:#758575;">   | This is a list of profiles which can be activated in a variety of ways, and which can modify</span></span>
<span class="line"><span style="color:#758575;">   | the build process. Profiles provided in the settings.xml are intended to provide local machine-</span></span>
<span class="line"><span style="color:#758575;">   | specific paths and repository locations which allow the build to work in the local environment.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | For example, if you have an integration testing plugin - like cactus - that needs to know where</span></span>
<span class="line"><span style="color:#758575;">   | your Tomcat instance is installed, you can provide a variable here such that the variable is</span></span>
<span class="line"><span style="color:#758575;">   | dereferenced during the build process to configure the cactus plugin.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles</span></span>
<span class="line"><span style="color:#758575;">   | section of this document (settings.xml) - will be discussed later. Another way essentially</span></span>
<span class="line"><span style="color:#758575;">   | relies on the detection of a system property, either matching a particular value for the property,</span></span>
<span class="line"><span style="color:#758575;">   | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a</span></span>
<span class="line"><span style="color:#758575;">   | value of &#39;1.4&#39; might activate a profile when the build is executed on a JDK version of &#39;1.4.2_07&#39;.</span></span>
<span class="line"><span style="color:#758575;">   | Finally, the list of active profiles can be specified directly from the command line.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact</span></span>
<span class="line"><span style="color:#758575;">   |       repositories, plugin repositories, and free-form properties to be used as configuration</span></span>
<span class="line"><span style="color:#758575;">   |       variables for plugins in the POM.</span></span>
<span class="line"><span style="color:#758575;">   |</span></span>
<span class="line"><span style="color:#758575;">   |--&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">profiles</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">&lt;!-- profile</span></span>
<span class="line"><span style="color:#758575;">     | Specifies a set of introductions to the build process, to be activated using one or more of the</span></span>
<span class="line"><span style="color:#758575;">     | mechanisms described above. For inheritance purposes, and to activate profiles via &lt;activatedProfiles/&gt;</span></span>
<span class="line"><span style="color:#758575;">     | or the command line, profiles have to have an ID that is unique.</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">     | An encouraged best practice for profile identification is to use a consistent naming convention</span></span>
<span class="line"><span style="color:#758575;">     | for profiles, such as &#39;env-dev&#39;, &#39;env-test&#39;, &#39;env-production&#39;, &#39;user-jdcasey&#39;, &#39;user-brett&#39;, etc.</span></span>
<span class="line"><span style="color:#758575;">     | This will make it more intuitive to understand what the set of introduced profiles is attempting</span></span>
<span class="line"><span style="color:#758575;">     | to accomplish, particularly when you only have a list of profile id&#39;s for debug.</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">     | This profile example uses the JDK version to trigger activation, and provides a JDK-specific repo.</span></span>
<span class="line"><span style="color:#758575;">    &lt;profile&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;id&gt;jdk-1.4&lt;/id&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">      &lt;activation&gt;</span></span>
<span class="line"><span style="color:#758575;">        &lt;jdk&gt;1.4&lt;/jdk&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;/activation&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">      &lt;repositories&gt;</span></span>
<span class="line"><span style="color:#758575;">        &lt;repository&gt;</span></span>
<span class="line"><span style="color:#758575;">          &lt;id&gt;jdk14&lt;/id&gt;</span></span>
<span class="line"><span style="color:#758575;">          &lt;name&gt;Repository for JDK 1.4 builds&lt;/name&gt;</span></span>
<span class="line"><span style="color:#758575;">          &lt;url&gt;http://www.myhost.com/maven/jdk14&lt;/url&gt;</span></span>
<span class="line"><span style="color:#758575;">          &lt;layout&gt;default&lt;/layout&gt;</span></span>
<span class="line"><span style="color:#758575;">          &lt;snapshotPolicy&gt;always&lt;/snapshotPolicy&gt;</span></span>
<span class="line"><span style="color:#758575;">        &lt;/repository&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;/repositories&gt;</span></span>
<span class="line"><span style="color:#758575;">    &lt;/profile&gt;</span></span>
<span class="line"><span style="color:#758575;">    --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">&lt;!--</span></span>
<span class="line"><span style="color:#758575;">     | Here is another profile, activated by the system property &#39;target-env&#39; with a value of &#39;dev&#39;,</span></span>
<span class="line"><span style="color:#758575;">     | which provides a specific path to the Tomcat instance. To use this, your plugin configuration</span></span>
<span class="line"><span style="color:#758575;">     | might hypothetically look like:</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">     | ...</span></span>
<span class="line"><span style="color:#758575;">     | &lt;plugin&gt;</span></span>
<span class="line"><span style="color:#758575;">     |   &lt;groupId&gt;org.myco.myplugins&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#758575;">     |   &lt;artifactId&gt;myplugin&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">     |   &lt;configuration&gt;</span></span>
<span class="line"><span style="color:#758575;">     |     &lt;tomcatLocation&gt;\${tomcatPath}&lt;/tomcatLocation&gt;</span></span>
<span class="line"><span style="color:#758575;">     |   &lt;/configuration&gt;</span></span>
<span class="line"><span style="color:#758575;">     | &lt;/plugin&gt;</span></span>
<span class="line"><span style="color:#758575;">     | ...</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">     | NOTE: If you just wanted to inject this configuration whenever someone set &#39;target-env&#39; to</span></span>
<span class="line"><span style="color:#758575;">     |       anything, you could just leave off the &lt;value/&gt; inside the activation-property.</span></span>
<span class="line"><span style="color:#758575;">     |</span></span>
<span class="line"><span style="color:#758575;">    </span></span>
<span class="line"><span style="color:#758575;">    &lt;profile&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;id&gt;env-dev&lt;/id&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">      &lt;activation&gt;</span></span>
<span class="line"><span style="color:#758575;">        &lt;property&gt;</span></span>
<span class="line"><span style="color:#758575;">          &lt;name&gt;target-env&lt;/name&gt;</span></span>
<span class="line"><span style="color:#758575;">          &lt;value&gt;dev&lt;/value&gt;</span></span>
<span class="line"><span style="color:#758575;">        &lt;/property&gt;</span></span>
<span class="line"><span style="color:#758575;">      &lt;/activation&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">    &lt;/profile&gt;</span></span>
<span class="line"><span style="color:#758575;">    --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span></span>
<span class="line"><span style="color:#DBD7CA;">     </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">profile</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">default_profile</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">repositories</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#758575;">&lt;!--\u5305\u542B\u9700\u8981\u8FDE\u63A5\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">repository</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#758575;">&lt;!--\u8FDC\u7A0B\u4ED3\u5E93\u552F\u4E00\u6807\u8BC6 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">zhanglonghao_repo</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#758575;">&lt;!--\u8FDC\u7A0B\u4ED3\u5E93\u540D\u79F0 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">name</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">zhanglonghao_repo</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">name</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#758575;">&lt;!--\u5982\u4F55\u5904\u7406\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u53D1\u5E03\u7248\u672C\u7684\u4E0B\u8F7D --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">releases</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#758575;">&lt;!--true\u6216\u8005false\u8868\u793A\u8BE5\u4ED3\u5E93\u662F\u5426\u4E3A\u4E0B\u8F7D\u67D0\u79CD\u7C7B\u578B\u6784\u4EF6\uFF08\u53D1\u5E03\u7248\uFF0C\u5FEB\u7167\u7248\uFF09\u5F00\u542F\u3002 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">true</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#758575;">&lt;!--\u8BE5\u5143\u7D20\u6307\u5B9A\u66F4\u65B0\u53D1\u751F\u7684\u9891\u7387\u3002Maven\u4F1A\u6BD4\u8F83\u672C\u5730POM\u548C\u8FDC\u7A0BPOM\u7684\u65F6\u95F4\u6233\u3002\u8FD9\u91CC\u7684\u9009\u9879\u662F\uFF1Aalways\uFF08\u4E00\u76F4\uFF09\uFF0Cdaily\uFF08\u9ED8\u8BA4\uFF0C\u6BCF\u65E5\uFF09\uFF0Cinterval\uFF1AX\uFF08\u8FD9\u91CCX\u662F\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D\u7684\u65F6\u95F4\u95F4\u9694\uFF09\uFF0C\u6216\u8005never\uFF08\u4ECE\u4E0D\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">updatePolicy</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">never</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">updatePolicy</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#758575;">&lt;!--\u5F53Maven\u9A8C\u8BC1\u6784\u4EF6\u6821\u9A8C\u6587\u4EF6\u5931\u8D25\u65F6\u8BE5\u600E\u4E48\u505A-ignore\uFF08\u5FFD\u7565\uFF09\uFF0Cfail\uFF08\u5931\u8D25\uFF09\uFF0C\u6216\u8005warn\uFF08\u8B66\u544A\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">checksumPolicy</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">warn</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">checksumPolicy</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">releases</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#758575;">&lt;!--\u5982\u4F55\u5904\u7406\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u5FEB\u7167\u7248\u672C\u7684\u4E0B\u8F7D\u3002\u6709\u4E86releases\u548Csnapshots\u8FD9\u4E24\u7EC4\u914D\u7F6E\uFF0CPOM\u5C31\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5355\u72EC\u7684\u4ED3\u5E93\u4E2D\uFF0C\u4E3A\u6BCF\u79CD\u7C7B\u578B\u7684\u6784\u4EF6\u91C7\u53D6\u4E0D\u540C\u7684\u7B56\u7565\u3002\u4F8B\u5982\uFF0C\u53EF\u80FD\u6709\u4EBA\u4F1A\u51B3\u5B9A\u53EA\u4E3A\u5F00\u53D1\u76EE\u7684\u5F00\u542F\u5BF9\u5FEB\u7167\u7248\u672C\u4E0B\u8F7D\u7684\u652F\u6301\u3002\u53C2\u89C1repositories/repository/releases\u5143\u7D20 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">snapshots</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#758575;">&lt;!--true\u6216\u8005false\u8868\u793A\u8BE5\u4ED3\u5E93\u662F\u5426\u4E3A\u4E0B\u8F7D\u67D0\u79CD\u7C7B\u578B\u6784\u4EF6\uFF08\u53D1\u5E03\u7248\uFF0C\u5FEB\u7167\u7248\uFF09\u5F00\u542F\u3002 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">true</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#758575;">&lt;!--\u8BE5\u5143\u7D20\u6307\u5B9A\u66F4\u65B0\u53D1\u751F\u7684\u9891\u7387\u3002Maven\u4F1A\u6BD4\u8F83\u672C\u5730POM\u548C\u8FDC\u7A0BPOM\u7684\u65F6\u95F4\u6233\u3002\u8FD9\u91CC\u7684\u9009\u9879\u662F\uFF1Aalways\uFF08\u4E00\u76F4\uFF09\uFF0Cdaily\uFF08\u9ED8\u8BA4\uFF0C\u6BCF\u65E5\uFF09\uFF0Cinterval\uFF1AX\uFF08\u8FD9\u91CCX\u662F\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D\u7684\u65F6\u95F4\u95F4\u9694\uFF09\uFF0C\u6216\u8005never\uFF08\u4ECE\u4E0D\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">updatePolicy</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">always</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">updatePolicy</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#758575;">&lt;!--\u5F53Maven\u9A8C\u8BC1\u6784\u4EF6\u6821\u9A8C\u6587\u4EF6\u5931\u8D25\u65F6\u8BE5\u600E\u4E48\u505A-ignore\uFF08\u5FFD\u7565\uFF09\uFF0Cfail\uFF08\u5931\u8D25\uFF09\uFF0C\u6216\u8005warn\uFF08\u8B66\u544A\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">checksumPolicy</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">warn</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">checksumPolicy</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">snapshots</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#758575;">&lt;!--\u8FDC\u7A0B\u4ED3\u5E93URL\uFF0C\u6309protocol://hostname/path\u5F62\u5F0F --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">url</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">http://maven.zhanglonghao.work:8081/nexus/content/groups/public</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">url</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#758575;">&lt;!--\u7528\u4E8E\u5B9A\u4F4D\u548C\u6392\u5E8F\u6784\u4EF6\u7684\u4ED3\u5E93\u5E03\u5C40\u7C7B\u578B-\u53EF\u4EE5\u662Fdefault\uFF08\u9ED8\u8BA4\uFF09\u6216\u8005legacy\uFF08\u9057\u7559\uFF09\u3002Maven 2\u4E3A\u5176\u4ED3\u5E93\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5E03\u5C40\uFF1B\u7136\u800C\uFF0CMaven 1.x\u6709\u4E00\u79CD\u4E0D\u540C\u7684\u5E03\u5C40\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5143\u7D20\u6307\u5B9A\u5E03\u5C40\u662Fdefault\uFF08\u9ED8\u8BA4\uFF09\u8FD8\u662Flegacy\uFF08\u9057\u7559\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">layout</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">default</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">layout</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">repository</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">repositories</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">pluginRepositories</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">pluginRepository</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">maven-net-cn</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">id</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">name</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">Maven China Mirror</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">name</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">url</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">http://maven.zhanglonghao.work:8081/nexus/content/groups/public</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">url</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">releases</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">true</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">releases</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">snapshots</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">            </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">true</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">enabled</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">          </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">snapshots</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">      </span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">pluginRepository</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">pluginRepositories</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">profile</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">profiles</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">&lt;!-- activeProfiles</span></span>
<span class="line"><span style="color:#758575;">   | List of profiles that are active for all builds.</span></span>
<span class="line"><span style="color:#758575;">   --&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">activeProfiles</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">activeProfile</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">default_profile</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">activeProfile</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">activeProfiles</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">settings</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">&lt;?</span><span style="color:#2F8A89;">xml</span><span style="color:#B58451;"> version</span><span style="color:#393A34;">=</span><span style="color:#B56959;">&quot;1.0&quot;</span><span style="color:#B58451;"> encoding</span><span style="color:#393A34;">=</span><span style="color:#B56959;">&quot;UTF-8&quot;</span><span style="color:#8E8F8B;">?&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">&lt;!--</span></span>
<span class="line"><span style="color:#A0ADA0;">Licensed to the Apache Software Foundation (ASF) under one</span></span>
<span class="line"><span style="color:#A0ADA0;">or more contributor license agreements.  See the NOTICE file</span></span>
<span class="line"><span style="color:#A0ADA0;">distributed with this work for additional information</span></span>
<span class="line"><span style="color:#A0ADA0;">regarding copyright ownership.  The ASF licenses this file</span></span>
<span class="line"><span style="color:#A0ADA0;">to you under the Apache License, Version 2.0 (the</span></span>
<span class="line"><span style="color:#A0ADA0;">&quot;License&quot;); you may not use this file except in compliance</span></span>
<span class="line"><span style="color:#A0ADA0;">with the License.  You may obtain a copy of the License at</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">    http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">Unless required by applicable law or agreed to in writing,</span></span>
<span class="line"><span style="color:#A0ADA0;">software distributed under the License is distributed on an</span></span>
<span class="line"><span style="color:#A0ADA0;">&quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY</span></span>
<span class="line"><span style="color:#A0ADA0;">KIND, either express or implied.  See the License for the</span></span>
<span class="line"><span style="color:#A0ADA0;">specific language governing permissions and limitations</span></span>
<span class="line"><span style="color:#A0ADA0;">under the License.</span></span>
<span class="line"><span style="color:#A0ADA0;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">&lt;!--</span></span>
<span class="line"><span style="color:#A0ADA0;"> | This is the configuration file for Maven. It can be specified at two levels:</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> |  1. User Level. This settings.xml file provides configuration for a single user,</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 and is normally provided in \${user.home}/.m2/settings.xml.</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 NOTE: This location can be overridden with the CLI option:</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 -s /path/to/user/settings.xml</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> |  2. Global Level. This settings.xml file provides configuration for all Maven</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 users on a machine (assuming they&#39;re all using the same Maven</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 installation). It&#39;s normally provided in</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 \${maven.home}/conf/settings.xml.</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 NOTE: This location can be overridden with the CLI option:</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> |                 -gs /path/to/global/settings.xml</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> | The sections in this sample file are intended to give you a running start at</span></span>
<span class="line"><span style="color:#A0ADA0;"> | getting the most out of your Maven installation. Where appropriate, the default</span></span>
<span class="line"><span style="color:#A0ADA0;"> | values (values used when the setting is not specified) are provided.</span></span>
<span class="line"><span style="color:#A0ADA0;"> |</span></span>
<span class="line"><span style="color:#A0ADA0;"> |--&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">settings</span><span style="color:#393A34;"> </span><span style="color:#B58451;">xmlns</span><span style="color:#393A34;">=</span><span style="color:#B56959;">&quot;http://maven.apache.org/SETTINGS/1.0.0&quot;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#B58451;">xmlns</span><span style="color:#8E8F8B;">:</span><span style="color:#B58451;">xsi</span><span style="color:#393A34;">=</span><span style="color:#B56959;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#B58451;">xsi</span><span style="color:#8E8F8B;">:</span><span style="color:#B58451;">schemaLocation</span><span style="color:#393A34;">=</span><span style="color:#B56959;">&quot;http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd&quot;</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- localRepository</span></span>
<span class="line"><span style="color:#A0ADA0;">   | The path to the local repository maven will use to store artifacts.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | Default: \${user.home}/.m2/repository</span></span>
<span class="line"><span style="color:#A0ADA0;">    --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">localRepository</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">D:\\Maven\\repository</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">localRepository</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- interactiveMode</span></span>
<span class="line"><span style="color:#A0ADA0;">   | This will determine whether maven prompts you when it needs input. If set to false,</span></span>
<span class="line"><span style="color:#A0ADA0;">   | maven will use a sensible default value, perhaps based on some other setting, for</span></span>
<span class="line"><span style="color:#A0ADA0;">   | the parameter in question.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | Default: true</span></span>
<span class="line"><span style="color:#A0ADA0;">  &lt;interactiveMode&gt;true&lt;/interactiveMode&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">  --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- offline</span></span>
<span class="line"><span style="color:#A0ADA0;">   | Determines whether maven should attempt to connect to the network when executing a build.</span></span>
<span class="line"><span style="color:#A0ADA0;">   | This will have an effect on artifact downloads, artifact deployment, and others.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | Default: false</span></span>
<span class="line"><span style="color:#A0ADA0;">  &lt;offline&gt;false&lt;/offline&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">  --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- pluginGroups</span></span>
<span class="line"><span style="color:#A0ADA0;">   | This is a list of additional group identifiers that will be searched when resolving plugins by their prefix, i.e.</span></span>
<span class="line"><span style="color:#A0ADA0;">   | when invoking a command line like &quot;mvn prefix:goal&quot;. Maven will automatically add the group identifiers</span></span>
<span class="line"><span style="color:#A0ADA0;">   | &quot;org.apache.maven.plugins&quot; and &quot;org.codehaus.mojo&quot; if these are not already contained in the list.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |--&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">pluginGroups</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- pluginGroup</span></span>
<span class="line"><span style="color:#A0ADA0;">     | Specifies a further group identifier to use for plugin lookup.</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;pluginGroup&gt;com.your.plugins&lt;/pluginGroup&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">pluginGroups</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- proxies</span></span>
<span class="line"><span style="color:#A0ADA0;">   | This is a list of proxies which can be used on this machine to connect to the network.</span></span>
<span class="line"><span style="color:#A0ADA0;">   | Unless otherwise specified (by system property or command-line switch), the first proxy</span></span>
<span class="line"><span style="color:#A0ADA0;">   | specification in this list marked as active will be used.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |--&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">proxies</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- proxy</span></span>
<span class="line"><span style="color:#A0ADA0;">     | Specification for one proxy, to be used in connecting to the network.</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;proxy&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;id&gt;optional&lt;/id&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;active&gt;true&lt;/active&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;protocol&gt;http&lt;/protocol&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;username&gt;proxyuser&lt;/username&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;password&gt;proxypass&lt;/password&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;host&gt;proxy.host.net&lt;/host&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;port&gt;80&lt;/port&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;nonProxyHosts&gt;local.net|some.host.com&lt;/nonProxyHosts&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;/proxy&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">proxies</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- servers</span></span>
<span class="line"><span style="color:#A0ADA0;">   | This is a list of authentication profiles, keyed by the server-id used within the system.</span></span>
<span class="line"><span style="color:#A0ADA0;">   | Authentication profiles can be used whenever maven must make a connection to a remote server.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |--&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">servers</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- server</span></span>
<span class="line"><span style="color:#A0ADA0;">     | Specifies the authentication information to use when connecting to a particular server, identified by</span></span>
<span class="line"><span style="color:#A0ADA0;">     | a unique name within the system (referred to by the &#39;id&#39; attribute below).</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">     | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are</span></span>
<span class="line"><span style="color:#A0ADA0;">     |       used together.</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">     --&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">server</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">release</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">username</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">admin</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">username</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">password</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">admin123</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">password</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">server</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">server</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">snapshots</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">username</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">admin</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">username</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">password</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">admin123</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">password</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">server</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- Another sample, using keys to authenticate.</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;server&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;id&gt;release&lt;/id&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;privateKey&gt;/path/to/private/key&lt;/privateKey&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;passphrase&gt;optional; leave empty if not used.&lt;/passphrase&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;/server&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">servers</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- mirrors</span></span>
<span class="line"><span style="color:#A0ADA0;">   | This is a list of mirrors to be used in downloading artifacts from remote repositories.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | It works like this: a POM may declare a repository to use in resolving certain artifacts.</span></span>
<span class="line"><span style="color:#A0ADA0;">   | However, this repository may have problems with heavy traffic at times, so people have mirrored</span></span>
<span class="line"><span style="color:#A0ADA0;">   | it to several places.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | That repository definition will have a unique id, so we can create a mirror reference for that</span></span>
<span class="line"><span style="color:#A0ADA0;">   | repository, to be used as an alternate download site. The mirror site will be the preferred</span></span>
<span class="line"><span style="color:#A0ADA0;">   | server for that repository.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |--&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">mirrors</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- mirror</span></span>
<span class="line"><span style="color:#A0ADA0;">     | Specifies a repository mirror site to use instead of a given repository. The repository that</span></span>
<span class="line"><span style="color:#A0ADA0;">     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used</span></span>
<span class="line"><span style="color:#A0ADA0;">     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;mirror&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;id&gt;mirrorId&lt;/id&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;mirrorOf&gt;repositoryId&lt;/mirrorOf&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;name&gt;Human Readable Name for this Mirror.&lt;/name&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;url&gt;http://my.repository.com/repo/path&lt;/url&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;/mirror&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">mirrors</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- profiles</span></span>
<span class="line"><span style="color:#A0ADA0;">   | This is a list of profiles which can be activated in a variety of ways, and which can modify</span></span>
<span class="line"><span style="color:#A0ADA0;">   | the build process. Profiles provided in the settings.xml are intended to provide local machine-</span></span>
<span class="line"><span style="color:#A0ADA0;">   | specific paths and repository locations which allow the build to work in the local environment.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | For example, if you have an integration testing plugin - like cactus - that needs to know where</span></span>
<span class="line"><span style="color:#A0ADA0;">   | your Tomcat instance is installed, you can provide a variable here such that the variable is</span></span>
<span class="line"><span style="color:#A0ADA0;">   | dereferenced during the build process to configure the cactus plugin.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles</span></span>
<span class="line"><span style="color:#A0ADA0;">   | section of this document (settings.xml) - will be discussed later. Another way essentially</span></span>
<span class="line"><span style="color:#A0ADA0;">   | relies on the detection of a system property, either matching a particular value for the property,</span></span>
<span class="line"><span style="color:#A0ADA0;">   | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a</span></span>
<span class="line"><span style="color:#A0ADA0;">   | value of &#39;1.4&#39; might activate a profile when the build is executed on a JDK version of &#39;1.4.2_07&#39;.</span></span>
<span class="line"><span style="color:#A0ADA0;">   | Finally, the list of active profiles can be specified directly from the command line.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact</span></span>
<span class="line"><span style="color:#A0ADA0;">   |       repositories, plugin repositories, and free-form properties to be used as configuration</span></span>
<span class="line"><span style="color:#A0ADA0;">   |       variables for plugins in the POM.</span></span>
<span class="line"><span style="color:#A0ADA0;">   |</span></span>
<span class="line"><span style="color:#A0ADA0;">   |--&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">profiles</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- profile</span></span>
<span class="line"><span style="color:#A0ADA0;">     | Specifies a set of introductions to the build process, to be activated using one or more of the</span></span>
<span class="line"><span style="color:#A0ADA0;">     | mechanisms described above. For inheritance purposes, and to activate profiles via &lt;activatedProfiles/&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     | or the command line, profiles have to have an ID that is unique.</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">     | An encouraged best practice for profile identification is to use a consistent naming convention</span></span>
<span class="line"><span style="color:#A0ADA0;">     | for profiles, such as &#39;env-dev&#39;, &#39;env-test&#39;, &#39;env-production&#39;, &#39;user-jdcasey&#39;, &#39;user-brett&#39;, etc.</span></span>
<span class="line"><span style="color:#A0ADA0;">     | This will make it more intuitive to understand what the set of introduced profiles is attempting</span></span>
<span class="line"><span style="color:#A0ADA0;">     | to accomplish, particularly when you only have a list of profile id&#39;s for debug.</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">     | This profile example uses the JDK version to trigger activation, and provides a JDK-specific repo.</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;profile&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;id&gt;jdk-1.4&lt;/id&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;activation&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">        &lt;jdk&gt;1.4&lt;/jdk&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;/activation&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;repositories&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">        &lt;repository&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">          &lt;id&gt;jdk14&lt;/id&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">          &lt;name&gt;Repository for JDK 1.4 builds&lt;/name&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">          &lt;url&gt;http://www.myhost.com/maven/jdk14&lt;/url&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">          &lt;layout&gt;default&lt;/layout&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">          &lt;snapshotPolicy&gt;always&lt;/snapshotPolicy&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">        &lt;/repository&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;/repositories&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;/profile&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!--</span></span>
<span class="line"><span style="color:#A0ADA0;">     | Here is another profile, activated by the system property &#39;target-env&#39; with a value of &#39;dev&#39;,</span></span>
<span class="line"><span style="color:#A0ADA0;">     | which provides a specific path to the Tomcat instance. To use this, your plugin configuration</span></span>
<span class="line"><span style="color:#A0ADA0;">     | might hypothetically look like:</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">     | ...</span></span>
<span class="line"><span style="color:#A0ADA0;">     | &lt;plugin&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     |   &lt;groupId&gt;org.myco.myplugins&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     |   &lt;artifactId&gt;myplugin&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">     |   &lt;configuration&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     |     &lt;tomcatLocation&gt;\${tomcatPath}&lt;/tomcatLocation&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     |   &lt;/configuration&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     | &lt;/plugin&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">     | ...</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">     | NOTE: If you just wanted to inject this configuration whenever someone set &#39;target-env&#39; to</span></span>
<span class="line"><span style="color:#A0ADA0;">     |       anything, you could just leave off the &lt;value/&gt; inside the activation-property.</span></span>
<span class="line"><span style="color:#A0ADA0;">     |</span></span>
<span class="line"><span style="color:#A0ADA0;">    </span></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;profile&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;id&gt;env-dev&lt;/id&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;activation&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">        &lt;property&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">          &lt;name&gt;target-env&lt;/name&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">          &lt;value&gt;dev&lt;/value&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">        &lt;/property&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">      &lt;/activation&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">    &lt;/profile&gt;</span></span>
<span class="line"><span style="color:#A0ADA0;">    --&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span></span>
<span class="line"><span style="color:#393A34;">     </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">profile</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">default_profile</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">repositories</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A0ADA0;">&lt;!--\u5305\u542B\u9700\u8981\u8FDE\u63A5\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F --&gt;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">repository</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">&lt;!--\u8FDC\u7A0B\u4ED3\u5E93\u552F\u4E00\u6807\u8BC6 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">zhanglonghao_repo</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">&lt;!--\u8FDC\u7A0B\u4ED3\u5E93\u540D\u79F0 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">zhanglonghao_repo</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">&lt;!--\u5982\u4F55\u5904\u7406\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u53D1\u5E03\u7248\u672C\u7684\u4E0B\u8F7D --&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">releases</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A0ADA0;">&lt;!--true\u6216\u8005false\u8868\u793A\u8BE5\u4ED3\u5E93\u662F\u5426\u4E3A\u4E0B\u8F7D\u67D0\u79CD\u7C7B\u578B\u6784\u4EF6\uFF08\u53D1\u5E03\u7248\uFF0C\u5FEB\u7167\u7248\uFF09\u5F00\u542F\u3002 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">true</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A0ADA0;">&lt;!--\u8BE5\u5143\u7D20\u6307\u5B9A\u66F4\u65B0\u53D1\u751F\u7684\u9891\u7387\u3002Maven\u4F1A\u6BD4\u8F83\u672C\u5730POM\u548C\u8FDC\u7A0BPOM\u7684\u65F6\u95F4\u6233\u3002\u8FD9\u91CC\u7684\u9009\u9879\u662F\uFF1Aalways\uFF08\u4E00\u76F4\uFF09\uFF0Cdaily\uFF08\u9ED8\u8BA4\uFF0C\u6BCF\u65E5\uFF09\uFF0Cinterval\uFF1AX\uFF08\u8FD9\u91CCX\u662F\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D\u7684\u65F6\u95F4\u95F4\u9694\uFF09\uFF0C\u6216\u8005never\uFF08\u4ECE\u4E0D\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">updatePolicy</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">never</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">updatePolicy</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A0ADA0;">&lt;!--\u5F53Maven\u9A8C\u8BC1\u6784\u4EF6\u6821\u9A8C\u6587\u4EF6\u5931\u8D25\u65F6\u8BE5\u600E\u4E48\u505A-ignore\uFF08\u5FFD\u7565\uFF09\uFF0Cfail\uFF08\u5931\u8D25\uFF09\uFF0C\u6216\u8005warn\uFF08\u8B66\u544A\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">checksumPolicy</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">warn</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">checksumPolicy</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">releases</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">&lt;!--\u5982\u4F55\u5904\u7406\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u5FEB\u7167\u7248\u672C\u7684\u4E0B\u8F7D\u3002\u6709\u4E86releases\u548Csnapshots\u8FD9\u4E24\u7EC4\u914D\u7F6E\uFF0CPOM\u5C31\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5355\u72EC\u7684\u4ED3\u5E93\u4E2D\uFF0C\u4E3A\u6BCF\u79CD\u7C7B\u578B\u7684\u6784\u4EF6\u91C7\u53D6\u4E0D\u540C\u7684\u7B56\u7565\u3002\u4F8B\u5982\uFF0C\u53EF\u80FD\u6709\u4EBA\u4F1A\u51B3\u5B9A\u53EA\u4E3A\u5F00\u53D1\u76EE\u7684\u5F00\u542F\u5BF9\u5FEB\u7167\u7248\u672C\u4E0B\u8F7D\u7684\u652F\u6301\u3002\u53C2\u89C1repositories/repository/releases\u5143\u7D20 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">snapshots</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A0ADA0;">&lt;!--true\u6216\u8005false\u8868\u793A\u8BE5\u4ED3\u5E93\u662F\u5426\u4E3A\u4E0B\u8F7D\u67D0\u79CD\u7C7B\u578B\u6784\u4EF6\uFF08\u53D1\u5E03\u7248\uFF0C\u5FEB\u7167\u7248\uFF09\u5F00\u542F\u3002 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">true</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A0ADA0;">&lt;!--\u8BE5\u5143\u7D20\u6307\u5B9A\u66F4\u65B0\u53D1\u751F\u7684\u9891\u7387\u3002Maven\u4F1A\u6BD4\u8F83\u672C\u5730POM\u548C\u8FDC\u7A0BPOM\u7684\u65F6\u95F4\u6233\u3002\u8FD9\u91CC\u7684\u9009\u9879\u662F\uFF1Aalways\uFF08\u4E00\u76F4\uFF09\uFF0Cdaily\uFF08\u9ED8\u8BA4\uFF0C\u6BCF\u65E5\uFF09\uFF0Cinterval\uFF1AX\uFF08\u8FD9\u91CCX\u662F\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D\u7684\u65F6\u95F4\u95F4\u9694\uFF09\uFF0C\u6216\u8005never\uFF08\u4ECE\u4E0D\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">updatePolicy</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">always</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">updatePolicy</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#A0ADA0;">&lt;!--\u5F53Maven\u9A8C\u8BC1\u6784\u4EF6\u6821\u9A8C\u6587\u4EF6\u5931\u8D25\u65F6\u8BE5\u600E\u4E48\u505A-ignore\uFF08\u5FFD\u7565\uFF09\uFF0Cfail\uFF08\u5931\u8D25\uFF09\uFF0C\u6216\u8005warn\uFF08\u8B66\u544A\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">checksumPolicy</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">warn</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">checksumPolicy</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">snapshots</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">&lt;!--\u8FDC\u7A0B\u4ED3\u5E93URL\uFF0C\u6309protocol://hostname/path\u5F62\u5F0F --&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">url</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">http://maven.zhanglonghao.work:8081/nexus/content/groups/public</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">url</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">&lt;!--\u7528\u4E8E\u5B9A\u4F4D\u548C\u6392\u5E8F\u6784\u4EF6\u7684\u4ED3\u5E93\u5E03\u5C40\u7C7B\u578B-\u53EF\u4EE5\u662Fdefault\uFF08\u9ED8\u8BA4\uFF09\u6216\u8005legacy\uFF08\u9057\u7559\uFF09\u3002Maven 2\u4E3A\u5176\u4ED3\u5E93\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5E03\u5C40\uFF1B\u7136\u800C\uFF0CMaven 1.x\u6709\u4E00\u79CD\u4E0D\u540C\u7684\u5E03\u5C40\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5143\u7D20\u6307\u5B9A\u5E03\u5C40\u662Fdefault\uFF08\u9ED8\u8BA4\uFF09\u8FD8\u662Flegacy\uFF08\u9057\u7559\uFF09\u3002 --&gt;</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">layout</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">default</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">layout</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">repository</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">repositories</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">pluginRepositories</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">pluginRepository</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">maven-net-cn</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">id</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">Maven China Mirror</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">name</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">url</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">http://maven.zhanglonghao.work:8081/nexus/content/groups/public</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">url</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">releases</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">true</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">releases</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">snapshots</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">true</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">enabled</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">snapshots</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">      </span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">pluginRepository</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">pluginRepositories</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">profile</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">profiles</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">&lt;!-- activeProfiles</span></span>
<span class="line"><span style="color:#A0ADA0;">   | List of profiles that are active for all builds.</span></span>
<span class="line"><span style="color:#A0ADA0;">   --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">activeProfiles</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">activeProfile</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">default_profile</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">activeProfile</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">activeProfiles</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">settings</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><p>\u5B98\u65B9\u5B89\u88C5\u6587\u6863\uFF1A<a href="https://help.sonatype.com/repomanager3/installation/installation-methods" target="_blank" rel="noopener noreferrer">https://help.sonatype.com/repomanager3/installation/installation-methods</a></p></li><li><p>Linux\u642D\u5EFA\u81EA\u5DF1Nexus\u79C1\u670D\u7684\u5B9E\u73B0\u65B9\u6CD5\uFF1A<a href="https://www.jb51.net/article/171427.htm" target="_blank" rel="noopener noreferrer">https://www.jb51.net/article/171427.htm</a></p></li></ul>`,56),o=[e];function t(c,r,i,y,A,g){return n(),a("div",null,o)}var u=s(p,[["render",t]]);export{h as __pageData,u as default};
