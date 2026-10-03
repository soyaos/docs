---
id: quickstart
title: Quickstart
sidebar_position: 1
description: Run soya:echo in five minutes.
---

# Quickstart

SoyaOS is in alpha. The Homebrew tap currently has a placeholder checksum, so
the installation command previously shown here does not work. The
`https://soyaos.ai/install` script is also unavailable. Download the
[v0.1.0-alpha.3 release](https://github.com/soyaos/soyaos/releases/tag/v0.1.0-alpha.3)
for your operating system and architecture instead.

## 1. Install

For example, on Apple Silicon:

```bash
curl -fL https://github.com/soyaos/soyaos/releases/download/v0.1.0-alpha.3/soyaos-darwin-arm64 -o soyaos
chmod +x soyaos
```

Verify:

```bash
./soyaos version
```

## 2. Start Solo

```bash
./soyaos start
```

Leave this terminal running. The OpenAI-compatible API listens on
`127.0.0.1:7474`.

## 3. Run the echo Agent

In another terminal, from the directory containing the binary:

```bash
./soyaos agent run echo "hello"
```

For more commands, run `./soyaos help`. Homebrew's
[third-party tap trust rule](https://docs.brew.sh/Tap-Trust) also applies after
the formula is repaired.

## 4. What next?

- Read [Architecture](./architecture.md) to understand Planet / Moon / Comet.
- Pick a deployment shape in [Editions](./editions.md).
- Browse the [SoyaPack v0 manifest reference](./soyapack-v0.md) to build
  your own Agent.
