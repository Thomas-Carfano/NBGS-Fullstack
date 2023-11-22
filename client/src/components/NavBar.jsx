import '../App.css';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import pic from '../pictures/nbgs-logo.jpeg';

const NavBar = () => {
    console.log("NavBar");

    const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ['Roboto']},
});

    return (
        <>
        <Link to='/' className='title'>
          <h1 id="main-title">Newport Beach Golf Shop
          <img id="main-logo" src={pic}/>
          </h1>
        </Link>
      <div id="button-nav">
        <ThemeProvider theme={theme}>
            <Button variant="contained" sx={{ mr: 5 }} href='/'>Home Page</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/about'>About Us</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/location'>Location</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/store'>Store</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/login'>Login</Button>
            {/* <Button variant="contained" sx={{ mr: 5 }} href='/test'>Test</Button> */}
        </ThemeProvider>
        </div>
        </>
    )
}

export default NavBar