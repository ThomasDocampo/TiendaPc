import GetProducts from "../../HandleProducts/GetProducts";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { id } = useParams();
  const[products, SetProducts] = useState([]);
  useEffect(() => {
    GetProducts
    .then(res => {
(id === undefined)?   SetProducts(res) :  SetProducts(res.filter((prod) => prod.Type == id.toLowerCase()));

})
    .catch(err => console.log('error al obtener productos', err))
  },[id])
  
  return (
   
      <ItemList products = {products} /> 
  );};
export default ItemListContainer;