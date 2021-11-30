import React from 'react';
import AboutData from '../AboutData/AboutData';
import"./about.css";
const About = () => {
    const aboutData = [
        {title: 'Fast Delivery',text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut eos eius perspiciatis minus veniam nobis consequatur praesentium fugit magni, distinctio, a sunt est accusantium explicabo qui ad maxime laboriosam!",imgUrl:"delivery.png"},

        {title: 'A Good Auto Responder',text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut eos eius perspiciatis minus veniam nobis consequatur praesentium fugit magni, distinctio, a sunt est accusantium explicabo qui ad maxime laboriosam!",imgUrl:"cook.png"},
        {title:"Home Delivery",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut eos eius perspiciatis minus veniam nobis consequatur praesentium fugit magni, distinctio, a sunt est accusantium explicabo qui ad maxime laboriosam!",imgUrl:"homedelivery.png"}
    ]
    return (
        <div className=" container ">
           <h2>Why Should You Choose Us</h2>
           <p className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod sint iusto repudiandae expedita. Incidunt dicta molestiae tenetur aliquam inventore iure quibusdam ex commodi, quod, officiis consectetur ullam voluptate sed.</p>
            <div className="row">
            {
               aboutData.map(data => <AboutData aboutData={data} ></AboutData>)
           }
            </div>        
        </div>
    );
};

export default About;