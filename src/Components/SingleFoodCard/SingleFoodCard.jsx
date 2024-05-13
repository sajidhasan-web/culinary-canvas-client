import { Link } from "react-router-dom";

const SingleFoodCard = ({ food }) => {
  const { image, category, price, name, quantity, _id } = food;
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg border bg-white shadow-1 duration-300 hover:shadow-xl dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <div className="md:h-72 w-full">
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <div>
          <div className="px-8 sm:px-9 md:px-7 xl:px-9 pb-8 sm:pb-9 md:pb-7 xl:pb-9">
            <span className="text-[#8B755A]">#{category}</span>
            <h4 className="text-2xl font-bold mt-2">{name}</h4>
            <div className="flex justify-between items-center mt-4 font-semibold md:text-xl">
              <p>
                Price:{" "}
                <span className="text-[#8B755A] opacity-70">${price}</span>
              </p>
              <p>
                Quantity:{" "}
                <span className="text-[#8B755A] opacity-70">{quantity}</span>
              </p>
            </div>
            <div className="mt-4">
               <Link to={`/food-details/${_id}`}><button className="bg-[#8B755A] px-4 py-1 text-white font-semibold rounded-xl">view details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFoodCard;
