# Visual Index

This file helps visitors understand which diagram to read first.

## Product and evidence views

| Diagram | Use | Boundary |
| --- | --- | --- |
| [System master map](../diagrams/product-views/full-spectrum-system-master-map-en-v01.png) | Organization and ecosystem orientation | Conceptual map; consult each repository for release truth |
| [Protocol, Engine and Observer boundary](../diagrams/product-views/protocol-engine-observer-boundary-en-v01.png) | Explain distinct responsibilities and optional composition | Does not make Engine or Observer depend on the other |
| [Governance event and evidence loop](../diagrams/product-views/governance-event-evidence-loop-en-v01.png) | Observer, enterprise cases and review flow | Human review remains outside automated final action |
| [Knowledge governance lifecycle](../diagrams/product-views/knowledge-governance-lifecycle-en-v01.png) | Knowledge identity, version and lifecycle orientation | Current implementation is narrower than the full map |
| [Verification path and maturity boundary](../diagrams/product-views/verification-path-maturity-boundary-en-v01.png) | Separate design, fixture, test, release and production claims | A design or fixture does not equal production validation |
| [Positive governance flywheel](../diagrams/product-views/full-spectrum-positive-governance-flywheel-zh-v01.png) | Real-world feedback, Observer evidence, Engine analysis and ecosystem evolution | Evolution model; not production-scale evidence |

These files are the canonical public copies. Product repositories link here instead of maintaining divergent copies.

## Recommended order

### 1. Document and protocol-system overview

Use when the question is:

> What is the overall structure of the Full Spectrum documentation and protocol system?

Suggested assets:

- `diagrams/protocol-system/*`

### 2. Positioning and differentiation

Use when the question is:

> Why is Full Spectrum not just another ethics framework?

Suggested assets:

- `diagrams/positioning/*`
- especially `competitive-positioning-and-differentiation-v10.png`
- and `why-full-spectrum-can-cover-the-whole-governance-chain-v01.png`

### 3. Heavy theory stack behind the lightweight engine

Use when the question is:

> What larger theoretical system sits behind the public runtime?

Suggested assets:

- `diagrams/theory-stack/*`

### 4. Architecture

Use when the question is:

> How do protocol, engine, enterprise governance, and future network layers fit together?

Suggested assets:

- `diagrams/architecture/*`
- start with `three-entry-three-core-components-zh-v10.png` for the public relationship between Protocol, Engine, Observer and the three entry paths
- especially `four-layer-architecture-v01.png`
- `recursive-four-layer-architecture-v02.png`
- `observer-general-system-overview-zh-v01.png`
- `recursive-four-layer-runtime-chain-zh-v01.png`
- `full-spectrum-skills-architecture-overview-v01.png`

### 5. Public introduction

Use when the question is:

> What should a first-time visitor, conference reader, or external reviewer see first?

Suggested assets:

- `diagrams/public-intro/*`
- especially `from-ethical-appeal-to-engineering-compilation.png`
- `full-spectrum-cognitive-operating-system-blueprint-v01.png`
- `full-spectrum-governance-community-ecosystem-v01.png`

## Suggested minimal packs

### Pack A: first external impression

Use:

1. `diagrams/architecture/three-entry-three-core-components-zh-v10.png`
2. `diagrams/public-intro/from-ethical-appeal-to-engineering-compilation.png`
3. `diagrams/protocol-system/why-ai-needs-relationship-protocol.png`

For the newer holographic architecture view, add:

4. `diagrams/architecture/observer-general-system-overview-zh-v01.png`
5. `diagrams/architecture/recursive-four-layer-runtime-chain-zh-v01.png`
6. `diagrams/product-views/full-spectrum-positive-governance-flywheel-zh-v01.png`

### Pack B: explain the engineering stack

Use:

1. `diagrams/architecture/four-layer-architecture-v01.png`
2. `diagrams/architecture/recursive-four-layer-architecture-v02.png`
3. `diagrams/theory-stack/lightweight-engine-heavy-theory-stack-v01.png`

### Pack C: explain why this is not just another tool

Use:

1. `diagrams/positioning/competitive-positioning-and-differentiation-v10.png`
2. `diagrams/positioning/why-full-spectrum-can-cover-the-whole-governance-chain-v01.png`

## Use rule

Do not paste every diagram into every external conversation.

Choose the smallest set that answers the current question:

- overall map -> architecture / protocol-system
- differentiation -> positioning
- philosophical depth -> theory-stack
- public intro -> public-intro
