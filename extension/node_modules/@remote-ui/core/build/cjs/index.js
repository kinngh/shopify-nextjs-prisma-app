'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rpc = require('@remote-ui/rpc');
var component = require('./component.js');
var types = require('./types.js');
var root = require('./root.js');
var receiver = require('./receiver.js');
var utilities = require('./utilities.js');



Object.defineProperty(exports, 'release', {
  enumerable: true,
  get: function () { return rpc.release; }
});
Object.defineProperty(exports, 'retain', {
  enumerable: true,
  get: function () { return rpc.retain; }
});
exports.createRemoteComponent = component.createRemoteComponent;
exports.ACTION_INSERT_CHILD = types.ACTION_INSERT_CHILD;
exports.ACTION_MOUNT = types.ACTION_MOUNT;
exports.ACTION_REMOVE_CHILD = types.ACTION_REMOVE_CHILD;
exports.ACTION_UPDATE_PROPS = types.ACTION_UPDATE_PROPS;
exports.ACTION_UPDATE_TEXT = types.ACTION_UPDATE_TEXT;
exports.KIND_COMPONENT = types.KIND_COMPONENT;
exports.KIND_FRAGMENT = types.KIND_FRAGMENT;
exports.KIND_ROOT = types.KIND_ROOT;
exports.KIND_TEXT = types.KIND_TEXT;
exports.createRemoteRoot = root.createRemoteRoot;
exports.createRemoteChannel = receiver.createRemoteChannel;
exports.createRemoteReceiver = receiver.createRemoteReceiver;
exports.isRemoteFragmentSerialization = receiver.isRemoteFragmentSerialization;
exports.isRemoteReceiverAttachableFragment = receiver.isRemoteReceiverAttachableFragment;
exports.isRemoteComponent = utilities.isRemoteComponent;
exports.isRemoteFragment = utilities.isRemoteFragment;
exports.isRemoteText = utilities.isRemoteText;
