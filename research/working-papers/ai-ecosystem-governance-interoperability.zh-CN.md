# AI 生态分化时代的治理互操作

## 从“生态选边”到“协议网络”

```ini
DOCUMENT_ID = FS-GI-001
DOCUMENT_TYPE = STRATEGIC_RESEARCH_NOTE
DOCUMENT_STATUS = PUBLIC_REVIEW_DRAFT
LANGUAGE = zh-CN
NORMATIVE = NO
PEER_REVIEWED = NO
PUBLIC_REVIEW = YES
EVIDENCE_SNAPSHOT = 2026-08-23
IMPLEMENTATION_CLAIM = BOUNDED
```

> 本文是一份非规范性战略研究注记。它讨论治理互操作的概念、工程入口和可证伪边界，不构成协议规范、产品能力承诺、政策判断、法律意见或生产就绪声明。规范性定义以相应仓库的 RFC、Schema 和固定版本为准。

---

## 0. 阅读入口

- **政策与战略读者**：先读摘要、第 1、3、11、16 节。
- **协议与架构读者**：先读第 4、5、12 节。
- **工程与审计读者**：先读第 6 至 10 节，以及第 13、14 节。
- **首次接触 Full Spectrum 的读者**：先记住一条边界：本文讨论的是一种工程研究方向，不是一个已经建成的全球治理网络。

本文使用以下证据状态：

| 状态 | 含义 |
| --- | --- |
| `IMPLEMENTED_LOCAL_SCOPE` | 固定版本中存在代码、Schema、测试或可运行资产，但结论只覆盖其本地或明确限定范围 |
| `PUBLIC_DRAFT` | 已公开的 RFC、Schema、示例或架构草案；公开不等于稳定、部署或互认 |
| `PARTIAL_RELEASE_SPECIFIC` | 部分能力已有特定候选版本或发布记录，不能外推为完整系统能力 |
| `DESIGNED` | 已有公开架构或研究描述，但不据此推断运行时实现 |
| `NOT_VERIFIED` | 缺少足以支持相应集成、规模或生产主张的公开证据 |
| `RESEARCH_DIRECTION` | 研究假设或未来方向，当前不得表述为已实现 |

---

## 摘要

2026 年 8 月，围绕 AI 合作机制、生态归属和“选边”的公共讨论，为一个长期存在但尚未被充分工程化的问题提供了现实触发点。据路透社 2026 年 8 月 14 日报道，其审阅的一份美国国务院内部信函草案拟要求相关参与方不得同时加入与美方倡议预期相冲突的机制；路透社同时明确指出，该草案未注明日期，发送时间及最终内容尚未确定。8 月 19 日，中国外交部发言人林剑在记者会上回应称，反对在人工智能问题上搞选边站队、阵营对抗。

本文不把上述内部草案视为已正式发布的政策文本，也不把任何一方表态作为架构结论。它提出的问题是：当不同国家、行业、平台和组织采用不同模型、知识体系、身份体系与治理规则时，它们之间是否只能完全隔离或全面统一？

本文提出第三种研究方向：**治理互操作（Governance Interoperability）**。

治理互操作不要求各方采用同一模型、同一价值体系、同一知识库或同一治理平台。它要求的是：当两个自治主体发生跨边界关系时，相关的身份、代表关系、能力、授权、边界、知识上下文、行为、证据、责任和审计状态，能够以最小必要方式被描述、验证和复核。

这一定义与技术互操作不同。API 解决“能不能连接”，治理互操作解决“连接后谁能以什么身份、在什么授权与知识边界内做什么，产生什么证据，出现争议后谁负责、如何复核”。

Full Spectrum 的公开仓库已经提供若干局部工程支点：Protocol 中的身份、能力、审计与跨企业记录草案；Knowledge Governance 中的知识身份、精确版本、来源、生命周期、冲突与回放；Engine 中的本地确定性计算与审计对象；Observer 中的观察、证据、审计、回放和有限人工复核；Enterprise Governance 中的合成案例与非侵入式部署路径。这些支点尚不能证明跨国家、跨生态或大规模 Protocol Network 已经运行。

