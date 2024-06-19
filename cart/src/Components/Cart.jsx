import React, { useState } from 'react'
import '../styles/cart.css'
function Cart({cart,setCart}) {
    

const handleRemove=(id)=>{
const arr=cart.filter((item)=>item.id != id)
setCart(arr)
}

  return (
    <article>{
cart ?.map((item)=>(
    <div className="cart_box" key={item.id}>
<div className="cart_img">
    <img src={item.img}/>
    <p>{item.title}</p>
</div>
<div>
    <button>+</button>
    <button>-</button>
</div>
<div>
<span>{item.price}</span>
<button onClick={()=>handleRemove(item.id)}>Remove </button>
</div>
</div>
))}
 </article>
  )
}

export default Cart