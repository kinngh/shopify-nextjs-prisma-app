import {useTimezone} from '../timezone';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useTimezone', () => {
  it('returns timezone from the api', () => {
    const timezone = 'America/New_York';

    const {value} = mount.hook(() => useTimezone(), {
      extensionApi: {
        localization: {
          timezone: createMockStatefulRemoteSubscribable(timezone),
        },
      },
    });

    expect(value).toStrictEqual(timezone);
  });
});
