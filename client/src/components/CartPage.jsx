import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CartPage = ({cartItems}) => {
  console.log(cartItems)

  const storeProducts = {
    name: "Chrome Soft X",
    price: 49.99,
    cost: 5,
    gender: true,
    image_url: "https://cdn-fsly.yottaa.net/58f0c36232f01c6abd17a924/www.callawaygolf.com/v~4b.64/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1704746308659/sits/balls-2022-chrome-soft-x/balls-2022-chrome-soft-x_2___1.png?sw=800&sfrm=png&yocs=P_S_",
    brand: "Callaway",
    item_description: "Chrome Soft is better for everyone, from amateurs to major winners.",
  }

  return (
    <>
      <h1>Your Cart</h1>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {storeProducts.map((_, index) => (

          <Grid item xs={2} sm={4} md={4} key={index}>
            <>
            <Card sx={{ maxWidth: 345, mt: 5 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={storeProducts[index]["image_url"]}
              title={storeProducts[index].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {storeProducts[index].name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
              {storeProducts[index].price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {storeProducts[index]["item_description"]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" >Add To Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </>
          </Grid>
        ))}
      </Grid>
    </Box>
      
    </>
  );
};

export default CartPage;