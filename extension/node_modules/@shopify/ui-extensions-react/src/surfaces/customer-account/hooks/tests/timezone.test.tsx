import {useTimezone} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useTimezone', () => {
  it('returns timezone from the api', () => {
    const timezone = 'America/New_York';

    const {value} = mount.hook(() => useTimezone(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        localization: {
          timezone: createMockStatefulRemoteSubscribable(timezone),
        },
      },
    });

    expect(value).toStrictEqual(timezone);
  });
});
