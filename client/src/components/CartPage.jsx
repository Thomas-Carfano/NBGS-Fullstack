import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';

const CartPage = ({cartItems}) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartURL, setCartURL] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

    //USED FOR LOCAL TESTING TO SAVE MONEY ON API CALLS >>>
    useEffect(() => {
      const setURL = () => {
        if(window.location.href === "http://localhost:3030/cart"){
          setCartURL("/storeDB/cart");
        } else {
          setCartURL("https://6o0vhf727a.execute-api.us-west-2.amazonaws.com/PROD/store/items/cart");
        }
      }
      setURL();
      }, []);
    //<<<<<<

    useEffect(() => {
      const fetchItems = async () => {
          try {
              const response = await fetch(cartURL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: cartItems }) 
              });
              if (response.ok) {
                  const data = await response.json();
                  console.log('Items Succesfully Retrived From Server');
                  setCartProducts(data);
                  getCartTotal(data);
              } else {
                  console.error("Error Getting Items");
              }
          } catch (error) {
              console.error("Error....", error);
          }
      }
        fetchItems();
  }, [cartItems, cartURL]);

  const getCartTotal = (cartProducts) => {
    let num = 0;
      for(let i = 0; i < cartProducts.length; i++){
        num += Number(cartProducts[i].price);
        setCartTotal(num);
      }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cartProducts.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <>
            <Card sx={{ maxWidth: 345, mt: 5 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={cartProducts[index]["image_url"]}
              title={cartProducts[index].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {cartProducts[index].name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
              {cartProducts[index].price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {cartProducts[index]["item_description"]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" >Remove From Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </>
          </Grid>
        ))}
      </Grid>
    </Box>
      
      <h1 id='cartTotal'>Cart Total: {`${cartTotal}`}</h1>
      {!cartTotal ? null : <h1 id='cartTotal'>Cart Total1: {`${cartTotal}`}</h1>}
    </>
  );
};

export default CartPage;