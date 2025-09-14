import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      Layout details
      <Outlet />
    </div>
  );
}
