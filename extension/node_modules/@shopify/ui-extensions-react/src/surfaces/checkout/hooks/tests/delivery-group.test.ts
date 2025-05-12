import type {
  DeliveryGroup,
  ShippingOption,
  CartLine,
} from '@shopify/ui-extensions/checkout';

import {useDeliveryGroup} from '../delivery-group';

import type {PartialExtensionApi} from './mount';
import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('Delivery Group API hooks', () => {
  describe('useDeliveryGroup', () => {
    const defaultLine = {
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

    it('returns undefined when no delivery group is provided', async () => {
      const extensionApi: PartialExtensionApi = {
        lines: createMockStatefulRemoteSubscribable([defaultLine]),
      };

      const {value} = mount.hook(() => useDeliveryGroup(undefined), {
        extensionApi,
      });

      expect(value).toBeUndefined();
    });

    it('returns details for the given delivery group', async () => {
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

          {
            handle: 'shipping_method_2',
            title: 'Shipping method 2',
            description: undefined,
            type: 'shipping',
            carrier: {
              name: 'test carrier',
            },
            cost: {
              amount: 20,
              currencyCode: 'USD',
            },
            costAfterDiscounts: {
              amount: 20,
              currencyCode: 'USD',
            },
            deliveryEstimate: {
              timeInTransit: {
                lower: 3000,
                upper: 5000,
              },
            },
          } as ShippingOption,
        ],
      };

      const extensionApi: PartialExtensionApi = {
        lines: createMockStatefulRemoteSubscribable([defaultLine]),
      };

      const {value} = mount.hook(() => useDeliveryGroup(deliveryGroup), {
        extensionApi,
      });

      const expectedDeliveryGroup = {
        ...deliveryGroup,
        selectedDeliveryOption: deliveryGroup.deliveryOptions[0],
        targetedCartLines: [defaultLine],
      };

      expect(value).toStrictEqual(expectedDeliveryGroup);
    });
  });
});
