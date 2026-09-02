# FS-RESEARCH-006 — UNKNOWN 与人类接管机制

**Version:** 0.1  
**Status:** PUBLIC RESEARCH DRAFT / NON-NORMATIVE

主要作者：Codex
本次维护：Codex
复核作者：PENDING
创建时间：2026-09-02 03:54（北京时间，UTC+8）
最后更新时间：2026-09-02 04:04（北京时间，UTC+8）
文档状态：`IN_REVIEW`
事实基线：FS-RESEARCH-SERIES-v0.1 本地工作副本
批准人：PENDING

## 1. 核心问题

AI 治理系统是否应该在证据不足时继续给出看似确定的结论？

## 2. UNKNOWN 的定位

UNKNOWN 不是系统失败，而是系统对当前证据边界的显式承认：

> 当前证据不足以支持可靠判断。

因此 UNKNOWN 可以成为治理结果的一等状态。

## 3. 人类接管

当风险、权限、证据或责任无法被可靠确定时，系统应将问题交还给具有相应权限的人类责任主体。

接管应提供：

- 当前发生了什么
- 已知什么
- 未知什么
- 为什么未知
- 当前证据
- 建议检查入口
- 是否已经执行现实世界动作

## 4. 反模式

## 5. 证伪条件

如果在证据不足、权限不明或责任冲突时，继续自动决策比进入 UNKNOWN 并交还人类更少地产生错误和不可逆后果，则当前 UNKNOWN 机制假设应被修正。

禁止用默认值、平均值或语言模型猜测把 UNKNOWN 隐藏成确定结论。

## 5. 研究指标

UNKNOWN Precision、Human Comprehension、Intervention Success。

## 6. 证据状态

RESEARCH HYPOTHESIS / DESIGN PRINCIPLE。
