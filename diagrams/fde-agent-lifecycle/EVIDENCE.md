# FDE lifecycle infographic evidence index

This index binds the dated capability diagram to public repository evidence. The diagrams are navigation aids; the linked commits, CI run, manifests, and compatibility decisions remain authoritative.

Generated metadata is stored in [`generated-status-metadata.json`](./generated-status-metadata.json). Its `status_source_sha256` binds every rendered image to [`source/status-source.json`](./source/status-source.json).

| Ref | Status area | Repository evidence |
|---|---|---|
| P1 | Protocol contract and current status | [`b96cb2b`](https://github.com/full-spectrum-lab/full-spectrum-protocol/commit/b96cb2b0adb35b3bd3c59550489d87b40fddedff) |
| P2 | Compatibility, network, and production boundaries | [`COMPATIBILITY_MATRIX.json`](https://github.com/full-spectrum-lab/full-spectrum-protocol/blob/b96cb2b0adb35b3bd3c59550489d87b40fddedff/COMPATIBILITY_MATRIX.json) |
| P3 | Pinned three-repository local offline chain | [CI Run 34311655853](https://github.com/full-spectrum-lab/full-spectrum-protocol/actions/runs/34311655853), artifact SHA-256 `F9AEBF458CBCF14451D1301A664425BB74D7CB2CDFD8A6481B5FDFDFA07632BB` |
| E1 | Engine 2 offline implementation boundary | [`11c6f83`](https://gitee.com/full-spectrum/full-spectrum-engine/commit/11c6f83593a327457940c6b5832aa03aa50713ee) |
| O1 | Observer Engine 2 adapter evidence correction | [`98da955`](https://gitee.com/full-spectrum/full-spectrum-observer/commit/98da9559b8076770d9b5471ba0fde2cac4a6fe3c) |
| K1 | KG Engine 2 adapter | [`869f61b`](https://gitee.com/full-spectrum/full-spectrum-knowledge-governance/commit/869f61bd7bb970a2743058a52fe1e23570667028) |
| Q1 | Independent clean-checkout reverify | [`0e945d0`](https://gitee.com/full-spectrum/qpp.wiki/commit/0e945d06b16c494ccfbeee7465c9cd4027ad7206) |

## Boundary summary

```ini
THREE_REPOSITORY_OFFLINE_RUNTIME_CHAIN = PASS_PINNED_LOCAL_OFFLINE
INDEPENDENT_CLEAN_CHECKOUT_REVERIFY = PASS
FORMAL_PAIRWISE_COMPATIBILITY = NOT_CONFIRMED
REAL_NETWORK_IMPLEMENTATION = NOT_IMPLEMENTED
REAL_NETWORK_AUTHORIZATION = NOT_AUTHORIZED
PRODUCTION_READY = NO
```

