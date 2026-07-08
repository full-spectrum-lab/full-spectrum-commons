# Full Spectrum Lab Ecosystem Map

This document explains the intended relationship among the public repositories under `full-spectrum-lab`.

## Core structure

```text
full-spectrum-lab
  ├─ full-spectrum-protocol
  ├─ full-spectrum-engine
  ├─ full-spectrum-enterprise-governance
  └─ full-spectrum-commons
```

## Repository roles

### 1. full-spectrum-protocol

Purpose:

- protocol drafts
- RFCs
- schemas
- governance semantics
- compatibility and conformance documents

Key question:

> What is the governance language and structure for AI-era actions, boundaries, risks, and accountability?

### 2. full-spectrum-engine

Purpose:

- local-first runnable engine
- governance event generation
- risk and safety evaluation
- reproducible examples
- validation and regression testing

Key question:

> How do we run the protocol ideas as executable engineering artifacts?

### 3. full-spectrum-enterprise-governance

Purpose:

- business-facing governance packages
- customer-service inspection cases
- enterprise deployment patterns
- human review workflows
- desensitized business examples

Key question:

> How can enterprises use this in real customer-service, quality, audit, and governance scenarios?

### 4. full-spectrum-commons

Purpose:

- shared diagrams
- maps and indexes
- public orientation
- cross-repo navigation
- shared asset management

Key question:

> How do we help people understand where to start, how the repositories fit together, and which assets are reusable across the ecosystem?

## Recommended outside-in reading order

### For newcomers

1. `full-spectrum-commons`
2. `full-spectrum-protocol`
3. `full-spectrum-engine`
4. `full-spectrum-enterprise-governance`

### For engineers

1. `full-spectrum-engine`
2. `full-spectrum-protocol`
3. `full-spectrum-commons`

### For business and governance readers

1. `full-spectrum-enterprise-governance`
2. `full-spectrum-protocol`
3. `full-spectrum-commons`

## Strategic principle

The four repositories should not duplicate each other.

Each repository should carry one primary responsibility:

- Protocol defines
- Engine runs
- Enterprise applies
- Commons explains
