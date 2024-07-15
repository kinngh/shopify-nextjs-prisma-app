# Shopify Next.js x Prisma Boilerplate

An embedded app starter template to get up and ready with Shopify app development with Next.js and Prisma.

I've included [notes](/docs/NOTES.md) on this repo which goes over the repo on why certain choices were made.

## Video

I made a video that goes over the entire repo, creating theme extension and deploying with Vercel and PlanetScale. If you want to learn Shopify app dev in-depth, I also sell a course _[How To Build Shopify Apps](https://kinngh.gumroad.com/l/how-to-make-shopify-apps?utm_source=github&utm_medium=nextjs-repo)_

[![How To Build Shopify Apps Course](https://raw.githubusercontent.com/kinngh/extras/main/csa_promo.png)](https://kinngh.gumroad.com/l/how-to-make-shopify-apps)

[![Creating a Shopify app from scratch](https://i3.ytimg.com/vi/vm8RTN-QSEk/maxresdefault.jpg)](https://www.youtube.com/watch?v=vm8RTN-QSEk)

## Supporting repositories

- [`@kinngh/shopify-node-express-mongodb-app`](https://github.com/kinngh/shopify-node-express-mongodb-app): Shopify app starter repo built with Express.js, React.js and Vite.
- [`@kinngh/shopify-polaris-playground`](https://github.com/kinngh/shopify-polaris-playground): Build your app's UI using Polaris, without an internet connection.

## Why I made this

Building with Express and React was great but eventually there comes a time where you have to remind yourself that you need to get on with the times and use what's new and stable. Serverless made sense, and Next.js made even more.

## Notes

- Refer to [SETUP](/docs/SETUP.md)
- The project comes with snippets to speed up development. Refer to [Snippets](/docs/SNIPPETS.md).
- App Bridge CDN migration guide is available [here](/docs/migration/app-bridge-cdn.md)
- Shopify Managed Installation migration guide is available [here](/docs/migration/oauth-to-managed-installation.md)
- Client Provider abstraction update guide is available [here](/docs/migration/clientProvider.md)
- GraphQL to Managed Webhooks migration guide is available [here](/docs/migration/managed-webhooks.md)
