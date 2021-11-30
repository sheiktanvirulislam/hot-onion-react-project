import React, { useState } from 'react';
import { useParams } from 'react-router';
import "./fooddetails.css"
const FoodDetails = () => {
    const{id} = useParams();
    const idNumber = Number(id)
    const[foodData ,setFoodData] = useState({});
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
      const exactData = AllFood.find(food=> food.id == id)
      console.log(exactData)
    return (
        <div className="row menudata ">
          <div className="col-md-4 d-flex align-items-center  ">
            
            <div>
            <h3>{exactData.text}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ducimus ex architecto nesciunt voluptatibus, voluptate temporibus eum reprehenderit aperiam soluta asperiores illo, laborum voluptas natus nisi doloribus quam commodi quaerat!</p>      
            <a href="/shipment" className="btn btn-primary">Order</a>
            </div>
         </div>
         <div className="col-md-8 menuimg">
          <img src={require(`../hot-onion-restaurent/${exactData.category}/${exactData.img}`).default} alt="" />     
        </div>  
       

        </div>
    );
};

export default FoodDetails;