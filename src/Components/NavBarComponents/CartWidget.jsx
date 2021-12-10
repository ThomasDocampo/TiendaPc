

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UseCart } from '../contexts/CartProvider';


  const CartWidget = () => {
 
      const {itemSumatory}= UseCart();
      if(itemSumatory() > 0){
        return (
            <div>
            <IconButton color="inherit" >
       <Badge badgeContent={itemSumatory()} color="error">
                <ShoppingCartIcon 
                fontSize="large"/>
              </Badge>
              
            </IconButton>
            
            </div>
        )}else{return(
         null   )}
    }

export default CartWidget;
