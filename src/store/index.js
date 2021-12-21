import { createStore } from "redux";

//created the reducer counter
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "INCBY") {
    return {
      counter: state.counter + action.value,
    };
  }
  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
    };
  }
};

//create a store for the counterReducer
const store = createStore(counterReducer);

export default store;
