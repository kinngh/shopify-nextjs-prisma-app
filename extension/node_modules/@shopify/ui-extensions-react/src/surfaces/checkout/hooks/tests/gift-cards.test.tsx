import type {AppliedGiftCard} from '@shopify/ui-extensions/checkout';

import {useAppliedGiftCards} from '../gift-cards';

import {mount, createMockStatefulRemoteSubscribable} from './mount';
import type {PartialExtensionApi} from './mount';

describe('Gift cards API hooks', () => {
  describe('useAppliedGiftCards', () => {
    it('returns the current gift cards', async () => {
      const giftCards: AppliedGiftCard[] = [
        {
          amountUsed: {amount: 20, currencyCode: 'USD'},
          balance: {amount: 20, currencyCode: 'USD'},
          lastCharacters: '1234',
        },
        {
          amountUsed: {amount: 10, currencyCode: 'USD'},
          balance: {amount: 10, currencyCode: 'USD'},
          lastCharacters: '5678',
        },
      ];

      const extensionApi: PartialExtensionApi = {
        appliedGiftCards: createMockStatefulRemoteSubscribable(giftCards),
      };

      const {value} = mount.hook(() => useAppliedGiftCards(), {extensionApi});

      expect(value).toBe(giftCards);
    });
  });
});
