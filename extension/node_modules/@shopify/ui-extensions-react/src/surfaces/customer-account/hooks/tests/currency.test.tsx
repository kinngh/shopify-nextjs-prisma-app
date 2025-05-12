import {CurrencyCode} from '@shopify/ui-extensions/customer-account';

import {useCurrency} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useCurrency', () => {
  it('returns currency from the api', () => {
    const currency: {isoCode: CurrencyCode} = {isoCode: 'CAD'};

    const {value} = mount.hook(() => useCurrency(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        localization: {
          currency: createMockStatefulRemoteSubscribable(currency),
        },
      },
    });

    expect(value).toStrictEqual(currency);
  });
});
