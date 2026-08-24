# Full Spectrum 知识来源与版本政策

创建时间：2026-08-24 22:13（北京时间，UTC+8）

最后更新时间：2026-08-24 22:13（北京时间，UTC+8）

状态：`POLICY_DRAFT / OWNER_REVIEW_REQUIRED`

## 1. 固定版和灵活版

固定版是可用于公共正式分析的知识依据，必须有精确版本、来源、适用地区、摘要、许可证、冲突、发布时间和撤销关系。

灵活版是研究或预览材料，必须标记 `DRAFT` 或 `UNVERIFIED`，默认不能作为正式销售决策依据。

## 2. 每条知识至少记录

```text
knowledge_id
knowledge_version
knowledge_status
source_refs
source_snapshot_time
applicable_region
license_or_reuse_basis
resolution_digest
known_limitations
```

## 3. 公开源边界

公开可访问不等于可以无限复制。社区和照颖科技应优先保存结构化摘要、必要引用和来源指针，并遵守网站条款、许可证、版权和访问频率限制。

## 4. 企业私有知识

企业私有知识只能在目标 Observer Service 的授权范围内使用，不因公共 Skill、社区贡献或公共 Pack 发布而自动公开。

## 5. 撤销和回放

知识失效、来源撤回或发现错误时，发布撤销/替代记录。历史分析保留原知识版本和摘要，以便回放，不静默替换历史结果。

## 6. 责任边界

公共知识维护者负责记录来源和版本，不承诺内容构成法律意见、监管认证或商业成功保证。高风险或知识冲突场景必须输出 `UNKNOWN`、`EVIDENCE_INCOMPLETE` 或人工复核要求。
