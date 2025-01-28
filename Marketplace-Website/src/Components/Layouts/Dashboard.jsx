import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import UserRole from "../../Hook/UserRole";

const Dashboard = () => {
  const [role] = UserRole();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed lg:static bg-gray-900 text-white w-64 lg:w-1/4 p-6 space-y-8 z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between lg:justify-start">
          <h2 className="text-2xl font-bold">Cloth Market</h2>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <MdClose className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className="menu space-y-4">
          <li className="text-lg font-medium">
            <Link to="/" className="hover:bg-gray-700 rounded-md p-3 block">
              Home
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link
              to="/dashboard/users"
              className="hover:bg-gray-700 rounded-md p-3 block"
            >
              Manage Users
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link
              to="/dashboard/manage-product"
              className="hover:bg-gray-700 rounded-md p-3 block"
            >
              Manage Products
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link
              to="/dashboard/booked-product"
              className="hover:bg-gray-700 rounded-md p-3 block"
            >
              Manage Orders
            </Link>
          </li>
          
          <li className="text-lg font-medium">
            <Link
              to="/dashboard/add-product"
              className="hover:bg-gray-700 rounded-md p-3 block"
            >
              Add New Product
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link
              to="#"
              className="hover:bg-gray-700 rounded-md p-3 block"
            >
              Customer Reviews
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link
              to="#"
              className="hover:bg-gray-700 rounded-md p-3 block"
            >
              Sales Reports
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header for Small Screens */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between lg:hidden">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <AiOutlineBars className="h-6 w-6" />
          </button>
        </div>

        {/* Welcome Section */}
        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-center">
              Welcome, {role}, to the Cloth Market Dashboard
            </h1>
            <p className="text-center text-gray-200 mt-2">
              Manage your products, orders, and sales all in one place.
            </p>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
