import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// use redux toolkit createSlice method to simplify the code
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    inc: (state) => {
      state.counter++;
    },
    dec: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
