import '../App.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const HomePage = () => {

  return (
    <>
    <Link to='/' className='title'><h1>Newport Beach Golf Shop </h1></Link>
    <NavBar/>
    <h2>Phone Number: (949) 350-1900</h2>
    <h2>Email Address: nbgolfshop@att.net</h2>

    <h2>Store Hours</h2>
    <h4>Monday: 9:30 - 6:30</h4>
    <h4>Tuesday: 9:30 - 6:30</h4>
    <h4>Wednesday: 9:30 - 6:30</h4>
    <h4>Thursday: 9:30 - 6:30</h4>
    <h4>Friday: 9:30 - 6:30</h4>
    <h4>Saturday: 9:30 - 6:30</h4>
    <h4>Sunday: 9:30 - 6:30</h4>
    <Footer/>
    </>
  )
}

export default HomePage