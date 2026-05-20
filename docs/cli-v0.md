---
id: cli-v0
title: CLI v0 reference
sidebar_position: 5
description: Verbs exposed by the soyaos binary in v0.
---

# CLI v0 reference

The `soyaos` binary exposes the verbs below in v0. Each verb is stable
within v0 — flags may be **added**, never removed.

## Global flags

```
--config <path>      Override config file (default: ~/.config/soyaos/config.yaml)
--log-level <level>  trace | debug | info | warn | error (default: info)
--json               Emit JSON-only on stdout (no progress UI)
```

## `soyaos version`

Print version, commit, build date, and the SoyaPack-v0 schema version.

## `soyaos pack`

Create, validate and run SoyaPack bundles locally.

| Subcommand      | Purpose                                                |
| --------------- | ------------------------------------------------------ |
| `pack init`     | Scaffold a new SoyaPack from a built-in template.      |
| `pack validate` | Validate `soyapack.yaml` against the v0 schema.        |
| `pack lint`     | Stricter checks (style, examples coverage).            |

## `soyaos run`

```
soyaos run <pack-dir> --input <json|@file>
```

Runs a SoyaPack in a local Comet sandbox. Streams Scope events to
stdout when `--json` is set, otherwise renders a compact progress UI.

## `soyaos serve`

```
soyaos serve --role <comet|moon|planet>
```

Starts a long-lived node in the given role. Multiple `--role` flags are
allowed — `--role moon --role comet` is the default for the `Atelier`
edition.

## `soyaos auth`

| Subcommand               | Purpose                            |
| ------------------------ | ---------------------------------- |
| `auth login`             | Browser-based login to a Moon.     |
| `auth keys create`       | Mint a new API key.                |
| `auth keys list`         | List API keys.                     |
| `auth keys revoke <id>`  | Revoke an API key.                 |

## `soyaos join`

Join an existing Moon as a Comet:

```
soyaos join --moon https://moon.example.com --token <invite>
```

## Exit codes

| Code | Meaning                                    |
| ---- | ------------------------------------------ |
| `0`  | Success                                    |
| `1`  | Generic error                              |
| `2`  | Validation error (manifest, input, etc.)   |
| `3`  | Sandbox / capability violation             |
| `4`  | Auth error                                 |
| `5`  | Upstream / network error                   |
