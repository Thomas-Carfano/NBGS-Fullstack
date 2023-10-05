import '../App.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const AboutPage = () => {

  return (
    <>
    <Link to='/' className='title'><h1>Newport Beach Golf Shop </h1></Link>
    <NavBar/>
    <a><img src="https://lh3.googleusercontent.com/p/AF1QipMivb8_uPd3g6I78px0mGvU7FP2-NwM-hQk6YlH=s1360-w1360-h1020"></img></a>
    </>
  )
}

export default AboutPage