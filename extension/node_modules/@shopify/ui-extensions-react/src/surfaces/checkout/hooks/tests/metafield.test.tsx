import {faker} from '@faker-js/faker';
import type {Metafield} from '@shopify/ui-extensions/checkout';

import {useMetafield} from '../metafield';

import {createMockStatefulRemoteSubscribable, mount} from './mount';

describe('useMetafields', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function createMetafield(props: Partial<Metafield> = {}): Metafield {
    return {
      key: `key-${faker.string.uuid()}`,
      namespace: `namespace-${faker.word.sample()}`,
      value: `value-${faker.word.sample()}`,
      valueType: 'string',
      ...props,
    };
  }

  function createMetafields(count = 5): Metafield[] {
    return [...Array(count)].map(() => createMetafield());
  }

  it('returns undefined metafield', () => {
    const metafieldCount = 10;

    const extensionApi = {
      metafields: createMockStatefulRemoteSubscribable(
        createMetafields(metafieldCount),
      ),
    };

    const namespace = 'test_namespace';
    const key = 'test_key';

    const {value} = mount.hook(() => useMetafield({namespace, key}), {
      extensionApi,
    });

    expect(value).toBeUndefined();
  });

  it('returns a filtered metafield', () => {
    const namespace = 'test_namespace';
    const key = 'test_key';
    const newNamespace = createMetafield({namespace, key});

    const metafields = [newNamespace, ...createMetafields()];

    const {value} = mount.hook(() => useMetafield({namespace, key}), {
      extensionApi: {
        metafields: createMockStatefulRemoteSubscribable(metafields),
      },
    });

    expect(value?.namespace).toStrictEqual(namespace);
    expect(value?.key).toStrictEqual(key);
  });

  it('throws an error if no namespace is provided with key', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const extensionApi = {
      metafields: createMockStatefulRemoteSubscribable(createMetafields()),
    };

    expect(() =>
      mount.hook(
        () =>
          useMetafield({
            // @ts-expect-error: expected to fail
            namespace: undefined,
            key: 'test_key',
          }),
        {
          extensionApi,
        },
      ),
    ).toThrow('You must pass in both a namespace and key');
  });

  it('throws an error if no key is provided with namespace', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const extensionApi = {
      metafields: createMockStatefulRemoteSubscribable(createMetafields()),
    };

    const key = undefined as unknown as string;

    expect(() =>
      mount.hook(() => useMetafield({namespace: 'test_namespace', key}), {
        extensionApi,
      }),
    ).toThrow('You must pass in both a namespace and key');
  });
});
