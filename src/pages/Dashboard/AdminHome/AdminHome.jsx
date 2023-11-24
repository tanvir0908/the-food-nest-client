import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineDollar } from "react-icons/ai";
import { FaBook, FaUsers } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

export default function AdminHome() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-5xl font-semibold">
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineDollar className="text-4xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-4xl" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">${stats?.menuItems}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl" />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaShoppingBag className="text-4xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
      </div>
    </div>
  );
}
