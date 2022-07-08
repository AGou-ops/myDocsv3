import{_ as s,o as a,c as n,a as l}from"./app.1e6146c3.js";const m=JSON.parse('{"title":"Terraform Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"Terraform \u7B80\u4ECB","slug":"terraform-\u7B80\u4ECB"},{"level":2,"title":"Terraform \u5B89\u88C5","slug":"terraform-\u5B89\u88C5"},{"level":2,"title":"Terraform with AWS","slug":"terraform-with-aws"},{"level":3,"title":"\u5FEB\u901F\u5F00\u59CB","slug":"\u5FEB\u901F\u5F00\u59CB"},{"level":2,"title":"\u5C06state\u6587\u4EF6\u5B58\u653E\u5230\u8FDC\u7A0B","slug":"\u5C06state\u6587\u4EF6\u5B58\u653E\u5230\u8FDC\u7A0B"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Terraform/Terraform Basic.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/Terraform/Terraform Basic.md"},e=l(`<h1 id="terraform-basic" tabindex="-1">Terraform Basic <a class="header-anchor" href="#terraform-basic" aria-hidden="true">#</a></h1><h2 id="terraform-\u7B80\u4ECB" tabindex="-1">Terraform \u7B80\u4ECB <a class="header-anchor" href="#terraform-\u7B80\u4ECB" aria-hidden="true">#</a></h2><blockquote><p>Terraform(IaaC)\u662F\u7528\u4E8E\u5B89\u5168\u6709\u6548\u5730\u6784\u5EFA\uFF0C\u66F4\u6539\u548C\u7248\u672C\u63A7\u5236\u57FA\u7840\u7ED3\u6784\u7684\u5DE5\u5177\u3002 Terraform\u53EF\u4EE5\u7BA1\u7406\u73B0\u6709\u548C\u6D41\u884C\u7684\u670D\u52A1\u63D0\u4F9B\u5546\u4EE5\u53CA\u5B9A\u5236\u7684\u5185\u90E8\u89E3&gt; \u51B3\u65B9\u6848\u3002</p><p>\u914D\u7F6E\u6587\u4EF6\u5411Terraform\u63CF\u8FF0\u4E86\u8FD0\u884C\u5355\u4E2A\u5E94\u7528\u7A0B\u5E8F\u6216\u6574\u4E2A\u6570\u636E\u4E2D\u5FC3\u6240\u9700\u7684\u7EC4\u4EF6\u3002Terraform\u751F\u6210\u6267\u884C\u8BA1\u5212\uFF0C\u4EE5\u63CF\u8FF0\u8FBE\u5230\u9884\u671F\u72B6\u6001\u6240\u9700\u6267\u884C\u7684&gt; \u64CD\u4F5C\uFF0C\u7136\u540E\u6267\u884C\u8BE5\u8BA1\u5212\u4EE5\u6784\u5EFA\u6240\u63CF\u8FF0\u7684\u57FA\u7840\u7ED3\u6784\u3002\u968F\u7740\u914D\u7F6E\u7684\u66F4\u6539\uFF0CTerraform\u80FD\u591F\u786E\u5B9A\u66F4\u6539\u7684\u5185\u5BB9\u5E76\u521B\u5EFA\u53EF\u4EE5\u5E94\u7528\u7684\u589E\u91CF\u6267\u884C\u8BA1\u5212\u3002</p><p>Terraform\u53EF\u4EE5\u7BA1\u7406\u7684\u57FA\u7840\u7ED3\u6784\u5305\u62EC\u4F4E\u7EA7\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u8BA1\u7B97\u5B9E\u4F8B\uFF0C\u5B58\u50A8\u548C\u7F51\u7EDC\uFF0C\u4EE5\u53CA\u9AD8\u7EA7\u7EC4\u4EF6\uFF0C\u4F8B\u5982DNS\u6761\u76EE\uFF0CSaaS\u529F\u80FD\u7B49\u3002</p></blockquote><h2 id="terraform-\u5B89\u88C5" tabindex="-1">Terraform \u5B89\u88C5 <a class="header-anchor" href="#terraform-\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u9996\u5148\u4ECE<a href="https://www.terraform.io/downloads.html" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u7AD9\u70B9</a>\u4E0B\u8F7D\u4E0E\u5F53\u524D\u7CFB\u7EDF\u76F8\u540C\u7684<code>Terraform</code>\u7248\u672C, \u89E3\u538B\u7F29, \u7136\u540E\u653E\u7F6E\u4E8E\u73AF\u5883\u53D8\u91CF\u76EE\u5F55\u4E0B\u5373\u53EF.</p><p><code>Linux</code>\u7CFB\u7EDF\u4E0B(<a href="https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started" target="_blank" rel="noopener noreferrer">\u5176\u4ED6\u7CFB\u7EDF?</a>):</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ wget https://releases.hashicorp.com/terraform/0.13.5/terraform_0.13.5_linux_amd64.zip</span></span>
<span class="line"><span style="color:#DBD7CA;">$ unzip terraform_0.13.5_linux_amd64.zip</span></span>
<span class="line"><span style="color:#DBD7CA;">$ </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> terraform_0.13.5_linux_amd64</span></span>
<span class="line"><span style="color:#DBD7CA;">$ chmod +x terraform</span></span>
<span class="line"><span style="color:#DBD7CA;">$ mv terraform /usr/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">## \u68C0\u9A8C\u5B89\u88C5</span></span>
<span class="line"><span style="color:#DBD7CA;">$ terraform --version</span></span>
<span class="line"><span style="color:#DBD7CA;">Terraform v0.13.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># \u4E3Abash\u6216\u8005zsh\u6DFB\u52A0\u547D\u4EE4\u884C\u81EA\u52A8\u8865\u5168\u529F\u80FD</span></span>
<span class="line"><span style="color:#DBD7CA;">$ terraform -install-autocomplete</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ wget https://releases.hashicorp.com/terraform/0.13.5/terraform_0.13.5_linux_amd64.zip</span></span>
<span class="line"><span style="color:#393A34;">$ unzip terraform_0.13.5_linux_amd64.zip</span></span>
<span class="line"><span style="color:#393A34;">$ </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> terraform_0.13.5_linux_amd64</span></span>
<span class="line"><span style="color:#393A34;">$ chmod +x terraform</span></span>
<span class="line"><span style="color:#393A34;">$ mv terraform /usr/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">## \u68C0\u9A8C\u5B89\u88C5</span></span>
<span class="line"><span style="color:#393A34;">$ terraform --version</span></span>
<span class="line"><span style="color:#393A34;">Terraform v0.13.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E3Abash\u6216\u8005zsh\u6DFB\u52A0\u547D\u4EE4\u884C\u81EA\u52A8\u8865\u5168\u529F\u80FD</span></span>
<span class="line"><span style="color:#393A34;">$ terraform -install-autocomplete</span></span>
<span class="line"></span></code></pre></div><h2 id="terraform-with-aws" tabindex="-1">Terraform with AWS <a class="header-anchor" href="#terraform-with-aws" aria-hidden="true">#</a></h2><p>\u9884\u5148\u51C6\u5907:</p><ul><li><a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html" target="_blank" rel="noopener noreferrer">aws cli</a>\u5DF2\u6210\u529F\u5B89\u88C5;</li><li>\u6210\u529F\u83B7\u53D6<code>AKSK</code>;</li><li>aws \u672C\u5730\u8BC1\u4E66\u5DF2\u6210\u529F\u914D\u7F6E;</li></ul><p>aws cli\u5B89\u88C5\u5F88\u7B80\u5355, \u5728\u6B64\u5C31\u4E0D\u518D\u8D58\u8FF0.</p><p>\u4F7F\u7528<code>AKSK</code>\u914D\u7F6Eaws\u672C\u5730\u8BC1\u4E66:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ aws configure</span></span>
<span class="line"><span style="color:#758575;"># \u4F1A\u63D0\u793A\u8F93\u5165AKSK\u4FE1\u606F, \u53EF\u4EE5\u4ECE https://console.aws.amazon.com/iam/home?#security_credential \u83B7\u53D6</span></span>
<span class="line"><span style="color:#DBD7CA;">AWS Access Key ID </span><span style="color:#858585;">[</span><span style="color:#CB7676;">****************</span><span style="color:#DBD7CA;">CRUK</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: AKI</span><span style="color:#CB7676;">******</span><span style="color:#DBD7CA;">HHMRQ</span></span>
<span class="line"><span style="color:#DBD7CA;">AWS Secret Access Key </span><span style="color:#858585;">[</span><span style="color:#CB7676;">****************</span><span style="color:#DBD7CA;">4K/x</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: z0RR</span><span style="color:#CB7676;">******</span><span style="color:#DBD7CA;">NK0wZE37A</span></span>
<span class="line"><span style="color:#DBD7CA;">Default region name </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">ap-east-1</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: </span></span>
<span class="line"><span style="color:#DBD7CA;">Default output format </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">yaml</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">: </span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ aws configure</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F1A\u63D0\u793A\u8F93\u5165AKSK\u4FE1\u606F, \u53EF\u4EE5\u4ECE https://console.aws.amazon.com/iam/home?#security_credential \u83B7\u53D6</span></span>
<span class="line"><span style="color:#393A34;">AWS Access Key ID </span><span style="color:#8E8F8B;">[</span><span style="color:#AB5959;">****************</span><span style="color:#393A34;">CRUK</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: AKI</span><span style="color:#AB5959;">******</span><span style="color:#393A34;">HHMRQ</span></span>
<span class="line"><span style="color:#393A34;">AWS Secret Access Key </span><span style="color:#8E8F8B;">[</span><span style="color:#AB5959;">****************</span><span style="color:#393A34;">4K/x</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: z0RR</span><span style="color:#AB5959;">******</span><span style="color:#393A34;">NK0wZE37A</span></span>
<span class="line"><span style="color:#393A34;">Default region name </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">ap-east-1</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: </span></span>
<span class="line"><span style="color:#393A34;">Default output format </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">yaml</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">: </span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u5B8C\u8BE5\u547D\u4EE4\u4E4B\u540E, \u4F1A\u81EA\u52A8\u5728\u5BB6\u76EE\u5F55(Mac/Linux/Windows)\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>.aws</code>\u7684\u6587\u4EF6\u5939, \u6587\u4EF6\u5939\u4E2D\u5305\u542B<code>config</code>\u914D\u7F6E\u6587\u4EF6\u4EE5\u53CA<code>credentials</code>\u8BC1\u4E66\u8BA4\u8BC1\u6587\u4EF6(\u5B9E\u9645\u4E3A<code>AKSK</code>\u660E\u6587\u7684ini\u98CE\u683C\u6587\u4EF6).</p><h3 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h3><p>\u7F16\u5199\u914D\u7F6E\u6587\u4EF6:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># vim main.tf</span></span>
<span class="line"><span style="color:#DBD7CA;">terraform </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  required_providers </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    aws = </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;">  = </span><span style="color:#C98A7D;">&quot;hashicorp/aws&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      version = </span><span style="color:#C98A7D;">&quot;~&gt; 3.0&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Configure the AWS Provider</span></span>
<span class="line"><span style="color:#DBD7CA;">provider </span><span style="color:#C98A7D;">&quot;aws&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  profile = </span><span style="color:#C98A7D;">&quot;default&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  region = </span><span style="color:#C98A7D;">&quot;us-east-1&quot;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_instance&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;example&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  count         = 1     </span><span style="color:#758575;"># \u8FD0\u884C\u7684\u5B9E\u4F8B\u6570</span></span>
<span class="line"><span style="color:#DBD7CA;">  ami           = </span><span style="color:#C98A7D;">&quot;ami-07efac79022b86107&quot;</span><span style="color:#DBD7CA;">        </span><span style="color:#758575;"># \u6307\u5B9Aami</span></span>
<span class="line"><span style="color:#DBD7CA;">  instance_type = </span><span style="color:#C98A7D;">&quot;t2.micro&quot;</span><span style="color:#DBD7CA;">            </span><span style="color:#758575;"># \u6307\u5B9A\u5B9E\u4F8B\u7C7B\u578B</span></span>
<span class="line"><span style="color:#DBD7CA;">  tags = </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    Name = </span><span style="color:#C98A7D;">&quot;Server </span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">count.index</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># vim main.tf</span></span>
<span class="line"><span style="color:#393A34;">terraform </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  required_providers </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    aws = </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">source</span><span style="color:#393A34;">  = </span><span style="color:#B56959;">&quot;hashicorp/aws&quot;</span></span>
<span class="line"><span style="color:#393A34;">      version = </span><span style="color:#B56959;">&quot;~&gt; 3.0&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Configure the AWS Provider</span></span>
<span class="line"><span style="color:#393A34;">provider </span><span style="color:#B56959;">&quot;aws&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  profile = </span><span style="color:#B56959;">&quot;default&quot;</span></span>
<span class="line"><span style="color:#393A34;">  region = </span><span style="color:#B56959;">&quot;us-east-1&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_instance&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;example&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  count         = 1     </span><span style="color:#A0ADA0;"># \u8FD0\u884C\u7684\u5B9E\u4F8B\u6570</span></span>
<span class="line"><span style="color:#393A34;">  ami           = </span><span style="color:#B56959;">&quot;ami-07efac79022b86107&quot;</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;"># \u6307\u5B9Aami</span></span>
<span class="line"><span style="color:#393A34;">  instance_type = </span><span style="color:#B56959;">&quot;t2.micro&quot;</span><span style="color:#393A34;">            </span><span style="color:#A0ADA0;"># \u6307\u5B9A\u5B9E\u4F8B\u7C7B\u578B</span></span>
<span class="line"><span style="color:#393A34;">  tags = </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    Name = </span><span style="color:#B56959;">&quot;Server </span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">count.index</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u521D\u59CB\u5316:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ terrform init</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ terrform init</span></span>
<span class="line"></span></code></pre></div><p>\u683C\u5F0F\u5316\u548C\u9A8C\u8BC1\u914D\u7F6E\u6587\u4EF6:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ terraform fmt</span></span>
<span class="line"><span style="color:#DBD7CA;">$ terraform validate</span></span>
<span class="line"><span style="color:#DBD7CA;">Success</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> The configuration is valid.</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ terraform fmt</span></span>
<span class="line"><span style="color:#393A34;">$ terraform validate</span></span>
<span class="line"><span style="color:#393A34;">Success</span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> The configuration is valid.</span></span>
<span class="line"></span></code></pre></div><p>\u5E94\u7528\u914D\u7F6E\u6587\u4EF6:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ terraform apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">An execution plan has been generated and is shown below.</span></span>
<span class="line"><span style="color:#DBD7CA;">Resource actions are indicated with the following symbols:</span></span>
<span class="line"><span style="color:#DBD7CA;">  + create</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Terraform will perform the following actions:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># aws_instance.example will be created</span></span>
<span class="line"><span style="color:#DBD7CA;">  + resource </span><span style="color:#C98A7D;">&quot;aws_instance&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;example&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      + ami                          = </span><span style="color:#C98A7D;">&quot;ami-03657b56516ab7912&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      + arn                          = </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">known after apply</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      + associate_public_ip_address  = </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">known after apply</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      + availability_zone            = </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">known after apply</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      + cpu_core_count               = </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">known after apply</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      + cpu_threads_per_core         = </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">known after apply</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">      + get_password_data            = </span><span style="color:#E0A569;">false</span></span>
<span class="line"><span style="color:#DBD7CA;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">Do you want to perform these actions</span><span style="color:#CB7676;">?</span></span>
<span class="line"><span style="color:#DBD7CA;">  Terraform will perform the actions described above.</span></span>
<span class="line"><span style="color:#DBD7CA;">  Only </span><span style="color:#C98A7D;">&#39;yes&#39;</span><span style="color:#DBD7CA;"> will be accepted to approve.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  Enter a value: yes    </span><span style="color:#758575;"># \u786E\u8BA4\u5B8C\u4FE1\u606F\u4E4B\u540E\u8F93\u5165yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">aws_instance.example: Creating...</span></span>
<span class="line"><span style="color:#DBD7CA;">aws_instance.example: Still creating... </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">10s elapsed</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">aws_instance.example: Still creating... </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">20s elapsed</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">aws_instance.example: Still creating... </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">30s elapsed</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">aws_instance.example: Creation </span><span style="color:#E0A569;">complete</span><span style="color:#DBD7CA;"> after 33s </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">id</span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;">i-0073fc0ea18bc948b</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">Apply complete</span><span style="color:#CB7676;">!</span><span style="color:#DBD7CA;"> Resources: 1 added, 0 changed, 0 destroyed</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ terraform apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">An execution plan has been generated and is shown below.</span></span>
<span class="line"><span style="color:#393A34;">Resource actions are indicated with the following symbols:</span></span>
<span class="line"><span style="color:#393A34;">  + create</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Terraform will perform the following actions:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># aws_instance.example will be created</span></span>
<span class="line"><span style="color:#393A34;">  + resource </span><span style="color:#B56959;">&quot;aws_instance&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;example&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      + ami                          = </span><span style="color:#B56959;">&quot;ami-03657b56516ab7912&quot;</span></span>
<span class="line"><span style="color:#393A34;">      + arn                          = </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">known after apply</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      + associate_public_ip_address  = </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">known after apply</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      + availability_zone            = </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">known after apply</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      + cpu_core_count               = </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">known after apply</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      + cpu_threads_per_core         = </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">known after apply</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">      + get_password_data            = </span><span style="color:#B58451;">false</span></span>
<span class="line"><span style="color:#393A34;">...</span></span>
<span class="line"><span style="color:#393A34;">Do you want to perform these actions</span><span style="color:#AB5959;">?</span></span>
<span class="line"><span style="color:#393A34;">  Terraform will perform the actions described above.</span></span>
<span class="line"><span style="color:#393A34;">  Only </span><span style="color:#B56959;">&#39;yes&#39;</span><span style="color:#393A34;"> will be accepted to approve.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  Enter a value: yes    </span><span style="color:#A0ADA0;"># \u786E\u8BA4\u5B8C\u4FE1\u606F\u4E4B\u540E\u8F93\u5165yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">aws_instance.example: Creating...</span></span>
<span class="line"><span style="color:#393A34;">aws_instance.example: Still creating... </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">10s elapsed</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">aws_instance.example: Still creating... </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">20s elapsed</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">aws_instance.example: Still creating... </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">30s elapsed</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">aws_instance.example: Creation </span><span style="color:#B58451;">complete</span><span style="color:#393A34;"> after 33s </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">id</span><span style="color:#AB5959;">=</span><span style="color:#393A34;">i-0073fc0ea18bc948b</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">Apply complete</span><span style="color:#AB5959;">!</span><span style="color:#393A34;"> Resources: 1 added, 0 changed, 0 destroyed</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528<code>terraform show</code>\u67E5\u770B\u751F\u6210\u540E\u7684\u4FE1\u606F.</p><h2 id="\u5C06state\u6587\u4EF6\u5B58\u653E\u5230\u8FDC\u7A0B" tabindex="-1">\u5C06state\u6587\u4EF6\u5B58\u653E\u5230\u8FDC\u7A0B <a class="header-anchor" href="#\u5C06state\u6587\u4EF6\u5B58\u653E\u5230\u8FDC\u7A0B" aria-hidden="true">#</a></h2><p><code>Terraform</code>\u7684\u72B6\u6001\u6587\u4EF6\u4EE5\u53CA\u6240\u6709\u914D\u7F6E\u6587\u4EF6\u90FD\u662F\u5B58\u4E8E\u672C\u5730\u7684, \u5982\u679C\u8981\u534F\u540C\u5DE5\u4F5C, \u5219\u9700\u5C06\u6587\u4EF6\u63A8\u9001\u5230\u8FDC\u7AEF, \u53EF\u4EE5\u4F7F\u7528<code>Github</code>, <code>GitLab</code>, <code>aws S3</code>\u7B49\u7B49, \u540C\u65F6, \u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E91\u7AEF\u5E73\u53F0\u6765\u5B58\u50A8\u548C\u534F\u540C\u5DE5\u4F5C.</p><p>Terraform Cloud \u4F7F\u7528\u53C2\u8003: <a href="https://learn.hashicorp.com/tutorials/terraform/aws-remote?in=terraform/aws-get-started" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/terraform/aws-remote?in=terraform/aws-get-started</a></p><p>token\u751F\u6210: <a href="https://app.terraform.io/app/settings/tokens" target="_blank" rel="noopener noreferrer">https://app.terraform.io/app/settings/tokens</a>, \u5C06\u751F\u6210\u4E4B\u540E\u7684token\u653E\u7F6E\u4E8E<code>~/.terraformrc</code>\u6587\u4EF6\u4E2D(Windows\u7CFB\u7EDF\u4E3A<code>%APPDATA%\\terraform.rc</code>), \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u6240\u793A:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">credentials </span><span style="color:#C98A7D;">&quot;app.terraform.io&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  token = </span><span style="color:#C98A7D;">&quot;REPLACE_ME&quot;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">credentials </span><span style="color:#B56959;">&quot;app.terraform.io&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  token = </span><span style="color:#B56959;">&quot;REPLACE_ME&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5F15\u7528\u8FDC\u7AEF\u5B58\u50A8\u914D\u7F6E\u793A\u4F8B\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u6240\u793A:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">terraform </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  backend </span><span style="color:#C98A7D;">&quot;remote&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    organization = </span><span style="color:#C98A7D;">&quot;AGou-ops&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    workspaces </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      name = </span><span style="color:#C98A7D;">&quot;Example-Workspace&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">terraform </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  backend </span><span style="color:#B56959;">&quot;remote&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    organization = </span><span style="color:#B56959;">&quot;AGou-ops&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    workspaces </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      name = </span><span style="color:#B56959;">&quot;Example-Workspace&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\u521D\u59CB\u5316\u5373\u53EF, <code>terraform init</code></p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><ul><li><code>terraform apply [--auto-approve -target &lt;RESOURCES&gt;]</code>: \u5E94\u7528.tf\u6587\u4EF6, \u5E76\u81EA\u52A8\u5E94\u7B54yes, \u6307\u5B9A\u8D44\u6E90\u540D\u79F0;</li><li><code>terraform fmt</code>: \u683C\u5F0F\u5316\u914D\u7F6E\u6587\u4EF6;</li><li><code>terraform validate</code>: \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u8BED\u6CD5\u662F\u5426\u6B63\u786E;</li><li><code>terraform show</code>: \u67E5\u770B\u751F\u6210\u4E4B\u540E\u7684\u72B6\u6001;</li><li><code>terraform state list</code>: \u67E5\u770B\u72B6\u6001\u5217\u8868;</li><li><code>terraform state show &lt;STATE_LIST_OUTPUT_NAME&gt;</code>: \u67E5\u770B\u6307\u5B9A\u72B6\u6001\u7684\u8BE6\u7EC6\u4FE1\u606F;</li><li><code>terraform refresh</code>: \u5237\u65B0\u72B6\u6001;</li><li><code>terraform destroy [-target &lt;RESOURCES&gt;]</code>: \u6467\u6BC1;</li></ul><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>Terraform Documentation: <a href="https://www.terraform.io/docs" target="_blank" rel="noopener noreferrer">https://www.terraform.io/docs</a></li><li>Terraform AWS: <a href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs" target="_blank" rel="noopener noreferrer">https://registry.terraform.io/providers/hashicorp/aws/latest/docs</a></li><li>Terraform Provider: <a href="https://www.terraform.io/docs/providers/index.html" target="_blank" rel="noopener noreferrer">https://www.terraform.io/docs/providers/index.html</a></li></ul>`,36),o=[e];function r(c,t,i,y,A,d){return a(),n("div",null,o)}var B=s(p,[["render",r]]);export{m as __pageData,B as default};
