import {useLocalizationMarket} from '../market';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useLocalizationMarket', () => {
  it('returns market from the api', () => {
    const market = {id: 'gid://shopify/Market/123', handle: 'apac'};

    const {value} = mount.hook(() => useLocalizationMarket(), {
      extensionApi: {
        localization: {
          market: createMockStatefulRemoteSubscribable(market),
        },
      },
    });

    expect(value).toStrictEqual(market);
  });
});
