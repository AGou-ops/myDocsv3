# Terraform 变量

## Input Vars(输入变量)

如果变量为被定义, 则会读取`default`键的值作为默认变量值.

### 从文件读取

创建文件, 名称为`terraform.tfvars`, 示例内容如下所示:

```bash
region = "us-west-2"
```

`Terraform`会自动读入该文件, 此外还有`*.auto.tfvars`为名的文件也会被自动读取.

若要指定读取的文件, 可以使用`terraform apply -var-file <TF_VAR_FILE>`指定所要使用的变量文件.


### 从命令行传递

```bash
$ terraform apply -var 'region=us-west-2'
```

### 从环境变量中读入

定义系统环境变量, 以`TF_VAR_`开头, 比如:

```bash
export TF_VAR_region=us-west-2
```

### 从cli运行时读入

当变量未赋予默认值并未指定其值时, 运行`terraform apply`时会提示输入变量.

### 富数据类型变量

富数据类型包括`List`, `Maps`, 如下所示:

```bash
# Lists
variable "cidrs" { 
  type = list 
  default = []
}

# Maps
variable "amis" {
  type = "map"
  default = {
    "us-east-1" = "ami-b374d5a5"
    "us-west-2" = "ami-fc0b939c"
  }
}
# 引用
resource "aws_instance" "example" {
  ami           = var.amis[var.region]
  instance_type = "t2.micro"
}
```

## Query Data with Output Vars

### 定义输出

创建输出文件`outputest.tf`, 示例内容如下所示:

```bash
output "ip" {
  value = aws_eip.ip.public_ip
}
```

使用命令行`terraform output ip`也可以获得所需的输出变量.

