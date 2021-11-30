import React from 'react';
import "./aboutdata.css"
const AboutData = (props) => {
   
    const{title,text,imgUrl} = props.aboutData;
    
    return (
        <div className="col-md-4">
 <div class="card data" style={{width: "18rem"}}>
  <img src={require(`../hot-onion-restaurent/Image/${imgUrl}`).default} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{text}</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> 
    );
};

export default AboutData;