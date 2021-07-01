# Shopify Node x Next x MongoDB Boilerplate

An embedded app starter template based on [Shopify.dev Tutorial](https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react), but with MongoDB, more boilerplate code and _App Bridge 2.0.x_.

## Why I made this

The Shopify CLI generates an amazing starter app, but I wanted a quick-start app that had:

- MongoDB based sessions/persistence.
- `getSubscriptionUrl` hooked up and ready to go.
- Local Tunnel instead of Ngrok to speed up _my_ dev process.
- Starter files and templates to get up to speed with development.

## Notes

### Setup

- Run `npm i --force` to install all dependencies.
- Create `.env` file based on `.env.example`.
- Add `--subdomain <your-subdomain-name>` to the `tunnel` script in `package.json` to have a static subdomain and update the value at `SHOPIFY_APP_URL` in `.env` and your App Settings in your Partner Dashboard.
- [Local Only] Update the `--port` in `tunnel` script in `package.json` if you're using a different port than `8081`.
- The GDPR endpoints are available in `routes/gdpr/` folder. Add the following URLs in the GDPR section of your App Setup
  - Data Request Endpoint: `https://your.app.url/app/gdpr/customers_data_request`
  - Data Erasure Endpoint: `https://your.app.url/app/gdpr/customers_redact`
  - Shop Data Erasuer Endpoint: `https://your.app.url/app/gdpr/shopRedact`

### Run

- Open two terminal windows with `npm run tunnel` and `npm run dev`, this way you have one session running the `localtunnel` at all times.
- If you're using a locally hosted version of MongoDB, ensure `mongod` server is running.
  - To specify a directory for your MongoDB database, run `mongod --dbpath /path/to/directory`

### Misc notes

- Most scripts in `package.json` contain `rm -rf .next` to remove the generated `.next` folder to reduce caching errors.
- MongoDB collections are kept separate to allow for flexibility while building applications.
