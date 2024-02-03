import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../layout/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import PrivetRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import AddJewelry from "../pages/Dashboard/Admin/AddJewelry/AddJewelry";
import MyJewelry from "../pages/Dashboard/Client/MyJewelry/MyJewelry";
import RingCollection from "../pages/Home/RingCollection/RingCollection";
import SingleRing from "../pages/Home/RingCollection/SingleRing";
import EarringCollection from "../pages/Home/EarringCollection/EarringCollection";
import SingleEarRing from "../pages/Home/EarringCollection/SingleEarring";
import BraceletsCollection from "../pages/Home/BraceletsCollection/BraceletsCollection";
import SingleBracelets from "../pages/Home/BraceletsCollection/SingleBracelets";
import NecklaceCollection from "../pages/Home/NecklaceCollection/NecklaceCollection";
import SingleNecklace from "../pages/Home/NecklaceCollection/SingleNecklace";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../pages/PaymentFail/PaymentFail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ring-collection",
        element: <RingCollection />,
      },
      {
        path: "/earring-collection",
        element: <EarringCollection />,
      },
      {
        path: "/bracelets-collection",
        element: <BraceletsCollection />,
      },
      {
        path: "/necklace-collection",
        element: <NecklaceCollection />,
      },
      {
        path: "/all-jewelry",
        element: <AllJewelry />,
      },
      {
        path: "payment/success/:tranId",
        element: (
          <PrivetRoute>
            <PaymentSuccess />
          </PrivetRoute>
        ),
      },
      {
        path: "payment/fail/:tranId",
        element: (
          <PrivetRoute>
            <PaymentFail />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "ring-collection/:id",
        element: (
          <PrivetRoute>
            <SingleRing />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fancy-finery-server-rocky.vercel.app/jewelryAll/${params.id}`),
      },
      {
        path: "earring-collection/:id",
        element: (
          <PrivetRoute>
            <SingleEarRing />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fancy-finery-server-rocky.vercel.app/jewelryAll/${params.id}`),
      },
      {
        path: "bracelets-collection/:id",
        element: (
          <PrivetRoute>
            <SingleBracelets />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fancy-finery-server-rocky.vercel.app/jewelryAll/${params.id}`),
      },
      {
        path: "necklace-collection/:id",
        element: (
          <PrivetRoute>
            <SingleNecklace />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fancy-finery-server-rocky.vercel.app/jewelryAll/${params.id}`),
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
        children: [
          // AdminRoute:
          {
            path: "/dashboard/manage-users",
            element: (
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/add-jewelry",
            element: (
              <AdminRoute>
                <AddJewelry />
              </AdminRoute>
            ),
          },
          // Client Route:
          {
            path: "/dashboard/my-jewelry",
            element: <MyJewelry />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
