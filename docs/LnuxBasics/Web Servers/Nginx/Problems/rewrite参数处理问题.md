> 来源于网络。

今天在给某网站写rewrite重定向规则时，碰到了这个关于重定向的参数处理问题。默认的情况下，Nginx在进行rewrite后都会自动添加上旧地址中的参数部分，而这对于重定向到的新地址来说可能是多余。虽然这也不会对重定向的结果造成多少影响，但当你注意到新地址中包含有多余的“?xxx=xxx”时，心里总还是会觉得不爽。那么该如何来处理这部分的内容呢？看了下面两个简单的例子你就会明白了。

例如：
把http://example.com/test.php?para=xxx 重定向到 http://example.com/new
若按照默认的写法：`rewrite ^/test.php(.*) /new permanent;`
重定向后的结果是：http://example.com/new?para=xxx
如果改写成：`rewrite ^/test.php(.*) /new? permanent;`
那结果就是：http://example.com/new

所以，关键点就在于“？”这个尾缀。假如又想保留某个特定的参数，那又该如何呢？可以利用Nginx本身就带有的`$arg_PARAMETER`参数来实现。
例如：
把http://example.com/test.php?para=xxx&p=xx 重写向到 http://example.com/new?p=xx
可以写成：`rewrite ^/test.php /new?p=$arg_p? permanent;`
只求结果的朋友可以直接忽略前面的内容，看这里：

- `rewrite ^/test.php /new permanent;` //重写向带参数的地址  last不跳转地址
- `rewrite ^/test.php /new? permanent;` //重定向后不带参数
- `rewrite ^/test.php /new?id=$arg_id? permanent;` //重定向后带指定的参数