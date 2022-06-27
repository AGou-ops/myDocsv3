# Lua Basic

```lua
-- Lua 是一种轻量小巧的脚本语言，用标准C语言编写并以源代码形式开放， 其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。

--[[			-- Lua 运用场景--
    游戏开发
    独立应用脚本
    Web 应用脚本
    扩展和数据库插件如：MySQL Proxy 和 MySQL WorkBench
    安全系统，如入侵检测系统
 --]]

---[[
print("HELLO ".."WORLD!")
--]]
```

## Lua 数据类型

| 数据类型 | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| nil      | 这个最简单，只有值nil属于该类，表示一个无效值（在条件表达式中相当于false）。 |
| boolean  | 包含两个值：false和true。                                    |
| number   | 表示双精度类型的实浮点数                                     |
| string   | 字符串由一对双引号或单引号来表示                             |
| function | 由 C 或 Lua 编写的函数                                       |
| userdata | 表示任意存储在变量中的C数据结构                              |
| thread   | 表示执行的独立线路，用于执行协同程序                         |
| table    | Lua 中的表（table）其实是一个"关联数组"（associative arrays），数组的索引可以是数字、字符串或表类型。在 Lua 里，table 的创建是通过"构造表达式"来完成，最简单构造表达式是{}，用来创建一个空表。 |

### string

```lua
-- 多行文本, 包含回车符等
string=[["
Hello World
From Lua.
"]]
```

- string的几种方法和用途参考: https://www.runoob.com/lua/lua-strings.html

- 官方文档: https://www.lua.org/manual/5.4/manual.html#6.4

### table

```lua
-- table_test.lua 脚本文件
a = {}
a["key"] = "value"
key = 10
a[key] = 22
a[key] = a[key] + 11
for k, v in pairs(a) do
    print(k .. " : " .. v)
end
```

对 table 的`索引`使用方括号 []。Lua 也提供了 . 操作。

```lua
t[i]
t.i                 -- 当索引为字符串类型时的一种简化写法
gettable_event(t,i) -- 采用索引访问本质上是一个类似这样的函数调用
```

### function

```lua
-- function_test.lua 脚本文件
function factorial1(n)
    if n == 0 then
        return 1
    else
        return n * factorial1(n - 1)
    end
end
print(factorial1(5))
factorial2 = factorial1
print(factorial2(5))

-- 可变参数
function average(...)
   result = 0
   local arg={...}    --> arg 为一个表，局部变量
   for i,v in ipairs(arg) do
      result = result + v
   end
   print("总共传入 " .. #arg .. " 个数")
   return result/#arg
   --    print("总共传入 " .. select("#",...) .. " 个数")
   --	 return result/select("#",...)

end

print("平均值为",average(10,5,3,4,5,6))

--
do  
    function foo(...)  
        for i = 1, select('#', ...) do  -->获取参数总数
            local arg = select(i, ...); -->读取参数
            print("arg", arg);  
        end  
    end  
 
    foo(1, 2, 3, 4);  
end
```

匿名函数：

```lua
-- function_test2.lua 脚本文件
function testFun(tab,fun)
        for k ,v in pairs(tab) do
                print(fun(k,v));
        end
end


tab={key1="val1",key2="val2"};
testFun(tab,
function(key,val)--匿名函数
        return key.."="..val;
end
);
```

## Lua 变量

> Lua 变量有三种类型：全局变量、局部变量、表中的域。
>
> Lua 中的变量全是全局变量，那怕是语句块或是函数里，除非用` local `显式声明为局部变量。
>
> 局部变量的作用域为从声明位置开始到所在语句块结束。
>
> 变量的默认值均为 nil。

遇到赋值语句Lua会先计算右边所有的值然后再执行赋值操作，所以我们可以这样进行交换变量的值：

```lua
x, y = y, x                     -- swap 'x' for 'y'
a[i], a[j] = a[j], a[i]         -- swap 'a[i]' for 'a[j]'
```

当变量个数和值的个数不一致时，Lua会一直以变量个数为基础采取以下策略：

```
a. 变量个数 > 值的个数             按变量个数补足nil
b. 变量个数 < 值的个数             多余的值会被忽略
```

Lua 对多个变量同时赋值，不会进行变量传递，仅做值传递：

```lua
a, b = 0, 1
a, b = a+1, a+1
print(a,b)               --> 1   1
a, b = 0, 1
a, b = b+1, b+1
print(a,b)               --> 2   2
```

## Lua 判断和循环

```lua
-- if
if(condition)
then
    print("")
elseif()
then
    print("elseif block")
else
    print("else block")
end

-- while
while(condition)
do
   statements
end

-- for 
-- var 从 exp1 变化到 exp2，每次变化以 exp3 为步长递增 var，并执行一次 "执行体"。exp3 是可选的，如果不指定，默认为1。
for var=exp1,exp2,exp3 do  
    <执行体>  
end  

-- repeat
repeat
   statements
until( condition )
```

`goto`语句：

```lua
i = 0
::s1:: do
  print(i)
  i = i+1
end
if i>3 then
  os.exit()   -- i 大于 3 时退出
end
goto s1
```

:information_source:Lua中无`continue`功能，需手动实现，实现的几种方法参考：[Lua Continue Ex](./Lua continue Ex.md)

## 三目运算符

`lua`中无原生的三目运算符，需要手动实现：

```lua
(condition and {result1} or {result2})[1]
```

## 迭代器

### 无状态迭代器

```lua
function square(iteratorMaxCount,currentNumber)
   if currentNumber<iteratorMaxCount
   then
      currentNumber = currentNumber+1
   return currentNumber, currentNumber*currentNumber
   end
end

for i,n in square,3,0
do
   print(i,n)
end
```

### 有状态迭代器

```lua
array = {"Google", "Runoob"}

function elementIterator (collection)
   local index = 0
   local count = #collection
   -- 闭包函数
   return function ()
      index = index + 1
      if index <= count
      then
         --  返回迭代器的当前元素
         return collection[index]
      end
   end
end

for element in elementIterator(array)
do
   print(element)
end
```

## 参考链接

- Lua 菜鸟教程：https://www.runoob.com/lua/index.html
- Lua5.3 中文手册：http://cloudwu.github.io/lua53doc/contents.html
- Lua5.4 Documentation: https://www.lua.org/manual/5.4/