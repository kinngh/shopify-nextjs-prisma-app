# Shopify Node.js x Next.js x MongoDB Boilerplate

An embedded app starter template to get up and ready with Shopify app development with JavaScript. A TypeScript variant is in progress.

## Why I made this

The Shopify CLI generates an amazing starter app, but I wanted a quick-start app that had:

- MongoDB based sessions/persistence.
- inApp Subscriptions setup and ready to go.
- Local Tunnel instead of Ngrok to move towards a pure Open Source experience.
- Misc boilerplate code and templates to quickly setup routes, webhooks and more.

## Notes

### Setup

- Run `npm i --force` to install all dependencies.
- Create `.env` file based on `.env.example`.
- Add `--subdomain <your-subdomain-name>` to the `tunnel` script in `package.json` to have a static subdomain and update the value at `SHOPIFY_APP_URL` in `.env` and your App Settings in your Partner Dashboard.
- The GDPR endpoints are available in `routes/gdpr/` folder. Add the following URLs in the GDPR section of your App Setup
  - Data Request Endpoint: `https://your.app.url/app/gdpr/customers_data_request`
  - Data Erase Endpoint: `https://your.app.url/app/gdpr/customers_redact`
  - Shop Data Erase Endpoint: `https://your.app.url/app/gdpr/shop_redact`

### Run

- Open two terminal windows with `npm run tunnel` and `npm run dev`, this way you have one session running the `localtunnel` at all times.
- If you're using a locally hosted version of MongoDB, ensure `mongod` server is running.
  - To specify a directory for your MongoDB database, run `mongod --dbpath /path/to/directory`

### Misc notes

- Most scripts in `package.json` contain `rm -rf .next` to remove the generated `.next` folder to reduce caching errors.
- MongoDB collections are kept separate to allow for flexibility while building applications. Feel free to rewrite them.