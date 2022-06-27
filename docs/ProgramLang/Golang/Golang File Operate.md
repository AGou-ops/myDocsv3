# Golang 文件操作

> 部分原文链接：https://www.devdungeon.com/content/working-files-go#everything_is_a_file

## Everything is a File

One of the fundamental aspects of UNIX is that everything is a file. We don't necessarily know what the file descriptor maps to, that is abstracted by the operating system's device drivers. The operating system provides us an interface to the device in the form of a file.

The reader and writer interfaces in Go are similar abstractions. We simply read and write bytes, without the need to understand where or how the reader gets its data or where the writer is sending the data. Look in **/dev** to find available devices. Some will require elevated privileges to access.

## Create Empty File

```go
package main

import (
    "log"
    "os"
)

var (
    newFile *os.File
    err     error
)

func main() {
    newFile, err = os.Create("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    log.Println(newFile)
    newFile.Close()
}
```

## 文件夹操作

```go
// 快速开始
path := "test/"
// 忽略警告内容
_ = os.Mkdir(path, os.ModePerm)

// 当文件夹不存在时创建文件夹
path := "test/"
if _, err := os.Stat(path); errors.Is(err, os.ErrNotExist) {
    err := os.Mkdir(path, os.ModePerm)
    if err != nil {
        log.Println(err)
    }
}

// 递归创建文件夹
path := "test/test1/test2/test3"
err := os.MkdirAll(path, os.ModePerm)
if err != nil {
    log.Println(err)
}

// rename 文件夹
err := os.Rename("test/", "test2/")

// delete 文件夹，递归删除
err := os.RemoveAll("filepath")

// 获取当前目录所有文件以及文件夹
file, err := os.Open(".")
if err != nil {
    log.Fatal(file)
}
defer file.Close()
//	读取目录下的子文件(有可能是一个文件，有可能是一个子目录)
// fmt.Println(file.Readdir(10))
// fmt.Println(file.Readdirnames(10))
// fmt.Println(file.Readdirnames(10))
// fmt.Println(file.Readdirnames(-1))
files, err := file.Readdir(-1)
for _, file := range files {
    fmt.Println(file.IsDir(), file.Name(), file.Size(), file.ModTime(), file.Mode())
}

```

## Truncate a File

```go
package main

import (
    "log"
    "os"
)

func main() {
    // Truncate a file to 100 bytes. If file
    // is less than 100 bytes the original contents will remain
    // at the beginning, and the rest of the space is
    // filled will null bytes. If it is over 100 bytes,
    // Everything past 100 bytes will be lost. Either way
    // we will end up with exactly 100 bytes.
    // Pass in 0 to truncate to a completely empty file

    err := os.Truncate("test.txt", 100)
    if err != nil {
        log.Fatal(err)
    }
}
```

## Get File Info

```go
package main

import (
    "fmt"
    "log"
    "os"
)

var (
    fileInfo os.FileInfo
    err      error
)

func main() {
    // Stat returns file info. It will return
    // an error if there is no file.
    fileInfo, err = os.Stat("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("File name:", fileInfo.Name())
    fmt.Println("Size in bytes:", fileInfo.Size())
    fmt.Println("Permissions:", fileInfo.Mode())
    fmt.Println("Last modified:", fileInfo.ModTime())
    fmt.Println("Is Directory: ", fileInfo.IsDir())
    fmt.Printf("System interface type: %T\n", fileInfo.Sys())
    fmt.Printf("System info: %+v\n\n", fileInfo.Sys())
}
```

## Rename and Move a File

```go
package main

import (
    "log"
    "os"
)

func main() {
    originalPath := "test.txt"
    newPath := "test2.txt"
    err := os.Rename(originalPath, newPath)
    if err != nil {
        log.Fatal(err)
    }
}
```

## Delete a File

```go
package main

import (
    "log"
    "os"
)

func main() {
    err := os.Remove("test.txt")
    if err != nil {
        log.Fatal(err)
    }
}
```

## Open and Close Files

