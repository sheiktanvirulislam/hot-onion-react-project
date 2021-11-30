import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import bannerbackground from "./bannerbackground.png";
import "./header.css";
import "./extra.css"
import AllFood from '../AllFood/AllFood';
import About from '../About/About';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div>
         
 {/* header main background */}
<main className="header" >
  <h1>Best food in Town</h1>
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search Your Favourite Food" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-danger" type="button" id="button-addon2">Search</button>
  </div>
</div>
</main>
<section className="food">
   
   <h1>Our Food Items</h1>
   <AllFood></AllFood> 
   <About></About> 
</section> 
<section>
  <Footer></Footer>
</section>  
</div>
    );
};

export default Header;