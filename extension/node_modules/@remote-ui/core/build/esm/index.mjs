export { release, retain } from '@remote-ui/rpc';
export { createRemoteComponent } from './component.mjs';
export { ACTION_INSERT_CHILD, ACTION_MOUNT, ACTION_REMOVE_CHILD, ACTION_UPDATE_PROPS, ACTION_UPDATE_TEXT, KIND_COMPONENT, KIND_FRAGMENT, KIND_ROOT, KIND_TEXT } from './types.mjs';
export { createRemoteRoot } from './root.mjs';
export { createRemoteChannel, createRemoteReceiver, isRemoteFragmentSerialization, isRemoteReceiverAttachableFragment } from './receiver.mjs';
export { isRemoteComponent, isRemoteFragment, isRemoteText } from './utilities.mjs';
