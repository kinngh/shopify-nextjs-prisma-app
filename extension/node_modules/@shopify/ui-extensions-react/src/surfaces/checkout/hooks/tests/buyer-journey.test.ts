import {ExtensionHasNoMethodError} from '../../errors';
import {
  useBuyerJourney,
  useBuyerJourneyActiveStep,
  useBuyerJourneyCompleted,
  useBuyerJourneyIntercept,
  useBuyerJourneySteps,
} from '../buyer-journey';

import {createMockStatefulRemoteSubscribable, mount} from './mount';

describe('buyerJourney Hooks', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    jest.mocked(console.error).mockRestore();
  });

  describe('useBuyerJourneySteps()', () => {
    it('raises an exception when buyerJourney api is not available', () => {
      expect(() => {
        mount.hook(() => useBuyerJourneySteps(), {
          extensionApi: {
            buyerJourney: undefined,
            extension: {
              target: 'purchase.checkout.header.render-after',
            },
          },
        });
      }).toThrow(ExtensionHasNoMethodError);
    });

    it('returns the list of steps from the buyerJourney.steps subscribable', () => {
      const steps = [
        {
          handle: 'information' as const,
          label: 'Information',
          disabled: false,
          to: 'shopify:checkout/information',
        },
        {
          handle: 'shipping' as const,
          label: 'Shipping',
          disabled: false,
          to: 'shopify:checkout/shipping',
        },
        {
          handle: 'payment' as const,
          label: 'Payment',
          disabled: false,
          to: 'shopify:checkout/payment',
        },
      ];

      const hook = mount.hook(() => useBuyerJourneySteps(), {
        extensionApi: {
          buyerJourney: {
            steps: createMockStatefulRemoteSubscribable(steps),
          },
          extension: {
            target: 'purchase.checkout.header.render-after',
          },
        },
      });

      expect(hook.current).toStrictEqual(steps);
    });
  });

  describe('useBuyerJourneyActiveStep()', () => {
    it('raises an exception when buyerJourney api is not available', () => {
      expect(() => {
        mount.hook(() => useBuyerJourneyActiveStep(), {
          extensionApi: {
            buyerJourney: undefined,
            extension: {
              target: 'purchase.checkout.header.render-after',
            },
          },
        });
      }).toThrow(ExtensionHasNoMethodError);
    });

    it('returns the step that matches the activeStep.handle', () => {
      const activeStepHandle = 'information' as const;
      const steps = [
        {
          handle: activeStepHandle,
          label: 'Information',
          disabled: false,
          to: 'shopify:checkout/information',
        },
        {
          handle: 'shipping' as const,
          label: 'Shipping',
          disabled: false,
          to: 'shopify:checkout/shipping',
        },
        {
          handle: 'payment' as const,
          label: 'Payment',
          disabled: false,
          to: 'shopify:checkout/payment',
        },
      ];

      const hook = mount.hook(() => useBuyerJourneyActiveStep(), {
        extensionApi: {
          buyerJourney: {
            steps: createMockStatefulRemoteSubscribable(steps),
            activeStep: createMockStatefulRemoteSubscribable({
              handle: activeStepHandle,
            }),
          },
          extension: {
            target: 'purchase.checkout.header.render-after',
          },
        },
      });

      expect(hook.current).toStrictEqual(steps[0]);
    });

    it('returns undefined if no step matches the active step handle', () => {
      const step = {
        handle: 'information' as const,
        label: 'Information',
        disabled: false,
        to: 'shopify:checkout/information',
      };

      const hook = mount.hook(() => useBuyerJourneyActiveStep(), {
        extensionApi: {
          buyerJourney: {
            steps: createMockStatefulRemoteSubscribable([step]),
            activeStep: createMockStatefulRemoteSubscribable({
              handle: 'payment',
            }),
          },
          extension: {
            target: 'purchase.checkout.header.render-after',
          },
        },
      });

      expect(hook.current).toBeUndefined();
    });
  });

  describe('useBuyerJourney()', () => {
    it('returns the buyer journey when the api is available', () => {
      const hook = mount.hook(() => useBuyerJourney(), {
        extensionApi: {
          buyerJourney: {},
          extension: {
            target: 'purchase.checkout.header.render-after',
          },
        },
      });

      expect(hook.current).toStrictEqual({});
    });
  });

  describe('useBuyerJourneyCompleted()', () => {
    it.each([true, false])(
      'returns the buyer journey completed value: %s',
      (completed) => {
        const hook = mount.hook(() => useBuyerJourneyCompleted(), {
          extensionApi: {
            buyerJourney: {
              completed: createMockStatefulRemoteSubscribable(completed),
            },
            extension: {
              target: 'purchase.checkout.header.render-after',
            },
          },
        });

        expect(hook.current).toStrictEqual(completed);
      },
    );
  });

  describe('useBuyerJourneyIntercept()', () => {
    it('calls the interceptor function', () => {
      const mockIntercept = jest.fn(() =>
        Promise.resolve({behavior: 'allow'} as const),
      );

      mount.hook(() => useBuyerJourneyIntercept(mockIntercept), {
        extensionApi: {
          buyerJourney: {
            intercept: (cb: () => void) => cb(),
          },
          extension: {
            target: 'purchase.checkout.header.render-after',
          },
        },
      });

      expect(mockIntercept).toHaveBeenCalled();
    });
  });
});
