# Checkout Extensions

Making requests from checkout extensions requires an update of middleware. The `verifyCheckout` middleware was introduced exactly for that.

A checkout extension will always first hit a OPTIONS HTTP request before it makes a GET or POST, which is why we return `200` on `OPTIONS` and then proceed with everything else.

Please note that you should rely on metafields on checkout since that's the fastest way to get things done, and only use the checkout route if you need to access external services.
