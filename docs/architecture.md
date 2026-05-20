---
id: architecture
title: Architecture
sidebar_position: 2
description: Planet, Moon, and Comet — the three node roles that compose SoyaOS.
---

# Architecture

SoyaOS is one binary that can play three roles. A deployment is just a
particular shape of those roles.

## The three node roles

### Comet

A **Comet** is an ephemeral worker. It runs a single Agent invocation,
streams its output, and exits. Comets are stateless — they pull the
SoyaPack bundle from a Moon, mount a sandboxed `/workdir`, and emit
Scope events as they progress.

> Mental model: a Comet is a fast, opinionated `kubectl exec` for one
> Agent run.

### Moon

A **Moon** is a per-tenant control surface. It hosts the API surface
that developers and users talk to, holds the SoyaPack registry, mints
API keys, and brokers Scope events. A Moon does **not** run Agents
itself; it dispatches to Comets.

> Mental model: a Moon is the "team workspace". One per company / studio /
> household.

### Planet

A **Planet** is the federation root. It owns identity (who you are),
billing (when there is billing), and cross-Moon routing. In `Spark` and
`Studio` editions there is no Planet — the Moon plays its role locally.

> Mental model: a Planet is the "constellation operator". Optional for
> single-tenant deployments.

## How a request flows

```
client SDK ──► Moon ──► Comet
                  ▲          │
                  └── Scope ◄┘
```

1. Client calls the OpenAI-compatible endpoint on a Moon.
2. The Moon resolves the `soya:*` virtual model to a SoyaPack and picks a
   warm Comet (or cold-starts one).
3. The Comet executes the Agent inside its sandbox, streaming Scope
   events back through the Moon.
4. The Moon multiplexes those events to subscribers (Studio, Developer
   Portal, webhooks).

## Why this split?

- **Scaling shape**: Comets are cattle, Moons are pets, Planets are
  almost-pets. You can run a million Comets behind one Moon.
- **Security**: every Agent runs inside a Comet's capability allowlist;
  the Moon never executes user code.
- **Federation**: many Moons can hang off one Planet, or roll up to many
  Planets in the `Constellation` edition.
