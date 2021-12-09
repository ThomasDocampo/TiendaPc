import GetProducts from "../../HandleProducts/GetProducts";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getFirestore, collection, getDocs, query, where, getDoc} from "firebase/firestore";
import ItemList from "./ItemList";
import getProducts from "../../HandleProducts/GetProducts";

const ItemListContainer = () => {
  const { id } = useParams();
  const[products, SetProducts] = useState([]);
  
  { /*useEffect(() => {
  const db = getFirestore();

  const itemsCollection = collection(db,"items" );
  setDoc(doc(itemsCollection, "items"), {
    name: "Los Angeles",
    state: "CA"
  });

    GetProducts
    .then(res => {
   
   res.forEach((r)=>{
     console.log(r.Id);
     let idasd = r.Id
     setDoc(doc(itemsCollection, idasd.toString()), r);
    

   })

})
    .catch(err => console.log('error al obtener productos', err))

  },[id])*/}


useEffect(()=>{
const db = getFirestore();
const itemsCollection = collection(db,"items" );

if(id === undefined){
getDocs(itemsCollection).then(snapshot =>{

  SetProducts(snapshot.docs.map((doc) =>({ id: doc.id, ...doc.data()})))
})
}else{
  let q = query(itemsCollection , where ("Type", "==", id)) ;
  getDocs(q).then(snapshot =>{

 
    SetProducts(snapshot.docs.map((doc) =>({ id: doc.id, ...doc.data()}))); 
  })}
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