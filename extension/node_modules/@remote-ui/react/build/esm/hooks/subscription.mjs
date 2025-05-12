import { useState, useDebugValue, useEffect } from 'react';

function useRemoteSubscription(subscribable) {
  const [state, setState] = useState(() => ({
    subscribable,
    value: subscribable.current
  }));
  let valueToReturn = state.value;

  if (state.subscribable !== subscribable) {
    valueToReturn = subscribable.current;
    setState({
      subscribable,
      value: valueToReturn
    });
  }

  useDebugValue(valueToReturn);
  useEffect(() => {
    const unsubscribe = subscribable.subscribe(checkForUpdates);
    checkForUpdates();
    return () => {
      unsubscribe();
    };

    function checkForUpdates() {
      const value = subscribable.current;
      setState(previousState => {
        if (previousState.subscribable !== subscribable || previousState.value === value) {
          return previousState;
        }

        return { ...previousState,
          value
        };
      });
    }
  }, [subscribable]);
  return valueToReturn;
}

export { useRemoteSubscription };
