import authReducer from "../store/auth";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counter";

//create a store for the counterReducer and authReducer
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
