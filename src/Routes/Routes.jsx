import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

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
      }
    ]
  }
]);

export default router;