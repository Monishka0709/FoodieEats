import React,{ useState } from 'react'
import OptionCard from './OptionCard'
import foodoption from './foodoption'

const Componentmenu = ({category}) => {

  const optionlist = foodoption.filter(item => item.category === category).map(item=> {
    console.log(item)
    return <OptionCard name={item.name} id={item.id} price={item.price} image={item.image} category={item.category}/>
  })
  return (
      <div className='menu--options--container'>
      <div className='menu--options'>
        
        {optionlist}
        
        </div>
        </div>
  )
      
}



const MenuComponent = (props) => {
  const [showOption, setShowOption] = useState(true)

  const handleToggle = () => {
    setShowOption((prev) => !prev);
  };

  return (
    <div className='menu--container'>
      <div className='menu--heading' id={props.id} onClick={handleToggle}>{props.name}</div>
      
      {showOption && <Componentmenu category={props.name}/>}
      
      
    </div>
  )
}


export default MenuComponent
