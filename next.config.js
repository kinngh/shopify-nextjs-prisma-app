const webpack = require("webpack");
const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);
const appUrl = JSON.stringify(process.env.SHOPIFY_APP_URL);

module.exports = {
  webpack: (config) => {
    const env = { API_KEY: apiKey, appOrigin: appUrl };
    config.plugins.push(new webpack.DefinePlugin(env));

    //MARK:- ESM support for .mjs
    // config.module.rules.push({
    //   test: /\.mjs$/,
    //   include: /node_modules/,
    //   type: "javascript/auto",
    // });

    return config;
  },
};
