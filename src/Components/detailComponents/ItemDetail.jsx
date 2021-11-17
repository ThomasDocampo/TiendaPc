
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
const ItemDetail = ({item}) => {
console.log(item.brand);
    return(
        
        <Card sx={{ maxWidth: 500 , marginRight:"auto", marginLeft:"auto"}}>
        <CardMedia
          component="img"
          height="300"
          image={item.Image}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h4" fontSize= "8" component="div">
           {item.Brand}  {item.Model} 
          </Typography>
          <Typography variant="h6" >
           {item.Descrip}
          </Typography>
        </CardContent>
        <CardActions >
          <Box sx= {{marginLeft:2, marginRight:2,display: "flex", gap: 10}} >
        <Button variant="contained" size= "large" endIcon={<ShoppingCartIcon />}>
  USD$ {item.Price}
</Button>
<Typography variant="h5" color="text.secondary"  >
           stock: {item.Stock}
          </Typography>

          </Box>
        </CardActions>
      </Card>
    );
}
export default ItemDetail;