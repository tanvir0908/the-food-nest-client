import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export default function SocialLogin() {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
        };

        axiosPublic
          .post("/users", userInfo)
          .then((res) => console.log(res.data));

        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider"></div>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-2 text-lg font-medium border-2 px-3 py-1 rounded-xl mt-5 text-pink-500 border-pink-500"
      >
        <FaGoogle /> Login with Google
      </button>
    </div>
  );
}
