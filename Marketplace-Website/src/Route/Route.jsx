import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Magazine";
import Booking from "../Pages/Booking";
import TrackOrder from "../Pages/TrackOrder";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Components/Layouts/Dashboard";
import AddEquipment from "../Pages/AddMagazine";
import MangaeBooking from "../Pages/MangaeBooking";
import ManageUser from "../Pages/ManageUser";
import ManageEquipment from "../Pages/ManageMagazine";
import UpdateEquipment from "../Pages/UpdateMagazine";
import Team from "../Pages/Team";
import Blogs from "../Pages/blogs";
import BlogDetails from "../Pages/BlogsDetails";
import MagazineDetails from "../Pages/MagazineDetails";
import AdminRoute from "../Private/AdminRoute";
import AddBlogPost from "../Pages/AddBlog";



const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: (
          
            <Home></Home>
          
        ),
      },
      {
        path: "/team",
        element: (
          
            <Team></Team>
          
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute><Blogs></Blogs></PrivateRoute> 
        ),
      },
      {
        path: "/magazine",
        element: (
          
            <Services></Services>
          
        ),
      },
      {
        path:"/magazine/details/:id",
        element:<PrivateRoute><MagazineDetails></MagazineDetails></PrivateRoute>
      },
      
      {
        path:"/blog-details/:id",
        element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>
      },
      {
        path: "/booking/:id",
        element: (
          
            <Booking></Booking>
          
        ),
      },
      {
        path: "/booking/order",
        element: (
          <PrivateRoute>
            <TrackOrder></TrackOrder>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/users",
        element:<PrivateRoute><AdminRoute><ManageUser></ManageUser></AdminRoute></PrivateRoute> ,
      },
      {
        path: "/dashboard/add-magazine",
        element: <PrivateRoute><AdminRoute><AddEquipment></AddEquipment></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/booked-magazine",
        element: <PrivateRoute><AdminRoute><MangaeBooking></MangaeBooking></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/manage-magazine",
        element: <PrivateRoute><AdminRoute><ManageEquipment></ManageEquipment></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/update-magazine/:id",
        element: <PrivateRoute><AdminRoute><UpdateEquipment></UpdateEquipment></AdminRoute></PrivateRoute>,
        
      },
      {
        path:"/dashboard/add-blogs",
        element:<AddBlogPost></AddBlogPost>
      },
    ],
  },
]);
    


export default route;