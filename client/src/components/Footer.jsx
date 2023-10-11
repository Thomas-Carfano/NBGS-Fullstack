import '../App.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import Pic from '../pictures/yelp_favicon.png'

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
      

    return (
        <>
        <br/>
        <Link to="https://www.facebook.com/SteveCarfanosNewportBeachGolfShop/"><FacebookIcon sx={{ ml: 85, mt: 5 }}/></Link>
        <Link to="https://www.yelp.com/biz/steve-carfanos-newport-beach-golf-shop-store-newport-beach-2"><img src={`${Pic}`}/></Link>
        <Copyright sx={{ mt: 8, mb: 4 }}/>
        </>
    )
}

export default Footer