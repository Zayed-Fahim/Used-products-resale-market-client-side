import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Navbar from "../Pages/Home/Navbar/Navbar";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email)
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content lg:p-0 p-3 lg:mt-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isBuyer && (
              <li>
                <Link
                  to="/dashboard/myorders"
                  className="text-2xl font-semibold"
                >
                  My Orders
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link
                  to="/dashboard/allusers"
                  className="text-2xl font-semibold"
                >
                  All Users
                </Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link
                    to="/dashboard/addproducts"
                    className="text-2xl font-semibold"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/myproducts"
                    className="text-2xl font-semibold"
                  >
                    My Products
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
