# Nexus Basic + Maven 私服 

# Nexus 私服搭建

[TOC]

## Nexus 简介

nexus是一个强大的maven仓库管理器,它极大的简化了本地内部仓库的维护和外部仓库的访问.

nexus是一套开箱即用的系统不需要数据库,它使用文件系统加Lucene来组织数据

nexus使用ExtJS来开发界面,利用Restlet来提供完整的REST APIs,通过IDEA和Eclipse集成使用

nexus支持webDAV与LDAP安全身份认证.

nexus提供了强大的仓库管理功能,构件搜索功能,它基于REST,友好的UI是一个extjs的REST客户端,占用较少的内存,基于简单文件系统而非数据库.

私服仓库的工作流程:

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-1.jpg)

Nexus Repository Manager, 仓库管理器, 可以用来搭建`apt`,`docker`,`maven2`,`npm`,`nuget`,`pypi`,`yum`私服.

官方文档:https://help.sonatype.com/repomanager3

## Nexus  四种仓库类型介绍

`hosted`，本地仓库，通常我们会部署自己的构件到这一类型的仓库。比如公司的第二方库。

`proxy`，代理仓库，它们被用来代理远程的公共仓库，如maven中央仓库。

`group`，仓库组，用来合并多个hosted/proxy仓库，当你的项目希望在多个repository使用资源时就不需要多次引用了，只需要引用一个group即可。

## Nexus  预置仓库

**Releases:** 【私库发行版jar】这里存放我们自己项目中发布的构建, 通常是Release版本的, 比如我们自己做了一个FTP Server的项目, 生成的构件为ftpserver.war, 我们就可以把这个构建发布到Nexus的Releases本地仓库. 关于符合发布后面会有介绍.

**Snapshots:**这个仓库非常的有用, 它的目的是让我们可以发布那些非release版本, 非稳定版本, 比如我们在trunk下开发一个项目,在正式release之前你可能需要临时发布一个版本给你的同伴使用, 因为你的同伴正在依赖你的模块开发, 那么这个时候我们就可以发布Snapshot版本到这个仓库, 你的同伴就可以通过简单的命令来获取和使用这个临时版本.

**3rd Party:**顾名思义, 第三方库, 你可能会问不是有中央仓库来管理第三方库嘛,没错, 这里的是指可以让你添加自己的第三方库, 比如有些构件在中央仓库是不存在的. 比如你在中央仓库找不到Oracle 的JDBC驱动, 这个时候我们就需要自己添加到3rdparty仓库。

## Repositories说明

| 仓库名          | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| maven-central   | maven中央库，默认从https://repo1.maven.org/maven2/拉取jar    |
| maven-releases  | 私库发行版jar                                                |
| maven-snapshots | 私库快照（调试版本）jar                                      |
| maven-public    | 仓库分组，把上面三个仓库组合在一起对外提供服务，在本地maven基础配置settings.xml中使用 |

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-3.png "**Repositories**")

## Linux 上安装

可以使用tar xvzf命令提取下载的GZip的TAR归档文件。 对于生产而言，建议不要从用户的主目录运行nexus，通常的做法是使用`/opt`。 运行应用程序要在类似Linux的类Unix平台上从`bin`文件夹中的应用程序目录启动存储库管理器，请使用：

```bash
./nexus run
```

The `nexus` script can be used to manage the repository manager as a background application on OSX and Unix with the `start`, `stop`, `restart`, `force-reload` and `status` commands.

最后通过 http://ip:8081 即可访问, 默认账号密码分别是 `admin/admin123`

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-2.png "截图")

### 创建仓库(阿里的中央仓库)

proxy代理仓库

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-4.png)

hosted宿主仓库

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-6.png)

group仓库组

![](https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/Maven/Nexus-5.png)

## Docker 中运行

仓库地址:https://hub.docker.com/r/sonatype/nexus3/

1、创建存放数据的位置

