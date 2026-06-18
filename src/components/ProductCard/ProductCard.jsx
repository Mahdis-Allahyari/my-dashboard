import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useCartStore } from "../../store/cartStore"


function ProductCard({ product }) {
  const addToCart = useCartStore(state => state.addToCart)
  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'box-shadow 0.2s',
      '&:hover': {
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{
objectFit:'contain',
padding:'16px',
backgroundColor:'#f9f9f9',
height:'200px',
width:'100%'
        }}/>
        <CardContent sx={{flexGrow: 1}}>
          <Typography 
          variant = "body2"
          color="text.secondary"
          sx={{
            display:'-webkit-box',
            WebkitLineClamp : 2,
            WebkitBoxOrient :'vertical',
            overflow:'hidden',
            marginBottom:'8px'
          }}>
            {product.title}
          </Typography>
          <Typography variant ="h6" color="primary" fontWeight = "bold">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions sx={{padding : '16px'}}>
          <Button
          variant="contained"
          fullWidth
          onClick={()=> addToCart(product)}>
            Add to Cart
          </Button>
        </CardActions>
        
    </Card>
  )
}

export default ProductCard