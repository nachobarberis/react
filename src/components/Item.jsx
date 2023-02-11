import React from 'react'
import { Link } from "react-router-dom";
import './style/stylo.css'

function Item({ id, name, category, price, img }) {

  return (
    <div class="card">
      <img src={`img/${img}`} alt="" />
      <h2>{name}</h2>
      <p>{category}</p>
      <p>precio: {price}</p>
      <Link to={`/item/${id}`}><button className="btn btn-primary">Detalles</button></Link>
    </div>
  )
}

export default Item
