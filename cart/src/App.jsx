import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Shopping from './Components/Shopping'
import Cart from './Components/Cart'

function App() {

  const [show,setShow]=useState(true)
  const [cart,setCart]=useState([])
  const handleClick=(item)=>{

    let isPresent=false
    cart.forEach((product)=>{
    if(item.id===product.id)
      isPresent=true
    })
    if(isPresent)
      return;//if present return

  setCart([...cart,item])//if not present push to cart
      }

  return (
    <div>
    <Navbar size={cart.length} setShow={setShow}></Navbar>
    {
      show ?<Shopping handleClick={handleClick}></Shopping>: <Cart cart={cart} setCart={setCart}></Cart>
    }
    
    </div>
  )
}

export default App