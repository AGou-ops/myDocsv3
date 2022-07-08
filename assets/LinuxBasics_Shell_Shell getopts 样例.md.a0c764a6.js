import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const C=JSON.parse('{"title":"Shell getopts Demo","description":"","frontmatter":{},"headers":[],"relativePath":"LinuxBasics/Shell/Shell getopts \u6837\u4F8B.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Shell/Shell getopts \u6837\u4F8B.md"},o=l(`<h1 id="shell-getopts-demo" tabindex="-1">Shell getopts Demo <a class="header-anchor" href="#shell-getopts-demo" aria-hidden="true">#</a></h1><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">#!/bin/bash</span></span>
<span class="line"><span style="color:#DBD7CA;">status=off                 </span><span style="color:#758575;"># \u5B9A\u4E49\u53D8\u91CFstatus\uFF0C\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3Aoff</span></span>
<span class="line"><span style="color:#DBD7CA;">filename=</span><span style="color:#C98A7D;">&quot;&quot;</span><span style="color:#DBD7CA;">              </span><span style="color:#758575;"># \u5B9A\u4E49\u53D8\u91CFfilename\uFF0C\u7528\u4E8E\u4FDD\u5B58\u9009\u9879\u53C2\u6570\uFF08\u6587\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#DBD7CA;">output=</span><span style="color:#C98A7D;">&quot;&quot;</span><span style="color:#DBD7CA;">                 </span><span style="color:#758575;"># \u5B9A\u4E49\u53D8\u91CFoutput\uFF0C\u7528\u4E8E\u4FDD\u5B58\u9009\u9879\u53C2\u6570\uFF08\u76EE\u5F55\uFF09</span></span>
<span class="line"><span style="color:#A1B567;">Usage</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;">                  </span><span style="color:#758575;"># \u5B9A\u4E49\u51FD\u6570Usage\uFF0C\u8F93\u51FA\u811A\u672C\u4F7F\u7528\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Usage&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;myscript [-h] [-v] [-f &lt;filename&gt;] [-o &lt;filename&gt;]&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">exit</span><span style="color:#DBD7CA;"> -1</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">while</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">getopts</span><span style="color:#DBD7CA;"> :hvf:o: varname   </span><span style="color:#758575;"># \u544A\u8BC9getopts\u6B64\u811A\u672C\u6709-h\u3001-v\u3001-f\u3001-o\u56DB\u4E2A\u9009\u9879\uFF0C-f\u548C-o\u540E\u9762\u9700\u8981\u8DDF\u53C2\u6570\uFF08\u6CA1\u6709\u9009\u9879\u65F6\uFF0Cgetopts\u4F1A\u8BBE\u7F6E\u4E00\u4E2A\u9000\u51FA\u72B6\u6001FALSE\uFF0C\u9000\u51FA\u5FAA\u73AF\uFF09</span></span>
<span class="line"><span style="color:#4D9375;">do</span></span>
<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;">case</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">varname</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">in</span></span>
<span class="line"><span style="color:#DBD7CA;">    h</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">varname&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      Usage</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">exit</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    v</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">varname&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      status=on</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">status&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">exit</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    f</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">varname&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">OPTARG&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      filename=</span><span style="color:#858585;">$</span><span style="color:#B8A965;">OPTARG</span><span style="color:#DBD7CA;">                    </span><span style="color:#758575;"># \u5C06\u9009\u9879\u7684\u53C2\u6570\u8D4B\u503C\u7ED9filename</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-f</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">$</span><span style="color:#B8A965;">filename</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#4D9375;">then</span><span style="color:#DBD7CA;">               </span><span style="color:#758575;"># \u5224\u65AD\u9009\u9879\u6240\u8DDF\u7684\u53C2\u6570\u662F\u5426\u5B58\u5728\u4E14\u662F\u6587\u4EF6</span></span>
<span class="line"><span style="color:#DBD7CA;">         </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;the source file </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">filename not exist!&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">         </span><span style="color:#E0A569;">exit</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#4D9375;">fi</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    o</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">varname&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">OPTARG&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      output=</span><span style="color:#858585;">$</span><span style="color:#B8A965;">OPTARG</span><span style="color:#DBD7CA;">                      </span><span style="color:#758575;"># \u5C06\u9009\u9879\u53C2\u6570\u8D4B\u503C\u7ED9output</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">-d</span><span style="color:#DBD7CA;">  </span><span style="color:#858585;">$</span><span style="color:#B8A965;">output</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">]</span><span style="color:#CB7676;">;</span><span style="color:#4D9375;">then</span><span style="color:#DBD7CA;">               </span><span style="color:#758575;"># \u5224\u65AD\u9009\u9879\u53C2\u6570\u662F\u5426\u5B58\u5728\u4E14\u662F\u76EE\u5F55</span></span>
<span class="line"><span style="color:#DBD7CA;">         </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;the output path </span><span style="color:#858585;">$</span><span style="color:#C98A7D;">output not exist&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">         </span><span style="color:#E0A569;">exit</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#4D9375;">fi</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;"># \u5F53\u9009\u9879\u540E\u9762\u6CA1\u6709\u53C2\u6570\u65F6\uFF0Cvarname\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\uFF08\uFF1A\uFF09\uFF0COPTARG\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\u9009\u9879\u672C\u8EAB</span></span>
<span class="line"><span style="color:#DBD7CA;">    :</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">                                               </span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">varname&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;the option -</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">OPTARG require an arguement&quot;</span><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># \u63D0\u793A\u7528\u6237\u6B64\u9009\u9879\u540E\u9762\u9700\u8981\u4E00\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">exit</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">?</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">                            </span><span style="color:#758575;"># \u5F53\u9009\u9879\u4E0D\u5339\u914D\u65F6\uFF0Cvarname\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\uFF08\uFF1F\uFF09\uFF0COPTARG\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\u9009\u9879\u672C\u8EAB</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">varname&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Invaild option: -</span><span style="color:#858585;">$</span><span style="color:#C98A7D;">OPTARG&quot;</span><span style="color:#DBD7CA;">           </span><span style="color:#758575;"># \u63D0\u793A\u7528\u6237\u6B64\u9009\u9879\u65E0\u6548</span></span>
<span class="line"><span style="color:#DBD7CA;">      Usage</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">exit</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">;;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">esac</span></span>
<span class="line"><span style="color:#4D9375;">done</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"><span style="color:#393A34;">status=off                 </span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u53D8\u91CFstatus\uFF0C\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3Aoff</span></span>
<span class="line"><span style="color:#393A34;">filename=</span><span style="color:#B56959;">&quot;&quot;</span><span style="color:#393A34;">              </span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u53D8\u91CFfilename\uFF0C\u7528\u4E8E\u4FDD\u5B58\u9009\u9879\u53C2\u6570\uFF08\u6587\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#393A34;">output=</span><span style="color:#B56959;">&quot;&quot;</span><span style="color:#393A34;">                 </span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u53D8\u91CFoutput\uFF0C\u7528\u4E8E\u4FDD\u5B58\u9009\u9879\u53C2\u6570\uFF08\u76EE\u5F55\uFF09</span></span>
<span class="line"><span style="color:#6C7834;">Usage</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;">                  </span><span style="color:#A0ADA0;"># \u5B9A\u4E49\u51FD\u6570Usage\uFF0C\u8F93\u51FA\u811A\u672C\u4F7F\u7528\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Usage&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;myscript [-h] [-v] [-f &lt;filename&gt;] [-o &lt;filename&gt;]&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">exit</span><span style="color:#393A34;"> -1</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">while</span><span style="color:#393A34;"> </span><span style="color:#B58451;">getopts</span><span style="color:#393A34;"> :hvf:o: varname   </span><span style="color:#A0ADA0;"># \u544A\u8BC9getopts\u6B64\u811A\u672C\u6709-h\u3001-v\u3001-f\u3001-o\u56DB\u4E2A\u9009\u9879\uFF0C-f\u548C-o\u540E\u9762\u9700\u8981\u8DDF\u53C2\u6570\uFF08\u6CA1\u6709\u9009\u9879\u65F6\uFF0Cgetopts\u4F1A\u8BBE\u7F6E\u4E00\u4E2A\u9000\u51FA\u72B6\u6001FALSE\uFF0C\u9000\u51FA\u5FAA\u73AF\uFF09</span></span>
<span class="line"><span style="color:#1C6B48;">do</span></span>
<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;">case</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">varname</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">in</span></span>
<span class="line"><span style="color:#393A34;">    h</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">varname&quot;</span></span>
<span class="line"><span style="color:#393A34;">      Usage</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">exit</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    v</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">varname&quot;</span></span>
<span class="line"><span style="color:#393A34;">      status=on</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">status&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">exit</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    f</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">varname&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">OPTARG&quot;</span></span>
<span class="line"><span style="color:#393A34;">      filename=</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">OPTARG</span><span style="color:#393A34;">                    </span><span style="color:#A0ADA0;"># \u5C06\u9009\u9879\u7684\u53C2\u6570\u8D4B\u503C\u7ED9filename</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-f</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">filename</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#1C6B48;">then</span><span style="color:#393A34;">               </span><span style="color:#A0ADA0;"># \u5224\u65AD\u9009\u9879\u6240\u8DDF\u7684\u53C2\u6570\u662F\u5426\u5B58\u5728\u4E14\u662F\u6587\u4EF6</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;the source file </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">filename not exist!&quot;</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#B58451;">exit</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1C6B48;">fi</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    o</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">varname&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">OPTARG&quot;</span></span>
<span class="line"><span style="color:#393A34;">      output=</span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">OPTARG</span><span style="color:#393A34;">                      </span><span style="color:#A0ADA0;"># \u5C06\u9009\u9879\u53C2\u6570\u8D4B\u503C\u7ED9output</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-d</span><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">output</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">;</span><span style="color:#1C6B48;">then</span><span style="color:#393A34;">               </span><span style="color:#A0ADA0;"># \u5224\u65AD\u9009\u9879\u53C2\u6570\u662F\u5426\u5B58\u5728\u4E14\u662F\u76EE\u5F55</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;the output path </span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">output not exist&quot;</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#B58451;">exit</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1C6B48;">fi</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;"># \u5F53\u9009\u9879\u540E\u9762\u6CA1\u6709\u53C2\u6570\u65F6\uFF0Cvarname\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\uFF08\uFF1A\uFF09\uFF0COPTARG\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\u9009\u9879\u672C\u8EAB</span></span>
<span class="line"><span style="color:#393A34;">    :</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">                                               </span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">varname&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;the option -</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">OPTARG require an arguement&quot;</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># \u63D0\u793A\u7528\u6237\u6B64\u9009\u9879\u540E\u9762\u9700\u8981\u4E00\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">exit</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">?</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">                            </span><span style="color:#A0ADA0;"># \u5F53\u9009\u9879\u4E0D\u5339\u914D\u65F6\uFF0Cvarname\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\uFF08\uFF1F\uFF09\uFF0COPTARG\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\u9009\u9879\u672C\u8EAB</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">varname&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Invaild option: -</span><span style="color:#8E8F8B;">$</span><span style="color:#B56959;">OPTARG&quot;</span><span style="color:#393A34;">           </span><span style="color:#A0ADA0;"># \u63D0\u793A\u7528\u6237\u6B64\u9009\u9879\u65E0\u6548</span></span>
<span class="line"><span style="color:#393A34;">      Usage</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">exit</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">;;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">esac</span></span>
<span class="line"><span style="color:#1C6B48;">done</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,y,A,D,B){return n(),a("div",null,e)}var u=s(p,[["render",t]]);export{C as __pageData,u as default};
