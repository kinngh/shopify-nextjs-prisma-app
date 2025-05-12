import type {RemoteSubscribable} from '@remote-ui/async-subscription';

/** The scanner source the POS device supports. */
export type ScannerSource = 'camera' | 'external' | 'embedded';

export interface ScannerSubscriptionResult {
  /** The string data from the last scanner event received. */
  data?: string;
  /** The scanning source from which the scan event came. */
  source?: ScannerSource;
}

export interface ScannerApiContent {
  /** Creates a subscription to scan events
   * Provides an initial value and a callback to subscribe to value changes. Currently supports only one subscription.
   * You can utilize `makeStatefulSubscribable` on a `RemoteSubscribable` to implement multiple subscriptions.
   * Using `makeStatefulSubscribable` or the corresponding hooks counts as a subscription.
   */
  scannerDataSubscribable: RemoteSubscribable<ScannerSubscriptionResult>;
  /** Creates a subscription to the scanning sources available on the POS device.
   * Provides an initial value and a callback to subscribe to value changes. Currently supports only one subscription.
   * You can utilize `makeStatefulSubscribable` on a `RemoteSubscribable` to implement multiple subscriptions.
   * Using `makeStatefulSubscribable` or the corresponding hooks counts as a subscription.
   */
  scannerSourcesSubscribable: RemoteSubscribable<ScannerSource[]>;
}

export interface ScannerApi {
  scanner: ScannerApiContent;
}
