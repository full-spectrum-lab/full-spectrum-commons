# FS-RESEARCH-010 — Full Spectrum 跨节点治理参考架构

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

## 1. 定位

本文件不是 Full Spectrum 生产架构规范，而是对 FS-RESEARCH-000～009 研究结果的参考架构表达。

## 2. 分层

### Governance Node

负责本地身份、权限、政策、知识、证据和责任。

### Protocol

负责跨节点可表达的治理语义和机器可读契约。

### Engine

负责可重复治理评价与证据生成。

### Knowledge Governance

负责知识身份、版本、来源、生命周期、冲突和回放条件。

### Observer

负责现实世界观察、证据、审计、回放以及人类监督入口。

### Enterprise / Case

## 3. 证伪条件

如果前述分层无法被独立团队理解和实现，或整合后不能改善跨节点边界识别、证据连续性和人类监督，同时显著增加复杂度，则该参考架构应被拒绝或重构。

负责具体行业和组织场景。

## 3. 关键边界

- Protocol 不等于执行器。
- Engine 不等于 Agent planner。
- Knowledge Governance 不等于普通 RAG。
- Observer 不等于通用 APM。
- Research 不覆盖工程规范。
- Governance interoperability 不等于 governance unification。

## 4. 参考闭环

现实 → Observation → Evidence → Governance Evaluation → UNKNOWN / Risk / Explanation → Human Supervisability → Human Decision → Audit / Replay → 下一轮观察。

## 5. 证据状态

ARCHITECTURAL SYNTHESIS / VALIDATION REQUIRED。

## 6. 核心原则

Verify, do not infer.

任何生产能力、跨组织能力或现实世界有效性声明，都必须回到对应代码、测试、运行证据或独立复现。
