'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@remote-ui/core');
var RemoteRenderer = require('./RemoteRenderer.js');
var RemoteComponent = require('./RemoteComponent.js');
var RemoteText = require('./RemoteText.js');
var controller = require('./controller.js');
var hooks = require('./hooks.js');



Object.defineProperty(exports, 'createRemoteReceiver', {
  enumerable: true,
  get: function () { return core.createRemoteReceiver; }
});
exports.RemoteRenderer = RemoteRenderer.RemoteRenderer;
exports.RemoteComponent = RemoteComponent.RemoteComponent;
exports.RemoteText = RemoteText.RemoteText;
exports.createController = controller.createController;
exports.useAttached = hooks.useAttached;
