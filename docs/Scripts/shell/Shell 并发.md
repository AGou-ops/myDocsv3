# Shell并发

shell并发脚本示例：

```shell
#!/bin/bash
# 并发数
pnum=6
#想要执行的函数
task () {
  echo "$u start"
  sleep 5
  echo "$u done"
}

FifoFile="$$.fifo"
mkfifo $FifoFile
exec 6<>$FifoFile
rm $FifoFile

for ((i=0;i<=$pnum;i++));do echo;done >&6
#执行20次
for u in `seq 1 20`
do
  read -u6
  {
  #调用函数
  task
  #并发执行函数打印结果日志
  [ $? -eq 0 ] && echo "${u} 次成功" || echo "${u} 次失败"
  echo >&6
  } &
done
wait
exec 6>&-
```



