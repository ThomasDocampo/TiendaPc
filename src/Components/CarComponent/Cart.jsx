import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { UseCart } from '../contexts/CartProvider';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export default function Cart() {
 
    const {addedProducts,removeItem,getTotalPrice } = UseCart();
  
  if(addedProducts.length > 0){
    return (
        <Box sx={{display: "flex", justifyContent: "center" }}>
      <List dense sx={{ maxWidth: 700,  bgcolor: 'background.paper', boxShadow: 1 }}>
        {addedProducts.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value.item.Id}
             
              disablePadding
            >
                <ListItemAvatar sx={{marginLeft: 1}}>
                  <Avatar
                   sx={{ width: 70, height: 70 }}
                    src={value.item.Image}
                  />
                </ListItemAvatar>

                
                <Typography
           component="h3"
          sx={{width:800, textAlign : "center", fontSize: 20}}
          >{value.item.Brand} {value.item.Model}
                 
          </Typography>
          <Typography
           component="h3"
           color="text.secondary"
          sx={{width:150, textAlign : "center", fontSize: 18}}
          >{value.quantity}
                 
          </Typography>

          <Typography
           component="h3"
           color="inherit"
          sx={{width:250, textAlign : "center", fontSize: 18}}
          > USD${value.item.Price}
                 
          </Typography>
                <IconButton color = "inherit" onClick={() => removeItem(value.item.Id)} >
                <DeleteIcon ></DeleteIcon>
               </IconButton>  
            </ListItem>
          );
        })}
        <Box sx={{display: "flex", marginTop: 3, justifyContent: "flex-end"}}>
        <Typography >
Precio total: USD $
      </Typography>
             <Typography sx = {{marginRight: 3}}>
{getTotalPrice()}
      </Typography>
      </Box>
      </List>

 </Box>
     
    );

  }else{

    return(
        <Box sx= {{ display : "flex", flexDirection: "column", justifyContent: "center"}}>
         
             <Typography color="text.secondary" sx = {{ fontSize:22, textAlign: "center" }}
             
             > ¡Tu carrito esta vacío!</Typography>
             <Button  sx = {{maxWidth: 500, fontSize:15, marginRight: "auto", marginLeft: "auto"}}variant="contained"
             
             >   <Link to={`/`} style={{ textDecoration: 'none', color: "white" }} >
                 IR AL LISTADO DE PRODUCTOS</Link>
                 </Button>
        </Box>
    )
  }
  }
  