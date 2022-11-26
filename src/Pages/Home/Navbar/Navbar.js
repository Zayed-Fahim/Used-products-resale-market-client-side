import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("signout successfully");
        navigate('/')
      })
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      {user?.email ? (
        <li>
          <button onClick={handleLogOut}>
            <Link className="text-xl font-semibold" to="/">
              Log Out
            </Link>
          </button>
        </li>
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
    <div className="navbar bg-blue-600 text-white container mx-auto sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="text-xl font-semibold" to="/">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                to="/categories"
                className="justify-between text-xl font-semibold"
              >
                Categories
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link className="text-xl font-semibold">Android</Link>
                </li>
                <li>
                  <Link className="text-xl font-semibold">Tablet/ipad</Link>
                </li>
                <li>
                  <Link className="text-xl font-semibold">iphone</Link>
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
          className="w-[8vw] normal-case text-3xl navbar-start font-bold"
        >
          second<span className="text-primary">Sell</span>
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
            <Link className="text-xl font-semibold">
              Categories
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="bg-blue-300">
              <li>
                <Link className="font-semibold">Android</Link>
              </li>
              <li>
                <Link className="font-semibold">Tablet/ipad</Link>
              </li>
              <li>
                <Link className="font-semibold">Iphone</Link>
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
    </div>
  );
};

export default Navbar;
