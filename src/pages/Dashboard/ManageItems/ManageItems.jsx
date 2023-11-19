import { FaDeleteLeft } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import { Link } from "react-router-dom";

export default function ManageItems() {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        refetch();
        if (res.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry up"} />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <th>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="bg-orange-300 p-2 text-lg rounded-xl">
                      <FaEdit />
                    </button>
                  </Link>
                </th>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="bg-red-500 p-2 text-lg rounded-xl"
                  >
                    <FaDeleteLeft />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
