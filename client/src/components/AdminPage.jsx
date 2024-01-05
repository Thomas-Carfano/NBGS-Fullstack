import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [gender, setGender] = useState(Boolean);
  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState(0)
  const [itemCost, setItemCost] = useState(0)
  const [itemDesc, setItemDescription] = useState("")
  const [itemImage, setItemImage] = useState("")
  const [itemBrand, setItemBrand] = useState("")


  const selectGender = (event) => {
    setGender(event.target.value);
  };

    const fetchItems = async () => {
        try {
            const response = await fetch(`https://6o0vhf727a.execute-api.us-west-2.amazonaws.com/PROD/store/items/create`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: itemName, price: itemPrice, cost: itemCost, gender: gender, imageURL: itemImage, brand: itemBrand, itemDesc: itemDesc}),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
            } else {
                console.error("Error fetching Player!");
            }
        } catch (error) {
            console.error("Error....", error);
        }
    }

  return (
    <>
    <h2>Create A New Item</h2>
   <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Item Name" variant="standard" onChange={setItemName} />
      <br/>
      <TextField id="standard-basic" label="Price" variant="standard" onChange={setItemPrice}/>
      <TextField id="standard-basic" label="Cost" variant="standard" onChange={setItemCost}/>
      <br/>
      <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={setItemDescription}
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
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
    <TextField id="standard-basic" label="Image URL" variant="standard" onChange={setItemImage}/>
    <br/>
    <TextField id="standard-basic" label="Brand" variant="standard" onChange={setItemBrand}/>
    <br/>
    <Button variant="contained" onClick={fetchItems}>Create New Item</Button>

    </Box>
    </>
  );
};

export default AdminPage;