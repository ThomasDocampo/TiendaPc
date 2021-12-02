
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCount = ({ stock, initial, setQuantity }) => {

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
      if (rendCounter){
        return (
          <Box sx={{ border: 1, display:'flex', flexDirection:"column", width:180, padding:1, borderRadius: 2 }}>
    <Box  sx={{ margin:"auto", width: 200}} >
            
             <Button onClick={addItem}> <AddCircleOutlineIcon />   </Button>
            <Typography sx={{ marginRight:2, marginLeft:2}} 
            variant="p"  fontSize="large" > {counter} </Typography>
            <Button onClick={removeItem}><RemoveCircleOutlineIcon/></Button> 
            </Box>
            
  <Button  color="success" variant="contained" sx={{fontSize: 12}} endIcon={<ShoppingCartIcon />}  onClick={onAdd}>
     add to cart
</Button>

</Box>
   

        );
      }else{
        return(<></>);
      }
    };
 

    export default ItemCount;
