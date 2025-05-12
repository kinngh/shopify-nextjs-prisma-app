import type {
  DeliveryGroup,
  ShippingOption,
} from '@shopify/ui-extensions/checkout';

import {useDeliveryGroups} from '../delivery-groups';

import type {PartialExtensionApi} from './mount';
import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('Delivery Groups API hooks', () => {
  describe('useDeliveryGroups', () => {
    it('returns the current devliery groups', async () => {
      const deliveryGroups: DeliveryGroup[] = [
        {
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
        },
      ];

      const extensionApi: PartialExtensionApi = {
        deliveryGroups: createMockStatefulRemoteSubscribable(deliveryGroups),
      };

      const {value} = mount.hook(() => useDeliveryGroups(), {extensionApi});

      expect(value).toBe(deliveryGroups);
    });
  });
});
