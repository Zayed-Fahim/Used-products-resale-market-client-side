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
            <Link to="/">Log Out</Link>
          </button>
        </li>
      ) : (
        <li>
          <button>
            <Link to="/login">Log In</Link>
          </button>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
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
              <Link to='/'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to='/categories' className="justify-between">
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
                  <Link>Android</Link>
                </li>
                <li>
                  <Link>Tablet/ipad</Link>
                </li>
                <li>
                  <Link>iphone</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost w-[100px] normal-case text-xl navbar-start">
          daisyUI
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>
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
            <ul className="p-2">
              <li>
                <Link>Android</Link>
              </li>
              <li>
                <Link>Tablet/ipad</Link>
              </li>
              <li>
                <Link>Iphone</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
