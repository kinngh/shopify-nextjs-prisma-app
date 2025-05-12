import {useExtensionLanguage} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useExtensionLanguage', () => {
  it('returns extension language from api', () => {
    const extensionLanguage = {isoCode: 'en-CA'};

    const {value} = mount.hook(() => useExtensionLanguage(), {
      extensionApi: {
        extension: {
          target: 'customer-account.order-status.block.render' as const,
        },
        localization: {
          extensionLanguage:
            createMockStatefulRemoteSubscribable(extensionLanguage),
        },
      },
    });

    expect(value).toStrictEqual(extensionLanguage);
  });
});
