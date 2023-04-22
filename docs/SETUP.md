# Setup WIP

This is an in-depth guide on using this repo. This goes over getting the base repo up and running, to understand how to add your own customizations server side like registering webhooks, routes, etc, refer to [Notes](/docs/NOTES.md).

- [ ] Run `npm i --force` to install dependencies.

  - Substantial efforts have gone into ensuring we're using the latest package versions, and some incompatibility issues always pop up while installing. There are no negative effects on the functionality just yet, but if you find anything please open an issue.

  - Do not delete `shopify.app.toml` file since that's required by Shopify CLI 3.0 to function properly, even if the file is empty.

- [ ] Create a new app (Public or Custom) from your [Shopify Partner Dashboard](https://partners.shopify.com).

  - The App URL will be generated later in the setup. Add `https://localhost` for now.

- [ ] Build your `.env` file based on `.env.example`.

  - `SHOPIFY_API_KEY`: App API key.
  - `SHOPIFY_API_SECRET`: App secret.
  - `SHOPIFY_API_SCOPES`: Scopes required by your Shopify app. A list of access scopes can be found [here](https://shopify.dev/api/usage/access-scopes)
  - `SHOPIFY_APP_URL`: URL generated from Ngrok.
  - `SHOPIFY_API_VERSION`: Pre-filled to the latest version. All the calls in the repo are based off this API version so if you're downgrading please refer to the official docs instead. The repo is always kept up to date with the newest practices so you can rely on the basic repo to almost always work without depriciation errors popping up.
  - `DATABASE_URL`: Database connection URL. Since we're using Prisma ORM with this repo, it supports SQL and noSQL databases. Read more about it [here](https://www.prisma.io/stack)
  - `ENCRYPTION_STRING`: String to use for Cryption for encrypting sessions token. Add a random salt (or a random string of letters and numbers) and save it. If you loose the string you cannot decrypt your sessions and must be kept safely.

- [ ] NPM Scripts

  - `dev`: Run in dev mode
  - `build`: Build for production
  - `start`: Start in production mode. Requires `npm run build` before starting.
  - `pretty`: Run `prettier` on the entire project.
  - `update`: Force updates all packages to latest version and requires you to manually run `npm i --force` after. Not recommended if you don't know what you're doing.
  - `update:url`: Use `@shopify/cli-kit` to update URLs to your Shopify partner dashboard. Requires a proper setup of `.env` file.
  - `ngrok:auth`: Replace `<auth-token-goes-here>` with your ngrok token and run it to activate ngrok.
  - `ngrok`: Starts ngrok on port 3000.
  - `shopify`: Allows you to accesss Shopify CLI commands. Try `npm run shopify help` for more info.
  - `s:e:create`: Create a Shopify extension.
  - `s:e:deploy`: Deploy extension to Shopify.
  - `pg:create`: Create a new folder `database` and init a PostgreSQL instance. Requires you to have postgres installed.
    - Run `brew install postgresql`
  - `pg:start`: Start a PostgreSQL instance on `database`. Requires you to run `npm run pg:create` before you can do this.
  - `pg:stop`: Stop PostgreSQL server.
  - `prisma`: Generic command to access `prisma` commands.
  - `prisma:push`: Push `schema.prisma` to your `DATABASE_URL` database.
  - `prisma:pull`: Pull database schema from `DATABASE_URL` database and generates a `schema.prisma` file.
  - `prepare`: Reserved script to generate `@prisma/client`.

- [ ] Setup Partner Dashboard

  - Run `npm run ngrok` to generate your subdomain. Copy the `https://<your-url>` domain and add it in `SHOPIFY_APP_URL` in your `.env` file.
  - Run `npm run update:url` OR you can do it manually by heading over to Shopify Partner Dashboard > Apps > _Your App Name_ > App Setup
  - In the URLs section
    - App URL: `https://<your-url>`
    - Allowed Redirection URL(s):
      - `https://<your-url>/api/auth/callback`
      - `https://<your-url>/api/auth/tokens`
  - A common _gotcha_ is ensuring you are using the same URL in your `.env` and App Setup sections and any discrepancy will result in "URI not whitelisted" issue.
  - GPDR handlers are available at `page/api/gdpr/` and the URLs to register are:
    - Customers Data Request: `https://<your-url>/api/gdpr/customers_data_request`
    - Customers Redact: `https://<your-url>/api/gdpr/customers_redact`
    - Shop Redact: `https://<your-url>/api/gdpr/shop_redact`
  - App Proxy routes are setup to allow accessing data from your app directly from the store. An example proxy route has been setup and is available at `/pages/api/proxy_route`. First you need to setup your base urls. Here's how to get it working:

    - Subpath Prefix: `apps`
    - Subpath: `next-proxy`
    - Proxy URL: `https://<your-url>/api/proxy_route`

    - So when a merchant visits `https://shop-url.com/apps/next-proxy/`, the response to that request will come from `https://<your-url>/api/proxy_route`. A middleware has already been setup to check signatures so you don't have to worry about authenticating proxy calls, and is available at `utils/middleware/verifyProxy.js`.
    - Subsequently, any child requests will be mapped the same way. A call to `https://shop-url.com/apps/next-proxy/json` will be routed to `https://<your-url>/api/proxy_route/json`.
    - To confirm if you've setup app proxy properly, head over to `https://shop-url.myshopify.com/apps/next-proxy/json` to confirm if you get a JSON being returned with the configuration set above^
    - A common _gotcha_ is if you're creating multiple apps that all use the same subpath (`next-proxy` in this case), all susbequent installs will throw a `404` error because Shopify serializes routes based on installation. To avoid this, please change the subpath to something that's unique to your app. I prefer using the format `<<appname>>-proxy`

- [ ] Running App
  - If it's your first time connecting to said database, run `npx prisma db push` to get your database working.
  - Run `npm run dev`, your database and ngrok.
  - Install the app by heading over to `https://ngrokurl.io/api/auth?shop=mystorename.myshopify.com`.
