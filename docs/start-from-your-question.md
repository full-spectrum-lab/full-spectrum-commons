# Start from Your Question

Created: 2026-08-08 02:35 UTC+8  
Last updated: 2026-08-08 02:35 UTC+8  
Document status: `PUBLIC ORIENTATION / NON-NORMATIVE`  
Evidence rule: repository releases, exact tags, tests and attached evidence remain authoritative.

[简体中文](./start-from-your-question.zh-CN.md)

Full Spectrum spans several independently usable engineering tracks. A first-time reader should not need to understand every repository or accept a complete future vision before trying one useful part.

Start with the question you already have.

## What is Full Spectrum?

Full Spectrum is an evidence-first governance engineering family for AI and complex systems. It separates and reconnects:

```text
fact
→ exact knowledge version
→ deterministic evaluation
→ authorization
→ real-world action
→ evidence
→ audit
→ replay
```

It does not replace an enterprise system of record, an agent runtime, MCP/A2A transport, RAG, CDC/ETL, a workflow engine, legal authority or accountable human judgment.

## I need to understand why a system reached a conclusion

Start with **Observer**.

Observer connects authorized reality input to Observation, Evidence, Audit, Replay and bounded human review. It does not certify, authorize or execute final enterprise actions.

Entry: [full-spectrum-observer](https://github.com/full-spectrum-lab/full-spectrum-observer)

## I need a governance evaluation that can be reproduced

Start with **Engine**.

Engine provides deterministic evaluation over explicit inputs and rules, with reproducible artifacts, fixtures, tests and release evidence. It is not an agent planner, workflow scheduler, arbitrary tool executor or autonomous business decision-maker.

Entry: [full-spectrum-engine](https://github.com/full-spectrum-lab/full-spectrum-engine)

## I need to know which knowledge source and version supported an action

Start with **Knowledge Governance**.

It governs exact knowledge identity, version, provenance, lifecycle, applicability, conflict, Snapshot, Evidence and Replay. It is not RAG, a vector database, CMS or automatic truth authority.

Entry: [full-spectrum-knowledge-governance](https://github.com/full-spectrum-lab/full-spectrum-knowledge-governance)

## I need explicit subjects, capabilities, boundaries and accountability

Start with **Protocol**.

Protocol provides governance semantics and machine-readable contracts for identity, subject declaration, capability, boundary, authorization references, evidence, audit, responsibility and review. It is not a transport protocol, message bus or executor.

Entry: [full-spectrum-protocol](https://github.com/full-spectrum-lab/full-spectrum-protocol)

## I need to apply Full Spectrum to a domain

Start from one concrete CASE, not from the whole theory.

```text
Core Contracts
+ Knowledge Pack
+ CASE
+ Adapter
+ Skill
+ Evidence
= Domain Solution
```

- **CASE** defines a falsifiable conflict or decision situation.
- **Knowledge Pack** pins domain knowledge, versions and applicability.
- **Adapter** maps authorized external facts into explicit contracts.
- **Skill** provides a user or Agent entry point; it does not grant authority or replace governance evaluation.
- **Evidence** shows what was actually executed and verified.

Entry: [full-spectrum-enterprise-governance](https://github.com/full-spectrum-lab/full-spectrum-enterprise-governance)

## I only need the ecosystem map

Start with:

- [Four independent engineering tracks](./four-independent-engineering-tracks.md);
- [Evidence and project status](./evidence-and-status.md);
- [Visual index](./visual-index.md);
- [Public adoption ladder](./public-adoption-ladder.md).

## How the four tracks can compose

The tracks are independently usable. Optional composition should use explicit contracts and exact versions.

```text
Authorized facts / external materials
              ↓
Knowledge Governance
identity · version · provenance · applicability · conflict · Snapshot
              ↓
Protocol
subject · capability · boundary · authorization · responsibility
              ↓
Engine
deterministic evaluation · risk · policy Gate · report
              ↓
Observer
Observation · Evidence · Audit · Replay · bounded review
              ↓
Authorized human / organization / external business system
owns the final real-world action
```

This composition is an architecture and adoption model. It is not a claim that every end-to-end combination has been production-validated.

## Vertical subjects and horizontal knowledge

Subject scope can expand vertically:

```text
human / Agent / tool
→ business system / team
→ organization / enterprise
→ cross-organization trust domain
```

Knowledge can expand horizontally across domains:

```text
domain material
→ exact knowledge identity and version
→ Knowledge Pack / rule set
→ CASE / Adapter / Skill
→ domain inspection, review and Evidence
```

Current public engineering remains local-first and evidence-first. A complete production protocol network, federation and autonomous cross-organization execution are not current implementation claims.

## The first integrated-case candidate

The existing synthetic automotive/industrial DID-X / DIO-X line is the preferred candidate for the first four-track integration path. It already provides a multi-system evidence-gap problem, read-only/no-writeback boundaries, identity and deterministic-serialization foundations.

```text
CASE_ROLE             = FIRST_INTEGRATED_CASE_CANDIDATE
CURRENT_STATUS        = SCAFFOLD / DESIGNED_BASELINE
PRODUCTION_VALIDATION = NO
NAMED_CUSTOMER        = NO
FOUR_TRACK_E2E_PROOF  = NOT_YET_COMPLETE
```

The next step is to strengthen the existing case with a four-track evidence matrix and minimal end-to-end execution—not to create a parallel case merely to explain the architecture.

## What can be verified today?

| Reader | Useful first verification |
|---|---|
| Enterprise leader | Understand the problem, value, boundary and adoption ladder |
| Enterprise architect | Inspect how independent tracks can compose through contracts and adapters |
| Developer / AI engineer | Run Engine or validate Protocol schemas |
| Domain / knowledge expert | Map one domain conflict to a CASE and Knowledge Pack |
| QA / risk / compliance reviewer | Inspect Evidence, Audit, Replay and claim status |
| Open-source contributor | Improve an Issue, RFC, CASE, schema, adapter, Skill or evidence boundary |

## What this page does not prove

This page does not prove production readiness across the ecosystem, a complete four-track production integration, a running cross-organization protocol network, a mature cross-domain Skill ecosystem, named-customer deployment, regulatory approval or legal authority.

Verify exact claims through releases, tags, tests, CI and Evidence.

