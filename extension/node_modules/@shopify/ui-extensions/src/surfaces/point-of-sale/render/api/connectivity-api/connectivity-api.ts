import type {RemoteSubscribable} from '@remote-ui/async-subscription';

export type ConnectivityStateSeverity = 'Connected' | 'Disconnected';

export interface ConnectivityState {
  /**
   * Whether the device is connected to the internet
   */
  internetConnected: ConnectivityStateSeverity;
}

export interface ConnectivityApiContent {
  /**
   * Creates a subscription to changes in connectivity.
   * Provides an initial value and a callback to subscribe to value changes.
   */
  subscribable: RemoteSubscribable<ConnectivityState>;
}

/**
 * Access information about the device connectivity
 */
export interface ConnectivityApi {
  connectivity: ConnectivityApiContent;
}
