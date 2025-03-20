import React,{useState} from 'react'
import FoodImage from "../Assets/dahi_bhalla.png"
const OptionCard = ({ name, price, image, category }) => {
    const [count,setCount] = useState(0)

  return (
      
    
        <div className='option'>
          <div className='image--container'><img src={image} alt="" className='food--image'/></div>
          <div className='food--name'>{name}</div>
          <div className='food--price'>{price}</div>
          <div className='counter'>
            <button onClick={()=>{setCount(count+1)}} aria-label="Increase quantity">+</button>
            {count}
            <button onClick={()=>{
                if(count>0){
                    setCount(count-1)}}

            } aria-label="Decrease quantity" disabled={count === 0}
                >-</button></div>
            </div>
        
        
    
  )
}



export default OptionCard
