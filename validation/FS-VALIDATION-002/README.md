# FS-VALIDATION-002：双节点治理互操作验证

**交付类型：`EXECUTABLE DECLARATIVE PROTOTYPE / DECLARATIVE_STUB`**

本运行器使用声明式预设结果验证交付结构、输出格式和可重复性，不是完整的双节点治理模拟，也不测量真实治理效果。

文档编号：`VALIDATION-002-00`

主要作者：Codex

复核作者：PENDING

创建时间：2026-09-02 04:12（北京时间，UTC+8）

最后更新时间：2026-09-02 04:12（北京时间，UTC+8）

文档状态：`IN_REVIEW`

事实基线：Commons 提交 `1dc64e9`

批准人：PENDING

验证状态：`EXPERIMENTAL / NOT INDEPENDENTLY VERIFIED`

本案例把 FS-RESEARCH-002 转化为一个可运行的最小实验。它使用 Python 标准库，不代表 Protocol、Engine、Knowledge Governance 或 Observer 已被整合。

## 运行

```text
python runner/run_validation.py
```

运行器会执行三组条件：

- A：无治理互操作；
- B：各自局部治理；
- C：交换最小治理语义。

结果写入 `results/validation-result.json`，并包含边界识别、证据完整性、责任定位和人类复核四个维度。实验允许 `PASS`、`FAIL`、`UNKNOWN`，不压缩为单一总分。

本案例是验证包，不是生产安装包，也不包含 AI 模型、网络访问或现实业务执行权限。

验证包清单：`VALIDATION-MANIFEST.yml`。运行结果的 SHA-256 记录在 `results/RESULT-SHA256.txt`。
