import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';
import {faker} from '@faker-js/faker';

import {ScopeNotGrantedError} from '../../errors';
import {useCustomer, useEmail, usePhone} from '..';

import {mount} from './mount';

function createMockCustomer(customer = {}) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    id: `gid://shopify/Customer/${faker.datatype.number({
      min: 1,
      precision: 1,
    })}`,
    fullName: `${firstName} ${lastName}`,
    firstName,
    lastName,
    email: faker.internet.email(),
    phone: faker.phone.number(),
    ...customer,
  };
}

function createEmptyContext() {
  return {
    extensionApi: {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      buyerIdentity: undefined,
    },
  };
}

function createUseEmailContext(email?: string) {
  return createMockHookContext(email, undefined, undefined);
}

function createUseCustomerContext(customer = {}) {
  return createMockHookContext(undefined, undefined, customer);
}

function createUsePhoneContext(phone?: string) {
  return createMockHookContext(undefined, phone, undefined);
}

function createMockSuscribable<T>(data: T): StatefulRemoteSubscribable<T> {
  return {
    current: data,
    value: data,
    subscribe: () => () => {},
    destroy: async () => {},
  };
}

function createMockHookContext(email?: string, phone?: string, customer = {}) {
  return {
    extensionApi: {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      buyerIdentity: {
        customer: createMockSuscribable(customer),
        email: createMockSuscribable(email),
        phone: createMockSuscribable(phone),
      },
    },
  };
}

describe('buyerIdentity Hooks', () => {
  describe('useCustomer()', () => {
    it('raises an exception without CustomerPersonalData ApprovalScope', () => {
      expect(() => {
        mount.hook(() => useCustomer(), createEmptyContext());
      }).toThrow(ScopeNotGrantedError);
    });

    it('returns undefined fields with CustomerPersonalData ApprovalScopes only', () => {
      const hook = mount.hook(
        () => useCustomer(),
        createUseCustomerContext({
          email: undefined,
          phone: undefined,
          firstName: undefined,
          lastName: undefined,
          fullName: undefined,
        }),
      );

      expect(hook.current).toBeDefined();
      expect(hook.current?.email).toBeUndefined();
      expect(hook.current?.phone).toBeUndefined();
      expect(hook.current?.fullName).toBeUndefined();
      expect(hook.current?.firstName).toBeUndefined();
      expect(hook.current?.lastName).toBeUndefined();
    });

    it('returns email, phone and name fields with all ApprovalScopes', () => {
      const customer = createMockCustomer();
      const hook = mount.hook(
        () => useCustomer(),
        createUseCustomerContext(customer),
      );
      expect(customer).toBeDefined();
      expect(customer.email).toBeDefined();
      expect(hook.current?.email).toBe(customer.email);
      expect(customer.phone).toBeDefined();
      expect(hook.current?.phone).toBe(customer.phone);
      expect(customer.firstName).toBeDefined();
      expect(hook.current?.firstName).toBe(customer.firstName);
      expect(customer.lastName).toBeDefined();
      expect(hook.current?.lastName).toBe(customer.lastName);
      expect(customer.fullName).toBeDefined();
      expect(hook.current?.fullName).toBe(customer.fullName);
    });
  });

  describe('useEmail()', () => {
    it('raises an exception without CustomerPersonalData ApprovalScope', () => {
      expect(() => {
        mount.hook(() => useEmail(), createEmptyContext());
      }).toThrow(ScopeNotGrantedError);
    });

    it('returns undefined with CustomerPersonalData ApprovalScope only', () => {
      const hook = mount.hook(
        () => useEmail(),
        createUseEmailContext(undefined),
      );
      expect(hook?.current).toBeUndefined();
    });

    it('returns email with CustomerPersonalData and CustomerEmail ApprovalScopes', () => {
      const email = faker.internet.email();
      const hook = mount.hook(() => useEmail(), createUseEmailContext(email));
      expect(hook?.current).toBe(email);
    });
  });

  describe('usePhone()', () => {
    it('raises an exception without CustomerPersonalData ApprovalScope', () => {
      expect(() => {
        mount.hook(() => usePhone(), createEmptyContext());
      }).toThrow(ScopeNotGrantedError);
    });

    it('returns undefined with CustomerPersonalData ApprovalScope only', () => {
      const hook = mount.hook(
        () => usePhone(),
        createUsePhoneContext(undefined),
      );
      expect(hook?.current).toBeUndefined();
    });

    it('returns phone with CustomerPersonalData and CustomerEmail ApprovalScopes', () => {
      const phone = faker.phone.number();
      const hook = mount.hook(() => usePhone(), createUsePhoneContext(phone));
      expect(hook?.current).toBe(phone);
    });
  });
});
