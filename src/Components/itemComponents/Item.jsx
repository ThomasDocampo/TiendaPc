
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  useEffect, useState } from "react";
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { UseCart } from '../contexts/CartProvider';

const Item = ({product}) => {
  const[enableBuy, setEnableBuy]= useState(false);
  const {addItem, getItemQuantity, insIncart} = UseCart();
const handleAddTocart = () =>{
 
addItem(product, 1)

if(insIncart(parseInt(product.id))){ 
  setEnableBuy(( parseInt(product.Stock)-getItemQuantity(parseInt(product.id) )    )<1 )

 }
 
}
useEffect(() => {
  setEnableBuy(( parseInt(product.Stock)-getItemQuantity(parseInt(product.id) )    )<1 )
  
},[])

if(product.Stock>0){
    return(
        
        <Box  sx = {{border:1, margin:1, padding : 1, display:"flex", flexDirection:"column",  Width:300, maxWidth: 300, minWidth: 300, borderRadius:4}}>
       <Typography sx = {{marginLeft:"auto", fontSize:20, marginRight:"auto",marginBottom:"auto"}}

       >  {product.Brand} {product.Model}  </Typography>  
       <img 
       style = {{maxWidth: 150, height: "auto", borderRadius: 8, margin: "auto"}}
       src={product.Image} id="ProductImage"></img> 
       <Typography sx = {{marginLeft:"auto", marginRight:"auto",marginTop:"auto"}}>  {product.Specs}  </Typography>  
         <Box sx = {{display:"flex", justifyContent:"center", gap:5, marginTop:1}}>
         <Link to={`/item/${product.Id}`} style={{ textDecoration: 'none' }}>
         <Button variant="outlined"  startIcon={<InfoIcon />  } >
  Info
</Button>
</Link>
<Button variant="contained" endIcon={<ShoppingCartIcon />}  disabled={enableBuy} onClick = {handleAddTocart} >
  USD$ {product.Price}
</Button>

         </Box>
       </Box> 
    )}else{ return(null) }
      }
    export default Item;