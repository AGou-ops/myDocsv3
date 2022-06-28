# GitLab 备份和数据迁移

## 数据备份

### 主动备份

备份时需要保持` gitlab `处于正常运行状态, 在要备份的主机上执行以下命令:

```bash
gitlab-rake gitlab:backup:create
```

命令执行完成之后, 默认会在`/var/opt/gitlab/backups`目录之下, 备份内容包括含：*数据库脚本、代码仓库、wiki、大文件、ssh用户秘钥*等数据。

```bash
$ ll /var/opt/gitlab/backups
-rw------- 1 git git 43414650880 Nov 27 00:10 1543846302_2020_7_23_gitlab_backup.tar
```

:information_source:修改`GitLab`备份目录, 编辑`gitlab`配置文件`/etc/gitlab/gitlab.rb`, 修改以下配置:

```bash
...
gitlab_rails['backup_path'] = "/var/opt/gitlab/backups" 	# 修改成自定义目录
gitlab_rails['backup_keep_time'] = 604800 		# 备份保留时长(7天), 避免因为备份文件爆满存储空间
...
```

最后, 重载配置文件或者重启`GitLab`即可:

```bash
gitlab-ctl reconfigure 
# 或者 gitlab-ctl  restart
```

### 自动备份

使用`crontab`来进行自动备份:

```bash
sudo crontab -e  
# 每天凌晨两点备份
0 2 * * * /opt/gitlab/bin/gitlab-rake gitlab:backup:create CRON=1  
```

## 数据迁移

1. 从源主机迁移到目标主机, 首先源主机备份一份`.tar`数据包, 并拷贝到目标主机的`/var/opt/gitlab/backups`目录.

:warning:注意: 确保备份和恢复的`GitLab`版本相同, 不然可能会出现不可预料的事情.(保险起见)

2. 赋予`.tar`包权限, 以免出现因权限不足无法解压缩的问题:

```bash
chown git.git 1543846302_2020_7_23_gitlab_backup.tar
chmod 600 1543846302_2020_7_23_gitlab_backup.tar
```

3. 执行恢复前, 停止`GitLab`与`数据库`的连接, 保留其他进程:

```bash
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq 
```

4. 执行恢复命令:

```bash
# gitlab-rake gitlab:backup:restore BACKUP=备份文件编号
gitlab-rake gitlab:backup:restore BACKUP=1543846302_2020_7_23
```

途中, 输入两次`yes`即可完成数据迁移.

5. 最后重启`GitLab`: `gitlab-ctl restart`