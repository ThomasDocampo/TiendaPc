
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { UseCart } from '../contexts/CartProvider';
import CircularProgress from '@mui/material/CircularProgress';
const ItemCount = ({ stock, initial, setQuantity, id }) => {

  const { getItemQuantity, insIncart} = UseCart();
  const[enableBuy, setEnableBuy]= useState(false);
    const [counter, setCounter] = useState(initial);
    const[rendCounter, setRendCounter]=  useState(true);
    const addItem = () => {
        const aux = counter + 1;
        if (aux <= stock) {
          setCounter(aux);
       
        }
      };

      const removeItem = () => {
        const aux = counter - 1;
        if (aux >= initial) {
          setCounter(aux);
         
        }
       
      };
    
      const onAdd = () =>{
        setQuantity(counter);
        setRendCounter(false);
      }
      useEffect(() => {
if(insIncart(id) ){
  setEnableBuy((stock - getItemQuantity(parseInt(id)))<counter)
}
    },[counter])
if(id!=undefined){
      if (rendCounter){
        return (
          <Box sx={{ border: 1, display:'flex', flexDirection:"column", width:180, padding:1, borderRadius: 2 }}>
    <Box  sx={{ margin:"auto", width: 200}} >
            
             <Button onClick={removeItem}>  <RemoveCircleOutlineIcon/> </Button>
            <Typography sx={{ marginRight:2, marginLeft:2}} 
            variant="p"  fontSize="large" > {counter} </Typography>
            <Button onClick={addItem}><AddCircleOutlineIcon /> </Button> 
            </Box>
            
  <Button  color="success" variant="contained" sx={{fontSize: 12}} endIcon={<ShoppingCartIcon />  }   disabled={enableBuy} onClick={onAdd}>
     add to cart
</Button>

</Box>
   

        );
      }else{
        return(<>
         <Button  sx = {{maxWidth: 500, fontSize:15, marginRight: "auto", marginLeft: "auto"}}variant="contained"
            
             >   <Link to={`/cart`} style={{ textDecoration: 'none', color: "white" }} >
                FINALIZAR COMPRA</Link>
                 </Button>
        </>);
      }
    }else{
      return (<Box sx={{ justifyContent: "center", display :"flex"}}>
      <CircularProgress  /> 
      </Box>)
    }
 };

    export default ItemCount;
