import{_ as s,o as a,c as e,a as n}from"./app.1e6146c3.js";const k=JSON.parse('{"title":"k3s & k3d Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"k3s","slug":"k3s"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"k3d \u7B80\u4ECB","slug":"k3d-\u7B80\u4ECB"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5-1"},{"level":3,"title":"linux\u7CFB\u7EDF\u4E0B","slug":"linux\u7CFB\u7EDF\u4E0B"},{"level":3,"title":"Windows\u7CFB\u7EDF\u4E0B","slug":"windows\u7CFB\u7EDF\u4E0B"},{"level":2,"title":"\u96C6\u7FA4\u90E8\u7F72","slug":"\u96C6\u7FA4\u90E8\u7F72"},{"level":2,"title":"\u8F93\u51FAkubeconfig\u4FE1\u606F","slug":"\u8F93\u51FAkubeconfig\u4FE1\u606F"},{"level":2,"title":"\u66B4\u9732\u670D\u52A1","slug":"\u66B4\u9732\u670D\u52A1"},{"level":2,"title":"1. via Ingress","slug":"_1-via-ingress"},{"level":2,"title":"2. via NodePort","slug":"_2-via-nodeport"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/k3s - k3d Basic.md","lastUpdated":1657272051000}'),l={name:"LinuxBasics/k3s - k3d Basic.md"},p=n(`<h1 id="k3s-k3d-basic" tabindex="-1">k3s &amp; k3d Basic <a class="header-anchor" href="#k3s-k3d-basic" aria-hidden="true">#</a></h1><h2 id="k3s" tabindex="-1">k3s <a class="header-anchor" href="#k3s" aria-hidden="true">#</a></h2><p><strong>Lightweight Kubernetes</strong></p><p>\u5B98\u65B9\u7AD9\u70B9\uFF1A<a href="https://k3s.io" target="_blank" rel="noopener noreferrer">https://k3s.io</a></p><p>\u5B98\u65B9\u4ED3\u5E93\uFF1A<a href="https://github.com/rancher/k3s" target="_blank" rel="noopener noreferrer">https://github.com/rancher/k3s</a></p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u5C06<code>k3s</code>\u5B89\u88C5\u6210\u4E3A\u670D\u52A1\uFF1A</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">curl -sfL https://get.k3s.io </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> sh -</span></span>
<span class="line"><span style="color:#758575;"># \u6DFB\u52A0worker\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">curl -sfL https://get.k3s.io </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> K3S_URL=https://k3s-server:6443 K3S_TOKEN=</span><span style="color:#C98A7D;">\`ssh k3s-server  cat /var/lib/rancher/k3s/server/node-token\`</span><span style="color:#DBD7CA;"> sh -</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">curl -sfL https://get.k3s.io </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> sh -</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6DFB\u52A0worker\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">curl -sfL https://get.k3s.io </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> K3S_URL=https://k3s-server:6443 K3S_TOKEN=</span><span style="color:#B56959;">\`ssh k3s-server  cat /var/lib/rancher/k3s/server/node-token\`</span><span style="color:#393A34;"> sh -</span></span>
<span class="line"></span></code></pre></div><p>A kubeconfig file is written to <code>/etc/rancher/k3s/k3s.yaml</code>.</p><p>\u624B\u52A8\u5B89\u88C5\u4F7F\u7528<code>k3s</code>\uFF1A</p><ol><li>Download <code>k3s</code> from latest <a href="https://github.com/rancher/k3s/releases/latest" target="_blank" rel="noopener noreferrer">release</a>, x86_64, armhf, and arm64 are supported.</li><li>Run server.</li></ol><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">sudo k3s server </span><span style="color:#CB7676;">&amp;</span></span>
<span class="line"><span style="color:#758575;"># Kubeconfig is written to /etc/rancher/k3s/k3s.yaml</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo k3s kubectl get nodes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># On a different node run the below. NODE_TOKEN comes from</span></span>
<span class="line"><span style="color:#758575;"># /var/lib/rancher/k3s/server/node-token on your server</span></span>
<span class="line"><span style="color:#DBD7CA;">sudo k3s agent --server https://myserver:6443 --token </span><span style="color:#858585;">\${</span><span style="color:#B8A965;">NODE_TOKEN</span><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo k3s server </span><span style="color:#AB5959;">&amp;</span></span>
<span class="line"><span style="color:#A0ADA0;"># Kubeconfig is written to /etc/rancher/k3s/k3s.yaml</span></span>
<span class="line"><span style="color:#393A34;">sudo k3s kubectl get nodes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># On a different node run the below. NODE_TOKEN comes from</span></span>
<span class="line"><span style="color:#A0ADA0;"># /var/lib/rancher/k3s/server/node-token on your server</span></span>
<span class="line"><span style="color:#393A34;">sudo k3s agent --server https://myserver:6443 --token </span><span style="color:#8E8F8B;">\${</span><span style="color:#8C862B;">NODE_TOKEN</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="k3d-\u7B80\u4ECB" tabindex="-1">k3d \u7B80\u4ECB <a class="header-anchor" href="#k3d-\u7B80\u4ECB" aria-hidden="true">#</a></h2><blockquote><p>k3d is a lightweight wrapper to run k3s (Rancher Lab\u2019s minimal Kubernetes distribution) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.</p></blockquote><p>\u5B98\u65B9\u7AD9\u70B9: <a href="https://k3d.io" target="_blank" rel="noopener noreferrer">https://k3d.io</a></p><h2 id="\u5B89\u88C5-1" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a></h2><h3 id="linux\u7CFB\u7EDF\u4E0B" tabindex="-1">linux\u7CFB\u7EDF\u4E0B <a class="header-anchor" href="#linux\u7CFB\u7EDF\u4E0B" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># use the install script to grab the latest release:</span></span>
<span class="line"><span style="color:#DBD7CA;">wget: wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> bash</span></span>
<span class="line"><span style="color:#758575;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#DBD7CA;">curl: curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> bash</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># use the install script to grab the latest release:</span></span>
<span class="line"><span style="color:#393A34;">wget: wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> bash</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#393A34;">curl: curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> bash</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="windows\u7CFB\u7EDF\u4E0B" tabindex="-1">Windows\u7CFB\u7EDF\u4E0B <a class="header-anchor" href="#windows\u7CFB\u7EDF\u4E0B" aria-hidden="true">#</a></h3><p>\u4ECE<a href="https://github.com/rancher/k3d/releases/tag/v3.1.3" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u4ED3\u5E93</a>\u4E2D\u4E0B\u8F7D\u5BF9\u5E94\u7684\u5305, \u914D\u7F6E\u597D\u73AF\u5883\u53D8\u91CF\u5373\u53EF.</p><h2 id="\u96C6\u7FA4\u90E8\u7F72" tabindex="-1">\u96C6\u7FA4\u90E8\u7F72 <a class="header-anchor" href="#\u96C6\u7FA4\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u5355\u8282\u70B9\u90E8\u7F72:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">k3d cluster create mycluster</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">k3d cluster create mycluster</span></span>
<span class="line"></span></code></pre></div><p>\u591A\u8282\u70B9\u90E8\u7F72:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">k3d cluster create multiserver --servers 3</span></span>
<span class="line"><span style="color:#758575;"># \u5411\u5DF2\u5B58\u5728\u7684\u96C6\u7FA4\u4E2D\u6DFB\u52A0\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">k3d node create newserver --cluster multiserver --role server</span></span>
<span class="line"><span style="color:#758575;"># \u90E8\u7F72\u4E24\u4E2Aagent\u8282\u70B9</span></span>
<span class="line"><span style="color:#DBD7CA;">k3d cluster create --api-port 6550 -p </span><span style="color:#C98A7D;">&quot;8081:80@loadbalancer&quot;</span><span style="color:#DBD7CA;"> --agents 2</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">k3d cluster create multiserver --servers 3</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5411\u5DF2\u5B58\u5728\u7684\u96C6\u7FA4\u4E2D\u6DFB\u52A0\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">k3d node create newserver --cluster multiserver --role server</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u90E8\u7F72\u4E24\u4E2Aagent\u8282\u70B9</span></span>
<span class="line"><span style="color:#393A34;">k3d cluster create --api-port 6550 -p </span><span style="color:#B56959;">&quot;8081:80@loadbalancer&quot;</span><span style="color:#393A34;"> --agents 2</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8F93\u51FAkubeconfig\u4FE1\u606F" tabindex="-1">\u8F93\u51FAkubeconfig\u4FE1\u606F <a class="header-anchor" href="#\u8F93\u51FAkubeconfig\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">k3d kubeconfig write k3s-default</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">k3d kubeconfig write k3s-default</span></span>
<span class="line"></span></code></pre></div><h2 id="\u66B4\u9732\u670D\u52A1" tabindex="-1">\u66B4\u9732\u670D\u52A1 <a class="header-anchor" href="#\u66B4\u9732\u670D\u52A1" aria-hidden="true">#</a></h2><blockquote><h2 id="_1-via-ingress" tabindex="-1">1. via Ingress <a class="header-anchor" href="#_1-via-ingress" aria-hidden="true">#</a></h2><p>In this example, we will deploy a simple nginx webserver deployment and make it accessible via ingress. Therefore, we have to create the cluster in a way, that the internal port 80 (where the <code>traefik</code> ingress controller is listening on) is exposed on the host system.</p><ol><li><p>Create a cluster, mapping the ingress port 80 to localhost:8081</p><p><code>k3d cluster create --api-port 6550 -p &quot;8081:80@loadbalancer&quot; --agents 2</code></p><p>Good to know</p><ul><li><code>--api-port 6550</code> is not required for the example to work. It\u2019s used to have <code>k3s</code>\u2018s API-Server listening on port 6550 with that port mapped to the host system.</li><li>the port-mapping construct<code>8081:80@loadbalancer</code>means <ul><li>map port <code>8081</code> from the host to port <code>80</code> on the container which matches the nodefilter <code>loadbalancer</code></li></ul></li><li>the<code>loadbalancer</code>nodefilter matches only the<code>serverlb</code> that\u2019s deployed in front of a cluster\u2019s server nodes <ul><li>all ports exposed on the <code>serverlb</code> will be proxied to the same ports on all server nodes in the cluster</li></ul></li></ul></li><li><p>Get the kubeconfig file</p><p><code>export KUBECONFIG=&quot;$(k3d kubeconfig write k3s-default)&quot;</code></p></li><li><p>Create a nginx deployment</p><p><code>kubectl create deployment nginx --image=nginx</code></p></li><li><p>Create a ClusterIP service for it</p><p><code>kubectl create service clusterip nginx --tcp=80:80</code></p></li><li><p>Create an ingress object for it with <code>kubectl apply -f</code> <em>Note</em>: <code>k3s</code> deploys <a href="https://github.com/containous/traefik" target="_blank" rel="noopener noreferrer"><code>traefik</code></a> as the default ingress controller</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">apiVersion: extensions/v1beta1</span></span>
<span class="line"><span style="color:#dbd7ca;">kind: Ingress</span></span>
<span class="line"><span style="color:#dbd7ca;">metadata:</span></span>
<span class="line"><span style="color:#dbd7ca;">  name: nginx</span></span>
<span class="line"><span style="color:#dbd7ca;">  annotations:</span></span>
<span class="line"><span style="color:#dbd7ca;">    ingress.kubernetes.io/ssl-redirect: &quot;false&quot;</span></span>
<span class="line"><span style="color:#dbd7ca;">spec:</span></span>
<span class="line"><span style="color:#dbd7ca;">  rules:</span></span>
<span class="line"><span style="color:#dbd7ca;">  - http:</span></span>
<span class="line"><span style="color:#dbd7ca;">      paths:</span></span>
<span class="line"><span style="color:#dbd7ca;">      - path: /</span></span>
<span class="line"><span style="color:#dbd7ca;">        backend:</span></span>
<span class="line"><span style="color:#dbd7ca;">          serviceName: nginx</span></span>
<span class="line"><span style="color:#dbd7ca;">          servicePort: 80</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">apiVersion: extensions/v1beta1</span></span>
<span class="line"><span style="color:#393a34;">kind: Ingress</span></span>
<span class="line"><span style="color:#393a34;">metadata:</span></span>
<span class="line"><span style="color:#393a34;">  name: nginx</span></span>
<span class="line"><span style="color:#393a34;">  annotations:</span></span>
<span class="line"><span style="color:#393a34;">    ingress.kubernetes.io/ssl-redirect: &quot;false&quot;</span></span>
<span class="line"><span style="color:#393a34;">spec:</span></span>
<span class="line"><span style="color:#393a34;">  rules:</span></span>
<span class="line"><span style="color:#393a34;">  - http:</span></span>
<span class="line"><span style="color:#393a34;">      paths:</span></span>
<span class="line"><span style="color:#393a34;">      - path: /</span></span>
<span class="line"><span style="color:#393a34;">        backend:</span></span>
<span class="line"><span style="color:#393a34;">          serviceName: nginx</span></span>
<span class="line"><span style="color:#393a34;">          servicePort: 80</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div></li><li><p>Curl it via localhost</p><p><code>curl localhost:8081/</code></p></li></ol><h2 id="_2-via-nodeport" tabindex="-1">2. via NodePort <a class="header-anchor" href="#_2-via-nodeport" aria-hidden="true">#</a></h2><ol><li><p>Create a cluster, mapping the port 30080 from agent-0 to localhost:8082</p><p><code>k3d cluster create mycluster -p &quot;8082:30080@agent[0]&quot; --agents 2</code></p><ul><li><strong>Note</strong>: Kubernetes\u2019 default NodePort range is <a href="https://kubernetes.io/docs/concepts/services-networking/service/#nodeport" target="_blank" rel="noopener noreferrer"><code>30000-32767</code></a></li><li><strong>Note</strong>: You may as well expose the whole NodePort range from the very beginning, e.g. via <code>k3d cluster create mycluster --agents 3 -p &quot;30000-32767:30000-32767@server[0]&quot;</code> (See <a href="https://www.youtube.com/watch?v=5HaU6338lAk" target="_blank" rel="noopener noreferrer">this video from @portainer</a>)</li></ul></li></ol><p>\u2026 (Steps 2 and 3 like above) \u2026</p><ol><li><p>Create a NodePort service for it with <code>kubectl apply -f</code></p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">apiVersion: v1</span></span>
<span class="line"><span style="color:#dbd7ca;">kind: Service</span></span>
<span class="line"><span style="color:#dbd7ca;">metadata:</span></span>
<span class="line"><span style="color:#dbd7ca;">  labels:</span></span>
<span class="line"><span style="color:#dbd7ca;">    app: nginx</span></span>
<span class="line"><span style="color:#dbd7ca;">  name: nginx</span></span>
<span class="line"><span style="color:#dbd7ca;">spec:</span></span>
<span class="line"><span style="color:#dbd7ca;">  ports:</span></span>
<span class="line"><span style="color:#dbd7ca;">  - name: 80-80</span></span>
<span class="line"><span style="color:#dbd7ca;">    nodePort: 30080</span></span>
<span class="line"><span style="color:#dbd7ca;">    port: 80</span></span>
<span class="line"><span style="color:#dbd7ca;">    protocol: TCP</span></span>
<span class="line"><span style="color:#dbd7ca;">    targetPort: 80</span></span>
<span class="line"><span style="color:#dbd7ca;">  selector:</span></span>
<span class="line"><span style="color:#dbd7ca;">    app: nginx</span></span>
<span class="line"><span style="color:#dbd7ca;">  type: NodePort</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">apiVersion: v1</span></span>
<span class="line"><span style="color:#393a34;">kind: Service</span></span>
<span class="line"><span style="color:#393a34;">metadata:</span></span>
<span class="line"><span style="color:#393a34;">  labels:</span></span>
<span class="line"><span style="color:#393a34;">    app: nginx</span></span>
<span class="line"><span style="color:#393a34;">  name: nginx</span></span>
<span class="line"><span style="color:#393a34;">spec:</span></span>
<span class="line"><span style="color:#393a34;">  ports:</span></span>
<span class="line"><span style="color:#393a34;">  - name: 80-80</span></span>
<span class="line"><span style="color:#393a34;">    nodePort: 30080</span></span>
<span class="line"><span style="color:#393a34;">    port: 80</span></span>
<span class="line"><span style="color:#393a34;">    protocol: TCP</span></span>
<span class="line"><span style="color:#393a34;">    targetPort: 80</span></span>
<span class="line"><span style="color:#393a34;">  selector:</span></span>
<span class="line"><span style="color:#393a34;">    app: nginx</span></span>
<span class="line"><span style="color:#393a34;">  type: NodePort</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div></li><li><p>Curl it via localhost</p><p><code>curl localhost:8082/</code></p></li></ol></blockquote><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><p>k3d\u5B98\u65B9github\u4ED3\u5E93: <a href="https://github.com/rancher/k3d" target="_blank" rel="noopener noreferrer">https://github.com/rancher/k3d</a></p></li><li><p>k3d Documentation: <a href="https://k3d.io/" target="_blank" rel="noopener noreferrer">https://k3d.io/</a></p></li></ul>`,31),o=[p];function r(t,c,i,d,h,u){return a(),e("div",null,o)}var g=s(l,[["render",r]]);export{k as __pageData,g as default};
