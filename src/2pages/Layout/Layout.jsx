import { Outlet, NavLink } from "react-router-dom";
import layout from "./layout.module.scss";

export function Layout() {
  return (
    <div className={layout.wrapper}>
      <div className={layout.borderWrapper}>
        <div className={layout.appWrapper}>
          <header className={layout.header}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? layout.active : layout.navLink
              }
            >
              MainPage
            </NavLink>
            <NavLink
              to="shop"
              className={({ isActive }) =>
                isActive ? layout.active : layout.navLink
              }
            >
              ShopPage
            </NavLink>
          </header>

          <main className={layout.main}>{<Outlet />}</main>
        </div>
      </div>
    </div>
  );
}
