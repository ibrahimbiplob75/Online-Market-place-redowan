import React, { useState } from "react";
import List from "./List";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import UserRole from "../../Hook/UserRole";
import profile from "../../assets/Images/423862506_1886857071764399_4892783537603856345_n.jpg"

import Container from "../UI/Container";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [role] = UserRole();

  const logout = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };
  return (
    <Container>
    <div className="navbar bg-base-100 h-24 shadow-md relative z-20">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
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
          </div>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
            >
              <List></List>
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl md:text-2xl">
          <p>RUPDHARA</p>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <List></List>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">

        <div className="dropdown dropdown-end mr-10">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
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
                <div className="w-10 rounded-full ring ring-white-400 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="User Avatar"
                    src={profile}
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
                    <button className="justify-between disabled" disabled>
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
  className="btn w-full sm:w-auto px-4 py-2 text-sm sm:text-base font-medium btn-outline border-white text-white 
  hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300"
>
  Sign In
</Link>



          )}
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Navbar;
