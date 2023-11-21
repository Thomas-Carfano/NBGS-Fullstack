import '../App.css'
import GoogleMapReact from 'google-map-react';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import Footer from './Footer';
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
    zoom: 15
  };


  return (
    <>
    <h2> Golf Shop Address: 3100 Irvine Ave. Newport Beach, CA, 92600</h2>
      <Link to="https://www.google.com/maps/place/Steve+Carfano's+Newport+Beach+Golf+Shop/@33.6592756,-117.8809357,15z/data=!4m6!3m5!1s0x80dcdfab78b3b055:0xb70abddf8d02c58f!8m2!3d33.6592756!4d-117.8809357!16s%2Fg%2F1hf5c32rz?entry=ttu">
        <Fab variant="extended" sx={{ mt: 3, mr: 3 }}>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
        </Fab>
      </Link>
    <div style={{ height: '75vh', width: '75%', marginLeft: '12%', marginTop: '2%' }}>
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
    </>
  )
}

export default LocationPage