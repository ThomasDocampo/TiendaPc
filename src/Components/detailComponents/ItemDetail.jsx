
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  useEffect, useState } from "react";
import ItemCount from '../NavBarComponents/ItemCount';
import { UseCart } from '../contexts/CartProvider';
import { Button } from '@mui/material';


const ItemDetail = ({item}) => {
  const {addItem} = UseCart();
  const[quantity, setQuantity]= useState(0);
  

  
  useEffect(() => {

    if (quantity !== 0) {
     
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
         id={item.Id}
         />
     

     
        </CardActions>
                <CardActions sx= {{justifyContent: 'space-around', display: "flex"}}  >
    

<Button   variant="h5" color="text.secondary"  sx = {{fontSize: 16}} >
Price: USD{item.Price}
           
          </Button >
<Typography variant="h5" color="text.secondary"  sx = {{fontSize: 16}} >
           stock: {item.Stock}
           
          </Typography>


   
        </CardActions>
     
      </Card>
 
    );
}
export default ItemDetail;