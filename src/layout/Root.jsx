import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

export default function Root() {
  const location = useLocation();
  // console.log(location);
  const isShow = location.pathname.includes("login");
  // console.log(isShow);
  return (
    <div>
      {isShow || <Navbar />}
      <Outlet></Outlet>
      {isShow || <Footer />}
    </div>
  );
}
