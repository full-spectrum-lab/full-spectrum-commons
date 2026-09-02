# FS-RESEARCH-008 — 多智能体递归环境下的风险传播与治理漂移

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

## 1. 研究问题

多个自治 Agent 相互调用、反馈和修改状态后，局部治理是否仍然能够解释系统整体行为？

## 2. 风险机制候选

- Recursive Amplification
- Goal Incompatibility
- Knowledge Contamination
- Evidence Loss
- Permission Composition
- Resource Congestion
- State Drift
- Governance Drift

## 3. 研究假设

一个节点的局部正确行为可能通过反馈回路成为另一个节点的输入，从而改变后者的治理状态。

因此需要观察风险如何跨节点传播，而不是只观察单个 Agent 的输出质量。

## 4. 实验方向

建立两个或多个自治节点，改变：

知识版本、权限边界、反馈频率、证据完整度和状态延迟。

比较是否能够提前发现治理漂移。

## 5. 证据状态

## 6. 证伪条件

如果在多 Agent 反馈、知识版本变化和权限漂移条件下，单节点治理能够稳定解释整体行为，且互操作层没有增加可观测性，则本研究假设应被削弱。

HYPOTHESIS / EXPERIMENT DESIGN。
