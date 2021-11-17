import { useState, useEffect } from 'react'
import GetItem from "../../HandleProducts/GetItem";
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    useEffect(() => {
      GetItem.then(res => {
   
          setItem(res)
      })
      
      .catch(err => console.log('error al obtener el detalle del producto', err))
    },[])
  
    return (
     <ItemDetail item= {item}/>
    );};
  export default ItemDetailContainer;