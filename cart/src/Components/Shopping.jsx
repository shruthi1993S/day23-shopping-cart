import React from 'react'
import '../styles/shopping.css'
import list from '../Data'

import Card from './Card'

function Shopping({handleClick}) {
  return (
    <section>
        {
        list.map((items)=>(
            <Card item={items} key={items.id} handleClick={handleClick}></Card>

        ))
        }
    </section>
  )
}

export default Shopping