import {usePurchasingCompany} from '../buyer-identity';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('usePurchasingCompany', () => {
  it('returns purchasing company from the api', () => {
    const purchasingCompany = {
      company: {
        id: 'gid://shopify/Company/2',
        name: 'Company',
        externalId: 'company-external-id',
      },
      location: {
        id: 'gid://shopify/CompanyLocation/2',
        name: 'CompanyLocation',
        externalId: 'company-location-external-id',
      },
    };

    const extensionApi = {
      buyerIdentity: {
        purchasingCompany:
          createMockStatefulRemoteSubscribable(purchasingCompany),
      },
    };

    const {value} = mount.hook(() => usePurchasingCompany(), {
      extensionApi,
    });

    expect(value).toStrictEqual(purchasingCompany);
  });
});
