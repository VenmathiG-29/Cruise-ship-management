import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import Scroll from "../Component/Scroll/Scroll";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Sailing from "../Pages/Sailing/Sailing";
import Package from "../Pages/Package/Package";
import Offer from "../Pages/Offers/Offer";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Pnf from "../Component/PNF/Pnf";
import UserBooking from "../Component/UserComp/UserBooking";
import UserDashboard from "../Component/UserComp/UserDashboard";
import UserInvoice from "../Component/UserComp/UserInvoice";
import AdminPackage from "../Component/AdminComp/AdminPackage";
import AdminInvoice from "../Component/AdminComp/AdminInvoice";
import AdminBill from "../Component/AdminComp/AdminBill";
import AdminDetails from "../Component/AdminComp/AdminDetails";
import { useLocation } from "react-router-dom";
import AdminNavbar from "../Component/AdminComp/AdminNavbar";
import UserNavbar from "../Component/UserComp/UserNavbar";
import RequireAuth from "../HOC/RequiredAuth";
import Unauth from "../Component/Unauth/Unauth";
import SinglePackage from "../Component/SinglePackage.jsx/SinglePackage";
import AllPackage from "../Component/AllPackage/AllPackage";
import Checkout from "../Component/Checkout/Checkout";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/package",
    element: <Package />,
  },
  {
    path: "/sailing",
    element: <Sailing />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/offer",
    element: <Offer />,
  },
  {
    path: "/loginpage",
    element: <Login />,
  },
  {
    path: "/signpage",
    element: <SignUp />,
  },
  {
    path: "/userprofile",
    element: (
      <RequireAuth>
        <UserDashboard />
      </RequireAuth>
    ),
  },
  {
    path: "/userbooking",
    element: (
      <RequireAuth>
        <UserBooking />
      </RequireAuth>
    ),
  },
  {
    path: "/userinvoice",
    element: (
      <RequireAuth>
        <UserInvoice />
      </RequireAuth>
    ),
  },
  {
    path: "/admindetails",
    element: (
      <RequireAuth child>
        <AdminDetails />
      </RequireAuth>
    ),
  },
  {
    path: "/adminpackage",
    element: (
      <RequireAuth child>
        <AdminPackage />
      </RequireAuth>
    ),
  },
  {
    path: "/adminbill",
    element: (
      <RequireAuth child>
        <AdminBill />
      </RequireAuth>
    ),
  },
  {
    path: "/admininvoice",
    element: (
      <RequireAuth child>
        <AdminInvoice />
      </RequireAuth>
    ),
  },
  {
    path: "/unauthor",
    element: <Unauth />,
  },
  {
    path: "/allpackages",
    element: <AllPackage />,
  },
  {
    path: "/singlepackage/:package_id",
    element: <SinglePackage />,
  },
  {
    path: "*",
    element: <Pnf />,
  },
  {
    path: "checkout",
    element: (
      <RequireAuth>
        <Checkout />
      </RequireAuth>
    ),
  },
];
const AllRoute = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {location.pathname.startsWith("/admin") ? (
        <AdminNavbar />
      ) : location.pathname.startsWith("/user") ? (
        <UserNavbar />
      ) : (
        <Navbar />
      )}

      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
      <Scroll />
    </>
  );
};

export default AllRoute;
