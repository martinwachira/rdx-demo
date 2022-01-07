import { createSlice } from "@reduxjs/toolkit";

const intialCartUIState = {
  showCart: false,
  notification: null,
};

const cartUISlice = createSlice({
  name: "cart-ui",
  initialState: intialCartUIState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    setNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export const cartUIActions = cartUISlice.actions;
export default cartUISlice.reducer;
