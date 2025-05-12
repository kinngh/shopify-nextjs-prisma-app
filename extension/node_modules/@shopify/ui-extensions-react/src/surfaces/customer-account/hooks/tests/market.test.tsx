import {useLocalizationMarket} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useLocalizationMarket', () => {
  it('returns market from the api', () => {
    const market = {id: 'gid://shopify/Market/123', handle: 'apac'};

    const {value} = mount.hook(() => useLocalizationMarket(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        localization: {
          market: createMockStatefulRemoteSubscribable(market),
        },
      },
    });

    expect(value).toStrictEqual(market);
  });
});
