## 常用变量

```nginx
$args, 请求中的参数;
$content_type, 请求信息里的"Content-Type";
$document_root, 针对当前请求的根路径设置值;
$document_uri, 与$uri相同;
$host, 请求信息中的"Host"，如果请求中没有Host行，则等于设置的服务器名;
$limit_rate, 对连接速率的限制;
$request_method, 请求的方法，比如"GET"、"POST"等;
$remote_addr, 客户端地址;
$remote_port, 客户端端口号;
$remote_user, 客户端用户名，认证用;
$request_filename, 当前请求的文件路径名
$request_body_file, ??
$request_uri, 请求的URI，带参数;
$query_string, 与$args相同;
$scheme, 所用的协议，比如http或者是https，比如rewrite  ^(.+)$  $scheme://example.com$1  redirect;
$server_protocol, 请求的协议版本，"HTTP/1.0"或"HTTP/1.1";
$server_addr, 服务器地址，如果没有用listen指明服务器地址，使用这个变量将发起一次系统调用以取得地址(造成资源浪费);
$server_name, 请求到达的服务器名;
$server_port, 请求到达的服务器端口号;
$uri, 请求的URI，可能和最初的值有不同，比如经过重定向之类的。
```

## 几乎所有变量

|                         变量                          |                             描述                             |
| :---------------------------------------------------: | :----------------------------------------------------------: |
|                   $ancient_browser                    | 如果浏览器被识别为古老的, 则此变量用于等于由Ancient_browser_value指令设置的值。 |
|                       $arg_name                       |                     请求行中参数的名称。                     |
|                         $args                         |                     请求行上的参数列表。                     |
|      $binary_remote_addr (ngx_http_core_module)       | 客户地址采用二进制形式。对于IP4地址, 值的长度始终为4个字节, 对于IPv6地址, 值的长度始终为16个字节。 |
|     $ binary_remote_addr(ngx_stream_core_module)      | 客户地址采用二进制形式。对于IP4地址, 值的长度始终为4个字节, 对于IPv6地址, 值的长度始终为16个字节。 |
|                   $body_bytes_sent                    |             发送给客户端的字节数, 不计入响应头。             |
|                    $bytes_received                    |                    从客户端收到的字节数。                    |
|          $bytes_sent (ngx_http_core_module)           |                    发送给客户端的字节数。                    |
|           $bytes_sent (ngx_http_log_module)           |                    发送给客户端的字节数。                    |
|         $ bytes_sent(ngx_stream_core_module)          |                    发送给客户端的字节数。                    |
|          $connection (ngx_http_core_module)           |                          连接序列号                          |
|           $ connection(ngx_http_log_module)           |                          连接序列号                          |
|          $connection(ngx_stream_core_module)          |                          连接序列号                          |
|      $ connection_requests(ngx_http_core_module)      |                  通过连接发出的当前请求数。                  |
|      $connection_requests (ngx_http_log_module)       |                  通过连接发出的当前请求数。                  |
|                  $connections_active                  |                       与活动连接值相同                       |
|                 $connections_reading                  |                         与读取值相同                         |
|                 $connections_waiting                  |                         与等待值相同                         |
|                 $connections_writing                  |                       与写作价值相同。                       |
|                    $content_length                    |                   “内容长度”请求标头字段。                   |
|                     $content_type                     |                    “内容类型”请求标头字段                    |
|                     $cookie_name                      |                         Cookie的名称                         |
|                       $date_gmt                       | 当前时间(格林威治标准时间)。要设置格式, 请使用带timefmt参数的config命令。 |
|                      $date_local                      | 本地时区的当前时间。要设置格式, 请使用带timefmt参数的config命令。 |
|                    $document_root                     |                 当前请求的根或别名指令的值。                 |
|                     $document_uri                     |                       它与$ uri相同。                        |
|                  $fastcgi_path_info                   | 使用fastcgi_split_path_info指令时, $ fastcgi_script_name变量等于该指令设置的第一个捕获值。以及第二次捕获的值由fastcgi_split_path_info指令设置。此变量用于设置PATH_INFO参数。 |
|                 $fastcgi_script_name                  | 请求URI(统一资源标识符), 或者, 如果URI以斜杠结尾, 则请求URI, 并为其附加由fastcgi_index指令配置的索引文件名。 |
|       $geoip_area_code (ngx_http_geoip_module)        | 电话区号(仅限美国)。由于不建议使用相应的数据库字段, 因此该变量可能包含一些过时的信息。 |
|      $ geoip_area_code(ngx_stream_geoip_module)       | 电话区号(仅限美国)。由于不赞成使用相应的数据库字段, 因此该变量可能包含过时的信息。 |
|          $ geoip_city(ngx_http_geoip_module)          |              城市名称, 例如”华盛顿”, “莫斯科”。              |
|         $ geoip_city(ngx_stream_geoip_module)         |              城市名称, 例如”华盛顿”, “莫斯科”。              |
|  $geoip_city_continent_code (ngx_http_geoip_module)   |        大陆代码, 用两个字母表示。例如, ” NA”, ” EU”。        |
| $ geoip_city_continent_code(ngx_stream_geoip_module)  |        大陆代码, 用两个字母表示。例如, ” NA”, ” EU”。        |
|   $ geoip_city_country_code(ngx_http_geoip_module)    |        大陆代码, 用两个字母表示。例如, ” NA”, ” EU”。        |
|   $geoip_city_country_code (ngx_http_geoip_module)    |         国家代码用两个字母表示。例如, ” RU”, ” US”。         |
|  $geoip_city_country_code (ngx_stream_geoip_module)   |         国家代码用两个字母表示。例如, ” RU”, ” US”。         |
|   $ geoip_city_country_code3(ngx_http_geoip_module)   |      国家/地区代码中的三个字母。例如, ” RUS”, ” USA”。       |
|  $ geoip_city_country_code3(ngx_stream_geoip_module)  |      国家/地区代码中的三个字母。例如, ” RUS”, ” USA”。       |
|   $geoip_city_country_name (ngx_http_geoip_module)    |               国家名称。例如, “印度”, “美国”。               |
|  $ geoip_city_country_name(ngx_stream_geoip_module)   |               国家名称。例如, “印度”, “美国”。               |
|      $geoip_country_code (ngx_http_geoip_module)      |         国家代码用两个字母表示。例如, ” RU”, ” US”。         |
|     $geoip_country_code (ngx_stream_geoip_module)     |         国家代码用两个字母表示。例如, ” RU”, ” US”。         |
|     $geoip_country_code3 (ngx_http_geoip_module)      |      国家/地区代码中的三个字母。例如, ” RUS”, ” USA”。       |
|    $ geoip_country_code3(ngx_stream_geoip_module)     |      国家/地区代码中的三个字母。例如, ” RUS”, ” USA”。       |
|      $geoip_country_name (ngx_http_geoip_module)      |               国家名称。例如, “印度”, “美国”。               |
|     $geoip_country_name (ngx_stream_geoip_module)     |               国家名称。例如, “印度”, “美国”。               |
|        $ geoip_dma_code(ngx_http_geoip_module)        | 根据Google AdWords API中的地理位置定位, 它是美国的DMA(指定市场区域)代码或都会区代码。 |
|       $ geoip_dma_code(ngx_stream_geoip_module)       | 根据Google AdWords API中的地理位置定位, 它是美国的DMA(指定市场区域)代码或都会区代码。 |
|        $ geoip_latitude(ngx_http_geoip_module)        |                          Latitude.                           |
|       $geoip_latitude (ngx_stream_geoip_module)       |                          Latitude.                           |
|       $ geoip_longitude(ngx_http_geoip_module)        |                          Longitude                           |
|      $ geoip_longitude(ngx_stream_geoip_module)       |                          Longitude                           |
|          $geoip_org (ngx_http_geoip_module)           |               组织名称。例如”加利福尼亚大学”。               |
|         $ geoip_org(ngx_stream_geoip_module)          |               组织名称。例如”加利福尼亚大学”。               |
|      $geoip_postal_code (ngx_http_geoip_module)       |                         Postal code.                         |
|     $ geoip_postal_code(ngx_stream_geoip_module)      |                         Postal code.                         |
|         $ geoip_region(ngx_http_geoip_module)         | 区域名称(例如省, 地区, 州, 联邦土地, 地区), 例如, 莫斯科市。 |
|        $geoip_region (ngx_stream_geoip_module)        | 区域名称(例如省, 地区, 州, 联邦土地, 地区), 例如, 莫斯科市。 |
|      $ geoip_region_name(ngx_http_geoip_module)       | 国家地区名称((省, 地区, 州, 联邦土地, 领土), 例如”莫斯科市”, “哥伦比亚特区”。 |
|     $ geoip_region_name(ngx_stream_geoip_module)      | 国家地区名称((省, 地区, 州, 联邦土地, 领土), 例如”莫斯科市”, “哥伦比亚特区”。 |
|                      $gzip_ratio                      | 它是达到的压缩率, 计算为原始响应大小与压缩响应大小之间的比率。 |
|                         $host                         | 请求行中的主机名, 来自主机请求标头字段的主机名或与请求匹配的服务器名。 |
|             $主机名(ngx_http_core_module)             |                          Host name.                          |
|          $hostname (ngx_stream_core_module)           |                           主机名。                           |
|                        $http2                         | 协商的协议标识符：h2, 用于TLS上的HTTP / 2, h2c, 用于纯文本TCP上的HTTP / 2, 否则为空字符串。 |
|                      $http_name                       | 它是任意的请求标头字段：变量名的最后一部分是字段名, 该字段名转换为小写字母, 并用下划线代替了下划线。 |
|                        $https                         |   如果连接以SSL模式运行, 则该连接为” on”, 否则为空字符串。   |
|                   $invalid_referer                    | 如果” Referer”请求标头字段值被视为有效, 则该字符串为空, 否则为1。 |
|                       $is_args                        |           “？”如果请求行包含参数, 否则为空字符串。           |
|                    $jwt_claim_name                    |           它返回指定的JWT(JSON Web令牌)声明的值。            |
|                   $jwt_header_name                    |      返回指定的JOSE(JavaScript对象签名和加密)标头的值。      |
|                      $limit_rate                      |                设置此变量将启用响应速率限制。                |
|                    $memcached_key                     |           定义用于从内存缓存服务器获取响应的密钥。           |
|                    $modern_browser                    | 如果浏览器被标识为现代, 则等于由modern_browser_value指令设置的值。 |
|             $ msec(ngx_http_core_module)              |          以毫秒(毫秒)为单位的当前时间(以秒为单位)。          |
|              $msec (ngx_http_log_module)              |         日志写入时以毫秒为单位的时间(以毫秒为单位)。         |
|            $msec (ngx_stream_core_module)             |          以毫秒(毫秒)为单位的当前时间(以秒为单位)。          |
|                         $msie                         | 如果浏览器被标识为任何版本的MSIE(Microsoft Internet Explorer), 则等于1。 |
|         $ nginx_version(ngx_http_core_module)         |                        显示Nginx版本                         |
|        $ nginx_version(ngx_stream_core_module)        |                         Nginx版本。                          |
|              $ pid(ngx_http_core_module)              |                   工作进程的PID(进程ID)。                    |
|             $pid (ngx_stream_core_module)             |                   工作进程的PID(进程ID)。                    |
|              $管道(ngx_http_core_module)              |         如果请求已通过管道传递, 则为” p”。除此以外。         |
|              $pipe (ngx_http_log_module)              |         如果请求已通过管道传递, 则为” p”。除此以外。         |
|                       $protocol                       |                与客户端通信的协议：UDP或TCP。                |
|              $proxy_add_x_forwarded_for               | 附加了$ remote_addr变量的” X-Forwarded-For”客户端请求标头字段, 以逗号分隔。如果客户端请求标头中不存在” X-Forwarded-For”字段, 则$ proxy_add_x_forwarded_for变量等于$ remote_addr变量。 |
|                      $proxy_host                      |        proxy_pass指令中指定的代理服务器的名称和端口。        |
|                      $proxy_port                      |  proxy_pass指令中指定的代理服务器的端口, 或协议的默认端口。  |
|      $ proxy_protocol_addr(ngx_http_core_module)      | 来自PROXY协议标头的客户端地址, 否则为空字符串。必须先启用PROXY协议。这可以通过在listen指令中设置代理协议参数来完成。 |
|     $proxy_protocol_addr (ngx_stream_core_module)     | 来自PROXY协议标头的客户端地址, 否则为空字符串。必须先启用PROXY协议。这可以通过在listen指令中设置代理协议参数来完成。 |
|      $proxy_protocol_port (ngx_http_core_module)      | 来自PROXY协议标头的客户端地址, 否则为空字符串。必须先启用PROXY协议。这可以通过在listen指令中设置代理协议参数来完成。 |
|     $ proxy_protocol_port(ngx_stream_core_module)     | 来自PROXY协议标头的客户端地址, 否则为空字符串。必须先启用PROXY协议。这可以通过在listen指令中设置代理协议参数来完成。 |
|                     $query_string                     |                         与$ args相同                         |
|     $realip_remote_addr (ngx_http_realip_module)      |                   它用于保留原始客户地址。                   |
|    $realip_remote_addr (ngx_stream_realip_module)     |                   它用于保留原始客户地址。                   |
|     $realip_remote_port (ngx_http_realip_module)      |                   它用于保留原始客户地址。                   |
|    $realip_remote_port (ngx_stream_realip_module)     |                   它用于保留原始客户地址。                   |
|                    $realpath_root                     | 绝对路径名, 与当前请求的别名或root指令的值相对应, 所有符号链接都解析为真实路径。 |
|          $remote_addr (ngx_http_core_module)          |                           客户地址                           |
|         $ remote_addr(ngx_stream_core_module)         |                        Client Address                        |
|          $ remote_port(ngx_http_core_module)          |                         Client Port                          |
|         $ remote_port(ngx_stream_core_module)         |                           客户口岸                           |
|                     $remote_user                      |                  基本身份验证随附的用户名。                  |
|                       $request                        |                      完整的原始请求行。                      |
|                     $request_body                     | 当将请求主体读取到memory_buffer时, 该变量的值可在proxy_pass和scgi_pass指令处理的位置使用。 |
|                  $request_body_file                   |                带有请求正文的临时文件的名称。                |
|                  $request_completion                  |        如果请求已完成, 则值为” OK”, 否则为空字符串。         |
|                   $request_filename                   |      基于根或别名指令以及请求URI的当前请求的文件路径。       |
|                      $request_id                      |     从16个随机字节生成的唯一请求标识符, 以十六进制表示。     |
|        $ request_length(ngx_http_core_module)         |              请求长度(请求行, 请求正文和标头)。              |
|         $request_length (ngx_http_log_module)         |              请求长度(请求行, 请求正文和标头)。              |
|                    $request_method                    |              请求方法。通常是” GET”或” POST”。               |
|         $request_time (ngx_http_core_module)          | 以毫秒为单位, 以秒为单位请求处理时间；从客户端读取第一个字节起经过的时间。 |
|          $ request_time(ngx_http_log_module)          | 以毫秒为单位, 以秒为单位请求处理时间；从客户端读取第一个字节到将最后一个字节发送到客户端之后的日志写入之间经过的时间。 |
|                     $request_uri                      |         带有参数的完整原始请求URI(统一资源标识符)。          |
|                        $scheme                        |                  请求方案可以是http或https                   |
|                     $secure_link                      |        向状态显示链接检查, 其值取决于所选的操作模式。        |
|                 $secure_link_expires                  |                  请求中传递的链接的生存期；                  |
|                    $sent_http_name                    | 它是任意响应头字段；变量名称的最后一部分是转换为小写的字段名称, 用短划线代替下划线。 |
|                  $sent_trailer_name                   | 响应末尾发送任意字段；变量名称的最后一部分是转换为小写的字段名称, 用短划线代替下划线。 |
|          $ server_addr(ngx_http_core_module)          |    接受请求的服务器地址。要计算此变量的值, 需要系统调用。    |
|         $server_addr (ngx_stream_core_module)         |    接受请求的服务器地址。要计算此变量的值, 需要系统调用。    |
|                     $server_name                      |                    接受请求的服务器名称。                    |
|          $ server_port(ngx_http_core_module)          |                    接受请求的服务器端口。                    |
|         $ server_port(ngx_stream_core_module)         |                    接受连接的服务器端口。                    |
|                   $server_protocol                    | 它是一个请求协议, 通常为HTTP / 1.0, HTTP / 1.1或HTTP / 2.0。 |
|                $session_log_binary_id                 |                 当前会话ID, 采用二进制形式。                 |
|                    $session_log_id                    |                         当前会话ID。                         |
|                     $session_time                     |          会话持续时间(以毫秒为单位), 以毫秒为单位。          |
|                     $slice_range                      |    HTTP字节范围格式的当前切片范围。例如。字节= 0-1048575     |
|                         $spdy                         |   用于SPDY(发音为快速)连接的SPDY协议版本, 否则为空字符串。   |
|                $spdy_request_priority                 |      请求SPDY(发音为快速)连接的优先级, 否则为空字符串。      |
|           $ ssl_cipher(ngx_http_ssl_module)           |     返回用于已建立的SSL(安全套接字层)连接的密码字符串。      |
|          $ ssl_cipher(ngx_stream_ssl_module)          |     返回用于已建立的SSL(安全套接字层)连接的密码字符串。      |
|          $ssl_ciphers (ngx_http_ssl_module)           | 它将返回客户端支持的密码列表。在这里, 已知密码按名称列出, 未知密码以十六进制显示, 例如AES128-SHA：AES256-SHA：0x00ff |
|         $ ssl_ciphers(ngx_stream_ssl_module)          | 它将返回客户端支持的密码列表。在这里, 已知密码按名称列出, 未知密码以十六进制显示, 例如AES128-SHA：AES256-SHA：0x00ff |
|        $ ssl_client_cert(ngx_http_ssl_module)         | 它将在PEM(隐私增强邮件)中为已建立的SSL连接返回客户端证书, 除第一行外, 每行均以制表符开头。 |
|       $ssl_client_cert (ngx_stream_ssl_module)        | 它将在PEM(隐私增强邮件)中为已建立的SSL连接返回客户端证书, 除第一行外, 每行均以制表符开头。 |
|               $ssl_client_escaped_cert                | 对于已建立的SSL连接, 它将在PEM(隐私增强邮件)中返回客户端证书 |
|     $ssl_client_fingerprint (ngx_http_ssl_module)     | 对于已建立的SSL连接, 它将返回客户端证书的SHA1(安全哈希算法)指纹。 |
|    $ ssl_client_fingerprint(ngx_stream_ssl_module)    | 对于已建立的SSL连接, 它将返回客户端证书的SHA1(安全哈希算法)指纹。 |
|        $ ssl_client_i_dn(ngx_http_ssl_module)         | 返回根据RFC 2253建立的SSL连接的客户端证书的”发行人DN”(其中DN是专有名称)字符串。 |
|       $ssl_client_i_dn (ngx_stream_ssl_module)        | 返回根据RFC 2253建立的SSL连接的客户端证书的”发行人DN”(其中DN是专有名称)字符串。 |
|                $ssl_client_i_dn_legacy                | 返回已建立的SSL连接的客户端证书的”发行人DN”(其中DN是专有名称)字符串。 |
|      $ssl_client_raw_cert (ngx_http_ssl_module)       | 对于已建立的SSL连接, 它将以PEM(隐私增强邮件)格式返回客户端证书。 |
|     $ssl_client_raw_cert (ngx_stream_ssl_module)      | 对于已建立的SSL连接, 它将以PEM(隐私增强邮件)格式返回客户端证书。 |
|        $ssl_client_s_dn (ngx_http_ssl_module)         | 返回根据RFC2253建立的SSL连接的客户端证书的”主题DN”(其中DN是专有名称)字符串。 |
|       $ ssl_client_s_dn(ngx_stream_ssl_module)        | 返回根据RFC2253建立的SSL连接的客户端证书的”主题DN”(其中DN是专有名称)字符串。 |
|                $ssl_client_s_dn_legacy                | 返回已建立的SSL连接的客户端证书的”主题DN”(其中DN是专有名称)字符串。 |
|       $ ssl_client_serial(ngx_http_ssl_module)        |      对于已建立的SSL连接, 它将返回客户端证书的序列号。       |
|      $ssl_client_serial (ngx_stream_ssl_module)       |      对于已建立的SSL连接, 它将返回客户端证书的序列号。       |
|        $ssl_client_v_end (ngx_http_ssl_module)        |                它将返回客户端证书的结束日期。                |
|       $ssl_client_v_end (ngx_stream_ssl_module)       |                它将返回客户端证书的结束日期。                |
|      $ ssl_client_v_remain(ngx_http_ssl_module)       |              它将返回直到客户端证书过期的天数。              |
|     $ssl_client_v_remain (ngx_stream_ssl_module)      |              它将返回直到客户端证书过期的天数。              |
|       $ssl_client_v_start (ngx_http_ssl_module)       |                它将返回客户端证书的开始日期。                |
|      $ ssl_client_v_start(ngx_stream_ssl_module)      |                它将返回客户端证书的开始日期。                |
|       $ssl_client_verify (ngx_http_ssl_module)        | 如果不存在证书, 它将返回客户端证书验证的结果：” SUCCESS”, ” FAILD：reason”和” NONE”。 |
|      $ ssl_client_verify(ngx_stream_ssl_module)       | 如果不存在证书, 它将返回客户端证书验证的结果：” SUCCESS”, ” FAILD：reason”和” NONE”。 |
|           $ssl_curves (ngx_http_ssl_module)           | 返回客户端支持的曲线列表。所有已知曲线均按名称列出, 未知曲线以十六进制显示, 例如：0x001d：prime256v1：secp521r1：secp384r1 |
|          $ssl_curves (ngx_stream_ssl_module)          | 返回客户端支持的曲线列表。所有已知曲线均按名称列出, 未知曲线以十六进制显示, 例如：0x001d：prime256v1：secp521r1：secp384r1 |
|                    $ssl_early_data                    |       如果使用TLS 1.3早期数据并且握手未完成, 则返回1。       |
|              $ssl_preread_alpn_protocols              |     它返回客户端通过ALPN通告的协议列表, 其值用逗号分隔。     |
|                 $ssl_preread_protocol                 |         客户端支持的最高SSL(安全套接字层)协议版本。          |
|               $ssl_preread_server_name                |       返回通过SNI(服务器名称指示)请求的服务器的名称。        |
|          $ssl_protocol (ngx_http_ssl_module)          |               它将返回已建立的SSL连接的协议。                |
|         $ ssl_protocol(ngx_stream_ssl_module)         |               它将返回已建立的SSL连接的协议。                |
|        $ ssl_server_name(ngx_http_ssl_module)         |       返回通过SNI(服务器名称指示)请求的服务器的名称。        |
|       $ssl_server_name (ngx_stream_ssl_module)        |       返回通过SNI(服务器名称指示)请求的服务器的名称。        |
|         $ ssl_session_id(ngx_http_ssl_module)         |            它将返回已建立的SSL连接的会话标识符。             |
|        $ssl_session_id (ngx_stream_ssl_module)        |            它将返回已建立的SSL连接的会话标识符。             |
|       $ssl_session_reused (ngx_http_ssl_module)       |   如果重新使用SSL会话, 则返回” r”, 否则返回”。”除此以外。    |
|      $ ssl_session_reused(ngx_stream_ssl_module)      |   如果重新使用SSL会话, 则返回” r”, 否则返回”。”除此以外。    |
|            $ status(ngx_http_core_module)             |                          响应状态。                          |
|             $ status(ngx_http_log_module)             |                          响应状态。                          |
|             $状态(ngx_stream_core_module)             | 会话状态, 可以是下列状态之一：200：会话成功完成。 400：无法解析客户端数据403：禁止访问。 500内部服务器错误。 502错误的网关。 503服务不可用。 |
|                     $tcpinfo_rtt                      | 显示有关客户端TCP连接的信息, 该信息在支持TCP_INFO套接字选项的系统上可用。 |
|                    $tcpinfo_rttvar                    | 显示有关客户端TCP连接的信息, 该信息在支持TCP_INFO套接字选项的系统上可用。 |
|                   $tcpinfo_snd_cwnd                   | 显示有关客户端TCP连接的信息, 该信息在支持TCP_INFO套接字选项的系统上可用。 |
|                  $tcpinfo_rcv_space                   | 显示有关客户端TCP连接的信息, 该信息在支持TCP_INFO套接字选项的系统上可用。 |
|         $time_iso8601 (ngx_http_core_module)          |              以ISO 8601的标准格式显示本地时间。              |
|          $time_iso8601 (ngx_http_log_module)          |              以ISO 8601的标准格式显示本地时间。              |
|        $ time_iso8601(ngx_stream_core_module)         |              以ISO 8601的标准格式显示本地时间。              |
|          $ time_local(ngx_http_core_module)           |                  以通用日志格式显示本地时间                  |
|           $ time_local(ngx_http_log_module)           |                 以公共日志格式显示本地时间。                 |
|         $ time_local(ngx_stream_core_module)          |                 以公共日志格式显示本地时间。                 |
|                       $uid_got                        |             Cookie的名称和接收到的客户端标识符。             |
|                      $uid_reset                       | 如果将变量设置为”非空”字符串, 则意味着不为” 0″, 那么将重置客户端标识符。特殊值日志还会导致将有关重置标识符的消息输出到error_log。 |
|                       $uid_set                        |             Cookie的名称, 并发送了客户端标识符。             |
|       $ upstream_addr(ngx_http_upstream_module)       | 它将保留IP地址和端口, 或到上游服务器的UNIX域套接字的路径。如果在请求处理期间联系了多个服务器, 则它们的地址用逗号分隔。 |
|      $ upstream_addr(ngx_stream_upstream_module)      | 它将保留IP地址和端口, 或到上游服务器的UNIX域套接字的路径。如果在请求处理期间联系了多个服务器, 则它们的地址用逗号分隔。 |
|  $upstream_bytes_received (ngx_http_upstream_module)  | 从上游流服务器接收的字节数。来自多个连接的值用逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
| $ upstream_bytes_received(ngx_stream_upstream_module) | 从上游流服务器接收的字节数。来自多个连接的值用逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
|    $ upstream_bytes_sent(ngx_http_upstream_module)    | 发送到上游流服务器的字节数。来自多个连接的值用逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
|   $ upstream_bytes_sent(ngx_stream_upstream_module)   | 发送到上游流服务器的字节数。来自多个连接的值由逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
|                $upstream_cache_status                 | 它将保持访问响应缓存的状态。状态可以是” BYPASS”, ” MISS”, ” EXPIRED”, ” STALE”, ” REVALIDATED”, ” UPDATING”或” HIT”。 |
|   $ upstream_connect_time(ngx_http_upstream_module)   | 它用于保留与上游服务器(1.9.1)建立连接所花费的时间；时间以毫秒为单位, 以秒为单位。如果使用SSL, 则会增加握手时间。多个连接的时间由逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
|  $upstream_connect_time (ngx_stream_upstream_module)  | 保留时间连接到上游服务器；时间以毫秒为单位, 以毫秒为单位。多个连接的时间用逗号(, )分隔, 例如$ upstream_addr变量中的地址。 |
|                 $upstream_cookie_name                 | 上游服务器在Set-Cookie响应标头字段中发送的具有定义名称的Cookie。仅保存来自最后一个服务器响应的cookie。 |
|               $upstream_first_byte_time               | 接收数据的第一个字节的时间。时间以毫秒为单位, 以秒为单位。多个连接的时间之间用逗号(, )分隔, 例如$ upstream_addr变量中的地址。 |
|                 $upstream_header_time                 | 它用于保留从上游服务器接收标头所花费的时间。多个连接的时间用逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
|                  $upstream_http_name                  |                    保留服务器响应头字段。                    |
|                 $upstream_queue_time                  | 它用于保持请求花费在上游队列中的时间。时间以毫秒为单位, 以毫秒为单位。多个连接的时间用逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
|               $upstream_response_length               | 它用于保持从上游服务器获得的响应的长度。长度以字节为单位。多个响应的长度由$ upstream_addr变量中的地址(如地址)和逗号(, )和冒号(:)分隔。 |
|                $upstream_response_time                | 它用于保留从上游服务器接收响应所花费的时间。时间以毫秒为单位, 以毫秒为单位。多个连接的时间由逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。 |
|                $upstream_session_time                 | 会话持续时间(以毫秒为单位), 以毫秒为单位。多个连接的时间用逗号(, )分隔, 例如$ upstream_addr变量中的地址。 |
|                   $upstream_status                    | 它用于保留从上游服务器获得的响应的状态码。几个响应的状态码由逗号(, )和冒号(:)分隔, 例如$ upstream_addr变量中的地址。如果无法选择服务器, 则该变量将保留502(错误网关)状态代码。 |
|                $upstream_trailer_name                 |        它用于保留从上游服务器获得的响应结尾处的字段。        |
|                         $uri                          | 请求中的当前URI, 已规范化。我们可以在请求处理期间更改$ uri的值, 例如在进行内部重定向或使用索引文件时。 |

------

## 参考链接

- nginx variables: http://nginx.org/en/docs/varindex.html
- NGINX内置变量：http://www.cnphp.info/nginx-embedded-variables-lasted-version.html