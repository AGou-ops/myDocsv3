# Shell getopts Demo

```shell
#!/bin/bash
status=off                 # 定义变量status，初始值设置为off
filename=""              # 定义变量filename，用于保存选项参数（文件）
output=""                 # 定义变量output，用于保存选项参数（目录）
Usage () {                  # 定义函数Usage，输出脚本使用方法
    echo "Usage"
    echo "myscript [-h] [-v] [-f <filename>] [-o <filename>]"
    exit -1
}

while getopts :hvf:o: varname   # 告诉getopts此脚本有-h、-v、-f、-o四个选项，-f和-o后面需要跟参数（没有选项时，getopts会设置一个退出状态FALSE，退出循环）
do
   case $varname in
    h)
      echo "$varname"
      Usage
      exit
      ;;
    v)
      echo "$varname"
      status=on
      echo "$status"
      exit
      ;;
    f)
      echo "$varname"
      echo "$OPTARG"
      filename=$OPTARG                    # 将选项的参数赋值给filename
      if [ ! -f $filename ];then               # 判断选项所跟的参数是否存在且是文件
         echo "the source file $filename not exist!"
         exit
      fi
      ;;
    o)
      echo "$varname"
      echo "$OPTARG"
      output=$OPTARG                      # 将选项参数赋值给output
      if [ ! -d  $output ];then               # 判断选项参数是否存在且是目录
         echo "the output path $output not exist"
         exit
      fi
      ;;
    # 当选项后面没有参数时，varname的值被设置为（：），OPTARG的值被设置为选项本身
    :)                                               
      echo "$varname"
      echo "the option -$OPTARG require an arguement"        # 提示用户此选项后面需要一个参数
      exit 1
      ;;
    ?)                            # 当选项不匹配时，varname的值被设置为（？），OPTARG的值被设置为选项本身
      echo "$varname"
      echo "Invaild option: -$OPTARG"           # 提示用户此选项无效
      Usage
      exit 2
      ;;
    esac
done
```