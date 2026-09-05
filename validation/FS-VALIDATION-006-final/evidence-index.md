# 证据索引

文档编号：`01`

主要作者：Codex

复核作者：WorkBuddy（分阶段独立复核）

创建时间：2026-09-05 12:00（北京时间，UTC+8）

最后更新时间：2026-09-05 12:00（北京时间，UTC+8）

文档状态：ARCHIVED_WITH_LIMITATIONS

事实基线：本地 `C:\obs-verify-evidence-hbg\fv006v04`；第二台 R01/R02/R04/R09/R10 证据；v0.4 ZIP SHA-256 `3266e2461c2acfcb94b14d692e7d3a0e4a01e8a3c199e6f31abbb6547e4d6031`

批准人：项目负责人（授权本次归档与同步）

## 脱敏证据

本页只登记证据类型、结论和原始证据所在受控目录，不复制私钥、临时证书、个人路径或完整内网运行日志。

| 证据 | 结论 |
|---|---|
| v0.4 ZIP 完整性 | PASS |
| 本地测试 12/12 | PASS |
| 真实跨主机 mTLS | PASS |
| R01 wrong CA | PASS |
| R02 expired client certificate | PASS |
| R04 wrong hostname | PASS |
| R09 node_id tamper | PASS |
| R10 server stopped | PASS |

## 边界

这些结果只证明受控测试环境中的独立验证工件行为，不证明 Observer 正式产品、业务消息端到端、密钥轮换、重放防护或生产部署。
