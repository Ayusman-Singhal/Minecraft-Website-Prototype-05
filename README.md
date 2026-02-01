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

To deploy to Netlify (monorepo), this repo includes `netlify.toml`. This configuration now:

- runs the client build in the `client` folder,
- publishes repo-level `dist/public` (where Vite writes the output),
- and rewrites all routes to `index.html` for SPA routing.

Local build and verification:

```bash
# build client (outputs to repo-level dist/public)
npm --prefix client run build

# confirm output exists
# ls -la dist/public

# serve the built site (example using `serve`)
npx serve dist/public
```

If you still see 404s on the hosted site, check the host's build logs to confirm the build ran and that `dist/public/index.html` exists in the final output.
