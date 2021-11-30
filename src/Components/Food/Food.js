import React from 'react';
import './food.css'
import FoodData from '../FoodData/FoodData';

const Food = (props) => {
  const{food} = props;
  console.log(food)  
 const AllFood = [
      {text:"best breakfast that you will love to eat",img:"breakfast1.png",price:10,category:"Breakfast",id:1},
      {text:"best breakfast that you will love to eat",img:"breakfast2.png",price:10,category:"Breakfast",id:2},
      {text:"best breakfast that you will love to eat",img:"breakfast3.png",price:10,category:"Breakfast",id:3},
      {text:"best breakfast that you will love to eat",img:"breakfast4.png",price:10,category:"Breakfast",id:4},
      {text:"best breakfast that you will love to eat",img:"breakfast5.png",price:10,category:"Breakfast",id:5},
      {text:"best breakfast that you will love to eat",img:"breakfast6.png",price:10,category:"Breakfast",id:6},
      {text:"best meal that you will eat",img:"lunch1.png",price:15,category:"Lunch",id:7},  
      {text:"best meal that you will eat",img:"lunch2.png",price:15,category:"Lunch",id:8},  
      {text:"best meal that you will eat",img:"lunch3.png",price:15,category:"Lunch",id:9},   
      {text:"best meal that you will eat",img:"lunch4.png",price:15,category:"Lunch",id:10},  
      {text:"best meal that you will eat",img:"lunch5.png",price:15,category:"Lunch",id:11},  
      {text:"best meal that you will eat",img:"lunch6.png",price:15,category:"Lunch",id:12}, 
      {text:"beast dinner of the city",img:"dinner1.png",price:20,category:"Dinner",id:13},                              
      {text:"beast dinner of the city",img:"dinner2.png",price:20,category:"Dinner",id:14},                              
      {text:"beast dinner of the city",img:"dinner3.png",price:20,category:"Dinner",id:15},                             
      {text:"beast dinner of the city",img:"dinner4.png",price:20,category:"Dinner",id:16},                              
      {text:"beast dinner of the city",img:"dinner5.png",price:20,category:"Dinner",id:17},                              
      {text:"beast dinner of the city",img:"dinner6.png",price:20,category:"Dinner",id:18},                             
 
    ]
    return (
        <div className="row container back1">
          {
            AllFood.map(foodData => <FoodData data1={foodData} categoryFood={food} ></FoodData>)
          }
        </div>
    );
    
  };


export default Food;
