import {createExtensionRegistrationFunction} from './registration';
import {EventExtensionTargets} from './targets';

export const eventExtension =
  createExtensionRegistrationFunction<EventExtensionTargets>();