```bash
# 创建个文件夹
mkdir /data/nexus-data
# 赋予权限，不然启动会报错，无操作权限
chmod 755 nexus-data
```

2、启动

执行以下命令即可，会自动拉取镜像并启动

```bash
docker run -d -p 8081:8081 --name nexus -v /data/nexus-data:/nexus-data --restart=always sonatype/nexus3
```

通过`docker logs -f nexus`查看启动日志，当出现`Started Sonatype Nexus OSS`说明启动成功，这时通过`http://ip:8081`即可访问

## Windows 上安装

为了方便管理`Nexus`, 可以将`nexus`的`bin`目录添加进环境变量, 具体方法可以网上搜索, 在此不再赘述.

Windows 直接运行:

```bash
nexus.exe /run
```

The `nexus.exe` executable can be used to manage the repository manager as a service with the `/start`, `/stop`, `/restart`,` /force-reload` and `/``status` commands.

最后, 打开浏览器访问 http://127.0.0.1:8081/ 即可.

:information_source:注意: `admin`账户的默认密码在`[Nexus安装目录]\sonatype-work\nexus3\admin.password`, 第一次引导时会提示你修改密码.

## 项目配置

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

<!--
 | This is the configuration file for Maven. It can be specified at two levels:
 |
 |  1. User Level. This settings.xml file provides configuration for a single user,
 |                 and is normally provided in ${user.home}/.m2/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -s /path/to/user/settings.xml
 |
 |  2. Global Level. This settings.xml file provides configuration for all Maven
 |                 users on a machine (assuming they're all using the same Maven
 |                 installation). It's normally provided in
 |                 ${maven.home}/conf/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -gs /path/to/global/settings.xml
 |
 | The sections in this sample file are intended to give you a running start at
 | getting the most out of your Maven installation. Where appropriate, the default
 | values (values used when the setting is not specified) are provided.
 |
 |-->
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   |
   | Default: ${user.home}/.m2/repository
    -->
  <localRepository>D:\Maven\repository</localRepository>
 

  <!-- interactiveMode
   | This will determine whether maven prompts you when it needs input. If set to false,
   | maven will use a sensible default value, perhaps based on some other setting, for
   | the parameter in question.
   |
   | Default: true
  <interactiveMode>true</interactiveMode>
  -->

  <!-- offline
   | Determines whether maven should attempt to connect to the network when executing a build.
   | This will have an effect on artifact downloads, artifact deployment, and others.
   |
   | Default: false
  <offline>false</offline>
  -->

  <!-- pluginGroups
   | This is a list of additional group identifiers that will be searched when resolving plugins by their prefix, i.e.
   | when invoking a command line like "mvn prefix:goal". Maven will automatically add the group identifiers
   | "org.apache.maven.plugins" and "org.codehaus.mojo" if these are not already contained in the list.
   |-->
  <pluginGroups>
    <!-- pluginGroup
     | Specifies a further group identifier to use for plugin lookup.
    <pluginGroup>com.your.plugins</pluginGroup>
    -->
  </pluginGroups>

  <!-- proxies
   | This is a list of proxies which can be used on this machine to connect to the network.
   | Unless otherwise specified (by system property or command-line switch), the first proxy
   | specification in this list marked as active will be used.
   |-->
  <proxies>
    <!-- proxy
     | Specification for one proxy, to be used in connecting to the network.
     |
    <proxy>
      <id>optional</id>
      <active>true</active>
      <protocol>http</protocol>
      <username>proxyuser</username>
      <password>proxypass</password>
      <host>proxy.host.net</host>
      <port>80</port>
      <nonProxyHosts>local.net|some.host.com</nonProxyHosts>
    </proxy>
    -->
  </proxies>

  <!-- servers
   | This is a list of authentication profiles, keyed by the server-id used within the system.
   | Authentication profiles can be used whenever maven must make a connection to a remote server.
   |-->
  <servers>
    <!-- server
     | Specifies the authentication information to use when connecting to a particular server, identified by
     | a unique name within the system (referred to by the 'id' attribute below).
     |
     | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are
     |       used together.
     |
     -->
    <server>
      <id>release</id>
      <username>admin</username>
      <password>admin123</password>
    </server>
    
    <server>
      <id>snapshots</id>
      <username>admin</username>
      <password>admin123</password>
    </server>
    
    

    <!-- Another sample, using keys to authenticate.
    <server>
      <id>release</id>
      <privateKey>/path/to/private/key</privateKey>
      <passphrase>optional; leave empty if not used.</passphrase>
    </server>
    -->
  </servers>

  <!-- mirrors
   | This is a list of mirrors to be used in downloading artifacts from remote repositories.
   |
   | It works like this: a POM may declare a repository to use in resolving certain artifacts.
   | However, this repository may have problems with heavy traffic at times, so people have mirrored
   | it to several places.
   |
   | That repository definition will have a unique id, so we can create a mirror reference for that
   | repository, to be used as an alternate download site. The mirror site will be the preferred
   | server for that repository.
   |-->
  <mirrors>
    <!-- mirror
     | Specifies a repository mirror site to use instead of a given repository. The repository that
     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
     |
    <mirror>
      <id>mirrorId</id>
      <mirrorOf>repositoryId</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>http://my.repository.com/repo/path</url>
    </mirror>
     -->
  </mirrors>

  <!-- profiles
   | This is a list of profiles which can be activated in a variety of ways, and which can modify
   | the build process. Profiles provided in the settings.xml are intended to provide local machine-
   | specific paths and repository locations which allow the build to work in the local environment.
   |
   | For example, if you have an integration testing plugin - like cactus - that needs to know where
   | your Tomcat instance is installed, you can provide a variable here such that the variable is
   | dereferenced during the build process to configure the cactus plugin.
   |
   | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles
   | section of this document (settings.xml) - will be discussed later. Another way essentially
   | relies on the detection of a system property, either matching a particular value for the property,
   | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a
   | value of '1.4' might activate a profile when the build is executed on a JDK version of '1.4.2_07'.
   | Finally, the list of active profiles can be specified directly from the command line.
   |
   | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact
   |       repositories, plugin repositories, and free-form properties to be used as configuration
   |       variables for plugins in the POM.
   |
   |-->
  <profiles>
    <!-- profile
     | Specifies a set of introductions to the build process, to be activated using one or more of the
     | mechanisms described above. For inheritance purposes, and to activate profiles via <activatedProfiles/>
     | or the command line, profiles have to have an ID that is unique.
     |
     | An encouraged best practice for profile identification is to use a consistent naming convention
     | for profiles, such as 'env-dev', 'env-test', 'env-production', 'user-jdcasey', 'user-brett', etc.
     | This will make it more intuitive to understand what the set of introduced profiles is attempting
     | to accomplish, particularly when you only have a list of profile id's for debug.
     |
     | This profile example uses the JDK version to trigger activation, and provides a JDK-specific repo.
    <profile>
      <id>jdk-1.4</id>

      <activation>
        <jdk>1.4</jdk>
      </activation>

      <repositories>
        <repository>
          <id>jdk14</id>
          <name>Repository for JDK 1.4 builds</name>
          <url>http://www.myhost.com/maven/jdk14</url>
          <layout>default</layout>
          <snapshotPolicy>always</snapshotPolicy>
        </repository>
      </repositories>
    </profile>
    -->

    <!--
     | Here is another profile, activated by the system property 'target-env' with a value of 'dev',
     | which provides a specific path to the Tomcat instance. To use this, your plugin configuration
     | might hypothetically look like:
     |
     | ...
     | <plugin>
     |   <groupId>org.myco.myplugins</groupId>
     |   <artifactId>myplugin</artifactId>
     |
     |   <configuration>
     |     <tomcatLocation>${tomcatPath}</tomcatLocation>
     |   </configuration>
     | </plugin>
     | ...
     |
     | NOTE: If you just wanted to inject this configuration whenever someone set 'target-env' to
     |       anything, you could just leave off the <value/> inside the activation-property.
     |
    
    <profile>
      <id>env-dev</id>

      <activation>
        <property>
          <name>target-env</name>
          <value>dev</value>
        </property>
      </activation>

    </profile>
    -->
    
     <profile>
      <id>default_profile</id>
      <repositories>
        <!--包含需要连接到远程仓库的信息 -->
        <repository>
          <!--远程仓库唯一标识 -->
          <id>zhanglonghao_repo</id>
          <!--远程仓库名称 -->
          <name>zhanglonghao_repo</name>
          <!--如何处理远程仓库里发布版本的下载 -->
          <releases>
            <!--true或者false表示该仓库是否为下载某种类型构件（发布版，快照版）开启。 -->
            <enabled>true</enabled>
            <!--该元素指定更新发生的频率。Maven会比较本地POM和远程POM的时间戳。这里的选项是：always（一直），daily（默认，每日），interval：X（这里X是以分钟为单位的时间间隔），或者never（从不）。 -->
            <updatePolicy>never</updatePolicy>
            <!--当Maven验证构件校验文件失败时该怎么做-ignore（忽略），fail（失败），或者warn（警告）。 -->
            <checksumPolicy>warn</checksumPolicy>
          </releases>
          <!--如何处理远程仓库里快照版本的下载。有了releases和snapshots这两组配置，POM就可以在每个单独的仓库中，为每种类型的构件采取不同的策略。例如，可能有人会决定只为开发目的开启对快照版本下载的支持。参见repositories/repository/releases元素 -->
          <snapshots>
            <!--true或者false表示该仓库是否为下载某种类型构件（发布版，快照版）开启。 -->
            <enabled>true</enabled>
            <!--该元素指定更新发生的频率。Maven会比较本地POM和远程POM的时间戳。这里的选项是：always（一直），daily（默认，每日），interval：X（这里X是以分钟为单位的时间间隔），或者never（从不）。 -->
            <updatePolicy>always</updatePolicy>
            <!--当Maven验证构件校验文件失败时该怎么做-ignore（忽略），fail（失败），或者warn（警告）。 -->
            <checksumPolicy>warn</checksumPolicy>
          </snapshots>
          <!--远程仓库URL，按protocol://hostname/path形式 -->
          <url>http://maven.zhanglonghao.work:8081/nexus/content/groups/public</url>
          <!--用于定位和排序构件的仓库布局类型-可以是default（默认）或者legacy（遗留）。Maven 2为其仓库提供了一个默认的布局；然而，Maven 1.x有一种不同的布局。我们可以使用该元素指定布局是default（默认）还是legacy（遗留）。 -->
          <layout>default</layout>
        </repository>
      </repositories>
      
      <pluginRepositories>  
        <pluginRepository>  
          <id>maven-net-cn</id>  
          <name>Maven China Mirror</name>  
          <url>http://maven.zhanglonghao.work:8081/nexus/content/groups/public</url>  
          <releases>  
            <enabled>true</enabled>  
          </releases>  
          <snapshots>  
            <enabled>true</enabled>  
          </snapshots>      
        </pluginRepository>  
      </pluginRepositories> 
  
    </profile>
  </profiles>
 


  <!-- activeProfiles
   | List of profiles that are active for all builds.
   -->
  <activeProfiles>
    <activeProfile>default_profile</activeProfile>
  </activeProfiles>

</settings>
```

## 参考链接

* 官方安装文档：https://help.sonatype.com/repomanager3/installation/installation-methods

* Linux搭建自己Nexus私服的实现方法：https://www.jb51.net/article/171427.htm













 