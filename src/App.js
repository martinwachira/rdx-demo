import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";
import React from "react";
import { cartUIActions } from "./store/cart-ui";
import { useEffect } from "react";

let isInit = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cartUI.showCart);
  const cart = useSelector((state) => state.cart);
  const notif = useSelector((state) => state.cartUI.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartUIActions.setNotification({
          status: "pending",
          message: "Sending data to server...",
          title: "Cart data",
        })
      );
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
      dispatch(
        cartUIActions.setNotification({
          status: "success",
          message: "Data sent to server",
          title: "Cart data",
        })
      );
    };

    if (isInit) {
      isInit = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartUIActions.setNotification({
          status: "error",
          message: "Error sending data to server...",
          title: "Cart data",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notif && (
        <Notification
          status={notif.status}
          title={notif.title}
          message={notif.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
