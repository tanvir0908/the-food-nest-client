import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

export default function Login() {
  const [captchaError, setCaptchaError] = useState(false);
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const locationForm = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const value = form.captcha.value;

    if (validateCaptcha(value) === true) {
      setCaptchaError(false);
      logIn(email, password)
        .then((result) => {
          form.reset();
          const user = result.user;
          console.log(user);
          toast.success("Login successfully");
          navigate(locationForm);
        })
        .catch((error) => console.log(error));
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Register - The Food Nest</title>
      </Helmet>
      <Toaster />
      <div className="hero min-h-screen bg-base-200">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="p-10 rounded-xl flex-1 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-5">
                <LoadCanvasTemplate />

                <input
                  type="text"
                  name="captcha"
                  placeholder="captcha"
                  className="input input-bordered mt-2"
                  required
                />
              </div>
              {captchaError && (
                <span className="text-red-500 font-medium">
                  Captcha does not match
                </span>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p>
              New here? Please{" "}
              <Link to={"/register"} className="font-bold text-">
                Register
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
