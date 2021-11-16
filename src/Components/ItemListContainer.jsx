import GetProducts from "../HandleProducts/GetProducts";
import { useState, useEffect } from 'react'
import ItemList from "./ItemList";
import Box from '@mui/material/Box';

const ItemListContainer = () => {
  const[products, SetProducts] = useState([]);
  useEffect(() => {
    GetProducts
    .then(res => {
     SetProducts(res)
     
    })
    .catch(err => console.log('error al obtener productos', err))
  },[])

  return (
      <ItemList products = {products} /> 
  );};
export default ItemListContainer;