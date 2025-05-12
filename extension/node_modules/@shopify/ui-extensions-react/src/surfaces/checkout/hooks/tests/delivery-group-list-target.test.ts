import type {
  DeliveryGroup,
  ExtensionTarget,
  ShippingOption,
} from '@shopify/ui-extensions/checkout';

import {useDeliveryGroupListTarget} from '../delivery-group-list-target';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useDeliveryGroupListTarget', () => {
  it('returns the DeliveryGroupList target if it exists', async () => {
    const deliveryGroup: DeliveryGroup = {
      selectedDeliveryOption: {
        handle: 'shipping_method_1',
      },
      groupType: 'oneTimePurchase',
      isDeliveryRequired: true,
      targetedCartLines: [
        {
          id: 'gid://shopify/CartLine/stable_id',
        },
      ],
      deliveryOptions: [
        {
          handle: 'shipping_method_1',
          title: 'Shipping method 1',
          description: undefined,
          type: 'shipping',
          carrier: {
            name: 'test carrier',
          },
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
        } as ShippingOption,
      ],
    };

    const deliveryGroup2: DeliveryGroup = {
      ...deliveryGroup,
      targetedCartLines: [
        {
          id: 'gid://shopify/CartLine/stable_id_2',
        },
      ],
    };

    const target: ExtensionTarget =
      'purchase.checkout.shipping-option-list.render-before';

    const {value} = mount.hook(() => useDeliveryGroupListTarget(), {
      extensionApi: {
        extension: {target},
        target: createMockStatefulRemoteSubscribable({
          groupType: 'oneTimePurchase',
          deliveryGroups: [deliveryGroup, deliveryGroup2],
        }) as any,
      },
    });

    expect(value).toStrictEqual({
      groupType: 'oneTimePurchase',
      deliveryGroups: [deliveryGroup, deliveryGroup2],
    });
  });
});
