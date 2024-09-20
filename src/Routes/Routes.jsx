import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";
import CheckOut from "../components/Pages/CheckOut/CheckOut";
import BookService from "../components/Pages/BookService/BookService";
import Bookings from "../components/Pages/Bookings/Bookings";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookservice/:id',
          element:<PrivateRouts><BookService></BookService></PrivateRouts>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/booking/:email',
          element:<PrivateRouts><Bookings></Bookings></PrivateRouts>,
          loader:({params})=>fetch(`http://localhost:5000/booking/${params.email}`)
        }
      ]
    },
  ]);
export default router;