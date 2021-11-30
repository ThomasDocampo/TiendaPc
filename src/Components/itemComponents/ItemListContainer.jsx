import GetProducts from "../../HandleProducts/GetProducts";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { id } = useParams();
  const[products, SetProducts] = useState([]);
  
  useEffect(() => {
    GetProducts
    .then(res => {
(id === undefined)?   SetProducts(res) :  SetProducts(res.filter((prod) => prod.Type == id.toLowerCase()));
console.log(products.length);
})
    .catch(err => console.log('error al obtener productos', err))

  },[id])
  if (products.length>0){
  return (
   
      <ItemList products = {products} /> 
  );}
  {
    return (
   
      <Box sx={{ justifyContent: "center", display :"flex"}}>
      <CircularProgress  /> 
      </Box>
      );
  }

};

export default ItemListContainer;