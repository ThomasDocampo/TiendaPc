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
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {  useState } from "react";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { getFirestore, collection, getDocs, query, where, getDoc, doc, addDoc, setDoc} from "firebase/firestore";
import { getDialogActionsUtilityClass } from '@mui/material';
export default function Cart() {
 
    const {addedProducts,removeItem,getTotalPrice, clear } = UseCart();
  const [formNombre, setFormNombre] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formPhone, setForPhone] = useState("");
  const [confirmation, setConfirmation] = React.useState(true);
  const [orderId, setOrderId] = useState();
 

  const handleNombre = (event) => {setFormNombre (event.target.value) }
  const handleMail = (event) => {setFormMail (event.target.value) }
  const handlePhone = (event) => {setForPhone (event.target.value) }
  const db = getFirestore();
const addOrderToDb = () =>{


var date = new Date();
 
const orderCollection = collection(db, "Orders")

 const data = 
 {
  buyer:
  {
  name: formNombre,
  phone: formPhone,
  email: formMail
  },
  date: date,
  items:addedProducts,
 total: getTotalPrice()
  } 
 addDoc(orderCollection, data).then((data)=>{
  setOrderId(data.id)
  })

}

  
  const handleFormSubmit = () => {
    addOrderToDb();
  
    clear();
    setConfirmation(true);
   
  }

  if(addedProducts.length > 0){
    return (
      <>
      <Box sx={{display: "flex", justifyContent: "center" }}>
        <Box sx={{display: "flex", justifyContent: "center", marginRight: 10, flexDirection: "column"}}>
      <List dense sx={{ maxWidth: 600,   bgcolor: 'background.paper', boxShadow: 1 }}>
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
        <Box sx={{display: "flex", marginTop: 3, justifyContent: "flex-end" }}>
        <Typography >
Precio total: USD $
      </Typography>
             <Typography sx = {{marginRight: 3}}>
{getTotalPrice()}
      </Typography>
      </Box>
      </List>
      
      </Box>
      <Box sx = {{ marginRight : 10}}>
      <FormControl sx = {{ position: "fixed"}}>

     
<TextField
          id="outlined-textarea"
          label="Nombre y Apellido"
          value = {formNombre}
          onChange = {handleNombre}
          sx={{ margin: 2 }}
     
        />
        <TextField
        sx={{ margin: 2 }}
          id="outlined-textarea"
          label="Mail"
          value = {formMail}
          onChange = {handleMail}
     
        />
        <TextField
         sx={{ margin: 2 }}
          id="outlined-textarea"
          value = {formPhone}
          label="Celular"
        
          onChange = {handlePhone}
         
        />
 <Button 
         onClick = {handleFormSubmit}
         >enviar</Button>  
</FormControl>
</Box>
 </Box>


   

    
 </>
     
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
                 <Collapse in={confirmation} sx={{marginTop: 10, maxWidth: 800, marginRight: "auto", marginLeft: "auto"}}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setConfirmation(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         Su orden fue ejecutada con exito, el numero de orden es {orderId}
        </Alert>
      </Collapse>  
     
        </Box>
         
    )
  }



  
  }
  