import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="w-72 mx-auto">
      <button
        onClick={handleGoogleSign}
        className="flex items-center px-3 py-2 border-2 border-[#C7C7C7] rounded-full"
      >
        <FaGoogle className="w-6 h-6 mr-14"></FaGoogle>{" "}
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
