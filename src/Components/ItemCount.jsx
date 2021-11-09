
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {

    const [counter, setCounter] = useState(initial);

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
      const consolePrint= () => {
        const message = `Agregaste ${counter} unidad`;
        counter === 1 ? console.log(message) : console.log(`${message}es`);
      };
    
        return (
    <Box sx={{ border: 1, display:'flex', flexDirection:"column", width:180, padding:1, borderRadius: 2 }}>
    <Box  sx={{ margin:"auto"}} >
             
             <Button onClick={addItem}> <AddCircleOutlineIcon />   </Button>
            <Typography sx={{ marginRight:2, marginLeft:2}} 
            variant="p" fontSize="large" > {counter} </Typography>
            <Button onClick={removeItem}><RemoveCircleOutlineIcon/></Button> 

     </Box>
            <Button color="success" sx={{ borderRadius: 2}} onClick= {consolePrint}>  Añadir al carrito </Button>
  </Box>
        );
    };

    export default ItemCount;
