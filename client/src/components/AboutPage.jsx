import '../App.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const AboutPage = () => {

  return (
    <>
    <Link to='/' className='title'><h1>Newport Beach Golf Shop </h1></Link>
    <NavBar/>
    <Footer/>
    </>
  )
}

export default AboutPage