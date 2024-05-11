import { useEffect, useState } from "react";
import PageHeaderBanner from "../../Components/PageHeaderBanner/PageHeaderBanner";
import SingleFoodCard from "../../Components/SingleFoodCard/SingleFoodCard";




const AllFoods = () => {
    const [foods, setFoods] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/foods`)
        .then(res => res.json())
        .then(data =>{
            setFoods(data)
            setIsLoading(false)
        })
    },[])

     console.log(foods);
    return (
        <div>
         <PageHeaderBanner pageName={'All Foods'}></PageHeaderBanner>
         <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto p-6">
            {
                isLoading &&
                   
                        <div className="h-[calc(100vh-350px)] flex justify-center items-center">
                            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#8B755A]"></div>
                        </div>
                   
                }
            
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
           {
            foods.map(food => <SingleFoodCard key={food._id} food={food}></SingleFoodCard>)
           }
          </div>
        </div>
      </section>
            
        </div>
    );
};

export default AllFoods;