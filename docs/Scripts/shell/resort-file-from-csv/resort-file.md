# 根据csv重归档文件

**需求：根据excel中的文件列表，将excel进行简单处理成csv格式，使用sed、awk等结合正则对图片文件按照年月的格式来进行重新归档并输出相关日志。**

代码如下：

```shell
#!/bin/bash
#
#**************************************************
# Author:         AGou-ops                        *
# E-mail:         agou-ops@foxmail.com            *
# Date:           2021-08-10                      *
# Description:    Re-sort picture file              *
# Copyright 2021 by AGou-ops.All Rights Reserved  *
#**************************************************
set -euo pipefail
set -o errexit
# -------
base_dir=./gif
path_pic=./path_pics.csv


# Create destination Dirs
create_dirs(){
   # dirs_name=`tree -dfi "${base_dir}" | grep -v "dire*" | sed "s/gif/output/g" `
   # mkdir -pv $dirs_name && echo -e \n\n"success" || echo "\n\nfailed"
   dirs_name=`awk -F, '{print "./"$1}' "${path_pic}" | sed "s@./ @./output/@g"  | uniq`
   mkdir -pv $dirs_name && echo -e "\033[42;37m CREATE DIRs SUCCESS \033[0m\n\n" || echo -e "\033[41;37m FAILED \033[0m"
}
create_dirs
# Sleep 2 seconds to wait create_dirs
sleep 1
echo -e "\n\n\033[47;30m ============================== TASK START ============================== \033[0m\n"

# Get old filepath and new filepath
tree -if "${base_dir}" | egrep '*.gif$|*.png' | tr "." "_" | tr " " "<" | tr "-" ">" > ./old_filepath.txt
awk -F, '{print "./"$1"/"$2}' "${path_pic}" | sed "s@./ @./output/@g" | tr "." "_" | tr " " "<" | tr "-" ">" > ./new_filepath.txt

`dos2unix old_filepath.txt`
`dos2unix new_filepath.txt`

sleep 2
# old_filepath=`tree -if "${base_dir}" | egrep '*.gif$|*.png|*.jpg'`
# new_filepath=`awk -F, '{print "./"$1"/"$2}' "${path_pic}" | sed "s@./ @./output/@g"`

# Create dict to store filename(key) and filepath(value)
declare -A old_path_dict
while read line; do 
  key=$(basename $line)
  data=$(dirname $line)
  old_path_dict[$key]=$data
done < old_filepath.txt


declare -A new_path_dict
while read line; do 
  key=$(basename $line)
  data=$(dirname $line)
  new_path_dict[$key]=$data
done < new_filepath.txt

# Empty file content
: > ./match_result.txt
: > ./final_result.txt
: > ./final_result2.txt
: > ./final_result3.txt


for i in $(echo ${!new_path_dict[*]});do
    # echo "$i : ${new_path_dict[$i]}"
    for j in $(echo ${!old_path_dict[*]});do
        if [ "$i" == "$j" ];then
            echo -e "【MATCHED】 $i\t==\t$j \t\t【${new_path_dict[$i]}\t<==>\t${old_path_dict[$j]}】" >> ./match_result.txt
# ---------------- IMPORTANT STEP --------------------
            old_absolute_path=`echo -e "${old_path_dict[$j]}/$j" | tr "_" "." | tr "<" " "  | tr ">" "-"`
            new_absolute_path=`echo -e "${new_path_dict[$j]}/$j" | tr "_" "." | tr "<" " "  | tr ">" "-"`
            # test=`echo -e ${old_path_dict[$j]}/\t$j | tr "_" "." | tr "<" " "  | tr ">" "-""`
            test1=`echo -e "${old_path_dict[$j]}/\t$j" | tr "_" "." | tr "<" " "  | tr ">" "-"`
            test2=`echo -e "${new_path_dict[$j]}/\t$j" | tr "_" "." | tr "<" " "  | tr ">" "-"`
            dest_path=`echo -e "${new_path_dict[$j]}/" | tr "_" "." | tr "<" " "  | tr ">" "-"`
            echo -e "$old_absolute_path\t==>\t$new_absolute_path" >> ./final_result.txt
            echo $test1 >> ./final_result2.txt
            echo $test2 >> ./final_result3.txt
            mv --verbose "$old_absolute_path" "$dest_path"  && echo -e "\033[42;37m SUCCESS \033[0m" || echo -e "\033[41;37m FAILED \033[0m"
        fi
    done
done
# test dict
# echo "${new_path_dict["进项发票_png"]}"
# echo "${old_path_dict["进项发票_png"]}"


# old_filepath_2_dict=``
# new_filepath_2_dict=``

# for i in "$all_filepath";do
#     # path1=`dirname "$i"`
#     # filename1=`basename "$i"`
#     # echo -e "$path1\t---\t$filename1"
#     # break
#     for j in "$new_filepath";do
#         filename1=`basename "$i"`
#         path2=`dirname "$j"`
#         filename2=`basename "$j"`
#         # echo -e "$path2\t---\t$filename2"
#     done
# done
# get_filename=$(basename $all_filepath)


echo -e "\n\n\033[47;30m ============================== TASK END ============================== \033[0m\n"

# Clean useless files
`rm ./new_filepath.txt ./old_filepath.txt`
```

