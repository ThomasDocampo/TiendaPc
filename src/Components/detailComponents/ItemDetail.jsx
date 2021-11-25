
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, shadows} from '@mui/system';
const ItemDetail = ({item}) => {

    return(
        
        <Card sx={{ maxWidth: 500 , marginRight:"auto", marginLeft:"auto", boxShadow:3}}>
        <CardMedia
          component="img"
          sx={{ width: 200, margin: "auto"}}
          image={item.Image}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h3" sx={{ fontSize: 22}} component="div">
           {item.Brand}  {item.Model} 
          </Typography>
          <Typography variant="h4" sx={{ fontSize: 16}} >
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