

import Box from '@mui/material/Box';
import Item from './Item';
const ItemList = ({products}) => {

    return(

     
       <Box Wrap sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {products.map(product => {
           return(
           <Item id = {product.id}
           product= {product}
            />
      
           )
        })}
      </Box>
    )
}
export default ItemList;