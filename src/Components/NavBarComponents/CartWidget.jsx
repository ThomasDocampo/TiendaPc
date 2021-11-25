import  { Component} from 'react'

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default class CartWidget extends Component {


    render() {
        return (
            <div>
            <IconButton
                
              color="inherit"
           
              
            >
       <Badge badgeContent={10} color="error">
                <ShoppingCartIcon 
                fontSize="large"/>
              </Badge>
              
            </IconButton>
            
            </div>
        )
    }
}

