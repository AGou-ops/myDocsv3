import{_ as s,o as n,c as a,a as p}from"./app.1e6146c3.js";const D=JSON.parse('{"title":"Django Basic","description":"","frontmatter":{},"headers":[{"level":2,"title":"Django \u7B80\u4ECB","slug":"django-\u7B80\u4ECB"},{"level":2,"title":"\u5FEB\u901F\u5B89\u88C5\u53CA\u8FD0\u884C\u9879\u76EE","slug":"\u5FEB\u901F\u5B89\u88C5\u53CA\u8FD0\u884C\u9879\u76EE"},{"level":3,"title":"\u521B\u5EFA\u9879\u76EE","slug":"\u521B\u5EFA\u9879\u76EE"},{"level":3,"title":"\u4E3A\u9879\u76EE\u6DFB\u52A0\u5E94\u7528","slug":"\u4E3A\u9879\u76EE\u6DFB\u52A0\u5E94\u7528"},{"level":3,"title":"\u521B\u5EFA\u89C6\u56FE","slug":"\u521B\u5EFA\u89C6\u56FE"},{"level":3,"title":"\u6DFB\u52A0\u7BA1\u7406\u9875\u9762","slug":"\u6DFB\u52A0\u7BA1\u7406\u9875\u9762"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"LinuxBasics/Web Servers/Python Django/Django Basic.md","lastUpdated":1657272051000}'),e={name:"LinuxBasics/Web Servers/Python Django/Django Basic.md"},l=p(`<h1 id="django-basic" tabindex="-1">Django Basic <a class="header-anchor" href="#django-basic" aria-hidden="true">#</a></h1><h2 id="django-\u7B80\u4ECB" tabindex="-1">Django \u7B80\u4ECB <a class="header-anchor" href="#django-\u7B80\u4ECB" aria-hidden="true">#</a></h2><blockquote><p>Django \u6700\u521D\u88AB\u8BBE\u8BA1\u7528\u4E8E\u5177\u6709\u5FEB\u901F\u5F00\u53D1\u9700\u6C42\u7684\u65B0\u95FB\u7C7B\u7AD9\u70B9\uFF0C\u76EE\u7684\u662F\u8981\u5B9E\u73B0\u7B80\u5355\u5FEB\u6377\u7684\u7F51\u7AD9\u5F00\u53D1\u3002\u4EE5\u4E0B\u5185\u5BB9\u7B80\u8981\u4ECB\u7ECD\u4E86\u5982\u4F55\u4F7F\u7528 Django \u5B9E\u73B0\u4E00\u4E2A\u6570\u636E\u5E93\u9A71\u52A8\u7684 Web \u5E94\u7528\u3002</p></blockquote><h2 id="\u5FEB\u901F\u5B89\u88C5\u53CA\u8FD0\u884C\u9879\u76EE" tabindex="-1">\u5FEB\u901F\u5B89\u88C5\u53CA\u8FD0\u884C\u9879\u76EE <a class="header-anchor" href="#\u5FEB\u901F\u5B89\u88C5\u53CA\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u51C6\u5907\u865A\u62DF\u73AF\u5883</span></span>
<span class="line"><span style="color:#DBD7CA;">$ python3 -m venv test-env</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">test-env</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> $ python3 -m pip install Django</span></span>
<span class="line"><span style="color:#858585;">(</span><span style="color:#DBD7CA;">test-env</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> $ python3 -m django --version</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u51C6\u5907\u865A\u62DF\u73AF\u5883</span></span>
<span class="line"><span style="color:#393A34;">$ python3 -m venv test-env</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">test-env</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> $ python3 -m pip install Django</span></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">test-env</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> $ python3 -m django --version</span></span>
<span class="line"></span></code></pre></div><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ django-admin startproject mysite</span></span>
<span class="line"><span style="color:#758575;"># \u7ED3\u6784\u5927\u81F4\u5982\u4E0B\u6240\u793A</span></span>
<span class="line"><span style="color:#DBD7CA;">$ tree mysite/</span></span>
<span class="line"><span style="color:#DBD7CA;">mysite/</span></span>
<span class="line"><span style="color:#DBD7CA;">    manage.py	</span><span style="color:#758575;"># \u4E00\u4E2A\u7A7A\u6587\u4EF6\uFF0C\u544A\u8BC9 Python \u8FD9\u4E2A\u76EE\u5F55\u5E94\u8BE5\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A Python \u5305\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">    mysite/</span></span>
<span class="line"><span style="color:#DBD7CA;">        __init__.py </span><span style="color:#758575;"># \u4E00\u4E2A\u7A7A\u6587\u4EF6\uFF0C\u544A\u8BC9 Python \u8FD9\u4E2A\u76EE\u5F55\u5E94\u8BE5\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A Python \u5305\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">        settings.py </span><span style="color:#758575;"># Django \u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">        urls.py </span><span style="color:#758575;"># Django \u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">        asgi.py </span><span style="color:#758575;"># \u4F5C\u4E3A\u4F60\u7684\u9879\u76EE\u7684\u8FD0\u884C\u5728 ASGI \u517C\u5BB9\u7684 Web \u670D\u52A1\u5668\u4E0A\u7684\u5165\u53E3\u3002</span></span>
<span class="line"><span style="color:#DBD7CA;">        wsgi.py </span><span style="color:#758575;"># \u4F5C\u4E3A\u4F60\u7684\u9879\u76EE\u7684\u8FD0\u884C\u5728 WSGI \u517C\u5BB9\u7684 Web \u670D\u52A1\u5668\u4E0A\u7684\u5165\u53E3\u3002</span></span>
<span class="line"><span style="color:#758575;"># \u8FD0\u884C\u670D\u52A1</span></span>
<span class="line"><span style="color:#DBD7CA;">$ python manage.py runserver </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;">0:8000</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#DBD7CA;">Watching </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> file changes with StatReloader</span></span>
<span class="line"><span style="color:#DBD7CA;">Performing system checks...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">System check identified no issues </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">0 silenced</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">You have 18 unapplied migration</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">s</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">. Your project may not work properly </span><span style="color:#4D9375;">until</span><span style="color:#DBD7CA;"> you apply the migrations </span><span style="color:#4D9375;">for</span><span style="color:#DBD7CA;"> app</span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">s</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;">: admin, auth, contenttypes, sessions.</span></span>
<span class="line"><span style="color:#DBD7CA;">Run </span><span style="color:#C98A7D;">&#39;python manage.py migrate&#39;</span><span style="color:#DBD7CA;"> to apply them.</span></span>
<span class="line"><span style="color:#DBD7CA;">February 04, 2021 - 10:43:41</span></span>
<span class="line"><span style="color:#DBD7CA;">Django version 3.1.6, using settings </span><span style="color:#C98A7D;">&#39;envMonitorSystem.settings&#39;</span></span>
<span class="line"><span style="color:#DBD7CA;">Starting development server at http://127.0.0.1:8000/</span></span>
<span class="line"><span style="color:#DBD7CA;">Quit the server with CONTROL-C.</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ django-admin startproject mysite</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7ED3\u6784\u5927\u81F4\u5982\u4E0B\u6240\u793A</span></span>
<span class="line"><span style="color:#393A34;">$ tree mysite/</span></span>
<span class="line"><span style="color:#393A34;">mysite/</span></span>
<span class="line"><span style="color:#393A34;">    manage.py	</span><span style="color:#A0ADA0;"># \u4E00\u4E2A\u7A7A\u6587\u4EF6\uFF0C\u544A\u8BC9 Python \u8FD9\u4E2A\u76EE\u5F55\u5E94\u8BE5\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A Python \u5305\u3002</span></span>
<span class="line"><span style="color:#393A34;">    mysite/</span></span>
<span class="line"><span style="color:#393A34;">        __init__.py </span><span style="color:#A0ADA0;"># \u4E00\u4E2A\u7A7A\u6587\u4EF6\uFF0C\u544A\u8BC9 Python \u8FD9\u4E2A\u76EE\u5F55\u5E94\u8BE5\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A Python \u5305\u3002</span></span>
<span class="line"><span style="color:#393A34;">        settings.py </span><span style="color:#A0ADA0;"># Django \u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#393A34;">        urls.py </span><span style="color:#A0ADA0;"># Django \u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#393A34;">        asgi.py </span><span style="color:#A0ADA0;"># \u4F5C\u4E3A\u4F60\u7684\u9879\u76EE\u7684\u8FD0\u884C\u5728 ASGI \u517C\u5BB9\u7684 Web \u670D\u52A1\u5668\u4E0A\u7684\u5165\u53E3\u3002</span></span>
<span class="line"><span style="color:#393A34;">        wsgi.py </span><span style="color:#A0ADA0;"># \u4F5C\u4E3A\u4F60\u7684\u9879\u76EE\u7684\u8FD0\u884C\u5728 WSGI \u517C\u5BB9\u7684 Web \u670D\u52A1\u5668\u4E0A\u7684\u5165\u53E3\u3002</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD0\u884C\u670D\u52A1</span></span>
<span class="line"><span style="color:#393A34;">$ python manage.py runserver </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;">0:8000</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#393A34;">Watching </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> file changes with StatReloader</span></span>
<span class="line"><span style="color:#393A34;">Performing system checks...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">System check identified no issues </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">0 silenced</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">You have 18 unapplied migration</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">s</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">. Your project may not work properly </span><span style="color:#1C6B48;">until</span><span style="color:#393A34;"> you apply the migrations </span><span style="color:#1C6B48;">for</span><span style="color:#393A34;"> app</span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">s</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;">: admin, auth, contenttypes, sessions.</span></span>
<span class="line"><span style="color:#393A34;">Run </span><span style="color:#B56959;">&#39;python manage.py migrate&#39;</span><span style="color:#393A34;"> to apply them.</span></span>
<span class="line"><span style="color:#393A34;">February 04, 2021 - 10:43:41</span></span>
<span class="line"><span style="color:#393A34;">Django version 3.1.6, using settings </span><span style="color:#B56959;">&#39;envMonitorSystem.settings&#39;</span></span>
<span class="line"><span style="color:#393A34;">Starting development server at http://127.0.0.1:8000/</span></span>
<span class="line"><span style="color:#393A34;">Quit the server with CONTROL-C.</span></span>
<span class="line"></span></code></pre></div><p>\u968F\u540E\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8000</a> \u67E5\u770B\u5373\u53EF\u3002</p><h3 id="\u4E3A\u9879\u76EE\u6DFB\u52A0\u5E94\u7528" tabindex="-1">\u4E3A\u9879\u76EE\u6DFB\u52A0\u5E94\u7528 <a class="header-anchor" href="#\u4E3A\u9879\u76EE\u6DFB\u52A0\u5E94\u7528" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u9879\u76EE\u53EF\u4EE5\u5305\u62EC\u591A\u4E2A\u5E94\u7528\uFF0C\u4E00\u4E2A\u5E94\u7528\u4E5F\u53EF\u4EE5\u5B58\u5728\u4E8E\u591A\u4E2A\u9879\u76EE\u4E4B\u4E2D\u3002</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ python manage.py startapp test_app1</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ python manage.py startapp test_app1</span></span>
<span class="line"></span></code></pre></div><h3 id="\u521B\u5EFA\u89C6\u56FE" tabindex="-1">\u521B\u5EFA\u89C6\u56FE <a class="header-anchor" href="#\u521B\u5EFA\u89C6\u56FE" aria-hidden="true">#</a></h3><p><a href="https://docs.djangoproject.com/zh-hans/3.1/intro/tutorial01/#write-your-first-view" target="_blank" rel="noopener noreferrer">https://docs.djangoproject.com/zh-hans/3.1/intro/tutorial01/#write-your-first-view</a></p><h3 id="\u6DFB\u52A0\u7BA1\u7406\u9875\u9762" tabindex="-1">\u6DFB\u52A0\u7BA1\u7406\u9875\u9762 <a class="header-anchor" href="#\u6DFB\u52A0\u7BA1\u7406\u9875\u9762" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;"># \u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7</span></span>
<span class="line"><span style="color:#DBD7CA;">python manage.py createsuperuser</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># \u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7</span></span>
<span class="line"><span style="color:#393A34;">python manage.py createsuperuser</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>djangoproject \u4E2D\u6587\u6559\u7A0B\uFF1A<a href="https://docs.djangoproject.com/zh-hans/3.1/" target="_blank" rel="noopener noreferrer">https://docs.djangoproject.com/zh-hans/3.1/</a></li></ul>`,17),o=[l];function t(c,r,i,y,h,d){return n(),a("div",null,o)}var g=s(e,[["render",t]]);export{D as __pageData,g as default};