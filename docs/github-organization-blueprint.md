# GitHub Organization Blueprint

This note explains the intended structure of the `full-spectrum-lab` GitHub organization.

## Core repositories

### `full-spectrum-protocol`

Use for:

- RFCs
- schemas
- protocol boundaries
- compatibility rules
- governance semantics

### `full-spectrum-engine`

Use for:

- runnable local-first runtime
- governance event generation
- RiskVector and AuditTrace execution path
- tests and releaseable engine code

### `full-spectrum-enterprise-governance`

Use for:

- enterprise-facing AI governance cases
- deployment patterns
- human review workflows
- desensitized report structures
- business adapters and field guidance

### `full-spectrum-commons`

Use for:

- shared diagrams
- maps
- glossary
- public orientation
- cross-repo navigation

## Simple rule

If a file answers:

- **what does the protocol mean?** → `full-spectrum-protocol`
- **can this run?** → `full-spectrum-engine`
- **how does an enterprise use it?** → `full-spectrum-enterprise-governance`
- **how do all these pieces fit together?** → `full-spectrum-commons`
