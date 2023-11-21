import '../App.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const HomePage = () => {
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
    <h2 className='contactInfo'>Store Hours: {storeHoursToday()}</h2>
    <Link to="tel:9492501900" className='contactInfo'><h2>Phone Number: (949) 250-1900</h2></Link>
    <Link to="mailto:nbgolshop@att.net" className='contactInfo'> <h2>Email: NBGolfShop@att.net</h2></Link>
    <Link to="https://www.google.com/maps/place/Steve+Carfano's+Newport+Beach+Golf+Shop/@33.6592756,-117.8809357,15z/data=!4m6!3m5!1s0x80dcdfab78b3b055:0xb70abddf8d02c58f!8m2!3d33.6592756!4d-117.8809357!16s%2Fg%2F1hf5c32rz?entry=ttu" className='contactInfo'> <h2>Address: 3100 Irvine Ave. Newport Beach</h2></Link>
    <br/>
    <br/>
    </>
  );
};

export default HomePage;