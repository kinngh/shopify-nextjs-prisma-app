# Creating Extensions

When creating extensions, do not just run extension generator in this folder. Instead, follow this to reduce dependency clash:

1. If you haven't already, run `npm run g:install`. This install `@shopify/app` and `@shopify/cli` packages globally.
2. Change the folder structure.

Prev:
`nextjs-app/`

After:
`app-name/`
`app-name/extensions`
`app-name/nextjs-app`

This ensures extensions have their own `package.json` and do not have issues with everything else we have installed in our Next.js app.

3. In `app-name/extensions`, run `npm init --y` and add the following scripts to your `package.json`

```json
"scripts": {
    "shopify": "shopify",
    "generate": "shopify app generate extension",
    "dev": "shopify app dev",
    "build": "shopify app build",
    "info": "shopify app info",
    "deploy": "shopify app deploy",
  },
```

4. You're now ready to create extensions! When deploying to vercel, you will have to change settings to point to `app-name/nextjs-app` for build and deployment.
