import{_ as s,o as a,c as e,a as t}from"./app.1e6146c3.js";const y=JSON.parse('{"title":"TFTP","description":"","frontmatter":{},"headers":[{"level":2,"title":"tftp\u7684\u5B89\u88C5","slug":"tftp\u7684\u5B89\u88C5"},{"level":3,"title":"\u670D\u52A1\u5668\u7AEF","slug":"\u670D\u52A1\u5668\u7AEF"},{"level":3,"title":"\u5BA2\u6237\u7AEF","slug":"\u5BA2\u6237\u7AEF"},{"level":2,"title":"tftp\u7684\u4F7F\u7528","slug":"tftp\u7684\u4F7F\u7528"}],"relativePath":"LinuxBasics/FileSystem/TFTP.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/FileSystem/TFTP.md"},n=t(`<h1 id="tftp" tabindex="-1">TFTP <a class="header-anchor" href="#tftp" aria-hidden="true">#</a></h1><blockquote><p>\u5B98\u65B9\u7AD9\u70B9\uFF1A<a href="https://www.tftp-server.com/" target="_blank" rel="noopener noreferrer">https://www.tftp-server.com/</a></p></blockquote><p>TFTP\uFF08Trivial File Transfer Protocol,\u7B80\u5355\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09\u662FTCP/IP\u534F\u8BAE\u65CF\u4E2D\u7684\u4E00\u4E2A\u7528\u6765\u5728\u5BA2\u6237\u673A\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u8FDB\u884C\u7B80\u5355\u6587\u4EF6\u4F20\u8F93\u7684\u534F\u8BAE\uFF0C\u63D0\u4F9B\u4E0D\u590D\u6742\u3001\u5F00\u9500\u4E0D\u5927\u7684\u6587\u4EF6\u4F20\u8F93\u670D\u52A1\u3002\u7AEF\u53E3\u53F7\u4E3A69\u3002</p><p>TFTP\u662F\u4E00\u4E2A\u4F20\u8F93\u6587\u4EF6\u7684\u7B80\u5355\u534F\u8BAE\uFF0C\u5B83\u57FA\u4E8EUDP\u534F\u8BAE\u800C\u5B9E\u73B0\uFF0C\u4F46\u662F\u6211\u4EEC\u4E5F\u4E0D\u80FD\u786E\u5B9A\u6709\u4E9BTFTP\u534F\u8BAE\u662F\u57FA\u4E8E\u5176\u5B83\u4F20\u8F93\u534F\u8BAE\u5B8C\u6210\u7684\u3002\u6B64\u534F\u8BAE\u8BBE\u8BA1\u7684\u65F6\u5019\u662F\u8FDB\u884C\u5C0F\u6587\u4EF6\u4F20\u8F93\u7684\u3002<strong>\u56E0\u6B64\u5B83\u4E0D\u5177\u5907\u901A\u5E38\u7684FTP\u7684\u8BB8\u591A\u529F\u80FD\uFF0C\u5B83\u53EA\u80FD\u4ECE\u6587\u4EF6\u670D\u52A1\u5668\u4E0A\u83B7\u5F97\u6216\u5199\u5165\u6587\u4EF6\uFF0C\u4E0D\u80FD\u5217\u51FA\u76EE\u5F55\uFF0C\u4E0D\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u5B83\u4F20\u8F938\u4F4D\u6570\u636E</strong>\u3002\u4F20\u8F93\u4E2D\u6709\u4E09\u79CD\u6A21\u5F0F\uFF1Anetascii\uFF0C\u8FD9\u662F8\u4F4D\u7684ASCII\u7801\u5F62\u5F0F\uFF0C\u53E6\u4E00\u79CD\u662Foctet\uFF0C\u8FD9\u662F8\u4F4D\u6E90\u6570\u636E\u7C7B\u578B\uFF1B\u6700\u540E\u4E00\u79CDmail\u5DF2\u7ECF\u4E0D\u518D\u652F\u6301\uFF0C\u5B83\u5C06\u8FD4\u56DE\u7684\u6570\u636E\u76F4\u63A5\u8FD4\u56DE\u7ED9\u7528\u6237\u800C\u4E0D\u662F\u4FDD\u5B58\u4E3A\u6587\u4EF6\u3002\uFF08\u6458\u81EA\u767E\u5EA6\u767E\u79D1<a href="https://baike.baidu.com/item/tftp/455170?fr=aladdin" target="_blank" rel="noopener noreferrer">tftp</a>\uFF09</p><h2 id="tftp\u7684\u5B89\u88C5" tabindex="-1">tftp\u7684\u5B89\u88C5 <a class="header-anchor" href="#tftp\u7684\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="\u670D\u52A1\u5668\u7AEF" tabindex="-1">\u670D\u52A1\u5668\u7AEF <a class="header-anchor" href="#\u670D\u52A1\u5668\u7AEF" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install -y tftp-server</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install -y tftp-server</span></span>
<span class="line"></span></code></pre></div><p>\u542F\u52A8\uFF1A<code>systemctl start tftp.service</code></p><p>\u4F7F\u7528<code>ss -tnulp | grep 69</code>\u547D\u4EE4\u67E5\u770Btftp\u662F\u5426\u5DF2\u7ECF\u542F\u52A8</p><h3 id="\u5BA2\u6237\u7AEF" tabindex="-1">\u5BA2\u6237\u7AEF <a class="header-anchor" href="#\u5BA2\u6237\u7AEF" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">yum install -y tftp</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">yum install -y tftp</span></span>
<span class="line"></span></code></pre></div><h2 id="tftp\u7684\u4F7F\u7528" tabindex="-1">tftp\u7684\u4F7F\u7528 <a class="header-anchor" href="#tftp\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>tftp\u9ED8\u8BA4\u7684\u6570\u636E\u6587\u4EF6\u5939\u662F\uFF1A<code>/var/lib/tftpboot/</code></p><p>\u670D\u52A1\u5668\u7AEF\u4E0A\u4F20\u6587\u4EF6\u5230\u4E0A\u9762\u90A3\u4E2A\u76EE\u5F55\u5373\u53EF.</p><p>\u5BA2\u6237\u7AEF\u4F7F\u7528\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">tftp 172.16.122.135</span></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528get\u547D\u4EE4\u5C06\u6587\u4EF6\u4E0B\u8F7D\u5230\u672C\u5730</span></span>
<span class="line"><span style="color:#DBD7CA;">tftp</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> get file</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">tftp 172.16.122.135</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528get\u547D\u4EE4\u5C06\u6587\u4EF6\u4E0B\u8F7D\u5230\u672C\u5730</span></span>
<span class="line"><span style="color:#393A34;">tftp</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> get file</span></span>
<span class="line"></span></code></pre></div><p>TFTP\u5DE5\u5177\u6BD4\u8F83\u7B80\u5355\u53EA\u80FD\u4E0B\u8F7D\u4E00\u4E9B\u76F8\u5BF9\u5C0F\u4E00\u70B9\u7684\u6587\u4EF6</p>`,17),l=[n];function c(r,o,i,d,f,h){return a(),e("div",null,l)}var T=s(p,[["render",c]]);export{y as __pageData,T as default};