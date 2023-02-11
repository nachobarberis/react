import React from 'react'
import Item from './Item'

function ItemList({products}) {
    console.log(products)
  return (
    <div className='box'>
        {products?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            img={product.img}
          />))}
    </div>
  )
}

export default ItemList
