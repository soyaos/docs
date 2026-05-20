---
id: editions
title: Editions
sidebar_position: 3
description: Six deployment shapes from one binary.
---

# Editions

SoyaOS is one binary. The *edition* is a deployment shape — which node
roles you run, who runs them, and how they federate.

| Edition         | Node roles            | Who runs it                 | Alpha cost   |
| --------------- | --------------------- | --------------------------- | ------------ |
| Spark           | Comet                 | Individual builder          | Free         |
| Studio          | Moon                  | Solo creator                | Free         |
| Atelier         | Moon + Comet          | 5–30 person creator studio  | Free (alpha) |
| Forge           | Planet + Moon + Comet | SMB / enterprise on-prem    | Free (alpha) |
| Constellation   | Multi-Planet mesh     | Global / regulated teams    | Free (alpha) |
| Pulsar (cloud)  | Hosted Planet         | SoyaOS, Inc. (TBD)          | TBD          |

## Picking an edition

- **Just kicking the tires?** `Spark` — single binary, no UI.
- **Solo creator with a UI?** `Studio` — runs a local Moon with embedded
  Studio.
- **Small studio?** `Atelier` — one Moon, several Comet workers.
- **Enterprise on-prem?** `Forge` — own everything, including identity.
- **Global / regulated?** `Constellation` — many Planets, region pinning.
- **Don't want to run it?** `Pulsar` — managed by us.

## Switching editions

There is no separate install. To upgrade from `Spark` to `Studio`, run
`soyaos serve --role moon` instead of `soyaos run`. To upgrade from
`Studio` to `Atelier`, point a second machine at the same Moon via
`soyaos join`.

See [Architecture](./architecture.md) for the role model behind the
table.
