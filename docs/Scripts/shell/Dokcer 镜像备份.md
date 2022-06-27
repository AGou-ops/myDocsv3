```shell
#!/bin/bash
GREEN_COLOR='\e[032m'   #绿     
RED_COLOR='\e[031m'     #红
YELLOW_COLOR='\e[033m'  #黄
BLACK_COLOR='\e[0m'     #黑
declare image_id=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 |  awk '{print $3}'`)
declare image_name=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 |  awk '{print $1}' | awk -F/ '{print $NF}'`)
declare image_version=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 | awk '{print $2}'`)
declare image_nameqc=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 |  awk '{print $1}'`)


for i in ${!image_id[@]}
do
        docker save ${image_id[i]} > ${image_name[i]}_${image_version[i]}.tar.gz
        if [ $? -eq 0 ];then
                echo -e "${YELLOW_COLOR}${image_id[i]} ${BLACK_COLOR} in ${YELLOW_COLOR} ${image_nameqc[i]} ${BLACK_COLOR} =====> ${GREEN_COLOR}back finish!!!${BLACK_COLOR} =====> back file is ${RED_COLOR} ${image_name[i]}_${image_version[i]}.tar.gz ${BLACK_COLOR}"
                echo ""
        fi
done
```

