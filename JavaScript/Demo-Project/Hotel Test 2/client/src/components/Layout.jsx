import { Outlet } from "react-router-dom";
import MainPageFooter from "./Footer/MainPageFooter";
import "../index.css";
import MobileFooter from "./Footer/MobileFooter";
export default function Layout() {
  return (
    <>
      <div className="layout">
        <Outlet />
        <MainPageFooter />
      </div>
    </>
  );
}
