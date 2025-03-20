import React, { useState } from 'react'
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Cart = () => {

  const [showCart, setShowCart] = useState(false);

  const CartBox = () => {


    return (
      <div style={{
        height:'20rem',
        width:'18rem',
        border: '2px solid #ffa500',
        borderRadius:'10px',
        backgroundColor:'#eee',
        position:'absolute',
        bottom:'5rem',
        right:'1.5rem'
        
      }}>

      </div>
    )
  }


  return (
   
    
    
    <div className="cart-bottom" >
      
      <div className="cart-wrapper" style={{position:'fixed', bottom:'0', background:'#289e13', color:'white', width:'100%', borderRadius:'20px 20px 0 0', display:'flex', alignItems:'center', justifyContent:'flex-end', height:'4.5rem'}}>
        <div>
        <ShoppingCartRoundedIcon />
        </div>
        <div style={{fontSize:'1.5rem', margin:'0 0px 0 0 '}}>
          Cart
          
        </div>
        <div style={{fontSize:'1.5rem', margin:'0 50px 0 0 '}} onClick={()=> {setShowCart(!showCart)}}>
        <ArrowRightIcon/>
        
        </div>
      {showCart && <CartBox/>}
    </div>
    </div>
  



    )
}

export default Cart
