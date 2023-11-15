/* eslint-disable no-unused-vars */
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function FoodCard({ item }) {
  const { user } = useAuth();
  const location = useLocation();

  const { _id, image, name, recipe, price } = item;
  const navigate = useNavigate();
  const handleCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: ServiceWorker.email,
        name,
        image,
        price,
      };
      


      toast.success("Success");
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Toaster />
      <figure className="relative">
        <img src={image} alt="Shoes" />
        <p className="absolute top-3 rounded right-5 bg-black px-2 py-1 text-white font-medium">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-semibold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mx-auto">
          <button onClick={() => handleCart(item)} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
