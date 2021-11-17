const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
    };
  }
  console.log(state);
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
