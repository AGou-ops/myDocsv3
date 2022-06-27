# Golang 包

- 名字是以 **大写字母** 开头的，就是可以输出的 variables，反之，就是包私有的，其他包无法引用。

- 如果有些包因为某些原因无法正常访问，那么可以使用`go mod edit`命令将其替换；

Example:

```bash
# Add a replace directive.
$ go mod edit -replace example.com/a@v1.0.0=./a

# Remove a replace directive.
$ go mod edit -dropreplace example.com/a@v1.0.0

# Set the go version, add a requirement, and print the file
# instead of writing it to disk.
$ go mod edit -go=1.14 -require=example.com/m@v1.0.0 -print

# Format the go.mod file.
$ go mod edit -fmt

# Format and print a different .mod file.
$ go mod edit -print tools.mod

# Print a JSON representation of the go.mod file.
$ go mod edit -json
```

- 查看包的所有版本：

Example:

```bash
$ go list -m all
$ go list -m -versions example.com/m
$ go list -m -json example.com/m@latest
# 同时可以结合git来查看远程的版本及分支
$ git ls-remote --tags https://github.com/pkg/errors
```

- 升级项目所有包：

```bash
$ go get -u ./...
```



## 参考链接

- go-mod-edit: https://golang.org/ref/mod#go-mod-edit
- go list -m: https://golang.org/ref/mod#go-list-m

