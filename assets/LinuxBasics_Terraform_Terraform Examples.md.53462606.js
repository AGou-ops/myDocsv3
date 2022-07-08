import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"Terraform \u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u81EA\u5B9A\u4E49vpc\u3001gw\u3001subnet\u3001networkr\u3001eip\u548Cinstance","slug":"\u521B\u5EFA\u81EA\u5B9A\u4E49vpc\u3001gw\u3001subnet\u3001networkr\u3001eip\u548Cinstance"},{"level":2,"title":"\u521B\u5EFA\u81EA\u5B9A\u4E49role\u5E76\u9644\u52A0\u89C4\u5219\u3001\u7ED1\u5B9A\u5230instance","slug":"\u521B\u5EFA\u81EA\u5B9A\u4E49role\u5E76\u9644\u52A0\u89C4\u5219\u3001\u7ED1\u5B9A\u5230instance"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"LinuxBasics/Terraform/Terraform Examples.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/Terraform/Terraform Examples.md"},o=p(`<h1 id="terraform-\u793A\u4F8B" tabindex="-1">Terraform \u793A\u4F8B <a class="header-anchor" href="#terraform-\u793A\u4F8B" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u81EA\u5B9A\u4E49vpc\u3001gw\u3001subnet\u3001networkr\u3001eip\u548Cinstance" tabindex="-1">\u521B\u5EFA\u81EA\u5B9A\u4E49vpc\u3001gw\u3001subnet\u3001networkr\u3001eip\u548Cinstance <a class="header-anchor" href="#\u521B\u5EFA\u81EA\u5B9A\u4E49vpc\u3001gw\u3001subnet\u3001networkr\u3001eip\u548Cinstance" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">terraform </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  required_providers </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    aws = </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">source</span><span style="color:#DBD7CA;">  = </span><span style="color:#C98A7D;">&quot;hashicorp/aws&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">      version = </span><span style="color:#C98A7D;">&quot;~&gt; 2.70&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">provider </span><span style="color:#C98A7D;">&quot;aws&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  profile = </span><span style="color:#C98A7D;">&quot;default&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  region  = </span><span style="color:#C98A7D;">&quot;us-east-2&quot;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># 1. Create vpc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_vpc&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;prod-vpc&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  cidr_block = </span><span style="color:#C98A7D;">&quot;10.0.0.0/16&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  tags = </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    Name = </span><span style="color:#C98A7D;">&quot;production&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># 2. Create Internet Gateway</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_internet_gateway&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;gw&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  vpc_id = aws_vpc.prod-vpc.id</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># 3. Create Custom Route Table</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_route_table&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;prod-route-table&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  vpc_id = aws_vpc.prod-vpc.id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  route </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    cidr_block = </span><span style="color:#C98A7D;">&quot;0.0.0.0/0&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    gateway_id = aws_internet_gateway.gw.id</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  route </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    ipv6_cidr_block = </span><span style="color:#C98A7D;">&quot;::/0&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    gateway_id      = aws_internet_gateway.gw.id</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  tags = </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    Name = </span><span style="color:#C98A7D;">&quot;Prod&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># 4. Create a Subnet </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_subnet&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;subnet-1&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  vpc_id            = aws_vpc.prod-vpc.id</span></span>
<span class="line"><span style="color:#DBD7CA;">  cidr_block        = </span><span style="color:#C98A7D;">&quot;10.0.1.0/24&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  availability_zone = </span><span style="color:#C98A7D;">&quot;us-east-2a&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  tags = </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    Name = </span><span style="color:#C98A7D;">&quot;prod-subnet&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># 5. Associate subnet with Route Table</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_route_table_association&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;a&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  subnet_id      = aws_subnet.subnet-1.id</span></span>
<span class="line"><span style="color:#DBD7CA;">  route_table_id = aws_route_table.prod-route-table.id</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># 6. Create Security Group to allow port 22,80,443</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_security_group&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;allow_web&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  name        = </span><span style="color:#C98A7D;">&quot;allow_web_traffic&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  description = </span><span style="color:#C98A7D;">&quot;Allow Web inbound traffic&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  vpc_id      = aws_vpc.prod-vpc.id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  ingress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    description = </span><span style="color:#C98A7D;">&quot;HTTPS&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    from_port   = 443</span></span>
<span class="line"><span style="color:#DBD7CA;">    to_port     = 443</span></span>
<span class="line"><span style="color:#DBD7CA;">    protocol    = </span><span style="color:#C98A7D;">&quot;tcp&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    cidr_blocks = </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;0.0.0.0/0&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  ingress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    description = </span><span style="color:#C98A7D;">&quot;HTTP&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    from_port   = 80</span></span>
<span class="line"><span style="color:#DBD7CA;">    to_port     = 80</span></span>
<span class="line"><span style="color:#DBD7CA;">    protocol    = </span><span style="color:#C98A7D;">&quot;tcp&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    cidr_blocks = </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;0.0.0.0/0&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  ingress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    description = </span><span style="color:#C98A7D;">&quot;SSH&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    from_port   = 22</span></span>
<span class="line"><span style="color:#DBD7CA;">    to_port     = 22</span></span>
<span class="line"><span style="color:#DBD7CA;">    protocol    = </span><span style="color:#C98A7D;">&quot;tcp&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    cidr_blocks = </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;0.0.0.0/0&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  egress </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    from_port   = 0</span></span>
<span class="line"><span style="color:#DBD7CA;">    to_port     = 0</span></span>
<span class="line"><span style="color:#DBD7CA;">    protocol    = </span><span style="color:#C98A7D;">&quot;-1&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    cidr_blocks = </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;0.0.0.0/0&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  tags = </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    Name = </span><span style="color:#C98A7D;">&quot;allow_web&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># 7. Create a network interface with an ip in the subnet that was created in step 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_network_interface&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;web-server-nic&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  subnet_id       = aws_subnet.subnet-1.id</span></span>
<span class="line"><span style="color:#DBD7CA;">  private_ips     = </span><span style="color:#858585;">[</span><span style="color:#C98A7D;">&quot;10.0.1.11&quot;</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">  security_groups = </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">aws_security_group.allow_web.id</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;"># 8. Assign an elastic IP to the network interface created in step 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_eip&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;one&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  vpc                       = </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">  network_interface         = aws_network_interface.web-server-nic.id</span></span>
<span class="line"><span style="color:#DBD7CA;">  associate_with_private_ip = </span><span style="color:#C98A7D;">&quot;10.0.1.11&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  depends_on                = </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">aws_internet_gateway.gw</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">output </span><span style="color:#C98A7D;">&quot;server_public_ip&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  value = aws_eip.one.public_ip</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># 9. Create Ubuntu server and install/enable apache2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_instance&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;web-server-instance&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  ami               = </span><span style="color:#C98A7D;">&quot;ami-07efac79022b86107&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  instance_type     = </span><span style="color:#C98A7D;">&quot;t2.micro&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  availability_zone = </span><span style="color:#C98A7D;">&quot;us-east-2a&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  key_name          = </span><span style="color:#C98A7D;">&quot;test-key&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  network_interface </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    device_index         = 0</span></span>
<span class="line"><span style="color:#DBD7CA;">    network_interface_id = aws_network_interface.web-server-nic.id</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  user_data = </span><span style="color:#CB7676;">&lt;&lt;</span><span style="color:#C98A7D;">-</span><span style="color:#4D9375;">EOF</span></span>
<span class="line"><span style="color:#C98A7D;">                #!/bin/bash</span></span>
<span class="line"><span style="color:#C98A7D;">                sudo apt update -y</span></span>
<span class="line"><span style="color:#C98A7D;">                sudo apt install apache2 -y</span></span>
<span class="line"><span style="color:#C98A7D;">                sudo systemctl start apache2</span></span>
<span class="line"><span style="color:#C98A7D;">                sudo bash -c &#39;echo &quot;&lt;h1&gt;my first server created by Terraform.&lt;/h1&gt;&quot; &gt; /var/www/html/index.html&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">                EOF</span></span>
<span class="line"><span style="color:#C98A7D;">  tags = {</span></span>
<span class="line"><span style="color:#C98A7D;">    Name = &quot;web-server&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">  }</span></span>
<span class="line"><span style="color:#C98A7D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">output &quot;server_private_ip&quot; {</span></span>
<span class="line"><span style="color:#C98A7D;">  value = aws_instance.web-server-instance.private_ip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">output &quot;server_id&quot; {</span></span>
<span class="line"><span style="color:#C98A7D;">  value = aws_instance.web-server-instance.id</span></span>
<span class="line"><span style="color:#C98A7D;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">terraform </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  required_providers </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    aws = </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B58451;">source</span><span style="color:#393A34;">  = </span><span style="color:#B56959;">&quot;hashicorp/aws&quot;</span></span>
<span class="line"><span style="color:#393A34;">      version = </span><span style="color:#B56959;">&quot;~&gt; 2.70&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">provider </span><span style="color:#B56959;">&quot;aws&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  profile = </span><span style="color:#B56959;">&quot;default&quot;</span></span>
<span class="line"><span style="color:#393A34;">  region  = </span><span style="color:#B56959;">&quot;us-east-2&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 1. Create vpc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_vpc&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;prod-vpc&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  cidr_block = </span><span style="color:#B56959;">&quot;10.0.0.0/16&quot;</span></span>
<span class="line"><span style="color:#393A34;">  tags = </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    Name = </span><span style="color:#B56959;">&quot;production&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 2. Create Internet Gateway</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_internet_gateway&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;gw&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  vpc_id = aws_vpc.prod-vpc.id</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># 3. Create Custom Route Table</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_route_table&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;prod-route-table&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  vpc_id = aws_vpc.prod-vpc.id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  route </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    cidr_block = </span><span style="color:#B56959;">&quot;0.0.0.0/0&quot;</span></span>
<span class="line"><span style="color:#393A34;">    gateway_id = aws_internet_gateway.gw.id</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  route </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    ipv6_cidr_block = </span><span style="color:#B56959;">&quot;::/0&quot;</span></span>
<span class="line"><span style="color:#393A34;">    gateway_id      = aws_internet_gateway.gw.id</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  tags = </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    Name = </span><span style="color:#B56959;">&quot;Prod&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 4. Create a Subnet </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_subnet&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;subnet-1&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  vpc_id            = aws_vpc.prod-vpc.id</span></span>
<span class="line"><span style="color:#393A34;">  cidr_block        = </span><span style="color:#B56959;">&quot;10.0.1.0/24&quot;</span></span>
<span class="line"><span style="color:#393A34;">  availability_zone = </span><span style="color:#B56959;">&quot;us-east-2a&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  tags = </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    Name = </span><span style="color:#B56959;">&quot;prod-subnet&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 5. Associate subnet with Route Table</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_route_table_association&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;a&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  subnet_id      = aws_subnet.subnet-1.id</span></span>
<span class="line"><span style="color:#393A34;">  route_table_id = aws_route_table.prod-route-table.id</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># 6. Create Security Group to allow port 22,80,443</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_security_group&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;allow_web&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  name        = </span><span style="color:#B56959;">&quot;allow_web_traffic&quot;</span></span>
<span class="line"><span style="color:#393A34;">  description = </span><span style="color:#B56959;">&quot;Allow Web inbound traffic&quot;</span></span>
<span class="line"><span style="color:#393A34;">  vpc_id      = aws_vpc.prod-vpc.id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  ingress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    description = </span><span style="color:#B56959;">&quot;HTTPS&quot;</span></span>
<span class="line"><span style="color:#393A34;">    from_port   = 443</span></span>
<span class="line"><span style="color:#393A34;">    to_port     = 443</span></span>
<span class="line"><span style="color:#393A34;">    protocol    = </span><span style="color:#B56959;">&quot;tcp&quot;</span></span>
<span class="line"><span style="color:#393A34;">    cidr_blocks = </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;0.0.0.0/0&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  ingress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    description = </span><span style="color:#B56959;">&quot;HTTP&quot;</span></span>
<span class="line"><span style="color:#393A34;">    from_port   = 80</span></span>
<span class="line"><span style="color:#393A34;">    to_port     = 80</span></span>
<span class="line"><span style="color:#393A34;">    protocol    = </span><span style="color:#B56959;">&quot;tcp&quot;</span></span>
<span class="line"><span style="color:#393A34;">    cidr_blocks = </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;0.0.0.0/0&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  ingress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    description = </span><span style="color:#B56959;">&quot;SSH&quot;</span></span>
<span class="line"><span style="color:#393A34;">    from_port   = 22</span></span>
<span class="line"><span style="color:#393A34;">    to_port     = 22</span></span>
<span class="line"><span style="color:#393A34;">    protocol    = </span><span style="color:#B56959;">&quot;tcp&quot;</span></span>
<span class="line"><span style="color:#393A34;">    cidr_blocks = </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;0.0.0.0/0&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  egress </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    from_port   = 0</span></span>
<span class="line"><span style="color:#393A34;">    to_port     = 0</span></span>
<span class="line"><span style="color:#393A34;">    protocol    = </span><span style="color:#B56959;">&quot;-1&quot;</span></span>
<span class="line"><span style="color:#393A34;">    cidr_blocks = </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;0.0.0.0/0&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  tags = </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    Name = </span><span style="color:#B56959;">&quot;allow_web&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 7. Create a network interface with an ip in the subnet that was created in step 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_network_interface&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;web-server-nic&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  subnet_id       = aws_subnet.subnet-1.id</span></span>
<span class="line"><span style="color:#393A34;">  private_ips     = </span><span style="color:#8E8F8B;">[</span><span style="color:#B56959;">&quot;10.0.1.11&quot;</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">  security_groups = </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">aws_security_group.allow_web.id</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;"># 8. Assign an elastic IP to the network interface created in step 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_eip&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;one&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  vpc                       = </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#393A34;">  network_interface         = aws_network_interface.web-server-nic.id</span></span>
<span class="line"><span style="color:#393A34;">  associate_with_private_ip = </span><span style="color:#B56959;">&quot;10.0.1.11&quot;</span></span>
<span class="line"><span style="color:#393A34;">  depends_on                = </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">aws_internet_gateway.gw</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">output </span><span style="color:#B56959;">&quot;server_public_ip&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  value = aws_eip.one.public_ip</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># 9. Create Ubuntu server and install/enable apache2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_instance&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;web-server-instance&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  ami               = </span><span style="color:#B56959;">&quot;ami-07efac79022b86107&quot;</span></span>
<span class="line"><span style="color:#393A34;">  instance_type     = </span><span style="color:#B56959;">&quot;t2.micro&quot;</span></span>
<span class="line"><span style="color:#393A34;">  availability_zone = </span><span style="color:#B56959;">&quot;us-east-2a&quot;</span></span>
<span class="line"><span style="color:#393A34;">  key_name          = </span><span style="color:#B56959;">&quot;test-key&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  network_interface </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    device_index         = 0</span></span>
<span class="line"><span style="color:#393A34;">    network_interface_id = aws_network_interface.web-server-nic.id</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  user_data = </span><span style="color:#AB5959;">&lt;&lt;</span><span style="color:#B56959;">-</span><span style="color:#1C6B48;">EOF</span></span>
<span class="line"><span style="color:#B56959;">                #!/bin/bash</span></span>
<span class="line"><span style="color:#B56959;">                sudo apt update -y</span></span>
<span class="line"><span style="color:#B56959;">                sudo apt install apache2 -y</span></span>
<span class="line"><span style="color:#B56959;">                sudo systemctl start apache2</span></span>
<span class="line"><span style="color:#B56959;">                sudo bash -c &#39;echo &quot;&lt;h1&gt;my first server created by Terraform.&lt;/h1&gt;&quot; &gt; /var/www/html/index.html&#39;</span></span>
<span class="line"><span style="color:#B56959;">                EOF</span></span>
<span class="line"><span style="color:#B56959;">  tags = {</span></span>
<span class="line"><span style="color:#B56959;">    Name = &quot;web-server&quot;</span></span>
<span class="line"><span style="color:#B56959;">  }</span></span>
<span class="line"><span style="color:#B56959;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">output &quot;server_private_ip&quot; {</span></span>
<span class="line"><span style="color:#B56959;">  value = aws_instance.web-server-instance.private_ip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">output &quot;server_id&quot; {</span></span>
<span class="line"><span style="color:#B56959;">  value = aws_instance.web-server-instance.id</span></span>
<span class="line"><span style="color:#B56959;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u81EA\u5B9A\u4E49role\u5E76\u9644\u52A0\u89C4\u5219\u3001\u7ED1\u5B9A\u5230instance" tabindex="-1">\u521B\u5EFA\u81EA\u5B9A\u4E49role\u5E76\u9644\u52A0\u89C4\u5219\u3001\u7ED1\u5B9A\u5230instance <a class="header-anchor" href="#\u521B\u5EFA\u81EA\u5B9A\u4E49role\u5E76\u9644\u52A0\u89C4\u5219\u3001\u7ED1\u5B9A\u5230instance" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_iam_role&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;example&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  name = </span><span style="color:#C98A7D;">&quot;example&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># assume_role_policy is omitted for brevity in this example. See the</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># documentation for aws_iam_role for a complete example.</span></span>
<span class="line"><span style="color:#DBD7CA;">  assume_role_policy = </span><span style="color:#C98A7D;">&quot;...&quot;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_iam_instance_profile&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;example&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># Because this expression refers to the role, Terraform can infer</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># automatically that the role must be created first.</span></span>
<span class="line"><span style="color:#DBD7CA;">  role = aws_iam_role.example.name</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_iam_role_policy&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;example&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  name   = </span><span style="color:#C98A7D;">&quot;example&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  role   = aws_iam_role.example.name</span></span>
<span class="line"><span style="color:#DBD7CA;">  policy = jsonencode</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&quot;Statement&quot;</span><span style="color:#DBD7CA;"> = </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">{</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># This policy allows software running on the EC2 instance to</span></span>
<span class="line"><span style="color:#858585;">      </span><span style="color:#758575;"># access the S3 API.</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">&quot;Action&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;s3:*&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">&quot;Effect&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;Allow&quot;</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    }</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  }</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">resource </span><span style="color:#C98A7D;">&quot;aws_instance&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;example&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  ami           = </span><span style="color:#C98A7D;">&quot;ami-a1b2c3d4&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  instance_type = </span><span style="color:#C98A7D;">&quot;t2.micro&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># Terraform can infer from this that the instance profile must</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># be created before the EC2 instance.</span></span>
<span class="line"><span style="color:#DBD7CA;">  iam_instance_profile = aws_iam_instance_profile.example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># However, if software running in this EC2 instance needs access</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># to the S3 API in order to boot properly, there is also a &quot;hidden&quot;</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># dependency on the aws_iam_role_policy that Terraform cannot</span></span>
<span class="line"><span style="color:#858585;">  </span><span style="color:#758575;"># automatically infer, so it must be declared explicitly:</span></span>
<span class="line"><span style="color:#DBD7CA;">  depends_on = </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">    aws_iam_role_policy.example,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_iam_role&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;example&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  name = </span><span style="color:#B56959;">&quot;example&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># assume_role_policy is omitted for brevity in this example. See the</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># documentation for aws_iam_role for a complete example.</span></span>
<span class="line"><span style="color:#393A34;">  assume_role_policy = </span><span style="color:#B56959;">&quot;...&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_iam_instance_profile&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;example&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># Because this expression refers to the role, Terraform can infer</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># automatically that the role must be created first.</span></span>
<span class="line"><span style="color:#393A34;">  role = aws_iam_role.example.name</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_iam_role_policy&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;example&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  name   = </span><span style="color:#B56959;">&quot;example&quot;</span></span>
<span class="line"><span style="color:#393A34;">  role   = aws_iam_role.example.name</span></span>
<span class="line"><span style="color:#393A34;">  policy = jsonencode</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;Statement&quot;</span><span style="color:#393A34;"> = </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># This policy allows software running on the EC2 instance to</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;"># access the S3 API.</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">&quot;Action&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;s3:*&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">&quot;Effect&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Allow&quot;</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">    }</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;">,</span></span>
<span class="line"><span style="color:#393A34;">  }</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">resource </span><span style="color:#B56959;">&quot;aws_instance&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;example&quot;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  ami           = </span><span style="color:#B56959;">&quot;ami-a1b2c3d4&quot;</span></span>
<span class="line"><span style="color:#393A34;">  instance_type = </span><span style="color:#B56959;">&quot;t2.micro&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># Terraform can infer from this that the instance profile must</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># be created before the EC2 instance.</span></span>
<span class="line"><span style="color:#393A34;">  iam_instance_profile = aws_iam_instance_profile.example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># However, if software running in this EC2 instance needs access</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># to the S3 API in order to boot properly, there is also a &quot;hidden&quot;</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># dependency on the aws_iam_role_policy that Terraform cannot</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;"># automatically infer, so it must be declared explicitly:</span></span>
<span class="line"><span style="color:#393A34;">  depends_on = </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">    aws_iam_role_policy.example,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/terraform-aws-modules" target="_blank" rel="noopener noreferrer">https://github.com/terraform-aws-modules</a></li></ul>`,7),e=[o];function t(c,r,i,y,u,A){return n(),a("div",null,e)}var q=s(l,[["render",t]]);export{B as __pageData,q as default};