```go
package main

import (
    "log"
    "os"
)

func main() {
    // Simple read only open. We will cover actually reading
    // and writing to files in examples further down the page
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    file.Close()

    // OpenFile with more options. Last param is the permission mode
    // Second param is the attributes when opening
    file, err = os.OpenFile("test.txt", os.O_APPEND, 0666)
    if err != nil {
        log.Fatal(err)
    }
    file.Close()

    // Use these attributes individually or combined
    // with an OR for second arg of OpenFile()
    // e.g. os.O_CREATE|os.O_APPEND
    // or os.O_CREATE|os.O_TRUNC|os.O_WRONLY

    // os.O_RDONLY // Read only
    // os.O_WRONLY // Write only
    // os.O_RDWR // Read and write
    // os.O_APPEND // Append to end of file
    // os.O_CREATE // Create is none exist
    // os.O_TRUNC // Truncate file when opening
}
```

## Check if File Exists

```go
package main

import (
    "log"
    "os"
)

var (
    fileInfo *os.FileInfo
    err      error
)

func main() {
    // Stat returns file info. It will return
    // an error if there is no file.
    fileInfo, err := os.Stat("test.txt")
    if err != nil {
        if os.IsNotExist(err) {
            log.Fatal("File does not exist.")
        }
    }
    log.Println("File does exist. File information:")
    log.Println(fileInfo)
}
```

## Check Read and Write Permissions

```go
package main

import (
    "log"
    "os"
)

func main() {
    // Test write permissions. It is possible the file
    // does not exist and that will return a different
    // error that can be checked with os.IsNotExist(err)
    file, err := os.OpenFile("test.txt", os.O_WRONLY, 0666)
    if err != nil {
        if os.IsPermission(err) {
            log.Println("Error: Write permission denied.")
        }
    }
    file.Close()

    // Test read permissions
    file, err = os.OpenFile("test.txt", os.O_RDONLY, 0666)
    if err != nil {
        if os.IsPermission(err) {
            log.Println("Error: Read permission denied.")
        }
    }
    file.Close()
}
```

## Change Permissions, Ownership, and Timestamps

```go
package main

import (
    "log"
    "os"
    "time"
)

func main() {
    // Change perrmissions using Linux style
    err := os.Chmod("test.txt", 0777)
    if err != nil {
        log.Println(err)
    }

    // Change ownership
    err = os.Chown("test.txt", os.Getuid(), os.Getgid())
    if err != nil {
        log.Println(err)
    }

    // Change timestamps
    twoDaysFromNow := time.Now().Add(48 * time.Hour)
    lastAccessTime := twoDaysFromNow
    lastModifyTime := twoDaysFromNow
    err = os.Chtimes("test.txt", lastAccessTime, lastModifyTime)
    if err != nil {
        log.Println(err)
    }
}
```

## Hard Links and Symlinks

A typical file is just a pointer to a place on the hard disk called an inode. A hard link creates a new pointer to the same place. A file will only be deleted from disk after all links are removed. Hard links only work on the same file system. A hard link is what you might consider a 'normal' link.

A symbolic link, or soft link, is a little different, it does not point directly to a place on the disk. Symlinks only reference other files by name. They can point to files on different filesystems. Not all systems support symlinks.

```go
package main

import (
    "os"
    "log"
    "fmt"
)

func main() {
    // Create a hard link
    // You will have two file names that point to the same contents
    // Changing the contents of one will change the other
    // Deleting/renaming one will not affect the other
    err := os.Link("original.txt", "original_also.txt")
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("creating sym")
    // Create a symlink
    err = os.Symlink("original.txt", "original_sym.txt")
    if err != nil {
        log.Fatal(err)
    }

    // Lstat will return file info, but if it is actually
    // a symlink, it will return info about the symlink.
    // It will not follow the link and give information
    // about the real file
    // Symlinks do not work in Windows
    fileInfo, err := os.Lstat("original_sym.txt")
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("Link info: %+v", fileInfo)

    // Change ownership of a symlink only 
    // and not the file it points to
    err = os.Lchown("original_sym.txt", os.Getuid(), os.Getgid())
    if err != nil {
        log.Fatal(err)
    }
}
```

## Copy a File

