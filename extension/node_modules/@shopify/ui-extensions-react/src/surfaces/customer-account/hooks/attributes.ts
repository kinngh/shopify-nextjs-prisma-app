import type {
  Attribute,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the proposed `attributes` applied to the checkout.
 */
export function useAttributes<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Attribute[] | undefined {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('attributes' in api)) {
    throw new ExtensionHasNoFieldError('attributes', extensionTarget);
  }

  return useSubscription(api.attributes);
}

/**
 * Returns the values for the specified `attributes` applied to the checkout.
 *
 * @param keys - An array of attribute keys.
 */
export function useAttributeValues<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(keys: string[]): (string | undefined)[] {
  const attributes = useAttributes<Target>();

  if (!attributes?.length) {
    return [];
  }

  return keys.map((key) => {
    const attribute = attributes.find((attribute) => attribute.key === key);
    return attribute?.value;
  });
}
