import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";

const DashboardLayout = () => {
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
            <li>
              <Link to="/dashboard/myorders" className="text-2xl font-semibold">
                My Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;