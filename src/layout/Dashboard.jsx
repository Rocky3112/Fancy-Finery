import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import ActiveLink from "../components/ActiveLink";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <div className="grid grid-cols-5 gap-6 pt-8 bg-gray-100 mb-4">
      <div className="col-span-1 p-4 md:p-6 shadow-xl text-center bg-teal-500">
        {isAdmin ? (
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Admin Panel:
            </h1>
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4"
              src={user?.photoURL}
              alt=""
            />
            <h3 className="">Name: {user?.displayName}</h3>
            <div className="my-4">
            <hr/>
            </div>
            <ul>
              <li className="mb-3 text-lg font-medium text-gray-800">
                <ActiveLink to="/dashboard/manage-users">Manage Users</ActiveLink>
              </li>
              <li className="mb-3 text-lg font-medium text-gray-800">
                <ActiveLink to="/dashboard/add-jewelry">Add Jewelry</ActiveLink>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Client Panel:
            </h1>
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4"
              src={user?.photoURL}
              alt=""
            />
            <h3 className="">Name: {user?.displayName}</h3>
            <div className="my-4">
            <hr/>
            </div>
            <ul>
              <li className="mb-3 text-lg font-medium text-gray-800">
                <ActiveLink to="/dashboard/my-jewelry">My Jewelry</ActiveLink>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-4 p-4 md:p-6 bg-white shadow-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
