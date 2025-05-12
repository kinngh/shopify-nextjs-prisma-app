import type {RenderOrderStatusExtensionTarget} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the proposed `note` applied to the checkout.
 */
export function useNote<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): string | undefined {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('note' in api)) {
    throw new ExtensionHasNoFieldError('note', extensionTarget);
  }

  return useSubscription(api.note);
}
