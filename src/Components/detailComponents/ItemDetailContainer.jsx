import {  useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import GetProducts from "../../HandleProducts/GetProducts";
import ItemDetail from './ItemDetail';
import { getFirestore, collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import App from '../../App';
import { initializeApp } from '@firebase/app';
const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    
    const { id } = useParams();
   
    useEffect(() => {
      const db = getFirestore();
const itemsCollection = collection(db,"items" );
const docRef = doc(db, "items", id);
getDoc(docRef).then((snapshot)=>{
 
  setItem({id: snapshot.id ,...snapshot.data() })

 })
    },[])
  
    return (
     <ItemDetail item= {item}/>
    );};
  export default ItemDetailContainer;