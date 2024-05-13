import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";

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
        },
        {
          path:"/food-details/:id",
          element: <FoodDetails/>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
        },
        {
          path: "/food-Purchase/:id",
          element:<FoodPurchase/>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
        }
      ]
    },
  ]);


export default router