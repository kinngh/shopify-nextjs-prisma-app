import type {Extension} from '@shopify/ui-extensions/customer-account';

import {useExtensionCapabilities, useExtensionCapability} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useExtensionCapabilities', () => {
  it('returns a list of granted capabilities of the extension', () => {
    const capabilities = ['network_access', 'block_progress'];

    const capabilitiesSubscribable = createMockStatefulRemoteSubscribable(
      capabilities,
    ) as Extension['capabilities'];

    const {value} = mount.hook(useExtensionCapabilities, {
      extensionApi: {
        extension: {
          capabilities: capabilitiesSubscribable,
        },
      },
    });

    expect(value).toStrictEqual(capabilities);
  });
});

describe('useExtensionCapability', () => {
  it('returns the status of a capabilities', () => {
    const capabilities = createMockStatefulRemoteSubscribable([
      'network_access',
    ]) as Extension['capabilities'];

    const {value: activatedCapability} = mount.hook(
      () => useExtensionCapability('network_access'),
      {
        extensionApi: {
          extension: {
            capabilities,
          },
        },
      },
    );

    const {value: deactivatedCapability} = mount.hook(
      () => useExtensionCapability('block_progress'),
      {
        extensionApi: {
          extension: {
            capabilities,
          },
        },
      },
    );

    expect(activatedCapability).toBe(true);
    expect(deactivatedCapability).toBe(false);
  });
});
