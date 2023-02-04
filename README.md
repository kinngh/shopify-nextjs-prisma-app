# Shopify Next.js x Prisma Boilerplate

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkinngh%2Fshopify-nextjs-prisma-app&env=SHOPIFY_API_KEY,SHOPIFY_API_SECRET,SHOPIFY_API_SCOPES,SHOPIFY_APP_URL,SHOPIFY_API_VERSION,DATABASE_URL,ENCRYPTION_STRING&project-name=shopify-next-prisma-app&repository-name=kinngh-shopify-next-prisma-app&redirect-url=https%3A%2F%2Ftwitter.com%2Fkinngh)

An embedded app starter template to get up and ready with Shopify app development with Next.js and Prisma.

I've included [notes](/NOTES.md) on this repo which goes over the repo on why certain choices were made.

## VSCode extension

The VSCode extension has a collection of snippets that is used to quickly generate boilerplate code for creating `/api`, `/proxy_route`, webhook functions and client provider endpoints to speed up your dev process.

[DOWNLOAD](https://marketplace.visualstudio.com/items?itemName=kinngh.simple-shop-snippets-nextjs)

![Snippets snippeting](https://github.com/kinngh/csa-vscode-extension/raw/main/assets/snippets.gif)

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
