import type {
  Attribute,
  AttributeChange,
  AttributeChangeResult,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `attributes` applied to the checkout.
 */
export function useAttributes<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Attribute[] | undefined {
  return useSubscription(useApi<Target>().attributes);
}

/**
 * Returns the values for the specified `attributes` applied to the checkout.
 *
 * @param keys - An array of attribute keys.
 */
export function useAttributeValues<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
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

/**
 * Returns a function to mutate the `attributes` property of the checkout.
 */
export function useApplyAttributeChange<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): (change: AttributeChange) => Promise<AttributeChangeResult> {
  const api = useApi<Target>();

  if ('applyAttributeChange' in api) {
    return api.applyAttributeChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyAttributeChange',
    api.extension.target,
  );
}
