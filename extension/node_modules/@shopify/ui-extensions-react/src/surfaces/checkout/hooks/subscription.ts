import {useEffect, useState} from 'react';
import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

type Subscriber<T> = Parameters<StatefulRemoteSubscribable<T>['subscribe']>[0];

/**
 * Subscribes to the special wrapper type that all “changeable” values in the
 * checkout use. This hook extracts the most recent value from that object,
 * and subscribes to update the value when changes occur in the checkout.
 *
 * > Note:
 * > You generally shouldn’t need to use this directly, as there are dedicated hooks
 * > for accessing the current value of each individual resource in the checkout.
 */
export function useSubscription<Value>(
  subscription: StatefulRemoteSubscribable<Value>,
): Value {
  const [, setValue] = useState(subscription.current);

  useEffect(() => {
    let didUnsubscribe = false;

    const checkForUpdates: Subscriber<Value> = (newValue) => {
      if (didUnsubscribe) {
        return;
      }

      setValue(newValue);
    };

    const unsubscribe = subscription.subscribe(checkForUpdates);

    // Because we're subscribing in a passive effect,
    // it's possible for an update to occur between render and the effect handler.
    // Check for this and schedule an update if work has occurred.
    checkForUpdates(subscription.current);

    return (): void => {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [subscription]);

  return subscription.current;
}
