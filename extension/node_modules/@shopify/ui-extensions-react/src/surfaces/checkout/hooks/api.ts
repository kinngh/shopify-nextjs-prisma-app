import {useContext} from 'react';
import type {
  RenderExtensionTarget,
  ApiForExtension,
} from '@shopify/ui-extensions/checkout';

import {CheckoutUIExtensionError} from '../errors';
import {ExtensionApiContext} from '../context';

/**
 * Returns the full API object that was passed in to your extension when it was created.
 * Depending on the extension target, this object can contain different properties.
 *
 * For example, the `purchase.checkout.cart-line-item.render-after` extension target will return the [CartLineDetailsApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/cartlinedetailsapi) object.
 * Other targets may only have access to the [StandardApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi) object,
 * which contains a basic set of properties about the checkout.
 *
 * For a full list of the API available to each extension target, see the [ExtensionTargets type](https://shopify.dev/docs/api/checkout-ui-extensions/apis/extensiontargets).
 */
export function useApi<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(_target?: Target): ApiForExtension<Target> {
  const api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new CheckoutUIExtensionError(
      'You can only call this hook when running as a checkout UI extension.',
    );
  }
  return api as ApiForExtension<Target>;
}

/**
 * Returns the full API object that was passed in to your extension when it was created.
 * Depending on the extension target, this object can contain different properties.
 *
 * For example, the `purchase.checkout.cart-line-item.render-after` extension target will return the [CartLineDetailsApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/cartlinedetailsapi) object.
 * Other targets may only have access to the [StandardApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi) object,
 * which contains a basic set of properties about the checkout.
 *
 * For a full list of the API available to each extension target, see the [ExtensionTargets type](https://shopify.dev/docs/api/checkout-ui-extensions/apis/extensiontargets).
 *
 * > Caution: This is deprecated, use `useApi` instead.
 *
 * @deprecated This is deprecated, use `useApi` instead.
 */
export function useExtensionApi<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): ApiForExtension<Target> {
  return useApi();
}
