import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import SocialLink from "../Shared/SocialLink/SocialLink";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="mt-24 bg-gray-100">
      <h1 className="text-center font-bold text-gray-800 text-lg mb-3">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-[400px] md:mx-auto p-4 md:p-8 bg-white shadow-xl rounded-md"
      >
        <div className="my-3">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
            type="email"
            {...register("email", { required: "Email is required" })}
            id=""
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
            type={show ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            id=""
            placeholder="Enter Password"
          />
          <p
            className="cursor-pointer absolute top-11 right-3 text-lg"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <span>
                <FaEyeSlash></FaEyeSlash>
              </span>
            ) : (
              <span>
                <FaEye></FaEye>
              </span>
            )}
          </p>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
          <p className="text-red-500">{error}</p>
        </div>
        <input
          className="w-full py-3 bg-[#2cdbde] rounded-[10px] font-semibold text-lg cursor-pointer"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-center mt-2">
        Do not have an account?{" "}
        <Link
          className="text-blue-500 hover:text-blue-700 font-semibold"
          to="/signup"
        >
          Sign Up
        </Link>
      </p>
      <p className="text-center mb-3">
        Or
      </p>
      {/* Google sign in */}
      <div className="mb-6">
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
