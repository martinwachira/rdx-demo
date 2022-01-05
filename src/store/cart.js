import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: 0,
  total: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem: (state) => {
      state.items = state.items += 1;
    },
    removeItem: (state) => {
      state.items = state.items -= 1;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
