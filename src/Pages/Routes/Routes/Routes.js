import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import Categories from "../../Categories/Categories/Categories";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Route404 from "../../Route404/Route404";
import Signup from "../../Signup/Signup";
import Products from "../../Products/Products";

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
          path: "/categories/:id",
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/categories/${params.id}`);
          },
          element: <Products></Products>
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
