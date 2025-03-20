import "./Order.scss"
import React from 'react'
import NavbarOrderPage from './NavbarOrderPage'
import Cart from "./Cart"
import MenuComponent from "./MenuComponent"
import menudata from "./menudata"

const Mainorderpage = () => {

  const menu = menudata.map(item=> {
    return <MenuComponent name={item.name} id={item.id} />
  })

  return (
    <div>
      <NavbarOrderPage/>
      {menu}
      <Cart/>
    </div>
  )
}

export default Mainorderpage
