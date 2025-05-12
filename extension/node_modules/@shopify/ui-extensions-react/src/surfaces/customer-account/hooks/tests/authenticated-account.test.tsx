import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';
import {faker} from '@faker-js/faker';
import {
  useAuthenticatedAccountCustomer,
  useAuthenticatedAccountPurchasingCompany,
} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

function createMockCustomer() {
  return {
    id: `gid://shopify/Customer/${faker.datatype.number({
      min: 1,
      precision: 1,
    })}`,
  };
}

function createMockPurchasingCompany() {
  return {
    company: {
      id: `gid://shopify/Company/${faker.datatype.number({
        min: 1,
        precision: 1,
      })}`,
    },
  };
}

function createMockHookContext(customer = {}, purchasingCompany = {}) {
  return {
    extensionApi: {
      authenticatedAccount: {
        customer: createMockStatefulRemoteSubscribable(customer),
        purchasingCompany:
          createMockStatefulRemoteSubscribable(purchasingCompany),
      },
    },
  };
}

describe('account Hooks', () => {
  describe('useLoggedInAccountCustomer()', () => {
    it('returns id of the logged in customer', () => {
      const customer = createMockCustomer();
      const {value} = mount.hook(
        () => useAuthenticatedAccountCustomer(),
        createMockHookContext(customer),
      );
      expect(customer).toBeDefined();
      expect(customer.id).toBeDefined();
      expect(value.id).toBe(customer.id);
    });

    it('returns company id of which the logged in customer belongs to', () => {
      const purchasingCompany = createMockPurchasingCompany();
      const {value} = mount.hook(
        () => useAuthenticatedAccountPurchasingCompany(),
        createMockHookContext({}, purchasingCompany),
      );
      expect(purchasingCompany).toBeDefined();
      expect(purchasingCompany.company.id).toBeDefined();
      expect(value.company.id).toBe(purchasingCompany.company.id);
    });
  });
});
