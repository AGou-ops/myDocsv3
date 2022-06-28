# KVM <2> VMware Station 

### kvm 虚拟机迁移到 vmware

1. 首先确保所要迁移主机处于关机状态：

```bash
[root@kvm www]\# virsh list --all
 Id    Name                           State
----------------------------------------------------
 -     elk01                          shut off
```

2. 将kvm下`img`文件格式的虚拟机转换成`vmdk`格式，命令如下：

```bash
qemu-img convert /data/elk01.img  -O vmdk /data/elk01.vmdk 
```

3. 最后在 `vmware station`或者`vmware esxi` 中创建一个相同配置的主机，使用上面生成的`vmdk`即可.

### vmware 虚拟机迁移到 kvm

https://blog.csdn.net/sin30_zhangdj/article/details/79384360