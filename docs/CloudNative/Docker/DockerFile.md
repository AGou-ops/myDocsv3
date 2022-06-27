# DockerFile 

## DockerFile 常用指令

**FROM**

```bash
* 可以从DockHub中拉取指定镜像(默认)，也可以拉取第三方镜像仓库的镜像，或者直接拉取本地已经制作好的镜像
```


**MAINTAINER** 

```bash
# 例子：
MAINTAINER "suofeiya <suofeiyaxx@gmail.com>"
```

**LABEL**

```bash
# 语法：
LABEL <key>=<value> <key>=<value> <key>=<value> ...
# 例子：
LABEL maintainer="suofeiya <suofeiyaxx@gmail.com>"  \ 
comment="something here" \ ...
* 注意： LABEL 值如果中包含空格，需要使用引号和反斜杠
```


**RUN**

```bash
RUN 指令：用于指定** docker build **过程中要运行的命令。
 语法格式：
  RUN <command> 或		# <command>通常是一个shell命令，且以"/bin/sh -c" 来运行它，这意味着此进程在容器中的PID号不为1，不能接收UNIX信号，因此，当使用 docker stop 命令来停止容器时，此进程接收不到SIGTERM信号
  RUN ["<executeable>","<param1>","param2",...]
  RUN ["/bin/bash","-c","<executeable>","param1","param2",...]
         
 例如：
     RUN yum install iproute nginx && yum clean all
```

**CMD**

```bash
CMD 指令：类似于 RUN 指令，用于运行程序，但二者运行的时间点不同；CMD 在** docker run **时运行，而非** docker build **阶段.
CMD 指令的首要目的在于为启动的容器指定默认要运行的程序，程序运行结束，容器也就结束
注意: CMD 指令指定的程序可被** docker run **命令行参数中指定要运行的程序所覆盖。
 语法格式：
 CMD <command> 或
 CMD ["<executeable>","<param1>","<param2>",...] 
 CMD ["<param1>","<param2>",...]  注意：该写法是为 ENTRYPOINT 指令指定的程序提供默认参数
注意：如果 dockerfile 中如果存在多个CMD指令，仅最后一个生效
     
 例如：
         CMD ["/usr/sbin/httpd","-c","/etc/httpd/conf/httpd.conf"]
```

**ENTRYPOINT**

```bash
ENTRYPOINT 指令：类似于 CMD 指令，但其不会被** docker run **的命令行参数指定的指令所覆盖，而且这些命令行参数会被当作参数送给 ENTRYPOINT 指令指定的程序；但是, 如果运行** docker run **时使用了 --entrypoint 选项，此选项的参数可当作要运行的程序覆盖 ENTRYPOINT 指令指定的程序
 语法格式：
 ENTRYPOINT <command> 或
 ENTRYPOINT ["<executeable>","<param1>","<param2>",...]
         
 例如：
     CMD ["-c"]
     ENTRYPOINT ["top","-b"]
注意：一个dockefile中可以有多个 ENTRYPOINT ，但仅有最后以一个ENTRYPOINT生效.
```

>**`ENTRYPOINT` 与 `CMD` 区别？**
>
>如： `FROM busybox   ENTRYPOINT ["top", "-b"]    CMD ["-c"]`       把可能需要变动的参数写到 CMD 里面。然后你可以在** docker run **里指定参数，这样 CMD 里的参数(这里是-c) 就会被覆盖掉而 ENTRYPOINT 里的不被覆盖。 
>
>**注意**： ENTRYPOINT有两种写法，第二种(shell form)会屏蔽掉 docker run 时后面加的命令和 CMD 里的参数


**EXPOSE**

```bash
EXPOSE [PORT]/[PROTOCOL]		# 暴露端口，可以指定协议(可省略)
```

**ADD**

```bash
# 其中，<src>可以是压缩包类型，也可以是url

* 需要注意的一点：
	  docker 官方建议我们当需要从远程复制文件时，最好使用 curl 或 wget 命令来代替 ADD 命令。原因是，当使用 ADD 命令时，会创建更多的镜像层，当然镜像的 文件大小 也会更大，例如：
# 官方不建议使用的方法
ADD http://example.com/big.tar.xz /usr/src/things/
RUN tar -xJf /usr/src/things/big.tar.xz -C /usr/src/things
RUN make -C /usr/src/things all

# 官方建议的使用方法
# 如果使用下面的命令，不仅镜像的层数减少，而且镜像中也不包含 big.tar.xz 文件
RUN mkdir -p /usr/src/things \
&& curl -SL http://example.com/big.tar.xz \
| tar -xJC /usr/src/things \
&& make -C /usr/src/things all
```

