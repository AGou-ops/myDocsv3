import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"Nginx + keepalived","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53CC\u673A\u4E3B\u4ECE\u6A21\u5F0F","slug":"\u53CC\u673A\u4E3B\u4ECE\u6A21\u5F0F"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/LoadBalancer/Keepalived - Nginx/Nginx - keepalived\u5FEB\u901F\u914D\u7F6E\u53CA\u811A\u672C.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/LoadBalancer/Keepalived - Nginx/Nginx - keepalived\u5FEB\u901F\u914D\u7F6E\u53CA\u811A\u672C.md"},o=l(`<h1 id="nginx-keepalived" tabindex="-1">Nginx + keepalived <a class="header-anchor" href="#nginx-keepalived" aria-hidden="true">#</a></h1><h2 id="\u53CC\u673A\u4E3B\u4ECE\u6A21\u5F0F" tabindex="-1">\u53CC\u673A\u4E3B\u4ECE\u6A21\u5F0F <a class="header-anchor" href="#\u53CC\u673A\u4E3B\u4ECE\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Configuration File </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">global_defs </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   notification_email </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        agou-ops@foxmail.com</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">   notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#DBD7CA;">   smtp_server 127.0.0.1</span></span>
<span class="line"><span style="color:#DBD7CA;">   smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#DBD7CA;">   router_id master</span></span>
<span class="line"><span style="color:#DBD7CA;">   vrrp_mcast_group4 224.1.111.11</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_script chk_down </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">          </span><span style="color:#758575;"># \u58F0\u660E\u5B9A\u4E49\u811A\u672C</span></span>
<span class="line"><span style="color:#DBD7CA;">        script </span><span style="color:#C98A7D;">&quot;[[ -f /etc/keepalived/down ]] &amp;&amp; exit 1 || exit 0&quot;</span><span style="color:#DBD7CA;">      </span><span style="color:#758575;"># \u6267\u884C\u811A\u672C\u5185\u5BB9</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span></span>
<span class="line"><span style="color:#DBD7CA;">        weight -10      </span><span style="color:#758575;"># \u5982\u679C\u811A\u672C\u5931\u8D25\u5219\u5C06\u5176\u6743\u91CD\u964D\u4F4E10</span></span>
<span class="line"><span style="color:#DBD7CA;">        interval 1      </span><span style="color:#758575;"># \u68C0\u67E5\u95F4\u9694</span></span>
<span class="line"><span style="color:#DBD7CA;">        fall 1          </span><span style="color:#758575;"># \u5931\u8D25\u6B21\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">        rise 1			</span><span style="color:#758575;"># \u68C0\u6D4B1\u6B21\u6210\u529F\u5C31\u7B97\u6210\u529F</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_script chk_ngx </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        script </span><span style="color:#C98A7D;">&quot;killall -0 nginx &amp;&amp; exit 0 || exit 1&quot;</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;"># script &quot;/root/chk_ngx.sh&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">        weight -10     </span></span>
<span class="line"><span style="color:#DBD7CA;">        interval 1    </span></span>
<span class="line"><span style="color:#DBD7CA;">        fall 3         </span></span>
<span class="line"><span style="color:#DBD7CA;">        rise 2	</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    state MASTER                        </span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u66F4\u6362\u4E3ABACKUP</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    lvs_sync_daemon_inteface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 100                        </span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u9002\u5F53\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        192.168.174.99/32 dev ens33 label ens33:1                       </span><span style="color:#758575;"># LVS VIP\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    track_script </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">          </span><span style="color:#758575;"># \u8C03\u7528\u811A\u672C</span></span>
<span class="line"><span style="color:#DBD7CA;">        chk_down</span></span>
<span class="line"><span style="color:#DBD7CA;">        chk_ngx</span></span>
<span class="line"><span style="color:#DBD7CA;">	</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">     notify_master </span><span style="color:#C98A7D;">&quot;/root/notify.sh master&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    notify_backup </span><span style="color:#C98A7D;">&quot;/root/notify.sh backup&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    notify_fault </span><span style="color:#C98A7D;">&quot;/root/notify.sh fault&quot;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">!</span><span style="color:#393A34;"> Configuration File </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">global_defs </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   notification_email </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        agou-ops@foxmail.com</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">   notification_email_from Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="color:#393A34;">   smtp_server 127.0.0.1</span></span>
<span class="line"><span style="color:#393A34;">   smtp_connect_timeout 30</span></span>
<span class="line"><span style="color:#393A34;">   router_id master</span></span>
<span class="line"><span style="color:#393A34;">   vrrp_mcast_group4 224.1.111.11</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_script chk_down </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">          </span><span style="color:#A0ADA0;"># \u58F0\u660E\u5B9A\u4E49\u811A\u672C</span></span>
<span class="line"><span style="color:#393A34;">        script </span><span style="color:#B56959;">&quot;[[ -f /etc/keepalived/down ]] &amp;&amp; exit 1 || exit 0&quot;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;"># \u6267\u884C\u811A\u672C\u5185\u5BB9</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">        weight -10      </span><span style="color:#A0ADA0;"># \u5982\u679C\u811A\u672C\u5931\u8D25\u5219\u5C06\u5176\u6743\u91CD\u964D\u4F4E10</span></span>
<span class="line"><span style="color:#393A34;">        interval 1      </span><span style="color:#A0ADA0;"># \u68C0\u67E5\u95F4\u9694</span></span>
<span class="line"><span style="color:#393A34;">        fall 1          </span><span style="color:#A0ADA0;"># \u5931\u8D25\u6B21\u6570</span></span>
<span class="line"><span style="color:#393A34;">        rise 1			</span><span style="color:#A0ADA0;"># \u68C0\u6D4B1\u6B21\u6210\u529F\u5C31\u7B97\u6210\u529F</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_script chk_ngx </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        script </span><span style="color:#B56959;">&quot;killall -0 nginx &amp;&amp; exit 0 || exit 1&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;"># script &quot;/root/chk_ngx.sh&quot;</span></span>
<span class="line"><span style="color:#393A34;">        weight -10     </span></span>
<span class="line"><span style="color:#393A34;">        interval 1    </span></span>
<span class="line"><span style="color:#393A34;">        fall 3         </span></span>
<span class="line"><span style="color:#393A34;">        rise 2	</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    state MASTER                        </span><span style="color:#A0ADA0;"># ---\u5907\u7528\u4E3B\u673A\u66F4\u6362\u4E3ABACKUP</span></span>
<span class="line"><span style="color:#393A34;">    interface ens33</span></span>
<span class="line"><span style="color:#393A34;">    lvs_sync_daemon_inteface ens33</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#393A34;">    priority 100                        </span><span style="color:#A0ADA0;"># ---\u5907\u7528\u4E3B\u673A\u9002\u5F53\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS</span></span>
<span class="line"><span style="color:#393A34;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        192.168.174.99/32 dev ens33 label ens33:1                       </span><span style="color:#A0ADA0;"># LVS VIP\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    track_script </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">          </span><span style="color:#A0ADA0;"># \u8C03\u7528\u811A\u672C</span></span>
<span class="line"><span style="color:#393A34;">        chk_down</span></span>
<span class="line"><span style="color:#393A34;">        chk_ngx</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">     notify_master </span><span style="color:#B56959;">&quot;/root/notify.sh master&quot;</span></span>
<span class="line"><span style="color:#393A34;">    notify_backup </span><span style="color:#B56959;">&quot;/root/notify.sh backup&quot;</span></span>
<span class="line"><span style="color:#393A34;">    notify_fault </span><span style="color:#B56959;">&quot;/root/notify.sh fault&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u811A\u672C\u4E00\uFF1A\u901A\u8FC7\u901A\u77E5\u811A\u672C\u5B9E\u73B0\u5F53 keepalived \u8282\u70B9\u53D8\u6210\u4E3B\u8282\u70B9\u65F6\u542F\u7528 nginx, \u53D8\u6210\u5907\u7528\u8282\u70B9\u65F6\u505C\u7528 nginx</p><p><a href="http://notify.sh" target="_blank" rel="noopener noreferrer">notify.sh</a></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">contact=</span><span style="color:#C98A7D;">&#39;agou-ops@foxmail.com&#39;</span></span>
<span class="line"><span style="color:#A1B567;">notify</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">mailsubject=</span><span style="color:#C98A7D;">&quot;$(hostname) to be </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">1, vip floating&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">mailbody=</span><span style="color:#C98A7D;">&quot;$(date +&#39;%F %T&#39;): vrrp transition, $(hostname) changed to be </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">1&quot;</span></span>
<span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">mailbody&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> mail -s </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">mailsubject&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">contact</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">case</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">1</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">in</span></span>
<span class="line"><span style="color:#DBD7CA;">    master</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        systemctl start nginx.service</span></span>
<span class="line"><span style="color:#DBD7CA;">        notify master</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    backup</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        systemctl stop nginx.service</span></span>
<span class="line"><span style="color:#DBD7CA;">        notify backup</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    fault</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        systemctl stop nginx.service</span></span>
<span class="line"><span style="color:#DBD7CA;">        notify fault</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">*</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Usage: $(basename </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">0) {master|backup|fault}&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">exit</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#4D9375;">esac</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">contact=</span><span style="color:#B56959;">&#39;agou-ops@foxmail.com&#39;</span></span>
<span class="line"><span style="color:#6C7834;">notify</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">mailsubject=</span><span style="color:#B56959;">&quot;$(hostname) to be </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">1, vip floating&quot;</span></span>
<span class="line"><span style="color:#393A34;">mailbody=</span><span style="color:#B56959;">&quot;$(date +&#39;%F %T&#39;): vrrp transition, $(hostname) changed to be </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">1&quot;</span></span>
<span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">mailbody&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> mail -s </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">mailsubject&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">contact</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">case</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">1</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">in</span></span>
<span class="line"><span style="color:#393A34;">    master</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">        systemctl start nginx.service</span></span>
<span class="line"><span style="color:#393A34;">        notify master</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    backup</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">        systemctl stop nginx.service</span></span>
<span class="line"><span style="color:#393A34;">        notify backup</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    fault</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">        systemctl stop nginx.service</span></span>
<span class="line"><span style="color:#393A34;">        notify fault</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">*</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Usage: $(basename </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">0) {master|backup|fault}&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">exit</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#1C6B48;">esac</span></span>
<span class="line"></span></code></pre></div><p>\u811A\u672C\u4E8C\uFF1A\u68C0\u6D4B nginx \u8FD0\u884C\u72B6\u6001\uFF0C\u5F53 nginx \u5F02\u5E38\u9000\u51FA\u65F6\u5C1D\u8BD5\u91CD\u65B0\u542F\u52A8\uFF0C\u82E5\u4ECD\u7136\u65E0\u6CD5\u542F\u52A8 nginx\uFF0C\u5219\u5C06\u8BE5\u8282\u70B9\u964D\u4E3A\u5907\u7528\u8282\u70B9(BACKUP)</p><p>chk_ngx.sh</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"><span style="color:#DBD7CA;">counter=</span><span style="color:#C98A7D;">$(ps -C nginx --no-heading</span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;">wc -l)</span></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">counter</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;0&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">then</span></span>
<span class="line"><span style="color:#DBD7CA;">    /usr/local/bin/nginx</span></span>
<span class="line"><span style="color:#DBD7CA;">    sleep 2</span></span>
<span class="line"><span style="color:#DBD7CA;">    counter=</span><span style="color:#C98A7D;">$(ps -C nginx --no-heading</span><span style="color:#CB7676;">|</span><span style="color:#C98A7D;">wc -l)</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">counter</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;0&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">then</span></span>
<span class="line"><span style="color:#DBD7CA;">        /etc/init.d/keepalived stop</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">fi</span></span>
<span class="line"><span style="color:#4D9375;">fi</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"><span style="color:#393A34;">counter=</span><span style="color:#B56959;">$(ps -C nginx --no-heading</span><span style="color:#AB5959;">|</span><span style="color:#B56959;">wc -l)</span></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">counter</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;0&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">then</span></span>
<span class="line"><span style="color:#393A34;">    /usr/local/bin/nginx</span></span>
<span class="line"><span style="color:#393A34;">    sleep 2</span></span>
<span class="line"><span style="color:#393A34;">    counter=</span><span style="color:#B56959;">$(ps -C nginx --no-heading</span><span style="color:#AB5959;">|</span><span style="color:#B56959;">wc -l)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">counter</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;0&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">then</span></span>
<span class="line"><span style="color:#393A34;">        /etc/init.d/keepalived stop</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">fi</span></span>
<span class="line"><span style="color:#1C6B48;">fi</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.driverzeng.com/zenglaoshi/2326.html" target="_blank" rel="noopener noreferrer">https://blog.driverzeng.com/zenglaoshi/2326.html</a></li></ul>`,11),e=[o];function c(t,r,y,i,A,D){return n(),a("div",null,e)}var u=s(p,[["render",c]]);export{C as __pageData,u as default};
