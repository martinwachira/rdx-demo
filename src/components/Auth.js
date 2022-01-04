import { useDispatch, useSelector } from "react-redux";

import UserProfile from "./UserProfile";
import { authActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state?.auth.isAuth);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    console.log("logged in");
  };

  return (
    <>
      {isLoggedIn ? (
        <UserProfile />
      ) : (
        <main className={classes.auth}>
          <section>
            <form onSubmit={loginHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
