import type {
  ExtensionTarget,
  ShippingOption,
  ShippingOptionItemRenderMode,
} from '@shopify/ui-extensions/checkout';

import {useShippingOptionTarget} from '../shipping-option-target';
import {ExtensionHasNoTargetError} from '../../errors';

import {createMockStatefulRemoteSubscribable, mount} from './mount';

describe('useShippingOptionTarget', () => {
  const shippingOption = {
    handle: 'shipping_method_1',
    title: 'Shipping method 1',
    description: 'something',
    type: 'shipping',
    carrier: {name: undefined},
    cost: {
      amount: 10,
      currencyCode: 'USD',
    },
    costAfterDiscounts: {
      amount: 10,
      currencyCode: 'USD',
    },
    deliveryEstimate: {
      timeInTransit: {
        lower: 10000,
        upper: 10000,
      },
    },
  } as ShippingOption;

  const renderMode: ShippingOptionItemRenderMode = {
    overlay: false,
  };

  it('throws if extension target has no api.target', async () => {
    const runner = async () => {
      const target: ExtensionTarget = 'purchase.checkout.block.render';
      return mount.hook(() => useShippingOptionTarget(), {
        extensionApi: {
          extension: {target},
          target: undefined,
          isTargetSelected: createMockStatefulRemoteSubscribable(true),
          renderMode,
        },
      });
    };

    await expect(runner).rejects.toThrow(ExtensionHasNoTargetError);
  });

  it('throws if extension target has no api.isTargetSelected', async () => {
    const runner = async () => {
      const target: ExtensionTarget = 'purchase.checkout.block.render';
      return mount.hook(() => useShippingOptionTarget(), {
        extensionApi: {
          extension: {target},
          target: createMockStatefulRemoteSubscribable(shippingOption),
          isTargetSelected: undefined,
          renderMode,
        },
      });
    };

    await expect(runner).rejects.toThrow(ExtensionHasNoTargetError);
  });

  it('returns the shipping option target if it exists', async () => {
    const target: ExtensionTarget =
      'purchase.checkout.shipping-option-item.render-after';
    const {value} = mount.hook(() => useShippingOptionTarget(), {
      extensionApi: {
        extension: {target},
        target: createMockStatefulRemoteSubscribable(shippingOption),
        isTargetSelected: createMockStatefulRemoteSubscribable(true),
        renderMode,
      },
    });

    expect(value).toStrictEqual({
      shippingOptionTarget: shippingOption,
      isTargetSelected: true,
      renderMode,
    });
  });
});