```go
package main

import (
    "os"
    "log"
    "io"
)

// Copy a file
func main() {
    // Open original file
    originalFile, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    defer originalFile.Close()

    // Create new file
    newFile, err := os.Create("test_copy.txt")
    if err != nil {
        log.Fatal(err)
    }
    defer newFile.Close()

    // Copy the bytes to destination from source
    bytesWritten, err := io.Copy(newFile, originalFile)
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Copied %d bytes.", bytesWritten)
    
    // Copy the bytes to destination from source -- way 2, use ioutil package
    input, err := ioutil.ReadFile(sourceFile)
    if err != nil {
        fmt.Println(err)
        return
    }
    err = ioutil.WriteFile(destinationFile, input, 0644)
    if err != nil {
        fmt.Println("Error creating", destinationFile)
        fmt.Println(err)
        return
    }
    
    // Commit the file contents
    // Flushes memory to disk
    err = newFile.Sync()
    if err != nil {
        log.Fatal(err)
    }
}
```

## Seek Positions in File

```go
package main

import (
    "os"
    "fmt"
    "log"
)

func main() {
    file, _ := os.Open("test.txt")
    defer file.Close()

    // Offset is how many bytes to move
    // Offset can be positive or negative
    var offset int64 = 5

    // Whence is the point of reference for offset
    // 0 = Beginning of file
    // 1 = Current position
    // 2 = End of file
    var whence int = 0
    newPosition, err := file.Seek(offset, whence)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Just moved to 5:", newPosition)

    // Go back 2 bytes from current position
    newPosition, err = file.Seek(-2, 1)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Just moved back two:", newPosition)

    // Find the current position by getting the
    // return value from Seek after moving 0 bytes
    currentPosition, err := file.Seek(0, 1)
    fmt.Println("Current position:", currentPosition)

    // Go to beginning of file
    newPosition, err = file.Seek(0, 0)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Position after seeking 0,0:", newPosition)
}
```

## Write Bytes to a File

You can write using just the os package which is needed already to open the file. Since all Go executables are statically linked binaries, every package you import increases the size of your executable. Other packages like **io**, **ioutil**, and **bufio** provide some more help, but they are not necessary.

```go
package main

import (
    "os"
    "log"
)

func main() {
    // Open a new file for writing only
    file, err := os.OpenFile(
        "test.txt",
        os.O_WRONLY|os.O_TRUNC|os.O_CREATE,
        0666,
    )
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()

    // Write bytes to file
    byteSlice := []byte("Bytes!\n")
    bytesWritten, err := file.Write(byteSlice)
    // append string to file
    appendWritten, _ := newFile.WriteString("something here.\n")
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Wrote %d bytes.\n", bytesWritten)
    log.Printf("Wrote %d bytes.\n", appendWritten)
}
```

## Quick Write to File

The **ioutil** package has a useful function called **WriteFile()** that will handle creating/opening, writing a slice of bytes, and closing. It is useful if you just need a quick way to dump a slice of bytes to a file.

```go
package main

import (
    "io/ioutil"
    "log"
)

func main() {
    err := ioutil.WriteFile("test.txt", []byte("Hi\n"), 0666)
    if err != nil {
        log.Fatal(err)
    }
}
```

## Use Buffered Writer

The **bufio** package lets you create a buffered writer so you can work with a buffer in memory before writing it to disk. This is useful if you need to do a lot manipulation on the data before writing it to disk to save time from disk IO. It is also useful if you only write one byte at a time and want to store a large number in memory before dumping it to file at once, otherwise you would be performing disk IO for every byte. That puts wear and tear on your disk as well as slows down the process.

```go
package main

import (
    "log"
    "os"
    "bufio"
)

func main() {
    // Open file for writing
    file, err := os.OpenFile("test.txt", os.O_WRONLY, 0666)
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()

    // Create a buffered writer from the file
    bufferedWriter := bufio.NewWriter(file)

    // Write bytes to buffer
    bytesWritten, err := bufferedWriter.Write(
        []byte{65, 66, 67},
    )
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Bytes written: %d\n", bytesWritten)

    // Write string to buffer
    // Also available are WriteRune() and WriteByte()   
    bytesWritten, err = bufferedWriter.WriteString(
        "Buffered string\n",
    )
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Bytes written: %d\n", bytesWritten)

    // Check how much is stored in buffer waiting
    unflushedBufferSize := bufferedWriter.Buffered()
    log.Printf("Bytes buffered: %d\n", unflushedBufferSize)

    // See how much buffer is available
    bytesAvailable := bufferedWriter.Available()
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Available buffer: %d\n", bytesAvailable)

    // Write memory buffer to disk
    bufferedWriter.Flush()

    // Revert any changes done to buffer that have
    // not yet been written to file with Flush()
    // We just flushed, so there are no changes to revert
    // The writer that you pass as an argument
    // is where the buffer will output to, if you want
    // to change to a new writer
    bufferedWriter.Reset(bufferedWriter) 

    // See how much buffer is available
    bytesAvailable = bufferedWriter.Available()
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Available buffer: %d\n", bytesAvailable)

    // Resize buffer. The first argument is a writer
    // where the buffer should output to. In this case
    // we are using the same buffer. If we chose a number
    // that was smaller than the existing buffer, like 10
    // we would not get back a buffer of size 10, we will
    // get back a buffer the size of the original since
    // it was already large enough (default 4096)
    bufferedWriter = bufio.NewWriterSize(
        bufferedWriter,
        8000,
    )

    // Check available buffer size after resizing
    bytesAvailable = bufferedWriter.Available()
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Available buffer: %d\n", bytesAvailable)
}
```

