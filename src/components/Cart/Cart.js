import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const quantity = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Test Item",
            quantity,
            total: 18,
            price: 6,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
