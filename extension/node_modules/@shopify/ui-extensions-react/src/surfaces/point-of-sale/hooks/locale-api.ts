import {useEffect, useRef, useState} from 'react';

import {
  StatefulRemoteSubscribable,
  makeStatefulSubscribable,
} from '@remote-ui/async-subscription';

import {useApi} from './api';

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableLocale` call.
 * Use `destroyStatefulSubscribableLocale` to destroy it and all of the subscribers.
 */
let statefulSubscribable: StatefulRemoteSubscribable<string> | undefined;

/**
 * Verifies that the API has a Locale in it.
 */
const isLocaleApi = (api: any): boolean => {
  return 'locale' in api;
};

/**
 * A hook utilizing `useState` and the `useStatefulSubscribableLocale` function to create a component state.
 * @returns this hook returns the latest Locale state which re-renders on change.
 */
export function useLocaleSubscription(): string {
  const statefulSubscribableLocale = useStatefulSubscribableLocale();
  const [locale, setLocale] = useState<string>(
    statefulSubscribableLocale.current,
  );

  const unsubscribeRef = useRef<() => void>();

  useEffect(() => {
    if (!unsubscribeRef.current) {
      statefulSubscribableLocale.subscribe((locale: string) => {
        setLocale(locale);
      });
    }
  }, [statefulSubscribableLocale]);

  return locale;
}

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple Locale subscriptions.
 * @returns StatefulRemoteSubscribable object with a Locale in it.
 */
export function useStatefulSubscribableLocale(): StatefulRemoteSubscribable<string> {
  const api = useApi();
  if (!isLocaleApi(api)) {
    throw new Error('No locale api found');
  }
  const {subscribable} = api.locale;

  if (!statefulSubscribable) {
    statefulSubscribable = makeStatefulSubscribable(subscribable);
  }

  return statefulSubscribable;
}
/**
 * A function destroying the subscriptions `useStatefulSubscribableCart` has.
 */
export function destroyStatefulSubscribableLocale(): void {
  statefulSubscribable?.destroy();
  statefulSubscribable = undefined;
}
