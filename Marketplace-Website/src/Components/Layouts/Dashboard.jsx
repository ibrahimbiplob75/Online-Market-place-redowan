import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";
import UserRole from '../../Hook/UserRole';

const Dashboard = () => {
    const [role] = UserRole();
    

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-full lg:w-1/4 p-6 space-y-6 lg:space-y-8">
                <div className="flex items-center justify-between lg:justify-start">
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-ghost text-xl lg:hidden"
                    >
                        <AiOutlineBars className="h-6 w-6" />
                    </label>
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                </div>

                <ul className="menu space-y-4">
                    <li className="text-lg font-medium">
                        <Link to="/" className="hover:bg-gray-700 rounded-md p-3 block">
                            Home
                        </Link>
                    </li>
                    <li className="text-lg font-medium">
                        <Link to="/dashboard/users" className="hover:bg-gray-700 rounded-md p-3 block">
                             Users
                        </Link>
                    </li>
                    <li className="text-lg font-medium">
                        <Link to="/dashboard/booked-magazine" className="hover:bg-gray-700 rounded-md p-3 block">
                            Booked Magazine
                        </Link>
                    </li>
                    <li className="text-lg font-medium">
                        <Link to="/dashboard/add-magazine" className="hover:bg-gray-700 rounded-md p-3 block">
                            Add New Magazine
                        </Link>
                    </li>
                    <li className="text-lg font-medium">
                        <Link to="/dashboard/manage-magazine" className="hover:bg-gray-700 rounded-md p-3 block">
                            Manage Magazine
                        </Link>
                    </li>
                    <li className="text-lg font-medium">
                        <Link to="/dashboard/add-blogs" className="hover:bg-gray-700 rounded-md p-3 block">
                            Add Blogs
                        </Link>
                    </li>
                    
                </ul>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 overflow-auto">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden mb-4"
                >
                    <AiOutlineBars className="h-6 w-6" />
                </label>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Welcome, {role}, to your Dashboard
                </h1>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
