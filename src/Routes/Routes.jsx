import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Checkout from "../Checkout/Checkout";
import BookService from "../BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'signup',
        element: <Signup></Signup>
      },
      {
        path:'book/:id',
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'bookings',
        element: <PrivateRoute>
          <Bookings></Bookings>
        </PrivateRoute>
      }
    ]
  }
]);

export default router;