import '../App.css'
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
        <ThemeProvider theme={theme}>
            <Button variant="contained" sx={{ mr: 5 }} href='/'>Home Page</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/about'>About Us</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/location'>Location</Button>
            <Button variant="contained" sx={{ mr: 5 }} href='/login'>Login</Button>
        </ThemeProvider>
        </>
    )
}

export default NavBar