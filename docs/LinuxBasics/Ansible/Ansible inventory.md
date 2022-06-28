# Ansible 清单管理

```ini
[test1]
A[1:4].agou-ops.top ansible_ssh_pass='suofeiya'
[test2]
B.agou-ops.top

[test:children]
test1
test2

# 或者
[test]
test[1:4].agou-ops.top
[test:vars]
ansible_ssh_pass='suofeiya'
# yaml语法如下
all:
  hosts:
    10.1.1.61:
  children:
    test1:
      hosts:
        10.1.1.60:
    test2:
      hosts:
        10.1.1.70:
# 对应ini格式
10.1.1.61

[test1]
10.1.1.60

[test2]
10.1.1.70
```

## 附录: Ansible 内置变量

| 参数                         | 用途                         | 例子                                          |
| :--------------------------- | :--------------------------- | :-------------------------------------------- |
| ansible_ssh_host             | 定义hosts ssh地址            | ansible_ssh_host=192.168.6.240                |
| ansible_ssh_port             | 定义hosts ssh端口            | ansible_ssh_port=52113                        |
| ansible_ssh_user             | 定义hosts ssh认证用户        | ansible_ssh_user=user                         |
| ansible_ssh_pass             | 定义hosts ssh认证密码        | ansible_ssh_pass=pass                         |
| ansible_sudo                 | 定义hosts sudo用户           | ansible_sudo=www                              |
| ansible_sudo_pass            | 定义hosts sudo密码           | ansible_sudo_pass=pass                        |
| ansible_sudo_exe             | 定义hosts sudo路径           | ansible_sudo_exe=/usr/bin/sudo                |
| ansible_connection           | 定义hosts 连接方式           | ansible_connection=local                      |
| ansible_ssh_private_key_file | 定义hosts 私钥               | ansible_ssh_private_key_file=/root/key        |
| ansible_ssh_shell_type       | 定义hosts shell类型          | ansible_ssh_shell_type=bash                   |
| ansible_python_interpreter   | 定义hosts 任务执行python路径 | ansible_python_interpreter=/usr/bin/python2.7 |
| ansible_*_interpreter        | 定义hosts 其他语言解析路径   | ansible_*_interpreter=/usr/bin/ruby           |