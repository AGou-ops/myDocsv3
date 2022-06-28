1. 使用`bc`计算表达式：

```shell
#!/bin/bash

var1=10.45
var2=43.67
var3=33.2
var4=71
# scacle 表示小数点的位数
var5=`bc <<EOF
scale=4
a1 = $var1 * $var2
b1 = $var3 * $var4
a1 + b1
EOF
# 或者使用
var5=`echo "scale=4; ($var1 * $var2) + ($var3 * $var4)" | bc`
`
echo The final answer for this mess is $var5
```

2. let 不需要空格隔开表达式的各个字符。而 expr 后面的字符需要空格隔开各个字符。

```shell
s=`expr 2 + 3`
s=`expr \( 2 + 6 \) \* 3`
let s=(2+3)*4
let s++  
```

3. 读取文件

```shell
#!/bin/bash
# reading data from a file

count=1
cat test | while read line
do
	echo "Line $count: $line"
	let count++
	# count=$[ $count + 1 ]
done
echo "Finished processing the file"
```

4. 获取脚本文件名称

```shell
name=`basename $0`
echo The command entered is $name
```

5. 获取用户输入

```shell
#如果不指定变量，read命令就会把它收到的任何数据都放到特殊环境变量REPLY中
read -p "Enter a number:"
factorial=1
for (( count=1; count<=$REPLY; count++))
do
	factorial=$[ $factorial * $count ]
done
echo "The factorial of $REPLY is $factorial"
```

6. `read`进阶用法

```shell
read -s		# -s隐藏输入,用于输入"敏感"信息
echo hello|read foo
          # Delimiters given via "-d" are taken as one string
          echo a==b==c | read -d == -l a b c
          echo $a # a
          echo $b # b
          echo $c # c

read -n 1 line		# 仅允许输入一个字符, 输入完毕后立即执行下一命令.
```

7. `: ${1?"Usage: $0 ARGUMENT"}`: 如果为输入任何参数则退出脚本.
8. `basename $PWD`或者`${PWD##*/}`: 获取当前基础目录
9. `echo $'\n\v'`: 可以用于替代`echo -e '\n\v'`.
10. `directory=${1-`pwd`}`: 如果没有特殊指定, 则使用当前目录.
11. `trap "ehco 'program exit...'; exit 2" SIGINT`: 当程序手动终止(按下`Ctrl+C`)时触发信号
12. `expr $1 + 1 > /dev/null 2>&1`: 判断参数一是否为数字, 使用`$?`的值进行判断.








































