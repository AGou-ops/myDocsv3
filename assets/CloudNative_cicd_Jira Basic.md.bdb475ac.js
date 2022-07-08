import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const h=JSON.parse('{"title":"Jira Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"Jira \u5B89\u88C5\u4E0E\u90E8\u7F72","slug":"jira-\u5B89\u88C5\u4E0E\u90E8\u7F72"},{"level":3,"title":"\u5B89\u88C5Jira","slug":"\u5B89\u88C5jira"},{"level":3,"title":"\u6570\u636E\u5E93\u76F8\u5173","slug":"\u6570\u636E\u5E93\u76F8\u5173"},{"level":3,"title":"\u4E0B\u8F7D\u5E76\u590D\u5236MySQL JDBC\u9A71\u52A8","slug":"\u4E0B\u8F7D\u5E76\u590D\u5236mysql-jdbc\u9A71\u52A8"},{"level":3,"title":"\u542F\u52A8 Jira \u5E76\u8FDE\u63A5\u6570\u636E\u5E93","slug":"\u542F\u52A8-jira-\u5E76\u8FDE\u63A5\u6570\u636E\u5E93"},{"level":3,"title":"Jira 8.x \u4EE5\u53CA\u63D2\u4EF6\u7834\u89E3","slug":"jira-8-x-\u4EE5\u53CA\u63D2\u4EF6\u7834\u89E3"},{"level":2,"title":"\u9644\u5F55: \u7834\u89E3\u5305\u4E0B\u8F7D\u76F4\u94FE","slug":"\u9644\u5F55-\u7834\u89E3\u5305\u4E0B\u8F7D\u76F4\u94FE"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/cicd/Jira Basic.md","lastUpdated":1657272051000}'),e={name:"CloudNative/cicd/Jira Basic.md"},p=l(`<h1 id="jira-basic" tabindex="-1">Jira Basic <a class="header-anchor" href="#jira-basic" aria-hidden="true">#</a></h1><blockquote><p>JIRA\u662FAtlassian\u516C\u53F8\u51FA\u54C1\u7684\u9879\u76EE\u4E0E\u4E8B\u52A1\u8DDF\u8E2A\u5DE5\u5177\uFF0C\u88AB\u5E7F\u6CDB\u5E94\u7528\u4E8E\u7F3A\u9677\u8DDF\u8E2A\u3001\u5BA2\u6237\u670D\u52A1\u3001\u9700\u6C42\u6536\u96C6\u3001\u6D41\u7A0B\u5BA1\u6279\u3001\u4EFB\u52A1\u8DDF\u8E2A\u3001\u9879\u76EE\u8DDF\u8E2A\u548C\u654F\u6377\u7BA1\u7406\u7B49\u5DE5\u4F5C\u9886\u57DF\u3002</p></blockquote><h2 id="jira-\u5B89\u88C5\u4E0E\u90E8\u7F72" tabindex="-1">Jira \u5B89\u88C5\u4E0E\u90E8\u7F72 <a class="header-anchor" href="#jira-\u5B89\u88C5\u4E0E\u90E8\u7F72" aria-hidden="true">#</a></h2><p><code>jira</code>\u57FA\u4E8E Java \u5F00\u53D1\uFF0C\u56E0\u6B64\u5B89\u88C5\u4E4B\u524D\u9700\u8981\u63D0\u524D\u914D\u7F6E\u597D Java\uFF0C\u5728\u6B64\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002</p><h3 id="\u5B89\u88C5jira" tabindex="-1">\u5B89\u88C5Jira <a class="header-anchor" href="#\u5B89\u88C5jira" aria-hidden="true">#</a></h3><p>\u4ECE\u5B98\u65B9\u7AD9\u70B9\u4E0B\u8F7D\u6240\u9700\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305, <a href="https://www.atlassian.com/software/jira/download" target="_blank" rel="noopener noreferrer">https://www.atlassian.com/software/jira/download</a></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ atlassian-jira-software-8.13.1-x64.bin</span></span>
<span class="line"><span style="color:#DBD7CA;">$ ./atlassian-jira-software-8.13.1-x64.bin</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ atlassian-jira-software-8.13.1-x64.bin</span></span>
<span class="line"><span style="color:#393A34;">$ ./atlassian-jira-software-8.13.1-x64.bin</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u4E00\u8DEF<code>[ENTER]</code>\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\u5373\u53EF.</p><h3 id="\u6570\u636E\u5E93\u76F8\u5173" tabindex="-1">\u6570\u636E\u5E93\u76F8\u5173 <a class="header-anchor" href="#\u6570\u636E\u5E93\u76F8\u5173" aria-hidden="true">#</a></h3><p>\u521D\u59CB\u5316\u6570\u636E\u5E93:</p><div class="language-sql"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mysql</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">CREATE</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">DATABASE</span><span style="color:#DBD7CA;"> jiradb </span><span style="color:#4D9375;">CHARACTER</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">SET</span><span style="color:#DBD7CA;"> utf8mb4 </span><span style="color:#CB7676;">COLLATE</span><span style="color:#DBD7CA;"> utf8mb4_bin;</span></span>
<span class="line"><span style="color:#758575;">-- GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,INDEX on &lt;JIRADB&gt;.* TO &#39;&lt;USERNAME&gt;&#39;@&#39;&lt;JIRA_SERVER_HOSTNAME&gt;&#39; IDENTIFIED BY &#39;&lt;PASSWORD&gt;&#39;;</span></span>
<span class="line"><span style="color:#4D9375;">GRANT</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">SELECT</span><span style="color:#DBD7CA;">,</span><span style="color:#4D9375;">INSERT</span><span style="color:#DBD7CA;">,</span><span style="color:#4D9375;">UPDATE</span><span style="color:#DBD7CA;">,</span><span style="color:#4D9375;">DELETE</span><span style="color:#DBD7CA;">,</span><span style="color:#4D9375;">CREATE</span><span style="color:#DBD7CA;">,</span><span style="color:#4D9375;">DROP</span><span style="color:#DBD7CA;">,</span><span style="color:#4D9375;">ALTER</span><span style="color:#DBD7CA;">,</span><span style="color:#4D9375;">INDEX</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">on</span><span style="color:#DBD7CA;"> jiradb.</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">TO</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;jiradbuser&#39;</span><span style="color:#DBD7CA;">@</span><span style="color:#C98A7D;">&#39;%&#39;</span><span style="color:#DBD7CA;"> IDENTIFIED </span><span style="color:#4D9375;">BY</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;123&#39;</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">flush privileges;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mysql</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">CREATE</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">DATABASE</span><span style="color:#393A34;"> jiradb </span><span style="color:#1C6B48;">CHARACTER</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">SET</span><span style="color:#393A34;"> utf8mb4 </span><span style="color:#AB5959;">COLLATE</span><span style="color:#393A34;"> utf8mb4_bin;</span></span>
<span class="line"><span style="color:#A0ADA0;">-- GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,INDEX on &lt;JIRADB&gt;.* TO &#39;&lt;USERNAME&gt;&#39;@&#39;&lt;JIRA_SERVER_HOSTNAME&gt;&#39; IDENTIFIED BY &#39;&lt;PASSWORD&gt;&#39;;</span></span>
<span class="line"><span style="color:#1C6B48;">GRANT</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">SELECT</span><span style="color:#393A34;">,</span><span style="color:#1C6B48;">INSERT</span><span style="color:#393A34;">,</span><span style="color:#1C6B48;">UPDATE</span><span style="color:#393A34;">,</span><span style="color:#1C6B48;">DELETE</span><span style="color:#393A34;">,</span><span style="color:#1C6B48;">CREATE</span><span style="color:#393A34;">,</span><span style="color:#1C6B48;">DROP</span><span style="color:#393A34;">,</span><span style="color:#1C6B48;">ALTER</span><span style="color:#393A34;">,</span><span style="color:#1C6B48;">INDEX</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">on</span><span style="color:#393A34;"> jiradb.</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">TO</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;jiradbuser&#39;</span><span style="color:#393A34;">@</span><span style="color:#B56959;">&#39;%&#39;</span><span style="color:#393A34;"> IDENTIFIED </span><span style="color:#1C6B48;">BY</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;123&#39;</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">flush privileges;</span></span>
<span class="line"></span></code></pre></div><p>\u8BBE\u7F6E\u6570\u636E\u5E93\u53C2\u6570:</p><div class="language-ini"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">mysqld</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#4D9375;">default-storage-engine</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">INNODB</span></span>
<span class="line"><span style="color:#4D9375;">character_set_server</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">utf8mb4</span></span>
<span class="line"><span style="color:#4D9375;">innodb_default_row_format</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">DYNAMIC</span></span>
<span class="line"><span style="color:#4D9375;">innodb_large_prefix</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">ON</span></span>
<span class="line"><span style="color:#4D9375;">innodb_file_format</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">Barracuda</span></span>
<span class="line"><span style="color:#4D9375;">innodb_log_file_size</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">2G</span></span>
<span class="line"><span style="color:#758575;"># \u79FB\u9664\u8BE5\u9009\u9879, \u5982\u679C\u5B58\u5728\u7684\u8BDD</span></span>
<span class="line"><span style="color:#4D9375;">sql_mode</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> NO_AUTO_VALUE_ON_ZERO</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">mysqld</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#1C6B48;">default-storage-engine</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">INNODB</span></span>
<span class="line"><span style="color:#1C6B48;">character_set_server</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">utf8mb4</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_default_row_format</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">DYNAMIC</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_large_prefix</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">ON</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_file_format</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">Barracuda</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_log_file_size</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">2G</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u79FB\u9664\u8BE5\u9009\u9879, \u5982\u679C\u5B58\u5728\u7684\u8BDD</span></span>
<span class="line"><span style="color:#1C6B48;">sql_mode</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> NO_AUTO_VALUE_ON_ZERO</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u542Fmysql: <code>systemctl restart mysqld</code></p><h3 id="\u4E0B\u8F7D\u5E76\u590D\u5236mysql-jdbc\u9A71\u52A8" tabindex="-1">\u4E0B\u8F7D\u5E76\u590D\u5236<code>MySQL JDBC</code>\u9A71\u52A8 <a class="header-anchor" href="#\u4E0B\u8F7D\u5E76\u590D\u5236mysql-jdbc\u9A71\u52A8" aria-hidden="true">#</a></h3><p>\u62F7\u8D1D<code>mysql JDBC</code>\u9A71\u52A8:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u9996\u5148\u4ECE\u5B98\u65B9\u7AD9\u70B9\u4E0B\u8F7Djdbc\u9A71\u52A8</span></span>
<span class="line"><span style="color:#DBD7CA;">wget https://cdn.mysql.com//Downloads/Connector-J/mysql-connector-java-5.1.49.tar.gz</span></span>
<span class="line"><span style="color:#DBD7CA;">tar xf  mysql-connector-java-5.1.49.tar.gz -C /opt/atlassian/jira/lib</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u9996\u5148\u4ECE\u5B98\u65B9\u7AD9\u70B9\u4E0B\u8F7Djdbc\u9A71\u52A8</span></span>
<span class="line"><span style="color:#393A34;">wget https://cdn.mysql.com//Downloads/Connector-J/mysql-connector-java-5.1.49.tar.gz</span></span>
<span class="line"><span style="color:#393A34;">tar xf  mysql-connector-java-5.1.49.tar.gz -C /opt/atlassian/jira/lib</span></span>
<span class="line"></span></code></pre></div><h3 id="\u542F\u52A8-jira-\u5E76\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1">\u542F\u52A8 Jira \u5E76\u8FDE\u63A5\u6570\u636E\u5E93 <a class="header-anchor" href="#\u542F\u52A8-jira-\u5E76\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ sudo /etc/init.d/jira start</span></span>
<span class="line"><span style="color:#758575;"># sudo /etc/init.d/jira stop</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ sudo /etc/init.d/jira start</span></span>
<span class="line"><span style="color:#A0ADA0;"># sudo /etc/init.d/jira stop</span></span>
<span class="line"></span></code></pre></div><p>\u6309\u7167\u5F15\u5BFC\u586B\u5165\u5BF9\u5E94\u4FE1\u606F\u5373\u53EF:</p><p><img src="https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/jira-setup-mysql.png" alt="jira-setup-mysql"></p><p>\u521D\u59CB\u5316\u6570\u636E\u5E93\u4F1A\u82B1\u8D39\u4E00\u5B9A\u65F6\u95F4, \u7B49\u5F85\u5373\u53EF.</p><p>\u6211\u4E22, \u5B89\u88C5\u4E86\u534A\u5929\u53D1\u73B0\u7ADF\u7136\u6CA1\u6709\u514D\u8D39\u793E\u533A\u7248\u672C\u53EF\u7528, \u9700\u8981\u7533\u8BF7\u8D26\u53F7\u53CA\u8BD5\u7528\u8BB8\u53EF, \u7533\u8BF7\u8FC7\u7A0B\u6309\u7167\u5F15\u5BFC\u586B\u5199\u57FA\u672C\u4FE1\u606F\u5373\u53EF, \u4EE5\u4E0B\u672A\u7533\u8BF7\u597D\u7684<code>License Key</code>\u6837\u4F8B:</p><p><img src="https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/jira-license-key.png" alt="jira-license-key"></p><h3 id="jira-8-x-\u4EE5\u53CA\u63D2\u4EF6\u7834\u89E3" tabindex="-1">Jira 8.x \u4EE5\u53CA\u63D2\u4EF6\u7834\u89E3 <a class="header-anchor" href="#jira-8-x-\u4EE5\u53CA\u63D2\u4EF6\u7834\u89E3" aria-hidden="true">#</a></h3><p><s>\u679C\u7136, \u7F51\u53CB\u8FD8\u662F\u6CA1\u8BA9\u6211\u5931\u671B, \u65E2\u7136\u6CA1\u6709\u793E\u533A\u7248, \u5C31\u7528\u7834\u89E3\u7248\u7684\u55BD.</s></p><ul><li>JIRA 8.6\u5B89\u88C5\u548C\u7834\u89E3: <a href="https://www.dqzboy.com/jira-8-6%E5%AE%89%E8%A3%85%E4%B8%8E%E7%A0%B4%E8%A7%A3#h3-7" target="_blank" rel="noopener noreferrer">https://www.dqzboy.com/jira-8-6\u5B89\u88C5\u4E0E\u7834\u89E3#h3-7</a></li><li>Jira8.x\u7248\u672C\u5B89\u88C5\u4E0E\u7834\u89E3: <a href="https://www.jianshu.com/p/9ca92a191f36" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/9ca92a191f36</a></li><li>JIRA\u7684\u5B89\u88C5\u548C\u7834\u89E3: <a href="https://www.cnblogs.com/cekaigongchengshi/p/12800791.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/cekaigongchengshi/p/12800791.html</a></li></ul><h2 id="\u9644\u5F55-\u7834\u89E3\u5305\u4E0B\u8F7D\u76F4\u94FE" tabindex="-1">\u9644\u5F55: \u7834\u89E3\u5305\u4E0B\u8F7D\u76F4\u94FE <a class="header-anchor" href="#\u9644\u5F55-\u7834\u89E3\u5305\u4E0B\u8F7D\u76F4\u94FE" aria-hidden="true">#</a></h2><p><a href="https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-extras-3.2.jar" target="_blank" rel="noopener noreferrer">https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-extras-3.2.jar</a></p><p><a href="https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-agent.jar" target="_blank" rel="noopener noreferrer">https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-agent.jar</a></p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Jira Installation: <a href="https://confluence.atlassian.com/adminjiraserver/installing-jira-applications-on-linux-938846841.html" target="_blank" rel="noopener noreferrer">https://confluence.atlassian.com/adminjiraserver/installing-jira-applications-on-linux-938846841.html</a></li><li>Connect Jira to Database: <a href="https://confluence.atlassian.com/adminjiraserver/connecting-jira-applications-to-a-database-938846850.html" target="_blank" rel="noopener noreferrer">https://confluence.atlassian.com/adminjiraserver/connecting-jira-applications-to-a-database-938846850.html</a></li></ul>`,32),o=[p];function r(t,c,i,y,d,A){return a(),n("div",null,o)}var B=s(e,[["render",r]]);export{h as __pageData,B as default};