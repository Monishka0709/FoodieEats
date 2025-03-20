import React, { useState } from "react";
import Logo from "../Assets/FoodieEats.png"
import Modal from "../Components/Modal";


const NavbarOrderPage = () => {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <button className="primary-button" onClick={() => setShowModal(true)} >LOGIN</button>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)}/>}
      
    </nav>
  );
};

export default NavbarOrderPage;
