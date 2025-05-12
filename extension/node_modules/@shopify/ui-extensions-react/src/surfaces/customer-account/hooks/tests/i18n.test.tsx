import {mount} from './mount';
import {useI18n} from '..';

describe('useI18n', () => {
  it('returns the i18n utilities', () => {
    const mock = {
      formatNumber: jest.fn(),
      formatDate: jest.fn(),
      formatCurrency: jest.fn(),
      translate: jest.fn(),
    };
    const {value} = mount.hook(useI18n, {
      extensionApi: {
        i18n: mock,
      },
    });

    expect(value).toStrictEqual(mock);
  });
});
