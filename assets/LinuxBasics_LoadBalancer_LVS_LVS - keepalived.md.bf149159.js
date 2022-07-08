import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"LVS + keepalived","description":"","frontmatter":{},"headers":[{"level":2,"title":"LVS-NAT \u6A21\u5F0F","slug":"lvs-nat-\u6A21\u5F0F"},{"level":2,"title":"LVS-DR \u6A21\u5F0F","slug":"lvs-dr-\u6A21\u5F0F"}],"relativePath":"LinuxBasics/LoadBalancer/LVS/LVS - keepalived.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/LoadBalancer/LVS/LVS - keepalived.md"},o=l(`<h1 id="lvs-keepalived" tabindex="-1">LVS + keepalived <a class="header-anchor" href="#lvs-keepalived" aria-hidden="true">#</a></h1><p>[LVS/NAT + keepalived](#LVS-NAT \u6A21\u5F0F) | [LVS/DR + keepalived](#LVS-DR \u6A21\u5F0F)</p><h2 id="lvs-nat-\u6A21\u5F0F" tabindex="-1">LVS-NAT \u6A21\u5F0F <a class="header-anchor" href="#lvs-nat-\u6A21\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u6D4B\u8BD5\u73AF\u5883</li></ol><table><thead><tr><th>\u670D\u52A1\u5668\u7C7B\u578B</th><th>\u516C\u7F51ip</th><th>\u5185\u7F51ip</th></tr></thead><tbody><tr><td><strong>LVS VIP</strong></td><td><strong>172.16.1.99</strong></td><td>192.168.1.2</td></tr><tr><td><strong>Keepalived Master</strong></td><td>172.16.1.134</td><td>192.168.1.131</td></tr><tr><td><strong>Keepalived Backup</strong></td><td>172.16.1.138</td><td>192.168.1.138</td></tr><tr><td><strong>Realserver 1</strong></td><td>\u65E0</td><td>192.168.1.130</td></tr><tr><td><strong>Realserver 2</strong></td><td>\u65E0</td><td>192.168.1.129</td></tr></tbody></table><p>\u26A0\uFE0F<strong>\u6CE8\u610F\uFF1A</strong> MASTER\u548CBACKUP\u4E3B\u673A\u4E0A\u9700\u5F00\u542F<code>net.ipv4.ip_forward</code>\u5185\u6838\u8F6C\u53D1\uFF0C\u5E76\u4E14\u540E\u7AEFRS1\u548CRS2\u7684\u9ED8\u8BA4\u7F51\u5173\u5E94\u6307\u4E3A<code>192.168.1.2</code></p><ol start="2"><li>Keepalived \u5B8C\u6574\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Configuration File </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> keepalived</span></span>
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
<span class="line"><span style="color:#DBD7CA;">vrrp_sync_group VG1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">   group </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      VI_1</span></span>
<span class="line"><span style="color:#DBD7CA;">      VI_GATEWAY</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_1 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    state MASTER			</span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u66F4\u6362\u4E3ABACKUP</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    lvs_sync_daemon_inteface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 100			</span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u9002\u5F53\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS</span></span>
<span class="line"><span style="color:#DBD7CA;">                auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        172.16.1.99			</span><span style="color:#758575;"># LVS VIP\u516C\u7F51IP\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">vrrp_instance VI_GATEWAY </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    state MASTER			</span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u66F4\u6362\u4E3ABACKUP</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface ens37</span></span>
<span class="line"><span style="color:#DBD7CA;">    lvs_sync_daemon_inteface ens37</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 100			</span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u9002\u5F53\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        192.168.1.2			</span><span style="color:#758575;"># LVS VIP\u5185\u7F51IP\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">virtual_server 172.16.1.99 80 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    delay_loop 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    lb_algo wrr</span></span>
<span class="line"><span style="color:#DBD7CA;">    lb_kind NAT</span></span>
<span class="line"><span style="color:#DBD7CA;">    protocol TCP</span></span>
<span class="line"><span style="color:#DBD7CA;">    sorry_server 127.0.0.1 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    real_server 192.168.1.130 80 </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">			</span><span style="color:#758575;"># RS1</span></span>
<span class="line"><span style="color:#DBD7CA;">    weight 2</span></span>
<span class="line"><span style="color:#DBD7CA;">    HTTP_GET </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        url </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            path /index.html</span></span>
<span class="line"><span style="color:#DBD7CA;">            status_code 200</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#DBD7CA;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#DBD7CA;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    real_server 192.168.1.129 80 </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">			</span><span style="color:#758575;"># RS2</span></span>
<span class="line"><span style="color:#DBD7CA;">    weight 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    HTTP_GET </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        url </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            path /index.html</span></span>
<span class="line"><span style="color:#DBD7CA;">            status_code 200</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#DBD7CA;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#DBD7CA;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
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
<span class="line"><span style="color:#393A34;">   vrrp_mcast_group4  224.1.111.1</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_sync_group VG1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">   group </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      VI_1</span></span>
<span class="line"><span style="color:#393A34;">      VI_GATEWAY</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_1 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    state MASTER			</span><span style="color:#A0ADA0;"># ---\u5907\u7528\u4E3B\u673A\u66F4\u6362\u4E3ABACKUP</span></span>
<span class="line"><span style="color:#393A34;">    interface ens33</span></span>
<span class="line"><span style="color:#393A34;">    lvs_sync_daemon_inteface ens33</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#393A34;">    priority 100			</span><span style="color:#A0ADA0;"># ---\u5907\u7528\u4E3B\u673A\u9002\u5F53\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS</span></span>
<span class="line"><span style="color:#393A34;">                auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        172.16.1.99			</span><span style="color:#A0ADA0;"># LVS VIP\u516C\u7F51IP\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">vrrp_instance VI_GATEWAY </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    state MASTER			</span><span style="color:#A0ADA0;"># ---\u5907\u7528\u4E3B\u673A\u66F4\u6362\u4E3ABACKUP</span></span>
<span class="line"><span style="color:#393A34;">    interface ens37</span></span>
<span class="line"><span style="color:#393A34;">    lvs_sync_daemon_inteface ens37</span></span>
<span class="line"><span style="color:#393A34;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#393A34;">    priority 100			</span><span style="color:#A0ADA0;"># ---\u5907\u7528\u4E3B\u673A\u9002\u5F53\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#393A34;">    advert_int 1</span></span>
<span class="line"><span style="color:#393A34;">    authentication </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        auth_type PASS</span></span>
<span class="line"><span style="color:#393A34;">        auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        192.168.1.2			</span><span style="color:#A0ADA0;"># LVS VIP\u5185\u7F51IP\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">virtual_server 172.16.1.99 80 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    delay_loop 1</span></span>
<span class="line"><span style="color:#393A34;">    lb_algo wrr</span></span>
<span class="line"><span style="color:#393A34;">    lb_kind NAT</span></span>
<span class="line"><span style="color:#393A34;">    protocol TCP</span></span>
<span class="line"><span style="color:#393A34;">    sorry_server 127.0.0.1 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    real_server 192.168.1.130 80 </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">			</span><span style="color:#A0ADA0;"># RS1</span></span>
<span class="line"><span style="color:#393A34;">    weight 2</span></span>
<span class="line"><span style="color:#393A34;">    HTTP_GET </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        url </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            path /index.html</span></span>
<span class="line"><span style="color:#393A34;">            status_code 200</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#393A34;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#393A34;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    real_server 192.168.1.129 80 </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">			</span><span style="color:#A0ADA0;"># RS2</span></span>
<span class="line"><span style="color:#393A34;">    weight 1</span></span>
<span class="line"><span style="color:#393A34;">    HTTP_GET </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        url </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            path /index.html</span></span>
<span class="line"><span style="color:#393A34;">            status_code 200</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#393A34;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#393A34;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u5BA2\u6237\u673A\u7F51\u7AD9\u6D4B\u8BD5</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">suofeiya@suofeiya-15ISK:</span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">$ </span><span style="color:#4D9375;">while</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">true</span><span style="color:#CB7676;">;</span><span style="color:#4D9375;">do</span><span style="color:#DBD7CA;"> curl 172.16.1.99</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">sleep 1</span><span style="color:#CB7676;">;</span><span style="color:#4D9375;">done</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">2&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">2&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">2&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">suofeiya@suofeiya-15ISK:</span><span style="color:#AB5959;">~</span><span style="color:#393A34;">$ </span><span style="color:#1C6B48;">while</span><span style="color:#393A34;"> </span><span style="color:#B58451;">true</span><span style="color:#AB5959;">;</span><span style="color:#1C6B48;">do</span><span style="color:#393A34;"> curl 172.16.1.99</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">sleep 1</span><span style="color:#AB5959;">;</span><span style="color:#1C6B48;">done</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">2&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">2&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">2&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><p>\u4E3B\u5907\u8282\u70B9\u5B95\u673AVIP\u8F6C\u79FB\u6D4B\u8BD5</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u624B\u52A8\u5173\u95EDmaster\u8282\u70B9\u7684keepalived\u6A21\u62DF\u5B95\u673A\u884C\u4E3A</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl stop keepalived  </span></span>
<span class="line"><span style="color:#758575;"># \u5728\u5907\u7528\u8282\u70B9\u4E0A\u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master-1 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> systemctl status keepalived</span></span>
<span class="line"><span style="color:#DBD7CA;">\u25CF keepalived.service - LVS and VRRP High Availability Monitor</span></span>
<span class="line"><span style="color:#DBD7CA;">   Loaded: loaded </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">/usr/lib/systemd/system/keepalived.service</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> disabled</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> vendor preset: disabled</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">   Active: active </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">running</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> since Sat 2020-04-04 18:42:27 CST</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;"> 1s ago</span></span>
<span class="line"><span style="color:#DBD7CA;">  Process: 4556 ExecStart=/usr/sbin/keepalived </span><span style="color:#858585;">$</span><span style="color:#B8A965;">KEEPALIVED_OPTIONS</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">code=exited, status=0/SUCCESS</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;"> Main PID: 4557 </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">keepalived</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">   CGroup: /system.slice/keepalived.service</span></span>
<span class="line"><span style="color:#DBD7CA;">           \u251C\u25004557 /usr/sbin/keepalived -D</span></span>
<span class="line"><span style="color:#DBD7CA;">           \u251C\u25004558 /usr/sbin/keepalived -D</span></span>
<span class="line"><span style="color:#DBD7CA;">           \u2514\u25004559 /usr/sbin/keepalived -D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: Unknown keyword </span><span style="color:#C98A7D;">&#39;lvs_sync_daemon_inteface&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: VRRP_Instance</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">VI_1</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> removing protocol VIPs.</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: VRRP_Instance</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">VI_GATEWAY</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> removing protocol VIPs.</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: Using LinkWatch kernel netlink reflector...</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: VRRP_Instance</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">VI_1</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> Entering BACKUP STATE</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: VRRP_Instance</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">VI_GATEWAY</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> Entering BACKUP STATE</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: VRRP sockpool: </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">ifindex</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">2</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">, proto</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">112</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">, unicast</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">0</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">, fd</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">10,11</span><span style="color:#858585;">)]</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4559</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: VRRP sockpool: </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">ifindex</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">3</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">, proto</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">112</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">, unicast</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">0</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">, fd</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">12,13</span><span style="color:#858585;">)]</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_healthcheckers</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4558</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: Activating healthchecker </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> service </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">172.16.1.99</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">:80</span></span>
<span class="line"><span style="color:#DBD7CA;">Apr 04 18:42:27 master Keepalived_healthcheckers</span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">4558</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: Activating healthchecker </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> service </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">172.16.1.99</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">:80</span></span>
<span class="line"><span style="color:#758575;"># \u67E5\u770BVIP\u662F\u5426\u5230\u624B</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ip a</span></span>
<span class="line"><span style="color:#DBD7CA;">1: lo: </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">LOOPBACK,UP,LOWER_UP</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet6 ::1/128 scope host </span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">2: ens33: </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    link/ether 00:0c:29:50:bb:aa brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet 172.16.1.138/24 brd 172.16.1.255 scope global noprefixroute dynamic ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft 1058sec preferred_lft 1058sec</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet</span><span style="color:#C98A7D;">\` 172.16.1.99/32\`</span><span style="color:#DBD7CA;"> scope global ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">3: ens37: </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    link/ether 00:0c:29:50:bb:b4 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet 192.168.1.132/24 brd 192.168.1.255 scope global noprefixroute dynamic ens37</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft 1561sec preferred_lft 1561sec</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet 192.168.1.2/32 scope global ens37</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet6 fe80::991a:e225:4c8c:1cf9/64 scope link noprefixroute </span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u7EC4\u64AD\u60C5\u51B5</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@master </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> tcpdump -i ens33 -nn host 224.1.111.1</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:04.783459 IP 172.16.1.134 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:05.784773 IP 172.16.1.134 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:06.786493 IP 172.16.1.134 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:07.788104 IP 172.16.1.134 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:08.055519 IP 172.16.1.134 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 0, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:08.680212 IP 172.16.1.138 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:09.304072 IP 172.16.1.138 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#DBD7CA;">18:46:10.304891 IP 172.16.1.138 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#758575;"># \u6B64\u5904\u53EF\u53D1\u73B0\u5907\u7528\u8282\u70B9\u5DF2\u6536\u5230\u7EC4\u64AD\u901A\u544A</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u624B\u52A8\u5173\u95EDmaster\u8282\u70B9\u7684keepalived\u6A21\u62DF\u5B95\u673A\u884C\u4E3A</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl stop keepalived  </span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728\u5907\u7528\u8282\u70B9\u4E0A\u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master-1 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> systemctl status keepalived</span></span>
<span class="line"><span style="color:#393A34;">\u25CF keepalived.service - LVS and VRRP High Availability Monitor</span></span>
<span class="line"><span style="color:#393A34;">   Loaded: loaded </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">/usr/lib/systemd/system/keepalived.service</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> disabled</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> vendor preset: disabled</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">   Active: active </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">running</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> since Sat 2020-04-04 18:42:27 CST</span><span style="color:#AB5959;">;</span><span style="color:#393A34;"> 1s ago</span></span>
<span class="line"><span style="color:#393A34;">  Process: 4556 ExecStart=/usr/sbin/keepalived </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">KEEPALIVED_OPTIONS</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">code=exited, status=0/SUCCESS</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;"> Main PID: 4557 </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">keepalived</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">   CGroup: /system.slice/keepalived.service</span></span>
<span class="line"><span style="color:#393A34;">           \u251C\u25004557 /usr/sbin/keepalived -D</span></span>
<span class="line"><span style="color:#393A34;">           \u251C\u25004558 /usr/sbin/keepalived -D</span></span>
<span class="line"><span style="color:#393A34;">           \u2514\u25004559 /usr/sbin/keepalived -D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: Unknown keyword </span><span style="color:#B56959;">&#39;lvs_sync_daemon_inteface&#39;</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: VRRP_Instance</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">VI_1</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> removing protocol VIPs.</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: VRRP_Instance</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">VI_GATEWAY</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> removing protocol VIPs.</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: Using LinkWatch kernel netlink reflector...</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: VRRP_Instance</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">VI_1</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> Entering BACKUP STATE</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: VRRP_Instance</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">VI_GATEWAY</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> Entering BACKUP STATE</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: VRRP sockpool: </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">ifindex</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">2</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">, proto</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">112</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">, unicast</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">0</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">, fd</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">10,11</span><span style="color:#8E8F8B;">)]</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_vrrp</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4559</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: VRRP sockpool: </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">ifindex</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">3</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">, proto</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">112</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">, unicast</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">0</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">, fd</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">12,13</span><span style="color:#8E8F8B;">)]</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_healthcheckers</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4558</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: Activating healthchecker </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> service </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">172.16.1.99</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">:80</span></span>
<span class="line"><span style="color:#393A34;">Apr 04 18:42:27 master Keepalived_healthcheckers</span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">4558</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: Activating healthchecker </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> service </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">172.16.1.99</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">:80</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u67E5\u770BVIP\u662F\u5426\u5230\u624B</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ip a</span></span>
<span class="line"><span style="color:#393A34;">1: lo: </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">LOOPBACK,UP,LOWER_UP</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span></span>
<span class="line"><span style="color:#393A34;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#393A34;">    inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">    inet6 ::1/128 scope host </span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">2: ens33: </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#393A34;">    link/ether 00:0c:29:50:bb:aa brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#393A34;">    inet 172.16.1.138/24 brd 172.16.1.255 scope global noprefixroute dynamic ens33</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft 1058sec preferred_lft 1058sec</span></span>
<span class="line"><span style="color:#393A34;">    inet</span><span style="color:#B56959;">\` 172.16.1.99/32\`</span><span style="color:#393A34;"> scope global ens33</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">3: ens37: </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">BROADCAST,MULTICAST,UP,LOWER_UP</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000</span></span>
<span class="line"><span style="color:#393A34;">    link/ether 00:0c:29:50:bb:b4 brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#393A34;">    inet 192.168.1.132/24 brd 192.168.1.255 scope global noprefixroute dynamic ens37</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft 1561sec preferred_lft 1561sec</span></span>
<span class="line"><span style="color:#393A34;">    inet 192.168.1.2/32 scope global ens37</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">    inet6 fe80::991a:e225:4c8c:1cf9/64 scope link noprefixroute </span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728master\u8282\u70B9\u4E0A\u67E5\u770B\u7EC4\u64AD\u60C5\u51B5</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@master </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> tcpdump -i ens33 -nn host 224.1.111.1</span></span>
<span class="line"><span style="color:#393A34;">18:46:04.783459 IP 172.16.1.134 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#393A34;">18:46:05.784773 IP 172.16.1.134 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#393A34;">18:46:06.786493 IP 172.16.1.134 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#393A34;">18:46:07.788104 IP 172.16.1.134 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#393A34;">18:46:08.055519 IP 172.16.1.134 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 0, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#393A34;">18:46:08.680212 IP 172.16.1.138 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#393A34;">18:46:09.304072 IP 172.16.1.138 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#393A34;">18:46:10.304891 IP 172.16.1.138 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6B64\u5904\u53EF\u53D1\u73B0\u5907\u7528\u8282\u70B9\u5DF2\u6536\u5230\u7EC4\u64AD\u901A\u544A</span></span>
<span class="line"></span></code></pre></div><h2 id="lvs-dr-\u6A21\u5F0F" tabindex="-1">LVS-DR \u6A21\u5F0F <a class="header-anchor" href="#lvs-dr-\u6A21\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u6D4B\u8BD5\u73AF\u5883</li></ol><table><thead><tr><th><strong>\u670D\u52A1\u5668\u7C7B\u578B</strong></th><th><strong>IP</strong>\u5730\u5740</th></tr></thead><tbody><tr><td><strong>Lvs VIP</strong></td><td>172.16.1.99</td></tr><tr><td><strong>Keepalived Master</strong></td><td>172.16.1.134</td></tr><tr><td><strong>Keepalived Backup</strong></td><td>172.16.1.138</td></tr><tr><td><strong>Realserver 1</strong></td><td>172.16.1.135</td></tr><tr><td><strong>Realserver 2</strong></td><td>172.16.1.136</td></tr></tbody></table><ol start="2"><li>\u540E\u7AEF RS1\u548CRS2 \u6240\u9700\u64CD\u4F5C(\u4EE5RS1\u4E3A\u4F8B)</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u4E3A\u65B9\u4FBF\u8D77\u89C1\uFF0C\u6B64\u5904\u4F7F\u7528shell\u811A\u672C\uFF0C\u811A\u672C\u5185\u5BB9\u5982\u4E0B</span></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@node01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> cat lvs-rs.sh </span></span>
<span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"><span style="color:#DBD7CA;">vip=</span><span style="color:#C98A7D;">&#39;172.16.1.99&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">mask=</span><span style="color:#C98A7D;">&#39;255.255.255.255&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">dev=</span><span style="color:#C98A7D;">&#39;lo:1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">case</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">1</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">in</span></span>
<span class="line"><span style="color:#DBD7CA;">start</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 1 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/all/arp_ignore</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 1 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/lo/arp_ignore</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 2 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/all/arp_announce</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 2 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/lo/arp_announce</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#ifconfig $dev $vip netmask $mask</span></span>
<span class="line"><span style="color:#DBD7CA;">    ip addr add </span><span style="color:#858585;">$</span><span style="color:#B8A965;">vip</span><span style="color:#DBD7CA;">/32 label lo:1 dev lo</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">#route add -host $vip dev $dev</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;The RS Server is Ready!&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">stop</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">    ifconfig </span><span style="color:#858585;">$</span><span style="color:#B8A965;">dev</span><span style="color:#DBD7CA;"> down</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 0 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/all/arp_ignore</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 0 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/lo/arp_ignore</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 0 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/all/arp_announce</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> 0 </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> /proc/sys/net/ipv4/conf/lo/arp_announce</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;The RS Server is Canceled!&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#CB7676;">*</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Usage: $(basename </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">0) start|stop&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">exit</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#4D9375;">esac</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u4E3A\u65B9\u4FBF\u8D77\u89C1\uFF0C\u6B64\u5904\u4F7F\u7528shell\u811A\u672C\uFF0C\u811A\u672C\u5185\u5BB9\u5982\u4E0B</span></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@node01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> cat lvs-rs.sh </span></span>
<span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"><span style="color:#393A34;">vip=</span><span style="color:#B56959;">&#39;172.16.1.99&#39;</span></span>
<span class="line"><span style="color:#393A34;">mask=</span><span style="color:#B56959;">&#39;255.255.255.255&#39;</span></span>
<span class="line"><span style="color:#393A34;">dev=</span><span style="color:#B56959;">&#39;lo:1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">case</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">1</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">in</span></span>
<span class="line"><span style="color:#393A34;">start</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 1 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/all/arp_ignore</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 1 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/lo/arp_ignore</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 2 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/all/arp_announce</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 2 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/lo/arp_announce</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#ifconfig $dev $vip netmask $mask</span></span>
<span class="line"><span style="color:#393A34;">    ip addr add </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">vip</span><span style="color:#393A34;">/32 label lo:1 dev lo</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">#route add -host $vip dev $dev</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;The RS Server is Ready!&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">stop</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">    ifconfig </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">dev</span><span style="color:#393A34;"> down</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 0 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/all/arp_ignore</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 0 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/lo/arp_ignore</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 0 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/all/arp_announce</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> 0 </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> /proc/sys/net/ipv4/conf/lo/arp_announce</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;The RS Server is Canceled!&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#AB5959;">*</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Usage: $(basename </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">0) start|stop&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">exit</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#1C6B48;">esac</span></span>
<span class="line"></span></code></pre></div><p>\u5206\u522B\u5728 RS1\u548CRS2 \u4E0A\u6267\u884C<code>sh lvs-rs.sh start </code>\u547D\u4EE4\uFF0C\u7136\u540E\u67E5\u770BVIP\u4FE1\u606F(\u4EE5RS1\u4E3A\u4F8B)</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#DBD7CA;">root@node01 </span><span style="color:#CB7676;">~</span><span style="color:#858585;">]</span><span style="color:#D4976C;">\\#</span><span style="color:#DBD7CA;"> ip a</span></span>
<span class="line"><span style="color:#DBD7CA;">1: lo: </span><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">LOOPBACK,UP,LOWER_UP</span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span></span>
<span class="line"><span style="color:#DBD7CA;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet</span><span style="color:#C98A7D;">\` 172.16.1.99/32\`</span><span style="color:#DBD7CA;"> scope global lo:1</span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#DBD7CA;">    inet6 ::1/128 scope host </span></span>
<span class="line"><span style="color:#DBD7CA;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">root@node01 </span><span style="color:#AB5959;">~</span><span style="color:#8E8F8B;">]</span><span style="color:#A65E2B;">\\#</span><span style="color:#393A34;"> ip a</span></span>
<span class="line"><span style="color:#393A34;">1: lo: </span><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">LOOPBACK,UP,LOWER_UP</span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span></span>
<span class="line"><span style="color:#393A34;">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#393A34;">    inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">    inet</span><span style="color:#B56959;">\` 172.16.1.99/32\`</span><span style="color:#393A34;"> scope global lo:1</span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span style="color:#393A34;">    inet6 ::1/128 scope host </span></span>
<span class="line"><span style="color:#393A34;">       valid_lft forever preferred_lft forever</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Keepalived \u5B8C\u6574\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Configuration File </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> keepalived</span></span>
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
<span class="line"><span style="color:#DBD7CA;">    state MASTER                        </span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u66F4\u6362\u4E3ABACKUP</span></span>
<span class="line"><span style="color:#DBD7CA;">    interface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    lvs_sync_daemon_inteface ens33</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_router_id 51</span></span>
<span class="line"><span style="color:#DBD7CA;">    priority 100                        </span><span style="color:#758575;"># ---\u5907\u7528\u4E3B\u673A\u9002\u5F53\u964D\u4F4E\u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#DBD7CA;">    advert_int 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    authentication </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        auth_type PASS</span></span>
<span class="line"><span style="color:#DBD7CA;">                auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    virtual_ipaddress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        172.16.1.99/32 dev ens33 label ens33:0                  </span><span style="color:#758575;"># LVS VIP\u5730\u5740</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">virtual_server 172.16.1.99 80 </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    delay_loop 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    lb_algo wrr</span></span>
<span class="line"><span style="color:#DBD7CA;">    lb_kind DR</span></span>
<span class="line"><span style="color:#DBD7CA;">    protocol TCP</span></span>
<span class="line"><span style="color:#DBD7CA;">    sorry_server 127.0.0.1 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    real_server 172.16.1.135 80 </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">                      </span><span style="color:#758575;"># RS1</span></span>
<span class="line"><span style="color:#DBD7CA;">    weight 2</span></span>
<span class="line"><span style="color:#DBD7CA;">    HTTP_GET </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        url </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            path /index.html</span></span>
<span class="line"><span style="color:#DBD7CA;">            status_code 200</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#DBD7CA;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#DBD7CA;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    real_server 172.16.1.136 80 </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">                      </span><span style="color:#758575;"># RS2</span></span>
<span class="line"><span style="color:#DBD7CA;">    weight 1</span></span>
<span class="line"><span style="color:#DBD7CA;">    HTTP_GET </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">        url </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">            path /index.html</span></span>
<span class="line"><span style="color:#DBD7CA;">            status_code 200</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#DBD7CA;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#DBD7CA;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#DBD7CA;">                </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
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
<span class="line"><span style="color:#393A34;">   vrrp_mcast_group4  224.1.111.1</span></span>
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
<span class="line"><span style="color:#393A34;">                auth_pass GU6hbFS4</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    virtual_ipaddress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        172.16.1.99/32 dev ens33 label ens33:0                  </span><span style="color:#A0ADA0;"># LVS VIP\u5730\u5740</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">virtual_server 172.16.1.99 80 </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    delay_loop 1</span></span>
<span class="line"><span style="color:#393A34;">    lb_algo wrr</span></span>
<span class="line"><span style="color:#393A34;">    lb_kind DR</span></span>
<span class="line"><span style="color:#393A34;">    protocol TCP</span></span>
<span class="line"><span style="color:#393A34;">    sorry_server 127.0.0.1 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    real_server 172.16.1.135 80 </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">                      </span><span style="color:#A0ADA0;"># RS1</span></span>
<span class="line"><span style="color:#393A34;">    weight 2</span></span>
<span class="line"><span style="color:#393A34;">    HTTP_GET </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        url </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            path /index.html</span></span>
<span class="line"><span style="color:#393A34;">            status_code 200</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#393A34;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#393A34;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    real_server 172.16.1.136 80 </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">                      </span><span style="color:#A0ADA0;"># RS2</span></span>
<span class="line"><span style="color:#393A34;">    weight 1</span></span>
<span class="line"><span style="color:#393A34;">    HTTP_GET </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        url </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            path /index.html</span></span>
<span class="line"><span style="color:#393A34;">            status_code 200</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">        nb_get_retry 3</span></span>
<span class="line"><span style="color:#393A34;">        delay_before_retry 2</span></span>
<span class="line"><span style="color:#393A34;">        connect_timeout 4</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u5BA2\u6237\u7AEF\u7F51\u7AD9\u6D4B\u8BD5</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">suofeiya@suofeiya-15ISK:</span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">$ </span><span style="color:#4D9375;">while</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">true</span><span style="color:#CB7676;">;</span><span style="color:#4D9375;">do</span><span style="color:#DBD7CA;"> curl 172.16.1.99</span><span style="color:#CB7676;">;</span><span style="color:#DBD7CA;">sleep 1</span><span style="color:#CB7676;">;</span><span style="color:#4D9375;">done</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">2&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">2&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#CB7676;">&lt;</span><span style="color:#DBD7CA;">h</span><span style="color:#CB7676;">1&gt;</span><span style="color:#DBD7CA;">Backend RS</span><span style="color:#CB7676;">1&lt;</span><span style="color:#DBD7CA;">/h</span><span style="color:#CB7676;">1&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">suofeiya@suofeiya-15ISK:</span><span style="color:#AB5959;">~</span><span style="color:#393A34;">$ </span><span style="color:#1C6B48;">while</span><span style="color:#393A34;"> </span><span style="color:#B58451;">true</span><span style="color:#AB5959;">;</span><span style="color:#1C6B48;">do</span><span style="color:#393A34;"> curl 172.16.1.99</span><span style="color:#AB5959;">;</span><span style="color:#393A34;">sleep 1</span><span style="color:#AB5959;">;</span><span style="color:#1C6B48;">done</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">2&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">2&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#AB5959;">&lt;</span><span style="color:#393A34;">h</span><span style="color:#AB5959;">1&gt;</span><span style="color:#393A34;">Backend RS</span><span style="color:#AB5959;">1&lt;</span><span style="color:#393A34;">/h</span><span style="color:#AB5959;">1&gt;</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"></span></code></pre></div><p>\u4E3B\u5907\u8282\u70B9\u5B95\u673AVIP\u8F6C\u79FB\u6D4B\u8BD5\uFF1A\u53C2\u8003\u4E0A\u9762NAT\u6A21\u5F0F\u7684\u6B65\u9AA4</p>`,24),e=[o];function t(c,r,y,i,A,D){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
