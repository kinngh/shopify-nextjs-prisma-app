import {useExtensionLanguage} from '../extension-language';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useExtensionLanguage', () => {
  it('returns extension language from api', () => {
    const extensionLanguage = {isoCode: 'en-CA'};

    const {value} = mount.hook(() => useExtensionLanguage(), {
      extensionApi: {
        localization: {
          extensionLanguage:
            createMockStatefulRemoteSubscribable(extensionLanguage),
        },
      },
    });

    expect(value).toStrictEqual(extensionLanguage);
  });
});
