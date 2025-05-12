import {useEffect, useRef, useState} from 'react';

import type {
  ScannerSubscriptionResult,
  ScannerSource,
} from '@shopify/ui-extensions/point-of-sale';
import {
  StatefulRemoteSubscribable,
  makeStatefulSubscribable,
} from '@remote-ui/async-subscription';

import {useApi} from './api';

export type {
  ScannerSource,
  ScannerSubscriptionResult,
  ScannerApiContent,
  ScannerApi,
} from '@shopify/ui-extensions/point-of-sale';

// Scanner Data Subscribable Hooks

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableScannerData` call.
 * Use `destroyStatefulSubscribableCart` to destroy it and all of the subscribers.
 */
let statefulScannerDataSubscribable:
  | StatefulRemoteSubscribable<ScannerSubscriptionResult>
  | undefined;

const isScannerApi = (api: any): boolean => {
  return 'scanner' in api;
};

/**
 * A hook utilizing `useState` and the `useStatefulSubscribableScannerData` function to create a component state.
 * @returns this hook returns the latest scan result state which re-renders on change.
 */
export function useScannerDataSubscription(): ScannerSubscriptionResult {
  const statefulSubscribableScanner = useStatefulSubscribableScannerData();
  const [scanResult, setScanResult] = useState<ScannerSubscriptionResult>(
    statefulSubscribableScanner.current,
  );

  const unsubscribeRef = useRef<() => void>();

  useEffect(() => {
    if (!unsubscribeRef.current) {
      statefulSubscribableScanner.subscribe(
        (scanResult: ScannerSubscriptionResult) => {
          setScanResult(scanResult);
        },
      );
    }
  }, [statefulSubscribableScanner]);

  return scanResult;
}

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple scanner subscriptions.
 * @returns StatefulRemoteSubscribable object with a scan result in it.
 */
export function useStatefulSubscribableScannerData(): StatefulRemoteSubscribable<ScannerSubscriptionResult> {
  const api = useApi();
  if (!isScannerApi(api)) {
    throw new Error('No scanner api found');
  }
  const {scannerDataSubscribable} = api.scanner;

  if (!statefulScannerDataSubscribable) {
    statefulScannerDataSubscribable = makeStatefulSubscribable(
      scannerDataSubscribable,
    );
  }

  return statefulScannerDataSubscribable;
}

/**
 * A function destroying the subscriptions `useStatefulSubscribableScannerData` has.
 */
export function destroyStatefulSubscribableScannerData(): void {
  statefulScannerDataSubscribable?.destroy();
  statefulScannerDataSubscribable = undefined;
}

// Scanner Sources Subscribable Hooks

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableScannerData` call.
 * Use `destroyStatefulSubscribableCart` to destroy it and all of the subscribers.
 */
let statefulScannerSourcesSubscribable:
  | StatefulRemoteSubscribable<ScannerSource[]>
  | undefined;

/**
 * A hook utilizing `useState` and the `useStatefulSubscribableScannerData` function to create a component state.
 * @returns this hook returns the latest scan result state which re-renders on change.
 */
export function useScannerSourcesSubscription(): ScannerSource[] {
  const statefulSubscribableScannerSources =
    useStatefulSubscribableScannerSources();

  const [scannerSources, setScannerSources] = useState<ScannerSource[]>(
    statefulSubscribableScannerSources.current,
  );

  const unsubscribeRef = useRef<() => void>();

  useEffect(() => {
    if (!unsubscribeRef.current) {
      statefulSubscribableScannerSources.subscribe(
        (scannerSources: ScannerSource[]) => {
          setScannerSources(scannerSources);
        },
      );
    }
  }, [statefulSubscribableScannerSources]);

  return scannerSources;
}

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple scanner subscriptions.
 * @returns StatefulRemoteSubscribable object with a scan result in it.
 */
export function useStatefulSubscribableScannerSources(): StatefulRemoteSubscribable<
  ScannerSource[]
> {
  const api = useApi();
  if (!isScannerApi(api)) {
    throw new Error('No scanner api found');
  }
  const {scannerSourcesSubscribable} = api.scanner;

  if (!statefulScannerSourcesSubscribable) {
    statefulScannerSourcesSubscribable = makeStatefulSubscribable(
      scannerSourcesSubscribable,
    );
  }

  return statefulScannerSourcesSubscribable;
}
/**
 * A function destroying the subscriptions `useStatefulSubscribableScannerData` has.
 */
export function destroyStatefulSubscribableScannerSources(): void {
  statefulScannerSourcesSubscribable?.destroy();
  statefulScannerSourcesSubscribable = undefined;
}
