import { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import GetProducts from "../../HandleProducts/GetProducts";
import ItemDetail from './ItemDetail';
import { CartProvider } from '../contexts/CartProvider';
const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    
    const { id } = useParams();
   
    useEffect(() => {
      GetProducts
      .then(res => {
        setItem(res.find((prod) => prod.Id === parseInt(id)));

       
      })
      .catch(err => console.log('error al obtener el producto', err))
     
    },[])
  
    return (
     <ItemDetail item= {item}/>
    );};
  export default ItemDetailContainer;