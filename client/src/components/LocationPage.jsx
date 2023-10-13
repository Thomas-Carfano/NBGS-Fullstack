import '../App.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import Footer from './Footer';

const AnyReactComponent = ({ text }) => {
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
    <Link to='/' className='title'><h1>Newport Beach Golf Shop </h1></Link>
    <NavBar/>

    <div style={{ height: '75vh', width: '75%', marginLeft: '10%', marginTop: '2%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDLqZLDoNPwSYZ9yRnNMfih8u1S-vIENTs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={33.6593248}
          lng={-117.8809383}
          text="Newport Beach Golf Shop"
        />
      </GoogleMapReact>
    </div>
    <Footer/>
    </>
  )
}

export default LocationPage