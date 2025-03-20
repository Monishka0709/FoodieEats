import "./App.scss";
import Home from "./Components/Home";
import Register from "./Components/Register";

import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {Link} from "react-scroll"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VscArrowSmallUp } from "react-icons/vsc";
import Mainorderpage from "./Order_page/Mainorderpage";
import Mainpage from "./Components/Mainpage";


export default function App() {
  return (
    

    <div className="App">

<Router>
      <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route exact path='/home' element={<Mainpage/>}/>
      <Route path='/order' element={<Mainorderpage/>}/>
      <Route exact path='/order' element={<Mainorderpage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route exact path='/register' element={<Register/>}/>
    </Routes>
    </Router>

      
      
    </div>
  );
}

 
