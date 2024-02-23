import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="">
          <NavLink className="px-3" to="/">
            Home
          </NavLink>
          <NavLink className="px-3" to="/login">
            Login
          </NavLink>
          <NavLink className="px-3" to="/signup">
            Reg
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
