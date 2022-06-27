# Golang 指针

## 基础使用

```go
package main

import "fmt"

func ptr() {
    var ptr1 *int				// 定义空指针，其值为nil
	i := 42

	p := &i                                                      // 声明并赋值指针
    // %p用于打印变量指针地址，或者使用&ptr
	fmt.Printf("type: %T, value: %v, ptr addr: %p\n", p, *p, p) // 获取指针类型以及指针指向的值
	*p = 21                                                      // 通过指针修改i的值
	fmt.Println(i)
	y := new(string) // 使用new(type)函数来创建指针
	*y = "ptr string create from new()"
	fmt.Printf("type: %T, value: \"%v\", ptr addr: %p\n", y, *y, &y)
}
// output
type: *int, value: 42, ptr addr: 0xc0000b6018    
21
type: *string, value: "ptr string create from new()", ptr addr: 0xc0000b6028
```

`&p`取指针，`*p`取对应值。

:warning:指针声明而没有赋值，默认为`nil`，即该指针没有任何指向。当指针没有指向的时候，不能对(*point)进行操作包括读取，否则会报空指针异常。

## 命令行工具中使用

```go
// 定义命令行参数，参数一是选项名称，参数二是默认值，参数三是使用--help时出现的帮助内容
var mode = flag.String("mode", "", "process mode")
func getCmd(mode *string) {
	// 解析命令行参数
	flag.Parse()
	// 输出命令行参数
	fmt.Printf("type: %T,Arg is: %v", mode, *mode)
}
// 运行
go run . --mode=hah
// output
type: *string,Arg is: hah
```

## 获取用户交互输入

```go
package main

import "fmt"

func scan() {
	var name string
	var age int
	fmt.Print("input your name: ")
	fmt.Scan(&name)
	fmt.Print("input your age: ")
	fmt.Scan(&age)
	fmt.Printf("name: %v, age: %v", name, age)
}
```



## 参考链接

- go 语言101指针：https://gfw.go101.org/article/pointer.html
- 关于golang指针的理解与使用：https://studygolang.com/articles/29273
- Go语言指针详解：http://c.biancheng.net/view/21.html
- 