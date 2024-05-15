import { useEffect } from "react";


const TopFoodSection = () => {

  useEffect(()=> {
    fetch(`${import.meta.env.VITE_API_URL}/topFoods`)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

    return (
        <div>
            
        </div>
    );
};

export default TopFoodSection;