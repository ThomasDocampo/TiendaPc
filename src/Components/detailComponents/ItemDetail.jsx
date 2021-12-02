
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  useEffect, useState } from "react";
import ItemCount from '../NavBarComponents/ItemCount';
import { UseCart } from '../contexts/CartProvider';


const ItemDetail = ({item}) => {
  const {addItem, removeItem} = UseCart();
  const[quantity, setQuantity]= useState(0);
  
  
  
  useEffect(() => {
    let msg = `You have added ${quantity} item`
    if (quantity !== 0) {
      quantity > 1 ? alert(msg+'s'): alert(msg);
      addItem(item, quantity);
      
    } 
},[quantity])

    return(
  
        <Card sx={{ maxWidth: 500 , marginRight:"auto", marginLeft:"auto", boxShadow:3}}>
        <CardMedia
          component="img"
          sx={{ width: 200, margin: "auto"}}
          image={item.Image}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h3" sx={{ fontSize: 22}} component="div">
           {item.Brand}  {item.Model} 
          </Typography>
          <Typography variant="h4" sx={{ fontSize: 16}} >
           {item.Descrip}
          </Typography>
        </CardContent >
        <CardActions sx= {{justifyContent: 'center', display: "flex"}}>
       
        <ItemCount
        stock= {item.Stock}
         initial = {1}   
         setQuantity = {setQuantity}
         />
     

     
        </CardActions>
                <CardActions sx= {{justifyContent: 'space-around', display: "flex"}}  >
    

<Typography variant="h5" color="text.secondary"  sx = {{fontSize: 16}} >
Price: USD{item.Price}
           
          </Typography>
<Typography variant="h5" color="text.secondary"  sx = {{fontSize: 16}} >
           stock: {item.Stock}
           
          </Typography>


   
        </CardActions>
     
      </Card>
 
    );
}
export default ItemDetail;