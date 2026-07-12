# WP-001: Governance Semantics and a Local-First Observer Engine

**Subtitle:** From governance objects to reproducible AI-action review  
**Author:** Gao Guilan  
**Affiliation:** Full Spectrum Lab, independent research project  
**Version:** 0.1, July 2026  
**Status:** Public Working Paper — not peer reviewed

## Abstract

AI agent infrastructure increasingly supports discovery, tool use, messaging, and workflow execution, but connectivity alone does not answer who acted, what capability or boundary was declared, what evidence supported the action, when human review was required, or what record should remain. This working paper presents Full Spectrum as an experimental governance-semantics layer around AI-related actions. It describes a minimal object chain from raw business input to Governance Event, Canonical Context, subject declaration, local observer evaluation, output envelope, and audit report. The accompanying open-source engine is local-first: it can run without joining an external identity or protocol network, produces deterministic examples, and does not execute final enterprise actions. The paper separates implemented artifacts from future research claims and proposes an observer-first adoption path: local analysis, optional subject declaration, stable I/O contracts, profile-driven evaluation, replay and audit, and only then controlled enterprise trials.

## 1. Problem

Agent protocols and tool frameworks make action easier. Governance requires additional questions:

- Who or what produced the action or data?
- What was known, unknown, or unsupported?
- Which capability and boundary declarations were relevant?
- Which rule or profile produced the warning?
- When must a human re-enter the loop?
- Can a later reviewer reproduce the result?

Full Spectrum treats these as structured governance objects rather than a single opaque safety score.

## 2. Minimal governance object chain

```text
Raw business input
→ Governance Event
→ Canonical Context
+ optional local subject declaration
→ Observer Engine / Profile / Evaluation Policy
→ RiskVector / warnings / explanation
→ Governance Output Envelope
→ AuditTrace / Runestone / report
→ human or enterprise review
```

The protocol repository defines schemas and examples. The engine repository provides a runnable reference path. The enterprise repository provides synthetic or desensitized cases and review workflows.

## 3. Observer-first boundary

The first-generation engine is a local observer, not an identity platform, authorization authority, or enterprise workflow executor.

```text
Enterprise-local data
+ enterprise-local subject declaration
+ enterprise-selected profile
→ local observer
→ analysis / warning / report / audit record
→ human interpretation
```

It can operate offline and does not require public DID, community membership, cross-organization certification, or protocol-network participation. It does not approve refunds, freeze accounts, modify knowledge bases, or grant capabilities.

## 4. Implemented evidence

As of the stated version:

- `full-spectrum-engine` has a stable v1.0 local-first baseline;
- fixed seeds and golden samples support deterministic regression;
- a governance-chain CLI generates an ecommerce object chain;
- selected JSON artifacts are validated against versioned schemas;
- the public enterprise examples are synthetic or desensitized;
- boundaries and known limitations are documented.

Verification links are maintained in [Evidence and Project Status](../../docs/evidence-and-status.md).

## 5. Planned contract sequence

The planned engine sequence is deliberately narrow:

1. optional enterprise-local subject declaration;
2. stable input/output envelopes and object relationships;
3. profile-driven measurement and evaluation;
4. replay and audit hardening;
5. controlled enterprise trial readiness.

Enterprise packages and Skills are separate product lines. Their maturity does not redefine the engine's major version.

## 6. Limitations

- Current public cases do not establish production effectiveness.
- FSHI dimensions and weights require scenario-specific calibration.
- The reference engine does not implement a complete protocol network.
- Subject declarations are contextual inputs, not permissions granted by the engine.
- Research concepts related to civilization dynamics, renormalization, or universal phase classes remain hypotheses and are not required by the current runtime.
- External independent replication remains limited.

## 7. Reproducibility

Start from:

- [Protocol ecommerce chain](https://github.com/full-spectrum-lab/full-spectrum-protocol/tree/main/examples/cases/ecommerce_chain)
- [Governance-chain CLI](https://github.com/full-spectrum-lab/full-spectrum-engine#governance-chain-cli-ten-minute-runnable)
- [Enterprise trial cases](https://github.com/full-spectrum-lab/full-spectrum-enterprise-governance/tree/main/cases)

## 8. Conclusion

The contribution claimed here is limited: a public, inspectable path for representing and replaying governance context around AI-related actions. It is not a claim of completed AI safety, universal governance, scientific prediction, or regulatory compliance. The research value lies in making governance assumptions explicit enough to be implemented, tested, criticized, and revised.

## References

1. Full Spectrum Protocol repository, RFCs, schemas, and examples, 2026.
2. Full Spectrum Engine repository, v1.0 local-first runtime and governance-chain CLI, 2026.
3. Full Spectrum Enterprise Governance repository, synthetic and desensitized cases, 2026.
4. N. Wiener, *Cybernetics*, MIT Press, 1948.
5. E. Ostrom, *Governing the Commons*, Cambridge University Press, 1990.
6. R. Fagin, J. Halpern, Y. Moses, M. Vardi, *Reasoning About Knowledge*, MIT Press, 1995.
7. J. Pearl, *Causality*, Cambridge University Press, 2000.