## Read up to n Bytes from File

The **os.File** type provides a couple basic functions. The **io**, **ioutil**, and **bufio** packages provided additional functions for working with files.

```go
package main

import (
    "os"
    "log"
)

func main() {
    // Open file for reading
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()

    // Read up to len(b) bytes from the File
    // Zero bytes written means end of file
    // End of file returns error type io.EOF
    byteSlice := make([]byte, 16)
    bytesRead, err := file.Read(byteSlice)
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Number of bytes read: %d\n", bytesRead)
    log.Printf("Data read: %s\n", byteSlice)
}
```

## Read Exactly n Bytes

```go
package main

import (
    "os"
    "log"
    "io"
)

func main() {
    // Open file for reading
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }

    // The file.Read() function will happily read a tiny file in to a large
    // byte slice, but io.ReadFull() will return an
    // error if the file is smaller than the byte slice.
    byteSlice := make([]byte, 2)
    numBytesRead, err := io.ReadFull(file, byteSlice)
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Number of bytes read: %d\n", numBytesRead)
    log.Printf("Data read: %s\n", byteSlice)
}
```

## Read At Least n Bytes

```go
package main

import (
    "os"
    "log"
    "io"
)

func main() {
    // Open file for reading
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }

    byteSlice := make([]byte, 512)
    minBytes := 8
    // io.ReadAtLeast() will return an error if it cannot
    // find at least minBytes to read. It will read as
    // many bytes as byteSlice can hold. 
    numBytesRead, err := io.ReadAtLeast(file, byteSlice, minBytes)
    if err != nil {
        log.Fatal(err)
    }
    log.Printf("Number of bytes read: %d\n", numBytesRead)
    log.Printf("Data read: %s\n", byteSlice)
}
```

## Read All Bytes of File

```go
package main

import (
    "os"
    "log"
    "fmt"
    "io/ioutil"
)

func main() {
    // Open file for reading
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }

    // os.File.Read(), io.ReadFull(), and
    // io.ReadAtLeast() all work with a fixed
    // byte slice that you make before you read

    // ioutil.ReadAll() will read every byte
    // from the reader (in this case a file),
    // and return a slice of unknown slice
    data, err := ioutil.ReadAll(file)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Data as hex: %x\n", data)
    fmt.Printf("Data as string: %s\n", data)
    fmt.Println("Number of bytes read:", len(data))
}
```

## Quick Read Whole File to Memory

```go
package main

import (
    "log"
    "io/ioutil"
)

func main() {
    // Read file to byte slice
    data, err := ioutil.ReadFile("test.txt")
    if err != nil {
        log.Fatal(err)
    }

    log.Printf("Data read: %s\n", data)
}
```

## Use Buffered Reader

Creating a buffered reader will store a memory buffer with some of the contents. A buffered reader also provides some more functions that are not available on the **os.File** type or the **io.Reader**. Default buffer size is 4096 and minimum size is 16.

