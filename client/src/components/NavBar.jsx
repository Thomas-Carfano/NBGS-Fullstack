import '../App.css'
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const NavBar = () => {
    console.log("NavBar");

    const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

    return (
        <>
        <Link to='/' className='title'>
          <h1 id="main-title">
          Newport Beach Golf Shop
          </h1>
          {/*<img id="main-logo" src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/302421315_520362946755898_3888582315608612355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BaMMbs7elekAX8W9DTu&_nc_ht=scontent-lax3-1.xx&oh=00_AfA0yNMJowYXETsD9yo45O5i0POTk0iE1A4hR3H548Uigw&oe=652FD8A4"/> */}
        </Link>

        <ThemeProvider theme={theme}>
            <Button variant="contained" sx={{ mr: 5 }} href='/'>Home Page</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/about'>About Us</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/location'>Location</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/store'>Store</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/login'>Login</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/test'>Test</Button>

        </ThemeProvider>
        </>
    )
}

export default NavBar