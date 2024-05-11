import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path:"/all-foods",
            element: <AllFoods/>
        },
        {
          path:"/sign-in",
          element: <Signin/>
        },
        {
          path:"/sign-up",
          element: <Signup/>
        }
      ]
    },
  ]);


export default router