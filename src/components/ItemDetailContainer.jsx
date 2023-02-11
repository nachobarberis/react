import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Data from "../data.json";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const filtrarProductos = Data.filter((product) => product.id == id);
        resolve(filtrarProductos);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setProductos(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  

  return (
    <div>
       <ItemDetail products={Data} />;
    </div>
  )
}

export default ItemDetailContainer
