# Golang 测试

## 单元测试

### 简单示例

从一个简单的样例开始：

```go
package main

import (
    "fmt"
    "testing"
)

func IntMin(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func TestIntMinBasic(t *testing.T) {		// 单元测试函数格式为TestXxx，测试函数的签名必须接收一个指向 testing.T 类型的指针，并且不能返回任何值
    ans := IntMin(2, -2)
    if ans != -2 {

        t.Errorf("IntMin(2, -2) = %d; want -2", ans)
    }
}

// Table-Driven Test，表格驱动型测试。
func TestIntMinTableDriven(t *testing.T) {
    var tests = []struct {
        a, b int
        want int
    }{
        {0, 1, 0},
        {1, 0, 0},
        {2, -2, 2},
        {0, -1, -1},
        {-1, 0, -1},
    }

    for _, tt := range tests {

        testname := fmt.Sprintf("%d,%d", tt.a, tt.b)		// 测试名称
        t.Run(testname, func(t *testing.T) {
            ans := IntMin(tt.a, tt.b)
            if ans != tt.want {
                t.Errorf("got %d, want %d", ans, tt.want)
            }
        })
    }
}
```

使用`go test`命令行工具进行测试：

```bash
$ go test -v -cover <FILENAME>			# -v显示详细信息，-cover显示测试覆盖率
# 如果想测试当前项目所有文件，使用以下命令
$ go test ./...
```

### 报告方法

单元测试中，传递给测试函数的参数是 `*testing.T` 类型。它用于管理测试状态并支持格式化测试日志。测试日志会在执行测试的过程中不断累积，并在测试完成时转储至标准输出。

当测试函数返回时，或者当测试函数调用 `FailNow`、 `Fatal`、`Fatalf`、`SkipNow`、`Skip`、`Skipf` 中的任意一个时，则宣告该测试函数结束。跟 `Parallel` 方法一样，以上提到的这些方法只能在运行测试函数的 goroutine 中调用。

至于其他报告方法，比如 `Log` 以及 `Error` 的变种， 则可以在多个 goroutine 中同时进行调用。

上面提到的系列包括方法，带 `f` 的是格式化的，格式化语法参考 `fmt` 包。

T 类型内嵌了 common 类型，common 提供这一系列方法，我们经常会用到的（注意，这里说的测试中断，都是指当前测试函数）：

1）当我们遇到一个断言错误的时候，标识这个测试失败，会使用到：

```
Fail : 测试失败，测试继续，也就是之后的代码依然会执行
FailNow : 测试失败，测试中断
```

在 `FailNow` 方法实现的内部，是通过调用 `runtime.Goexit()` 来中断测试的。

2）当我们遇到一个断言错误，只希望跳过这个错误，但是不希望标识测试失败，会使用到：

```
SkipNow : 跳过测试，测试中断
```

在 `SkipNow` 方法实现的内部，是通过调用 `runtime.Goexit()` 来中断测试的。

3）当我们只希望打印信息，会用到 :

```
Log : 输出信息
Logf : 输出格式化的信息
```

注意：默认情况下，单元测试成功时，它们打印的信息不会输出，可以通过加上 `-v` 选项，输出这些信息。但对于基准测试，它们总是会被输出。

4）当我们希望跳过这个测试，并且打印出信息，会用到：

```
Skip : 相当于 Log + SkipNow
Skipf : 相当于 Logf + SkipNow
```

5）当我们希望断言失败的时候，标识测试失败，并打印出必要的信息，**但是测试继续**，会用到：

```
Error : 相当于 Log + Fail
Errorf : 相当于 Logf + Fail
```

6）当我们希望断言失败的时候，标识测试失败，打印出必要的信息，**但中断测试**，会用到：

```
Fatal : 相当于 Log + FailNow
Fatalf : 相当于 Logf + FailNow
```

> 来源：https://books.studygolang.com/The-Golang-Standard-Library-by-Example/chapter09/09.1.html#t-%E7%B1%BB%E5%9E%8B

:blush:总结：记住`Fail`、`FailNow`、`SkipNow`和`Log`，其他四种都是类似于这三种的实现。

## 基准测试

### 简单样例

```go
// fib.go
package main

func fib(n int) int {
	if n == 0 || n == 1 {
		return n
	}
	return fib(n-2) + fib(n-1)
}
// fib_test.go
package main

import "testing"

func BenchmarkFib(b *testing.B) {
    time.Sleep(time.Second * 3) // 模拟耗时准备任务
	b.ResetTimer() // 重置定时器，b.StopTimer()，b.StartTimer()
	for n := 0; n < b.N; n++ {
		fib(30) // run fib(30) b.N times
	}
}
```

运行基准测试命令：

```bash
> go test -bench=".*" -benchtime=1s -count=3 -benchmem .
goos: linux
goarch: amd64
pkg: benchmarkdemo
cpu: Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz
BenchmarkFib-4               246           4715823 ns/op               0 B/op          0 allocs/op
BenchmarkFib-4               236           4735137 ns/op               0 B/op          0 allocs/op
BenchmarkFib-4               253           4721660 ns/op               0 B/op          0 allocs/op
PASS
ok      benchmarkdemo   4.969s


# ---- benchmark结果解释
# BenchmarkFib-4：后面的-4即GOMAXPROCS，默认等于CPU的核心数，该值可以通过-cpu=2,4...来进行修改；
# 252：表示该测试用例总共执行了252次；
# 4628531 ns/op：运行所用时间，单位纳秒ns；
# 最后一行4.961s：测试所用的时间，之所以不与参数上面的数值相同，是因为创建测试用例，删除测试用例需要一定的时间.
```

以上参数说明：

- `-bench <regex_args>`：使用哪些测试用例，后面可以跟正则表达式来匹配所要使用的测试用例；
- `-benchtime <time>`：指定基准测试时间，默认`1s`，也可以是次数，另外，还可以设置`10x`，表示运行十遍；
- `-count <count>`：指定基准测试的次数；
- `-benchmem`：可以度量内存分配的次数；

`go test <args>`参考：https://pkg.go.dev/cmd/go#hdr-Testing_flags

## 参考链接

- golang 测试：https://books.studygolang.com/The-Golang-Standard-Library-by-Example/chapter09/09.0.html
- golang 标准库中文文档：http://cngolib.com/testing.html#t