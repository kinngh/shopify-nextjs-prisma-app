import { KIND_COMPONENT, KIND_TEXT, KIND_FRAGMENT } from './types.mjs';

function isRemoteComponent(child) {
  return child != null && child.kind === KIND_COMPONENT;
}
function isRemoteText(child) {
  return child != null && child.kind === KIND_TEXT;
}
function isRemoteFragment(object) {
  return object != null && object.kind === KIND_FRAGMENT;
}

export { isRemoteComponent, isRemoteFragment, isRemoteText };
