import React, { useState } from 'react';
import Food from '../Food/Food';
import "./allfood.css"
const AllFood = () => {
    const[category,setCategories] = useState("Lunch")
    const handleClick = (e) => {
      
      setCategories(e)
    }
    console.log(category)
    return (
        <div className="wholefood">
           <ul className="d-flex food1 ">
               <li onClick={()=>handleClick("Breakfast")} > Breakfast </li>
               <li onClick={()=>handleClick("Lunch")}>Lunch</li>

               <li onClick={()=>handleClick("Dinner")}>Dinner</li>
           </ul>  
           <div>
           <Food food={category} ></Food>
           </div>    
        </div>
       
    );
};

export default AllFood;