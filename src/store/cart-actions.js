import { cartActions } from "./cart";
import { cartUIActions } from "./cart-ui";

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
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
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

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-redefined-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Couldn't fetch data, some server error!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceItem({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      console.log("successfully fetched data");
    } catch (error) {
      dispatch(
        cartUIActions.setNotification({
          status: "error",
          message: "Error retrieving data from server...",
          title: "Cart data",
        })
      );
    }
  };
};
