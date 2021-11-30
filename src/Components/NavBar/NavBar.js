import React from 'react';
import logo2 from "../hot-onion-restaurent/logo2.png";
import "./navbar.css"
const NavBar = () => {
    return (
        <div>
            <div className="nav-div">
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo2} className="img1" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end"  id="navbarNav">
      <ul className="navbar-nav ">
      <li className="nav-item">
          <a href="/home" className="btn btn- btn2"> Home </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="btn btn- btn2"> Login </a>
        </li>
        <li className="nav-item">
           <a href="/login" className="btn btn-danger btn1">Sign Up</a>
        </li>
        <li className="nav-item  ">
          
        </li>
        
      </ul>
    </div>
  </div>
</nav> 
</div>
        </div>
    );
};

export default NavBar;