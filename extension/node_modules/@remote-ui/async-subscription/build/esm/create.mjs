import { retain, release } from '@remote-ui/rpc';

function createRemoteSubscribable(subscription) {
  const initial = subscription.current;
  return {
    initial,

    subscribe(subscriber) {
      retain(subscriber);
      const unsubscribe = subscription.subscribe((value = subscription.current) => {
        return subscriber(value);
      });

      const teardown = () => {
        unsubscribe();
        release(subscriber);
      };

      return [teardown, subscription.current];
    }

  };
}

export { createRemoteSubscribable };
