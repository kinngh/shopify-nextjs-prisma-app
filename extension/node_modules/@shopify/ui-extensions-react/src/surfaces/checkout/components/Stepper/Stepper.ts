import {Stepper as BaseStepper} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type StepperProps = ReactPropsFromRemoteComponentType<
  typeof BaseStepper
>;

export const Stepper = createRemoteReactComponent(BaseStepper);
