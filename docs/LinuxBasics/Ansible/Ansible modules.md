# Ansible Modules

- `fileglob`: 显示文件夹中的指定文件

```yaml
    - name: show all test* file in /home/suofeiya/tmp floder
      debug: msg="【【lookup('fileglob','/home/suofeiya/tmp/test*')】】"
# 利用fileglob筛选出来的文件
    - name: copy /home/suofeiya/tmp all files to /tmp
      copy:
        src: "【【item】】"
        dest: "/tmp"
        owner: suofeiya
        mode: 600
      with_fileglob: 
        - "/home/suofeiya/tmp/test*"
```

- `mysql_user`: 增删用户及授权mysql数据库

```yaml
  - name: connect to mySQL and add User for mySQL
    mysql_user:
      login_host: 192.168.43.37
      login_port: 3306
      login_user: root
      login_password: 123
      name: "【【 item[0] 】】"
      priv: "【【 item[1] 】】.*:ALL"
      append_privs: yes
      password: "123"
      state: absent
    with_nested:
      - [ 'user1', 'user2' ]
      - [ 'test', 'test1' ]
```

- 遍历`vars`

```yaml
  - name: Show value of 'variablename'
    debug: msg="【【 lookup('vars', item) 】】 -- sub-variable is 【【lookup('vars','test2').sub_test2】】"
    ignore_errors: True
    vars:
      test1: hello vars.test1
      test2:
        sub_test2: hello vars.test2.sub_test2
    loop:
    - test1
```

- `apt`&`apt_key`&`apt_repository`相关

```yaml
- name: Install a list of packages
  apt:
    pkg:
    - foo
    - foo-tools
- name: Update all packages to their latest version
  apt:
    name: "*"
    state: latest
- name: Upgrade the OS (apt-get dist-upgrade)
  apt:
    upgrade: dist
- name: Install a .deb package
  apt:
    deb: /tmp/mypackage.deb
    # install a deb package form internet
    # deb: https://example.com/python-ppq_0.1-1_all.deb

# apt_key
- name: Add an Apt signing key, uses whichever key is at the URL
  apt_key:
    url: https://ftp-master.debian.org/keys/archive-key-6.0.asc
    state: present

# apt_repository
- name: Add specified repository into sources list
  apt_repository:
    repo: deb http://archive.canonical.com/ubuntu hardy partner
    state: present
- name: Add nginx stable repository from PPA and install its signing key on Ubuntu target
  apt_repository:
    repo: ppa:nginx/stable
```

- `assemble`组合多个文件内容到一个文件, 并使用验证命令进行验证

```yaml
- name: Assemble a new "sshd_config" file into place, after passing validation with sshd
  assemble:
    src: /etc/ssh/conf.d/
    dest: /etc/ssh/sshd_config
    validate: /usr/sbin/sshd -t -f %s
```
> 使用该命令时, 目标文件将被清空并替换为组合文件的内容.

- `blockinfile`

```yaml
  - name: Insert/Update "Match User" configuration block in /etc/ssh/sshd_config
    blockinfile:
      path: /home/suofeiya/ansible_workspace/index.html
      marker: "<!-- {mark} ANSIBLE MANAGED BLOCK -->"
      insertafter: "<body>"
      block: |
        <h1>Welcome to 【【 ansible_hostname 】】</h1>
        <p>Last updated on 【【 ansible_date_time.iso8601 】】</p>
      
      # block: "【【 lookup('file', './local/sshd_config') 】】"
      # validate: /usr/sbin/sshd -T -f %s
      
      # clear block
      marker: "<!-- {mark} ANSIBLE MANAGED BLOCK -->"
      block: ""
```

- `expect`自动回复交互式命令(Ubuntu下测试无效)

```yaml
- name: Case insensitive password string match
  expect:
    command: passwd username
    responses:
      (?i)password: "MySekretPa$$word"
  # you don't want to show passwords in your logs
  no_log: true
# 回复多个
    responses:
      Question:
        - response1
        - response2
        - response3
```

- `fail`:自定义错误信息

```yaml
  - name: Using fail message.
    # you don't want to show passwords in your logs
    fail:
      msg: "you are not the one we are lookin for..."
    when: name != "agou"
    vars:
      name: agou-ops
```

- `fetch`: 从远程主机获取文件

```yaml
- name: Specifying a destination path
  fetch:
    src: /tmp/uniquefile
    dest: /tmp/special/
    flat: yes		# 区分路径最后的那个`/`
```

- `get_url`: 从http,https,ftp获取文件

```yaml
- name: Download file with check (sha256)
  get_url:
    url: http://example.com/path/file.conf
    dest: /etc/foo.conf
    mode: '0440'
    checksum: sha256:b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c
```

- `git`: 克隆仓库

```yaml
- name: Create git archive from repo
  git:
    repo: https://github.com/ansible/ansible-examples.git
    dest: /src/ansible-examples
    version: release-0.22
    archive: /tmp/ansible-examples.zip
    # separate_git_dir: /src/ansible-examples.git

    
```

- `random_choice`: 随机选择

```yaml
  - name: return a random list choice
    debug: msg="your random choice is:【【item】】"
    with_random_choice:
    - "go through the door"
    - "drink from the goblet"
    - "press the red button"
    - "do nothing"
```

- `block`: 更好的组织playbook, 处理任务过程之中的异常和错误

```yaml
- name: Attempt and graceful roll back demo
  block:
    - name: Print a message
      debug:
        msg: 'I execute normally'

    - name: Force a failure
      command: /bin/false

    - name: Never print this
      debug:
  msg: 'I never execute, due to the above task failing, :-('
  when: ansible_facts['distribution'] == 'CentOS'
  become: true
  become_user: root
  ignore_errors: yes
  rescue:
    - name: Print when errors
      meta: flush_handlers      # 即使当错误出现，也要继续运行
      debug:
        msg: 'I caught an error'
  always:
    - name: Always do this
      debug:
        msg: "This always executes"
```

- `uri`: 服务状态检查

```yaml
  - name: check service status
    uri:
      url: http://127.0.0.1
      return_content: yes
    register: result
    until: '"???" in result.content'
    retries: 10
    delay: 1
```