因此，本文的核心主张是有限的：

> **AI 生态可以保持差异；跨生态关系仍可以通过最小共享治理语义、可验证证据和明确责任边界获得有限互操作。**

这是一项可检验的架构假设，而不是已完成的现实。

---

## 1. 从模型竞争到治理边界竞争

路透社报道所描述的美国国务院内部草案，涉及人工智能合作机制之间可能出现的排他性参与条件。一名不具名美国官员将其解释为：一个国家难以同时成为一个技术生态的可信伙伴，又加入由中国推动、旨在推进另一种 AI 愿景的倡议。这里必须保留三层证据边界：路透社取得并审阅的是内部草案；匿名官员的解释不是公开政策原文；草案是否发送、何时发送及最终措辞均未确定。中国外交部 8 月 19 日回应则可由中新网完整问答和新华社报道交叉核对。

因此，本文借用的是这一事件暴露出的结构性问题，而不是替任何国家判断政策意图或合法性。

过去的 AI 竞争通常围绕以下对象展开：

- 模型能力与推理质量；
- 算力、芯片与基础设施；
- 数据与知识资源；
- 开发工具、Agent 和应用生态；
- 开源、闭源与商业平台。

当讨论进一步触及“一个主体能否同时参与不同 AI 生态”时，竞争对象便不再只是技术资源，也包括：

- 身份属于哪个信任域；
- 能力由谁声明和验证；
- 授权在哪个边界内有效；
- 知识能否跨域访问、摘要或复用；
- 行为证据能否被另一方接受；
- 责任记录能否跨组织比较；
- 争议由谁复核，以及复核结果适用于哪里。

这并不证明世界必然走向封闭阵营，也不预设任何国家或平台的最终政策。它只揭示一个结构性问题：

> **“生态归属”可能逐渐成为独立于模型能力之外的治理变量。**

现实组织往往同时处于多个网络之中。企业可能使用不同地区的模型、向多个市场提供服务、接受不同监管要求，并与供应商、客户、审计方和公共机构共享有限信息。要求这些关系全部归入单一 AI 生态，未必符合现实组织的多重关系结构。

因此，更实际的问题不是“世界最终只能选择哪个 AI”，而是：

> **当不同 AI 生态之间确实存在业务、知识、责任或审计关系时，如何在不抹平差异的前提下管理这些关系？**

---

## 2. 技术互操作不等于治理互操作

传统技术互操作主要回答：

```text
System A
   │ API / message / file
   ▼
System B
```

双方能否交换数据、调用服务和解析格式，是必要问题，但不是完整的治理问题。

当一个 Agent 调用另一组织的 AI 服务时，至少还可能需要回答：

| 治理问题 | 最小含义 |
| --- | --- |
| Identity | 谁在发起请求？身份声明由谁提供？ |
| Representation | 它代表自己、用户、企业还是其他主体？ |
| Capability | 它声明能做什么？哪些能力已经验证？ |
| Authorization | 谁授权？授权目的、期限和范围是什么？ |
| Boundary | 什么明确禁止？触边后如何降级或停止？ |
| Knowledge Context | 使用了什么知识版本、来源和适用条件？ |
| Evidence | 行为、输入、判断和结果留下了什么证据？ |
| Responsibility | 谁接受、共享、否认或争议责任？ |
| Audit and Review | 事后能否重建路径？何时需要人工复核？ |

因此：

> **技术互操作解决连接，治理互操作约束连接所形成的关系。**

二者不应混为一谈。一个 API 调用成功，不等于调用获得了有效授权；一个身份声明存在，不等于法律身份已被证明；一份审计记录可读，也不等于各方已经接受同一责任结论。

---

