'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rpc = require('@remote-ui/rpc');

function createRemoteSubscribable(subscription) {
  const initial = subscription.current;
  return {
    initial,

    subscribe(subscriber) {
      rpc.retain(subscriber);
      const unsubscribe = subscription.subscribe((value = subscription.current) => {
        return subscriber(value);
      });

      const teardown = () => {
        unsubscribe();
        rpc.release(subscriber);
      };

      return [teardown, subscription.current];
    }

  };
}

exports.createRemoteSubscribable = createRemoteSubscribable;
