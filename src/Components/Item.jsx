
import { ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../Styles/ItemStyle.css";
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Item = ({product}) => {
const ShowStock = () =>{
    alert(`El stock del producto ${product.Brand} ${product.Model} es de: ${product.stock}`);
};


    return(
        
        <Box  sx = {{border:1, margin:1, padding : 1, display:"flex", flexDirection:"column",  Width:300, maxWidth: 300, minWidth: 300, borderRadius:4}}>
       <Typography sx = {{marginLeft:"auto", fontSize:20, marginRight:"auto",marginBottom:"auto"}}

       >  {product.Brand} {product.Model}  </Typography>  
       <img src={product.image} id="ProductImage"></img> 
       <Typography sx = {{marginLeft:"auto", marginRight:"auto",marginTop:"auto"}}>  {product.Specs}  </Typography>  
         <Box sx = {{display:"flex", justifyContent:"center", gap:5, marginTop:1}}>
         <Button variant="outlined"  onClick={ShowStock} startIcon={<InfoIcon />  } >
  Info
</Button>
<Button variant="contained" endIcon={<ShoppingCartIcon />}>
  USD$ {product.price}
</Button>
         </Box>
       </Box> 
    )}
    export default Item;