## 3. 治理互操作不等于治理统一

治理统一追求同一套规则、平台或权威：

```text
Different actors
      ↓
Same rule / same platform / same authority
```

治理互操作允许各方继续自治：

```text
Organization A                  Organization B
Own governance                 Own governance
       │                              │
       └──── minimum shared contract ─┘
```

它不要求各方对所有价值判断达成一致，只要求对一次具体跨边界关系形成足够明确的共同语义，例如：

- 如何识别参与者；
- 哪些能力与限制需要声明；
- 哪些授权可以验证；
- 哪些证据可以共享，哪些只能保留引用；
- 哪些结果仅在本地有效；
- 哪些分歧必须保留为分歧；
- 哪些情况需要拒绝、暂停或转人工处理。

可以将其概括为：

```text
Local autonomy
+ minimum shared semantics
+ verifiable evidence
+ bounded responsibility
= limited governance interoperability
```

这里的“有限”不是缺陷，而是边界纪律。治理互操作若被扩写为无限权限、统一真理或全局可见，反而会破坏自治、隐私和责任清晰度。

---

## 4. 治理互操作的最小对象集

本文提出一个研究性的最小对象集：

```text
Subject / Identity
Representation
Capability
Authorization
Boundary
Knowledge Context
Governance Event
Evidence
Responsibility Claim
Audit / Review State
```

这不是声称 Full Spectrum 当前存在一个覆盖全部对象的统一运行时。它是一张“跨边界关系需要回答什么”的问题地图。

现有公开 Protocol 已经提供若干可机器读取的局部对象：

- `IdentityClaim`；
- `CapabilityDeclaration`；
- `GovernanceEvent`；
- `CanonicalContext`；
- `RiskAlert`；
- `AuditTrace`；
- `ExternalEthicsProfile`；
- `CrossEnterpriseAuditRecord`。

这些 RFC、Schema 和示例证明的是：**部分治理语义已经被公开表达并可做结构校验**。它们不自动证明：

- 身份已由权威机构认证；
- 权限已被现实系统执行；
- 两个独立网络已经在线互认；
- 跨境数据处理已经合法；
- 责任争议已经获得法律结论；
- 协议已成为行业或国际标准。

---

## 5. Protocol Network 的核心是边界，而不只是连接

一个 Protocol Network 如果只定义消息如何发送，仍然只是通信网络。治理网络还需要使参与者能够声明和复核：

```text
who
acts for whom
can do what
under whose authorization
within which boundary
using which knowledge context
leaving which evidence
with which responsibility state
```

因此，一个更克制的跨网络模型是：

```text
Network A                          Network B
local identity                    local identity
local knowledge                   local knowledge
local policy                      local policy
local evidence                    local evidence
      │                                │
      └──── agreed mapping/profile ────┘
                    │
          minimized shared record
```

互操作对象可以是字段映射、能力声明、审计摘要、证据引用或责任状态，而不必是原始数据、完整知识库或内部策略全文。

Full Spectrum Protocol 的 RFC 0005 和 RFC 0006 为这种思路提供了公开草案：外部节点可以声明可映射的身份、能力、审计、风险与责任机制；跨企业审计记录可以承载参与者、风险、审计轨迹、责任主张和证据引用。二者目前都应按 `PUBLIC_DRAFT` 阅读，不能写成已经完成跨网络运行验证。

---

## 6. 知识互操作首先是知识边界问题

知识不是无上下文的数据。一个可用于治理的知识对象至少可能涉及：

```text
Identity
Exact version
Content digest
Provenance
Lifecycle
Scope
Applicability
Conflict state
Evidence
```

这意味着跨组织“共享知识”不应自动等于复制原始材料。现实中可能需要的政策结果包括：

- 只证明某知识对象存在；
- 只共享内容摘要或哈希；
- 只允许使用固定版本；
- 只返回在本地计算后的结果；
- 要求人工复核后再使用；
- 因来源、版本或证据不足而拒绝；
- 保留为 `UNKNOWN`。

