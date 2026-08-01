# Repository map

创建时间：2026-07-08 22:23（北京时间，UTC+8；依据 Git 首次提交）
最后更新时间：2026-08-01 12:18（北京时间，UTC+8）

## Core engineering tracks

| Repository | Primary outputs | Independently usable |
|---|---|---|
| `full-spectrum-protocol` | RFCs, Schemas, governance semantics and conformance rules | Yes |
| `full-spectrum-engine` | Deterministic runtime, fixtures, tests and reports | Yes |
| `full-spectrum-knowledge-governance` | Knowledge identity/version/lifecycle contracts, fixed resolver and evidence | Yes |
| `full-spectrum-observer` | Local application, evidence store, audit/replay and bounded review | Yes |

## Support and public coordination

| Repository | Primary outputs | Boundary |
|---|---|---|
| `full-spectrum-enterprise-governance` | Synthetic cases, adapters, reports and deployment/review patterns | Not a runtime core or customer deployment claim |
| `full-spectrum-commons` | Diagrams, terminology, indexes and public orientation | Not a runtime dependency |
| `.github` | Organization identity, machine-readable status and ecosystem guardrails | Does not replace product release evidence |

## Composition rule

```text
independent product
    + explicit contract or Adapter when needed
    + exact version and Evidence
    = optional composition
```

There is no mandatory `Protocol → Engine → Observer` pipeline. Knowledge Governance is not a hidden RAG helper, and Enterprise Governance is not an enterprise control plane.

Canonical role source: [ecosystem-manifest.json](https://github.com/full-spectrum-lab/.github/blob/main/ecosystem/ecosystem-manifest.json).
