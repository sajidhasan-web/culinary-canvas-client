import { useContext } from "react";
import { AuthContext } from "../../Provider/FirebaseProvider";
import { json } from "react-router-dom";
import toast from "react-hot-toast";


const AddFood = () => {
 
    const { user } = useContext(AuthContext)

    const handleFoodAdd = e =>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const price = form.price.value;
        const image = form.imageURL.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const userEmail = user?.email
        const userName = user?.displayName
        const addFood = {
            name: name,
            image: image,
            price: parseFloat(price),
            quantity: parseFloat(quantity),
            origin: origin,
            description: description,
            userEmail: userEmail,
            userName: userName
        }
        
        fetch(`${import.meta.env.VITE_API_URL}/add-food`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addFood)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                toast.success("Food Added Successfully")
                form.reset()
            }
        })

    }

    return (
   
    <div className="container mx-auto p-6">
    <form onSubmit={handleFoodAdd}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" rounded-md col-span-2 md:col-span-1">
          <label className="block mb-2 text-base font-medium text-dark dark:text-white">
            Food Name
          </label>
          <input
            type="text"
            name="name"
            
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
          />
        </div>
        <div className=" rounded-md col-span-2 md:col-span-1">
          <label className="block mb-2 text-base font-medium text-dark dark:text-white">
            Food Image URL
          </label>
          <input
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
            name="quantity"
            
            required
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
          />
        </div>
        <div className=" rounded-md col-span-2">
          <label className="block mb-2 text-base font-medium text-dark dark:text-white">
            Food Origin
          </label>
          <input
            type="text"
            name="origin"
            
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
            name="description"
           
            required
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
          />
        </div>
      </div>
      <div className="border p-4 mt-4 rounded-md">
        <label className="block mb-2 text-base font-medium text-dark dark:text-white">
          Added by
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Buyer Name
            </label>
            <input
              type="text"
              name="buyerName"
              readOnly
              value={user?.displayName}
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
          <div>
            <label className="block mb-2 text-base font-medium text-dark dark:text-white">
              Buyer Email
            </label>
            <input
              type="email"
              name="buyerEmail"
              readOnly
              value={user?.email}
              className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2 px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="py-3 px-6 bg-[#8B755A] w-full mt-4 text-white rounded-md font-semibold"
      >
        Add food
      </button>
    </form>
  </div>
    );
};

export default AddFood;