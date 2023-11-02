import './App.css'
import HomePage from './components/HomePage'
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUp from './components/SignupPage';
import LocationPage from './components/LocationPage';
import AboutPage from './components/AboutPage';
import StorePage from './components/Store';
import TestPage from './components/TestPage';


const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/location" element={<LocationPage/>}/>
      <Route path="/store" element={<StorePage/>}/>
      {/* <Route path="/test" element={<TestPage/>}/> */}

    </Routes>
    </>
  )
}

export default App
