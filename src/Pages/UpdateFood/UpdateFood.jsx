import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFood = () => {
  
    const [food, setFood ] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/food/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data);
            })
            .catch(error => {
                console.error('Error fetching food data:', error);
                // Handle error, maybe show a toast or some feedback to the user
            });
    }, [id]);
    

    console.log(food);

 
  
    const handleUpdateFood = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const price = form.price.value;
      const image = form.imageURL.value;
      const quantity = form.quantity.value;
      const category = form.category.value;
      const origin = form.origin.value;
      const description = form.description.value;

      const updateFood = {
        name,
        price,
        image,
        quantity,
        category,
        origin,
        description,
      };
  
      fetch(`${import.meta.env.VITE_API_URL}/updateFood/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateFood),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Food updated successfully");
            navigate("/my-added-food")
          }
        })
        .catch((error) => {
          console.error('Error updating food:', error);
          toast.error('Failed to update food');
          navigate('/')
        });
    };

  return (
    <div className="container p-6 mx-auto">
      <form onSubmit={handleUpdateFood}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" rounded-md col-span-2 md:col-span-1">
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Food Name
            </label>
            <input
              type="text"
              defaultValue={food.name}
              name="name"
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
          <div className=" rounded-md col-span-2 md:col-span-1">
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Food Image URL
            </label>
            <input
              defaultValue={food.image}
              type="text"
              name="imageURL"
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
          <div className=" rounded-md col-span-2 md:col-span-1">
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Price
            </label>
            <input
              type="number"
              defaultValue={food.price}
              name="price"
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
          <div className="rounded-md col-span-2 md:col-span-1">
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Quantity
            </label>
            <input
              type="number"
              defaultValue={food.quantity}
              name="quantity"
              required
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
          <div className=" rounded-md col-span-2 md:col-span-1">
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Food Origin
            </label>
            <input
              type="text"
              defaultValue={food.origin}
              name="origin"
              required
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
          <div className=" rounded-md col-span-2 md:col-span-1">
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Food Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={food.category}
              required
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
          <div className=" rounded-md col-span-2">
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Short description
            </label>
            <textarea
              type="text"
              defaultValue={food.description}
              name="description"
              required
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-3 px-6 bg-[#8B755A] w-full mt-4 text-white rounded-md font-semibold"
        >
          Update food
        </button>
      </form>
    </div>
  );
};


export default UpdateFood;
