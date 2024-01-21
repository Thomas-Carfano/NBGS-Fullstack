import '../App.css';
import GoogleMapReact from 'google-map-react';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

const GoogleMapGolf = ({ text }) => {
    return(
    <> 
      <GolfCourseIcon/>
      <h2>{text}</h2>
    </>
  )};
  
  
  
  const LocationPage = () => {
    const defaultProps = {
      center: {
          lat: 33.6592756,
          lng: -117.8809357
      },
      zoom: 15,
    };
  
  
    return (
      <>
                <div style={{ height: '30vh', width: '30%', marginLeft: '60%', marginTop: '2%' }}>
                <p>
                  We invite you to experience our incredible selection
                  of brand name golf apparel, equipment and accessories
                  at superstore pricing with quality services you can only
                  find in a family operated business. We are a discount golf
                  store with the look and feel of a private club pro shop. We
                  have the lowest prices on top name brand golf equipment, golf
                  balls, golf shoes and golf clubs, Guaranteed!
                </p>
                  <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyDLqZLDoNPwSYZ9yRnNMfih8u1S-vIENTs" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  id="google-map"
                  >
                      <GoogleMapGolf
                          lat={33.6593248}
                          lng={-117.8809383}
                          text="Newport Beach Golf Shop"
                      />
                  </GoogleMapReact>
                </div>

            <section style={{marginLeft: '60%'}}>
            <Link to="https://www.google.com/maps/place/Steve+Carfano's+Newport+Beach+Golf+Shop/@33.6592756,-117.8809357,15z/data=!4m6!3m5!1s0x80dcdfab78b3b055:0xb70abddf8d02c58f!8m2!3d33.6592756!4d-117.8809357!16s%2Fg%2F1hf5c32rz?entry=ttu">
                <Fab variant="extended" sx={{ mt: 3, mr: 3 }}>
                <NavigationIcon sx={{ mr: 1 }} /> Navigate
                </Fab>
            </Link>
            </section>
      </>
    )
  }

const HomePage = () => {

  const googleMapsAddress = "https://www.google.com/maps/place/Steve+Carfano's+Newport+Beach+Golf+Shop/@33.6592756,-117.8809357,15z/data=!4m6!3m5!1s0x80dcdfab78b3b055:0xb70abddf8d02c58f!8m2!3d33.6592756!4d-117.8809357!16s%2Fg%2F1hf5c32rz?entry=ttu"
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
    <LocationPage/>
    <h2 className='contactInfo'>Store Hours: {storeHoursToday()}</h2>
    <Link to="tel:9492501900" className='contactInfo'><h2>Phone Number: (949) 250-1900</h2></Link>
    <Link to="mailto:nbgolshop@att.net" className='contactInfo'> <h2>Email: NBGolfShop@att.net</h2></Link>
    <Link to={`${googleMapsAddress}`} className='contactInfo'> <h2>Address: 3100 Irvine Ave. Newport Beach</h2></Link>
    </>
  );
};

export default HomePage;