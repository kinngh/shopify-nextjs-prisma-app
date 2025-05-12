import type {CurrencyCode} from '@shopify/ui-extensions/checkout';

import {useCurrency} from '../currency';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useCurrency', () => {
  it('returns currency from the api', () => {
    const currency: {isoCode: CurrencyCode} = {isoCode: 'CAD'};

    const {value} = mount.hook(() => useCurrency(), {
      extensionApi: {
        localization: {
          currency: createMockStatefulRemoteSubscribable(currency),
        },
      },
    });

    expect(value).toStrictEqual(currency);
  });
});
