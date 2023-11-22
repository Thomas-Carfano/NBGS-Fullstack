import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const storeProducts = [
  {
      name: "ProV1",
      price: "See Cart",
      description: "Pro V1 is the optimal premium performance choice for most players...",
      image: "https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw7086bc18/T2028S_01.png?sw=650&sh=650&sm=fit&sfrm=png"
  },
  {
      name: "ProV1x",
      price: 'See Cart',
      description: "Pro V1x is the optimal premium performance choice for players looking for distance...",
      image: "https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwe5458002/T2048S_01.png?sw=650&sh=650&sm=fit&sfrm=png"
  },
  {
    name: "Chrome Soft",
    price: 49.99,
    description: "hrome Soft is better for everyone, from amateurs to major winners.",
    image: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_"
},
{
    name: "Chrome Soft X",
    price: 59.99,
    description: "Chrome Soft is better for everyone, from amateurs to major winners.",
    image: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft-x/balls-2022-chrome-soft-x_2___1.png?sw=850&sfrm=png&yocs=P_S_"
},
]

const TestPage = () => {
  console.log("test page")
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {storeProducts.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <>
            <Card sx={{ maxWidth: 345, mt: 5 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={storeProducts[index].image}
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
              {storeProducts[index].description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add To Cart</Button>
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
}

export default TestPage