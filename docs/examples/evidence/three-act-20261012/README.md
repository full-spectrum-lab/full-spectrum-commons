Created at: 2026-10-12 01:48 (Asia/Shanghai, UTC+8)
Last updated at: 2026-10-12 22:44 (Asia/Shanghai, UTC+8)
Document ID: FSP-GEX-PUB-DEMO-EVIDENCE-001
Version: v0.2-candidate
Status: SYNTHETIC_OFFLINE_EVIDENCE / NON_NORMATIVE
Responsible author: Independent global-expression workstream
Scope: Selected outputs and derived execution record; no product status promotion
Fact baseline: Engine b21d2113d6c27237199af3d677cd05fc33f94e5a; Observer 5fd0a898d9ad193debe27b03361019e18eef23db; FSP-GLOBAL-BASELINE-1.0

# Evidence and reproduction / 证据与复跑说明

[Later reproduction file review / 后续两种环境复跑文件核验（中文）](reproduction-review.zh-CN.md). This supplement does not overwrite the original execution record or promote product status. Original-run review limits below describe the original workstream, not the later submitted reproduction materials.

[中文导读](../../three-act-demonstration.zh-CN.md) · [English guide](../../three-act-demonstration.md)

11 selected input/output/stderr files are byte-identical to the local run materials. Public filenames differ from the source filenames. `run-record.json` is explicitly a derivative: executable and absolute paths are replaced by logical placeholders. Its raw-log hashes refer to retained local originals, not downloadable raw logs in this repository. No local paths, customer data, database or full source checkout is included.

中文：11份所选输入、输出和stderr逐字节保留；公开文件名与原文件名不同。运行记录经过路径脱敏，不是无损原件。原始日志摘要只是本地保留记录的引用，不能假设这些原始日志已在此公开。清单可用于复算当前公开文件字节，不证明发布者身份或独立验收。

## Fixed source and license provenance

- [Engine fixed source](https://github.com/full-spectrum-lab/full-spectrum-engine/tree/b21d2113d6c27237199af3d677cd05fc33f94e5a), [license](https://github.com/full-spectrum-lab/full-spectrum-engine/blob/b21d2113d6c27237199af3d677cd05fc33f94e5a/LICENSE), [case inputs](https://github.com/full-spectrum-lab/full-spectrum-engine/tree/b21d2113d6c27237199af3d677cd05fc33f94e5a/examples/governance_chain), [goldens](https://github.com/full-spectrum-lab/full-spectrum-engine/tree/b21d2113d6c27237199af3d677cd05fc33f94e5a/tests/fixtures).
- [Observer fixed source](https://github.com/full-spectrum-lab/full-spectrum-observer/tree/5fd0a898d9ad193debe27b03361019e18eef23db), [license](https://github.com/full-spectrum-lab/full-spectrum-observer/blob/5fd0a898d9ad193debe27b03361019e18eef23db/LICENSE), [binding](https://github.com/full-spectrum-lab/full-spectrum-observer/blob/5fd0a898d9ad193debe27b03361019e18eef23db/engine/engine-baseline.json).

Inputs are attributed excerpts and outputs are synthetic execution artifacts from those pinned repositories. No third-party historical normative originals are copied. The Engine and Observer sources remain authoritative; Commons does not redefine their contracts or replace their licenses.

Upstream attribution: Copyright 2026 Full Spectrum Lab / 全频谱实验室. Both pinned source repositories offer MulanPSL-2.0 OR Apache-2.0; this distribution uses the Apache-2.0 option, included in the Commons root LICENSE. No notice embedded in a selected artifact was removed.

Observer binds Engine v1.5.0 to the Gitee commit `88493007d4e00344c70a70ed0e5a5d652dec86f5`. Gitee tag dereference matched that binding at selection. GitHub's same-name tag dereferenced to `ab9939b2aaf2a921b6ae6e7a6af5d34cd07af424`; never substitute it for the bound source. The two demonstration source commits are also different from Observer's vendored Engine commit.

## Reproduce in separate fixed checkouts

Environment observed: Windows, Python 3.12.8, NumPy 1.26.4, jsonschema 4.26.0. Use your own isolated output directory, not tracked evidence directories. The commands below abbreviate executable paths; full logical commands and exit codes are in the run record.

From the fixed Engine source:

```sh
python -m src.governance_chain generate --input examples/governance_chain/raw-input.ecommerce.json --out <OUT>/ecommerce
python -m src.governance_chain validate <OUT>/ecommerce
python -m src.governance_chain generate --input examples/governance_chain/raw-input.logistics.json --out <OUT>/logistics
python -m src.governance_chain validate <OUT>/logistics
python -m unittest tests.test_governance_chain tests.test_governance_chain_adapters -v
```

Compare generated files against each fixed `tests/fixtures/expected_*_chain` directory. The recorded comparisons cover six files per domain. Only two JSON outputs per domain are selected here; omitted outputs remain in the original local evidence pack. Protocol-repository goldens were not independently checked.

From fixed Observer: unset `FSP_FORMAL_GATE_CONTEXT`, set `FSP_EVIDENCE_ROOT` to a new external directory, then run `python scripts/ig5-reference-pipeline.py`. Verify Worker/source lock hashes first. Do not set formal-gate context merely to label a report PASSED. To reproduce the separately captured Worker response, feed `observer/request.json` on stdin to `python engine/worker/worker.py --engine-root engine/vendor/full-spectrum-engine`.

This script deletes its temporary SQLite database. Persistent database lookup is NOT_VERIFIED. Formal .NET execution is NOT_EXECUTED in this run: available SDK 10.0.400 did not match locked 10.0.301. The fixed Worker stderr includes an emergency-brake diagnostic; it is retained, not hidden. Some reference boundary checks are constant assertions, not authorization-system tests. The two initial `validate --dir` failures are harness argument errors, not repaired product defects.

## Review limits

This workstream cross-checked 12 generated files against goldens, ten JSON schema results, eight regression tests, 50 binding entries, the reference report and Worker digest. No separate reviewer, human reader acceptance, fresh environment or independent translation review was performed. Source and golden files were not edited. Separate runs are not a joined governance loop; static audit references in Engine objects are not evidence that Observer persisted those objects.
