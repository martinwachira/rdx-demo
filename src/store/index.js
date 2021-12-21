import { createStore } from "redux";

const initState = { counter: 0, showCounter: true };
//created the reducer counter
const counterReducer = (state = initState, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "INCBY") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
};

//create a store for the counterReducer
const store = createStore(counterReducer);

export default store;
