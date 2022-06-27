# Golang 函数

- 传递可变变量

```go
func test(a,b int args ...int) int {
    return 0
}
a,b := 1,2
arg = []int{3,4,5}
test(1,2,arg...)
```

- 传递结构化数据到函数的两种写法

```go
package main

import "fmt"
 
func test() {
	person := Person{"TigerwolfC", 25}
	fmt.Printf("person<%s:%d>\n", person.name, person.age)
	// person.sayHi()
	person.ModifyAge(28)
	sayHi(person)

}

type Person struct {
	name string
	age  int
}

func sayHi(p Person) {
	fmt.Printf("SayHi -- This is %s, my age is %d\n", p.name, p.age)
}
func (p Person) ModifyAge(age int) {
	fmt.Printf("ModifyAge")
	p.age = age
}
```

- 传递函数到函数

```go
func test2(myFunc func(int) int) { // 传递函数到函数，该函数有一个int参数以及一个int类型返回值
	fmt.Println(myFunc(7))
}

func returnFunc(x string) func() {
    return func() { fmt.Println(x) }
}

func returnFunc2() func(a, b int) int {
	f := func(a, b int) int {
		return a + b
	}
	return f
}

func main() {
	x := func(y int) int {
		return y + 1
	}
	test2(x)
    returnFunc("AGou-ops")()
    fmt.Println(retrunFunc2()(33, 44))
}
```

- 函数复制

```go
fun main() {
	x := sayhello
	fmt.Println(x("AGou-ops"))
}

func sayhello(name string) string {
	return "hello " + name
}
```

- function in function

```go
// 函数内部不能嵌套命名函数，所以只能定义匿名函数
func main() {
	x := func(name string) string {
		return "hello " + name
	}("suofeiya")		// 在此处加上括号可以直接向函数传递参数
    
	fmt.Println(x)
}
// -- 2
func main() {
    func() {
        fmt.Print("func in func")
    }()			// 这个()不可或缺，表示调用该函数
}
```

- 函数回调

```go
package main

import "fmt"

func main() {
	// 自由变量x
	var x int
	// 闭包函数g
	g := func(i int) int {
		return x + i
	}
	x = 5
	// 调用闭包函数
	fmt.Println(g(5))
	x = 10
	// 调用闭包函数
	fmt.Println(g(3))
}
```

- 闭包函数

```go
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	result := adder()
	for i := 0; i < 10; i++ {
		fmt.Println(result(i))
	}
}
```

## 其他

- defer 函数

```go
// defer函数会在当前函数返回前执行传入的函数，它会经常被用于关闭文件描述符、关闭数据库连接以及解锁资源
func main() {
    defer func() {			// 匿名defer函数
        fmt.Println("exec defer()")
    }()
    // defer closeDB()				// 调用命名函数
    // defer fmt.Println("print from defer()")			// 调用语句
    fmt.Println("END main()")
}
// output
END main()
exec defer()
```

:warning: 如果一个函数中有多个`refer`函数，会倒序执行每一个`refer`函数.

- panic 函数

```go
// panic 强制抛出错误
func main() {
    panic("error here.")
    fmt.Println("main() function but not working.")			// unreachable code，无法执行的语句代码
}
// output 
panic: error here.

goroutine 1 [running]:
main.main()
        /home/agou-ops/GolandProjects/studyNote/src/code.personal.cc/main.go:42 +0x65
exit status 2
```

> - `panic` 能够改变程序的控制流，调用 `panic` 后会立刻停止执行当前函数的剩余代码，并在当前 Goroutine 中递归执行调用方的 `defer`；
> - `recover` 可以中止 `panic` 造成的程序崩溃。它是一个只能在 `defer` 中发挥作用的函数，在其他作用域中调用不会发挥作用；

- recover 函数

```go
func main() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}()
	fmt.Println("main() started")
	panic("error here.")
	fmt.Println("END main()")			// unreachable code，无法执行的语句代码
}
```

:warning:`recover`函数配合`panic`函数使用时，需要在`defer`函数中嵌套`recover`函数（defer函数最后才执行），因为当程序执行到`panic`函数时会异常终止，从而会让`recover`函数无法捕获`panic`错误.

## 参考链接

- Golang 函数高级：https://chai2010.cn/advanced-go-programming-book/ch1-basic/ch1-04-func-method-interface.html
- 回调函数和闭包：https://www.cnblogs.com/f-ck-need-u/p/9878898.html

