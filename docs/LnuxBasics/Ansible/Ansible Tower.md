# Ansible Tower

## Tower 安装与破解

1. 从官方仓库获取安装包并解压

```bash
wget https://releases.ansible.com/ansible-tower/setup-bundle/ansible-tower-setup-bundle-3.6.2-1.el7.tar.gz
tar xf ansible-tower-setup-bundle-3.6.2-1.el7.tar.gz
```

2. 编辑主机`inventory`清单文件

```bash
cd ansible-tower-setup-bundle-3.6.2-1/
[root@master ansible-tower-setup-bundle-3.6.2-1]\# vim inventory
...
# 填写必要的账号密码
[all:vars]
admin_password='admin'	

pg_password='admin'

rabbitmq_username=admin
rabbitmq_password='admin'
...
```

3. 执行安装脚本`./setup.sh`

4. 安装完后访问测试: ``
5. `Ansible-Tower`破解:

```bash
cd /var/lib/awx/venv/awx/lib/python3.6/site-packages/tower_license
# 安装pip
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install uncompyle6
# 反汇编init.pyc
uncompyle6 __init__.pyc >__init__.py
# -----------------  修改__init__.py文件  -----------------
    def _check_cloudforms_subscription(self):
        return True    #添加这一行
        if os.path.exists('/var/lib/awx/i18n.db'):
            return True
        else:
            if os.path.isdir('/opt/rh/cfme-appliance'):
                if os.path.isdir('/opt/rh/cfme-gemset'):
                    pass
            try:
                has_rpms = subprocess.call(['rpm', '--quiet', '-q', 'cfme', 'cfme-appliance', 'cfme-gemset'])
                if has_rpms == 0:
                    return True
            except OSError:
                pass
 
            return False
....
 
#修改"license_date=253370764800L" 为 "license_date=253370764800"
    def _generate_cloudforms_subscription(self):
        self._attrs.update(dict(company_name='Red Hat CloudForms License', instance_count=MAX_INSTANCES,
          license_date=253370764800,  #修改
          license_key='xxxx',
          license_type='enterprise',
          subscription_name='Red Hat CloudForms License'))
...
# ---------------------------------------------------------

# 修改完重新编译一下
python -m py_compile __init__.py
python -O -m py_compile __init__.py
```

6. 重启服务, `ansible-tower-service restart`

## 测试

Ansible Tower的playbook默认存在 `/var/lib/awx/projects/`

## 参考链接

- Ansible-Tower 配置要求 : https://docs.ansible.com/ansible-tower/3.0/html/installandreference/requirements_refguide.html