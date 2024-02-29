import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
