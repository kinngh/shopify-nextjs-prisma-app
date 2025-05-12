'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@remote-ui/core');
var render = require('./render.js');
var components = require('./components.js');
var reconciler = require('./reconciler.js');
var subscription = require('./hooks/subscription.js');



Object.defineProperty(exports, 'createRemoteRoot', {
  enumerable: true,
  get: function () { return core.createRemoteRoot; }
});
exports.createRoot = render.createRoot;
exports.render = render.render;
exports.createRemoteReactComponent = components.createRemoteReactComponent;
exports.createReconciler = reconciler.createReconciler;
exports.useRemoteSubscription = subscription.useRemoteSubscription;
