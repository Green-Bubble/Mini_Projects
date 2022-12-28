const createStore = () => {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((listenerItem) => listenerItem !== listener);
    };
  };

  return {
    getState,
    subscribe,
  };
};


// consume
const store = createStore;

store.getState();

const unsubscribe = store.subscribe(() => {
  console.log('State Changed');
  console.log('UI sould be re-render');
})

unsubscribe();