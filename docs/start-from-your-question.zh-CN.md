# 从你的问题开始

创建时间：2026-08-08 02:35（北京时间，UTC+8）  
最后更新时间：2026-08-08 02:35（北京时间，UTC+8）  
文档状态：`公共导航 / 非规范性文档`  
证据规则：各仓库 Release、精确 Tag、测试和随附 Evidence 仍是公开事实依据。

[English](./start-from-your-question.md)

全频谱包含多条可独立使用的工程轨道。第一次接触的人不需要先读懂所有仓库，也不需要先接受完整的未来愿景，才能尝试其中一个有用部分。

先从你已经遇到的问题开始。

## 全频谱是什么？

全频谱是一套面向 AI 与复杂系统的证据优先治理工程体系。它分离并重新连接：

```text
事实
→ 精确知识版本
→ 确定性判断
→ 授权
→ 现实行动
→ Evidence
→ Audit
→ Replay
```

它不替代企业业务系统、Agent Runtime、MCP/A2A 传输、RAG、CDC/ETL、工作流、法律权威或承担责任的人类判断。

## 我想知道系统为什么作出这个判断

从 **Observer** 开始。

Observer 将获得授权的现实输入连接到 Observation、Evidence、Audit、Replay 和有边界的人工复核。它不认证、不授权，也不执行最终企业行动。

入口：[full-spectrum-observer](https://github.com/full-spectrum-lab/full-spectrum-observer)

## 我想让治理判断能够复算、解释和测试

从 **Engine** 开始。

Engine 在明确输入和规则上执行确定性治理计算，并产生可复现的产物、Fixture、测试与 Release 证据。它不是 Agent Planner、工作流调度器、任意工具执行器或自动业务裁决者。

入口：[full-spectrum-engine](https://github.com/full-spectrum-lab/full-spectrum-engine)

## 我想确认一条知识依据来自哪里、使用哪个版本

从 **Knowledge Governance** 开始。

它治理精确知识身份、版本、来源、生命周期、适用范围、冲突、Snapshot、Evidence 与 Replay。它不是 RAG、向量数据库、CMS 或自动真理裁决器。

入口：[full-spectrum-knowledge-governance](https://github.com/full-spectrum-lab/full-spectrum-knowledge-governance)

## 我想明确主体、能力、边界、授权和责任

从 **Protocol** 开始。

Protocol 为 Identity、Subject、Capability、Boundary、Authorization 引用、Evidence、Audit、Responsibility 与 Review 提供治理语义和机器可读合同。它不是通信传输协议、消息总线或执行器。

入口：[full-spectrum-protocol](https://github.com/full-spectrum-lab/full-spectrum-protocol)

## 我想把全频谱用于一个具体行业

先从一个具体 CASE 开始，而不是先阅读全部理论。

```text
Core Contracts
+ Knowledge Pack
+ CASE
+ Adapter
+ Skill
+ Evidence
= Domain Solution
```

- **CASE** 定义一个可反证的冲突或决策场景；
- **Knowledge Pack** 固定领域知识、版本和适用范围；
- **Adapter** 将获得授权的外部事实映射到明确合同；
- **Skill** 为人或 Agent 提供入口，但不发放授权、不替代治理判断；
- **Evidence** 证明实际执行和验证过什么。

入口：[full-spectrum-enterprise-governance](https://github.com/full-spectrum-lab/full-spectrum-enterprise-governance)

## 我只想先看整体结构

从以下内容开始：

- [四条可独立使用的工程轨道](./four-independent-engineering-tracks.md)；
- [证据与项目状态](./evidence-and-status.md)；
- [视觉索引](./visual-index.md)；
- [公开采用阶梯](./public-adoption-ladder.md)。

## 四条轨道如何组合

四条轨道均可独立使用。组合使用时应绑定明确合同和精确版本。

```text
获得授权的事实 / 外部材料
              ↓
Knowledge Governance
身份 · 版本 · 来源 · 适用范围 · 冲突 · Snapshot
              ↓
Protocol
主体 · 能力 · 边界 · 授权 · 责任
              ↓
Engine
确定性判断 · 风险 · 规则 Gate · 报告
              ↓
Observer
Observation · Evidence · Audit · Replay · 人工复核
              ↓
获得授权的人 / 组织 / 外部业务系统
承担最终现实行动
```

上述关系是架构和采用模型，不代表所有端到端组合已经经过生产验证。

## 主体纵轴与知识横轴

主体范围可以纵向扩展：

```text
人 / Agent / 工具
→ 业务系统 / 团队
→ 组织 / 企业
→ 跨组织授权信任域
```

知识可以横向进入不同行业：

```text
行业材料
→ 精确知识身份与版本
→ Knowledge Pack / 规则集
→ CASE / Adapter / Skill
→ 行业检核、复核与 Evidence
```

当前公开工程仍以本地优先、证据优先为主。完整生产协议网络、联邦治理和跨组织自动执行不属于当前实现声明。

## 第一条贯通案例候选

现有合成汽车/工业 DID-X / DIO-X 路线是第一条四轨道贯通路径的优先候选。它已经具备多系统证据缺口问题、只读/禁止写回边界、身份和确定性序列化基础。

```text
CASE_ROLE             = FIRST_INTEGRATED_CASE_CANDIDATE
CURRENT_STATUS        = SCAFFOLD / DESIGNED_BASELINE
PRODUCTION_VALIDATION = NO
NAMED_CUSTOMER        = NO
FOUR_TRACK_E2E_PROOF  = NOT_YET_COMPLETE
```

下一步应在现有案例上补四轨道证据矩阵和最小端到端执行，而不是为了说明架构再新建一个平行案例。

## 今天可以验证什么？

| 访问者 | 建议完成的第一项验证 |
|---|---|
| 企业负责人 | 看懂问题、价值、边界和采用阶梯 |
| 企业架构师 | 查看独立轨道如何通过合同与 Adapter 组合 |
| 开发 / AI 工程师 | 运行 Engine 或校验 Protocol Schema |
| 行业 / 知识专家 | 将一个领域冲突映射成 CASE 与 Knowledge Pack |
| 测试 / 风控 / 合规 | 检查 Evidence、Audit、Replay 和状态边界 |
| 开源贡献者 | 改进 Issue、RFC、CASE、Schema、Adapter、Skill 或证据边界 |

## 本页不能证明什么

本页不能证明整个体系已经生产就绪、四条轨道已经完成生产级贯通、已经形成跨组织协议网络或成熟 Skill 生态，也不能证明具名客户部署、监管批准或法律权威。

所有精确声明仍应通过 Release、Tag、测试、CI 与 Evidence 验证。

