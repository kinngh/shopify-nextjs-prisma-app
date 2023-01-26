# Shopify Next.js x Prisma Boilerplate | WIP

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkinngh%2Fshopify-nextjs-prisma-app&env=SHOPIFY_API_KEY,SHOPIFY_API_SECRET,SHOPIFY_API_SCOPES,SHOPIFY_APP_URL,SHOPIFY_API_VERSION,DATABASE_URL,ENCRYPTION_STRING&project-name=shopify-next-prisma-app&repository-name=kinngh-shopify-next-prisma-app&redirect-url=https%3A%2F%2Ftwitter.com%2Fkinngh)

Unstable:

- [ ] Webhooks
  - Use Cloudflare Workers instead if you really need webhooks right now, but I'd wait to use in prod

An embedded app starter template to get up and ready with Shopify app development with Next.js and Prisma.

I've included [notes](/NOTES.md) on this repo which goes over the repo on why certain choices were made.

## Supporting repositories

- [`@kinngh/shopify-node-express-mongodb-app`](https://github.com/kinngh/shopify-node-express-mongodb-app): Shopify app starter repo built with Express.js, React.js and Vite.

- [WIP] [`npx create-shop-app@latest`](https://github.com/kinngh/create-shop-app): A CLI tool to generate embedded Shopify app boilerplate with a tech stack of your own.

## Tech Stack

- Next.js 13
- Prisma (Postgresql)

## Why I made this

Building with Express and React was great but eventually there comes a time where you have to remind yourself that you need to get on with the times and use what's new and stable. Serverless made sense, and Next.js made even more.

## Notes

- Refer to [SETUP](/SETUP.md)
