import {faker} from '@faker-js/faker';
import type {Metafield} from '@shopify/ui-extensions/checkout';

import {useMetafields} from '../metafields';

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

  it('returns all metafields', () => {
    const metafieldCount = 10;

    const {value} = mount.hook(() => useMetafields(), {
      extensionApi: {
        metafields: createMockStatefulRemoteSubscribable(
          createMetafields(metafieldCount),
        ),
      },
    });

    expect(value).toHaveLength(metafieldCount);
  });

  it('returns an array of filtered metafields by namespace', () => {
    const namespace = 'test_namespace';
    const key = 'test_key';
    const newNamespace = createMetafield({namespace, key});

    const key2 = 'test_key2';
    const newNamespace2 = createMetafield({namespace, key: key2});

    const metafields = [newNamespace, newNamespace2, ...createMetafields()];

    const {value} = mount.hook(() => useMetafields({namespace}), {
      extensionApi: {
        metafields: createMockStatefulRemoteSubscribable(metafields),
      },
    });

    expect(value).toHaveLength(2);

    expect(value[0].namespace).toStrictEqual(namespace);
    expect(value[1].namespace).toStrictEqual(namespace);

    expect(value[0].key).toStrictEqual(key);
    expect(value[1].key).toStrictEqual(key2);
  });

  it('returns an array of filtered metafields by namespace and key', () => {
    const namespace = 'test_namespace';
    const key = 'test_key';
    const newNamespace = createMetafield({namespace, key});

    const metafields = [newNamespace, ...createMetafields()];

    const {value} = mount.hook(() => useMetafields({namespace, key}), {
      extensionApi: {
        metafields: createMockStatefulRemoteSubscribable(metafields),
      },
    });

    expect(value).toHaveLength(1);
    expect(value[0].namespace).toStrictEqual(namespace);
    expect(value[0].key).toStrictEqual(key);
  });

  it('returns an empty array if no matches are found', () => {
    const namespace = 'test_namespace';
    const key = 'test_key';

    const metafields = createMetafields();

    const extensionApi = {
      metafields: createMockStatefulRemoteSubscribable(metafields),
    };

    const namespaceSearch = mount.hook(() => useMetafields({namespace}), {
      extensionApi,
    });

    const keySearch = mount.hook(() => useMetafields({namespace, key}), {
      extensionApi,
    });

    expect(namespaceSearch.value).toHaveLength(0);
    expect(keySearch.value).toHaveLength(0);
  });

  it('throws an error if no namespace is provided with key', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const extensionApi = {
      metafields: createMockStatefulRemoteSubscribable(createMetafields()),
    };

    const namespace = undefined as unknown as string;

    expect(() =>
      mount.hook(() => useMetafields({namespace, key: 'test_key'}), {
        extensionApi,
      }),
    ).toThrow('You must pass in a namespace with a key');
  });
});
