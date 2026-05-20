---
id: soyapack-v0
title: SoyaPack v0 manifest
sidebar_position: 4
description: Reference for the soyapack.yaml v0 manifest fields.
---

# SoyaPack v0 manifest

`soyapack.yaml` is the single source of truth for a SoyaOS bundle. v0
freezes the small set of fields below; future versions add fields, never
remove them.

## Top-level fields

| Field              | Type     | Required | Description                                                                                       |
| ------------------ | -------- | -------- | ------------------------------------------------------------------------------------------------- |
| `apiVersion`       | string   | yes      | Must be `soyaos.ai/v0`.                                                                           |
| `kind`             | enum     | yes      | One of `Agent`, `Tool`, `Skill`, `Model`.                                                         |
| `name`             | string   | yes      | DNS-label-safe; unique within an owner.                                                           |
| `version`          | string   | yes      | SemVer 2.0.0 (pre-release allowed, e.g. `0.1.0-alpha.0`).                                          |
| `virtual_model_id` | string   | for Agent kind | The `soya:*` id this Agent claims (e.g. `soya:compo`).                                       |
| `description`      | string   | yes      | One-sentence summary.                                                                             |
| `owner`            | string   | yes      | GitHub handle or org.                                                                             |
| `license`          | string   | yes      | SPDX identifier (`MIT`, `Apache-2.0`, …).                                                         |
| `capabilities`     | object   | yes      | Capability allowlist — egress hosts, filesystem paths, determinism tier. See below.                |
| `inputs`           | object   | yes      | JSON Schema fragment describing the input contract.                                               |
| `outputs`          | object   | yes      | Map of artifact name → schema id (e.g. `guide.v1`).                                               |
| `prompts`          | object   | for Agent kind | Map of stage name → relative path to a prompt file.                                          |
| `tools`            | object   | optional | Map of tool name → declaration (built-in or external).                                            |
| `templates`        | object   | optional | Map of template name → `html/template` file path. Used by artifact renderers.                      |
| `examples`         | object   | optional | Map of example name → fixture file. Picked up by `soyaos pack lint`.                              |

## `capabilities`

```yaml
capabilities:
  egress:
    - host: api.openai.com
      port: 443
      protocol: https
  fs:
    read:
      - /workdir
    write:
      - /workdir/out
  determinism_tier: read-only   # one of: read-only | side-effect | unrestricted
```

- `egress`: explicit allowlist. There is no implicit `0.0.0.0/0`.
- `fs.read` / `fs.write`: absolute paths inside the Comet sandbox.
- `determinism_tier`: declares how reproducible this Agent's runs are.
  Comet uses it to decide cache eligibility.

## Validation

```bash
soyaos pack validate .
```

The validator is the same code Comet runs at admission time. CI for
[soyaos/skills](https://github.com/soyaos/skills) calls it on every PR.
