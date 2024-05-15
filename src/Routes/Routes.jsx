import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import Gallery from "../Pages/Gallery/Gallery";
import Error from "../Pages/Error/Error";
import AddFood from "../Pages/AddFood/AddFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import MyOrderedFood from "../Pages/MyOrderedFood/MyOrderedFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
          path: "/food-Purchase/:name",
          element:<FoodPurchase/>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/food/${params.name}`)
        },
        {
          path: "/gallery",
          element: <Gallery/>
        },
        {
          path:"/add-food",
          element: <AddFood/>
        },
        {
          path: "/my-added-food",
          element: <MyAddedFood/>,
          
        },
        {
          path: "/my-ordered-food",
          element: <MyOrderedFood/>
        }
      ]
    },
  ]);


export default router