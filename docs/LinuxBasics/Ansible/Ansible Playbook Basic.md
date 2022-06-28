# Ansible Playbook 基础

## 基础

### ansible-playbook 常用选项

```bash
--step: 按步骤执行，每一步都需要操作员确认
--check: 检查playbook正确性，并运行干跑模式
--syntax-check: 仅检查语法错误
--list-tasks
--list-tags
--list-hosts
```

### Host 和 Users

```yaml
- hosts: webservers
  remote_user: yourname			# 切换用户
  become: yes
  become_user: postgres
---
- hosts: webservers
  remote_user: yourname			# 全局默认的用户
  tasks:
    - service:
        name: nginx
        state: started
      become: yes			# 对某一个task开启用户切换
      become_method: sudo		# 切换方法为sudo,此外还可以使用su
```

### tasks

```yaml
tasks:
  - name: 运行一些命令,并忽略其输出内容
    shell: /usr/bin/somecommand || /bin/true      # 或者使用`ignore_errors: true`
  - name: Copy ansible inventory file to client
    copy: src=/etc/ansible/hosts dest=/etc/ansible/hosts    # 使用缩进进行长句换行
            owner=root group=root mode=0644
```

### handlers

当配置文件改变时,调用handlers触发重启

```yaml
tasks:
  - name: template configuration file
    template:
      src: template.j2
      dest: /etc/foo.conf
    notify:
      - restart memcached
      - restart apache
handlers:
  - name: restart memcached
    service:
      name: memcached
      state: restarted
  - name: restart apache
    service:
      name: apache
      state: restarted
```

在ansible2.2之后,可以使用`listen`创建"主题",tasks会通知这些"主题"

```yaml
handlers:
    - name: restart memcached
      service:
        name: memcached
        state: restarted
      listen: "restart web services"
    - name: restart apache
      service:
        name: apache
        state: restarted
      listen: "restart web services"

tasks:
    - name: restart everything
      command: echo "this task will restart the web services"
      notify: "restart web services"
```

### 运行一个 Playbook

```yaml
ansible-playbook [-C] playbook.yml [-f 10] [--list-hosts] [--verbose]
# -C 表示干跑测试模式,实际运行时应当取消, -f 为批次
```

### ansible-Pull

客户端主动拉取

### ansible-lint(语法检查)

`playbook`语法及规范检查工具, 默认安装时并为安装, 使用`yum install -y ansible-lint`进行安装即可

使用方法: 
```yaml
ansible-lint playbook.yaml
```

当然, 你也可以使用`ansible-playbook`自带的`ansible-playbook --syntax-check`来检查

### ansible-galaxy

