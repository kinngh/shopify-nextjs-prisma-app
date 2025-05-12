import type {PickupLocationOption} from '@shopify/ui-extensions/checkout';
import {useMemo} from 'react';

import {ExtensionHasNoTargetError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the pickup location option the extension is attached to. This hook can only be used by extensions in the following
 * extension target:
 * - `purchase.checkout.pickup-location-option-item.render-after`
 */
export function usePickupLocationOptionTarget(): {
  pickupLocationOptionTarget: PickupLocationOption;
  isTargetSelected: boolean;
} {
  const api =
    useApi<'purchase.checkout.pickup-location-option-item.render-after'>();
  if (!api.target || api.isTargetSelected === undefined) {
    throw new ExtensionHasNoTargetError(
      'usePickupLocationOptionTarget',
      api.extension.target,
    );
  }

  const pickupLocationOptionTarget = useSubscription(api.target);
  const isTargetSelected = useSubscription(api.isTargetSelected);

  const pickupLocationOption = useMemo(() => {
    return {
      pickupLocationOptionTarget,
      isTargetSelected,
    };
  }, [pickupLocationOptionTarget, isTargetSelected]);

  return pickupLocationOption;
}
