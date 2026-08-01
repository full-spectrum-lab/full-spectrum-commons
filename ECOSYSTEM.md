# Full Spectrum Lab ecosystem map

创建时间：2026-07-08 22:23（北京时间，UTC+8；依据 Git 首次提交）
最后更新时间：2026-08-01 12:18（北京时间，UTC+8）

The canonical machine-readable role source is [`full-spectrum-lab/.github/ecosystem/ecosystem-manifest.json`](https://github.com/full-spectrum-lab/.github/blob/main/ecosystem/ecosystem-manifest.json).

## Four independent engineering tracks

| Track | Role | Explicit non-goal |
|---|---|---|
| [full-spectrum-protocol](https://github.com/full-spectrum-lab/full-spectrum-protocol) | Governance semantics and contracts | Not transport or an executor |
| [full-spectrum-engine](https://github.com/full-spectrum-lab/full-spectrum-engine) | Deterministic governance evaluation | Not an agent planner or tool executor |
| [full-spectrum-knowledge-governance](https://github.com/full-spectrum-lab/full-spectrum-knowledge-governance) | Exact knowledge identity, version, provenance and lifecycle | Not RAG, a vector database or CMS |
| [full-spectrum-observer](https://github.com/full-spectrum-lab/full-spectrum-observer) | Authorized reality input, Observation, Evidence, Audit, Replay and bounded review | Not APM or a production controller |

Engine, Observer and Knowledge Governance are independently usable. Composition is optional and occurs through explicit contracts or adapters. Final real-world action remains with an authorized human, organization or external business system.

## Supporting repositories

- [full-spectrum-enterprise-governance](https://github.com/full-spectrum-lab/full-spectrum-enterprise-governance): synthetic cases, adapter/deployment patterns and review guidance; not a runtime core or proof of named-customer deployment.
- [full-spectrum-commons](https://github.com/full-spectrum-lab/full-spectrum-commons): public navigation, terminology, diagrams and evidence indexes; not a runtime dependency.
- [full-spectrum-lab/.github](https://github.com/full-spectrum-lab/.github): organization profile, public status and canonical ecosystem boundaries.

## Reading paths

- New readers: Commons → choose one independent track → verify its exact Release/test evidence.
- Developers: Engine or KG or Observer, according to the capability needed; Protocol for contracts.
- Governance reviewers: Protocol + repository-specific evidence + synthetic Enterprise cases.

Diagrams explain intended relationships. They do not prove implementation, release, production readiness or customer adoption.
