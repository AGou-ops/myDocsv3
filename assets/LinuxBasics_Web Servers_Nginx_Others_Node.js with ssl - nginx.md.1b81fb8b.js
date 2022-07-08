import{_ as a,o as s,c as n,a as e}from"./app.1e6146c3.js";const g=JSON.parse(`{"title":"Node.js Deployment","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Sign up for Digital Ocean","slug":"_1-sign-up-for-digital-ocean"},{"level":2,"title":"2. Create a droplet and log in via ssh","slug":"_2-create-a-droplet-and-log-in-via-ssh"},{"level":2,"title":"3. Install Node/NPM","slug":"_3-install-node-npm"},{"level":2,"title":"4. Clone your project from Github","slug":"_4-clone-your-project-from-github"},{"level":3,"title":"5. Install dependencies and test app","slug":"_5-install-dependencies-and-test-app"},{"level":2,"title":"6. Setup PM2 process manager to keep your app running","slug":"_6-setup-pm2-process-manager-to-keep-your-app-running"},{"level":3,"title":"You should now be able to access your app using your IP and port. Now we want to setup a firewall blocking that port and setup NGINX as a reverse proxy so we can access it directly using port 80 (http)","slug":"you-should-now-be-able-to-access-your-app-using-your-ip-and-port-now-we-want-to-setup-a-firewall-blocking-that-port-and-setup-nginx-as-a-reverse-proxy-so-we-can-access-it-directly-using-port-80-http"},{"level":2,"title":"7. Setup ufw firewall","slug":"_7-setup-ufw-firewall"},{"level":2,"title":"8. Install NGINX and configure","slug":"_8-install-nginx-and-configure"},{"level":3,"title":"You should now be able to visit your IP with no port (port 80) and see your app. Now let's add a domain","slug":"you-should-now-be-able-to-visit-your-ip-with-no-port-port-80-and-see-your-app-now-let-s-add-a-domain"},{"level":2,"title":"9. Add domain in Digital Ocean","slug":"_9-add-domain-in-digital-ocean"},{"level":2,"title":"Register and/or setup domain from registrar","slug":"register-and-or-setup-domain-from-registrar"}],"relativePath":"LinuxBasics/Web Servers/Nginx/Others/Node.js with ssl - nginx.md","lastUpdated":1657272051000}`),p={name:"LinuxBasics/Web Servers/Nginx/Others/Node.js with ssl - nginx.md"},l=e(`<h1 id="node-js-deployment" tabindex="-1">Node.js Deployment <a class="header-anchor" href="#node-js-deployment" aria-hidden="true">#</a></h1><blockquote><p>Steps to deploy a Node.js app to DigitalOcean using PM2, NGINX as a reverse proxy and an SSL from LetsEncrypt</p></blockquote><h2 id="_1-sign-up-for-digital-ocean" tabindex="-1">1. Sign up for Digital Ocean <a class="header-anchor" href="#_1-sign-up-for-digital-ocean" aria-hidden="true">#</a></h2><p>If you use the referal link below, you get $10 free (1 or 2 months) <a href="https://m.do.co/c/5424d440c63a" target="_blank" rel="noopener noreferrer">https://m.do.co/c/5424d440c63a</a></p><h2 id="_2-create-a-droplet-and-log-in-via-ssh" tabindex="-1">2. Create a droplet and log in via ssh <a class="header-anchor" href="#_2-create-a-droplet-and-log-in-via-ssh" aria-hidden="true">#</a></h2><p>I will be using the root user, but would suggest creating a new user</p><h2 id="_3-install-node-npm" tabindex="-1">3. Install Node/NPM <a class="header-anchor" href="#_3-install-node-npm" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">sudo apt install nodejs</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">node --version</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">sudo apt install nodejs</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">node --version</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="_4-clone-your-project-from-github" tabindex="-1">4. Clone your project from Github <a class="header-anchor" href="#_4-clone-your-project-from-github" aria-hidden="true">#</a></h2><p>There are a few ways to get your files on to the server, I would suggest using Git</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">git clone yourproject.git</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">git clone yourproject.git</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="_5-install-dependencies-and-test-app" tabindex="-1">5. Install dependencies and test app <a class="header-anchor" href="#_5-install-dependencies-and-test-app" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">cd yourproject</span></span>
<span class="line"><span style="color:#dbd7ca;">npm install</span></span>
<span class="line"><span style="color:#dbd7ca;">npm start (or whatever your start command)</span></span>
<span class="line"><span style="color:#dbd7ca;"># stop app</span></span>
<span class="line"><span style="color:#dbd7ca;">ctrl+C</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">cd yourproject</span></span>
<span class="line"><span style="color:#393a34;">npm install</span></span>
<span class="line"><span style="color:#393a34;">npm start (or whatever your start command)</span></span>
<span class="line"><span style="color:#393a34;"># stop app</span></span>
<span class="line"><span style="color:#393a34;">ctrl+C</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="_6-setup-pm2-process-manager-to-keep-your-app-running" tabindex="-1">6. Setup PM2 process manager to keep your app running <a class="header-anchor" href="#_6-setup-pm2-process-manager-to-keep-your-app-running" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">sudo npm i pm2 -g</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 start app (or whatever your file name)</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># Other pm2 commands</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 show app</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 status</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 restart app</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 stop app</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 logs (Show log stream)</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 flush (Clear logs)</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># To make sure app starts when reboot</span></span>
<span class="line"><span style="color:#dbd7ca;">pm2 startup ubuntu</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo npm i pm2 -g</span></span>
<span class="line"><span style="color:#393a34;">pm2 start app (or whatever your file name)</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Other pm2 commands</span></span>
<span class="line"><span style="color:#393a34;">pm2 show app</span></span>
<span class="line"><span style="color:#393a34;">pm2 status</span></span>
<span class="line"><span style="color:#393a34;">pm2 restart app</span></span>
<span class="line"><span style="color:#393a34;">pm2 stop app</span></span>
<span class="line"><span style="color:#393a34;">pm2 logs (Show log stream)</span></span>
<span class="line"><span style="color:#393a34;">pm2 flush (Clear logs)</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># To make sure app starts when reboot</span></span>
<span class="line"><span style="color:#393a34;">pm2 startup ubuntu</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="you-should-now-be-able-to-access-your-app-using-your-ip-and-port-now-we-want-to-setup-a-firewall-blocking-that-port-and-setup-nginx-as-a-reverse-proxy-so-we-can-access-it-directly-using-port-80-http" tabindex="-1">You should now be able to access your app using your IP and port. Now we want to setup a firewall blocking that port and setup NGINX as a reverse proxy so we can access it directly using port 80 (http) <a class="header-anchor" href="#you-should-now-be-able-to-access-your-app-using-your-ip-and-port-now-we-want-to-setup-a-firewall-blocking-that-port-and-setup-nginx-as-a-reverse-proxy-so-we-can-access-it-directly-using-port-80-http" aria-hidden="true">#</a></h3><h2 id="_7-setup-ufw-firewall" tabindex="-1">7. Setup ufw firewall <a class="header-anchor" href="#_7-setup-ufw-firewall" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">sudo ufw enable</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo ufw status</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo ufw allow ssh (Port 22)</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo ufw allow http (Port 80)</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo ufw allow https (Port 443)</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo ufw enable</span></span>
<span class="line"><span style="color:#393a34;">sudo ufw status</span></span>
<span class="line"><span style="color:#393a34;">sudo ufw allow ssh (Port 22)</span></span>
<span class="line"><span style="color:#393a34;">sudo ufw allow http (Port 80)</span></span>
<span class="line"><span style="color:#393a34;">sudo ufw allow https (Port 443)</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="_8-install-nginx-and-configure" tabindex="-1">8. Install NGINX and configure <a class="header-anchor" href="#_8-install-nginx-and-configure" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">sudo apt install nginx</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">sudo nano /etc/nginx/sites-available/default</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo apt install nginx</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">sudo nano /etc/nginx/sites-available/default</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>Add the following to the location part of the server block</p><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">    server_name yourdomain.com www.yourdomain.com;</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;">    location / {</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_pass http://127.0.0.1:5000; #whatever port your app runs on</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_set_header Connection &#39;upgrade&#39;;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#dbd7ca;">        proxy_cache_bypass $http_upgrade;</span></span>
<span class="line"><span style="color:#dbd7ca;">    }</span></span>
<span class="line"><span style="color:#dbd7ca;"># Check NGINX config</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo nginx -t</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># Restart NGINX</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo service nginx restart</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">    server_name yourdomain.com www.yourdomain.com;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    location / {</span></span>
<span class="line"><span style="color:#393a34;">        proxy_pass http://127.0.0.1:5000; #whatever port your app runs on</span></span>
<span class="line"><span style="color:#393a34;">        proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_set_header Connection &#39;upgrade&#39;;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#393a34;">        proxy_cache_bypass $http_upgrade;</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;"># Check NGINX config</span></span>
<span class="line"><span style="color:#393a34;">sudo nginx -t</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Restart NGINX</span></span>
<span class="line"><span style="color:#393a34;">sudo service nginx restart</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="you-should-now-be-able-to-visit-your-ip-with-no-port-port-80-and-see-your-app-now-let-s-add-a-domain" tabindex="-1">You should now be able to visit your IP with no port (port 80) and see your app. Now let&#39;s add a domain <a class="header-anchor" href="#you-should-now-be-able-to-visit-your-ip-with-no-port-port-80-and-see-your-app-now-let-s-add-a-domain" aria-hidden="true">#</a></h3><h2 id="_9-add-domain-in-digital-ocean" tabindex="-1">9. Add domain in Digital Ocean <a class="header-anchor" href="#_9-add-domain-in-digital-ocean" aria-hidden="true">#</a></h2><p>In Digital Ocean, go to networking and add a domain</p><p>Add an A record for @ and for www to your droplet</p><h2 id="register-and-or-setup-domain-from-registrar" tabindex="-1">Register and/or setup domain from registrar <a class="header-anchor" href="#register-and-or-setup-domain-from-registrar" aria-hidden="true">#</a></h2><p>I prefer Namecheap for domains. Please use this affiliate link if you are going to use them <a href="https://namecheap.pxf.io/c/1299552/386170/5618" target="_blank" rel="noopener noreferrer">https://namecheap.pxf.io/c/1299552/386170/5618</a></p><p>Choose &quot;Custom nameservers&quot; and add these 3</p><ul><li><a href="http://ns1.digitalocean.com" target="_blank" rel="noopener noreferrer">ns1.digitalocean.com</a></li><li><a href="http://ns2.digitalocean.com" target="_blank" rel="noopener noreferrer">ns2.digitalocean.com</a></li><li><a href="http://ns3.digitalocean.com" target="_blank" rel="noopener noreferrer">ns3.digitalocean.com</a></li></ul><p>It may take a bit to propogate</p><ol><li>Add SSL with LetsEncrypt</li></ol><div class="language-"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7ca;">sudo add-apt-repository ppa:certbot/certbot</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo apt-get update</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo apt-get install python-certbot-nginx</span></span>
<span class="line"><span style="color:#dbd7ca;">sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"># Only valid for 90 days, test the renewal process with</span></span>
<span class="line"><span style="color:#dbd7ca;">certbot renew --dry-run</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo add-apt-repository ppa:certbot/certbot</span></span>
<span class="line"><span style="color:#393a34;">sudo apt-get update</span></span>
<span class="line"><span style="color:#393a34;">sudo apt-get install python-certbot-nginx</span></span>
<span class="line"><span style="color:#393a34;">sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Only valid for 90 days, test the renewal process with</span></span>
<span class="line"><span style="color:#393a34;">certbot renew --dry-run</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>Now visit <a href="https://yourdomain.com/" target="_blank" rel="noopener noreferrer">https://yourdomain.com</a> and you should see your Node app</p>`,34),o=[l];function t(r,c,d,i,u,y){return s(),n("div",null,o)}var b=a(p,[["render",t]]);export{g as __pageData,b as default};
