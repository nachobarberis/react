import React from 'react'
import ItemList from './itemList';
import Data from "../data.json";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './style/stylo.css'


const ItemListContainer = ({ greeting }) => {

  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const catFilter = Data.filter((product) => product.category === category);



  return (
    <div>
      <p>{greeting}</p>
      <div className='box'>
        {category ? <ItemList products={catFilter} /> : <ItemList products={Data} />}
      </div>

    </div>
  )
}

export default ItemListContainer