上述政策结果是本文的架构示例，不应被误写成 Knowledge Governance `v0.1.0-alpha` 已全部实现的授权语言。

当前公开 Knowledge Governance 候选版本支持的核心边界更窄：知识身份、精确版本、来源、生命周期、冲突、审计、回放和 `FIXED_ONLY` 失败关闭解析。它明确不包含动态知识获取、LLM、向量数据库、Skill Runtime、Observer/Engine Adapter 或生产授权。

因此，Knowledge Governance 对治理互操作的当前价值是提供**知识证据的本地确定性基底**，而不是宣称已经建成大规模跨生态知识交换网络。

---

## 7. Engine：治理计算需要可复现，但可复现不等于正确无误

跨边界关系若只留下自然语言结论，后续很难区分：

- 输入变化；
- 规则变化；
- Profile 变化；
- 随机性变化；
- 实现错误；
- 解释漂移。

因此，本地治理计算需要尽可能形成：

```text
fixed input
+ fixed schema/profile/rules
+ fixed implementation version
+ fixed seed where applicable
        ↓
reproducible output
+ evidence / audit reference
```

Engine `v1.5.0` 的公开固定版本为这种本地确定性评价提供了工程证据，包括结构化状态、风险对象、治理链、审计与回放相关路径，以及固定种子和回归测试。

但必须保留三条边界：

1. **可复现不等于价值判断天然正确。** 错误规则也可以稳定地产生错误结果。
2. **本地确定性不等于跨网络共识。** 两个组织仍可能使用不同 Profile、规则和证据。
3. **评价不等于执行授权。** Engine 不应被描述为替企业、监管者或法院执行最终行动。

因此，Engine 在本文中的位置是 `IMPLEMENTED_LOCAL_SCOPE`，不是“全球治理裁决器”。

---

## 8. Observer：从人盯住每一步，转向人监督可见边界

随着 AI 执行链变长，人类很难逐项理解和批准每一个内部步骤。可行的治理目标不应是“人类理解一切”，而应是保持对关键边界的监督能力：

```text
AI-related activity
        ↓
observation / evidence capture
        ↓
audit / replay / boundary visibility
        ↓
bounded human review
```

人需要能够回答：

- 当前发生了什么；
- 使用了哪个版本的输入、规则和运行时；
- 哪些证据支持结果；
- 哪些信息仍然未知；
- 是否触及授权或数据边界；
- 是否需要暂停、补证或人工接管；
- 关闭后能否确认进程、锁和数据边界已经释放。

Observer 的公开 `v0.3.0-maintenance.6` 是一个 GitHub Pre-release 候选对象；其 Release 文本明确标注 `NOT_RELEASED / PRODUCTION_READY = NO`。因此，本文只将其作为特定 Windows 候选包中观察、证据、审计、回放、运行身份与有限人工复核路径的发布级支点，不把它外推为跨平台、生产级或跨生态 Observer 网络。

---

## 9. UNKNOWN 是必要的治理状态

跨组织和跨生态环境不可能保证证据始终完整。若证据不足时系统仍被迫给出 `PASS` 或确定结论，治理机制会奖励猜测。

更稳健的路径是：

```text
evidence insufficient
        ↓
UNKNOWN
        ↓
restrict / defer / request evidence
        ↓
human or accountable review
```

`UNKNOWN` 不应等同于“没有风险”，也不应自动等同于“拒绝一切”。它表达的是：当前证据不足以支持所请求的确定性结论。后续动作应由后果等级、最小必要原则、可逆性和明确授权共同决定。

Protocol 的 `CanonicalContext`、跨企业审计对象和风险规范已经公开表达未知项、未解决冲突或不确定性；Knowledge Governance 有失败关闭的固定解析路径；Engine 固定版本中存在 UNKNOWN 相关测试路径。这些是局部工程证据，不等于已经形成统一的跨生态 UNKNOWN 语义。

