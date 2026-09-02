# FS-RESEARCH-002 — 从治理互操作性假设到可运行验证

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

## 1. 目标

把“治理互操作可能有必要”的理论假设转化为可证伪实验。

## 2. 实验条件

A：无治理互操作。  
B：各节点独立治理。  
C：加入最小治理互操作层。

实验应尽可能保持业务场景一致，仅改变治理信息交换条件。

## 3. 双节点模型

组织 A：客户智能系统。  
组织 B：订单履约系统。

A 负责推荐或客户决策，B 负责库存、订单和物流执行。

风险注入包括：

- 知识版本冲突
- 权限边界冲突
- 证据缺失
- 递归反馈
- 状态漂移

## 4. 最小交换语义

建议观察：

Identity、Capability、Boundary、Authority、Evidence、Provenance、Risk、Uncertainty、Responsibility、Replay。

实验不要求共享全部业务数据。

## 5. 指标

- Risk Detection Latency
- Boundary Recognition
- Evidence Completeness
- Provenance Traceability
- Responsibility Traceability
- UNKNOWN Precision
- Human Supervisability
- Intervention Success
- Governance Overhead
- Autonomy Preservation

## 6. 成功条件

治理收益必须高于互操作成本，同时保持：

Governance Benefit > Interoperability Cost

并满足 Local Authority Preserved 与 Human Responsibility Preserved。

## 7. 失败条件

包括但不限于：没有额外检测能力、误报过高、必须集中共享全部数据、中央权力捕获、UNKNOWN 无法使用、人类无法理解、证据不可回放、责任不清或成本过高。

## 8. 核心原则

不要问架构“听起来是否正确”，而要建立能够证明它错误的实验。
