import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const _=JSON.parse('{"title":"keepalived","description":"","frontmatter":{},"headers":[{"level":3,"title":"keepalived\u7B80\u4ECB","slug":"keepalived\u7B80\u4ECB"},{"level":3,"title":"\u5DE5\u4F5C\u539F\u7406","slug":"\u5DE5\u4F5C\u539F\u7406"},{"level":3,"title":"\u7A0B\u5E8F\u73AF\u5883","slug":"\u7A0B\u5E8F\u73AF\u5883"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"LinuxBasics/keepalived.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/keepalived.md"},e=l(`<h1 id="keepalived" tabindex="-1">keepalived <a class="header-anchor" href="#keepalived" aria-hidden="true">#</a></h1><h3 id="keepalived\u7B80\u4ECB" tabindex="-1">keepalived\u7B80\u4ECB <a class="header-anchor" href="#keepalived\u7B80\u4ECB" aria-hidden="true">#</a></h3><p>keepalived\u662F\u96C6\u7FA4\u7BA1\u7406\u4E2D\u4FDD\u8BC1\u96C6\u7FA4\u9AD8\u53EF\u7528\u7684\u4E00\u4E2A\u670D\u52A1\u8F6F\u4EF6\uFF0C\u5176\u529F\u80FD\u7C7B\u4F3C\u4E8E<a href="https://github.com/chenzhiwei/linux/tree/master/heartbeat" target="_blank" rel="noopener noreferrer">heartbeat</a>\uFF0C\u7528\u6765\u9632\u6B62\u5355\u70B9\u6545\u969C\u3002</p><h3 id="\u5DE5\u4F5C\u539F\u7406" tabindex="-1">\u5DE5\u4F5C\u539F\u7406 <a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a></h3><p>\u200B <a href="https://baike.baidu.com/item/Keepalived" target="_blank" rel="noopener noreferrer">keepalived</a>\u662F\u4EE5VRRP\u534F\u8BAE\u4E3A\u5B9E\u73B0\u57FA\u7840\u7684\uFF0CVRRP\u5168\u79F0Virtual Router Redundancy Protocol\uFF0C\u5373<a href="https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E8%B7%AF%E7%94%B1%E5%99%A8%E5%86%97%E4%BD%99%E5%8D%8F%E8%AE%AE/2991482?fromtitle=%E8%99%9A%E6%8B%9F%E8%B7%AF%E7%94%B1%E5%86%97%E4%BD%99%E5%8D%8F%E8%AE%AE&amp;fromid=22253650&amp;fr=aladdin" target="_blank" rel="noopener noreferrer">\u865A\u62DF\u8DEF\u7531\u5197\u4F59\u534F\u8BAE</a>\u3002</p><p>\u200B \u865A\u62DF\u8DEF\u7531\u5197\u4F59\u534F\u8BAE\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u5B9E\u73B0\u8DEF\u7531\u5668\u9AD8\u53EF\u7528\u7684\u534F\u8BAE\uFF0C\u5373\u5C06N\u53F0\u63D0\u4F9B\u76F8\u540C\u529F\u80FD\u7684\u8DEF\u7531\u5668\u7EC4\u6210\u4E00\u4E2A\u8DEF\u7531\u5668\u7EC4\uFF0C\u8FD9\u4E2A\u7EC4\u91CC\u9762\u6709\u4E00\u4E2Amaster\u548C\u591A\u4E2Abackup\uFF0Cmaster\u4E0A\u9762\u6709\u4E00\u4E2A\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684vip\uFF08\u8BE5\u8DEF\u7531\u5668\u6240\u5728\u5C40\u57DF\u7F51\u5185\u5176\u4ED6\u673A\u5668\u7684\u9ED8\u8BA4\u8DEF\u7531\u4E3A\u8BE5vip\uFF09\uFF0Cmaster\u4F1A\u53D1\u7EC4\u64AD\uFF0C\u5F53backup\u6536\u4E0D\u5230vrrp\u5305\u65F6\u5C31\u8BA4\u4E3Amaster\u5B95\u6389\u4E86\uFF0C\u8FD9\u65F6\u5C31\u9700\u8981\u6839\u636EVRRP\u7684\u4F18\u5148\u7EA7\u6765\u9009\u4E3E\u4E00\u4E2Abackup\u5F53master\u3002\u8FD9\u6837\u7684\u8BDD\u5C31\u53EF\u4EE5\u4FDD\u8BC1\u8DEF\u7531\u5668\u7684\u9AD8\u53EF\u7528\u4E86\u3002</p><p>\u200B keepalived\u4E3B\u8981\u6709\u4E09\u4E2A\u6A21\u5757\uFF0C\u5206\u522B\u662Fcore\u3001check\u548Cvrrp\u3002core\u6A21\u5757\u4E3Akeepalived\u7684\u6838\u5FC3\uFF0C\u8D1F\u8D23\u4E3B\u8FDB\u7A0B\u7684\u542F\u52A8\u3001\u7EF4\u62A4\u4EE5\u53CA\u5168\u5C40\u914D\u7F6E\u6587\u4EF6\u7684\u52A0\u8F7D\u548C\u89E3\u6790\u3002check\u8D1F\u8D23\u5065\u5EB7\u68C0\u67E5\uFF0C\u5305\u62EC\u5E38\u89C1\u7684\u5404\u79CD\u68C0\u67E5\u65B9\u5F0F\u3002vrrp\u6A21\u5757\u662F\u6765\u5B9E\u73B0VRRP\u534F\u8BAE\u7684\u3002</p><h3 id="\u7A0B\u5E8F\u73AF\u5883" tabindex="-1">\u7A0B\u5E8F\u73AF\u5883 <a class="header-anchor" href="#\u7A0B\u5E8F\u73AF\u5883" aria-hidden="true">#</a></h3><p>\u8981\u6C42\u4E3B\u673A\u7F51\u5361\u9700\u652F\u6301\u591A\u64AD\u7EC4\u64AD\u529F\u80FD\uFF0C\u5373<code>MULTILCAST</code></p><ul><li>\u4E3B\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/etc/keepalived/keepalived.conf</code></li><li>\u4E3B\u7A0B\u5E8F\u6587\u4EF6\uFF1A<code>/usr/sbin/keepalived</code></li><li>Unit File\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/etc/sysconfig/keepalived</code></li><li>keepalived \u542F\u52A8\u540E\u4F1A\u6709\u4E09\u4E2A\u8FDB\u7A0B\uFF1A <ul><li>\u7236\u8FDB\u7A0B\uFF1A\u5185\u5B58\u7BA1\u7406\uFF0C\u5B50\u8FDB\u7A0B\u7BA1\u7406\u7B49\u7B49</li><li>\u5B50\u8FDB\u7A0B\uFF1AVRRP\u5B50\u8FDB\u7A0B</li><li>\u5B50\u8FDB\u7A0B\uFF1Ahealthchecker\u5B50\u8FDB\u7A0B</li></ul></li></ul><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>keepalived\u914D\u7F6E\u6587\u4EF6\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF0C\u5206\u522B\u662F\uFF1A<code>\u5168\u5C40\u914D\u7F6EGLOBAL CONFIGURATION </code>\u3001<code>VRRPD\u914D\u7F6E VRRPD CONFIGURATION</code>\u3001\u548C<code>LVS\u914D\u7F6ELVS CONFIGURATION</code>.</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Configuration File </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">global_defs </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  notification_email </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    acassen@firewall.loc</span></span>
<span class="line"><span style="color:#DBD7CA;">    failover@firewall.loc</span></span>
<span class="line"><span style="color:#DBD7CA;">    sysadmin@firewall.loc 		</span><span style="color:#758575;"># \u90AE\u4EF6\u62A5\u8B66\uFF0C\u53EF\u4EE5\u4E0D\u8BBE\u7F6E\uFF0C\u540E\u671Fnagios\u7EDF\u4E00\u76D1\u63A7\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_server 192.168.200.1</span></span>
<span class="line"><span style="color:#DBD7CA;">  smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#DBD7CA;">  router_id LVS_DEVEL  		</span><span style="color:#758575;"># \u6B64\u5904\u6CE8\u610Frouter_id\u4E3A\u8D1F\u8F7D\u5747\u8861\u6807\u8BC6\uFF0C\u5728\u5C40\u57DF\u7F51\u5185\u5E94\u8BE5\u662F\u552F\u4E00\u7684\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">  vrrp_skip_check_adv_addr</span></span>
<span class="line"><span style="color:#DBD7CA;">  vrrp_strict</span></span>
<span class="line"><span style="color:#DBD7CA;">  vrrp_garp_interval 0</span></span>
<span class="line"><span style="color:#DBD7CA;">  vrrp_gna_interval 0</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  +++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># VRRP\u5B9E\u4F8B\u5B9A\u4E49\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    state MASTER 		</span><span style="color:#758575;"># \u72B6\u6001\u53EA\u6709MASTER\u548CBACKUP\u4E24\u79CD\uFF0C\u5E76\u4E14\u8981\u5927\u5199\uFF0CMASTER\u4E3A\u5DE5\u4F5C\u72B6\u6001\uFF0CBACKUP\u662F\u5907\u7528\u72B6\u6001\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface eth0</span></span>
<span class="line"><span style="color:#DBD7CA;">        lvs_sync_daemon_inteface eth0  		</span><span style="color:#758575;"># \u8FD9\u4E2A\u9ED8\u8BA4\u6CA1\u6709\uFF0C\u76F8\u5F53\u4E8E\u5FC3\u8DF3\u7EBF\u63A5\u53E3\uFF0CDR\u6A21\u5F0F\u7528\u7684\u548C\u4E0A\u9762\u7684\u63A5\u53E3\u4E00\u6837\uFF0C\u4E5F\u53EF\u4EE5\u7528\u673A\u5668\u4E0A\u7684\u5176\u4ED6\u7F51\u5361eth1\uFF0C\u7528\u6765\u9632\u6B62\u8111\u88C2\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51 		</span><span style="color:#758575;"># \u865A\u62DF\u8DEF\u7531\u6807\u8BC6\uFF0C\u540C\u4E00\u4E2Avrrp_instance\u7684MASTER\u548CBACKUP\u7684vitrual_router_id \u662F\u4E00\u81F4\u7684\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 100  		</span><span style="color:#758575;"># \u4F18\u5148\u7EA7\uFF0C\u540C\u4E00\u4E2Avrrp_instance\u7684MASTER\u4F18\u5148\u7EA7\u5FC5\u987B\u6BD4BACKUP\u9AD8\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1 		</span><span style="color:#758575;"># MASTER \u4E0EBACKUP \u8D1F\u8F7D\u5747\u8861\u5668\u4E4B\u95F4\u540C\u6B65\u68C0\u67E5\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS  		</span><span style="color:#758575;"># \u9A8C\u8BC1authentication\u3002\u5305\u542B\u9A8C\u8BC1\u7C7B\u578B\u548C\u9A8C\u8BC1\u5BC6\u7801\u3002\u7C7B\u578B\u4E3B\u8981\u6709PASS\u3001AH \u4E24\u79CD\uFF0C\u901A\u5E38\u4F7F\u7528\u7684\u7C7B\u578B\u4E3APASS\uFF0C\\</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_pass 1111  \u636E\u8BF4AH \u4F7F\u7528\u65F6\u6709\u95EE\u9898\u3002\u9A8C\u8BC1\u5BC6\u7801\u4E3A\u660E\u6587\uFF0C\u540C\u4E00vrrp \u5B9E\u4F8BMASTER \u4E0EBACKUP \u4F7F\u7528\u76F8\u540C\u7684\u5BC6\u7801\u624D\u80FD\u6B63\u5E38\u901A\u4FE1\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> 		</span><span style="color:#758575;"># \u865A\u62DFip\u5730\u5740,\u53EF\u4EE5\u6709\u591A\u4E2A\u5730\u5740\uFF0C\u6BCF\u4E2A\u5730\u5740\u5360\u4E00\u884C\uFF0C\u4E0D\u9700\u8981\u5B50\u7F51\u63A9\u7801\uFF0C\u540C\u65F6\u8FD9\u4E2Aip \u5FC5\u987B\u4E0E\u6211\u4EEC\u5728lvs \u5BA2\u6237\u7AEF\u8BBE\u5B9A\u7684vip \u76F8\u4E00\u81F4\uFF01</span></span>
<span class="line"><span style="color:#DBD7CA;">        192.168.200.100</span></span>
<span class="line"><span style="color:#DBD7CA;">        192.168.200.101</span></span>
<span class="line"><span style="color:#DBD7CA;">        192.168.200.102</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  ++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#758575;"># \u865A\u62DF\u670D\u52A1\u5668\u5B9A\u4E49\u5757</span></span>
<span class="line"><span style="color:#DBD7CA;">virtual_server 192.168.200.100 443 </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">  		</span><span style="color:#758575;"># \u865A\u62DFIP\uFF0C\u6765\u6E90\u4E0E\u4E0A\u9762\u7684\u865A\u62DFIP\u5730\u5740\uFF0C\u540E\u9762\u52A0\u7A7A\u683C\u52A0\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#DBD7CA;">    delay_loop 6  		</span><span style="color:#758575;"># \u5065\u5EB7\u68C0\u67E5\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2</span></span>
<span class="line"><span style="color:#DBD7CA;">    lb_algo rr    		</span><span style="color:#758575;"># \u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5\uFF0C\u4E00\u822C\u7528wrr\u3001rr\u3001wlc</span></span>
<span class="line"><span style="color:#DBD7CA;">    lb_kind NAT  		</span><span style="color:#758575;"># \u8D1F\u8F7D\u5747\u8861\u8F6C\u53D1\u89C4\u5219\u3002\u4E00\u822C\u5305\u62ECDR,NAT,TUN 3\u79CD\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    persistence_timeout 50 		</span><span style="color:#758575;"># \u4F1A\u8BDD\u4FDD\u6301\u65F6\u95F4\uFF0C\u4F1A\u8BDD\u4FDD\u6301\uFF0C\u5C31\u662F\u628A\u7528\u6237\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u540C\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u4E0D\u7136\u521A\u57281\u4E0A\u63D0\u4EA4\u5B8C\u5E10\u53F7\u5BC6\u7801\uFF0C\u5C31\u8DF3\u8F6C\u5230\u53E6\u4E00\u53F0\u670D\u52A1\u56682\u4E0A\u4E86\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    protocol TCP  		</span><span style="color:#758575;"># \u8F6C\u53D1\u534F\u8BAE\uFF0C\u6709TCP\u548CUDP\u4E24\u79CD\uFF0C\u4E00\u822C\u7528TCP\uFF0C\u6CA1\u7528\u8FC7UDP\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    real_server 192.168.201.100 80 </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> 		</span><span style="color:#758575;"># \u771F\u5B9E\u670D\u52A1\u5668\uFF0C\u5305\u62ECIP\u548C\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#DBD7CA;">        weight 1  		</span><span style="color:#758575;"># \u6743\u91CD\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6743\u91CD\u8D8A\u9AD8</span></span>
<span class="line"><span style="color:#DBD7CA;">        TCP_CHECK </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">  		</span><span style="color:#758575;"># \u901A\u8FC7tcpcheck\u5224\u65ADRealServer\u7684\u5065\u5EB7\u72B6\u6001</span></span>
<span class="line"><span style="color:#DBD7CA;">            connect_timeout 3 		</span><span style="color:#758575;"># \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">            nb_get_retry 3 		</span><span style="color:#758575;"># \u91CD\u8FDE\u6B21\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">            delay_before_retry 3 		</span><span style="color:#758575;"># \u91CD\u8FDE\u65F6\u95F4\u95F4\u9694</span></span>
<span class="line"><span style="color:#DBD7CA;">            connect_port 80  		</span><span style="color:#758575;"># \u68C0\u6D4B\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">!</span><span style="color:#393A34;"> Configuration File </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">global_defs </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  notification_email </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    acassen@firewall.loc</span></span>
<span class="line"><span style="color:#393A34;">    failover@firewall.loc</span></span>
<span class="line"><span style="color:#393A34;">    sysadmin@firewall.loc 		</span><span style="color:#A0ADA0;"># \u90AE\u4EF6\u62A5\u8B66\uFF0C\u53EF\u4EE5\u4E0D\u8BBE\u7F6E\uFF0C\u540E\u671Fnagios\u7EDF\u4E00\u76D1\u63A7\u3002</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#393A34;">  smtp_server 192.168.200.1</span></span>
<span class="line"><span style="color:#393A34;">  smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#393A34;">  router_id LVS_DEVEL  		</span><span style="color:#A0ADA0;"># \u6B64\u5904\u6CE8\u610Frouter_id\u4E3A\u8D1F\u8F7D\u5747\u8861\u6807\u8BC6\uFF0C\u5728\u5C40\u57DF\u7F51\u5185\u5E94\u8BE5\u662F\u552F\u4E00\u7684\u3002</span></span>
<span class="line"><span style="color:#393A34;">  vrrp_skip_check_adv_addr</span></span>
<span class="line"><span style="color:#393A34;">  vrrp_strict</span></span>
<span class="line"><span style="color:#393A34;">  vrrp_garp_interval 0</span></span>
<span class="line"><span style="color:#393A34;">  vrrp_gna_interval 0</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  +++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># VRRP\u5B9E\u4F8B\u5B9A\u4E49\u5757</span></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    state MASTER 		</span><span style="color:#A0ADA0;"># \u72B6\u6001\u53EA\u6709MASTER\u548CBACKUP\u4E24\u79CD\uFF0C\u5E76\u4E14\u8981\u5927\u5199\uFF0CMASTER\u4E3A\u5DE5\u4F5C\u72B6\u6001\uFF0CBACKUP\u662F\u5907\u7528\u72B6\u6001\u3002</span></span>
<span class="line"><span style="color:#393A34;">    interface eth0</span></span>
<span class="line"><span style="color:#393A34;">        lvs_sync_daemon_inteface eth0  		</span><span style="color:#A0ADA0;"># \u8FD9\u4E2A\u9ED8\u8BA4\u6CA1\u6709\uFF0C\u76F8\u5F53\u4E8E\u5FC3\u8DF3\u7EBF\u63A5\u53E3\uFF0CDR\u6A21\u5F0F\u7528\u7684\u548C\u4E0A\u9762\u7684\u63A5\u53E3\u4E00\u6837\uFF0C\u4E5F\u53EF\u4EE5\u7528\u673A\u5668\u4E0A\u7684\u5176\u4ED6\u7F51\u5361eth1\uFF0C\u7528\u6765\u9632\u6B62\u8111\u88C2\u3002</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 51 		</span><span style="color:#A0ADA0;"># \u865A\u62DF\u8DEF\u7531\u6807\u8BC6\uFF0C\u540C\u4E00\u4E2Avrrp_instance\u7684MASTER\u548CBACKUP\u7684vitrual_router_id \u662F\u4E00\u81F4\u7684\u3002</span></span>
<span class="line"><span style="color:#393A34;">    priority 100  		</span><span style="color:#A0ADA0;"># \u4F18\u5148\u7EA7\uFF0C\u540C\u4E00\u4E2Avrrp_instance\u7684MASTER\u4F18\u5148\u7EA7\u5FC5\u987B\u6BD4BACKUP\u9AD8\u3002</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1 		</span><span style="color:#A0ADA0;"># MASTER \u4E0EBACKUP \u8D1F\u8F7D\u5747\u8861\u5668\u4E4B\u95F4\u540C\u6B65\u68C0\u67E5\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS  		</span><span style="color:#A0ADA0;"># \u9A8C\u8BC1authentication\u3002\u5305\u542B\u9A8C\u8BC1\u7C7B\u578B\u548C\u9A8C\u8BC1\u5BC6\u7801\u3002\u7C7B\u578B\u4E3B\u8981\u6709PASS\u3001AH \u4E24\u79CD\uFF0C\u901A\u5E38\u4F7F\u7528\u7684\u7C7B\u578B\u4E3APASS\uFF0C\\</span></span>
<span class="line"><span style="color:#393A34;">        auth_pass 1111  \u636E\u8BF4AH \u4F7F\u7528\u65F6\u6709\u95EE\u9898\u3002\u9A8C\u8BC1\u5BC6\u7801\u4E3A\u660E\u6587\uFF0C\u540C\u4E00vrrp \u5B9E\u4F8BMASTER \u4E0EBACKUP \u4F7F\u7528\u76F8\u540C\u7684\u5BC6\u7801\u624D\u80FD\u6B63\u5E38\u901A\u4FE1\u3002</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> 		</span><span style="color:#A0ADA0;"># \u865A\u62DFip\u5730\u5740,\u53EF\u4EE5\u6709\u591A\u4E2A\u5730\u5740\uFF0C\u6BCF\u4E2A\u5730\u5740\u5360\u4E00\u884C\uFF0C\u4E0D\u9700\u8981\u5B50\u7F51\u63A9\u7801\uFF0C\u540C\u65F6\u8FD9\u4E2Aip \u5FC5\u987B\u4E0E\u6211\u4EEC\u5728lvs \u5BA2\u6237\u7AEF\u8BBE\u5B9A\u7684vip \u76F8\u4E00\u81F4\uFF01</span></span>
<span class="line"><span style="color:#393A34;">        192.168.200.100</span></span>
<span class="line"><span style="color:#393A34;">        192.168.200.101</span></span>
<span class="line"><span style="color:#393A34;">        192.168.200.102</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  ++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#A0ADA0;"># \u865A\u62DF\u670D\u52A1\u5668\u5B9A\u4E49\u5757</span></span>
<span class="line"><span style="color:#393A34;">virtual_server 192.168.200.100 443 </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">  		</span><span style="color:#A0ADA0;"># \u865A\u62DFIP\uFF0C\u6765\u6E90\u4E0E\u4E0A\u9762\u7684\u865A\u62DFIP\u5730\u5740\uFF0C\u540E\u9762\u52A0\u7A7A\u683C\u52A0\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#393A34;">    delay_loop 6  		</span><span style="color:#A0ADA0;"># \u5065\u5EB7\u68C0\u67E5\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2</span></span>
<span class="line"><span style="color:#393A34;">    lb_algo rr    		</span><span style="color:#A0ADA0;"># \u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u7B97\u6CD5\uFF0C\u4E00\u822C\u7528wrr\u3001rr\u3001wlc</span></span>
<span class="line"><span style="color:#393A34;">    lb_kind NAT  		</span><span style="color:#A0ADA0;"># \u8D1F\u8F7D\u5747\u8861\u8F6C\u53D1\u89C4\u5219\u3002\u4E00\u822C\u5305\u62ECDR,NAT,TUN 3\u79CD\u3002</span></span>
<span class="line"><span style="color:#393A34;">    persistence_timeout 50 		</span><span style="color:#A0ADA0;"># \u4F1A\u8BDD\u4FDD\u6301\u65F6\u95F4\uFF0C\u4F1A\u8BDD\u4FDD\u6301\uFF0C\u5C31\u662F\u628A\u7528\u6237\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u540C\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u4E0D\u7136\u521A\u57281\u4E0A\u63D0\u4EA4\u5B8C\u5E10\u53F7\u5BC6\u7801\uFF0C\u5C31\u8DF3\u8F6C\u5230\u53E6\u4E00\u53F0\u670D\u52A1\u56682\u4E0A\u4E86\u3002</span></span>
<span class="line"><span style="color:#393A34;">    protocol TCP  		</span><span style="color:#A0ADA0;"># \u8F6C\u53D1\u534F\u8BAE\uFF0C\u6709TCP\u548CUDP\u4E24\u79CD\uFF0C\u4E00\u822C\u7528TCP\uFF0C\u6CA1\u7528\u8FC7UDP\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    real_server 192.168.201.100 80 </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> 		</span><span style="color:#A0ADA0;"># \u771F\u5B9E\u670D\u52A1\u5668\uFF0C\u5305\u62ECIP\u548C\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#393A34;">        weight 1  		</span><span style="color:#A0ADA0;"># \u6743\u91CD\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6743\u91CD\u8D8A\u9AD8</span></span>
<span class="line"><span style="color:#393A34;">        TCP_CHECK </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">  		</span><span style="color:#A0ADA0;"># \u901A\u8FC7tcpcheck\u5224\u65ADRealServer\u7684\u5065\u5EB7\u72B6\u6001</span></span>
<span class="line"><span style="color:#393A34;">            connect_timeout 3 		</span><span style="color:#A0ADA0;"># \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">            nb_get_retry 3 		</span><span style="color:#A0ADA0;"># \u91CD\u8FDE\u6B21\u6570</span></span>
<span class="line"><span style="color:#393A34;">            delay_before_retry 3 		</span><span style="color:#A0ADA0;"># \u91CD\u8FDE\u65F6\u95F4\u95F4\u9694</span></span>
<span class="line"><span style="color:#393A34;">            connect_port 80  		</span><span style="color:#A0ADA0;"># \u68C0\u6D4B\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u793A\u4F8B\u914D\u7F6E\u4FE1\u606F1\uFF08\u53CC\u673A\u70ED\u5907\uFF09\uFF1A</strong></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Configuration File </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">global_defs </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   notification_email </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        root@localhost</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">   notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#DBD7CA;">   smtp_server 127.0.0.1</span></span>
<span class="line"><span style="color:#DBD7CA;">   smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#DBD7CA;">   router_id master			</span><span style="color:#758575;"># \u5907\u7528\u8282\u70B9\u6539\u4E3Anode01</span></span>
<span class="line"><span style="color:#DBD7CA;">   vrrp_mcast_group4  224.1.100.33</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    state MASTER		</span><span style="color:#758575;"># \u5907\u7528\u8282\u70B9\u6539\u4E3ABACKUP	</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 100			</span><span style="color:#758575;"># \u5907\u7528\u8282\u70B9\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        172.16.1.99 dev ens33 label ens33:0</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_2 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    state BACKUP		</span><span style="color:#758575;"># \u4E3B\u8282\u70B9\u6539\u4E3ABACKUP	</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 52</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 97			</span><span style="color:#758575;"># \u4E3B\u8282\u70B9\u5347\u9AD8\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        172.16.1.100 dev ens33 label ens33:0</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">!</span><span style="color:#393A34;"> Configuration File </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">global_defs </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   notification_email </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        root@localhost</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">   notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#393A34;">   smtp_server 127.0.0.1</span></span>
<span class="line"><span style="color:#393A34;">   smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#393A34;">   router_id master			</span><span style="color:#A0ADA0;"># \u5907\u7528\u8282\u70B9\u6539\u4E3Anode01</span></span>
<span class="line"><span style="color:#393A34;">   vrrp_mcast_group4  224.1.100.33</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    state MASTER		</span><span style="color:#A0ADA0;"># \u5907\u7528\u8282\u70B9\u6539\u4E3ABACKUP	</span></span>
<span class="line"><span style="color:#393A34;">    interface ens33</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#393A34;">    priority 100			</span><span style="color:#A0ADA0;"># \u5907\u7528\u8282\u70B9\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS</span></span>
<span class="line"><span style="color:#393A34;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        172.16.1.99 dev ens33 label ens33:0</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_2 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    state BACKUP		</span><span style="color:#A0ADA0;"># \u4E3B\u8282\u70B9\u6539\u4E3ABACKUP	</span></span>
<span class="line"><span style="color:#393A34;">    interface ens33</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 52</span></span>
<span class="line"><span style="color:#393A34;">    priority 97			</span><span style="color:#A0ADA0;"># \u4E3B\u8282\u70B9\u5347\u9AD8\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS</span></span>
<span class="line"><span style="color:#393A34;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        172.16.1.100 dev ens33 label ens33:0</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u793A\u4F8B\u914D\u7F6E\u4FE1\u606F2\uFF08\u8C03\u7528\u81EA\u5B9A\u4E49\u811A\u672C\uFF09\uFF1A</strong></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u811A\u672C\u5185\u5BB9\uFF1A\u5F53\u4E3B\u673A\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1\u90AE\u4EF6\u63D0\u9192</span></span>
<span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">contact=</span><span style="color:#C98A7D;">&#39;agou-ops@foxmail.com&#39;</span></span>
<span class="line"><span style="color:#A1B567;">notify</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">mailsubject=</span><span style="color:#C98A7D;">&quot;$(hostname) to be </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">1, vip floating&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">mailbody=</span><span style="color:#C98A7D;">&quot;$(date +&#39;%F %T&#39;): vrrp transition, $(hostname) changed to be </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">1&quot;</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">mailbody&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> mail -s </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">mailsubject&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">contact</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">case</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">1</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">in</span></span>
<span class="line"><span style="color:#DBD7CA;">master</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">notify master</span></span>
<span class="line"><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">backup</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">notify backup</span></span>
<span class="line"><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">fault</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">notify fault</span></span>
<span class="line"><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Usage: $(basename </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">0) {master|backup|fault}&quot;</span></span>
<span class="line"><span style="color:#E0A569;">exit</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#4D9375;">esac</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u914D\u7F6E\u6587\u4EF6keepalived.conf\u5185\u5BB9</span></span>
<span class="line"><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Configuration File </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">global_defs </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   notification_email </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        agou-ops@foxmail.com</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">   notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#DBD7CA;">   smtp_server 127.0.0.1</span></span>
<span class="line"><span style="color:#DBD7CA;">   smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#DBD7CA;">   router_id master</span></span>
<span class="line"><span style="color:#DBD7CA;">   vrrp_mcast_group4  224.1.111.1</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    state BACKUP</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 98</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        172.16.1.99 dev ens33 label ens33:0</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    notify_master </span><span style="color:#C98A7D;">&quot;/root/notify.sh master&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    notify_backup </span><span style="color:#C98A7D;">&quot;/root/notify.sh backup&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    notify_fault </span><span style="color:#C98A7D;">&quot;/root/notify.sh fault&quot;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># mail.rc\u5185\u5BB9</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> from=ictw@qq.com  </span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> smtp=smtp.qq.com </span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> smtp-auth-user=ictw@qq.com  </span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> smtp-auth-password=qitvvrcfidxxxxxxx</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> smtp-auth=login</span></span>
<span class="line"><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> ssl-verify=ignore</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u811A\u672C\u5185\u5BB9\uFF1A\u5F53\u4E3B\u673A\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1\u90AE\u4EF6\u63D0\u9192</span></span>
<span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">contact=</span><span style="color:#B56959;">&#39;agou-ops@foxmail.com&#39;</span></span>
<span class="line"><span style="color:#6C7834;">notify</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">mailsubject=</span><span style="color:#B56959;">&quot;$(hostname) to be </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">1, vip floating&quot;</span></span>
<span class="line"><span style="color:#393A34;">mailbody=</span><span style="color:#B56959;">&quot;$(date +&#39;%F %T&#39;): vrrp transition, $(hostname) changed to be </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">1&quot;</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">mailbody&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> mail -s </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">mailsubject&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">contact</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">case</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">1</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">in</span></span>
<span class="line"><span style="color:#393A34;">master</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">notify master</span></span>
<span class="line"><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">backup</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">notify backup</span></span>
<span class="line"><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">fault</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">notify fault</span></span>
<span class="line"><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Usage: $(basename </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">0) {master|backup|fault}&quot;</span></span>
<span class="line"><span style="color:#B58451;">exit</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#1C6B48;">esac</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u914D\u7F6E\u6587\u4EF6keepalived.conf\u5185\u5BB9</span></span>
<span class="line"><span style="color:#AB5959;">!</span><span style="color:#393A34;"> Configuration File </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">global_defs </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   notification_email </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        agou-ops@foxmail.com</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">   notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#393A34;">   smtp_server 127.0.0.1</span></span>
<span class="line"><span style="color:#393A34;">   smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#393A34;">   router_id master</span></span>
<span class="line"><span style="color:#393A34;">   vrrp_mcast_group4  224.1.111.1</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    state BACKUP</span></span>
<span class="line"><span style="color:#393A34;">    interface ens33</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#393A34;">    priority 98</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS</span></span>
<span class="line"><span style="color:#393A34;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        172.16.1.99 dev ens33 label ens33:0</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    notify_master </span><span style="color:#B56959;">&quot;/root/notify.sh master&quot;</span></span>
<span class="line"><span style="color:#393A34;">    notify_backup </span><span style="color:#B56959;">&quot;/root/notify.sh backup&quot;</span></span>
<span class="line"><span style="color:#393A34;">    notify_fault </span><span style="color:#B56959;">&quot;/root/notify.sh fault&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># mail.rc\u5185\u5BB9</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> from=ictw@qq.com  </span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> smtp=smtp.qq.com </span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> smtp-auth-user=ictw@qq.com  </span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> smtp-auth-password=qitvvrcfidxxxxxxx</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> smtp-auth=login</span></span>
<span class="line"><span style="color:#B58451;">set</span><span style="color:#393A34;"> ssl-verify=ignore</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h3><p>\u53C2\u8003\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Configuration File </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> keepalived     </span><span style="color:#758575;">#\u5168\u5C40\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">global_defs </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">notification_email </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">     </span><span style="color:#758575;">#\u6307\u5B9Akeepalived\u5728\u53D1\u751F\u4E8B\u4EF6\u65F6(\u6BD4\u5982\u5207\u6362)\u53D1\u9001\u901A\u77E5\u90AE\u4EF6\u7684\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#DBD7CA;">ops@wangshibo.cn   </span><span style="color:#758575;">#\u8BBE\u7F6E\u62A5\u8B66\u90AE\u4EF6\u5730\u5740\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A\uFF0C\u6BCF\u884C\u4E00\u4E2A\u3002 \u9700\u5F00\u542F\u672C\u673A\u7684sendmail\u670D\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">tech@wangshibo.cn</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">notification_email_from ops@wangshibo.cn   </span><span style="color:#758575;">#keepalived\u5728\u53D1\u751F\u8BF8\u5982\u5207\u6362\u64CD\u4F5C\u65F6\u9700\u8981\u53D1\u9001email\u901A\u77E5\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">smtp_server 127.0.0.1      </span><span style="color:#758575;">#\u6307\u5B9A\u53D1\u9001email\u7684smtp\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#DBD7CA;">smtp_connect_timeout 30    </span><span style="color:#758575;">#\u8BBE\u7F6E\u8FDE\u63A5smtp server\u7684\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#DBD7CA;">router_id master-node     </span><span style="color:#758575;">#\u8FD0\u884Ckeepalived\u7684\u673A\u5668\u7684\u4E00\u4E2A\u6807\u8BC6\uFF0C\u901A\u5E38\u53EF\u8BBE\u4E3Ahostname\u3002\u6545\u969C\u53D1\u751F\u65F6\uFF0C\u53D1\u90AE\u4EF6\u65F6\u663E\u793A\u5728\u90AE\u4EF6\u4E3B\u9898\u4E2D\u7684\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_script chk_http_port </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;">#\u68C0\u6D4Bnginx\u670D\u52A1\u662F\u5426\u5728\u8FD0\u884C\u3002\u6709\u5F88\u591A\u65B9\u5F0F\uFF0C\u6BD4\u5982\u8FDB\u7A0B\uFF0C\u7528\u811A\u672C\u68C0\u6D4B\u7B49\u7B49</span></span>
<span class="line"><span style="color:#DBD7CA;">    script </span><span style="color:#C98A7D;">&quot;/opt/chk_nginx.sh&quot;</span><span style="color:#DBD7CA;">   </span><span style="color:#758575;">#\u8FD9\u91CC\u901A\u8FC7\u811A\u672C\u76D1\u6D4B</span></span>
<span class="line"><span style="color:#DBD7CA;">    interval 2                   </span><span style="color:#758575;">#\u811A\u672C\u6267\u884C\u95F4\u9694\uFF0C\u6BCF2s\u68C0\u6D4B\u4E00\u6B21</span></span>
<span class="line"><span style="color:#DBD7CA;">    weight -5                    </span><span style="color:#758575;">#\u811A\u672C\u7ED3\u679C\u5BFC\u81F4\u7684\u4F18\u5148\u7EA7\u53D8\u66F4\uFF0C\u68C0\u6D4B\u5931\u8D25\uFF08\u811A\u672C\u8FD4\u56DE\u975E0\uFF09\u5219\u4F18\u5148\u7EA7 -5</span></span>
<span class="line"><span style="color:#DBD7CA;">    fall 2                    </span><span style="color:#758575;">#\u68C0\u6D4B\u8FDE\u7EED2\u6B21\u5931\u8D25\u624D\u7B97\u786E\u5B9A\u662F\u771F\u5931\u8D25\u3002\u4F1A\u7528weight\u51CF\u5C11\u4F18\u5148\u7EA7\uFF081-255\u4E4B\u95F4\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">    rise 1                    </span><span style="color:#758575;">#\u68C0\u6D4B1\u6B21\u6210\u529F\u5C31\u7B97\u6210\u529F\u3002\u4F46\u4E0D\u4FEE\u6539\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_1 </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#keepalived\u5728\u540C\u4E00virtual_router_id\u4E2Dpriority\uFF080-255\uFF09\u6700\u5927\u7684\u4F1A\u6210\u4E3Amaster\uFF0C\u4E5F\u5C31\u662F\u63A5\u7BA1VIP\uFF0C\u5F53priority\u6700\u5927\u7684\u4E3B\u673A\u53D1\u751F\u6545\u969C\u540E\u6B21priority\u5C06\u4F1A\u63A5\u7BA1</span></span>
<span class="line"><span style="color:#DBD7CA;">    state MASTER    </span><span style="color:#758575;">#\u6307\u5B9Akeepalived\u7684\u89D2\u8272\uFF0CMASTER\u8868\u793A\u6B64\u4E3B\u673A\u662F\u4E3B\u670D\u52A1\u5668\uFF0CBACKUP\u8868\u793A\u6B64\u4E3B\u673A\u662F\u5907\u7528\u670D\u52A1\u5668\u3002\u6CE8\u610F\u8FD9\u91CC\u7684state\u6307\u5B9Ainstance(Initial)\u7684\u521D\u59CB\u72B6\u6001\uFF0C\u5C31\u662F\u8BF4\u5728\u914D\u7F6E\u597D\u540E\uFF0C\u8FD9\u53F0\u670D\u52A1\u5668\u7684\u521D\u59CB\u72B6\u6001\u5C31\u662F\u8FD9\u91CC\u6307\u5B9A\u7684\uFF0C\u4F46\u8FD9\u91CC\u6307\u5B9A\u7684\u4E0D\u7B97\uFF0C\u8FD8\u662F\u5F97\u8981\u901A\u8FC7\u7ADE\u9009\u901A\u8FC7\u4F18\u5148\u7EA7\u6765\u786E\u5B9A\u3002\u5982\u679C\u8FD9\u91CC\u8BBE\u7F6E\u4E3AMASTER\uFF0C\u4F46\u5982\u82E5\u4ED6\u7684\u4F18\u5148\u7EA7\u4E0D\u53CA\u53E6\u5916\u4E00\u53F0\uFF0C\u90A3\u4E48\u8FD9\u53F0\u5728\u53D1\u9001\u901A\u544A\u65F6\uFF0C\u4F1A\u53D1\u9001\u81EA\u5DF1\u7684\u4F18\u5148\u7EA7\uFF0C\u53E6\u5916\u4E00\u53F0\u53D1\u73B0\u4F18\u5148\u7EA7\u4E0D\u5982\u81EA\u5DF1\u7684\u9AD8\uFF0C\u90A3\u4E48\u4ED6\u4F1A\u5C31\u56DE\u62A2\u5360\u4E3AMASTER</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface em1          </span><span style="color:#758575;">#\u6307\u5B9AHA\u76D1\u6D4B\u7F51\u7EDC\u7684\u63A5\u53E3\u3002\u5B9E\u4F8B\u7ED1\u5B9A\u7684\u7F51\u5361\uFF0C\u56E0\u4E3A\u5728\u914D\u7F6E\u865A\u62DFIP\u7684\u65F6\u5019\u5FC5\u987B\u662F\u5728\u5DF2\u6709\u7684\u7F51\u5361\u4E0A\u6DFB\u52A0\u7684</span></span>
<span class="line"><span style="color:#DBD7CA;">    mcast_src_ip 103.110.98.14  </span><span style="color:#758575;"># \u53D1\u9001\u591A\u64AD\u6570\u636E\u5305\u65F6\u7684\u6E90IP\u5730\u5740\uFF0C\u8FD9\u91CC\u6CE8\u610F\u4E86\uFF0C\u8FD9\u91CC\u5B9E\u9645\u4E0A\u5C31\u662F\u5728\u54EA\u4E2A\u5730\u5740\u4E0A\u53D1\u9001VRRP\u901A\u544A\uFF0C\u8FD9\u4E2A\u975E\u5E38\u91CD\u8981\uFF0C\u4E00\u5B9A\u8981\u9009\u62E9\u7A33\u5B9A\u7684\u7F51\u5361\u7AEF\u53E3\u6765\u53D1\u9001\uFF0C\u8FD9\u91CC\u76F8\u5F53\u4E8Eheartbeat\u7684\u5FC3\u8DF3\u7AEF\u53E3\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u90A3\u4E48\u5C31\u7528\u9ED8\u8BA4\u7684\u7ED1\u5B9A\u7684\u7F51\u5361\u7684IP\uFF0C\u4E5F\u5C31\u662Finterface\u6307\u5B9A\u7684IP\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51         </span><span style="color:#758575;">#\u865A\u62DF\u8DEF\u7531\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u540C\u4E00\u4E2Avrrp\u5B9E\u4F8B\u4F7F\u7528\u552F\u4E00\u7684\u6807\u8BC6\u3002\u5373\u540C\u4E00vrrp_instance\u4E0B\uFF0CMASTER\u548CBACKUP\u5FC5\u987B\u662F\u4E00\u81F4\u7684</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 101                 </span><span style="color:#758575;">#\u5B9A\u4E49\u4F18\u5148\u7EA7\uFF0C\u6570\u5B57\u8D8A\u5927\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u5728\u540C\u4E00\u4E2Avrrp_instance\u4E0B\uFF0CMASTER\u7684\u4F18\u5148\u7EA7\u5FC5\u987B\u5927\u4E8EBACKUP\u7684\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1                 </span><span style="color:#758575;">#\u8BBE\u5B9AMASTER\u4E0EBACKUP\u8D1F\u8F7D\u5747\u8861\u5668\u4E4B\u95F4\u540C\u6B65\u68C0\u67E5\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u662F\u79D2</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">             </span><span style="color:#758575;">#\u8BBE\u7F6E\u9A8C\u8BC1\u7C7B\u578B\u548C\u5BC6\u7801\u3002\u4E3B\u4ECE\u5FC5\u987B\u4E00\u6837</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS           </span><span style="color:#758575;">#\u8BBE\u7F6Evrrp\u9A8C\u8BC1\u7C7B\u578B\uFF0C\u4E3B\u8981\u6709PASS\u548CAH\u4E24\u79CD</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_pass 1111           </span><span style="color:#758575;">#\u8BBE\u7F6Evrrp\u9A8C\u8BC1\u5BC6\u7801\uFF0C\u5728\u540C\u4E00\u4E2Avrrp_instance\u4E0B\uFF0CMASTER\u4E0EBACKUP\u5FC5\u987B\u4F7F\u7528\u76F8\u540C\u7684\u5BC6\u7801\u624D\u80FD\u6B63\u5E38\u901A\u4FE1</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">          </span><span style="color:#758575;">#VRRP HA \u865A\u62DF\u5730\u5740 \u5982\u679C\u6709\u591A\u4E2AVIP\uFF0C\u7EE7\u7EED\u6362\u884C\u586B\u5199</span></span>
<span class="line"><span style="color:#DBD7CA;">        103.110.98.20</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">track_script </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">                      </span><span style="color:#758575;">#\u6267\u884C\u76D1\u63A7\u7684\u670D\u52A1\u3002\u6CE8\u610F\u8FD9\u4E2A\u8BBE\u7F6E\u4E0D\u80FD\u7D27\u6328\u7740\u5199\u5728vrrp_script\u914D\u7F6E\u5757\u7684\u540E\u9762\uFF08\u5B9E\u9A8C\u4E2D\u78B0\u8FC7\u7684\u5751\uFF09\uFF0C\u5426\u5219nginx\u76D1\u63A7\u5931\u6548\uFF01\uFF01</span></span>
<span class="line"><span style="color:#DBD7CA;">   chk_http_port                    </span><span style="color:#758575;">#\u5F15\u7528VRRP\u811A\u672C\uFF0C\u5373\u5728 vrrp_script \u90E8\u5206\u6307\u5B9A\u7684\u540D\u5B57\u3002\u5B9A\u671F\u8FD0\u884C\u5B83\u4EEC\u6765\u6539\u53D8\u4F18\u5148\u7EA7\uFF0C\u5E76\u6700\u7EC8\u5F15\u53D1\u4E3B\u5907\u5207\u6362\u3002</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">!</span><span style="color:#393A34;"> Configuration File </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> keepalived     </span><span style="color:#A0ADA0;">#\u5168\u5C40\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">global_defs </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">notification_email </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">#\u6307\u5B9Akeepalived\u5728\u53D1\u751F\u4E8B\u4EF6\u65F6(\u6BD4\u5982\u5207\u6362)\u53D1\u9001\u901A\u77E5\u90AE\u4EF6\u7684\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#393A34;">ops@wangshibo.cn   </span><span style="color:#A0ADA0;">#\u8BBE\u7F6E\u62A5\u8B66\u90AE\u4EF6\u5730\u5740\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A\uFF0C\u6BCF\u884C\u4E00\u4E2A\u3002 \u9700\u5F00\u542F\u672C\u673A\u7684sendmail\u670D\u52A1</span></span>
<span class="line"><span style="color:#393A34;">tech@wangshibo.cn</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">notification_email_from ops@wangshibo.cn   </span><span style="color:#A0ADA0;">#keepalived\u5728\u53D1\u751F\u8BF8\u5982\u5207\u6362\u64CD\u4F5C\u65F6\u9700\u8981\u53D1\u9001email\u901A\u77E5\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">smtp_server 127.0.0.1      </span><span style="color:#A0ADA0;">#\u6307\u5B9A\u53D1\u9001email\u7684smtp\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#393A34;">smtp_connect_timeout 30    </span><span style="color:#A0ADA0;">#\u8BBE\u7F6E\u8FDE\u63A5smtp server\u7684\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#393A34;">router_id master-node     </span><span style="color:#A0ADA0;">#\u8FD0\u884Ckeepalived\u7684\u673A\u5668\u7684\u4E00\u4E2A\u6807\u8BC6\uFF0C\u901A\u5E38\u53EF\u8BBE\u4E3Ahostname\u3002\u6545\u969C\u53D1\u751F\u65F6\uFF0C\u53D1\u90AE\u4EF6\u65F6\u663E\u793A\u5728\u90AE\u4EF6\u4E3B\u9898\u4E2D\u7684\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">vrrp_script chk_http_port </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">#\u68C0\u6D4Bnginx\u670D\u52A1\u662F\u5426\u5728\u8FD0\u884C\u3002\u6709\u5F88\u591A\u65B9\u5F0F\uFF0C\u6BD4\u5982\u8FDB\u7A0B\uFF0C\u7528\u811A\u672C\u68C0\u6D4B\u7B49\u7B49</span></span>
<span class="line"><span style="color:#393A34;">    script </span><span style="color:#B56959;">&quot;/opt/chk_nginx.sh&quot;</span><span style="color:#393A34;">   </span><span style="color:#A0ADA0;">#\u8FD9\u91CC\u901A\u8FC7\u811A\u672C\u76D1\u6D4B</span></span>
<span class="line"><span style="color:#393A34;">    interval 2                   </span><span style="color:#A0ADA0;">#\u811A\u672C\u6267\u884C\u95F4\u9694\uFF0C\u6BCF2s\u68C0\u6D4B\u4E00\u6B21</span></span>
<span class="line"><span style="color:#393A34;">    weight -5                    </span><span style="color:#A0ADA0;">#\u811A\u672C\u7ED3\u679C\u5BFC\u81F4\u7684\u4F18\u5148\u7EA7\u53D8\u66F4\uFF0C\u68C0\u6D4B\u5931\u8D25\uFF08\u811A\u672C\u8FD4\u56DE\u975E0\uFF09\u5219\u4F18\u5148\u7EA7 -5</span></span>
<span class="line"><span style="color:#393A34;">    fall 2                    </span><span style="color:#A0ADA0;">#\u68C0\u6D4B\u8FDE\u7EED2\u6B21\u5931\u8D25\u624D\u7B97\u786E\u5B9A\u662F\u771F\u5931\u8D25\u3002\u4F1A\u7528weight\u51CF\u5C11\u4F18\u5148\u7EA7\uFF081-255\u4E4B\u95F4\uFF09</span></span>
<span class="line"><span style="color:#393A34;">    rise 1                    </span><span style="color:#A0ADA0;">#\u68C0\u6D4B1\u6B21\u6210\u529F\u5C31\u7B97\u6210\u529F\u3002\u4F46\u4E0D\u4FEE\u6539\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_1 </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#keepalived\u5728\u540C\u4E00virtual_router_id\u4E2Dpriority\uFF080-255\uFF09\u6700\u5927\u7684\u4F1A\u6210\u4E3Amaster\uFF0C\u4E5F\u5C31\u662F\u63A5\u7BA1VIP\uFF0C\u5F53priority\u6700\u5927\u7684\u4E3B\u673A\u53D1\u751F\u6545\u969C\u540E\u6B21priority\u5C06\u4F1A\u63A5\u7BA1</span></span>
<span class="line"><span style="color:#393A34;">    state MASTER    </span><span style="color:#A0ADA0;">#\u6307\u5B9Akeepalived\u7684\u89D2\u8272\uFF0CMASTER\u8868\u793A\u6B64\u4E3B\u673A\u662F\u4E3B\u670D\u52A1\u5668\uFF0CBACKUP\u8868\u793A\u6B64\u4E3B\u673A\u662F\u5907\u7528\u670D\u52A1\u5668\u3002\u6CE8\u610F\u8FD9\u91CC\u7684state\u6307\u5B9Ainstance(Initial)\u7684\u521D\u59CB\u72B6\u6001\uFF0C\u5C31\u662F\u8BF4\u5728\u914D\u7F6E\u597D\u540E\uFF0C\u8FD9\u53F0\u670D\u52A1\u5668\u7684\u521D\u59CB\u72B6\u6001\u5C31\u662F\u8FD9\u91CC\u6307\u5B9A\u7684\uFF0C\u4F46\u8FD9\u91CC\u6307\u5B9A\u7684\u4E0D\u7B97\uFF0C\u8FD8\u662F\u5F97\u8981\u901A\u8FC7\u7ADE\u9009\u901A\u8FC7\u4F18\u5148\u7EA7\u6765\u786E\u5B9A\u3002\u5982\u679C\u8FD9\u91CC\u8BBE\u7F6E\u4E3AMASTER\uFF0C\u4F46\u5982\u82E5\u4ED6\u7684\u4F18\u5148\u7EA7\u4E0D\u53CA\u53E6\u5916\u4E00\u53F0\uFF0C\u90A3\u4E48\u8FD9\u53F0\u5728\u53D1\u9001\u901A\u544A\u65F6\uFF0C\u4F1A\u53D1\u9001\u81EA\u5DF1\u7684\u4F18\u5148\u7EA7\uFF0C\u53E6\u5916\u4E00\u53F0\u53D1\u73B0\u4F18\u5148\u7EA7\u4E0D\u5982\u81EA\u5DF1\u7684\u9AD8\uFF0C\u90A3\u4E48\u4ED6\u4F1A\u5C31\u56DE\u62A2\u5360\u4E3AMASTER</span></span>
<span class="line"><span style="color:#393A34;">    interface em1          </span><span style="color:#A0ADA0;">#\u6307\u5B9AHA\u76D1\u6D4B\u7F51\u7EDC\u7684\u63A5\u53E3\u3002\u5B9E\u4F8B\u7ED1\u5B9A\u7684\u7F51\u5361\uFF0C\u56E0\u4E3A\u5728\u914D\u7F6E\u865A\u62DFIP\u7684\u65F6\u5019\u5FC5\u987B\u662F\u5728\u5DF2\u6709\u7684\u7F51\u5361\u4E0A\u6DFB\u52A0\u7684</span></span>
<span class="line"><span style="color:#393A34;">    mcast_src_ip 103.110.98.14  </span><span style="color:#A0ADA0;"># \u53D1\u9001\u591A\u64AD\u6570\u636E\u5305\u65F6\u7684\u6E90IP\u5730\u5740\uFF0C\u8FD9\u91CC\u6CE8\u610F\u4E86\uFF0C\u8FD9\u91CC\u5B9E\u9645\u4E0A\u5C31\u662F\u5728\u54EA\u4E2A\u5730\u5740\u4E0A\u53D1\u9001VRRP\u901A\u544A\uFF0C\u8FD9\u4E2A\u975E\u5E38\u91CD\u8981\uFF0C\u4E00\u5B9A\u8981\u9009\u62E9\u7A33\u5B9A\u7684\u7F51\u5361\u7AEF\u53E3\u6765\u53D1\u9001\uFF0C\u8FD9\u91CC\u76F8\u5F53\u4E8Eheartbeat\u7684\u5FC3\u8DF3\u7AEF\u53E3\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u90A3\u4E48\u5C31\u7528\u9ED8\u8BA4\u7684\u7ED1\u5B9A\u7684\u7F51\u5361\u7684IP\uFF0C\u4E5F\u5C31\u662Finterface\u6307\u5B9A\u7684IP\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 51         </span><span style="color:#A0ADA0;">#\u865A\u62DF\u8DEF\u7531\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u540C\u4E00\u4E2Avrrp\u5B9E\u4F8B\u4F7F\u7528\u552F\u4E00\u7684\u6807\u8BC6\u3002\u5373\u540C\u4E00vrrp_instance\u4E0B\uFF0CMASTER\u548CBACKUP\u5FC5\u987B\u662F\u4E00\u81F4\u7684</span></span>
<span class="line"><span style="color:#393A34;">    priority 101                 </span><span style="color:#A0ADA0;">#\u5B9A\u4E49\u4F18\u5148\u7EA7\uFF0C\u6570\u5B57\u8D8A\u5927\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u5728\u540C\u4E00\u4E2Avrrp_instance\u4E0B\uFF0CMASTER\u7684\u4F18\u5148\u7EA7\u5FC5\u987B\u5927\u4E8EBACKUP\u7684\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1                 </span><span style="color:#A0ADA0;">#\u8BBE\u5B9AMASTER\u4E0EBACKUP\u8D1F\u8F7D\u5747\u8861\u5668\u4E4B\u95F4\u540C\u6B65\u68C0\u67E5\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u662F\u79D2</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">             </span><span style="color:#A0ADA0;">#\u8BBE\u7F6E\u9A8C\u8BC1\u7C7B\u578B\u548C\u5BC6\u7801\u3002\u4E3B\u4ECE\u5FC5\u987B\u4E00\u6837</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS           </span><span style="color:#A0ADA0;">#\u8BBE\u7F6Evrrp\u9A8C\u8BC1\u7C7B\u578B\uFF0C\u4E3B\u8981\u6709PASS\u548CAH\u4E24\u79CD</span></span>
<span class="line"><span style="color:#393A34;">        auth_pass 1111           </span><span style="color:#A0ADA0;">#\u8BBE\u7F6Evrrp\u9A8C\u8BC1\u5BC6\u7801\uFF0C\u5728\u540C\u4E00\u4E2Avrrp_instance\u4E0B\uFF0CMASTER\u4E0EBACKUP\u5FC5\u987B\u4F7F\u7528\u76F8\u540C\u7684\u5BC6\u7801\u624D\u80FD\u6B63\u5E38\u901A\u4FE1</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">          </span><span style="color:#A0ADA0;">#VRRP HA \u865A\u62DF\u5730\u5740 \u5982\u679C\u6709\u591A\u4E2AVIP\uFF0C\u7EE7\u7EED\u6362\u884C\u586B\u5199</span></span>
<span class="line"><span style="color:#393A34;">        103.110.98.20</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">track_script </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">                      </span><span style="color:#A0ADA0;">#\u6267\u884C\u76D1\u63A7\u7684\u670D\u52A1\u3002\u6CE8\u610F\u8FD9\u4E2A\u8BBE\u7F6E\u4E0D\u80FD\u7D27\u6328\u7740\u5199\u5728vrrp_script\u914D\u7F6E\u5757\u7684\u540E\u9762\uFF08\u5B9E\u9A8C\u4E2D\u78B0\u8FC7\u7684\u5751\uFF09\uFF0C\u5426\u5219nginx\u76D1\u63A7\u5931\u6548\uFF01\uFF01</span></span>
<span class="line"><span style="color:#393A34;">   chk_http_port                    </span><span style="color:#A0ADA0;">#\u5F15\u7528VRRP\u811A\u672C\uFF0C\u5373\u5728 vrrp_script \u90E8\u5206\u6307\u5B9A\u7684\u540D\u5B57\u3002\u5B9A\u671F\u8FD0\u884C\u5B83\u4EEC\u6765\u6539\u53D8\u4F18\u5148\u7EA7\uFF0C\u5E76\u6700\u7EC8\u5F15\u53D1\u4E3B\u5907\u5207\u6362\u3002</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div>`,20),o=[e];function t(c,r,i,y,A,D){return n(),a("div",null,o)}var C=s(p,[["render",t]]);export{_ as __pageData,C as default};
