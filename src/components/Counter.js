import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  const show = useSelector((state) => state?.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INC" });
  };

  const incByHandler = () => {
    dispatch({ type: "INCBY", value: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "DEC" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

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
