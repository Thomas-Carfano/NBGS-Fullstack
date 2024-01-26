import '../App.css';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import pic from '../pictures/nbgs-logo.jpeg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = ({ token }) => {

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
    <Link to='/' className='title'><h1 id="main-title">Newport Beach Golf Shop<img id="main-logo" src={pic}/></h1></Link>
    <nav id="button-nav">
      <ThemeProvider theme={theme} sx={{ fontFamily: 'Roboto'}}>
          <Link to='/'><Button variant="contained" sx={{ mr: 5 }}> Home Page</Button></Link>
          <Link to='/store'><Button variant="contained" sx={{ mr: 5 }} >Store</Button></Link>
          {token ? null : <Link to='/login'><Button variant="contained" sx={{ mr: 5 }}>Login</Button></Link>}
          {!token ? null : <Link to='/admin'><Button variant="contained" sx={{ mr: 5 }}>Admin</Button></Link>}
          {/* <Button variant="contained" sx={{ mr: 5 }} href='/test'>Test</Button> */}
      </ThemeProvider>
      {!token ? null : <Link to="/cart"><ShoppingCartIcon id="shopping-cart-icon" sx={{ml: 108}}/></Link>}
    </nav>
  </>
  )
}

export default NavBar;