```go
package main

import (
    "os"
    "log"
    "bufio"
    "fmt"
)

func main() {
    // Open file and create a buffered reader on top
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    bufferedReader := bufio.NewReader(file)

    // Get bytes without advancing pointer
    byteSlice := make([]byte, 5)
    byteSlice, err = bufferedReader.Peek(5)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("Peeked at 5 bytes: %s\n", byteSlice)

    // Read and advance pointer
    numBytesRead, err := bufferedReader.Read(byteSlice)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("Read %d bytes: %s\n", numBytesRead, byteSlice)

    // Ready 1 byte. Error if no byte to read
    myByte, err := bufferedReader.ReadByte()
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("Read 1 byte: %c\n", myByte)     

    // Read up to and including delimiter
    // Returns byte slice
    dataBytes, err := bufferedReader.ReadBytes('\n') 
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("Read bytes: %s\n", dataBytes)           

    // Read up to and including delimiter
    // Returns string   
    dataString, err := bufferedReader.ReadString('\n')
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("Read string: %s\n", dataString)     

    // This example reads a few lines so test.txt
    // should have a few lines of text to work correct
}
```

## Read with a Scanner

**Scanner** is part of the **bufio** package. It is useful for stepping through files at specific delimiters. Commonly, the newline character is used as the delimiter to break up a file by lines. In a CSV file, commas would be the delimiter. The **os.File** can be wrapped in a **bufio.Scanner** just like a buffered reader. We call **Scan()** to read up to the next delimiter, and then use **Text()** or **Bytes()** to get the data that was read.

The delimiter is not just a simple byte or character. There is actually a special function you have to implement that will determine where the next delimiter is, how far forward to advance the pointer, and what data to return. If no custom **SplitFunc** is provided, it defaults to **ScanLines** which will split at every newline character. Other split functions included in **bufio** are **ScanRunes**, and **ScanWords**.

```go
// To define your own split function, match this fingerprint
type SplitFunc func(data []byte, atEOF bool) (advance int, token []byte, err error)

// Returning (0, nil, nil) will tell the scanner
// to scan again, but with a bigger buffer because
// it wasn't enough data to reach the delimiter
```

In the next example, a **bufio.Scanner** is created from the file, and then we scan read the file word by word.

```go
package main

import (
    "os"
    "log"
    "fmt"
    "bufio"
)

func main() {
    // Open file and create scanner on top of it
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    scanner := bufio.NewScanner(file)

    // Default scanner is bufio.ScanLines. Lets use ScanWords.
    // Could also use a custom function of SplitFunc type
    scanner.Split(bufio.ScanWords)

    // Scan for next token. 
    success := scanner.Scan() 
    if success == false {
        // False on error or EOF. Check error
        err = scanner.Err()
        if err == nil {
            log.Println("Scan completed and reached EOF")
        } else {
            log.Fatal(err)
        }
    }

    // Get data from scan with Bytes() or Text()
    fmt.Println("First word found:", scanner.Text())

    // Call scanner.Scan() again to find next token
}
```

## Archive(Zip) Files

```go
// This example uses zip but standard library
// also supports tar archives
package main

import (
    "archive/zip"
    "log"
    "os"
)

func main() {
    // Create a file to write the archive buffer to
    // Could also use an in memory buffer.
    outFile, err := os.Create("test.zip")
    if err != nil {
        log.Fatal(err)
    }
    defer outFile.Close()

    // Create a zip writer on top of the file writer
    zipWriter := zip.NewWriter(outFile)


    // Add files to archive
    // We use some hard coded data to demonstrate,
    // but you could iterate through all the files
    // in a directory and pass the name and contents
    // of each file, or you can take data from your
    // program and write it write in to the archive
    // without 
    var filesToArchive = []struct {
        Name, Body string
    } {
        {"test.txt", "String contents of file"},
        {"test2.txt", "\x61\x62\x63\n"},
    }

    // Create and write files to the archive, which in turn
    // are getting written to the underlying writer to the
    // .zip file we created at the beginning
    for _, file := range filesToArchive {
            fileWriter, err := zipWriter.Create(file.Name)
            if err != nil {
                    log.Fatal(err)
            }
            _, err = fileWriter.Write([]byte(file.Body))
            if err != nil {
                    log.Fatal(err)
            }
    }

    // Clean up
    err = zipWriter.Close()
    if err != nil {
            log.Fatal(err)
    }
}
```

## Extract(Unzip) Archived Files

