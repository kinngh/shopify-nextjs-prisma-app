import {useSettings} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useSettings', () => {
  it('returns settings from the api', () => {
    const settings = {title: 'checkout ui'};

    const {value} = mount.hook(() => useSettings(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        settings: createMockStatefulRemoteSubscribable(settings),
      },
    });

    expect(value).toStrictEqual(settings);
  });
});
