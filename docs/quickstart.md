---
id: quickstart
title: Quickstart
sidebar_position: 1
description: Run soya:echo in five minutes.
---

# Quickstart

Five minutes from "nothing installed" to a running `soya:echo`.

## 1. Install

```bash
brew tap soyaos/soyaos
brew install soyaos
```

Verify:

```bash
soyaos version
```

## 2. Scaffold

Create a new SoyaPack from the bundled `echo` template:

```bash
soyaos pack init hello --template echo
cd hello
```

This produces a minimal SoyaPack v0 bundle:

```
hello/
├── soyapack.yaml
├── prompts/
│   └── reply.md
└── examples/
    └── hello.json
```

## 3. Validate

```bash
soyaos pack validate .
```

The validator checks the manifest against the SoyaPack v0 schema and
fails fast on missing capabilities.

## 4. Run

```bash
soyaos run . --input '{"text":"hi"}'
```

You should see:

```json
{ "reply": "hi" }
```

## 5. What next?

- Read [Architecture](./architecture.md) to understand Planet / Moon / Comet.
- Pick a deployment shape in [Editions](./editions.md).
- Browse the [SoyaPack v0 manifest reference](./soyapack-v0.md) to build
  your own Agent.
