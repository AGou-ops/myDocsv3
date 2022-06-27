# Dubbo Basic

[TOC]

## Dubbo 简介

Apache Dubbo |ˈdʌbəʊ| 是一款高性能、轻量级的开源`Java RPC`[^rpc]框架，它提供了三大核心能力：*面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。*

![](http://dubbo.apache.org/docs/zh-cn/user/sources/images/dubbo-architecture.jpg "dubbo架构")

节点角色说明：

| 节点        | 角色说明                               |
| ----------- | -------------------------------------- |
| `Provider`  | 暴露服务的服务提供方                   |
| `Consumer`  | 调用远程服务的服务消费方               |
| `Registry`  | 服务注册与发现的注册中心               |
| `Monitor`   | 统计服务的调用次数和调用时间的监控中心 |
| `Container` | 服务运行容器                           |

调用关系说明：

1. 服务容器负责启动，加载，运行服务提供者。
2. 服务提供者在启动时，向注册中心注册自己提供的服务。
3. 服务消费者在启动时，向注册中心订阅自己所需的服务。
4. 注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。
5. 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。
6. 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。

> 来源于官方架构说明：http://dubbo.apache.org/zh-cn/docs/user/preface/architecture.html

## 参考链接

* 官方文档：http://dubbo.apache.org/zh-cn/docs/user/SUMMARY.html
* Dubbo Quick Start: http://dubbo.apache.org/en-us/docs/user/quick-start.html
* Dubbo 从入门到实战：https://segmentfault.com/a/1190000019896723

[^rpc]: RPC（Remote Procedure Call）远程过程调用，简单的理解是一个节点请求另一个节点提供的服务。

