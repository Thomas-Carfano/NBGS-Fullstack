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
      

    return (
        <>

        <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50vh',
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