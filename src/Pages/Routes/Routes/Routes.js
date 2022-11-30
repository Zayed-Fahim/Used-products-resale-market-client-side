import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import Categories from "../../Categories/Categories/Categories";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Route404 from "../../Route404/Route404";
import Signup from "../../Signup/Signup";
import Androids from "../../Categories/CategoryProducts/Android/Androids";
import Iphones from "../../Categories/CategoryProducts/Iphone/Iphones";
import TabletIpads from "../../Categories/CategoryProducts/TabletIpads/TabletIpads";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../../Layout/DashboardLayout";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProducts from "../../Dashboard/AddProducts/AddProducts";
import SellerRoute from "../SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/categories",
          element: <Categories></Categories>,
        },
        {
          path: "/categories/android",
          element: (
            <PrivateRoute>
              <Androids></Androids>
            </PrivateRoute>
          ),
        },
        {
          path: "/categories/iphone",
          element: (
            <PrivateRoute>
              <Iphones></Iphones>
            </PrivateRoute>
          ),
        },
        {
          path: "/categories/tablet-ipad",
          element: (
            <PrivateRoute>
              <TabletIpads></TabletIpads>
            </PrivateRoute>
          ),
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
      ],
    },

    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout></DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard/myorders",
          element: (
            <BuyerRoute>
              <MyOrders></MyOrders>
            </BuyerRoute>
          ),
        },
        {
          path: "/dashboard/allusers",
          element: (
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/addproducts",
          element: (
            <SellerRoute>
              <AddProducts></AddProducts>
            </SellerRoute>
          ),
        },
        {
          path: '/dashboard/myproducts',
          element:<MyProducts></MyProducts>
        }
      ],
    },
    {
      path: "*",
      element: <Route404></Route404>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
