# Orion Docs

User-facing help for [Orion](https://www.orion-agent.ai), published at [docs.orion-agent.ai](https://docs.orion-agent.ai).

Built with [VitePress](https://vitepress.dev). Source markdown lives in `docs/`.

## Local development

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Create a new Vercel project rooted at this directory (`Orion-docs`).
2. Set the production domain to `docs.orion-agent.ai`.
3. Vercel reads `vercel.json` for build settings (`npm run build` → `docs/.vitepress/dist`).

No environment variables are required.

## Adding articles

1. Add a markdown file under `docs/` (for example `docs/troubleshooting/my-topic.md`).
2. Register it in `docs/.vitepress/config.ts` sidebar.
3. Follow the `create-user-facing-docs` agent skill in Orion-app for tone and structure.

Developer docs (architecture, agent API, contributing) stay in [Orion-app](https://github.com/nicolasakf/Orion-app).
