import React from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import {Link} from "react-scroll";
import { VscArrowSmallUp } from "react-icons/vsc";

const Mainpage = () => {
  return (
    <div>
      <Home/>
      <About />
      <Work />
      <Testimonial/>
      <Contact />
      <Footer />
      <div className="top-refer-button">
      <Link to="home-container" spy={true} smooth={true} offset={0} duration={150} ><VscArrowSmallUp /></Link>
      </div>
      
    </div>
  )
}

export default Mainpage
