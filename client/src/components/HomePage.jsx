import '../App.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';

const HomePage = () => {

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
    <Link to='/' className='title'><h1>Newport Beach Golf Shop </h1></Link>
    <NavBar/>
    <Link to="https://www.facebook.com/SteveCarfanosNewportBeachGolfShop/"><FacebookIcon/></Link>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  )
}

export default HomePage