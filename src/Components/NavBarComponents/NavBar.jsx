import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import { ReactComponent as Car } from './icon.svg'
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function SearchAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    
    <Box sx={{ flexGrow: 1, marginBottom:5 }}>
      <AppBar position="static">
        <Toolbar>
        <Icon
        fontSize="large"
        >
  <Car />
</Icon>
<Link to={`/`} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            noWrap
            
            sx={{ marginLeft:2, marginRight:5, color: "white"}}
          >
            
                 DocaHard
               
          </Typography>
          </Link>



          <Button
          color="inherit"
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      Categorias
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`/category/procesador`} style={{ textDecoration: 'none' }} > <MenuItem >  Procesadores  </MenuItem></Link>
        <Link to={`/category/ram`} style={{ textDecoration: 'none'}} > <MenuItem >  Memorias RAM  </MenuItem></Link>
        <Link to={`/category/almacenamiento`} style={{ textDecoration: 'none' }} > <MenuItem >  Almacenamiento  </MenuItem></Link>
      </Menu>

<Typography
           component="div"
           sx={{ marginLeft:2,flexGrow: 1, display: { xs: 'none', sm: 'inline' } }}
          >
                 
          </Typography>
          <Link to={`/cart`} style={{ textDecoration: 'none', color: "white" }} ><CartWidget/></Link>

         
        </Toolbar>
       
      </AppBar>
    </Box>
  );
}
