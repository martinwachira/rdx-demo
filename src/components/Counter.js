import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  const show = useSelector((state) => state?.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.inc());
  };

  const incByHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.dec());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  console.log("counterActions", counterActions);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>--{counter}--</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incByHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