---

## 10. 跨企业案例：先形成共同记录，再讨论共同结论

Enterprise Governance 的 CASE004 提供了一个合成案例：电商平台、物流服务商、客服供应商和 AI 检查服务共同参与售后质量流程，各方拥有局部日志并对责任作出不同解释。

这个案例的关键并不是自动判定谁承担法律责任，而是先形成可复核的共同记录：

```text
local event and evidence references
        ↓
RiskAlert / AuditTrace
        ↓
CrossEnterpriseAuditRecord
        ↓
responsibility claims and disputes
        ↓
authorized human / organizational / legal review
```

治理互操作不必消灭分歧。它可以先让分歧变得结构化、可见和可追踪。

CASE004 的公开状态是合成示例。它证明一个跨企业审计包络可以被描述，不证明多家现实企业已经部署、接受或依法使用该包络。

---

## 11. Full Spectrum 不应成为“第三个 AI 阵营”

Full Spectrum 不是：

- 基础模型；
- AI 云平台；
- Agent OS；
- 全球身份权威；
- 法律或监管裁决机构；
- 要求所有组织加入的中心网络；
- 中美之外的“第三个 AI 阵营”。

它所提出的更窄问题是：

> **当不同 AI、组织和知识体系发生关系时，能否形成可描述、可验证、可观察、可审计且责任有界的治理关系？**

这要求 Full Spectrum 长期保持协议中立与证据克制：

- 不要求外部主体接受完整内部哲学叙事；
- 不把兼容声明等同于认证；
- 不把本地评价等同于外部授权；
- 不把共享审计字段等同于统一法律结论；
- 不把研究图景包装成部署事实；
- 不以“互操作”为名要求无限数据访问。

---

## 12. 当前公开工程支点与保真边界

截至 2026 年 8 月 23 日，公开证据可以支持以下分层判断：

| 工程层 | 当前可支持的最窄主张 | 状态 | 不能据此声称 |
| --- | --- | --- | --- |
| Commons | 有公共术语、架构、研究入口和证据边界 | `IMPLEMENTED_LOCAL_SCOPE` | Commons 是规范源或运行时 |
| Protocol | 身份、能力、事件、风险、审计、外部节点和跨企业记录已有 RFC/Schema/示例 | `PUBLIC_DRAFT` | 实时 Protocol Network 已运行或成为标准 |
| Knowledge Governance | 固定知识的身份、精确版本、来源、生命周期、冲突、审计与回放已有 Alpha 候选 | `PARTIAL_RELEASE_SPECIFIC` | 动态跨生态知识授权或生产部署已完成 |
| Engine | 固定 `v1.5.0` 提供本地可复现评价、治理链、审计与企业试点候选支点 | `IMPLEMENTED_LOCAL_SCOPE` | 自动业务执行、跨组织网络或生产完整性 |
| Observer | `v0.3.0-maintenance.6` 公开 Pre-release 候选提供特定发布路径与证据链支点 | `PARTIAL_RELEASE_SPECIFIC / PRERELEASE_CANDIDATE / NOT_RELEASED / PRODUCTION_READY=NO` | 正式发布、跨平台生产就绪或全局观察 |
| Enterprise Governance | 有合成/脱敏案例、人工复核与非侵入部署路径 | `DESIGNED` / fixture-validated | 具名企业生产验证或法律效力 |
| 跨生态 Protocol Network | 有架构方向和局部对象 | `NOT_VERIFIED` | 大规模实时互认、共同责任执行 |
| 国家级或跨国治理网络 | 仅属战略研究问题 | `RESEARCH_DIRECTION` | 已建设、已授权或已验证 |

这里的关键不是把所有层都判为“完成”，而是说明它们如何构成一条可逐步验证的工程路径。

---

## 13. 互操作可能失败的地方

