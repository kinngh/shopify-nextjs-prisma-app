'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = require('./types.js');

function isRemoteComponent(child) {
  return child != null && child.kind === types.KIND_COMPONENT;
}
function isRemoteText(child) {
  return child != null && child.kind === types.KIND_TEXT;
}
function isRemoteFragment(object) {
  return object != null && object.kind === types.KIND_FRAGMENT;
}

exports.isRemoteComponent = isRemoteComponent;
exports.isRemoteFragment = isRemoteFragment;
exports.isRemoteText = isRemoteText;
