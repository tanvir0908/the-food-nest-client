import { NavLink, Outlet } from "react-router-dom";
import { IoCart, IoHome } from "react-icons/io5";
import { MdEmail, MdRateReview } from "react-icons/md";
import { FaCalendar, FaClipboardList, FaSearch } from "react-icons/fa";

export default function Dashboard() {
  // ToDo: get admin value from the database
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul>
          <li>
            <NavLink
              className={"flex items-center gap-1 bg-purple-500 p-3 m-2"}
              to={"/dashboard/userHome"}
            >
              <IoHome className="h-5 w-5" /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-1"}
              to={"/dashboard/reservation"}
            >
              <FaCalendar className="h-5 w-5" /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-1"}
              to={"/dashboard/cart"}
            >
              <IoCart className="h-5 w-5" /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-1"}
              to={"/dashboard/review"}
            >
              <MdRateReview className="h-5 w-5" /> Review
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-1"}
              to={"/dashboard/bookings"}
            >
              <FaClipboardList className="h-5 w-5" /> My Bookings
            </NavLink>
          </li>
          <div className="divider">OR</div>
          <li>
            <NavLink
              className={"flex items-center gap-1 bg-purple-500 p-3 m-2"}
              to={"/"}
            >
              <IoHome className="h-5 w-5" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-1 bg-purple-500 p-3 m-2"}
              to={"/order/salad"}
            >
              <FaSearch className="h-5 w-5" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-1 bg-purple-500 p-3 m-2"}
              to={"/order/contact"}
            >
              <MdEmail className="h-5 w-5" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
