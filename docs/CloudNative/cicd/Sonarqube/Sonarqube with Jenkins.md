# Sonarqube + Jenkins

## Installation

1. [Install the SonarScanner for Jenkins via the Jenkins Update Center](https://plugins.jenkins.io/sonar).
2. Configure your SonarQube server(s):
   1. Log into Jenkins as an administrator and go to **Manage Jenkins > Configure System**.
   2. Scroll down to the SonarQube configuration section, click **Add SonarQube**, and add the values you're prompted for.
   3. The server authentication token should be created as a 'Secret Text' credential.

## 参考链接

- https://my.oschina.net/u/4222971/blog/3115616