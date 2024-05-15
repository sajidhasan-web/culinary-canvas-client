import { useLoaderData } from "react-router-dom";
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
            </div>
        </div>
    );
};

export default Home;



