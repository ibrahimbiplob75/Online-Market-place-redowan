import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Booking from "../Pages/Booking";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Components/Layouts/Dashboard";
import AdminRoute from "../Private/AdminRoute";
import ProductDetails from "../Components/ProductDetails";
import Love_Box from "../Pages/Combo/Love_Box";
import Saree from "../Pages/Saree/Saree";
import Shawl from "../Pages/Shawl/Shawl";
import AddProducts from "../Pages/Dashboard/AddProducts";
import MangaeBooking from "../Pages/Dashboard/MangaeBooking";
import ManageProduct from "../Pages/Dashboard/ManageProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";
import ManageUser from "../Pages/Dashboard/ManageUser";



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
        path: "/booking/:id",
        element: (
          
            <Booking></Booking>
          
        ),
      },
      // {
      //   path: "/booking/order",
      //   element: (
      //     <PrivateRoute>
      //       <TrackOrder></TrackOrder>
      //     </PrivateRoute>
      //   ),
      // },
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
        element: <PrivateRoute><AdminRoute><AddProducts></AddProducts></AdminRoute></PrivateRoute>,
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
        element: <PrivateRoute><AdminRoute><UpdateProduct></UpdateProduct></AdminRoute></PrivateRoute>,
        
      },
      
    ],
  },
]);
    


export default route;