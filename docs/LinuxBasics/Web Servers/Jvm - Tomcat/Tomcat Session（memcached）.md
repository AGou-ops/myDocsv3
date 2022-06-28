# Tomcat Session(memcached) 

# nginx + tomcat + memcache 会话保持

环境：

| 角色                       | IP           |
| -------------------------- | ------------ |
| nginx、tomcat-1、memcached | 172.16.1.128 |
| tomcat-2、memcached        | 172.16.1.136 |

## 配置 Nginx 反向代理

编辑 nginx 主配置文件`/etc/nginx/nginx.conf` ：

```bash
    upstream tomcat-server {
        server 172.16.1.128:8080 weight=1;
        server 172.16.1.136:8080 weight=1;
    }

    # 并直接修改原来的 server 段内容
    server {
            listen       80;
            server_name  localhost;
            root         /usr/share/nginx/html;

            location ~* \.jsp$ {
                proxy_pass http://tomcat-server;
                proxy_set_header Host $host;
            }

            location / {
                index  index.html index.htm;
            }
    }
```



