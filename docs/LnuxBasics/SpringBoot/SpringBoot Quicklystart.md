# SpringBoot 快速开始

## Hello World

预先准备环境：jdk，mvn，springboot cli，以下仅列出关键命令

```bash
# 从https://www.oracle.com/java/technologies/downloads/archive/获取所需版本的jdk
$ tar xf jdk-8u301-linux-x64.tar.gz -C /usr/local/
$ cat >> /etc/profile << 'EOF'
export JAVA_HOME=/usr/local/jdk1.8.0_301
PATH=${PATH}:$JAVA_HOME/bin
$ java -version		# check java was installed

# 安装mvn或者Gradle
# on debian series
$ sudo apt-get install maven
$ mvn -c		# check maven was installed

# springboot cli
$ wget https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/2.5.6/spring-boot-cli-2.5.6-bin.zip
# ...然后你懂得。。。
```

新建`pom.xml`文件，内容如下所示：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>myproject</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.5.6</version>

    </parent>

    <!-- Additional lines to be added here... -->
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
    
</project>
```

新建`src/java/MyApplication.java`，我的第一个springboot应用：

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class MyApplication {

    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }

}
```

完成之后可以使用`mvn dependency:tree`检查依赖项。

运行`Hello World`示例：

```bash
$ mvn spring-boot:run
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.5.6)

2021-10-26 09:45:19.505  INFO 28511 --- [           main] MyApplication                            : Starting MyApplication using Java 1.8.0_301 on ideapad-15ISK with PID 28511 (/home/agou-ops/GitHub_workspace/springboot-sample/target/myproject-0.0.1-SNAPSHOT.jar started by agou-ops in /home/agou-ops/GitHub_workspace/springboot-sample)
2021-10-26 09:45:19.512  INFO 28511 --- [           main] MyApplication                            : No active profile set, falling back to default profiles: default
2021-10-26 09:45:20.730  INFO 28511 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2021-10-26 09:45:20.751  INFO 28511 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2021-10-26 09:45:20.751  INFO 28511 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.54]
2021-10-26 09:45:20.867  INFO 28511 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2021-10-26 09:45:20.867  INFO 28511 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1223 ms
2021-10-26 09:45:21.383  INFO 28511 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2021-10-26 09:45:21.406  INFO 28511 --- [           main] MyApplication                            : Started MyApplication in 2.481 seconds (JVM running for 2.93)
2021-10-26 09:45:34.339  INFO 28511 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2021-10-26 09:45:34.339  INFO 28511 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2021-10-26 09:45:34.341  INFO 28511 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms
```

打包示例并运行：

```bash
$ mvn package			# 完成该命令之后，会在当前目录下生成一个`target`的文件夹，该文件夹内有一个jar包，这个包就是我们所需的了.
$ jar tvf target/myproject-0.0.1-SNAPSHOT.jar			# 查看jar包里面的内容
$ jar -jar target/myproject-0.0.1-SNAPSHOT.jar			# 运行jar包，和上面使用mvn spring-boot:run命令运行结果一致
```

:smile:Done. 

## 参考链接

- springboot getting started: https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html