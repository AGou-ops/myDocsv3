# Nexus + yum 私服 

# Nexus + yum

## 创建 yum 私有仓库

yum 私服有三类：

* `hosted`：本地存储，提供本地存储功能服务；
* `proxy`：代理仓库，连接到外网的`aliyun`、`163`、清华等源；
* `group`：组类型，将多个仓库合并为一个仓库，相当于一个透明代理.

创建步骤略，参考[Nexus Basic + Maven 私服](./Nexus Basic + Maven 私服.md#创建仓库(阿里的中央仓库))

### 手动上传`rpm`包文件：

```bash
curl -v --user "admin:admin" --upload-file ./docker-ce-19.03.8-3.el7.x86_64.rpm http://192.168.1.5:8081/repository/local/
```

### 使用脚本批量上传

```bash
#!/bin/bash
# copy and run this script to the root of the repository directory containing files
# this script attempts to exclude uploading itself explicitly so the script name is important
# Get command line params
while getopts ":r:u:p:" opt; do
	case $opt in
		r) REPO_URL="$OPTARG"
		;;
		u) USERNAME="$OPTARG"
		;;
		p) PASSWORD="$OPTARG"
		;;
	esac
done

find . -type f -not -path './upload\.sh' | sed "s@^\./@@" | xargs -I '{}' curl -u "$USERNAME:$PASSWORD" -X PUT -v -T {} ${REPO_URL}/{} ;
# find . -type f -not -path './mavenimport\.sh*' -not -path '*/\.*' -not -path '*/\^archetype\-catalog\.xml*' -not -path '*/\^maven\-metadata\-local*\.xml' -not -path '*/\^maven\-metadata\-deployment*\.xml' | sed "s|^\./||" | xargs -I '{}' curl -u "$USERNAME:$PASSWORD" -X PUT -v -T {} ${REPO_URL}/{} ;
```

运行脚本：

```bash
./importRPMs.sh -u admin -p admin -r http://192.168.1.5:8081/repository/local/
```

