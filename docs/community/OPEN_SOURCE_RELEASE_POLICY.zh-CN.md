# Full Spectrum 开源发布政策

创建时间：2026-08-24 22:13（北京时间，UTC+8）

最后更新时间：2026-08-24 22:13（北京时间，UTC+8）

状态：`POLICY_DRAFT / OWNER_REVIEW_REQUIRED`

## 1. 发布对象

开源发布可以包含：

- Skill 核心和平台适配器；
- Observer Service 可自部署包；
- 公共 Schema、测试和部署脚本；
- 公开固定 Knowledge Pack；
- 文档、示例和证据索引。

## 2. 不得随包发布

- 云端密钥和内部 Token；
- 企业私有知识和客户数据；
- 未授权转载的完整网页或数据库；
- 本机绝对路径和内部工作树；
- 生产环境配置和管理员凭据；
- 未经核验的客户采用或合规声明。

## 3. 发布前门禁

```ini
SOURCE_AND_LICENSE_SCAN = PASS
SECRET_SCAN = PASS
PERSONAL_DATA_SCAN = PASS
REPRODUCIBLE_TESTS = PASS_OR_LIMITATION_RECORDED
PACK_DIGEST = RECORDED
RELEASE_IDENTITY = RECORDED
KNOWN_LIMITATIONS = PUBLISHED
SECURITY_CONTACT = PUBLISHED
```

## 4. 版本和撤销

公共 Skill、Observer Service、Engine 和 Knowledge Pack 使用独立版本。知识撤销、服务端点迁移和安全修复必须分别发布变更说明，不覆盖历史版本事实。

## 5. 社区移交

照颖科技代运营期间可发布候选版本，但开源仓库必须明确记录实际运营主体。社区具备维护条件后，按《归属与移交政策》完成接管，不能静默转移服务责任。
