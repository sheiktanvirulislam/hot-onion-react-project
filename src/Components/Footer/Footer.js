import React from 'react';
import "./footer.css";
import logo from '../hot-onion-restaurent/logo.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
              <div className="col-md-4">
                  <img src={logo} className="logo" alt="" />
                  <p> Copyright©2020 Red Onion Foods </p>
              </div>
              <div className="col-md-4 ">
                <ul className="list1">
                    <li>
                      About Our Food
                    </li>
                    <li>
                        About Our Restaurant
                    </li>
                    <li>
                      Sign Up To Deliver
                    </li>
                    <li>
                        Add Your Restaurant
                    </li>
                </ul>
              </div>
              <div className="col-md-4">
                 <ul className="list1">
                     <li>
                        Get Help
                     </li>
                     <li>
                        Read FAQ'S
                     </li>
                     <li>
                       View All Cities
                     </li>
                     <li>
                      Restaurant Near Me
                     </li>
                 </ul>
              </div>
            </div>  
        </div>
    );
};

export default Footer;