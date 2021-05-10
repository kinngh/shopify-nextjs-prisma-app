# Shopify Node x Next x MongoDB Boilerplate
An embedded app starter template based on [Shopify.dev Tutorial](https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react), but with MongoDB support.

## Why I made this
The Shopify CLI generates an amazing starter app, but I wanted a quickstart app that had:
- Mongo based sessions/persistence.
- `getSubscriptionUrl` hooked up and ready to go.
- Local Tunnel instead of Ngrok to speed up _my_ dev process.

## Notes

### Setup
- Run `npm i --force` to install all dependencies. 
    - Without a force install, dependency clashes will happen that I refuse to fix because everything works fine (so far).
- Create `.env` file based on `.env.example`.
- Add `--subdomain <your-subdomain-name>` to the `tunnel` script in `package.json` to have a static subdomain and update the value at `SHOPIFY_APP_URL` in `.env` and your App Settings in your Partner Dashboard.
- Update the `--port` in `tunnel` script in `package.json` if you're using a different port than `8081`.

### Run
- Open two terminal windows with `npm run tunnel` and `npm run dev`, this way you have one session running the localtunnel at all times.
- Don't forget to ensure your `mongod` server is running.
    - To specify a directory for your MongoDB database, run `mongod --dbpath /path/to/directory`

### Misc notes
- The `dev` script in `package.json` contains `rm -rf .next` to remove the generated `.next` file because it can cause erros and deleting the file usually fixes it.

## TO-DO
- Add Bcrypt to encrypt session string. 
- Tests.
- Add webhooks implementation.
- Better error handling in `models/SessionModel.js`.
- CONTRIBUTIONS.md