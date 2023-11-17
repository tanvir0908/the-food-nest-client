import { NavLink, Outlet } from "react-router-dom";
import { IoCart, IoHome } from "react-icons/io5";
import { MdEmail, MdRateReview } from "react-icons/md";
import {
  FaBook,
  FaCalendar,
  FaClipboardList,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

export default function Dashboard() {
  // ToDo: get admin value from the database
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul>
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/adminHome"}
                >
                  <IoHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/addItems"}
                >
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/manageItems"}
                >
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/manageBookings"}
                >
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/users"}
                >
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/userHome"}
                >
                  <IoHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex items-center gap-1"}
                  to={"/dashboard/reservation"}
                >
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/cart"}
                >
                  <IoCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex items-center gap-1"}
                  to={"/dashboard/review"}
                >
                  <MdRateReview /> Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    "flex items-center gap-3 p-3 m-2 text-xl font-medium"
                  }
                  to={"/dashboard/bookings"}
                >
                  <FaClipboardList className="h-5 w-5" /> My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider mx-5"></div>
          <li>
            <NavLink
              className={"flex items-center gap-3 p-3 m-2 text-xl font-medium"}
              to={"/"}
            >
              <IoHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-3 p-3 m-2 text-xl font-medium"}
              to={"/order/salad"}
            >
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"flex items-center gap-3 p-3 m-2 text-xl font-medium"}
              to={"/order/contact"}
            >
              <MdEmail />
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
