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

Netlify deployment

To deploy to Netlify (monorepo), this repo includes `netlify.toml` which tells Netlify to:

- use `client` as the build base,
- run `npm install && npm run build`,
- publish the `dist/public` folder,
- and rewrite all routes to `index.html` for SPA routing.

If you prefer to run the build locally and inspect the output:

```bash
# build client
npm --prefix client run build

# serve the built site (example using `serve`)
npx serve dist/public
```

If you still see 404s on the hosted site, check the host's build logs to confirm the build ran in the `client` folder and finished successfully, and that `dist/public/index.html` exists in the final output.
