# docs

Source for **[docs.soyaos.ai](https://docs.soyaos.ai)** — the SoyaOS
official documentation, built with [Docusaurus 3](https://docusaurus.io).

We chose Docusaurus over Mintlify because the toolchain is open-source —
we want anyone to be able to spin up a private fork of this site without
paying a vendor.

## Seed content

| Page                | Path               |
| ------------------- | ------------------ |
| Quickstart          | `docs/quickstart.md` |
| Architecture        | `docs/architecture.md` |
| Editions            | `docs/editions.md` |
| SoyaPack v0 manifest | `docs/soyapack-v0.md` |
| CLI v0 reference    | `docs/cli-v0.md`   |

## Local dev

```bash
bun install
bun run dev          # http://localhost:3000
```

`npm install && npm run dev` also works if you don't have Bun.

## 中文 Quickstart

SoyaOS 官方文档站，Docusaurus 3 构建。本地：

```bash
bun install
bun run dev          # http://localhost:3000
```

构建产物在 `build/`。中文文档放在 `i18n/zh-Hans/` 下（待补）。

## Deployment

- **Production**: Cloudflare Pages, custom domain `docs.soyaos.ai`.
- **Build command**: `bun run build` (or `npm run build`).
- **Output directory**: `build/`.

## License

[MIT](./LICENSE) — © 2026 SoyaOS Contributors.
