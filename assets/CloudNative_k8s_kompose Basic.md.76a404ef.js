import{_ as s,o as a,c as n,a as e}from"./app.1e6146c3.js";const b=JSON.parse('{"title":"Kompose Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":3,"title":"A conversion tool to go from Docker Compose to Kubernetes","slug":"a-conversion-tool-to-go-from-docker-compose-to-kubernetes"},{"level":2,"title":"\u7B80\u5355\u6837\u4F8B","slug":"\u7B80\u5355\u6837\u4F8B"},{"level":2,"title":"Minikube and Kompose","slug":"minikube-and-kompose"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"CloudNative/k8s/kompose Basic.md","lastUpdated":1657272051000}'),o={name:"CloudNative/k8s/kompose Basic.md"},l=e(`<h1 id="kompose-basic" tabindex="-1">Kompose Basic <a class="header-anchor" href="#kompose-basic" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><h3 id="a-conversion-tool-to-go-from-docker-compose-to-kubernetes" tabindex="-1">A conversion tool to go from Docker Compose to Kubernetes <a class="header-anchor" href="#a-conversion-tool-to-go-from-docker-compose-to-kubernetes" aria-hidden="true">#</a></h3><h4 id="what\u2019s-kompose" tabindex="-1">What\u2019s Kompose? <a class="header-anchor" href="#what\u2019s-kompose" aria-hidden="true">#</a></h4><p>Kompose is a conversion tool for Docker Compose to container orchestrators such as Kubernetes (or OpenShift).</p><p>Kompose is deployed as a binary onto a client. To install Kompose on Katacoda, run the command as blow:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">curl -L https://github.com/kubernetes/kompose/releases/download/v1.9.0/kompose-linux-amd64 -o /usr/bin/kompose </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> chmod +x /usr/bin/kompose</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">curl -L https://github.com/kubernetes/kompose/releases/download/v1.9.0/kompose-linux-amd64 -o /usr/bin/kompose </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> chmod +x /usr/bin/kompose</span></span>
<span class="line"></span></code></pre></div><p>Details on how to install Kompose for your OS can be found at <a href="https://github.com/kubernetes/kompose/releases" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes/kompose/releases</a></p><h2 id="\u7B80\u5355\u6837\u4F8B" tabindex="-1">\u7B80\u5355\u6837\u4F8B <a class="header-anchor" href="#\u7B80\u5355\u6837\u4F8B" aria-hidden="true">#</a></h2><p><code>docker-compose.yaml</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#429988;">version</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#429988;">services</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">redis-master</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">redis:latest</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;6379&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">redis-slave</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">gcr.io/google_samples/gb-redisslave:v1</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;6379&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">environment</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">GET_HOSTS_FROM=dns</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#429988;">frontend</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">image</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">gcr.io/google-samples/gb-frontend:v3</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">ports</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;80:80&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#429988;">environment</span><span style="color:#858585;">:</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">-</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">GET_HOSTS_FROM=dns</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#2F8A89;">version</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#2F8A89;">services</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">redis-master</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">redis:latest</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;6379&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">redis-slave</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">gcr.io/google_samples/gb-redisslave:v1</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;6379&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">environment</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">GET_HOSTS_FROM=dns</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#2F8A89;">frontend</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">image</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">gcr.io/google-samples/gb-frontend:v3</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">ports</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;80:80&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#2F8A89;">environment</span><span style="color:#8E8F8B;">:</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">-</span><span style="color:#393A34;"> </span><span style="color:#B56959;">GET_HOSTS_FROM=dns</span></span>
<span class="line"></span></code></pre></div><p>As with Docker Compose, Kompose allows the Images to be deployed using a single command of <code>kompose up</code></p><p>The details of what has been deployed can be discovered with the Kubernetes CLI <em>kubectl</em>.</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">kubectl get deployment,svc,pods,pvc</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">kubectl get deployment,svc,pods,pvc</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>Kompose also has the ability to take existing Compose files and generate the related Kubernetes Manifest files.</p><p>The command <code>kompose convert</code> will generate the files, viewable via <code>ls</code>.</p><p>Use command <code>kompose convert -j</code> will generate the json format files.</p><p>Use command <code>kompose --provider openshift convert </code> will generate the <code>OpenShift</code> format files.</p><blockquote><p>\u8F6C\u8F7D\uFF1ADeploy Docker Compose with Kompose -- Katacoda</p></blockquote><h2 id="minikube-and-kompose" tabindex="-1">Minikube and Kompose <a class="header-anchor" href="#minikube-and-kompose" aria-hidden="true">#</a></h2><p>In this guide, we\u2019ll deploy a sample <code>docker-compose.yaml</code> file to a Kubernetes cluster.</p><p>Requirements:</p><ul><li><a href="https://github.com/kubernetes/minikube" target="_blank" rel="noopener noreferrer">minikube</a></li><li><a href="https://github.com/kubernetes/kompose" target="_blank" rel="noopener noreferrer">kompose</a></li></ul><p><strong>Start <code>minikube</code>:</strong></p><p>If you don\u2019t already have a Kubernetes cluster running, <a href="https://github.com/kubernetes/minikube" target="_blank" rel="noopener noreferrer">minikube</a> is the best way to get started.</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">$ minikube start</span></span>
<span class="line"><span style="color:#dbd7ca;">Starting local Kubernetes v1.7.5 cluster...</span></span>
<span class="line"><span style="color:#dbd7ca;">Starting VM...</span></span>
<span class="line"><span style="color:#dbd7ca;">Getting VM IP address...</span></span>
<span class="line"><span style="color:#dbd7ca;">Moving files into cluster...</span></span>
<span class="line"><span style="color:#dbd7ca;">Setting up certs...</span></span>
<span class="line"><span style="color:#dbd7ca;">Connecting to cluster...</span></span>
<span class="line"><span style="color:#dbd7ca;">Setting up kubeconfig...</span></span>
<span class="line"><span style="color:#dbd7ca;">Starting cluster components...</span></span>
<span class="line"><span style="color:#dbd7ca;">Kubectl is now configured to use the cluster</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">$ minikube start</span></span>
<span class="line"><span style="color:#393a34;">Starting local Kubernetes v1.7.5 cluster...</span></span>
<span class="line"><span style="color:#393a34;">Starting VM...</span></span>
<span class="line"><span style="color:#393a34;">Getting VM IP address...</span></span>
<span class="line"><span style="color:#393a34;">Moving files into cluster...</span></span>
<span class="line"><span style="color:#393a34;">Setting up certs...</span></span>
<span class="line"><span style="color:#393a34;">Connecting to cluster...</span></span>
<span class="line"><span style="color:#393a34;">Setting up kubeconfig...</span></span>
<span class="line"><span style="color:#393a34;">Starting cluster components...</span></span>
<span class="line"><span style="color:#393a34;">Kubectl is now configured to use the cluster</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p><strong>Download an <a href="https://raw.githubusercontent.com/kubernetes/kompose/master/examples/docker-compose.yaml" target="_blank" rel="noopener noreferrer">example Docker Compose file</a>, or use your own:</strong></p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">wget https://raw.githubusercontent.com/kubernetes/kompose/master/examples/docker-compose.yaml</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">wget https://raw.githubusercontent.com/kubernetes/kompose/master/examples/docker-compose.yaml</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p><strong>Convert your Docker Compose file to Kubernetes:</strong></p><p>Run <code>kompose convert</code> in the same directory as your <code>docker-compose.yaml</code> file.</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">$ kompose convert                           </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Kubernetes file &quot;frontend-service.yaml&quot; created         </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Kubernetes file &quot;redis-master-service.yaml&quot; created     </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Kubernetes file &quot;redis-slave-service.yaml&quot; created      </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Kubernetes file &quot;frontend-deployment.yaml&quot; created      </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Kubernetes file &quot;redis-master-deployment.yaml&quot; created  </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Kubernetes file &quot;redis-slave-deployment.yaml&quot; created </span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">$ kompose convert                           </span></span>
<span class="line"><span style="color:#393a34;">INFO Kubernetes file &quot;frontend-service.yaml&quot; created         </span></span>
<span class="line"><span style="color:#393a34;">INFO Kubernetes file &quot;redis-master-service.yaml&quot; created     </span></span>
<span class="line"><span style="color:#393a34;">INFO Kubernetes file &quot;redis-slave-service.yaml&quot; created      </span></span>
<span class="line"><span style="color:#393a34;">INFO Kubernetes file &quot;frontend-deployment.yaml&quot; created      </span></span>
<span class="line"><span style="color:#393a34;">INFO Kubernetes file &quot;redis-master-deployment.yaml&quot; created  </span></span>
<span class="line"><span style="color:#393a34;">INFO Kubernetes file &quot;redis-slave-deployment.yaml&quot; created </span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>Alternatively, you can convert and deploy directly to Kubernetes with <code>kompose up</code>.</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">$ kompose up</span></span>
<span class="line"><span style="color:#dbd7ca;">We are going to create Kubernetes Deployments, Services and PersistentVolumeClaims for your Dockerized application. </span></span>
<span class="line"><span style="color:#dbd7ca;">If you need different kind of resources, use the &#39;kompose convert&#39; and &#39;kubectl create -f&#39; commands instead. </span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Successfully created Service: redis          </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Successfully created Service: web            </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Successfully created Deployment: redis       </span></span>
<span class="line"><span style="color:#dbd7ca;">INFO Successfully created Deployment: web         </span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">Your application has been deployed to Kubernetes. You can run &#39;kubectl get deployment,svc,pods,pvc&#39; for details.</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">$ kompose up</span></span>
<span class="line"><span style="color:#393a34;">We are going to create Kubernetes Deployments, Services and PersistentVolumeClaims for your Dockerized application. </span></span>
<span class="line"><span style="color:#393a34;">If you need different kind of resources, use the &#39;kompose convert&#39; and &#39;kubectl create -f&#39; commands instead. </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">INFO Successfully created Service: redis          </span></span>
<span class="line"><span style="color:#393a34;">INFO Successfully created Service: web            </span></span>
<span class="line"><span style="color:#393a34;">INFO Successfully created Deployment: redis       </span></span>
<span class="line"><span style="color:#393a34;">INFO Successfully created Deployment: web         </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Your application has been deployed to Kubernetes. You can run &#39;kubectl get deployment,svc,pods,pvc&#39; for details.</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p><strong>Access the newly deployed service:</strong></p><p>Now that your service has been deployed, let\u2019s access it.</p><p>If you\u2019re using <code>minikube</code> you may access it via the <code>minikube service</code> command.</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">$ minikube service frontend</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">$ minikube service frontend</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>Otherwise, use <code>kubectl</code> to see what IP the service is using:</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">$ kubectl describe svc frontend</span></span>
<span class="line"><span style="color:#dbd7ca;">Name:                   frontend</span></span>
<span class="line"><span style="color:#dbd7ca;">Namespace:              default</span></span>
<span class="line"><span style="color:#dbd7ca;">Labels:                 service=frontend</span></span>
<span class="line"><span style="color:#dbd7ca;">Selector:               service=frontend</span></span>
<span class="line"><span style="color:#dbd7ca;">Type:                   LoadBalancer</span></span>
<span class="line"><span style="color:#dbd7ca;">IP:                     10.0.0.183</span></span>
<span class="line"><span style="color:#dbd7ca;">LoadBalancer Ingress:   123.45.67.89</span></span>
<span class="line"><span style="color:#dbd7ca;">Port:                   80      80/TCP</span></span>
<span class="line"><span style="color:#dbd7ca;">NodePort:               80      31144/TCP</span></span>
<span class="line"><span style="color:#dbd7ca;">Endpoints:              172.17.0.4:80</span></span>
<span class="line"><span style="color:#dbd7ca;">Session Affinity:       None</span></span>
<span class="line"><span style="color:#dbd7ca;">No events.</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">$ kubectl describe svc frontend</span></span>
<span class="line"><span style="color:#393a34;">Name:                   frontend</span></span>
<span class="line"><span style="color:#393a34;">Namespace:              default</span></span>
<span class="line"><span style="color:#393a34;">Labels:                 service=frontend</span></span>
<span class="line"><span style="color:#393a34;">Selector:               service=frontend</span></span>
<span class="line"><span style="color:#393a34;">Type:                   LoadBalancer</span></span>
<span class="line"><span style="color:#393a34;">IP:                     10.0.0.183</span></span>
<span class="line"><span style="color:#393a34;">LoadBalancer Ingress:   123.45.67.89</span></span>
<span class="line"><span style="color:#393a34;">Port:                   80      80/TCP</span></span>
<span class="line"><span style="color:#393a34;">NodePort:               80      31144/TCP</span></span>
<span class="line"><span style="color:#393a34;">Endpoints:              172.17.0.4:80</span></span>
<span class="line"><span style="color:#393a34;">Session Affinity:       None</span></span>
<span class="line"><span style="color:#393a34;">No events.</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>Note: If you\u2019re using a cloud provider, your IP will be listed next to <code>LoadBalancer Ingress</code>.</p><p>If you have yet to expose your service (for example, within GCE), use the command:</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">kubectl expose deployment frontend --type=&quot;LoadBalancer&quot; </span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">kubectl expose deployment frontend --type=&quot;LoadBalancer&quot; </span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>To check functionality, you may also <code>curl</code> the URL.</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">$ curl http://123.45.67.89</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">$ curl http://123.45.67.89</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>kompose user-guide: <a href="https://kompose.io/user-guide/" target="_blank" rel="noopener noreferrer">https://kompose.io/user-guide/</a></li></ul>`,46),p=[l];function c(t,r,i,d,y,u){return a(),n("div",null,p)}var g=s(o,[["render",c]]);export{b as __pageData,g as default};