```go
// This example uses zip but standard library
// also supports tar archives
package main

import (
    "archive/zip"
    "log"
    "io"
    "os"
    "path/filepath"
)

func main() {
    // Create a reader out of the zip archive
    zipReader, err := zip.OpenReader("test.zip")
    if err != nil {
        log.Fatal(err)
    }
    defer zipReader.Close()

    // Iterate through each file/dir found in
    for _, file := range zipReader.Reader.File {
        // Open the file inside the zip archive
        // like a normal file
        zippedFile, err := file.Open()
        if err != nil {
            log.Fatal(err)
        }
        defer zippedFile.Close()
        
        // Specify what the extracted file name should be.
        // You can specify a full path or a prefix
        // to move it to a different directory. 
        // In this case, we will extract the file from
        // the zip to a file of the same name.
        targetDir := "./"
        extractedFilePath := filepath.Join(
            targetDir,
            file.Name,
        )

        // Extract the item (or create directory)
        if file.FileInfo().IsDir() {
            // Create directories to recreate directory
            // structure inside the zip archive. Also
            // preserves permissions
            log.Println("Creating directory:", extractedFilePath)
            os.MkdirAll(extractedFilePath, file.Mode())
        } else {
            // Extract regular file since not a directory
            log.Println("Extracting file:", file.Name)

            // Open an output file for writing
            outputFile, err := os.OpenFile(
                extractedFilePath,
                os.O_WRONLY|os.O_CREATE|os.O_TRUNC,
                file.Mode(),
            )
            if err != nil {
                log.Fatal(err)
            }
            defer outputFile.Close()

            // "Extract" the file by copying zipped file
            // contents to the output file
            _, err = io.Copy(outputFile, zippedFile)
            if err != nil {
                log.Fatal(err)
            }
        }
    }
}
```

## Compress a File

```go
// This example uses gzip but standard library also
// supports zlib, bz2, flate, and lzw
package main

import (
    "os"
    "compress/gzip"
    "log"
)

func main() {
    // Create .gz file to write to
    outputFile, err := os.Create("test.txt.gz")
    if err != nil {
        log.Fatal(err)
    }

    // Create a gzip writer on top of file writer
    gzipWriter := gzip.NewWriter(outputFile)
    defer gzipWriter.Close()

    // When we write to the gzip writer
    // it will in turn compress the contents
    // and then write it to the underlying
    // file writer as well
    // We don't have to worry about how all
    // the compression works since we just
    // use it as a simple writer interface
    // that we send bytes to
    _, err = gzipWriter.Write([]byte("Gophers rule!\n"))
    if err != nil {
        log.Fatal(err)
    }

    log.Println("Compressed data written to file.") 
}
```

## Uncompress a File

```go
// This example uses gzip but standard library also
// supports zlib, bz2, flate, and lzw
package main

import (
    "compress/gzip"
    "log"
    "io"
    "os"
)

func main() {
    // Open gzip file that we want to uncompress
    // The file is a reader, but we could use any
    // data source. It is common for web servers
    // to return gzipped contents to save bandwidth
    // and in that case the data is not in a file
    // on the file system but is in a memory buffer
    gzipFile, err := os.Open("test.txt.gz")
    if err != nil {
        log.Fatal(err)
    }

    // Create a gzip reader on top of the file reader
    // Again, it could be any type reader though
    gzipReader, err := gzip.NewReader(gzipFile)
    if err != nil {
        log.Fatal(err)
    }
    defer gzipReader.Close()

    // Uncompress to a writer. We'll use a file writer
    outfileWriter, err := os.Create("unzipped.txt")
    if err != nil {
        log.Fatal(err)
    }
    defer outfileWriter.Close()

    // Copy contents of gzipped file to output file
    _, err = io.Copy(outfileWriter, gzipReader)
    if err != nil {
        log.Fatal(err)
    }
}
```

## Temporary Files and Directories

The **ioutil** package provides two functions: TempDir() and TempFile(). It is the callers responsibility to delete the temporary items when done. The only benefit these functions provide is that you can pass it an empty string for the directory, and it will automatically create the item in the system's default temporary folder (/tmp on Linux). Since **os.TempDir()** function that will return the defauly system temporary directory.

```go
package main

import (
     "os"
     "io/ioutil"
     "log"
     "fmt"
)

func main() {
     // Create a temp dir in the system default temp folder
     tempDirPath, err := ioutil.TempDir("", "myTempDir")
     if err != nil {
          log.Fatal(err)
     }
     fmt.Println("Temp dir created:", tempDirPath)

     // Create a file in new temp directory
     tempFile, err := ioutil.TempFile(tempDirPath, "myTempFile.txt")
     if err != nil {
          log.Fatal(err)
     }
     fmt.Println("Temp file created:", tempFile.Name())
     
     // ... do something with temp file/dir ...

     // Close file
     err = tempFile.Close()
     if err != nil {
        log.Fatal(err)
    }

    // Delete the resources we created
     err = os.Remove(tempFile.Name())
     if err != nil {
        log.Fatal(err)
    }
     err = os.Remove(tempDirPath)
     if err != nil {
        log.Fatal(err)
    }
}
```

