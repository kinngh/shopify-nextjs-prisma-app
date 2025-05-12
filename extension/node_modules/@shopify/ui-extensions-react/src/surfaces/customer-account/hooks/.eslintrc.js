module.exports = {
  rules: {
    // This is necessary because https://github.com/Shopify/generate-docs
    // cannot yet infer return types.
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
