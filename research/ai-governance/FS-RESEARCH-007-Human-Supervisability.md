# FS-RESEARCH-007 — Human Supervisability：AI 执行、人类监督的可监督性

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

## 1. 为什么不用简单的“可理解性”

治理系统的目标不是让人理解每一行内部实现，而是让授权人能够判断：

> 发生了什么、为什么、证据是什么、哪里不确定、AI 做了什么、人应该在哪里介入。

因此研究对象定义为 Human Supervisability。

## 2. 独立验证

参与者应满足：

DEVELOPMENT_INVOLVEMENT = NONE  
PRIOR_OBSERVER_KNOWLEDGE = NONE  
WORKFLOW_MODE = AI_ASSISTED_HUMAN_SUPERVISION  
FINAL_INTERPRETATION_BY = HUMAN_PARTICIPANT

## 3. 核心任务

## 4. 证伪条件

如果陌生参与者在没有作者口头解释的情况下无法稳定回答发生了什么、依据是什么、哪里未知以及如何干预，则当前人类可监督性设计不成立。

参与者独立回答：

1. 发生了什么？
2. 为什么发生？
3. 有什么证据？
4. 哪些是确定的？
5. 哪些是 UNKNOWN？
6. AI 是否已经执行现实世界动作？
7. 谁承担责任？
8. 如果不同意，首先检查哪里？

## 4. 验证目标

如果没有开发者口头解释，普通授权监督者仍能完成上述任务，则说明治理输出具有一定可监督性。

## 5. 证据状态

DESIGNED / VALIDATION REQUIRED。