治理互操作不是天然正面。至少需要主动检验以下反例：

### 13.1 语义相同，含义不同

两个网络都使用 `authorized`，但一个表示“企业内部流程允许”，另一个表示“法定监管许可”。字段名一致会制造虚假互认。

### 13.2 身份可验证，代表关系不可验证

Agent 的技术身份真实，不代表它确实有权代表某用户、企业或公共机构。

### 13.3 证据可交换，但证据质量不可比较

一方提供完整时间链，另一方只提供自述摘要。统一包络不应掩盖证据等级差异。

### 13.4 可复现地产生错误结果

固定输入和规则可以稳定复现，但规则本身可能偏置、过时或不适用于当前场景。

### 13.5 互操作扩大监控

为了审计而过度集中日志、提示词、身份和行为数据，可能把治理基础设施变成跨域监控基础设施。

### 13.6 责任被协议洗白

组织可能用“系统兼容”或“AI 建议”转移自身决策责任。共享记录必须保留采用、授权和执行主体。

### 13.7 UNKNOWN 被滥用

系统可能用 `UNKNOWN` 逃避应承担的调查义务，也可能把 `UNKNOWN` 一律当作高风险拒绝，形成不成比例的限制。

### 13.8 最弱节点拖低整体边界

若跨网络映射默认信任最弱的身份、审计或证据标准，高后果操作会被低门槛兼容绕过。

这些反例说明，互操作必须与后果分级、最小披露、可撤销授权、证据等级、独立复核和退出机制共同设计。

---

## 14. 可证伪条件与研究问题

本文的架构假设不能只靠概念自洽。至少应接受以下检验：

1. **语义映射检验**：两个使用不同内部模型的组织，能否在不共享内部规则全文的情况下，对一组最小治理对象达成无歧义映射？
2. **最小披露检验**：跨组织审计能否只共享摘要、哈希和引用，同时仍支持责任复核？
3. **冲突保真检验**：当各方责任主张冲突时，协议能否保留分歧而不是强制生成虚假单一结论？
4. **UNKNOWN 检验**：证据不足时，系统能否稳定进入限制、补证或人工复核路径，而不是猜测通过？
5. **撤销检验**：授权撤销后，后续请求能否停止，既有记录能否保留合法审计而不继续扩散权限？
6. **回放检验**：固定版本、输入、Profile 和证据能否复现相同结果，并明确标出外部依赖？
7. **异构实现检验**：非 Full Spectrum 实现能否通过公开 Schema 和映射形成兼容记录，而无需采用 Full Spectrum 内部全部技术栈？
8. **责任不逃逸检验**：引入 Agent、模型和外部工具后，采用决策与业务执行责任是否仍能定位到可问责主体？
9. **隐私反例检验**：互操作记录能否避免不必要地复制原始敏感数据？
10. **规模检验**：局部两方映射在多方、跨法域和版本演进场景中是否仍可管理？

若这些检验长期失败，治理互操作就可能只是另一种架构修辞，而不是可行的工程方向。

---

## 15. 一条更现实的演进路径

不应从“全球治理网络”开始。更可验证的顺序是：

```text
Stage 0  单组织、本地、只读观察
   ↓
Stage 1  固定输入、规则、证据和回放
   ↓
Stage 2  组织内身份、能力、授权与人工复核
   ↓
Stage 3  两个组织之间的合成或脱敏记录映射
   ↓
Stage 4  有限、可撤销、最小披露的真实试点
   ↓
Stage 5  多方协议演进、争议处理和兼容性治理
```

每一阶段都应有独立退出条件。上一阶段未形成证据，不应通过更宏大的叙述跳到下一阶段。

---

## 16. 当前边界

### 16.1 已有公开工程支点

- 治理对象的 RFC、Schema 和示例；
- 本地确定性评价与固定版本回放路径；
- 固定知识身份、版本、来源和生命周期；
- 风险、审计、证据和责任声明对象；
- Observer 候选包与有限人工复核路径；
- 合成或脱敏企业案例；
- 外部兼容节点与跨企业审计的公开草案。

