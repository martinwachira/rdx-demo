import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedOut = useSelector((state) => state?.auth.isAuth);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
    console.log("legged out");
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {isLoggedOut && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
