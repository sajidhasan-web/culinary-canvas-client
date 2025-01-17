import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Provider/FirebaseProvider";

import { Link, useParams} from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyAddedFood = () => {
  const [foods, setFoods] = useState([]);
  
  const { user,loading } = useContext(AuthContext);
  const { email } = useParams()

  console.log(user);
  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/my-added-food/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then((res) => res.json())
      .then((foods) => {
        setFoods(foods)
      });
  }, [email]);
 
 
  const handleDeleteFood = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/deleteFood/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete food");
        }
        return res.json();
      })
      .then((result) => {
        console.log(result);
       
        setFoods((prevFoods) => prevFoods.filter((fo) => fo._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting food:", error);
      });
  };
  
  
 
  return (
    <div className="container p-6 mx-auto">
      <Helmet>
                 <title>CulinaryCanvas | Sign in</title>
            </Helmet>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Food Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody
          id="food-table-body"
          className="bg-white divide-y divide-gray-200"
        >
          {foods.map((food) => (
            <tr key={food._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {food.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {food.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {food.description.length > 50
                  ? food.description.substring(0, 50) + "..."
                  : food.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button onClick={()=>handleDeleteFood(food._id)} className="btn-sm bg-[#8B755A] 4 text-white rounded-md font-semibold">delete</button>
                <Link to={`/update-food/${food._id}`}>
                <button
                  className="btn-sm bg-[#8B755A] 4 text-white rounded-md font-semibold"
                  
                >
                  update
                </button>
                </Link>
              </td>
              <div>
       
      </div>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default MyAddedFood;