## Downloading a File Over HTTP

```go
package main

import (
     "os"
     "io"
     "log"
     "net/http"
)

func main() {
     // Create output file
     newFile, err := os.Create("devdungeon.html")
     if err != nil {
          log.Fatal(err)
     }
     defer newFile.Close()

     // HTTP GET request devdungeon.com 
     url := "http://www.devdungeon.com/archive"
     response, err := http.Get(url)
     defer response.Body.Close()

     // Write bytes from HTTP response to file.
     // response.Body satisfies the reader interface.
     // newFile satisfies the writer interface.
     // That allows us to use io.Copy which accepts
     // any type that implements reader and writer interface
     numBytesWritten, err := io.Copy(newFile, response.Body)
     if err != nil {
          log.Fatal(err)
     }
     log.Printf("Downloaded %d byte file.\n", numBytesWritten)
}
```

## Hashing and Checksums

```go
package main

import (
    "crypto/md5"
    "crypto/sha1"
    "crypto/sha256"
    "crypto/sha512"
    "log"
    "fmt"
    "io/ioutil"
)

func main() {
    // Get bytes from file
    data, err := ioutil.ReadFile("test.txt")
    if err != nil {
        log.Fatal(err)
    }

    // Hash the file and output results
    fmt.Printf("Md5: %x\n\n", md5.Sum(data))
    fmt.Printf("Sha1: %x\n\n", sha1.Sum(data))
    fmt.Printf("Sha256: %x\n\n", sha256.Sum256(data))
    fmt.Printf("Sha512: %x\n\n", sha512.Sum512(data))
}
```

The example above copies the entire file in to memory. This was for convenience to pass it as a parameter to each of the hash functions. Another approach is to create the hash writer interface and write to it using Write(), WriteString(), or in this case, Copy(). The example below uses the md5 hash, but you can switch to use any of the others that are supported.

```go
package main

import (
    "crypto/md5"
    "log"
    "fmt"
    "io"
    "os"
)

func main() {
    // Open file for reading
    file, err := os.Open("test.txt")
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()
    
    // Create new hasher, which is a writer interface
    hasher := md5.New()
    _, err = io.Copy(hasher, file)
    if err != nil {
        log.Fatal(err)
    }

    // Hash and print. Pass nil since
    // the data is not coming in as a slice argument
    // but is coming through the writer interface
    sum := hasher.Sum(nil)
    fmt.Printf("Md5 checksum: %x\n", sum)
}
```

## 附录：Golang 文件相关函数

### Basic Operations

| create empty file       | `newFile, err := os.Cre­ate­("te­st.t­xt­")`                 |
| ----------------------- | ------------------------------------------------------------ |
| truncate a file         | `err := os.Tru­nca­te(­"­tes­t.t­xt", 100)`                  |
| get file info           | `fileInfo, err := os.Sta­te(­"­tes­t.t­xt")`                 |
| rename a file           | `err := os.Ren­ame­(ol­dPath, newPath)`                      |
| delete a file           | `err := os.Rem­ove­("te­st.t­xt­")`                          |
| open a file for reading | `file, err := os.Ope­n("t­est.tx­t")`                        |
| open a file             | `file, err := os.Ope­n("t­est.tx­t", os.O_A­PPEND, 0600)`    |
| close a file            | `err := file.C­lose()`                                       |
| change file permision   | `err := os.Chm­od(­"­tes­t.t­xt", 0777)`                     |
| change file ownership   | `err := os.Cho­wn(­"­tes­t.t­xt", os.Get­uid(), os.Get­gid())` |
| change file timestamps  | `err := os.Cht­ime­s("t­est.tx­t", lastAc­ces­sTime, lastMo­dif­yTime)` |

### file open flag

