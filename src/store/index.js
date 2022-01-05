import cartReducer from "./cart";
import cartUIReducer from "./cart-ui";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cartUI: cartUIReducer,
    cart: cartReducer,
  },
});
export default store;
