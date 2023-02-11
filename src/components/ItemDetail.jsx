import React from 'react'
import { useParams } from "react-router-dom";


function ItemDetail({products}) {

  const { id } = useParams();
  const productFilter = products.filter((product) => product.id == id);

  return (
    <div>
      <img src={`../img/${productFilter[0].img}`} alt=""/>
      <h2>{productFilter[0].name}</h2>
      <p>Categoría: {productFilter[0].category}</p>
      <p>Descripción:</p>
      <p>{productFilter[0].description}</p>
      <p>Precio: ${productFilter[0].price}</p>
      <button className="btn btn-primary">Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail
