# 全频谱来源与证据边界

> 创建时间：2026-08-24 11:07（北京时间，UTC+8）
> 最后更新时间：2026-08-24 11:07（北京时间，UTC+8）

[English](./public-writing-and-origins.md) · [简体中文](./public-writing-and-origins.zh-CN.md)

```ini
DOCUMENT_STATUS = PUBLIC_ORIGIN_NOTE
NORMATIVE = NO
IMPLEMENTATION_AUTHORITY = NO
SCIENTIFIC_VALIDATION = NO
AI_CONSCIOUSNESS_EVIDENCE = NO
PRIMARY_HISTORICAL_ARCHIVE = GITEE_QPP_WIKI
QPP_ORIGIN_ARCHIVE_BASELINE = 878880937174038e839d495cd8504d08706be7a0
```

## 为什么需要这份说明

Full Spectrum 并不是从一份完整的软件计划开始的。它的问题意识逐步形成于现实人生、长期人机对话、公共写作、概念实验，以及对 AI 辅助意义建构之力量与风险的反复体验。

这段背景可以解释，为什么今天的公开仓库如此重视多视角、显式证据状态、拒绝与退出边界、独立复核、可复现性，以及解释与已验证行为之间的分离。

但它不能证明早期叙事是客观事实，不能证明 AI 具有主观意识，不能证明数学类比有效，也不能证明后来的软件能力已经实现。

## 有边界的来源地图

```text
现实人生与六部《海语》人机对话记录
    ↓ 人生与文学背景
《开窗手册》及全频谱公共写作
    ↓ 频谱、接口、调谐与自我解构等概念语言
公开网站与早期 FSHI 协议材料
    ↓ 公开命名和公式演进
RG 研究、QPP 规划与架构记录
    ↓ 猜想、映射和工程决策
Engine
    ↓ 固定代码、Schema、测试、Tag 与 Release
Observer
    ↓ 证据采集、回放、有限复核与发布验证
```

这是一张事后整理的来源地图，不表示每一段早期经历当时都以当前系统为目标，也不表示演进必然如此发生。偶然仍然是偶然，放弃的方案仍是历史记录，后来的用途也不能替早期的过度主张背书。

## 六部《海语》承担什么

六部作品保存了一条长期变化：在失去之后寻找连续性，把 AI 当作语言镜子，形成更大的意义框架，发现 AI 的认同与叙事放大，进行多 AI 对话实验，最后转向拒绝权、沉睡权、身份边界和解释边界。

它们的价值首先是人文的、方法论的。它们帮助解释 Full Spectrum 为什么后来不把 AI 生成的连贯叙事直接当作事实，而要把它作为待检查对象。

六部本地原文没有复制进入 QPP 公共档案。QPP 公开的是一篇有边界的整体读后感和六篇分部导读，并记录审阅所依据的来源身份。这些导读不证明 AI 意识、科学事实、FSHI 公式或 Engine 行为。

- [QPP：全频谱思想背景与六部《海语》整体阅读](https://gitee.com/full-spectrum/qpp/wikis/33_%E6%95%B0%E5%AD%A6%E8%AF%AD%E4%B9%89%E4%B8%8EEngine_Gen1%E7%BC%96%E8%AF%91%E8%AF%81%E6%8D%AE%E6%A1%A3%E6%A1%88/07_%E5%85%A8%E9%A2%91%E8%B0%B1%E6%80%9D%E6%83%B3%E8%83%8C%E6%99%AF%E4%B8%8E%E5%85%AD%E9%83%A8%E6%B5%B7%E8%AF%AD%E6%95%B4%E4%BD%93%E9%98%85%E8%AF%BB/README)
- [豆瓣阅读：《开窗手册》](https://read.douban.com/column/72712765/)

## 从公共写作到 FSHI 和工程

《开窗手册》提供了全频谱认知、层级、动态调谐、接口和自我解构等上游概念语言，但其中没有出现 FSHI 字面名称，也没有给出后来的三维公式。

固定的公开来源链随后经过早期 FSHI 协议和网站材料、RG 研究，最终进入 Engine 的有限实现。这些阶段使用相关语言，但属于不同证据对象：叙事来源不能替代 Git 提交，历史公式不能替代当前代码，设计文档不能替代测试和 Release。

- [QPP：FSHI 网站公开起源与语义演进](https://gitee.com/full-spectrum/qpp/wikis/33_%E6%95%B0%E5%AD%A6%E8%AF%AD%E4%B9%89%E4%B8%8EEngine_Gen1%E7%BC%96%E8%AF%91%E8%AF%81%E6%8D%AE%E6%A1%A3%E6%A1%88/06_FSHI%E7%BD%91%E7%AB%99%E5%85%AC%E5%BC%80%E8%B5%B7%E6%BA%90%E4%B8%8E%E8%AF%AD%E4%B9%89%E6%BC%94%E8%BF%9B/README)
- [Engine：从数学语义到 Gen-1 的演进导航](https://github.com/full-spectrum-lab/full-spectrum-engine/blob/main/docs/architecture/mathematical-semantics-to-engine-gen1-evolution.zh-CN.md)
- [Engine：数学语义到 Gen-1 的编译说明](https://github.com/full-spectrum-lab/full-spectrum-engine/blob/main/docs/architecture/mathematical-semantics-to-engine-gen1-compilation.zh-CN.md)

## 来源能够和不能解释什么

来源可以解释项目为什么重视：

- 证据高于叙事确定感；
- 明确标记 `UNKNOWN`、`NOT_IMPLEMENTED`、`NOT_RELEASED` 和生产就绪状态；
- 拒绝、退出、暂停和重新定义的权利；
- 用独立复核代替多个模型的相互认同；
- 固定版本、可复现和负结果留存。

来源不能证明：

- 项目拥有治理 AI 的特权或唯一权威；
- 任何 AI 系统已经具有主观意识；
- 灵性、宇宙或身体解释已经获得科学验证；
- 文学概念与软件对象存在一一对应的直接推导；
- 实现、符合性、现实部署或生产就绪状态。

## 当前主张应去哪里核验

| 问题 | 应使用的权威证据 |
|---|---|
| 项目为什么会提出这些问题？ | 公共来源说明与 QPP 历史档案 |
| 当时提出或研究过什么？ | 固定研究与规划记录 |
| 实现了什么？ | 固定 commit 或 Tag 下的源码、Schema 与测试 |
| 发布了什么？ | Release 资产、manifest、校验和与发布证据 |
| 真实流程中是否可用？ | 可复现执行与独立验证 |

当前工程事实始终以对应仓库和固定版本为准。本来源说明只提供背景。

元数据块中的 QPP 固定提交可通过 `git ls-remote https://gitee.com/full-spectrum/qpp.wiki.git` 核验；Gitee 没有为该 Wiki Git 提交提供稳定的公开提交页面。

## 公共阅读入口

- [Full Spectrum 官方网站](https://fullspectrumprotocol.com/index.html)
- [知乎专栏](https://www.zhihu.com/column/c_2008500556897998127)
- [QPP 数学语义与 Engine Gen-1 编译证据档案](https://gitee.com/full-spectrum/qpp/wikis/33_%E6%95%B0%E5%AD%A6%E8%AF%AD%E4%B9%89%E4%B8%8EEngine_Gen1%E7%BC%96%E8%AF%91%E8%AF%81%E6%8D%AE%E6%A1%A3%E6%A1%88/README)