**COPY**

```bash
COPY <src>... <dest>
# 或者
COPY ["<src>" ... "<dest>"]

* 注意：dest目标目录最好使用绝对路径，若要使用相对路径，则需要设置workdir工作目录路，另外如果路径中包含有空格字符，应当使用第二种格式

文件复制准则：
* <src>应当是build上下文中的路径，不能是其父目录或者其他上级目录中的文件
* 如果<src>为目录，则该目录下的所有文件均会被复制，但<src>目录本身不会被复制
* 如果指定了多个<src>目录，或者使用了文件通配符，则<dest>目标目录在文件夹结尾需加入"/"
* 如若<dest>目录在容器中不存在，则build构建时会自动创建，包含其父目录
```

>**`ADD`命令和`COPY`命令的区别？**
>
>* `COPY `命令可以用于 `multistage` 场景下，而ADD命令不可以
>* `ADD`命令可以传入压缩包文件，并自动解压至指定位置，也可以传入URL
>
>---
>
>docker的 `multistage` 场景：同一个`DockerFile`文件中可以存在多个FROM指令，每个`FROM`指令代表stage的开始.
>
>```shell
># 使用无命名的stage，加入以下参数
>--from=0
># 使用命名的stage
>FROM busybox as builder
>...
>FROM centos
>COPY --from builder /PATH/TO/FILE ./
>...
>```
>
>注意：旧版本的 docker 是不支持 `multi-stage` 的，只有 `17.05 `以及之后的版本才开始支持

**VOLUME**

```bash
# 格式：
VOLUME ["<路径1>", "<路径2>"...] 
VOLUME <路径> 
* 注意：通过 VOLUME 指令创建的挂载点，无法指定主机上对应的目录，是自动生成的
```

**USER**

```bash
# 格式：
USER <user>[:<group>] 
USER <UID>[:<GID>]
# 作用：指定运行时的用户名或UID，后续的RUN也会使用指定的用户，当服务不需要管理权限时，可以通过该命令指定运行用户，并且可以在之前创建所需要的用户

* 注意：当要临时获取管理权限时，可以使用gosu，而不推荐使用sudo

```

**WORKDIR**

```bash
# 格式：
WORKDIR /PATH/TO/DIR

* 注意：一个DockerFile中可以指定多个WORKDIR，后续命令如果是相对目录，则会基于之前指定的路径，例如`WORKDiR /dir1 \ WORKDIR dir2 \ WORKDIR dir3 \ RUN pwd`，其结果是`/dir1/dir2/dir3`
```

**ONBUILD**

```bash
# 用于在DockerFile中定义一个触发器，当一个镜像被当做基础镜像，也就是FROM对象时，就会触发base image中的ONBUILD指令所定义的触发器

* 注意：使用包含ONBUILD的指令的DockFIle构建的镜像时，应当使用特殊的标签，例如busybox-onbuild
在ONBUILD命令中使用COPY命令和ADD命令时要注意，如果在构建的上下文中缺少指定的源文件时会报错
```

**ARG**

```bash
# 语法：
ARG NAME[=<default-value>]
# 作用：ARG 指令使用 --build-arg = 标志定义一个变量，用户可以使用 docker build 命令在构建时将该变量传递给构建器。如果用户指定了未在 Dockerfile 中定义的构建参数，则构建会输出告警
* 可以在同一个DockerFile中指定多个 ARG ，ARG可以有默认值，当容器构建时未指定变量的默认值，将使用dockerfile中的默认值
* 注意：ARG 变量定义从 Dockerfile 中定义的行开始生效，而不是从命令行或其它地方的参数使用，简单来说ARG变量定义可以先使用后声明(大概这个意思吧...)，另外，使用ENV 指令定义的环境变量始终覆盖同名的 ARG 指令

# 预定义的ARG，可以直接在DockerFile中使用，而无需相应的ARG指令
HTTP_PROXY,http_proxy,HTTPS_PROXY,https_proxy,FTP_PROXY,ftp_proxy,NO_PROXY,no_proxy
# 如何使用？直接在命令行使用即可
--build-arg <varname>=<value>
```

**ENV**

```bash
# 两种格式
ENV ENV_NAME VARIABLE			# 指定单个环境变量
ENV ENV_NAME="VARIABLE" ...			# 传递多个环境变量
* 通过ENV定义的环境变量，可以在dockerfile被后面的所有指令中使用，但不能被CMD指令使用，也不能被docker run 的命令参数引用，使用ENV 指令定义的环境变量始终覆盖同名的 ARG 指令
* 如果需要在容器运行时使用环境变量，在 docker run 时使用 -e "ENV_NAME=VARIABLE" 即可

* 注意：与 ARG 指令不同，ENV 值始终保留在构建的镜像中
```

