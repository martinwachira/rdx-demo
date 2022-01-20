import { cartUIActions } from "./cart-ui";
import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice += newItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity -= 1;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    console.log("pending");
    dispatch(
      cartUIActions.setNotification({
        status: "pending",
        message: "Sending data to server...",
        title: "Cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redefined-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };
    try {
      await sendRequest();
      console.log("success");
      dispatch(
        cartUIActions.setNotification({
          status: "success",
          message: "Data sent to server",
          title: "Cart data",
        })
      );
    } catch (error) {
      console.log("error");
      dispatch(
        cartUIActions.setNotification({
          status: "error",
          message: "Error sending data to server...",
          title: "Cart data",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
