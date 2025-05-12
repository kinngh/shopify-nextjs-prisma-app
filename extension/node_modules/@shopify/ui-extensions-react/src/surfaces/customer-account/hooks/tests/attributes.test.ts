import {useAttributeValues, useAttributes} from '../attributes';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('Attributes API hooks', () => {
  describe('useAttributes', () => {
    it('returns an empty array if no attributes are available', () => {
      const {value} = mount.hook(() => useAttributes(), {
        extensionApi: {
          extension: {
            target: 'customer-account.order-status.block.render' as const,
          },
          attributes: createMockStatefulRemoteSubscribable([]),
        },
      });

      expect(value).toStrictEqual([]);
    });

    it('returns an array of attributes if available', () => {
      const {value} = mount.hook(() => useAttributes(), {
        extensionApi: {
          extension: {
            target: 'customer-account.order-status.block.render' as const,
          },
          attributes: createMockStatefulRemoteSubscribable([
            {key: 'foo', value: 'bar'},
          ]),
        },
      });

      expect(value).toStrictEqual([{key: 'foo', value: 'bar'}]);
    });
  });

  describe('useAttributeValues', () => {
    it('returns an array of attribute values if available', () => {
      const {value} = mount.hook(() => useAttributeValues(['foo']), {
        extensionApi: {
          extension: {
            target: 'customer-account.order-status.block.render' as const,
          },
          attributes: createMockStatefulRemoteSubscribable([
            {key: 'foo', value: 'bar'},
          ]),
        },
      });

      expect(value).toStrictEqual(['bar']);
    });

    it('returns an array with undefined values if a non-existent attribute is requested', () => {
      const {value} = mount.hook(() => useAttributeValues(['foo', 'bar']), {
        extensionApi: {
          extension: {
            target: 'customer-account.order-status.block.render' as const,
          },
          attributes: createMockStatefulRemoteSubscribable([
            {key: 'bar', value: 'baz'},
          ]),
        },
      });

      expect(value).toStrictEqual([undefined, 'baz']);
    });
  });
});
