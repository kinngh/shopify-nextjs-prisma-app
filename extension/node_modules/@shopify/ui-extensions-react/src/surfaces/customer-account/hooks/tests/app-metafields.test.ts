import {Metafield} from '@shopify/ui-extensions/customer-account';
import {faker} from '@faker-js/faker';

import {useAppMetafields} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useAppMetafields', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function createMetafield(props: Partial<Metafield> = {}): Metafield {
    return {
      key: `key-${faker.datatype.uuid()}`,
      namespace: 'example-namespace',
      value: 'example-value',
      valueType: 'string',
      ...props,
    };
  }

  const productEntry = {
    target: {id: faker.datatype.uuid(), type: 'product' as const},
    metafield: createMetafield(),
  };

  const variantEntry = {
    target: {id: faker.datatype.uuid(), type: 'variant' as const},
    metafield: createMetafield(),
  };

  it('returns all app metafield entries', () => {
    const appMetaFieldEntries = [productEntry, variantEntry];
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      appMetafields: createMockStatefulRemoteSubscribable(appMetaFieldEntries),
    };

    const {value} = mount.hook(() => useAppMetafields(), {extensionApi});

    expect(value).toMatchObject(appMetaFieldEntries);
  });

  it('returns filtered app metafield entries based on type', () => {
    const appMetaFieldEntries = [productEntry, variantEntry];
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      appMetafields: createMockStatefulRemoteSubscribable(appMetaFieldEntries),
    };

    const {value} = mount.hook(() => useAppMetafields({type: 'product'}), {
      extensionApi,
    });

    expect(value).toMatchObject([productEntry]);
  });

  it('returns filtered app metafield entry based on id', () => {
    const testId = faker.datatype.uuid();
    const newEntry = {
      target: {id: testId, type: 'product' as const},
      metafield: createMetafield(),
    };

    const appMetaFieldEntries = [newEntry, variantEntry];
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      appMetafields: createMockStatefulRemoteSubscribable(appMetaFieldEntries),
    };

    const {value} = mount.hook(() => useAppMetafields({id: testId}), {
      extensionApi,
    });

    expect(value).toMatchObject([newEntry]);
  });

  it('returns filtered app metafield entries based on namespace', () => {
    const testNamespace = 'test_namespace';
    const newEntry = {
      target: {id: faker.datatype.uuid(), type: 'product' as const},
      metafield: createMetafield({namespace: testNamespace}),
    };

    const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      appMetafields: createMockStatefulRemoteSubscribable(appMetaFieldEntries),
    };

    const {value} = mount.hook(
      () => useAppMetafields({namespace: testNamespace}),
      {extensionApi},
    );

    expect(value).toMatchObject([newEntry]);
  });

  it('returns filtered app metafield entries based on namespace & key', () => {
    const testNamespace = 'test_namespace';
    const testKey = 'test_key';
    const newEntry = {
      target: {id: faker.datatype.uuid(), type: 'product' as const},
      metafield: createMetafield({namespace: testNamespace, key: testKey}),
    };

    const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      appMetafields: createMockStatefulRemoteSubscribable(appMetaFieldEntries),
    };

    const {value} = mount.hook(
      () => useAppMetafields({namespace: testNamespace, key: testKey}),
      {extensionApi},
    );

    expect(value).toMatchObject([newEntry]);
  });

  it('throws an error if no namespace is provided with key', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const appMetaFieldEntries = [productEntry, variantEntry];
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      appMetafields: createMockStatefulRemoteSubscribable(appMetaFieldEntries),
    };

    expect(() =>
      mount.hook(() => useAppMetafields({key: 'test_key'}), {
        extensionApi,
      }),
    ).toThrow('You must pass in a namespace with a key');
  });

  it('returns filtered app metafield entries based on all searchable fields', () => {
    const testNamespace = 'test_namespace';
    const testKey = 'test_key';
    const testId = faker.datatype.uuid();

    const newEntry = {
      target: {id: testId, type: 'product' as const},
      metafield: createMetafield({namespace: testNamespace, key: testKey}),
    };

    const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      appMetafields: createMockStatefulRemoteSubscribable(appMetaFieldEntries),
    };

    const {value} = mount.hook(
      () =>
        useAppMetafields({
          namespace: testNamespace,
          key: testKey,
          id: testId,
          type: 'product',
        }),
      {extensionApi},
    );

    expect(value).toMatchObject([newEntry]);
  });
});
