import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

export default function Register() {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            console.log("Profile info updated");
            const userInfo = {
              email: data.email,
              name: data.name,
              photo: data.photo,
            };
            // store users information into database
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                toast.success("User created successfully");
              }
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Register - The Food Nest</title>
      </Helmet>
      <Toaster />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500 mt-2 font-semibold">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                {...register("photo", { required: true })}
                name="photo"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-500 mt-2 font-semibold">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500 mt-2 font-semibold">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 8,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-500 mt-2 font-semibold">
                  This fiend is required
                </span>
              )}
              {errors.password?.type == "minLength" && (
                <span className="text-red-500 mt-2 font-semibold">
                  Password length should be 6 or more
                </span>
              )}
              {errors.password?.type == "maxLength" && (
                <span className="text-red-500 mt-2 font-semibold">
                  Password length should not be more then 20
                </span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="text-red-500 mt-2 font-semibold">
                  Password should contains one upper case, one lower case , one
                  number, and one special character
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p>
            Already have an account? Please{" "}
            <Link to={"/login"} className="font-bold text-">
              Login
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
