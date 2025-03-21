import React, { useState } from "react";
import BannerBackground from "../Assets/bg-1.jpg";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import Mainorderpage from "../Order_page/Mainorderpage";
import { Navigate } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";
import "animate.css"

const Home = () => {
  const [showOrderPage,setShowOrderPage] = useState(false);

  if(showOrderPage) {
    return <Navigate to='/order' />;
    
}

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
          <img src={BannerBackground} className="home-bannerImage-container" alt="" />
        
        <div className="home-text-section" >
          <h1 className="primary-heading">
            Craving right now?
          </h1>
          <p className="primary-text">
            Don't worry. Get your favourite food at your doorstep with <b>30%</b> discount.
            So let go of your hunger drama, Grab your meal and 
            Chill with Netfix!!! 
            
          </p>
          
            <a onClick={() => setShowOrderPage(true)} className="secondary-button">Order Now <FiArrowRight />{" "} </a>
            
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
