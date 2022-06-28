# pipeline - Jenkinsfile

从一个简单的示例开始:

```bash
pipeline {
    agent any
    stages {
        stage('Example') {
            steps { 
                echo 'Hello World'
            }
        }
    }
}
```

## 常用选项说明

```bash
pipeline {
    agent any
    environment { 		// 全局变量
        CC = 'clang'
    }
    stages {
        stage('Example') {
            environment { 
                AN_ACCESS_KEY = credentials('my-prefined-secret-text') 		// 局部变量
            }
            steps {
                sh 'printenv'
            }
        }
    }
}
```

## 参考链接

- groovy documentation: http://groovy-lang.org/semantics.html
- pipeline syntax: https://www.jenkins.io/zh/doc/book/pipeline/syntax/

