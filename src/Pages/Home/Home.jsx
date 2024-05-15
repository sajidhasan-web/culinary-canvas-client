import { Link, useLoaderData } from "react-router-dom";
import { useState} from "react"; // Add this import if not already imported
import SectionHead from "../../Components/SectionHead/SectionHead";
import Slider from "../../Components/Slider/Slider";
import SingleFoodCard from "../../Components/SingleFoodCard/SingleFoodCard";

const Home = () => {
   
        const foods = useLoaderData();
       


    return (
        <div className="container p-6 mx-auto">
            <Slider />
            <div className="mt-8 md:mt-14 pb-8 md:pb-12">
                <SectionHead 
                    title="Our Top Foods"
                    des="Discover our top food section, showcasing a curated selection of our most popular and delicious dishes, from savory starters to indulgent desserts."
                />
            </div>
            <div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        foods.map(food => <SingleFoodCard key={food._id} food={food} />)
                    }
                </div>
                <div className="mt-8 md:mt-12 flex justify-center ">
                    <Link to={"all-foods"}>
                        <button className="bg-[#8B755A] hover:bg-opacity-70 text-white py-2 px-4 rounded-lg ">
                            View All Foods
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;