**HEALTHCHECK**

```bash
# 两种格式
HEALTHCHECK [OPTIONS] CMD COMMAND
HEALTHCHECK NODE			# 禁止从父镜像继承的HEALTHCHECK生效

* 可用OPTOPNS
--interval=DURATION(default:30s)		# 间隔(s秒、m分钟、h小时)，从容器运行起来开始计时interval秒（或者分钟小时）进行第一次健康检查，随后每间隔interval秒进行一次健康检查；还有一种特例请看timeout解析。
--start-period=DURATION(default:0s)			#  启动时间， 默认 0s， 如果指定这个参数， 则必须大于 0s ；--start-period 为需要启动的容器提供了初始化的时间段， 在这个时间段内如果检查失败， 则不会记录失败次数。 如果在启动时间内成功执行了健康检查， 则容器将被视为已经启动， 如果在启动时间内再次出现检查失败， 则会记录失败次数。
--timeout=DURATION(default:30s)			# 执行command需要时间，比如curl 一个地址，如果超过timeout秒则认为超时是错误的状态，此时每次健康检查的时间是timeout+interval秒。
--retries=N(default:3)			# 连续检查retries次，如果结果都是失败状态，则认为这个容器是unhealth的

* 容器退出状态码
*  0表示正常退出，1表示unhealthy，2表示reserved
# 例子：
HEALTHCHECK --interval=4m --timeout=3s \ 
CMD curl -f http://localhost || exit 1

* 总结：当容器启动之后，首先间隔interval秒然后进行健康检查，如果一个检查所花的时间超过了timeout秒，那么就认为这次检查失败了，如果连续retries次失败，就认为此容器状态为unhealthy

# 使用例子：
HEALTHCHECK –interval=10s –timeout=3s –retries=3 CMD curl http://localhost			#  可能会出现curl这个地址3秒内没响应则认为失败，然后再开始interval的时间进行下次检测，最后显示unhealthy的状态应该是39s
# 获取指定容器的健康状态
docker inspect –format ‘【【json .State.Health.Status】】’ 41f1414fab75

* 注意：当dockfile指定多个 HEALTHCHECK 时，仅对最后一个 HEALTHCHECK 有效
```

## DockerFile 构建选项及技巧

docker build用于使用 Dockerfile 创建镜像，下面是参数列表:

```bash
--build-arg=\[\]                 # 设置镜像创建时的变量
--cpu-shares                 # 设置 cpu 使用权重
--cpu-period                 # 限制 CPU CFS周期
--cpu-quota                 # 限制 CPU CFS配额
--cpuset-cpus                 # 指定使用的CPU id
--cpuset-mems                 # 指定使用的内存 id
--disable-content-trust                 # 忽略校验，默认开启
-f                 # 指定要使用的Dockerfile路径
#  例子：
docker build -f /path/to/a/Dockerfile .
--force-rm                 # 设置镜像过程中删除中间容器
--isolation                 # 使用容器隔离技术
--label=\[\]                 # 设置镜像使用的元数据
-m                 # 设置内存最大值
--memory-swap                 # 设置Swap的最大值为内存+swap，"-1"表示不限swap
--no-cache                 # 创建镜像的过程不使用缓存
--pull                 # 尝试去更新镜像的新版本
--quiet, -q                 # 安静模式，成功后只输出镜像 ID
--rm                 # 设置镜像成功后删除中间容器
--shm-size                 # 设置/dev/shm的大小，默认值是64M
--ulimit                 # Ulimit配置
--tag, -t                # 镜像的名字及标签，通常 name                # tag 或者 name 格式可以在一次构建中为一个镜像设置多个标签
--network                # 默认 default在构建期间设置RUN指令的网络模式
```

### 加速镜像构建

在使用 `COPY` 和 `ADD` 命令时，我们可以通过一些技巧来加速镜像的 build 过程。比如把那些最不容易发生变化的文件的拷贝操作放在较低的镜像层中，这样在重新 build 镜像时就会使用前面 build 产生的缓存，例如：

``` shell
# 构建文件夹中分别有 test.sh x1.sh x2.sh x3.sh 四个文件，其中 test.sh 文件不经常修改，而x1-3.sh经常有变动，所以将 test.sh 单独置于一个镜像层中，且放置于较低的镜像层中
WORKDIR /test
COPY test.sh .
COPY x*.sh ./
# 构建时，当 x*.sh 发生变化而 test.sh 无变化时，重新构建镜像时会跳过 test.sh
```

## DockerFile 最佳实践

https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

https://docs.docker.com/develop/dev-best-practices/