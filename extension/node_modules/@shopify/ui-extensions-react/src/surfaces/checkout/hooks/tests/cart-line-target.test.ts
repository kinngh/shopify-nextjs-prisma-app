import type {ExtensionTarget, CartLine} from '@shopify/ui-extensions/checkout';

import {useCartLineTarget} from '../cart-line-target';
import {ExtensionHasNoTargetError} from '../../errors';
import {useApi} from '../api';

import {createMockStatefulRemoteSubscribable, mount} from './mount';

describe('useCartLineTarget', () => {
  it('throws if extension target has no api.target', async () => {
    const runner = async () => {
      const target: ExtensionTarget = 'purchase.checkout.block.render';
      return mount.hook(() => useCartLineTarget(), {
        extensionApi: {
          extension: {target},
        },
      });
    };

    await expect(runner).rejects.toThrow(ExtensionHasNoTargetError);
  });

  it('returns the cart line target if it exists', async () => {
    const line = {
      id: 'gid://shopify/CartLine/stable_id',
      quantity: 1,
      cost: {
        totalAmount: {
          amount: 10,
          currencyCode: 'USD',
        },
      },
      lineComponents: [],
      merchandise: {
        type: 'variant',
        id: 'product_variant_id',
        title: 'product title',
        requiresShipping: true,
        selectedOptions: [],
        product: {
          id: 'product id',
          vendor: 'product vendor',
          productType: 'product type',
        },
      },
      attributes: [],
      discountAllocations: [],
    } as CartLine;

    const target: ExtensionTarget =
      'purchase.cart-line-item.line-components.render';
    const {value} = mount.hook(() => useCartLineTarget(), {
      extensionApi: {
        extension: {target},
        target: createMockStatefulRemoteSubscribable(line),
      },
    });

    expect(value).toStrictEqual(line);
  });
});
