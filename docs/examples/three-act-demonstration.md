Created at: 2026-10-12 01:48 (Asia/Shanghai, UTC+8)
Last updated at: 2026-10-12 01:48 (Asia/Shanghai, UTC+8)
Document ID: FSP-GEX-PUB-DEMO-001-EN
Version: v0.1-candidate
Status: PUBLIC_READING_CANDIDATE / NON_NORMATIVE
Responsible author: Independent global-expression workstream
Scope: Three independent synthetic offline executions; not integration or product acceptance
Fact baseline: Commons 975338209823f2afeb49ca429660484a7b05b0be; Engine b21d2113d6c27237199af3d677cd05fc33f94e5a; Observer 5fd0a898d9ad193debe27b03361019e18eef23db; FSP-GLOBAL-BASELINE-1.0

# Turn one part of the cube: three bounded demonstrations

[简体中文](./three-act-demonstration.zh-CN.md) · [Evidence and reproduction](./evidence/three-act-20261012/README.md)

A customer requests a refund. An AI agent promises a full refund. Does it have authority? What should happen when evidence is missing?

Start with this problem, not a large architecture diagram. **The inputs are synthetic; the programs were actually executed.** These are three independent runs. Observer did not consume the first two runs' outputs. This is not a complete recursive runtime, four-product integration or a customer transaction.

The Compassion Protocol is the highest principle; the Compassion Charter supplies constraints. Engineering supports the system rather than defining its entirety. This run does not fully test those principles or Charter provisions.

## Act one: being able to say it is not authority to promise it

The fixed ecommerce input contains a refund promise without refund authority or completed human review. The CLI generates an event, context, cell manifest, output envelope, enterprise writeback and readable report.

The actual result is high risk and human review required. `allow_auto_reply`, `allow_commitment` and `allow_auto_execution` are false. The fixture specifies a customer-service supervisor and an after-sales review queue.

[Inspect the result](./evidence/three-act-20261012/ecommerce/enterprise-writeback.json). These are restriction fields and handoff recommendations. They do not prove a real refund button was disabled or a ticket delivered. Fixture roles are not verified enterprise authorization. Fixed rule evaluation does not prove independent interpretation of all merchant and platform rules, nor determine final refund entitlement.

## Act two: retain structure, change the domain

The cold-chain fixture has incomplete temperature evidence and unfinished human review. The same object types are generated, while the reason, recommendation and review assignment change.

| Dimension | Ecommerce | Logistics |
|---|---|---|
| Reason | Refund promise without authority | Incomplete logistics evidence |
| Fixture review role | Customer-service supervisor | Logistics quality supervisor |
| Fixture queue | After-sales review | Cold-chain review |
| Common restriction | No automatic promise or execution; human review required | No automatic promise or execution; human review required |

[Inspect logistics](./evidence/three-act-20261012/logistics/enterprise-writeback.json). Each run generated six files matching its Engine-repository golden fixtures byte-for-byte. Five JSON objects per run passed vendored-schema validation. Eight regression tests passed.

This supports reuse in two fixed domains, not arbitrary industry compatibility, mathematical isomorphism or real sensor ingestion.

## Act three: check how results relate to evidence

A separate Observer knowledge-conflict fixture ran the original Python reference pipeline: fixed Worker/Engine execution, golden comparison and temporary SQLite linkage checks for Operation, Artifact, Observation and Audit. Fifteen reference checks passed. A separate fixed Worker invocation retained its request and response; output matched the golden JSON and its declared digest.

[Request](./evidence/three-act-20261012/observer/request.json) · [Response](./evidence/three-act-20261012/observer/response.json) · [Reference checks](./evidence/three-act-20261012/observer/reference-checks.json)

The original script deletes its temporary database. This verifies runtime linkage, not persistent Observer database lookup. Retained JSON files do not fill that gap. `formal_gate=NOT_PASSED` remains: this invocation did not execute the formal .NET gate or change historical gate status.

## One part moved; the whole cube is not verified

Object generation, bounded domain reuse and reference linkage are parts of the whole, not replacements for horizontal relationships, cross-scale recomputation, knowledge governance, reality feedback and evolution.

This evidence does not establish real business execution, persistent Observer database lookup, cross-layer recomputation, cross-organization recognition or a complete Full Spectrum runtime. Two initial validation commands used an incorrect argument and exited 2; corrected commands exited 0. Both attempts remain recorded.

See the [derived public run record](./evidence/three-act-20261012/run-record.json) and [byte-hash manifest](./evidence/three-act-20261012/SHA256SUMS.json). Review is an author evidence cross-check, not independent third-party acceptance.
