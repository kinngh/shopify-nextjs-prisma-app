import type {
  CartInstructions,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the cart instructions used to create the checkout and possibly limit extension capabilities.
 */
export function useInstructions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartInstructions {
  return useSubscription(useApi<Target>().instructions);
}
