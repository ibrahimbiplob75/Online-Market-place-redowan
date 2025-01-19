import React from "react";
import List from "./List";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import UserRole from "../../Hook/UserRole";
import logo from "../../assets/Images/magazine logo-08.png"

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [role] = UserRole();

  const logout = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        {/* Website Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wider uppercase">
          <img width={100} src={logo} className="text-yellow-400"></img>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal space-x-4">
            <List />
          </ul>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="User Avatar"
                    src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/434262183_2161174864218592_1316690371297996661_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcJ8L4M_q_QX6FzLfJAEgoXw-eWlPp3ppfD55aU-nemtXZCOSagP2FEFhgbrpnemn-lnqITWKpKrFl3tTvLU2d&_nc_ohc=cGjnN-dAzMgQ7kNvgFtid7Z&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=ArIJPnEU_FtWBDv42zitbvT&oh=00_AYAYUKxhBYfuKaeerNB9G8boyFoSR8O0vYAV1n6jGykUIA&oe=6763659E"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[100] mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  {role === "admin" ? (
                    <Link to="/dashboard" className="justify-between">
                      Dashboard
                      <span className="badge">Admin</span>
                    </Link>
                  ) : (
                    <button
                      className="justify-between disabled"
                      disabled
                    >
                      Dashboard
                      <span className="badge">Admin only</span>
                    </button>
                  )}
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline border-white text-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
