import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ProgramLang/Lua/Lua continue Ex.md","lastUpdated":1657272051000}'),l={name:"ProgramLang/Lua/Lua continue Ex.md"},o=p(`<p>Lua continue \u529F\u80FD\u5B9E\u73B0\u65B9\u6CD5\uFF1A</p><div class="language-lua"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">-- \u65B9\u6CD5\u4E00</span></span>
<span class="line"><span style="color:#758575;">-- prints odd numbers in [|1,10|]</span></span>
<span class="line"><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">i</span><span style="color:#CB7676;">=</span><span style="color:#6394BF;">1</span><span style="color:#DBD7CA;">,</span><span style="color:#6394BF;">10</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">do</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">i</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">%</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">2</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">==</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">then</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">goto</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">continue</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">end</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">print</span><span style="color:#DBD7CA;">(</span><span style="color:#B8A965;">i</span><span style="color:#DBD7CA;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">::</span><span style="color:#C98A7D;">continue</span><span style="color:#858585;">::</span></span>
<span class="line"><span style="color:#4D9375;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">-- \u65B9\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">idx</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">1</span><span style="color:#DBD7CA;">, </span><span style="color:#6394BF;">5</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">do</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">repeat</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">print</span><span style="color:#DBD7CA;">(</span><span style="color:#6394BF;">1</span><span style="color:#DBD7CA;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">print</span><span style="color:#DBD7CA;">(</span><span style="color:#6394BF;">2</span><span style="color:#DBD7CA;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">print</span><span style="color:#DBD7CA;">(</span><span style="color:#6394BF;">3</span><span style="color:#DBD7CA;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">do</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">break</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">end</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">-- goes to next iteration of for</span></span>
<span class="line"><span style="color:#858585;">        </span><span style="color:#758575;">-- or: if idx&gt;3 then;print(&quot;continue&quot;);break;end</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">print</span><span style="color:#DBD7CA;">(</span><span style="color:#6394BF;">4</span><span style="color:#DBD7CA;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#E0A569;">print</span><span style="color:#DBD7CA;">(</span><span style="color:#6394BF;">5</span><span style="color:#DBD7CA;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">until</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">true</span></span>
<span class="line"><span style="color:#4D9375;">end</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">-- \u65B9\u6CD5\u4E00</span></span>
<span class="line"><span style="color:#A0ADA0;">-- prints odd numbers in [|1,10|]</span></span>
<span class="line"><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">i</span><span style="color:#AB5959;">=</span><span style="color:#296AA3;">1</span><span style="color:#393A34;">,</span><span style="color:#296AA3;">10</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">do</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">i</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">%</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">2</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">==</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">then</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">goto</span><span style="color:#393A34;"> </span><span style="color:#B56959;">continue</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">end</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">print</span><span style="color:#393A34;">(</span><span style="color:#8C862B;">i</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">::</span><span style="color:#B56959;">continue</span><span style="color:#8E8F8B;">::</span></span>
<span class="line"><span style="color:#1C6B48;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">-- \u65B9\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">idx</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#393A34;">, </span><span style="color:#296AA3;">5</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">do</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">repeat</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">print</span><span style="color:#393A34;">(</span><span style="color:#296AA3;">1</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">print</span><span style="color:#393A34;">(</span><span style="color:#296AA3;">2</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">print</span><span style="color:#393A34;">(</span><span style="color:#296AA3;">3</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">do</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">break</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">end</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">-- goes to next iteration of for</span></span>
<span class="line"><span style="color:#8E8F8B;">        </span><span style="color:#A0ADA0;">-- or: if idx&gt;3 then;print(&quot;continue&quot;);break;end</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">print</span><span style="color:#393A34;">(</span><span style="color:#296AA3;">4</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">print</span><span style="color:#393A34;">(</span><span style="color:#296AA3;">5</span><span style="color:#393A34;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">until</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">true</span></span>
<span class="line"><span style="color:#1C6B48;">end</span></span>
<span class="line"></span></code></pre></div><hr><p>\u{1F517} \u53C2\u8003\u94FE\u63A5\uFF1A</p><ul><li><a href="http://lua-users.org/wiki/ContinueProposal" target="_blank" rel="noopener noreferrer">http://lua-users.org/wiki/ContinueProposal</a></li><li><a href="https://stackoverflow.com/questions/3524970/why-does-lua-have-no-continue-statement" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/3524970/why-does-lua-have-no-continue-statement</a></li></ul>`,5),e=[o];function t(r,c,y,A,i,D){return n(),a("div",null,e)}var d=s(l,[["render",t]]);export{C as __pageData,d as default};
