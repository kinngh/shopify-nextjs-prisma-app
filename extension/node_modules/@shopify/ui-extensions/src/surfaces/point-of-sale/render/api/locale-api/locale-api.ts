import type {RemoteSubscribable} from '@remote-ui/async-subscription';

export interface LocaleApiContent {
  /** IETF-formatted locale at time of page load and a callback to subscribe to value changes. Current supports only one subscription.
   * You can utilize `makeStatefulSubscribable` on a `RemoteSubscribable` to implement multiple subscriptions.
   * Using `makeStatefulSubscribable` or the corresponding hooks counts as a subscription.
   */
  subscribable: RemoteSubscribable<string>;
}

/**
 * Access the merchant’s current locale (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)) to internationalize your extension content.
 */
export interface LocaleApi {
  locale: LocaleApiContent;
}
