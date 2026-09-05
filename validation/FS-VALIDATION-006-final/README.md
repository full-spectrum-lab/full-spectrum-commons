# FS-VALIDATION-006 最终归档

版本：`final`

项目类型：用户可独立上手的双机安全传输验证案例

状态：`ARCHIVED_WITH_LIMITATIONS`

事实基线：FS-VALIDATION-006 v0.4；ZIP SHA-256 `3266e2461c2acfcb94b14d692e7d3a0e4a01e8a3c199e6f31abbb6547e4d6031`

本归档不是 `full-spectrum-observer` 正式产品包，不证明 Observer 自身业务联网或生产就绪。

## 公开下载与校验

本目录随 `full-spectrum-commons` GitHub 仓库公开发布。下载 ZIP 后，在仓库根目录执行：

```text
Get-FileHash .\validation\FS-VALIDATION-006-final\FS-VALIDATION-006-v0.4.zip -Algorithm SHA256
```

期望值：

```text
3266e2461c2acfcb94b14d692e7d3a0e4a01e8a3c199e6f31abbb6547e4d6031
```

也可直接查看仓库中的 [FS-VALIDATION-006-v0.4.zip](https://github.com/full-spectrum-lab/full-spectrum-commons/blob/main/validation/FS-VALIDATION-006-final/FS-VALIDATION-006-v0.4.zip)。大文件下载受 GitHub 策略影响时，以本目录的 GitHub 文件页及 `SHA256SUMS.txt` 为准；不得从非本目录来源补入证书或私钥。

## 已回答的原始问题

在受控的两台 Windows 主机环境中，能否通过指定防火墙和 TLS/mTLS 建立安全连接，并在关键错误下安全拒绝？答案为：核心场景已获得 PASS 证据。

## 核心结果

```text
真实跨主机 TCP/TLS/mTLS = PASS
R01 错误 CA = PASS
R02 过期客户端证书 = PASS
R04 错误主机名 = PASS
R09 篡改 node_id = PASS
R10 服务端停止 = PASS
```

## 未完成项目

```text
R03、R05-R15 完整矩阵 = 后续安全回归
KEY_ROTATION_EXECUTED = NOT_EXECUTED
REPLAY_ATTACK_EXECUTED = NOT_EXECUTED
OBSERVER_BUSINESS_MESSAGE_E2E = NOT_EXECUTED
overall = UNKNOWN
PRODUCTION_READY = NO
```

## 交付内容

- 用户操作、两台主机操作、证书、防火墙、启动停止、结果样例、排障和清理说明：见 QPP Wiki `35_系统交付物来源与演化/04_完全上手案例/`。
- v0.4 独立复核报告和脱敏证据索引：见本归档的 `evidence-index.md`。
- 原始私钥、真实证书和内网凭据不进入 GitHub。
