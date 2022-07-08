import{_ as s,o as a,c as p,a as n}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"Samba\u914D\u7F6E\u6587\u4EF6\u5E38\u7528\u53C2\u6570\u8BE6\u89E3","description":"","frontmatter":{},"headers":[],"relativePath":"LinuxBasics/FileSystem/smb.conf\u8BE6\u89E3.md","lastUpdated":1657272051000}'),o={name:"LinuxBasics/FileSystem/smb.conf\u8BE6\u89E3.md"},e=n(`<h1 id="samba\u914D\u7F6E\u6587\u4EF6\u5E38\u7528\u53C2\u6570\u8BE6\u89E3" tabindex="-1">Samba\u914D\u7F6E\u6587\u4EF6\u5E38\u7528\u53C2\u6570\u8BE6\u89E3 <a class="header-anchor" href="#samba\u914D\u7F6E\u6587\u4EF6\u5E38\u7528\u53C2\u6570\u8BE6\u89E3" aria-hidden="true">#</a></h1><p>Samba\u7684\u4E3B\u914D\u7F6E\u6587\u4EF6\u53EB<code>smb.conf</code>\uFF0C\u26A0\uFE0F\u7528\u6237\u521B\u5EFA\u7684\u5206\u4EAB\u914D\u7F6E\u6587\u4EF6\u5728<code>/var/lib/samba/usershares </code> \uFF0C\u9ED8\u8BA4\u5728<code>/etc/samba/</code>\u76EE\u5F55\u4E0B\u3002<code>smb.conf</code>\u542B\u6709\u591A\u4E2A\u6BB5\uFF0C\u6BCF\u4E2A\u6BB5\u7531\u6BB5\u540D\u5F00\u59CB\uFF0C\u76F4\u5230\u4E0B\u4E2A\u6BB5\u540D\u3002\u6BCF\u4E2A\u6BB5\u540D\u653E\u5728\u65B9\u62EC\u53F7\u4E2D\u95F4\u3002\u6BCF\u6BB5\u7684\u53C2\u6570\u7684\u683C\u5F0F\u662F\uFF1A\u540D\u79F0=\u6307\u3002\u914D\u7F6E\u6587\u4EF6\u4E2D\u4E00\u884C\u4E00\u4E2A\u6BB5\u540D\u548C\u53C2\u6570\uFF0C\u6BB5\u540D\u548C\u53C2\u6570\u540D\u4E0D\u5206\u5927\u5C0F\u5199\u3002\u9664\u4E86<code>[global]</code>\u6BB5\u5916\uFF0C\u6240\u6709\u7684\u6BB5\u90FD\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u5171\u4EAB\u8D44\u6E90\u3002\u6BB5\u540D\u662F\u8BE5\u5171\u4EAB\u8D44\u6E90\u7684\u540D\u5B57\uFF0C\u6BB5\u91CC\u7684\u53C2\u6570\u662F\u8BE5\u5171\u4EAB\u8D44\u6E90\u7684\u5C5E\u6027\u3002Samba\u5B89\u88C5\u597D\u540E\uFF0C\u4F7F\u7528<code>testparm</code>\u547D\u4EE4\u53EF\u4EE5\u6D4B\u8BD5<code>smb.conf</code>\u914D\u7F6E\u662F\u5426\u6B63\u786E\u3002\u4F7F\u7528**<code>testparm \u2013v</code>**\u547D\u4EE4\u53EF\u4EE5\u8BE6\u7EC6\u7684\u5217\u51FAsmb.conf\u652F\u6301\u7684\u914D\u7F6E\u53C2\u6570\u3002</p><p><strong>\u5168\u5C40\u53C2\u6570\uFF1A</strong></p><p><code>==================Global Settings ===================</code></p><p><strong>[global]</strong></p><p><code>config file = /usr/local/samba/lib/smb.conf.%m</code></p><p>\u8BF4\u660E\uFF1Aconfig file\u53EF\u4EE5\u8BA9\u4F60\u4F7F\u7528\u53E6\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u6765\u8986\u76D6\u7F3A\u7701\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u5982\u679C\u6587\u4EF6 \u4E0D\u5B58\u5728\uFF0C\u5219\u8BE5\u9879\u65E0\u6548\u3002\u8FD9\u4E2A\u53C2\u6570\u5F88\u6709\u7528\uFF0C\u53EF\u4EE5\u4F7F\u5F97samba\u914D\u7F6E\u66F4\u7075\u6D3B\uFF0C\u53EF\u4EE5\u8BA9\u4E00\u53F0samba\u670D\u52A1\u5668\u6A21\u62DF\u591A\u53F0\u4E0D\u540C\u914D\u7F6E\u7684\u670D\u52A1\u5668\u3002\u6BD4\u5982\uFF0C\u4F60\u60F3\u8BA9PC1\uFF08\u4E3B\u673A\u540D\uFF09\u8FD9\u53F0\u7535\u8111\u5728\u8BBF\u95EESamba Server\u65F6\u4F7F\u7528\u5B83\u81EA\u5DF1\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u5148\u5728/etc/samba/host/\u4E0B\u4E3APC1\u914D\u7F6E\u4E00\u4E2A\u540D\u4E3Asmb.conf.pc1\u7684\u6587\u4EF6\uFF0C\u7136\u540E\u5728smb.conf\u4E2D\u52A0\u5165\uFF1Aconfig file = /etc/samba/host/smb.conf.%m\u3002\u8FD9\u6837\u5F53PC1\u8BF7\u6C42\u8FDE\u63A5Samba Server\u65F6\uFF0Csmb.conf.%m\u5C31\u88AB\u66FF\u6362\u6210smb.conf.pc1\u3002\u8FD9\u6837\uFF0C\u5BF9\u4E8EPC1\u6765\u8BF4\uFF0C\u5B83\u6240\u4F7F\u7528\u7684Samba\u670D\u52A1\u5C31\u662F\u7531smb.conf.pc1\u5B9A\u4E49\u7684\uFF0C\u800C\u5176\u4ED6\u673A\u5668\u8BBF\u95EESamba Server\u5219\u8FD8\u662F\u5E94\u7528smb.conf\u3002</p><p><code>workgroup = WORKGROUP</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u5B9A Samba Server \u6240\u8981\u52A0\u5165\u7684\u5DE5\u4F5C\u7EC4\u6216\u8005\u57DF\u3002</p><p><code>server string = Samba Server Version %v</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u5B9A Samba Server \u7684\u6CE8\u91CA\uFF0C\u53EF\u4EE5\u662F\u4EFB\u4F55\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u586B\u3002\u5B8F%v\u8868\u793A\u663E\u793ASamba\u7684\u7248\u672C\u53F7\u3002</p><p><code>netbios name = smbserver</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u7684NetBIOS\u540D\u79F0\u3002\u5982\u679C\u4E0D\u586B\uFF0C\u5219\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u8BE5\u670D\u52A1\u5668\u7684DNS\u540D\u79F0\u7684\u7B2C\u4E00\u90E8\u5206\u3002netbios name\u548Cworkgroup\u540D\u5B57\u4E0D\u8981\u8BBE\u7F6E\u6210\u4E00\u6837\u4E86\u3002</p><p><code>interfaces = lo eth0 192.168.12.2/24 192.168.13.2/24</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u76D1\u542C\u54EA\u4E9B\u7F51\u5361\uFF0C\u53EF\u4EE5\u5199\u7F51\u5361\u540D\uFF0C\u4E5F\u53EF\u4EE5\u5199\u8BE5\u7F51\u5361\u7684IP\u5730\u5740\u3002</p><p><code>hosts allow = 127. 192.168.1. 192.168.10.1</code></p><p>\u8BF4\u660E\uFF1A\u8868\u793A\u5141\u8BB8\u8FDE\u63A5\u5230Samba Server\u7684\u5BA2\u6237\u7AEF\uFF0C\u591A\u4E2A\u53C2\u6570\u4EE5\u7A7A\u683C\u9694\u5F00\u3002\u53EF\u4EE5\u7528\u4E00\u4E2AIP\u8868\u793A\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E00\u4E2A\u7F51\u6BB5\u8868\u793A\u3002hosts deny \u4E0Ehosts allow \u521A\u597D\u76F8\u53CD\u3002</p><p>\u4F8B\u5982\uFF1Ahosts allow=172.17.2.EXCEPT172.17.2.50</p><p>\u8868\u793A\u5BB9\u8BB8\u6765\u81EA172.17.2.*.*\u7684\u4E3B\u673A\u8FDE\u63A5\uFF0C\u4F46\u6392\u9664172.17.2.50</p><p>hosts allow=172.17.2.0/255.255.0.0</p><p>\u8868\u793A\u5BB9\u8BB8\u6765\u81EA172.17.2.0/255.255.0.0\u5B50\u7F51\u4E2D\u7684\u6240\u6709\u4E3B\u673A\u8FDE\u63A5</p><p>hosts allow=M1\uFF0CM2</p><p>\u8868\u793A\u5BB9\u8BB8\u6765\u81EAM1\u548CM2\u4E24\u53F0\u8BA1\u7B97\u673A\u8FDE\u63A5</p><p>hosts allow=@xq</p><p>\u8868\u793A\u5BB9\u8BB8\u6765\u81EAXQ\u7F51\u57DF\u7684\u6240\u6709\u8BA1\u7B97\u673A\u8FDE\u63A5</p><p><code>max connections = 0</code></p><p>\u8BF4\u660E\uFF1Amax connections\u7528\u6765\u6307\u5B9A\u8FDE\u63A5Samba Server\u7684\u6700\u5927\u8FDE\u63A5\u6570\u76EE\u3002\u5982\u679C\u8D85\u51FA\u8FDE\u63A5\u6570\u76EE\uFF0C\u5219\u65B0\u7684\u8FDE\u63A5\u8BF7\u6C42\u5C06\u88AB\u62D2\u7EDD\u30020\u8868\u793A\u4E0D\u9650\u5236\u3002</p><p><code>deadtime = 0</code></p><p>\u8BF4\u660E\uFF1Adeadtime\u7528\u6765\u8BBE\u7F6E\u65AD\u6389\u4E00\u4E2A\u6CA1\u6709\u6253\u5F00\u4EFB\u4F55\u6587\u4EF6\u7684\u8FDE\u63A5\u7684\u65F6\u95F4\u3002\u5355\u4F4D\u662F\u5206\u949F\uFF0C0\u4EE3\u8868Samba Server\u4E0D\u81EA\u52A8\u5207\u65AD\u4EFB\u4F55\u8FDE\u63A5\u3002</p><p><code>time server = yes/no</code></p><p>\u8BF4\u660E\uFF1Atime server\u7528\u6765\u8BBE\u7F6E\u8BA9nmdb\u6210\u4E3Awindows\u5BA2\u6237\u7AEF\u7684\u65F6\u95F4\u670D\u52A1\u5668\u3002</p><p><code>log file = /var/log/samba/log.%m</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u65E5\u5FD7\u6587\u4EF6\u7684\u5B58\u50A8\u4F4D\u7F6E\u4EE5\u53CA\u65E5\u5FD7\u6587\u4EF6\u540D\u79F0\u3002\u5728\u6587\u4EF6\u540D\u540E\u52A0\u4E2A\u5B8F%m\uFF08\u4E3B\u673A\u540D\uFF09\uFF0C\u8868\u793A\u5BF9\u6BCF\u53F0\u8BBF\u95EESamba Server\u7684\u673A\u5668\u90FD\u5355\u72EC\u8BB0\u5F55\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6\u3002\u5982\u679Cpc1\u3001pc2\u8BBF\u95EE\u8FC7Samba Server\uFF0C\u5C31\u4F1A\u5728/var/log/samba\u76EE\u5F55\u4E0B\u7559\u4E0Blog.pc1\u548Clog.pc2\u4E24\u4E2A\u65E5\u5FD7\u6587\u4EF6\u3002</p><p><code>max log size = 50</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u65E5\u5FD7\u6587\u4EF6\u7684\u6700\u5927\u5BB9\u91CF\uFF0C\u5355\u4F4D\u4E3AkB\uFF0C0\u4EE3\u8868\u4E0D\u9650\u5236\u3002</p><p><code>security = user</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6E\u7528\u6237\u8BBF\u95EESamba Server\u7684\u9A8C\u8BC1\u65B9\u5F0F\uFF0C\u4E00\u5171\u6709\u56DB\u79CD\u9A8C\u8BC1\u65B9\u5F0F\u3002</p><p><strong>1.</strong> <strong>share</strong>**\uFF1A**\u7528\u6237\u8BBF\u95EESamba Server\u4E0D\u9700\u8981\u63D0\u4F9B\u7528\u6237\u540D\u548C\u53E3\u4EE4, \u5B89\u5168\u6027\u80FD\u8F83\u4F4E\u3002</p><p><strong>2.</strong> **user\uFF1A**Samba Server\u5171\u4EAB\u76EE\u5F55\u53EA\u80FD\u88AB\u6388\u6743\u7684\u7528\u6237\u8BBF\u95EE,\u7531Samba Server\u8D1F\u8D23\u68C0\u67E5\u8D26\u53F7\u548C\u5BC6\u7801\u7684\u6B63\u786E\u6027\u3002\u8D26\u53F7\u548C\u5BC6\u7801\u8981\u5728\u672CSamba Server\u4E2D\u5EFA\u7ACB\u3002</p><p><strong>3.</strong> **server\uFF1A**\u4F9D\u9760\u5176\u4ED6Windows NT/2000\u6216Samba Server\u6765\u9A8C\u8BC1\u7528\u6237\u7684\u8D26\u53F7\u548C\u5BC6\u7801,\u662F\u4E00\u79CD\u4EE3\u7406\u9A8C\u8BC1\u3002\u6B64\u79CD\u5B89\u5168\u6A21\u5F0F\u4E0B,\u7CFB\u7EDF\u7BA1\u7406\u5458\u53EF\u4EE5\u628A\u6240\u6709\u7684Windows\u7528\u6237\u548C\u53E3\u4EE4\u96C6\u4E2D\u5230\u4E00\u4E2ANT\u7CFB\u7EDF\u4E0A,\u4F7F\u7528Windows NT\u8FDB\u884CSamba\u8BA4\u8BC1, \u8FDC\u7A0B\u670D\u52A1\u5668\u53EF\u4EE5\u81EA\u52A8\u8BA4\u8BC1\u5168\u90E8\u7528\u6237\u548C\u53E3\u4EE4,\u5982\u679C\u8BA4\u8BC1\u5931\u8D25,Samba\u5C06\u4F7F\u7528\u7528\u6237\u7EA7\u5B89\u5168\u6A21\u5F0F\u4F5C\u4E3A\u66FF\u4EE3\u7684\u65B9\u5F0F\u3002</p><p><strong>4.</strong> **domain\uFF1A**\u57DF\u5B89\u5168\u7EA7\u522B,\u4F7F\u7528\u4E3B\u57DF\u63A7\u5236\u5668(PDC)\u6765\u5B8C\u6210\u8BA4\u8BC1\u3002</p><p><code>passdb backend = tdbsam</code></p><p>\u8BF4\u660E\uFF1Apassdb backend\u5C31\u662F\u7528\u6237\u540E\u53F0\u7684\u610F\u601D\u3002\u76EE\u524D\u6709\u4E09\u79CD\u540E\u53F0\uFF1Asmbpasswd\u3001tdbsam\u548Cldapsam\u3002sam\u5E94\u8BE5\u662Fsecurity account manager\uFF08\u5B89\u5168\u8D26\u6237\u7BA1\u7406\uFF09\u7684\u7B80\u5199\u3002</p><p>**1.smbpasswd\uFF1A**\u8BE5\u65B9\u5F0F\u662F\u4F7F\u7528smb\u81EA\u5DF1\u7684\u5DE5\u5177smbpasswd\u6765\u7ED9\u7CFB\u7EDF\u7528\u6237\uFF08\u771F\u5B9E</p><p>\u7528\u6237\u6216\u8005\u865A\u62DF\u7528\u6237\uFF09\u8BBE\u7F6E\u4E00\u4E2ASamba\u5BC6\u7801\uFF0C\u5BA2\u6237\u7AEF\u5C31\u7528\u8FD9\u4E2A\u5BC6\u7801\u6765\u8BBF\u95EESamba\u7684\u8D44\u6E90\u3002smbpasswd\u6587\u4EF6\u9ED8\u8BA4\u5728/etc/samba\u76EE\u5F55\u4E0B\uFF0C\u4E0D\u8FC7\u6709\u65F6\u5019\u8981\u624B\u5DE5\u5EFA\u7ACB\u8BE5\u6587\u4EF6\u3002</p><p><strong>2.tdbsam</strong>**\uFF1A<strong>\u8BE5\u65B9\u5F0F\u5219\u662F\u4F7F\u7528\u4E00\u4E2A\u6570\u636E\u5E93\u6587\u4EF6\u6765\u5EFA\u7ACB\u7528\u6237\u6570\u636E\u5E93\u3002\u6570\u636E\u5E93\u6587\u4EF6\u53EBpassdb.tdb\uFF0C\u9ED8\u8BA4\u5728/etc/samba\u76EE\u5F55\u4E0B\u3002passdb.tdb\u7528\u6237\u6570\u636E\u5E93\u53EF\u4EE5\u4F7F\u7528smbpasswd \u2013a\u6765\u5EFA\u7ACBSamba\u7528\u6237\uFF0C\u4E0D\u8FC7\u8981\u5EFA\u7ACB\u7684Samba\u7528\u6237\u5FC5\u987B\u5148\u662F\u7CFB\u7EDF\u7528\u6237\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528</strong>pdbedit**\u547D\u4EE4\u6765\u5EFA\u7ACBSamba\u8D26\u6237\u3002pdbedit\u547D\u4EE4\u7684\u53C2\u6570\u5F88\u591A\uFF0C\u6211\u4EEC\u5217\u51FA\u51E0\u4E2A\u4E3B\u8981\u7684\u3002</p><p>pdbedit \u2013a username\uFF1A\u65B0\u5EFASamba\u8D26\u6237\u3002</p><p>pdbedit \u2013x username\uFF1A\u5220\u9664Samba\u8D26\u6237\u3002</p><p>pdbedit \u2013L\uFF1A\u5217\u51FASamba\u7528\u6237\u5217\u8868\uFF0C\u8BFB\u53D6passdb.tdb\u6570\u636E\u5E93\u6587\u4EF6\u3002</p><p>pdbedit \u2013Lv\uFF1A\u5217\u51FASamba\u7528\u6237\u5217\u8868\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</p><p>pdbedit \u2013c \u201C[D]\u201D \u2013u username\uFF1A\u6682\u505C\u8BE5Samba\u7528\u6237\u7684\u8D26\u53F7\u3002</p><p>pdbedit \u2013c \u201C[]\u201D \u2013u username\uFF1A\u6062\u590D\u8BE5Samba\u7528\u6237\u7684\u8D26\u53F7\u3002</p><p><strong>3.ldapsam</strong>**\uFF1A**\u8BE5\u65B9\u5F0F\u5219\u662F\u57FA\u4E8ELDAP\u7684\u8D26\u6237\u7BA1\u7406\u65B9\u5F0F\u6765\u9A8C\u8BC1\u7528\u6237\u3002\u9996\u5148\u8981\u5EFA\u7ACBLDAP\u670D\u52A1\uFF0C\u7136\u540E\u8BBE\u7F6E\u201Cpassdb backend = ldapsam:ldap://LDAP Server\u201D</p><p><code>encrypt passwords = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u662F\u5426\u5C06\u8BA4\u8BC1\u5BC6\u7801\u52A0\u5BC6\u3002\u56E0\u4E3A\u73B0\u5728windows\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u662F\u4F7F\u7528\u52A0\u5BC6\u5BC6\u7801\uFF0C\u6240\u4EE5\u4E00\u822C\u8981\u5F00\u542F\u6B64\u9879\u3002\u4E0D\u8FC7\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u5DF2\u5F00\u542F\u3002</p><p><code>smb passwd file = /etc/samba/smbpasswd</code></p><p>\u8BF4\u660E\uFF1A\u7528\u6765\u5B9A\u4E49samba\u7528\u6237\u7684\u5BC6\u7801\u6587\u4EF6\u3002smbpasswd\u6587\u4EF6\u5982\u679C\u6CA1\u6709\u90A3\u5C31\u8981\u624B\u5DE5\u65B0\u5EFA\u3002</p><p><code>username map = /etc/samba/smbusers</code></p><p>\u8BF4\u660E\uFF1A\u7528\u6765\u5B9A\u4E49\u7528\u6237\u540D\u6620\u5C04\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5C06root\u6362\u6210administrator\u3001admin\u7B49\u3002\u4E0D\u8FC7\u8981\u4E8B\u5148\u5728smbusers\u6587\u4EF6\u4E2D\u5B9A\u4E49\u597D\u3002\u6BD4\u5982\uFF1Aroot = administrator admin\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u7528administrator\u6216admin\u8FD9\u4E24\u4E2A\u7528\u6237\u6765\u4EE3\u66FFroot\u767B\u9646Samba Server\uFF0C\u66F4\u8D34\u8FD1windows\u7528\u6237\u7684\u4E60\u60EF\u3002</p><p><code>guest account = nobody</code></p><p>\u8BF4\u660E\uFF1A\u7528\u6765\u8BBE\u7F6Eguest\u7528\u6237\u540D\u3002</p><p><code>socket options = TCP_NODELAY SO_RCVBUF=8192 SO_SNDBUF=8192</code></p><p>\u8BF4\u660E\uFF1A\u7528\u6765\u8BBE\u7F6E\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u4F1A\u8BDD\u7684Socket\u9009\u9879\uFF0C\u53EF\u4EE5\u4F18\u5316\u4F20\u8F93\u901F\u5EA6\u3002</p><p><code>domain master = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba\u670D\u52A1\u5668\u662F\u5426\u8981\u6210\u4E3A\u7F51\u57DF\u4E3B\u6D4F\u89C8\u5668\uFF0C\u7F51\u57DF\u4E3B\u6D4F\u89C8\u5668\u53EF\u4EE5\u7BA1\u7406\u8DE8\u5B50\u7F51\u57DF\u7684\u6D4F\u89C8\u670D\u52A1\u3002</p><p><code>local master = yes/no</code></p><p>\u8BF4\u660E\uFF1Alocal master\u7528\u6765\u6307\u5B9ASamba Server\u662F\u5426\u8BD5\u56FE\u6210\u4E3A\u672C\u5730\u7F51\u57DF\u4E3B\u6D4F\u89C8\u5668\u3002\u5982\u679C\u8BBE\u4E3Ano\uFF0C\u5219\u6C38\u8FDC\u4E0D\u4F1A\u6210\u4E3A\u672C\u5730\u7F51\u57DF\u4E3B\u6D4F\u89C8\u5668\u3002\u4F46\u662F\u5373\u4F7F\u8BBE\u7F6E\u4E3Ayes\uFF0C\u4E5F\u4E0D\u7B49\u4E8E\u8BE5Samba Server\u5C31\u80FD\u6210\u4E3A\u4E3B\u6D4F\u89C8\u5668\uFF0C\u8FD8\u9700\u8981\u53C2\u52A0\u9009\u4E3E\u3002</p><p><code>preferred master = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u4E00\u5F00\u673A\u5C31\u5F3A\u8FEB\u8FDB\u884C\u4E3B\u6D4F\u89C8\u5668\u9009\u4E3E\uFF0C\u53EF\u4EE5\u63D0\u9AD8Samba Server\u6210\u4E3A\u672C\u5730\u7F51\u57DF\u4E3B\u6D4F\u89C8\u5668\u7684\u673A\u4F1A\u3002\u5982\u679C\u8BE5\u53C2\u6570\u6307\u5B9A\u4E3Ayes\u65F6\uFF0C\u6700\u597D\u628Adomain master\u4E5F\u6307\u5B9A\u4E3Ayes\u3002\u4F7F\u7528\u8BE5\u53C2\u6570\u65F6\u8981\u6CE8\u610F\uFF1A\u5982\u679C\u5728\u672CSamba Server\u6240\u5728\u7684\u5B50\u7F51\u6709\u5176\u4ED6\u7684\u673A\u5668\uFF08\u4E0D\u8BBA\u662Fwindows NT\u8FD8\u662F\u5176\u4ED6Samba Server\uFF09\u4E5F\u6307\u5B9A\u4E3A\u9996\u8981\u4E3B\u6D4F\u89C8\u5668\u65F6\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u673A\u5668\u5C06\u4F1A\u56E0\u4E3A\u4E89\u593A\u4E3B\u6D4F\u89C8\u5668\u800C\u5728\u7F51\u7EDC\u4E0A\u5927\u53D1\u5E7F\u64AD\uFF0C\u5F71\u54CD\u7F51\u7EDC\u6027\u80FD\u3002</p><p>\u5982\u679C\u540C\u4E00\u4E2A\u533A\u57DF\u5185\u6709\u591A\u53F0Samba Server\uFF0C\u5C06\u4E0A\u9762\u4E09\u4E2A\u53C2\u6570\u8BBE\u5B9A\u5728\u4E00\u53F0\u5373\u53EF\u3002</p><p><code>os level = 200</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6Esamba\u670D\u52A1\u5668\u7684os level\u3002\u8BE5\u53C2\u6570\u51B3\u5B9ASamba Server\u662F\u5426\u6709\u673A\u4F1A\u6210\u4E3A\u672C\u5730\u7F51\u57DF\u7684\u4E3B\u6D4F\u89C8\u5668\u3002os level\u4ECE0\u5230255\uFF0CwinNT\u7684os level\u662F32\uFF0Cwin95/98\u7684os level\u662F1\u3002Windows 2000\u7684os level\u662F64\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A0\uFF0C\u5219\u610F\u5473\u7740Samba Server\u5C06\u5931\u53BB\u6D4F\u89C8\u9009\u62E9\u3002\u5982\u679C\u60F3\u8BA9Samba Server\u6210\u4E3APDC\uFF0C\u90A3\u4E48\u5C06\u5B83\u7684os level\u503C\u8BBE\u5927\u4E9B\u3002</p><p><code>domain logons = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u662F\u5426\u8981\u505A\u4E3A\u672C\u5730\u57DF\u63A7\u5236\u5668\u3002\u4E3B\u57DF\u63A7\u5236\u5668\u548C\u5907\u4EFD\u57DF\u63A7\u5236\u5668\u90FD\u9700\u8981\u5F00\u542F\u6B64\u9879\u3002</p><p><code>logon . = %u.bat</code></p><p>\u8BF4\u660E\uFF1A\u5F53\u4F7F\u7528\u8005\u7528windows\u5BA2\u6237\u7AEF\u767B\u9646\uFF0C\u90A3\u4E48Samba\u5C06\u63D0\u4F9B\u4E00\u4E2A\u767B\u9646\u6863\u3002\u5982\u679C\u8BBE\u7F6E\u6210%u.bat\uFF0C\u90A3\u4E48\u5C31\u8981\u4E3A\u6BCF\u4E2A\u7528\u6237\u63D0\u4F9B\u4E00\u4E2A\u767B\u9646\u6863\u3002\u5982\u679C\u4EBA\u6BD4\u8F83\u591A\uFF0C\u90A3\u5C31\u6BD4\u8F83\u9EBB\u70E6\u3002\u53EF\u4EE5\u8BBE\u7F6E\u6210\u4E00\u4E2A\u5177\u4F53\u7684\u6587\u4EF6\u540D\uFF0C\u6BD4\u5982start.bat\uFF0C\u90A3\u4E48\u7528\u6237\u767B\u9646\u540E\u90FD\u4F1A\u53BB\u6267\u884Cstart.bat\uFF0C\u800C\u4E0D\u7528\u4E3A\u6BCF\u4E2A\u7528\u6237\u8BBE\u5B9A\u4E00\u4E2A\u767B\u9646\u6863\u4E86\u3002\u8FD9\u4E2A\u6587\u4EF6\u8981\u653E\u7F6E\u5728[netlogon]\u7684path\u8BBE\u7F6E\u7684\u76EE\u5F55\u8DEF\u5F84\u4E0B\u3002</p><p><code>wins support = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6Esamba\u670D\u52A1\u5668\u662F\u5426\u63D0\u4F9Bwins\u670D\u52A1\u3002</p><p><code>wins server = wins\u670D\u52A1\u5668IP\u5730\u5740</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u662F\u5426\u4F7F\u7528\u522B\u7684wins\u670D\u52A1\u5668\u63D0\u4F9Bwins\u670D\u52A1\u3002</p><p><code>wins proxy = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u662F\u5426\u5F00\u542Fwins\u4EE3\u7406\u670D\u52A1\u3002</p><p><code>dns proxy = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba Server\u662F\u5426\u5F00\u542Fdns\u4EE3\u7406\u670D\u52A1\u3002</p><p><code>load printers = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6E\u662F\u5426\u5728\u542F\u52A8Samba\u65F6\u5C31\u5171\u4EAB\u6253\u5370\u673A\u3002</p><p><code>printcap name = cups</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6E\u5171\u4EAB\u6253\u5370\u673A\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><p><code>printing = cups</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6ESamba\u5171\u4EAB\u6253\u5370\u673A\u7684\u7C7B\u578B\u3002\u73B0\u5728\u652F\u6301\u7684\u6253\u5370\u7CFB\u7EDF\u6709\uFF1Absd, sysv, plp, lprng, aix, hpux, qnx</p><p><strong>\u5171\u4EAB\u53C2\u6570\uFF1A</strong></p><p><code>================== Share Definitions ==================</code></p><p>**[**<strong>\u5171\u4EAB\u540D]</strong></p><p><code>comment = \u4EFB\u610F\u5B57\u7B26\u4E32</code></p><p>\u8BF4\u660E\uFF1Acomment\u662F\u5BF9\u8BE5\u5171\u4EAB\u7684\u63CF\u8FF0\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u5B57\u7B26\u4E32\u3002</p><p><code>path = \u5171\u4EAB\u76EE\u5F55\u8DEF\u5F84</code></p><p>\u8BF4\u660E\uFF1Apath\u7528\u6765\u6307\u5B9A\u5171\u4EAB\u76EE\u5F55\u7684\u8DEF\u5F84\u3002\u53EF\u4EE5\u7528%u\u3001%m\u8FD9\u6837\u7684\u5B8F\u6765\u4EE3\u66FF\u8DEF\u5F84\u91CC\u7684unix\u7528\u6237\u548C\u5BA2\u6237\u673A\u7684Netbios\u540D\uFF0C\u7528\u5B8F\u8868\u793A\u4E3B\u8981\u7528\u4E8E[homes]\u5171\u4EAB\u57DF\u3002\u4F8B\u5982\uFF1A\u5982\u679C\u6211\u4EEC\u4E0D\u6253\u7B97\u7528home\u6BB5\u505A\u4E3A\u5BA2\u6237\u7684\u5171\u4EAB\uFF0C\u800C\u662F\u5728/home/share/\u4E0B\u4E3A\u6BCF\u4E2ALinux\u7528\u6237\u4EE5\u4ED6\u7684\u7528\u6237\u540D\u5EFA\u4E2A\u76EE\u5F55\uFF0C\u4F5C\u4E3A\u4ED6\u7684\u5171\u4EAB\u76EE\u5F55\uFF0C\u8FD9\u6837path\u5C31\u53EF\u4EE5\u5199\u6210\uFF1Apath = /home/share/%u; \u3002\u7528\u6237\u5728\u8FDE\u63A5\u5230\u8FD9\u5171\u4EAB\u65F6\u5177\u4F53\u7684\u8DEF\u5F84\u4F1A\u88AB\u4ED6\u7684\u7528\u6237\u540D\u4EE3\u66FF\uFF0C\u8981\u6CE8\u610F\u8FD9\u4E2A\u7528\u6237\u540D\u8DEF\u5F84\u4E00\u5B9A\u8981\u5B58\u5728\uFF0C\u5426\u5219\uFF0C\u5BA2\u6237\u673A\u5728\u8BBF\u95EE\u65F6\u4F1A\u627E\u4E0D\u5230\u7F51\u7EDC\u8DEF\u5F84\u3002\u540C\u6837\uFF0C\u5982\u679C\u6211\u4EEC\u4E0D\u662F\u4EE5\u7528\u6237\u6765\u5212\u5206\u76EE\u5F55\uFF0C\u800C\u662F\u4EE5\u5BA2\u6237\u673A\u6765\u5212\u5206\u76EE\u5F55\uFF0C\u4E3A\u7F51\u7EDC\u4E0A\u6BCF\u53F0\u53EF\u4EE5\u8BBF\u95EEsamba\u7684\u673A\u5668\u90FD\u5404\u81EA\u5EFA\u4E2A\u4EE5\u5B83\u7684netbios\u540D\u7684\u8DEF\u5F84\uFF0C\u4F5C\u4E3A\u4E0D\u540C\u673A\u5668\u7684\u5171\u4EAB\u8D44\u6E90\uFF0C\u5C31\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1Apath = /home/share/%m \u3002</p><p><code>browseable = yes/no</code></p><p>\u8BF4\u660E\uFF1Abrowseable\u7528\u6765\u6307\u5B9A\u8BE5\u5171\u4EAB\u662F\u5426\u53EF\u4EE5\u6D4F\u89C8\u3002</p><p><code>writable = yes/no</code></p><p>\u8BF4\u660E\uFF1Awritable\u7528\u6765\u6307\u5B9A\u8BE5\u5171\u4EAB\u8DEF\u5F84\u662F\u5426\u53EF\u5199\u3002</p><p><code>available = yes/no</code></p><p>\u8BF4\u660E\uFF1Aavailable\u7528\u6765\u6307\u5B9A\u8BE5\u5171\u4EAB\u8D44\u6E90\u662F\u5426\u53EF\u7528\u3002</p><p><code>admin users = \u8BE5\u5171\u4EAB\u7684\u7BA1\u7406\u8005</code></p><p>\u8BF4\u660E\uFF1Aadmin users\u7528\u6765\u6307\u5B9A\u8BE5\u5171\u4EAB\u7684\u7BA1\u7406\u5458\uFF08\u5BF9\u8BE5\u5171\u4EAB\u5177\u6709\u5B8C\u5168\u63A7\u5236\u6743\u9650\uFF09\u3002\u5728samba 3.0\u4E2D\uFF0C\u5982\u679C\u7528\u6237\u9A8C\u8BC1\u65B9\u5F0F\u8BBE\u7F6E\u6210\u201Csecurity=share\u201D\u65F6\uFF0C\u6B64\u9879\u65E0\u6548\u3002</p><p>\u4F8B\u5982\uFF1Aadmin users =bobyuan\uFF0Cjane\uFF08\u591A\u4E2A\u7528\u6237\u4E2D\u95F4\u7528\u9017\u53F7\u9694\u5F00\uFF09\u3002</p><p><code>valid users = \u5141\u8BB8\u8BBF\u95EE\u8BE5\u5171\u4EAB\u7684\u7528\u6237</code></p><p>\u8BF4\u660E\uFF1Avalid users\u7528\u6765\u6307\u5B9A\u5141\u8BB8\u8BBF\u95EE\u8BE5\u5171\u4EAB\u8D44\u6E90\u7684\u7528\u6237\u3002</p><p>\u4F8B\u5982\uFF1Avalid users = bobyuan\uFF0C@bob\uFF0C@tech\uFF08\u591A\u4E2A\u7528\u6237\u6216\u8005\u7EC4\u4E2D\u95F4\u7528\u9017\u53F7\u9694\u5F00\uFF0C\u5982\u679C\u8981\u52A0\u5165\u4E00\u4E2A\u7EC4\u5C31\u7528\u201C@+\u7EC4\u540D\u201D\u8868\u793A\u3002\uFF09</p><p><code>invalid users = \u7981\u6B62\u8BBF\u95EE\u8BE5\u5171\u4EAB\u7684\u7528\u6237</code></p><p>\u8BF4\u660E\uFF1Ainvalid users\u7528\u6765\u6307\u5B9A\u4E0D\u5141\u8BB8\u8BBF\u95EE\u8BE5\u5171\u4EAB\u8D44\u6E90\u7684\u7528\u6237\u3002</p><p>\u4F8B\u5982\uFF1Ainvalid users = root\uFF0C@bob\uFF08\u591A\u4E2A\u7528\u6237\u6216\u8005\u7EC4\u4E2D\u95F4\u7528\u9017\u53F7\u9694\u5F00\u3002\uFF09</p><p><code>write list = \u5141\u8BB8\u5199\u5165\u8BE5\u5171\u4EAB\u7684\u7528\u6237</code></p><p>\u8BF4\u660E\uFF1Awrite list\u7528\u6765\u6307\u5B9A\u53EF\u4EE5\u5728\u8BE5\u5171\u4EAB\u4E0B\u5199\u5165\u6587\u4EF6\u7684\u7528\u6237\u3002</p><p>\u4F8B\u5982\uFF1Awrite list = bobyuan\uFF0C@bob\uFF08bob\u7EC4\uFF09\uFF0C\u6DFB\u52A0\u7528\u6237\u7EC4\u4F7F\u7528write list = +grplist</p><p><code>public = yes/no</code></p><p>\u8BF4\u660E\uFF1Apublic\u7528\u6765\u6307\u5B9A\u8BE5\u5171\u4EAB\u662F\u5426\u5141\u8BB8guest\u8D26\u6237\u8BBF\u95EE\u3002</p><p><code>guest ok = yes/no</code></p><p>\u8BF4\u660E\uFF1A\u610F\u4E49\u540C\u201Cpublic\u201D\u3002</p><p>\u51E0\u4E2A\u7279\u6B8A\u5171\u4EAB\uFF1A</p><div class="language-ini"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">homes</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#4D9375;">comment</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> Home Directories</span></span>
<span class="line"><span style="color:#4D9375;">browseable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> no</span></span>
<span class="line"><span style="color:#4D9375;">writable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> yes</span></span>
<span class="line"><span style="color:#DBD7CA;">valid </span><span style="color:#4D9375;">users</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> %S</span></span>
<span class="line"><span style="color:#758575;">; valid users = MYDOMAIN\\%S</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">printers</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#4D9375;">comment</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> All Printers</span></span>
<span class="line"><span style="color:#4D9375;">path</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /var/spool/samba</span></span>
<span class="line"><span style="color:#4D9375;">browseable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> no</span></span>
<span class="line"><span style="color:#DBD7CA;">guest </span><span style="color:#4D9375;">ok</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> no</span></span>
<span class="line"><span style="color:#4D9375;">writable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> no</span></span>
<span class="line"><span style="color:#4D9375;">printable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">netlogon</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#4D9375;">comment</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> Network Logon Service</span></span>
<span class="line"><span style="color:#4D9375;">path</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /var/lib/samba/netlogon</span></span>
<span class="line"><span style="color:#DBD7CA;">guest </span><span style="color:#4D9375;">ok</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> yes</span></span>
<span class="line"><span style="color:#4D9375;">writable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> no</span></span>
<span class="line"><span style="color:#DBD7CA;">share </span><span style="color:#4D9375;">modes</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">Profiles</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#4D9375;">path</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /var/lib/samba/profiles</span></span>
<span class="line"><span style="color:#4D9375;">browseable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> no</span></span>
<span class="line"><span style="color:#DBD7CA;">guest </span><span style="color:#4D9375;">ok</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> yes</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">homes</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#1C6B48;">comment</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> Home Directories</span></span>
<span class="line"><span style="color:#1C6B48;">browseable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> no</span></span>
<span class="line"><span style="color:#1C6B48;">writable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> yes</span></span>
<span class="line"><span style="color:#393A34;">valid </span><span style="color:#1C6B48;">users</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> %S</span></span>
<span class="line"><span style="color:#A0ADA0;">; valid users = MYDOMAIN\\%S</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">printers</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#1C6B48;">comment</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> All Printers</span></span>
<span class="line"><span style="color:#1C6B48;">path</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /var/spool/samba</span></span>
<span class="line"><span style="color:#1C6B48;">browseable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> no</span></span>
<span class="line"><span style="color:#393A34;">guest </span><span style="color:#1C6B48;">ok</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> no</span></span>
<span class="line"><span style="color:#1C6B48;">writable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> no</span></span>
<span class="line"><span style="color:#1C6B48;">printable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">netlogon</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#1C6B48;">comment</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> Network Logon Service</span></span>
<span class="line"><span style="color:#1C6B48;">path</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /var/lib/samba/netlogon</span></span>
<span class="line"><span style="color:#393A34;">guest </span><span style="color:#1C6B48;">ok</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> yes</span></span>
<span class="line"><span style="color:#1C6B48;">writable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> no</span></span>
<span class="line"><span style="color:#393A34;">share </span><span style="color:#1C6B48;">modes</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">Profiles</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#1C6B48;">path</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /var/lib/samba/profiles</span></span>
<span class="line"><span style="color:#1C6B48;">browseable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> no</span></span>
<span class="line"><span style="color:#393A34;">guest </span><span style="color:#1C6B48;">ok</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> yes</span></span>
<span class="line"></span></code></pre></div><blockquote><p>FROM:<a href="https://blog.51cto.com/yuanbin/115761" target="_blank" rel="noopener noreferrer">https://blog.51cto.com/yuanbin/115761</a></p></blockquote>`,122),l=[e];function r(c,t,y,d,i,b){return a(),p("div",null,l)}var S=s(o,[["render",r]]);export{D as __pageData,S as default};