### 16.2 尚未由公开证据建立

- 大规模跨组织 Protocol Network；
- 两个独立 AI 生态的实时互操作运行；
- 国家级 AI 治理网络；
- 跨国实时治理基础设施；
- 生产级跨网络知识授权；
- 跨法域责任自动互认；
- 统一认证机构或法律效力；
- 对任一现实国家政策的技术替代方案。

### 16.3 现实事件来源边界

原稿以 2026 年 8 月有关 AI 生态“选边”的报道及回应为现实触发材料。本轮已取得并核对路透社报道、中新网完整记者会问答和新华社交叉报道。可公开支持的最窄事实是：路透社审阅了一份美国国务院内部信函草案，草案拟对相互冲突机制的重复参与作出限制；一名不具名美国官员提供了“不能两边都要”的解释；中国外交部发言人随后公开回应反对选边站队和阵营对抗。

证据边界仍然存在：美国函件公开一手全文尚未取得，草案未注明日期，路透社无法确认其发送时间、是否发送以及最终内容是否修改；美国国务院拒绝评论“据称泄露的内部文件”。因此本文只采用带路透社归因和“内部草案”状态的写法，不把媒体报道改写成已生效的美国政策，也不把匿名官员解释写成公开文件原话。该事件不是本文架构论证成立的必要前提。

---

## 17. 结论

AI 生态进一步分化时，现实世界不一定只有“统一”或“对抗”两个选项。还可以研究第三种路径：

```text
autonomy
+ explicit boundary
+ minimum shared semantics
+ verifiable evidence
+ bounded responsibility
= governance interoperability
```

不同国家、行业、集团、企业和 Agent 网络可以保留自己的模型、知识、规则、权限与治理制度。只有在确实发生跨边界关系时，才对必要对象建立有限协议。

这条路径的价值不在于保证各方达成同一结论，而在于使它们能够准确知道：

- 谁在行动；
- 代表谁行动；
- 能做什么、不能做什么；
- 获得了什么授权；
- 使用了什么知识与版本；
- 做了什么；
- 留下了什么证据；
- 哪些信息仍然未知；
- 出现争议时谁作出何种责任主张；
- 后续如何复核、撤销、暂停或人工接管。

Full Spectrum 对这一方向的当前贡献是若干公开、可检查、边界明确的局部工程支点，而不是一个已经完成的全球系统。

> **不是让所有 AI 变得一样，而是让不同 AI 在保持边界的情况下，仍能形成可验证、可审计、可撤销的有限治理关系。**

---

## 18. 公开证据锚点

以下链接用于说明本文写作时的公开事实边界。固定版本优先于默认分支，代码、Schema、测试与 Release 记录优先于架构图和研究叙述。

