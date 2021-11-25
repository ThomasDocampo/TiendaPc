
import { ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
const Item = ({product}) => {



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
<Button variant="contained" endIcon={<ShoppingCartIcon />}>
  USD$ {product.Price}
</Button>
         </Box>
       </Box> 
    )}
    export default Item;