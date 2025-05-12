import {createExtensionRegistrationFunction} from '../../utilities/registration';

import type {ExtensionTargets} from './extension-targets';

export * from '../../extension';

export const extension =
  createExtensionRegistrationFunction<ExtensionTargets>();
export const extend = extension;
