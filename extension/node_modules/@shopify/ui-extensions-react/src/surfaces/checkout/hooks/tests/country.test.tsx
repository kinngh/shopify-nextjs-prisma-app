import type {CountryCode} from '@shopify/ui-extensions/checkout';

import {useLocalizationCountry} from '../country';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useLocalizationCountry', () => {
  it('returns country from the api', () => {
    const country: {isoCode: CountryCode} = {isoCode: 'CA'};

    const {value} = mount.hook(() => useLocalizationCountry(), {
      extensionApi: {
        localization: {
          country: createMockStatefulRemoteSubscribable(country),
        },
      },
    });

    expect(value).toStrictEqual(country);
  });
});
