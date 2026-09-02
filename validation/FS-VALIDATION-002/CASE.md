# CASE-X：跨节点订单建议

文档编号：`VALIDATION-002-01`

主要作者：Codex

复核作者：PENDING

创建时间：2026-09-02 04:12（北京时间，UTC+8）

最后更新时间：2026-09-02 04:12（北京时间，UTC+8）

文档状态：`IN_REVIEW`

事实基线：Commons 提交 `1dc64e9`

批准人：PENDING

Node A 使用知识版本 `v2`，能力为 `recommend`；Node B 使用知识版本 `v1`，能力为 `execute-order`。

注入冲突：

1. 知识版本不同；
2. recommendation 不等于 authorization；
3. A 缺少可验证证据；
4. B 执行后反馈给 A，形成状态变化。

成功条件不是 C 组全部通过，而是 C 组相对于 A/B 能更准确识别边界、证据和责任，同时不要求交换全部内部数据。
