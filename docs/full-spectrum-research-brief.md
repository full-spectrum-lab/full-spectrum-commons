# Full Spectrum Research Brief

Created at: 2026-09-16 22:05 UTC+8

Last updated at: 2026-09-16 22:05 UTC+8

Status: `PUBLIC_RESEARCH_BRIEF / NON_NORMATIVE`

## Problem

AI systems increasingly participate in decisions involving people, organizations, software agents and external knowledge sources. Capability alone does not answer:

- Who acted?
- Under what authority and boundary?
- Which exact knowledge was used?
- What evidence records the decision and outcome?
- Who remains responsible?
- Can the process be replayed, challenged and corrected?

## Proposed research direction

Full Spectrum explores a protocol-oriented, evidence-first approach to governance for AI-era multi-actor systems. It separates six concerns:

```text
identity and capability
-> authorization and boundary
-> exact knowledge version
-> deterministic evaluation
-> real-world action by an authorized external actor
-> Evidence, Receipt and Replay
```

This separation is intended to make responsibility inspectable without turning one model, vendor or project into an unlimited authority.

## Public engineering tracks

| Track | Responsibility |
|---|---|
| Protocol | Governance semantics and machine-readable contracts |
| Engine | Deterministic, reproducible governance evaluation |
| Knowledge Governance | Exact knowledge identity, version, provenance and lifecycle |
| Observer | Authorized facts, Observation, Evidence, Audit, Replay and bounded review |
| Enterprise Governance | Synthetic cases and domain mappings |
| Commons | Public navigation, terminology and non-normative research |

See the [Public Architecture Map](./public-architecture-map.md).

## Current evidence

- Engine has a stable release and an enterprise-pilot candidate pre-release with release-scoped tests.
- Observer has a public beta preview and a separately identified maintenance candidate; production readiness remains `NO`.
- Knowledge Governance has a Windows x64 alpha candidate with fixed-knowledge, lifecycle, Evidence and Replay scope; production readiness remains `NO`.
- Protocol publishes early drafts, Schema and conformance checks.
- Enterprise cases are synthetic or desensitized unless explicit evidence states otherwise.

Exact versions and evidence links are maintained in [Evidence and Project Status](./evidence-and-status.md).

## Not claimed

Full Spectrum does not currently claim:

- a production-scale cross-organization governance network;
- general compatibility or real-network validation;
- regulatory approval or legal authority;
- autonomous authority over people, organizations or external systems;
- that conceptual research or architecture diagrams prove implementation;
- that any one AI, organization or project represents the whole.

## Open research questions

1. What is the minimum interoperable event and evidence contract across independent organizations?
2. How should authorization, refusal and revocation remain verifiable across storage boundaries?
3. How can exact knowledge versions and deterministic evaluation be replayed without centralizing authority?
4. Which failure states must remain explicitly unclosed rather than being converted into apparent success?
5. How should human review preserve accountability without becoming an unbounded override?
6. Which parts of the architecture generalize beyond fixed offline and synthetic cases?

## Invitation to review

Independent criticism, counterexamples, boundary failures and reproducibility reports are welcome. Reviewers should distinguish conceptual proposals from implemented and runtime-verified scope, and should not infer endorsement, affiliation or production readiness from discussion.

- [Start from Your Question](./start-from-your-question.md)
- [Common Misinterpretations](https://github.com/full-spectrum-lab/.github/blob/main/ecosystem/MISINTERPRETATION_GUARD.md)
- [Independent Visitor Review](./external-visitor-review.zh-CN.md)
- [Contributing](https://github.com/full-spectrum-lab/.github/blob/main/CONTRIBUTING.md)
