import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const u=JSON.parse('{"title":"Sonarqube Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"Sonarqube \u7B80\u4ECB","slug":"sonarqube-\u7B80\u4ECB"},{"level":2,"title":"Sonarqube \u5B89\u88C5","slug":"sonarqube-\u5B89\u88C5"},{"level":2,"title":"\u4ECE Docker \u542F\u52A8","slug":"\u4ECE-docker-\u542F\u52A8"},{"level":2,"title":"sonarqube \u624B\u52A8\u626B\u63CF\u4EE3\u7801","slug":"sonarqube-\u624B\u52A8\u626B\u63CF\u4EE3\u7801"},{"level":2,"title":"sonarqube \u6C49\u5316","slug":"sonarqube-\u6C49\u5316"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"CloudNative/cicd/Sonarqube/Sonarqube Basic.md","lastUpdated":1657272051000}'),l={name:"CloudNative/cicd/Sonarqube/Sonarqube Basic.md"},o=p(`<h1 id="sonarqube-basic" tabindex="-1">Sonarqube Basic <a class="header-anchor" href="#sonarqube-basic" aria-hidden="true">#</a></h1><h2 id="sonarqube-\u7B80\u4ECB" tabindex="-1">Sonarqube \u7B80\u4ECB <a class="header-anchor" href="#sonarqube-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>SonarQube\xAE\u662F\u4E00\u4E2A\u81EA\u52A8\u4EE3\u7801\u5BA1\u67E5\u5DE5\u5177\u6765\u68C0\u6D4B\u9519\u8BEF,\u6F0F\u6D1E,\u4EE3\u7801\u4E2D\u7684\u4EE3\u7801\u5473\u9053\u3002\u5B83\u53EF\u4EE5\u4E0E\u73B0\u6709\u7684\u5DE5\u4F5C\u6D41\u96C6\u6210\u4F7F\u8FDE\u7EED\u7684\u4EE3\u7801\u68C0\u67E5\u5728\u60A8\u7684\u9879\u76EE\u5206\u652F\u548C\u62C9\u8BF7\u6C42\u3002</p><h2 id="sonarqube-\u5B89\u88C5" tabindex="-1">Sonarqube \u5B89\u88C5 <a class="header-anchor" href="#sonarqube-\u5B89\u88C5" aria-hidden="true">#</a></h2><p>1\u3001\u57FA\u7840\u51C6\u5907</p><ul><li><code>Sonarqube</code>\u8F83\u65B0\u7248\u672C\u4F9D\u8D56\u4E8E<code>jdk11</code>, \u6240\u4EE5\u9700\u8981\u63D0\u524D\u5B89\u88C5<code>jdk11</code>:</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install -y jdk-11.0.7_linux-x64_bin.rpm</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install -y jdk-11.0.7_linux-x64_bin.rpm</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8C03\u6574\u7CFB\u7EDF\u53C2\u6570</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sysctl -w vm.max_map_count=262144</span></span>
<span class="line"><span style="color:#DBD7CA;">sysctl -w fs.file-max=65536</span></span>
<span class="line"><span style="color:#E0A569;">ulimit</span><span style="color:#DBD7CA;"> -n 65536</span></span>
<span class="line"><span style="color:#E0A569;">ulimit</span><span style="color:#DBD7CA;"> -u 4096</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sysctl -w vm.max_map_count=262144</span></span>
<span class="line"><span style="color:#393A34;">sysctl -w fs.file-max=65536</span></span>
<span class="line"><span style="color:#B58451;">ulimit</span><span style="color:#393A34;"> -n 65536</span></span>
<span class="line"><span style="color:#B58451;">ulimit</span><span style="color:#393A34;"> -u 4096</span></span>
<span class="line"></span></code></pre></div><ul><li>\u521B\u5EFA\u4E13\u7528\u8D26\u53F7<code>sonar</code>(\u26A0\uFE0F \u91CD\u8981: \u5982\u679C\u4E0D\u9002\u7528\u666E\u901A\u8D26\u6237,<code> sonarqube</code>\u5C06\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8!)</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u8D26\u53F7\u5E76\u6388\u6743</span></span>
<span class="line"><span style="color:#DBD7CA;">useradd sonar</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;sonar&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> passwd --stdin sonar</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u8D26\u53F7\u5E76\u6388\u6743</span></span>
<span class="line"><span style="color:#393A34;">useradd sonar</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;sonar&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> passwd --stdin sonar</span></span>
<span class="line"></span></code></pre></div><p>2\u3001\u51C6\u5907\u6570\u636E\u5E93\u53CA\u8D26\u53F7</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#  \u8FDB\u5165mysql-shell</span></span>
<span class="line"><span style="color:#DBD7CA;">mysql -u root -p</span></span>
<span class="line"><span style="color:#758575;">#  \u65B0\u5EFA\u7528\u6237</span></span>
<span class="line"><span style="color:#DBD7CA;">MariaDB </span><span style="color:#858585;">[(</span><span style="color:#DBD7CA;">none</span><span style="color:#858585;">)]</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> CREATE USER </span><span style="color:#C98A7D;">&#39;sonar&#39;</span><span style="color:#DBD7CA;">@</span><span style="color:#C98A7D;">&#39;localhost&#39;</span><span style="color:#DBD7CA;"> IDENTIFIED BY </span><span style="color:#C98A7D;">&#39;sonar&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">MariaDB </span><span style="color:#858585;">[(</span><span style="color:#DBD7CA;">none</span><span style="color:#858585;">)]</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> CREATE USER </span><span style="color:#C98A7D;">&#39;sonar&#39;</span><span style="color:#DBD7CA;">@</span><span style="color:#C98A7D;">&#39;%&#39;</span><span style="color:#DBD7CA;"> IDENTIFIED BY </span><span style="color:#C98A7D;">&#39;sonar&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;">#  \u65B0\u5EFA\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#DBD7CA;">MariaDB </span><span style="color:#858585;">[(</span><span style="color:#DBD7CA;">none</span><span style="color:#858585;">)]</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> CREATE DATABASE sonar</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;">#  \u8D4B\u4E88\u6570\u636E\u5E93\u8BBF\u95EE\u6743\u9650</span></span>
<span class="line"><span style="color:#DBD7CA;">MariaDB </span><span style="color:#858585;">[(</span><span style="color:#DBD7CA;">none</span><span style="color:#858585;">)]</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> GRANT ALL PRIVILEGES ON sonar.</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> TO </span><span style="color:#C98A7D;">&#39;sonar&#39;</span><span style="color:#DBD7CA;">@</span><span style="color:#C98A7D;">&#39;localhost&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">MariaDB </span><span style="color:#858585;">[(</span><span style="color:#DBD7CA;">none</span><span style="color:#858585;">)]</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> GRANT ALL PRIVILEGES ON sonar.</span><span style="color:#CB7676;">*</span><span style="color:#DBD7CA;"> TO </span><span style="color:#C98A7D;">&#39;sonar&#39;</span><span style="color:#DBD7CA;">@</span><span style="color:#C98A7D;">&#39;%&#39;</span><span style="color:#CB7676;">;</span></span>
<span class="line"><span style="color:#758575;">#  \u5237\u65B0\u6743\u9650</span></span>
<span class="line"><span style="color:#DBD7CA;">MariaDB </span><span style="color:#858585;">[(</span><span style="color:#DBD7CA;">none</span><span style="color:#858585;">)]</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> FLUSH PRIVILEGES</span><span style="color:#CB7676;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#  \u8FDB\u5165mysql-shell</span></span>
<span class="line"><span style="color:#393A34;">mysql -u root -p</span></span>
<span class="line"><span style="color:#A0ADA0;">#  \u65B0\u5EFA\u7528\u6237</span></span>
<span class="line"><span style="color:#393A34;">MariaDB </span><span style="color:#8E8F8B;">[(</span><span style="color:#393A34;">none</span><span style="color:#8E8F8B;">)]</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> CREATE USER </span><span style="color:#B56959;">&#39;sonar&#39;</span><span style="color:#393A34;">@</span><span style="color:#B56959;">&#39;localhost&#39;</span><span style="color:#393A34;"> IDENTIFIED BY </span><span style="color:#B56959;">&#39;sonar&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">MariaDB </span><span style="color:#8E8F8B;">[(</span><span style="color:#393A34;">none</span><span style="color:#8E8F8B;">)]</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> CREATE USER </span><span style="color:#B56959;">&#39;sonar&#39;</span><span style="color:#393A34;">@</span><span style="color:#B56959;">&#39;%&#39;</span><span style="color:#393A34;"> IDENTIFIED BY </span><span style="color:#B56959;">&#39;sonar&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;">#  \u65B0\u5EFA\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#393A34;">MariaDB </span><span style="color:#8E8F8B;">[(</span><span style="color:#393A34;">none</span><span style="color:#8E8F8B;">)]</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> CREATE DATABASE sonar</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;">#  \u8D4B\u4E88\u6570\u636E\u5E93\u8BBF\u95EE\u6743\u9650</span></span>
<span class="line"><span style="color:#393A34;">MariaDB </span><span style="color:#8E8F8B;">[(</span><span style="color:#393A34;">none</span><span style="color:#8E8F8B;">)]</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> GRANT ALL PRIVILEGES ON sonar.</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> TO </span><span style="color:#B56959;">&#39;sonar&#39;</span><span style="color:#393A34;">@</span><span style="color:#B56959;">&#39;localhost&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#393A34;">MariaDB </span><span style="color:#8E8F8B;">[(</span><span style="color:#393A34;">none</span><span style="color:#8E8F8B;">)]</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> GRANT ALL PRIVILEGES ON sonar.</span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> TO </span><span style="color:#B56959;">&#39;sonar&#39;</span><span style="color:#393A34;">@</span><span style="color:#B56959;">&#39;%&#39;</span><span style="color:#AB5959;">;</span></span>
<span class="line"><span style="color:#A0ADA0;">#  \u5237\u65B0\u6743\u9650</span></span>
<span class="line"><span style="color:#393A34;">MariaDB </span><span style="color:#8E8F8B;">[(</span><span style="color:#393A34;">none</span><span style="color:#8E8F8B;">)]</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> FLUSH PRIVILEGES</span><span style="color:#AB5959;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5728\u8F83\u65B0\u7684\u7248\u672C\u7684<code>sonarqube</code>\u4E2D, \u5DF2\u7ECF\u4E0D\u63A8\u8350\u4F7F\u7528<code>MySQL</code>\u6570\u636E\u5E93\u4F5C\u4E3A\u5B58\u50A8\u6570\u636E\u5E93, \u5B98\u65B9\u63A8\u8350\u6570\u636E\u5E93\u662F<code>MS SQL Server</code>, <code>Oracle</code>\u548C<code>PostgreSQL</code></p></blockquote><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">postgres=</span><span style="color:#758575;"># CREATE database sonarqube;</span></span>
<span class="line"><span style="color:#DBD7CA;">postgres=</span><span style="color:#758575;"># CREATE USER sonar WITH PASSWORD &#39;sonar&#39;;</span></span>
<span class="line"><span style="color:#DBD7CA;">postgres=</span><span style="color:#758575;"># GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">postgres=</span><span style="color:#A0ADA0;"># CREATE database sonarqube;</span></span>
<span class="line"><span style="color:#393A34;">postgres=</span><span style="color:#A0ADA0;"># CREATE USER sonar WITH PASSWORD &#39;sonar&#39;;</span></span>
<span class="line"><span style="color:#393A34;">postgres=</span><span style="color:#A0ADA0;"># GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;</span></span>
<span class="line"></span></code></pre></div><p>3\u3001\u4E0B\u8F7D</p><ul><li>\u51C6\u5907\u8F6F\u4EF6\u4EE5\u53CA\u6570\u636E\u76EE\u5F55</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">mkdir -p /usr/sonar</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /sonar/data</span></span>
<span class="line"><span style="color:#DBD7CA;">mkdir -p /sonar/temp</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">mkdir -p /usr/sonar</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p /sonar/data</span></span>
<span class="line"><span style="color:#393A34;">mkdir -p /sonar/temp</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E0B\u8F7D</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4E0B\u8F7D\u8F6F\u4EF6\u5305</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-8.4.1.35646.zip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u89E3\u538B</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo unzip sonarqube-8.4.1.35646.zip -d /usr/sonar/</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4E0B\u8F7D\u8F6F\u4EF6\u5305</span></span>
<span class="line"><span style="color:#393A34;">sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-8.4.1.35646.zip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u89E3\u538B</span></span>
<span class="line"><span style="color:#393A34;">sudo unzip sonarqube-8.4.1.35646.zip -d /usr/sonar/</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6388\u6743</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#  \u6388\u4E88\u76F8\u5173\u76EE\u5F55\u6743\u9650</span></span>
<span class="line"><span style="color:#DBD7CA;">chown -R sonar:sonar /usr/sonar</span></span>
<span class="line"><span style="color:#DBD7CA;">chown -R sonar:sonar /sonar</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#  \u6388\u4E88\u76F8\u5173\u76EE\u5F55\u6743\u9650</span></span>
<span class="line"><span style="color:#393A34;">chown -R sonar:sonar /usr/sonar</span></span>
<span class="line"><span style="color:#393A34;">chown -R sonar:sonar /sonar</span></span>
<span class="line"></span></code></pre></div><p>4\u3001\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4FEE\u6539profile\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo vi /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5728\u6587\u4EF6\u672B\u5C3E\u589E\u52A0\u53D8\u91CF\uFF1ASONAR_HOME</span></span>
<span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> SONAR_HOME=/usr/sonar/sonarqube-8.4.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u53D8\u91CF\u751F\u6548</span></span>
<span class="line"><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u6D4B\u8BD5</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">SONAR_HOME</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539profile\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">sudo vi /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728\u6587\u4EF6\u672B\u5C3E\u589E\u52A0\u53D8\u91CF\uFF1ASONAR_HOME</span></span>
<span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> SONAR_HOME=/usr/sonar/sonarqube-8.4.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u53D8\u91CF\u751F\u6548</span></span>
<span class="line"><span style="color:#B58451;">source</span><span style="color:#393A34;"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6D4B\u8BD5</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">SONAR_HOME</span></span>
<span class="line"></span></code></pre></div><p>5\u3001\u914D\u7F6ESonar</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo vi </span><span style="color:#858585;">$</span><span style="color:#B8A965;">SONAR_HOME</span><span style="color:#DBD7CA;">/conf/sonar.properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5728\u914D\u7F6E\u6587\u4EF6\u5F00\u5934\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u6570\u636E\u5E93\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.jdbc.username=sonar</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.jdbc.password=sonar</span></span>
<span class="line"><span style="color:#758575;">#sonar.jdbc.url=jdbc:mysql://localhost:3306/sonar?useConfigs=maxPerformance&amp;rewriteBatchedStatements=true&amp;characterEncoding=utf8&amp;useUnicode=true&amp;serverTimezone=GMT%2B08:00</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u6587\u4EF6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.path.data=/sonar/data</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.path.temp=/sonar/temp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Web\u914D\u7F6E</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.web.host=0.0.0.0</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.web.port=9000</span></span>
<span class="line"><span style="color:#DBD7CA;">sonar.web.context=/</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">sudo vi </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">SONAR_HOME</span><span style="color:#393A34;">/conf/sonar.properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728\u914D\u7F6E\u6587\u4EF6\u5F00\u5934\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6570\u636E\u5E93\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">sonar.jdbc.username=sonar</span></span>
<span class="line"><span style="color:#393A34;">sonar.jdbc.password=sonar</span></span>
<span class="line"><span style="color:#A0ADA0;">#sonar.jdbc.url=jdbc:mysql://localhost:3306/sonar?useConfigs=maxPerformance&amp;rewriteBatchedStatements=true&amp;characterEncoding=utf8&amp;useUnicode=true&amp;serverTimezone=GMT%2B08:00</span></span>
<span class="line"><span style="color:#393A34;">sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u6587\u4EF6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">sonar.path.data=/sonar/data</span></span>
<span class="line"><span style="color:#393A34;">sonar.path.temp=/sonar/temp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Web\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393A34;">sonar.web.host=0.0.0.0</span></span>
<span class="line"><span style="color:#393A34;">sonar.web.port=9000</span></span>
<span class="line"><span style="color:#393A34;">sonar.web.context=/</span></span>
<span class="line"></span></code></pre></div><p>\u26A0\uFE0F \u8FD9\u91CC\u8981\u5F3A\u8C03\u7684\u662F\uFF0C<code>\u7AEF\u53E3\u53F7\u9700\u8981&gt;1000</code>\uFF0C\u56E0\u4E3Asonar\u542F\u52A8\u662F\u4F7F\u7528\u7684\u975Eroot\u8D26\u53F7\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u80FD\u4F7F\u75281000\u4EE5\u4E0B\u7684\u7AEF\u53E3\u7684\uFF0C\u5426\u5219\u4F1A\u542F\u52A8\u5931\u8D25.</p><p>6\u3001\u5F00\u653E\u7AEF\u53E3</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo firewall-cmd --add-port=9000/tcp --permanent</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo firewall-cmd --reload</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo firewall-cmd --add-port=9000/tcp --permanent</span></span>
<span class="line"><span style="color:#393A34;">sudo firewall-cmd --reload</span></span>
<span class="line"></span></code></pre></div><p>7\u3001\u542F\u52A8Sonar</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u5207\u6362\u5230sonar\u8D26\u53F7</span></span>
<span class="line"><span style="color:#DBD7CA;">su sonar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u542F\u52A8</span></span>
<span class="line"><span style="color:#DBD7CA;">sh </span><span style="color:#858585;">$</span><span style="color:#B8A965;">SONAR_HOME</span><span style="color:#DBD7CA;">/bin/linux-x86-64/sonar.sh start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u542F\u52A8\u5B8C\u6210\u4F1A\u770B\u5230\u4EE5\u4E0B\u8F93\u51FA</span></span>
<span class="line"><span style="color:#DBD7CA;">Starting SonarQube...</span></span>
<span class="line"><span style="color:#DBD7CA;">Started SonarQube.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u672A\u5B8C\u6210\u542F\u52A8\u53EF\u4EE5\u4F7F\u7528console\u547D\u4EE4\u67E5\u770B\u542F\u52A8\u8FC7\u7A0B\u4E2D\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#DBD7CA;">sh </span><span style="color:#858585;">$</span><span style="color:#B8A965;">SONAR_HOME</span><span style="color:#DBD7CA;">/bin/linux-x86-64/sonar.sh console</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u5207\u6362\u5230sonar\u8D26\u53F7</span></span>
<span class="line"><span style="color:#393A34;">su sonar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u542F\u52A8</span></span>
<span class="line"><span style="color:#393A34;">sh </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">SONAR_HOME</span><span style="color:#393A34;">/bin/linux-x86-64/sonar.sh start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u542F\u52A8\u5B8C\u6210\u4F1A\u770B\u5230\u4EE5\u4E0B\u8F93\u51FA</span></span>
<span class="line"><span style="color:#393A34;">Starting SonarQube...</span></span>
<span class="line"><span style="color:#393A34;">Started SonarQube.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u672A\u5B8C\u6210\u542F\u52A8\u53EF\u4EE5\u4F7F\u7528console\u547D\u4EE4\u67E5\u770B\u542F\u52A8\u8FC7\u7A0B\u4E2D\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#393A34;">sh </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">SONAR_HOME</span><span style="color:#393A34;">/bin/linux-x86-64/sonar.sh console</span></span>
<span class="line"></span></code></pre></div><blockquote><p>sonar\u652F\u6301\u7684\u542F\u52A8\u53C2\u6570\uFF1A console | start | stop | restart | status | dump</p></blockquote><p>\u5982\u679C\u542F\u52A8\u5B8C\u6210\uFF0C\u4F46\u662F\u4F9D\u7136\u4E0D\u80FD\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u542F\u52A8\u65E5\u5FD7</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">cat </span><span style="color:#858585;">$</span><span style="color:#B8A965;">SONAR_HOME</span><span style="color:#DBD7CA;">/logs/web.log</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">cat </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">SONAR_HOME</span><span style="color:#393A34;">/logs/web.log</span></span>
<span class="line"></span></code></pre></div><p>\u6210\u529F\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u8BBF\u95EE <code>http://127.0.0.1:9000</code></p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-1.png" alt=""></p><p>\u2139\uFE0F\u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\u5747\u4E3A<code>admin</code>.</p><p>\u542F\u52A8\u5B8C\u6210\u4E4B\u540E, \u53D1\u73B0\u7F51\u7AD9\u4E0B\u65B9\u6709\u4E00\u6761\u8B66\u544A, \u662F\u56E0\u4E3A\u6211\u4EEC\u6CA1\u6709\u914D\u7F6E\u597D\u6570\u636E\u5E93, \u914D\u7F6E\u597D\u6570\u636E\u5E93\u91CD\u542F<code>sonarqube</code>\u5373\u53EF.</p><h2 id="\u4ECE-docker-\u542F\u52A8" tabindex="-1">\u4ECE Docker \u542F\u52A8 <a class="header-anchor" href="#\u4ECE-docker-\u542F\u52A8" aria-hidden="true">#</a></h2><ol><li>PULL And RUN <code>PostgreSQL</code> Docker image:</li></ol><div class="language-sql"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;"># \u542F\u52A8 PostgreSQL</span></span>
<span class="line"><span style="color:#DBD7CA;">$ docker run </span><span style="color:#CB7676;">-</span><span style="color:#DBD7CA;">it </span><span style="color:#758575;">--name pgsql -p 5432:5432 -e POSTGRES_PASSWORD=sonar -d postgres</span></span>
<span class="line"><span style="color:#DBD7CA;"># \u8FDE\u63A5\u672C\u5730 PostgreSQL</span></span>
<span class="line"><span style="color:#DBD7CA;">$ docker </span><span style="color:#4D9375;">exec</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-</span><span style="color:#DBD7CA;">it pgsql psql </span><span style="color:#CB7676;">-</span><span style="color:#DBD7CA;">U postgres</span></span>
<span class="line"><span style="color:#DBD7CA;">psql (</span><span style="color:#6394BF;">12</span><span style="color:#DBD7CA;">.</span><span style="color:#6394BF;">3</span><span style="color:#DBD7CA;"> (Debian </span><span style="color:#6394BF;">12</span><span style="color:#DBD7CA;">.</span><span style="color:#6394BF;">3</span><span style="color:#CB7676;">-</span><span style="color:#6394BF;">1</span><span style="color:#DBD7CA;">.pgdg100</span><span style="color:#CB7676;">+</span><span style="color:#6394BF;">1</span><span style="color:#DBD7CA;">))</span></span>
<span class="line"><span style="color:#4D9375;">Type</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;help&quot;</span><span style="color:#DBD7CA;"> for help.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">postgres</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"># </span><span style="color:#4D9375;">CREATE</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">database</span><span style="color:#DBD7CA;"> sonarqube;</span></span>
<span class="line"><span style="color:#DBD7CA;">postgres</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"># </span><span style="color:#4D9375;">CREATE</span><span style="color:#DBD7CA;"> USER sonar </span><span style="color:#4D9375;">WITH</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">PASSWORD</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;sonar&#39;</span><span style="color:#DBD7CA;">;</span></span>
<span class="line"><span style="color:#DBD7CA;">postgres</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"># </span><span style="color:#4D9375;">GRANT</span><span style="color:#DBD7CA;"> ALL PRIVILEGES </span><span style="color:#4D9375;">ON</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">DATABASE</span><span style="color:#DBD7CA;"> sonarqube </span><span style="color:#4D9375;">to</span><span style="color:#DBD7CA;"> sonar;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;"># \u542F\u52A8 PostgreSQL</span></span>
<span class="line"><span style="color:#393A34;">$ docker run </span><span style="color:#AB5959;">-</span><span style="color:#393A34;">it </span><span style="color:#A0ADA0;">--name pgsql -p 5432:5432 -e POSTGRES_PASSWORD=sonar -d postgres</span></span>
<span class="line"><span style="color:#393A34;"># \u8FDE\u63A5\u672C\u5730 PostgreSQL</span></span>
<span class="line"><span style="color:#393A34;">$ docker </span><span style="color:#1C6B48;">exec</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-</span><span style="color:#393A34;">it pgsql psql </span><span style="color:#AB5959;">-</span><span style="color:#393A34;">U postgres</span></span>
<span class="line"><span style="color:#393A34;">psql (</span><span style="color:#296AA3;">12</span><span style="color:#393A34;">.</span><span style="color:#296AA3;">3</span><span style="color:#393A34;"> (Debian </span><span style="color:#296AA3;">12</span><span style="color:#393A34;">.</span><span style="color:#296AA3;">3</span><span style="color:#AB5959;">-</span><span style="color:#296AA3;">1</span><span style="color:#393A34;">.pgdg100</span><span style="color:#AB5959;">+</span><span style="color:#296AA3;">1</span><span style="color:#393A34;">))</span></span>
<span class="line"><span style="color:#1C6B48;">Type</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;help&quot;</span><span style="color:#393A34;"> for help.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">postgres</span><span style="color:#AB5959;">=</span><span style="color:#393A34;"># </span><span style="color:#1C6B48;">CREATE</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">database</span><span style="color:#393A34;"> sonarqube;</span></span>
<span class="line"><span style="color:#393A34;">postgres</span><span style="color:#AB5959;">=</span><span style="color:#393A34;"># </span><span style="color:#1C6B48;">CREATE</span><span style="color:#393A34;"> USER sonar </span><span style="color:#1C6B48;">WITH</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">PASSWORD</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;sonar&#39;</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">postgres</span><span style="color:#AB5959;">=</span><span style="color:#393A34;"># </span><span style="color:#1C6B48;">GRANT</span><span style="color:#393A34;"> ALL PRIVILEGES </span><span style="color:#1C6B48;">ON</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">DATABASE</span><span style="color:#393A34;"> sonarqube </span><span style="color:#1C6B48;">to</span><span style="color:#393A34;"> sonar;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Find the Community Edition Docker image on <a href="https://hub.docker.com/_/sonarqube/" target="_blank" rel="noopener noreferrer">Docker Hub</a>. THEN Start the server by running:</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ docker run -d --name sonarqube \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -p 9000:9000 \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -e sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -e sonar.jdbc.username=sonar \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -e sonar.jdbc.password=sonar \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -v sonarqube_conf:/opt/sonarqube/conf \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -v sonarqube_extensions:/opt/sonarqube/extensions \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -v sonarqube_logs:/opt/sonarqube/logs \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    -v sonarqube_data:/opt/sonarqube/data \\</span></span>
<span class="line"><span style="color:#DBD7CA;">    sonarqube</span></span>
<span class="line"><span style="color:#758575;"># docker run -d --name sonarqube -p 9000:9000 -e SONAR_JDBC_URL=jdbc:postgresql://39.99.144.153/sonarqube -e SONAR_JDBC_USERNAME=postgres -e SONAR_JDBC_PASSWORD=sonar -v /x/sonarqube_extensions:/opt/sonarqube/extensions sonarqube</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ docker run -d --name sonarqube \\</span></span>
<span class="line"><span style="color:#393A34;">    -p 9000:9000 \\</span></span>
<span class="line"><span style="color:#393A34;">    -e sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube \\</span></span>
<span class="line"><span style="color:#393A34;">    -e sonar.jdbc.username=sonar \\</span></span>
<span class="line"><span style="color:#393A34;">    -e sonar.jdbc.password=sonar \\</span></span>
<span class="line"><span style="color:#393A34;">    -v sonarqube_conf:/opt/sonarqube/conf \\</span></span>
<span class="line"><span style="color:#393A34;">    -v sonarqube_extensions:/opt/sonarqube/extensions \\</span></span>
<span class="line"><span style="color:#393A34;">    -v sonarqube_logs:/opt/sonarqube/logs \\</span></span>
<span class="line"><span style="color:#393A34;">    -v sonarqube_data:/opt/sonarqube/data \\</span></span>
<span class="line"><span style="color:#393A34;">    sonarqube</span></span>
<span class="line"><span style="color:#A0ADA0;"># docker run -d --name sonarqube -p 9000:9000 -e SONAR_JDBC_URL=jdbc:postgresql://39.99.144.153/sonarqube -e SONAR_JDBC_USERNAME=postgres -e SONAR_JDBC_PASSWORD=sonar -v /x/sonarqube_extensions:/opt/sonarqube/extensions sonarqube</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Log in to <a href="http://127.0.0.1:9000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9000</a> with System Administrator credentials (login=admin, password=admin).</li></ol><h2 id="sonarqube-\u624B\u52A8\u626B\u63CF\u4EE3\u7801" tabindex="-1">sonarqube \u624B\u52A8\u626B\u63CF\u4EE3\u7801 <a class="header-anchor" href="#sonarqube-\u624B\u52A8\u626B\u63CF\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u53C2\u8003: <a href="https://my.oschina.net/u/4313515/blog/4187313" target="_blank" rel="noopener noreferrer">https://my.oschina.net/u/4313515/blog/4187313</a></p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-3.png" alt=""></p><h2 id="sonarqube-\u6C49\u5316" tabindex="-1">sonarqube \u6C49\u5316 <a class="header-anchor" href="#sonarqube-\u6C49\u5316" aria-hidden="true">#</a></h2><p>github \u9879\u76EE\u4ED3\u5E93\u5730\u5740: <a href="https://github.com/SonarQubeCommunity/sonar-l10n-zh" target="_blank" rel="noopener noreferrer">https://github.com/SonarQubeCommunity/sonar-l10n-zh</a></p><p><strong>\u5B89\u88C5\u65B9\u6CD5\u4E00:</strong></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">wget https://github.com/SonarQubeCommunity/sonar-l10n-zh/releases/download/sonar-l10n-zh-plugin-8.4/sonar-l10n-zh-plugin-8.4.jar -O /home/sonar/sonarqube-8.4.1.35646/extensions</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">wget https://github.com/SonarQubeCommunity/sonar-l10n-zh/releases/download/sonar-l10n-zh-plugin-8.4/sonar-l10n-zh-plugin-8.4.jar -O /home/sonar/sonarqube-8.4.1.35646/extensions</span></span>
<span class="line"></span></code></pre></div><p><strong>\u5B89\u88C5\u65B9\u6CD5\u4E8C:</strong></p><p>\u4F9D\u6B21\u70B9\u51FB <code>Administration --&gt; Marketplace</code>, \u7136\u540E\u641C\u7D22<code>Chinese Pack</code>\u8FDB\u884C\u5B89\u88C5.</p><p><img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-2.png" alt=""></p><p>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\u4F1A\u63D0\u793A\u4F60\u91CD\u542F<code>sonarqube</code>, \u6309\u7167\u63D0\u793A\u91CD\u542F\u5373\u53EF.</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li>Sonarqube Documentation: <a href="https://docs.sonarqube.org/" target="_blank" rel="noopener noreferrer">https://docs.sonarqube.org/</a></li></ul>`,57),e=[o];function c(r,t,i,y,A,d){return n(),a("div",null,e)}var B=s(l,[["render",c]]);export{u as __pageData,B as default};
