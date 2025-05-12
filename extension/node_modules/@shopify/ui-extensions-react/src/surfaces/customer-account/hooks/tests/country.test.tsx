import {CountryCode} from '@shopify/ui-extensions/customer-account';

import {useLocalizationCountry} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useLocalizationCountry', () => {
  it('returns country from the api', () => {
    const country: {isoCode: CountryCode} = {isoCode: 'CA'};

    const {value} = mount.hook(() => useLocalizationCountry(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        localization: {
          country: createMockStatefulRemoteSubscribable(country),
        },
      },
    });

    expect(value).toStrictEqual(country);
  });
});
