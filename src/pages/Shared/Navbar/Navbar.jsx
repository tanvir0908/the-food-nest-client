import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../../hooks/useCart";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order</NavLink>
      </li>
      <li>
        <NavLink to={"secret"}>Secret</NavLink>
      </li>
      <li>
        <Link to={"/"}>
          <button className="btn bg-gray-400">
            <IoCartOutline size={30} />
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <li>
          {/* <span>{user?.displayName}</span> */}
          <button
            className="btn btn-ghost"
            onClick={() => {
              logOut().then().catch();
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <Helmet>
        <title>Order Now - The Food Nest</title>
      </Helmet>
      <div className="max-w-screen-xl navbar fixed z-10 bg-black bg-opacity-30  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">The Food Nest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}
