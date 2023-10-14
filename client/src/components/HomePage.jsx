import '../App.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const HomePage = () => {
  const storeHours = [
    "9:30am - 6:30pm",
    "9:30am - 6:30pm",
    "9:30am - 6:30pm",
    "9:30am - 6:30pm",
    "9:30am - 6:30pm",
    "9:30am - 6:30pm",
    "9:30am - 6:30pm",
    "10:00am - 5:00pm",
  ]

  const storeHoursToday = () => {
    const d = new Date();
    let day = d.getDay();
    console.log(day)
    for(let i = 0; i < storeHours.length; i++){
      if(day === i){
        console.log(storeHours[i])
        return (storeHours[i])
      }
    }

  }


  return (
    <>
    <NavBar/>
    <h2>Store Hours: {storeHoursToday()}</h2>
    <Link to="tel:9492501900" className='contactInfo'><h2>Phone Number: (949) 250-1900</h2></Link>
    <Link to="mailto:nbgolshop@att.net" className='contactInfo'> <h2>Email: NBGolfShop@att.net</h2></Link>
    <Footer/>
    </>
  )
}

export default HomePage