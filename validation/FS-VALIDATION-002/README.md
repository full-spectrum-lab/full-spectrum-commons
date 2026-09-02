# FS-VALIDATION-002：双节点治理互操作验证

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
