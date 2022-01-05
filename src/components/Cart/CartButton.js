import { cartUIActions } from "../../store/cart-ui";
import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartUIActions.toggleCart());
    console.log("toggle cart");
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
