import '../App.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';

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
        <FacebookIcon sx={{ mr: 20, mt: 5 }}/>
        <Copyright sx={{ mt: 8, mb: 4 }}/>
        </>
    )
}

export default Footer