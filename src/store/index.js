import { configureStore, createSlice } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };

// use redux toolkit createSlice method to simplify the code
const counterSlice = createSlice({
  name: "counter",
  initState,
  reducers: {
    inc: (state) => {
      state.counter++;
    },
    dec: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.value;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

//create a store for the counterReducer
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
