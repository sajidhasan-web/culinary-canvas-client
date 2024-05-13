import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();



  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-10">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={food.image}
            alt={food.name}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />

          <div className="p-6 space-y-2 lg:col-span-5">
            <span className="text-[#8B755A] text-xl">#{food.category}</span>
            <h3 className="text-2xl font-semibold sm:text-4xl ">{food.name}</h3>
            <p>{food.description}</p>
            <div className="mt-4 font-semibold md:text-xl">
              <p className="mt-3">
                Price:{" "}
                <span className="text-[#8B755A] opacity-70">${food.price}</span>
              </p>
              <p className="mt-3">
                Made by:{" "}
                <span className="text-[#8B755A] opacity-70">{food.madeBy}</span>
              </p>
              <p className="mt-3">
              Food Origin:{" "}
                <span className="text-[#8B755A] opacity-70">{food.origin}</span>
              </p>
            </div>
            <div className="mt-4">
              <Link to={`/food-Purchase/${food._id}`}>
                <button className="px-5 py-2 text-xl cursor-pointer font-semibold rounded-md text-white bg-[#8B755A]">Purchase</button>
              </Link>
                
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FoodDetails;
