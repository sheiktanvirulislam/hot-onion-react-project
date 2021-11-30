import React from 'react';
import { Link } from 'react-router-dom';
import breakfast1 from '../hot-onion-restaurent/Breakfast/breakfast1.png'
import "./fooddata.css"


const FoodData = (props) => {
    const{data1,categoryFood} = props;
    const{text,category,img,price,id} = data1; 
    // const AllFood = [
    //     {text:"best breakfast that you will love to eat",img:breakfast1,price:10,category:"breakfast"},
    //     {text:"best breakfast that you will love to eat",img:breakfast2,price:10,category:"breakfast"},
    //     {text:"best breakfast that you will love to eat",img:breakfast3,price:10,category:"breakfast"},
    //     {text:"best breakfast that you will love to eat",img:breakfast4,price:10,category:"breakfast"},
    //     {text:"best breakfast that you will love to eat",img:breakfast5,price:10,category:"breakfast"},
    //     {text:"best breakfast that you will love to eat",img:breakfast6,price:10,category:"breakfast"},
    //     {text:"best meal that you will eat",img:lunch1,price:15,category:"lunch"},  
    //     {text:"best meal that you will eat",img:lunch2,price:15,category:"lunch"},  
    //     {text:"best meal that you will eat",img:lunch3,price:15,category:"lunch"},  
    //     {text:"best meal that you will eat",img:lunch4,price:15,category:"lunch"},  
    //     {text:"best meal that you will eat",img:lunch5,price:15,category:"lunch"},  
    //     {text:"best meal that you will eat",img:lunch6,price:15,category:"lunch"},
    //     {text:"beast dinner of the city",img:dinner1,price:20,category:"dinner"},                             
    //     {text:"beast dinner of the city",img:dinner2,price:20,category:"dinner"},                             
    //     {text:"beast dinner of the city",img:dinner3,price:20,category:"dinner"},                             
    //     {text:"beast dinner of the city",img:dinner4,price:20,category:"dinner"},                             
    //     {text:"beast dinner of the city",img:dinner5,price:20,category:"dinner"},                             
    //     {text:"beast dinner of the city",img:dinner6,price:20,category:"dinner"},                             
   
    //   ]
    console.log(data1);
    return (
        <div className="col-md-4" >
           {
             categoryFood === category && <div class="card data2" style={{width: "18rem"}}>
             <Link to={`fooddetails/${id}`}>
             <img src={require(`../hot-onion-restaurent/${category}/${img}`).default} class="card-img-top" alt="..."/>
             </Link>
             <div class="card-body">
               <h5 class="card-title">{category}</h5>
               <p class="card-text">{text}</p>
               <h3><small>${price}</small></h3>
               
             </div>
             <div>
           
             </div>
           </div>
}

         
        </div>
    );
};

export default FoodData;