| `os.O_­RDONLY` | open the file read only                    |
| -------------- | ------------------------------------------ |
| `os.O_­WRONLY` | open the file write only                   |
| `os.O_­RDWR`   | open the file read write                   |
| `os.O_­APPEND` | append data to the file when writing       |
| `os.O_­CREATE` | create a new file if none exists           |
| `os.O_­EXCL`   | used with `O_CRE­ATE`, file must not exist |
| `os.O_­SYNC`   | open for synchr­onous I/O                  |
| `O_TRUNC`      | if possible, truncate file when opened     |

When opening file with `os.Op­enF­ile`, flags control how the file behaves.

### Hard Link & Symbol Link

| create a hard link     | `err := os.Lin­k("t­est.tx­t", "­tes­t_c­opy.tx­t")`     |
| ---------------------- | -------------------------------------------------------- |
| create a symbol link   | `err := os.Sym­lin­k("t­est.tx­t", "­tes­t_s­ym.t­xt­")` |
| get link file info     | `fileInfo, err := os.Lst­at(­"­tes­t_s­ym.t­xt­")`       |
| change link file owner | `err := os.Lch­own­("te­st_­sym.tx­t", uid, gid)`        |
| read a link            | `dest, err := os.Rea­dLi­nk(­"­lin­k_f­ile.tx­t")`       |

A hard link creates a new pointer to the same place. A file will only be deleted from disk after all links are removed. Hard links only work on the same file system. A hard link is what you might consider a 'normal' link.

A symbolic link, or soft link, only reference other files by name. They can point to files on different filesy­stems. Not all systems support symlinks.

### Read and Write

| write bytes to file                         | `n, err := file.W­rit­e([­]by­te(­"­hello, world!­\n"))`  |
| ------------------------------------------- | --------------------------------------------------------- |
| write string to file, append string to file | `n, err := file.W­rit­eSt­rin­g("H­ello, world!­\n")`     |
| write at offset                             | `n, err := file.W­rit­eAt­([]­byt­e("H­ell­o"), 10)`      |
| write from fmt                              | `fmt.Fprint(file, "sdfs",1,2)`                            |
| read to byte                                | `n, err := file.R­ead­(by­teS­lice)`                      |
| read exactly n bytes                        | `n, err := io.Rea­dFu­ll(­file, byteSl­ice)`              |
| read at least n bytes                       | `n, err := io.Rea­dAt­Lea­st(­file, byteSlice, minBytes)` |
| read all bytes of a file                    | `byteS­lice, err := ioutil.Re­adA­ll(­file)`              |
| read from offset                            | `n, err := file.R­ead­At(­byt­eSlice, 10)`                |

### Work with direct­ories

| create a directory              | `err := os.Mkd­ir(­"­myD­ir", 0600)`                    |
| ------------------------------- | ------------------------------------------------------- |
| recurs­ively create a directory | `err := os.Mkd­irA­ll(­"­dir­/su­bdi­r/m­yDi­r", 0600)` |
| delete a directory recurs­ively | `err := os.Rem­ove­All­("di­r/")`                       |
| list directory files            | `fileInfo, err := ioutil.Re­adD­ir(­".")`               |

### Shortcuts

| quick read from file | `byteS­lice, err := ioutil.Re­adF­ile­("te­st.t­xt­")`       |
| -------------------- | ------------------------------------------------------------ |
| quick write to file  | `err := ioutil.Wr­ite­Fil­e("t­est.tx­t", []byte­("He­llo­"), 0666)` |
| copy file            | `n, err := io.Cop­y(n­ewFile, origin­File)`                  |
| write string to file | `io.Wr­ite­Str­ing­(file, "­Hello, world")`                  |

### Temporary files and direct­ories

| create temp dir  | `iouti­l.T­emp­Dir­(dir, prefix string) (name string, err error)` |
| ---------------- | ------------------------------------------------------------ |
| create temp file | `iouti­l.T­emp­Fil­e(dir, prefix string) (f *os.File, err error)` |

### References

| [Working with Files in Go](http://devdungeon.com/content/working-files-go) |
| ------------------------------------------------------------ |
| [golang `os` standard library](https://golang.org/pkg/os/)   |
| [golang `ioutil` standard library](https://golang.org/pkg/io/ioutil) |
| [golang `iou` standard library](https://golang.org/pkg/io)   |

> 来自：https://cheatography.com/cizixs/cheat-sheets/go-files/

## 参考链接

- Golang os package: https://pkg.go.dev/os

