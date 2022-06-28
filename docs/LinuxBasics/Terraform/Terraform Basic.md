# Terraform Basic

## Terraform 简介

> Terraform(IaaC)是用于安全有效地构建，更改和版本控制基础结构的工具。 Terraform可以管理现有和流行的服务提供商以及定制的内部解> 决方案。
> 
> 配置文件向Terraform描述了运行单个应用程序或整个数据中心所需的组件。Terraform生成执行计划，以描述达到预期状态所需执行的> 操作，然后执行该计划以构建所描述的基础结构。随着配置的更改，Terraform能够确定更改的内容并创建可以应用的增量执行计划。
> 
> Terraform可以管理的基础结构包括低级组件，例如计算实例，存储和网络，以及高级组件，例如DNS条目，SaaS功能等。

## Terraform 安装

首先从[官方站点](https://www.terraform.io/downloads.html)下载与当前系统相同的`Terraform`版本, 解压缩, 然后放置于环境变量目录下即可.

`Linux`系统下([其他系统?](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started)):

```bash
$ wget https://releases.hashicorp.com/terraform/0.13.5/terraform_0.13.5_linux_amd64.zip
$ unzip terraform_0.13.5_linux_amd64.zip
$ cd terraform_0.13.5_linux_amd64
$ chmod +x terraform
$ mv terraform /usr/bin/

## 检验安装
$ terraform --version
Terraform v0.13.5

# 为bash或者zsh添加命令行自动补全功能
$ terraform -install-autocomplete
```

## Terraform with AWS

预先准备:

- [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)已成功安装;
- 成功获取`AKSK`;
- aws 本地证书已成功配置;

aws cli安装很简单, 在此就不再赘述.

使用`AKSK`配置aws本地证书:

```bash
$ aws configure
# 会提示输入AKSK信息, 可以从 https://console.aws.amazon.com/iam/home?#security_credential 获取
AWS Access Key ID [****************CRUK]: AKI******HHMRQ
AWS Secret Access Key [****************4K/x]: z0RR******NK0wZE37A
Default region name [ap-east-1]: 
Default output format [yaml]: 
```

执行完该命令之后, 会自动在家目录(Mac/Linux/Windows)创建一个名为`.aws`的文件夹, 文件夹中包含`config`配置文件以及`credentials`证书认证文件(实际为`AKSK`明文的ini风格文件).

### 快速开始

编写配置文件: 

```bash
# vim main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  profile = "default"
  region = "us-east-1"
}

resource "aws_instance" "example" {
  count         = 1     # 运行的实例数
  ami           = "ami-07efac79022b86107"        # 指定ami
  instance_type = "t2.micro"            # 指定实例类型
  tags = {
    Name = "Server ${count.index}"
  }
}
```

初始化:

```bash
$ terrform init
```

格式化和验证配置文件:

```bash
$ terraform fmt
$ terraform validate
Success! The configuration is valid.
```

应用配置文件:

```bash
$ terraform apply

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_instance.example will be created
  + resource "aws_instance" "example" {
      + ami                          = "ami-03657b56516ab7912"
      + arn                          = (known after apply)
      + associate_public_ip_address  = (known after apply)
      + availability_zone            = (known after apply)
      + cpu_core_count               = (known after apply)
      + cpu_threads_per_core         = (known after apply)
      + get_password_data            = false
...
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes    # 确认完信息之后输入yes

aws_instance.example: Creating...
aws_instance.example: Still creating... [10s elapsed]
aws_instance.example: Still creating... [20s elapsed]
aws_instance.example: Still creating... [30s elapsed]
aws_instance.example: Creation complete after 33s [id=i-0073fc0ea18bc948b]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed

```

使用`terraform show`查看生成后的信息.


## 将state文件存放到远程

`Terraform`的状态文件以及所有配置文件都是存于本地的, 如果要协同工作, 则需将文件推送到远端, 可以使用`Github`, `GitLab`, `aws S3`等等, 同时, 官方也提供了一个云端平台来存储和协同工作.

Terraform Cloud 使用参考: https://learn.hashicorp.com/tutorials/terraform/aws-remote?in=terraform/aws-get-started

token生成: https://app.terraform.io/app/settings/tokens, 将生成之后的token放置于`~/.terraformrc`文件中(Windows系统为`%APPDATA%\terraform.rc`), 文件内容如下所示:

```bash
credentials "app.terraform.io" {
  token = "REPLACE_ME"
}

```

在配置文件中引用远端存储配置示例文件内容如下所示:

```bash
terraform {
  backend "remote" {
    organization = "AGou-ops"

    workspaces {
      name = "Example-Workspace"
    }
  }
}
```

最后初始化即可, `terraform init`


## 其他

- `terraform apply [--auto-approve -target <RESOURCES>]`: 应用.tf文件, 并自动应答yes, 指定资源名称;
- `terraform fmt`: 格式化配置文件;
- `terraform validate`: 检查配置文件语法是否正确;
- `terraform show`: 查看生成之后的状态;
- `terraform state list`: 查看状态列表;
- `terraform state show <STATE_LIST_OUTPUT_NAME>`: 查看指定状态的详细信息;
- `terraform refresh`: 刷新状态;
- `terraform destroy [-target <RESOURCES>]`: 摧毁;



## 参考链接

- Terraform Documentation: https://www.terraform.io/docs
- Terraform AWS: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
- Terraform Provider: https://www.terraform.io/docs/providers/index.html