export {};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface AppBridge {
  /**
   * The static configuration values that will not change during runtime.
   */
  config?: Config;

  /**
   * The Shopify surface that the app is embedded within.
   */
  surface?: 'checkout';

  /**
   * The platform or application that the app is embedded within.
   */
  platform?: 'browser' | 'shop-app' | 'pos';

  /**
   * The ID token providing a set of claims as a signed [JSON Web Token (JWT)](https://openid.net/specs/openid-connect-core-1_0.html#IDToken%5C)
   * with a TTL of 5 minutes. It can be used to ensure that requests came from a Shopify authenticated user.
   * See the [ID Token documentation](https://shopify.dev/docs/apps/build/authentication-authorization/session-tokens) for more information.
   *
   * @see https://shopify.dev/docs/api/checkout-ui-extensions/latest/apis/session-token
   * @see https://shopify.dev/docs/apps/build/authentication-authorization/session-tokens
   */
  idToken?: () => Promise<string>;

  /**
   * The references and APIs to the UI extension that helped bootstrap the iframe.
   */
  extension?: Extension;

  /**
   * Information about the current visitor.
   *
   * @ignore async via our RPC endpoints to ensure a secure handshake between
   * host and client is established.
   */
  visitor?: () => Promise<Visitor>;
}

interface Config {
  /**
   * The locale of the shop that’s embedding the app.
   */
  locale?: string;
}

interface Extension {
  /**
   * The unique handle name of the UI extension as defined by the developer.
   *
   * Learn more about [extension configuration](https://shopify.dev/docs/api/checkout-ui-extensions/latest/configuration#how-it-works).
   */
  handle?: string;

  /**
   * A MessagePort instance for communicating directly to and from the UI
   * Extension that created the iframe. It will need to be started to begin
   * receiving messages.
   *
   * Learn more about [MessagePort on MDN](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort).
   */
  port?: MessagePort;

  /**
   * Set an iframe’s size. Depending on the context, the host page may decide
   * to apply or ignore the new sizes. For example, if the iframe is meant to
   * fill its parent container the host would ignore the request. Conversely,
   * if the parent container allows the iframe to fill it the host would
   * apply the new size.
   *
   * Alias to `window.resizeTo()`, available here for feature discovery by the
   * embedding app.
   *
   * Learn more about [resizeTo() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo).
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  resizeTo?: Window['resizeTo'];
}

interface Visitor {
  /**
   * The unique token of a given user across all surfaces in a shop,
   * present if processing permission is provided.
   *
   * @ignore this maps to the _shopify_y cookie which Trekkie refers to as a
   * uniqToken.
   */
  id?: string;
}