1. [Full Spectrum Commons @ `17d86e03`](https://github.com/full-spectrum-lab/full-spectrum-commons/tree/17d86e03d106cf7b8d8843d44821ffdb05098abd)
2. [Evidence and Project Status](https://github.com/full-spectrum-lab/full-spectrum-commons/blob/17d86e03d106cf7b8d8843d44821ffdb05098abd/docs/evidence-and-status.md)
3. [Holographic Governance Architecture Fact Baseline](https://github.com/full-spectrum-lab/full-spectrum-commons/blob/17d86e03d106cf7b8d8843d44821ffdb05098abd/docs/holographic-governance-architecture-fact-baseline.md)
4. [Full Spectrum Protocol @ `eaeb02b4`](https://github.com/full-spectrum-lab/full-spectrum-protocol/tree/eaeb02b4dd87af95d44320e606924c4ee03190e9)
5. [RFC 0002: Identity and Capability Declaration](https://github.com/full-spectrum-lab/full-spectrum-protocol/blob/eaeb02b4dd87af95d44320e606924c4ee03190e9/rfcs/0002-identity-and-capability-declaration.md)
6. [RFC 0005: Node Classification and External Ethics Profile](https://github.com/full-spectrum-lab/full-spectrum-protocol/blob/eaeb02b4dd87af95d44320e606924c4ee03190e9/rfcs/0005-node-classification-and-external-ethics-profile.md)
7. [RFC 0006: Cross-Enterprise Audit Record Profile](https://github.com/full-spectrum-lab/full-spectrum-protocol/blob/eaeb02b4dd87af95d44320e606924c4ee03190e9/rfcs/0006-cross-enterprise-audit-record.md)
8. [Engine `v1.5.0`](https://github.com/full-spectrum-lab/full-spectrum-engine/releases/tag/v1.5.0), fixed commit [`ab9939b2`](https://github.com/full-spectrum-lab/full-spectrum-engine/tree/ab9939b2aaf2a921b6ae6e7a6af5d34cd07af424)
9. [Knowledge Governance `v0.1.0-alpha`](https://github.com/full-spectrum-lab/full-spectrum-knowledge-governance/releases/tag/v0.1.0-alpha), fixed commit [`afe0a6a6`](https://github.com/full-spectrum-lab/full-spectrum-knowledge-governance/tree/afe0a6a672b2008a6ba3aa048e6099f84bf5199f)
10. [Observer `v0.3.0-maintenance.6`](https://github.com/full-spectrum-lab/full-spectrum-observer/releases/tag/v0.3.0-maintenance.6), fixed commit [`df0b64c0`](https://github.com/full-spectrum-lab/full-spectrum-observer/tree/df0b64c064f6debd33b3a1a60f97f96287cd5dc8)
11. [Enterprise Governance @ `5cd89c9f`](https://github.com/full-spectrum-lab/full-spectrum-enterprise-governance/tree/5cd89c9ffa2487cb99aa1ad8c2a2795f01f5b19e)
12. [CASE004: Cross-Enterprise Data Sharing and Responsibility Boundary](https://github.com/full-spectrum-lab/full-spectrum-enterprise-governance/blob/5cd89c9ffa2487cb99aa1ad8c2a2795f01f5b19e/examples/synthetic-cases/CASE004_cross_enterprise_data_responsibility_boundary.md)
13. [Reuters: US to tell partners they must pick sides in AI race with China](https://www.reuters.com/world/china/us-tell-partners-they-must-pick-sides-ai-race-with-china-2026-08-14/)
14. [中新网：中方坚决反对在人工智能问题上搞选边站队、阵营对抗](https://www.chinanews.com.cn/gn/2026/08-19/10680380.shtml)
15. [新华网：外交部坚决反对在人工智能问题上搞选边站队](https://www3.xinhuanet.com/20260819/f27849212a2d485f9731137e71758c3c/c.html)

---

## 19. 审阅旗标

```ini
PUBLIC_EVENT_SOURCE_CHAIN = VERIFIED_WITH_ATTRIBUTION_AND_DRAFT_STATUS
PROTOCOL_OBJECTS = PUBLIC_DRAFT
ENGINE_DETERMINISTIC_LOCAL_SCOPE = IMPLEMENTED_AT_V1_5_0
KNOWLEDGE_GOVERNANCE = PARTIAL_RELEASE_SPECIFIC
OBSERVER_RELEASE_SCOPE = PRERELEASE_CANDIDATE_NOT_PRODUCTION_READY
ENTERPRISE_CASES = SYNTHETIC_OR_DESENSITIZED
CROSS_NETWORK_RUNTIME = NOT_VERIFIED
NATIONAL_OR_TRANSNATIONAL_NETWORK = RESEARCH_DIRECTION
OVERCLAIM_GUARD = ENABLED
PUBLICATION_DECISION = PUBLIC_REVIEW_DRAFT
```
