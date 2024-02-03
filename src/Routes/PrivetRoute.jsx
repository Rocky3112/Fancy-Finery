import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "red",
};

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="mt-20 py-36">
        <ClockLoader
          cssOverride={override}
          size={150}
          color={"#123abc"}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h2 className="text-3xl text-orange-600 text-center font-semibold pt-10">Please Log-In First.............</h2>
      </div>
    );
  }

  if (user) {
    return children;
  }
  
  Swal.fire("You have to log in first to view details")
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivetRoute;