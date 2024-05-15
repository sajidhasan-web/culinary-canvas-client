import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Provider/FirebaseProvider";


const MyAddedFood = () => {

    const [foods, setFoods] = useState([])
    const { user } = useContext(AuthContext)

   useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/my-added-food/${user?.email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(foods => setFoods(foods))
   },[user?.email])
    return (
        <div>
           

        </div>
    );
};

export default MyAddedFood;