import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useEffect} from 'react'

const AdminPage = () => {
  const [gender, setGender] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemCost, setItemCost] = useState(0);
  const [itemDesc, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemBrand, setItemBrand] = useState("");
  const [storeProducts, setStoreProducts] = useState([]);
  const [adminURLCreate, setAdminURLCreate] = useState("");
  const [adminURLFrind, setAdminURLFrind] = useState("");

  const selectGender = (event) => {
    setGender(event.target.value);
  };

      //USED FOR LOCAL TESTING TO SAVE MONEY ON API CALLS >>>
      useEffect(() => {
        const setURL = () => {
          if(window.location.href === "http://localhost:3030/admin"){
            setAdminURLCreate("/storeDB/create")
            setAdminURLFrind("/storeDB/items")
          } else {
            setAdminURLCreate("https://6o0vhf727a.execute-api.us-west-2.amazonaws.com/PROD/store/items/create")
            setAdminURLFrind("https://6o0vhf727a.execute-api.us-west-2.amazonaws.com/PROD/store/items")
          }
        }
        setURL()
        }, [])
      //<<<<<<

    const createItem = async () => {
        try {
            const response = await fetch(adminURLCreate, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: itemName, price: itemPrice, cost: itemCost, gender: gender, "image_url": itemImage, brand: itemBrand, "item_description": itemDesc}),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error("Error Creating Item");
            }
        } catch (error) {
            console.error("Error....", error);
        }
    }
      const fetchItems = async () => {
          try {
              const response = await fetch(adminURLFrind, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              if (response.ok) {
                  const data = await response.json();
                  console.log(data);
                  setStoreProducts(data);
              } else {
                  console.error("Error Getting Items");
              }
          } catch (error) {
              console.error("Error....", error);
          }
      }

  return (
    <>
    <h2>Admin Page, Create new item, upload item, edit items</h2>
    <Button variant="contained">Upload Item(s)</Button>
   <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Item Name" variant="standard" onChange={(event) => setItemName(event.target.value)} />
      <br/>
      <TextField id="standard-basic" label="Price" variant="standard" onChange={(event) => setItemPrice(event.target.value)}/>
      <TextField id="standard-basic" label="Cost" variant="standard" onChange={(event) => setItemCost(event.target.value)}/>
      <br/>
      <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={(event) => setItemDescription(event.target.value)}
        />
      <br/>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Age"
          onChange={selectGender}
        >
          <MenuItem value={true}>Male</MenuItem>
          <MenuItem value={false}>Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
    <TextField id="standard-basic" label="Image URL" variant="standard" onChange={(event) => setItemImage(event.target.value)}/>
    <br/>
    <TextField id="standard-basic" label="Brand" variant="standard" onChange={(event) => setItemBrand(event.target.value)}/>
    <br/>
    <Button variant="contained" onClick={createItem}>Create New Item</Button>
    </Box>

<h1>Edit Store Items</h1>
<Button variant="contained" onClick={fetchItems}>Get Items</Button>

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
              <Button size="small">Edit Item</Button>
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

export default AdminPage;