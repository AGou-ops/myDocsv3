# Logstash 日志分流

```yaml
1.配置logstash
[root@elkstack-1 ~]\# vim /data/elk/logstash/conf.d/nginx_tomcat.conf 
input {
	file {
		path => "/var/log/test/nginx.log"
		add_field => {
			"app" => "nginx"				#搜集nginx的日志，在日志中增加一个app=nginx的字段
		}
	}
	file {
		path => "/var/log/test/tomcat.log"
		add_field => {
			"app" => "tomcat"
		}
	}
}

filter {
	if [app] in ["nginx","tengine"] {			#判断app的字段值为nginx或者tengine
		mutate {						#定义mutate
			add_field => {					#增加一个字段
				"[@metadata][target_index]" => "nginx-app-%{+YYYY.MM.dd}"		#声明字段是元数据，字段名为target_index，值为nginx日志存储的索引库名称
			}
		}
	}
	else if [app] == "tomcat" {					#判断app的字段值为tomcat
		mutate {						#定义mutate
			add_field => {					#增加一个字段
				"[@metadata][target_index]" => "tomcat-app-%{+YYYY.MM.dd}"		#声明字段是元数据，字段名为target_index，值为tomcat日志存储的索引库名称
			}
		}
	}	
	else {						#如果所有条件都不满足，那么就存储到下面的这个索引库
		mutate {
            add_field => {
                "[@metadata][target_index]" => "unknown-app-%{+YYYY.MM.dd}"			#值为unknown
            }
        }
	}
}

output {
	elasticsearch {
		hosts => ["192.168.20.11:9200","192.168.20.12:9200","192.168.20.13:9200"]
		index =>  "%{[@metadata][target_index]}"		#引用元数据target_index，将对应的日志存储到对应的索引库中
	}
}

2.重启logstash
[root@elkstack-1 conf.d]\# systemctl restart logstash
```