`ansible-galaxy`客户端允许您从[Ansible Galaxy](https://galaxy.ansible.com/?extIdCarryOver=true&sc_cid=701f2000001OH7YAAW)下载角色，并且还提供了一个出色的默认框架来创建您自己的角色.

## 进阶

### import_tasks & include_tasks

二者区别:

* `import*`: 预处理运行
* `include*`:  中途运行

如果任务就一个的话,两个用哪个都无所谓.

```yaml
tasks:
- import_tasks: common_tasks.yml
  vars:   # 可以向指定playbook传递参数
    foot: bar
# or
- include_tasks: common_tasks.yml

# handlers中也可以使用
handlers:
- include_tasks: more_handlers.yml
# or
- import_tasks: more_handlers.yml
```

### Role

#### Role 目录结构

```yaml
roles/
├── dbsrvs
│   ├── defaults		# 默认变量存放位置
│   ├── files			# 所要传输或者使用的文件位置
│   ├── handlers
│   ├── meta			# 元数据存放位置,可存放角色依赖,参考https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html#role-dependencies
│   ├── tasks
│   ├── templates
│   └── vars			# 变量存放位置
└── websrvs
    ├── files
    ├── handlers
    ├── tasks
    ├── templates
    └── vars
```

#### 示例及使用

```yaml
# roles/example/tasks/main.yml
- name: added in 2.4, previously you used 'include'
  import_tasks: redhat.yml
  when: ansible_facts['os_family']|lower == 'redhat'		# when相当于条件语句
- import_tasks: debian.yml
  when: ansible_facts['os_family']|lower == 'debian'

# roles/example/tasks/redhat.yml
- yum:
    name: "httpd"
    state: present

# roles/example/tasks/debian.yml
- apt:
    name: "apache2"
    state: present
```

```yaml
# 调用角色
- hosts: webservers
  roles:
    - example
    - webservers
```

在ansible2.4之后,可以使用`import_role` 和`include_role`:

```yaml
- hosts: webservers
  tasks:
    - debug:
        msg: "before we run our role"
    - import_role:
        name: example
    - include_role:
        name: example
    - debug:
        msg: "after we ran our role"
```

#### 自定义role文件路径, 传递参数 ,tags

```yaml
- hosts: webservers
  tasks:
    - include_role:
        name: foo_app_instance
      vars:
        dir: '/path/to/my/roles/common'
        app_port: 5000
      when: "ansible_facts['os_family'] == 'RedHat'"
      tags:
      	- web
        - redhat
```

### variables

**在`playbook`中直接定义:**

```yaml
- hosts: webservers
  vars:
    http_port: 80
```

**在文件中定义:**

```yaml
- hosts: all
  remote_user: root
  vars:
    favcolor: blue
  vars_files:
    - /vars/external_vars.yml
```

```yaml
# /vars/external_vars.yml
somevar: somevalue
password: magic
```

**在命令行中传递:**

```yaml
ansible-playbook websrvs.yml --extra-vars "http_ver=2.4.6"
ansible-playbook release.yml --extra-vars "@some_file.json"
```

传递`json`或者`json file` 参考:https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#passing-variables-on-the-command-line

**调用`Facts`中的变量:**

```yaml
# 查看
ansible websrvs -m setup
# 调用
【【 ansible_facts['devices']['xvda']['model'] 】】		# 层级结构

【【 ansible_facts['nodename'] 】】 
# 或者
【【 ansible_nodename 】】
```

:information_source:注意:默认情况下执行命令或者playbook会先收集`facts`,如果你知道你不需要任何来自`facts`的数据,那么可以使用以下参数来进行关闭:

```yaml
- hosts: whatever
  gather_facts: no
```

**传递本地`facts`:**

在`/etc/ansible/facts.d`目录下创建一个`*.fact`的文件, 即可将本地`facts`传递给主机`setup`的`ansible_local``facts`中去.

示例:

```yaml
# /etc/ansible/facts.d/preferences.fact
[general]
asdf=1
bar=2
# 查看本地facts
ansible local -m setup -a "filter=ansible_local"
# 调用
【【 ansible_local['preferences']['general']['asdf'] 】】
# 或者
【【 ansible_local.prefetences.general.asdf 】】
```

详情参考:https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#local-facts-facts-d

https://www.cnblogs.com/f-ck-need-u/p/7571974.html

**注册与自定义变量:**

```yaml
    - name: register vars
      shell: echo bar
      register: foo
    - set_fact: var1="【【 foo.stdout 】】"
    - set_fact: var2=" foo ///  "
    - debug: msg="【【 var2 】】 【【var1】】"
```

**`with_item`迭代变量**

```yaml
    - name: with_items
      shell: echo "【【 item 】】"
      with_items:
        - hello
        - ansible
```

**`inventroy`主机组变量和主机变量**

```yaml
# /etc/ansible/hosts
[websvrs]
node01	var1="var1 node01"
node02

[websrvs:vars]
var2="var2 websrvs"
```

:notebook:综合vars示例:

```yaml
---
- hosts: localhost
  gather_facts: yes
  vars:
    - http_port: 80
    - https_port: 443
  vars_files:
    - /root/playbooks/vars/external_vars.yml
    - /root/playbooks/vars/external_vars2.yml
  tasks:
    - name: show playbook vars
      debug: msg=" the http_port is  【【 http_port 】】 /// https_port is  【【 https_port 】】 "
      vars:
        http_port: 8080
    - name: import vars form localfile
      debug: msg=" vars from localfile 【【 hello 】】 /// 【【 ansible 】】"
    - name: import vars form local facts
      debug: msg=" vars form local facts --- 【【 ansible_local.preferences.general.bar 】】 "
    - name: import vars form commandline
      debug: msg=" vars form commandline -- 【【 command 】】  "
      ignore_errors: yes
    - name: import vars form json file
      debug: msg="ipv6 address is  --- 【【 ipv6[0].address 】】"

    - name: register vars
      shell: echo bar
      register: foo
    - set_fact: var1="【【 foo.stdout 】】"
    - set_fact: var2=" foo ///  "
    - debug: msg="【【 var2 】】 【【var1】】"

    - name: with_items
      shell: echo "【【 item 】】"
      with_items:
        - hello
        - ansible
      register: items
      tags: items
    - debug: var=items.results[0].stdout
      tags: items
    - debug: msg=" {% for i in items.results %} 【【 i.stdout 】】 {% endfor %} "
      tags: items

    - name: inventory var
      debug: msg=" 【【 inventory_var1 】】 /// 【【 inventory_var2  】】 "
      tags: inventory
```

:small_airplane:扩展阅读: 

* jinja2 https://docs.ansible.com/ansible/latest/user_guide/playbooks_filters.html
* 特殊内置变量: https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html

### lineinfile

该模块确保文件中**包含特定行**，或使用向后引用的正则表达式**替换**现有行。

只适用于一行内容.

```yaml
# NOTE: Before 2.3, option 'dest', 'destfile' or 'name' was used instead of 'path'
- name: 确保SElinux为enforce窗台
  lineinfile:
    path: /etc/selinux/config
    regexp: '^SELINUX='
    line: SELINUX=enforcing

- name: 确保wheel组不在sudoers配置文件中
  lineinfile:
    path: /etc/sudoers
    state: absent
    regexp: '^%wheel'

- name: 确保127.0.0.1为本地localhost
  lineinfile:
    path: /etc/hosts
    regexp: '^127\.0\.0\.1'
    line: 127.0.0.1 localhost
    owner: root
    group: root
    mode: '0644'

- name: 确保httpd的监听端口为8080
  lineinfile:
    path: /etc/httpd/conf/httpd.conf
    regexp: '^Listen '
    insertafter: '^#Listen '
    line: Listen 8080

- name: 确保注释在匹配文本上面
  lineinfile:
    path: /etc/services
    regexp: '^# port for http'
    insertbefore: '^www.*80/tcp'
    line: '# port for http by default'

- name: 为空文件添加一行内容
  lineinfile:
    path: /tmp/testfile
    line: 192.168.1.99 foo.lab.net foo
    create: yes

# NOTE: Yaml requires escaping backslashes in double quotes but not in single quotes
- name: Ensure the JBoss memory settings are exactly as needed
  lineinfile:
    path: /opt/jboss-as/bin/standalone.conf
    regexp: '^(.*)Xms(\\d+)m(.*)$'
    line: '\1Xms${xms}m\3'
    backrefs: yes

# NOTE: Fully quoted because of the ': ' on the line. See the Gotchas in the YAML docs.
- name: Validate the sudoers file before saving
  lineinfile:
    path: /etc/sudoers
    state: present
    regexp: '^%ADMIN ALL='
    line: '%ADMIN ALL=(ALL) NOPASSWD: ALL'
    validate: /usr/sbin/visudo -cf %s
```

### replace

替换所有, 与l`ineinfile`不同

```yaml
- name: Before Ansible 2.3, option 'dest', 'destfile' or 'name' was used instead of 'path'
  replace:
    path: /etc/hosts
    regexp: '(\s+)old\.host\.name(\s+.*)?$'
    replace: '\1new.host.name\2'

- name: Replace after the expression till the end of the file (requires Ansible >= 2.4)
  replace:
    path: /etc/apache2/sites-available/default.conf
    after: 'NameVirtualHost [*]'
    regexp: '^(.+)$'
    replace: '# \1'

- name: Replace before the expression till the begin of the file (requires Ansible >= 2.4)
  replace:
    path: /etc/apache2/sites-available/default.conf
    before: '# live site config'
    regexp: '^(.+)$'
    replace: '# \1'

# Prior to Ansible 2.7.10, using before and after in combination did the opposite of what was intended.
# see https://github.com/ansible/ansible/issues/31354 for details.
- name: Replace between the expressions (requires Ansible >= 2.4)
  replace:
    path: /etc/hosts
    after: '<VirtualHost [*]>'
    before: '</VirtualHost>'
    regexp: '^(.+)$'
    replace: '# \1'

- name: Supports common file attributes
  replace:
    path: /home/jdoe/.ssh/known_hosts
    regexp: '^old\.host\.name[^\n]*\n'
    owner: jdoe
    group: jdoe
    mode: '0644'

- name: Supports a validate command
  replace:
    path: /etc/apache/ports
    regexp: '^(NameVirtualHost|Listen)\s+80\s*$'
    replace: '\1 127.0.0.1:8080'
    validate: '/usr/sbin/apache2ctl -f %s -t'

- name: Short form task (in ansible 2+) necessitates backslash-escaped sequences
  replace: path=/etc/hosts regexp='\\b(localhost)(\\d*)\\b' replace='\\1\\2.localdomain\\2 \\1\\2'

- name: Long form task does not
  replace:
    path: /etc/hosts
    regexp: '\b(localhost)(\d*)\b'
    replace: '\1\2.localdomain\2 \1\2'

- name: Explicitly specifying positional matched groups in replacement
  replace:
    path: /etc/ssh/sshd_config
    regexp: '^(ListenAddress[ ]+)[^\n]+$'
    replace: '\g<1>0.0.0.0'

- name: Explicitly specifying named matched groups
  replace:
    path: /etc/ssh/sshd_config
    regexp: '^(?P<dctv>ListenAddress[ ]+)(?P<host>[^\n]+)$'
    replace: '#\g<dctv>\g<host>\n\g<dctv>0.0.0.0'
```



## 参考链接

* Ansible Playbook : https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html
* Ansible-Galaxy : https://galaxy.ansible.com/docs/?extIdCarryOver=true&sc_cid=701f2000001OH7YAAW

