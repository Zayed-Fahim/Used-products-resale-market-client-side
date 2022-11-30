import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      {user?.email ? (
        <>
          <li>
            <button>
              <Link className="text-xl font-semibold" to="/dashboard">
                Dashboard
              </Link>
            </button>
          </li>
          <li>
            <button onClick={handleLogOut}>
              <Link className="text-xl font-semibold" to="/">
                Log Out
              </Link>
            </button>
          </li>
        </>
      ) : (
        <li>
          <button>
            <Link className="text-xl font-semibold" to="/login">
              Log In
            </Link>
          </button>
        </li>
      )}
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-blue-600 lg:text-white">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 bg-blue-600 shadow text-white rounded-box w-52"
            >
              <li>
                <Link className="text-xl font-semibold" to="/">
                  Home
                </Link>
              </li>
              <li tabIndex={2}>
                <Link
                  to="/categories"
                  className="justify-between text-xl font-semibold"
                >
                  Categories
                </Link>
                <ul className="p-2 bg-blue-600">
                  <li>
                    <Link to="/categories/android">Android</Link>
                  </li>
                  <li>
                    <Link to="/categories/iphone">iPhone</Link>
                  </li>
                  <li>
                    <Link to="/categories/tablet-ipad">Tablet/iPad</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="text-xl font-semibold" to="/blogs">
                  Blogs
                </Link>
              </li>
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="w-[8vw] normal-case text-3xl navbar-start font-bold ml-4"
          >
            <div>
              <span className="text-black">phones</span>
              <span className="text-white">.com</span>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="text-xl font-semibold" to="/">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/categories" className="text-xl font-semibold">
                Categories
              </Link>
              <ul className="bg-blue-600">
                <li>
                  <Link to="/categories/android">Android</Link>
                </li>
                <li>
                  <Link to="/categories/iphone">iPhone</Link>
                </li>
                <li>
                  <Link to="/categories/tablet-ipad">Tablet/iPad</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="text-xl font-semibold" to="/blogs">
                Blogs
              </Link>
            </li>
            {menuItems}
          </ul>
        </div>
        <label
          tabIndex={1}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost lg:hidden relative ml-52"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
