import {
  CartDiscountCode,
  CartDiscountAllocation,
} from '@shopify/ui-extensions/customer-account';

import {useDiscountAllocations, useDiscountCodes} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';
import type {PartialExtensionApi} from './mount';

describe('Discounts API hooks', () => {
  describe('useDiscountCodes', () => {
    it('returns the current discount codes', async () => {
      const discountCodes: CartDiscountCode[] = [
        {code: '20off'},
        {code: 'free_shipping'},
      ];

      const extensionApi: PartialExtensionApi = {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        discountCodes: createMockStatefulRemoteSubscribable(discountCodes),
      };

      const {value} = mount.hook(() => useDiscountCodes(), {extensionApi});

      expect(value).toBe(discountCodes);
    });
  });

  describe('useDiscountAllocations', () => {
    it('returns the current discount allocations', async () => {
      const discountAllocations: CartDiscountAllocation[] = [
        {
          code: '20off',
          discountedAmount: {
            amount: 20,
            currencyCode: 'USD',
          },
          type: 'code',
        },
        {
          title: '10% off',
          discountedAmount: {
            amount: 10,
            currencyCode: 'USD',
          },
          type: 'automatic',
        },
        {
          title: '15% off',
          discountedAmount: {
            amount: 15,
            currencyCode: 'USD',
          },
          type: 'custom',
        },
      ];

      const extensionApi: PartialExtensionApi = {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        discountAllocations:
          createMockStatefulRemoteSubscribable(discountAllocations),
      };

      const {value} = mount.hook(() => useDiscountAllocations(), {
        extensionApi,
      });

      expect(value).toBe(discountAllocations);
    });
  });
});
