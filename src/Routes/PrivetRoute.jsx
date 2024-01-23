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
      <div className="mt-24">
        <ClockLoader
          cssOverride={override}
          size={150}
          color={"#123abc"}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
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