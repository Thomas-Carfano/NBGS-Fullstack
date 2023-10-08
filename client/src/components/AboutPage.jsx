import '../App.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const AboutPage = () => {

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
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  )
}

export default AboutPage