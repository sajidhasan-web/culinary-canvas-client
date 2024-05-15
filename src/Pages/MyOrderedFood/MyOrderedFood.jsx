import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/FirebaseProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyOrderedFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/myOrderedFood/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching ordered foods:", error);
        });
    }
  }, [user?.email]);

  const handleDeleteFood = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/delete-food/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    .then(data => {
        setFoods((prevFoods) => prevFoods.filter((fo) => fo._id !== id));
        if (data.deletedCount) {
            toast.success("Food deleted successfully");
        }
    })
    .catch(error => {
        console.error("Error deleting food:", error);
        // Handle error appropriately, e.g., show error message
        toast.error("Error deleting food");
    });
};

  return (
    <div className="container p-6 mx-auto">
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
        <tbody className="bg-white divide-y divide-gray-200">
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
                {food.description && food.description.length > 50
                  ? `${food.description.substring(0, 50)}...`
                  : food.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  onClick={() => handleDeleteFood(food._id)}
                  className="btn-sm bg-[#8B755A] text-white rounded-md font-semibold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrderedFood;
