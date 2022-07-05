# tcpdump & wireshark

## Tcpdump 常用示例及相关参数

```bash
# 抓取指定协议和网络接口的数据包，
# -nn表示不解析主机名称，
# -c表示抓取的数据包个数
# -w表示将内容持久化到文件当中去，一般以`.pcap`后缀结尾
tcpdump -i eth0 -c 5 icmp and host 192.168.1.1 -nn

# 简单tcp数据包，保存的文件可以使用wireshark工具进行分析处理
tcpdump -i any tcp and host 192.168.2.100 and port 80 -w http.pcap
```

![tcpdump 常用过滤表达式类](https://agou-images.oss-cn-qingdao.aliyuncs.com/others/8.jpg)





## Wireshark 过滤器

### 过滤符号及组合

![](https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/wireshark-01.png)

![](https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/wireshark-02.png)

## 示例

- `ip`相关

    ```bash
    ip.addr != 192.168.43.37		# 过滤非 192.168.43.37 主机的数据包, 官方不推荐使用该格式, 可能会出现漏包的现象.
    !(ip,addr == 192.168.43.37)
    # 或者使用
    not ip.addr == 192.168.43.37

    (ip.addr == 172.16.7.42 and dns) or (172.16.7.7 and icmp) 
    ```

-  针对协议的过滤

  - 获某种协议的数据包，表达式很简单仅仅需要把协议的名字输入即可

  ```bash
  http
  ```

  注意：是否区分大小写？答：区分，`只能为小写`

  - 捕获多种协议的数据包

  ```bash
  http or telnet
  ```

  - 排除某种协议的数据包

  ```bash
  not arp   或者   !tcp
  ```

-  针对端口的过滤（视传输协议而定）

   - 捕获某一端口的数据包（以tcp协议为例）

   ```bash
   tcp.port == 80
   ```

   - 捕获多端口的数据包，可以使用and来连接，下面是捕获高于某端口的表达式（以udp协议为例）

   ```bash
   udp.port >= 2048
   ```

-  针对长度和内容的过滤

   - 针对长度的过虑（这里的长度指定的是数据段的长度）

   ```bash
   udp.length < 20   
   http.content_length <=30
   ```

   - 针对uri 内容的过滤

   ```bash
   http.request.uri matches "user" (请求的uri中包含“user”关键字的)
   ```

   注意：`matches` 后的关键字是`不区分大小写`的！

   ```bash
   http.request.uri contains "User" (请求的uri中包含“user”关键字的)
   ```

   注意：`contains` 后的关键字是`区分大小写`的！

-  针对http请求的一些过滤实例。

   - 过滤出请求地址中包含“user”的请求，不包括域名；

   ```bash
   http.request.uri contains "User"
   ```

   - 精确过滤域名

   ```bash
   http.host==baidu.com
   ```

   - 模糊过滤域名

   ```bash
   http.host contains "baidu"
   ```

   - 过滤请求的content_type类型

   ```bash
   http.content_type =="text/html"
   ```

   - 过滤http请求方法

   ```bash
   http.request.method=="POST"
   ```

   - 过滤tcp端口

   ```bash
   tcp.port==80
   http && tcp.port==80 or tcp.port==5566
   ```

   - 过滤http响应状态码

   ```bash
   http.response.code==302
   ```

   - 过滤含有指定cookie的http数据包

   ```bash
   http.cookie contains "userid"
   ```

## 参考链接

- Wireshark过滤器写法总结:  https://www.cnblogs.com/willingtolove/p/12519490.html
- tcpdump 详解：https://xiaolincoding.com/network/3_tcp/tcp_tcpdump.html

