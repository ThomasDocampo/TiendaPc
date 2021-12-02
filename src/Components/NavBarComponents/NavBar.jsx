import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import { ReactComponent as Car } from './icon.svg'
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './CartWidget';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



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

          <Search>
          
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
       
      </AppBar>
    </Box>
  );
}
