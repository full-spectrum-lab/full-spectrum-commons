# Full Spectrum 公共服务边界

创建时间：2026-08-24 22:13（北京时间，UTC+8）

最后更新时间：2026-08-24 22:13（北京时间，UTC+8）

状态：`PUBLIC_TECHNICAL_PREVIEW_POLICY / OWNER_REVIEW_REQUIRED`

## 1. 公共服务是什么

公共服务是由 Skill 市场入口访问的、免费、只读、面向公开固定知识的分析服务。第一阶段由照颖科技代运营，后期可迁移到 Full Spectrum 开源社区。

## 2. 公共服务不是什么

- 不是企业私有 Observer Service；
- 不是通用 SaaS 或无限容量平台；
- 不是自动销售执行系统；
- 不是法律、监管或产品认证服务；
- 不是跨组织 Protocol Network；
- 不是用户数据托管平台；
- 不是替代企业责任人的决策系统。

## 3. 公共访问边界

```ini
PUBLIC_SKILL_INSTALL = YES
PUBLIC_FIXED_PACKS = YES
PRIVATE_KNOWLEDGE = NO
USER_ACCOUNT = NOT_REQUIRED
PRODUCTION_WRITEBACK = OFF
RATE_LIMIT = REQUIRED
ANONYMOUS_USAGE_COUNTER = ALLOWED
```

公共 Skill 只能访问被批准的公共固定知识包。一个 Skill 被下载不代表获得企业 Observer、私有知识或管理权限。

## 4. 企业模式边界

企业 Skill 必须向目标 Observer Service 申请访问，由企业管理员接受、拒绝、限权和撤销。企业成员资格、知识范围和请求用途不因公共 Skill 安装而自动获得。

## 5. 状态语言

公共服务发布时必须使用：

```text
PUBLIC_TECHNICAL_PREVIEW
PRODUCTION_READY = NO
KNOWLEDGE_SCOPE = PUBLIC_FIXED_PACKS_ONLY
```

只有完成独立运行、数据保护、人工责任和退出证据后，才可由 Owner 决定是否升级为企业交付候选。
