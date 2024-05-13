import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/FirebaseProvider";
import toast from "react-hot-toast";

const FoodPurchase = () => {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const [buyingDate, setBuyingDate] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {

    const currentDate = new Date();
    // Format the date and time
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, 
    };
    const formattedDate = currentDate.toLocaleString("en-US", options);

    setBuyingDate(formattedDate); 
  }, []);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyerName = user?.displayName;
    const buyerEmail = user?.email;
    const buyingDate = form.buyingDate.value;

    const foodPurchase = {
      name,
      price,
      quantity,
      buyerName,
      buyerEmail,
      buyingDate,
    };

    console.log(foodPurchase);

    fetch(`${import.meta.env.VITE_API_URL}/Purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodPurchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Food Purchase successfully");
          navigate("/all-foods");
        }
      });
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handlePurchase}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="mb-12">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Food Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={food.name}
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
          <div className="mb-12">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              defaultValue={food.price}
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
          <div className="mb-12">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              required
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
          <div className="mb-12">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Buyer Name
            </label>
            <input
              type="text"
              name="buyerName"
              readOnly
              defaultValue={user?.displayName}
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
          <div className="mb-12">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Buyer Email
            </label>
            <input
              type="email"
              name="buyerEmail"
              readOnly
              defaultValue={user?.email}
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
          <div className="mb-12">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Buying Date
            </label>
            <input
              type="text"
              name="buyingDate"
              readOnly
              defaultValue={buyingDate}
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-3 px-6 bg-[#8B755A] w-full text-white rounded-md font-semibold"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchase;
