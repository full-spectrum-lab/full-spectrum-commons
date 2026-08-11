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

## 可复用的跨行业模型

四条轨道说明工程职责；更完整的扩展模型说明同一套职责如何跨越主体、组织和行业：

```text
Engine/主体纵轴 对人 → Agent/工具 → 团队/系统 → 组织 → 跨组织网络进行可复算判断
知识横轴      行业材料 → 精确版本 → Knowledge Pack → CASE / Skill
Protocol 网络 谁可以行动 → 能力 → 边界 → 授权 → 证据 → 责任
行业扩展      Core Contracts + Knowledge Pack + CASE + Adapter + Skill + Evidence
```

这些轴与网络彼此补充：Engine 把可复算判断贯穿不同主体层级，主体提供责任锚点，知识提供精确判断上下文，Protocol 显式表达关系与边界，Observer 让每个交叉点可观察、可留证、可审计、可复核，CASE、Pack、Adapter 和 Skill 提供行业化入口与执行封装。

这套模型可以用于工业、电商、支付、多 Agent、跨组织数据共享等不同领域，而不需要把行业专属规则写进产品 Core。

## 同一套系统：单组织价值与网络价值

全频谱是一套共享治理不变量、契约、证据语义和责任边界的完整治理系统，各条轨道可以独立部署；它不是彼此无关、只有拼装后才产生价值的零件集合。

### 单个组织

单个组织不加入外部网络，也可以运行本地节点：

```text
授权事实 → Observe → 确定性判断 → Gate / 人工复核 → 组织自己的系统执行
```

本地价值是一条受治理、可回放的判断链。全频谱不替换组织的 ERP、CRM、Agent Runtime、工作流、数据库或控制系统。

### 多个组织

当多个组织通过兼容 Protocol 的事件和回执连接后，价值不再只是零件相加，而是形成关系网络：

```text
组织 A 意图
  → 身份 / 能力 / 边界 / 证据 / 授权
  → 治理事件
  → 组织 B 的 Gate
  → B 自己的系统执行
  → Disposition Receipt
  → 共享审计与回放引用
```

每个组织保留自己的数据、系统和最终行动权。参与的企业、组织、公共机构或国家级参与方自己建设和运营网络；全频谱提供建网方法、契约、节点模式以及 Engine/Observer 能力。网络获得的是共享、可验证的治理记忆，而不是一个集中式自动大脑；它的成熟智能来自参与组织累积的精确知识、证据、判断、回执和可回放历史。

### 两种能力模式，一种成熟组合

- **Observe 模式**：记录事实、进行判断、生成 Evidence/Audit/Replay，并支持有边界的人工复核。
- **Govern 模式**：为组织自己的系统输出有作用域的 `ALLOW`、`DENY`、`REQUIRE_HUMAN_REVIEW` 或 `UNKNOWN` Gate，由组织系统执行。
- **成熟组合**：在多个组织之间组合 Observe 与 Govern，并用累积证据比较受约束的候选路径。它不是独立的第三种产品代际，也不代表全局最优或自主执行。

Observe、Gate 与网络行为是否可用，必须以对应产品的 Release、精确版本、测试和 Evidence 为准；本架构模型不能把规划能力升级为已实现事实。

第二代方向是由参与方运行协议节点 / Protocol Executor，调用 Engine 与 Observer 形成治理 Gate 和受约束优化；现实动作仍由各参与方自己的系统执行。全频谱不运营业务工作流，也不拥有参与方自行组建的网络。

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
PUBLIC_GITHUB_STATUS  = SCAFFOLDED
LOCAL_CASEKIT_STATUS  = LOCAL_REFERENCE_IMPLEMENTATION
FRESH_CLONE_PROOF     = NOT_PROVEN
PRODUCTION_VALIDATION = NO
NAMED_CUSTOMER        = NO
FOUR_TRACK_E2E_PROOF  = NOT_YET_COMPLETE
```

[当前四轨道证据矩阵](https://github.com/full-spectrum-lab/full-spectrum-enterprise-governance/blob/main/cases/industrial-observer-diox/FOUR_TRACK_EVIDENCE_MATRIX.md)已经区分 GitHub 公开 Scaffold 与 QPP 记录的本地 R01/R02 参考 Case Kit。近期下一步是 DID-X v0.2 Case Kit 基线可信化；Observer、Engine 组合与 Knowledge Governance 集成仍按后续版本分期进入，而不是为了说明架构再新建平行案例。

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
