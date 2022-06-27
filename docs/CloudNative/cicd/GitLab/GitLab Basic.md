# GitLab Basic

## GitLab 简介

**GitLab** 是由 GitLab Inc.开发，一款基于 [Git](https://zh.wikipedia.org/wiki/Git) 的完全集成的软件开发平台（fully [集成软件](https://zh.wikipedia.org/w/index.php?title=集成軟體&action=edit&redlink=1) development platform）。[[5\]](https://zh.wikipedia.org/wiki/GitLab#cite_note-5)[[6\]](https://zh.wikipedia.org/wiki/GitLab#cite_note-6) 另外，GitLab 且具有[wiki](https://zh.wikipedia.org/wiki/Wiki)以及在线编辑、[issue跟踪](https://zh.wikipedia.org/wiki/事务跟踪管理系统)功能、CI/CD 等功能

详情参考：https://zh.wikipedia.org/wiki/GitLab

## Installing GitLab via Package

官方所提供的安装步骤（`GitLab EE `版本）：https://about.gitlab.com/install/#centos-7

懒人安装方法（通过rpm包安装，`GitLab CE`版本）：

```bash
# 安装所需依赖
yum install -y curl policycoreutils-python openssh-server postfix

# 下载CE包
wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-13.1.4-ce.0.el7.x86_64.rpm
yum install -y gitlab-ce-13.1.4-ce
```

编辑`gitlab`配置文件`/etc/gitlab/gitlab.rb`：

```bash
# 大概在29行,将url改为本机地址,当然在这里你可以直接填写你的域名
external_url 'http://172.16.1.131'
# 时区
gitlab_rails['time_zone'] = 'Asia/Shanghai'
# ssh拉取端口
gitlab_rails['gitlab_shell_ssh_port'] = 10222
# 并添加以下内容
letsencrypt['enable'] = false 
```

启动相关服务：

```bash
systemctl start postfix
systemctl start sshd
```

初始化`GitLab`服务:

```bash
gitlab-ctl reconfigure
```

默认GitLab 是安装到`/opt/gitlab `目录，配置文件在`/etc/gitlab/`下.

安装完成之后, 打开浏览器进行访问即可:

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/gitlab.png)

:warning:默认用户名为`root`, 密码首次使用`GitLab`时会提示设置.

> GitLab EE 与 CE 版本比较：https://about.gitlab.com/features/#compare

## Installing GitLab with Docker

GitLab 仓库镜像：https://hub.docker.com/r/gitlab/gitlab-ce/

## 配置 HTTPS 证书

为`GitLab`的ssl证书创建目录: `mkdir -pv /etc/gitlab/ssl`

修改配置文件`/etc/gitlab/gitlab.rb`:

```bash
external_url 'https://gitlab.agou-ops.top'  # gitlab申请的域名证书
nginx['redirect_http_to_https']=true
nginx['ssl_certificate'] = "/etc/gitlab/ssl/gitlab.pem"
nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/gitlab.key"
```

更新`gitlab`的配置:

```bash
gitlab-ctl reconfigure
```

最后修改`nginx`的配置文件`/etc/nginx/conf.d/gitlab.conf`:

```bash
server {
      listen *:443 ssl http2;
      server_name gitlab.agou-ops.top;
      error_log   /home/logs/nginx/gitlab.mydomain.com.com.error.log error;
      access_log  /home/logs/nginx/gitlab.mydomain.com.access.log  main;
      server_tokens off; 
      client_max_body_size 0;
      ssl on;
      ssl_certificate /etc/gitlab/ssl/gitlab.pem;
      ssl_certificate_key /etc/gitlab/ssl/gitlab.key;
...
}

server{
    listen*:80;
    server_name gitlab.agou-ops.top;
    rewrite^(.*)$https://$host$1permanent;
    # 或者
    # return      301 https://$server_name$request_uri;
}
```

重启`GitLab`:

```bash
gitlab-cli restart
```

## SMTP 邮件设置

 QQ exmail

QQ exmail (腾讯企业邮箱)

```
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.exmail.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "xxxx@xx.com"
gitlab_rails['smtp_password'] = "password"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = 'xxxx@xx.com'
gitlab_rails['smtp_domain'] = "exmail.qq.com"
```

> 更多邮箱格式, 参考[GitLab SMTP Settings](https://docs.gitlab.com/omnibus/settings/smtp.html#smtp-settings)

重启`GitLab`服务器, 使配置生效:

```bash
gitlab-ctl restart
```

测试SMTP邮件是否正常运行:

## Testing the SMTP configuration

You can verify GitLab’s ability to send emails properly using the Rails console. On the GitLab server, execute `gitlab-rails console` to enter the console. Then, you can enter the following command at the console prompt to cause GitLab to send a test email:

```bash
[root@aliyun ~]\# gitlab-rails console
--------------------------------------------------------------------------------
 GitLab:       13.1.4 (18c5ab32b73) FOSS
 GitLab Shell: 13.3.0
 PostgreSQL:   11.7
--------------------------------------------------------------------------------
Loading production environment (Rails 6.0.3.1)
irb(main):001:0> Notify.test_email('destination_email@address.com', 'Message Subject', 'Message Body').deliver_now

# press enter to test SMTP sending
```

## 版本升级

> 建议升级前按照钱数备份方式，先对GitLab数据进行备份，同时备份GitLab配置文件`/etc/gitlab/gitlab.rb`,然后再执行下列步骤。

 1. 关闭部分GitLab服务

```
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq
gitlab-ctl stop nginx
```

 2. 升级GitLab

GitLab 升级包下载地址：`https://packages.gitlab.com/gitlab/gitlab-ce`。下载好需要的版本上传至服务器，直接运行下列命令安装就可以了。

```
rpm -Uvh gitlab-ce-10.0.4-ce.0.el7.x86_64.rpm
```

 3. 重新配置GitLab

安装完成后，根据需要修改配置文件`/etc/gitlab/gitlab.rb`，也可以直接使用原来备份好的`gitlab.rb`文件，执行重新配置命令：

```
gitlab-ctl reconfigure
```

 4. 重启GitLab

```
gitlab-ctl restart
```

## 参考链接

- GitLab installation: https://docs.gitlab.com/ee/install/
- GitLab SMTP Settings: https://docs.gitlab.com/omnibus/settings/smtp.html#smtp-settings