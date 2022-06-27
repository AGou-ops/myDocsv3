# Istio Basic

## Istio 简介

> Connect, secure, control, and observe services.

连接、安全加固、控制和观察服务的开放平台。

- 连接（Connect）：智能控制服务之间的调用流量，能够实现灰度升级、AB 测试和红黑部署等功能；

- 安全加固（Secure）：自动为服务之间的调用提供认证、授权和加密；

- 控制（Control）：应用用户定义的 policy，保证资源在消费者中公平分配；

- 观察（Observe）：查看服务运行期间的各种数据，比如日志、监控和 tracing，了解服务的运行情况。

## Service Mesh

`Service Mesh`(服务网格)可以简单理解为**"分布式代理"**.

![](https://mmbiz.qpic.cn/mmbiz_gif/d5TCS9b3zE1YicaDNAIeXQe05kRHruhnHp7BC9xS8Ys4Lh0F0ib4AJ0xHQTGdtQT28M441ISZec4AfugloR8VfkA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

## Istio 架构

![Istio架构图](https://istio.io/latest/docs/ops/deployment/architecture/arch.svg)

## Istio 安装部署

### 使用`istioctl`安装

官方详细中文安装文档: https://istio.io/latest/zh/docs/setup/install/istioctl/

以下只记录相关命令:

```bash
$ curl -L https://istio.io/downloadIstio | sh -
# 也可以从官方github仓库进行获取release包, https://github.com/istio/istio/releases/tag/1.7.3

$ cd istio-1.7.3/
# 输出环境变量, 以便直接使用
$ export PATH=$PWD/bin:$PATH
# 添加自动补全功能(需要子命令时按下TAB键激活)
$ cp ./tools/istioctl.bash ~ && source ~/istioctl.bash
# 安装demo配置
$ istioctl manifest install --set profile=demo
# 为了验证是否安装成功，需要先确保以下 Kubernetes 服务正确部署，然后验证除 jaeger-agent 服务外的其他服务，是否均有正确的 CLUSTER-IP：
$ kubectl get svc -n istio-system
# 请确保关联的 Kubernetes pod 已经部署，并且 STATUS 为 Running
$ kubectl get pods -n istio-system

# 卸载
$ istioctl manifest generate --set profile=demo | kubectl delete -f -
```

### 使用`helm chart`安装

已被启用, 推荐使用`istioctl`安装.


> 部分内容筛选自: [Istio 是啥?一文带你彻底了解](https://weixin.sogou.com/link?url=dn9a_-gY295K0Rci_xozVXfdMkSQTLW6cwJThYulHEtVjXrGTiVgS8MgskBbNKMg1jd_UAgBBtBgbuW-CnWsI1qXa8Fplpd9M2HsHPtL_uGFwcB-LoRjg8V_MfAw8Wg3k70j_V31ZLuJMytP8qR2YRnycg--9VFPkkNS1gPt1QyTqAvLDpSkyT_ezw95tL17tyKO1qlVHvGS8DMVBk6NX30KCpE-80kRTqGhvjHCpURaK6ytIf8OgoTKJs_5u3vtMjWlhLQ8AEgCYioxHkzTmA..&type=2&query=istio&token=empty&k=91&h=L)


## 参考链接

- Istio Documentation: https://istio.io/latest/docs/
- Istio Arch: https://istio.io/latest/docs/ops/deployment/architecture/
- Istio 入门: [Istio 是啥?一文带你彻底了解](https://weixin.sogou.com/link?url=dn9a_-gY295K0Rci_xozVXfdMkSQTLW6cwJThYulHEtVjXrGTiVgS8MgskBbNKMg1jd_UAgBBtBgbuW-CnWsI1qXa8Fplpd9M2HsHPtL_uGFwcB-LoRjg8V_MfAw8Wg3k70j_V31ZLuJMytP8qR2YRnycg--9VFPkkNS1gPt1QyTqAvLDpSkyT_ezw95tL17tyKO1qlVHvGS8DMVBk6NX30KCpE-80kRTqGhvjHCpURaK6ytIf8OgoTKJs_5u3vtMjWlhLQ8AEgCYioxHkzTmA..&type=2&query=istio&token=empty&k=91&h=L)
- Istio Installation: https://istio.io/latest/zh/docs/setup/getting-started/
