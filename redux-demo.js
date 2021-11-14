const redux = require("redux");

const counterReducer = () => {};

const store = redux.createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});
