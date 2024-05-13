import { useEffect, useState } from "react";
import PageHeaderBanner from "../../Components/PageHeaderBanner/PageHeaderBanner";
import SingleFoodCard from "../../Components/SingleFoodCard/SingleFoodCard";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setIsLoading(false);
      });
  }, []);

  // Filter foods based on searchQuery
  const filteredFoods = foods.filter((food) => {
    return food.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <PageHeaderBanner pageName={"All Foods"} page={'All Foods'}/>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto p-6">
          {/* Search input field */}
          <div className="flex justify-center mb-8">
           
            <label className="input input-bordered flex items-center gap-2">
              <input  type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for food..."/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {isLoading ? (
            <div className="h-[calc(100vh-350px)] flex justify-center items-center">
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#8B755A]"></div>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredFoods.map((food) => (
                <SingleFoodCard key={food._id} food={food} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllFoods;
