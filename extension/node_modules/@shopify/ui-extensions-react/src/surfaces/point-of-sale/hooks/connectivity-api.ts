import {useEffect, useRef, useState} from 'react';

import {ConnectivityState} from '@shopify/ui-extensions/point-of-sale';
import {
  StatefulRemoteSubscribable,
  makeStatefulSubscribable,
} from '@remote-ui/async-subscription';

import {useApi} from './api';

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableConnectivity` call.
 * Use `destroyStatefulSubscribableConnectivity` to destroy it and all of the subscribers.
 */
let statefulSubscribable:
  | StatefulRemoteSubscribable<ConnectivityState>
  | undefined;

/**
 * Verifies that the API has a Connectivity in it.
 */
const isConnectivityApi = (api: any): boolean => {
  return 'connectivity' in api;
};

/**
 * A hook utilizing `useState` and the `useStatefulSubscribableConnectivity` function to create a component state.
 * @returns this hook returns the latest Connectivity state which re-renders on change.
 */
export function useConnectivitySubscription(): ConnectivityState {
  const statefulSubscribableConnectivity =
    useStatefulSubscribableConnectivity();
  const [connectivity, setConnectivity] = useState<ConnectivityState>(
    statefulSubscribableConnectivity.current,
  );

  const unsubscribeRef = useRef<() => void>();

  useEffect(() => {
    if (!unsubscribeRef.current) {
      statefulSubscribableConnectivity.subscribe(
        (connectivity: ConnectivityState) => {
          setConnectivity(connectivity);
        },
      );
    }
  }, [statefulSubscribableConnectivity]);

  return connectivity;
}

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple Connectivity subscriptions.
 * @returns StatefulRemoteSubscribable object with a Connectivity in it.
 */
export function useStatefulSubscribableConnectivity(): StatefulRemoteSubscribable<ConnectivityState> {
  const api = useApi();
  if (!isConnectivityApi(api)) {
    throw new Error('No connectivity api found');
  }
  const {subscribable} = api.connectivity;

  if (!statefulSubscribable) {
    statefulSubscribable = makeStatefulSubscribable(subscribable);
  }

  return statefulSubscribable;
}

/**
 * A function destroying the subscriptions `useStatefulSubscribableConnectivity` has.
 */
export function destroyStatefulSubscribableConnectivity(): void {
  statefulSubscribable?.destroy();
  statefulSubscribable = undefined;
}
