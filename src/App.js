import { fetchCartData, sendCartData } from "./store/cart-actions";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";
import React from "react";
import { useEffect } from "react";

let isInit = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cartUI.showCart);
  const cart = useSelector((state) => state.cart);
  const notif = useSelector((state) => state.cartUI.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }
    dispatch(sendCartData(cart));
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
