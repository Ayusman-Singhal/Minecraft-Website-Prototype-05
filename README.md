# Minecraft Website (Frontend Only)

This workspace was trimmed to keep the frontend only. Backend/server files were removed.

Quick start:

```bash
cd client
npm install
npm run dev
```

Deployment (Vercel)

If you deploy this monorepo to Vercel, the project is configured to build the frontend in `client` and serve the static output from `dist/public`. Vercel will run `npm install` and `npm run build` in `client` and use `dist/public` as the output directory (see `vercel.json`).

If you prefer a different output directory, update `client/vite.config.ts` `build.outDir` or adjust `vercel.json` `distDir` accordingly.
