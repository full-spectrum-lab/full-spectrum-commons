# 快速开始

本入口只提供本地离线体验。请先阅读主仓库和 FDE-TRIAL-001 的当前状态，再按发布版本运行。

## 当前可运行性声明

截至本页对应提交，公开入口正在等待四仓组合运行器和最终证据冻结。因此本页目前是**试跑准备和验收手册**，不是把尚未发布的命令伪装成可运行教程。

```ini
RUNTIME_PACKAGE = NOT_YET_PUBLISHED
FOUR_REPOSITORY_COMPOSITE_CI = NOT_EXECUTED
PASS_LOCAL_OFFLINE = NOT_CLAIMED
```

当 `RUNTIME_PACKAGE` 变为已发布值后，维护者必须在本节补入固定 tag/commit、依赖版本、实际命令、预期输出和证据入口；在此之前请不要提交“成功运行”的报告。

## 试跑前检查

1. 使用干净目录，不带入本机密钥、真实订单或真实客户数据。
2. 记录操作系统、运行时版本和本页对应的 commit/tag。
3. 确认运行模式是 `LOCAL_OFFLINE`，外部副作用为 `NONE`。
4. 阅读 [已知限制](KNOWN_LIMITATIONS.md)，不要把本地结果解读为生产能力。

## 试跑验收目标

正式运行包发布后，体验者应能观察到：

- 六份冻结输入被校验并形成无损投影；
- Engine 返回人工复核建议，而不是直接执行退款；
- KG 在动作前保存审计和人工决定；
- 未批准或持久化失败时产生 `NO_ACTION`；
- FakeActionSink 只产生本地模拟结果；
- SQLite 关闭重开后 Replay 摘要一致，篡改会被拒绝。

## 反馈格式

请在对应任务或 Issue 中记录：

```ini
OS =
RUNTIME_VERSION =
COMMIT_OR_TAG =
STEPS_ATTEMPTED =
EXPECTED_RESULT =
ACTUAL_RESULT =
BLOCKED_STEP =
LOG_OR_EVIDENCE_LINK =
```

不要上传密钥、个人敏感信息或真实业务数据。

## 体验者需要回答

1. 是否能在 10 分钟内理解输入、输出和人工复核点？
2. 是否能明确看到失败关闭和 `NO_ACTION`？
3. 是否能根据证据入口复核结果，而不是只看宣传文字？
4. 哪一步最容易误解或无法运行？
