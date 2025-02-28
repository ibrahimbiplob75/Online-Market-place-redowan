import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Booking from "../Pages/Booking";
import TrackOrder from "../Pages/TrackOrder";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Components/Layouts/Dashboard";
import AddEquipment from "../Pages/AddProducts";
import MangaeBooking from "../Pages/MangaeBooking";
import ManageUser from "../Pages/ManageUser";
import UpdateEquipment from "../Pages/UpdateProduct";
import BlogDetails from "../Pages/BlogsDetails";
import MagazineDetails from "../Pages/MagazineDetails";
import AdminRoute from "../Private/AdminRoute";
import AddBlogPost from "../Pages/AddBlog";
import Love_Box from "../Pages/Love_Box";
import Saree from "../Pages/Saree";
import Shawl from "../Pages/Shawl";
import ManageProduct from "../Pages/ManageProduct";
import ProductDetails from "../Components/ProductDetails";



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
        path: "/love-box",
        element: (
            <Love_Box></Love_Box>
        ),
      },
      {
        path: "/saree",
        element: (
          <Saree></Saree>
        ),
      },
      {
        path: "/shawl",
        element: (
            <Shawl></Shawl>
        ),
      },
      {
        path:"/product/details/:id",
        element:<ProductDetails></ProductDetails>
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
        path: "/dashboard/add-product",
        element: <PrivateRoute><AdminRoute><AddEquipment></AddEquipment></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/booked-product",
        element: <PrivateRoute><AdminRoute><MangaeBooking></MangaeBooking></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/manage-product",
        element: <PrivateRoute><AdminRoute><ManageProduct></ManageProduct></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/update-product/:id",
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