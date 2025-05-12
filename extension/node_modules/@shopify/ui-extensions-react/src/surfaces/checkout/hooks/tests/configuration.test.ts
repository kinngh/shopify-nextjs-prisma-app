import {useSettings} from '../settings';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useSettings', () => {
  it('returns settings from the api', () => {
    const settings = {title: 'checkout ui'};

    const {value} = mount.hook(() => useSettings(), {
      extensionApi: {
        settings: createMockStatefulRemoteSubscribable(settings),
      },
    });

    expect(value).toStrictEqual(settings);
  });
});
