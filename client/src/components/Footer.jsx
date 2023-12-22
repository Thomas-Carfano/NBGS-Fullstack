import '../App.css';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import Pic from '../pictures/yelp_favicon.png';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme ,ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { green } from '@mui/material/colors';

const Footer = () => {
    console.log("Footer");

    const Copyright = (props) => {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Thomas-Carfano/NBGS-Fullstack">
              Newport Beach Golf Shop
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

      const defaultTheme = createTheme({
        palette: {
          primary: {
            main: green[500],
          },
        },
      });

      const storeHours = [
        "10:00am - 5:00pm",
        "9:30am - 6:30pm",
        "9:30am - 6:30pm",
        "9:30am - 6:30pm",
        "9:30am - 6:30pm",
        "9:30am - 6:30pm",
        "9:30am - 6:30pm",
        "9:30am - 6:30pm",
      ];
      
      const storeHoursToday = () => {
        const d = new Date();
        let day = d.getDay();
        for(let i = 0; i < storeHours.length; i++){
          if(day === i){
            return (storeHours[i]);
          }
        }
      };

    return (
        <>

        <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50vh',
          marginTop: 20
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <p className='storeHours'><b>Store Hours Today:</b> {storeHoursToday()}</p>
          <Link to="tel:9492501900" className='contactInfo'><p><b>Phone Number:</b> (949) 250-1900</p></Link>
          <Link to="mailto:nbgolshop@att.net" className='contactInfo'> <p><b>Email:</b> NBGolfShop@att.net</p></Link>
          <Link to="https://www.google.com/maps/place/Steve+Carfano's+Newport+Beach+Golf+Shop/@33.6592756,-117.8809357,15z/data=!4m6!3m5!1s0x80dcdfab78b3b055:0xb70abddf8d02c58f!8m2!3d33.6592756!4d-117.8809357!16s%2Fg%2F1hf5c32rz?entry=ttu" className='contactInfo'> <p><b>Address:</b> 3100 Irvine Ave. Newport Beach</p></Link>
          <Container maxWidth="sm">
            <Typography variant="body1">
            <Link to="https://www.facebook.com/SteveCarfanosNewportBeachGolfShop/"><FacebookIcon sx={{ ml: 32, mt: 5 }}/></Link>
            <Link to="https://www.yelp.com/biz/steve-carfanos-newport-beach-golf-shop-store-newport-beach-2"><img id="yelp-logo" src={`${Pic}`}/></Link>
            </Typography>
            <Copyright/>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
        </>
    )
}

export default Footer