import type {
  RedeemableChangeResult,
  RedeemableChange,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';

/**
 * Returns a function to apply a change to add a redeemable.
 */
export function useApplyRedeemableChange(): (
  change: RedeemableChange,
) => Promise<RedeemableChangeResult> {
  const api = useApi<'purchase.checkout.gift-card.render'>();

  if (!api.applyRedeemableChange) {
    throw new ExtensionHasNoMethodError(
      'useApplyRedeemableChange',
      api.extension.target,
    );
  }

  return api.applyRedeemableChange;
}
