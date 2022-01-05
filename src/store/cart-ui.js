import { createSlice } from "@reduxjs/toolkit";

const intialCartUIState = {
  showCart: false,
};

const cartUISlice = createSlice({
  name: "cart-ui",
  initialState: intialCartUIState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartUIActions = cartUISlice.actions;
export default cartUISlice.reducer;
