import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { React } from "react";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state?.auth.isAuth);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
