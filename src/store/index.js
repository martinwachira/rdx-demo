import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const initialAuthState = { isAuth: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

//create a store for the counterReducer
const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
